import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Experience } from '../../models/experience.model';
import { GenericService } from '../../services/generic.service';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience?: Experience[];
  stepperArr: any[] = [];
  @Input() isMobileDevice = false;
  isDataLoaded = false;

  constructor(private _generic: GenericService) {}

  ngOnInit(): void {
    this._generic
      .getAll('/experience')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.experience = data.map((item: Experience) => {
          let obj: any = {};
          obj.company = item.company;
          obj.role = item.role;
          obj.from = moment(item.from).format('MMM YYYY');
          let startYear = moment(item.from).format('YYYY');
          let endYear;
          if (item.to == 'Present') {
            endYear = 'Present';
            obj.to = moment(new Date()).format('MMM YYYY');
          } else {
            endYear = moment(item.to).format('YYYY');
            obj.to = moment(item.to).format('MMM YYYY');
          }

          let startDate = moment(obj.from, 'MMM YYYY');
          let endDate = moment(obj.to, 'MMM YYYY');

          let years = endDate.diff(startDate, 'year');
          startDate.add(years, 'years');

          let months = endDate.diff(startDate, 'months');
          startDate.add(months, 'months');

          obj.difference =
            years > 0 ? `${years} Years ${months} Months` : `${months} Months`;

          obj.tenure =
            startYear == endYear ? startYear : `${startYear} - ${endYear}`;
          return obj;
        });
        this.isDataLoaded = true;
        this.makeStepperArr();
      });
  }

  makeStepperArr() {
    if (this.experience && this.experience.length > 0) {
      this.stepperArr = this.experience.map((item: Experience, index) => {
        let obj: any = {};
        obj.heading = item.company;
        obj.sub_heading = item.role;
        obj.description = item.difference;
        obj.pointer = this.isMobileDevice ? `${index + 1}` : item.tenure;
        return obj;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Experience } from '../../models/experience.model';
import { GenericService } from '../../services/generic.service';
import * as moment from 'moment';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ExperienceComponent implements OnInit {
  experience?: Experience[];
  stepperArr: any[] = [];

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
          // console.log(item);

          let obj: any = {};
          obj.company = item.company;
          obj.from = moment(item.from).format('MMM YYYY');
          if (item.to == 'Present') {
            obj.to = moment(new Date()).format('MMM YYYY');
          } else {
            obj.to = moment(item.to).format('MMM YYYY');
          }
          obj.difference = moment([item.to]).diff(moment([item.from]), 'years');
          // console.log(obj);

          return obj;
        });
        this.makeStepperArr();
      });
  }

  makeStepperArr() {
    if (this.experience && this.experience.length > 0) {
      this.stepperArr = this.experience.map((item: Experience) => {
        let obj: any = {};
        obj.heading = item.company;
        obj.sub_heading = `${item.from} - ${item.to}`;
        return obj;
      });
    }
  }
}

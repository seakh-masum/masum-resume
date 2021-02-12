import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Experience } from '../../models/experience.model';
import { GenericService } from '../../services/generic.service';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience?: Experience[];


  constructor(private _generic: GenericService) { }

  ngOnInit(): void {
    this._generic.getAll('/experience').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.experience = data.map((item: Experience)=> {
        let obj: any = {};
        obj.company = item.company;
        obj.from = moment(item.from).format('MMMM YYYY');
        if(item.to=='Present') {
          obj.to = moment(new Date()).format('MMMM YYYY');
        } else {
          obj.to = moment(item.to).format('MMMM YYYY');
        }
        return obj;
      });
    });
  }

}

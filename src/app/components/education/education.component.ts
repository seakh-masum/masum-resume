import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Education } from '../../models/education.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() arr: any[] = [];
  @Input() title: string = '';
  education?: Education[];

  constructor(private _generic: GenericService) { }

  ngOnInit(): void {
    this._generic.getAll('/education').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.education = data;
    });
  }

}

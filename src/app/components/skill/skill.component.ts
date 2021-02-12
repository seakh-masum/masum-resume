import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Skill } from '../../models/skill.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills?: Skill[];

  // skills = [
  //   {value: 95, icon: 'assets/img/angular.svg', color: '#b71c1c'},
  //   {value: 90, icon: 'assets/img/html.svg', color: '#ff6d00'},
  //   {value: 90, icon: 'assets/img/css.svg', color: '#039be5'},
  //   {value: 75, icon: 'assets/img/typescript.svg', color: '#1976d2'},
  //   {value: 40, icon: 'assets/img/jira.svg', color: '#2482fd'},
  //   {value: 60, icon: 'assets/img/github.svg', color: '#212121'},
  // ];

  constructor(private _generic: GenericService) { }

  ngOnInit(): void {
    this._generic.getAll('/skills').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.skills = data;
    });
  }

}

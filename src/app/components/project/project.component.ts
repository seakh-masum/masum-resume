import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects?: Project[];

  constructor(private _generic: GenericService) { }

  ngOnInit(): void {
    this._generic.getAll('/projects').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.projects = data;
    });
  }

}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { map } from 'rxjs/operators';
import { Hobbies } from '../../models/hobbies.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent implements OnInit {
  hobbies?: Hobbies[];

  constructor(
    private _generic: GenericService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this._generic
      .getAll('/hobbies')
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
        this.hobbies = data;
      });
  }

  onBackground(color: string) {
    // this.renderer.setStyle()
  }

  public getColorString(color: string) {
    // return rgba(color, 0.2);
  }
}

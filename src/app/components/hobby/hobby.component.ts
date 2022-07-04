import { Component, Input } from '@angular/core';
import { Hobbies } from '../../models/hobbies.model';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  @Input() hobbies?: Hobbies[];
  @Input() isMobileDevice: boolean = false;
  @Input() isDataLoaded = false;

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() isMobileDevice = false;
  @Input() projects?: Project[];
  @Input() isDataLoaded = false;

  constructor() {}
}

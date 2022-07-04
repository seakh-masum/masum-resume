import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent {
  @Input() imageSrc: string = '';
  @Input() percentage: any = 0;
  @Input() title: any = '';
  @Input() outerColor: string = '#dd0031';

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contacts?: Contact[];
  @Input() isDarkMode: boolean = false;
  @Input() isMobileDevice = false;
  @Input() isDataLoaded = false;

  constructor() {}
}

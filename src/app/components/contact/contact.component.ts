import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from '../../models/contact.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // contacts = [
  //   { name: 'Whatsapp', value: '+91 79803 56149', icon: 'whatsapp-1.svg', link: 'https://wa.me/+917980356149'},
  //   { name: 'Email', value: 'masum0aktar@gmail.com', icon: 'email.svg', link: 'https://mailto:masum0aktar@gmail.com'},
  //   { name: 'Skype', value: 'seakh.masum', icon: 'skype-1.svg',  link: 'https://github.com/masum21'},
  //   { name: 'LinkedIn', value: 'sk-masum-b259191b1', icon: 'linkedin-1.svg', link: 'https://www.linkedin.com/in/sk-masum-b259191b1/'},
  //   { name: 'GitHub', value: 'masum21', icon: 'github-1.svg', link: 'https://github.com/masum21'},
  // ];

  contacts?: Contact[];

  constructor(private _generic: GenericService) { }

  ngOnInit(): void {
    this._generic.getAll('/contacts').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.contacts = data;
    });
  }

}

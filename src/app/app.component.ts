import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact, Hobbies, Project, Skill, SvgColorUrl } from './models';
import { GenericService } from './services/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'masum-resume';
  isDarkMode: boolean = true;
  isMobileDevice: boolean = true;
  contacts?: Contact[];
  hobbies?: Hobbies[];
  projects?: Project[];
  skills?: Skill[];

  constructor(private _generic: GenericService) {
    this.isMobileDevice = _generic.checkDeviceTypeMobile();
    this.isDarkMode = _generic.checkDarkMode();
  }

  ngOnInit(): void {
    this.viewportIntersection();
    this.getContact();
    this.getProjects();
    this.getHobbies();
    this.getSkills();
  }

  viewportIntersection() {
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions: any = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  }

  getContact() {
    this._generic
      .getAll('/contacts')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => {
            let obj = {};
            let data = c.payload.doc.data();
            data.icon = this.isDarkMode
              ? data.icon.replace('upload', `upload/${SvgColorUrl.Dark}`)
              : data.icon.replace('upload', `upload/${SvgColorUrl.Light}`);
            obj = {
              id: c.payload.doc.id,
              ...data,
            };
            return obj;
          })
        )
      )
      .subscribe((data: any) => {
        this.contacts = data;
      });
  }

  getHobbies() {
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

  //Get Projects
  getProjects() {
    this._generic
      .getAll('/projects')
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
        this.projects = data;
      });
  }

  //Get Skills
  getSkills() {
    this._generic
      .getAll('/skills')
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
        this.skills = data;
      });
  }
}

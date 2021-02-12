import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SocialComponent } from './components/social/social.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { CardComponent } from './components/card/card.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NameComponent } from './components/name/name.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    EducationComponent,
    ExperienceComponent,
    SocialComponent,
    HobbyComponent,
    ContactComponent,
    SkillComponent,
    ProjectComponent,
    CardComponent,
    AboutMeComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

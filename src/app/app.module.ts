import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { CardComponent } from './card/card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NameComponent } from './name/name.component';

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
    NameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

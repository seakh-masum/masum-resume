import { MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false}
  }]
})
export class PagesComponent implements OnInit {

  contacts = [
    { name: 'Phone', value: '+91 79803 56149', icon: 'telephone.svg'},
    { name: 'Email', value: 'masum0aktar@gmail.com', icon: 'gmail.svg'},
    { name: 'Skype', value: 'seakh.masum', icon: 'skype.svg'},
    { name: 'LinkedIn', value: 'seakh.masum', icon: 'linkedin.svg'},
    { name: 'GitHub', value: 'seakh-masum', icon: 'github.svg'},
  ];

  projects = [
    { title: 'Beep N Stay', subtitle: 'Service Module, Gatekeeper Module'},
    { title: 'Beep N Visit', subtitle: 'Todays Guest Module'},
    { title: 'Shopini Autoparts', subtitle: 'Whole Project'},
  ];

  education = [
    {title: 'Diploma in Computer Science & Technology', subtitle: 'The Calcutta Technical School (Govt)', desc: '7.8 OGPA'},
    {title: '12th Standard - Pure Science', subtitle: 'Belkulai C.K A.C Vidyapith', desc: '67.5%'},
    {title: '10th Standard - Bengali Medium', subtitle: 'Belkulai C.K A.C Vidyapith', desc: '76.42%'},
  ];

  experience = [
    {title: 'Navigator Software Pvt Ltd.', subtitle: 'Feb 2020 - Present', desc: '10 Months'},
    {title: 'Emxcel', subtitle: 'Sep 2019 - Feb 2020', desc: '6 Months'},
    {title: 'Emxcel (Angular Interns)', subtitle: 'Mar 2019 - Sep 2019', desc: '6 Months'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

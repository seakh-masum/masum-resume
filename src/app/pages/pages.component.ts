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

  isDarkMode: boolean = true;

  constructor() { }

  ngOnInit(): void {  
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };
    
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions: any = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
    
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL);
    });
  }

}

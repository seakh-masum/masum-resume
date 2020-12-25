import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  hobbies = [
    {title: 'Listening Music', icon: 'musical-notes.png', color: 'green'},
    {title: 'Internet Surfing', icon: 'internet.png', color: 'red'},
    {title: 'Photography', icon: 'camera.png', color: 'orange'},
    {title: 'Playing Cricket', icon: 'cricket.png', color: 'blue'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

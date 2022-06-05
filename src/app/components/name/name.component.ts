import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  imageUrl: string =
    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654339823941-8c7b4a9314e4image';

  constructor() {}

  ngOnInit(): void {}
}

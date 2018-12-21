import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-component',
  templateUrl: './ngx-component.component.html',
  styleUrls: ['./ngx-component.component.less']
})
export class NgxComponentComponent implements OnInit {

  title: String;

  constructor() { }

  ngOnInit() {
    this.title = 'Ngx Component !';
  }

}

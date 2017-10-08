import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {
  public year: number = 2015;
  public owner: string = 'Hot Weather Widget';

  constructor() { }

  ngOnInit() {
  }

}

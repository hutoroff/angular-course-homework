import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-data-select',
  templateUrl: './widget-data-select.component.html',
  styleUrls: ['./widget-data-select.component.css']
})
export class WidgetDataSelectComponent implements OnInit {
  public pictureUrl: string = 'assets/images/1.jpg'

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-teddy-bear',
  templateUrl: './widget-teddy-bear.component.html',
  styleUrls: ['./widget-teddy-bear.component.css']
})
export class WidgetTeddyBearComponent implements OnInit {
  public followers: number = 2850;
  public following: number = 675;

  constructor() { }

  ngOnInit() {
  }

}

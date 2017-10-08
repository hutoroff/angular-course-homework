import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {
  public picture: string = "assets/images/cloudy.png";
  public airTemp: number = 14;
  public waterTemp: number = 20;

  constructor() { }

  ngOnInit() {
  }

}

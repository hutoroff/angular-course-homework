import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {

  @Input()
  public weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}

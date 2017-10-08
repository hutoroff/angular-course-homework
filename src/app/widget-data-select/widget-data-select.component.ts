import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-widget-data-select',
  templateUrl: './widget-data-select.component.html',
  styleUrls: ['./widget-data-select.component.css']
})
export class WidgetDataSelectComponent implements OnInit {
  @Input()
  public resorts$: Observable<Resort[]>;

  public pictureUrl: string = 'assets/images/1.jpg';

  constructor() { }

  ngOnInit() {
  }

}

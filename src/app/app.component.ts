import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {resorts$} from "./data/index";
import {ResortsService} from "./common/services/resorts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string = 'Hot Weather Widget';
  public resorts$: Observable<Resort[]> = resorts$;

  public selectedResort: Resort;

  public constructor ( private  _resortsService: ResortsService) {}

  public ngOnInit(): void {
    this.resorts$ = this._resortsService.getResorts();
  }

  public selectResort(resort: Resort):void {
    this.selectedResort = resort;
  }
}

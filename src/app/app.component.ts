import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {resorts$} from "./data/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public resorts$: Observable<Resort[]> = resorts$;
}

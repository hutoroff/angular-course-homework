import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {resorts$} from "../../data/index";

@Injectable()
export class ResortsService {

  private _resorts$: Observable<Resort[]> = resorts$;

  public getResorts(): Observable<Resort[]> {
    return this._resorts$;
  }

}

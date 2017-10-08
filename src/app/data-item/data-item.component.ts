import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {

  @Input()
  public phone: number;

  @Input()
  public address: string;

  @Input()
  public pictureUrl: string;

  constructor() { }

  ngOnInit() {
  }

}

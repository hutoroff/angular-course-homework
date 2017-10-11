import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent {

  @Input()
  public phone: number;

  @Input()
  public address: string;

  @Input()
  public pictureUrl: string;

  @Input()
  public name: string;

}

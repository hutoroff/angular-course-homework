import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-data-select',
  templateUrl: './widget-data-select.component.html',
  styleUrls: ['./widget-data-select.component.css']
})
export class WidgetDataSelectComponent implements OnInit {

  @Input()
  public resorts: Resort[];

  @Output()
  public selectedResort: EventEmitter<Resort> = new EventEmitter();

  public sortOptions: string[] = ['Name','Address','Weather','Social'];

  public selectedOption: string = this.sortOptions[0];
  public selectedResortPhoto: string;

  ngOnInit() {
    this.emitResort(this.resorts[0]);
  }

  public setSortOption(option: string): void {
    this.selectedOption = option;
  }

  public emitResort(resort: Resort): void {
    this.selectedResort.emit(resort);
    this.selectedResortPhoto = resort.img;
  }

}

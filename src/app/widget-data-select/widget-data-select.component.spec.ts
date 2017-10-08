import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDataSelectComponent } from './widget-data-select.component';

describe('WidgetDataSelectComponent', () => {
  let component: WidgetDataSelectComponent;
  let fixture: ComponentFixture<WidgetDataSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDataSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDataSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

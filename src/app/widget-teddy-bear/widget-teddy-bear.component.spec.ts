import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTeddyBearComponent } from './widget-teddy-bear.component';

describe('WidgetTeddyBearComponent', () => {
  let component: WidgetTeddyBearComponent;
  let fixture: ComponentFixture<WidgetTeddyBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTeddyBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTeddyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

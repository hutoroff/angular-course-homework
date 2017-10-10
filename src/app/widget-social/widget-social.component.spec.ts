import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {WidgetSocialComponent} from "./widget-social.component";

describe('WidgetSocialComponent', () => {
  let component: WidgetSocialComponent;
  let fixture: ComponentFixture<WidgetSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

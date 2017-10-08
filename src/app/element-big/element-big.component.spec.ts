import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBigComponent } from './element-big.component';

describe('ElementBigComponent', () => {
  let component: ElementBigComponent;
  let fixture: ComponentFixture<ElementBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArHomeComponent } from './ar-home.component';

describe('ArHomeComponent', () => {
  let component: ArHomeComponent;
  let fixture: ComponentFixture<ArHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

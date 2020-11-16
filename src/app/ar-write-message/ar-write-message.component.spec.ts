import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArWriteMessageComponent } from './ar-write-message.component';

describe('ArWriteMessageComponent', () => {
  let component: ArWriteMessageComponent;
  let fixture: ComponentFixture<ArWriteMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArWriteMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArWriteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

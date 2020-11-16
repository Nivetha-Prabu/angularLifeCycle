import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArChatComponent } from './ar-chat.component';

describe('ArChatComponent', () => {
  let component: ArChatComponent;
  let fixture: ComponentFixture<ArChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

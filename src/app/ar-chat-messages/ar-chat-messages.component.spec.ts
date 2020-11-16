import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArChatMessagesComponent } from './ar-chat-messages.component';

describe('ArChatMessagesComponent', () => {
  let component: ArChatMessagesComponent;
  let fixture: ComponentFixture<ArChatMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArChatMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

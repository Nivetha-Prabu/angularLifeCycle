import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-ar-chat-messages',
  templateUrl: './ar-chat-messages.component.html',
  styleUrls: ['./ar-chat-messages.component.css']
})
export class ArChatMessagesComponent implements OnInit {
  // @Input('messages') public messages: Array<Message>;
  public messages$;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.scrollToBottom();
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.messages$ = this.store.select('messages');

  }
  // removeMessage(message){
  //   this.messages.splice(this.messages.indexOf(message), 1);
  // }
}

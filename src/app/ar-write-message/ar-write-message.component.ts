import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-ar-write-message',
  templateUrl: './ar-write-message.component.html',
  styleUrls: ['./ar-write-message.component.css']
})
export class ArWriteMessageComponent implements OnInit {
@Output() public onMessageSent = new EventEmitter<any>();
public chatInput = '';
  constructor(private chatService: ChatService, private store: Store<any>) { }

  ngOnInit() {
  }
sendMessage() {
  const id = Math.ceil(Math.random() * 1000 + 1);
  const message: Message = this.chatService.processMessages([{id: id, text: this.chatInput}])[0];
    // this.onMessageSent.emit(message);
  this.store.dispatch({
      type: 'ADD_MESSAGE',
      payload: message
    });
  this.chatInput = '';
  }
}



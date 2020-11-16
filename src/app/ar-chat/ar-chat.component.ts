import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-ar-chat',
  templateUrl: './ar-chat.component.html',
  styleUrls: ['./ar-chat.component.css']
})
export class ArChatComponent implements OnInit {
  chatMessages: Array<Message> = [];


  constructor(private chatService: ChatService,
    private store: Store<any></any>) { }

  ngOnInit() { 
    // this.chatService.getMessage().subscribe((messages: Array<Message>) => {
    //   this.chatMessage = messages;
    // });
    this.loadMessages();
  }

  loadMessages(): void {
  this.chatService.getMessage()
  .subscribe((messages: Array<Message>) =>{
    this.store.dispatch({type: 'LOAD_MESSAGES',
  payload: messages});
  });
  }
  //  newMessageSent(messages: Message){
  //    this.chatMessage.push(message);
  //  }
}

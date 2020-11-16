import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../todos/interfaces';
import { Add, Remove, Toggle } from '../todos/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-example-store',
  templateUrl: './example-store.component.html',
  styleUrls: ['./example-store.component.css']
})
export class ExampleStoreComponent implements OnInit {
  todos$: Observable<Todo[]>;
  newTodoText = '';
  constructor(private store: Store<{ todoState: Array<Todo> }>) {
    this.todos$ = store.select(state => state.todoState);
  }
  ngOnInit() {
  }

  addTodo() {
    this.store.dispatch(Add({ text: this.newTodoText || 'Untitled task' }));
    this.newTodoText = '';
  }

  removeTodo(id) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id) {
    this.store.dispatch(Toggle({ id }));
  }
}

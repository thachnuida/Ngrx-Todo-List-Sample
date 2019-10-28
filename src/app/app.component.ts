import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoState } from './store/models/todo.state';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app.state';
import * as TodoActions from './store/actions/todo.actions';
import * as TodoSelectors from './store/selectors/todo.selectors';

import { Todo } from './store/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todos';
  todo$: Observable<TodoState>;
  todoCompleted$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.todo$ = this.store.select('todo');
    this.todoCompleted$ = this.store.select(TodoSelectors.getTodoCompletedItems);

    this.store.dispatch(TodoActions.loadTodoList());
  }

  toggleItem(item) {
    this.store.dispatch(TodoActions.toggleTodoItem({ item }));
  }
}

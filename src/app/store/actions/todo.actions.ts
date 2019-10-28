import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadTodoList = createAction(
  '[Todo] Load Todo List'
);

export const loadTodoListSuccess = createAction(
  '[Todo] Load Todo List Success',
  props<{items: Todo[]}>()
);

export const toggleTodoItem = createAction(
  '[Todo] Toggle Todo Item',
  props<{item: Todo}>()
);

export const toggleTodoItemSuccess = createAction(
  '[Todo] Toggle Todo Item Success',
  props<{item: Todo}>()
);

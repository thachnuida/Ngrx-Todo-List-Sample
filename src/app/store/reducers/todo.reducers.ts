import { Action, createReducer, on } from '@ngrx/store';
import { TodoState } from '../models/todo.state';
import * as TodoActions from '../actions/todo.actions';

export const initialState: TodoState = {
  items: []
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodoListSuccess,
    (state, { items }) => ({...state, items})
  ),

  on(TodoActions.toggleTodoItemSuccess,
    (state, { item }) => ({...state, items: state.items.map(todoItem => todoItem.id !== item.id ? todoItem : {...todoItem, ...item})})
  )
);

export function reducer(state: TodoState, action: Action) {
  return todoReducer(state, action);
}

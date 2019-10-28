import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models/todo.state';

export const getTodoState = createFeatureSelector<TodoState>('todo');

export const getTodoCompletedItems = createSelector(
  getTodoState,
  (todo) => (todo.items.filter(item => item.completed))
);

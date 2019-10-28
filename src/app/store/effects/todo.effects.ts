import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from '../actions/todo.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class TodoEffects {

  loadTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodoList),
      concatMap(() => this.todoService.getAll()
        .pipe(
          map(items => TodoActions.loadTodoListSuccess({ items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  toggleTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.toggleTodoItem),
      concatMap((action) => this.todoService.toggleItem(action.item)
        .pipe(
          map(item => TodoActions.toggleTodoItemSuccess({ item })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}

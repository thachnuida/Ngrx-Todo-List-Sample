import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../store/models/todo.model';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  toggleItem(item: Todo) {
    return this.httpClient.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${item.id}`, { ...item, completed: !item.completed});
  }
}


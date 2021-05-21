import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, TodoInputs } from 'src/app/models/Todo';
import { SERVER_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {}

  fetchAll(username: string) {
    return this.http.get<Todo[]>(SERVER_BASE_URL+`/users/${username}/todos`);
  }

  fetchOneById(id: string, username: string) {
    return this.http.get<Todo>(SERVER_BASE_URL + `/users/${username}/todos/${id}`);
  }

  deleteOneById(id: string, username: string) {
    return this.http.delete<Todo>(SERVER_BASE_URL + `/users/${username}/todos/${id}`);
  }

  updateOneById(id: string, username: string, data: TodoInputs) {
    return this.http.put<Todo>(SERVER_BASE_URL + `/users/${username}/todos/${id}`, data);
  }

  createTodo(username: string, data: TodoInputs) {
    return this.http.post<Todo>(SERVER_BASE_URL + `/users/${username}/todos`, data);
  }
}

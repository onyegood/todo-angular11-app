import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoDataService } from '../services/data/todo/todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.fetchAll("onyegood").subscribe(
      (response) => this.todos = response,
      (error) => console.log(error)
    );
  }

  deleteTodo(id: string): void {
    this.todoService.deleteOneById(id, "onyegood").subscribe(
      (response) => {
        console.log(response);
        this.refreshTodos();
        // Display alert message
      },
      (error) => console.log(error)
    )
  }

  updateTodo(id: string): void {
    this.router.navigate([`todos/${id}/edit`]);
  }

  saveTodo(): void{
    this.router.navigate(['todos/new']);
  }
}

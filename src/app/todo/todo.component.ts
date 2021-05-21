import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoInputs } from '../models/Todo';
import { TodoDataService } from '../services/data/todo/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id = '';
  todo!: Todo;

  constructor(
    private route: ActivatedRoute, 
    private todoService: TodoDataService, 
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id) {

      this.fetchTodo();
    }
  }

  onSubmit(){
    if (this.id) {
      this.handleUpdateTodo(this.todo);
    }else{
      this.handleCreateNewTodo(this.todo);
    }
  }

  handleCreateNewTodo(data: TodoInputs){
    this.todoService.createTodo("onyegood", data).subscribe(
      (response) => {
        this.router.navigate(["/todos"]);
        console.log(response)
      },
      (error) => console.log(error)
    )
  }
  
  handleUpdateTodo(data: TodoInputs){
    this.todoService.updateOneById(this.id, "onyegood", data).subscribe(
      (response) => {
        this.router.navigate(["/todos"]);
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

  fetchTodo(){
    this.todoService.fetchOneById(this.id, "onyegood").subscribe(
      (response) => this.todo = response,
      (error) => console.log(error)
    )
  }
}

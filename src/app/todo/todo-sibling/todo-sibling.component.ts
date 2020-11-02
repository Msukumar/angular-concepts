import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-sibling',
  templateUrl: './todo-sibling.component.html',
  styleUrls: ['./todo-sibling.component.scss']
})
export class TodoSiblingComponent implements OnInit {
  message: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.currentMes.subscribe(mes=>{
      this.message = mes;
    })
  }

  ChangeMes(mes){
    this.todoService.changeMes(mes);
  }

}

import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any = [];
  message: string;
  @ContentChild('btnRef', {static: false}) btnRef: TemplateRef<any>;
  constructor(private todoService: TodoService) {
   }

  ngOnInit() {
    this.todoService.currentMes.subscribe(mes=>{
      this.message = mes;
    })
    this.todoService.getTodoList().subscribe(res=>{
      this.data = res;
    })
  }

}

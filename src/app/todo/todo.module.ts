import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TableComponent } from './table/table.component';
import { TodoService } from './todo.service';
import { TodoDirective } from './todo.directive';
import { TodoPipe } from './todo.pipe';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';
import { TodoSiblingComponent } from './todo-sibling/todo-sibling.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    TodoComponent,
    TableComponent,
    TodoDirective,
    TodoPipe,
    TabsComponent,
    TabComponent,
    TodoSiblingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }

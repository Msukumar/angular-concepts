import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { ITodo } from './model/ITodo';

@Injectable()
export class TodoService {
  private messageSrc = new BehaviorSubject<string>("default message");
  currentMes = this.messageSrc.asObservable();
  constructor(private httpClient: HttpClient) { 
  }


  changeMes(mes: string){
    this.messageSrc.next(mes);
  }

  getTodoList(){
    return this.httpClient.get('assets/mockdata/todolist.json')
    .pipe(
      map(res=> res)
    )
  }

   saveTodo(todo: ITodo): Observable<ITodo>{
     return this.httpClient.post<ITodo>('url', todo);
   }

}

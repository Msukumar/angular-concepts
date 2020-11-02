import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSiblingComponent } from './todo-sibling.component';

describe('TodoSiblingComponent', () => {
  let component: TodoSiblingComponent;
  let fixture: ComponentFixture<TodoSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

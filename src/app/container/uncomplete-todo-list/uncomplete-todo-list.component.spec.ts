import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompleteTodoListComponent } from './uncomplete-todo-list.component';

describe('UncompleteTasksComponent', () => {
  let component: UncompleteTodoListComponent;
  let fixture: ComponentFixture<UncompleteTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncompleteTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompleteTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

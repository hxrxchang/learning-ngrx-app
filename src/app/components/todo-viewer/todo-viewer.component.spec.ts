import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoViewerComponent } from './todo-viewer.component';

describe('TodoViewerComponent', () => {
  let component: TodoViewerComponent;
  let fixture: ComponentFixture<TodoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

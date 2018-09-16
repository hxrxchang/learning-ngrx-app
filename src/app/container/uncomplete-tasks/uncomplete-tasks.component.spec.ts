import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompleteTasksComponent } from './uncomplete-tasks.component';

describe('UncompleteTasksComponent', () => {
  let component: UncompleteTasksComponent;
  let fixture: ComponentFixture<UncompleteTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncompleteTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompleteTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RecordTodoService } from './record-todo.service';

describe('RecordTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordTodoService]
    });
  });

  it('should be created', inject([RecordTodoService], (service: RecordTodoService) => {
    expect(service).toBeTruthy();
  }));
});

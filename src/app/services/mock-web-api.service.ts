import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements InMemoryDbService {
  private api: any = {
    todoList: [
    ]
  }

  public createDb(): any {
    return this.api;
  }
}

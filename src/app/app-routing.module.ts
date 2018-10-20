import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './container/main-page/main-page.component';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { UncompleteTodoListComponent } from './container/uncomplete-todo-list/uncomplete-todo-list.component';
import { CompletedTodoListComponent } from './container/completed-todo-list/completed-todo-list.component';

const routes: Routes =  [
  { path: '', redirectTo: '/uncompleted-tasks', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'uncompleted-tasks', component: UncompleteTodoListComponent },
      { path: 'completed-tasks', component: CompletedTodoListComponent }
    ]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

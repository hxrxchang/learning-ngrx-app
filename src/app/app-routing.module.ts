import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './container/main-page/main-page.component';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { UncompleteTasksComponent } from './container/uncomplete-tasks/uncomplete-tasks.component';
import { CompletedTasksComponent } from './container/completed-tasks/completed-tasks.component';

const routes: Routes =  [
  { path: '', redirectTo: '/uncompleted-tasks', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'uncompleted-tasks', component: UncompleteTasksComponent },
      { path: 'completed-tasks', component: CompletedTasksComponent }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

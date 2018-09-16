import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UncompleteTasksComponent } from './container/uncomplete-tasks/uncomplete-tasks.component';

const routes: Routes =  [
  { path: '', redirectTo: '/uncomplete-tasks', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'uncomplete-tasks', component: UncompleteTasksComponent}
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

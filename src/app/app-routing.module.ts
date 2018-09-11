import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes =  [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

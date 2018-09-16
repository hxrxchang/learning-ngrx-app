import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { MaterialModule } from './material';
import { reducers } from './reducers'
import { TodoEffects } from "./effects/todo.effect";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UncompleteTasksComponent } from './container/uncomplete-tasks/uncomplete-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AddTaskModalComponent,
    SignInComponent,
    SignUpComponent,
    UncompleteTasksComponent
  ],
  entryComponents: [AddTaskModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material';
import { reducers } from './reducers'
import { TodoEffects } from "./effects/todo.effect";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './container/main-page/main-page.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { UncompleteTasksComponent } from './container/uncomplete-tasks/uncomplete-tasks.component';
import { CompletedTasksComponent } from './container/completed-tasks/completed-tasks.component';
import { TodoViewerComponent } from './components/todo-viewer/todo-viewer.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AddTaskModalComponent,
    SignInComponent,
    SignUpComponent,
    UncompleteTasksComponent,
    CompletedTasksComponent,
    TodoViewerComponent,
    TaskListComponent
  ],
  entryComponents: [
    AddTaskModalComponent,
    TodoViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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

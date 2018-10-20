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
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';
import { SignInComponent } from './container/sign-in/sign-in.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { UncompleteTodoListComponent } from './container/uncomplete-todo-list/uncomplete-todo-list.component';
import { CompletedTodoListComponent } from './container/completed-todo-list/completed-todo-list.component';
import { TodoViewerComponent } from './components/todo-viewer/todo-viewer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    TodoModalComponent,
    SignInComponent,
    SignUpComponent,
    UncompleteTodoListComponent,
    CompletedTodoListComponent,
    TodoViewerComponent,
    TodoListComponent
  ],
  entryComponents: [
    TodoModalComponent,
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

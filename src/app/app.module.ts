import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { MaterialModule } from './material';
import { reducers } from './reducers'

import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddTaskModalComponent } from './common-components/add-task-modal/add-task-modal.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TopContainerComponent } from './top-container/top-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AddTaskModalComponent,
    SignInComponent,
    SignUpComponent,
    TopContainerComponent
  ],
  entryComponents: [AddTaskModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

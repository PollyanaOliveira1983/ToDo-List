import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]




})
export class AppModule { }

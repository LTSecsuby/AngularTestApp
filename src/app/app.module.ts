import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { AddNotesBarComponent } from './add-notes-bar/add-notes-bar.component';
import {NotesBarComponent} from './notes-bar/notes-bar.component';
import { AppAddNewNoteBarComponent } from './app-add-new-note-bar/app-add-new-note-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    AddNotesBarComponent,
    NotesBarComponent,
    AppAddNewNoteBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

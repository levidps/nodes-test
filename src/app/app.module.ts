import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FolderItemModule } from "./components/folder-item/folder-item.module";
import { FileItemModule } from "./components/file-item/file-item.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileItemModule,
    FolderItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

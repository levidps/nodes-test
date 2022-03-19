import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {FolderItemModule} from "./components/folder-item/folder-item.module";
import {FileItemModule} from "./components/file-item/file-item.module";
import {NodeInputModule} from "./components/node-input/node-input.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileItemModule,
    FolderItemModule,
    NodeInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

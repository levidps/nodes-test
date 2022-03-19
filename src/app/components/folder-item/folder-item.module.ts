import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FolderItemComponent} from './folder-item.component';
import {FileItemModule} from "../file-item/file-item.module";
import {NodeInputModule} from "../node-input/node-input.module";
import {NodeIconModule} from "../node-icon/node-icon.module";
import {NodeActionsModule} from "../node-actions/node-actions.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    FolderItemComponent
  ],
  exports: [
    FolderItemComponent
  ],
  imports: [
    CommonModule,
    FileItemModule,
    NodeInputModule,
    NodeIconModule,
    NodeActionsModule,
    BrowserAnimationsModule
  ]
})
export class FolderItemModule {
}

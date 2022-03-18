import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FolderItemComponent} from './folder-item.component';
import {FileItemModule} from "../file-item/file-item.module";

@NgModule({
  declarations: [
    FolderItemComponent
  ],
  exports: [
    FolderItemComponent
  ],
  imports: [
    CommonModule,
    FileItemModule
  ]
})
export class FolderItemModule {
}

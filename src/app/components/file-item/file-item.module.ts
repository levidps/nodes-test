import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileItemComponent } from './file-item.component';
import {NodeIconModule} from "../node-icon/node-icon.module";
import {NodeActionsModule} from "../node-actions/node-actions.module";



@NgModule({
    declarations: [
        FileItemComponent
    ],
    exports: [
        FileItemComponent
    ],
    imports: [
        CommonModule,
        NodeIconModule,
        NodeActionsModule
    ]
})
export class FileItemModule { }

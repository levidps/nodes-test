import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileItemComponent } from './file-item.component';



@NgModule({
    declarations: [
        FileItemComponent
    ],
    exports: [
        FileItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FileItemModule { }

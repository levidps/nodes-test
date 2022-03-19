import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeActionsComponent } from './node-actions.component';



@NgModule({
    declarations: [
        NodeActionsComponent
    ],
    exports: [
        NodeActionsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NodeActionsModule { }

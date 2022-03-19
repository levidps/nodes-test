import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NodeInputComponent } from './node-input.component';
import {NodeIconModule} from "../node-icon/node-icon.module";
import {DirectivesModule} from "../../directives/directives.module";



@NgModule({
  declarations: [
    NodeInputComponent
  ],
  exports: [
    NodeInputComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        NodeIconModule,
        DirectivesModule
    ]
})
export class NodeInputModule { }

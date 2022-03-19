import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NodeType} from "../../core/nodes/node.model";

@Component({
  selector: 'app-node-actions',
  templateUrl: './node-actions.component.html',
  styleUrls: ['./node-actions.component.scss']
})
export class NodeActionsComponent {
  @Input() nodeType: Extract<'folder' | 'file', NodeType> = 'folder';

  @Output() removeNode: EventEmitter<void> = new EventEmitter<void>()
  @Output() addNode: EventEmitter<void> = new EventEmitter<void>()
}

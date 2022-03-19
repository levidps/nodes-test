import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NodeModel} from "../../core/nodes/node.model";

@Component({
  selector: 'app-node-input',
  templateUrl: './node-input.component.html',
  styleUrls: ['./node-input.component.scss']
})
export class NodeInputComponent implements OnInit {
  @Input() node: NodeModel | undefined;
  @Output() complete: EventEmitter<NodeModel | null> = new EventEmitter<NodeModel | null>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.node?.name !== '') {
      this.complete.emit(this.node);
    } else {
      this.cancel();
    }

  }

  public cancel(): void {
    this.complete.emit(null);
  }

}

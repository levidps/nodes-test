import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NodeModel} from "../../core/nodes/node.model";

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() file: NodeModel = {id: '', type: 'file'};

  @Output() removeNode: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

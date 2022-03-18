import { Component, OnInit, Input } from '@angular/core';
import {NodeModel} from "../../core/nodes/node.model";

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() file: NodeModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

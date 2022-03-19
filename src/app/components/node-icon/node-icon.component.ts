import { Component, OnInit, Input } from '@angular/core';
import {NodeType} from "../../core/nodes/node.model";

@Component({
  selector: 'app-node-icon',
  templateUrl: './node-icon.component.html',
  styleUrls: ['./node-icon.component.scss']
})
export class NodeIconComponent implements OnInit {
  @Input() icon: NodeType = 'folder';

  constructor() { }

  ngOnInit(): void {
  }

}

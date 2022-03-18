import { Component, OnInit, Input } from '@angular/core';
import {NodeModel} from "../../core/nodes/node.model";

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
  @Input() public folder: NodeModel = {id: "", type: null};

  constructor() { }

  ngOnInit(): void {
  }

}

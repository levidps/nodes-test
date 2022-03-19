import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NodeModel} from "../../core/nodes/node.model";
import {NodesService} from "../../core/nodes/nodes.service";

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent {
  @Input() public folder: NodeModel = {id: "", type: null};
  @Input() public newNode: NodeModel | undefined;

  @Output() removeNode: EventEmitter<string> = new EventEmitter<string>();

  public showNodeSelect: boolean = false;

  constructor(private nodesService: NodesService) {
  }

  public addNode(): void {
    this.newNode = this.nodesService.createNewNode(null);
  }

  public removeChild(nodeId: string) {
    this.nodesService.removeNode(nodeId, this.folder);
  }

  public saveNode(node: NodeModel | null) {
    if (node)
      this.nodesService.addNode(node, this.folder);

    this.newNode = undefined;
  }
}

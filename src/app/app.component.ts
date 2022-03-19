import {Component, OnInit} from '@angular/core';
import {NodesService} from "./core/nodes/nodes.service";
import {NodeModel} from "./core/nodes/node.model";
import { slideInFromRight } from "./animations/slide-in";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInFromRight]
})
export class AppComponent implements OnInit {
  public tempNode: NodeModel | undefined;

  constructor(public nodesService: NodesService) {
  }

  ngOnInit() {
    this.nodesService.initNodes();
  }

  public addFolder() {
    this.tempNode = this.nodesService.createNewNode('folder');
  }

  public removeChild(nodeId: string) {
    this.nodesService.removeNode(nodeId, null);
  }

  public saveNode(node: NodeModel | null) {
    if (node?.name === '') {
      window.alert('Name Missing!');
      return;
    }
    if (node) {
      this.nodesService.addNode(node);
    }
    this.tempNode = undefined;
  }
}

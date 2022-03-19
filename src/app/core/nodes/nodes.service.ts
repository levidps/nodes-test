import { Injectable } from '@angular/core';
import {NodeModel, NodeType} from "./node.model";

@Injectable({
  providedIn: 'root'
})
export class NodesService {
  public count = 0;

  // contains list of root items
  public nodesList: NodeModel[] = [];

  private defaultNodes: NodeModel[] = [];

  // Let's load from localStorage - this emulates if we were trying to load from an API or locally stored copy
  public initNodes() {
    this.nodesList = JSON.parse(window.localStorage.getItem('my-nodes') || JSON.stringify(this.defaultNodes));
  }

  /**
   * Let's add a note
   * @param newNode: the new node to add
   * @param parent: the parent node to add node to (if not supplied it's the root)
   */
  public addNode(newNode: NodeModel, parent?: NodeModel): void {
    // CATCH! We can't add file to root, we need a node to be supplied to add file
    if (newNode.type === 'file' && !parent)
      return;

    // check if node is supplied/has children
    // - if so we can assume it's a folder and add our new node
    if (parent?.children) {
      parent.children = [...parent.children, newNode];

    // else - lets ensure that node exists & if no
    } else if (parent?.type === 'folder' && !parent.children?.length) {
      parent.children = [newNode]

    // fallback is assuming we want to add this to the root directory;
    } else {
      this.nodesList = [...this.nodesList, newNode]
    }

    window.localStorage.setItem('my-nodes', JSON.stringify(this.nodesList));
  }

  public removeNode(nodeId: string, parent: NodeModel | null) {
    // check if node is supplied/has children
    // - if so we can assume it's a folder and add our new node
    if (parent?.children) {
      parent.children = parent.children.filter(node => node.id !== nodeId);

    // if parent is missing it must be a root folder
    } else {
      this.nodesList = this.nodesList.filter(node => node.id !== nodeId);
    }

    window.localStorage.setItem('my-nodes', JSON.stringify(this.nodesList));
  }

  public createNewNode(type: Extract<'file' | 'folder' | null, NodeType>): NodeModel {
    const node = {
      type,
      name: ``,
      id: `${Date.now()}`,
    }
    this.count++
    return type === 'folder' ? {...node, children: []} : node;
  }
}

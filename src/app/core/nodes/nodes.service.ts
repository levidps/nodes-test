import { Injectable } from '@angular/core';
import {NodeModel, NodeType} from "./node.model";

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  // contains list of root items
  public nodesList: NodeModel[] = [];

  private defaultNodes: NodeModel[] = [
    {
      type: 'folder',
      name: 'My First Folder',
      children: [
        {
          type: 'file',
          name: 'My First file',
          id: '',
        }
      ],
      id: '',
    }
  ];

  // Let's load from localStorage - this emulates if we were trying to load from an API or locally stored copy
  public initNodes() {
    this.nodesList = JSON.parse(window.localStorage.getItem('my-nodes') || JSON.stringify(this.defaultNodes));
  }

  /**
   * Let's add a note
   * @param type: extract the folder/files as these are the only types we'll allow adding
   * @param node: the node to add this to (if not supplied it's the root)
   */
  public addNode(type: Extract<'file' | 'folder', NodeType>, node?: NodeModel): void {
    // CATCH! We can't add file to root, we need a node to be supplied to add file
    if (type === 'file' && !node)
      return;

    const newNode: NodeModel = this.createNewNode(type);
    // check if node is supplied/has children
    // - if so we can assume it's a folder and add our new node
    if (node?.children) {
      node.children = [...node.children, newNode];

    // else - lets ensure that node exists & if no
    } else if (node && node.type === 'folder') {
      node.children = [newNode]

    // fallback is assuming we want to add this to the root directory;
    } else {
      this.nodesList = [...this.nodesList, newNode]
    }
  }

  public createNewNode(type: Extract<'file' | 'folder', NodeType>): NodeModel {
    const node = {
      type,
      name: '',
      id: '',
    }
    return type === 'folder' ? {...node, children: []} : node;
  }
}

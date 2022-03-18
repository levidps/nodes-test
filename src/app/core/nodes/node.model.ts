export type NodeType = 'folder' | 'file' | 'unset' | null;

export interface NodeModel {
  type: NodeType;
  name?: string;
  children?: NodeModel[];
  id: string;
}

export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node | null): Node | null {
  return recursive(root, null);
}

function recursive(root: Node | null, nextNode: Node | null) {
  if (root) {
    root.next = nextNode;
  }

  if (root?.left) {
    root.left = recursive(root.left, root.right);
  }

  if (root?.right) {
    root.right = recursive(root.right, nextNode?.left ?? null);
  }

  return root;
}

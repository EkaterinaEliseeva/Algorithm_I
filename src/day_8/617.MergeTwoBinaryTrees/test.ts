import { TreeNode } from './tree-node';
import { mergeTrees } from './index';

const root1 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2));

const root2 = new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)));

console.log({ root1, root2 });

mergeTrees(root1, root2);

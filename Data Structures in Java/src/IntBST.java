public class IntBST {
    private IntBSTNode root;

    public IntBST() {
        this.root = null;
    }

    public IntBSTNode add(Integer val) {
        if (root == null) {
            root = new IntBSTNode(val);
            return root;
        }
        return add(root, val);
    }

    public IntBSTNode find(Integer val) {
        return find(root, val);
    }

    private IntBSTNode find(IntBSTNode root, Integer val) {
        if (val < root.getValue()) {
            if (!root.hasLeftChild())
                return null;
            else {
                return find(root.getLeftChild(), val);
            }
        } else if (val > root.getValue()) {
            if (!root.hasRightChild())
                return null;
            else {
                return find(root.getRightChild(), val);
            }
        } else
            return root;
    }

    // private IntBSTNode findLargest(IntBSTNode root) {
    // if (root.getRightChild() != null && root.getRightChild().getRightChild() !=
    // null) {
    // return findLargest(root.getRightChild());
    // } else if (root.getRightChild() != null) {
    // return root.getRightChild();
    // }
    // return root;
    // }

    public boolean remove(Integer val) {
        if (val == root.getValue()) {
            if (root.getLeftChild() == null && root.getRightChild() == null) {
                root = null;
                return true;
            } else if (root.getLeftChild() == null) {
                root = root.getRightChild();
                return true;
            } else if (root.getRightChild() == null) {
                root = root.getLeftChild();
                return true;
            } else {
                // IntBSTNode biggest = findLargest(root.getLeftChild());
                root.setValue(root.getValue());
                return remove(root.getLeftChild(), val);
            }
        }
        return false;
    }

    private boolean remove(IntBSTNode leftChild, Integer val) {
        return false;
    }

    // private IntBSTNode findParent(IntBSTNode child) {
    // if (child == root) {
    // return null;
    // } else if ((root.hasLeftChild() && root.getLeftChild() == child) ||
    // (root.hasRightChild()
    // && root.getRightChild() == child)) {
    // return root.getRightChild();
    // }
    // return null;
    // }

    public void preOrderPrintTraversal() {
        preOrderPrintTraversal(root);
    }

    private void preOrderPrintTraversal(IntBSTNode root) {
        System.out.println(root.getValue());
        if (root.hasLeftChild()) {
            preOrderPrintTraversal(root.getLeftChild());
        }
        if (root.hasRightChild()) {
            preOrderPrintTraversal(root.getRightChild());
        }
    }

    public void postOrderPrintTraversal() {
        postOrderPrintTraversal(root);
    }

    private void postOrderPrintTraversal(IntBSTNode root) {
        if (root.hasLeftChild()) {
            postOrderPrintTraversal(root.getLeftChild());
        }

        if (root.hasRightChild()) {
            postOrderPrintTraversal(root.getRightChild());
        }

        System.out.println(root.getValue());
    }

    public void inOrderPrintTraversal() {
        inOrderPrintTraversal(root);
    }

    private void inOrderPrintTraversal(IntBSTNode root) {
        if (root.hasLeftChild()) {
            inOrderPrintTraversal(root.getLeftChild());
        }

        System.out.println(root.getValue());

        if (root.hasRightChild()) {
            inOrderPrintTraversal(root.getRightChild());
        }

    }

    /**
     * 
     * @param root root of the subtree we are adding val to
     * @param val  integer we are adding to the BST (Binary Search Tree) *NO
     *             DUPLICATES!
     * @return reference to the IntBSTNode we inserted
     */
    private IntBSTNode add(IntBSTNode root, Integer val) {
        if (val < root.getValue()) {
            if (root.hasLeftChild())
                return add(root.getLeftChild(), val);
            else {
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftChild(child);
                return child;
            }
        } else if (val > root.getValue()) {
            if (root.hasRightChild())
                return add(root.getRightChild(), val);
            else {
                IntBSTNode child = new IntBSTNode(val);
                root.setRightChild(child);
                return child;
            }
        } else
            return root;
    }
}

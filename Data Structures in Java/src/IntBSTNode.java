public class IntBSTNode {
    private IntBSTNode leftChild;
    private IntBSTNode rightChild;
    private Integer value;

    public IntBSTNode(Integer data) {
        value = data;
    }

    public IntBSTNode(Integer data, IntBSTNode left, IntBSTNode right) {
        leftChild = left;
        rightChild = right;
        value = data;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public IntBSTNode getLeftChild() {
        return leftChild;
    }

    public boolean hasLeftChild() {
        return leftChild != null;
    }

    public void setLeftChild(IntBSTNode leftChild) {
        this.leftChild = leftChild;
    }

    public IntBSTNode getRightChild() {
        return rightChild;
    }

    public boolean hasRightChild() {
        return rightChild != null;
    }

    public void setRightChild(IntBSTNode rightChild) {
        this.rightChild = rightChild;
    }

}
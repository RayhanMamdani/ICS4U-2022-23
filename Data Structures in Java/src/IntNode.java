public class IntNode {
    private Integer data;
    private IntNode link;

    public IntNode(Integer data, IntNode link) {
        this.data = data;
        this.link = link;
    }

    public IntNode(Integer data) {
        this.data = data;
        this.link = null;
    }

    public void setData(Integer data) {
        this.data = data;
    }

    public Integer getData() {
        return data;
    }

    public IntNode(IntNode link) {
        this.link = link;
        this.data = null;
    }

    public void setLink(IntNode link) {
        this.link = link;

    }

    public IntNode getLink() {
        return link;
    }
}

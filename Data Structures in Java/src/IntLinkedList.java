public class IntLinkedList {
    private IntNode head;

    private int manyItems;

    public IntLinkedList() {
        this.head = null;
        this.manyItems = 0;
    }

    public Integer get(Integer index) {
        if (isEmpty()) {
            return null;
        } else if (index > size() || index < 0) {
            throw new IndexOutOfBoundsException("Invalid index");
        } else {
            IntNode curr = head;
            for (int i = 0; i < index; i++) {
                curr = curr.getLink();
            }
            return curr.getData();
        }
    }

    public boolean add(Integer data) {
        IntNode temp = new IntNode(data);

        if (head == null)
            head = temp;
        else {
            IntNode curr = head;
            while (curr.getLink() != null) {
                curr = curr.getLink();
            }
            curr.setLink(temp);
        }
        manyItems++;

        return true;
    }

    public boolean addFront(Integer data) {
        head = new IntNode(data, head);
        manyItems++;

        return true;
    }

    public boolean add(Integer index, Integer data) {
        if (index > manyItems) {
            throw new IndexOutOfBoundsException("Index is not allowed! Max index: " + manyItems);
        }
        if (index == 0) {
            addFront(data);
        } else {
            IntNode curr = head;
            for (int i = 0; i < index - 1; i++) {
                curr = curr.getLink();
            }
            curr.setLink(new IntNode(data, curr.getLink()));
            manyItems++;
        }

        return true;
    }

    public Integer remove(Integer data) {
        if (isEmpty())
            return null;
        if (head != null && head.getData() == data) {
            head = head.getLink();
            manyItems--;
            return data;
        } else {
            IntNode curr = head;
            while (curr.getLink() != null && curr.getLink().getData() != data)
                curr = curr.getLink();
            if (curr.getLink() != null) {
                curr.setLink(curr.getLink().getLink());
                manyItems--;
                return data;
            }

        }
        return null;
    }

    public Integer removeFront() {
        if (head == null)
            return null;
        else {
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }

    }

    public boolean isEmpty() {
        return manyItems == 0;
    }

    public int size() {
        return manyItems;
    }

    public String toString() {
        String result = "{";
        IntNode curr = head;

        while (curr != null) {
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        if (!isEmpty()) {
            result = result.substring(0, result.length() - 2);
        }

        result += "}";
        return result;
    }
}

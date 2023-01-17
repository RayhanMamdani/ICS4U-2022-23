public class IntArrayQueue {
    private Integer[] data;
    private Integer top;

    public IntArrayQueue() {
        data = new Integer[0];
        top = -1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void clear() {
        data = new Integer[0];
        top = -1;
    }

    public Integer peek() {
        if (isEmpty())
            return null;
        return data[top];
    }

    public Integer dequeue() {
        if (isEmpty()) {
            return null;
        } else {
            top--;
            return data[top + 1];
        }
    }

    public boolean enqueue(Integer val) {
        Integer[] temp = new Integer[top + 2];
        temp[0] = val;
        for (int i = 1; i < temp.length; i++) {
            temp[i] = data[i - 1];
        }
        data = temp;
        top++;
        return true;
    }
}
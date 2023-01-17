public class IntArrayStack {
    private Integer top = -1;
    private Integer[] stack;

    public IntArrayStack() {
        stack = new Integer[0];
    }

    public boolean empty() {
        return top == -1;
    }

    public void push(Integer data) {
        if (empty()) {
            stack = new Integer[1];
            stack[0] = data;
        } else if (stack.length > top) {
            Integer[] temp = new Integer[top + 2];
            for (int i = 0; i < stack.length; i++) {
                temp[i] = stack[i];
            }
            temp[top + 1] = data;
            stack = temp;
        } else
            stack[top + 1] = data;
        top++;
    }

    public Integer pop() {
        if (top < 0)
            return null;
        return stack[top--];
    }

    public Integer peek() {
        if (top >= 0)
            return stack[top];
        return null;
    }

    public Integer search(Integer data) {
        for (int i = top; i >= 0; i--) {
            if (stack[i] == data) {
                return top - i;
            }
        }
        return -1;
    }
}

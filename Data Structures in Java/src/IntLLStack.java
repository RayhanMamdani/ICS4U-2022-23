public class IntLLStack {
    private IntLinkedList stack;

    public IntLLStack() {
        stack = new IntLinkedList();
    }

    public void push(Integer val) {
        stack.addFront(val);
    }

    public Integer peek() {
        return stack.get(0);
    }

    public Integer pop() {
        return stack.removeFront();
    }

    public boolean empty() {
        return stack.isEmpty();
    }

    public Integer search(Integer val) {
        if (!empty()) {
            for (int i = stack.size() - 1; i >= 0; i--) {
                if (val == stack.get(i))
                    return stack.size() - 1 - i;
            }
        }
        return -1;
    }
}
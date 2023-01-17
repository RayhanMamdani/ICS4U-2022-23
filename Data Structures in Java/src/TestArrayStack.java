public class TestArrayStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testPush()) {
            System.out.println("Test Failed: testPush");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testPop()) {
            System.out.println("Test Failed: testPop");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testRest()) {
            System.out.println("Test Failed: testRest");
            testFailed++;
        } else {
            testPassed++;
        }
        System.out.println("Tests passed: " + testPassed);
        System.out.println("Tests failed: " + testFailed);
    }

    private static IntLLStack prepareStack() {
        IntLLStack temp = new IntLLStack();
        temp.push(1);
        temp.push(2);
        temp.push(3);
        temp.push(4);
        temp.push(5);
        return temp;
    }

    private static boolean testPush() {
        IntLLStack list = new IntLLStack();
        list.push(1);
        if (list.peek() != 1)
            return false;

        list.push(2);
        list.push(3);
        if (list.peek() != 3)
            return false;
        return true;
    }

    private static boolean testPop() {
        IntLLStack list = prepareStack();
        if (list.pop() != 5)
            return false;

        list.pop();
        list.pop();
        if (list.peek() != 2)
            return false;

        list.pop();
        list.pop();
        if (list.pop() != null)
            return false;

        return true;
    }

    private static boolean testRest() {
        IntLLStack list = prepareStack();
        if (list.search(3) != 2 || list.peek() != 5 || list.empty())
            return false;

        list.pop();
        list.pop();
        list.pop();
        list.pop();
        list.pop();
        list.pop();
        if (!list.empty() || list.search(null) != -1 || list.peek() != null)
            return false;
        return true;
    }
}

public class TestArrayQueue {
    public static void main(String[] args) {

        int testPassed = 0;
        int testFailed = 0;
        if (!testEnqueue()) {
            System.out.println("Test Failed: testEnqueue");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testDequeue()) {
            System.out.println("Test Failed: testDequeue");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testIsEmpty()) {
            System.out.println("Test Failed: testIsEmpty");
            testFailed++;
        } else {
            testPassed++;
        }
        System.out.println("Tests passed: " + testPassed);
        System.out.println("Tests failed: " + testFailed);
    }

    private static IntArrayQueue prepareArray() {
        IntArrayQueue temp = new IntArrayQueue();
        temp.enqueue(1);
        temp.enqueue(2);
        temp.enqueue(3);
        temp.enqueue(4);
        temp.enqueue(5);
        return temp;
    }

    private static boolean testIsEmpty() {
        IntArrayQueue list = new IntArrayQueue();
        if (!list.isEmpty())
            return false;

        list = prepareArray();
        list.clear();
        if (!list.isEmpty())
            return false;
        return true;
    }

    private static boolean testDequeue() {
        IntArrayQueue list = prepareArray();
        list.dequeue();
        if (list.peek() != 2)
            return false;

        list.dequeue();
        Integer test = list.dequeue();
        if (list.peek() != 4 || test != 3)
            return false;

        list = new IntArrayQueue();
        test = list.dequeue();
        if (test != null)
            return false;
        return true;
    }

    private static boolean testEnqueue() {
        IntArrayQueue list = new IntArrayQueue();

        boolean temp = list.enqueue(1);
        if (list.peek() != 1 || !temp)
            return false;

        list.enqueue(2);
        if (list.dequeue() != 1)
            return false;

        list.enqueue(3);
        list.enqueue(4);
        list.dequeue();
        list.dequeue();
        if (list.peek() != 4)
            return false;
        return true;
    }
}

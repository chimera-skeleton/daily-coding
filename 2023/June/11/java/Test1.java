public class Test1 {
    public static void main(String[] args) throws ClassNotFoundException {
       Class.forName("MyClass");
    }
}

class MyClass {
    static {
        System.out.println("this is a static code block");
    }
}

public class Main {
    public static void main(String[] args) {
//      Main.test(new Animal() {
//
//          @Override
//          public void walk() {
//              System.out.println("im walk");
//          }
//      });

       test(
               () -> System.out.println("i am walking")
       );

       test(
               () -> {
                   System.out.println("i am wakkkkk");
               }
       );

    }

    static void test (Animal animal) {
        animal.walk();
    }
}

@FunctionalInterface
interface Animal{
   void walk ();
}


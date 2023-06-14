import org.w3c.dom.ls.LSOutput;

/**
 * @ProjectName: daily
 * @ClassName: Test
 * @Description: TODO
 * @Author: Scoheart
 * @Date: 2023/6/13 23:13
 * @Version: 1.0
 **/


public class Test {

   public static void main(String[] args) {
      Outer o =  new Outer();
      Outer.Inner inner = o.new Inner();
      System.out.println(inner);
      Outer.Inner io = new Outer().new Inner();
   }

}

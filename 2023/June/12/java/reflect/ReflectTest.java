package reflect;

import java.lang.reflect.Method;
import java.util.Arrays;

public class ReflectTest {
   public static void main (String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException {
       Class<?> userDao = Class.forName("reflect.UserDao");
       Object o = userDao.newInstance();
       Method[] declaredMethods = userDao.getDeclaredMethods();
       Arrays.toString(declaredMethods);
       System.out.println(declaredMethods);
       System.out.println(o);
       System.out.println(userDao);

   }
}
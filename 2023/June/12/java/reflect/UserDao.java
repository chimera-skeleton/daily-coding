package reflect;

public class UserDao {

   private String string;

    public User getUser () {
        System.out.println("User");
        return new User();
    }
}

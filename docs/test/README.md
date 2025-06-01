# 🧪 Тестування працездатності системи

## ✅ Засоби тестування

Для тестування функціональності DAO-рівня було використано:

* **Java 17**
* **JDBC** (з'єднання з MySQL)
* **MySQL** — для зберігання та перевірки даних
* **Власні Java main-класи** як тестові сценарії (`MainUserRoleTest`, `MainMediaContentTest` тощо)
* Компіляція і запуск через **PowerShell / Command Prompt**

---

## 🧾 Структура тестів

Кожен тест реалізований у вигляді окремого класу `Main<ClassName>Test.java`, який:

* Встановлює з'єднання з базою даних
* Викликає методи DAO-реалізацій (наприклад, `addMediaContent`, `getById`)
* Виводить результати виконання операцій у консоль

---

## 📁 Приклад вихідного коду тесту

**`MainUserRoleTest.java`**

```java
<<<<<<< HEAD
import dao.UserRoleDao;
import model.UserRole;

import java.sql.*;
import java.util.List;

public class MainUserRoleTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bd_lab";
        String user = "root";
        String password = "";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connected to database!");

            UserRoleDao userRoleDao = new UserRoleDao(conn);

            // Створення нового зв’язку користувача і ролі
            UserRole newUserRole = new UserRole(1, 2); // user_id = 1, role_id = 2
            userRoleDao.create(newUserRole);
            System.out.println("UserRole inserted!");

            // Отримання зв’язку за user_id і role_id
            UserRole fetched = userRoleDao.getByUserIdRoleId(1, 2);
            if (fetched != null) {
                System.out.println("Fetched UserRole: user_id=" + fetched.getUserId() + ", role_id=" + fetched.getRoleId());
            } else {
                System.out.println("UserRole not found.");
            }

            // Виведення всіх зв’язків
            List<UserRole> allUserRoles = userRoleDao.getAll();
            for (UserRole ur : allUserRoles) {
                System.out.println("UserRole: user_id=" + ur.getUserId() + ", role_id=" + ur.getRoleId());
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
=======
import dao.UserRoleDao;
import model.UserRole;

import java.sql.*;
import java.util.List;

public class MainUserRoleTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bdlab6";
        String user = "root";
        String password = "9L3fLu44iU";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connected to database!");

            UserRoleDao userRoleDao = new UserRoleDao(conn);

            // Створення нового зв’язку користувача і ролі
            UserRole newUserRole = new UserRole(1, 2); // user_id = 1, role_id = 2
            userRoleDao.create(newUserRole);
            System.out.println("UserRole inserted!");

            // Отримання зв’язку за user_id і role_id
            UserRole fetched = userRoleDao.getByUserIdRoleId(1, 2);
            if (fetched != null) {
                System.out.println("Fetched UserRole: user_id=" + fetched.getUserId() + ", role_id=" + fetched.getRoleId());
            } else {
                System.out.println("UserRole not found.");
            }

            // Виведення всіх зв’язків
            List<UserRole> allUserRoles = userRoleDao.getAll();
            for (UserRole ur : allUserRoles) {
                System.out.println("UserRole: user_id=" + ur.getUserId() + ", role_id=" + ur.getRoleId());
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
>>>>>>> 8291ed4 (Код проекту)

```

**`UserRoleDao.java`**

```java
package dao;

import model.UserRole;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserRoleDao {
    private final Connection connection;

    public UserRoleDao(Connection connection) {
        this.connection = connection;
    }

    public void create(UserRole userRole) throws SQLException {
        String sql = "INSERT INTO UserRole (user_id, role_id) VALUES (?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, userRole.getUserId());
            stmt.setInt(2, userRole.getRoleId());
            stmt.executeUpdate();
        }
    }

    public UserRole getByUserIdRoleId(int userId, int roleId) throws SQLException {
        String sql = "SELECT * FROM UserRole WHERE user_id = ? AND role_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            stmt.setInt(2, roleId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return new UserRole(rs.getInt("user_id"), rs.getInt("role_id"));
                }
            }
        }
        return null;
    }

    public List<UserRole> getAll() throws SQLException {
        List<UserRole> list = new ArrayList<>();
        String sql = "SELECT * FROM UserRole";
        try (Statement stmt = connection.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                list.add(new UserRole(rs.getInt("user_id"), rs.getInt("role_id")));
            }
        }
        return list;
    }
}
```
---

## 📤 Результати тестування

![зображення](https://github.com/user-attachments/assets/9271f91e-dbdc-4369-a504-01136a2ccbb7)

![зображення](https://github.com/user-attachments/assets/1d4f47be-f0d2-4755-9cbb-410d7e4a4ae1)

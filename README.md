# Demo JWT Spring Security

Este proyecto es una API REST construida con Spring Boot, Spring Security 6 y JWT para autenticación y autorización de usuarios.

## Características

- Registro y login de usuarios con JWT.
- Seguridad basada en roles.
- Persistencia con PostgreSQL y JPA/Hibernate.
- Contraseñas almacenadas de forma segura (BCrypt).
- Endpoints protegidos y públicos.

## Requisitos

- Java 17+
- Maven
- PostgreSQL

## Configuración

1. **Clona el repositorio**
2. **Configura la base de datos**  
   Crea una base de datos en PostgreSQL y actualiza `src/main/resources/application.properties` con tus credenciales:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/tu_basedatos
   spring.datasource.username=tu_usuario
   spring.datasource.password=tu_contraseña
   ```
3. **Ejecuta la aplicación**
   ```bash
   mvn spring-boot:run
   ```

## Endpoints principales

- `POST /auth/register`  
  Registra un nuevo usuario.  
  **Body ejemplo:**
  ```json
  {
    "username": "correo@ejemplo.com",
    "password": "123456",
    "lastname": "Apellido",
    "firstname": "Nombre",
    "country": "País"
  }
  ```

- `POST /auth/login`  
  Inicia sesión y devuelve un JWT.  
  **Body ejemplo:**
  ```json
  {
    "username": "correo@ejemplo.com",
    "password": "123456"
  }
  ```

- Otros endpoints requieren el token JWT en el header:  
  ```
  Authorization: Bearer <token>
  ```

## Notas

- El endpoint `/auth/**` es público, el resto requiere autenticación.
- Las contraseñas se almacenan usando BCrypt.
- Puedes modificar los roles y la lógica de autorización según tus necesidades.

---

**Autor:**  
Arthur07

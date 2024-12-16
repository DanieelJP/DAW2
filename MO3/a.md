**Estudio Completo de JSP y JavaBeans**

---

### Parte 1: Introducción a JSP

1. **Qué es JSP**:
   - JSP (JavaServer Pages) es una tecnología que permite crear contenido web dinámico. Consiste en páginas HTML que incluyen fragmentos de código Java.
   - Se utiliza para generar contenido dinámico en aplicaciones web mediante la combinación de código Java y elementos estáticos como HTML, CSS y JavaScript.
   - Al ejecutarse, una página JSP se convierte en un servlet, proceso que realiza el motor JSP (por ejemplo, Jasper en Tomcat).

2. **Estructura básica de una página JSP**:
   - **Directivas**: Configuran aspectos de la página y su comportamiento. Se escriben entre `<%@` y `%>`.
   	- `page`: Configura opciones como el conjunto de caracteres o las clases importadas.
   	```jsp
   	<%@ page contentType="text/html; charset=UTF-8" language="java" %>
   	```
   	- `include`: Permite incluir contenido estático o dinámico en la página JSP.
   	```jsp
   	<%@ include file="cabecera.jsp" %>
   	```
   	- `taglib`: Importa bibliotecas de etiquetas personalizadas.
   	```jsp
   	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
   	```

   - **Expresiones JSP**: Permiten mostrar valores dinámicos en la salida.
   	```jsp
   	<%= new java.util.Date() %>
   	```
   - **Scriptlets**: Bloques de código Java que se ejecutan en el servidor.
   	```jsp
   	<% out.println("Hola desde scriptlet!"); %>
   	```
   - **Declaraciones**: Definen variables o métodos que se comparten en toda la página.
   	```jsp
   	<%! private int contador = 0; %>
   	```

3. **Procesamiento de datos en formularios**:
   - Uso de peticiones HTTP para enviar datos desde el cliente al servidor.
   	- `GET`: Pasa los datos en la URL, visible para el usuario.
   	- `POST`: Envía los datos en el cuerpo de la petición, no visible en la URL.
   - Recuperación de parámetros:
   	```jsp
   	String nombre = request.getParameter("nombre");
   	```

4. **Objetos predefinidos en JSP**:
   - `request`: Proporciona información sobre la petición HTTP.
   - `response`: Permite configurar la respuesta HTTP.
   - `session`: Mantiene información entre peticiones del mismo usuario.
   - `out`: Escribe contenido en la salida HTML.

---

### Parte 2: Uso de JavaBeans

1. **Qué son los JavaBeans**:
   - Son componentes reutilizables que encapsulan datos y lógica.
   - Propiedades accesibles mediante métodos `get` y `set`.
   - Deben implementar la interfaz `java.io.Serializable` para poder ser almacenados y transferidos.

2. **Creación de un JavaBean**:
   - Ejemplo de un JavaBean simple:
   	```java
   	package beans;

   	import java.io.Serializable;

   	public class Usuario implements Serializable {
        	private String nombre;
        	private int edad;

        	public String getNombre() {
            	return nombre;
        	}

        	public void setNombre(String nombre) {
            	this.nombre = nombre;
        	}

        	public int getEdad() {
            	return edad;
        	}

        	public void setEdad(int edad) {
            	this.edad = edad;
        	}
   	}
   	```

3. **Uso de JavaBeans en JSP**:
   - **Crear una instancia del bean**:
   	```jsp
   	<jsp:useBean id="usuario" class="beans.Usuario" scope="session" />
   	```
   - **Asignar valores desde un formulario**:
   	```jsp
   	<jsp:setProperty name="usuario" property="*" />
   	```
   - **Mostrar propiedades del bean**:
   	```jsp
   	Nombre: <jsp:getProperty name="usuario" property="nombre" />
   	```

4. **Ventajas del uso de JavaBeans**:
   - Separa la lógica de negocio de la presentación.
   - Facilita el mantenimiento y la reutilización del código.

---

### Parte 3: Arquitectura MVC

1. **Modelo 1 vs. Modelo 2 (MVC)**:
   - **Modelo 1**:
   	- JSP actúa como controlador y vista.
   	- Simple, pero difícil de escalar en aplicaciones complejas.
   - **Modelo 2 (MVC)**:
   	- **Modelo**: Encapsula datos y lógica de negocio (JavaBeans).
   	- **Vista**: Presenta los datos al usuario (JSP).
   	- **Controlador**: Gestiona el flujo de la aplicación (Servlets).

2. **Implementación del Modelo 2**:
   - Uso de un Servlet como controlador:
   	```java
   	@WebServlet("/controlador")
   	public class Controlador extends HttpServlet {
        	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            	Usuario usuario = new Usuario();
            	usuario.setNombre(request.getParameter("nombre"));
            	request.setAttribute("usuario", usuario);
            	request.getRequestDispatcher("vista.jsp").forward(request, response);
        	}
   	}
   	```
   - Vista (JSP):
   	```jsp
   	Nombre: <jsp:getProperty name="usuario" property="nombre" />
   	```

---

### Parte 4: Gestión de la Sesión

1. **Objeto HttpSession**:
   - Permite almacenar datos entre peticiones del mismo cliente.
   - Ejemplo:
   	```jsp
   	session.setAttribute("usuario", usuario);
   	Usuario usuario = (Usuario) session.getAttribute("usuario");
   	```

2. **Métodos comunes**:
   - `setAttribute(clave, valor)`: Almacena un objeto.
   - `getAttribute(clave)`: Recupera un objeto.
   - `invalidate()`: Invalida la sesión.

3. **Uso en aplicaciones JSP**:
   - Configuración de beans en sesión:
   	```jsp
   	<jsp:useBean id="usuario" class="beans.Usuario" scope="session" />
   	```

---

### Parte 5: Caso Práctico: Flujo de una Aplicación Web

1. **Objetivo**:
   - Crear un flujo para calcular primas de seguros.
   - Utilizar formularios JSP para recopilar datos y JavaBeans para procesarlos.

2. **Estructura del flujo**:
   - Formulario inicial para seleccionar tipos de seguro (edificio, pertenencias).
   - Bean `SeleccionSeguros` almacena selecciones.
   - Páginas subsiguientes solicitan más detalles y calculan resultados.

3. **Cálculo de primas**:
   - Bean de proceso `PrimaSeguro` con métodos estáticos:
   	```java
   	public static double calcularPrima(Detalles detalles) {
        	// Implementación del cálculo
   	}
   	```

4. **Redirecciones y reutilización**:
   - Uso de `<jsp:forward>` y `<jsp:include>` para manejar el flujo.
   	```jsp
   	<jsp:forward page="resultado.jsp" />
   	```

---

**Nota**: Este documento detalla los conceptos necesarios para un examen teórico y su aplicación práctica en JSP y JavaBeans.

# Prueba Técnica TBTB

## Listado de Tareas

### Parte 1 Bases de Datos
Desarrollo de Scripts con el sistema de gestión de bases de datos MYSQL

## Requerimientos 
- Gestor de bases de datos MYSQL.
## Estructura
- Create_Config.sql => Script para crear la configuración de las tablas y relaciones en la base de datos.
- Transactions.sql => Script que contiene consultas y transacciones SQL para operaciones de inserción, búsqueda, entre otros.
## Ejecución
- Abrir la terminal de MYSQL o el MYSQL Workbench y ejecutar los Scripts.


### Parte 2 Interfaz De programación de Aplicación (API)
API de Equipos de futbol que cuenta con datos sobre equipos Top a nivel mundial, como paginas web, técnicos, ciudad, dirección entre otros.

## Caracteristicas
- Se empleó MVC.
- Permite realizar los siguientes Metodos (GET, POST, PUT, DELETE).
- La APi cuenta con control de errores por medio de excepciones.
- La API cuenta con paginación en el metodo para obtener todos los equipos.
- Se utiliza JPA para la creación de las entidades y diferentes relaciones.
- Cuenta con Swagger para probar la APi de forma más intuitiva.

## Requerimientos
- Java Development Kit (JDK) versión 17.
- IntelliJ Idea última versión.
- Clonar el Proyecto del repositorio.
- Dependencias, estas se pueden instalar ejecutando el comando mvn install.
- Configurar Variables de Entorno o ingresarlas directamente en el src/main/resources/application.properties para:
    * database_url => "jdbc:mysql://localhost:3306/db_fifa"
    * database_password => "Contraseña de del sistema gestor de base de datos"
    * database_username => Usuario del gestor de bases de datos "Suele ser root"

## Archivos Postman para realizar las pruebas
Estos que se encuentran en la carpeta principal, se deben importar a la Herramienta Postman para realizar pruebas.
- Pruebas en local => PruebaTBTB_version_Local.postman_collection
- Pruebas en la nube => 

## Para evitar el proceso de:
 clonar el repositorio, configurar la base de datos, configurar variables de entorno y la instalación de dependencias, se realizo el despliegue la aplicación en la nube junto con la base de datos en MYSQL, la cual se encuentra en el siguiente Link:



### Aplicación Web
Esta aplicación consume la API de usuarios https://jsonplaceholder.typicode.com/users

## Características
- Diseño Responsivo.
- Vista de tabla de usuarios con filtro que permite buscar por medio de palabras clave en todos los campos de la tabla.
- Vista de usuarios por medio de un carrusel de tarjetas, que permite ver información parcial de los usuarios, además tiene la opción para ver toda la información de ese usuario por medio de un modal.
- Vista Home que permite ir a las otras dos vistas.

- También se realizó el uso de los siguientes items: 
    - Componentes
    - Context
    - Hooks
    - UseEffect
    - UseState
    - Uso de Tailwind CSS
    - Axios
    - Swiper
    - React-table

## Requerimientos
- Node Js
- NPM
- Visual Studio Code
- Clonar el repositorio
- Ingresar con Visual Studi Code
- Instalar paquetes con npm install
- Correc proyecto con npm run dev

## Despliegue de proyecto
https://prueba-tecnica-taupe-nine.vercel.app/
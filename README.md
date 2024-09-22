<div align="center">  
  <img src= "https://github.com/user-attachments/assets/066c61a5-1012-4d95-9384-3360f17e3403" width="200px">
</div>
Eride es una tienda de monopatines eléctricos que permite a los usuarios explorar un catálogo de productos, gestionar su compra facilmente y administrar el inventario desde una sección exclusiva para administradores.

## Stack Tecnológico
- **Frontend:** React + Tailwind CSS
- **Backend:** Nodejs/Expressjs + MongoDB/Mongoose
- **Pagos Online:** Integración con la API de MercadoPago
- **Validaciones:** Zod para manejo de errores en el backend

## Características Principales
- **Catálogo de productos:** Los usuarios pueden ver una lista de monopatines eléctricos disponibles, con detalles de cada producto.
- **CRUD:** Desde la sección de administración, se pueden **crear**, **eliminar** o **modificar** productos del catálogo.
- **Filtro de productos:** Los usuarios pueden buscar y filtrar los monopatines según características como precio y marca.
- **Pagos Online:** Integración con **MercadoPago** para procesar pagos de forma segura y eficiente.
- **Autenticación y Seguridad:** Uso de `useContext` para proteger rutas, asegurando que ciertas secciones (como el admin, o favorites) solo sean accesibles con un **token de autenticación** válido.
- **Manejo de errores:** El backend valida los datos utilizando **Zod**, lo que asegura que los datos sean correctos antes de ser procesados o almacenados en la base de datos.

## Rutas

### Públicas
- `/`: Página principal con el catálogo de productos.
- `/pruduct/scooters/`: Todos los productos, filtrando solo title, imageCover, price, discount, id
- `/pruduct/scooters/:id`: Regresa al elemento elegido completo
- `/pruduct/scooters/many`: Enviando un array de ID's se puede obtener varios productos
- `/pruduct/scooters/names`: Para obtener solo los nombres y Id

### Protegidas
#### User:
- `/user/profile`: Detalles del usuario.
- `/user/favorites`: lista de los productos favoritos guardados del usuario.

#### Admin:
- `/admin`: Sección de administración.
- `/admin/create`: Crear un nuevo monopatín.
- `/admin/edit/:id`: Modificar un producto existente.
- `/admin/delete/:id`: Eliminar un producto del catálogo.

## Manejo de Autenticación
Se utiliza `useContext` para gestionar el acceso a las rutas protegidas. Solo los usuarios con un token válido pueden acceder a la sección de administración.

## Validación de Datos
El backend utiliza **Zod** para garantizar la integridad de los datos al realizar operaciones de CRUD, evitando errores en el proceso de inserción o modificación de productos en la base de datos.

## Instalación y Ejecución
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-repo/tienda-monopatines
   ```
2. **Instalar y ejecutar:**
   ```bash
   npm install
   npm run dev
   ```



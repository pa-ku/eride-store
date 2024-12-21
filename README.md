<div align="center">  
  <img src= "https://github.com/user-attachments/assets/066c61a5-1012-4d95-9384-3360f17e3403" width="200px">
</div>
E-ride es un e-commerce de monopatines eléctricos con compras online a través de Mercado Pago, validación de usuarios, gestión de favoritos y una interfaz administrativa con funcionalidad CRUD para productos. Incluye una UI intuitiva y un sistema de pagos sencillo.

#### 🔗 Demo en vivo: https://eridestore.vercel.app/

<kbd>
<img src="https://github.com/user-attachments/assets/399171ee-5625-4f83-8740-f61e49eb49f9" width="800" >
</kbd>

## 🛠️Stack Tecnológico
- React
- Tailwind
- Express
- MongoDb
- Zod
- **Pagos Online:** Integración con la API de MercadoPago

## 🌟 Características Principales
- **Catálogo de productos:** Los usuarios pueden ver una lista de monopatines eléctricos disponibles, con detalles de cada producto.
- **CRUD:** Desde la sección de administración, se pueden **crear**, **eliminar** o **modificar** productos del catálogo.
- **Filtro de productos:** Los usuarios pueden buscar y filtrar los monopatines según características como precio y marca.
- **Pagos Online:** Integración con **MercadoPago** para procesar pagos de forma segura y eficiente.
- **Autenticación y Seguridad:** Uso de `useContext` para proteger rutas, asegurando que ciertas secciones (como el admin, o favorites) solo sean accesibles con un **token de autenticación** válido, generado con JWT
- **Manejo de errores:** El backend valida los datos utilizando **Zod**, lo que asegura que los datos sean correctos antes de ser procesados o almacenados en la base de datos.

## Manejo de Autenticación
Se utiliza `useContext` para gestionar el acceso a las rutas protegidas. Solo los usuarios con un token válido pueden acceder a la sección de administración.

## Validación de Datos
El backend utiliza **Zod** para garantizar la integridad de los datos al realizar operaciones de CRUD, evitando errores en el proceso de inserción o modificación de productos en la base de datos.


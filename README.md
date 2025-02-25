<div align="center">  
  <img src= "https://github.com/user-attachments/assets/066c61a5-1012-4d95-9384-3360f17e3403" width="250px">
</div>
<div align="center"> 
  <p>
  E-ride es un e-commerce de monopatines eléctricos con compras online a través de Mercado Pago, validación de usuarios, gestión de favoritos y una interfaz administrativa con funcionalidad CRUD para productos. Incluye una UI intuitiva y un sistema de pagos sencillo.
</p>
<a href="https://eride.paku.com.ar/">eride.paku.com.ar</a>
</div>

### 💻 Tecologias 
``React`` ``Express`` ``Zod`` ``MongoDb`` ``Bcrypt``  ``Tailwind`` ``JWT`` ``Mercadopago API`` ``Vite``

### 🌟 Características Principales
- **Catálogo de productos:** Los usuarios pueden ver una lista de monopatines eléctricos disponibles, con detalles de cada producto.
- **CRUD:** Desde la sección de administración, se pueden **crear**, **eliminar** o **modificar** productos del catálogo.
- **Filtro de productos:** Los usuarios pueden buscar y filtrar los monopatines según características como precio y marca.
- **Pagos Online:** Integración con **MercadoPago** para procesar pagos de forma segura y eficiente.
- **Autenticación y Seguridad:** Uso de `useContext` para proteger rutas, asegurando que ciertas secciones (como el admin, o favorites) solo sean accesibles con un **token de autenticación** válido, generado con JWT
- **Manejo de errores:** El backend valida los datos utilizando **Zod**, lo que asegura que los datos sean correctos antes de ser procesados o almacenados en la base de datos.

## Clonar el proyecto


````
git clone https://github.com/pa-ku/eride-store.git
````

````
npm install
````

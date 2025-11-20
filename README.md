# 🏍️ MOTORSHOP - E-commerce de Motocicletas

Tienda online especializada en la venta de motocicletas, repuestos y accesorios. Aplicación web moderna construida con React y Vite que ofrece una experiencia de compra completa con gestión de productos, carrito de compras y panel de administración.

## 🌐 Demo en Vivo

Visita el sitio: **[https://ecommerce-motorshop.vercel.app/](https://ecommerce-motorshop.vercel.app/)**

## ✨ Características

- 🛒 **Carrito de Compras**: Añade, visualiza y elimina productos del carrito
- 🔍 **Búsqueda y Filtros**: Sistema de búsqueda avanzada por nombre, marca y modelo
- 📄 **Paginación**: Navegación intuitiva con 9 productos por página
- 👤 **Autenticación**: Sistema de login/registro con roles de usuario
- 🔐 **Panel Admin**: CRUD completo de productos (solo para administradores)
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- 🎨 **UI Moderna**: Interfaz construida con Bootstrap y styled-components
- 🏪 **Sucursales**: Información de ubicaciones con integración a Google Maps
- 🔔 **Notificaciones**: Feedback visual con react-toastify
- 📊 **SEO Optimizado**: Meta tags configurados con React Helmet

## 🛠️ Tecnologías

- **React 19.2.0** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación SPA
- **Bootstrap 5** - Framework CSS
- **styled-components** - CSS-in-JS
- **React Icons** - Iconografía
- **React Helmet** - Gestión de meta tags
- **React Toastify** - Notificaciones
- **MockAPI** - Backend simulado para productos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Fcasanova92/ecommerce-motorshop.git
cd ecommerce-motorshop
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (ver sección siguiente)

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 🔐 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_API_MOTOR_KEY
VITE_MOCK_API_URL
```

### Descripción de Variables

- `VITE_API_MOTOR_KEY`: API Key para servicios externos de motocicletas
- `VITE_MOCK_API_URL`: URL del endpoint de MockAPI para gestión de productos

## 👨‍💼 Credenciales de Admin

Para acceder al panel de administración:

- **Email**: `admin@gmail.com`
- **Password**: `Admin123`

## 📁 Estructura del Proyecto

```
ecommerce-motorshop/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables
│   ├── config/          # Configuración de la app
│   ├── context/         # Context API (Auth, Cart, Product)
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layouts principales
│   ├── pages/           # Páginas de la aplicación
│   ├── routes/          # Configuración de rutas
│   └── utils/           # Utilidades y helpers
├── public/              # Archivos públicos
└── .env                 # Variables de entorno
```

## 🎯 Funcionalidades Principales

### Usuario Regular
- Explorar catálogo de productos
- Buscar y filtrar motocicletas
- Agregar productos al carrito
- Ver detalles de productos
- Registro y login
- Consultar ubicaciones de sucursales

### Administrador
- Todas las funcionalidades de usuario regular
- Crear nuevos productos
- Editar productos existentes
- Eliminar productos
- Gestión completa del inventario

## 📦 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Crea el build de producción
npm run preview      # Previsualiza el build de producción
npm run lint         # Ejecuta el linter
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Fcasanova92**
- GitHub: [@Fcasanova92](https://github.com/Fcasanova92)

## 🙏 Agradecimientos

- Imágenes de productos y banners de recursos libres
- Iconos de Font Awesome y React Icons
- Bootstrap por el framework CSS
- MockAPI por el backend simulado

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
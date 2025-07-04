# 🎓 CUNA API UNSA

## 📋 Descripción
API REST para el sistema de gestión académica CUNA de la Universidad Nacional de San Agustín (UNSA). Construida con Django REST Framework y desplegada en Vercel.

## 🌐 URL Base
```
https://cuna-api-unsa-nine.vercel.app/
```

## 🔧 Tecn### 8. 🗑️ Eliminar Estudiante (DELETE) - 🔐 Requiere Autenticación
**Descripción:** Eliminar un estudiante del sistema

**Configuración en SoapUI:**
- **Method:** DELETE
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/2/`
- **Headers:**
  - `Authorization: Token TU_TOKEN_AQUI` Utilizadas
- **Backend:** Django 5.2.1
- **API Framework:** Django REST Framework
- **Base de Datos:** PostgreSQL (Producción) 
- **Autenticación:** Token Authentication
- **Despliegue:** Vercel
- **Testing:** SoapUI

## 📚 Documentación de Endpoints

### 🔐 Autenticación
La API utiliza autenticación por token. Para endpoints protegidos, incluir el header:
```
Authorization: Token {token_aqui}
```

---

## 🚀 Pruebas con SoapUI

### 1. 📋 Endpoint de Bienvenida (GET)
**Descripción:** Vista de bienvenida con información general de la API

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/`
- **Headers:** Ninguno requerido

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "🎓 Bienvenido a la API de CUNA UNSA",
    "version": "1.0.0",
    "endpoints": {
        "estudiantes": "/api/students/",
        "docentes": "/api/teachers/",
        "cursos": "/api/courses/",
        "autenticacion": {
            "registro": "/api/auth/register/",
            "login": "/api/auth/login/",
            "perfil": "/api/auth/profile/"
        }
    }
}
```

---

### 2. 👤 Registro de Usuario (POST)
**Descripción:** Crear una nueva cuenta de usuario

**Configuración en SoapUI:**
- **Method:** POST
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/auth/register/`
- **Headers:**
  - `Content-Type: application/json`

**Body (JSON):**
```json
{
    "username": "Pedrito",
    "email": "pedrito@unsa.edu.pe",
    "password": "MiPassword123",
    "password_confirm": "MiPassword123",
    "first_name": "Pedrito",
    "last_name": "Pérez"
}
```

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "✅ Usuario estudiante_unsa registrado exitosamente",
    "data": {
        "user": {
            "id": 1,
            "username": "Pedrito",
            "email": "pedrito@unsa.edu.pe",
            "first_name": "Pedrito",
            "last_name": "Perez"
        },
        "token": "___________________________________________"
    }
}
```

---

### 3. 🔑 Inicio de Sesión (POST)
**Descripción:** Autenticarse y obtener token de acceso

**Configuración en SoapUI:**
- **Method:** POST
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/auth/login/`
- **Headers:**
  - `Content-Type: application/json`

**Body (JSON):**
```json
{
    "username": "Pedrito",
    "password": "MiPassword123"
}
```

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "🔐 Bienvenido Pedrito, inicio de sesión exitoso",
    "data": {
        "user": {
            "id": 1,
            "username": "Pedrito",
            "email": "pedrito@unsa.edu.pe"
        },
        "token": "_____________________________________________"
    }
}
```

---

### 4. 📊 Listar Estudiantes (GET) - 🔐 Requiere Autenticación
**Descripción:** Obtener lista de todos los estudiantes

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/`
- **Headers:**
  - `Authorization: Token TU_TOKEN_AQUI`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "📋 Se encontraron 2 estudiantes registrados",
    "total_count": 2,
    "data": [
        {
            "id": 1,
            "cui": "12345678",
            "names": "María Elena",
            "father_surname": "Rodríguez",
            "mother_surname": "Vásquez",
            "cellphone": "987654321"
        }
    ]
}
```

---

### 5. 📝 Crear Estudiante (POST) - 🔐 Requiere Autenticación
**Descripción:** Registrar un nuevo estudiante

**Configuración en SoapUI:**
- **Method:** POST
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Token TU_TOKEN_AQUI`

**Body (JSON):**
```json
{
    "cui": 37234371,
    "names": "Carlitos Albert",
    "status": false,
    "proxy": null
}

```

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "✅ Estudiante Carlitos Albert registrado exitosamente",
    "data": {
        "id": 8,
        "cui": 37234371,
        "names": "Carlitos Albert",
        "status": false,
        "created": "2025-06-29T21:28:11.952755-05:00",
        "modified": "2025-06-29T21:28:11.952775-05:00",
        "proxy": null,
        "proxy_display": "Sin apoderado"
    },
}
```
---

### 6. 🔍 Obtener Estudiante Específico (GET) - 🔐 Requiere Autenticación
**Descripción:** Obtener información detallada de un estudiante

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/1/`
- **Headers:**
  - `Authorization: Token TU_TOKEN_AQUI`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "👤 Información del estudiante María Elena",
    "data": {
        "id": 1,
        "cui": 12345678,
        "names": "ROSA",
        "status": true,
        "created": "2025-06-25T14:18:50.739994-05:00",
        "modified": "2025-06-25T14:18:50.740021-05:00",
        "proxy": null,
        "proxy_display": "Sin apoderado"
    }
}
```

---

### 7. ✏️ Actualizar Estudiante (PUT) - 🔐 Requiere Autenticación
**Descripción:** Actualizar información completa de un estudiante

**Configuración en SoapUI:**
- **Method:** PUT
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/1/`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Token TU_TOKEN_AQUI`

**Body (JSON):**
```json
{
    "cui": 10045607,
    "names": "Actualizada",
    "status": true
}

```

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "Estudiante Actualizada ✏️ actualizado completamente exitosamente",
    "data":    {
      "id": 1,
      "cui": 110045607,
      "names": "ACTUALIZADA",
      "status": true,
      "created": "2025-06-29T20:04:15.034245-05:00",
      "modified": "2025-06-29T22:25:16.105563-05:00",
      "proxy": null,
      "proxy_display": "Sin apoderado"
   },
}
```

---

### 8. 🗑️ Eliminar Estudiante (DELETE)
**Descripción:** Eliminar un estudiante del sistema

**Configuración en SoapUI:**
- **Method:** DELETE
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/students/1/`
- **Headers:** Ninguno requerido

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "🗑️ Estudiante María Elena Actualizada eliminado exitosamente"
}
```

---

### 9. 👨‍🏫 Listar Docentes (GET) - 🔐 Requiere Autenticación
**Descripción:** Obtener lista de todos los docentes

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/teachers/`
- **Headers:**
  - `Authorization: Token TU_TOKEN_AQUI`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "👨‍🏫 Se encontraron 1 docentes registrados",
    "total_count": 1,
    "data": [
        {
            "id": 1,
            "names": "CECIL",
            "father_surname": "QUISPE",
            "mother_surname": "LARA",
            "email": "cecil@unsa.edu.pe",
            "phone": "963456789",
            "show_phone": false,
            "status": false,
            "created": "2025-06-29T21:34:17.505780-05:00",
            "modified": "2025-06-29T21:34:17.505796-05:00"
        }
    ]
}
```

---

### 10. 📚 Crear Docente (POST) - 🔐 Requiere Autenticación
**Descripción:** Registrar un nuevo docente

**Configuración en SoapUI:**
- **Method:** POST
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/teachers/`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Token TU_TOKEN_AQUI`

**Body (JSON):**
```json
{
    "names": "Ana Eliza",
    "father_surname": "Ramirez",
    "mother_surname": "Pallo",
    "email": "ani@unsa.edu.pe",
    "phone": "900654421",
    "show_phone": false,
    "status": false
}

```

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "✅ Docente Ana Eliza Ramirez registrado exitosamente",
    "data": {
        "id": 2,
        "names": "ANA ELIZA",
        "father_surname": "RAMIREZ",
        "mother_surname": "PALLO",
        "email": "ani@unsa.edu.pe",
        "phone": "900654421",
        "show_phone": false,
        "status": false,
        "created": "2025-06-29T21:37:21.806487-05:00",
        "modified": "2025-06-29T21:37:21.806504-05:00"
    }
}
```

---

### 11. 📖 Listar Cursos (GET) - 🔐 Requiere Autenticación
**Descripción:** Obtener lista de todos los cursos

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/courses/`
- **Headers:**
  - `Authorization: Token TU_TOKEN_AQUI`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "📖 Se encontraron 1 cursos disponibles",
    "total_count": 3,
    "data": [
        {
            "id": "0026bd96-9c76-476b-ae55-cbc0afb7d821",
            "code": "333333333",
            "created": "2025-06-25T12:48:27.128394-05:00",
            "credits": "2.00",
            "modified": "2025-06-25T12:48:27.128421-05:00",
            "name": "educacion fisica",
            "bimester": 3,
            "status": true,
            "year": 3
        }        
    ]
}
```

---

## 🔐 Endpoints con Autenticación Token

### 12. 🏠 Ver Perfil Personal (GET)
**Descripción:** Obtener información del usuario autenticado

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/auth/profile/`
- **Headers:**
  - `Authorization: Token _____________________________________________`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "🏠 Perfil personal de Pedrito",
    "data": {
        "id": 1,
        "username": "Pedrito",
        "email": "pedrito@unsa.edu.pe",
        "first_name": "",
        "last_name": "Pérez"
    }
}
```

---

### 13. 👥 Listar Usuarios (GET)
**Descripción:** Obtener lista de todos los usuarios registrados (requiere autenticación)

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/users/`
- **Headers:**
  - `Authorization: Token a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "👥 Se encontraron 2 usuarios registrados",
    "total_count": 2,
    "data": [
        {
            "id": 1,
            "username": "estudiante_unsa",
            "email": "estudiante@unsa.edu.pe",
            "first_name": "Juan Carlos",
            "last_name": "Pérez García"
        }
    ]
}
```

---

### 14. 📊 Estado de Autenticación (GET)
**Descripción:** Verificar si el usuario está autenticado

**Configuración en SoapUI:**
- **Method:** GET
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/auth/status/`
- **Headers:**
  - `Authorization: Token a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

**Respuesta Esperada:**
```json
{
    "success": true,
    "authenticated": true,
    "message": "✅ Usuario estudiante_unsa está autenticado",
    "data": {
        "user": {
            "id": 1,
            "username": "estudiante_unsa",
            "email": "estudiante@unsa.edu.pe",
            "is_staff": false,
            "date_joined": "2025-06-29T10:30:00Z"
        }
    }
}
```

---

### 15. 👋 Cerrar Sesión (POST)
**Descripción:** Cerrar sesión y invalidar token

**Configuración en SoapUI:**
- **Method:** POST
- **URL:** `https://cuna-api-unsa-nine.vercel.app/api/auth/logout/`
- **Headers:**
  - `Authorization: Token a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

**Body (JSON):**
```json
{
    "username": "estudiante_unsa",
    "password": "MiPassword123"
}
```
**Respuesta Esperada:**
```json
{
    "success": true,
    "message": "👋 Has cerrado sesión correctamente"
}
```

---

## 📋 Lista Completa de Endpoints

### Endpoints Públicos (Sin Autenticación)
- `GET /` - Página de bienvenida
- `POST /api/auth/register/` - Registro de usuario
- `POST /api/auth/login/` - Inicio de sesión
- `GET /api/test-methods/` - Probar métodos HTTP

### 🔐 Endpoints Protegidos (Requieren Token)
- `GET /api/students/` - Listar estudiantes
- `POST /api/students/` - Crear estudiante
- `GET /api/students/{id}/` - Ver estudiante específico
- `PUT /api/students/{id}/` - Actualizar estudiante
- `DELETE /api/students/{id}/` - Eliminar estudiante
- `GET /api/teachers/` - Listar docentes
- `POST /api/teachers/` - Crear docente
- `GET /api/courses/` - Listar cursos
- `GET /api/auth/profile/` - Ver perfil personal
- `PUT /api/auth/profile/` - Actualizar perfil
- `POST /api/auth/logout/` - Cerrar sesión
- `GET /api/auth/status/` - Estado de autenticación
- `GET /api/users/` - Listar usuarios
- `GET /api/users/{id}/` - Ver usuario específico
- `GET /api/profiles/` - Ver todos los perfiles

---

## 🎯 Guía Paso a Paso para SoapUI

### Paso 1: Configurar Proyecto
1. Abrir SoapUI
2. Crear nuevo proyecto REST
3. **Base URL:** `https://cuna-api-unsa-nine.vercel.app`

### Paso 2: Obtener Token de Autenticación
1. Crear request POST a `/api/auth/register/`
2. Crear request POST a `/api/auth/login/`
3. Copiar el token de la respuesta

### Paso 3: Configurar Headers para Endpoints Protegidos
1. En la pestaña "Headers" del request
2. Agregar header:
   - **Name:** `Authorization`
   - **Value:** `Token {token_aqui}`

### Paso 4: Probar Endpoints
1. Empezar con endpoints públicos
2. Probar autenticación
3. Usar token en endpoints protegidos

---

## ⚠️ Códigos de Respuesta

- **200 OK** - Solicitud exitosa
- **201 Created** - Recurso creado exitosamente
- **400 Bad Request** - Error en los datos enviados
- **401 Unauthorized** - Token inválido o faltante
- **404 Not Found** - Recurso no encontrado
- **500 Internal Server Error** - Error interno del servidor

---

## 🛠️ Troubleshooting

### Problema: Token no funciona
**Solución:** Verificar que el header sea exactamente:
```
Authorization   Token __________________________________________
```

### Problema: Error 401 Unauthorized
**Solución:** 
1. Verificar que el token sea válido
2. Asegurarse de incluir el header Authorization
3. Comprobar que el endpoint requiere autenticación

### Problema: Error 400 Bad Request
**Solución:**
1. Verificar el formato JSON del body
2. Incluir header `Content-Type: application/json`
3. Revisar campos requeridos

---

## 👨‍💻 Integrantes:
**Nombres:**

**- Karla Miluska Bedregal Coaguila**

**- Jack Franco Llaique Chullunquia**

**Universidad:** Universidad Nacional de San Agustín (UNSA)

**Proyecto:** Sistema de Gestión Académica CUNA UNSA

---

## 📄 Licencia
Este proyecto es desarrollado para fines académicos en la Universidad Nacional de San Agustín.

---


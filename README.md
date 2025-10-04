DocsFlow es un sistema de **gestión de documentos** que combina:

- **Frontend (React + TypeScript + Vite)**  
  Interfaz web para autenticación, dashboard y gestión de documentos.  

- **Backend (FastAPI + MySQL + Python)**  
  API que maneja autenticación, subida de PDFs, extracción automática de tablas y control de usuarios.  

---

## 🚀 Características

### 🔹 Frontend
- React + TypeScript + Vite
- ESLint configurado para buenas prácticas
- Hot Module Replacement (HMR)
- Plugins recomendados:
  - `@vitejs/plugin-react`
  - `@vitejs/plugin-react-swc`

### 🔹 Backend
- Autenticación JWT con roles (admin/operador)
- Subida y procesamiento de PDFs con extracción de tablas
- Control de acceso por departamento
- Recuperación de contraseña por email (SMTP con App Password de Gmail)
- Seguridad con Bcrypt + validación de archivos (PDF máx. 15MB)
- Documentación automática con Swagger y ReDoc

---

## 📋 Requisitos

- **Frontend:**  
  Node.js >= 18  
  npm o yarn  

- **Backend:**  
  Python 3.8+  
  MySQL 8.0+  

---

## 🛠️ Instalación

### Backend
```bash
cd docsflow-back
python -m venv venv
# Activar entorno
venv\Scripts\activate       # Windows
source venv/bin/activate    # Linux/Mac
pip install -r requirements.txt
uvicorn app.main:application --reload --host 0.0.0.0 --port 8000
Frontend
bash
Copiar código
cd docsflow-front
npm install
npm run dev
📚 API Endpoints (principales)
Autenticación
POST /auth/login → Iniciar sesión

POST /auth/forgot-password → Recuperar contraseña

POST /auth/register → Registrar usuario

Documentos
POST /documents/upload → Subir PDF

GET /documents/ → Listar documentos

GET /documents/{id}/download → Descargar documento

GET /documents/search → Buscar documentos

Tablas extraídas
GET /tables/{document_id} → Ver tablas

GET /tables/search?q=... → Buscar en tablas

GET /tables/{document_id}/export → Exportar CSV

📂 Estructura del Proyecto
bash
Copiar código
docsflow-back/   # Backend con FastAPI
docsflow-front/  # Frontend con React + Vite
docs/            # Documentación del proyecto
📝 Desarrollo
Frontend Linting: configurar ESLint con tseslint.configs.recommendedTypeChecked

Backend Debug: logs con EMAIL_DEBUG=true, Swagger en /docs

📄 Licencia
Este proyecto está bajo la Licencia MIT.

yaml
Copiar código

---

👉 Con esto ya no tienes que elegir entre `<<<<<<< HEAD` y `>>>>>>> ...`, porque te quedas con lo mejor de los dos mundos:  
- La parte del **setup React/Vite/ESLint** del frontend.  
- La parte de **instalación, endpoints y features** del backend.  

---

¿Quieres que te haga lo mismo con los otros conflictos (`docs/folderstructure.md` y `docs/workflow.md`) para que queden ya listos y fusionados?






Dijiste:
pero hazme el readme completo sobre todo, en un solo archvio


ChatGPT dijo:
Perfecto 🚀. Te voy a armar un README.md completo y unificado para que quede todo en un solo archivo: frontend + backend + docs + instrucciones claras. Así ya no tendrás que preocuparte por los conflictos.

Aquí lo tienes:

📂 DocsFlow Project
DocsFlow es un sistema de gestión de documentos operativos con extracción automática de datos desde archivos PDF, autenticación segura y control de acceso por departamentos.

El proyecto incluye:

Frontend (React + TypeScript + Vite) → Interfaz de usuario.

Backend (FastAPI + Python + MySQL) → API y lógica de negocio.

🚀 Características principales
🔹 Frontend
React + TypeScript + Vite

ESLint con reglas de buenas prácticas (opción de reglas estrictas)

Hot Module Replacement (HMR)

Integración con backend vía API

Autenticación de usuarios

Dashboard para gestionar documentos

🔹 Backend
API REST con FastAPI

Autenticación JWT con roles (admin / operador)

Registro de usuarios y recuperación de contraseña vía email

Subida de archivos PDF con validación de tamaño y tipo

Extracción automática de tablas desde PDFs

Control de acceso por departamento

Documentación automática con Swagger UI y ReDoc

Seguridad:

Hash de contraseñas con Bcrypt

Bloqueo por intentos fallidos

Tokens con expiración configurable

📋 Requisitos previos
Frontend
Node.js >= 18

npm o yarn

Backend
Python >= 3.8

MySQL >= 8.0

Entorno virtual (venv recomendado)

🛠️ Instalación
🔧 Backend
bash
Copiar código
cd docsflow-back

# Crear entorno virtual
python -m venv venv

# Activar entorno
venv\Scripts\activate       # Windows
source venv/bin/activate    # Linux/Mac

# Instalar dependencias
pip install -r requirements.txt
Configuración de base de datos
bash
Copiar código
mysql -u root -p < database/db_schema.sql
Variables de entorno (.env)
Ejemplo de configuración:

env
Copiar código
# App
APP_NAME=Docsflow
APP_ENV=development
APP_PORT=8000

# JWT
JWT_SECRET_KEY=tu_clave_secreta_muy_segura
JWT_ALGORITHM=HS256
JWT_EXPIRATIONS_MINUTES=30

# Base de datos
DB_USER=root
DB_PASSWORD=tu_password_mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=docsflow

# Subidas
UPLOAD_DIRECTORY=./uploads

# SMTP (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASSWORD=tu_app_password
SMTP_USE_TLS=true
SENDER_EMAIL=tu_email@gmail.com
EMAIL_DEBUG=true

# Frontend
FRONTEND_BASE_URL=http://localhost:5174

# CORS
CORS_ALLOWED_ORIGINS=["http://localhost:5174", "http://localhost:5173"]
Iniciar backend
bash
Copiar código
uvicorn app.main:application --reload --host 0.0.0.0 --port 8000
🎨 Frontend
bash
Copiar código
cd docsflow-front

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
Opcional: configurar ESLint con reglas más estrictas para TypeScript y React.

📚 API Endpoints principales
🔐 Autenticación
Método	Endpoint	Descripción	Acceso
POST	/auth/login	Iniciar sesión	Público
POST	/auth/forgot-password	Solicitar recuperación	Público
POST	/auth/reset-password	Restablecer contraseña	Público
POST	/auth/register	Registrar usuario	Solo Admin

👥 Usuarios
Método	Endpoint	Descripción	Acceso
GET	/users/me	Perfil del usuario	Autenticado
GET	/users/	Listar usuarios	Solo Admin

📄 Documentos
Método	Endpoint	Descripción	Acceso
POST	/documents/upload	Subir documento PDF	Autenticado
GET	/documents/	Listar documentos	Autenticado
GET	/documents/{id}	Ver documento	Autenticado
GET	/documents/{id}/status	Estado de procesamiento	Autenticado
GET	/documents/{id}/download	Descargar PDF	Autenticado
DELETE	/documents/{id}	Eliminar documento	Autenticado

📊 Tablas extraídas
Método	Endpoint	Descripción	Acceso
GET	/tables/{document_id}	Ver tablas	Autenticado
GET	/tables/search?q=...	Buscar en tablas	Autenticado
GET	/tables/{document_id}/export	Exportar CSV	Autenticado

📂 Estructura del proyecto
bash
Copiar código
docsflow-back/     # Backend con FastAPI
docsflow-front/    # Frontend con React + Vite
docs/              # Documentación del proyecto
Backend
bash
Copiar código
app/
├── config/           # Configuración
├── controllers/      # Endpoints
├── middlewares/      # Middlewares
├── repositories/     # Repositorios de datos
├── schemas/          # Modelos Pydantic
├── services/         # Lógica de negocio
├── utils/            # Utilidades
└── main.py           # Punto de entrada
Frontend
bash
Copiar código
src/
├── pages/            # Páginas principales
├── services/         # Conexión con API
├── routes/           # Definición de rutas
├── components/       # Componentes reutilizables
└── assets/           # Estilos e imágenes
🔒 Seguridad
JWT con expiración de 30 minutos

Hash de contraseñas con Bcrypt

Control de intentos fallidos (5 intentos para operadores)

Validación de archivos (solo PDF, máximo 15MB)

📝 Desarrollo y Testing
Logs de aplicación (backend):

bash
Copiar código
uvicorn app.main:application --reload --log-level debug
Generar PDF de prueba:

bash
Copiar código
python scripts/generate_sample_pdf.py
Documentación interactiva:

Swagger → http://localhost:8000/docs

ReDoc → http://localhost:8000/redoc

🤝 Contribución
Hacer un fork del proyecto

Crear rama feature:

bash
Copiar código
git checkout -b feature/nueva-funcionalidad
Commit de cambios:

bash
Copiar código
git commit -m "Agregar nueva funcionalidad"
Push de la rama:

bash
Copiar código
git push origin feature/nueva-funcionalidad
Crear Pull Request

📄 Licencia
Este proyecto está bajo la Licencia MIT.


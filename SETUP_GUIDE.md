# 🚀 Guía de Instalación y Ejecución - DocsFlow

## 📋 Requisitos Previos

- **Python**: 3.9+ (recomendado 3.11+)
- **Node.js**: 18+ (para el frontend)
- **MySQL**: 8.0+ (base de datos)
- **Git**: Para clonar el repositorio

## 🛠️ Instalación

### 1. Clonar el Repositorio
```bash
git clone <repository-url>
cd docsflow-proyect
```

### 2. Configurar Backend (Python/FastAPI)

#### a) Crear entorno virtual
```bash
# En Windows
python -m venv venv
venv\Scripts\activate

# En Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

#### b) Instalar dependencias
```bash
# Instalar desde requirements optimizado
pip install -r requirements_optimized.txt

# O instalar desde requirements completo (si prefieres)
pip install -r requirements.txt
```

#### c) Configurar variables de entorno
- Copia el archivo `.env.example` a `.env` (si existe)
- O edita `.env` con las siguientes configuraciones:

```env
# Backend API
VITE_API_URL=http://127.0.0.1:8000
VITE_NODE_ENV=development

# Aplicación
APP_NAME=Docsflow
APP_ENV=development
APP_PORT=8000

# JWT (⚠️ CAMBIAR EN PRODUCCIÓN)
JWT_SECRET_KEY=tu_clave_secreta_muy_segura_cámbiala
JWT_ALGORITHM=HS256
JWT_EXPIRATIONS_MINUTES=30

# Base de datos MySQL
DB_USER=root
DB_PASSWORD=tu_password_mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=docsflow

# Directorio de uploads
UPLOAD_DIRECTORY=./uploads

# SMTP (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=vmsamur2007@gmail.com
SMTP_PASSWORD=qngj ieoj jlfd eonn
SMTP_USE_TLS=true
SENDER_EMAIL=vmsamur2007@gmail.com
EMAIL_DEBUG=true

# Frontend URL
FRONTEND_BASE_URL=http://localhost:5174

# CORS
CORS_ALLOWED_ORIGINS=["http://localhost:5174", "http://localhost:5173"]
```

### 3. Configurar Base de Datos
Opción 1: Importar el archivo .sql en phpMyAdmin

Entra a phpMyAdmin.

Ve a la pestaña Importar.

Selecciona el archvio db_shemas.sql que esta dentro de la carpeta databases.

Opción 2: Importar desde terminal

mysql -u root -p docsflow < db_shemas.sql

(Cambia root por tu usuario).

### 4. Configurar Frontend (React/TypeScript)

#### a) Instalar dependencias
```bash
npm install
# o
yarn install
# o
pnpm install
```

## 🚀 Ejecución

### 1. Iniciar Backend
```bash
# Activar entorno virtual
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac

# Ejecutar servidor
python -m uvicorn app.main:application --host 127.0.0.1 --port 8000 --reload
```

El backend estará disponible en: `http://127.0.0.1:8000`
- API docs: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

### 2. Iniciar Frontend (en otra terminal)
```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5174`

## 🔧 Scripts Disponibles

### Backend
```bash
# Desarrollo
python -m uvicorn app.main:application --reload

# Producción
python -m uvicorn app.main:application --host 0.0.0.0 --port 8000
```

### Frontend
```bash
npm run dev      # Desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de producción
npm run lint     # Linter
```

## 📁 Estructura del Proyecto

```
docsflow-proyect/
├── app/                  
│   ├── config/           
│   ├── controllers/      
│   ├── middlewares/      
│   ├── repositories/     
│   ├── schemas/          
│   ├── services/           
│   ├── utils/              
│   └── main.py             
├── src/                    
│   ├── contexts/           
│   ├── hooks/              
│   ├── pages/              
│   ├── routes/             
│   ├── services/           
│   └── types/              
├── uploads/                
├── .env                    
├── requirements.txt        
└── package.json            
```

## 🔐 Credenciales por Defecto

- **Admin**: `admin@docsflow.com` / `admin123`

## 🛠️ Solución de Problemas Comunes

### Error de bcrypt
Si aparece error con bcrypt:
```bash
pip install bcrypt==4.1.3
```

### Error de conexión a MySQL
- Verificar que MySQL esté ejecutándose
- Verificar credenciales en `.env`
- Verificar que la base de datos `docsflow` existe

### Error de CORS
- Verificar que `FRONTEND_BASE_URL` en `.env` coincida con la URL del frontend
- Verificar `CORS_ALLOWED_ORIGINS`

### Puerto ocupado
```bash
# Verificar qué proceso usa el puerto
netstat -ano | findstr :8000  # Windows
lsof -i :8000                 # Linux/Mac

# Cambiar puerto en .env si es necesario
APP_PORT=8001
```

## 📚 Funcionalidades

- ✅ **Autenticación JWT** con roles (admin/operador)
- ✅ **Subida y gestión de PDFs** por departamento
- ✅ **Extracción de contenido** de PDFs (texto y tablas)
- ✅ **Sistema de permisos** por departamento
- ✅ **Recuperación de contraseñas** por email
- ✅ **Bloqueo automático** de usuarios tras intentos fallidos
- ✅ **API RESTful** completamente documentada

## 🤝 Soporte

Si encuentras problemas durante la instalación o ejecución:
1. Verifica que todas las dependencias estén instaladas
2. Revisa los logs del backend y frontend
3. Verifica la configuración de `.env`
4. Asegúrate de que MySQL esté ejecutándose

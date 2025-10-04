
📂 Estructura del Proyecto DocsFlow

Este documento describe la organización de carpetas y archivos tanto en el frontend (React + TypeScript + Tailwind) como en el backend (FastAPI + MySQL).

🎨 Frontend (React + TypeScript + Tailwind)

Este documento explica el uso de cada carpeta y archivo en el frontend del proyecto DocsFlow, desarrollado con React + TypeScript + Tailwind.

frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── auth/
│   │   └── documents/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts



✅ Buenas prácticas:

Mantener componentes pequeños y reutilizables.

Centralizar llamadas a la API en services/.

Usar tipado estricto en types/.

Mantener pages/ como vistas y delegar la lógica a hooks/servicios.

⚙️ Backend (FastAPI + MySQL)

Este documento explica la organización de carpetas y archivos en el backend, que sigue una arquitectura MVC extendida con capas adicionales.

backend/
├── app/
│   ├── main.py
│   ├── config.py
│   ├── database.py
│   ├── routes.py
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── schemas/
│   ├── utils/
│   └── middlewares/
├── requirements.txt
└── .env.example

📁 Explicación

main.py → Punto de entrada de FastAPI.

config.py → Carga de variables de entorno.

database.py → Configuración de conexión a MySQL.

routes.py → Registro de routers.

📁 controllers/

Endpoints de la API.

auth_controller.py → login, registro.

users_controller.py → usuarios.

documents_controller.py → documentos.

📁 services/

Lógica de negocio.

auth_service.py → validación y tokens.

pdf_service.py → procesamiento de PDFs.

📁 repositories/

Acceso a la base de datos.

user_repo.py → CRUD usuarios.

document_repo.py → CRUD documentos.

📁 models/

Modelos internos (dataclasses/tablas).

📁 schemas/

Modelos Pydantic para requests/responses.

📁 utils/

Funciones auxiliares (hash, JWT, validaciones).

📁 middlewares/

Middlewares para CORS, logging, sesiones.
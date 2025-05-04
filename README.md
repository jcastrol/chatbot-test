# Proyecto: Aplicación de Chat


## 📅 Características
- Login falso mediante archivo JSON.
- Listado de chats por usuario.
- Vista de detalle de chat con persistencia en localStorage.
- Respuesta automática del bot usando un mock o usando OpenAI (gpt-3.5-turbo).
- Vista de perfil de usuario (read-only y editable).


---

## ⚙️ Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/proyecto-chat-openai.git
cd proyecto-chat-openai
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear un archivo `.env.local` en la raíz del proyecto:

```env
OPENAI_API_KEY=tu_clave_secreta_de_openai
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

---

## ⚖️ Decisiones técnicas y arquitectónicas

### Arquitectura principal
- **Next.js App Router**: estructura moderna basada en archivos.
- **Domain-Driven Design (DDD)**: se decidio hacer una separación clara entre dominio, infraestructura, aplicación y presentación.
- **MVVM**: cada vista tiene su propio ViewModel que orquesta los casos de uso.
- **Zustand + LocalStorage**: gestión de estado y persistencia ligera.

### Integración con OpenAI
- Implementación segura usando **Server Actions**.
- Adaptador de `BotService` que encapsula la lógica de OpenAI.

---

## ✨ Posibles mejoras
- [ ] Mejorar manejo de cookies.
- [ ] Autenticación real con JWT o Auth0.
- [ ] Base de datos real (PostgreSQL, MongoDB).
- [ ] Transmisión en tiempo real con WebSockets.
- [ ] Paginar chats y mensajes largos.
- [ ] Soporte para temas (claro/oscuro).
- [ ] Subida de imagen de avatar.
- [ ] feedback cuando "el bot está escribiendo".
- [ ] utilizar atomic desing para los componentes.

---

## 🚀 Aspectos adicionales
- Componentes reutilizables están organizados por capas: `domain`, `application`, `infrastructure`, `presentation`.
- El bot puede ser sustituido fácilmente por otra IA (gracias a la interfaz `BotService`).
- Toda la lógica de negocio está aislada y facil de testear.

---

## 📗 Licencia
MIT

---

## ✉️ Contacto
Creado por jhonny castro 


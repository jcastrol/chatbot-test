# Proyecto: Aplicación de Chat


## 📅 Características
- Login falso mediante data guardada en un archivo JSON.
- Listado de chats por usuario.
- Vista de detalle del chat con persistencia en localStorage.
- Respuesta automática del bot usando un mock o usando OpenAI (gpt-3.5-turbo) 
- Vista de perfil de usuario (read-only y editable).


---

## ⚙️ Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/jcastrol/chatbot-test.git
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
- **Next.js App Router**: estructura moderna basada en archivos separada por features .
- **Domain-Driven Design (DDD)**: se decidio hacer una separación clara entre dominio, infraestructura, aplicación y presentación.
- **MVVM**: Cada carpeta de presentación contiene su propia vista, la cual está asociada a un ViewModel independiente que se encarga de orquestar los casos de uso aplicados en dicha vista.
- **Zustand + LocalStorage**: gestión de estado y persistencia.

### Integración con OpenAI
- Implementación segura usando **Server Actions**.
- Adaptador de `BotService` que encapsula la lógica de OpenAI.
  
Nota:
si va a usar el api de open_ai debe descomentar el adaptador en los ViewModels de chat y comentar la instanciación del repository LocalBotService por motivos de tiempo no realice un feature flag para poder cambiar facilmente entre instansaciones 

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
- [ ] utilizar atomic desing para crear un sistema unificado de diseño.

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


---
description: Guía completa del SDK de JavaScript y aplicaciones web para Reachy Mini, que permite el control del robot desde el navegador sin instalación mediante WebRTC y Hugging Face Spaces.
title: SDK de JavaScript y Aplicaciones Web
slug: /es/reachymini_sdk_javascript-sdk
keywords:
- javascript
- web apps
- webrtc
- browser control
- hugging face spaces
- static apps
- zero install
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# SDK de JavaScript y Aplicaciones Web

Reachy Mini es compatible con **aplicaciones web completas en JavaScript** que se ejecutan totalmente en el navegador. Sin instalación, sin servidor, sin Python: solo abre una URL y controla tu robot desde cualquier dispositivo, incluido tu teléfono.

## ¿Por qué aplicaciones web?

El SDK de Python es potente pero requiere instalación, dependencias de GStreamer y una máquina capaz. Las aplicaciones web adoptan un enfoque diferente:

- **Cero instalación**: abres un enlace y listo. Ahorra espacio en disco y tiempo de configuración.
- **Multiplataforma**: funciona en cualquier dispositivo con navegador: portátil, tableta, teléfono.
- **Ejecuta desde cualquier lugar**: controla tu robot desde el otro lado del mundo.
- **Aprovecha el hardware del dispositivo**: usa el micrófono, los altavoces y la pantalla táctil de tu teléfono.
- **Compartición instantánea**: envía un enlace a alguien y podrá usar la app de inmediato.

Las aplicaciones web se despliegan como **Hugging Face Spaces estáticos** (`sdk: static`). No hay código del lado del servidor: el navegador se conecta directamente al robot mediante WebRTC a través de un servidor central de señalización.

> Las aplicaciones en Python no van a desaparecer. Las aplicaciones web son una opción complementaria, especialmente adecuadas para control ligero, acceso remoto y demostraciones rápidas.

## Arquitectura

```
┌─────────────────────────────────┐
│  Browser                        │
│  (your app + reachy-mini.js)    │
└───────┬────────────┬────────────┘
        │ SSE/HTTP   │ WebRTC (peer-to-peer)
        │ signaling  │ video + audio + data
┌───────▼──────┐     │
│  Signaling   │     │
│  Server      │     │
│  (HF Space)  │     │
└───────┬──────┘     │
        │            │
┌───────▼────────────▼────────────┐
│  Robot                          │
│  GStreamer WebRTC daemon        │
│  camera · mic · motors          │
└─────────────────────────────────┘
```

1. **Tu aplicación** es una página estática HTML/JS alojada en Hugging Face Spaces.
2. **reachy-mini.js** gestiona la autenticación, la señalización y la negociación WebRTC.
3. El **servidor de señalización** retransmite ofertas/respuestas SDP y candidatos ICE. También valida los tokens OAuth de Hugging Face.
4. Una vez establecida la conexión WebRTC, **el vídeo, el audio y los comandos fluyen de forma peer-to-peer**: el servidor de señalización deja de estar en el camino.

## Inicio rápido

### 1. Crea un Hugging Face Space

Crea un nuevo Space en [huggingface.co](https://huggingface.co/new-space) con `sdk: static`.

El front matter de tu `README.md` debería verse así:

```yaml
---
title: My Reachy Mini App
emoji: 🤖
sdk: static
pinned: false
hf_oauth: true
hf_oauth_expiration_minutes: 480
---
```

`hf_oauth: true` es obligatorio: habilita el botón de inicio de sesión de Hugging Face que el servidor de señalización utiliza para la autenticación.

### 2. Añade el SDK

En tu `index.html`, importa el SDK como un módulo ES:

```html
<script type="module">
import { ReachyMini } from "./reachy-mini.js";

const robot = new ReachyMini();
</script>
```

Puedes obtener `reachy-mini.js` del [ejemplo de referencia](https://huggingface.co/spaces/cduss/webrtc_example) o desde el CDN de npm:

```js
import { ReachyMini } from "https://cdn.jsdelivr.net/npm/@anthropic-robotics/reachy-mini/+esm";
```

### 3. Conéctate a tu robot

```js
// Authenticate with Hugging Face
if (!await robot.authenticate()) {
    robot.login();  // redirects to HF login page
    return;
}

// Connect to the signaling server
await robot.connect();

// Wait for robots to appear
robot.addEventListener("robotsChanged", (e) => {
    const robots = e.detail.robots;
    console.log("Available robots:", robots);
});

// Start a session with a specific robot
const detach = robot.attachVideo(document.querySelector("video"));
await robot.startSession(robotId);

// You're live — video is streaming, data channel is open
```

### 4. Controla el robot

```js
// Move the head (roll, pitch, yaw in degrees)
robot.setHeadPose(0, 10, -5);

// Move the antennas (right, left in degrees)
robot.setAntennas(30, -30);

// Play a sound file on the robot
robot.playSound("wake_up.wav");

// Send any JSON command via the data channel
robot.sendRaw({ my_custom_command: "hello" });
```

### 5. Recibir el estado del robot

```js
// Emitted every ~500ms while streaming
robot.addEventListener("state", (e) => {
    const { head, antennas } = e.detail;
    // head:     { roll, pitch, yaw }  — degrees
    // antennas: { right, left }       — degrees
});
```

### 6. Audio

```js
// Unmute robot speaker (muted by default in browser)
robot.setAudioMuted(false);

// Unmute your microphone (bidirectional audio, if robot supports it)
robot.setMicMuted(false);

// Check if bidirectional audio is available
robot.addEventListener("micSupported", (e) => {
    console.log("Mic supported:", e.detail.supported);
});
```

### 7. Limpieza

```js
detach();                    // remove video binding
await robot.stopSession();   // back to 'connected' state
robot.disconnect();          // close signaling (keeps auth)
robot.logout();              // clear HF credentials
```

## Referencia de la API

### Constructor

```js
new ReachyMini({
    signalingUrl: "https://cduss-reachy-mini-central.hf.space",  // default
    enableMicrophone: true,  // default — request mic on startSession()
})
```

### Máquina de estados

```
'disconnected' ──connect()──▸ 'connected' ──startSession()──▸ 'streaming'
     ▴ disconnect()                ▴ stopSession()
     └─────────────────────────────┘
```

### Propiedades (solo lectura)

| Property | Type | Description |
| :--- | :--- | :--- |
| `state` | `string` | `"disconnected"`, `"connected"`, o `"streaming"` |
| `robots` | `Array` | Robots disponibles: `[{ id, meta: { name } }]` |
| `robotState` | `Object` | `{ head: { roll, pitch, yaw }, antennas: { right, left } }` (grados) |
| `username` | `string\|null` | Nombre de usuario de HF después de `authenticate()` |
| `isAuthenticated` | `boolean` | Verdadero si hay un token válido de HF disponible |
| `micSupported` | `boolean` | Verdadero si el robot ofrece audio bidireccional |
| `micMuted` | `boolean` | Estado de silencio de tu micrófono |
| `audioMuted` | `boolean` | Estado de silencio del altavoz del robot (solo local) |

### Métodos

| Method | Returns | Description |
| :--- | :--- | :--- |
| `authenticate()` | `Promise<boolean>` | Comprueba si existe un token OAuth de HF |
| `login()` | — | Redirige a la página de inicio de sesión de HF |
| `connect()` | `Promise` | Abre la conexión SSE y recibe la lista de robots |
| `startSession(robotId)` | `Promise` | Negocia WebRTC; se resuelve cuando el vídeo y los datos están listos |
| `stopSession()` | `Promise` | Finaliza la sesión, vuelve a `connected` |
| `disconnect()` | — | Cierra la señalización (mantiene la autenticación) |
| `logout()` | — | Borra las credenciales de HF |
| `attachVideo(videoEl)` | `() => void` | Vincula el flujo de vídeo al elemento; devuelve una función de limpieza |
| `setHeadPose(roll, pitch, yaw)` | `boolean` | Establece la orientación de la cabeza en grados |
| `setAntennas(right, left)` | `boolean` | Establece las posiciones de las antenas en grados |
| `playSound(filename)` | `boolean` | Reproduce un archivo de sonido en el robot |
| `sendRaw(data)` | `boolean` | Envía JSON arbitrario a través del canal de datos |
| `requestState()` | `boolean` | Solicita una instantánea del estado |
| `setAudioMuted(muted)` | — | Silencia/activa el altavoz del robot (local) |
| `setMicMuted(muted)` | — | Silencia/activa tu micrófono |

### Eventos

Usa `robot.addEventListener(name, handler)` — el SDK amplía `EventTarget`.

| Event | Detail | Description |
| :--- | :--- | :--- |
| `connected` | `{ peerId }` | Conexión de señalización establecida |
| `disconnected` | `{ reason }` | Conexión de señalización perdida |
| `robotsChanged` | `{ robots }` | Lista de robots actualizada |
| `streaming` | `{ sessionId, robotId }` | Sesión WebRTC activa |
| `sessionStopped` | `{ reason }` | Sesión finalizada |
| `state` | `{ head, antennas }` | Actualización del estado del robot (~500 ms) |
| `videoTrack` | `{ track, stream }` | Pista de vídeo disponible |
| `micSupported` | `{ supported }` | Disponibilidad de audio bidireccional |
| `error` | `{ source, error }` | Error de `signaling`, `webrtc` o `robot` |

### Utilidades matemáticas

```js
import { rpyToMatrix, matrixToRpy, degToRad, radToDeg } from "./reachy-mini.js";

rpyToMatrix(roll, pitch, yaw)  // degrees → 4×4 rotation matrix (ZYX)
matrixToRpy(matrix)            // 4×4 matrix → { roll, pitch, yaw } in degrees
```

## Seguridad

- La autenticación se realiza mediante OAuth de Hugging Face: solo los usuarios conectados a HF pueden acceder al servidor de señalización.
- De forma predeterminada, solo puedes conectarte a robots registrados bajo tu propia cuenta de HF.
- Las conexiones WebRTC están cifradas (DTLS/SRTP).

## Requisitos previos

- Tu robot debe estar ejecutando el firmware inalámbrico y conectado al servidor central de señalización.
- El robot debe tener configurado un token válido de Hugging Face (consulta [Usage](/es/reachymini_platforms_reachy_mini_usage)).
- Actualmente solo es compatible con **versiones inalámbricas**.

## Ejemplo

Hay un ejemplo completamente funcional disponible como Hugging Face Space:
[cduss/webrtc_example](https://huggingface.co/spaces/cduss/webrtc_example)

Demuestra transmisión de vídeo, control de cabeza/antenas, audio bidireccional y reproducción de sonido, todo desde una única página HTML estática.

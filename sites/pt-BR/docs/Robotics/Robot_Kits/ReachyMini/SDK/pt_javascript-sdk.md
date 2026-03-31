---
description: Guia completo do SDK JavaScript e Web Apps para o Reachy Mini, permitindo controle do robô baseado em navegador sem instalação via WebRTC e Hugging Face Spaces.
title: SDK JavaScript & Web Apps
slug: /reachymini_sdk_javascript-sdk
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_javascript-sdk/
---

# SDK JavaScript & Web Apps

Reachy Mini é compatível com **web apps JavaScript completas** que rodam inteiramente no navegador. Sem instalação, sem servidor, sem Python — basta abrir uma URL e controlar seu robô de qualquer dispositivo, inclusive do celular.

## Por que Web Apps?

O SDK Python é poderoso, mas exige instalação, dependências do GStreamer e uma máquina capaz. As web apps adotam uma abordagem diferente:

- **Zero instalação** — abra um link e pronto. Economize espaço em disco e tempo de configuração.
- **Multiplataforma** — funciona em qualquer dispositivo com navegador: notebook, tablet, celular.
- **Execute de qualquer lugar** — controle seu robô do outro lado do mundo.
- **Aproveite o hardware do dispositivo** — use o microfone, alto-falantes e tela sensível ao toque do seu celular.
- **Compartilhamento instantâneo** — envie um link para alguém e essa pessoa pode usar o app imediatamente.

As web apps são implantadas como **Hugging Face Spaces estáticos** (`sdk: static`). Não há código no lado do servidor — o navegador se conecta diretamente ao robô via WebRTC, por meio de um servidor de sinalização central.

> Os apps em Python não vão desaparecer. As web apps são uma opção complementar, especialmente adequadas para controle leve, acesso remoto e demonstrações rápidas.

## Arquitetura

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

1. **Seu app** é uma página HTML/JS estática hospedada no Hugging Face Spaces.
2. **reachy-mini.js** cuida de autenticação, sinalização e negociação WebRTC.
3. O **servidor de sinalização** retransmite ofertas/respostas SDP e candidatos ICE. Ele também valida tokens OAuth do Hugging Face.
4. Depois que a conexão WebRTC é estabelecida, **vídeo, áudio e comandos fluem peer-to-peer** — o servidor de sinalização não fica mais no caminho.

## Início Rápido

### 1. Crie um Hugging Face Space

Crie um novo Space em [huggingface.co](https://huggingface.co/new-space) com `sdk: static`.

O front matter do seu `README.md` deve ser parecido com isto:

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

`hf_oauth: true` é obrigatório — isso habilita o botão de login do Hugging Face que o servidor de sinalização usa para autenticação.

### 2. Adicione o SDK

No seu `index.html`, importe o SDK como um módulo ES:

```html
<script type="module">
import { ReachyMini } from "./reachy-mini.js";

const robot = new ReachyMini();
</script>
```

Você pode obter `reachy-mini.js` do [exemplo de referência](https://huggingface.co/spaces/cduss/webrtc_example) ou do CDN do npm:

```js
import { ReachyMini } from "https://cdn.jsdelivr.net/npm/@anthropic-robotics/reachy-mini/+esm";
```

### 3. Conecte-se ao seu robô

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

### 4. Controle o robô

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

### 5. Receba o estado do robô

```js
// Emitted every ~500ms while streaming
robot.addEventListener("state", (e) => {
    const { head, antennas } = e.detail;
    // head:     { roll, pitch, yaw }  — degrees
    // antennas: { right, left }       — degrees
});
```

### 6. Áudio

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

### 7. Limpeza

```js
detach();                    // remove video binding
await robot.stopSession();   // back to 'connected' state
robot.disconnect();          // close signaling (keeps auth)
robot.logout();              // clear HF credentials
```

## Referência da API

### Construtor

```js
new ReachyMini({
    signalingUrl: "https://cduss-reachy-mini-central.hf.space",  // default
    enableMicrophone: true,  // default — request mic on startSession()
})
```

### Máquina de Estados

```
'disconnected' ──connect()──▸ 'connected' ──startSession()──▸ 'streaming'
     ▴ disconnect()                ▴ stopSession()
     └─────────────────────────────┘
```

### Propriedades (somente leitura)

| Property | Type | Description |
| :--- | :--- | :--- |
| `state` | `string` | `"disconnected"`, `"connected"`, ou `"streaming"` |
| `robots` | `Array` | Robôs disponíveis: `[{ id, meta: { name } }]` |
| `robotState` | `Object` | `{ head: { roll, pitch, yaw }, antennas: { right, left } }` (graus) |
| `username` | `string\|null` | Nome de usuário HF após `authenticate()` |
| `isAuthenticated` | `boolean` | Verdadeiro se um token HF válido estiver disponível |
| `micSupported` | `boolean` | Verdadeiro se o robô oferecer áudio bidirecional |
| `micMuted` | `boolean` | Estado de mudo do seu microfone |
| `audioMuted` | `boolean` | Estado de mudo do alto-falante do robô (somente local) |

### Métodos

| Method | Returns | Description |
| :--- | :--- | :--- |
| `authenticate()` | `Promise<boolean>` | Verifica se existe um token OAuth da HF |
| `login()` | — | Redireciona para a página de login da HF |
| `connect()` | `Promise` | Abre a conexão SSE, recebe a lista de robôs |
| `startSession(robotId)` | `Promise` | Negocia o WebRTC, resolve quando vídeo + dados estiverem prontos |
| `stopSession()` | `Promise` | Encerra a sessão, volta para `connected` |
| `disconnect()` | — | Fecha a sinalização (mantém a autenticação) |
| `logout()` | — | Limpa as credenciais da HF |
| `attachVideo(videoEl)` | `() => void` | Associa o fluxo de vídeo ao elemento; retorna função de limpeza |
| `setHeadPose(roll, pitch, yaw)` | `boolean` | Define a orientação da cabeça em graus |
| `setAntennas(right, left)` | `boolean` | Define as posições das antenas em graus |
| `playSound(filename)` | `boolean` | Reproduz um arquivo de áudio no robô |
| `sendRaw(data)` | `boolean` | Envia JSON arbitrário pelo canal de dados |
| `requestState()` | `boolean` | Solicita um instantâneo de estado |
| `setAudioMuted(muted)` | — | Ativa/desativa mudo do alto-falante do robô (local) |
| `setMicMuted(muted)` | — | Ativa/desativa mudo do seu microfone |

### Eventos

Use `robot.addEventListener(name, handler)` — o SDK estende `EventTarget`.

| Event | Detail | Description |
| :--- | :--- | :--- |
| `connected` | `{ peerId }` | Conexão de sinalização estabelecida |
| `disconnected` | `{ reason }` | Conexão de sinalização perdida |
| `robotsChanged` | `{ robots }` | Lista de robôs atualizada |
| `streaming` | `{ sessionId, robotId }` | Sessão WebRTC ativa |
| `sessionStopped` | `{ reason }` | Sessão encerrada |
| `state` | `{ head, antennas }` | Atualização de estado do robô (~500ms) |
| `videoTrack` | `{ track, stream }` | Faixa de vídeo disponível |
| `micSupported` | `{ supported }` | Disponibilidade de áudio bidirecional |
| `error` | `{ source, error }` | Erro de `signaling`, `webrtc` ou `robot` |

### Utilitários Matemáticos

```js
import { rpyToMatrix, matrixToRpy, degToRad, radToDeg } from "./reachy-mini.js";

rpyToMatrix(roll, pitch, yaw)  // degrees → 4×4 rotation matrix (ZYX)
matrixToRpy(matrix)            // 4×4 matrix → { roll, pitch, yaw } in degrees
```

## Segurança

- A autenticação é feita via OAuth do Hugging Face — somente usuários logados na HF podem acessar o servidor de sinalização.
- Por padrão, você só pode se conectar a robôs registrados na sua própria conta HF.
- Conexões WebRTC são criptografadas (DTLS/SRTP).

## Pré-requisitos

- Seu robô deve estar executando o firmware wireless e conectado ao servidor de sinalização central.
- O robô deve ter um token válido do Hugging Face configurado (veja [Usage](/pt-br/reachymini_platforms_reachy_mini_usage)).
- Atualmente compatível apenas com **versões wireless**.

## Exemplo

Um exemplo totalmente funcional está disponível como um Hugging Face Space:
[cduss/webrtc_example](https://huggingface.co/spaces/cduss/webrtc_example)

Ele demonstra streaming de vídeo, controle da cabeça/antenas, áudio bidirecional e reprodução de sons — tudo a partir de uma única página HTML estática.

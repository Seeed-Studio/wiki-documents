---
description: Crear un terminal de voz interrumpible en un dispositivo perimetral: qué placas y micrófono necesitas, cómo funciona realmente la lógica de barge-in y toma de turnos, la matriz de compatibilidad idioma × dispositivo y las cifras medidas de ASR/TTS en RK3576 con todo su alcance
title: 'IA de voz conversacional interrumpible en el Edge: creación, despliegue y resultados medidos'
keywords:
  - IA de voz conversacional
  - asistente de voz con barge-in
  - terminal de voz en el edge
  - matriz de micrófonos con AEC
  - Qwen3-ASR
  - Matcha-TTS
  - palabra de activación sherpa-onnx
  - RK3576
  - RK3588
  - RK1828
  - Jetson Orin NX
  - Chat Completions compatibles con OpenAI
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg
slug: /solutions/conversational-voice-ai
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Aviso de uso]
Esta es una **implementación de referencia**, no un producto certificado. La precisión del habla se ha evaluado en una sola placa (RK3576) y una sola configuración de modelo (Qwen3-ASR int4 en Orin NX); **10 de las 18 celdas en la matriz idioma × dispositivo son desplegables pero no tienen cifra medida**. El barge-in no tiene una cifra de latencia publicada: la aceptación es una prueba manual en la sala real y con el volumen real del altavoz. No planifiques en torno a una cifra que esta página no indique.
:::

## Qué hace esta solución

Alguien se acerca a un dispositivo y le habla. El dispositivo responde en voz alta, y cuando la persona empieza a hablar de nuevo a mitad de la respuesta, se detiene: de inmediato, no al final de la frase. Ese es todo el producto, y la parte que está diseñada en lugar de asumida es la detención.

Pensado para lugares donde una persona habla en voz alta con una máquina mientras tiene las manos ocupadas: mostradores de servicio, exposiciones y quioscos, frontales de voz para robots, terminales de hogar inteligente y de sala.

- Implementación de código abierto: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El procesamiento de voz es local en todas las configuraciones</h3>
                <p>Qwen3-ASR y Matcha-TTS se ejecutan en la propia placa perimetral. Solo el modelo de conversación puede ser remoto, y está detrás de una única variable de entorno.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>La interrupción requiere AEC por hardware</h3>
                <p>El micrófono debe exponer un canal de captura con el eco ya eliminado. Sin eso, la captura —que permanece abierta durante la reproducción— oye el propio altavoz del dispositivo y el terminal se interrumpe a sí mismo.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>El idioma se resuelve antes del arranque, no por enunciado</h3>
                <p>Un par (idioma, dispositivo) se convierte exactamente en un perfil de voz, y un par que no se pueda atender hace fallar el despliegue en lugar de degradarlo.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Una sola placa tiene un banco completo</h3>
                <p>RK3576, medido el 2026-09-06: 1,05% de tasa de error de caracteres en enunciados cortos en chino a través del endpoint sin conexión, síntesis a 0,204× en tiempo real.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## Qué hardware necesitas

Cuatro elementos in situ: una matriz de micrófonos, un altavoz, una placa perimetral y —si la conversación debe permanecer local— o bien una tarjeta aceleradora o una placa lo bastante grande para alojar un modelo de 4B.

**① La matriz de micrófonos** es el único componente sin sustituto. Debe hacer cancelación de eco acústico en hardware.

| | Micrófono | Por qué este |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>Matriz USB con AEC por hardware, supresión de ruido y conformación de haz | El valor predeterminado validado. Sus disposiciones de firmware de 2 y 6 canales se reconocen ambas y el canal procesado se selecciona automáticamente. Cualquier otra matriz vuelve al canal de captura 1 y necesita primero una comprobación acústica in situ. |

**② Un altavoz** — USB o analógico, en el mismo dispositivo. Silenciar el micrófono durante la reproducción no es una solución aceptable: elimina el eco y elimina con él el barge-in.

**③ El host de voz** ejecuta el reconocimiento, la síntesis y el agente residente. También decide qué idiomas puedes ofrecer:

| | Host de voz | Idiomas que puede servir | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU Rockchip, Qwen3-ASR W8A8 + Matcha | Chino, inglés | La placa de menor coste que ejecuta toda la pila de voz local, y la única con un banco publicado |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU Rockchip, añade Kokoro RKNN para TTS | Los 30 | Los otros 28 idiomas, o un host que más adelante pueda llevar una tarjeta RK1828 para conversación local |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha en la GPU | Los 30 | La placa se comparte con otra carga de trabajo de IA y necesita margen en la GPU. No inicies aquí un modelo local de 4B |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Voz más Qwen3.5-4B en la misma placa | Los 30 | El texto de la conversación no debe salir del sitio |

La serie reComputer R2000 también ejecuta la pila de voz por CPU (solo inglés, sherpa-onnx). Aún no se ofrece en el configurador, así que no hay un perfil de compra que citar; rechaza el chino por diseño, y el ASR y TTS solo por CPU comparten cuatro núcleos.

**④ Para conversación totalmente local en la ruta RK**, una tarjeta NPU RK1828 / RM182X PCIe detrás de un host RK3588 ejecuta Qwen3-4B. Necesita alimentación independiente de 12 V, su controlador de host y nodo de dispositivo, y solo mantiene un modelo grande residente a la vez.

Más allá de eso: internet y espacio libre en disco para el primer arranque (Orin NX necesita al menos 25 GB), y una red desde la que la herramienta de despliegue pueda alcanzar la placa.

## Cómo desplegar in situ

Dos partes: ajustar bien la acústica y luego ejecutar el asistente de despliegue.

### 1. Colocar el micrófono y el altavoz

:::tip[El canal AEC es el supuesto estructural]
Todo lo que viene después —barge-in, detección de turnos, la decisión de no silenciar durante la reproducción— asume que al canal de captura ya se le ha eliminado la salida del altavoz por hardware. Un micrófono sin eso producirá interrupciones falsas o un bucle de eco, y ningún ajuste de software lo recupera.
:::

- Usa el reSpeaker XVF3800 a menos que hayas medido una alternativa in situ. La disposición de canales de su firmware se detecta automáticamente; una matriz desconocida se queda por defecto en el canal 1.
- Mantén el altavoz a un volumen normal de sala para las pruebas de aceptación. Un dispositivo probado a bajo volumen puede fallar al volumen de operación por razones acústicas que no tienen nada que ver con los modelos.
- El reSpeaker puede conectarse antes del despliegue o enchufarse en caliente después. El agente selecciona el dispositivo físico de captura por identidad de producto USB estable, ignora las pseudoentradas HDMI/DP y se recupera de desconectar/conectar de nuevo sin reiniciar el contenedor.

### 2. Instalar el software

El despliegue se ejecuta desde la app SenseCraft Solution contra la placa por SSH (o localmente, si ya estás en un Jetson Orin con JetPack 6.2). Los pasos por dispositivo están en la guía de despliegue; el esquema son cuatro movimientos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Elige un preset**: compatible con cloud/OpenAI o totalmente local. Esta es la única elección que decide si algo sale del sitio.
2. **Elige el idioma de la conversación**: el despliegue convierte `(language, device)` en exactamente un perfil de voz antes de que arranque ningún servicio. Un par no compatible, como chino en la serie reComputer R2000, sale con código 2 y detiene todo `docker compose up`. Nada arranca parcialmente.
3. **Rellena el endpoint y la personalidad**: URL base, clave e ID de modelo para el preset en la nube (los valores por defecto son el endpoint Qwen de Pekín con `qwen3.5-flash`), más el prompt del sistema. Opcionalmente cambia de **Always listening** a **Wake word required** y escribe cualquier frase corta en chino o en inglés; el detector de vocabulario abierto sherpa-onnx la compila localmente al inicio.
4. **Verifica en el panel**: el panel web en el puerto 18000 muestra escuchando / pensando / hablando / interrumpido.

<!-- TODO image: the four dashboard states and a screen recording of one interruption — needs capture on a deployed device -->

 La aceptación son tres turnos en la sala real con volumen real de altavoz, interrumpiendo 0,5–1 s después de que empiece cada respuesta, confirmando que la respuesta anterior se detiene inmediatamente y que el enunciado que interrumpe no se pierde.

Tiempos: unos 30 minutos para un preset en la nube. Los presets totalmente locales tardan más porque el primer arranque descarga los artefactos de modelo; tras un arranque online satisfactorio todas las imágenes y artefactos quedan en caché y el dispositivo funciona sin conexión.

## Cómo conectarlo a tu propio sistema

**El punto de integración es el endpoint del LLM, no un bus de mensajes.** El agente llama a un API de Chat Completions en streaming compatible con OpenAI, y `LLM_BASE_URL` es donde pones tu propio servicio: un endpoint RAG sobre tus documentos, un framework de agentes con llamadas a herramientas, una capa de comandos de robot, un backend de pedidos o de tickets. Nada en la capa de voz cambia.

- **Usar un modelo alojado**: deja los valores por defecto o sustituye la URL base, la clave y el ID de modelo. El único requisito es compatibilidad con Chat Completions en streaming.
- **Usar tu propio servicio**: implementa la misma interfaz. El agente envía la transcripción como el turno del usuario y hace streaming de la respuesta hacia la síntesis, de modo que la primera frase empieza a reproducirse antes de que tu servicio haya terminado de generar.
- **Leer la capa de voz en bruto**: el WebSocket dúplex y los endpoints offline de abajo están disponibles directamente si quieres construir algo distinto al agente incluido sobre ellos.

### Lista completa de puertos y endpoints

Cada servicio escucha en red de host, así que `<host>` es la propia dirección del host de voz.

| Endpoint | Qué despliegue | Qué transporta |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | cada preset | La sesión dúplex: PCM de entrada, transcripción y PCM de TTS de salida, más el aborto que dispara una interrupción |
| `POST http://<host>:8621/asr` | cada preset | Transcripción offline de archivo completo: sin VAD, sin streaming. Las cifras de precisión del apéndice se midieron aquí |
| `POST http://<host>:8621/tts` | cada preset | Síntesis; la respuesta lleva una cabecera `x-rtf` con el factor en tiempo real |
| `GET http://<host>:8621/health` | cada preset | Disponibilidad; se usa como healthcheck de Compose |
| `http://<host>:18000` | cada preset | Panel web: estado del turno y transcripción de cada turno |
| `http://<host>:1828/v1`, `/health` | preset local RK3588 + RK1828 | Chat Completions compatibles con OpenAI para el Qwen3-4B en el dispositivo |
| `http://<host>:8000/v1`, `/health` | preset local Orin NX | Chat Completions compatibles con OpenAI para el Qwen3.5-4B en el dispositivo |
| `LLM_BASE_URL` (saliente) | preset en la nube | Cualquier endpoint compatible con OpenAI |

Las dos rutas locales exponen la misma interfaz que la ruta en la nube, por lo que cambiar entre ellas solo modifica una variable y nada más. No hay broker ni componente en la nube en la ruta de datos a menos que apuntes `LLM_BASE_URL` hacia fuera.

## Para ingenieros: detalles de implementación

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Voz: un protocolo, cuatro runtimes

El protocolo dúplex, la máquina de estados del agente y el resolvedor de perfiles son idénticos en todas las placas. Lo que cambia es el backend que ejecuta ASR y TTS.

| Host de voz | Backend / modelo de ASR | Backend / modelo de TTS | Perfil resuelto |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, codificador RKNN + decodificador RKLLM, W8A8 | `rk.tts` — matcha-icefall-zh-en, acústico ORT + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — igual que arriba | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (otros 28) | `rk.asr` — igual que arriba | `rk.tts` — Kokoro v1.0 híbrido, decodificador-frontal RKNN INT8 + prefijo/cola CPU ONNX | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, Vocos bf16/fp16 | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (otros 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| serie reComputer R2000 (en) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, CPU int8 | `cpu.sherpa` — voz sherpa-onnx CPU, int8 | `rpi5-default` |

Dos restricciones que conviene conocer antes de planear un port. El preset totalmente local de Orin NX ejecuta una imagen de **TensorRT-Edge-LLM v0.9.1** cuyo linaje de motores es independiente del preset Orin NX de LLM en la nube: lleva su propio id de dispositivo en la matriz para que un cambio de idioma se mantenga dentro de ese linaje, y los motores construidos para otra versión de TensorRT/JetPack fallan la comprobación de procedencia en lugar de cargarse. En el lado RK, los artefactos de modelo se descargan en el primer arranque (`RK1828_ARTIFACT_AUTO_DOWNLOAD=1`) y la tarjeta mantiene un único modelo grande residente a la vez.

### La matriz idioma × dispositivo, y por qué se niega

`profile-init` se ejecuta antes que cualquier otro servicio con `network_mode: none`, lee `language_device.yaml` y escribe exactamente un perfil resuelto más una pequeña superposición de variables de entorno. Tres resultados:

| `status` | Significado | Comportamiento del resolvedor |
|---|---|---|
| `measured` | La combinación exacta de ASR+TTS nombrada por el perfil tiene un número en el dispositivo en `evidence[]` | continúa |
| `unsupported` | Ningún perfil proporciona este par | **sale con 2**, `docker compose up` se detiene antes de que arranque ningún servicio |

El catálogo de idiomas es el conjunto de 30 idiomas del runtime RK (`qwen3asr_rk/python/qwen3asr/config.py:3-9`), deliberadamente el más estrecho de las dos listas disponibles (Qwen3-ASR aguas arriba anuncia 52 y Whisper 99), de modo que una sola lista cubre todas las placas y ninguna celda pierde un idioma.

Las tres celdas `unsupported` son chino en la serie reComputer R2000, y el grupo de los otros 28 en RK3576 y en la serie reComputer R2000. La negativa en chino es una decisión de diseño con un número detrás: el techo de Whisper en chino es un CER del 35–56% en todas las placas medidas, por lo que una degradación silenciosa produciría un despliegue que parece funcionar y no lo hace. RK3576 rechaza los otros 28 porque su única voz TTS es Matcha zh-en: la placa podría transcribir esos idiomas pero no podría hablar la respuesta.

Una desviación para releer cuando llegue el bench objetivo: la especificación multilingüe nombra Whisper + Kokoro para la columna "inglés y otros" en Orin NX / RK3576 / RK3588, pero ningún perfil en `configs/profiles/` empareja un backend de ASR Whisper con ningún backend de TTS: cada perfil Whisper allí es solo ASR. Hasta que se construya ese emparejamiento, esos carriles se enrutan a los perfiles combinados existentes, y cada celda registra el emparejamiento previsto bajo `planned_alternative`.

### Interrupción (barge-in): qué es lo que realmente detiene la respuesta

La interrupción es una cadena de cuatro condiciones, y la última es la parte que es fácil hacer mal.

| Etapa | Condición | Valor configurado |
|---|---|---|
| Captura durante la reproducción | El VAD del lado del micrófono sigue funcionando mientras se reproduce el TTS | `client_vad_backend` `silero` |
| Detección de voz | Probabilidad de voz de Silero, umbral nativo | `client_vad_threshold` `null` (el 0,5 propio de Silero, deliberadamente no es un valor RMS) |
| Mínimo de voz antes de que cuente | Filtra ruido transitorio | `client_vad_speech_min_ms` `200` |
| Fin de enunciado en el cliente | El cliente dispara EOS en lugar de esperar al servidor | `client_vad_silence_ms` `600`, `client_vad_drive_eos` `true` |
| Admisibilidad de la interrupción | La respuesta debe haber empezado realmente, y la interrupción debe ser de más de una sílaba | `barge_in_enabled` `true`, `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2` |
| **Cola de reproducción** | **El agente permanece en SPEAKING hasta que el búfer local queda audible vacío** | `playback_drain_enabled` `true`, `playback_drain_timeout_s` `15.0` |

**El vaciado de reproducción es la compuerta necesaria.** El servicio de voz señala `TTSDone` tan pronto como ha terminado de enviar PCM, mientras el búfer local de PortAudio sigue vaciándose de forma audible. Sin el vaciado, un enunciado real pronunciado en esa cola se clasifica como un nuevo turno en estado inactivo en lugar de como una interrupción: la respuesta antigua sigue reproduciéndose y las palabras del usuario caen en el estado equivocado. Desactivarlo no deshabilita la interrupción de forma visible; hace que la interrupción falle exactamente en la ventana en la que los usuarios realmente interrumpen.

Dos configuraciones más que parecen cosméticas y no lo son: `client_vad_backend` está fijada explícitamente en `silero` para que una imagen rota o personalizada falle de forma visible en lugar de retroceder silenciosamente al VAD de energía RMS fija, que fragmenta el habla y puede interrumpirse a sí mismo; y `asr_language` se fija a partir de la elección del operador en lugar de dejarse en `auto`, porque ese valor se convierte en el `asr_language` de la sesión y es el único control de idioma que tienen los backends RK y Jetson Qwen3-ASR.

### Toma de turnos: por qué la transcripción en vivo es más corta que el audio

El fin de turno **del lado del servidor** es independiente del VAD del cliente anterior. Usa silero con **400 ms de silencio** y `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, por lo que la sesión se finaliza en la primera pausa natural que oye. Una frase larga que contiene una pausa en mitad del enunciado se responde después de su primera cláusula. Esa es una política de toma de turnos ajustada para la latencia conversacional, no un fallo de reconocimiento — consulta el apéndice para ver la prueba de falsación que la estableció.

### Palabra de activación opcional

Seleccionar **Wake word required** cambia `pipeline_mode` de `always_on` a la fuente de palabra de activación sin reconstruir la imagen; los recursos KWS de vocabulario abierto de sherpa-onnx ya están dentro de ella.

| Configuración | Valor |
|---|---|
| `WAKEWORD_BACKEND` | `sherpa_onnx` |
| `WAKEWORD_PHRASE` | cualquier frase corta en chino o inglés (por defecto `你好小智`) |
| `WAKEWORD_THRESHOLD` | `0.25` |
| `WAKEWORD_MIC_SKIP_MS` | `120` |
| Confirmación | un tono corto de 880 Hz tras una detección correcta |

La frase se compila localmente al inicio y, junto con la sensibilidad, se conserva en el volumen de estado del agente. La escucha permanente sigue siendo el valor predeterminado, por lo que los despliegues manos libres existentes no se ven afectados.

## Apéndice: datos medidos {#measured-detail}

Esta sección es para lectores que quieran comprobar las cifras; omitirla no afecta al despliegue. Todo lo que sigue es una única pasada de medición en el hardware indicado, **no reproducida de forma independiente**, y no es ningún tipo de certificación.

### Qué se ha medido y qué no

| Elemento | Estado |
|---|---|
| Matriz idioma × dispositivo, 18 celdas | **5 medidas**, 10 desplegables pero no cuantificadas, 3 rechazadas |
| RK3576, chino e inglés, ASR + TTS + sesión en vivo | medido el 2026-09-06 |
| Orin NX, Qwen3-ASR 0.6B int4, chino | medido el 2026-07-04 — CER 0 en el conjunto dorado, en streaming y sin conexión |
| Latencia de conversación incluyendo un LLM | no recopilada — las cifras en vivo siguientes son en modo eco sin modelo en el bucle |

"Desplegable pero no cuantificada" significa que los componentes tienen cifras en dispositivo y la combinación en su conjunto no. No es una afirmación de que esas celdas rindan como las medidas.

### Detalle de RK3576

**Entorno.** reComputer serie RK3576, Debian 12 con el BSP de Rockchip. openvoicestream commit `a0b043a6` (rama `feature/language-device-resolver`), imagen `openvoicestream:rk-20260903.10` (`sha256:fdc480da3061…`). Script de bench y contenedor de voz en la misma máquina sobre `127.0.0.1:8621` — las cifras no incluyen ningún salto de red. Perfil resuelto `rk3576-default`.

**ASR a través del endpoint offline** (`POST /asr`, archivo completo, sin VAD y sin streaming — esto es capacidad del decodificador):

| Idioma | Conjunto | n | Error |
|---|---|---:|---:|
| Chino | enunciados cortos | 5 | 1.05% CER |
| Chino | formato largo, 10–20 s | 5 | 9.62% CER |
| Inglés | enunciados cortos | 5 | 3.65% WER / 1.11% CER |
| Inglés | formato largo, 10–20 s | 5 | 6.99% WER / 4.16% CER |

El inglés en formato largo recupera el texto completo de varias cláusulas en cada archivo; el error residual son deslices reales de reconocimiento (`"3:2"` transcrito como `"three to two"`), no truncamiento.

**ASR a través de la sesión en vivo** (`/v2v/stream`, valores predeterminados enviados `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), puntuado frente al texto de referencia completo:

| Idioma | Conjunto | n | Error |
|---|---|---:|---:|
| Chino | enunciados cortos | 5 | 29.09% CER |
| Chino | formato largo, 10–20 s | 5 | 84.06% CER |
| Inglés | enunciados cortos | 5 | 16.95% WER / 10.16% CER |
| Inglés | formato largo, 10–20 s | 5 | 63.38% WER / 62.58% CER |

**La hipótesis de que el decodificador estaba truncando se probó y se falsó.** Volver a ejecutar con `ASR_MAX_NEW_TOKENS=256` y `ASR_FINAL_STOP_ON_PUNCT=0` (lo que además requirió `RK_ARTIFACT_CONTRACT_STRICT=0` para evitar que la comprobación del contrato en tiempo de ejecución del conjunto de artefactos hiciera que el contenedor entrara en un bucle de fallos) produjo **transcripciones byte a byte idénticas** en ambos idiomas — por ejemplo `en_long_03` sigue finalizando como "To prevent possible infection of others." tras 43 mensajes y 7.5 s. Se confirmó en el log de arranque del servidor que la anulación se aplicó. Lo que termina el turno antes de tiempo es el endpoint de VAD (silero, 400 ms de silencio, 2.5 s de audio mínimo), no el presupuesto de tokens del decodificador ni su bandera de parada por puntuación. Relajar el endpoint para que un turno conversacional sobreviva a una pausa en mitad del enunciado es trabajo de seguimiento pendiente y no se hizo.

**TTS** (`POST /tts`, cabecera de respuesta `x-rtf` leída directamente del servidor, acústico Matcha ORT + RKNN Vocos, voz icefall zh-en):

| Idioma | n | Factor en tiempo real | Rango |
|---|---:|---:|---|
| Chino | 5 | 0.204 | 0.190–0.216 |
| Inglés | 5 | 0.194 | 0.158–0.216 |

Cada frase en inglés fue de 2.5–4.3 s de audio.

**Latencia de la sesión en vivo** — modo eco, sin LLM en el bucle:

| Medida | Idioma | n | p50 | media | mín–máx |
|---|---|---:|---:|---:|---|
| Fin del habla → ASR final (`stop_to_final`) | Chino | 10 | 1771 ms | 1732 ms | 1284–2049 ms |
| Fin del habla → primer frame de TTS (`stop_to_tts_audio`) | Chino | 5 | 3782 ms | 3640 ms | 3061–3892 ms |
| ASR final → primer frame de TTS (`final_to_tts_audio`) | Inglés | 5 | 1127 ms | 1126 ms | 1021–1232 ms |

**Reemplazado el 2026-09-20.** En una placa en reposo ejecutando la imagen `rk-20260913.3`, `stop_to_tts_audio` se volvió a medir en 1575/1624/1596/1580 ms (unos 1.6 s, n=4). Los 3782 ms anteriores fueron con toda probabilidad un agregado tomado mientras el segundo enunciado caducaba. En las mismas ejecuciones `stop_to_final` volvió en unos 5.1 s, mayor que la respuesta hablada a la que debería preceder, por lo que ni esa cifra ni los 1771 ms anteriores pueden citarse. Consulta `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` en openvoicestream.


**Una advertencia sobre los informes que se mantiene tal cual en lugar de encubrirse:** en cada ejecución inglesa de `/v2v/stream`, `stop_to_final` y `stop_to_tts_audio` devolvieron nulo mientras que `final_to_tts_*` en las mismas ejecuciones se rellenó con normalidad. Por tanto, la fila de latencia de ASR en inglés (media `eos_to_final` 2837 ms, n=5) procede de una ejecución separada de `asr_stream_ws_bench.py`, no de la ejecución V2V unificada, y se informa de `final_to_tts_audio` para inglés en lugar del viaje de ida y vuelta. No está resuelto si eso es una diferencia del endpoint de VAD sobre audio en inglés o un problema de indexación del script con `--multi 2`. La respuesta completa (frame final / `tts_done`) no se recopiló en ninguno de los dos idiomas.

**Corpus.** ASR reutiliza el corpus FLEURS existente (CC BY 4.0, comprobado por sha256), 5 cortos + 5 largos por idioma, en lugar de una nueva descarga de Common Voice. TTS usó 5 frases autoescritas por idioma. Las ejecuciones V2V usaron un clip de 3.84 s repetido con `--multi 2` para sortear un cierre temprano de sesión.

### Dónde se degrada

- **El micrófono decide más que la placa.** Cada cifra anterior supone un canal de captura con AEC por hardware. Un micrófono sin él produce interrupciones falsas o un bucle de eco, y ningún valor de configuración lo compensa.
- **La conversación en vivo no es el endpoint offline.** La diferencia entre 9.62% y 84.06% CER sobre el mismo audio es enteramente política de toma de turnos. Si tus enunciados contienen pausas en mitad de la frase, espera respuestas de primera cláusula hasta que se reajuste el endpoint.
- **El volumen del hablante importa en la aceptación.** Un terminal validado a bajo volumen puede fallar al volumen de operación por razones puramente acústicas.
- **Las cifras publicadas cubren la placa RK3576 y la configuración Orin NX Qwen3-ASR int4.** RK3588, Orin Nano, la serie reComputer R2000 y cada celda que no sea chino-ni-inglés son desplegables. Mídelas tú mismo antes de comprometerte con un objetivo de latencia o precisión.

## Fuentes de datos y recursos

- **FLEURS** — el corpus de ASR para el bench RK3576, CC BY 4.0. Los archivos se comprueban con sha256; la procedencia para la comparación cruzada de Whisper entre dispositivos está en `docs/perf/whisper-cross-device-20260827.md` en el repositorio openvoicestream.
- **Registros brutos de las ejecuciones** — `docs/perf/rk3576-matrix-20260906.md` en el repositorio openvoicestream contiene la salida completa del resolvedor, las líneas JSON de ASR por archivo, los volcados de cabeceras de TTS y el estado del contenedor antes y después. Cada cifra de esta página se remonta a una línea allí.
- **Modelos de voz** — Qwen3-ASR, Matcha-TTS (voz icefall zh-en), Kokoro v1.0, Qwen3-TTS CustomVoice y sherpa-onnx mantienen cada uno sus propios términos de licencia upstream. Confirma la licencia del modelo que despliegues antes de enviar un producto comercial; el runtime es agnóstico al modelo dentro de su interfaz documentada.
- Los corpus no se distribuyen con el repositorio y deben obtenerse por separado.

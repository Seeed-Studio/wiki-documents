---
description: Crear un terminal de voz interrumpible en un dispositivo perimetral - qué placas y micrófono necesitas, qué interfaces expone, la matriz de compatibilidad idioma × dispositivo y los resultados medidos de ASR/TTS en RK3576
title: 'IA de voz conversacional interrumpible en el Edge: creación, despliegue y resultados medidos'
keywords:
  - IA de voz conversacional
  - asistente de voz con barge-in
  - terminal de voz perimetral
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[Aviso de uso]
Esta es una implementación de referencia de código abierto, no un producto certificado. La precisión del habla solo se ha medido en RK3576 y en Orin NX (Qwen3-ASR int4).
:::

## Qué hace esta solución

Alguien se acerca a un dispositivo y le habla. El dispositivo responde en voz alta; si la persona empieza a hablar de nuevo a mitad de la respuesta, el dispositivo se detiene de inmediato en lugar de terminar la frase.

Diseñada para lugares donde una persona habla con una máquina mientras tiene las manos ocupadas: mostradores de servicio, exposiciones y quioscos, frontends de voz para robots, terminales de habitaciones y hogares inteligentes.

- Implementación de código abierto: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El habla permanece en el dispositivo</h3>
                <p>El reconocimiento (Qwen3-ASR) y la síntesis (Matcha-TTS) se ejecutan en el host perimetral. Con un preset totalmente local, el modelo de conversación también se ejecuta allí y el dispositivo funciona sin conexión después del primer arranque.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Conecta el micrófono e interrumpe</h3>
                <p>El reSpeaker XVF3800 realiza cancelación de eco en hardware y se detecta automáticamente por USB, incluido hot-plug. Habla mientras se reproduce la respuesta y el dispositivo se detiene.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto, funciona con tu backend</h3>
                <p>El código es abierto. La conversación pasa por una API compatible con OpenAI, así que apuntarla a tu propia base de conocimiento, agente o backend de pedidos es solo cambiar una URL; la capa de voz permanece igual.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Medido en chino e inglés</h3>
                <p>Medido en RK3576: 1,05% de tasa de error de caracteres en enunciados cortos en chino, síntesis a 0,204× en tiempo real. Los hosts RK3588 y Jetson ofrecen 30 idiomas.</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO imagen: matriz de micrófonos y altavoz instalados en un mostrador de servicio o quiosco — necesita una sesión de fotos en campo -->

## Qué hardware necesitas

Cuatro elementos en el sitio: una matriz de micrófonos, un altavoz y un host de voz; si el texto de la conversación no debe salir del sitio, también una tarjeta aceleradora o un host lo bastante grande para un modelo 4B.

**① La matriz de micrófonos** debe realizar cancelación de eco acústico (AEC) en hardware.

| | Micrófono | Notas |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>Matriz USB con AEC por hardware, supresión de ruido y conformación de haz | La opción validada por defecto. Se reconocen tanto las disposiciones de firmware de 2 canales como de 6 canales y el canal procesado se selecciona automáticamente. Otras matrices vuelven a capturar el canal 1 y necesitan una prueba acústica en el sitio antes de entrar en producción. |

**② Un altavoz**: USB o jack de 3,5 mm, en el mismo dispositivo. No silencies el micrófono durante la reproducción para evitar eco; eso también desactiva el barge-in.

**③ El host de voz** ejecuta el reconocimiento, la síntesis y el agente residente, y determina qué idiomas puedes ofrecer:

| | Host de voz | Idiomas que puede servir | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU Rockchip, Qwen3-ASR W8A8 + Matcha | Chino, inglés | Host de menor coste para toda la pila de voz local; los datos medidos en "Rendimiento y datos medidos" proceden de esta placa |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU Rockchip, añade Kokoro RKNN para TTS | Los 30 | Necesitas los 28 idiomas más allá de chino e inglés, o planeas añadir una tarjeta RK1828 para conversación local más adelante |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha en la GPU | Los 30 | El host también ejecuta otras cargas de trabajo de IA y necesita margen en la GPU. No ejecutes un modelo local 4B en él |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Voz más Qwen3.5-4B en el mismo host | Los 30 | El texto de la conversación no debe salir del sitio |

La serie reComputer R2000 también ejecuta una pila de voz en CPU (sherpa-onnx, solo inglés); aún no se ofrece en el configurador de la página de diseño de referencia. No admite chino, y ASR y TTS comparten cuatro núcleos de CPU.

**④ Conversación totalmente local en la ruta RK**: añade una tarjeta NPU PCIe RK1828 / RM182X a un host RK3588 para ejecutar Qwen3-4B. La tarjeta necesita su propia alimentación de 12 V y el host necesita el controlador y el nodo de dispositivo. Solo puede residir un modelo grande en la tarjeta a la vez.

Además: el primer arranque necesita acceso a internet y espacio libre en disco (al menos 25 GB en Orin NX), y la herramienta de despliegue debe poder alcanzar el host a través de la red.

## Cómo desplegar en el sitio

Instala primero el micrófono y el altavoz, luego ejecuta el asistente de despliegue.

### 1. Colocar el micrófono y el altavoz

:::tip[Comprueba que el micrófono tenga cancelación de eco por hardware]
El barge-in, la detección de turnos y mantener el micrófono abierto durante la reproducción requieren un canal de captura con la salida del altavoz ya eliminada por hardware. Un micrófono sin AEC por hardware provoca interrupciones falsas o un bucle de eco, y ningún ajuste de software soluciona eso.
:::

- Usa el reSpeaker XVF3800 por defecto. Si utilizas otra matriz, realiza primero una prueba acústica en el sitio; las matrices desconocidas usan por defecto el canal 1.
- Realiza la aceptación con el altavoz al volumen normal de la sala. Un terminal que pasa la prueba a bajo volumen puede fallar al volumen de operación por razones acústicas no relacionadas con los modelos.
- El reSpeaker puede conectarse antes del despliegue o enchufarse en caliente después de que el agente esté activo. El agente selecciona el dispositivo de captura por identidad de producto USB, ignora las pseudoentradas HDMI/DP y se recupera de desconectar/volver a conectar sin reiniciar el contenedor.

### 2. Instalar el software

La app SenseCraft Solution despliega en el host a través de SSH (o localmente, si estás en un Jetson Orin con JetPack 6.2). Los pasos por dispositivo están en la guía de despliegue; el esquema general son cuatro pasos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Elige un preset**: en la nube / compatible con OpenAI, o totalmente local. Con un preset en la nube, el texto de la conversación va a un endpoint externo; con un preset totalmente local, nada sale del sitio.
2. **Elige el idioma de la conversación**: el despliegue resuelve `(language, device)` a un único perfil de voz antes de iniciar los demás servicios. Un par no compatible, como chino en la serie reComputer R2000, sale con código 2 y detiene todo el `docker compose up`; nada se inicia a medias.
3. **Rellena el endpoint y la persona**: URL base, clave e ID de modelo para el preset en la nube (valores predeterminados: el endpoint Qwen de la región de Pekín con `qwen3.5-flash`), más el prompt del sistema. Puedes cambiar de **Always listening** a **Wake word required** y escribir cualquier frase corta en chino o en inglés; el detector de vocabulario abierto sherpa-onnx de la imagen la compila localmente al inicio.
4. **Verifica en el panel**: el panel web en el puerto 18000 muestra escuchando / pensando / hablando / interrumpido.

<!-- TODO imagen: los cuatro estados del panel y una grabación de pantalla de una interrupción — necesita captura en un dispositivo desplegado -->

Criterio de aceptación: tres turnos en la sala real con volumen real de altavoz, interrumpiendo 0,5–1 s después de que empiece cada respuesta. Comprueba que la respuesta anterior se detiene inmediatamente y que el enunciado de interrupción no se pierde.

Tiempo: unos 30 minutos para un preset en la nube. Los presets totalmente locales tardan más porque el primer arranque descarga los archivos de modelo; después de un arranque en línea correcto, las imágenes y los archivos de modelo se almacenan en caché y el dispositivo funciona sin conexión.

## Interfaces disponibles

El agente llama a una API de Chat Completions en streaming compatible con OpenAI. Apunta `LLM_BASE_URL` a tu propio servicio para integrarlo: un endpoint RAG sobre tus documentos, un framework de agentes con llamadas a herramientas, una capa de comandos para robots, un backend de pedidos o de tickets. La capa de voz no cambia.

- **Modelo alojado**: mantén los valores predeterminados o sustituye la URL base, la clave y el ID de modelo. El endpoint debe admitir Chat Completions en streaming.
- **Tu propio servicio**: implementa la misma interfaz. El agente envía la transcripción como turno de usuario y hace streaming de la respuesta hacia la síntesis, de modo que la primera frase empieza a reproducirse antes de que tu servicio termine de generarla.
- **Solo capa de voz**: para construir un agente diferente encima, llama directamente a los endpoints dúplex WebSocket y sin conexión que aparecen abajo.

### Lista completa de puertos y endpoints

Todos los servicios usan red en modo host, así que `<host>` es la propia dirección del host de voz.

| Endpoint | Qué despliegue | Qué transporta |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | todos los presets | La sesión dúplex: PCM de entrada, transcripción y PCM de TTS de salida, más el aborto que dispara una interrupción |
| `POST http://<host>:8621/asr` | todos los presets | Transcripción completa de archivo sin conexión, sin VAD y sin streaming. Las cifras de precisión sin conexión bajo "Rendimiento y datos medidos" se miden aquí |
| `POST http://<host>:8621/tts` | todos los presets | Síntesis; la cabecera de respuesta `x-rtf` transporta el factor de tiempo real |
| `GET http://<host>:8621/health` | todos los presets | Disponibilidad; se usa como healthcheck de Compose |
| `http://<host>:18000` | todos los presets | Panel web: estado del turno y transcripción de cada turno |
| `http://<host>:1828/v1`, `/health` | preset local RK3588 + RK1828 | Chat Completions compatibles con OpenAI para el Qwen3-4B en el dispositivo |
| `http://<host>:8000/v1`, `/health` | preset local Orin NX | Chat Completions compatibles con OpenAI para el Qwen3.5-4B en el dispositivo |
| `LLM_BASE_URL` (saliente) | preset en la nube | Cualquier endpoint compatible con OpenAI |

Ambas rutas locales exponen la misma interfaz que la ruta en la nube, así que al cambiar solo se modifica `LLM_BASE_URL`. A menos que apunte hacia fuera, no hay broker ni componente en la nube en la ruta de datos.

## Rendimiento y datos medidos {#measured-detail}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### Tiempos de ejecución y parámetros clave

El protocolo dúplex y el Agente son los mismos en todos los hosts; solo cambian los backends que ejecutan ASR y TTS.

| Host de voz | Backend / modelo de ASR | Backend / modelo de TTS | Perfil resuelto |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR, codificador RKNN + decodificador RKLLM, W8A8 | `rk.tts` — matcha-icefall-zh-en, acústico ORT + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — igual | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (otros 28) | `rk.asr` — igual | `rk.tts` — Kokoro v1.0 híbrido, decodificador frontal RKNN INT8 + prefijo/cola CPU ONNX | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.matcha_trt` — matcha-icefall-zh-en, Vocos bf16/fp16 | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (otros 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B, int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice, int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 series (English) | `cpu.sherpa_asr` — sherpa-onnx streaming zh-en, CPU int8 | `cpu.sherpa` — voz sherpa-onnx CPU, int8 | `rpi5-default` |

El preset totalmente local de Orin NX usa la imagen TensorRT-Edge-LLM v0.9.1; los engines construidos para otras versiones de TensorRT / JetPack no se cargan. En el lado RK, los archivos de modelo se descargan en el primer arranque.

**Matriz idioma × dispositivo.** El despliegue elige un perfil a partir de (idioma, dispositivo). De las 18 celdas, 15 son desplegables y 3 no son compatibles; de las celdas desplegables, 5 tienen mediciones de extremo a extremo y en las otras 10 cada componente tiene mediciones en el dispositivo. Las celdas no compatibles: chino en la serie reComputer R2000, y los "otros 28" idiomas en RK3576 y en la serie reComputer R2000. El chino no recurre a Whisper: en todas las placas medidas, el CER de chino de Whisper es del 35–56 %. RK3576 solo tiene la voz Matcha zh-en de TTS, así que puede transcribir los otros 28 idiomas pero no puede sintetizar una respuesta.

Tres parámetros que afectan a los resultados del despliegue:

- `barge_in_min_speaking_ms` `500`, `barge_in_min_chars` `2`: una interrupción solo cuenta una vez que la respuesta ha empezado a reproducirse y la interrupción dura más de una sílaba.
- `playback_drain_enabled` `true`: el Agente permanece en SPEAKING hasta que el búfer de reproducción local queda vacío. Con esto desactivado, el habla durante la cola de la respuesta se trata como un nuevo turno y la respuesta anterior sigue reproduciéndose.
- Fin de turno en el servidor: silero, 400 ms de silencio + `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`, terminando el turno en la primera pausa natural; una frase larga con una pausa en medio recibe respuesta solo a su primera cláusula.

### Mediciones de la serie reComputer RK3576

Condiciones: Debian 12 + Rockchip BSP, perfil `rk3576-default`; el script de prueba y el contenedor de voz se ejecutan en el mismo dispositivo y se comunican por `127.0.0.1:8621`, así que las cifras excluyen la transferencia de red.

**ASR en el endpoint sin conexión** (`POST /asr`, archivo completo, sin VAD, sin streaming):

| Idioma | Conjunto | n | Tasa de error |
|---|---|---:|---:|
| Chino | corto | 5 | CER 1,05 % |
| Chino | largo 10–20 s | 5 | CER 9,62 % |
| Inglés | corto | 5 | WER 3,65 % / CER 1,11 % |
| Inglés | largo 10–20 s | 5 | WER 6,99 % / CER 4,16 % |

Cada archivo largo en inglés volvió como texto completo de varias cláusulas; los errores restantes son desviaciones de reconocimiento (`"3:2"` transcrito como `"three to two"`), no truncamiento.

**ASR en una sesión en vivo** (`/v2v/stream`, valores de fábrica `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`), evaluado frente al texto de referencia completo:

| Idioma | Conjunto | n | Tasa de error |
|---|---|---:|---:|
| Chino | corto | 5 | CER 29,09 % |
| Chino | largo 10–20 s | 5 | CER 84,06 % |
| Inglés | corto | 5 | WER 16,95 % / CER 10,16 % |
| Inglés | largo 10–20 s | 5 | WER 63,38 % / CER 62,58 % |

La alta tasa de error en sesión en vivo proviene de la decisión de fin de turno en el servidor, no de truncamiento del decodificador: con `ASR_MAX_NEW_TOKENS` elevado a 256 y `ASR_FINAL_STOP_ON_PUNCT` puesto a 0, las transcripciones en ambos idiomas son idénticas byte por byte.

**TTS** (`POST /tts`, leído de la cabecera de respuesta `x-rtf`, acústico Matcha ORT + RKNN Vocos, voz icefall zh-en):

| Idioma | n | Factor de tiempo real | Rango |
|---|---:|---:|---|
| Chino | 5 | 0,204 | 0,190–0,216 |
| Inglés | 5 | 0,194 | 0,158–0,216 |

El audio en inglés por frase dura entre 2,5 y 4,3 s.

**Latencia en sesión en vivo** (modo eco, sin LLM en la cadena):

| Métrica | Idioma | n | Valor |
|---|---|---:|---|
| Fin del habla → primer frame de TTS (`stop_to_tts_audio`) | Chino | 4 | 1575 / 1624 / 1596 / 1580 ms (unos 1,6 s) |
| ASR final → primer frame de TTS (`final_to_tts_audio`) | Inglés | 5 | p50 1127 ms, media 1126 ms, 1021–1232 ms |
| Fin del habla → ASR final (`eos_to_final`) | Inglés | 5 | media 2837 ms |

El valor medido de chino para fin del habla → ASR final (`stop_to_final`) llega más tarde que la respuesta hablada y no se cita.

Reproducir: `docs/perf/rk3576-matrix-20260906.md` y `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` en el repositorio openvoicestream; `eos_to_final` en inglés con `asr_stream_ws_bench.py`.

### Mediciones de la serie reComputer J40

| Métrica | Valor | Condiciones |
|---|---|---|
| ASR en chino | CER 0 en el conjunto dorado, en streaming y sin conexión | Qwen3-ASR 0.6B int4 |

### Degradación conocida

- **Micrófono sin AEC por hardware.** Cada cifra anterior se tomó en un canal de captura con AEC por hardware. Sin él, el micrófono provoca interrupciones falsas o acople, y ningún valor de configuración lo compensa.
- **Pausas a mitad de frase.** Sobre el mismo audio, el endpoint sin conexión da CER 9,62 % y la sesión en vivo 84,06 %; la diferencia proviene de la política de toma de turnos, y el contenido después de una pausa a mitad de frase no recibe respuesta.
- **Volumen de aceptación por debajo del volumen de trabajo.** Un terminal que pasa la prueba a bajo volumen puede fallar a volumen de trabajo por razones acústicas.

### Próximos pasos

- Ajustar la detección de fin de turno en el servidor para que una pausa a mitad de frase ya no termine el turno antes de tiempo.
- Medir la latencia y la precisión de extremo a extremo para las otras 10 celdas desplegables de la matriz idioma × dispositivo.

## Fuentes de datos y recursos

- **FLEURS**: el corpus de ASR para las mediciones de RK3576, CC BY 4.0, 5 clips cortos y 5 largos por idioma, verificados por sha256. TTS usó 5 frases autoescritas por idioma. La fuente para la comparación de Whisper entre dispositivos es `docs/perf/whisper-cross-device-20260827.md` en el repositorio openvoicestream.
- **Registros brutos de ejecución**: `docs/perf/rk3576-matrix-20260906.md` en el repositorio openvoicestream; cada cifra de RK3576 anterior se corresponde con un registro allí.
- **Modelos de voz**: Qwen3-ASR, Matcha-TTS (voz icefall zh-en), Kokoro v1.0, Qwen3-TTS CustomVoice y sherpa-onnx mantienen cada uno sus términos de licencia originales. Comprueba la licencia de cada modelo que realmente despliegues antes de un envío comercial.
- Los corpus no se distribuyen con el repositorio; obténlos por separado.

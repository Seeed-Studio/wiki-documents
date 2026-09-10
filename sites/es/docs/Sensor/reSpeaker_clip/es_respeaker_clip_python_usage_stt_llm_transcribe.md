---
description: Aprende a crear tus propias aplicaciones para reSpeaker Clip con el SDK de Python para flujos de trabajo de Live STT (transmisión RTC) en tiempo real, transcripción, diarización y resúmenes. Este tutorial cubre comunicación por BLE y Wi‑Fi, transmisión de audio RTC, grabación de audio, sincronización de archivos, configuración del dispositivo y más.
title: Crea tu propia app para reSpeaker Clip con Live STT, Transcripción, Diarización y Resumen usando el SDK de Python
keywords:
  - reSpeaker clip
  - Live STT
  - RTC
  - en tiempo real
  - Transcribir
  - diarización
  - STT
  - Resumen
  - sdk
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 08/27/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/es/respeaker_clip_python_build_app/
---

## Introducción

**reSpeaker STT Web** transforma el reSpeaker Clip en un asistente de voz y de reuniones inteligente impulsado por IA, conectando hardware de audio embebido con tecnologías modernas de IA web y en la nube. Usando BLE o Wi‑Fi, sincroniza continuamente las grabaciones desde el dispositivo y las procesa mediante potentes canalizaciones de IA de voz y lenguaje. También añade una **pestaña de Live STT en tiempo real** que transmite el audio del micrófono del Clip por BLE (modo RTC) y lo transcribe a texto mientras hablas.

Con flujos de trabajo dedicados para **conversión de voz a texto en vivo y en tiempo real**, **transcripción de voz**, **diarización de hablantes** y **resúmenes de reuniones generados por IA**, los usuarios pueden convertir conversaciones en información estructurada y procesable, al instante o después. Creado con Python y una arquitectura modular, el proyecto proporciona una base flexible para que desarrolladores e ingenieros embebidos creen aplicaciones de voz e IA de próxima generación con el reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>

## Cómo funciona

La aplicación tiene **cuatro pestañas**. La pestaña **Live STT** es en tiempo real; las otras tres graban en la tarjeta SD y procesan después de que te detengas.

**Live STT (en tiempo real, solo BLE):**
1. Conéctate al Clip por BLE (escaneo automático o escanea y elige un dispositivo específico).
2. Pulsa **Start Streaming**. El backend envía `AT+START=RTC` (sesión en vivo, nada se escribe en la tarjeta SD) y luego `AT+DOWNLOAD=<session>` para iniciar la transmisión.
3. El Clip envía un **paquete Opus de 20 ms por fotograma** a través de BLE (característica File Data).
4. El backend decodifica cada paquete a PCM, ejecuta un **VAD en capas** (WebRTC + compuerta de energía adaptativa) y solo envía **enunciados de voz** completos a Groq; el silencio nunca se sube.
5. Las transcripciones se envían en vivo al navegador a través de un WebSocket como líneas de texto; un indicador `listening`/`SPEAKING` muestra el estado del VAD.
6. Pulsa **Stop** para vaciar el último enunciado y cerrar la transmisión (`AT+STOP`).

**Pestañas de grabar y procesar (BLE o WiFi):**
1. Conéctate al Clip por BLE (predeterminado) o WiFi.
2. Elige una pestaña y pulsa Start. El audio se transmite desde el dispositivo en segundo plano mientras graba (sincronización continua, igual que la herramienta original `clip-web`). La pestaña desde la que iniciaste decide la canalización que se ejecuta sobre esa grabación.
3. Detén la grabación. Una vez que termina la sincronización final, la aplicación:
   - codifica el audio combinado a `.ogg` (Opus),
   - lo convierte a un `.wav` mono de 16 kHz (mediante PyAV, no se necesita instalación separada de ffmpeg),
   - **Pestaña Transcription:** envía el `.wav` a Groq y recibe texto plano.
   - **Pestaña Diarization:** envía el `.wav` a Speechmatics con `diarization: "speaker"`, obtiene la transcripción JSON a nivel de palabra y la agrupa en turnos de hablante (`S1`, `S2`, ...).
   - **Pestaña Summary:** envía el `.wav` a Groq para transcripción y luego pasa la transcripción a la API de chat de Groq (`openai/gpt-oss-20b`) para generar minutas de reunión estructuradas (título, puntos clave, tareas, decisiones).
   - envía el resultado al navegador a través del WebSocket existente.
4. Cada pestaña tiene su propia lista de "Recordings" (filtrada por la canalización bajo la cual se grabó la sesión), con reproducción y un botón Process/Re-run por grabación.

> Las sesiones de Live STT nunca se almacenan en la tarjeta SD, por lo que no aparecen en las listas de Recordings; la transcripción es la salida.

## Claves de API

Cada pestaña tiene su propia tarjeta de Settings: clave de Groq en las pestañas Live STT, Transcription y Summary (compartida, se configura una vez y la usan las tres), y clave de Speechmatics en la pestaña Diarization. Nada está codificado ni se sube al repositorio. Las claves viven en memoria durante la vida del proceso del servidor. Marca "Remember on this machine" para guardarlas también en `app/settings.local.json` (ignorado por git) y que sobrevivan a un reinicio.

- **Groq:** consigue una clave en https://console.groq.com — se usa para Live STT (`whisper-large-v3-turbo`, llamadas por enunciado), transcripción (`whisper-large-v3-turbo`) y resumen (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** consigue una clave en https://portal.speechmatics.com — usa la API REST por lotes con `diarization: "speaker"` (enviar → sondear → obtener transcripción JSON → agrupar en turnos de hablante), punto de operación `enhanced` por defecto. Consulta [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) en su documentación.

## Estructura del proyecto

```
respeaker-stt-clip-rtc/
├── clip/                       # vendored Clip SDK (BLE/WiFi device control, RTC stream callbacks)
├── app/
│   ├── main.py                 # FastAPI app: device control + recording + live STT + pipelines
│   ├── stream.py               # RTCStreamManager: BLE RTC stream -> decode -> VAD -> Groq -> WebSocket
│   ├── opus_decode.py          # PyAV raw-Opus -> int16 PCM decoder (48 kHz, 20 ms frames)
│   ├── vad.py                  # StreamVAD: WebRTC VAD AND adaptive energy gate + hangover/pre-roll
│   ├── demo_sample_packets.json  # bundled Opus packets for no-hardware demo mode
│   ├── audio_convert.py        # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py               # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py             # STTProvider interface
│   │   ├── groq_provider.py    # transcribe() / transcribe_bytes() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html          # UI — Live STT + three record tabs, settings, results
├── reference/web/              # original browser-only Web Bluetooth streaming reference
├── docs/                       # project documentation
└── requirements.txt
```

Cada grabación sincronizada obtiene un `meta.json` (escrito al inicio de la grabación, registra a qué canalización pertenece la sesión) y, una vez procesada, un `transcript.json`. La salida de Live STT se transmite en vivo y no se guarda en disco.

## Requisitos

- Python 3.10+
- No se necesita instalación separada de ffmpeg: la conversión a WAV usa PyAV (`av` en PyPI), que incluye sus propias bibliotecas de códecs integradas, también en Windows
- `webrtcvad-wheels` para la capa VAD de WebRTC (si no se puede instalar, vuelve automáticamente a la compuerta de energía adaptativa)
- Un dispositivo reSpeaker Clip emparejado (BLE) para la grabación real; esta parte no se puede probar sin el hardware
- Para la pestaña **Live STT**: un Clip con firmware que admita **transmisión en vivo RTC** (`AT+START=RTC`) y transporte BLE (la transmisión RTC es solo por BLE)

## Configuración

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Luego abre `http://localhost:5000`.

Para transporte por WiFi en lugar de BLE (solo pestañas de grabación; Live STT requiere BLE):

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Descripción general de la interfaz

### Live STT (transmisión RTC)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-6.jpg" alt="pir" width={800} height="auto"/></p>

La tarjeta del dispositivo en la parte superior se comparte entre todas las pestañas: escanea Clips cercanos, elige el tuyo en la lista desplegable y luego pulsa **Connect**. Si Connect falla con un error de emparejamiento BLE en Windows, usa **Re-pair & Connect** para limpiar el vínculo obsoleto.

1. Añade tu **Groq API key** en la tarjeta de configuración de Live STT.
2. **Conéctate** al Clip (escaneo automático BLE o un dispositivo que hayas elegido tras escanear).
3. Pulsa **Start Streaming**. Habla: cada enunciado (voz seguida de silencio) se transcribe y aparece en el cuadro de transcripción en tiempo real. El indicador muestra `listening` / `SPEAKING`.
4. Ajusta los deslizadores de **WebRTC VAD aggressiveness** (0–3) y **energy threshold (dB)** para afinar cuán agresivamente se descarta el silencio.
5. Pulsa **Stop** para vaciar cualquier enunciado pendiente y finalizar la transmisión.

¿Sin hardware a mano? Marca **Demo (no device)**: los paquetes Opus incluidos se reproducen a través de la misma canalización de decodificación → VAD → Groq para que puedas verificar primero las claves y el ajuste.

### Transcription

Añade tu Groq API key. Pulsa el botón de grabación y, cuando quieras detenerte, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization

Añade tu Speechmatics API key. Pulsa el botón de grabación y, cuando quieras detenerte, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary

Añade tu Groq API key. Pulsa el botón de grabación y, cuando quieras detenerte, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con ellos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

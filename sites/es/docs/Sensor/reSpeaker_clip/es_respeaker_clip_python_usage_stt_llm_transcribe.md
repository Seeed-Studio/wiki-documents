---
description: Aprende a crear tus propias aplicaciones para reSpeaker Clip con el SDK de Python para flujos de trabajo de transcripción, diarización y resumen. Este tutorial cubre comunicación por BLE y Wi‑Fi, grabación de audio, sincronización de archivos, configuración del dispositivo y más.

title: Crea tu propia app para reSpeaker Clip con transcripción, diarización y resumen usando el SDK de Python
keywords:
  - reSpeaker clip
  - Transcribir
  - diarización
  - STT
  - Resumen
  - sdk
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 07/21/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/es/respeaker_clip_python_build_app/
---

## Introducción 

**reSpeaker STT Web** transforma el reSpeaker Clip en un asistente de voz y de reuniones inteligente con IA, conectando hardware de audio embebido con tecnologías modernas web y de IA en la nube. Usando BLE o Wi‑Fi, sincroniza continuamente las grabaciones desde el dispositivo y las procesa mediante potentes canalizaciones de IA de voz y lenguaje. Con flujos de trabajo dedicados para **transcripción de voz, diarización de hablantes y resúmenes de reuniones generados por IA**, los usuarios pueden convertir conversaciones en información estructurada y accionable. Desarrollado con Python y una arquitectura modular, el proyecto proporciona una base flexible para que desarrolladores e ingenieros embebidos creen aplicaciones de voz e IA de próxima generación con el reSpeaker Clip.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Cómo funciona

1. Conéctate al Clip por BLE (predeterminado) o WiFi.
2. Elige una pestaña y pulsa Iniciar. El audio se transmite desde el dispositivo en segundo plano mientras graba (sincronización continua, igual que la herramienta original `clip-web`). La pestaña desde la que iniciaste decide la canalización que se ejecuta sobre esta grabación.
3. Detén la grabación. Una vez que termina la sincronización final, la app:
   - codifica el audio combinado a `.ogg` (Opus),
   - lo convierte a un `.wav` mono de 16 kHz (mediante PyAV, no se necesita instalación separada de ffmpeg),
    - **Pestaña Transcription:** envía el `.wav` a Groq y recibe texto plano de vuelta.
    - **Pestaña Diarization:** envía el `.wav` a Speechmatics con `diarization: "speaker"`, obtiene la transcripción JSON a nivel de palabra y la agrupa en turnos de hablante (`S1`, `S2`, ...).
    - **Pestaña Summary:** envía el `.wav` a Groq para transcripción y luego pasa la transcripción a la API de chat de Groq (`openai/gpt-oss-20b`) para generar minutas de reunión estructuradas (título, puntos clave, tareas, decisiones).
    - envía el resultado al navegador a través del WebSocket existente.
4. Cada pestaña tiene su propia lista de "Recordings" (filtrada por la canalización bajo la cual se grabó la sesión), con reproducción y un botón Process/Re-run por grabación.


## Claves de API

Cada pestaña tiene su propia tarjeta de Settings: clave de Groq en las pestañas Transcription y Summary (compartida, se configura una vez y la usan ambas), clave de Speechmatics en la pestaña Diarization. Nada está codificado de forma fija ni se sube al repositorio. Las claves viven en memoria durante la vida del proceso del servidor. Marca "Remember on this machine" para guardarlas también en `app/settings.local.json` (incluido en `.gitignore`) para que sobrevivan a un reinicio.

- **Groq:** obtén una clave en https://console.groq.com — se usa tanto para transcripción (`whisper-large-v3-turbo`, llamada síncrona única y rápida) como para resumen (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** obtén una clave en https://portal.speechmatics.com — usa la API REST por lotes con `diarization: "speaker"` (enviar → sondear → obtener transcripción JSON → agrupar en turnos de hablante), punto de operación `enhanced` por defecto. Consulta [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) en su documentación.

## Estructura del proyecto

```
respeaker-stt-web/
├── clip/                   # vendored Clip SDK (BLE/WiFi device control)
├── app/
│   ├── main.py              # FastAPI app: device control + recording + pipeline orchestration
│   ├── audio_convert.py     # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py            # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py          # STTProvider interface
│   │   ├── groq_provider.py         # transcribe() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html       # UI — three tabs, each with recording controls, settings, results
├── recordings/               # synced audio + meta.json + transcript.json per session (gitignored)
└── requirements.txt
```

## Requisitos

- Python 3.10+
- No se necesita instalación separada de ffmpeg: la conversión a WAV usa PyAV (`av` en PyPI), que incluye sus propias bibliotecas de códecs integradas, también en Windows
- Un dispositivo reSpeaker Clip emparejado (BLE) para la grabación real; esta parte no se puede probar sin el hardware

## Configuración

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Luego abre `http://localhost:5000`.

Para transporte por WiFi en lugar de BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```
## Descripción general de la interfaz

### Transcription
Añade tu clave de API de Groq. Pulsa el botón de grabación y, cuando quieras detenerla, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization
Añade tu clave de API de Speechmatics. Pulsa el botón de grabación y, cuando quieras detenerla, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary
Añade tu clave de API de Groq. Pulsa el botón de grabación y, cuando quieras detenerla, pulsa stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Aprende cómo crear una aplicación para reSpeaker Clip con una capa de memoria usando el SDK de Python. Este tutorial cubre comunicación BLE y Wi‑Fi, grabación de audio, transcripción, diarización, resumen y coincidencia de memoria local para conversaciones repetidas.
title: Crea tu propia app para reSpeaker Clip añadiendo una capa de memoria usando el SDK de Python
keywords:
  - reSpeaker Clip
  - capa de memoria
  - Python SDK
  - transcripción
  - diarización
  - resumen
  - Firebase
  - SQL
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app_with_memory
sku: 100020126
last_update:
  date: 07/31/2026
  author: GitHub Copilot
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/respeaker_clip_python_build_app_with_memory/
---

## Introducción

Esta guía muestra cómo convertir el reSpeaker Clip en un asistente activado por voz que no solo transcribe, diariza o resume grabaciones, sino que también recuerda lo que se dijo antes. Al añadir una capa de memoria sobre el flujo de trabajo del SDK de Python, tu aplicación puede comparar nuevas transcripciones con conversaciones pasadas y avisarte cuando detecte una discusión similar.

El resultado es una base práctica para crear asistentes inteligentes para reuniones, tomadores de notas personales o aplicaciones de conocimiento controladas por voz con el reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="Aplicación de memoria de reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Cómo funciona

1. Conéctate al Clip mediante BLE (predeterminado) o Wi‑Fi.
2. Inicia una grabación desde la aplicación. El audio se transmite desde el dispositivo en segundo plano mientras hablas.
3. Detén la grabación. Una vez que se complete la sincronización, la aplicación:
   - codifica el audio combinado a `.ogg` (Opus),
   - lo convierte a un `.wav` mono de 16 kHz usando PyAV,
   - ejecuta el flujo de trabajo seleccionado para transcripción, diarización o resumen,
   - ejecuta la capa de memoria sobre el texto de la transcripción resultante,
   - envía el resultado y cualquier notificación de memoria al navegador a través del WebSocket existente.
4. Cada grabación se almacena con controles de reproducción y procesamiento, y la comprobación de memoria se ejecuta de nuevo si reprocesas la grabación.

## Qué hace diferente a esta versión

La capa de memoria añade un nuevo paso después del procesamiento de voz:

```text
reSpeaker Clip -> record -> STT / diarization / summary
                                  |
                                  v
                            embed transcript locally
                                  |
                                  v
                    compare with previous recordings
                                  |
                         match found or no match
```

Capacidades clave:

- No se almacena audio para la capa de memoria. Solo se conservan texto de transcripción, embeddings, marcas de tiempo y metadatos de coincidencia.
- El almacén vectorial local predeterminado usa archivos JSON y NumPy en la carpeta `data/`, por lo que funciona sin servicios en la nube.
- Si se encuentra una grabación similar, la aplicación puede mostrar una notificación emergente en la esquina como “ya hablaste de esto antes”.
- La capa de memoria es aditiva. No bloquea la transcripción o el resumen en sí si no se encuentra ninguna coincidencia.

## Flujos de trabajo compatibles

La aplicación admite cuatro patrones de flujo de trabajo:

- **Pestaña de transcripción**: transcripción de texto plano basada en Groq.
- **Pestaña de diarización**: transcripción etiquetada por hablante basada en Speechmatics.
- **Pestaña de resumen**: transcripción con Groq más acta de reunión generada por IA.
- **Capa de memoria**: se ejecuta en cada grabación, independientemente de la pestaña utilizada.

## Claves de API

Cada pestaña utiliza su propia configuración de proveedor:

- **Groq**: se usa para transcripción y resumen.
- **Speechmatics**: se usa para diarización y etiquetado de hablantes.
- **Firebase**: opcional si quieres cambiar a una opción de almacenamiento basada en Firestore para la capa de memoria.

Las claves no están codificadas de forma fija. Pueden almacenarse temporalmente en memoria para la sesión actual del servidor o persistirse localmente para uso futuro.

## Requisitos

- Python 3.10 o superior
- Un dispositivo reSpeaker Clip emparejado para grabación y transmisión reales
- No se necesita una instalación separada de ffmpeg porque PyAV incluye los códecs
- La integración opcional con la nube está disponible para equipos que quieran explorar Firebase u otro almacenamiento de memoria respaldado por base de datos

## Configuración

### Linux / macOS

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
python app/main.py
```

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

Copy-Item .env.example .env
python app/main.py
```

Luego abre `http://localhost:5000`.

Para transporte por Wi‑Fi en lugar de BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Estructura del proyecto

```text
respeaker-stt-memory/
├── clip/                     # vendored Clip SDK for BLE and Wi-Fi device control
├── app/
│   ├── main.py               # FastAPI app for device control, recording, and memory hooks
│   ├── audio_convert.py      # converts audio to 16kHz mono WAV
│   ├── config.py             # runtime settings and provider keys
│   ├── llm/
│   ├── stt/
│   ├── memory/               # memory layer implementation
│   │   ├── config.py         # threshold and model settings
│   │   ├── embeddings.py     # local embedding generation
│   │   ├── local_store.py    # local vector store
│   │   └── memory_service.py # matching and memory orchestration
│   └── static/
├── data/                     # local memories.json and memories.npy
├── recordings/               # synced audio and transcript outputs
├── requirements.txt
```

## Ajuste de la capa de memoria

Puedes ajustar el comportamiento de la capa de memoria modificando el umbral de similitud y el límite de búsqueda:

- **MEMORY_SIMILARITY_THRESHOLD**: súbelo si quieres menos coincidencias, bájalo si quieres más recuperación.
- **MEMORY_SEARCH_LIMIT**: controla cuántos vecinos más cercanos se consideran antes de aplicar el umbral.

Estos valores deben ajustarse a partir del uso real en lugar de adivinarse.

## Ampliación más allá del almacén local

La implementación predeterminada utiliza un almacén local basado en JSON y NumPy, lo que facilita probar la idea sin dependencias en la nube. Si más adelante quieres un backend más centralizado o con más capacidad de búsqueda, el diseño también es compatible con la idea más amplia de almacenamiento respaldado por Firebase o persistencia basada en SQL para equipos que quieran una memoria estructurada a largo plazo.

Esto convierte al proyecto en un buen punto de partida tanto para prototipos como para aplicaciones de voz más orientadas a producción.

## Descripción general de la interfaz

Añade tu clave de API de Groq o tu clave de API de Speechmatics, empieza a grabar y detente cuando termines. La aplicación mostrará entonces una breve notificación emergente con el resultado de la sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_memory_demo.png" alt="Interfaz de transcripción" width={800} height="auto" /></p>

## Descripción general de Firebase

Si quieres explorar una experiencia de memoria respaldada en la nube, Firebase puede usarse como una extensión opcional para almacenar y compartir recuerdos entre dispositivos. En la práctica, solo necesitas preparar la parte en la nube y configurar el backend para usarla. El flujo de trabajo de memoria local de la aplicación sigue siendo el predeterminado, y cambiar a Firebase requiere un pequeño ajuste en el backend para dirigir la capa de memoria al almacén en la nube en lugar de a los archivos locales.

Para más información, [consulta](https://github.com/KasunThushara/reSpeaker_Clip_Memory/tree/main/firebase)

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

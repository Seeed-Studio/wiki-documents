---
description: "Transmite audio Opus en vivo desde reSpeaker Clip por BLE con el RTC SDK: ejecuta la demo de FFT, entiende el establecimiento de sesión, escribe un receptor mínimo y decodifica audio en tiempo real."
title: Crea transmisión de audio en tiempo real con reSpeaker Clip RTC SDK
keywords:
  - reSpeaker clip
  - rtc streaming
  - audio en tiempo real
  - transmisión de audio en vivo
  - opus
  - ble
  - espectro fft
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 08/24/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/respeaker_clip_rtc_streaming/
---

# Crea transmisión de audio en tiempo real con reSpeaker Clip RTC SDK

Este tutorial te enseña cómo recibir audio en vivo desde un reSpeaker Clip mientras se está capturando, en lugar de grabar primero y descargar después. Ejecutarás una demo de espectro FFT en tiempo real, entenderás cómo se establece una sesión RTC, escribirás tú mismo una aplicación de streaming mínima y aprenderás cómo se ve realmente el audio en el host.

> **RTC aquí se refiere a la transmisión de audio en tiempo real de reSpeaker Clip, no a WebRTC.** No hay navegador, ni SDP, ni ICE: solo un Clip produciendo tramas Opus y una aplicación de Python consumiéndolas por BLE.

## 1. Introducción

### 1.1 ¿Qué es la transmisión RTC en reSpeaker Clip?

La grabación normal escribe audio en la tarjeta SD y luego lo descargas. La transmisión RTC omite por completo la tarjeta SD: el audio codificado se envía a tu host a medida que se produce.

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

La diferencia importa siempre que "ahora" importe: visualizaciones de espectro en vivo, ASR en streaming, detección de actividad de voz, canalizaciones de palabra de activación o un asistente de voz que deba reaccionar mientras el usuario aún está hablando.

### 1.2 Lo que aprenderás

Después de completar este tutorial serás capaz de:

- conectarte a un reSpeaker Clip con el Python SDK;
- crear una sesión RTC y recibir paquetes Opus en vivo;
- explicar el ciclo de vida completo de un flujo RTC;
- ejecutar la demo de FFT y leer su salida;
- crear tu propia aplicación en tiempo real sobre el RTC SDK.

## 2. Cómo funciona la transmisión RTC

### 2.1 Arquitectura de transmisión RTC

La ruta de audio en modo RTC es una canalización directa desde el micrófono hasta tu aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="Arquitectura de transmisión RTC: del micrófono a través del DSP y el codificador Opus hacia BLE y el Python SDK" width={900} height="auto" /></p>

En modo RTC el audio se produce en tiempo real, nunca toca la tarjeta SD y el host puede procesarlo mientras llega. Nada espera a que termine una grabación, porque no hay ningún archivo de grabación.

### 2.2 Ciclo de vida de una sesión RTC

Un flujo RTC se establece en dos pasos y luego fluye hasta que lo detienes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="Diagrama de secuencia del ciclo de vida de una sesión RTC entre la app de Python y reSpeaker Clip" width={900} height="auto" /></p>

Las dos llamadas se corresponden con un modelo mental sencillo:

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

Después de `start_rtc()` el dispositivo ejecuta la canalización del micrófono pero aún no te envía nada. Después de `stream_rtc()` el dispositivo empieza a enviar tramas `STREAM_DATA`, una por paquete Opus, hasta que `stop_recording()` termina la sesión con `STREAM_END`.

### 2.3 ¿Por qué RTC usa una sesión?

`start_rtc()` crea una sesión de audio en tiempo real y devuelve su ID de sesión. `stream_rtc(session, receiver)` entonces le dice al dispositivo: el host ahora quiere consumir el audio en vivo de esta sesión. Concretamente emite `AT+DOWNLOAD=<session>`, y el firmware descarta todo lo que estaba en cola antes de ese momento: RTC entrega el "ahora", así que el audio producido antes de que te suscribas nunca se envía.

Esta es la diferencia clave con la descarga de archivos: no pienses en una sesión RTC como un archivo que crece en el dispositivo. Es una fuente en vivo a la que te conectas, y cualquier cosa que te pierdas antes de conectarte se pierde por diseño.

## 3. Prepara el RTC SDK

### 3.1 Requisitos

- un reSpeaker Clip;
- firmware que admita transmisión RTC (la línea de desarrollo `feat/rtc-live-streaming`);
- Python 3.10+;
- un entorno BLE funcional en el host;
- el Python SDK de reSpeaker Clip obtenido desde el código fuente.

### 3.2 Instala el SDK

La transmisión RTC se distribuye en la rama de desarrollo, así que haz checkout de ella e instala el SDK con los extras de BLE y ejemplos:

```bash
git clone https://github.com/rayheto/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout feat/rtc-live-streaming

cd sdk
python -m pip install -e '.[ble,examples]'
```

Los dos extras son importantes para este tutorial:

- `ble` instala el transporte BLE (Bleak);
- `examples` instala las dependencias que la demo de FFT necesita (decodificador Opus y NumPy).

El transporte Wi-Fi/UDP no necesita dependencias adicionales, pero la transmisión RTC en este tutorial se ejecuta sobre BLE.

## 4. Ejecuta la demo RTC FFT

Esta sección es tu verdadero punto de entrada: ejecuta primero la demo, entiéndela al final.

### 4.1 Inicia la demo

Desde la raíz del repositorio, ejecuta el ejemplo indicando la dirección de tu dispositivo:

```bash
python sdk/examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

Omite `--address` para escanear automáticamente un dispositivo BLE llamado "Clip", y omite `--duration` para transmitir hasta pulsar Ctrl-C:

```bash
python sdk/examples/demo_stream_fft_display.py
```

### 4.2 ¿Qué ocurre cuando inicia la demo?

Habla hacia el Clip mientras la demo se ejecuta. El terminal muestra un espectro Unicode en vivo que se mueve con tu voz, construido a partir de esta canalización en el host:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Canalización de la demo FFT: Clip por BLE hacia StreamReceiver, JitterBuffer, decodificador Opus, PCM, FFT y espectro en el terminal" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="Grabación de terminal de la demo de espectro RTC FFT en vivo" width={900} height="auto" /></p>

> El espectro que ves proviene de audio que se está transmitiendo por BLE **en este mismo momento**, no de una grabación almacenada en el dispositivo. Mueve la mano frente al micrófono y las barras reaccionan en una fracción de segundo.

### 4.3 Entender la salida de la demo

Cuando el flujo termina, la demo imprime estadísticas. Las más significativas son:

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 35 ms)
```

- **frames received / bytes received** — cuántos paquetes Opus llegaron y su tamaño total.
- **avg inter-frame** — el intervalo medio entre llegadas de paquetes. RTC produce una trama Opus aproximadamente cada 20 ms, así que mientras el flujo se ejecuta deberías ver alrededor de 50 paquetes por segundo y una media cercana a 20 ms.
- **seq discontin.** — discontinuidades de secuencia observadas; en un enlace BLE saludable esto se mantiene en 0.

Debajo de esto, la demo también imprime estadísticas del JitterBuffer (faltas de datos, descartes de recuperación, distribución de profundidad de cola) y un desglose de latencia (cola / decodificación / FFT). La Sección 7 explica qué significan.

## 5. Crea una aplicación mínima de transmisión RTC

Esta sección es el núcleo del tutorial: el mismo establecimiento RTC que realiza la demo, reducido a su esencia para que puedas construir sobre él.

### 5.1 Conéctate a reSpeaker Clip

Todo comienza con el transporte y el cliente, exactamente como en la [Guía básica del SDK](/es/respeaker_clip_basic_sdk_guide):

```python
import asyncio

from clip import BleTransport, ClipClient


async def main() -> None:
    transport = BleTransport(name="Clip")   # or BleTransport(address="AA:BB:CC:DD:EE:FF")

    async with ClipClient(transport) as clip:
        ...  # the rest of this tutorial goes here


asyncio.run(main())
```

`BleTransport` posee la comunicación BLE; `ClipClient` te ofrece las APIs de alto nivel del Clip sobre ella.

### 5.2 Crea un StreamReceiver

El receptor convierte las tramas entrantes del flujo en invocaciones de callbacks. El consumidor más simple posible imprime la longitud de cada paquete:

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

Una invocación de callback equivale a un paquete Opus. `on_frame` se ejecuta en línea en la ruta de recepción, así que mantenlo no bloqueante: entrega los bytes a una cola, un hilo u otra tarea, y realiza el trabajo pesado en otro lugar.

### 5.3 Inicia una sesión RTC

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

Esto envía `AT+START=rtc`; el dispositivo inicia su canalización de audio RTC y devuelve el ID de sesión. En este punto el dispositivo solo está produciendo audio: el host aún no se ha suscrito y nada está fluyendo hacia ti.

### 5.4 Empieza a recibir audio RTC

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` conecta tu receptor a la ruta de tramas del transporte y emite `AT+DOWNLOAD=<session>`; a partir de ahora el dispositivo envía tramas `STREAM_START` y luego `STREAM_DATA` al `receiver`. `wait_start()` devuelve una vez que ha llegado `STREAM_START`: ese es el momento en que el canal de datos en vivo queda realmente establecido.

El `token` devuelto es un arrendamiento del hueco de manejador de tramas del transporte; lo liberarás cuando el flujo termine (Sección 5.6).

### 5.5 Recibe paquetes Opus

Volviendo a tu callback:

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

Este es el punto de entrada de tu aplicación. Lo que sea que construyas — FFT, VAD, ASR en streaming, un relay WebSocket — comienza a partir de estos bytes. La siguiente sección explica exactamente qué contienen.

### 5.6 Detén el flujo RTC

La detención refleja la API de grabación: `stop_recording()` envía `AT+STOP`, el dispositivo responde con `STREAM_END` y tú liberas el arrendamiento del manejador:

```python
await clip.stop_recording()
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

La aplicación mínima completa, ensamblada:

```python
import asyncio

from clip import BleTransport, ClipClient
from clip.stream import StreamReceiver


async def main() -> None:
    transport = BleTransport(name="Clip")
    async with ClipClient(transport) as clip:
        receiver = StreamReceiver(on_frame=lambda p: print(len(p)))

        session = await clip.start_rtc()
        token = await clip.stream_rtc(session, receiver)
        await receiver.wait_start(timeout=10)

        await asyncio.sleep(10)          # consume the live stream for 10 s

        await clip.stop_recording()
        await receiver.wait_end(timeout=5)
        transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

Por lo tanto, el ciclo de vida completo es:

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. Comprender los datos de audio RTC

### 6.1 ¿Qué devuelve StreamReceiver?

Tu callback recibe simples `bytes`: un paquete de audio codificado en Opus por llamada. No es WAV, no es PCM y no son notificaciones BLE en bruto: el SDK ya ha analizado las tramas de transporte RTC (`STREAM_START` / `STREAM_DATA` / `STREAM_END`) y solo te entrega la carga útil.

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

El receptor también mantiene estadísticas en vivo que puedes leer en cualquier momento: `frames_received`, `bytes_received`, `sequence_gaps`, `avg_inter_frame_ms`, `max_inter_frame_ms` y `first_frame_delay_s`. Después de `STREAM_END`, `receiver.end_reason` te indica por qué terminó el flujo (detenido, expirado o desconectado).

### 6.2 Formato de audio RTC

El flujo RTC actual es:

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

Por lo tanto, un frame aproximadamente cada 20 ms, es decir, unos 50 frames por segundo mientras el flujo se ejecuta: la misma cifra que viste en la salida `avg inter-frame` de la demo.

### 6.3 De Opus a PCM

Dado que la carga útil es Opus comprimido, no debes reinterpretarla como muestras:

```python
# WRONG — the packet is compressed Opus, not samples
import numpy as np
samples = np.frombuffer(opus_packet, dtype=np.int16)
```

Primero decodifica y luego trata el resultado como PCM:

```python
import opuslib

decoder = opuslib.Decoder(16000, 1)          # 16 kHz, mono
pcm = decoder.decode(opus_packet, 320)       # 320 samples = 20 ms
samples = np.frombuffer(pcm, dtype=np.int16)
```

Ese paso de decodificación es lo único que se interpone entre tu callback y muestras de audio reales, y es exactamente lo que la demo de FFT añade sobre la aplicación mínima que acabas de escribir.

## 7. Comprender demo_stream_fft_display.py

Esta sección relaciona la demo con lo que has aprendido, de modo que la demo deja de ser un "script mágico" y se convierte en "mi programa mínimo, más un decodificador, más una FFT".

### 7.1 Estructura de la demo

La demo es la estructura de la aplicación mínima con una cadena de procesamiento conectada a `on_frame`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Canalización de la demo FFT mapeada a componentes del SDK" width={900} height="auto" /></p>

`on_frame` alimenta cada paquete Opus en un objeto `LiveSpectrum`; un hilo en segundo plano regula el consumo a 20 ms por frame, decodifica, ejecuta la FFT y vuelve a dibujar una línea del terminal.

### 7.2 Establecimiento RTC en la demo

La función `run()` de la demo realiza exactamente la secuencia de la Sección 5:

```text
BleTransport / ClipClient          (5.1)
receiver = StreamReceiver(on_frame)  (5.2)
session = await clip.start_rtc()     (5.3)
token = await clip.stream_rtc(...)   (5.4)
await receiver.wait_start(timeout=10)
... frames flow ...
await clip.stop_recording()          (5.6)
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

Si entendiste la Sección 5, ya entiendes el corazón de la demo: todo lo demás es procesamiento de audio.

### 7.3 Decodificar audio RTC

La demo decodifica exactamente como en la Sección 6.3: un `opuslib.Decoder(16000, 1)` convierte cada paquete en 320 muestras int16. No necesitas saber cómo funciona internamente el códec Opus; el límite que importa es "el callback entrega bytes Opus, el decodificador entrega muestras PCM".

### 7.4 ¿Por qué la demo usa un búfer de jitter?

Las entregas BLE no llegan perfectamente uniformes. Podrías ver huecos entre frames como:

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

El `clip.jitter.JitterBuffer` del SDK suaviza esto en un ritmo de consumo constante:

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

La demo crea `JitterBuffer(depth_frames)` (por defecto 5 frames, es decir, 100 ms de llenado inicial), hace `put()` de cada paquete que llega desde `on_frame` y hace `get()` de un frame por cada tick de 20 ms desde el hilo de procesamiento. `get()` devuelve `None` cuando hay underrun (no se dibuja FFT para el silencio), y si el host se retrasa el búfer descarta los frames más antiguos para ponerse al día hacia el borde en vivo. Eso es todo lo que es un búfer de jitter: un pequeño amortiguador entre un productor irregular y un consumidor constante.

### 7.5 De PCM a FFT

Cada frame decodificado de 20 ms se ventana (Hann), se transforma con `np.fft.rfft`, se agrupa en 64 bandas de visualización y se dibuja como caracteres de bloque Unicode. Por lo tanto, el espectro en el terminal es la prueba de que toda la canalización funciona de extremo a extremo:

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

Cuando las barras se mueven mientras hablas, cada etapa de esa cadena —incluido el establecimiento RTC que construiste tú mismo en la Sección 5— está funcionando.

## 8. Próximos pasos

El SDK RTC entrega a tu aplicación audio en vivo listo para decodificar. Todo lo que viene después es tuyo:

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

Para control del dispositivo, grabación y descarga de archivos, consulta la [Guía básica del SDK de reSpeaker Clip](/es/respeaker_clip_basic_sdk_guide); para la configuración del producto, consulta [Primeros pasos](/es/respeaker_clip).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

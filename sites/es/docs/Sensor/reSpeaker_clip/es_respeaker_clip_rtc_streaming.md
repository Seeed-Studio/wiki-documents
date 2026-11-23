---
description: 'Transmite audio Opus en vivo desde reSpeaker Clip por BLE con el RTC SDK: ejecuta la demo de FFT, entiende el establecimiento de sesión, escribe un receptor mínimo y decodifica audio en tiempo real.'
title: Crea transmisión de audio en tiempo real con reSpeaker Clip RTC SDK
keywords:
  - reSpeaker clip
  - rtc streaming
  - real-time audio
  - live audio streaming
  - opus
  - ble
  - fft spectrum
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 11/20/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/es/respeaker_clip_rtc_streaming/
---

# Crea transmisión de audio en tiempo real con reSpeaker Clip RTC SDK

Este tutorial te enseña cómo recibir audio en vivo desde un reSpeaker Clip mientras se está capturando, en lugar de grabar primero y descargar después. Ejecutarás una demo de espectro FFT en tiempo real, entenderás cómo se establece una sesión RTC, escribirás tú mismo una aplicación de streaming mínima y aprenderás cómo se ve realmente el audio en el host.

> **RTC aquí se refiere a la transmisión de audio en tiempo real de reSpeaker Clip, no a WebRTC.** No hay navegador, ni SDP, ni ICE: solo un Clip produciendo tramas Opus y una aplicación de Python consumiéndolas por BLE.

## 1. Introducción

### 1.1 ¿Qué es el streaming RTC en reSpeaker Clip?

La grabación normal escribe audio en la tarjeta SD y lo descargas después. El streaming RTC omite por completo la tarjeta SD: el audio codificado se envía a tu host a medida que se produce.

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

La diferencia importa siempre que "ahora" importe: visualizaciones de espectro en vivo, ASR en streaming, detección de actividad de voz, canalizaciones de palabra de activación o un asistente de voz que deba reaccionar mientras el usuario aún está hablando.

### 1.2 Lo que aprenderás

Después de completar este tutorial serás capaz de:

- conectarte a un reSpeaker Clip con el SDK de Python;
- crear una sesión RTC y recibir paquetes Opus en vivo;
- explicar el ciclo de vida completo de un flujo RTC;
- ejecutar la demo de FFT y leer su salida;
- crear tu propia aplicación en tiempo real sobre el RTC SDK.

## 2. Cómo funciona el streaming RTC

### 2.1 Arquitectura de streaming RTC

La ruta de audio en modo RTC es una canalización directa desde el micrófono hasta tu aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="Arquitectura de streaming RTC: del micrófono a través del DSP y el codificador Opus hacia BLE y el SDK de Python" width={900} height="auto" /></p>

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

`start_rtc()` crea una sesión de audio en tiempo real y devuelve su ID de sesión. `stream_rtc(session, receiver)` entonces le dice al dispositivo: el host ahora quiere consumir el audio en vivo de esta sesión. Concretamente emite `AT+DOWNLOAD=<session>`, y el firmware descarta todo lo que se haya puesto en cola antes de ese momento: RTC entrega el "ahora", así que el audio producido antes de que te suscribas nunca se envía.

Esta es la diferencia clave con la descarga de archivos: no pienses en una sesión RTC como un archivo que crece en el dispositivo. Es una fuente en vivo a la que te conectas, y cualquier cosa que te pierdas antes de conectarte se pierde por diseño.

## 3. Preparar el RTC SDK

### 3.1 Requisitos

- un reSpeaker Clip;
- firmware **v0.1.5 o posterior**, la primera versión oficial con `AT+START=rtc` (compruébalo con `AT+VERSION` o `clip.firmware_version()`; si tu Clip ejecuta una versión anterior, actualízalo con la [Guía de actualización de firmware](/es/respeaker_clip#guía-de-actualización-de-firmware));
- Python 3.10+;
- un entorno BLE funcional en el host;
- el SDK de Python de reSpeaker Clip clonado desde el repositorio oficial [`Seeed-Studio/reSpeaker_Clip`](https://github.com/Seeed-Studio/reSpeaker_Clip).

### 3.2 Instalar el SDK

El streaming RTC se incluye en la versión oficial v0.1.5. Clona el repositorio oficial, cambia a esa etiqueta e instala el SDK con los extras de BLE y ejemplos:

```bash
git clone https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout v0.1.5

cd sdk
python -m pip install -e '.[ble,examples]'
```

La etiqueta fija la versión objetivo de este tutorial; `main` sigue la misma API RTC y recibe correcciones posteriores.

Los dos extras son importantes para este tutorial:

- `ble` instala el transporte BLE (Bleak);
- `examples` instala las dependencias que la demo de FFT necesita (decodificador Opus y NumPy).

El streaming RTC en vivo es solo por BLE en esta versión: se transporta en las notificaciones de datos de archivo BLE, no sobre el transporte Wi-Fi/UDP.

## 4. Ejecutar la demo RTC FFT

Esta sección es tu verdadero punto de entrada: ejecuta la demo primero, entiéndela al final.

### 4.1 Iniciar la demo

Desde el directorio `sdk` donde te dejó el paso de instalación, ejecuta el ejemplo indicando la dirección de tu dispositivo:

```bash
python examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

Omite `--address` para buscar automáticamente un dispositivo BLE llamado "Clip", y omite `--duration` para hacer streaming hasta pulsar Ctrl-C:

```bash
python examples/demo_stream_fft_display.py
```

Si solo quieres demostrar que el firmware publicado hace streaming antes de leer cualquier código, el SDK también instala `clip.stream`, que captura los mismos frames en vivo en `rtc-<session>.bin` e imprime diagnósticos del flujo:

```bash
clip.stream --transport ble --address AA:BB:CC:DD:EE:FF --duration 10
```

La demo también acepta `--depth-frames` para cambiar la profundidad del búfer de jitter (por defecto 5 tramas; `0` desactiva el almacenamiento en búfer).

### 4.2 ¿Qué ocurre cuando se inicia la demo?

Habla hacia el Clip mientras la demo se ejecuta. El terminal muestra un espectro Unicode en vivo que se mueve con tu voz, construido a partir de esta canalización en el host:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Canalización de la demo FFT: Clip por BLE hacia StreamReceiver, JitterBuffer, decodificador Opus, PCM, FFT y espectro en el terminal" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="Grabación de terminal de la demo de espectro FFT RTC en vivo" width={900} height="auto" /></p>

> El espectro que ves proviene de audio que se está transmitiendo por BLE **en este mismo momento**, no de una grabación almacenada en el dispositivo. Mueve la mano frente al micrófono y las barras reaccionan en una fracción de segundo.

### 4.3 Entender la salida de la demo

Cuando el flujo termina, la demo imprime estadísticas. Las más significativas son:

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 120 ms)
```

- **frames received / bytes received** — cuántos paquetes Opus llegaron y su tamaño total.
- **avg inter-frame** — el intervalo medio entre llegadas de paquetes. RTC produce una trama Opus aproximadamente cada 20 ms, así que mientras el flujo se ejecuta deberías ver alrededor de 50 paquetes por segundo y una media cercana a 20 ms.
- **seq discontin.** — eventos observados de discontinuidad de secuencia. El firmware incrementa el número de secuencia solo después de que una trama se haya entregado al enlace BLE, por lo que las pérdidas en la cola del dispositivo y en pausas no consumen números; considera un valor distinto de cero como una anomalía de protocolo o de enlace más que como un recuento directo de pérdida de paquetes.

Las cifras exactas varían según el enlace BLE y el tiempo que hagas streaming. Debajo de esto, la demo también imprime estadísticas del JitterBuffer (faltas de datos, descartes de recuperación, distribución de profundidad de cola) y un desglose de latencia (cola / decodificación / FFT). La sección 7 explica qué significan.

## 5. Crear una aplicación mínima de streaming RTC

Esta sección es el núcleo del tutorial: el mismo establecimiento RTC que realiza la demo, reducido a su esencia para que puedas construir sobre él.

### 5.1 Conectarse a reSpeaker Clip

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

### 5.2 Crear un StreamReceiver

El receptor convierte las tramas entrantes del flujo en invocaciones de callbacks. El consumidor más simple posible imprime la longitud de cada paquete:

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

Una invocación de callback equivale a un paquete Opus. `on_frame` se ejecuta en línea en la ruta de recepción, así que mantenlo no bloqueante: entrega los bytes a una cola, un hilo u otra tarea, y realiza el trabajo pesado en otro lugar.

### 5.3 Iniciar una sesión RTC

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

Esto envía `AT+START=rtc`; el dispositivo inicia su canalización de audio RTC y devuelve el ID de sesión. En este punto el dispositivo solo está produciendo audio: el host aún no se ha suscrito y nada está fluyendo hacia ti.

### 5.4 Empezar a recibir audio RTC

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` conecta tu receptor a la ruta de tramas del transporte y emite `AT+DOWNLOAD=<session>`; a partir de ahora el dispositivo envía tramas `STREAM_START` y luego `STREAM_DATA` al `receiver`. `wait_start()` devuelve una vez que ha llegado `STREAM_START`: ese es el momento en que el canal de datos en vivo queda realmente establecido.

Antes de enviar `STREAM_START`, el firmware espera parámetros de conexión BLE ajustados (hasta unos 5 segundos), así que un breve retraso aquí es normal y `timeout=10` deja margen.

El `token` devuelto es un arrendamiento sobre la ranura del manejador de tramas del transporte; lo liberarás cuando el flujo termine (Sección 5.6).

### 5.5 Recibir paquetes Opus

Volviendo a tu callback:

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

Este es el punto de entrada de tu aplicación. Sea lo que sea que construyas — FFT, VAD, ASR en streaming, un relé WebSocket — empieza a partir de estos bytes. La siguiente sección explica exactamente qué contienen.

### 5.6 Detener el flujo RTC

La detención refleja la API de grabación: `stop_recording()` envía `AT+STOP`, el dispositivo responde con `STREAM_END`, y liberas el arrendamiento del manejador:

```python
try:
    await clip.stop_recording()
    await receiver.wait_end(timeout=5)
finally:
    transport.detach_file_frame_handler(token)
```

Liberar el arrendamiento en `finally` mantiene limpia la ranura del manejador de tramas del transporte cuando el flujo falla o el script se interrumpe.

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
        try:
            await receiver.wait_start(timeout=10)

            await asyncio.sleep(10)      # consume the live stream for 10 s

            await clip.stop_recording()
            await receiver.wait_end(timeout=5)
        finally:
            transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

Por lo tanto, el ciclo de vida completo es:

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. Entender los datos de audio RTC

### 6.1 ¿Qué devuelve StreamReceiver?

Tu callback recibe simples `bytes` — un paquete de audio codificado en Opus por llamada. No es WAV, no es PCM y no son notificaciones BLE en bruto: el SDK ya ha analizado las tramas de transporte RTC (`STREAM_START` / `STREAM_DATA` / `STREAM_END`) y solo te entrega la carga útil.

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

El receptor también mantiene estadísticas en vivo que puedes leer en cualquier momento: `frames_received`, `bytes_received`, `sequence_gaps`, `avg_inter_frame_ms`, `max_inter_frame_ms` y `first_frame_delay_s`. Después de `STREAM_END`, `receiver.end_reason` te indica por qué terminó el flujo (detenido, expirado o desconectado).

Un receptor puede alimentar a más de un consumidor: `receiver.add_sink(sink)` registra un tap adicional de tramas en bruto que se ejecuta antes de `on_frame`. El SDK incluye dos sinks listos para usar — `StreamCapture` escribe los mismos paquetes Opus en un registro `.bin` con prefijo de longitud, y `StreamConsumer` envía bloques y pilas acotados a callbacks asíncronos para reenvío o ASR en streaming. El comando `clip.stream` de la Sección 4.1 está construido sobre `StreamCapture`.

### 6.2 Formato de audio RTC

El flujo RTC actual es:

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

Por lo tanto, un frame aproximadamente cada 20 ms, es decir, unos 50 frames por segundo mientras el flujo se ejecuta — la misma cifra que viste en la salida `avg inter-frame` de la demo.

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

Ese paso de decodificación es lo único que se interpone entre tu callback y muestras de audio reales — y es exactamente lo que la demo de FFT añade sobre la aplicación mínima que acabas de escribir.

## 7. Entender demo_stream_fft_display.py

Esta sección mapea la demo con lo que has aprendido, de modo que la demo deja de ser un "script mágico" y se convierte en "mi programa mínimo, más un decodificador, más una FFT".

### 7.1 Estructura de la demo

La demo es la estructura de la aplicación mínima con una cadena de procesamiento conectada a `on_frame`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="Canalización de la demo FFT mapeada a componentes del SDK" width={900} height="auto" /></p>

`on_frame` alimenta cada paquete Opus en un objeto `LiveSpectrum`; un hilo en segundo plano marca el ritmo de consumo a 20 ms por frame, decodifica, ejecuta la FFT y redibuja una línea del terminal.

### 7.2 Establecimiento RTC en la demo

La función `run()` de la demo realiza la secuencia exacta de la Sección 5:

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

Si entendiste la Sección 5, ya entiendes el corazón de la demo — todo lo demás es procesamiento de audio.

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

La demo crea `JitterBuffer(depth_frames)` (por defecto 5 frames, es decir, 100 ms de llenado inicial), hace `put()` de cada paquete que llega desde `on_frame`, y hace `get()` de un frame por cada tick de 20 ms desde el hilo de procesamiento. `get()` devuelve `None` cuando hay underrun (no se dibuja FFT para el silencio), y si el host se retrasa el búfer descarta los frames más antiguos para ponerse al día hacia el borde en vivo. Eso es todo lo que es un búfer de jitter: un pequeño amortiguador entre un productor irregular y un consumidor constante.

### 7.5 De PCM a FFT

Cada frame decodificado de 20 ms se ventana (Hann), se transforma con `np.fft.rfft`, se agrupa en 64 bandas de visualización y se dibuja como caracteres de bloque Unicode. Por lo tanto, el espectro en el terminal es la prueba de que toda la canalización funciona de extremo a extremo:

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

Cuando las barras se mueven mientras hablas, cada etapa de esa cadena — incluido el establecimiento RTC que construiste tú mismo en la Sección 5 — está funcionando.

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

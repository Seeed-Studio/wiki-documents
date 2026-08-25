---
title: Crea un sistema de activación visual y reconocimiento de voz sin conexión con reCamera Pro
description: Aprende a desplegar en reCamera Pro un sistema de reconocimiento de voz bilingüe en streaming, activado por la mirada y totalmente en el dispositivo, con vistas de estado en terminal, web y RTSP.
keywords:
  - reCamera Pro
  - RV1126B
  - RKNN
  - visual wake
  - speech recognition
  - Zipformer
  - edge AI
image: https://raw.githubusercontent.com/yyling0101-a11y/recamera_pro_face_stt/main/images/gpt_images.png
slug: /recamera_pro_visual_wake_stt
last_update:
  date: 2026-08-24
  author: yylin
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
sidebar_position: 1
url: https://wiki.seeedstudio.com/es/recamera_pro_visual_wake_stt/
---

# Crea un sistema de activación visual y reconocimiento de voz sin conexión con reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/gpt_images.png" /></div>

## Introducción

Este proyecto implementa un flujo de interacción natural y totalmente en el dispositivo para reCamera Pro (RV1126B). La cámara detecta un rostro y estima la pose de la cabeza. Solo después de que una persona haya mirado a la cámara de forma continua, la aplicación abre el micrófono y comienza el reconocimiento de voz en streaming. Luego entra en un breve periodo de enfriamiento para evitar activaciones repetidas.

Es adecuado para asistentes de voz, quioscos de exposición y puntos de entrada de voz en el borde con prioridad a la privacidad. La visión, la evaluación de la pose, las características de voz y la inferencia Zipformer se ejecutan localmente. El panel web no requiere ningún servicio en la nube, proceso de Node.js, CDN ni fuente externa.

El código fuente y las futuras versiones están disponibles en el [repositorio de GitHub recamera_pro_face_stt](https://github.com/yyling0101-a11y/recamera_pro_face_stt). El repositorio contendrá el proyecto completo después de que se envíe este directorio.

## Funciones y flujo de procesamiento

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

Los estados predeterminados son `IDLE`, `FACE_DETECTED`, `ATTENTION_PENDING`, `LISTENING` y `COOLDOWN`. Se acepta una mirada cuando el valor absoluto del yaw es como máximo 18° y el valor absoluto del pitch es como máximo 13°. Mantener esa pose durante 700 ms activa `LISTENING`. La captura de audio solo comienza en el estado de escucha, por lo que la aplicación no graba de forma continua.

## Requisitos de hardware

- Una reCamera Pro (RV1126B, aarch64)
- Un ordenador que pueda alcanzar el dispositivo mediante Ethernet virtual por USB o una LAN
- Un SDK de reCamera Pro funcional
- Elementos de GStreamer del firmware: `appsrc`, `videoconvert`, `jpegenc` y `rtpjpegpay`
- El dispositivo de audio PCM `ai_asr` proporcionado por el firmware

:::note
La entrada de audio predeterminada es `ai_asr`: 16 kHz, S16_LE, cuatro canales, canal 0 seleccionado. Esto evita competir con el proceso del proveedor que posee `hw:0,0`.
:::

## Obtener el proyecto

Después de que se publique el proyecto, clónalo en el host de desarrollo:

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
```

El repositorio contiene modelos de visión, modelos Zipformer, el panel web y el script de compilación cruzada. No mezcles versiones arbitrarias de RKNN Runtime: este proyecto usa **RKNN 2.3.2** y tiene como destino `rv1126b`.

## Compilar y desplegar

### 1. Configurar el SDK de reCamera Pro

El script de compilación busca el SDK en `/home/yylin/recamera_pro/recamera-pro-sdk` de forma predeterminada. Define esta variable cuando el tuyo esté en otro lugar:

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

`scripts/build_recamera.sh` también valida `librknnrt.so`. Si tu SDK o runtime usa otra ubicación, actualiza `qualified_rknnrt` en el script a un runtime RKNN 2.3.2 verificado, manteniendo el paso de validación de checksum.

### 2. Compilación cruzada

Desde la raíz del proyecto, ejecuta:

```bash
bash scripts/build_recamera.sh
```

El script valida el SDK, carga su entorno de compilación y crea `build-recamera/deploy/`:

```text
deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

### 3. Copiar el paquete de despliegue al dispositivo

Copia el **contenido** del directorio de despliegue en un único directorio de reCamera Pro. Para un dispositivo en `192.168.42.1`:

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
Mantén los directorios `models/` y `web/` en las rutas relativas mostradas. La aplicación usa esas rutas relativas predeterminadas para cargar sus recursos.
:::

## Ejecutar la aplicación

Ejecuta la aplicación desde su directorio de despliegue:

```bash
./visual_wake_app
```

Durante el funcionamiento normal, los eventos relevantes aparecen en la terminal:

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

### Opciones de lanzamiento

Usa el siguiente comando para ver todas las opciones que admite el ejecutable en el dispositivo:

```bash
./visual_wake_app --help
```

Las opciones se pueden combinar. Por ejemplo, este comando solo verifica el flujo de procesamiento visual y desactiva los servicios de red:

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

#### Cámara y activación visual

| Opción | Predeterminado | Descripción |
| --- | --- | --- |
| `--detector FILE` | `models/scrfd_500m_640_fp16.rknn` | Ruta al modelo RKNN de detección de rostros SCRFD. |
| `--landmark FILE` | `models/pfld_98_112_fp16.rknn` | Ruta al modelo RKNN de 98 puntos de referencia PFLD. |
| `--camera DEVICE` | `/dev/video13` | Dispositivo de cámara leído por GStreamer. |
| `--width N` | `1920` | Ancho de captura de cámara solicitado. |
| `--height N` | `1080` | Altura de captura de cámara solicitada. |
| `--fps N` | `30` | Velocidad de fotogramas de cámara solicitada; la velocidad de procesamiento depende del tiempo de inferencia. |
| `--attention-dropout-ms N` | `250` | Periodo de gracia, en milisegundos, para una breve pose no válida después de que comience la atención. Establece `0` para desactivarlo. |
| `--no-stt` | STT habilitado | No iniciar el reconocimiento de voz; probar solo la máquina de estados de activación visual. |

#### Reconocimiento de voz y detección de final de habla

| Opción | Predeterminado | Descripción |
| --- | --- | --- |
| `--stt-encoder FILE` | `models/stt/encoder-epoch-99-avg-1-rv1126b.rknn` | Ruta al modelo de codificador Zipformer. |
| `--stt-decoder FILE` | `models/stt/decoder-epoch-99-avg-1-rv1126b.rknn` | Ruta al modelo de decodificador Zipformer. |
| `--stt-joiner FILE` | `models/stt/joiner-epoch-99-avg-1-rv1126b.rknn` | Ruta al modelo de unión Zipformer. |
| `--stt-vocab FILE` | `models/stt/vocab.txt` | Ruta del vocabulario. Debe coincidir con el conjunto de modelos seleccionado. |
| `--audio-device NAME` | `ai_asr` | Nombre del dispositivo de audio ALSA/`arecord`. |
| `--audio-channels N` | `4` | Número total de canales en el PCM de entrada. |
| `--audio-channel N` | `0` | Canal que se va a usar; establece `-1` para promediar todos los canales. |
| `--stt-chunk-ms N` | `160` | Duración de cada fragmento de audio pasado a STT, en milisegundos. |
| `--speech-rms-threshold F` | `0.006` | Umbral RMS que detecta el inicio del habla; auméntalo en salas más ruidosas. |
| `--stt-min-speech-ms N` | `160` | Duración mínima de habla aceptada en una sesión de reconocimiento, en milisegundos. |
| `--stt-end-silence-ms N` | `2500` | Duración de silencio que finaliza el reconocimiento después de que comience el habla, en milisegundos. |
| `--stt-start-timeout-ms N` | `4000` | Tiempo de espera si el habla no comienza después de la activación visual, en milisegundos. |
| `--stt-max-ms N` | `30000` | Duración máxima de una sesión de escucha/reconocimiento, en milisegundos. |

#### RTSP, web y visualización en terminal

| Opción | Predeterminado | Descripción |
| --- | --- | --- |
| `--no-rtsp` | RTSP habilitado | Desactivar el flujo RTSP anotado con cajas de rostro, puntos de referencia y pose. |
| `--rtsp-port PORT` | `8554` | Puerto del servidor RTSP. |
| `--rtsp-mount PATH` | `/visual-wake` | Ruta de montaje RTSP; por ejemplo, `/demo` da `rtsp://DEVICE_IP:8554/demo`. |
| `--rtsp-width N` | `960` | Ancho de salida RTSP. |
| `--rtsp-height N` | `540` | Altura de salida RTSP. |
| `--rtsp-fps N` | `15` | Velocidad de fotogramas de salida RTSP declarada; la velocidad real depende del rendimiento de inferencia. |
| `--no-web` | Servicio web habilitado | Desactivar el panel HTTP y WebSocket. |
| `--web-port PORT` | `8080` | Puerto para el panel web y el endpoint de estado. |
| `--web-page PATH` | `web/dashboard.html` | Ruta a una página de panel personalizada. |
| `--dashboard` | Off | Mostrar un panel en la terminal interactiva local. No se puede combinar con `--debug`. |
| `--debug` | Off | Imprimir registros de inicio, por fotograma de pose, nivel de audio, RTSP, contrato de tensores y rendimiento de STT. No se puede combinar con `--dashboard`. |

## Dos formas de monitorizar el sistema

### Panel en terminal

Usa `--dashboard` en una terminal interactiva:

```bash
./visual_wake_app --dashboard
```

La terminal debe tener al menos 80×18 caracteres. El panel izquierdo muestra el estado de STT, texto parcial y resultados finales; el panel derecho muestra el recuento de rostros, el estado de orientación hacia la cámara, los ángulos de pose, el estado de los clientes RTSP y la latencia de visión. Pulsa `Ctrl-C` para restaurar la terminal normal. `--dashboard` no se puede combinar con `--debug`.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/dashboard.png" /></div>

### Panel web

De forma predeterminada, la aplicación inicia un servicio HTTP/WebSocket en cada interfaz de red. Abre esta dirección desde un ordenador o teléfono:

```text
http://DEVICE_IP:8080/
```

Para una conexión de red virtual por USB, por ejemplo:

```text
http://192.168.42.1:8080/
```

La página se conecta automáticamente a `ws://DEVICE_IP:8080/ws` y se reconecta tras las interrupciones. Muestra transcripciones parciales y finales, estado visual, recuento de rostros, yaw/pitch/roll, estado de RTSP y un gráfico de latencia. El endpoint de estado es `http://DEVICE_IP:8080/health`. Usa `--web-port 8081` para otro puerto, o `--web-page PATH` para una página personalizada.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/web.png" /></div>

## Ver el flujo de vídeo anotado

La aplicación inicia un servidor RTSP de forma predeterminada:

```text
rtsp://DEVICE_IP:8554/visual-wake
```

En el ordenador host, usa:

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

La superposición muestra cajas de rostro, los 98 puntos de referencia, yaw/pitch sin procesar, `facing=YES/NO` y el estado actual. El verde significa que la pose está dentro de los umbrales de entrada, el naranja significa que es válida pero está fuera de los umbrales, y el rojo significa que la pose no es válida.

## Ajuste fino

La colocación de la cámara, las características de la lente y el ruido de la sala afectan a la experiencia. Ajusta en este orden:

1. Usa `--debug` para observar yaw/pitch mientras miras a la cámara y luego ajusta los umbrales de entrada.
2. Ajusta `--attention-dropout-ms` para oclusiones breves; usa `0` para desactivar el periodo de gracia.
3. Observa el RMS de audio en el entorno objetivo y ajusta `--speech-rms-threshold`.
4. Usa `--stt-end-silence-ms`, `--stt-start-timeout-ms` y `--stt-max-ms` para equilibrar la capacidad de respuesta frente a comandos más largos.

El controlador utiliza suavizado EMA e histéresis de entrada/salida. Una sola pose no válida nunca activa la escucha y no borra inmediatamente un temporizador de atención activo, mientras que la pérdida de seguimiento de la cara restablece el estado de inmediato.

## Solución de problemas

| Problema | Causa probable | Solución |
| --- | --- | --- |
| La compilación no puede encontrar OpenCV o RKNN | Falta el entorno del SDK o el runtime es incompatible | Verifica `RECAMERA_PRO_SDK`, carga el `env.sh` del SDK y usa RKNN 2.3.2. |
| No se pueden encontrar los archivos del modelo | No se conservó la estructura de despliegue | Confirma que `models/` y `web/dashboard.html` existan en el directorio de ejecución. |
| El despertar visual nunca se activa | Cámara incorrecta, umbrales estrictos o cara pequeña | Usa `--debug` y la superposición RTSP para comprobar `/dev/video13`, los puntos de referencia y el cabeceo/giro. |
| STT informa un error de audio | `ai_asr` no está disponible o su formato es diferente | En el dispositivo, prueba `arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav`. |
| La página web no está disponible | El puerto es inaccesible o el servicio web fue deshabilitado | No uses `--no-web`; prueba `http://DEVICE_IP:8080/health`. |
| No se puede reproducir RTSP | Problema de red, puerto o plugin de GStreamer | Usa reproducción TCP y verifica los elementos de GStreamer de firmware requeridos. |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

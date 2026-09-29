---
description: Desarrolla canalizaciones de captura de cámara, captura y reproducción de audio, inferencia RKNN y transmisión RTSP en tus propias aplicaciones reCamera Pro.
title: Desarrollo de cámara, audio e inferencia
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - GStreamer
  - RKNN
  - ALSA
  - RTSP
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_media_dev
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_media_dev/
---

# Desarrollo de cámara, audio e inferencia

Esta página cubre los bloques de construcción de una aplicación nativa de reCamera Pro: captura de cámara con GStreamer, captura y reproducción de audio con ALSA, inferencia RKNN y salida de video RTSP. Todos los hechos aquí provienen de proyectos funcionales en el dispositivo; la mayoría de los ejemplos vienen de la aplicación [Reconocimiento visual de presencia y voz sin conexión](/es/recamera_pro_visual_wake_stt/).

Para la configuración del entorno y el despliegue, consulta [SDK y aplicación mínima](/es/recamera_pro_sdk_setup/).

## Canalización de referencia

Una aplicación completa de IA en el dispositivo encadena las etapas siguientes. Esta es la canalización real del proyecto Visual Wake:

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

El punto clave para tu propia aplicación: los fotogramas de la cámara fluyen a través de GStreamer, cada fotograma (o una copia reducida) se alimenta a uno o más modelos RKNN, y la lógica de la aplicación consume las salidas del modelo. La captura de audio solo comienza cuando la lógica de la aplicación lo solicita: la app no graba de forma continua.

## Captura de cámara

- Dispositivo de cámara: `/dev/video13`, leído por GStreamer (`v4l2src`)
- Formato de captura predeterminado: `1920x1080` hasta 30 fps; la tasa de procesamiento real depende del tiempo de inferencia
- Elementos de GStreamer del firmware usados por proyectos funcionales: `appsrc`, `videoconvert`, `jpegenc`, `rtpjpegpay`

Captura fotogramas en tu aplicación a través de una canalización GStreamer y luego realiza el preprocesamiento exacto que requiere tu modelo.

:::warning
No alimentes bytes NV12 de la cámara directamente a un modelo RGB o BGR. La canalización o la aplicación deben realizar la conversión de NV12 a RGB/BGR y la normalización que requiere el modelo; un orden de color o una normalización que no coincidan producen colores incorrectos y resultados de inferencia erróneos.
:::

## Captura y reproducción de audio

### Entrada de micrófono

El firmware proporciona un dispositivo de audio PCM dedicado para las aplicaciones:

- Nombre del dispositivo: `ai_asr` — 16 kHz, S16_LE, cuatro canales; normalmente se selecciona el canal 0
- Usar `ai_asr` evita competir con el proceso del proveedor que posee `hw:0,0`

Graba un clip de prueba directamente en el dispositivo para verificar la ruta de entrada de audio:

```bash
arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav
```

### Salida de altavoz

El altavoz integrado se controla a través de la interfaz estándar ALSA de Linux. Reproduce un archivo WAV con:

```bash
aplay test.wav
```

`aplay` es un reproductor PCM de ALSA: solo puede reproducir datos PCM/WAV y no puede decodificar MP3. Convierte primero si es necesario:

```bash
ffmpeg -i test.mp3 test.wav
```

El control de volumen y el listado de dispositivos (`aplay -l`, `amixer`) se describen en [Reproducir audio y controlar el volumen](/es/recamera_pro_speaker_usage/).

{/* TODO(verify): documentar cómo el servicio de audio del proveedor coexiste con las aplicaciones de usuario — qué procesos poseen hw:0,0, cómo liberar los recursos de audio/cámara de forma segura y cómo restaurar los servicios del proveedor después de detenerlos */}

## Inferencia RKNN

- Usa la **RKNN Runtime C API** para aplicaciones nativas en C/C++; `rknn-toolkit-lite2` no se utiliza en este flujo de trabajo
- Versión del toolkit y del runtime: **RKNN-Toolkit2 2.3.2 / RKNN Runtime 2.3.2**, destino `rv1126b`
- Enlaza contra un RKNN Runtime compatible con la placa y usa el runtime ya instalado en el dispositivo; tu aplicación no debe reemplazarlo
- Una conversión de modelo exitosa no garantiza una inferencia correcta: compara la salida numérica de RKNN con el modelo ONNX de origen y mantén el preprocesamiento explícito

La conversión de modelos desde ONNX (incluida la cuantización FP16 e INT8 con imágenes de calibración) se trata en [Desarrollar con agentes de programación de IA](/es/recamera_pro_development_cpp_skill/) y en la sección de despliegue de modelos de este wiki.

## Salida de video RTSP

Las aplicaciones pueden publicar un flujo de video anotado por RTSP para monitorización remota. El proyecto Visual Wake ejecuta un servidor RTSP con estos valores predeterminados:

| Elemento | Predeterminado |
| --- | --- |
| Puerto | `8554` |
| Ruta de montaje | `/visual-wake` |
| Resolución de salida | `960x540` |
| Frecuencia de fotogramas declarada | 15 fps (la tasa real depende del rendimiento de la inferencia) |

Reproduce el flujo desde un ordenador host usando transporte TCP:

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

El firmware de serie también proporciona su propio flujo RTSP para la canalización configurada en la WebUI; consulta la documentación de RTSP en la sección Build Your Own App.

{/* TODO(verify): documentar si el servidor RTSP de una aplicación de usuario puede ejecutarse al mismo tiempo que el servicio RTSP del firmware de serie y qué puertos usa cada uno de forma predeterminada */}

## Herramientas de monitorización y depuración

Las aplicaciones funcionales exponen su estado a través de varios canales; adopta los que encajen con tu proyecto:

- **Eventos en la terminal**: imprime eventos accionables (por ejemplo, `VISUAL_WAKE track=1`, `STT_RESULT ...`) en stdout
- **Registro de depuración**: registros de inicio, pose por fotograma, nivel de audio, RTSP y rendimiento de inferencia detrás de una bandera `--debug`
- **Panel web**: un servicio HTTP/WebSocket (puerto predeterminado `8080`, endpoint de salud `/health`) sin dependencia de la nube
- **Panel en la terminal**: una vista interactiva en la propia terminal (mínimo 80×18 caracteres)

## Solución rápida de problemas

| Problema | Causa probable | Solución |
| --- | --- | --- |
| No hay fotogramas de cámara | Dispositivo de video incorrecto | Verifica que `/dev/video13` exista y no esté en uso por otro proceso |
| Colores incorrectos o malas detecciones | Desajuste en la conversión NV12 a RGB/BGR o en la normalización | Revisa el contrato del modelo; haz que el preprocesamiento sea explícito |
| La captura de audio falla | `ai_asr` no disponible o formato diferente | Ejecuta en el dispositivo el comando de prueba `arecord` anterior |
| No se puede reproducir RTSP | Problema de red, puerto o plugin de GStreamer | Usa reproducción por TCP y verifica los elementos de GStreamer del firmware requeridos |

Para problemas a nivel de dispositivo, consulta [Solución de problemas](/es/recamera_pro_faqs/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

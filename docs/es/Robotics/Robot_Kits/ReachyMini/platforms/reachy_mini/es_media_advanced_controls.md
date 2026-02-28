---
description: Configuraciones avanzadas para ajustar con precisión la cámara y la matriz de micrófonos de Reachy Mini, incluyendo controles de libcamerasrc, configuración de GStreamer y parámetros de audio XMOS XVF3800.
title: Controles avanzados de medios
slug: /es/reachymini_platforms_reachy_mini_media_advanced_controls
keywords:
- media
- camera
- microphone
- speaker
- libcamerasrc
- gstreamer
- xmos
- xvf3800
- audio
- dof
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Controles avanzados de medios

Esta página describe configuraciones avanzadas para ajustar con precisión la cámara y el sistema de sonido.


## Cámara

La cámara de Raspberry Pi se puede detectar usando el siguiente comando:

```bash
rpicam-hello --list
# Available cameras
# -----------------
# 0 : imx708_wide [4608x2592 10-bit RGGB] (/base/soc/i2c0mux/i2c@0/imx708@1a)
#     Modes: 'SRGGB10_CSI2P' : 1536x864 [120.13 fps - (768, 432)/3072x1728 crop]
#                             2304x1296 [56.03 fps - (0, 0)/4608x2592 crop]
#                              4608x2592 [14.35 fps - (0, 0)/4608x2592 crop]
```

Para tomar una foto con Reachy Mini:

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592
# Copy the picture to your computer
# scp pollen@reachy-mini.local:/home/pollen/test.jpg .
```

Todos los controles de la cámara se detallan en [la documentación oficial](https://www.raspberrypi.com/documentation/computers/camera_software.html). Por ejemplo, puedes cambiar la configuración del autoenfoque:

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 0
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 1000
```

A nivel del SDK, la cámara se controla con GStreamer usando el componente [libcamerasrc](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/webrtc_daemon.py). Puedes ver los parámetros disponibles con el siguiente comando:

```bash
gst-inspect-1.0 libcamerasrc
```

Luego, el código se puede adaptar de la siguiente manera:

```python
def _configure_video(
    self, cam_path: str, pipeline: Gst.Pipeline, webrtcsink: Gst.Element
) -> None:
    self._logger.debug(f"Configuring video {cam_path}")
    camerasrc = Gst.ElementFactory.make("libcamerasrc")
    # camerasrc.set_property("af-mode", "manual")
    # camerasrc.set_property("lens-position", 1000)
```


## Micrófonos y altavoces

La matriz de 4 micrófonos se basa en [reSpeaker XMOS XVF3800 de Seeed](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/). También proporciona salida de audio. De forma predeterminada, el procesador de audio realiza cancelación de eco acústico (AEC), por lo que la salida del altavoz se cancela en la entrada del micrófono. De este modo, el robot no se oye a sí mismo.

Aparece como `Pollen Robotics Reachy Mini Audio` en el sistema. El control de volumen se puede ajustar con `alsamixer`. Pulsa F6 para seleccionar la tarjeta de audio y F5 para visualizar los volúmenes de entrada y salida. Se recomienda dejar todo al 100 %, excepto PCM (volumen de salida), que puedes ajustar según sea necesario.

La AEC y otros filtros de audio se pueden ajustar gracias al XMOS XVF3800. Los usuarios avanzados pueden consultar la [documentación oficial](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/01_overview.html) para comprender mejor el procesamiento de sonido. Un resumen de los parámetros se encuentra [en esta página](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/AA_control_command_appendix.html).

Para acceder a estos parámetros, utiliza nuestro script auxiliar de Python [audio_control_utils.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/audio_control_utils.py):

```bash
# Read a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS
# Output:
# PP_MIN_NS: (0.15000000596046448,)

# Write a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS --values 0
# Output:
# Writing to PP_MIN_NS with values: [0.0]
# Write operation completed successfully
```

La matriz de micrófonos produce un canal estéreo, por lo que no es posible obtener la salida en bruto de los 4 micrófonos a la vez. Sin embargo, puedes sacar dos micrófonos en bruto al mismo tiempo:

```bash
# mic 0 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 0
# mic 1 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 1

# mic 2 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 2
# mic 3 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 3
```

La disposición de la matriz lineal es la siguiente:

![Disposición de la matriz lineal](https://www.xmos.com/documentation/XM-014888-PC/html/_images/03_DoA_azimuth_linear.png)

La antena derecha de Reachy Mini está cerca del micrófono 0, mientras que la antena izquierda está cerca del micrófono 3.


### Dirección de llegada del sonido

Gracias a los 4 micrófonos, el sistema puede estimar la dirección de llegada (DoA) del sonido. La dirección se da en función de la disposición anterior.

```bash
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE
# Output
# DOA_VALUE: [0, 133, 0, 0, 0, 1, 0, 0, 0]
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE_RADIANS
# Output
# DOA_VALUE_RADIANS: (0.5410520434379578, 1.0)
```
Esta función también está disponible directamente desde [el SDK](/es/reachymini_sdk_python-sdk#sensores--medios).

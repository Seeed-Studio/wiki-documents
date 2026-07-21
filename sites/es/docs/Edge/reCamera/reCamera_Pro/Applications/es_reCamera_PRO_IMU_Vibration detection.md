---
title: Detección de inclinación y sacudidas
description: Este artículo explica cómo utilizar el giroscopio integrado ICM-42670-P de la reCamera Pro para recopilar datos de velocidad angular, implementar la detección de inclinación y sacudidas del dispositivo y reproducir avisos de voz a través del altavoz cuando se activen.
keywords:
  - reCamera
  - reCamera Pro
  - IMU
  - Gyroscope
  - ICM-42670-P
  - Tilt Detection
  - Shake Detection
  - ALSA
  - aplay
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif
slug: /recamera_pro_imu_tilt_shake_detection
sidebar_position: 1
last_update:
  date: 2026-06-11
  author: Sizhao zhou
createdAt: '2026-06-11'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/es/recamera_pro_imu_tilt_shake_detection/
---

# Uso de la IMU integrada de reCamera Pro para la detección de inclinación y sacudidas

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" /></div>

## Introducción

Este artículo explica cómo utilizar la unidad de medición inercial (IMU) de seis ejes integrada en la reCamera Pro — el giroscopio ICM-42670-P — para implementar la detección de inclinación y sacudidas del dispositivo. Cuando el dispositivo se inclina o se sacude, el sistema reproducirá avisos de voz correspondientes a través del altavoz integrado. A través de este tutorial, aprenderás cómo leer datos brutos del giroscopio mediante el controlador IIO de Linux, reproducir sonidos de advertencia usando el controlador de audio ALSA y, en última instancia, integrar un programa completo de detección y alerta.

## Preparación de hardware
- una reCamera Pro

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>



## Principio de implementación

Mediante la recopilación de datos brutos de velocidad angular del giroscopio integrado (ICM-42670-P), el sistema determina si el dispositivo se ha inclinado o se ha sacudido. La implementación actual utiliza un sencillo juicio basado en umbrales, que puede optimizarse más adelante según los requisitos reales.

### Detección de sacudidas

Cuando el valor absoluto de los datos de velocidad angular en cualquier eje supera un umbral preestablecido, se determina como una sacudida.

### Detección de inclinación

Cuando el valor absoluto de los datos de velocidad angular en cualquier eje supera un umbral preestablecido, se determina como una inclinación.

## Adquisición de datos del giroscopio integrado

El entorno Linux de la reCamera Pro utiliza el controlador IIO (Industrial I/O), que expone los datos y la configuración del sensor a través de la interfaz sysfs, lo que permite que las aplicaciones en espacio de usuario accedan a ellos. La ruta de los datos del sensor es:

```
/sys/bus/iio/devices/iio:device1
```

Los archivos de datos brutos del giroscopio se exponen en este directorio, como se muestra en la imagen siguiente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png" /></div>

Para obtener los datos brutos del giroscopio, simplemente lee el archivo correspondiente. Por ejemplo, para obtener los datos del eje X del giroscopio, lee el archivo `in_anglvel_x_raw`:

```bash
cat /sys/bus/iio/devices/iio:device1/in_anglvel_x_raw
```

El resultado de la ejecución se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_data.png" /></div>

## Uso del altavoz integrado

El altavoz integrado de la reCamera Pro se controla mediante el controlador estándar ALSA de Linux. Puedes ver los dispositivos de tarjeta de sonido actuales con el siguiente comando:

```bash
aplay -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_aplay_l.png" /></div>

Utiliza el siguiente comando para reproducir un archivo de audio:

```bash
aplay test.wav
```

:::note
`aplay` es un reproductor ALSA PCM. Solo puede reproducir datos en formato PCM/WAV y no puede decodificar MP3. Puedes usar el siguiente comando para convertir MP3 a formato WAV:

```bash
ffmpeg -i test.mp3 test.wav
```
:::

## Código de implementación básico

Ahora que entendemos cómo leer datos brutos del giroscopio y reproducir audio, escribamos el código para implementar toda la funcionalidad.

### Adquisición de datos del giroscopio

A continuación se muestra un ejemplo de función mínima que demuestra cómo recopilar datos del giroscopio en el eje X. Puedes ampliar esta función para obtener datos de otros ejes.

```python
#!/usr/bin/env python3

DEVICE = "/sys/bus/iio/devices/iio:device1"

with open(f"{DEVICE}/in_anglvel_scale", "r") as f:
    scale = float(f.read().strip())

with open(f"{DEVICE}/in_anglvel_x_raw", "r") as f:
    raw = int(f.read().strip())

gyro_x = raw * scale

print(f"Gyroscope X: {gyro_x:.6f} rad/s")
```

### Reproducción de audio

Cuando el dispositivo desencadena una inclinación o una sacudida, es necesario reproducir un aviso de voz correspondiente. El siguiente código muestra cómo reproducir audio usando Python:

```python
#!/usr/bin/env python3

import subprocess

AUDIO = "test.wav"

subprocess.run([
    "aplay",
    AUDIO
])
```

### Código de implementación final

- Cuando el dispositivo se sacude, reproducirá **"Warning: Do not shake the device"**.
- Cuando el dispositivo se inclina, reproducirá **"Warning: The equipment has toppled over. Please immediately check the equipment status to prevent any accidents"**.

El código correspondiente se puede descargar desde [reCamera_PRO_IMU_Detect](https://drive.google.com/drive/folders/1-3RTc0urrzMJVWGHqnLKwSMuZavLV9O0?usp=drive_link).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_CODE.png" /></div>

## Despliegue del código

Los siguientes pasos describen cómo desplegar el código en la reCamera Pro y ejecutarlo:

1. Sube la carpeta completa a la reCamera Pro mediante SSH:

```bash
scp -r ./icm42670_project root@deviceIP:/userdata
```

2. Ejecuta el programa principal:

```bash
./main.py
```

:::note
1. El programa realizará una operación de calibración en la primera ejecución. Asegúrate de que el dispositivo esté colocado de forma estable antes de ejecutar `main.py`. Si es necesario recalibrar (la duración de calibración predeterminada es de 3 segundos), ejecuta:

```bash
./main.py --force-calib
```

2. Ver la ayuda de uso del código:

```bash
./main.py --help
```
:::

## Solución de problemas

- **No se pueden leer los datos del giroscopio**: Verifica que la ruta `/sys/bus/iio/devices/iio:device1` exista y que el archivo `in_anglvel_x_raw` sea legible. Si la ruta no existe, es posible que el controlador IIO no esté cargado; comprueba los módulos del kernel.
- **Fallo en la reproducción de audio**: Confirma que el archivo de audio esté en formato WAV y que el comando `aplay` esté disponible. Si el altavoz no emite sonido, comprueba la configuración de volumen de ALSA.
- **Fallo en la calibración**: Asegúrate de que el dispositivo esté inmóvil y nivelado durante la calibración. Si el tiempo de calibración es insuficiente, utiliza `--force-calib` para recalibrar.


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
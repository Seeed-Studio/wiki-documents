---
description: Esta es una detección de movimiento para un área seleccionada basada en recamera2002
title: Detección de movimiento para un área seleccionada basada en recamera2002
keywords:
  - reCamera
  - Detección de movimiento
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png
slug: /recamera_motion_detection
sku: 102991897, 100029708, 108990120
sidebar_position: 13
last_update:
  date: 07/03/2026
  author: Qiyao Lin
createdAt: '2026-07-03'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/es/recamera_motion_detection/
---

## I. Introducción al proyecto

Esta es una detección de movimiento para un área seleccionada basada en recamera2002. Toda la potencia de cómputo para esta detección se completa dentro de reCamera, sin depender de cómputo externo. El sistema externo solo necesita renderizar la imagen y seleccionar el área de detección.
Puedes clonar la demo desde el siguiente repositorio de GitHub:

[reCamera Motion Detection Demo](https://github.com/yyling0101-a11y/recamera_motion_detection)

## II. Guía de configuración de reCamera

Después de compilar el programa ejecutable motion_detection en un sistema Linux, súbelo a reCamera mediante SCP. Luego, tras acceder de forma remota al terminal SSH de reCamera, ejecuta el programa directamente usando el siguiente comando:

```bash
./motion_detection
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155625.png" /></div>

## III. Configuración de la interfaz de renderizado en Windows

En el mismo directorio hay un directorio `windows_ui`. Este es el proyecto de renderizado de la interfaz de Windows. Se recomienda configurar el entorno usando un entorno virtual de conda.

```bash
conda create -n motion_detection python=3.10

conda activate motion_detection

# Download corresponding environment dependencies
cd ./windows_ui
pip install -r requirements.txt
```

Una vez que el entorno esté listo, ejecuta directamente el archivo `app.py`:

```bash
python app.py --rtsp=rtsp://192.168.42.1:8554/live0 --api=http://192.168.42.1:8080
```

La interfaz después de iniciar es:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703153920.png" /></div>
Después de introducir la URL correcta, puedes hacer clic en "Connect RTSP" para obtener el flujo de vídeo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154419.png" /></div>

### 1. Definir el área de detección

En la sección "Area Editing" de la izquierda, selecciona el tipo de área. Hay dos tipos: uno es el tipo "Detection Area", usado para definir la región de detección, y el otro es "Whitelist", usado para definir áreas dentro de la región de detección donde no debe producirse detección, filtrando elementos que puedan moverse de forma natural dentro del área de detección, como ramas de árboles que se balancean, fuentes, etc.
Después de seleccionar el tipo e introducir el nombre del área, puedes hacer clic en la imagen para seleccionar puntos. Haz clic derecho para deshacer un punto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154948.png" /></div>

Después de seleccionar los puntos, haz clic en "Complete Current Polygon".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155033.png" /></div>

### 2. Habilitar el cuadro de detección

Luego, selecciona "Upload to Device" para guardar la configuración de la interfaz.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155107.png" /></div>

Si se detecta movimiento en la imagen, aparecerá un mensaje de alerta en la esquina inferior izquierda y se dibujará un cuadro de movimiento en la imagen.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png" /></div>

Después de reiniciar la interfaz de Windows, es posible que se pierdan los cuadros seleccionados existentes. Necesitas hacer clic en "Read from Device" para recuperar los cuadros de detección existentes. Si la cámara actual se mueve o la escena cambia y no necesitas modificar el área de detección, puedes hacer clic en "Reconstruct Background" para redefinir la imagen estática.

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

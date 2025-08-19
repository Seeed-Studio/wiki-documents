---
description: Getting start with reTerminal and Pi camera with OpenCV
title: Getting start with reTerminal and Pi camera with OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_opencv
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

## Introducción

En este tutorial, te guiaremos a través del proceso de configuración del reTerminal con un **sistema operativo Raspberry Pi OS Bullseye o BookWorm recién instalado**. Nuestro objetivo es interactuar con la **PiCam** y realizar procesamiento de imágenes y actividades de aprendizaje profundo utilizando la biblioteca **OpenCV**.

## OpenCV

**OpenCV (Open Source Computer Vision Library)**: OpenCV es una potente biblioteca de visión por computadora de código abierto diseñada para tareas en tiempo real. Proporciona un conjunto completo de herramientas y funciones que permiten a los desarrolladores trabajar con imágenes y videos, ofreciendo soluciones para procesamiento de imágenes, detección de objetos, reconocimiento facial y más. Ampliamente utilizada tanto en la academia como en la industria, OpenCV admite varios lenguajes de programación, lo que la convierte en una opción versátil para aplicaciones de visión por computadora en diferentes plataformas. Su flexibilidad y amplia documentación la hacen un recurso invaluable para cualquier persona involucrada en el desarrollo de visión artificial.

## Primeros Pasos

Antes de comenzar este proyecto, debes preparar tu hardware y software como se describe a continuación.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software

Recomendamos instalar la versión **Bullseye** o **Bookworm** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)

## Instalar OpenCV

Puedes omitir el proceso de instalación detallado; te damos un atajo. Sigue estos pasos simplificados si estás usando **Bullseye OS**:

 - **Paso 1** Primero, clona este repositorio Git en tu Raspberry Pi así:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Paso 2** Luego, usa nuestro script para instalar fácilmente los paquetes de Python necesarios y descargar el modelo EfficientDet-Lite. Navega a esta carpeta:

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **Paso 3** El script instalará las dependencias necesarias y descargará los modelos TFLite para esta serie de tutoriales:

```sh
sh setup.sh
```

Sigue estos pasos si estás usando **Bookworm OS**:

- **Paso 1** En tu Terminal ejecuta el siguiente comando para instalar:

```sh
sudo apt-get install libopencv-dev python3-opencv
```

 - **Paso 2** Luego, clona este repositorio Git en tu Raspberry Pi:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

## Tomar una Transmisión de Video

En una nueva ventana de terminal, navega a **Opencv_and_piCam**:

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

En este tutorial, comenzaremos con un programa "Hola Mundo" usando la PiCam y OpenCV en nuestro reTerminal. Puedes encontrar el archivo **captureimages.py** en el repositorio clonado. Estaremos explorando una transmisión de video en vivo, y si presionas 'q', la transmisión se detendrá. También puedes usar Thonny IDE para ejecutar el script en Python.

```sh
python captureimages.py
```

Verás una transmisión de video como la siguiente:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

Como referencia, te proporcionamos el fragmento de código completo para tu comodidad:

```python
import cv2
from picamera2 import Picamera2
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280,720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()
while True:
    im= picam2.capture_array()
    cv2.imshow("Camera", im)
    if cv2.waitKey(1)==ord('q'):
        break
cv2.destroyAllWindows()
```

## Capturar una Foto y Guardarla

Aquí, capturaremos una imagen fija usando la PiCam y OpenCV en nuestro ReTerminal. Encuentra el archivo **saveimage.py** en nuestro repositorio clonado. Estaremos transmitiendo video en vivo y si presionas 's', se capturará una foto. También puedes usar Thonny IDE para ejecutar el script.

```sh
python saveimage.py
```

Encontrarás la imagen capturada en el mismo directorio.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

Aquí está el fragmento de código completo para tu referencia:

```python
import cv2
from picamera2 import Picamera2

picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

try:
    while True:
        im = picam2.capture_array()
        cv2.imshow("Camera", im)

        # Guardar una imagen cuando se presione una tecla (por ejemplo, 's')
        key = cv2.waitKey(1)
        if key == ord('s'):
            # Guardar la imagen usando OpenCV
            cv2.imwrite("captured_image.jpg", im)
            print("¡Imagen guardada!")

        # Salir del bucle cuando se presione 'q'
        elif key == ord('q'):
            break

finally:
    # Liberar recursos
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos canales de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Disponemos de varios medios de comunicación para satisfacer distintas necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
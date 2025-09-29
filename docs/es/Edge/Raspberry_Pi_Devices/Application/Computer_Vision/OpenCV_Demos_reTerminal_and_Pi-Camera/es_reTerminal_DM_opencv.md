---
description: Comenzando con reTerminal y cámara Pi con OpenCV
title: Comenzando con reTerminal y cámara Pi con OpenCV
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

En este tutorial, te guiaremos a través del proceso de configuración del reTerminal con un **Raspberry Pi OS Bullseye o BookWorm OS recién instalado**. Nuestro objetivo es interactuar con la **PiCam** y realizar actividades de procesamiento de imágenes y aprendizaje profundo utilizando la biblioteca **OpenCV**.

## OpenCV

**OpenCV (Open Source Computer Vision Library)**: OpenCV es una biblioteca de visión por computadora potente y de código abierto diseñada para tareas de visión por computadora en tiempo real. Proporciona un conjunto completo de herramientas y funciones que permiten a los desarrolladores trabajar con imágenes y videos, ofreciendo soluciones para tareas como procesamiento de imágenes, detección de objetos, reconocimiento facial y más. Ampliamente utilizada tanto en el ámbito académico como en la industria, OpenCV soporta varios lenguajes de programación, convirtiéndola en una opción versátil para aplicaciones de visión por computadora en diferentes plataformas. Su flexibilidad y documentación extensa la convierten en un recurso invaluable para cualquier persona involucrada en el desarrollo de visión por computadora.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** o la versión **Bookworm** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)

## Instalar OpenCV

 Siéntete libre de omitir el proceso de instalación detallado; tenemos un atajo para ti. Sigue estos pasos simplificados si estás usando **Bullseye OS**:

- **Paso 1** Primero, clona este repositorio Git en tu Raspberry Pi de esta manera

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Paso 2** A continuación, utiliza nuestro script para instalar sin esfuerzo los paquetes de Python requeridos y descargar el modelo EfficientDet-Lite. Navega a esta carpeta.

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **Paso 3** El script instala las dependencias requeridas y descarga los modelos TFLite para esta serie de tutoriales.

```sh
sh setup.sh
```

Sigue estos pasos si estás usando **Bookworm OS**:

- **Paso 1** En tu Terminal ejecuta el siguiente comando para instalar

```sh
sudo apt-get install libopencv-dev python3-opencv
```

- **Paso 2** A continuación, clona este repositorio Git en tu Raspberry Pi de esta manera

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

## Tomar una transmisión de video

En una nueva ventana de terminal, navega a **Opencv_and_piCam**

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

En este tutorial, comenzaremos con un programa 'Hello World' usando la PiCam y OpenCV en nuestro reTerminal. Puedes localizar el archivo **captureimages.py** en nuestro repositorio clonado. Estaremos explorando una transmisión de video en vivo, y si presionas 'q', la transmisión se detendrá elegantemente. Incluso puedes usar Thonny IDE para ejecutar el script de python.

```sh
python captureimages.py
```

Encontrarás un flujo de video como el siguiente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

Siguiendo tu referencia, proporcionaremos el fragmento de código completo para tu conveniencia.

```sh
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

## Capturar una foto y guardarla

Aquí, capturaremos una imagen fija usando la PiCam y OpenCV en nuestro ReTerminal. Encuentra el archivo **saveimage.py** en nuestro repositorio clonado. Estaremos transmitiendo video en vivo, y si presionas 's', se capturará una foto. Incluso puedes usar Thonny IDE para ejecutar el script de python.

```sh
python saveimage.py
```

Encontrarás una imagen capturada en el mismo directorio.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

Siguiendo tu referencia, proporcionaremos el fragmento de código completo para tu conveniencia.

```sh
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

        # Save an image when a key is pressed (e.g., 's')
        key = cv2.waitKey(1)
        if key == ord('s'):
            # Save the image using OpenCV
            cv2.imwrite("captured_image.jpg", im)
            print("Image saved!")

        # Exit the loop when 'q' is pressed
        elif key == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

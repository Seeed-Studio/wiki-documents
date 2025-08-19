---
description: Detección de Rostros con reTerminal y cámara Pi usando OpenCV
title: Detección de Rostros con reTerminal y cámara Pi usando OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_Face_detection
last_update:
  date: 04/03/2025
  author: Erick González
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## Introducción

La detección de rostros mediante el **método Haar Cascade** es una técnica fundamental en visión por computadora, que utiliza un modelo de aprendizaje automático para reconocer rasgos faciales. Este método se basa en una cascada de clasificadores entrenados en características de tipo Haar, lo que permite identificar rostros de manera rápida y precisa en imágenes y secuencias de video. Su amplia aplicación abarca diversos campos, incluyendo **tecnología de reconocimiento facial para seguridad y autenticación, sistemas de videovigilancia e incluso en software de fotografía para etiquetado y organización automática basados en rostros detectados**. El método Haar Cascade destaca especialmente por su eficiencia computacional, lo que lo hace **ideal para la detección de rostros en tiempo real** en diversos contextos, contribuyendo significativamente al avance de tecnologías de análisis e identificación facial.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software como se describe a continuación.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Cómpralo ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación de Software

Recomendamos instalar la versión **Bullesye** o **Bullseye** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Introducción a OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), ya que este tutorial forma parte de nuestra serie.

:::

## ¿Qué es el método Haar Cascade?

En OpenCV, el método Haar Cascade es un algoritmo de detección de rostros basado en aprendizaje automático. Funciona entrenando un clasificador en cascada con imágenes positivas y negativas, lo que le permite reconocer patrones y características indicativas de rostros. La cascada consta de múltiples etapas, cada una con un conjunto de clasificadores débiles que van descartando progresivamente regiones que no contienen rostros, haciéndolo muy eficiente. Las características de tipo Haar, que se asemejan a patrones rectangulares de áreas oscuras y claras, forman la base para reconocer objetos como rostros. Una vez entrenada, la cascada puede aplicarse a imágenes o a frames de video para detectar rostros con rapidez. Este método se usa ampliamente por su precisión y velocidad, siendo una opción popular en diversas aplicaciones, incluyendo la detección y reconocimiento de rostros en tiempo real.

Si quieres aprender más, consulta esta [**documentación**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html).

### Ejecutemos el código.

Asegúrate de estar en la carpeta correcta. Si no:

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```
Luego, o incluso puedes utilizar Thonny IDE para ejecutar el script de Python:

 ```sh
python facedetection_pi.py
 ```

A continuación te presentamos el fragmento completo de código para tu referencia:

```sh
import cv2
from picamera2 import Picamera2

# Cargar el clasificador pre-entrenado Haar Cascade para detección de rostros
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

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

        # Convertir la imagen a escala de grises para la detección de rostros
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # Realizar la detección de rostros
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Dibujar rectángulos alrededor de los rostros detectados
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Mostrar la imagen con la detección de rostros
        cv2.imshow("Face Detection", im)

        # Salir del bucle cuando se presione 'q'
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # Liberar recursos
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

Si deseas encontrar más archivos xml de cascadas Haar para explorar, visita este [**enlace**](https://github.com/opencv/opencv/tree/master/data/haarcascades).

## Aplicaciones

Originalmente diseñada para la detección de rostros en tiempo real, la tecnología Haarcascade ha evolucionado para enfrentar desafíos contemporáneos. Innovadores han extendido sus capacidades para incluir la **detección de mascarillas faciales**, vital en medidas de salud pública. Además, la tecnología se ha optimizado para la **detección de placas de matrícula**, especialmente útil en entornos con recursos limitados donde el hardware avanzado es escaso. Estas adaptaciones demuestran la versatilidad y eficiencia de Haarcascade para abordar necesidades diversas en aplicaciones de visión por computadora.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>


## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

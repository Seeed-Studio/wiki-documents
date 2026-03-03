---
description: Detección de rostros con reTerminal y cámara Pi con OpenCV
title: Detección de rostros con reTerminal y cámara Pi con OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face_detection
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## Introducción

La detección de rostros utilizando el **método Haar Cascade** es una técnica fundamental en visión por computadora, empleando un modelo de aprendizaje automático para reconocer características faciales. Este método se basa en una cascada de clasificadores entrenados en características tipo Haar, permitiendo una identificación rápida y precisa de rostros en imágenes y flujos de video. Su aplicación generalizada abarca diversos campos, incluyendo **tecnología de reconocimiento facial para propósitos de seguridad y autenticación, sistemas de videovigilancia, e incluso en software de fotografía para etiquetado automático y clasificación basada en rostros detectados**. El método Haar Cascade es particularmente valioso debido a su eficiencia computacional, haciéndolo **muy adecuado para detección de rostros en tiempo real** en varios contextos, contribuyendo significativamente al avance de las tecnologías de análisis e identificación facial.

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

Recomendamos instalar la versión **Bullesye** o **Bullseye** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Cómo empezar con OpenCV**](https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/), ya que este tutorial sirve como una continuación en nuestra serie.

:::

## ¿Qué es el método Haar Cascade?

En OpenCV, el método Haar Cascade es un algoritmo de detección de rostros basado en aprendizaje automático. Funciona entrenando un clasificador en cascada con imágenes positivas y negativas, permitiéndole reconocer patrones y características indicativas de rostros. La cascada comprende múltiples etapas, cada una con un conjunto de clasificadores débiles que progresivamente eliminan regiones que no son rostros, haciendo que el proceso de detección sea eficiente. Las características tipo Haar, que se asemejan a patrones rectangulares de áreas oscuras y claras, sirven como la base para reconocer objetos, como rostros. Una vez entrenada, la cascada puede aplicarse a imágenes o fotogramas de video para detectar rostros rápidamente. Este método es ampliamente utilizado por su precisión y velocidad, convirtiéndolo en una opción popular en varias aplicaciones, incluyendo detección y reconocimiento de rostros en tiempo real.

Por favor revisa esta [**documentación**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html) si quieres aprender más.

### Ejecutemos el código

Asegúrate de que estás en la carpeta correcta. Si no

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Entonces o incluso puedes usar el IDE Thonny para ejecutar el script de Python.

 ```sh
python facedetection_pi.py
 ```

Siguiendo tu referencia, proporcionaremos el fragmento de código completo para tu conveniencia.

```sh
import cv2
from picamera2 import Picamera2

# Load the pre-trained Haar Cascade classifier for face detection
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

        # Convert the image to grayscale for face detection
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # Perform face detection
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Draw rectangles around the detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Display the image with face detection
        cv2.imshow("Face Detection", im)

        # Break the loop when 'q' is pressed
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

Si quieres encontrar más archivos xml de cascadas haas para experimentar, por favor revisa este [**enlace**](https://github.com/opencv/opencv/tree/master/data/haarcascades).

## Aplicaciones

Haarcascade, originalmente diseñado para la detección de rostros en tiempo real, ha experimentado avances para abordar desafíos contemporáneos. Los innovadores han extendido sus capacidades para incluir **detección de mascarillas faciales**, crucial para las medidas de salud pública. Además, la tecnología ha sido optimizada para **detección de placas de matrícula**, particularmente valiosa en entornos de recursos limitados donde el hardware sofisticado es escaso. Estas adaptaciones demuestran la versatilidad y eficiencia de Haarcascade para satisfacer diversas necesidades dentro de las aplicaciones de visión por computadora.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

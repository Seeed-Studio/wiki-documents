---
description: Detección de Color con reTerminal y cámara Pi con OpenCV
title: Detección de Color con reTerminal y cámara Pi con OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Color-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Color_detection
last_update:
  date: 11/28/2023
  author: Kasun Thushara
createdAt: '2023-11-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reTerminal_DM_Color_detection/
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" /></center>

## Introducción

La detección de color, un componente central de la visión por computadora, implica identificar y analizar colores en imágenes digitales o videos. Ampliamente aplicada en diversas industrias, permite tareas como el reconocimiento de objetos en **robótica, control de calidad en manufactura, e incluso desempeña un papel en la restauración de obras de arte**. Los algoritmos detrás de la detección de color contribuyen a los avances en tecnología, influyendo en áreas como **vehículos autónomos, imágenes médicas, y estética visual en cine y fotografía**. En esencia, la detección de color es una herramienta versátil que mejora nuestra capacidad de interpretar e interactuar con el mundo visual de numerosas maneras significativas.

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

Recomendamos instalar la versión **Bullesye** o **Bookworm** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note
Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Cómo empezar con OpenCV**](https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/), ya que este tutorial sirve como una continuación en nuestra serie.
:::

## Explorando Espacios de Color en OpenCV

Los espacios de color son fundamentales en el procesamiento de imágenes, y OpenCV soporta varios, cada uno sirviendo propósitos únicos. Profundicemos en tres espacios de color comunes en OpenCV: CMYK, BGR y HSV.

### Espacio de Color CMYK

CMYK (Cian, Magenta, Amarillo, Clave/Negro) es un espacio de color sustractivo utilizado en impresión a color.
Los colores se crean sustrayendo porcentajes variables de cian, magenta, amarillo y negro de la luz blanca.

### Espacio de Color BGR

El espacio de color predeterminado de OpenCV es RGB, pero internamente almacena el color en BGR (Azul, Verde, Rojo).
BGR es un modelo de color aditivo, donde intensidades variables de azul, verde y rojo se combinan para formar diferentes tonos.

**Rango de Componentes:**

- Azul (0-255): Intensidad del color azul.
- Verde (0-255): Intensidad del color verde.
- Rojo (0-255): Intensidad del color rojo.

### Espacio de Color HSV

HSV (Matiz, Saturación, Valor) representa colores en un modelo cilíndrico derivado de puntos de color RGB.
Imita la percepción humana de los colores, con componentes de matiz, saturación y valor.

**Rango de Componentes:**

- Matiz (0-179): Tipo de color en grados.
- Saturación (0-255): Intensidad o vivacidad del color.
- Valor (0-255): Brillo del color.

## ¿Por qué HSV es importante en el problema de detección de color?

HSV (Matiz, Saturación, Valor) es crucial en tareas de detección de color debido a su capacidad para separar la información de color de manera efectiva. A diferencia de RGB o BGR, HSV aísla el tipo de color (Matiz) de su intensidad (Saturación) y brillo (Valor), proporcionando una representación más intuitiva. Esta separación resulta robusta a cambios en la iluminación, haciendo que la segmentación basada en color sea menos sensible a condiciones de iluminación variables. Además, la representación natural de colores en HSV simplifica el proceso de definir umbrales de color, facilitando criterios precisos para identificar objetos o regiones específicas en una imagen. Su uso generalizado en tareas de visión por computadora, como seguimiento de objetos basado en color y segmentación, destaca su importancia para lograr resultados precisos y confiables.

## Cómo Usar los Fragmentos de Código

En el primer código, tienes la flexibilidad de ajustar interactivamente las barras deslizantes, permitiéndote identificar visualmente los umbrales de color óptimos. Al experimentar con estas barras deslizantes, puedes identificar con precisión el color específico que te interesa y tomar nota de los valores mínimos y máximos HSV correspondientes. Este enfoque práctico proporciona una manera intuitiva para que las personas ajusten finamente los parámetros de color, asegurando una experiencia de identificación de color más personalizada y precisa

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Luego

 ```sh
python hsvtest.py
 ```

Incluso puedes usar el IDE Thonny para ejecutar el script de Python.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG" /></center>

Aquí está el código para el ajuste HSV

  ```sh
import cv2
import numpy as np

def empty(a):
    pass

def stackImages(scale,imgArray):
    rows = len(imgArray)
    cols = len(imgArray[0])
    rowsAvailable = isinstance(imgArray[0], list)
    width = imgArray[0][0].shape[1]
    height = imgArray[0][0].shape[0]
    if rowsAvailable:
        for x in range ( 0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)
                else:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)
                if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)
        imageBlank = np.zeros((height, width, 3), np.uint8)
        hor = [imageBlank]*rows
        hor_con = [imageBlank]*rows
        for x in range(0, rows):
            hor[x] = np.hstack(imgArray[x])
        ver = np.vstack(hor)
    else:
        for x in range(0, rows):
            if imgArray[x].shape[:2] == imgArray[0].shape[:2]:
                imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)
            else:
                imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)
            if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)
        hor= np.hstack(imgArray)
        ver = hor
    return ver


path = 'captured_image.jpg'
cv2.namedWindow("TrackBars")
cv2.resizeWindow("TrackBars",640,240)
cv2.createTrackbar("Hue Min","TrackBars",0,179,empty)
cv2.createTrackbar("Hue Max","TrackBars",19,179,empty)
cv2.createTrackbar("Sat Min","TrackBars",110,255,empty)
cv2.createTrackbar("Sat Max","TrackBars",240,255,empty)
cv2.createTrackbar("Val Min","TrackBars",153,255,empty)
cv2.createTrackbar("Val Max","TrackBars",255,255,empty)

while True:
    img = cv2.imread(path)
    img= cv2.resize(img, (300, 300))
    imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    h_min = cv2.getTrackbarPos("Hue Min","TrackBars")
    h_max = cv2.getTrackbarPos("Hue Max", "TrackBars")
    s_min = cv2.getTrackbarPos("Sat Min", "TrackBars")
    s_max = cv2.getTrackbarPos("Sat Max", "TrackBars")
    v_min = cv2.getTrackbarPos("Val Min", "TrackBars")
    v_max = cv2.getTrackbarPos("Val Max", "TrackBars")
    print(h_min,h_max,s_min,s_max,v_min,v_max)
    lower = np.array([h_min,s_min,v_min])
    upper = np.array([h_max,s_max,v_max])
    mask = cv2.inRange(imgHSV,lower,upper)
    imgResult = cv2.bitwise_and(img,img,mask=mask)


    cv2.imshow("Original",img)
    cv2.imshow("HSV",imgHSV)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result", imgResult)

    #imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))
    #cv2.imshow("Stacked Images", imgStack)

    cv2.waitKey(1)
 ```

Una vez que hayas determinado los valores mínimos y máximos de HSV usando las barras deslizantes en el primer fragmento de código, puedes **reemplazar sin problemas estos valores numéricos** con el **nombre del color** correspondiente y su rango identificado en el segundo fragmento.

 ```sh
python colordetector.py
 ```

Aquí está el código completo para la Detección de Color

```sh
import cv2
import numpy as np
from picamera2 import Picamera2

Your_color = "Green"

def detect_single_color(imageFrame, color_name, lower_range, upper_range, color_display):
    hsvFrame = cv2.cvtColor(imageFrame, cv2.COLOR_BGR2HSV)
    color_mask = cv2.inRange(hsvFrame, lower_range, upper_range)

    kernel = np.ones((5, 5), "uint8")
    color_mask = cv2.dilate(color_mask, kernel)
    result = cv2.bitwise_and(imageFrame, imageFrame, mask=color_mask)

    contours, hierarchy = cv2.findContours(color_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for pic, contour in enumerate(contours):
        area = cv2.contourArea(contour)
        if area > 800:
            x, y, w, h = cv2.boundingRect(contour)
            imageFrame = cv2.rectangle(imageFrame, (x, y), (x + w, y + h), color_display, 2)
            cv2.putText(imageFrame, f"{color_name} Colour", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, color_display)

    return imageFrame

# Initialize PiCamera
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

# Define your color range
my_color_lower = np.array([49, 105, 0], np.uint8)
my_color_upper = np.array([94, 255, 255], np.uint8)

# Start a while loop
while True:
    im = picam2.capture_array()

    # Example: Detecting your specified color
    result_frame = detect_single_color(im, Your_color, my_color_lower, my_color_upper, (0, 255, 0))  # Change the color display accordingly

    # Program Termination
    cv2.imshow("Single Color Detection in Real-Time", result_frame)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        picam2.stop()
        cv2.destroyAllWindows()
        break

 ```

## Aplicación

La detección de color desempeña un papel fundamental en diversas aplicaciones, desde la visión por computadora y la manufactura hasta **imágenes médicas** y arte. En visión por computadora, permite el reconocimiento y seguimiento de objetos, contribuyendo a tareas como **navegación robótica y vigilancia**. Las industrias utilizan la detección de color para **clasificación y control de calidad, asegurando que los productos cumplan con los estándares**. Las imágenes médicas dependen de la segmentación basada en color para análisis precisos, mientras que las industrias del entretenimiento la emplean en la gradación de color de películas y restauración de arte. Desde **reconocimiento de señales de tráfico hasta identificación biométrica y monitoreo ambiental**, la capacidad de detectar e interpretar colores es fundamental, dando forma a los avances en tecnología, automatización y varios campos. Usando técnicas simples como detección de color y detección de formas de la Biblioteca de Visión por Computadora OpenCV, podemos contar sin esfuerzo espacios de estacionamiento y detectar escenarios anormales de estacionamiento de automóviles.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/carpark.gif" /></center>

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

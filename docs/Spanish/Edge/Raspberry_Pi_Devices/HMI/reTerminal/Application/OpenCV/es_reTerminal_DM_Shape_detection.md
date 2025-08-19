---
description: Detección de Formas con reTerminal y cámara Pi usando OpenCV
title: Detección de Formas con reTerminal y cámara Pi usando OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_Shape_detection
last_update:
  date: 04/03/2025
  author: Erick González
---

## Introducción

La detección de formas (Shape detection) con OpenCV es una técnica de visión por computadora que consiste en identificar y analizar figuras geométricas en imágenes. **OpenCV proporciona un conjunto completo de herramientas para esta tarea, incluyendo detección de contornos, detección de bordes y aproximación poligonal**. El proceso comienza normalmente con pasos de preprocesamiento de la imagen, como la conversión a escala de grises, el desenfoque (blurring) y la aplicación de umbrales (thresholding) para resaltar la visibilidad de las formas. Luego, se extraen los contornos de la imagen procesada y se analiza el número de vértices de cada contorno para clasificar figuras como **círculos, triángulos y rectángulos**. La versatilidad de OpenCV en la detección de formas la convierte en una herramienta poderosa para aplicaciones que van desde el reconocimiento de objetos en robótica hasta el control de calidad en procesos de manufactura.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software de acuerdo con lo descrito a continuación.

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

Recomendamos instalar la versión **Bullseye** o **Bookworm** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Introducción a OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), ya que este tutorial es parte de nuestra serie.

:::


**Hablemos de algunos términos técnicos en la detección de formas.**

## Contornos (Contours)

En visión por computadora, los contornos son como los bordes o límites que nos ayudan a identificar la forma de los objetos en una imagen. Piensa en los contornos como las líneas que definen dónde termina un objeto y dónde empieza otro. En términos simples, si imaginas que trazas con un lápiz el contorno de un objeto, estarías siguiendo su contorno. En visión por computadora, utilizamos algoritmos para encontrar y representar automáticamente estos contornos, lo cual facilita la comprensión y el análisis de las formas presentes en una imagen.

Antes de detectar contornos, comúnmente se preprocesa la imagen para realzar sus características y hacer más efectiva la detección de contornos. Los pasos de preprocesamiento habituales incluyen:

### Conversión a escala de grises (Grayscale conversion)

La conversión a escala de grises es como convertir una imagen en color a blanco y negro. En una imagen a color, cada píxel tiene tres canales de color (rojo, verde y azul). La conversión a escala de grises combina esos canales en uno solo, representando la intensidad de la luz. Ahora, las variaciones de brillo en la imagen se muestran con tonos de gris en lugar de colores. Esta técnica simplifica la imagen, pero conserva información importante para varias tareas de visión por computadora.

### Suavizado/Desenfoque (Smoothing/Blurring)

Aplica un filtro de suavizado o desenfoque para reducir el ruido en la imagen. El desenfoque gaussiano (Gaussian blur) es una técnica común en procesamiento de imágenes, donde cada píxel se promedia con sus vecinos, con un peso mayor hacia el píxel central. Esto ayuda a reducir el ruido de alta frecuencia y los detalles finos, resultando en una imagen más suave. La cantidad de suavizado se controla mediante la desviación estándar del kernel **Gaussian**. Se utiliza mucho en tareas como la detección de bordes y la búsqueda de contornos.

### Umbralización (Thresholding)

La umbralización es una técnica clave en el procesamiento de imágenes que transforma una imagen en escala de grises en una imagen binaria al establecer un valor de umbral. Los píxeles por encima del umbral se representan normalmente en color blanco, mientras que los que están por debajo se representan en negro. Es muy utilizada para la segmentación de objetos y la distinción entre el fondo y el objeto, simplificando la imagen para su análisis. La umbralización adaptativa (adaptive thresholding) ajusta dinámicamente el umbral en función de las variaciones locales en los píxeles, mejorando su efectividad en diferentes condiciones de la imagen y haciéndola una herramienta valiosa en aplicaciones de visión por computadora.

### Detección de bordes (Edge detection)

La detección de bordes es una técnica fundamental en el procesamiento de imágenes, enfocada en identificar las fronteras dentro de una imagen. Resalta los cambios bruscos de intensidad, representando los bordes donde termina un objeto y comienza otro. Algoritmos populares, como el **detector de bordes Canny**, utilizan la información del gradiente para ubicar estas transiciones, ofreciendo un paso fundamental en tareas como el reconocimiento de objetos y el análisis de formas en aplicaciones de visión por computadora. La detección de bordes es esencial para resaltar las características clave y permitir una mejor comprensión e interpretación de los datos visuales.

## ¡Pasemos al código!

Ejecuta estos comandos uno por uno en la terminal:

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center>

## Aplicaciones

La detección de formas tiene múltiples aplicaciones en diversos campos. Una aplicación destacada que demostraremos ahora es el **conteo de monedas**, donde se utilizan formas para identificar y diferenciar monedas basándose en sus características geométricas distintivas. En manufactura y control de calidad, la detección de formas se emplea para inspeccionar y clasificar productos según sus figuras, asegurando uniformidad y cumplimiento de estándares. En **robótica**, detectar y reconocer formas ayuda en la manipulación de objetos y en la navegación. La imagen médica depende de la detección de formas para tareas como la identificación de tumores y la segmentación de órganos. Además, en **vehículos autónomos**, la detección de formas desempeña un papel crucial en la identificación de señales de tráfico y obstáculos, contribuyendo a una conducción segura. En general, la detección de formas es una herramienta versátil con aplicaciones que abarcan desde la automatización industrial hasta la atención sanitaria y más allá.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center>

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Detección de formas con reTerminal y cámara Pi con OpenCV
title: Detección de formas con reTerminal y cámara Pi con OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_Shape_detection
last_update:
  date: 2/5/2023
  author: Kasun Thushara
---

## Introducción 

La detección de formas usando OpenCV es una técnica de visión por computadora que involucra identificar y analizar formas geométricas dentro de imágenes. **OpenCV proporciona un conjunto completo de herramientas para esta tarea, incluyendo detección de contornos, detección de bordes y aproximación poligonal**. El proceso típicamente comienza con pasos de preprocesamiento de imagen como conversión a escala de grises, desenfoque y umbralización para mejorar la visibilidad de las formas. Los contornos extraídos de la imagen procesada son luego analizados, y el número de vértices en cada contorno se usa para clasificar formas como **círculos, triángulos y rectángulos**. La versatilidad de OpenCV en la detección de formas lo convierte en una herramienta poderosa para aplicaciones que van desde el reconocimiento de objetos en robótica hasta el control de calidad en manufactura.


## Comenzar

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software por adelantado como se describe aquí.

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

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Primeros pasos con OpenCV**](https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/), ya que este tutorial sirve como continuación de nuestra serie.

:::

**Discutamos algunos Términos Técnicos sobre detección de formas.**

## Contornos

Los contornos en visión por computadora son como contornos o límites que nos ayudan a identificar la forma de los objetos en una imagen. Piensa en los contornos como los bordes de las cosas: las líneas que definen dónde termina un objeto y comienza otro. En términos más simples, si imaginas trazar el contorno de un objeto con un bolígrafo, estarías siguiendo su contorno. En visión por computadora, usamos algoritmos para encontrar y representar automáticamente estos contornos, facilitando la comprensión y análisis de las formas presentes en una imagen. Antes de detectar contornos, es común preprocesar la imagen para mejorar las características y hacer la detección de contornos más efectiva. Los pasos comunes de preprocesamiento incluyen:

### Conversión a escala de grises

La conversión a escala de grises es como convertir una imagen colorida en una versión en blanco y negro. En una imagen colorida, cada píxel tiene tres canales de color (rojo, verde y azul). La conversión a escala de grises combina estos canales en un solo canal, representando la intensidad de la luz. Las variaciones de brillo en la imagen ahora se expresan usando tonos de gris en lugar de colores. Simplifica la imagen pero conserva información importante para varias tareas de visión por computadora.

### Suavizado/Desenfoque

Aplica un filtro de suavizado o desenfoque para reducir el ruido en la imagen. El desenfoque gaussiano es una técnica común en procesamiento de imágenes donde cada píxel en la imagen se promedia con sus píxeles vecinos, ponderado más hacia el píxel central. Esto ayuda a reducir el ruido de alta frecuencia y los detalles finos, resultando en una imagen más suave. La cantidad de suavizado se controla por la desviación estándar del kernel **Gaussiano**. Se usa ampliamente en tareas como detección de bordes y búsqueda de contornos.

### Umbralización

La umbralización es una técnica clave de procesamiento de imágenes que transforma una imagen en escala de grises en una binaria estableciendo un valor umbral. Los píxeles por encima del umbral toman un color, típicamente blanco, mientras que los que están por debajo adoptan otro, usualmente negro. Ampliamente utilizada para segmentación de objetos y distinción de fondo, la umbralización simplifica las imágenes para análisis. La umbralización adaptativa se ajusta dinámicamente basándose en variaciones locales de píxeles, mejorando su efectividad a través de diversas condiciones de imagen y convirtiéndola en una herramienta valiosa en aplicaciones de visión por computadora.

### Detección de bordes

La detección de bordes es una técnica fundamental en procesamiento de imágenes dirigida a identificar límites dentro de una imagen. Resalta cambios abruptos de intensidad, representando los bordes donde termina un objeto y comienza otro. Algoritmos populares, como el **detector de bordes Canny**, usan información de gradiente para identificar estas transiciones, proporcionando un paso fundamental para tareas como reconocimiento de objetos y análisis de formas en aplicaciones de visión por computadora. La detección de bordes es instrumental para acentuar características clave, permitiendo una comprensión e interpretación mejorada de los datos visuales.

## Saltemos al código

Ejecuta estos comandos uno por uno en la terminal. 

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center> 

## Aplicaciones

La detección de formas tiene diversas aplicaciones en varios dominios. Una aplicación notable que **ahora vamos a demostrar es el conteo de monedas**, donde las formas se utilizan para identificar y diferenciar monedas basándose en sus características geométricas distintivas. En manufactura y control de calidad, la detección de formas se emplea para inspeccionar y clasificar productos basándose en sus formas, asegurando consistencia y adherencia a estándares. En **robótica, detectar y reconocer formas ayuda en la manipulación de objetos y navegación**. Las imágenes médicas dependen de la detección de formas para tareas como identificación de tumores y segmentación de órganos. Además, en el campo de **vehículos autónomos, la detección de formas juega un papel crucial en la identificación de señales de tráfico y obstáculos**, contribuyendo a la navegación segura. En general, la detección de formas es una herramienta versátil con aplicaciones que van desde la automatización industrial hasta la atención médica y más allá.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center> 

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
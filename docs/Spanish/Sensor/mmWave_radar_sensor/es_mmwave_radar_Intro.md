---
description: mmWave Radar Sensor Introdution
title: Introducción al Sensor de Radar mmWave
keywords:
- Grove
- mmWave Radar Sensor
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /es/mmwave_radar_Intro
last_update:
  date: 07/18/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

Bienvenido a descubrir los sensores de radar mmWave de Seeed Studio. Esta página está diseñada como una fuente integral de información que te guía a través de todos los aspectos de estos sensores.

Aquí encontrarás detalles sobre los parámetros del producto, incluyendo frecuencias de operación, potencia de transmisión, rangos de detección de movimiento y presencia, y ángulos de detección. También presentamos métodos de instalación sencillos, como instalación superior, lateral e inclinada. Además, exploramos diversos escenarios de aplicación en seguridad automotriz, hogares inteligentes y atención médica. Nuestros sensores de radar mmWave son adecuados para una amplia gama de proyectos, brindándote soluciones de detección confiables.

## Principio del radar mmWave

El radar de onda milimétrica (mmWave) utiliza técnicas de radar FMCW (Frecuencia Modulada en Onda Continua) para detectar objetos, así como su velocidad, distancia y ángulo. El radar FMCW transmite continuamente una señal con frecuencia modulada y recibe las señales reflejadas por los objetos. Al analizar la diferencia entre las frecuencias transmitidas y recibidas, el radar puede determinar la distancia (rango) y la velocidad relativa (velocidad) de los objetos. Este principio permite que el radar mmWave detecte movimientos sutiles, proporcione alta precisión y funcione eficazmente en diversas condiciones ambientales como lluvia, niebla o polvo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
Diagrama esquemático de la banda de frecuencia de onda milimétrica, crédito: <a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## Tipos de sensores de radar mmWave

Los sensores de radar de onda milimétrica (mmWave) pueden detectar objetos, medir su distancia, velocidad y ángulo, y pueden penetrar varios materiales como plástico, ropa y paneles de yeso, lo que los hace adecuados para una amplia gama de aplicaciones.  
En Seeed, hemos aprovechado la potencia del mmWave para crear diversos sensores que pueden realizar acciones como detección de caídas y monitoreo de respiración durante el sueño.

A continuación se muestra nuestra gama de sensores de radar mmWave, cada uno con diferentes características y funciones.

<table align="center">
	<tr>
		<th>Sensor de Detección de Caídas 60GHz mmWave XIAO MR60FDA2</th>
		<th>Sensor de Respiración y Latido 60GHz mmWave XIAO MR60BHA2</th>
		<th>Sensor de Presencia Estática 24GHz mmWave para XIAO</th>
		<th>Kit de Detección Humana mmWave MR24HPC1</th>
        <th>Módulo Lite de Presencia Estática Humana 24GHz mmWave MR24HPC1 Lite</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/">XIAO 60GHz mmWave Human Fall Detection Sensor <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/getting_started_with_mr60bha2_mmwave_kit/">XIAO 60GHz mmWave Human Breathing and Heartbeat Sensor <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/mmwave_for_xiao/">24Ghz mmwave Human Static Presence Sensor for XIAO</a></th>
        <th><a href="https://wiki.seeedstudio.com/mmwave_human_detection_kit/">mmWave Human Detection Sensor Kit <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR24HPC1/">24GHz mmWave Human Static Presence Sensor Module <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>Función principal</th>
        <td>Detección de caídas</td>
        <td>Detección de respiración y latido</td>
        <td>Detección de presencia</td>
        <td>Detección de presencia</td>
        <td>Detección de presencia</td>
    </tr>
    <tr>
        <th>Frecuencia</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
    </tr>
    <tr>
        <th>Potencia de transmisión</th>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>8dBm</td>
    </tr>
    <tr>
        <th>Transmisores y recepciones</th>
        <td>2 transimisiones y 2 recepciones</td>
        <td>2 transimisiones y 2 recepciones</td>
        <td>1 transimisión y 1 recepción</td>
        <td>1 transimisión y 1 recepción</td>
        <td>1 transimisión y 1 recepción</td>
    </tr>
    <tr>
        <th>Potencia de transmisión</th>
        <td>6m</td>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>5m</td>
    </tr>
    <tr>
        <th>Rango de detección</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>Ángulo de detección</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
    </tr>
    <tr>
        <th>Voltaje de operación</th>
        <td>5V</td>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>Separación de pines</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
    </tr>
    <tr>
        <th>Tamaño (AnxAl)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>Método de instalación</th>
        <td>Superior</td>
        <td>Lateral o inclinado</td>
        <td>No requerido</td>
        <td>No requerido</td>
        <td>No requerido</td>
    </tr>
    <tr>
        <th>Soporte ESPHome</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">Native Firmware Support</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">Native Firmware Support</a></td>
        <td><a href="https://wiki.seeedstudio.com/mmwave_for_xiao/">Guía</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>Categoría</th>
       <td>Sensor con XIAO ESP32C6 como MCU</td>
       <td>Sensor con XIAO ESP32C6 como MCU</td>
       <td>Módulo, compatible con XIAO (pines a pines)</td>
       <td>Sensor con XIAO ESP32C3 como MCU</td>
       <td>Módulo, compatible con XIAO, Arduino (con cables dupont)</td>
    </tr>
    <tr>
        <th>Disponibilidad</th>
        <td><a href="https://www.seeedstudio.com/"><strong>24.9 USD</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>24.9 USD</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>4.49 USD</strong> en Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>26.99 USD</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>6.9 USD</strong> en Seeed Studio</a></td>
    </tr>
</font>
</table>

<!-- ### 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The MR60FDA2 Sensor Kit utilizes 60GHz mmWave technology for reliable fall detection and human presence sensing. It includes light level sensing, an RGB LED for customizable interaction, and supports additional sensors and actuators for enhanced automation. Powered by the XIAO ESP32C6, the kit features pre-flashed ESPHome firmware and wireless connectivity options, including Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, and Thread. This no-code, plug-and-play integration with Home Assistant allows users to easily customize detection zones, making it ideal for applications in healthcare monitoring, safety, elderly care, and home automation. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>

### 60GHz mmWave Breathing and Heartbeat Detection Sensor Kit with XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The MR60BHA2 Sensor Kit utilizes 60GHz mmWave technology for reliable detection of breathing, heartbeat, and human presence. It features light level sensing, a customizable RGB LED, and supports additional sensors and actuators for enhanced automation. Powered by the XIAO ESP32C6, this kit comes with pre-flashed ESPHome firmware, allowing for easy plug-and-play integration with Home Assistant using Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, and Thread. It’s an ideal solution for healthcare monitoring, safety, elderly care, and home automation, enabling users to customize detection zones without coding. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>

### 24GHz mmWave Human Detection Sensor Kit with XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Powered by Seeed Studio's XIAO ESP32C3, it supports WiFi/BLE connectivity and precise human detection via mmWave sensors. Connect Grove modules for added features and set up Home Assistant in 1-2 minutes with OTA updates. Its replaceable mmWave sensors enable versatile use, ideal for smart home automation, intrusion detection, and elderly monitoring.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>

### Seeed Studio 24GHz mmWave for XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor for XIAO - Human Static Presence is a expansion board for Seeed Studio XIAO series. It is an antenna-integrated, high-sensitivity mmwave radar sensor that is based on the FMCW principle. Combined with radar signal processing and accurate human body sensing algorithms, it can identify human bodies in motion and stationary states.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>

### 24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor - Human Static Presence Module Lite is an antenna-integrated, health-friendly mmwave radar sensor that applies FMCW ranging technology, with operation in 24GHz, for implementation of human static presence, independently of environmental influences. This is also a personalized radar that users can configure underlying parameters of it to determine detected functions. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div> -->

## Comparación de Diferentes Parámetros de los Sensores de Radar mmWave

### Comparación de la Función de Detección de Presencia Humana entre Sensores de Radar mmWave y Otros Sensores

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>Sensor de Radar mmWave</th>
        <td>Cámara</td>
        <td>Sensor Ultrasónico</td>
        <td>LiDAR (Radar Láser)</td>
        <td>Sensor Infrarrojo Pasivo (PIR)</td>
    </tr>
    <tr>
        <th>Privacidad</th>
        <th>Detección no visual, banda de frecuencia de señal oculta, bajo riesgo de filtración de datos</th>
        <td>Captura imágenes con mucha información privada, propenso a filtraciones</td>
        <td>No recoge imágenes privadas, pero la señal es fácilmente detectable</td>
        <td>Los datos escaneados pueden revelar información del entorno, con riesgo de filtración</td>
        <td>No recoge imágenes privadas, pero la señal es fácilmente detectable</td>
    </tr>
    <tr>
        <th>Costo</th>
        <th>Moderado</th>
        <td>El costo varía según resolución y funciones; algunos tipos son relativamente costosos</td>
        <td>Bajo costo</td>
        <td>Alto costo de equipo y mantenimiento</td>
        <td>Bajo costo</td>
    </tr>
    <tr>
        <th>Precisión</th>
        <th>Alta precisión, capaz de detectar con exactitud distancia, velocidad y ángulo del objetivo</th>
        <td>Muy afectado por la iluminación y la resolución</td>
        <td>Precisión limitada en detección de corta distancia</td>
        <td>Imágenes 3D de alta precisión, pero afectado por el entorno</td>
        <td>Baja precisión, solo detecta movimiento</td>
    </tr>
    <tr>
        <th>Estabilidad</th>
        <th>No afectado por luz o temperatura, con rendimiento estable</th>
        <td>Restringido por condiciones de luz, mal desempeño en baja iluminación</td>
        <td>Fácilmente afectado por ruido ambiental</td>
        <td>Muy afectado por condiciones meteorológicas adversas</td>
        <td>Fácilmente afectado por factores ambientales como fuentes de calor</td>
    </tr>
</font>
</table>

La tabla de comparación resalta las ventajas del radar mmWave sobre cámaras, sensores ultrasónicos, LiDAR y sensores PIR. Ofrece un rendimiento estable en diversos entornos, lo que lo hace eficaz para la detección de caídas, monitoreo de frecuencia respiratoria y cardíaca, y detección de presencia humana. Además, protege la privacidad al no capturar imágenes identificables, garantizando la confidencialidad del usuario.

### Comparación entre 24 GHz y 60 GHz

Los radares de onda milimétrica de 24 GHz y 60 GHz difieren significativamente en sus características. El radar de 24 GHz ofrece gran penetración y mayor alcance de detección, ideal para detección de presencia humana, especialmente en sistemas automotrices. En contraste, el radar de 60 GHz, con menor penetración pero mayor resolución angular, es ideal para aplicaciones precisas como detección de caídas y monitoreo de signos vitales, común en dispositivos de hogar inteligente. En última instancia, elegir la frecuencia adecuada depende de las necesidades específicas, como el rango de detección y características del objetivo.

### Comparación de la Detección de Presencia Humana entre Sensores de Radar mmWave

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>Soporte para Detección de Presencia Humana</th>
        <th>Comparativa del Efecto de Detección</th>
    </tr>
    <tr>
        <th>24GHz mmWave para XIAO</th>
        <td>✅</td>
        <td>Este producto ofrece detección de presencia humana y está listo para usarse de inmediato, cubriendo necesidades básicas. Los usuarios pueden lograr un efecto de detección relativamente estable rápidamente</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>Este producto permite detección de presencia humana y usuarios con habilidades técnicas pueden ajustar parámetros subyacentes para optimizar el rendimiento en escenarios complejos. Sin embargo, su precisión es ligeramente menor en comparación con el 24GHz mmWave para XIAO al usarlo directamente</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>La detección de presencia humana no es su función principal; se usa principalmente como soporte para la detección de caídas</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>La detección de presencia humana no es su función principal; se usa principalmente como soporte para la detección de ritmo respiratorio y cardíaco</td>
    </tr>
</font>
</table>

**24GHz mmWave para XIAO** está diseñado para usuarios que buscan comodidad y acceso rápido. Ofrece funciones como detección de presencia humana y detección de movimiento, todo controlado vía app móvil por Bluetooth. Listo para usarse de inmediato, simplifica la configuración y permite aprovechar sus capacidades fácilmente. Interfaz de la app Bluetooth:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**MR24HPC1 Lite** está diseñado para usuarios técnicos, con funciones de detección de presencia, movimiento y velocidad. Permite ajustar parámetros para escenarios variados. Para lograr resultados óptimos, se deben leer cuidadosamente los documentos técnicos. Interfaz de su software de configuración:

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## Sensor de Radar mmWave: Escenarios Típicos de Aplicación en la Vida Cotidiana

Los sensores de radar mmWave se utilizan en una variedad de proyectos innovadores en diferentes industrias. Algunos ejemplos:

- **Sistemas de Seguridad Automotriz**: Control de crucero adaptativo, frenado automático de emergencia, detección de punto ciego.
- **Hogar Inteligente**: Reconocimiento de gestos, detección de presencia y monitoreo de signos vitales sin contacto.
- **Automatización Industrial**: Monitoreo de maquinaria, detección de personas en zonas peligrosas, mejora de la seguridad.
- **Aplicaciones en Salud**: Monitoreo de signos vitales, detección de caídas y herramientas de diagnóstico no invasivas.
- **Navegación de Drones**: Evitación de obstáculos, navegación autónoma y aterrizajes de precisión.

También puedes conectar nuestros módulos radar mmWave a HomeAssistant. Algunos ejemplos de uso:

- [MR60FDA2 Sensor de detección de caídas con Home Assistant](https://wiki.seeedstudio.com/ha_with_mr60fda2/)
- [MR60BHA2 Sensor respiración y latidos con Home Assistant](https://wiki.seeedstudio.com/ha_with_mr60bha2/)
- [Kit mmWave y Grove con ESPHome](https://wiki.seeedstudio.com/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [mmWave para XIAO a Home Assistant vía Bluetooth](https://wiki.seeedstudio.com/mmwave_for_xiao_to_ha_bt/)

## Métodos de Instalación de Sensores Radar mmWave

**Método 1: Instalación superior.** Altura colgante de 2.2-3.0 m, radio de detección máximo de 2 m. El lado del sensor debe estar alineado con la dirección de detección.

Aplicable a: MR60FDA2, MR24HPC1, 24GHz mmWave XIAO

:::note
La altura recomendada para MR60FDA2 está entre 2.4 y 3.0 m, con umbral de detección de caídas entre 0 y 0.6 m.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**Método 2: Instalación lateral.** Se recomienda que la altura sea similar a la del pecho de la persona medida y la distancia módulo-pecho ≤ 1.5 m.

Aplicable a: MR60BHA2, MR24HPC1, 24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**Método 3: Instalación inclinada.** Para detección de respiración y latidos durante el sueño. Instalar el radar a 1 m sobre la cabecera de la cama, inclinado a 45° hacia el centro, y mantener distancia al pecho ≤ 1.5 m.

Aplicable a: MR60BHA2, MR24HPC1, 24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Usar en espacios abiertos. Evitar los siguientes escenarios dentro del rango de detección para prevenir interferencias:

- Múltiples radares muy cerca
- Cortinas o plantas en movimiento
- Flujos o películas de agua
- Áreas grandes con metal o espejos
- Detección a través de vidrio o madera delgada
- Lugares con vibraciones
- Fuentes de alimentación de baja calidad

:::

## Código Abierto de los Sensores de Radar mmWave de Seeed Studio

### Materiales de Código Abierto del Kit MR60FDA2 mmWave de Seeed Studio
- **STL**: [Caja 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código completo y documentación en la [página GitHub de la librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para mayor personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **Software GUI MR60FDA2**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **Esquemático del sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación técnica del módulo MR60FDA2**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **Manual de interfaz Tiny Frame MR60FDA2**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Materiales de Código Abierto del Kit MR60BHA2 mmWave de Seeed Studio
- **STL**: [Caja 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código completo y documentación en la [página GitHub de la librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para mayor personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **Esquemático del sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación técnica del módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual de interfaz Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Materiales de Código Abierto del 24GHz mmWave para XIAO de Seeed Studio
- **Especificación técnica 24GHz mmWave para XIAO**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **Manual de usuario 24GHz mmWave para XIAO**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **Esquemático 24GHz mmWave para XIAO**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Materiales de Código Abierto del Kit MR24HPC1 mmWave de Seeed Studio
- **Repositorio GitHub**: Accede al código completo y documentación en el [proyecto open source](https://github.com/limengdu/mmwave-kit-external-components).
- **Plantilla de configuración rápida MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificación técnica módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual de usuario MR24HPC1 V1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### Versión 1
- **Esquemático y PCB MR24HPC1 V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **Esquemático MR24HPC1 V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### Versión 2
- **Esquemático y PCB MR24HPC1 V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **Esquemático MR24HPC1 V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Materiales de Código Abierto del Sensor 24GHz mmWave MR24HPC1 de Seeed Studio

- **Plantilla de configuración rápida MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificación técnica módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual de usuario MR24HPC1 V2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **Software para PC MR24HPC1**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **Documentos de certificación CE MR24HPC1**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Los datos en bruto y algoritmos de los sensores de radar mmWave de Seeed Studio no son de código abierto. ¡Gracias por tu comprensión y apoyo!
:::

## ✨ Proyecto de Contribución

- Tenemos una lista de tareas para actualizar esta página, que está categorizada en nuestro [proyecto de contribución](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que nos dedicamos a mejorar la experiencia del usuario y ofrecer mejor soporte mediante el desarrollo de nuestra plataforma wiki.
- ¡[Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026) es esencial para nosotros! Valoramos mucho tu aporte y agradeceríamos tu ayuda para generar ideas.

## Soporte Técnico y Discusión de Producto

 <br />

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

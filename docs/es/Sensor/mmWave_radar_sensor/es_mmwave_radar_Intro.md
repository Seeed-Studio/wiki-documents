---
description: Introducción al Sensor de Radar mmWave
title: Introducción al Sensor de Radar mmWave
keywords:
- Grove
- mmWave Radar Sensor

image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /es/mmwave_radar_Intro
last_update:
  date: 03/28/2025
  author: Hugo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

Bienvenido a descubrir los Sensores de Radar mmWave de Seeed Studio. Esta página está diseñada para ser una fuente integral de información, guiándote a través de todos los aspectos de estos sensores.

Aquí, puedes encontrar detalles sobre los parámetros del producto, incluyendo frecuencias de operación, potencia de transmisión, rangos de movimiento y presencia, y ángulos de detección. También presentamos métodos de instalación sencillos como montaje superior, montaje lateral e instalación inclinada. Además, exploramos varios escenarios de aplicación en seguridad automotriz, hogar inteligente y atención médica. Nuestros Sensores de Radar mmWave son adecuados para una amplia gama de proyectos, proporcionándote soluciones de detección confiables.

## Principio del Radar mmWave

El radar de Ondas Milimétricas (mmWave) utiliza técnicas de radar de Onda Continua Modulada en Frecuencia (FMCW) para detectar objetos y su velocidad, rango y ángulo. El radar FMCW transmite continuamente una señal modulada en frecuencia y recibe las señales reflejadas de los objetos. Al analizar la diferencia entre las frecuencias transmitidas y recibidas, el radar puede determinar la distancia (rango) y velocidad relativa (velocidad) de los objetos. Este principio permite al radar mmWave detectar movimientos finos, proporcionar alta precisión y funcionar efectivamente en varias condiciones ambientales como lluvia, niebla o polvo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
Diagrama Esquemático de la Banda de Frecuencia de Ondas Milimétricas, crédito: <a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## Diferentes tipos de Sensores de Radar mmWave

Los sensores de radar de ondas milimétricas (mmWave) son capaces de detectar objetos, medir su distancia, velocidad y ángulo, y pueden penetrar varios materiales como plástico, ropa y paneles de yeso, haciéndolos adecuados para una amplia gama de aplicaciones.
En Seeed, hemos aprovechado el poder de mmWave para crear varios sensores que pueden realizar una variedad de acciones, como detección de caídas y monitoreo de respiración durante el sueño.

Nuestra gama de Sensores de Radar mmWave se muestra a continuación, cada uno con diferentes características y funciones.

<table align="center">
 <tr>
  <th>Sensor de Detección de Caídas Humanas mmWave de 60GHz XIAO MR60FDA2</th>
  <th>Sensor de Respiración y Latidos Humanos mmWave de 60GHz XIAO MR60BHA2</th>
  <th>Sensor de Presencia Estática Humana mmwave de 24Ghz para XIAO</th>
  <th>Kit de Sensor de Detección Humana mmWave MR24HPC1</th>
        <th>Módulo Sensor de Presencia Estática Humana mmWave de 24GHz MR24HPC1 Lite</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
        </div></td>
 </tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/es/getting_started_with_mr60fda2_mmwave_kit/">Sensor de Detección de Caídas Humanas mmWave de 60GHz XIAO <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/es/getting_started_with_mr60bha2_mmwave_kit/">Sensor de Respiración y Latidos Humanos mmWave de 60GHz XIAO <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/es/mmwave_for_xiao/">Sensor de Presencia Estática Humana mmWave de 24GHz para XIAO</a></th>
        <th><a href="https://wiki.seeedstudio.com/es/mmwave_human_detection_kit/">Kit de Sensor de Detección Humana mmWave <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/es/Radar_MR24HPC1/">Módulo Sensor de Presencia Estática Humana mmWave de 24GHz <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>Función Principal</th>
        <td>Detección de Caídas</td>
        <td>Detección de Respiración y Latidos</td>
        <td>Detección Humana</td>
        <td>Detección Humana</td>
        <td>Detección Humana</td>
    </tr>
    <tr>
        <th>Frecuencia de Operación</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
    </tr>
    <tr>
        <th>Potencia de Transmisión</th>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>8dBm</td>
    </tr>
    <tr>
        <th>Conteos de transmisión y recepción</th>
        <td>Dos transmisiones y dos recepciones</td>
        <td>Dos transmisiones y dos recepciones</td>
        <td>Una transmisión y una recepción</td>
        <td>Una transmisión y una recepción</td>
        <td>Una transmisión y una recepción</td>
    </tr>
    <tr>
        <th>Rango de Movimiento</th>
        <td>6m</td>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>5m</td>
    </tr>
    <tr>
        <th>Rango de Presencia</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>Ángulo de Detección</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
    </tr>
    <tr>
        <th>Voltaje de Operación</th>
        <td>5V</td>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>Espaciado de Pines</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
    </tr>
    <tr>
        <th>Tamaño (WxH)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>Método de Instalación</th>
        <td>Instalación superior</td>
        <td>Instalación lateral o instalación inclinada</td>
        <td>Sin requisitos</td>
        <td>Sin requisitos</td>
        <td>Sin requisitos</td>
    </tr>
    <tr>
        <th>Soporte ESPHome</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">Soporte de Firmware Nativo</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">Soporte de Firmware Nativo</a></td>
        <td><a href="https://wiki.seeedstudio.com/es/mmwave_for_xiao/">Guía</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>Categoría</th>
       <td>Sensor con XIAO ESP32C6 como MCU</td>
       <td>Sensor con XIAO ESP32C6 como MCU</td>
       <td>Módulo, compatible con XIAO (pin a pin)</td>
       <td>Sensor con XIAO ESP32C3 como MCU</td>
       <td>Módulo, compatible con XIAO, Arduino (vía cable puente)</td>
    </tr>
    <tr>
        <th>Disponibilidad</th>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>\$4.49</strong> en Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>\$26.99</strong> en Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>\$6.9</strong> en Seeed Studio</a></td>
    </tr>
</font>
</table>

<!-- ### Kit de Sensor de Detección de Caídas mmWave de 60GHz con XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>El Kit de Sensor MR60FDA2 utiliza tecnología mmWave de 60GHz para detección confiable de caídas y detección de presencia humana. Incluye detección de nivel de luz, un LED RGB para interacción personalizable, y soporta sensores y actuadores adicionales para automatización mejorada. Alimentado por el XIAO ESP32C6, el kit cuenta con firmware ESPHome pre-instalado y opciones de conectividad inalámbrica, incluyendo Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, y Thread. Esta integración plug-and-play sin código con Home Assistant permite a los usuarios personalizar fácilmente las zonas de detección, haciéndolo ideal para aplicaciones en monitoreo de salud, seguridad, cuidado de ancianos y automatización del hogar. </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/es/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Aprender Más</font></span></strong>
    </a>
</div>

### Kit de Sensor de Detección de Respiración y Latidos mmWave de 60GHz con XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>El Kit de Sensor MR60BHA2 utiliza tecnología mmWave de 60GHz para detección confiable de respiración, latidos y presencia humana. Cuenta con detección de nivel de luz, un LED RGB personalizable, y soporta sensores y actuadores adicionales para automatización mejorada. Alimentado por el XIAO ESP32C6, este kit viene con firmware ESPHome pre-instalado, permitiendo integración plug-and-play fácil con Home Assistant usando Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, y Thread. Es una solución ideal para monitoreo de salud, seguridad, cuidado de ancianos y automatización del hogar, permitiendo a los usuarios personalizar zonas de detección sin codificación. </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/es/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Aprender Más</font></span></strong>
    </a>
</div>

### Kit de Sensor de Detección Humana mmWave de 24GHz con XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Alimentado por el XIAO ESP32C3 de Seeed Studio, soporta conectividad WiFi/BLE y detección humana precisa vía sensores mmWave. Conecta módulos Grove para características adicionales y configura Home Assistant en 1-2 minutos con actualizaciones OTA. Sus sensores mmWave reemplazables permiten uso versátil, ideal para automatización de hogar inteligente, detección de intrusos y monitoreo de ancianos.</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/es/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Aprender Más</font></span></strong>
    </a>
</div>

### Seeed Studio mmWave de 24GHz para XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Sensor mmWave de 24GHz para XIAO - Presencia Estática Humana es una placa de expansión para la serie Seeed Studio XIAO. Es un sensor de radar mmwave de alta sensibilidad con antena integrada que se basa en el principio FMCW. Combinado con procesamiento de señales de radar y algoritmos precisos de detección de cuerpo humano, puede identificar cuerpos humanos en estados de movimiento y estacionarios.</font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/es/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Aprender Más</font></span></strong>
    </a>
</div>

### Sensor mmWave de 24GHz - Módulo de Presencia Estática Humana Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>El Sensor mmWave de 24GHz - Módulo de Presencia Estática Humana Lite es un sensor de radar mmwave saludable con antena integrada que aplica tecnología de medición FMCW, con operación en 24GHz, para implementación de presencia estática humana, independientemente de influencias ambientales. Este es también un radar personalizable que los usuarios pueden configurar parámetros subyacentes para determinar funciones detectadas. </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/es/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Aprender Más</font></span></strong>
    </a>
</div> -->

## Comparación de Diferentes Parámetros de Sensores de Radar mmWave

### Comparación de las Funciones de Detección de Presencia Humana entre Sensores de Radar mmWave y Otros Sensores

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
        <th>Detección no visual, banda de frecuencia de señal oculta, bajo riesgo de fuga de datos</th>
        <td>Recopila imágenes que contienen gran cantidad de información privada, propensa a fugas</td>
        <td>No involucra la recopilación de imágenes privadas, pero la señal es fácilmente detectable</td>
        <td>Los datos escaneados pueden exponer información de la escena, con riesgo de fuga</td>
        <td>No involucra la recopilación de imágenes privadas, pero la señal es fácilmente detectable</td>
    </tr>
    <tr>
        <th>Costo</th>
        <th>Moderado</th>
        <td>El costo varía según la resolución y funciones, algunos tipos son relativamente altos</td>
        <td>Bajo costo</td>
        <td>Alto costo de equipo y mantenimiento</td>
        <td>Bajo costo</td>
    </tr>
    <tr>
        <th>Precisión</th>
        <th>Alta precisión, capaz de detectar con precisión la distancia, velocidad y ángulo del objetivo</th>
        <td>Muy afectada por la iluminación y resolución</td>
        <td>Precisión limitada en detección de corta distancia</td>
        <td>Imagen 3D de alta precisión, pero afectada por el entorno</td>
        <td>Baja precisión de detección, solo puede determinar movimiento</td>
    </tr>
    <tr>
        <th>Estabilidad</th>
        <th>No afectada por iluminación y temperatura, con rendimiento estable</th>
        <td>Restringida por condiciones de iluminación, mal rendimiento en poca luz</td>
        <td>Fácilmente afectada por ruido ambiental</td>
        <td>Muy afectada por condiciones climáticas adversas</td>
        <td>Fácilmente afectada por factores ambientales como fuentes de calor</td>
    </tr>
</font>
</table>

La tabla de comparación destaca las ventajas del radar mmWave sobre las cámaras, sensores ultrasónicos, LiDAR y sensores PIR. Ofrece un rendimiento estable en diversos entornos, lo que lo hace efectivo para la detección de caídas, monitoreo de frecuencia respiratoria y cardíaca, y detección de presencia humana. Además, el radar mmWave protege la privacidad al no capturar imágenes identificables, asegurando la confidencialidad del usuario.

### Comparación de 24 GHz y 60 GHz

Los radares de ondas milimétricas de 24 GHz y 60 GHz difieren significativamente en sus características. El radar de 24 GHz ofrece una fuerte penetración y un rango de detección más largo, lo que lo hace efectivo para la detección de presencia humana, particularmente en sistemas de radar automotriz. En contraste, el radar de 60 GHz, con menor penetración pero mayor resolución angular, es ideal para aplicaciones precisas como la detección de caídas y el monitoreo de frecuencia cardíaca, comúnmente encontrado en dispositivos de hogar inteligente. En última instancia, seleccionar la frecuencia correcta depende de las necesidades específicas de la aplicación, incluyendo el rango de detección y las características del objetivo.

### Comparación de las Funciones de Detección de Presencia Humana entre Sensores de Radar mmWave

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>Soporta Detección de Presencia Humana</th>
        <th>Comparación del Efecto de Detección de Presencia Humana</th>
    </tr>
    <tr>
        <th>24GHz mmWave for XIAO</th>
        <td>✅</td>
        <td>Este producto ofrece detección de presencia humana y está listo para usar desde el primer momento, satisfaciendo las necesidades básicas. Los usuarios pueden lograr rápidamente un efecto de detección relativamente estable</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>Este producto cuenta con detección de presencia humana, permitiendo a los usuarios con habilidades prácticas ajustar los parámetros subyacentes para un rendimiento óptimo en escenarios complejos. Sin embargo, su precisión de detección es ligeramente menor que la del 24GHz mmWave for XIAO cuando se opera directamente</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>La función de detección de presencia humana no es la función principal; se utiliza principalmente como auxiliar para apoyar la detección de caídas</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>La función de detección de presencia humana no es la función principal; se utiliza principalmente como auxiliar para apoyar la detección de frecuencia respiratoria y cardíaca</td>
    </tr>
</font>
</table>

El **mmWave de 24GHz para XIAO** está diseñado para usuarios que buscan conveniencia y acceso rápido. Ofrece características como detección de presencia humana y detección de movimiento, todo controlable a través de una aplicación móvil Bluetooth. Listo para usar desde el primer momento, simplifica la configuración y permite a los usuarios beneficiarse rápidamente de sus capacidades. Aquí está la interfaz de la aplicación Bluetooth:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

El **MR24HPC1 Lite** está diseñado para usuarios prácticos, con detección de presencia humana, movimiento y velocidad, con un enfoque en ajustes de parámetros personalizables para varios escenarios. Los usuarios pueden lograr resultados de detección óptimos ajustando los parámetros correctos, pero deben leer cuidadosamente la documentación para utilizar completamente sus opciones de personalización. A continuación se muestra la interfaz de operación para su computadora superior:

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## Sensor de Radar mmWave: Escenarios de Aplicación Típicos en nuestra Vida

Los sensores de radar mmWave se utilizan en una variedad de proyectos innovadores en diferentes industrias. Aquí hay algunos ejemplos:

- Sistemas de Seguridad Automotriz: Mejorando los sistemas de asistencia al conductor con características como control de crucero adaptativo, frenado automático de emergencia y detección de puntos ciegos.
- Dispositivos de Hogar Inteligente: Usando sensores de radar para reconocimiento de gestos, detección de presencia y monitoreo de signos vitales sin contacto físico.
- Automatización Industrial: Implementando radar para monitorear maquinaria, detectar presencia humana en áreas peligrosas y mejorar la seguridad en entornos automatizados.
- Aplicaciones de Atención Médica: Monitoreando los signos vitales de los pacientes, detectando caídas y proporcionando herramientas de diagnóstico no invasivas.
- Navegación de Drones: Permitiendo a los drones evitar obstáculos, navegar de forma autónoma y realizar aterrizajes de precisión.

Estos proyectos demuestran la versatilidad y el potencial de la tecnología de radar mmWave para transformar varios campos a través de capacidades mejoradas de detección y automatización.

Ciertamente, también puedes conectar nuestro módulo sensor de radar mmWave a HomeAssistant. Aquí hay algunos ejemplos de uso:

- [Sensor de detección de caídas MR60FDA2 con Home Assistant](https://wiki.seeedstudio.com/es/ha_with_mr60fda2/)
- [Sensor de respiración-latido MR60BHA2 con Home Assistant](https://wiki.seeedstudio.com/es/ha_with_mr60bha2/)
- [Kit mmWave y Grove conectar a ESPHome](https://wiki.seeedstudio.com/es/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [mmWave para XIAO a Home Assistant vía Bluetooth](https://wiki.seeedstudio.com/es/mmwave_for_xiao_to_ha_bt/)

## Método de instalación de sensores de radar mmWave

**Método 1: Instalación superior.** Altura de colgado montado en la parte superior 2.2-3.0m, radio de detección máximo 2m, el lado con el sensor mmWave necesita alinearse con la dirección de detección.

Aplicable a: MR60FDA2, MR24HPC1, mmWave de 24GHz XIAO

:::note
El umbral de altura de instalación del MR60FDA2 está entre 2.4 y 3.0 metros, y el umbral de altura para detectar caídas está entre 0 y 0.6 metros.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**Método 2: Instalación lateral.** Montado lateralmente, se recomienda que la altura de instalación del radar sea consistente con la altura del pecho de la persona que se está midiendo, y la posición del módulo y la posición del pecho ≤ 1.5m.

Aplicable a: MR60BHA2, MR24HPC1, mmWave de 24GHz XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**Método 3: instalación inclinada.** Para necesidades de detección de respiración durante el sueño y frecuencia cardíaca, se puede adoptar un método de instalación inclinada. Se requiere que el radar se instale a una altura de 1m directamente sobre la cabecera de la cama, inclinado hacia abajo a 45° hacia el medio de la cama, y la distancia entre el radar y la cavidad torácica se controla para que esté dentro de 1.5m. La dirección normal del radar se alinea con la posición de detección principal para asegurar que el radar pueda detectar datos respiratorios y de latidos del corazón.

Aplicable a: MR60BHA2, MR24HPC1, mmWave de 24GHz XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Por favor usa este módulo en un espacio abierto, y mantente fuera de los siguientes escenarios dentro del rango de detección para prevenir interferencia con el módulo:

- Múltiples radares instalados demasiado cerca entre sí  
- El viento mueve cortinas y balancea plantas
- Flujo de agua y película de agua  
- Grandes áreas de reflexiones de metal y espejo  
- Detección a través de vidrio y tableros de madera delgados  
- Ubicación de instalación propensa a vibraciones  
- Uso de fuentes de alimentación de baja calidad  

:::

## Código Abierto de los Sensores de Radar mmWave de Seeed Studio

### Materiales de Código Abierto del Kit mmWave MR60FDA2 de Seeed Studio

- **STL**: [Carcasa 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código completo y documentación en la [página GitHub de la Librería mmWave de Seeed](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para mayor personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **Software GUI MR60FDA2**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **Esquemático del Sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación Técnica del Módulo MR60FDA2**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **Manual de Interfaz Tiny Frame MR60FDA2**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Materiales de Código Abierto del Kit mmWave MR60BHA2 de Seeed Studio

- **STL**: [Carcasa 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código completo y documentación en la [página GitHub de la Librería mmWave de Seeed](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para mayor personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **Esquemático del Sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación Técnica del Módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual de Interfaz Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Materiales de Código Abierto del mmWave 24GHz para XIAO de Seeed Studio

- **Especificación Técnica del mmWave 24GHz para XIAO**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **Manual de Usuario del mmWave 24GHz para XIAO**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **Esquemático del mmWave 24GHz para XIAO**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Materiales de Código Abierto del Kit mmWave MR24HPC1 de Seeed Studio

- **Repositorio GitHub**: Accede al código completo y documentación en [Código abierto del proyecto](https://github.com/limengdu/mmwave-kit-external-components).
- **Plantilla de Configuración Rápida del Módulo MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificación Técnica del Módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual de Usuario del Módulo MR24HPC1 V1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### Versión 1

- **Esquemático y PCB del Módulo MR24HPC1 V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **Esquemático del Módulo MR24HPC1 V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### Versión 2

- **Esquemático y PCB del Módulo MR24HPC1 V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **Esquemático del Módulo MR24HPC1 V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Materiales de Código Abierto del Sensor mmWave 24GHz MR24HPC1 de Seeed Studio

- **Plantilla de Configuración Rápida del Módulo MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificación Técnica del Módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual de Usuario del Módulo MR24HPC1 V2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **Software de Computadora Superior del Módulo MR24HPC1**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **Documentos de Certificación CE del Módulo MR24HPC1**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Los datos en bruto y algoritmos en los Sensores de Radar mmWave de Seeed Studio no son de código abierto. ¡Gracias por tu comprensión y apoyo!
:::

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y proporcionar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos enormemente tu asistencia para generar ideas.

## Soporte Técnico y Discusión de Productos

 <br />

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

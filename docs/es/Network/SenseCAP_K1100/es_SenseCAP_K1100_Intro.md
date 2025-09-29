---
description: Guía SenseCAP K1100 - El Kit de Prototipo de Sensores
title: Guía SenseCAP K1100 - El Kit de Prototipo de Sensores
keywords:
- SenseCAP Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_K1100_Intro
last_update:
  date: 08/07/2024
  author: Frank
---

## Introducción

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/___-1-_-7_1_.png" style={{width:800, height:'auto'}}/></div>

El SenseCAP K1100 es un kit integral y vanguardista de monitoreo ambiental diseñado para proporcionar recolección y análisis de datos sin interrupciones. Integra sensores avanzados y opciones de conectividad, convirtiéndolo en una solución versátil para diversas aplicaciones de monitoreo ambiental. Este kit es ideal para desarrolladores, investigadores y entusiastas que buscan crear prototipos y desplegar soluciones IoT robustas de manera eficiente.

## La Idea del Verdadero Salvaje

El kit de prototipo SenseCAP K1100 cierra la brecha entre el desarrollo inicial del concepto y el despliegue en el mundo real. Permite a los usuarios crear y probar rápidamente sus soluciones de monitoreo ambiental antes de desplegarlas en el campo. Esta transición del prototipo a una verdadera solución salvaje asegura que los dispositivos sean confiables, duraderos y capaces de resistir diversas condiciones ambientales.

## Comenzando con SenseCAP K1100

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Introducción al Kit de Prototipo de Sensores</font></th>
      <th class="table-trnobg"><font size={"4"}>Iniciación Rápida y Sin Código con SenseCraft</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/banner.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, puedes experimentar la diversión de la recolección de datos y el procesamiento de datos con nuestro proyecto de código abierto en el menor tiempo posible. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Ofrecemos dos caminos para que nuestros usuarios experimenten IoT, uno es LoRa® y el otro es WiFi. Este tutorial te enseñará cómo usarlos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Aplicación de Red LoRaWAN

### Uso Básico de Sensores con Arduino

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Sensor de Luz Wio Terminal</th>
      <th class="table-trnobg">Sensor IMU Wio Terminal</th>
      <th class="table-trnobg">Sensor de Humedad del Suelo Grove</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funcionan los sensores de luz, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funcionan los sensores IMU, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funcionan los sensores de humedad del suelo Grove, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Light-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-IMU-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Sensor de Gas VOC y eCO2 (SGP30)</th>
      <th class="table-trnobg">Grove Sensor de Temp&Hum (SHT40)</th>
      <th class="table-trnobg">Grove Módulo Vision AI</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funcionan los sensores de gas Grove VOC y eCO2, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funcionan los sensores Grove Temp&Humi, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta sección, detallaremos cómo funciona el Módulo Grove Vision AI, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Servicios en la Nube

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Servicios en la Nube de Helium</th>
      <th class="table-trnobg">Servicios en la Nube de TTN</th>
      <th class="table-trnobg">SenseCAP & Node-Red para Servicios en la Nube</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/25.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este capítulo, presentaremos los controles de la consola de Helium que utilizamos para obtener una primera impresión de la consola de Helium.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este capítulo, presentaremos los controles de la consola de TTN que utilizamos para obtener una primera impresión de la consola de TTN. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Node-RED es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de maneras nuevas e interesantes. Haremos una serie de tutoriales para SenseCAP & Node-RED.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Aplicación de Red Wi-Fi

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Uso Avanzado de WiFi</th>
      <th class="table-trnobg">Servicio en la Nube</th>
      <th class="table-trnobg">Uso de Plataforma IoT Azure</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce algunos de los usos avanzados de bibliotecas de Wi-Fi como HTTPClient, DNSServer y WebServer. Con estas bibliotecas implementadas, puedes desarrollar tus proyectos IoT con APIs simples.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este capítulo, te guiaremos a través de la conexión a Ubidots, Blynk y Google Cloud usando el Wio Terminal. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos de telemetría desde los sensores/hardware integrados en el Wio Terminal como el acelerómetro de 3 ejes, sensor de luz, 3 botones a Microsoft Azure IoT Central. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Advanced-WiFi/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Getting_started_with_Ubidots/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Aplicación de ML Embebido

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Sensores Integrados con Edge Impulse</font></th>
      <th class="table-trnobg"><font size={"4"}>Vision AI con Modelos Personalizables</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo muestra una solución para personas que quieren usar edgeimpulse para generar modelos y conectar con la nube. En nuestra demostración, usaremos google sheet.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, te enseñaremos cómo entrenar tu propio modelo de IA para tu aplicación específica y luego desplegarlo fácilmente en el Grove - Vision AI Module. ¡Comencemos!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1111-Edge-Impulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Vision_AI_with_Customizable_Models/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Sección de Proyectos

Además de los tutoriales básicos anteriores para cada plataforma, hemos preparado una variedad de ejemplos ricos sobre el uso de este kit, ¡para que puedas ver aquí que el valor del kit es ilimitado!

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Concurso IoT Into the Wild para un Planeta Sostenible 2022</font></th>
      <th class="table-trnobg"><font size={"4"}>IA de Visión con Modelos Personalizables</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100_overview/000000.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Nos complace compartir contigo los proyectos que nuestros participantes han producido usando este excelente kit. ¡También puedes consultar sus proyectos para aún más posibilidades!</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, te mostraremos cómo utilizar el Wio Terminal para conectar Grove - Wio-E5 y Grove - Sensor de Humedad del Suelo que están en el kit, conectándolos con las plataformas Helium y Azure IoT Central, para construir un monitor de macetas de patio trasero en tiempo real y recordatorio de riego, para un vistazo del Internet de las Cosas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/IoT-into-the-wild-contest/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/K1111-Quick-Start-Guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y brindar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962909) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos mucho tu asistencia para generar ideas.

## Soporte Técnico de SenseCAP

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

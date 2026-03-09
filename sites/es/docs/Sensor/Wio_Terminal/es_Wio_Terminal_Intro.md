---
description: Guía de Wio Terminal
title: Guía de Wio Terminal
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio_Terminal_Intro
last_update:
  date: 08/6/2024
  author: Frank
createdAt: '2023-07-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Wio_Terminal_Intro/
---

## Introducción

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:600, height:'auto'}}/></div>

El Wio Terminal es una placa de desarrollo versátil alimentada por un microcontrolador ATSAMD51 y equipada con una pantalla LCD de 2.4". Incluye capacidades integradas de Wi-Fi/Bluetooth, un acelerómetro incorporado, micrófono, zumbador, ranura para tarjeta microSD y varias interfaces de E/S. El Wio Terminal está diseñado para simplificar el desarrollo de aplicaciones IoT, convirtiéndolo en una herramienta ideal tanto para principiantes como para desarrolladores experimentados.

## La Idea de OSHW (Hardware de Código Abierto Fabricable)

El Hardware de Código Abierto (OSHW) se refiere a hardware cuyo diseño se hace públicamente disponible para que cualquiera pueda estudiar, modificar, distribuir, fabricar y vender el diseño o hardware basado en ese diseño. [El Wio Terminal encarna la filosofía OSHW proporcionando documentación extensa, código de código abierto y archivos de diseño](https://github.com/Seeed-Studio/OSHW-WioTerminal), permitiendo a los usuarios comprender completamente y replicar el hardware. Esta apertura fomenta la innovación, colaboración y aprendizaje dentro de la comunidad de desarrolladores.

## Comenzando con Wio Terminal

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Comenzar con Wio Terminal</th>
      <th class="table-trnobg">CircuitPython en Wio Terminal</th>
      <th class="table-trnobg">Cómo usar FreeRTOS para Multitarea en Arduino</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este programa, nuestro ingeniero Lakshantha explicará cómo usar el terminal Wio junto con el software y te presentará demostraciones divertidas también! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar y ejecutar el CircuitPython oficial de Adafruit Industries en el Seeeduino Wio Terminal! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Para compatibilidad con Arduino, hemos portado FreeRTOS al framework de Arduino para que puedas usar FreeRTOS con tus placas Arduino favoritas con facilidad! Esta wiki introduce cómo comenzar con FreeRTOS para Arduino.  </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Software-FreeRTOS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Descripción General del Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Uso de LCD</th>
      <th class="table-trnobg">Entrada/Salida</th>
      <th class="table-trnobg">Uso de IMU</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar la biblioteca TFT LCD utilizada en Wio Terminal. ¡Proporciona funciones gráficas básicas al Wio Terminal con el mínimo esfuerzo!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar las E/S Grove en el Wio Terminal. ¡Esto te permite disfrutar de la funcionalidad plug and play del Ecosistema Grove así como usar el GPIO compatible con Raspberry Pi de 40 pines!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar la biblioteca del Acelerómetro Digital de 3 Ejes integrado (LIS3DHTR) utilizada en Wio Terminal. Esto te permite acceder a la información del acelerómetro del Wio Terminal así como usarlo para control de movimiento y etc.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-IO-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-IMU-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Tarjeta SD</th>
      <th class="table-trnobg">Wi-Fi</th>
      <th class="table-trnobg">Bluetooth</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo instalar la biblioteca del Sistema de Archivos utilizada en Wio Terminal. Proporciona funcionalidad básica de operaciones de archivos con la tarjeta SD, permitiendo Leer/Escribir en o desde la tarjeta SD usando la interfaz SPI.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo actualizar el firmware más reciente para el Núcleo Inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las bibliotecas dependientes para Wio Terminal para habilitar la conectividad inalámbrica.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo actualizar el firmware más reciente para el Núcleo Inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las bibliotecas dependientes para Wio Terminal para habilitar la conectividad Bluetooth.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-FS-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Bluetooth-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">RTC</th>
      <th class="table-trnobg">Emisor Infrarrojo</th>
      <th class="table-trnobg">Micrófono</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo usar la funcionalidad RTC integrada dentro del núcleo SAMD51 en Wio Terminal para que puedas llevar un registro del tiempo. ¡Esta característica te ahorra tener que agregar un módulo RTC externo al sistema!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar el Emisor Infrarrojo integrado como componente en Wio Terminal. El Emisor Infrarrojo es una Interfaz Digital y puede usarse para enviar señales IR, ¡tal como lo hace un control remoto!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo usar el micrófono integrado para entrada de audio en Wio Terminal. El micrófono puede usarse para detectar sonido del entorno y responder en consecuencia.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-RTC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Infrared-Emitter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Botones</font></th>
      <th class="table-trnobg"><font size={"4"}>Interruptor de 5 Direcciones</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki demuestra cómo usar los botones configurables en Wio Terminal. Hay tres botones que se pueden usar para Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki demuestra cómo usar el Interruptor de 5 direcciones en Wio Terminal.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Buttons/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Switch/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Sensor de Luz</font></th>
      <th class="table-trnobg"><font size={"4"}>Zumbador</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki demuestra cómo usar el sensor de luz integrado como un componente en Wio Terminal. El sensor de luz usa interfaz analógica y puedes simplemente leer los valores del sensor de luz del entorno mediante la lectura de su pin.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki demuestra cómo usar el zumbador piezoeléctrico integrado como un componente en Wio Terminal. El piezo puede conectarse a una salida de modulación por ancho de pulso (PWM) analógica para generar varios tonos y efectos!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Light/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Buzzer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Placa de Extensión

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal Chassis Battery(650mAh)</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> El Wio Terminal Battery Chassis es una placa de extensión imprescindible para la Placa de Desarrollo Wio-Terminal ya que proporciona una fuente de alimentación externa para Wio Terminal para mejorar su portabilidad y compacidad.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915 integrado con LoRa-E5 STM32WLE5JC, alimentado por el núcleo MCU de ultra bajo consumo ARM Cortex M4 y LoRa SX126x, es un módulo de radio inalámbrico que soporta protocolo LoRa y LoRaWAN en la frecuencia EU868 & US915 y modulaciones (G)FSK, BPSK, (G)MSK, LoRa.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Chassis-Battery_650mAh/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conexión Ethernet</font></th>
      <th class="table-trnobg"><font size={"4"}>Placa de Extensión de Audio</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki presenta cómo usar el ENC28J60 OVERLAYS HAT para Raspberry Pi en Wio Terminal para conectividad de red estable. Este es un ejemplo perfecto de usar placas de extensión Raspberry Pi 40 Pi en Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki presenta cómo usar la biblioteca de Audio con Wio Terminal usando ReSpeaker 2-Mic Hat. Con la ayuda de esta biblioteca, ¡puedes grabar, reproducir y analizar audio usando Wio Terminal! Además, esta biblioteca de audio puede implementarse en diferentes áreas como reconocimiento de voz y mucho más!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Ethernet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Audio-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Kit con Cursos

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Kit de Aplicaciones ML101 con Curso del Prof. Vijay</th>
      <th class="table-trnobg">¿Qué es TinyML?</th>
      <th class="table-trnobg">Introducción a la Inteligencia Artificial para Makers</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este libro está diseñado específicamente para educadores para poder adoptar el Wio Terminal en el aula o talleres para mostrar a los estudiantes el poder de TinyML. Proporciona los fundamentos básicos que uno tendría que cubrir para enseñar los conceptos más básicos de ML mientras mantiene los conceptos basados en ejercicios prácticos.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>ML como podrías haber adivinado significa Machine Learning y en la mayoría de los casos (aunque no siempre) hoy en día se refiere a Deep Learning. Tiny en TinyML significa que los modelos de ML están optimizados para ejecutarse en dispositivos de muy bajo consumo y pequeña huella, como varios MCUs. Es un subconjunto de ML en el Edge o Machine Learning Embebido.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>El propósito de este artículo es generar interés y proporcionar una comprensión general para makers que quieren comenzar su viaje de deep learning. Señalaré algunos de los casos de uso comunes y posibles obstáculos. También al final de este artículo, recomendaré algunos cursos y libros para aprender más sobre este tema.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML-Kit-Course/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Introduction_to_Artificial_Intelligence_for_Makers/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Aplicación

### Easy IoT

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conectar Wio Terminal a Microsoft Azure IoT Central</font></th>
      <th class="table-trnobg"><font size={"4"}>Conectando el Wio Terminal a Microsoft Azure IoT</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos de telemetría desde los sensores/hardware integrados en el Wio Terminal como el acelerómetro de 3 ejes, sensor de luz, 3 botones a Microsoft Azure IoT Central.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta aplicación de ejemplo te muestra cómo conectar tu Wio Terminal a Azure IoT Hub. Está construida sobre el SDK de Azure para C Embebido, una biblioteca de pequeña huella, fácil de portar para comunicarse con los servicios de Azure.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Azure-IOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conectar Wio Terminal a Google Cloud IoT Core</font></th>
      <th class="table-trnobg"><font size={"4"}>Comenzar con Wio Terminal y Wappsto IoT</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Google Cloud IoT Core y enviar datos de telemetría desde el Wio Terminal al núcleo de Google Cloud IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, te guiaremos a través de la conexión del Wio Terminal a Wappsto IoT y el uso de las diversas características de Wappsto después de la conexión.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### ML Embebido

<br />

<div class="table-center">
<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Proyectos basados en Edge Impulse</th>
      <th class="table-trnobg">Proyectos basados en TensorFlow Lite</th>
      <th class="table-trnobg">Nodo LoRa con GPS AIoTs</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Alots/connectpc.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Edge Impulse permite a los desarrolladores crear la próxima generación de soluciones de dispositivos inteligentes con Aprendizaje Automático embebido. El Aprendizaje Automático en el borde permitirá el uso valioso del 99% de los datos de sensores que se descartan hoy debido a restricciones de costo, ancho de banda o energía.
      Ahora, Wio Terminal es oficialmente compatible con Edge Impulse. ¡Veamos cómo comenzar con Wio Terminal y el Aprendizaje Automático en el borde!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este artículo presenta cómo instalar la biblioteca oficial Arduino Tensorflow Lite en tu Wio Terminal, permitiéndote probar algunos modelos de Aprendizaje Automático usando Wio Terminal.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este proyecto, se utilizará un sensor acelerómetro de 3 ejes integrado y el algoritmo de red neuronal para construir un sistema de reconocimiento inteligente. Basado en el movimiento de Wio Terminal, puede mostrarte su estado en tiempo real. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/AIoTs_GPS_state_tester/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Tutorial

### Uso Básico

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Host USB</th>
      <th class="table-trnobg">Cliente USB</th>
      <th class="table-trnobg">Mostrando Giroscopio</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal como Host USB, lo que significa que podrías conectar dispositivos USB al Wio Terminal y jugar con él como si fuera una computadora!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal como Cliente USB, incluyendo usarlo para Dispositivos de Interfaz Humana (HID) como teclado, ratón y etc. También soporta Interfaz Digital de Instrumentos Musicales (MIDI).</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo demuestra cómo dibujar gráficos de líneas en el Wio Terminal. En este ejemplo, las lecturas del acelerómetro de 3 ejes (3 conjuntos de datos) se grafican en un gráfico de líneas para mostrar el posicionamiento en tiempo real del Wio Terminal!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-USBH-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-USBCLIENT-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Displaying-Gyro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Almacenamiento de Datos</th>
      <th class="table-trnobg">Visualización de Fotos</th>
      <th class="table-trnobg">Demo Interactivo de Caras</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo demuestra el uso de las funciones de gráfico de líneas para mostrar la lectura del sensor de luz Grove en Wio Terminal, ¡como el Serial Plotter! Además, los datos del sensor de luz se almacenan en la tarjeta SD.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo demuestra cómo mostrar imágenes desde la tarjeta SD en bucle.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo demuestra cómo mostrar múltiples imágenes (ojos) en la pantalla LCD a través de la tarjeta SD (formato BMP), y con el uso de los botones integrados y el giroscopio para interactuar con los usuarios.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Storting-Analog-Data/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Displaying-Photos/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Interactive-Face/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Proyecto

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Sensor de presión usando el Wio Terminal</th>
      <th class="table-trnobg">Lectura de datos en vivo de Coronavirus usando Wio Terminal</th>
      <th class="table-trnobg">Construir una cámara de imagen térmica IR usando Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>La demostración muestra que el sensor de presión de alta precisión Grove- DPS310 es completamente compatible con el Wio terminal, y su medición tiene alta precisión.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki es una modificación de Lectura de estadísticas de repositorio de Github desde Wio Terminal, donde se modifica para acceder a la API de Coronavirus COVID19 y analizar los datos y mostrar datos en vivo de COVID-19 en la pantalla LCD.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>¡Con Grove - Sensor de temperatura infrarrojo en matriz (AMG8833) y Wio Terminal, podemos construir una cámara de imagen térmica similar a FLIR™ de bajo costo con facilidad!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Barometric-Pressure-sensor-using-the-Wio-terminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Reading-COVID19/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Thermal-Camera/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Construir una Pantalla HMI para Raspberry Pi</th>
      <th class="table-trnobg">Cómo medir niveles de ruido con Wio Terminal</th>
      <th class="table-trnobg">Accediendo a GitHub usando Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, introduciremos cómo usar Wio Terminal como una pantalla USB HMI (Interfaz Humano-Máquina) para Raspberry Pi, Nvidia Jetson Nano, BeagleBone e incluso Odyssey X86J4105.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo detecta dB usando el micrófono en ReSpeaker 2-Mic Hat, Se detecta el entorno circundante, luego se muestra en la pantalla.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar Wio Terminal para acceder al servidor HTTPS, lo que significa que podrías usar Wio Terminal para obtener datos en vivo de internet! Aquí, Wio Terminal se conecta a un Wi-Fi y obtiene datos de Github.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-HMI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Sound-Meter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Reading-Github/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Blynk para Wio Terminal</th>
      <th class="table-trnobg">Edge Impulse Tuner</th>
      <th class="table-trnobg">Codecraft conectando Azure IoT con Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki presenta cómo usar el Wio Terminal con el software Blynk para interactuar con Wi-Fi o Bluetooth. ¡Esto te permite usar el Wio Terminal como el núcleo de un dispositivo IoT y poder controlar hardware desde teléfonos muy fácilmente!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aquí vamos a proporcionar el proyecto de clasificación de audio y mostrarte el uso de EON Tuner. Si estás interesado en usar LoRa para transmitir datos basado en Wio Terminal y Edge Impulse, siempre puedes hacer clic y ver el proyecto de ejemplo.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aquí vamos a mostrarte cómo conectar Codecraft con Azure IoT basado en Wio Terminal y aplicar sensores a proyectos IoT.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Blynk/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edge-Impulse-Tuner/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Azure_IoT_CC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y brindar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962236) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos mucho tu asistencia para generar ideas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

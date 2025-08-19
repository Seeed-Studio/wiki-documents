---
description: Wio Terminal Guide
title: Guía Wio Terminal
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio_Terminal_Intro
last_update:
  date: 07/27/2025
  author: Guillermo
---

## Introducción

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:600, height:'auto'}}/></div>

El Wio Terminal es una placa de desarrollo versátil impulsada por un microcontrolador ATSAMD51 y equipada con una pantalla LCD de 2.4". Incluye capacidades integradas de Wi-Fi/Bluetooth, un acelerómetro, micrófono, zumbador, ranura para tarjeta microSD y varias interfaces de E/S. El Wio Terminal está diseñado para simplificar el desarrollo de aplicaciones IoT, siendo una herramienta ideal tanto para principiantes como para desarrolladores experimentados.

## La idea del OSHW (Hardware de Código Abierto Fabricable)

El Hardware de Código Abierto (OSHW) se refiere a hardware cuyo diseño está disponible públicamente para que cualquiera pueda estudiar, modificar, distribuir, fabricar y vender el diseño o hardware basado en ese diseño. [El Wio Terminal encarna la filosofía OSHW al proporcionar documentación extensa, código abierto y archivos de diseño](https://github.com/Seeed-Studio/OSHW-WioTerminal), permitiendo a los usuarios comprender y replicar completamente el hardware. Esta apertura fomenta la innovación, colaboración y aprendizaje dentro de la comunidad de desarrolladores.

## Primeros pasos con Wio Terminal

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros pasos con Wio Terminal</th>
      <th class="table-trnobg">CircuitPython en Wio Terminal</th>
      <th class="table-trnobg">Cómo usar FreeRTOS para multitarea en Arduino</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este show, nuestro ingeniero Lakshantha explicará cómo usar el Wio Terminal junto con el software y te presentará demos divertidas también.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar y ejecutar el CircuitPython oficial de Adafruit Industries en el Seeeduino Wio Terminal.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Para compatibilidad con Arduino, hemos porteado FreeRTOS al framework Arduino para que puedas usar FreeRTOS con tus placas Arduino favoritas fácilmente. Esta wiki introduce cómo comenzar con FreeRTOS para Arduino.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Software-FreeRTOS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>


## Resumen del hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Uso del LCD</th>
      <th class="table-trnobg">Entrada/Salida</th>
      <th class="table-trnobg">Uso del IMU</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar la biblioteca TFT LCD usada en Wio Terminal. Proporciona funciones gráficas básicas al Wio Terminal con un esfuerzo mínimo.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar las entradas/salidas Grove en el Wio Terminal. Esto te permite disfrutar la funcionalidad plug and play del ecosistema Grove, además de usar el GPIO compatible con Raspberry Pi de 40 pines.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar la biblioteca del acelerómetro digital de 3 ejes integrado (LIS3DHTR) usada en Wio Terminal. Esto te permite acceder a la información del acelerómetro para control de movimiento, entre otros usos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-IO-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo instalar la biblioteca del sistema de archivos usada en Wio Terminal. Proporciona funcionalidad básica para operar con archivos en la tarjeta SD, permitiendo leer/escribir en la tarjeta SD usando la interfaz SPI.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo actualizar el firmware más reciente para el núcleo inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las bibliotecas dependientes para habilitar la conectividad inalámbrica.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo actualizar el firmware más reciente para el núcleo inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las bibliotecas dependientes para habilitar la conectividad Bluetooth.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar la funcionalidad RTC incorporada dentro del núcleo SAMD51 en el Wio Terminal para que puedas llevar el control del tiempo. ¡Esta característica te ahorra añadir un módulo RTC externo al sistema!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar el emisor infrarrojo integrado como componente en el Wio Terminal. El emisor infrarrojo es una interfaz digital y puede usarse para enviar señales IR, ¡igual que un control remoto!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el micrófono integrado para entrada de audio en el Wio Terminal. El micrófono puede usarse para detectar sonidos del entorno y responder en consecuencia.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-RTC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Infrared-Emitter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Botones</font></th>
      <th class="table-trnobg"><font size={"4"}>Switch de 5 vías</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar los botones configurables en el Wio Terminal. Hay tres botones que pueden usarse para el Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar el Switch de 5 vías en el Wio Terminal.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Buttons/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Switch/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Sensor de Luz</font></th>
      <th class="table-trnobg"><font size={"4"}>Buzzer</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar el sensor de luz incorporado como componente en Wio Terminal. El sensor de luz utiliza interfaz analógica y puedes leer fácilmente los valores del sensor de luz ambiental mediante la lectura de su pin.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki demuestra cómo usar el buzzer piezoeléctrico incorporado como componente en Wio Terminal. El piezo puede conectarse a una salida de modulación por ancho de pulso (PWM) analógica para generar varios tonos y efectos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Light/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Buzzer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Placa de Extensión

<br />

<div className="table-center">
  <table className="table-nobg">
    <tr className="table-trnobg">
      <th className="table-trnobg">
        <font size="4">Chasis con Batería para Wio Terminal (650mAh)</font>
      </th>
      <th className="table-trnobg">
        <font size="4">Chasis LoRaWAN para Wio Terminal con antena incorporada LoRa-E5 y GNSS, EU868/US915</font>
      </th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>El Chasis con Batería para Wio Terminal es una placa de extensión indispensable para la placa de desarrollo Wio Terminal, ya que proporciona una fuente de alimentación externa para mejorar su portabilidad y compacidad.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>El Chasis LoRaWan para Wio Terminal con antena incorporada LoRa-E5 y GNSS, EU868/US915, está integrado con LoRa-E5 STM32WLE5JC, impulsado por un núcleo MCU ARM Cortex M4 de ultra bajo consumo y LoRa SX126x, es un módulo de radio inalámbrico que soporta los protocolos LoRa y LoRaWAN en las frecuencias EU868 y US915, además de modulaciones (G)FSK, BPSK, (G)MSK y LoRa.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Chassis-Battery_650mAh/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el ENC28J60 OVERLAYS HAT para Raspberry Pi en Wio Terminal para una conectividad de red estable. Este es un ejemplo perfecto del uso de la placa de extensión Raspberry Pi 40 pines en Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar la librería de audio con Wio Terminal usando ReSpeaker 2-Mic Hat. Con la ayuda de esta librería, puedes grabar, reproducir y analizar audio usando Wio Terminal. Además, esta librería de audio puede implementarse en diferentes áreas como reconocimiento de voz y mucho más.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Ethernet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Kit con Cursos

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Kit de Aplicaciones ML101 con el Curso del Prof. Vijay</th>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este libro está diseñado específicamente para educadores para poder adoptar el Wio Terminal en el aula o talleres y mostrar a los estudiantes el poder de TinyML. Proporciona los fundamentos básicos que uno debe cubrir para enseñar los conceptos básicos de ML mientras mantiene los conceptos ligados a ejercicios prácticos.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>ML, como probablemente hayas adivinado, significa Aprendizaje Automático y en la mayoría de los casos (aunque no siempre) hoy en día se refiere a Aprendizaje Profundo. Tiny en TinyML significa que los modelos ML están optimizados para ejecutarse en dispositivos de muy bajo consumo y pequeño tamaño, como varios MCUs. Es un subconjunto de ML en el Edge o Aprendizaje Automático Embebido.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>El propósito de este artículo es generar interés y proporcionar una comprensión general para makers que quieran comenzar su viaje en el aprendizaje profundo. Señalaré algunos casos de uso comunes y posibles dificultades. También, al final de este artículo, recomendaré algunos cursos y libros para aprender más sobre este tema.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-Kit-Course/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Introduction_to_Artificial_Intelligence_for_Makers/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicación

### IoT Fácil

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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este tutorial, te guiaremos en el proceso de conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos telemétricos desde los sensores y hardware integrados del Wio Terminal, como el acelerómetro 3 ejes, sensor de luz y 3 botones, hacia Microsoft Azure IoT Central.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta aplicación de ejemplo muestra cómo conectar tu Wio Terminal al Azure IoT Hub. Está construida sobre el SDK de Azure para Embedded C, una librería de pequeño tamaño y fácil portabilidad para comunicarse con los servicios de Azure.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este tutorial, te guiaremos en el proceso de conectar el Wio Terminal a Google Cloud IoT Core y enviar datos telemétricos desde el Wio Terminal hacia Google Cloud IoT Core.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este tutorial, te guiaremos para conectar el Wio Terminal a Wappsto IoT y utilizar las diversas funciones de Wappsto después de la conexión.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <th class="table-trnobg">Nodo LoRa con AIoTs GPS</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Alots/connectpc.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Edge Impulse permite a los desarrolladores crear la próxima generación de soluciones inteligentes con Machine Learning embebido. El aprendizaje automático en el borde permitirá aprovechar el 99% de los datos de sensores que hoy se descartan por costos, ancho de banda o limitaciones energéticas. Ahora, Wio Terminal es oficialmente soportado por Edge Impulse. ¡Veamos cómo empezar con Machine Learning en el borde con Wio Terminal!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este artículo introduce cómo instalar la librería oficial de Arduino TensorFlow Lite en tu Wio Terminal, permitiéndote probar algunos modelos de Machine Learning usando Wio Terminal.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este proyecto se utiliza el sensor acelerómetro de 3 ejes incorporado y un algoritmo de red neuronal para construir un sistema inteligente de reconocimiento. Basado en el movimiento del Wio Terminal, puede mostrar su estado en tiempo real.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/AIoTs_GPS_state_tester/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Tutorial

### Uso Básico

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">USB Host</th>
      <th class="table-trnobg">USB Cliente</th>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal como USB Host, lo que significa que puedes conectar dispositivos USB al Wio Terminal y usarlos como en una computadora.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal como USB Cliente, incluyendo su uso para dispositivos de interfaz humana (HID) como teclado, ratón, etc. También soporta el protocolo MIDI (Musical Instrument Digital Interface).</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo muestra cómo dibujar un gráfico de líneas en el Wio Terminal. En este ejemplo, las lecturas del acelerómetro de 3 ejes (3 conjuntos de datos) se grafican en tiempo real para mostrar la posición del Wio Terminal.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-USBH-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-USBCLIENT-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Displaying-Gyro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Almacenando Datos</th>
      <th class="table-trnobg">Mostrando Fotos</th>
      <th class="table-trnobg">Demo de Caras Interactivas</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo demuestra cómo usar las funciones de gráficos de líneas para mostrar la lectura del sensor de luz Grove en el Wio Terminal, similar al Serial Plotter. Además, los datos del sensor de luz se almacenan en la tarjeta SD.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo muestra cómo desplegar imágenes desde la tarjeta SD en un ciclo continuo.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo muestra cómo desplegar múltiples imágenes (ojos) en la pantalla LCD mediante la tarjeta SD (formato BMP), usando los botones y el giroscopio incorporados para interactuar con el usuario.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Storting-Analog-Data/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Displaying-Photos/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Interactive-Face/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Proyecto

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Sensor de presión usando el Wio Terminal</th>
      <th class="table-trnobg">Lectura de datos en vivo del Coronavirus con Wio Terminal</th>
      <th class="table-trnobg">Construye una cámara térmica infrarroja con Wio Terminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>La demo muestra que el sensor de presión de alta precisión Grove DPS310 es totalmente compatible con el Wio Terminal, y su medición es de alta precisión.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki es una modificación de la lectura de estadísticas de repositorios en GitHub desde el Wio Terminal, adaptada para acceder a la API del Coronavirus COVID-19, analizar los datos y mostrar la información en vivo en la pantalla LCD.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Con el sensor de temperatura infrarroja en matriz Grove (AMG8833) y el Wio Terminal, podemos construir fácilmente una cámara térmica tipo FLIR™ de bajo costo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Barometric-Pressure-sensor-using-the-Wio-terminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Reading-COVID19/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Thermal-Camera/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Construye una pantalla HMI para Raspberry Pi</th>
      <th class="table-trnobg">Cómo medir niveles de ruido con Wio Terminal</th>
      <th class="table-trnobg">Accediendo a GitHub con Wio Terminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, introducimos cómo usar el Wio Terminal como pantalla HMI (Interfaz Humano-Máquina) USB para Raspberry Pi, Nvidia Jetson Nano, BeagleBone e incluso Odyssey X86J4105.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este ejemplo detecta los decibelios usando el micrófono del ReSpeaker 2-Mic Hat, detecta el ruido ambiental y lo muestra en la pantalla.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal para acceder a servidores HTTPS, lo que permite obtener datos en vivo desde Internet. Aquí, el Wio Terminal se conecta a Wi-Fi para obtener datos desde GitHub.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-HMI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Sound-Meter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki introduce cómo usar el Wio Terminal con el software Blynk para interactuar vía Wi-Fi o Bluetooth. Esto permite usar el Wio Terminal como el núcleo de un dispositivo IoT y controlar el hardware desde el teléfono fácilmente.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aquí te mostramos un proyecto de clasificación de audio y el uso del EON Tuner. Si te interesa usar LoRa para transmitir datos basado en Wio Terminal y Edge Impulse, puedes consultar el proyecto de ejemplo.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aquí te mostramos cómo conectar Codecraft con Azure IoT usando Wio Terminal y aplicar sensores en proyectos IoT.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Blynk/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Edge-Impulse-Tuner/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Azure_IoT_CC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, categorizada en nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y ofrecer mejor soporte mediante el desarrollo de nuestra plataforma wiki.
- [¡Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962236) es esencial para nosotros! Valoramos mucho tu aporte y agradeceríamos mucho tu ayuda generando ideas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes canales de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Disponemos de varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

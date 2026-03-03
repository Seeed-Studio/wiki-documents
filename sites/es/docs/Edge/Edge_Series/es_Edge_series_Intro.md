---
description: Guía de la Serie Edge
title: Guía de la Serie Edge
keywords:
- Edge Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge_series_Intro
last_update:
  date: 10/24/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/collection_page/Edge_Series_wiki_front.png" style={{width:1000, height:'auto'}}/></div>

## Introducción a la Serie Edge

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox ESP 100</th>
      <th class="table-trnobg">EdgeBox RPI 200</th>
      <th class="table-trnobg">EdgeLogix RPI 1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Logix/edgelogix.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr> 
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>EdgeBox-ESP-100 es un controlador versátil y ligero con características inalámbricas y múltiples opciones de Fieldbus. Funciona como un PLC independiente para automatización de campo o sirve como una puerta de enlace industrial, permitiendo la comunicación con el PLC original para conectividad de red y nube.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Controladores de computación edge industrial todo en uno basados en Raspberry Pi. Alta escalabilidad, diseño robusto, recursos de E/S abundantes y compatibilidad con el ecosistema de software industrial de Raspberry Pi lo convierten en una opción ideal para automatización inteligente y soluciones IIoT.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Potente controlador industrial Raspberry Pi con E/S extensas, diseño modular, soporte de bus industrial y capacidades inalámbricas. Ideal para automatización todo en uno, destacando en la gestión de sistemas complejos con integración perfecta en la nube.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saber Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saber Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saber Más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicación EdgeBox RPI 200

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Codesys para Edge Box RPi 200</font></th>
      <th class="table-trnobg"><font size={"4"}>Configuración de EdgeBox RPi 200 balena OS</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesysicon.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La Wiki utiliza Codesys Development System V3 para programar EdgeBox-RPI-200, un PLC basado en Raspberry Pi. Instala el runtime CODESYS Control for Raspberry Pi MC. Codesys es un software IEC 61131-3 para programación de controladores industriales.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Balena: Plataforma IoT para desarrolladores para desplegar y gestionar aplicaciones a través de flotas de dispositivos. Soporta diversas arquitecturas, permitiendo actualizaciones fáciles y operación segura y confiable de dispositivos en campo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edgebox-rpi-200-codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edgebox-rpi-200-balena-OS-setup/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 con N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 con Módulo LoRaWAN®</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Plataforma Industrial Edge para IIoT y DataOps que facilita la integración perfecta entre el piso de planta y aplicaciones de terceros. Permite tuberías de datos bidireccionales, desacopla dispositivos de aplicaciones, y consolida, modela, procesa y visualiza datos operacionales en una única fuente de verdad. Mejora la disponibilidad de datos en toda la organización.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> WM1302: Módulo gateway LoRaWAN® de próxima generación en factor de forma mini-PCIe. Alimentado por el chip LoRaWAN® baseband Semtech® SX1302, mejora la transmisión inalámbrica de largo alcance con mayor sensibilidad, menor consumo de energía y menor temperatura de operación. La wiki cubre detalles de instalación y uso.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edgebox-rpi-200-n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/EdgeBox-rpi-200-with-LoRaWAN-module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Ignition Edge

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edgebox RPI 200 Primeros Pasos con Ignition Edge</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Ignition Edge por Inductive Automation®: Soluciones de software Ignition® personalizadas y ligeras para dispositivos de campo y dispositivos OEM en el borde de la red. Simplifica y hace más asequible la computación en el borde, permitiendo la extensión perfecta de la recolección de datos, visualización y gestión de sistemas al borde de la red.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edgebox-rpi-200-ignition-edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

## Aplicación EdgeBox ESP 100

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeros pasos con EdgeBox-ESP-100 usando Arduino</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> EdgeBox-ESP-100: Controlador basado en ESP32 para automatización ligera. Cuenta con entrada analógica para monitoreo y control remoto, adecuado para bucles de control PID, secuenciación lógica, o actuando como puerta de enlace con expansión inalámbrica y de sensores de campo. La wiki cubre la descripción general del hardware e instrucciones de programación con Arduino.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edgebox-ESP-100-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y proporcionar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963241) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos mucho tu asistencia para generar ideas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
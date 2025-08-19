---
description: reTerminal DM, una HMI industrial de código abierto de 10.1" que funciona como Integrated Device Master. Este dispositivo todo en uno, basado en Raspberry Pi CM4, actúa como PC de panel, HMI, PLC y Gateway IIoT. Con una pantalla industrial de gran formato y grado IP65, reTerminal DM es un hub interactivo de sensado de próxima generación que optimiza el flujo de datos y la gestión de dispositivos in situ.
title: Guía de reTerminal DM
keywords:
- reTerminal DM
- Getting Start
image: https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713
slug: /es/reTerminal-dm_Intro
last_update:
  date: 04/06/2025
  author: Erick González
---

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713" style={{width:800, height:'auto'}}/></div>

## Comenzando con reTerminal

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Comenzando con reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>Uso del Hardware e Interfaces</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/reterminaldmtools.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki abarca las especificaciones de hardware, incluyendo LoRaWAN®, WiFi, BLE, RS485/RS232, CAN bus, Ethernet 1000M, USB, HDMI, entre otros.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki detalla la instalación de hardware adicional, como SSDs, cámaras, módulos PoE, montaje de antenas WiFi/BLE, antenas LoRaWAN y más.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal-dm/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal-dm-hardware-guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Instalaciones de OS

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS</font></th>
      <th class="table-trnobg"><font size={"4"}>SenseCraft Edge</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki te guiará por el proceso de instalación de Raspberry Pi OS y drivers.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, explora SenseCraft Edge OS, diseñado para el dispositivo HMI de 10.1" de reTerminal DM. Ofrece una interfaz intuitiva con funcionalidades integradas para una configuración y gestión sin inconvenientes.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal-dm-flash-OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal-dm-sensecraft-edge-os-intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Aplicaciones

### Visualización de Datos

**¡En esta emocionante sección, prepárate para descubrir cómo crear dashboards interactivos de grado industrial en pocos minutos!**

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Comienza con FUXA - Herramienta SCADA basada en la web</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM & Machinechat JEDI: Tu Potencia IIoT Industrial</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta sección, exploramos FUXA, una poderosa herramienta web para la creación y despliegue rápido de sistemas SCADA, HMI, Dashboard o IIoT. Con FUXA, puedes diseñar visualizaciones de procesos personalizadas, mostrar datos en tiempo real y controlar instrumentos en entornos industriales.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Machinechat JEDI simplifica la gestión de datos IoT, permitiendo la fácil recopilación, visualización, monitorización y respuesta a datos en tiempo real. Combinado con reTerminal DM, crear dashboards personalizados toma menos de 30 minutos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM_intro_FUXA/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM_Introduction_Jedi_MachineChat/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Edge AI

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Detección de objetos con Edge Impulse y reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>Entrena tu propio dataset con YOLOv5 y despliega en reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" style={{width:300, height:'auto'}}/></div></td>
	</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, exploramos la detección de objetos con Edge Impulse y reTerminal DM. Edge Impulse permite a los desarrolladores crear y optimizar soluciones de machine learning embebidas utilizando datos del mundo real.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a entrenar tu propio dataset con YOLOv5 y a desplegarlo en tu reTerminal DM basado en Raspberry Pi.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM-edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Yolo5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Frigate integrado con reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Frigate es un NVR de código abierto diseñado para la detección de objetos mediante IA en tiempo real. Todo el procesamiento se realiza localmente en tu hardware, asegurando que las transmisiones de tus cámaras permanezcan dentro de tu red. Esta wiki te guía en la instalación del NVR y en las capacidades de detección de objetos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal-DM-Frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### Soluciones en la Nube

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core Integrado con reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>Azure IoT Edge Integrado con reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/awslogo.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> AWS IoT Core conecta y gestiona dispositivos IoT de forma segura, permitiendo la comunicación con la nube para aplicaciones inteligentes. Nuestra wiki te guiará en la configuración del dispositivo reTerminal DM para una comunicación fluida con la nube.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki describe cómo conectar el dispositivo reTerminal DM, que ejecuta Debian 11 (ARM32v7) con Azure IoT Edge Runtime preinstalado, a la gestión de dispositivos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### Industrial Edge

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM: Comenzando con Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>Puerto RS485 de reTerminal DM con Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>MQTT de reTerminal DM con Node-RED</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" style={{width:300, height:'auto'}}/></div></td>
      	<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/MQTT.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, instalamos Node-RED en reTerminal DM, una herramienta intuitiva para conectar dispositivos de hardware, APIs y servicios en línea a través de un editor basado en navegador, permitiendo la creación y despliegue de flujos de manera sencilla con un clic.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, explora cómo integrar dispositivos Modbus en flujos de Node-RED utilizando el nodo Modbus incorporado. Aprende sobre el protocolo RS485, comprende Modbus y descubre cómo integrarlo sin problemas con reTerminal DM.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre cómo integrar MQTT en Node-RED, aprovechando su soporte para este protocolo para construir aplicaciones IoT poderosas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Node-Red-RS485/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Node-Red-mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM: CAN BUS con Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM con Node-RED y Modbus TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM con Node-RED y BACnet TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, integra un módulo CAN bus con Node-RED para un intercambio de datos de alta velocidad entre ECUs, ampliamente utilizado en la automoción, automatización industrial, equipos médicos y aeroespaciales.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a trabajar con Modbus TCP en reTerminal DM utilizando Node-RED. Descubre cómo Modbus TCP extiende el protocolo a las redes Ethernet, permitiendo velocidades de comunicación más rápidas y una integración sin inconvenientes con la infraestructura TI moderna.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre las ventajas de BACnet IP en los Sistemas de Gestión de Edificios (BMS) a través de esta wiki, centrada en la integración con Node-RED. Aprende a lograr una mayor escalabilidad, una instalación más sencilla y un mantenimiento más fácil, aprovechando la infraestructura de red existente.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Node-Red-canbus/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_dm_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_dm_rpi_200_node_red_bacnet_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM con Node-RED e InfluxDB</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM con Grafana para IoT Dashboard</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Despliega InfluxDB en reTerminal DM, una HMI basada en Raspberry Pi, para una robusta recopilación y análisis de datos de series temporales en el borde de la red. Esta guía detalla los pasos para instalar, configurar y utilizar InfluxDB, permitiendo una gestión eficiente y obteniendo conocimientos en tiempo real para aplicaciones IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a instalar Grafana en un reTerminal DM basado en Raspberry Pi en esta wiki, transformando tus datos en visualizaciones útiles. Conecta Grafana a una base de datos InfluxDB existente y crea dashboards ilustrativos para mejorar el rendimiento del sistema, facilitar la solución de problemas y tomar decisiones informadas con potentes herramientas de monitoreo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_dm_200_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_dm_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> Ignition Edge</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Comenzando con Ignition Edge en reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Ignition Edge Panel Builder Hello World</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Al incorporar Ignition Edge en dispositivos de campo y OEM en el borde de la red, puedes extender Ignition hasta el límite de tu red. Descubre cómo configurar el dispositivo reTerminal con esta guía.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, demostraremos cómo crear una página básica y mostrarla en una URL fija. Lograremos esto creando un proyecto "hello world" en perspectiva y visualizándolo en el gateway a través de un navegador web.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Ignition-Edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-DM-Ignition-Edge-Panel-Builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Comenzando con N3uron en reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>Conecta AWS IoT Core con N3uron</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://n3uron.com/wp-content/uploads/2021/09/How-to-Connect-Industrial-Assets-to-AWS-IoT.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uron es tu plataforma de Industrial Edge para IIoT y DataOps, asegurando una integración fluida entre el piso de producción y aplicaciones de terceros, ya sea localmente o en la nube. En este tutorial, iniciaremos tu camino en el mundo de N3uron.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, profundizaremos en la integración entre la plataforma N3uron Edge IIoT y AWS IoT Core.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM_N3uron_AWS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conecta N3uron con dispositivos con soporte para MQTT y Modbus</font></th>
        <th class="table-trnobg"><font size={"4"}>Integración del Módulo Historian para visualización en reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/n3uron_mqtt_modbus_aws.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" style={{width:300, height:'auto'}}/></div></td>  
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre la poderosa combinación de reTerminal DM y N3uron Duo para una gestión eficiente en planta. Esta wiki destaca la importancia de Modbus TCP en entornos industriales y muestra una integración fluida de dispositivos MQTT para mejorar la conectividad y la manipulación de datos.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Con Neuron Historian, almacena de forma sencilla los valores de etiquetas recolectados local o remotamente a través de N3uron Links. Además, proporciona una función de “Store & Forward” para retener datos durante pérdida de comunicación. En este tutorial, aprenderás a crear gráficos y guardar tus datos en archivos CSV sin complicaciones.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM_N3uron_modbus_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalDM_N3uron_Historian/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 Explora más</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Regresar a Pi Devices</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ Proyecto del Colaborador

- Disponemos de una lista de tareas para actualizar esta página, la cual se encuentra categorizada en nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que nos dedicamos a mejorar la experiencia del usuario y ofrecer un mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038) es esencial para nosotros. ¡Valoramos mucho tu aporte y agradeceremos tu ayuda en la generación de ideas!

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes canales de soporte y para asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

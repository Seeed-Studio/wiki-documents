---
description: El controlador IoT Edge reComputer R1000, impulsado por Raspberry Pi CM4, cuenta con un procesador de cuatro núcleos A72, doble Ethernet y múltiples canales RS485 compatibles con BACnet, Modbus RTU y Modbus TCP/IP. Con opciones inalámbricas versátiles como 4G, LoRa® y Wi-Fi/BLE, es ideal para la gestión remota de dispositivos y energía en aplicaciones de edificios inteligentes.
title: Guía completa de reComputer R1000

keywords:
- Raspberry pi
- Edge Controller
- reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/recomputer_r1000_intro
last_update:
  date: 02/18/2025
  author: Erick González
---

El controlador IoT Edge reComputer R1000, impulsado por Raspberry Pi CM4, cuenta con un procesador de cuatro núcleos A72, doble Ethernet y múltiples canales RS485 compatibles con BACnet, Modbus RTU y Modbus TCP/IP. Con opciones inalámbricas versátiles como 4G, LoRa® y Wi-Fi/BLE, es ideal para la gestión remota de dispositivos y energía en aplicaciones de edificios inteligentes.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## Aplicaciones de la reComputer R1000

### Guías para un primer vistazo

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeros pasos con la reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 de Raspbian OS a eMMC</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artículo se centra en proporcionar una visión general del reComputer R1000, detallando sus interfaces de hardware y componentes opcionales. Destaca las características y capacidades que hacen del R1000 una opción ideal para diversas aplicaciones de IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La reComputer R1000 viene con una imagen preinstalada de Raspbian. Si necesitas reinstalarlo, esta guía te mostrará cómo volver a instalar Raspbian.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Guía de Ensamblaje - reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Cómo usar rs485 y modbus rtu en la reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Usar use bacnet MS/TP con la reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>   Esta Wiki te mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como las opciones de montaje.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo introduce el uso de la función de comunicación RS485 en el reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica cómo realizar pruebas funcionales del protocolo BACnet MS/TP en el reComputer R1000. Simulamos un servidor BACnet MS/TP en el reComputer R1000 y luego usamos YABE en una PC con Windows 10 para verificar la presencia del dispositivo. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Industrial Edge 

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 - Primeros pasos con Node-Red</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 - Usando Node Red y MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 - Usando Node Red y Modbus TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta Wiki te mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como las opciones de montaje.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo introduce el uso de la función de comunicación RS485 en el reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica cómo realizar pruebas funcionales del protocolo BACnet MS/TP en el reComputer R1000. Simulamos un servidor BACnet MS/TP en el reComputer R1000 y luego usamos YABE en una PC con Windows 10 para verificar la presencia del dispositivo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre cómo instalar y configurar Node-RED en el reComputer R1000, transformándolo en una herramienta versátil para conectar hardware, APIs y servicios en línea. Utiliza el intuitivo editor de flujo basado en navegador para integrar diversos componentes mediante una rica paleta de nodos.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Explora la instalación del broker Mosquitto y aprende a trabajar con Node-RED para suscribirte y publicar temas MQTT en esta Wiki. Ideal para aplicaciones IoT, MQTT permite el intercambio de datos en tiempo real de manera eficiente con bajo consumo de ancho de banda en redes poco confiables.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a trabajar con Modbus TCP en el reComputer R1000 utilizando Node-RED en esta Wiki. Descubre cómo Modbus TCP extiende el protocolo a redes Ethernet, permitiendo velocidades de comunicación más rápidas e integración sin problemas con infraestructuras de TI modernas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con Node-RED y BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con Node-RED e InfluxDB</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con Grafana</font></th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre las ventajas de BACnet IP en sistemas de gestión de edificios (BMS) con esta Wiki, centrándose en la integración con Node-RED. Aprende cómo lograr una mayor escalabilidad, instalación y mantenimiento más sencillos, y aprovechar la infraestructura de red existente utilizando Node-RED y BACnet IP.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Despliega InfluxDB en un reComputer R1000, un controlador Edge basado en Raspberry Pi, para la recolección y análisis eficiente de datos de series temporales en el borde de la red. Esta guía detalla los pasos para instalar, configurar y utilizar InfluxDB, permitiendo la gestión eficiente y el análisis en tiempo real de aplicaciones IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a instalar Grafana en un reComputer R1000 basado en Raspberry Pi con esta Wiki, transformando tus datos en visualizaciones intuitivas. Conecta Grafana a una base de datos InfluxDB existente y crea un panel de control ilustrativo para mejorar el rendimiento del sistema, optimizar la solución de problemas y tomar decisiones informadas con herramientas de monitoreo avanzadas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>


<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con Node-RED y servidor OPC UA</font></th>
      <th class="table-trnobg"><font size={"4"}>Conexión de PLCs Siemens usando el protocolo S7 con reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FlowFuse</font></th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta Wiki te guiará en la creación de un servidor OPC UA en el entorno Node-RED, integrando varios protocolos para mejorar la interoperabilidad en la jerarquía de automatización.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica cómo usar Node-RED, una herramienta de desarrollo basada en flujos, en un reComputer con Raspberry Pi para comunicarse con PLCs Siemens a través del protocolo S7.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FlowFuse extiende Node-RED con herramientas para desarrollo colaborativo, despliegues remotos y pipelines de DevOps, facilitando la gestión y entrega de aplicaciones Node-RED. Esta Wiki explora cómo FlowFuse agiliza estos procesos para equipos de desarrollo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>Conexión de reComputer R1000 con AWS IoT Core mediante N3uron</font></th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg"> 
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Crea fácilmente flujos de datos bidireccionales entre sistemas OT e IT con N3uron, consolidando y visualizando datos operacionales en una única fuente. Aprende a instalar y acceder a N3uron usando el reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este tutorial, exploraremos en detalle cómo integrar la plataforma Edge IIoT N3uron con AWS IoT Core.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>


<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conectar N3uron con BACnet en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Publicación de Datos Industriales en AWS Cloud Usando N3uron, MQTT y Modbus</font></th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg"> 
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubre el poder de BACnet en Sistemas de Gestión de Edificios con N3uron, mejorando la adquisición y gestión de datos para una interoperabilidad sin interrupciones. Utiliza BACnet TCP con el Simulador de Sala YABE para visualizar y probar dispositivos BACnet, asegurando soluciones BMS robustas y flexibles.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Mejora la gestión de plantas con reComputer R1000 y N3uron Duo, aprovechando su conectividad robusta y capacidades de manipulación de datos. Esta Wiki te guiará en la conexión con Modbus TCP y MQTT para una integración industrial sin esfuerzo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FUXA para Modbus RTU/TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FUXA para cliente MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FUXA para OPC-UA</font></th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg"> 
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica principalmente cómo usar FUXA para la comunicación Modbus RTU/TCP. Cubre los conceptos básicos de Modbus y demuestra sus aplicaciones en diversos escenarios.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo introduce cómo usar FUXA para la comunicación MQTT en reComputer R1000. Se usa Mosquitto como servidor MQTT, FUXA y Node-RED como clientes MQTT, e incluye un esclavo ModbusTCP como fuente de datos publicados por FUXA. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica cómo usar FUXA para la comunicación OPC-UA. Se ejecuta Prosys OPC UA Simulation Server en una PC con Windows 10 y se leen los datos del simulador en reComputer R1000.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>


<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FUXA para WebAPI</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 con FUXA para SCADA</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artículo introduce cómo usar FUXA para la comunicación WebAPI. En esta etapa, FUXA solo admite la función GET y el paquete de datos está en formato JSON. Usaremos la función GET de FUXA para obtener el datagrama de Postman.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo explica cómo usar FUXA para lograr SCADA. En el artículo, FUXA recibe datos de Node-RED y OPC UA Simulator, y los muestra mediante gráficos y medidores circulares. Además, dibuja una serie de patrones para simular procesos industriales.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Cómo instalar CODESYS en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Cómo usar CODESYS para configurar Modbus RTU en R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> CODESYS, desarrollado por 3S-Smart Software Solutions, es una plataforma de software de automatización ampliamente utilizada en sistemas de control industrial. Este artículo se centra en cómo descargar, instalar CODESYS y desplegar un proyecto en el reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo introduce cómo usar la función Modbus RTU en reComputer R1000 basado en CODESYS. Usaremos los dos puertos RS485 del reComputer R1000: un puerto como maestro Modbus y el otro como esclavo Modbus.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Instalar FIN en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Usar Modbus TCP/RTU con FIN en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Usar Logic Builder de FIN en reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FIN Framework (FIN) es un software con suites de aplicaciones que pueden integrarse, controlar, gestionar, analizar, visualizar y conectar sistemas. Sus capacidades pueden ser integradas por OEMs en una variedad de productos y servicios. Este artículo explica cómo instalar FIN en reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo introduce cómo usar el conector Modbus de FIN Framework y explica en detalle el uso de Modbus TCP/RTU en FIN Framework.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo muestra cómo usar Logic Builder de FIN Framework e implementar una alarma. Se monitorea el valor de un dispositivo Modbus y, cuando el valor supera el umbral crítico, FIN genera una alarma.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Crear un Gráfico de Nivel Superior con FIN en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Crear un Gráfico de Sitio con FIN en reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Crear un Gráfico de Piso con FIN en reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo muestra cómo utilizar el Constructor de Gráficos de FIN Framework para crear un Gráfico de Nivel Superior.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo muestra cómo utilizar el Constructor de Gráficos de FIN Framework para crear un Gráfico de Sitio.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo muestra cómo utilizar el Constructor de Gráficos de FIN Framework para crear un Gráfico de Piso.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>


### Gestión de Flotas

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Configuración de balena OS en reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balena: Plataforma IoT para desarrolladores que permite desplegar y gestionar aplicaciones en flotas de dispositivos. Compatible con diversas arquitecturas, facilita actualizaciones seguras y confiables en el campo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_balena/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### Soluciones en la Nube

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Integración de AWS IoT Core con reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Aprende a conectar tu reComputer R1000 a la nube AWS IoT en esta guía completa. Aprovecha AWS IoT Core para una gestión segura de dispositivos y comunicación fluida, permitiendo el desarrollo de aplicaciones inteligentes y conectadas en el ecosistema AWS.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### Visión por Computadora

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Detección de Objetos con YOLOv8 en reComputer R1000 con Hailo-8L</font></th>
      <th class="table-trnobg"><font size={"4"}>Estimación de Postura con YOLOv8 en reComputer R1000 con Hailo-8L</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki demuestra la detección de objetos utilizando YOLOv8 en reComputer R1000 con y sin la aceleración del kit de inteligencia artificial de Raspberry Pi. Este kit mejora el rendimiento de la Raspberry Pi y desbloquea su potencial en aplicaciones de inteligencia artificial y aprendizaje automático.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki demuestra la estimación de postura utilizando YOLOv8 en reComputer R1000 con y sin la aceleración del kit de inteligencia artificial de Raspberry Pi.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>
<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Benchmark en RPi5 y CM4 ejecutando YOLOv8s con el kit de IA de Raspberry Pi</font></th>
      <th class="table-trnobg"><font size={"4"}>Instalar M.2 Coral en Raspberry Pi 5</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artículo muestra pruebas de rendimiento de YOLOv8s para estimación de postura y detección de objetos en Raspberry Pi 5 y Raspberry Pi Compute Module 4. Todas las pruebas utilizan el mismo modelo (YOLOv8s), cuantizado a int8, con un tamaño de entrada de 640x640 píxeles, tamaño de lote establecido en 1 y entrada desde el mismo video a 240 FPS.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  En este artículo te mostraremos cómo instalar el Acelerador Coral M.2 en Raspberry Pi 5 y finalmente realizaremos pruebas con él.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/install_m2_coral_to_rpi5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
		</tr>
	</table>
</div>
<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Convertir modelo al formato Edge TPU TFlite para Google Coral</font></th>
      <th class="table-trnobg"><font size={"4"}>Control de luces basado en postura con Node-RED y Raspberry Pi con AI Kit</font></th>
      <th class="table-trnobg"><font size={"4"}>Tutorial del AI Kit con Raspberry Pi 5 sobre detección de objetos con YOLOv8n</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo te guiará a través del proceso de compilación de un modelo y su ejecución en la TPU de Google Coral, permitiéndote aprovechar sus capacidades para aplicaciones de aprendizaje automático de alto rendimiento.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artículo te mostrará cómo ejecutar YOLOv8 utilizando un kit de IA, usar YOLOv8 para monitorear tu postura y, finalmente, controlar tus luces en función de tu postura.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta guía te enseñará cómo usar YOLOv8n para la detección de objetos con AI Kit en Raspberry Pi 5, desde el entrenamiento hasta la implementación.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/convert_model_to_edge_tpu_tflite_format_for_google_coral/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
	</table>
</div>



## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos **aquí** para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Aprende a usar ThingsBoard en el dispositivo reComputer con esta guía paso a paso. Descubre cómo agregar dispositivos, configurar nodos MQTT y crear paneles interactivos utilizando características populares para un monitoreo eficiente de datos.

title: Crea Paneles IoT Dinámicos con ThingsBoard y reComputer R1000

keywords:
  - reComputer-R1000
  - Primeros pasos
  - IIoT
  - Industrial
  - ThingsBoard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /es/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 02/17/2025
  author: Erick González
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## Introducción

[ThingsBoard Community Edition](https://thingsboard.io/), una plataforma de código abierto, ofrece potentes características para crear paneles interactivos que destacan entre otras soluciones IoT de código abierto. Con una variedad de herramientas gráficas, ThingsBoard permite a los usuarios visualizar y monitorear fácilmente los datos recopilados de dispositivos IoT, lo que lo hace ideal para la gestión y análisis de datos en tiempo real. Ya sea para automatización industrial, proyectos de ciudades inteligentes o monitoreo ambiental, ThingsBoard proporciona una forma versátil y fácil de usar para rastrear y responder a los datos de IoT.

## Requisitos Previos

## Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

Si eres nuevo en ThingsBoard, asegúrate de que esté instalado correctamente. Consulta [este wiki](https://wiki.seeedstudio.com/recomputer_r1000_thingsboard_ce/) para obtener orientación.

## Iniciar sesión en ThingsBoard

Usa las siguientes credenciales para iniciar sesión:

:::note
Nombre de usuario: tenant@thingsboard.org

Contraseña: tenant
:::

## Paso 1: Aprovisionar un Dispositivo

- Navega a la página `Dispositivos` en la sección `Entidades`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- Haz clic en el icono `+` en la esquina superior derecha de la tabla y selecciona `Agregar nuevo dispositivo` en el menú desplegable.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- Ingresa el nombre del dispositivo. Proporciona el ID de cliente, la contraseña y el nombre de usuario. Haz clic en `Agregar`.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- A medida que agregas más dispositivos, aparecerán en la parte superior de la tabla. La tabla ordena automáticamente los dispositivos por tiempo de creación, mostrando los más recientes primero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## Paso 2: Conectar el Dispositivo

- Haz clic en tu dispositivo y luego en el botón `Verificar conectividad` en la ventana de `Detalles del dispositivo`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- En la ventana abierta, selecciona el protocolo de mensajería y tu sistema operativo.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- Instala las herramientas de cliente necesarias y copia el comando proporcionado.
- Ejecuta el comando copiado. Una vez que las lecturas de `temperatura` se publiquen correctamente, el estado del dispositivo cambiará de "Inactivo" a `Activo`. También verás las lecturas de temperatura publicadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div> 

- Cierra la ventana de conectividad.

### Paso 3: Configurar el Nodo MQTT en Node-RED

- Si recopilas datos utilizando protocolos como Modbus, BACnet o OPC UA, puedes utilizar Node-RED.
- Abre Node-RED y agrega un nodo `MQTT Out`.
- En la configuración del broker MQTT, introduce el `nombre del cliente, contraseña, usuario del broker y la dirección IP del reComputer`.
- Usa el tópico `v1/devices/me/telemetry` para enviar datos de telemetría.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div> 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- Si deseas aprender más sobre el nodo MQTT In, [puedes explorarlo aquí](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/).

:::note
No es necesario instalar el broker Mosquitto en el reComputer.
:::

## Paso 4: Crear un Panel

### Crear un Panel Vacío
- Ve a la página `Dashboards` desde el menú principal en el lado izquierdo de la pantalla.
- Haz clic en el icono `+` en la esquina superior derecha y selecciona `Crear nuevo panel`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div> 

- En el cuadro de diálogo, ingresa un título para el panel (la descripción es opcional). Haz clic en `Agregar`.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div> 

- Después de crear el panel, se abrirá automáticamente y podrás comenzar a agregar widgets.
- Para guardar el panel, haz clic en el botón `Guardar` en la esquina superior derecha.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div> 

- Tu primer panel ahora está creado. A medida que agregues más paneles, aparecerán en la parte superior de la lista, ordenados por la fecha de creación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div> 

### Agregar un Widget de Gráfica
- Entra en modo de edición y haz clic en el botón `Agregar nuevo widget` en la parte superior de la pantalla.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div> 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div> 

- Encuentra el conjunto de widgets `Charts` y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div> 

- Selecciona el widget `Time series chart`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div> 

- En el campo `Dispositivo`, especifica el dispositivo que creaste anteriormente como la fuente de datos.
- En la sección `Series`, ingresa la clave de datos `Temperature` para monitorear los valores de temperatura de un dispositivo.
- Haz clic en `Agregar`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div> 

- Ajusta el tamaño del widget y aplica los cambios.

Puedes explorar widgets adicionales para el panel [aquí](https://thingsboard.io/docs/user-guide/dashboards/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
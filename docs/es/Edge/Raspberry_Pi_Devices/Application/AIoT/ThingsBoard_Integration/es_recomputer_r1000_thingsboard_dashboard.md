---
description: Aprende cómo usar ThingsBoard en el dispositivo reComputer con esta guía paso a paso. Descubre cómo agregar dispositivos, configurar nodos MQTT y crear paneles interactivos usando características populares para un monitoreo eficiente de datos.

title: Crear Paneles IoT Dinámicos con ThingsBoard y reComputer R1000
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /es/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 10/25/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## Introducción

La [Edición Comunitaria de ThingsBoard](https://thingsboard.io/), una plataforma de código abierto, ofrece características poderosas para crear paneles interactivos que se destacan entre otras soluciones IoT de código abierto. Con una variedad de herramientas gráficas, ThingsBoard permite a los usuarios visualizar y monitorear fácilmente los datos recopilados de dispositivos IoT, haciéndolo ideal para gestionar y analizar datos en tiempo real. Ya sea para automatización industrial, proyectos de ciudades inteligentes o monitoreo ambiental, ThingsBoard proporciona una forma versátil y fácil de usar para rastrear y responder a las perspectivas de datos IoT.

## Prerrequisitos

### Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Si eres nuevo en ThingsBoard, asegúrate de que esté instalado correctamente. Consulta [esta wiki](https://wiki.seeedstudio.com/es/recomputer_r1000_thingsboard_ce/) para obtener orientación.

## Iniciar sesión en ThingsBoard

Usa las siguientes credenciales para iniciar sesión:

:::note
Nombre de usuario: tenant@thingsboard.org

Contraseña: tenant
:::

## Paso 1: Aprovisionar un Dispositivo

- Navega a la página `Devices` bajo la sección `Entities`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- Haz clic en el icono `+` en la esquina superior derecha de la tabla y selecciona `Add new device` del menú desplegable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- Ingresa el nombre del dispositivo. Proporciona Client Id, Password, Username. Haz clic en `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- A medida que agregues más dispositivos, aparecerán en la parte superior de la tabla. La tabla ordena automáticamente los dispositivos por tiempo de creación, con los más nuevos listados primero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## Paso 2: Conectar el Dispositivo

- Haz clic en tu dispositivo y luego haz clic en el botón `Check connectivity` en la ventana `Device details`.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- En la ventana abierta, selecciona el protocolo de mensajería y tu sistema operativo.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- Instala las herramientas de cliente necesarias y copia el comando proporcionado.
- Ejecuta el comando copiado. Una vez que las lecturas de `temperature` se publiquen exitosamente, el estado del dispositivo cambiará de "Inactive" a `Active`. También verás las lecturas de temperatura publicadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div>

- Cierra la ventana de conectividad.

## Paso 3: Configurar el Nodo MQTT en Node-RED

- Si recopilas datos usando diferentes protocolos como Modbus, BACnet, o OPC UA, puedes usar Node-RED.
- Abre Node-RED y agrega un nodo `MQTT Out`.
- En la configuración del broker MQTT Out, configura el `nombre del cliente, contraseña, nombre de usuario del broker, y la dirección IP del reComputer`.
- Usa el tópico `v1/devices/me/telemetry` para enviar datos de telemetría.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- Si quieres aprender más sobre el nodo MQTT In, [puedes explorarlo más a fondo](https://wiki.seeedstudio.com/es/recomputer_r1000_nodered_mqtt/).

:::note
No necesitas instalar el broker Mosquitto en el reComputer.
:::

## Paso 4: Crear un Panel de Control

### Crear un Panel de Control Vacío

- Navega a la página `Dashboards` desde el menú principal en el lado izquierdo de la pantalla.
- Haz clic en el signo `+` en la esquina superior derecha de la pantalla y selecciona `Create new dashboard` del menú desplegable.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div>

- En el cuadro de diálogo, ingresa un título para el panel de control (la descripción es opcional). Haz clic en `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div>

- Después de crear el panel de control, se abrirá automáticamente, y puedes comenzar a agregar widgets.
- Para guardar el panel de control, haz clic en el botón `Save` en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div>

- Tu primer panel de control ahora está creado. A medida que agregues más paneles de control, aparecerán en la parte superior de la lista, ordenados por la marca de tiempo de creación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div>

### Agregar un Widget de Gráfico

- Entra en modo de edición y haz clic en el botón `Add new widget` en la parte superior de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div>

- Encuentra el paquete de widgets `Charts` y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div>

- Selecciona el widget `Time series chart`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div>

- En el campo `Device`, especifica el dispositivo que creaste anteriormente como fuente de datos.
- En la sección `Series`, ingresa la clave de datos `Temperature` para monitorear los valores de temperatura de un dispositivo.
- Haz clic en `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div>

- Redimensiona el widget y aplica los cambios.

Puedes explorar widgets adicionales para el panel de control [aquí](https://thingsboard.io/docs/user-guide/dashboards/).

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

---
description: En esta wiki, exploraremos cómo usar el reComputer 1000 para Sistemas de Gestión de Edificios (BMS) con N3uron y BACnet IoT. Aprende cómo integrar y simular dispositivos, mejorando tus soluciones BMS de manera efectiva.
title: Conectar N3uron con BACnet en reComputer R1000
keywords:
  - reComputer R1000
  - Getting started
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_n3uron_bacnet
last_update:
  date: 7/11/2024
  author: Kasun Thushara
---
## Introducción

BACnet es un protocolo ampliamente adoptado en Sistemas de Gestión de Edificios (BMS) debido a su estándar abierto, que permite la integración perfecta y comunicación entre dispositivos de diferentes fabricantes. Su popularidad también se debe a su flexibilidad, soportando varias configuraciones de red y proporcionando interoperabilidad robusta. [N3uron](https://n3uron.com/), una plataforma poderosa y versátil, mejora las capacidades de BACnet al permitir la adquisición y gestión eficiente de datos. Usando BACnet TCP con el Simulador de Habitación YABE, los usuarios pueden simular y visualizar dispositivos BACnet, facilitando las pruebas y el desarrollo. Esta combinación asegura un enfoque integral y efectivo para las soluciones BMS, aprovechando las fortalezas de cada tecnología.

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

Recomendamos encarecidamente estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/es/recomputer_r1000_n3uron/). Proporciona información esencial para navegar por la interfaz web de N3uron, comprender conceptos como la interfaz web y el módulo Web Vision, entender el concepto de etiquetas y crear paneles básicos. Si aún no has explorado estos fundamentos, es recomendable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

### YABE

Por favor, ve a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que te permite simular y explorar dispositivos BACnet, lo que la hace ideal para propósitos de prueba y desarrollo. Una vez descargado e instalado en tu PC anfitrión, YABE se utilizará para simular datos de temperatura ambiente, que luego leeremos y procesaremos usando Node-RED en el reComputer R1000.

### Configurar ajustes de Ethernet para BACnet TCP/IP

Dado que el dominio IP de tu PLC/Dispositivo es diferente de tus configuraciones inalámbricas, es posible que tengas que cambiar la configuración IP manualmente. Para eso,

- **Paso 01**: Ejecuta el siguiente comando si estás ejecutando **Bullseye**:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Luego configure los ajustes del puerto Ethernet según el dominio de red de su PLC/Dispositivo y establezca prioridades usando el comando **metric**. La métrica más baja tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **Paso 01**: Si está ejecutando **Bookworm OS**, puede usar la GUI para hacer clic en el icono de red. Bajo las opciones avanzadas, elija "Edit Connections."

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **Paso 02**: Elija "Wired Connection 2" (ETH 1) y agregue la dirección, máscara de red y puerta de enlace bajo la configuración IPv4.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Conectando a un Control de Habitación desde N3uron usando Cliente BACnet

**Crear el Módulo**

- Navegue a `Config => Modules => Model => New Module`.
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/Module.PNG" /></center>

**Configurar el Módulo**

- Proporcione un nombre para el módulo (ej., `BACnetClient`).
- Asigne el tipo de módulo (`BacnetClient`).
- Guarde la nueva configuración.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/bacnetmodule.PNG" /></center>

**Crear un Nuevo Canal**

- Haga clic en el botón del lado izquierdo del encabezado Model.
- Seleccione `New Channel`.
- Nombre el canal (ej., `CH01`).
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>

**Configurar el Cliente BACnet**

- Haga clic en el botón `Network interface discovery` a la derecha del campo Network interface.
- Seleccione la interfaz correspondiente de la red a la que desea conectarse (ej., use `0.0.0.0` para todas las interfaces).

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- El puerto de comunicación BACnet predeterminado es `47808` (BAC0 en HEX).
- Deje la dirección de difusión como `255.255.255.255`.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- Una vez que el módulo esté configurado, haga clic en `Save`.
- Reinicie el módulo.

**Descubrir y Seleccionar el Dispositivo**

- Haga clic en el botón `Browse Devices` a la derecha del campo Devices.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- Descubra y seleccione el dispositivo correspondiente al que desea conectarse.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- Deje los otros parámetros con sus valores predeterminados.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- Una vez que el módulo y el dispositivo estén configurados, haga clic en `Save`.
- Reinicie el módulo.

- El "BACnet Browser" en N3uron se abre, y después de seleccionar el dispositivo, se hace clic en "Rebrowse" para ver una lista de objetos.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- Se localiza la carpeta "Temperature Indoor" y se arrastra a la sección "Model". En la sección "Data" bajo la pestaña "Real Time", los valores de etiqueta para "Temperature Indoor" se muestran correctamente.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

 En este punto, la conexión está lista y podemos proceder a crear nuevas etiquetas desde cero.

## Crear una Nueva Etiqueta

- En el panel Explorador, selecciona `Tags`.
- En el panel Modelo, crea una nueva etiqueta y nómbrala `PRESENT_VALUE`.

**Configurar la Etiqueta**

- Establece los parámetros de configuración como sigue:
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value` (Opcional)
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: Navega y descubre la propiedad haciendo clic en el botón de la derecha. Selecciona `ANALOG_INPUT:0`, luego `PRESENT_VALUE`. Elige `From device` en el modo de prioridad de escritura.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

Ahora, ve a la sección Data/Real-Time en el panel de Navegación donde deberías poder ver todos los datos leídos desde ese dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

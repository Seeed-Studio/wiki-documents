---
description: En este wiki, exploraremos cómo usar reComputer R1000 para sistemas de gestión de edificios (BMS) con N3uron y BACnet IoT, integrando y simulando dispositivos eficazmente.
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
  date: 02/16/2025
  author: Erick González
---

## Introducción

BACnet es un protocolo ampliamente adoptado en los Sistemas de Gestión de Edificios (BMS) debido a su estándar abierto, que permite integración y comunicación sencillas entre dispositivos de distintos fabricantes. Su popularidad también se debe a su flexibilidad, pues admite varias configuraciones de red y brinda interoperabilidad robusta. [N3uron](https://n3uron.com/), una plataforma potente y versátil, potencia las capacidades de BACnet para lograr adquisición y gestión de datos eficientes. Usando BACnet TCP con el simulador de habitaciones YABE, los usuarios pueden simular y visualizar dispositivos BACnet, facilitando pruebas y desarrollo. Esta combinación asegura un enfoque integral y efectivo para soluciones BMS, aprovechando las fortalezas de cada tecnología.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

Recomendamos estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/recomputer_r1000_n3uron/). Proporciona información esencial para navegar la interfaz web de N3uron, comprender conceptos como la Web UI y el módulo Web Vision, asimilar la idea de tags y crear dashboards básicos. Si no has explorado estos fundamentos, se sugiere hacerlo antes de avanzar más. El enlace arriba te lleva a la guía.

### YABE

Dirígete a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que permite simular y explorar dispositivos BACnet, ideal para pruebas y desarrollo. Una vez instalado en tu PC host, YABE se usará para simular datos de temperatura de habitaciones, que luego leeremos y procesaremos con Node-RED en el reComputer R1000.

### Configurar ajustes de Ethernet para BACnet TCP/IP

Dado que el dominio IP de tu PLC/Dispositivo difiere de tu conexión inalámbrica, puede que debas modificar manualmente la configuración IP.

- **Paso 01**: Si ejecutas **Bullseye**:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura la interfaz Ethernet según la red del PLC/Dispositivo y ajusta prioridades usando "metric". El menor metric tiene más prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **Paso 01**: Si ejecutas **Bookworm OS**, puedes usar la GUI para hacer clic en el ícono de red. En opciones avanzadas, selecciona "Edit Connections".

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **Paso 02**: Escoge "Wired Connection 2" (ETH 1) y añade dirección, netmask y gateway en la configuración IPv4.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Conectarse a un Room Control desde N3uron usando BACnet Client

**Crear el módulo**
- Ve a `Config => Modules => Model => New Module`.
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/Module.PNG" /></center>

**Configurar el módulo**
- Asigna un nombre, ej. `BACnetClient`.
- Tipo de módulo: `BacnetClient`.
- Guarda la nueva configuración.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/bacnetmodule.PNG" /></center>


**Crear un nuevo Channel**
- Haz clic en el botón a la izquierda del encabezado Model.
- Selecciona `New Channel`.
- Nómbralo ej. `CH01`.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>


**Configurar el BACnet Client**
- Haz clic en `Network interface discovery` junto a Network interface.
- Elige la interfaz de red deseada (p.ej. `0.0.0.0` para todas).

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- El puerto por defecto es `47808` (BAC0 en HEX).
- Deja la dirección broadcast en `255.255.255.255`.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- Tras configurar, haz `Save`.
- Reinicia el módulo.

**Descubrir y seleccionar el Dispositivo**
- Haz clic en `Browse Devices` al lado del campo Devices.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- Descubre y selecciona el dispositivo correspondiente.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- Deja otros parámetros por defecto.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- Una vez configurado, haz `Save` y reinicia el módulo.

- El "BACnet Browser" en N3uron se abre, tras seleccionar el dispositivo, pulsa "Rebrowse" para ver la lista de objetos.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- Ubica la carpeta "Temperature Indoor" y arrástrala a la sección "Model". En la sección "Data => Real Time" se muestran correctamente los valores del tag "Temperature Indoor".

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

A estas alturas la conexión está lista y podemos crear tags desde cero.

## Crear un Tag nuevo

- En el panel Explorer, selecciona `Tags`.
- En el panel Model, crea un nuevo tag y llámalo `PRESENT_VALUE`.

**Configurar el Tag**

- Ajusta:
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value` (opcional)
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: Explora y detecta la propiedad con el botón al lado. Elige `ANALOG_INPUT:0`, luego `PRESENT_VALUE`. Selecciona `From device` en modo de escritura.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

Ahora, ve a `Data/Real-Time` en Navigation y deberías ver los datos leídos de ese dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Brindamos canales de soporte para asegurar que tu experiencia sea lo más fluida posible, adaptándonos a diversas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

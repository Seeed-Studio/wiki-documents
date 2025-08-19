---
description: En esta wiki, exploraremos cómo usar el EdgeBox RPi 200 para Sistemas de Gestión de Edificios (BMS) con N3uron y BACnet IoT. Aprende a integrar y simular dispositivos, mejorando tus soluciones BMS de manera efectiva.
title: Conectar N3uron con BACnet en EdgeBox RPi 200
keywords:
  - Edge Box Rpi 200
  - Primeros pasos
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edgebox_rpi_200_n3uron_bacnet
last_update:
  date: 02/13/2025
  author: Erick González
---

BACnet es un protocolo ampliamente adoptado en los Sistemas de Gestión de Edificios (BMS) debido a su estándar abierto, que permite una integración y comunicación fluidas entre dispositivos de diferentes fabricantes. Su popularidad también se debe a su flexibilidad, ya que admite varias configuraciones de red y proporciona una interoperabilidad robusta. [N3uron](https://n3uron.com/), una plataforma potente y versátil, mejora las capacidades de BACnet al permitir una adquisición y gestión de datos eficientes. Usando BACnet TCP con el Simulador de Sala YABE, los usuarios pueden simular y visualizar dispositivos BACnet, facilitando pruebas y desarrollo. Esta combinación garantiza un enfoque completo y eficaz para las soluciones BMS, aprovechando las fortalezas de cada tecnología.

## Requisitos previos

### Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

Recomendamos encarecidamente estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/Edgebox-rpi-200-n3uron/). Proporciona información esencial sobre la navegación en la interfaz web de N3uron, conceptos como la interfaz Web UI y el módulo Web Vision, comprensión de etiquetas y creación de paneles básicos. Si aún no has explorado estos fundamentos, es aconsejable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

### YABE

Accede a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que permite simular y explorar dispositivos BACnet, ideal para pruebas y desarrollo. Una vez descargado e instalado en tu PC anfitrión, YABE se utilizará para simular datos de temperatura de la sala, que luego leeremos y procesaremos con Node-RED en el Edge Box.

### Configurar los ajustes de Ethernet

Dado que el dominio de IP de tu PLC es diferente de la configuración inalámbrica, es posible que debas cambiar la configuración de IP manualmente. Para ello:

- Paso 01: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- Paso 02: Configura los ajustes del puerto Ethernet según el dominio de red de tu PLC y establece prioridades con el comando 'metric'. El número más bajo tiene la prioridad más alta.

## Conectar a un Control de Sala desde N3uron usando BACnet Client

### Crear el Módulo

- Navega a `Config => Modules => Model => New Module`.

### Configurar el Módulo

- Asigna un nombre al módulo (ejemplo: `BACnetClient`).
- Define el tipo de módulo (`BacnetClient`).
- Guarda la nueva configuración.

### Crear un Nuevo Canal

- Haz clic en `New Channel`.
- Asigna un nombre al canal (ejemplo: `CH01`).

### Configurar el Cliente BACnet

- Descubre la interfaz de red y selecciona la correspondiente.
- Configura la dirección de broadcast a `255.255.255.255`.
- Guarda y reinicia el módulo.

### Descubrir y Seleccionar el Dispositivo

- Haz clic en `Browse Devices` para buscar dispositivos BACnet disponibles.
- Selecciona el dispositivo y configúralo.

### Crear una Nueva Etiqueta

- En el panel Explorador, selecciona `Tags`.
- Crea una nueva etiqueta llamada `PRESENT_VALUE`.
- Configura los parámetros de la etiqueta:
  - **Tipo**: `Número`
  - **Fuente**:
    - **Habilitado**: `Sí`
    - **Tipo de Módulo**: `BacnetClient`
    - **Nombre del Módulo**: `BACnetClient`
    - **Propiedad**: Selecciona `ANALOG_INPUT:0` y `PRESENT_VALUE`.

Ahora, en la sección de Datos en Tiempo Real, podrás ver los valores de la etiqueta `PRESENT_VALUE` obtenidos del dispositivo BACnet.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Ofrecemos varios canales de comunicación para brindarte el mejor soporte posible.

- [Foro de soporte](https://forum.seeedstudio.com/)
- [Contacto por correo electrónico](https://www.seeedstudio.com/contacts)
- [Servidor de Discord](https://discord.gg/eWkprNDMU7)
- [Discusión en GitHub](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

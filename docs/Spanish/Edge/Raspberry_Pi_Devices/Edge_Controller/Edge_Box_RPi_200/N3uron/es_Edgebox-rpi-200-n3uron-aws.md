---
description: Conectar AWS IoT Core con N3uron
title: Conectar AWS IoT Core con N3uron
keywords:
  - Edge Box Rpi 200
  - Primeros pasos
  - IIoT
  - Industrial
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-Rpi-200_N3uron_AWS
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

Hemos delineado el proceso de transmisión de datos desde tu [dispositivo Edge Box RPi 200 a AWS IoT Core usando el protocolo MQTT](https://wiki.seeedstudio.com/Edgebox-rpi-200-AWS/). Este tutorial se integrará perfectamente con el proceso mencionado anteriormente. En este tutorial, profundizaremos en los detalles de la interfaz entre la plataforma N3uron Edge IIoT y AWS IoT Core.

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

Si aún no has explorado nuestra guía sobre la integración de [AWS IoT Core con Edge Box RPi 200](https://wiki.seeedstudio.com/Edgebox-rpi-200-AWS/), también lo recomendamos. Esta guía integral cubre todo, desde lo básico hasta los pasos avanzados de publicación de valores en IoT Core. **Como complementa el tutorial actual, es beneficioso familiarizarse con este contenido también**.

## Configurar la Plataforma IIoT de N3uron

**Crear una instancia de módulo dentro de la interfaz WebUI de N3uron**

1. En el panel **Navegación**, selecciona **Config**.
2. En el panel **Explorador**, selecciona **Módulos**.
3. Haz clic en el menú **Modelo** y selecciona **Nuevo Módulo**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/createmodel.PNG" /></center>

4. La instancia puede tener cualquier nombre, pero en este ejemplo usaremos **MQTT**.
5. Configura la propiedad **Tipo de Módulo** en **MqttClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configurar el Módulo MQTT de N3uron dentro del Panel Explorador de WebUI

1. En el panel **Explorador**, selecciona la instancia **MQTT** que acabas de crear.
2. Haz clic en el botón del menú Modelo y selecciona **Nueva Conexión**.
3. Asigna un nombre a la nueva conexión. En este ejemplo, lo llamaremos **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/AWSconnection.PNG" /></center>

4. Configura las propiedades de conexión:
    - A: Selecciona **Amazon Web Services** en el menú desplegable **Broker de destino**. El **modo de autenticación** será **Certificado**. Además, **Client Id** será **N3uron** en este ejemplo.
    - B: Carga el **Certificado, Clave privada y Certificado CA** que descargaste y guardaste cuando creaste el Thing en la Consola de AWS IoT.
    - C: En la consola de AWS IoT, en el menú de la izquierda, ve a **Configuración** y copia tu **Punto final de datos del dispositivo**. Regresa a N3uron y pégalo en el campo **URL del Broker**.
    - D: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Guardar**.

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

1. En el panel **Modelo**, haz clic derecho en la conexión **AWS**, selecciona **Nuevo Suscriptor** y asígnale un nombre. En este ejemplo, usaremos **Subscriber**.
2. Haz clic en él y agrega un nombre en el campo Tema. En este ejemplo, hemos usado **device/data**.
3. Configura las siguientes propiedades y deja el resto con valores predeterminados:
    - **Qos**: Qos 0.
    - **Codificación**: UTF8.
    - **Compresión**: Ninguna.
    - **Serialización**: JSON.
    - **Analizador de datos/Tipo**: MqttClient JSON.

Guarda la configuración.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Ofrecemos varios canales de comunicación para brindarte el mejor soporte posible.

- [Foro de soporte](https://forum.seeedstudio.com/)
- [Contacto por correo electrónico](https://www.seeedstudio.com/contacts)
- [Servidor de Discord](https://discord.gg/eWkprNDMU7)
- [Discusión en GitHub](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

---
description: Aprende a integrar la aplicación N3uron en el reComputer R1000 con capacidades de edge computing e interactuar con AWS IoT Core. Este tutorial cubre los pasos para suscribirse eficientemente a datos salientes.
title: reComputer R1000 conecta AWS IoT Core con N3uron
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_n3uron_aws
last_update:
  date: 02/16/2025
  author: Erick González
---

## Introducción

Hemos descrito el proceso de transmitir datos desde tu [dispositivo reComputer-R1000 a AWS IoT Core usando MQTT](https://wiki.seeedstudio.com/recomputer_r1000_aws/). Este tutorial se integra sin problemas con ese proceso. Aquí profundizaremos en la interfaz entre la plataforma N3uron Edge IIoT y AWS IoT Core.

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

Recomendamos estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/recomputer_r1000_n3uron/). Proporciona información esencial para navegar la interfaz web de N3uron, conceptos como Web UI y módulo Web Vision, el concepto de tags y creación de dashboards básicos. Si aún no has visto esos fundamentos, es aconsejable hacerlo antes de proseguir. Puedes acceder a la guía a través del enlace provisto.

Si no has explorado nuestra guía para integrar [AWS IoT Core con reComputer-R1000](https://wiki.seeedstudio.com/recomputer_r1000_aws/), te recomendamos hacerlo también. Esa guía cubre desde lo básico hasta pasos avanzados de publicar un valor en IoT Core. **Como complementa el presente tutorial, conviene familiarizarse con ella**.

## Configurar la plataforma IIoT N3uron

**Crear una instancia de módulo en la interfaz WebUI de N3uron**

- **Paso 01**: En el panel **Navigation**, selecciona **Config**.
- **Paso 02**: En el panel **Explorer**, elige **Modules**.
- **Paso 03**: Haz clic en el menú **Model** y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG" /></center>

- **Paso 04**: Pon el nombre que desees, por ejemplo **MQTT**.
- **Paso 05**: En **Module Type**, elige **MqttClient**. Deja el resto como está y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configurar el módulo MQTT de N3uron en el panel Explorer de WebUI

- **Paso 01**: En **Explorer**, selecciona la instancia **MQTT** recién creada.
- **Paso 02**: Haz clic en el botón del menú Model y elige **New Connection**.
- **Paso 03**: Ponle un nombre a la nueva conexión, por ejemplo **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG" /></center>

- **Paso 04**: Configurar propiedades:

    - A: En **Destination Broker**, escoge **Amazon Web Services**. **Authentication mode** = **Certificate**. Y **Client Id** = **N3uron** en este ejemplo.
    - B: Carga los ficheros **Certificate, Private key, CA certificate** que obtuviste al crear el Thing en AWS IoT Console.
    - C: En la consola de AWS IoT, ve a **Settings** y copia tu **Device Data Endpoint**. Vuelve a N3uron y pégalo en **Broker URL**.
    - D: Deja el resto por defecto y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG" /></center>

## Suscribirse a un tópico usando el módulo MQTT de N3uron

- **Paso 01**: En el panel **Model**, clic derecho en **AWS** Connection, selecciona **New Subscriber**, asígnale un nombre, p.ej. **Subscriber**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG" /></center>

- **Paso 02**: Haz clic en él y añade un nombre en el campo Topic. Ej.: device/data (en nuestro tutorial AWS, publicamos datos en ese tópico).
- **Paso 03**: Ajusta propiedades:
    - Qos: Qos 0
    - Encoding: UTF8
    - Compression: None
    - Serialization: JSON
    - Data parser/Type: MqttClient JSON

Finalmente, haz **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG" /></center>

## Crear un Tag

- **Paso 01**: En **Explorer**, selecciona **Tags**.
- **Paso 02**: En el menú Model, clic derecho en la carpeta y elige **New Tag**, nómbralo p.ej. **Subscribed_value**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG" /></center>

- **Paso 03**: Ajusta:
    - **Type**: Number
    - **Source/Enabled**: Yes
    - **Module Type**: MqttClient
    - **Module name**: MQTT
    - **Config/Subscriber**: AWS/Subscriber
- **Paso 04**: Haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG" /></center>

Tras ejecutar el script de Python que proveemos en AWS IoT y reComputer-R1000 y AWS IoT, en la interfaz WebUI de N3uron, panel izquierdo, elige **Data/Real Time**. Deberías ver el tag **Subscribed_Value** con un valor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG" /></center>

## Visualización

Si has creado un módulo webvision, puedes seguir estos pasos:

- **Paso 01**: Ve a **WebVision** en **Config** y haz clic en **Open Designer**. Inicia sesión como administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG" /></center>

- **Paso 02**: En la sección Templates, crea un contenedor, por ej. Main, y márcalo como startup (aparecerá un *).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG" /></center>

- **Paso 03**: Cambia el color de fondo.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG" /></center>

- **Paso 04**: Dentro de ese contenedor, en **Components**, añade uno nuevo, por ej. **Label**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG" /></center>

- **Paso 05**: Modifica sus propiedades para mejorar la apariencia.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG" /></center>

- **Paso 06**: En el componente Label, elige el tag que mostrará.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG" /></center>

- **Paso 07**: Selecciona la propiedad del tag.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG" /></center>

- **Paso 08**: Ve a WebVision en Config y haz clic en **Open UI**, inicia sesión como administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

Verás cómo el label se actualiza según los datos suscritos desde la nube.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos varios canales de soporte para asegurar que tu experiencia sea lo más fluida posible, cubriendo distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

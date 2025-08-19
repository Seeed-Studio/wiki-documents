---
description: Conecta AWS IoT Core con N3uron
title: Conecta AWS IoT Core con N3uron
keywords:
  - reTerminal DM
  - Primeros pasos
  - IIoT
  - Industrial
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_N3uron_AWS
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

Hemos descrito el proceso para transmitir datos desde tu [dispositivo reTerminal DM a AWS IoT Core usando el protocolo MQTT](https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/). Este tutorial se integrará sin problemas con el proceso mencionado anteriormente. En este tutorial, profundizaremos en las complejidades de la interacción entre la plataforma N3uron Edge IIoT y AWS IoT Core.

## Requisitos Previos

### Hardware 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
        </div>
      </td>
        </tr>
    </table>
</div>

### Software

Se recomienda encarecidamente estudiar la guía de [Primeros pasos con N3uron](https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/). Esta guía proporciona información esencial para navegar por la interfaz web de N3uron, entender conceptos como la interfaz Web UI y el módulo Web Vision, comprender el concepto de tags y crear dashboards básicos. Si aún no has explorado estos fundamentos, es aconsejable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

Si no has explorado nuestra guía sobre la integración de [AWS IoT Core con reTerminal DM](https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/), también te recomendamos hacerlo. Esta completa guía abarca desde lo básico hasta los pasos avanzados para publicar un valor en IoT Core. **Dado que complementa el tutorial actual, es beneficioso familiarizarse también con dicho contenido.**

## Configurar la Plataforma N3uron IIoT

**Crea una Instancia de Módulo en la Interfaz WebUI de N3uron**

- Paso 01: En el panel de **Navigation**, selecciona **Config**.
- Paso 02: En el panel de **Explorer**, selecciona **Modules**.
- Paso 03: Haz clic en el menú **Model** y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/createmodel.PNG" /></center>

- Paso 04: La instancia puede tener cualquier nombre, pero en este ejemplo usaremos **MQTT**.
- Paso 05: Establece la propiedad **Module Type** en **MqttClient**. Deja el resto de las propiedades en sus valores por defecto y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configurar el Módulo MQTT de N3uron en el Panel Explorer de la WebUI

- Paso 01: En el panel de **Explorer**, selecciona la instancia **MQTT** que acabas de crear.
- Paso 02: Haz clic en el botón del menú Model y selecciona **New Connection**.
- Paso 03: Asigna un nombre a la nueva conexión. En este ejemplo, se ha denominado **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconnection.PNG" /></center>

- Paso 04: Configura las propiedades de la conexión:

    - A: Selecciona **Amazon Web Services** en el menú desplegable **Destination Broker**. El **Authentication mode** será **Certificate**. Además, en este ejemplo, el **Client Id** es **N3uron**.
    - B: Carga el **Certificado, la clave privada y el certificado CA** que descargaste y guardaste al crear la Thing en la Consola AWS IoT.
    - C: En la consola AWS IoT, en el menú de la izquierda, ve a **Settings** y copia tu **Device Data Endpoint**. Regresa a N3uron y pégalo en el campo **Broker URL**.
    - D: Deja el resto de las propiedades en sus valores por defecto y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconfig.PNG" /></center>

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

- Paso 01: En el panel **Model**, haz clic derecho sobre la conexión **AWS**, selecciona **New Subscriber** y asígnale un nombre. En este ejemplo, usaremos **Subscriber**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newsubscriber.PNG" /></center>

- Paso 02: Haz clic en él y agrega un nombre en el campo Topic. En este ejemplo, hemos utilizado **device/data** (en nuestro tutorial de AWS, hemos publicado datos bajo este tema).

- Paso 03: Configura las siguientes propiedades utilizando los valores indicados, dejando el resto en sus valores por defecto:
    - **Qos**: Qos 0.
    - **Encoding**: UTF8.
    - **Compression**: None.
    - **Serialization**: JSON.
    - **Data parser/Type**: MqttClient JSON.

Y guarda los cambios.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/Subscriberconfig.PNG" /></center>

## Crear un Tag

- Paso 01: Dentro del panel **Explorer**, selecciona **Tags**.
- Paso 02: En el menú Model, haz clic derecho sobre el ícono de la carpeta, selecciona **New Tag** y asígnale un nombre. En este ejemplo, usaremos **Subscribed_value**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newtag.PNG" /></center>

- Paso 03: En el panel de Configuración, establece las siguientes propiedades utilizando los valores indicados, dejando el resto en sus valores por defecto:
    - **Type**: Number.
    - **Source/Enabled**: Yes.
    - **Module Type**: MqttClient.
    - **Module name**: MQTT.
    - **Config/Subscriber**: AWS/Subscriber.

- Paso 04: Haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagconfig.PNG" /></center>

Después de ejecutar el script Python que proporcionamos en AWS IoT y reTerminal DM (o EdgeBox y AWS IoT), regresa a la interfaz web de N3uron y, en el panel de la izquierda, selecciona **Data/Real Time**. Ahora deberías ver el tag **Subscribed_Value** que creaste anteriormente con un valor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/realtimedata.PNG" /></center>

## Visualización 

Si has creado un módulo WebVision, puedes comenzar con los siguientes pasos.

- Paso 01: Navega a **WebVision** en la sección **Config** y haz clic en **Open Designer**. Inicia sesión con tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/wenvision.PNG" /></center>

- Paso 02: En la sección Templates, crea un nuevo Container con el nombre que desees. Luego, designa este container como el de inicio. Esto lo establecerá como la pantalla inicial de WebVision. Aparecerá con un asterisco (*) a su lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/webvison.PNG" /></center>

- Paso 03: Cambia el color de fondo del container.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/colorchabge.PNG" /></center>

- Paso 04: Dentro del container Main, navega a **Components** y añade un nuevo componente. Para este ejemplo, selecciona el componente **Label**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/addnewcomp.PNG" /></center>

- Paso 05: Puedes modificar las propiedades de la label para mejorar su apariencia.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/changeproperties.PNG" /></center>

- Paso 06: Dentro del **Label component**, selecciona el tag que proveerá los valores mostrados en la label.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/taglist.PNG" /></center>

- Paso 07: Selecciona la propiedad del tag.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagproperty.PNG" /></center>

- Paso 08: Luego, navega a WebVision en la sección Config y haz clic en **Open UI**. Inicia sesión con tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>
 
Posteriormente, verás el resultado final, en el que la label actualiza sus valores de acuerdo con los datos suscritos desde la nube.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/output.PNG" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diferentes canales y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

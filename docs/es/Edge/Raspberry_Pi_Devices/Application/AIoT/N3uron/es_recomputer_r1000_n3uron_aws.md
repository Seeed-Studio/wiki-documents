---
description: Aprende cómo integrar la aplicación N3uron en el reComputer R1000 con capacidades de edge computing e interactuar con AWS IoT Core. En este tutorial, cubriremos los pasos para suscribirse a datos de resultado de manera eficiente.
title: reComputer R1000 Conectar AWS IoT Core con N3uron
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
  date: 7/11/2024
  author: Kasun Thushara
---
## Introducción

Hemos delineado el proceso de transmitir datos desde tu [dispositivo reComputer-R1000 con AWS IoT Core usando el protocolo MQTT](https://wiki.seeedstudio.com/es/recomputer_r1000_aws/). Este tutorial se integrará perfectamente con el proceso mencionado anteriormente. En este tutorial, profundizaremos en las complejidades de la interfaz entre la plataforma N3uron Edge IIoT y AWS IoT Core.

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

Recomendamos encarecidamente estudiar la guía [Getting Started with N3uron](https://wiki.seeedstudio.com/es/recomputer_r1000_n3uron/). Proporciona información esencial para navegar por la interfaz web de N3uron, comprender conceptos como la Web UI y el módulo Web Vision, entender el concepto de etiquetas y crear dashboards básicos. Si aún no has explorado estos fundamentos, es recomendable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

Si no has explorado nuestra guía sobre la integración de [AWS IoT Core con reComputer-R1000](https://wiki.seeedstudio.com/es/recomputer_r1000_aws/), también recomendamos hacerlo. Esta guía completa cubre todo desde lo básico hasta los pasos avanzados para publicar un valor en IoT Core. **Como complementa el tutorial actual, es beneficioso familiarizarse con este contenido también**.

## Configurar la Plataforma IIoT N3uron

**Crear una Instancia de Módulo Dentro de la Interfaz WebUI de N3uron**

- Paso 01: En el panel de **Navegación**, selecciona **Config**.
- Paso 02: En el panel **Explorer**, selecciona **Modules**.
- Paso 03: Haz clic en el menú **Model** y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG" /></center>

- Paso 04: La instancia puede tener cualquier nombre, pero para el ejemplo usaremos **MQTT**.
- Paso 05: Establece la propiedad **Module Type** como **MqttClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configurar el Módulo MQTT de N3uron dentro del Panel Explorer de la WebUI

- Paso 01: En el panel **Explorer**, selecciona la instancia **MQTT** que acabas de crear.
- Paso 02: Haz clic en el botón del menú Model y selecciona **New Connection**.
- Paso 03: Dale un nombre a la nueva conexión. En este ejemplo, se ha nombrado **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG" /></center>

- Paso 04: Configura las propiedades de la conexión:

  - A: Selecciona **Amazon Web Services** del menú desplegable **Destination Broker**. **Authentication mode** será **Certificate**. También **Client Id** es **N3uron** en este ejemplo.
  - B: Carga el **Certificate, Private key y CA certificate** que descargaste y guardaste cuando creaste la Thing en la Consola IoT de AWS.
  - C: En la consola IoT de AWS, en el menú de la izquierda, ve a **Settings** y copia tu **Device Data Endpoint**. Regresa a N3uron y pégalo en el campo **Broker URL**.
  - D: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG" /></center>

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

- Paso 01: En el panel **Model**, haz clic derecho en la Conexión **AWS**, selecciona **New Subscriber**, y dale un nombre. En este ejemplo, simplemente usaremos **Subscriber**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG" /></center>

- Paso 02: Haz clic en él y agrega un nombre en el campo Topic. En este ejemplo, hemos usado device/data.(En nuestro tutorial de AWS, hemos publicado datos bajo este tema.)

- Paso 03: Establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:
  - **Qos**: Qos 0.
  - **Encoding**: UTF8
  - **Compression**: None
  - **Serialization**: JSON
  - **Data parser/Type**: MqttClient JSON

Y guárdalo.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG" /></center>

## Crear una Etiqueta

- Paso 01: Dentro del **panel Explorador**, selecciona **Etiquetas**.
- Paso 02: En el menú Modelo, haz clic derecho en el icono de carpeta, selecciona **Nueva Etiqueta** y dale un nombre. En este ejemplo, usaremos **Subscribed_value**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG" /></center>

- Paso 03: En el panel de Configuración, establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:
  - **Tipo**: Número.
  - **Fuente/Habilitado**: Sí
  - **Tipo de Módulo**: MqttClient
  - **Nombre del módulo**: MQTT
  - **Config/Suscriptor**: AWS/Subscriber

- Paso 04: Haz clic en **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG" /></center>

Después de ejecutar el script de python que proporcionamos en AWS IoT y reComputer-R1000 y AWS IoT.
Regresa a la interfaz WebUI de N3uron y en el panel izquierdo, selecciona **Datos/Tiempo Real**. Ahora deberías ver la etiqueta **Subscribed_Value** que creaste antes con un valor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG" /></center>

## Visualización

Si has creado un módulo webvision puedes comenzar estos pasos.

- Paso 01: Navega a **WebVision** en la sección **Config** y haz clic en **Abrir Diseñador**. Inicia sesión usando tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG" /></center>

- Paso 02: En la sección Plantillas, crea un nuevo Contenedor con el nombre que desees. Luego, designa este contenedor como el de inicio. Esto lo establecerá como nuestra pantalla inicial de WebVision. Aparecerá con un símbolo de asterisco (*) al lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG" /></center>

- Paso 03: Cambia el color de fondo del contenedor.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG" /></center>

- Paso 04: Dentro del contenedor Principal, navega a **Componentes** y añade un nuevo componente. Para este ejemplo, selecciona el componente **Etiqueta**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG" /></center>

- Paso 05: Puedes modificar las propiedades de la etiqueta para una mejor apariencia.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG" /></center>

- Paso 06: Dentro del **componente Etiqueta**, selecciona la etiqueta que proporcionará los valores mostrados en el componente Etiqueta.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG" /></center>

- Paso 07: Selecciona la Propiedad de etiqueta

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG" /></center>

- Paso 08: A continuación, navega a WebVision en la sección Config y haz clic en Abrir UI. Inicia sesión usando tus credenciales de Administrador.

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

 Posteriormente, presenciarás el resultado final, que implica actualizar los valores de la etiqueta de acuerdo con los datos suscritos desde la nube.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Conectar N3uron con Dispositivos Compatibles con MQTT y Modbus
title: Conectar N3uron con Dispositivos Compatibles con MQTT y Modbus
keywords:
  - reTerminal DM
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_N3uron_modbus_mqtt
last_update:
  date: 5/6/2024
  author: Kasun Thushara and Xabier Fernández
---
## Introducción

En la automatización industrial, Modbus se destaca como uno de los protocolos más comunes. MQTT ha emergido como el protocolo líder para IoT en automatización industrial debido a muchas características. Su diseño ligero, eficiencia, escalabilidad y soporte para mensajería asíncrona son notables. En MQTT, los dispositivos se comunican solo cuando hay un evento reportable, contrastando con las verificaciones constantes de actualizaciones. Este enfoque basado en eventos, junto con el reporte por excepción—enviando datos solo cuando se desvía de las normas o en disparadores específicos—conserva ancho de banda y recursos, optimizando la transmisión de datos para aplicaciones IoT críticas.

La potente combinación de reTerminal DM y [N3uron](https://n3uron.com/) Duo facilita la gestión eficiente de plantas proporcionando capacidades robustas de conectividad y manipulación de datos. Esta Wiki enfatiza la importancia de Modbus TCP en entornos industriales, destacando la integración perfecta de dispositivos MQTT para mejorar aún más la conectividad.

## Prerrequisitos

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
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos encarecidamente estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/es/reTerminalDM_N3uron_Get_Start/). Proporciona información esencial sobre la navegación por la interfaz web de N3uron, la comprensión de conceptos como la interfaz web y el módulo Web Vision, la comprensión del concepto de etiquetas y la creación de paneles básicos. Si aún no has explorado estos fundamentos, es recomendable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

### Configurar ajustes de Ethernet

Dado que el dominio IP de tu PLC es diferente de tus configuraciones inalámbricas, es posible que tengas que cambiar la configuración IP manualmente. Para eso,

- Paso 01: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- Paso 02: Luego configure los ajustes del puerto Ethernet según el dominio de red de su PLC y establezca prioridades usando el comando 'metric'. La métrica más baja tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Creación y Configuración del Módulo Modbus

Crear una Instancia de Módulo Dentro de la Interfaz WebUI de N3uron

- Paso 01: En el panel de Navegación, seleccione **Config**.
- Paso 02: En el panel del Explorador, seleccione **Modules**.
- Paso 03: Haga clic en el menú Model y seleccione **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- Paso 04: La instancia puede recibir cualquier nombre, pero para el ejemplo, usaremos **ModbusClient**.
- Paso 05: Establezca la propiedad Module Type como **ModbusClient**. Deje el resto de las propiedades con sus valores predeterminados y haga clic en **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Creación y Configuración de Canal

- Paso 01: Bajo el Cliente Modbus creado y Model, seleccione **New Channel**. Asigne al canal el nombre **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- Paso 02: Ahora, vamos a comunicarnos con el PLC usando Modbus TCP. Por favor proporcione la **dirección IP** para el PLC y la **dirección del puerto**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
 If you are using Modbus RTU, there are various configurations to consider. To do that, you need to provide details such as the COM port, baud rate, etc. For more information on configuring both Modbus RTU and TCP protocols on N3uron, refer to the provided [guide](https://docs.n3uron.com/docs/modbus-client-configuration).
:::

- Paso 03: Agregar un dispositivo: Cada canal puede tener uno o más dispositivos. Establece un **nombre** para el dispositivo y procede con la configuración. En este caso, el nombre del dispositivo es **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- Paso 04: Hay algunas configuraciones que puedes ajustar a través de esta interfaz. Puedes encontrar más detalles en este enlace. Sin embargo, para este caso, las mantendremos como están.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuración de Etiquetas

- Paso 01: Ve a la **WebUI**, selecciona **Config**, y luego haz clic en **Tag**. En la sección Model, haz clic en el menú y elige **New Tag**. Nómbrala Q1. Normalmente Q se usa para indicar la bobina de salida.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/addtag.PNG" /></center>

- Paso 02: Luego necesitas hacer las siguientes configuraciones.
  - Source : Enabled/Yes
  - Module Type : ModbusClient
  - ModuleName: ModbusClient
  - Config: Device: Client/PLC
  - Modbus address: 008931
  - Data type: Boolean
y **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 It is advisable to refer to the PLC or device manufacturer's datasheet regarding Modbus addresses. There, you will find details about input, output, and holding addresses. According to these specifications, adjustments should be made in the Modbus address line in the tag configuration. For instance, if the manufacturer notates the output coil Q1 as 8193, the address should be configured as 008193. Similarly, if the network input is denoted as 1 and it is a coil type, the address should be set as 000001.
:::

- Paso 03: Simulación en tiempo real

Una vez conectado al sistema, puedes ver el estado en tiempo real de las bobinas de salida y las bobinas de entrada.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 Interaction with the PLC via the N3uron interface requires appropriate access permissions, including both read and write capabilities.
:::

## Crear una Instancia del Módulo MQTT Dentro de la Interfaz WebUI de N3uron

- Paso 01: En el panel de Navegación, selecciona **Config**.
- Paso 02: En el panel Explorador, selecciona **Modules**.
- Paso 03: Haz clic en el menú Model y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- Paso 04: La instancia puede recibir cualquier nombre, pero para el ejemplo, usaremos **MQTT**.
- Paso 05: Establece la propiedad Module Type como **MqttClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar el Módulo MQTT de N3uron

- Paso 01: En el panel Explorador, selecciona la instancia MQTT que acabas de crear.
- Paso 02: Haz clic en el botón del menú Model y selecciona New Connection.
- Paso 03: Dale un nombre a la Nueva conexión. En este ejemplo, se ha nombrado **MqttClient**:

  - Destination broker : Custom
  - Authentication mode: Password
  - Username : Tu Nombre de Usuario del Broker
  - Password: Tu Contraseña del Broker
  - Protocol:MQTT
  - Broker URL:IP del broker
**Guarda** las configuraciones

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

- Paso 01: En el panel Model, haz clic derecho en la Conexión AWS, selecciona New Subscriber, y dale un nombre. En este ejemplo, simplemente usaremos Subscriber.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- Paso 02: Haz clic en él y añade un nombre en el campo Topic. En este ejemplo, hemos usado device/data.

:::note
For testing and hands-on experience, we have provided you with an [Arduino code](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/MQTT_N3uron.ino) that can be run on XIAO. Additionally, you will need to input your own credentials into this code before uploading it.
:::

- Paso 03: Establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:

  - Qos: Qos 0.
  - Encoding: UTF8
  - Compression: None
  - Serialization: JSON
  - Data parser/Type: MqttClient JSON
Y **Guárdalo**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
 Here, we utilize a data parser configured for MQTTClient JSON format. The XIAO device publishes data to the broker in this format. If your device does not publish data in this specific format, you will need to identify the format it uses and create a custom JavaScript code snippet to handle the devices accordingly. For further guidance, please refer to the provided [guidelines](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Crear una Etiqueta

- Paso 01: Dentro del panel Explorer, selecciona **Tags**.
- Paso 02: En el menú Model, haz clic derecho en el icono de carpeta, selecciona **New Tag**, y dale un nombre. En este ejemplo, usaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- Paso 03: En el panel Configuration, establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:

  - Type: Number.
  - Source/Enabled: Yes
  - Module Type: MqttClient
  - Module name: MQTT
  - Config/Subscriber: MqttClient/Subscriber
Haz clic en **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- Paso 04: Simulación en tiempo real
Una vez conectado al sistema, puedes ver el estado en tiempo real de la salida del Broker MQTT.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus : Publiquemos el Estado de la Fábrica con AWS

:::note
 We have provided step-by-step instructions on how to connect an [AWS cloud to your reTerminal DM device](https://wiki.seeedstudio.com/es/reTerminal-DM_AWS_first/). If you are new to this wiki, please refer to this link.
:::

- Paso 01: En el panel Explorador, selecciona la instancia **MQTT** que acabas de crear.
- Paso 02: Haz clic en el botón del menú Modelo y selecciona **Nueva Conexión**.
- Paso 03: Dale un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- Paso 04: Configura las propiedades de la conexión:

  - A: Selecciona **Amazon Web Services** del menú desplegable **Broker de Destino**. El **modo de autenticación** será **Certificado**. También el **Id de Cliente** es **N3uron** en este ejemplo.
  - B: Carga el **Certificado, Clave privada y certificado CA** que descargaste y guardaste cuando creaste la Thing en la consola de IoT de AWS.
  - C: En la consola de IoT de AWS, en el menú de la izquierda, ve a **Configuración** y copia tu **Endpoint de Datos del Dispositivo**. Regresa a N3uron y pégalo en el campo **URL del Broker**.
  - D: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Guardar**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- Paso 05: Dentro del panel Modelo, haz clic derecho en la Conexión **MqttPublisher** que acabas de configurar, selecciona **Nuevo Publicador**, y dale un nombre. En este ejemplo, simplemente usaremos **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- Paso 06: Haz clic en él y agrega un nombre en el campo **Tema**. En este ejemplo, hemos usado **N3uron**.

- Paso 07: Haz clic en el botón **Filtro de Etiquetas**, selecciona **Nuevo Filtro de Etiquetas**, y cambia el nombre predeterminado. En este ejemplo hemos usado **TagFilter**. Deja Modo, Ruta y patrón Regex con sus valores predeterminados. Con esta configuración, cada etiqueta configurada en N3uron será publicada a nuestro Broker de AWS.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- Paso 08: Ve a la consola de IoT de AWS y en el menú de la izquierda, selecciona **cliente de prueba MQTT**. Haz clic en la pestaña **Suscribirse a un tema**, ingresa **N3uron** en el filtro de Tema para suscribirte a todo, y haz clic en **Suscribirse**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awsend.PNG" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

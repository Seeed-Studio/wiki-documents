---
description: Conectar N3uron con dispositivos compatibles con MQTT y Modbus
title: Conectar N3uron con dispositivos compatibles con MQTT y Modbus
keywords:
  - Edge Box RPi 200
  - MQTT
  - IIoT
  - Industrial
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox_rpi_200_N3uron_modbus_mqtt_aws
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

En la automatización industrial, Modbus se destaca como uno de los protocolos más comunes. MQTT ha emergido como el protocolo líder para IoT en la automatización industrial debido a varias características. Su diseño ligero, eficiencia, escalabilidad y soporte para mensajería asíncrona son notables. En MQTT, los dispositivos se comunican solo cuando hay un evento notificable, en contraste con las actualizaciones constantes. Este enfoque basado en eventos, junto con la transmisión por excepción (enviar datos solo cuando se desvían de la norma o en activadores específicos), conserva ancho de banda y recursos, optimizando la transmisión de datos para aplicaciones críticas de IoT.

La potente combinación de Edge Box RPi 200 y [N3uron](https://n3uron.com/) facilita la gestión eficiente de plantas al proporcionar conectividad robusta y capacidades avanzadas de manipulación de datos. Esta guía enfatiza la importancia de Modbus TCP en entornos industriales, destacando la integración fluida de dispositivos MQTT para mejorar aún más la conectividad.

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

Recomendamos encarecidamente estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/Edgebox-rpi-200-n3uron/). Proporciona información esencial sobre la navegación en la interfaz web de N3uron, comprensión de etiquetas y creación de paneles básicos. Si aún no has explorado estos fundamentos, es aconsejable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

### Configurar ajustes de Ethernet

Dado que el dominio de IP de tu PLC es diferente de la configuración inalámbrica, es posible que debas cambiar la configuración de IP manualmente. Para ello:
- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura los ajustes del puerto Ethernet según el dominio de red de tu PLC y establece prioridades con el comando 'metric'. El número más bajo tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Creación y configuración del módulo Modbus

### Crear una instancia del módulo Modbus en la interfaz WebUI de N3uron

- **Paso 01**: En el panel de **Navegación**, selecciona **Config**.
- **Paso 02**: En el panel de **Explorador**, selecciona **Módulos**.
- **Paso 03**: Haz clic en el menú **Modelo** y selecciona **Nuevo Módulo**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- **Paso 04**: Asigna un nombre (ejemplo: `ModbusClient`).
- **Paso 05**: Configura el **Tipo de Módulo** como `ModbusClient`. Deja los valores predeterminados y haz clic en **Guardar**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Creación y configuración de canal

- **Paso 01**: Dentro del módulo Modbus creado, selecciona **Nuevo Canal** y nómbralo `Client`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- **Paso 02**: Ahora vamos a comunicarnos con el PLC utilizando Modbus TCP. Proporciona la **dirección IP** del PLC y la **dirección del puerto**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/clientconfig.PNG" /></center>


:::note
Si estás utilizando Modbus RTU, hay varias configuraciones a considerar. Para ello, debes proporcionar detalles como el puerto COM, la velocidad en baudios, etc. Para obtener más información sobre la configuración de los protocolos Modbus RTU y TCP en N3uron, consulta la siguiente [guía](https://docs.n3uron.com/docs/modbus-client-configuration).
:::

- **Paso 03**: Agregar un dispositivo: Cada canal puede tener uno o más dispositivos. Asigna un **nombre** al dispositivo y procede con la configuración. En este caso, el nombre del dispositivo es **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- **Paso 04**: Hay algunas configuraciones que puedes ajustar en esta interfaz. Puedes encontrar más detalles en este enlace. Sin embargo, en este caso, las dejaremos como están.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuración de etiquetas (Tags)

- **Paso 01**: Ve a la **WebUI**, selecciona **Config**, y luego haz clic en **Tag**. En la sección Modelo, haz clic en el menú y selecciona **Nuevo Tag**. Asigna el nombre `Q1`. Normalmente, `Q` se usa para indicar la bobina de salida.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/addtag.PNG" /></center>

- **Paso 02**: Luego, realiza las siguientes configuraciones:
    - **Source**: Habilitado/Sí
    - **Module Type**: ModbusClient
    - **Module Name**: ModbusClient
    - **Config**: Dispositivo: Client/PLC
    - **Modbus address**: 008931
    - **Data type**: Booleano

Haz clic en **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
Se recomienda consultar la hoja de datos del fabricante del PLC o dispositivo para conocer las direcciones Modbus. Allí encontrarás detalles sobre entradas, salidas y direcciones de retención. Según estas especificaciones, se deben hacer ajustes en la línea de dirección Modbus en la configuración del tag. Por ejemplo, si el fabricante anota la bobina de salida `Q1` como 8193, la dirección debe configurarse como `008193`. De manera similar, si la entrada de red se denota como `1` y es de tipo bobina, la dirección debe establecerse como `000001`.
:::

- **Paso 03**: Simulación en tiempo real

Una vez conectado al sistema, podrás ver el estado en tiempo real de las bobinas de salida y entrada.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
La interacción con el PLC a través de la interfaz de N3uron requiere permisos de acceso adecuados, incluyendo capacidades de lectura y escritura.
:::

## Crear una instancia del módulo MQTT en la interfaz WebUI de N3uron

- **Paso 01**: En el panel de **Navegación**, selecciona **Config**.
- **Paso 02**: En el panel de **Explorador**, selecciona **Módulos**.
- **Paso 03**: Haz clic en el menú **Modelo** y selecciona **Nuevo Módulo**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- **Paso 04**: La instancia puede recibir cualquier nombre, pero para este ejemplo usaremos **MQTT**.
- **Paso 05**: Configura el **Tipo de Módulo** como `MqttClient`. Deja los valores predeterminados y haz clic en **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar el módulo MQTT en N3uron

- **Paso 01**: En el panel de **Explorador**, selecciona la instancia MQTT que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú **Modelo** y selecciona **Nueva Conexión**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttClient**:

    - **Broker de destino**: Personalizado
    - **Modo de autenticación**: Contraseña
    - **Usuario**: Tu nombre de usuario del broker
    - **Contraseña**: Tu contraseña del broker
    - **Protocolo**: MQTT
    - **URL del Broker**: Dirección IP del broker

Haz clic en **Guardar configuración**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Suscribirse a un tema utilizando el módulo MQTT de N3uron

- **Paso 01**: En el panel de **Modelo**, haz clic derecho en la conexión AWS, selecciona **Nuevo Suscriptor**, y asígnale un nombre. En este ejemplo, usaremos `Subscriber`.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- **Paso 02**: Haz clic en el suscriptor recién creado y agrega un nombre en el campo **Tema**. En este ejemplo, usaremos `device/data`.

:::note
Para realizar pruebas y obtener experiencia práctica, te proporcionamos un [código Arduino](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) que puede ejecutarse en XIAO. Además, deberás ingresar tus propias credenciales en este código antes de cargarlo.
:::

- **Paso 03**: Configura las siguientes propiedades con los valores indicados a continuación, dejando el resto en sus valores predeterminados:

    - **QoS**: QoS 0
    - **Codificación**: UTF8
    - **Compresión**: Ninguna
    - **Serialización**: JSON
    - **Analizador de datos/Tipo**: MqttClient JSON

Haz clic en **Guardar**.


<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
Aquí utilizamos un analizador de datos configurado en formato MQTTClient JSON. El dispositivo XIAO publica datos en este formato en el broker. Si tu dispositivo no publica datos en este formato específico, deberás identificar el formato que utiliza y crear un fragmento de código JavaScript personalizado para manejar los dispositivos en consecuencia. Para obtener más información, consulta las siguientes [directrices](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Crear una etiqueta (Tag)

- **Paso 01**: Dentro del panel **Explorador**, selecciona **Tags**.
- **Paso 02**: En el menú **Modelo**, haz clic derecho sobre el icono de la carpeta, selecciona **Nuevo Tag**, y asígnale un nombre. En este ejemplo, usaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- **Paso 03**: En el panel de configuración, establece las siguientes propiedades con los valores indicados, dejando el resto en sus valores predeterminados:

    - **Tipo**: Número.
    - **Fuente/Habilitado**: Sí
    - **Tipo de módulo**: MqttClient
    - **Nombre del módulo**: MQTT
    - **Configuración/Suscriptor**: MqttClient/Subscriber

Haz clic en **Guardar**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- **Paso 04**: Simulación en tiempo real
Una vez conectado al sistema, podrás ver el estado en tiempo real de la salida del **Broker MQTT**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus: Publicar el estado de la fábrica en AWS

:::note
Hemos proporcionado instrucciones paso a paso sobre cómo conectar [la nube de AWS a tu dispositivo Edge Box RPi 200](https://wiki.seeedstudio.com/Edgebox-Rpi-200_N3uron_AWS/). Si eres nuevo en esta wiki, consulta este enlace.
:::

- **Paso 01**: En el panel **Explorador**, selecciona la instancia **MQTT** que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú **Modelo** y selecciona **Nueva Conexión**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- **Paso 04**: Configura las propiedades de conexión:

    - **A**: Selecciona **Amazon Web Services** en el menú desplegable de **Broker de destino**. El **Modo de autenticación** será **Certificado**. Además, en este ejemplo, el **Client ID** es `N3uron`.
    - **B**: Carga el **Certificado, la Clave Privada y el Certificado CA** que descargaste y guardaste cuando creaste el **Thing** en la consola de AWS IoT.
    - **C**: En la consola de AWS IoT, en el menú de la izquierda, ve a **Configuración** y copia tu **Punto de acceso de datos del dispositivo**. Luego, regresa a N3uron y pégalo en el campo **Broker URL**.
    - **D**: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Guardar**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- **Paso 05**: Dentro del panel **Modelo**, haz clic derecho en la conexión **MqttPublisher** que acabas de configurar, selecciona **Nuevo Publicador**, y asígnale un nombre. En este ejemplo, usaremos **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- **Paso 06**: Haz clic en el nuevo publicador y agrega un nombre en el campo **Tema**. En este ejemplo, usaremos **N3uron**.

- **Paso 07**: Haz clic en el botón **Filtro de Etiqueta**, selecciona **Nuevo Filtro de Etiqueta**, y cambia el nombre predeterminado. En este ejemplo, hemos usado **TagFilter**. Deja **Modo, Ruta y Patrón Regex** con sus valores predeterminados. Con esta configuración, todas las etiquetas configuradas en N3uron serán publicadas en nuestro **Broker AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- **Paso 08**: Ve a la consola de AWS IoT, y en el menú de la izquierda, selecciona **Cliente de prueba MQTT**. Haz clic en la pestaña **Suscribirse a un tema**, ingresa `N3uron` en el **filtro de temas** para suscribirte a todos los datos, y haz clic en **Suscribirse**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awsend.PNG" /></center>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes opciones de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>










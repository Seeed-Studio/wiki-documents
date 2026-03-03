---
description: Aprende cómo integrar N3uron con MQTT y Modbus para una adquisición de datos fluida y publicar en la nube de AWS. Esta guía cubre configuración, configuración y preprocesamiento de datos para optimizar tus proyectos de automatización industrial
title: Publicando Datos Industriales a la Nube de AWS Usando N3uron, MQTT, y Modbus
keywords:
  - reComputer R1000
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/recomputer_r1000_n3uron_modbus_mqtt_aws
last_update:
  date: 7/12/2024
  author: Kasun Thushara
---
## Introducción

En la automatización industrial, Modbus se destaca como uno de los protocolos más comunes. MQTT ha emergido como el protocolo líder para IoT en automatización industrial debido a muchas características. Su diseño ligero, eficiencia, escalabilidad y soporte para mensajería asíncrona son notables. En MQTT, los dispositivos se comunican solo cuando hay un evento reportable, contrastando con las verificaciones constantes de actualizaciones. Este enfoque basado en eventos, junto con el reporte por excepción—enviando datos solo cuando se desvía de las normas o en disparadores específicos—conserva ancho de banda y recursos, optimizando la transmisión de datos para aplicaciones IoT críticas.

El potente emparejamiento de reComputer R1000 y [N3uron](https://n3uron.com/) Duo facilita la gestión eficiente de plantas proporcionando capacidades robustas de conectividad y manipulación de datos. Esta Wiki enfatiza la importancia de Modbus TCP en entornos industriales, destacando la integración fluida de dispositivos MQTT para mejorar aún más la conectividad.

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

Recomendamos encarecidamente estudiar la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/es/recomputer_r1000_n3uron/). Proporciona información esencial para navegar por la interfaz web de N3uron, comprender conceptos como la interfaz web y el módulo Web Vision, captar el concepto de etiquetas y crear paneles básicos. Si aún no has explorado estos fundamentos, es recomendable hacerlo antes de continuar. Puedes acceder a la guía a través del enlace proporcionado.

### Configurar ajustes de Ethernet para Modbus TCP/IP

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

## Creación y Configuración del Módulo Modbus

Crear una Instancia de Módulo Dentro de la Interfaz WebUI de N3uron

- Paso 01: En el panel de Navegación, seleccione **Config**.
- Paso 02: En el panel Explorer, seleccione **Modules**.
- Paso 03: Haga clic en el menú Model y seleccione **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- Paso 04: La instancia puede recibir cualquier nombre, pero para el ejemplo, usaremos **ModbusClient**.
- Paso 05: Establezca la propiedad Module Type como **ModbusClient**. Deje el resto de las propiedades con sus valores predeterminados y haga clic en **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Creación y Configuración de Canal

- Paso 01: Bajo el Cliente Modbus creado y Model, seleccione **New Channel**. Asigne al canal el nombre **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- Paso 02: Ahora, vamos a comunicarnos con el PLC usando Modbus TCP. Por favor proporcione la **dirección IP** para el PLC y la **dirección del puerto**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
Si estás utilizando Modbus RTU, hay varias configuraciones a considerar. Para ello, necesitas proporcionar detalles como el puerto COM, la velocidad en baudios, etc. Para más información sobre la configuración de los protocolos Modbus RTU y TCP en N3uron, consulta la [guía](https://docs.n3uron.com/docs/modbus-client-configuration) proporcionada.
:::

- Paso 03: Agregar un dispositivo: Cada canal puede tener uno o más dispositivos. Establece un **nombre** para el dispositivo y procede con la configuración. En este caso, el nombre del dispositivo es **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- Paso 04: Hay algunas configuraciones que puedes ajustar a través de esta interfaz. Puedes encontrar más detalles en este enlace. Sin embargo, para este caso, las mantendremos como están.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuración de Etiquetas

- Paso 01: Ve a la **WebUI**, selecciona **Config**, y luego haz clic en **Tag**. En la sección Model, haz clic en el menú y elige **New Tag**. Nómbrala Q1. Normalmente Q se usa para indicar la bobina de salida.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/addtag.PNG" /></center>

- Paso 02: Luego necesitas hacer las siguientes configuraciones.
  - Source : Enabled/Yes
  - Module Type : ModbusClient
  - ModuleName: ModbusClient
  - Config: Device: Client/PLC
  - Modbus address: 008931
  - Data type: Boolean
y **Guardar**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
Se recomienda consultar la hoja de datos del PLC o del fabricante del dispositivo respecto a las direcciones Modbus. Allí encontrarás detalles sobre direcciones de entrada, salida y de retención. Según estas especificaciones, se deben hacer ajustes en la línea de dirección Modbus en la configuración de la etiqueta. Por ejemplo, si el fabricante indica la bobina de salida Q1 como 8193, la dirección debe configurarse como 008193. De manera similar, si la entrada de red se indica como 1 y es de tipo bobina, la dirección debe establecerse como 000001.
:::

- Paso 03: Simulación en tiempo real

Una vez conectado al sistema, puedes ver el estado en tiempo real de las bobinas de salida y las bobinas de entrada.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
La interacción con el PLC a través de la interfaz de N3uron requiere permisos de acceso apropiados, incluyendo capacidades tanto de lectura como de escritura.
:::

## Crear una Instancia del Módulo MQTT Dentro de la Interfaz WebUI de N3uron

- Paso 01: En el panel de Navegación, selecciona **Config**.
- Paso 02: En el panel del Explorador, selecciona **Modules**.
- Paso 03: Haz clic en el menú Model y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- Paso 04: La instancia puede recibir cualquier nombre, pero para el ejemplo, usaremos **MQTT**.
- Paso 05: Establece la propiedad Module Type como **MqttClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar el Módulo MQTT de N3uron

- Paso 01: En el panel del Explorador, selecciona la instancia MQTT que acabas de crear.
- Paso 02: Haz clic en el botón del menú Model y selecciona New Connection.
- Paso 03: Dale un nombre a la Nueva conexión. En este ejemplo, se ha nombrado **MqttClient**:

  - Destination broker : Custom
  - Authentication mode: Password
  - Username : Your Broker Username
  - Password: Your Broker Password
  - Protocol:MQTT
  - Broker URL:Broker ip
**Guarda** las configuraciones

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

- Paso 01: En el panel Model, haz clic derecho en la Conexión AWS, selecciona New Subscriber, y dale un nombre. En este ejemplo, simplemente usaremos Subscriber.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- Paso 02: Haz clic en él y añade un nombre en el campo Topic. En este ejemplo, hemos usado device/data.

:::note
Para pruebas y experiencia práctica, te hemos proporcionado un [código de Arduino](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) que puede ejecutarse en XIAO. Además, necesitarás ingresar tus propias credenciales en este código antes de cargarlo.
:::

- Paso 03: Establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:

  - Qos: Qos 0.
  - Encoding: UTF8
  - Compression: None
  - Serialization: JSON
  - Data parser/Type: MqttClient JSON
Y **Guárdalo**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
Aquí, utilizamos un analizador de datos configurado para el formato JSON de MQTTClient. El dispositivo XIAO publica datos al broker en este formato. Si tu dispositivo no publica datos en este formato específico, necesitarás identificar el formato que utiliza y crear un fragmento de código JavaScript personalizado para manejar los dispositivos en consecuencia. Para obtener más orientación, consulta las [directrices proporcionadas](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Crear una Etiqueta

- Paso 01: Dentro del panel Explorador, selecciona **Etiquetas**.
- Paso 02: En el menú Modelo, haz clic derecho en el icono de carpeta, selecciona **Nueva Etiqueta** y dale un nombre. En este ejemplo, usaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- Paso 03: En el panel de Configuración, establece las siguientes propiedades usando los valores mostrados a continuación, dejando el resto con sus valores predeterminados:

  - Tipo: Número.
  - Origen/Habilitado: Sí
  - Tipo de Módulo: MqttClient
  - Nombre del módulo: MQTT
  - Config/Suscriptor: MqttClient/Subscriber
Haz clic en **Guardar**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- Paso 04: Simulación en tiempo real
Una vez conectado al sistema, puedes ver el estado en tiempo real de la salida del Broker MQTT.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus : Publiquemos el Estado de la Fábrica con AWS

:::note
Hemos proporcionado instrucciones paso a paso sobre cómo conectar la [nube de AWS a tu dispositivo reComputer R1000](https://wiki.seeedstudio.com/es/recomputer_r1000_n3uron_aws/). Si eres nuevo en este wiki, consulta este enlace.
:::

- Paso 01: En el panel del Explorador, selecciona la instancia **MQTT** que acabas de crear.
- Paso 02: Haz clic en el botón del menú Modelo y selecciona **Nueva Conexión**.
- Paso 03: Dale un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- Paso 04: Configura las propiedades de la conexión:

  - A: Selecciona **Amazon Web Services** del menú desplegable **Broker de Destino**. El **modo de autenticación** será **Certificado**. También el **Id de Cliente** es **N3uron** en este ejemplo.
  - B: Carga el **Certificado, Clave privada y certificado CA** que descargaste y guardaste cuando creaste la Cosa en la Consola IoT de AWS.
  - C: En la consola IoT de AWS, en el menú de la izquierda, ve a **Configuración** y copia tu **Endpoint de Datos del Dispositivo**. Regresa a N3uron y pégalo en el campo **URL del Broker**.
  - D: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Guardar**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- Paso 05: Dentro del panel Modelo, haz clic derecho en la Conexión **MqttPublisher** que acabas de configurar, selecciona **Nuevo Publicador**, y dale un nombre. En este ejemplo, simplemente usaremos **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- Paso 06: Haz clic en él y agrega un nombre en el campo **Tema**. En este ejemplo, hemos usado **N3uron**.

- Paso 07: Haz clic en el botón **Filtro de Etiquetas**, selecciona **Nuevo Filtro de Etiquetas**, y cambia el nombre predeterminado. En este ejemplo hemos usado **TagFilter**. Deja Modo, Ruta y patrón Regex con sus valores predeterminados. Con esta configuración, cada etiqueta configurada en N3uron será publicada a nuestro Broker de AWS.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- Paso 08: Ve a la consola IoT de AWS y en el menú de la izquierda, selecciona **cliente de prueba MQTT**. Haz clic en la pestaña **Suscribirse a un tema**, ingresa **N3uron** en el filtro de Tema para suscribirte a todo, y haz clic en **Suscribirse**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awsend.PNG" /></center>

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

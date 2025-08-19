---
description: Aprende a integrar N3uron con MQTT y Modbus para una adquisición de datos fluida y la publicación en la nube de AWS. Esta guía cubre la instalación, configuración y el preprocesamiento de datos para optimizar tus proyectos de automatización industrial  
title: Publicando Datos Industriales en la Nube de AWS Usando N3uron, MQTT y Modbus  
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
  date: 02/17/2025 
  author: Erick González
---

## Introducción 

En la automatización industrial, Modbus destaca como uno de los protocolos más comunes. MQTT se ha consolidado como el protocolo líder para IoT en la automatización industrial debido a sus múltiples características. Su diseño ligero, eficiencia, escalabilidad y soporte para mensajes asíncronos son notables. En MQTT, los dispositivos se comunican solo cuando ocurre un evento reportable, en contraste con las comprobaciones de actualización constantes. Este enfoque basado en eventos, junto con la notificación por excepción —enviando datos solo cuando se desvían de las normas o ante disparadores específicos— conserva ancho de banda y recursos, optimizando la transmisión de datos para aplicaciones IoT críticas.

La potente combinación del reComputer R1000 y el [N3uron](https://n3uron.com/) Duo facilita una gestión eficiente de la planta al proporcionar una conectividad robusta y capacidades de manipulación de datos. Este Wiki enfatiza la importancia de Modbus TCP en entornos industriales, resaltando la integración fluida de dispositivos MQTT para mejorar aún más la conectividad.

## Requisitos Previos

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

Recomendamos encarecidamente estudiar la guía de [Introducción a N3uron](https://wiki.seeedstudio.com/recomputer_r1000_n3uron/). Esta guía ofrece conocimientos esenciales sobre cómo navegar por la interfaz web de N3uron, entender conceptos como la Web UI y el módulo Web Vision, comprender el concepto de etiquetas y crear dashboards básicos. Si aún no has explorado estos fundamentos, es aconsejable hacerlo antes de continuar. Puedes acceder a la guía mediante el enlace proporcionado.

### Configurar los ajustes de Ethernet para Modbus TCP/IP

Dado que el dominio IP de tu PLC/Dispositivo es diferente de tu configuración inalámbrica, es posible que tengas que cambiar la configuración de IP manualmente. Para ello,

- **Paso 01**: Ejecuta el siguiente comando si estás utilizando **Bullseye**:

    sudo nano /etc/dhcpcd.conf

- **Paso 02**: Luego, configura los ajustes del puerto Ethernet según el dominio de red de tu PLC/Dispositivo y establece prioridades utilizando el comando **metric**. La métrica más baja tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **Paso 01**: Si estás utilizando **Bookworm OS**, puedes usar la interfaz gráfica para hacer clic en el icono de red. En las opciones avanzadas, elige "Editar conexiones."

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **Paso 02**: Selecciona "Wired Connection 2" (ETH 1) y añade la dirección, la máscara de subred y la puerta de enlace en los ajustes de IPv4.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Creación y Configuración del Módulo Modbus

Crea una instancia de módulo dentro de la interfaz WebUI de N3uron

- **Paso 01**: En el panel de navegación, selecciona **Config**.
- **Paso 02**: En el panel del Explorador, selecciona **Modules**.
- **Paso 03**: Haz clic en el menú Modelo y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- **Paso 04**: La instancia puede tener cualquier nombre, pero en este ejemplo usaremos **ModbusClient**.
- **Paso 05**: Establece la propiedad Tipo de Módulo en **ModbusClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Creación y Configuración del Canal

- **Paso 01**: Bajo el Modbus Client y Modelo creado, selecciona **New Channel**. Asigna al canal el nombre **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- **Paso 02**: Ahora, vamos a comunicarnos con el PLC utilizando Modbus TCP. Por favor, proporciona la **dirección IP** del PLC y la **dirección del puerto**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note  
Si estás utilizando Modbus RTU, existen diversas configuraciones a considerar. Para ello, necesitas proporcionar detalles como el puerto COM, la velocidad en baudios, etc. Para obtener más información sobre la configuración de los protocolos Modbus RTU y TCP en N3uron, consulta la [guía](https://docs.n3uron.com/docs/modbus-client-configuration) proporcionada.  
:::

- **Paso 03**: Añade un dispositivo: Cada canal puede tener uno o más dispositivos. Asigna un **nombre** al dispositivo y continúa con la configuración. En este caso, el nombre del dispositivo es **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- **Paso 04**: Hay algunos ajustes que puedes modificar a través de esta interfaz. Puedes encontrar más detalles en este enlace. Sin embargo, en este caso, los dejaremos tal como están.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuración de Etiquetas

- **Paso 01**: Ve a la **WebUI**, selecciona **Config**, y luego haz clic en **Tag**. En la sección Modelo, haz clic en el menú y elige **New Tag**. Nómbrala Q1. Normalmente, Q se utiliza para indicar la bobina de salida.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/addtag.PNG" /></center>

- **Paso 02**: Luego, necesitas realizar las siguientes configuraciones:  
    - Source : Enabled/Yes  
    - Module Type : ModbusClient  
    - ModuleName: ModbusClient  
    - Config: Device: Client/PLC  
    - Modbus address: 008931  
    - Data type: Boolean  
y haz **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note  
Es recomendable consultar la hoja de datos del fabricante del PLC o dispositivo en lo que respecta a las direcciones Modbus. Allí encontrarás detalles sobre direcciones de entrada, salida y de retención. De acuerdo con estas especificaciones, se deben realizar los ajustes correspondientes en la línea de dirección Modbus en la configuración de la etiqueta. Por ejemplo, si el fabricante designa la bobina de salida Q1 como 8193, la dirección debería configurarse como 008193. De manera similar, si la entrada de red se denota como 1 y es de tipo bobina, la dirección debería establecerse como 000001.  
:::

- **Paso 03**: Simulación en tiempo real

Una vez conectado al sistema, puedes ver el estado en tiempo real de las bobinas de salida y de entrada.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note  
La interacción con el PLC a través de la interfaz N3uron requiere permisos de acceso adecuados, incluyendo capacidades de lectura y escritura.  
:::

## Crear una Instancia del Módulo MQTT dentro de la Interfaz WebUI de N3uron

- **Paso 01**: En el panel de navegación, selecciona **Config**.
- **Paso 02**: En el panel del Explorador, selecciona **Modules**.
- **Paso 03**: Haz clic en el menú Modelo y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- **Paso 04**: La instancia puede tener cualquier nombre, pero en este ejemplo usaremos **MQTT**.
- **Paso 05**: Establece la propiedad Tipo de Módulo en **MqttClient**. Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar el Módulo MQTT de N3uron

- **Paso 01**: En el panel del Explorador, selecciona la instancia MQTT que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú Modelo y selecciona **New Connection**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttClient**:  
    - Destination broker : Custom  
    - Authentication mode: Password  
    - Username : Your Broker Username  
    - Password: Your Broker Password  
    - Protocol: MQTT  
    - Broker URL: Broker ip  
Haz **Save** en las configuraciones.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Suscribirse a un Tema Usando el Módulo MQTT de N3uron

- **Paso 01**: En el panel Modelo, haz clic derecho sobre la conexión AWS, selecciona **New Subscriber** y asigna un nombre. En este ejemplo, utilizaremos simplemente **Subscriber**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- **Paso 02**: Haz clic en él y añade un nombre en el campo **Topic**. En este ejemplo, hemos usado **device/data**.

:::note  
Para pruebas y experiencia práctica, te hemos proporcionado un [código Arduino](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) que se puede ejecutar en XIAO. Además, necesitarás ingresar tus propias credenciales en este código antes de subirlo.  
:::

- **Paso 03**: Configura las siguientes propiedades utilizando los valores que se muestran a continuación, dejando el resto con sus valores predeterminados:  
    - Qos: Qos 0.  
    - Encoding: UTF8  
    - Compression: None  
    - Serialization: JSON  
    - Data parser/Type: MqttClient JSON  
Y haz **Save**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

## Crear una Etiqueta

- **Paso 01**: Dentro del panel del Explorador, selecciona **Tags**.
- **Paso 02**: En el menú Modelo, haz clic derecho en el icono de carpeta, selecciona **New Tag** y asigna un nombre. En este ejemplo, utilizaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- **Paso 03**: En el panel de Configuración, establece las siguientes propiedades utilizando los valores que se muestran a continuación, dejando el resto con sus valores predeterminados:  
    - Type: Number.  
    - Source/Enabled: Yes  
    - Module Type: MqttClient  
    - Module name: MQTT  
    - Config/Subscriber: MqttClient/Subscriber  
Haz clic en **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- **Paso 04**: Simulación en tiempo real

Una vez conectado al sistema, puedes ver el estado en tiempo real de la salida desde el Broker MQTT.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus: Publica el Estado de la Fábrica con AWS 

:::note 
Hemos proporcionado instrucciones paso a paso sobre cómo conectar la [nube de AWS a tu dispositivo reComputer R1000](https://wiki.seeedstudio.com/recomputer_r1000_n3uron_aws/). Si eres nuevo en este wiki, por favor consulta este enlace.  
:::

- **Paso 01**: En el panel del Explorador, selecciona la instancia **MQTT** que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú Modelo y selecciona **New Connection**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se ha nombrado **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- **Paso 04**: Configura las propiedades de la conexión:  
    - A: Selecciona **Amazon Web Services** del menú desplegable **Destination Broker**. El **Authentication mode** será **Certificate**. Además, en este ejemplo, el **Client Id** es **N3uron**.  
    - B: Carga el **Certificate, Private key and CA certificate** que descargaste y guardaste cuando creaste el Thing en el AWS IoT Console.  
    - C: En el AWS IoT Console, en el menú de la izquierda, ve a **Settings** y copia tu **Device Data Endpoint**. Regresa a N3uron y pégalo en el campo **Broker URL**.  
    - D: Deja el resto de las propiedades con sus valores predeterminados y haz clic en **Save**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- **Paso 05**: Dentro del panel Modelo, haz clic derecho sobre la conexión **MqttPublisher** que acabas de configurar, selecciona **New Publisher** y asigna un nombre. En este ejemplo, utilizaremos simplemente **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- **Paso 06**: Haz clic en él y añade un nombre en el campo **Topic**. En este ejemplo, hemos usado **N3uron**.

- **Paso 07**: Haz clic en el botón **Tag Filter**, selecciona **New Tag Filter** y cambia el nombre predeterminado. En este ejemplo, hemos usado **TagFilter**. Deja el Modo, la Ruta y el patrón Regex con sus valores predeterminados. Con esta configuración, cada etiqueta configurada en N3uron se publicará en nuestro Broker de AWS.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- **Paso 08**: Ve al AWS IoT Console y, en el menú de la izquierda, selecciona **MQTT test client**. Haz clic en la pestaña **Subscribe to a topic**, introduce **N3uron** en el filtro de tema para suscribirte a todo, y haz clic en **Subscribe**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awsend.PNG" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
--------------------------------------------------

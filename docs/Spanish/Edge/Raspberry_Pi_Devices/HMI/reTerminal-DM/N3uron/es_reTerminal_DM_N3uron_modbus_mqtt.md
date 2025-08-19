---
description: Conecta N3uron con dispositivos compatibles con MQTT y Modbus
title: Conecta N3uron con dispositivos compatibles con MQTT y Modbus
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
  date: 04/06/2025
  author: Erick González
---

## Introducción 

En la automatización industrial, Modbus destaca como uno de los protocolos más comunes. MQTT se ha convertido en el protocolo líder para IoT en la automatización industrial por muchas de sus características. Su diseño liviano, eficiencia, escalabilidad y soporte para mensajería asíncrona son muy notables. En MQTT, los dispositivos se comunican únicamente cuando hay un evento reportable, en contraste con las comprobaciones constantes de actualización. Este enfoque basado en eventos, junto con el reporte por excepción —en el que solo se envían datos cuando éstos se desvían de lo normal o se activan disparadores específicos—, ahorra ancho de banda y recursos, optimizando la transmisión de datos para aplicaciones críticas en IoT.

La potente combinación del reTerminal DM y [N3uron](https://n3uron.com/) Duo facilita la gestión eficiente de plantas industriales al proporcionar una conectividad robusta y capacidades avanzadas de manipulación de datos. Este Wiki enfatiza la importancia de Modbus TCP en entornos industriales, destacando la integración sin fisuras de dispositivos MQTT para mejorar aún más la conectividad.

## Requisitos Previos

### Hardware 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div style={{textAlign:'center'}}>
          <img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/>
        </div>
      </td>
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

Recomendamos encarecidamente estudiar la [Guía de Primeros Pasos con N3uron](https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/). Esta guía proporciona conocimientos esenciales sobre cómo navegar en la interfaz web de N3uron, comprender conceptos como la Web UI y el módulo Web Vision, entender el concepto de tags y crear dashboards básicos. Si aún no has explorado estos fundamentos, es aconsejable hacerlo antes de continuar.

### Configurar la configuración de Ethernet

Dado que el dominio IP de tu PLC es diferente al de tu red inalámbrica, puede que debas cambiar manualmente la configuración de IP. Para ello:

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura la configuración del puerto Ethernet de acuerdo con el dominio de la red de tu PLC y establece prioridades utilizando el comando `metric`. El valor de métrica más bajo tiene la mayor prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Creación y Configuración del Módulo Modbus

**Crear una instancia de módulo en la Interfaz WebUI de N3uron**

- **Paso 01**: En el panel de **Navigation**, selecciona **Config**.
- **Paso 02**: En el panel de **Explorer**, selecciona **Modules**.
- **Paso 03**: Haz clic en el menú **Model** y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- **Paso 04**: La instancia puede recibir cualquier nombre; para este ejemplo, usaremos **ModbusClient**.
- **Paso 05**: Establece la propiedad **Module Type** en **ModbusClient**. Deja el resto de las propiedades con sus valores por defecto y haz clic en **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Creación y Configuración del Canal

- **Paso 01**: Bajo el módulo Modbus Client que acabas de crear, selecciona **New Channel** y nómbralo **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- **Paso 02**: Ahora, estableceremos la comunicación con el PLC mediante Modbus TCP. Proporciona la **dirección IP** del PLC y el **número de puerto**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
Si utilizas Modbus RTU, deberás configurar otros parámetros como el puerto COM, la velocidad en baudios, etc. Para más información sobre la configuración de los protocolos Modbus RTU y TCP en N3uron, consulta la [guía de configuración del cliente Modbus](https://docs.n3uron.com/docs/modbus-client-configuration).
:::

- **Paso 03**: Añade un dispositivo. Cada canal puede tener uno o más dispositivos. Asigna un **nombre** al dispositivo; en este caso, lo llamaremos **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- **Paso 04**: Se ofrecen algunas configuraciones adicionales. Mantén los valores predeterminados a menos que requieras realizar algún ajuste específico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuración de Tags

- **Paso 01**: En la **WebUI**, selecciona **Config** y luego haz clic en **Tag**. En el panel de Model, haz clic en el menú y selecciona **New Tag**. Nómbralo **Q1** (normalmente se usa “Q” para indicar la bobina de salida).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/addtag.PNG" /></center>

- **Paso 02**: Realiza las siguientes configuraciones:
    - **Source**: Enabled/Yes  
    - **Module Type**: ModbusClient  
    - **ModuleName**: ModbusClient  
    - **Config**: Device: Client/PLC  
    - **Modbus address**: 008931  
    - **Data type**: Boolean  
Y haz **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
Es aconsejable consultar la hoja de datos del fabricante del PLC o dispositivo para obtener información sobre las direcciones Modbus, donde se especifican las direcciones de entradas, salidas y registros. Por ejemplo, si el fabricante indica la bobina de salida Q1 como 8193, la dirección se configurará como 008193. De forma similar, si la entrada de red se denota como 1 y es de tipo bobina, la dirección se establecerá como 000001.
:::

- **Paso 03**: Simulación en tiempo real  
Una vez conectado al sistema, podrás visualizar el estado en tiempo real de las bobinas de salida y las entradas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
La interacción con el PLC a través de la interfaz N3uron requiere permisos de acceso adecuados, tanto de lectura como de escritura.
:::

## Crear una instancia del Módulo MQTT en la Interfaz WebUI de N3uron

- **Paso 01**: En el panel de **Navigation**, selecciona **Config**.
- **Paso 02**: En el panel de **Explorer**, selecciona **Modules**.
- **Paso 03**: Haz clic en el menú **Model** y selecciona **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- **Paso 04**: La instancia puede recibir cualquier nombre; para este ejemplo, usaremos **MQTT**.
- **Paso 05**: Establece la propiedad **Module Type** en **MqttClient**. Deja el resto de las propiedades por defecto y haz clic en **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar el Módulo MQTT de N3uron

- **Paso 01**: En el panel **Explorer**, selecciona la instancia MQTT que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú **Model** y selecciona **New Connection**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se llamará **MqttClient**:
    - **Destination broker**: Custom  
    - **Authentication mode**: Password  
    - **Username**: Tu nombre de usuario del Broker  
    - **Password**: Tu contraseña del Broker  
    - **Protocol**: MQTT  
    - **Broker URL**: (IP del Broker)  
Guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Suscribirse a un Tema usando el Módulo MQTT de N3uron

- **Paso 01**: En el panel de **Model**, haz clic derecho sobre la conexión (en este ejemplo, la conexión AWS), selecciona **New Subscriber** y asígnale un nombre. En este ejemplo, usaremos **Subscriber**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- **Paso 02**: Haz clic en el suscriptor y añade un nombre en el campo **Topic**. En este ejemplo, usamos **device/data**.

:::note
Para pruebas y experiencia práctica, se te ha proporcionado un [código Arduino](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/MQTT_N3uron.ino) que puedes ejecutar en XIAO. Además, deberás ingresar tus credenciales en el código antes de cargarlo.
:::

- **Paso 03**: Configura las siguientes propiedades utilizando los valores indicados, dejando el resto en sus valores por defecto:
    - **Qos**: Qos 0  
    - **Encoding**: UTF8  
    - **Compression**: None  
    - **Serialization**: JSON  
    - **Data parser/Type**: MqttClient JSON  
Y haz **Save**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
Aquí se utiliza un data parser configurado para el formato MQTTClient JSON, ya que el dispositivo XIAO publica datos en este formato. Si tu dispositivo publica en otro formato, deberás identificarlo y crear un snippet de código JavaScript personalizado para manejarlo. Para más orientación, consulta las [directrices](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Crear un Tag para MQTT

- **Paso 01**: En el panel **Explorer**, selecciona **Tags**.
- **Paso 02**: En el menú **Model**, haz clic derecho sobre el ícono de carpeta, selecciona **New Tag** y asígnale un nombre. En este ejemplo, lo llamaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- **Paso 03**: En el panel de Configuración, establece las siguientes propiedades utilizando los valores indicados y deja el resto en sus valores predeterminados:
    - **Type**: Number  
    - **Source/Enabled**: Yes  
    - **Module Type**: MqttClient  
    - **Module name**: MQTT  
    - **Config/Subscriber**: MqttClient/Subscriber  
Haz clic en **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- **Paso 04**: Simulación en tiempo real  
Una vez conectado al sistema, podrás ver en tiempo real los datos provenientes del MQTT Broker.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus: Publicar el estado de la fábrica en AWS

:::note
Se han proporcionado instrucciones paso a paso sobre cómo conectar [la nube de AWS a tu dispositivo reTerminal DM](https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/). Si eres nuevo en este Wiki, consulta ese enlace.
:::

- **Paso 01**: En el panel **Explorer**, selecciona la instancia **MQTT** que acabas de crear.
- **Paso 02**: Haz clic en el botón del menú **Model** y selecciona **New Connection**.
- **Paso 03**: Asigna un nombre a la nueva conexión. En este ejemplo, se llamará **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- **Paso 04**: Configura las propiedades de la conexión:
    - A: Selecciona **Amazon Web Services** en el menú desplegable **Destination Broker**. El **Authentication mode** será **Certificate**. Además, en este ejemplo, el **Client Id** es **N3uron**.
    - B: Carga el **Certificado, clave privada y certificado CA** que descargaste y guardaste al crear la Thing en la Consola AWS IoT.
    - C: En la Consola AWS IoT, en el menú de la izquierda, ve a **Settings** y copia tu **Device Data Endpoint**. Regresa a N3uron y pégalo en el campo **Broker URL**.
    - D: Deja el resto de las propiedades por defecto y haz clic en **Save**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- **Paso 05**: En el panel **Model**, haz clic derecho sobre la conexión **MqttPublisher** y selecciona **New Publisher**. Asígnale un nombre; en este ejemplo, usaremos **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- **Paso 06**: Haz clic en el publicador y agrega un nombre en el campo **Topic**. En este ejemplo, se utiliza **N3uron**.

- **Paso 07**: Haz clic en el botón **Tag Filter**, selecciona **New Tag Filter** y cambia el nombre predeterminado. En este caso, lo llamamos **TagFilter**. Deja por defecto los valores de Mode, Path y Regex pattern. Con esta configuración, cada tag configurado en N3uron se publicará en nuestro Broker AWS.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- **Paso 08**: Ve a la Consola AWS IoT, en el menú de la izquierda selecciona **MQTT test client**. Haz clic en la pestaña **Subscribe to a topic**, ingresa **N3uron** en el filtro de tema para suscribirte a todo y haz clic en **Subscribe**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awsend.PNG" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte a través de diversos canales y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para satisfacer distintas preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

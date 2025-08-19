---
description: reTerminal DM MQTT con Node-RED
title: reTerminal DM MQTT con Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Node-Red-mqtt
last_update:
  date: 04/06/2025
  author: Erick González
---
# reTerminal DM MQTT con Node-RED

## Información breve acerca de MQTT

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTT y Node-RED

MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería ligero diseñado para posibilitar la comunicación entre dispositivos en un contexto de máquina a máquina (M2M) o Internet de las Cosas (IoT). MQTT fue desarrollado por IBM en 1999 y posteriormente se convirtió en un estándar abierto. Está concebido para ser una forma simple y eficiente de enviar pequeños paquetes de datos entre dispositivos. Utiliza un patrón de mensajería de publicar/suscribir, en el cual los mensajes se publican en un broker y luego se entregan a todos los suscriptores que se han suscrito a un tema en particular. Esto permite que los dispositivos se comuniquen sin necesidad de conocer las direcciones IP u otros detalles de la red de los demás.

MQTT es especialmente útil en situaciones donde los dispositivos se conectan a través de redes poco fiables, como redes de bajo ancho de banda o alta latencia, ya que utiliza una cantidad mínima de ancho de banda y tiene un bajo sobrecosto. Además, soporta niveles de Calidad de Servicio (QoS), lo que permite diferentes niveles de fiabilidad en la entrega de mensajes. MQTT se ha convertido en una opción popular para aplicaciones IoT y M2M debido a su simplicidad y eficiencia, y es compatible con una amplia gama de dispositivos y plataformas.

Un broker MQTT es un servidor que actúa como punto central para el intercambio de mensajes MQTT entre dispositivos en una red IoT o M2M basada en MQTT. Este recibe los mensajes publicados por los dispositivos y los distribuye a aquellos que se han suscrito a los mismos temas.

MQTT es uno de los muchos protocolos que Node-RED soporta, lo que lo convierte en una excelente herramienta para construir aplicaciones IoT basadas en MQTT. Node-RED proporciona nodos incorporados para MQTT, lo que permite a los usuarios conectarse a un broker MQTT y publicar o suscribirse a mensajes. Estos nodos se pueden configurar fácilmente mediante la interfaz de Node-RED, permitiendo especificar la dirección del broker, el puerto, el ID del cliente, el nombre de usuario y la contraseña. Además, los nodos soportan los niveles de QoS de MQTT, los cuales se pueden ajustar para asegurar la fiabilidad en la entrega de mensajes. En Node-RED, los usuarios pueden crear flujos que manejen los mensajes MQTT entrantes y realicen diversas acciones en función del contenido del mensaje. Por ejemplo, un flujo podría suscribirse al tema MQTT de un sensor de temperatura, analizar el valor de la temperatura y enviar una alerta si esta supera cierto umbral. Node-RED también ofrece varios nodos para integrarse con otros servicios y dispositivos IoT, como endpoints HTTP, bases de datos y servicios en la nube. Esto permite a los usuarios construir aplicaciones IoT complejas que se comuniquen con una amplia variedad de dispositivos y servicios.

En general, Node-RED proporciona una forma sencilla e intuitiva de construir aplicaciones IoT basadas en MQTT, gracias a sus nodos incorporados para MQTT y su soporte para otros servicios y dispositivos IoT.

# Empezando con el nodo MQTT en reTerminal DM

Dado que el nodo MQTT viene integrado en Node-RED, puedes utilizarlo sin pasos adicionales de instalación de nodos. Sin embargo, necesitarás contar con un broker MQTT para publicar o suscribirte a un tema. Por ello, los siguientes pasos incluyen cómo instalar un broker MQTT local en reTerminal DM y utilizar dicho broker para el envío y recepción de mensajes.

## Requisitos Previos

### Hardware

* 1 x reTerminal DM  
* 1 x Computadora Host

:::note
La computadora host debe tener conexión a Internet para que el reTerminal DM pueda realizar los pasos de configuración siguientes.
:::

### Software 

* Broker MQTT: [Eclipse Mosquitto](https://mosquitto.org/)

## Instalar el Broker MQTT [Eclipse Mosquitto](https://mosquitto.org/)

En esta sección instalaremos [Eclipse Mosquitto](https://mosquitto.org/), un broker MQTT de código abierto ampliamente utilizado en aplicaciones IoT y M2M. Desarrollado por la Eclipse Foundation, Mosquitto está disponible bajo la Eclipse Public License. Está diseñado para ser ligero y eficiente, lo que lo hace adecuado para dispositivos de baja potencia y entornos con ancho de banda limitado. Soporta el protocolo MQTT 5.0, así como versiones anteriores como MQTT 3.1.1.

Primero, refresca tus conocimientos sobre cómo acceder al reTerminal DM a través de SSH; consulta los pasos [aquí](/reterminal-dm-flash-OS#install-drivers).

Una vez que hayas accedido al reTerminal DM mediante SSH, procede con los siguientes pasos:

**PASO 1:** Actualiza la lista de paquetes ejecutando el siguiente comando:

```sh
sudo apt-get update
```

**PASO 2:** Instala Mosquitto ejecutando el siguiente comando:

```sh
sudo apt-get install mosquitto
```

**PASO 3:** Instala las herramientas cliente de Mosquitto ejecutando el siguiente comando:

```sh
sudo apt-get install mosquitto-clients
```

**PASO 4:** Una vez completada la instalación, puedes iniciar el servicio de Mosquitto ejecutando el siguiente comando:

```sh
sudo systemctl start mosquitto
```

**PASO 5:** Para verificar si Mosquitto se está ejecutando, puedes ejecutar el siguiente comando:

```sh
sudo systemctl status mosquitto
```

Por defecto, Mosquitto está configurado para escuchar en el `puerto 1883` para el tráfico MQTT. Puedes probar la instalación suscribiéndote a un tema usando las herramientas cliente de Mosquitto, de la siguiente manera:

Abre una nueva sesión SSH y ejecuta el siguiente comando para suscribirte a un tema:

```sh
mosquitto_sub -h localhost -t test
```

En otra sesión SSH, ejecuta el siguiente comando para publicar un mensaje en el mismo tema:

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

Deberías ver el mensaje "Hello, world!" aparecer en la primera ventana SSH donde ejecutaste el comando `mosquitto_sub`.

¡Y eso es todo! Has instalado correctamente Mosquitto en tu reTerminal DM y lo has probado utilizando las herramientas cliente de Mosquitto. Ahora, entremos en la forma de comunicarse vía MQTT con Node-RED.


## Nodo MQTT con reTerminal DM

En Node-RED, existen los nodos **mqtt in** y **mqtt out** que representan, respectivamente, la suscripción y la publicación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### Editar los Flujos

:::note
Los siguientes pasos son solo para fines de demostración, en los que usaremos **mqtt in** para suscribir el mensaje publicado desde el nodo **mqtt out** al mismo tema.
:::

**PASO 1:** Arrastra el nodo `mqtt in` al panel del Editor de Flujos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

**PASO 2:** Configura el nodo `mqtt in`.

- **PASO 2-1:** Haz doble clic en el nodo `mqtt in` para abrir su panel de edición.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

- **PASO 2-2:** Haz clic en el icono de **lápiz** para la opción de configuración del servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

Una vez que hagas clic en el icono de lápiz deberías ver el panel de configuración "Add new mqtt-broker config node".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

- **PASO 2-3:** En la pestaña "Connection", configura los siguientes campos según corresponda.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note
Por ahora puedes dejar las pestañas "Security" y "Messages" sin cambios.
:::

- **PASO 2-4:** Configura el tema de suscripción, para ello usamos `test-mqtt` y deja el resto en los valores predeterminados; luego haz clic en el botón **Done**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

- **PASO 2-5:** Los siguientes pasos introducen el nodo `debug`, el cual se utiliza para visualizar y depurar la salida del tema suscrito desde el nodo `mqtt in`, como se muestra en la imagen a continuación.

  - **PASO 2-5-1:** Arrastra un nodo `debug` al panel del Editor de Flujos.
  - **PASO 2-5-2:** Conéctalo al nodo `mqtt in`.
  - **PASO 2-5-3:** Haz clic en el icono del "pequeño bicho" en el panel de Opciones y Configuración para abrir la consola de Debug.
  - **PASO 2-5-4:** Haz clic en el botón **Deploy** para desplegar el flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note
Dado que aún no hemos configurado un publicador de temas MQTT, no se mostrará ningún mensaje en la consola de Debug.
:::

**PASO 3:** Configura el nodo `mqtt out`.

- **PASO 3-1:** Haz doble clic en el nodo `mqtt out` para abrir su panel de edición.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

- **PASO 3-1:** Arrastra un nodo `mqtt out` al panel del Editor de Flujos, como se muestra en la imagen.

  - **PASO 3-1-1:** Selecciona el mismo servidor configurado en el **PASO 2-3**, que es `localhost:1883`.
  - **PASO 3-1-2:** Configura el mismo nombre de tema que en el **PASO 2-4**, es decir, `test-mqtt`.
  - **PASO 3-1-3:** De igual forma, el QoS debe estar configurado a `2` para alinearse con la configuración del nodo `mqtt in`.
  - **PASO 3-1-4:** Haz clic en **Done** para completar la configuración.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

**PASO 4:** Configura el nodo `inject`.

- **PASO 4-1:** Arrastra un nodo `inject` al panel del Editor de Flujos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

- **PASO 4-2:** Haz doble clic en el nodo `inject` para abrir su panel de edición; verás la configuración predeterminada del nodo `inject`.
  - **PASO 4-2-1:** Haz clic en la "x" junto a la línea `msg.topic` para eliminarla.
  - **PASO 4-2-2:** Haz clic en la opción `timestamp` para abrir un desplegable en la línea `msg.payload`.
  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

  - **PASO 4-2-3:** Selecciona la opción `string` en el desplegable.
  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

  - **PASO 4-2-4:** En el recuadro del mensaje, ingresa `this is the message` como el mensaje que se enviará al tema `test-mqtt`, luego haz clic en **Done**.
  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

- **PASO 4-2-5:** Conecta el nodo `inject` al nodo `mqtt out` y haz clic en **Deploy**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### Resultado Final

¡Felicidades! Has experimentado y aprendido a utilizar el protocolo MQTT con reTerminal DM y Node-RED. Tu resultado final deberá ser similar a la imagen que se muestra a continuación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

Puedes copiar el siguiente código JSON para importar los nodos:

```json
[
    {
        "id": "8d317d539464f080",
        "type": "tab",
        "label": "MQTT",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "128fa85f993944d6",
        "type": "mqtt in",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b6a7c986cb61ea54",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 300,
        "y": 220,
        "wires": [
            [
                "a022e0bf3404fdd9"
            ]
        ]
    },
    {
        "id": "a022e0bf3404fdd9",
        "type": "debug",
        "z": "8d317d539464f080",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "9d0098383c96ee8b",
        "type": "mqtt out",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "b6a7c986cb61ea54",
        "x": 520,
        "y": 320,
        "wires": []
    },
    {
        "id": "3c967b7d5cc112fc",
        "type": "inject",
        "z": "8d317d539464f080",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "this is the message",
        "payloadType": "str",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "9d0098383c96ee8b"
            ]
        ]
    },
    {
        "id": "b6a7c986cb61ea54",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    }
]

``` 

# Explora más nodos para reTerminal DM con node-RED

* [reTerminal DM Puerto RS485 con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM CAN BUS con Node-RED](/es/reTerminal-DM-Node-Red-canbus)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diversos canales y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varias vías de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

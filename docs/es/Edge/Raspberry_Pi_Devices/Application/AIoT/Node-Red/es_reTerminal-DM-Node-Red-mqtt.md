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
  date: 04/27/2023
  author: Peter Pan
---
# reTerminal DM MQTT con Node-RED

## Información breve sobre MQTT

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTT y Node-RED

MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería ligero que está diseñado para permitir la comunicación entre dispositivos en un contexto de máquina a máquina (M2M) o Internet de las Cosas (IoT). MQTT fue desarrollado por IBM en 1999 y posteriormente se convirtió en un estándar abierto. MQTT está diseñado para ser una forma simple y eficiente de enviar pequeños paquetes de datos entre dispositivos. Utiliza un patrón de mensajería de publicación/suscripción donde los mensajes se publican en un broker y luego se entregan a todos los suscriptores que se han suscrito a un tema particular. Esto permite que los dispositivos se comuniquen entre sí sin tener que conocer las direcciones IP de los demás u otros detalles de red. MQTT es particularmente útil en situaciones donde los dispositivos están conectados a través de redes poco confiables, como redes de bajo ancho de banda o alta latencia, porque utiliza una pequeña cantidad de ancho de banda y tiene una sobrecarga baja. También admite niveles de Calidad de Servicio (QoS), lo que permite diferentes niveles de confiabilidad en la entrega de mensajes. MQTT se ha convertido en una opción popular para aplicaciones IoT y M2M debido a su simplicidad y eficiencia, y es compatible con una amplia gama de dispositivos y plataformas.

Un broker MQTT es un servidor que actúa como punto central para el intercambio de mensajes MQTT entre dispositivos en una red IoT o M2M basada en MQTT. Recibe mensajes publicados por dispositivos y los distribuye a otros dispositivos que se han suscrito a los mismos temas.

MQTT es uno de los muchos protocolos que Node-RED admite, lo que lo convierte en una excelente herramienta para construir aplicaciones IoT basadas en MQTT. Node-RED proporciona nodos integrados para MQTT, lo que permite a los usuarios conectarse a un broker MQTT y publicar o suscribirse a mensajes. Los nodos MQTT se pueden configurar fácilmente usando la interfaz de Node-RED, y los usuarios pueden especificar la dirección del broker, puerto, ID del cliente, nombre de usuario y contraseña. Los nodos también admiten niveles QoS de MQTT, que se pueden configurar para asegurar una entrega confiable de mensajes. En Node-RED, los usuarios pueden crear flujos que manejen mensajes MQTT entrantes y realicen varias acciones basadas en la carga útil del mensaje. Por ejemplo, un flujo podría suscribirse al tema MQTT de un sensor de temperatura, analizar el valor de temperatura y luego enviar una alerta si la temperatura excede un cierto umbral. Node-RED también proporciona varios nodos para integrar con otros servicios y dispositivos IoT, como endpoints HTTP, bases de datos y servicios en la nube. Esto permite a los usuarios construir fácilmente aplicaciones IoT complejas que pueden comunicarse con una amplia gama de dispositivos y servicios.

En general, Node-RED proporciona una forma simple e intuitiva de construir aplicaciones IoT basadas en MQTT, gracias a sus nodos MQTT integrados y soporte para otros servicios y dispositivos IoT.

# Comenzando con el nodo MQTT en reTerminal DM

Dado que el nodo MQTT está integrado con Node-RED, puedes usar el nodo MQTT sin ningún paso adicional para instalar nodos. Sin embargo, necesitarás tener un broker mqtt para publicar o suscribirte a mensajes en un tema. Por lo tanto, los siguientes pasos incluirán cómo instalar un Broker MQTT local en reTerminal DM y luego utilizar el Broker MQTT para enviar y recibir mensajes.

## prerequisito

### Hardware

- 1 x reTerminal DM
- 1 x Computadora Host

:::note
El ordenador host debe poder tener conexión a Internet con el reTerminal DM para realizar los siguientes pasos de configuración.
:::

### Software

- Broker MQTT [Eclipse Mosquitto](https://mosquitto.org/)

## Instalar Broker MQTT [Eclipse Mosquitto](https://mosquitto.org/)

En esta sección instalaremos [Eclipse Mosquitto](https://mosquitto.org/), que es un broker MQTT de código abierto ampliamente utilizado en aplicaciones IoT y M2M. Está desarrollado por la Eclipse Foundation y está disponible bajo la Licencia Pública de Eclipse. Mosquitto está diseñado para ser ligero y eficiente, lo que lo hace muy adecuado para su uso en dispositivos de bajo consumo y en entornos con ancho de banda de red limitado. Soporta el protocolo MQTT 5.0 más reciente, así como versiones anteriores como MQTT 3.1.1.

En primer lugar, por favor procede a refrescar tu conocimiento sobre el acceso a reTerminal DM vía SSH, puedes consultar los pasos [aquí](/es/reterminal-dm-flash-OS#install-drivers)

Una vez que hayas accedido al reTerminal DM con SSH puedes proceder con los pasos a continuación:

PASO 1: Actualiza la lista de paquetes ejecutando el siguiente comando:

```sh
sudo apt-get update
```

PASO 2: Instala Mosquitto ejecutando el siguiente comando:

```sh
sudo apt-get install mosquitto
```

PASO 3: Instala las herramientas cliente de Mosquitto ejecutando el siguiente comando:

```sh
sudo apt-get install mosquitto-clients
```

PASO 4: Una vez que la instalación esté completa, puedes iniciar el servicio Mosquitto ejecutando el siguiente comando:

```sh
sudo systemctl start mosquitto
```

PASO 5: Para verificar si Mosquitto se está ejecutando, puedes ejecutar el siguiente comando:

```sh
sudo systemctl status mosquitto
```

Por defecto, Mosquitto está configurado para escuchar en el `puerto 1883` para tráfico MQTT. Puedes probar la instalación suscribiéndote a un tema usando las herramientas cliente de Mosquitto, de la siguiente manera:

Abre una nueva sesión SSH y ejecuta el siguiente comando para suscribirte a un tema:

```sh
mosquitto_sub -h localhost -t test
```

En otra sesión SSH, ejecuta el siguiente comando para publicar un mensaje al mismo tema:

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

Deberías ver el mensaje "Hello, world!" aparecer en la primera ventana de sesión SSH donde ejecutaste el comando mosquitto_sub.

¡Y eso es todo! Has instalado exitosamente Mosquitto en tu reTerminal DM y lo has probado usando las herramientas cliente de Mosquitto. Ahora profundicemos en la forma Node-RED de las comunicaciones MQTT

## Nodo MQTT con reTerminal DM

En Node-RED, hay MQTT in y MQTT out que representan Suscribir y Publicar respectivamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### Editar los Flujos

:::note
Los siguientes pasos son solo con fines tutoriales, donde utilizaremos `mqtt-in` para suscribirnos a los mensajes publicados en el mismo tópico por `mqtt-out`.
:::

PASO 1: Arrastra `mqtt in` al panel del `Editor de Flujo`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

PASO 2: Configura el `Servidor Modbus` y el nodo `mqtt in`

PASO 2-1: Haz doble clic en `mqtt in` para abrir el `panel del editor de nodos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

PASO 2-2: Haz clic en el icono del `lápiz` para la opción de configuración del servidor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

Una vez que hayas hecho clic en el icono del `lápiz` deberías ver el panel de configuración `Agregar nuevo nodo de configuración mqtt-broker`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

PASO 2-3: En la pestaña `Conexión` por favor configura el siguiente campo en consecuencia

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note
Por ahora, puedes dejar las pestañas **Security** y **Messages** sin modificar.
:::

PASO 2-4: Configurar el tema para suscribirse, aquí usamos `test-mqtt`, y dejar todo lo demás como predeterminado, luego hacer clic en el botón `Done`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

PASO 2-5: los siguientes pasos introducirán el nodo `debug`, que en este caso se usa para ver y depurar la salida del tema suscrito desde `mqtt in`, como se muestra en la imagen a continuación

PASO 2-5-1: Así que por favor arrastra un nodo `debug` al panel `Flow Editor`

PASO 2-5-2: Conecta el nodo `debug` con el nodo `mqtt in`

PASO 2-5-3: Haz clic en el `botón del pequeño insecto` en el `Option and Config panel` para abrir la `consola de depuración` en el `Option and Config panel`

PASO 2-5-4: Haz clic en el botón `Deploy` para desplegar el flujo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note
Dado que aún no hemos configurado ningún publicador de topics MQTT, no se mostrará ningún mensaje en la **consola de depuración**.
:::

PASO 3: Configurar el nodo `mqtt out`

PASO 3-1: Haz doble clic en el nodo `mqtt out` para abrir el `Panel del editor de nodos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

PASO 3-1: Así que por favor arrastra un nodo `mqtt out` al panel `Editor de flujo` como se muestra en la imagen a continuación

PASO 3-1-1: Debes seleccionar el mismo Servidor que hemos configurado en el `PASO 2-3:` que es `localhost:1883`

PASO 3-1-2: Debes configurar el mismo nombre de Tema que la configuración del tema del `PASO 2-4:` que es `test-mqtt`.

PASO 3-1-3: de manera similar, el QoS debe alinearse con la configuración de `mqtt in` como `2`

PASO 3-1-4: Haz clic en `Done` para completar la configuración

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

PASO 4: Configurar el nodo `inject`

PASO 4-1: Arrastra el nodo `inject` al panel `Editor de flujo`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

PASO 4-2: Haz doble clic en el nodo `inject` para abrir el `Panel del editor de nodos`, deberías ver la configuración predeterminada del nodo `inject`

PASO 4-2-1: haz clic en la `x` en la línea msg.topic para eliminarla

PASO 4-2-2: haz clic en la opción `timestamp` para abrir una lista desplegable en la línea `msg.payload`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

PASO 4-2-3: Selecciona la opción `string` en la lista desplegable

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

PASO 4-2-4: En el cuadro de mensaje por favor ingresa `this is the message` como el mensaje que vamos a enviar al tema `test-mqtt`, y luego haz clic en `Done`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

PASO 4-2-5: Conecta el nodo `inject` con el nodo `mqtt out` y haz clic en `Deploy`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### Resultado Final

Felicitaciones, has experimentado y aprendido exitosamente cómo usar el protocolo MQTT con reTerminal DM y node-RED ahora, tus resultados finales deberían ser similares a la imagen mostrada a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

Puedes copiar el siguiente código JSON para importar los Nodos

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

# Explora más nodos en reTerminal DM con node-RED

- [reTerminal DM RS485 Port con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM CAN BUS con Node-RED](/es/reTerminal-DM-Node-Red-canbus)

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

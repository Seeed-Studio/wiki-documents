---
description: reTerminal DM CANBUS con Node-RED
title: reTerminal DM CANBUS con Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/06/2025
  author: Erick González
---

# reTerminal DM CAN BUS con Node-RED

## Información Breve sobre CAN BUS

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

CAN bus (Controller Area Network bus) es un tipo de red utilizada para conectar múltiples unidades de control electrónico (ECUs) dentro de un vehículo o sistema industrial. Fue desarrollado originalmente por Bosch en la década de 1980 y se ha convertido en un estándar internacional (ISO 11898) para la comunicación serial en vehículos y otras aplicaciones.

El CAN bus permite el intercambio de datos a alta velocidad entre las ECUs, permitiendo que compartan información y coordinen sus actividades. Utiliza un sistema de dos cables, uno para transmitir datos y otro para recibirlos, y soporta múltiples nodos, lo que lo hace ideal para entornos complejos donde muchos dispositivos necesitan comunicarse entre sí.

La tecnología CAN bus se utiliza ampliamente en la industria automotriz para diversas aplicaciones, incluyendo el control del motor, control de la transmisión, ABS (sistema antibloqueo de frenos), control de airbags, entre otros. También se utiliza en otros sectores, como la automatización industrial, equipos médicos y aeroespacial, donde es esencial una comunicación confiable y eficiente.

CAN bus ofrece numerosas ventajas, como alta fiabilidad, bajo costo y capacidad para operar en entornos adversos. Es fácil de instalar y mantener, y es altamente resistente a las interferencias electromagnéticas. Estas características lo convierten en la elección ideal para aplicaciones que requieren una comunicación confiable y eficiente.

## Empezando con el nodo CAN BUS en reTerminal DM

Para usar Node-RED con CAN bus, necesitarás un dispositivo de interfaz CAN bus que se conecte al puerto CAN BUS del reTerminal DM, y un nodo de Node-RED para CAN bus que te permita enviar y recibir mensajes en la red. En este caso, exploraremos conjuntamente los nodos de `node-red-contrib-socketcan`. Una vez instalado el nodo CAN bus en Node-RED, podrás comenzar a crear flujos que lean datos de la red CAN bus, los procesen y los envíen a otros sistemas o dispositivos. Por ejemplo, podrías leer las RPM del motor desde el CAN bus de un vehículo, procesar los datos para calcular el consumo de combustible y enviar el resultado a un panel de control para su visualización.

Para más información, consulta la página de [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan).

Si usas Sensecraft Edge OS, puedes omitir los pasos de instalación del nodo Socketcan.

### Requisitos Previos

#### Hardware

* 1 x reTerminal DM  
* 1 x Host Computer  
* 1 x [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### Preparación del Hardware

Conecta el hardware como se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### Software

:::note
El Host Computer debe tener conexión a Internet para que el reTerminal DM pueda realizar los pasos de configuración.
:::

##### Instalar el nodo Socketcan

En este tutorial se utilizará el nodo `node-red-contrib-socketcan`, por lo que sigue los pasos de [instalación de nodos](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

##### Configurar CAN BUS en reTerminal DM

:::note
Se asume que tienes acceso directo a la aplicación `Terminal` en reTerminal DM o acceso via SSH. Si no, consulta el primer paso en [instalar Node-RED](#install-and-setting-up-node-red) para familiarizarte con el proceso.
:::

Ingresa los siguientes comandos uno a uno para habilitar un dispositivo CAN virtual denominado **can0** en el puerto CAN BUS del reTerminal DM:

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

Después de ejecutar estos comandos, deberías ver el dispositivo **can0** al usar el comando `ifconfig`, como se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### Configurar el software y driver en la computadora host para USB-CAN

:::note
Si usas el mismo [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html), sigue los pasos en el repositorio de GitHub [USB-CAN Analyzer system driver](https://github.com/kobolt/usb-can) para instalar el driver correspondiente a tu sistema operativo.
:::

Por ejemplo, para enviar y recibir tráfico CAN bus:

```sh
# Volcado de tráfico CAN bus desde la interfaz CAN
./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# Enviar los bytes 0x00112233 desde el ID 005 en CAN bus
./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233
```

### Nodos Socketcan en reTerminal DM

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### Importar los Flujos

:::note
Los siguientes pasos son únicamente para fines tutoriales. Se mostrará cómo importar un flujo copiando el código JSON y pegándolo en el cuadro de diálogo de importación de nodos.
:::

**PASO 1:** Abre la ventana de "Import nodes" haciendo clic en el botón de "Settings" (icono de tres rayas) y luego en "Import".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

**PASO 2:** Copia el siguiente código JSON:

```json
[
    {
        "id": "829af3ee.a57c1",
        "type": "tab",
        "label": "CAN BUS",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7b24a62e.8f5458",
        "type": "debug",
        "z": "829af3ee.a57c1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 350,
        "y": 360,
        "wires": []
    },
    {
        "id": "5f671b29.cd24bc",
        "type": "socketcan-out",
        "z": "829af3ee.a57c1",
        "name": "socketcan-out",
        "config": "d9bf56bb5f3e2f92",
        "x": 150,
        "y": 360,
        "wires": [
            [
                "7b24a62e.8f5458"
            ]
        ]
    },
    {
        "id": "caba412f.047b2",
        "type": "socketcan-in",
        "z": "829af3ee.a57c1",
        "name": "socketcan-in",
        "config": "d9bf56bb5f3e2f92",
        "x": 350,
        "y": 120,
        "wires": []
    },
    {
        "id": "a64240cb.3f0788",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":false,\"canid\":123,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "3ff96369.ef6f5c",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "123#00112233",
        "payloadType": "str",
        "x": 160,
        "y": 200,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "6879c00a.5edb68",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - ext",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1F334455#1122334455667788",
        "payloadType": "str",
        "x": 160,
        "y": 240,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "1ee3b274.4cb8fe",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - ext",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":true,\"canid\":32278,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 160,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "391a4c45.7acd8c",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Enviar tramas CAN usando diferentes payloads en can0",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Recibir datos CAN desde la interfaz can0",
        "info": "",
        "x": 220,
        "y": 320,
        "wires": []
    },
    {
        "id": "d9bf56bb5f3e2f92",
        "type": "socketcan-config",
        "interface": "can0"
    }
]
``` 

**PASO 3:** En la ventana de importación de nodos, selecciona la pestaña "Clipboard", pega el código JSON anterior en el recuadro y haz clic en "Import".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

**PASO 4:** Deberías ver una nueva pestaña de flujo llamada "CAN BUS". Verifica que el flujo se muestre como se indica a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

**PASO 5:** Para configurar la interfaz CAN, haz doble clic en el nodo `socketcan-in` para abrir su ventana de edición.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
Asegúrate de haber completado los pasos en la sección [Configurar CAN BUS en reTerminal DM](#configure-can-bus-on-reterminal-dm) para crear el dispositivo de interfaz **can0** en el reTerminal DM.
:::

**PASO 6:** En la ventana de edición del nodo `socketcan-in`, haz clic en el icono de "pencil" junto a la opción "interface" para abrir la ventana "Add new socketcan-config config node".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

**PASO 7:** En la ventana "Add new socketcan-config config node", ingresa `can0` en el cuadro de diálogo de la interfaz.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

**PASO 8:** Una vez que hagas clic en "Add", deberías ver que la opción "interface" queda establecida en `can0`. Haz clic en "Done" para aplicar los cambios.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

**PASO 9:** Configura la interfaz CAN para el nodo `socketcan-out`: Haz doble clic en el nodo `socketcan-out` y selecciona `can0` en la configuración, luego haz clic en "Done".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

**PASO 10:** Haz clic en "Deploy".

#### Prueba Final y Resultados

¡Felicidades! Has aprendido y experimentado cómo usar el protocolo CAN Bus con reTerminal DM y Node-RED. Los resultados finales deberían ser similares a los siguientes:

**Para envío desde la computadora host y recepción en reTerminal DM:**

* En la terminal de la computadora host, ejecuta el comando:
  
  ```sh
  ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233
  ```
  
  Esto enviará `00112233` (en hexadecimal) al reTerminal DM. En la ventana de Debug de reTerminal DM, verás los datos representados en binario, por ejemplo:
  
  ```json
  0: 0  
  1: 17  
  2: 34  
  3: 51  
  ```
  
  (Estos valores corresponden a `x00 x11 x22 x33`).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

**Para envío desde reTerminal DM y recepción en la computadora host:**

* Haz clic en el botón de `inject` en Node-RED en reTerminal DM para enviar los datos `01 02 03 04 05` a la computadora host. En la terminal de la computadora host, ejecuta:
  
  ```sh
  ./canusb -t -d /dev/ttyUSB0 -s 250000 -t
  ```
  
  Los datos recibidos serán `05 04 03 02 01` (orden FIFO).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# Explora más nodos en reTerminal DM con node-RED

* [reTerminal DM Puerto RS485 con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT con Node-RED](/es/reTerminal-DM-Node-Red-mqtt)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes canales de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varias vías de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

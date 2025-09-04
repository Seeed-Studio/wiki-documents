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
  date: 04/28/2023
  author: Peter Pan
---

# reTerminal DM CAN BUS con Node-RED

## Información breve sobre CAN BUS

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS y Node-RED

El bus CAN (Controller Area Network bus) es un tipo de red utilizada para conectar múltiples unidades de control electrónico (ECUs) dentro de un vehículo o sistema industrial. Fue desarrollado originalmente por Bosch en la década de 1980 y se ha convertido en un estándar internacional (ISO 11898) para comunicación serie en vehículos y otras aplicaciones.

El bus CAN permite el intercambio de datos de alta velocidad entre ECUs, permitiéndoles compartir información y coordinar sus actividades. Utiliza un sistema de dos cables, con un cable para transmitir datos y el otro para recibir datos, y soporta múltiples nodos, haciéndolo ideal para uso en sistemas complejos donde muchos dispositivos necesitan comunicarse entre sí.

La tecnología de bus CAN es ampliamente utilizada en la industria automotriz para una variedad de aplicaciones, incluyendo control del motor, control de transmisión, ABS (sistema de frenos antibloqueo), control de airbag, y muchas otras. También se utiliza en otras industrias, como automatización industrial, equipos médicos y aeroespacial, donde la comunicación confiable y eficiente entre dispositivos es esencial.

El bus CAN tiene muchas ventajas, incluyendo alta confiabilidad, bajo costo y la capacidad de operar en entornos hostiles. Es fácil de instalar y mantener, y es altamente resistente a la interferencia electromagnética. Estas características lo convierten en una opción ideal para muchas aplicaciones diferentes donde se requiere comunicación confiable y eficiente.

## Comenzando con el nodo CAN BUS en reTerminal DM

Para usar Node-RED con bus CAN, necesitarás un dispositivo de interfaz de bus CAN que se conecte al puerto CAN BUS del reTerminal DM, y un nodo de bus CAN de Node-RED que te permita enviar y recibir mensajes en la red, en este caso exploraremos los nodos `node-red-contrib-socketcan` juntos. Una vez que hayas instalado el nodo de bus CAN en Node-RED, puedes comenzar a construir flujos que lean datos de la red de bus CAN, los procesen y los envíen a otros sistemas o dispositivos. Por ejemplo, puedes leer las RPM del motor desde el bus CAN de un vehículo, procesar los datos para calcular el consumo de combustible y enviar el resultado a un panel de control para su visualización.

Puedes encontrar más información en la página de [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan).

Si estás usando Senscraft Edge OS puedes omitir los pasos de instalación del nodo Socketcan.

### Prerrequisitos

#### Hardware

- 1 x reTerminal DM
- 1 x Computadora Host
- 1 x [Analizador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### Preparación del hardware

Por favor conecta el Hardware como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### Software

:::note
La computadora host debe poder tener conexión a internet con el reTerminal DM para realizar los siguientes pasos de configuración.
:::

##### Instalar Nodo Socketcan

En este tutorial de Wiki vamos a usar el nodo `node-red-contrib-socketcan`, así que por favor instala el `node-red-contrib-socketcan` siguiendo la guía [instalar nodos](/es/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

##### Configurar CAN BUS en reTerminal DM

:::note
Se asume que tienes acceso directo a la aplicación `Terminal` en el reTerminal DM o acceso al reTerminal DM vía SSH. Si no es así, por favor sigue el primer paso [aquí](/es/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red) para familiarizarte con cómo hacerlo.
:::

Por favor, ingresa los siguientes comandos uno por uno para habilitar un dispositivo CAN virtual llamado can0 con el puerto CAN BUS en reTerminal DM.

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

Después de ingresar los comandos anteriores, deberías ver el dispositivo `can0` con el comando `ifconfig` como se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### Configurar el software y controlador usb-can de la computadora host

:::note
Si estás utilizando el mismo [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html), puedes seguir los pasos a continuación para configurar el controlador de software necesario para usar el analizador.
:::

Por favor visita el repositorio de github del controlador `USB-CAN Analyzer` [Controlador del sistema USB-CAN Analyzer](https://github.com/kobolt/usb-can) y sigue la sección Readme para instalar el controlador según tu Sistema Operativo.

Los comandos de ejemplo para enviar y recibir tráfico del bus CAN

```
# dump CAN bus traffic from CAN bus
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# send the bytes 0x00112233 from ID 005 on at CAN bus
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233

```

### Nodo Socketcan con reTerminal DM

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### Importar los Flujos

:::note

Los siguientes pasos son solo con fines de tutorial. En esta sección, te mostraremos cómo importar rápidamente un flujo copiando el flujo en formato JSON y pegándolo en el cuadro de entrada del menú emergente de importación de nodos.

:::

PASO 1: Abre la ventana `Import nodes` haciendo clic en el `Setting Button` y luego haciendo clic en el botón `Import`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png" /></div>

PASO 2: copia el siguiente JSON de flujo

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
        "name": "Send CAN frames in using different payloads on CAN0",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Receiove CAN data from interface CAN0",
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

PASO 3: En la ventana `Import nodes`, por favor selecciona la pestaña `Clipboard` y luego pega el código de flujo json anterior en el `cuadro de diálogo rojo`, después haz clic en el botón `import`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

PASO 4: Deberías ver una nueva pestaña de flujo llamada `CAN BUS` creada después de los pasos anteriores, y por favor verifica si el flujo es el mismo que se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

PASO 5: para configurar la interfaz can, necesitarás hacer doble clic en el `socketcan-in node` para abrir la ventana `edit node`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
Asegúrate de haber completado el paso en la sección [Configurar CAN BUS en reTerminal DM](#configure-can-bus-on-reterminal-dm) para crear un dispositivo de interfaz can0 en el reTerminal DM.
:::

PASO 6: En la ventana `Edit socketcan-in node` haz clic en el icono de `lápiz` en la opción `interface` para abrir la ventana `Add new socketcan-config config node`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

PASO 7: En la ventana `Add new socketcan-config config node` por favor ingresa `can0` en el cuadro de diálogo de interfaz

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

PASO 8: una vez que hayas hecho clic en el botón `Add` de los pasos anteriores deberías ver que la `interface` está configurada como `can0` y luego haz clic en `Done` para aplicar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

PASO 9: configura la interfaz CAN Bus para `socketcan-out`, que solo necesita hacer doble clic en el nodo `scoketcan-out` y seleccionar `can0` para Config, luego haz clic en `Done`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

PASO 10: Por favor haz clic en `Deploy` ahora

#### Prueba Final y Resultado

Felicitaciones, has experimentado y aprendido exitosamente cómo usar el protocolo CAN Bus con reTerminal DM y node-RED ahora, tus resultados finales deberían ser similares a la imagen mostrada a continuación

Para que la Computadora Host Envíe datos CAN Bus y reTerminal DM Reciba:

- Así que desde la ventana de terminal de la Computadora Host puedes ejecutar el comando `./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233` para enviar `00112233` (en hex) al reTerminal DM, y desde la ventana de depuración del reTerminal DM puedes ver que los datos son

```json  
0: 0 
1: 17 
2: 34
3: 51
```

donde es la representación binaria del conjunto de datos HEX `x00 x11 x22 x33`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

Para que la Computadora Host Reciba datos del Bus CAN y el reTerminal DM Envíe:

- Necesitarás hacer clic en el botón `inject` en el reTerminal DM Node-Red como se muestra en la imagen a continuación para enviar los datos `01 02 03 04 05` a la Computadora Host, y como puedes ver en la ventana del terminal de la computadora host el comando para recibir es `./canusb -t -d /dev/ttyUSB0 -s 250000 -t`, los datos recibidos son `05 04 03 02 01` ya que están en orden de primero en entrar, primero en salir:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# Explora más nodos en reTerminal DM con node-RED

- [Puerto RS485 de reTerminal DM con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
- [MQTT de reTerminal DM con Node-RED](/es/reTerminal-DM-Node-Red-mqtt)

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

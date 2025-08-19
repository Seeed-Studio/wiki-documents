---
description: Puerto RS485 de reTerminal DM con Node-RED
title: Puerto RS485 de reTerminal DM con Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Node-Red-RS485
last_update:
  date: 04/06/2025
  author: Erick González
---

# Puerto RS485 de reTerminal DM con Node-RED

## Breve información sobre RS485, Modbus, Modbus RTU y el Nodo Modbus de Node-RED

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485 es un protocolo de comunicación serie utilizado para transmitir datos entre dispositivos. RS485 es un estándar para la transmisión de datos en comunicación serie, que se utiliza comúnmente en aplicaciones industriales. Utiliza una señal diferencial, lo que significa que hay dos líneas de datos (A y B) y una línea de tierra (GND) para la comunicación. Esta señal diferencial ofrece una mejor inmunidad al ruido y permite longitudes de cable de hasta 4,000 pies. La tasa máxima de transmisión de datos para RS485 es típicamente mayor que la de RS232, llegando hasta 10 Mbps. RS485 está diseñado para comunicación multipunto. Esto significa que RS485 puede transmitir datos entre múltiples dispositivos en el mismo bus. En resumen, RS485 se utiliza comúnmente para comunicaciones de larga distancia entre múltiples dispositivos, como en sistemas de control industrial.

### Modbus RTU

Modbus RTU es un popular protocolo de comunicación industrial utilizado para el intercambio de datos entre dispositivos en un sistema de supervisión y adquisición de datos (SCADA). Es un protocolo de comunicación serie que opera sobre los estándares de bus RS485 o RS232. Modbus RTU utiliza una arquitectura maestro-esclavo, donde un dispositivo maestro inicia la comunicación con uno o más dispositivos esclavos. El maestro envía un mensaje de solicitud a un dispositivo esclavo, que luego responde con un mensaje que contiene los datos solicitados. Los mensajes de Modbus RTU constan de un encabezado, datos y un campo de verificación de errores. El encabezado contiene información sobre el mensaje, como la dirección del esclavo y el código de función. El campo de datos contiene los datos reales que se están transmitiendo. El campo de verificación de errores se utiliza para garantizar la integridad del mensaje. Modbus RTU soporta una variedad de tipos de datos, incluyendo binario, entero, punto flotante y cadena. Además, soporta una gama de códigos de función que permiten diferentes tipos de acceso a datos, tales como leer registros de retención, escribir en una única bobina y leer registros de entrada. Una de las ventajas de Modbus RTU es su simplicidad y facilidad de implementación. Es ampliamente soportado por una variedad de dispositivos y software, lo que lo convierte en una opción popular para sistemas de automatización y control industrial. También es adecuado para aplicaciones que requieren intercambio de datos en tiempo real y comunicación de baja latencia.

Modbus RTU es un protocolo de comunicación popular utilizado en una variedad de aplicaciones industriales, tales como:

  *  Sistemas de automatización y control de edificios: Modbus RTU se utiliza comúnmente para monitorizar y controlar la iluminación, HVAC y otros sistemas de edificios.
  *  Sistemas de gestión energética: Modbus RTU puede utilizarse para monitorizar y controlar el consumo de energía en edificios comerciales e industriales.
  *  Manufactura y control de procesos: Modbus RTU se usa frecuentemente para monitorizar y controlar procesos de fabricación, tales como líneas de ensamblaje, sistemas de transporte y máquinas de envasado.
  *  Tratamiento de agua y aguas residuales: Modbus RTU se utiliza para monitorizar y controlar la operación de bombas, válvulas y otros equipos en plantas de tratamiento de agua y aguas residuales.
  *  Producción de petróleo y gas: Modbus RTU se utiliza en instalaciones de producción de petróleo y gas para monitorizar y controlar bombas, compresores y otros equipos.
  *  Sistemas de energía renovable: Modbus RTU puede emplearse para monitorizar y controlar paneles solares, aerogeneradores y otros sistemas de energía renovable.
  *  Sistemas de transporte: Modbus RTU se usa para monitorizar y controlar señales de tráfico, iluminación y otros equipos en sistemas de transporte.

En general, cualquier aplicación que requiera intercambio de datos en tiempo real y comunicación de baja latencia en un entorno industrial puede beneficiarse del uso de Modbus RTU.

### Nodo Modbus

Node-RED cuenta con un nodo Modbus integrado, que permite a los usuarios integrar fácilmente dispositivos Modbus en sus flujos de trabajo de Node-RED. El nodo Modbus soporta tanto los protocolos Modbus TCP como Modbus RTU, y se puede usar para leer y escribir datos en dispositivos Modbus.

Para utilizar el nodo Modbus en Node-RED, simplemente arrastra y suelta el nodo en el lienzo y configúralo con los ajustes Modbus correspondientes, como la dirección del dispositivo, el código de función y el tipo de dato. Una vez configurado, el nodo Modbus se puede conectar a otros nodos en el flujo de trabajo para procesar y mostrar los datos.

Node-RED también cuenta con una variedad de otros nodos y plugins que se pueden utilizar para ampliar su funcionalidad e integrarse con otros sistemas y dispositivos. Por ejemplo, existen nodos para MQTT, HTTP y otros protocolos de comunicación, así como nodos para procesamiento, visualización y almacenamiento de datos.

En general, Node-RED proporciona una plataforma poderosa y flexible para construir aplicaciones de IoT y automatización industrial, y su nodo Modbus integrado facilita la integración de dispositivos Modbus en estos flujos de trabajo.

# Empezando con el Nodo Modbus en reTerminal DM

Puedes encontrar más información en la página de [Nodo Modbus de Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus).

Si estás usando Senscraft Edge OS, puedes omitir los pasos de instalación del nodo Modbus y dirigirte a la sección [cómo utilizar el Nodo Modbus con reTerminal DM](#how-to-use-modbus-node-with-retermianl-dm)

## Instalar el Nodo Modbus

En esta sección vamos a instalar el nodo `node-red-contrib-modbus`, por lo que, por favor, revisa cómo [instalar nodos](/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

### Opción 1: Línea de comandos

Primero que nada, por favor, refresca tus conocimientos sobre cómo acceder a reTerminal DM mediante SSH, por favor revisa los pasos [aquí](/reterminal-dm-flash-OS#install-drivers).

Una vez que tengas acceso a reTerminal DM con SSH, puedes proceder a los siguientes pasos:

STEP 1: Por favor, ve a la carpeta de Node-RED

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```
STEP 2: Instala el Nodo Modbus

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: Una vez instalado el nodo, por favor, reinicia el servicio de Node-RED con:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### Opción 2: Editor de Node-RED

STEP 1: Haz clic en el botón `Settings` con el ícono de "tres rayas" ubicado en la esquina derecha y luego selecciona `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: En la pestaña de paleta, haz clic en la pestaña `Install`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: Busca el nodo en la barra de búsqueda de nodos y haz clic en el botón `install` para instalar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: Haz clic en el botón `Install` del menú desplegable de advertencia para confirmar la instalación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: Espera a que la instalación se complete y deberías ver que el botón `install` cambia a `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: Deberías ver los nodos Modbus en la barra lateral

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>


## Cómo utilizar el Nodo Modbus con reTerminal DM

### Requisitos previos

#### Hardware

* 1 x Adaptador USB a RS485/RS232
* 6 x Cables
* 1 x reTerminal DM
* 1 x Computadora Host

#### Software 

* Herramienta GUI para comunicación MODBUS, tal como [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) instalada en tu máquina host

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### Preparación 

STEP 1: Por favor, conecta el Hardware como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

STEP 2: Instala [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) si deseas seguir los pasos exactos a continuación.

STEP 2-1: Descarga el archivo de la versión de [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip)

:::note

En el momento en que preparamos este wiki, la última versión de `ModbusMechanic` es la v2.7.

:::

STEP 2-2: Descomprime el archivo de la versión y ejecuta el archivo ejecutable java `ModbusMechanic.jar` usando el siguiente comando en Linux:

```sh

java -jar ModbusMechanic.jar

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

STEP 2-3: Por favor, configura los `Ajustes del Puerto Serial` para `ModbusMechanic` tal como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

STEP 3: Configurar el `Simulador de Esclavo`

STEP 3-1: Abre el `Simulador de Esclavo` desde las herramientas de `ModbusMechanic`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

STEP 3-2: Luego, selecciona `RTU` desde el popup1 Mbit

STEP 3-4-2: Ingresa `1` como el `Número de Registro` 

STEP 3-4-3: Selecciona `U int 16` como el `Tipo de dato`

STEP 3-4-4: Ingresa `120` como el `Valor` 

STEP 3-4-5: Activa la opción `Intercambio de palabras`

STEP 3-4-6: Haz clic en `Agregar` para confirmar 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

STEP 3-5: Deberías tener una configuración similar a la imagen a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

STEP 3-6: Repite los PASOS 4-4 para agregar dos Registros más, como se muestra a continuación, donde el `Registro 2` tendrá un `Valor de 12` y el `Registro 3` tendrá un `Valor de 1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>


#### Editar los Flujos

STEP 1: Arrastra el nodo `Modbus Read` al panel del `Editor de Flujos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

STEP 2: Configura el Servidor Modbus

STEP 2-1: Haz doble clic en el nodo `Modbus Read` para abrir el panel del `Editor de Nodos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

STEP 2-2: Haz clic en el ícono de `lápiz` para la opción de configuración del servidor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

Una vez que hagas clic en el ícono de `lápiz`, deberías ver el panel de configuración `Agregar nuevo nodo de configuración modbus-client`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

STEP 2-3: Por favor, sigue cuidadosamente los pasos a continuación para configurar el puerto Modbus como se muestra en la imagen siguiente.

STEP 2-3-1: Establece el tipo como Serial Expert desde la lista desplegable

STEP 2-3-2: Selecciona el Puerto Serial `/dev/ttyCH343USB1`

STEP 2-3-3: Configura las opciones del puerto serial como se muestra en la imagen siguiente

STEP 2-3-4: Configura la opción extra del puerto del servidor Modbus como se muestra en la imagen siguiente

STEP 2-3-5: Haz clic en `Add` o `Update` para aplicar los cambios.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

STEP 3: Configura el nodo Modbus-Read como se muestra en la imagen siguiente y haz clic en `Done`

:::note

Los siguientes pasos son solo ejemplos; puedes cambiar la configuración de acuerdo a tu propia situación.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>

STEP 4: Busca y arrastra el `debug node` y el `Modbus Response node` y conecta los nodos como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### Resultado Final

Felicidades, ahora has experimentado y aprendido con éxito cómo utilizar Modbus con reTerminal DM y Node-RED. Tu resultado final debería ser similar a la imagen que se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>



Puedes copiar este código JSON para importar los nodos:

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
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

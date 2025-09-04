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
  date: 04/04/2023
  author: Peter Pan
---

# Puerto RS485 de reTerminal DM con Node-RED

## Información breve sobre RS485, Modbus, Modbus RTU y el Nodo Modbus de Node-RED

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485 son protocolos de comunicación serie utilizados para transmitir datos entre dispositivos. RS485 es un estándar para la transmisión de comunicación serie de datos, que se utiliza comúnmente en aplicaciones industriales. Utiliza una señal diferencial, lo que significa que hay dos líneas de datos (A y B) y una línea de tierra (GND) para la comunicación. Esta señal diferencial proporciona mejor inmunidad al ruido y permite longitudes de cable más largas de hasta 4,000 pies. La velocidad máxima de datos para RS485 es típicamente mayor que RS232, hasta 10 Mbps. RS485 está diseñado para comunicación multipunto. Esto significa que RS485 puede transmitir datos entre múltiples dispositivos en el mismo bus. En resumen, RS485 se utiliza comúnmente para comunicación de larga distancia entre múltiples dispositivos, como en sistemas de control industrial.

### Modbus RTU

Modbus RTU es un protocolo de comunicación industrial popular utilizado para el intercambio de datos entre dispositivos en un sistema de control supervisorio y adquisición de datos (SCADA). Es un protocolo de comunicación serie que opera sobre los estándares de bus RS485 o RS232. Modbus RTU utiliza una arquitectura maestro-esclavo, donde un dispositivo maestro inicia la comunicación con uno o más dispositivos esclavos. El maestro envía un mensaje de solicitud a un dispositivo esclavo, que luego responde con un mensaje que contiene los datos solicitados. Los mensajes Modbus RTU consisten en un encabezado, datos y un campo de verificación de errores. El encabezado contiene información sobre el mensaje, como la dirección del esclavo y el código de función. El campo de datos contiene los datos reales que se están transmitiendo. El campo de verificación de errores se utiliza para asegurar la integridad del mensaje. Modbus RTU soporta una variedad de tipos de datos, incluyendo binario, entero, punto flotante y cadena. También soporta un rango de códigos de función que permiten diferentes tipos de acceso a datos, como leer registros de retención, escribir bobina única y leer registros de entrada. Una de las ventajas de Modbus RTU es su simplicidad y facilidad de implementación. Es ampliamente soportado por una variedad de dispositivos y software, lo que lo convierte en una opción popular para sistemas de automatización y control industrial. También es muy adecuado para aplicaciones que requieren intercambio de datos en tiempo real y comunicación de baja latencia.

Modbus RTU es un protocolo de comunicación popular utilizado en una variedad de aplicaciones industriales, tales como:

  *  Sistemas de automatización y control de edificios: Modbus RTU se utiliza comúnmente para monitorear y controlar iluminación, HVAC y otros sistemas de edificios.

  *  Sistemas de gestión de energía: Modbus RTU puede utilizarse para monitorear y controlar el consumo de energía en edificios comerciales e industriales.

  *  Manufactura y control de procesos: Modbus RTU se utiliza a menudo para monitorear y controlar procesos de manufactura, como líneas de ensamblaje, sistemas de transportadores y máquinas empacadoras.

  *  Tratamiento de agua y aguas residuales: Modbus RTU se utiliza para monitorear y controlar la operación de bombas, válvulas y otros equipos en instalaciones de tratamiento de agua y aguas residuales.

  *  Producción de petróleo y gas: Modbus RTU se utiliza en instalaciones de producción de petróleo y gas para monitorear y controlar bombas, compresores y otros equipos.

  *  Sistemas de energía renovable: Modbus RTU puede utilizarse para monitorear y controlar paneles solares, turbinas eólicas y otros sistemas de energía renovable.

  *  Sistemas de transporte: Modbus RTU se utiliza para monitorear y controlar semáforos, iluminación y otros equipos en sistemas de transporte.

En general, cualquier aplicación que requiera intercambio de datos en tiempo real y comunicación de baja latencia en un entorno industrial puede beneficiarse del uso de Modbus RTU.

### Nodo Modbus

Node-RED tiene un nodo Modbus incorporado, que permite a los usuarios integrar fácilmente dispositivos Modbus en sus flujos de trabajo de Node-RED. El nodo Modbus soporta tanto los protocolos Modbus TCP como Modbus RTU, y puede utilizarse para leer y escribir datos desde dispositivos Modbus.

Para usar el nodo Modbus en Node-RED, simplemente puedes arrastrarlo y soltarlo en el lienzo y configurarlo con las configuraciones Modbus apropiadas, como la dirección del dispositivo, código de función y tipo de datos. Una vez configurado, el nodo Modbus puede conectarse a otros nodos en el flujo de trabajo para procesar y mostrar los datos.

Node-RED también tiene un rango de otros nodos y plugins que pueden utilizarse para extender su funcionalidad e integrar con otros sistemas y dispositivos. Por ejemplo, hay nodos para MQTT, HTTP y otros protocolos de comunicación, así como nodos para procesamiento de datos, visualización y almacenamiento.

En general, Node-RED proporciona una plataforma poderosa y flexible para construir aplicaciones de IoT y automatización industrial, y su nodo Modbus incorporado hace fácil integrar dispositivos Modbus en estos flujos de trabajo.

# Comenzando con el Nodo Modbus en reTerminal DM

Puedes encontrar más información en la página de [Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus).

Si estás usando Senscraft Edge OS puedes omitir los pasos de instalación del nodo modbus e ir a [cómo usar el Nodo Modbus con reTerminal DM](#how-to-use-modbus-node-with-retermianl-dm)

## Instalar el Nodo Modbus

En esta sección vamos a instalar el nodo `node-red-contrib-modbus`, así que por favor revisa cómo [instalar nodos](/es/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

### Opción 1: Línea de comandos

Primero que todo, por favor procede a refrescar tu conocimiento sobre acceder al reTerminal DM vía SSH, por favor revisa los pasos [aquí](/es/reterminal-dm-flash-OS#install-drivers)

Una vez que hayas accedido al reTerminal DM con SSH puedes proceder a los pasos siguientes:

PASO 1: Por favor ve a la carpeta de Node-RED

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

PASO 2: Instalar el Nodo Modbus

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

PASO 3: Una vez que el nodo se instale, por favor reinicia el servicio Node-RED con:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### Opción 2: Editor de Node-RED

PASO 1: Haz clic en el botón `Settings` con el icono de "tres rayas" ubicado en la esquina derecha y luego selecciona `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

PASO 2: En la pestaña de paleta haz clic en la pestaña `Install`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

PASO 3: Busca el nodo en la barra de búsqueda de nodos y haz clic en el botón `install` para instalar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

PASO 4: haz clic en el botón 'Install` de la ventana de advertencia desplegable para confirmar la instalación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

PASO 5: Espera a que se complete la instalación y deberías ver que el botón `install` cambió a `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

PASO 6: deberías ver los nodos Modbus en la barra lateral

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>


## Cómo usar el nodo Modbus con reTerminal DM

### Prerrequisitos

#### Hardware

* 1 x Adaptador USB a RS485/RS232
* 6 x Cables
* 1 x reTerminal DM
* 1 x Computadora anfitriona

#### Software 

* Herramienta GUI de comunicación MODBUS como [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) instalada en tu máquina anfitriona

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### Preparación 

PASO 1: Por favor conecta el hardware como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

PASO 2: Instala [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) si quieres seguir los pasos exactos a continuación.

PASO 2-1: Descarga el archivo de lanzamiento de [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip)

:::note
Al momento de preparar este wiki, la última versión de lanzamiento de `ModbusMechanic` es la v2.7.
:::

PASO 2-2: descomprime el archivo de lanzamiento y ejecuta el archivo ejecutable java `ModbusMechanic.jar` usando el siguiente comando en linux:

```sh

java -jar ModbusMechanic.jar

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

PASO 2-3: Por favor configure el `Puerto de Configuración Serial` para `ModbusMechanic` como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

PASO 3: Configurar `Simulador Esclavo`

PASO 3-1: Abra el `Simulador Esclavo` desde las Herramientas de `ModbusMechanic`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

PASO 3-2: Luego seleccione `RTU` desde la ventana emergente1 Mbit

PASO 3-4-2: Ingrese `1` como el `Número de registro` 

PASO 3-4-3: Seleccione `U int 16` como el `Tipo de datos`

PASO 3-4-4: Ingrese `120` como el `Valor` 

PASO 3-4-5: marque el `Intercambio de Palabras`

PASO 3-4-6: haga clic en `Agregar` para confirmar 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

PASO 3-5: debería tener configuraciones similares como se muestra en la imagen a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

PASO 3-6: repita los PASOS 4-4 para agregar dos Registros más como se muestra a continuación, donde `Registro 2` con `Valor de 12` y `Registro 3` con `Valor de 1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>


#### Editar los Flujos

PASO 1: Arrastre `Modbus Read` al panel del `Editor de Flujos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

PASO 2: Configurar el Servidor Modbus

PASO 2-1: Haga doble clic en `Modbus Read` para abrir el `panel del editor de nodos`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

PASO 2-2: Haga clic en el icono de `lápiz` para la opción de configuración del servidor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

Una vez que haya hecho clic en el icono de `lápiz` debería ver el panel de configuración `Agregar nuevo nodo de configuración modbus-client`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

PASO 2-3: Por favor siga cuidadosamente los pasos a continuación para configurar el puerto Modbus como se muestra en la imagen a continuación.

PASO 2-3-1: establezca el tipo a Serial Expert desde la lista desplegable

PASO 2-3-2: seleccione el puerto Serial `/dev/ttyCH343USB1`

PASO 2-3-3: configure las opciones del puerto serial como se muestra en la imagen a continuación

PASO 2-3-4: configure la opción adicional del puerto del servidor Modbus como se muestra en la imagen a continuación

PASO 2-3-5: Haga clic en `Agregar` o `Actualizar` para aplicar los cambios.


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

PASO 3: Configure el Nodo Modbus-Read como se muestra en la imagen a continuación y haga clic en `Listo`

:::note
Los siguientes pasos son solo un ejemplo; puedes cambiar la configuración según tu propia situación.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>


PASO 4: Encuentra y arrastra el `nodo debug` y el `nodo Response de Modbus` y conecta los nodos juntos como se muestra a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### Resultado Final

Felicitaciones, has experimentado y aprendido exitosamente cómo usar Modbus con reTerminal DM con node-RED ahora, tus resultados finales deberían ser similares a la imagen mostrada a continuación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>


Puedes copiar el siguiente código JSON para importar los Nodos

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

# Explora más nodos en reTerminal DM con node-RED

* [reTerminal DM MQTT con Node-RED](/es/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS con Node-RED](/es/reTerminal-DM-Node-Red-canbus)
* 
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

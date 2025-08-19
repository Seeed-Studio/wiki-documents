---
description: Esta wiki proporciona una guía paso a paso sobre cómo configurar un servidor OPC UA utilizando Node-RED en un reComputer R1000 con Raspberry Pi. Incluye instrucciones detalladas sobre la instalación y configuración del nodo servidor OPC UA, la conexión de dispositivos Modbus TCP y RTU, y el monitoreo de datos con el cliente OPC UaExpert. Ideal para quienes buscan integrar y visualizar datos industriales con facilidad.
title: reComputer R1000 como servidor OPC UA con Node-RED

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_nodered_opcua_server
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción

La **Arquitectura Unificada OPC (UA)**, introducida en 2008, representa una evolución significativa en los estándares de comunicación industrial. A diferencia de sus predecesores bajo el paraguas de OPC Classic, OPC UA es una arquitectura orientada a servicios y **plataforma independiente**, que unifica todas las funcionalidades de las especificaciones OPC anteriores en un marco extensible. Este enfoque moderno no solo preserva las capacidades centrales de OPC Classic, sino que las mejora con un diseño en múltiples capas que responde a las complejas demandas de los entornos industriales actuales.

La arquitectura de OPC UA se basa en principios clave: garantiza la **equivalencia funcional** al mapear todas las especificaciones OPC Classic basadas en COM al marco UA, lo que permite transiciones fluidas para los sistemas heredados. La **independencia de plataforma** de OPC UA le permite operar en una amplia gama de dispositivos, desde microcontroladores embebidos hasta infraestructuras basadas en la nube, lo que lo hace versátil y preparado para el futuro. La **seguridad** es un pilar fundamental de OPC UA, con características robustas de cifrado, autenticación y auditoría para proteger la integridad y confidencialidad de los datos. Además, su **naturaleza extensible** permite la integración continua de nuevas funcionalidades sin afectar las aplicaciones existentes, asegurando su capacidad de adaptación a las necesidades industriales en evolución. Las **capacidades avanzadas de modelado de información** de OPC UA también proporcionan una herramienta poderosa para definir estructuras de información complejas, lo que lo convierte en una opción ideal para industrias que requieren una gestión de datos detallada y escalable.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí.

### Preparación del Hardware


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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación del Software

En este tutorial, crearemos un ejemplo práctico de cómo configurar nuestro reComputer R1000 como un servidor OPC UA utilizando Node-RED. Nos centraremos en la recopilación de datos desde dispositivos Modbus TCP y RTU, aunque es importante mencionar que también puedes obtener datos de MQTT, BACnet y otros dispositivos. Para este ejemplo, utilizaremos específicamente Modbus TCP y RTU. Si no estás familiarizado con la recopilación de datos desde estos protocolos, consulta nuestros tutoriales previos:

- [reComputer R1000 con Node-RED y BACnet IP](https://wiki.seeedstudio.com/ReComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000 con Node-RED y Modbus TCP](https://wiki.seeedstudio.com/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000 con Node-RED y MQTT](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/)

## Instalación del Nodo Servidor OPC-UA

### Acceder a Node-RED en reComputer R1000

Abre tu navegador web y navega a `http://{DIRECCIÓN_IP_DEL_RECOMPUTER}:1880` para acceder a la interfaz de Node-RED en tu reComputer R1000.

### Instalar el Nodo Servidor OPC-UA

En Node-RED, ve al menú superior derecho y selecciona **Administrar paleta**.

En la pestaña **Instalar**, busca `node-red-contrib-opcua-server`.

Haz clic en el botón **Instalar** junto al paquete del nodo para añadirlo a tu entorno Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

### Agregar el Nodo Compact OPC-UA Server

Después de la instalación, localiza los nodos OPC-UA en la paleta de Node-RED. Arrastra y suelta el nodo **Compact Server** en tu espacio de trabajo para comenzar la configuración de tu servidor OPC-UA.

## Configuración del Puerto

Después de arrastrar el nodo de servidor compacto a tu espacio de trabajo, haz doble clic sobre él para abrir la configuración.

En el panel de configuración, verás el número de puerto asignado al servidor. Toma nota de este número de puerto, ya que lo necesitarás para los siguientes pasos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

## Crear la URL del Endpoint

Cambia a la pestaña **Discovery** dentro de la configuración.

Aquí, deberás crear una **URL de Endpoint** para el servidor OPC-UA.

Usa el siguiente formato para la URL:
`opc.tcp://<IP_reComputer>:<Puerto>`

Por ejemplo, si la dirección IP de tu reComputer es 192.168.0.157 y el puerto asignado es 54840, tu URL de Endpoint será:
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## Almacenamiento de Variables en el Contexto del Flujo

En Node-RED, la función `flow.set()` se utiliza para almacenar datos en el contexto del flujo, permitiéndote guardar información que puede ser accedida por cualquier nodo dentro del mismo flujo. Esto es particularmente útil cuando necesitas compartir datos entre diferentes partes de tu flujo.

### Agregar un Nodo de Función

Arrastra y suelta un nodo **Function** en tu espacio de trabajo de Node-RED. Luego, haz doble clic en el nodo Function para abrir su editor.

### Almacenando Datos de Temperatura

Supongamos que deseas almacenar el valor de temperatura de un sensor Modbus RTU como una variable de contexto de flujo. En el editor del nodo Function, ingresa el siguiente código:

```bash
flow.set("Temperature", msg.payload);
```

Este código guarda los datos de temperatura (contenidos en `msg.payload`) en una variable de contexto de flujo llamada "Temperature".

## Crear la URL del Endpoint

Cambia a la pestaña **Discovery** dentro de la configuración.

Aquí, deberás crear una **URL de Endpoint** para el servidor OPC-UA.

Usa el siguiente formato para la URL:
`opc.tcp://<IP_reComputer>:<Puerto>`

Por ejemplo, si la dirección IP de tu reComputer es 192.168.0.157 y el puerto asignado es 54840, tu URL de Endpoint será:
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## Almacenamiento de Variables en el Contexto del Flujo

En Node-RED, la función `flow.set()` se utiliza para almacenar datos en el contexto del flujo, permitiéndote guardar información que puede ser accedida por cualquier nodo dentro del mismo flujo. Esto es particularmente útil cuando necesitas compartir datos entre diferentes partes de tu flujo.

### Agregar un Nodo de Función

Arrastra y suelta un nodo **Function** en tu espacio de trabajo de Node-RED. Luego, haz doble clic en el nodo Function para abrir su editor.

### Almacenando Datos de Temperatura

Supongamos que deseas almacenar el valor de temperatura de un sensor Modbus RTU como una variable de contexto de flujo. En el editor del nodo Function, ingresa el siguiente código:

```bash
flow.set("Temperature", msg.payload);
```

Este código guarda los datos de temperatura (contenidos en `msg.payload`) en una variable de contexto de flujo llamada "Temperature".

### Conectando el Nodo de Función

Conecta este nodo Function al nodo que recibe los datos brutos de temperatura. Esto garantiza que el valor de la temperatura se almacene tan pronto como sea recibido desde el sensor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

### Almacenando Valores DI/DO del PLC

Si necesitas almacenar un valor específico de un array de Entrada/Salida Digital (DI/DO) de un PLC, puedes hacerlo con un enfoque similar. Por ejemplo, para almacenar el valor de la tercera bobina en el array, usa el siguiente código:

```bash
flow.set("Coil3", msg.payload[2]);
```

Este código extrae el tercer valor del array `msg.payload` y lo almacena en una variable de contexto de flujo llamada "Coil3".

### Conectando el Nodo de Función para DI/DO

Conecta este nodo Function al nodo que genera la salida del array DI/DO. Esto permitirá almacenar el valor específico de la bobina cada vez que el array se actualice.

## Configuración del Espacio de Direcciones del Servidor OPC UA

La pestaña **Address Space** es donde se construye el **Modelo de Información** del servidor OPC UA. Este modelo define la estructura y los datos disponibles para los clientes OPC UA, utilizando clases y métodos del SDK de node-opcua.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Importar el SDK de OPC UA y utilidades desde coreServer
const opcua = coreServer.choreCompact.opcua;
```

---
description: Esta wiki proporciona una guía paso a paso sobre cómo configurar un servidor OPC UA utilizando Node-RED en un reComputer R1000 con Raspberry Pi. Incluye instrucciones detalladas sobre la instalación y configuración del nodo servidor OPC UA, la conexión de dispositivos Modbus TCP y RTU, y el monitoreo de datos con el cliente OPC UaExpert. Ideal para quienes buscan integrar y visualizar datos industriales con facilidad.
title: reComputer R1000 como servidor OPC UA con Node-RED
---

## Creación del Namespace

El **namespace** se crea dentro del espacio de direcciones del servidor. Este namespace contendrá todos los nodos y variables específicas de tu aplicación.

```bash
// Crear un nuevo namespace para el servidor dentro del espacio de direcciones
const namespace = addressSpace.getOwnNamespace();
// Referencia interna a la instancia del servidor para su uso dentro de funciones
var flexServerInternals = this;
```

## Tipos de Datos OPC UA y Códigos de Estado

Las clases **Variant, DataType y StatusCodes** del SDK de OPC UA se utilizan para definir los tipos y estados de las variables que publicará el servidor.

```bash
// Definir estructuras de datos y tipos de OPC UA para uso futuro
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;
```

## Inicialización de Variables

Las variables que serán publicadas por el servidor se inicializan en el contexto del flujo. Estas variables representan los datos que los clientes podrán leer o escribir.

```bash
// Inicializar variables en el contexto del flujo que serán expuestas por el servidor OPC UA
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);
```


---
description: Esta wiki proporciona una guía paso a paso sobre cómo configurar un servidor OPC UA utilizando Node-RED en un reComputer R1000 con Raspberry Pi. Incluye instrucciones detalladas sobre la instalación y configuración del nodo servidor OPC UA, la conexión de dispositivos Modbus TCP y RTU, y el monitoreo de datos con el cliente OPC UaExpert. Ideal para quienes buscan integrar y visualizar datos industriales con facilidad.
title: reComputer R1000 como servidor OPC UA con Node-RED
---

## Creación del Namespace

El **namespace** se crea dentro del espacio de direcciones del servidor. Este namespace contendrá todos los nodos y variables específicas de tu aplicación.

```bash
// Crear un nuevo namespace para el servidor dentro del espacio de direcciones
const namespace = addressSpace.getOwnNamespace();
// Referencia interna a la instancia del servidor para su uso dentro de funciones
var flexServerInternals = this;
```

## Tipos de Datos OPC UA y Códigos de Estado

Las clases **Variant, DataType y StatusCodes** del SDK de OPC UA se utilizan para definir los tipos y estados de las variables que publicará el servidor.

```bash
// Definir estructuras de datos y tipos de OPC UA para uso futuro
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;
```

## Inicialización de Variables

Las variables que serán publicadas por el servidor se inicializan en el contexto del flujo. Estas variables representan los datos que los clientes podrán leer o escribir.

```bash
// Inicializar variables en el contexto del flujo que serán expuestas por el servidor OPC UA
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);
```

## Definición de la Estructura de Carpetas en el Espacio de Direcciones

Se define una estructura de carpetas dentro del namespace del servidor para organizar los nodos. Esta estructura facilita la navegación de los clientes a través de los datos disponibles.

```bash
// Encontrar el nodo de la carpeta raíz en el espacio de direcciones
const rootFolder = addressSpace.findNode("RootFolder");

// Agregar una nueva carpeta de dispositivo bajo la raíz para el RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Agregar subcarpetas para salidas digitales (DIO) y valores analógicos bajo la carpeta del dispositivo
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });
```

## Definición de Vistas OPC UA

Las vistas OPC UA son jerarquías personalizadas que proporcionan formas alternativas para que los clientes exploren los datos del servidor, además de la estructura de carpetas predeterminada.

```bash
// Crear una vista para salidas digitales (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Crear una vista para valores analógicos
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Agregar referencias a los nodos en las vistas respectivas
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Referencia al nodo de Humedad
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Referencia al nodo de Coil2
});
```

---
description: Esta wiki proporciona una guía paso a paso sobre cómo configurar un servidor OPC UA utilizando Node-RED en un reComputer R1000 con Raspberry Pi. Incluye instrucciones detalladas sobre la instalación y configuración del nodo servidor OPC UA, la conexión de dispositivos Modbus TCP y RTU, y el monitoreo de datos con el cliente OPC UaExpert. Ideal para quienes buscan integrar y visualizar datos industriales con facilidad.
title: reComputer R1000 como servidor OPC UA con Node-RED
---

## Conectarse al Servidor OPC UA con UaExpert

Para conectarse a nuestro endpoint del servidor OPC UA, necesitarás un cliente OPC UA. Sigue estos pasos para comenzar:

### Descargar UaExpert

[Visita](https://www.unified-automation.com/downloads/opc-ua-clients) y regístrate para descargar **UaExpert**, un cliente OPC UA gratuito.

### Instalar UaExpert

Después de descargarlo, instala **UaExpert** en tu computadora siguiendo las instrucciones en pantalla.

### Configurar la Conexión

Abre **UaExpert** y ve a la sección **Endpoints**. Crea una nueva conexión ingresando la URL de endpoint de tu servidor OPC UA.
Por ejemplo:
`opc.tcp://<IP_reComputer>:<Puerto>`

Ejemplo: `opc.tcp://192.168.0.157:54840`

Configura cualquier ajuste de seguridad o reglas de conexión según la configuración de tu servidor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

### Conectarse al Servidor

Una vez establecida la conexión, navega hasta el **Address Space** en **UaExpert**. Verás la carpeta principal etiquetada como **RaspberryPI-reComputer**, la cual creaste en Node-RED. Dentro de esta carpeta principal, encontrarás dos subcarpetas: **Analog** y **DIO**.

### Monitorear Valores

Arrastra y suelta las variables desde las carpetas **Analog** y **DIO** al área de vista de datos en **UaExpert**. Ahora podrás visualizar los cambios en tiempo real a medida que el sistema opera.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
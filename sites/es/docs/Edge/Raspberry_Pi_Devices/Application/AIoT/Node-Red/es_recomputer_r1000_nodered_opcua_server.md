---
description: Este wiki proporciona una guía paso a paso para configurar un servidor OPC UA usando Node-RED en un reComputer R1000 alimentado por Raspberry Pi. Incluye instrucciones detalladas sobre la instalación y configuración del nodo servidor OPC UA, la conexión de dispositivos Modbus TCP y RTU, y el monitoreo de datos usando el cliente OPC UaExpert. Perfecto para aquellos que buscan integrar y visualizar datos industriales con facilidad.
title: reComputer R1000 actúa como servidor OPC UA con Node-RED
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_nodered_opcua_server
last_update:
  date: 08/14/2024
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1000_nodered_opcua_server/
---

## Introducción

La Arquitectura Unificada OPC (UA), introducida en 2008, representa una evolución significativa en los estándares de comunicación industrial. A diferencia de sus predecesores bajo el paraguas de OPC Classic, OPC UA es una arquitectura orientada a servicios e independiente de la plataforma que unifica todas las funcionalidades de las especificaciones OPC anteriores en un marco único y extensible. Este enfoque moderno no solo preserva las capacidades centrales de OPC Classic, sino que también las mejora con un diseño multicapa que satisface las demandas complejas de los entornos industriales actuales.

La arquitectura de OPC UA está diseñada con principios clave en mente: asegura **equivalencia funcional** al mapear todas las especificaciones OPC Classic basadas en COM al marco UA, permitiendo transiciones fluidas para sistemas heredados. La **independencia de plataforma** de OPC UA le permite operar en una amplia gama de dispositivos, desde microcontroladores embebidos hasta infraestructuras basadas en la nube, haciéndolo versátil y a prueba de futuro. La **seguridad** es una piedra angular de OPC UA, con características robustas de cifrado, autenticación y auditoría para proteger la integridad y confidencialidad de los datos. Además, su **naturaleza extensible** permite la integración continua de nuevas características sin interrumpir las aplicaciones existentes, asegurando que pueda adaptarse a las necesidades industriales en evolución. Las capacidades de **modelado integral de información** de OPC UA también proporcionan una herramienta poderosa para definir estructuras de información complejas, convirtiéndolo en una opción ideal para industrias que requieren soluciones de gestión de datos detalladas y escalables.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

En este tutorial, crearemos un ejemplo práctico de configuración de nuestro reComputer R1000 como servidor OPC UA usando Node-RED. Nos enfocaremos en recopilar datos de dispositivos Modbus TCP y RTU, aunque vale la pena señalar que también puedes recopilar datos de dispositivos MQTT, BACnet y otros. Para fines de demostración, usaremos específicamente Modbus TCP y RTU. Si no estás familiarizado con la recopilación de datos de estos protocolos, consulta nuestros tutoriales anteriores:

- [reComputer R1000 con Node-RED y BACnet IP](https://wiki.seeedstudio.com/es/reComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000 con Node-RED y Modbus TCP](https://wiki.seeedstudio.com/es/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000 con Node-RED y MQTT](https://wiki.seeedstudio.com/es/recomputer_r1000_nodered_mqtt/)

## Instalación del Nodo Servidor OPC-UA

**Acceder a Node-RED en reComputer R1000**

Abre tu navegador web y navega a `http://{reComputer_IP_ADDRESS}:1880` para acceder a la interfaz de Node-RED en tu reComputer R1000.

**Instalar el Nodo Servidor OPC-UA**

En Node-RED, ve al menú superior derecho y selecciona Manage palette.

En la pestaña Install, busca `node-red-contrib-opcua-server`.

Haz clic en el botón Install junto al paquete de nodos para agregarlo a tu entorno Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**Agregar el Nodo Servidor OPC-UA Compacto.**

Después de la instalación, localiza los nodos OPC-UA en la paleta de Node-RED. Arrastra y suelta el nodo compact server en tu espacio de trabajo para comenzar a configurar tu servidor OPC-UA.

## Configuración del Puerto

Después de arrastrar el nodo compact server a tu espacio de trabajo, haz doble clic en él para abrir la configuración.

En el panel de configuración, verás el número de Puerto asignado al servidor. Toma nota de este número de puerto ya que lo necesitarás para los siguientes pasos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**Crear la URL del Endpoint**

Cambia a la pestaña **Discovery** dentro de la configuración.

Aquí, necesitarás crear una **URL del Endpoint** para el servidor OPC-UA.

Usa el siguiente formato para la URL:
`opc.tcp://<IP_reComputer>:<Puerto>`

Por ejemplo, si la dirección IP de tu reComputer es 192.168.0.157 y el puerto asignado es 54840, tu URL del Endpoint sería:
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## Almacenamiento de Variables en el Contexto del Flujo

En Node-RED, la función flow.set() se usa para almacenar datos en el contexto del flujo, permitiéndote guardar información que puede ser accedida por cualquier nodo dentro del mismo flujo. Esto es particularmente útil cuando necesitas compartir datos entre diferentes partes de tu flujo.

**Agregar un Nodo Function**

Arrastra y suelta un nodo Function en tu espacio de trabajo de Node-RED. Haz doble clic en el nodo Function para abrir su editor.

**Almacenar Datos de Temperatura**

Supongamos que quieres almacenar el valor de temperatura de un sensor Modbus RTU como una variable de contexto de flujo. En el editor del nodo Function, ingresa el siguiente código.

```bash
flow.set("Temperature", msg.payload);

```

Este código guarda los datos de temperatura (contenidos en msg.payload) en una variable de contexto de flujo llamada "Temperature".

**Conectando el Nodo Function**

Conecta este nodo Function al nodo donde están llegando los datos de temperatura sin procesar. Esto asegura que el valor de temperatura se almacene tan pronto como se reciba del sensor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**Almacenando Valores PLC DI/DO**

Si necesitas almacenar un valor específico de un array de Entrada/Salida Digital (DI/DO) de PLC, puedes hacerlo usando un enfoque similar. Por ejemplo, para almacenar el valor de la tercera bobina en el array, usa el siguiente código:

```bash
flow.set("Coil3", msg.payload[2]);

```

Este código extrae el tercer valor del array msg.payload y lo almacena en una variable de contexto de flujo llamada "Coil3".

**Conectando el Nodo de Función para DI/DO**

Conecta este nodo de Función al nodo que produce el array DI/DO. Esto almacenará el valor específico de la bobina cada vez que se actualice el array.

## Configuración del Espacio de Direcciones del Servidor OPC UA

La pestaña **Espacio de Direcciones** es donde se construye el Modelo de Información del servidor OPC UA. Este modelo define la estructura y los datos disponibles para los clientes OPC UA, utilizando clases y métodos del SDK node-opcua.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Import the OPC UA SDK and utilities from the coreServer
const opcua = coreServer.choreCompact.opcua;

```

### Creación de Namespace

El **namespace** se crea dentro del espacio de direcciones del servidor. Este namespace contendrá todos los nodos y variables específicos de su aplicación.

```bash
// Create a new namespace for the server within the address space
const namespace = addressSpace.getOwnNamespace();
// Internal reference to the server instance for use within functions
var flexServerInternals = this;

```

### Tipos de Datos y Códigos de Estado de OPC UA

Las clases **Variant, DataType y StatusCodes** del SDK de OPC UA se utilizan para definir los tipos y estados de las variables que serán publicadas por el servidor.

```bash
// Define OPC UA data structures and types for later use
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```

### Inicializando Variables

Las variables que serán publicadas por el servidor se inicializan en el contexto del flujo. Estas variables representan los datos que los clientes leerán o escribirán.

```bash
// Initialize variables in the flow context that will be exposed by the OPC UA server
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### Definición de la Estructura de Carpetas en el Espacio de Direcciones

Se define una estructura de carpetas dentro del espacio de nombres del servidor para organizar los nodos. Esta estructura facilita a los clientes navegar por los datos disponibles.

```bash
// Find the root folder node in the address space
const rootFolder = addressSpace.findNode("RootFolder");

// Add a new device folder under the root for the RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Add subfolders for digital outputs (DIO) and analog values under the device folder
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### Definiendo Vistas de OPC UA

Las vistas de OPC UA son jerarquías personalizadas que proporcionan formas alternativas para que los clientes naveguen por los datos del servidor, además de la estructura de carpetas predeterminada.

```bash
// Create a view for digital outputs (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Create a view for analog values
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Add references to the nodes in the respective views
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Reference to the Humidity node
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Reference to the Coil2 node
});
```

## Conectándose al Servidor OPC UA con UaExpert

Para conectarse a nuestro endpoint del servidor OPC UA, necesitará un cliente OPC UA. Siga estos pasos para comenzar:

**Descargar UaExpert**

[Visite](https://www.unified-automation.com/downloads/opc-ua-clients) y regístrese para descargar UaExpert, un cliente OPC UA gratuito.

**Instalar UaExpert**

Después de descargar, instale UaExpert en su computadora siguiendo las instrucciones en pantalla.

**Configurar la Conexión**

Inicie UaExpert y vaya a la sección Endpoints. Cree una nueva conexión ingresando la URL del endpoint de su servidor OPC UA.
Por ejemplo:`opc.tcp://<IP_reComputer>:<Puerto>`

Ejemplo: `opc.tcp://192.168.0.157:54840`

Configure cualquier configuración de seguridad necesaria o reglas de conexión basadas en la configuración de su servidor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**Conectarse al Servidor**

Una vez que se establezca la conexión, navegue al Address Space en UaExpert. Verá la carpeta principal etiquetada como RaspberryPI-reComputer, que creó en Node-RED. Dentro de esta carpeta principal, encontrará dos subcarpetas: Analog y DIO.

**Monitorear Valores**

Arrastre y suelte las variables de las carpetas Analog y DIO en el área de vista de datos de UaExpert. Ahora puede monitorear visualmente cómo cambian los valores en tiempo real mientras su sistema opera.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

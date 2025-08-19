---
description: Esta wiki proporciona una guía completa para trabajar con el reComputer R1000, un controlador de borde industrial IoT basado en Raspberry Pi 4. Incluye instrucciones para configurar Node-RED, simular temperaturas de habitaciones con YABE y descubrir y leer parámetros de dispositivos BACnet IP para una integración eficiente en sistemas de gestión de edificios (BMS).

title: reComputer R1000 con Node-Red y BACnet IP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción

**BACnet IP** (Building Automation and Control Network over IP) es un protocolo de comunicación diseñado para la gestión y automatización de sistemas en edificios. Permite la interoperabilidad entre dispositivos de diferentes fabricantes en redes IP estándar, mejorando la integración y flexibilidad del sistema. 

Las principales ventajas de **BACnet IP** en los **Sistemas de Gestión de Edificios (BMS)** incluyen:
- Mayor escalabilidad
- Instalación y mantenimiento simplificados
- Uso de la infraestructura de red existente

BACnet IP también permite el intercambio de datos en tiempo real, facilitando un mejor monitoreo y control de los sistemas del edificio. Esto se traduce en una mayor eficiencia energética, reducción de costos operativos y una mejor comodidad y seguridad para los ocupantes.

Este tutorial muestra el proceso de uso de **Node-RED** para leer datos de dispositivos BACnet en el **reComputer R1000** y realizar una visualización en tiempo real. Para ello, utilizamos un **simulador de dispositivos BACnet en una PC con Windows 10** para emular un dispositivo BACnet real. El **reComputer R1000** y la **PC con Windows 10** se conectaron al mismo enrutador para garantizar que estuvieran en el mismo segmento de red y así poder leer y mostrar los datos.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con antelación, como se describe aquí.

### Preparación de Hardware

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

El **reComputer R1000** viene con **Raspberry Pi OS** preinstalado. Si estás iniciando este dispositivo por primera vez, consulta nuestra [Guía de Inicio](https://wiki.seeedstudio.com/reComputer_r/). Para información sobre **Node-RED**, puedes revisar los [siguientes artículos](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda leer esta guía antes de continuar con este tutorial.

En este tutorial, conectaremos una **PC Host** ejecutando el **simulador de temperatura de habitación YABE** con **Node-RED** en el **reComputer R1000**.

### Descarga de Nodos

Este tutorial utiliza los siguientes nodos:
- **node-bacnet-contrib-extended**
- **node-red-contrib-loop**
- **node-red-dashboard**

Asegúrate de descargarlos antes de comenzar. Para más información sobre la descarga de nodos, consulta este [Tutorial](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/).

### YABE

Dirígete a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga **YABE (Yet Another BACnet Explorer)**. YABE es una herramienta versátil que permite simular y explorar dispositivos **BACnet**, lo que lo hace ideal para pruebas y desarrollo. Una vez descargado e instalado en tu **PC Host**, **YABE** se utilizará para simular datos de temperatura de habitación, que luego leeremos y procesaremos utilizando **Node-RED** en el **reComputer R1000**.

## Iniciar el Simulador de Temperatura de Habitación

Una vez instalado **YABE**, navega hasta la carpeta `add-on` y haz doble clic en `bacnet.Room.Simulator` para iniciarlo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

Luego, inicia **YABE**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

Haz clic en el ícono `+` para agregar un dispositivo e ingresa la **dirección IP** del puerto Ethernet de tu PC. Luego, haz clic en **Start**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
Es posible que necesites configurar la dirección IP del puerto Ethernet para asegurarte de que esté en el mismo dominio de red que tanto el **reComputer** como tu **PC**.
:::

## Visualización del Dispositivo Simulado

Después de esto, deberías poder ver el dispositivo con el mismo ID que el simulador de temperatura de habitación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Proceso de Lectura de Dispositivos BACnet en Node-RED

Después de abrir **RoomSimulator**, ya tienes un dispositivo BACnet. Los siguientes pasos te permitirán leer los datos del dispositivo a través de **Node-RED** y mostrarlos en tiempo real.

### Paso 1: Buscar Dispositivos

Primero, necesitas obtener la ubicación del dispositivo BACnet. Puedes usar el nodo **"discover-devices"** para lograr esto. Este nodo buscará todos los dispositivos BACnet conectados a la red y mostrará la **dirección IP** y el **número de dispositivo**.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### Paso 2: Leer Datos

Después de obtener la dirección del dispositivo, puedes comunicarte con él. En este ejemplo, se usa el nodo **"read-single-device"** para leer todos los datos de un dispositivo. 

El nodo necesita la **dirección** y el **número de dispositivo**, que se pueden obtener del **Paso 1**. Podemos usar un nodo **"function"** para capturar esta información y enviarla al nodo **"read-single-device"** para leer los datos del dispositivo. 

Puedes copiar la ruta de los atributos **deviceID** y **Address** en la ventana de depuración a la derecha, y luego asignarlos a las variables en el nodo **"function"**, permitiendo así obtener con precisión la dirección y el número de dispositivo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### Paso 3: Filtrar Datos

En el **Paso 2**, se leen una gran cantidad de datos. Para procesarlos, debemos extraer solo los valores necesarios. 

Aquí, seleccionamos tres datos de temperatura:
- **Temperatura Interior**
- **Temperatura Exterior**
- **Temperatura del Agua**

El procedimiento es el mismo que en el **Paso 2**. Copiamos la ruta de cada dato en la ventana de depuración y luego los extraemos en el nodo **"function"**. Después de esto, estos datos estarán disponibles para su uso en Node-RED.


<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- Debajo se muestra el código para filtrar los datos:

```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```
### Paso 4: Lectura en Bucle

Necesitamos obtener continuamente datos de los dispositivos BACnet, lo que requiere el uso del nodo **"loop"**. Como se muestra en la imagen, introducimos el nodo **"loop"** para ejecutar el bucle basado en el **Paso 3**. Este nodo tiene tres modos de bucle. En este caso, utilizamos el modo **"condition"**, donde se ingresa la condición `1 == 1` para lograr un bucle infinito. 

Además, se añade un nodo **"delay"** para introducir un retraso de **2 segundos** en el bucle, permitiendo la lectura de datos cada 2 segundos.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### Paso 5: Visualización de Datos

A través de los cuatro pasos anteriores, podemos obtener datos de los dispositivos BACnet de forma continua. Para hacer que los cambios en los datos sean más intuitivos, podemos introducir funciones de UI y crear una interfaz interactiva para mostrar la variación de los datos en tiempo real.

Esto se logra utilizando el nodo **"node-red-dashboard"**. En este ejemplo, se usan los nodos **"chart"** y **"gauge"** para generar gráficos y paneles de control en tiempo real. La salida del **Paso 4** se usa como entrada para los nodos **"chart"** y **"gauge"**, permitiendo el monitoreo visual de los datos BACnet en tiempo real.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

Esta sección ha mostrado cómo utilizar los nodos **"node-bacnet-contrib-extended"** y **"node-red-dashboard"** para lograr una lectura visual de datos de dispositivos BACnet. Para obtener más información sobre el uso del nodo **"node-bacnet-contrib-extended"**, puedes consultar [este tutorial](https://wiki.seeedstudio.com/edge_box_rpi_200_node_red_bacnet_tcp/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

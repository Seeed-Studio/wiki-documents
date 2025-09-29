---
description: Esta wiki proporciona una guía completa para trabajar con el reComputer R1000, un controlador edge IoT industrial basado en Raspberry Pi 4. Incluye instrucciones para configurar Node-RED, simular temperaturas de habitación con YABE, y descubrir y leer parámetros de dispositivos BACnet IP para una integración eficiente del Sistema de Gestión de Edificios (BMS).

title: reComputer R1000 con Node-Red y BACnet IP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 06/20/2024
  author: ShuishengPeng
---

## Introducción 
BACnet IP (Building Automation and Control Network over IP) es un protocolo de comunicación diseñado para gestionar y automatizar sistemas de edificios. Permite que dispositivos de diferentes fabricantes interoperen sin problemas a través de redes IP estándar, mejorando la integración del sistema y la flexibilidad. Las principales ventajas de BACnet IP en Sistemas de Gestión de Edificios (BMS) incluyen escalabilidad mejorada, instalación y mantenimiento más fáciles, y la capacidad de aprovechar la infraestructura de red existente. BACnet IP también soporta intercambio de datos en tiempo real, facilitando un mejor monitoreo y control de los sistemas de edificios. Esto resulta en mayor eficiencia energética, costos operativos reducidos, y mayor comodidad y seguridad para los ocupantes.

Este tutorial muestra el proceso de usar node-red para leer datos de dispositivos BACnet en reComputer R1000 y realizar visualización en tiempo real. Utilizamos un simulador de dispositivos BACnet en la PC W10 para simular el dispositivo BACnet real. El reComputer R1000 y la PC W10 se conectaron al mismo router para asegurar que estuvieran en el mismo segmento de red, y luego se leyeron y mostraron los datos.

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

reComputer R1000 llega a tus manos preinstalado con Raspberry Pi OS. Si estás iniciando este dispositivo por primera vez, por favor lee nuestra [Wiki de Introducción](https://wiki.seeedstudio.com/es/reComputer_r/). Para información sobre node-red, puedes consultar las [siguientes publicaciones](https://wiki.seeedstudio.com/es/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda que revises esta guía antes de proceder con la wiki. En este tutorial, vamos a conectar la PC Host ejecutando el simulador de temperatura ambiente YABE con Node-RED ejecutándose en reComputer R1000.

### Descarga de nodos
Este tutorial utiliza el nodo **"node-bacnet-contrib-extended"**, el nodo **"node-red-contrib-loop"**, y el nodo **"node-red-dashboard"**. Por favor descárgalos antes de comenzar. Para saber cómo descargar nodos, puedes consultar el [Tutorial](https://wiki.seeedstudio.com/es/Edge-Box-Getting-Started-with-Node-Red/).
### YABE

Por favor ve a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que te permite simular y explorar dispositivos BACnet, haciéndola ideal para propósitos de prueba y desarrollo. Una vez descargado e instalado en tu PC Host, YABE será usado para simular datos de temperatura ambiente, los cuales luego leeremos y procesaremos usando Node-RED en el reComputer R1000.


## Iniciar Simulador de Controlador de Temperatura Ambiente 

Una vez que hayas instalado YABE, navega a la carpeta `add-on` y haz doble clic en `bacnet.Room.Simulator` para iniciarlo. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

Una vez hecho, necesitas iniciar YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

Luego, haz clic en la marca `+` para agregar un dispositivo e ingresa la dirección IP del puerto Ethernet de tu PC. Haz clic en "Start."

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
Es posible que necesites configurar la dirección IP del puerto Ethernet para asegurarte de que esté en el mismo dominio de red que tanto el reComputer como tu PC.
:::


Después de eso, deberías poder ver el dispositivo con el mismo ID de dispositivo que el simulador de temperatura ambiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## El proceso de lectura de dispositivos BACnet con Node-red
Después de abrir RoomSimulator, tienes un dispositivo BACnet. Los siguientes pasos pueden leer los datos del dispositivo a través de Node-red y mostrarlos.
### Paso 1: Buscar Dispositivos
Primero, necesitas obtener la ubicación del dispositivo BACnet. Puedes usar el nodo `"discover-devices"` para lograr esto. Puede buscar todos los dispositivos BACnet conectados a ti y mostrar la dirección IP y el número de dispositivo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### Paso 2: Leer datos
Después de obtener la dirección del dispositivo, puedes comunicarte con el dispositivo correspondiente. Este ejemplo usa `"read-single-device"` para leer todos los datos en un dispositivo. El nodo necesita la dirección y el número de dispositivo del dispositivo. Estas dos piezas de información se pueden obtener del primer paso. Podemos usar el nodo `"function"` para obtener estas dos informaciones e ingresarlas al nodo `"read-single-device"` para leer los datos del dispositivo. Puedes copiar la ruta de los atributos deviceID y Address en la ventana de depuración de la derecha, y luego asignarlos a las variables en `"function"`, para que puedas obtener con precisión la dirección y el número de dispositivo del dispositivo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### Paso 3: Filtrar datos
Hay muchos elementos de datos leídos en el segundo paso. Necesitamos procesarlos para obtener los elementos de datos que queremos. Aquí extraemos tres datos de temperatura, a saber, "Tempture indoor", "Tempture outdoor", "Tempture Water" es lo mismo que el segundo paso. Copiamos la ruta del elemento de datos correspondiente en la ventana de depuración, y luego lo extraemos en el nodo `"function"`. Después de eso, podemos usar estos tres elementos de datos.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- A continuación está el código para filtrar los datos
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```

### Paso 4: Lectura en bucle
Necesitamos obtener continuamente datos de dispositivos BACnet, lo que requiere el uso del nodo `"loop"`. Como se muestra en la figura, introducimos el nodo `"loop"` para unirse al bucle basado en el tercer paso. El nodo `"loop"` tiene tres modos de bucle. Usamos el modo `"condition"`, se ingresa `"1 == 1"` en la condición del bucle para lograr un bucle infinito. Al mismo tiempo, se añade un nodo `"delay"` para introducir un retraso de 2s en el bucle, de modo que los datos se puedan leer cada 2s.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### Paso 5: Visualización de datos
A través de los 4 pasos anteriores, podemos obtener continuamente datos de dispositivos BACnet. Para hacer que los cambios de datos sean más intuitivos, podemos introducir funciones de UI y dibujar una interfaz interactiva de UI para mostrar los cambios de datos. Esto se puede usar con la implementación del nodo **"node-red-dashboard"**. En este ejemplo, se usan `"chart"` y `"gauge"` para dibujar tres conjuntos de gráficos de líneas y tableros. La salida del paso 4 se usa como entrada de `"chart"` y `"gauge"` para lograr el monitoreo visual en tiempo real de datos BACnet.
<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

Esta sección introduce principalmente cómo usar los nodos **"node-bacnet-contrib-extended"** y **"node-red-dashboard"** para lograr la lectura visual de datos de dispositivos BACnet. Más instrucciones para el uso del nodo **"node-bacnet-contrib-extended"** puedes consultar [este tutorial](https://wiki.seeedstudio.com/es/edge_box_rpi_200_node_red_bacnet_tcp/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

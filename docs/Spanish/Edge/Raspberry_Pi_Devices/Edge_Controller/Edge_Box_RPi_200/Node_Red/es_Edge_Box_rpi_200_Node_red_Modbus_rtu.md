---
description: Aprende a configurar y comunicarte por Modbus RTU usando Edge Box RPi 200 y Node-RED. Esta guía cubre la instalación del nodo Modbus, la configuración del Modbus Getter y del servidor, así como el uso de bloques de función para extraer datos de temperatura y humedad. Sigue las instrucciones paso a paso para integrar dispositivos Modbus RTU en tu entorno IoT industrial. Logra un monitoreo y control eficientes de tus procesos con facilidad.
title: Edge Box RPi 200 con Node-RED y Modbus RS485
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 02/12/2024
  author: Erick González
---

## Introducción

Modbus RTU (Remote Terminal Unit) es un protocolo popular en la automatización industrial para conectar dispositivos como sensores y controladores a través de líneas de comunicación serie. Conocido por su simplicidad y confiabilidad, se utiliza ampliamente en el monitoreo y control de procesos industriales. El Edge Box RPi 200, una puerta de enlace IoT industrial basada en Raspberry Pi, permite la integración de dispositivos Modbus RTU con redes modernas. Mediante Node-RED, una herramienta de desarrollo basada en flujos, esta guía muestra cómo configurar la comunicación Modbus RTU con Edge Box RPi 200. Se destacan aplicaciones como gestión energética, monitoreo ambiental y control de procesos. Este recurso ofrece un enfoque rápido y práctico para aprovechar Modbus RTU en diversos escenarios industriales.

## Antes de Empezar

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software con anticipación, tal como se describe aquí.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Preparación de Software

Edge Box viene con Raspberry Pi OS preinstalado. Si este dispositivo se inicia por primera vez, revisa nuestro [Getting Started Wiki](https://wiki.seeedstudio.com/Edge_Box_introduction/). Además, hemos preparado una [Guía de Inicio con Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Recomendamos revisarla antes de continuar con este wiki. En este tutorial, conectaremos la PC Host que ejecuta el simulador de temperatura de habitación YABE con Node-RED en Edge Box.

### RS485

En el Edge Box RPi 200, hay un puerto RS-485. Puedes encontrar más detalles [aquí](https://wiki.seeedstudio.com/Edge_Box_introduction/#serial-ports--rs232-and-rs485). Antes de trabajar con Node-RED, asegúrate de cablear correctamente el dispositivo.

## Instalar el Nodo Modbus

Para instalar el nodo Modbus, inicia Node-RED en tu Edge Box. Generalmente, se accede abriendo un navegador web y navegando a `http://<tu-ip-edgebox>:1880`. Luego sigue estos pasos:

**Paso 1.** Haz clic en el botón de Configuración, indicado por el ícono de **tres líneas**, ubicado en la esquina superior derecha, luego selecciona **Manage palette.**

**Paso 2.** En la pestaña de paleta, navega a la pestaña **Install**.

**Paso 3.** Usa la barra de búsqueda para encontrar el [nodo Modbus](https://flows.nodered.org/node/node-red-contrib-modbus).

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Paso 4.** Haz clic en el botón **Install** junto al nodo.

**Paso 5.** Si aparece un mensaje, haz clic en el botón **Install** en la ventana de advertencia para confirmar la instalación.

**Paso 6.** Espera a que el proceso de instalación finalice. Una vez completado, el botón **Install** cambiará a **Installed**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificando Direcciones Modbus

Identificar las direcciones Modbus correctas es un paso fundamental. Se recomienda consultar la hoja de datos del PLC, dispositivo o sensor del fabricante para obtener información detallada sobre direcciones Modbus, incluidas las de entrada, salida y registros de retención.

En este ejemplo, usaremos un sensor RS485 SHT20 de temperatura. A través de una interfaz de hardware RS485 (con diseño de protección contra rayos), la capa de protocolo es compatible con el protocolo industrial estándar Modbus-RTU. Al revisar la hoja de datos, encontramos el registro de entrada que proporciona los datos de temperatura y humedad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600, height:'auto'}}/></div>

## Obtener Datos del Dispositivo

Nodos requeridos: `Modbus Getter`, 2 nodos `Function`, 2 nodos `Debug`, `Modbus Response`.

Arrastra y suelta estos nodos y conéctalos de la siguiente manera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600, height:'auto'}}/></div>

### Configurar el Nodo Modbus Getter

1. Haz doble clic en el nodo **Modbus Getter**.
2. Establece **Unit ID** en `1`.
3. Establece **FC** en `FC4: Read Input Registers`.
4. Establece **Address** en `1` (según la hoja de datos del dispositivo).
5. Establece **Quantity** en `2` (para leer dos bloques).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600, height:'auto'}}/></div>

### Configurar el Servidor Modbus

1. En la sección **Server**, haz clic en el botón de lápiz para crear una nueva configuración de servidor.
2. Asigna un nombre al servidor.
3. Ajusta **Type** a `Serial Expert`.
4. Ajusta **Serial Port** a `/dev/ttyACM0`.
5. Ajusta **Serial Type** a `RTU`.
6. Mantén el resto de la configuración por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600, height:'auto'}}/></div>

### Configuración de los Bloques Function

Usamos el bloque Function para extraer los valores relevantes de temperatura y humedad. La salida del nodo getter es un número decimal que contiene partes enteras y decimales, por lo que necesitamos ajustarlo usando matemáticas básicas.

#### Para la Temperatura
```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600, height:'auto'}}/></div>

#### Para la Humedad
```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600, height:'auto'}}/></div>

### Desplegar

Presiona el botón **Deploy**. Verás los valores de humedad y temperatura en la ventana Debug.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

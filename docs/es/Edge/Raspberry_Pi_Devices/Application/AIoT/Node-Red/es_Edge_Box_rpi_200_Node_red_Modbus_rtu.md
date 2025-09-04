---
description: Aprende cómo configurar y establecer la comunicación Modbus RTU usando el Edge Box RPi 200 y Node-RED. Esta guía cubre la instalación del nodo Modbus, la configuración del getter y servidor Modbus, y el uso de bloques de función para extraer datos de temperatura y humedad. Sigue las instrucciones paso a paso para integrar sin problemas dispositivos Modbus RTU con tu configuración de IoT industrial. Logra un monitoreo y control eficiente de tus procesos con facilidad.

title: Edge Box RPi 200 con Node Red y Modbus RS485
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 06/07/2024
  author: Kasun Thushara
---

## Introducción

Modbus RTU (Unidad Terminal Remota) es un protocolo popular en la automatización industrial para conectar dispositivos como sensores y controladores a través de líneas de comunicación serie. Conocido por su simplicidad y confiabilidad, es ampliamente utilizado en el monitoreo y control de procesos industriales. El Edge Box RPi 200, una puerta de enlace IoT industrial basada en Raspberry Pi, permite la integración de dispositivos Modbus RTU con redes modernas. Usando Node-RED, una herramienta de desarrollo basada en flujos, esta wiki guía a los usuarios en la configuración de comunicación Modbus RTU con el Edge Box RPi 200. Destaca aplicaciones como gestión de energía, monitoreo ambiental y control de procesos. Este recurso ofrece un enfoque rápido y práctico para aprovechar Modbus RTU en varios escenarios industriales.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Edge Box llega a tus manos preinstalado con Raspberry Pi OS. Si estás iniciando este dispositivo por primera vez, por favor lee nuestro [Wiki de Introducción](https://wiki.seeedstudio.com/es/Edge_Box_introduction/). Hemos preparado una [Guía de Introducción sobre Node-RED](https://wiki.seeedstudio.com/es/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda que revises esta guía antes de proceder con el wiki. En este tutorial, vamos a conectar la PC Host ejecutando el simulador de temperatura ambiente YABE con Node-RED ejecutándose en Edge Box.

### RS485

En el Edge Box RPi 200, hay un puerto RS-485. Puedes encontrar más detalles [aquí](https://wiki.seeedstudio.com/es/Edge_Box_introduction/#serial-ports--rs232-and-rs485). Antes de trabajar en Node-RED, debes cablear el dispositivo correctamente.

## Instalar Nodo Modbus

Para instalar el nodo Modbus, inicia Node-RED en tu Edge Box. Usualmente puedes acceder navegando en un navegador web a `http://<tu-ip-edgebox>:1880`. Y sigue estos pasos:

**Paso 1.** Haz clic en el botón de Configuración, indicado por un icono de **tres rayas**, ubicado en la esquina superior derecha, luego selecciona **Manage palette.**

**Paso 2.** En la pestaña de paleta, navega a la **pestaña Install**.

**Paso 3.** Usa la barra de búsqueda de nodos para encontrar el [nodo Modbus](https://flows.nodered.org/node/node-red-contrib-modbus) deseado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Paso 4.** Haz clic en el botón **Install** junto al nodo.

**Paso 5.** Si se te solicita, haz clic en el botón **Install** de la ventana de advertencia desplegable para confirmar la instalación.

**Paso 6.** Espera a que el proceso de instalación se complete. Una vez terminado, el botón **Install** debería cambiar a **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificar Direcciones Modbus

Identificar las direcciones Modbus correctas es un paso crucial. Se recomienda consultar la hoja de datos del fabricante del PLC, dispositivo o sensor para obtener información detallada sobre las direcciones Modbus, incluyendo registros de entrada, salida y retención.

Aquí vamos a usar el Sensor de Temperatura SHT20 RS485. Usando una interfaz de hardware RS485 (con diseño de protección contra rayos), la capa de protocolo es compatible con el protocolo industrial estándar Modbus-Rtu. Cuando exploramos la hoja de datos podemos encontrar el registro de entrada que proporciona los datos de temperatura y humedad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600,
height:'auto'}}/></div>

## Obtener Datos del Dispositivo

Nodos requeridos: `Modbus Getter`, 2 nodos `Function`, 2 nodos `Debug`, `Modbus Response`.

Arrastra y suelta estos nodos y conéctalos según la siguiente manera/orden.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Configurar Nodo Modbus Getter

1. Haz doble clic en el nodo **Modbus Getter**.
2. Establece **Unit ID** en `1`.
3. Establece **FC** en `FC4: Read Input Registers`.
4. Establece **Address** en `1` (como se proporciona en la hoja de datos del dispositivo de simulación).
5. Establece **Quantity** en `2` (para leer dos bloques).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600,
height:'auto'}}/></div>

### Configurar Servidor Modbus

1. En la sección **Server**, haz clic en el botón del lápiz para crear una nueva configuración de servidor.
2. Dale un nombre al servidor.
3. Establece **Type** en `Serial Expert`.
4. Establece **Serial Port** en `/dev/ttyACM0`.
5. Establece **Serial Type** en `RTU`.
6. Mantén las otras configuraciones como están.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Configuración de Bloques Function

Usamos el bloque function para extraer los valores relevantes de temperatura y humedad. La salida del nodo getter es un número decimal que contiene tanto partes enteras como de punto flotante, por lo que necesitamos ajustar usando matemáticas básicas.

#### Para Temperatura

```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

#### Para Humedad

```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

### Desplegar

Presiona el botón **Deploy**. Verás los valores de humedad y temperatura en la ventana de depuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800,
height:'auto'}}/></div>

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

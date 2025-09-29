---
description: Aprende cómo integrar Modbus TCP con Node-RED en el EdgeBox RPi 200. Esta guía cubre la configuración del hardware, la configuración de dispositivos Modbus, y la creación de flujos de Node-RED para automatización industrial y monitoreo eficientes.
title: Edge Box RPi 200 con Node Red y Modbus TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
---
## Introducción

**Modbus** es un protocolo de comunicación ampliamente utilizado en entornos industriales, conocido por su simplicidad y robustez. **Modbus RTU (Unidad Terminal Remota)** es un protocolo de comunicación serie que opera sobre capas físicas RS-232 o RS-485. Utiliza una representación binaria compacta de los datos, haciéndolo eficiente para la transmisión a largas distancias y en entornos ruidosos. **Modbus TCP**, por otro lado, extiende el protocolo a redes Ethernet, encapsulando tramas Modbus dentro de paquetes TCP/IP. Esto permite velocidades de comunicación más rápidas y la integración de Modbus con la infraestructura de TI moderna. Ambas versiones son favorecidas en entornos industriales debido a su confiabilidad, facilidad de implementación, y capacidad para facilitar la comunicación entre una amplia variedad de dispositivos y sistemas, como PLCs, sensores, y sistemas SCADA.

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

#### Dispositivos compatibles con Modbus

El EdgeBox RPi 200 es compatible con la comunicación Modbus con varios dispositivos, incluyendo **PLCs, VFDs, HMIs, medidores de energía y sistemas BMS**. Para este caso, se utilizará el PLC Siemens LOGO, que es compatible con **protocolos Modbus TCP/IP**.

### Preparación del software

Edge Box-200 llega a tus manos con Raspberry Pi OS preinstalado. Si estás iniciando este dispositivo por primera vez, por favor lee nuestro Wiki de [Primeros pasos](https://wiki.seeedstudio.com/es/Edge_Box_introduction/).
Hemos preparado una [Guía de primeros pasos sobre Node-RED](https://wiki.seeedstudio.com/es/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda que revises esta guía antes de proceder al wiki.

### Configurar ajustes de Ethernet para Modbus TCP/IP

Dado que el dominio IP de tu PLC/Dispositivo es diferente de tus configuraciones inalámbricas, es posible que tengas que cambiar la configuración IP manualmente. Para eso,

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Luego configure los ajustes del puerto Ethernet según el dominio de red de su PLC/Dispositivo y establezca prioridades usando el comando **metric**. La métrica más baja tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Instalar el nodo Modbus

Para instalar el nodo Modbus, siga estos pasos:

**Paso 1.** Haga clic en el botón Configuración, indicado por un icono de **tres rayas**, ubicado en la esquina superior derecha, luego seleccione **Manage palette.**

**Paso 2.** En la pestaña de paleta, navegue a la **pestaña Install**.

**Paso 3.** Use la barra de búsqueda de nodos para encontrar el [nodo Modbus](https://flows.nodered.org/node/node-red-contrib-modbus) deseado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Paso 4.** Haga clic en el botón **Install** junto al nodo.

**Paso 5.** Si se le solicita, haga clic en el botón **Install** de la ventana de advertencia desplegable para confirmar la instalación.

**Paso 6.** Espere a que se complete el proceso de instalación. Una vez terminado, el botón **Install** debería cambiar a **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificar Direcciones Modbus

Identificar las direcciones Modbus correctas es un paso crucial. Se recomienda **consultar la hoja de datos del fabricante del PLC o dispositivo para obtener información detallada sobre las direcciones Modbus, incluyendo registros de entrada, salida y retención**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Basándose en esta información, puede ajustar la dirección Modbus en la configuración de etiquetas. Por ejemplo, si la hoja de datos lista la bobina de salida Q1 como 8193, debe configurar la dirección como 8192 en Node-RED (**decrementando en uno desde la dirección original**). De manera similar, si una entrada de red está listada como 1 y es de tipo bobina, la dirección debe establecerse en 0 en Node-RED.

## Configurar el Nodo Modbus-Write

**Paso 1**. **Arrastre y suelte** el nodo Modbus-Write en el espacio de trabajo, luego **haga doble clic** en el nodo para abrir su configuración.

**Paso 2**. En la pestaña **Server**, edítela para agregar su dispositivo ingresando los siguientes detalles:

- **Name**: Nombre del Servidor
- **Type**: TCP
- **Host**: Dirección IP del servidor Modbus
- **Port**: Dirección de puerto del servidor Modbus (típicamente 502)
- **Unit-Id**: 255 (Unit-ID se usa para identificar dispositivos individuales dentro de una red Modbus, especialmente cuando múltiples dispositivos comparten la misma línea de comunicación)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 3**. **Asigne a su nodo un nombre apropiado**, por ejemplo, "Network IP 1". Para esta demostración, está controlando una entrada de red en el programa PLC.

**Paso 4**. Configure la **opción FC** a **FC 5: Force Single Coil**.

**Paso 5**. Configure la **dirección a 0** (ya que estamos direccionando la entrada 0).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 6**. Usando el nodo inject, podemos inyectar valores booleanos. Aquí, usaremos un par de nodos inject para ese propósito.

Los pasos generales se pueden demostrar como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Configurando el Nodo Modbus-Read

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Read en el flujo. Puedes encontrar este nodo en la pestaña Modbus de tu paleta.

**Paso 2**. **Haz doble clic** en el nodo Modbus-Read para abrir su configuración.

**Paso 3**. **Configura las siguientes opciones:**

- **Name**: Dale un nombre apropiado, como "ReadOutputs".
- **FC value**: Cambia el valor FC a FC 5: Read Coil Status.
- **Address**: Establece la dirección en 8192 (según la hoja de datos del fabricante).
- **Quantity**: Establece la cantidad en 4, En este caso, hay 4 salidas digitales.
- **Poll Rate**: Cambia la tasa de sondeo a algo adecuado para las necesidades de tu aplicación.
- **Server**: Establece el servidor en "MyPLC" (configurado en el ejemplo anterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## Configurando el Nodo Modbus-Response

El **nodo Modbus-Response** se utiliza para mostrar la respuesta de un nodo Modbus Read/Write.

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Response en el flujo.

**Paso 2**. Conecta con el **Nodo Modbus Read**. La respuesta mostrará un array de números bajo tu nodo Modbus-Response. Estos números representan el conteo de cada salida digital.

**Paso 3**. **Arrastra y Suelta el Nodo Debug** para propósitos de inspección. Luego conecta con el **Nodo Modbus Read**.

Siguiendo estos pasos, puedes leer y mostrar los valores de registros/bobinas de tu dispositivo Modbus TCP de manera efectiva

Los pasos generales se pueden demostrar de la siguiente manera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

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

---
description: Aprende cómo integrar Modbus TCP con Node-RED en EdgeBox RPi 200. Esta guía cubre la configuración de hardware, la configuración de dispositivos Modbus y la creación de flujos Node-RED para automatización y monitoreo industrial eficientes.
title: Edge Box RPi 200 con Node-RED y Modbus TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

**Modbus** es un protocolo de comunicación muy utilizado en entornos industriales, reconocido por su simplicidad y robustez. **Modbus RTU (Remote Terminal Unit)** es un protocolo de comunicación serie que opera sobre capas físicas RS-232 o RS-485. Utiliza una representación binaria compacta de los datos, lo que lo hace eficiente para la transmisión a largas distancias y en entornos ruidosos. **Modbus TCP**, por otro lado, extiende el protocolo a redes Ethernet, encapsulando tramas Modbus dentro de paquetes TCP/IP. Esto permite velocidades de comunicación más rápidas e integra Modbus con infraestructuras de TI modernas. Ambas versiones se prefieren en entornos industriales por su fiabilidad, facilidad de implementación y capacidad para facilitar la comunicación entre una amplia variedad de dispositivos y sistemas, como PLCs, sensores y sistemas SCADA.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software con antelación, tal como se describe aquí.

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

#### Dispositivos con Soporte Modbus

El EdgeBox RPi 200 admite la comunicación Modbus con varios dispositivos, incluidos **PLCs, VFDs, HMIs, medidores de energía y sistemas BMS**. En este caso, se utilizará un PLC Siemens LOGO, que es compatible con protocolos **Modbus TCP/IP**.

### Preparación de Software

Edge Box-200 viene con Raspberry Pi OS preinstalado. Si es la primera vez que inicias este dispositivo, por favor revisa nuestro [Getting Started](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki.
También hemos preparado una [Guía de Inicio con Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Recomendamos revisarla antes de continuar con este wiki.

### Configurar ajustes de Ethernet para Modbus TCP/IP

Dado que el dominio IP de tu PLC/Dispositivo puede diferir de tu configuración inalámbrica, es posible que tengas que cambiar la configuración de IP manualmente. Para ello:

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Luego, configura la interfaz Ethernet según el dominio de red de tu PLC/Dispositivo y establece prioridades usando el comando **metric**. Un metric más bajo tiene mayor prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Instalar el nodo Modbus

Para instalar el nodo Modbus, sigue estos pasos:

**Paso 1.** Haz clic en el botón de Configuración (ícono de **tres líneas**), ubicado en la esquina superior derecha, luego selecciona **Manage palette**.

**Paso 2.** En la pestaña de paleta, ve a la pestaña **Install**.

**Paso 3.** Usa la barra de búsqueda de nodos para encontrar el [nodo Modbus](https://flows.nodered.org/node/node-red-contrib-modbus).

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Paso 4.** Haz clic en el botón **Install** junto al nodo.

**Paso 5.** Si se te solicita, haz clic en el botón **Install** en la ventana de advertencia para confirmar la instalación.

**Paso 6.** Espera a que finalice el proceso de instalación. Una vez completado, el botón **Install** cambiará a **Installed**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificar Direcciones Modbus

Identificar las direcciones correctas de Modbus es un paso crucial. Se recomienda **consultar la hoja de datos del PLC o dispositivo** para obtener información detallada sobre direcciones Modbus, incluidas las de entrada, salida y registros de retención.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Con esta información, puedes ajustar la dirección Modbus en la configuración de tags. Por ejemplo, si la hoja de datos lista la bobina de salida Q1 como 8193, deberías configurar la dirección como 8192 en Node-RED (**restando uno a la dirección original**). De igual modo, si se enumera una entrada de red como 1 y es de tipo coil, la dirección en Node-RED debería ser 0.

## Configurar el Nodo Modbus-Write

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Write al espacio de trabajo, luego **haz doble clic** para abrir sus ajustes.
   
**Paso 2**. En la pestaña **Server**, edítala para agregar tu dispositivo ingresando los siguientes detalles:

   - **Name**: Nombre del servidor
   - **Type**: TCP
   - **Host**: Dirección IP del servidor Modbus
   - **Port**: Puerto del servidor Modbus (normalmente 502)
   - **Unit-Id**: 255 (Unit-ID se usa para identificar dispositivos en una red Modbus, especialmente cuando varios dispositivos comparten la misma línea de comunicación)

<div style={{textAlign:'center'}}>
<img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG"/></div>

**Paso 3**. **Asigna un nombre apropiado** al nodo, por ejemplo, "Network IP 1". Para este demo, estás controlando una entrada de red en el programa del PLC.

**Paso 4**. Ajusta la opción **FC** a **FC 5: Force Single Coil**.

**Paso 5**. Establece la **dirección en 0** (ya que estamos dirigiendo la entrada 0).

<div style={{textAlign:'center'}}><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" /></div>

**Paso 6**. Usando el nodo inject, podemos inyectar valores booleanos. Aquí utilizaremos un par de nodos inject para ese propósito.

Los pasos generales pueden demostrarse como sigue:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Configurar el Nodo Modbus-Read

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Read al flujo. Puedes encontrar este nodo en la pestaña Modbus de tu paleta.

**Paso 2**. **Haz doble clic** en el nodo Modbus-Read para abrir sus ajustes.

**Paso 3**. **Configura los siguientes parámetros:**

   - **Name**: Asigna un nombre apropiado, como "ReadOutputs".
   - **FC value**: Cambia el valor FC a FC 5: Read Coil Status.
   - **Address**: Establece la dirección en 8192 (según la hoja de datos del fabricante).
   - **Quantity**: Establece la cantidad en 4 (en este caso, hay 4 salidas digitales).
   - **Poll Rate**: Ajusta la frecuencia de sondeo de acuerdo a tus necesidades.
   - **Server**: Ajusta el servidor a "MyPLC" (configurado en el ejemplo anterior).

<div style={{textAlign:'center'}}><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" /></div> 

## Configurar el Nodo Modbus-Response

El **nodo Modbus-Response** se utiliza para mostrar la respuesta de un nodo Modbus Read/Write.

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Response al flujo.

**Paso 2**. Conéctalo con el nodo **Modbus Read**. La respuesta mostrará un arreglo de números bajo tu nodo Modbus-Response. Estos números representan el estado de cada salida digital.

**Paso 3**. **Arrastra y suelta un nodo Debug** para propósitos de inspección. Luego conéctalo con **Modbus Read Node**.

Siguiendo estos pasos, podrás leer y mostrar los valores de registros/bobinas de tu dispositivo Modbus TCP de forma efectiva.

Los pasos generales pueden verse así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

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

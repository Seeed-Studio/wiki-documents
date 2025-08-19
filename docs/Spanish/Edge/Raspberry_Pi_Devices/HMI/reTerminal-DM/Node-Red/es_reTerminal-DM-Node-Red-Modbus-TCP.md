---
description: Aprende a integrar Modbus TCP con Node-RED en el reTerminal DM. Esta guía cubre la configuración del hardware, la configuración de dispositivos Modbus y la creación de flujos Node-RED para una automatización y supervisión industriales eficientes.
title: reTerminal DM con Nodo Red y Modbus TCP
keywords:
  - HMI
  - reTerminal DM
  - Node-Red
  - Modbus
  - Raspberry
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png
slug: /es/reterminal_dm_node_red_modbus_tcp
last_update:
  date: 04/06/2025
  author: Erick González
---
## Introducción

**Modbus** es un protocolo de comunicación ampliamente utilizado en entornos industriales, conocido por su simplicidad y robustez. **Modbus RTU (Remote Terminal Unit)** es un protocolo de comunicación serial que opera sobre capas físicas RS-232 o RS-485. Utiliza una representación compacta y binaria de los datos, lo que lo hace eficiente para la transmisión a largas distancias y en entornos ruidosos. **Modbus TCP**, por otro lado, extiende el protocolo a redes Ethernet, encapsulando los tramas de Modbus en paquetes TCP/IP. Esto permite velocidades de comunicación más rápidas y la integración de Modbus con infraestructura de IT moderna. Ambas versiones son favorecidas en entornos industriales por su fiabilidad, facilidad de implementación y capacidad para facilitar la comunicación entre una amplia variedad de dispositivos y sistemas, tales como PLCs, sensores y sistemas SCADA.

## Empezando

Antes de comenzar este proyecto, es posible que debas preparar tu hardware y software con antelación, como se describe a continuación.

### Hardware

<div class="table-center">
	<table class="table-nobg">
	    <tr class="table-trnobg">
	      <th class="table-trnobg">reTerminal DM</th>
		</tr>
	    <tr class="table-trnobg"></tr>
	    <tr class="table-trnobg">
	        <td class="table-trnobg">
	            <div style={{textAlign:'center'}}>
	                <img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/>
	            </div>
	        </td>
	    </tr>
	    <tr class="table-trnobg"></tr>
	    <tr class="table-trnobg">
	        <td class="table-trnobg">
	            <div class="get_one_now_container" style={{textAlign: 'center'}}>
	                <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
	                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
	                </a>
	            </div>
	        </td>
	    </tr>
    </table>
</div>

#### Dispositivos compatibles con Modbus

El reTerminal DM es compatible con la comunicación Modbus con diversos dispositivos, incluidos **PLCs, VFDs, HMIs, medidores de energía y sistemas BMS**. En este caso, se utilizará un PLC Siemens LOGO, el cual soporta protocolos **Modbus TCP/IP**. Conecta el reTerminal DM mediante un puerto Ethernet a un dispositivo habilitado para Modbus TCP.

### Preparación del Software

Se recomienda consultar la [Guía de Primeros Pasos con Node-RED](https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Node-Red/) antes de continuar con esta wiki.

### Configurar la configuración de Ethernet para Modbus TCP/IP

Dado que el dominio IP de tu PLC/dispositivo es diferente al de tu red inalámbrica, es posible que debas cambiar manualmente la configuración de IP. Para ello:

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura los ajustes del puerto Ethernet de acuerdo con el dominio de red de tu PLC/dispositivo y establece prioridades utilizando el comando **metric**. La métrica más baja tiene la mayor prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG" /></center>

## Instalar el Nodo Modbus

Para instalar el nodo Modbus, sigue estos pasos:

**Paso 1.** Haz clic en el botón Settings, indicado por un icono de **tres rayas**, ubicado en la esquina superior derecha, y selecciona **Manage palette**.

**Paso 2.** En la pestaña de la paleta, dirígete a la pestaña **Install**.

**Paso 3.** Utiliza la barra de búsqueda para encontrar el [nodo Modbus](https://flows.nodered.org/node/node-red-contrib-modbus).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/pallet.PNG" /></center>

**Paso 4.** Haz clic en el botón **Install** junto al nodo.

**Paso 5.** Si se te solicita, haz clic en el botón **Install** en la ventana emergente de advertencia para confirmar la instalación.

**Paso 6.** Espera a que finalice el proceso de instalación. Una vez completado, el botón **Install** cambiará a **Installed**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificación de Direcciones Modbus

Identificar las direcciones Modbus correctas es un paso crucial. Se recomienda **consultar la hoja de datos del fabricante del PLC o dispositivo para obtener información detallada sobre las direcciones Modbus, incluidos registros de entrada, salida y de retención**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Según esta información, puedes ajustar la dirección Modbus en la configuración de etiquetas. Por ejemplo, si la hoja de datos indica que la bobina de salida Q1 es 8193, deberás configurar la dirección como 8192 en Node-RED (**restando uno a la dirección original**). De igual forma, si una entrada de red se indica como 1 y es de tipo bobina, la dirección se debe establecer en 0 en Node-RED.

## Configuración del Nodo Modbus-Write

**Paso 1.** **Arrastra y suelta** el nodo Modbus-Write en el área de trabajo, y **haz doble clic** en él para abrir su configuración.
   
**Paso 2.** En la pestaña **Server**, edita para agregar tu dispositivo ingresando los siguientes detalles:

   - **Nombre**: Server Name  
   - **Tipo**: TCP  
   - **Host**: Dirección IP del servidor Modbus  
   - **Puerto**: Dirección de puerto del servidor Modbus (típicamente 502)  
   - **Unit-Id**: 255 (El Unit-ID se utiliza para identificar dispositivos individuales dentro de una red Modbus, especialmente cuando múltiples dispositivos comparten la misma línea de comunicación)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 3.** **Asigna un nombre apropiado** al nodo, por ejemplo, "Network IP 1". En este demo, se controla una entrada de red en el programa PLC.

**Paso 4.** Establece la opción **FC** en **FC 5: Force Single Coil**.

**Paso 5.** Configura la dirección en **0** (ya que se está direccionando la entrada 0).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 6.** Con un nodo inject, se pueden inyectar valores booleanos. Para este demo, se utilizarán un par de nodos inject para ese propósito.

Los pasos generales se pueden demostrar de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Configuración del Nodo Modbus-Read

**Paso 1.** **Arrastra y suelta** el nodo Modbus-Read en el flujo. Lo encontrarás en la pestaña Modbus de tu paleta.

**Paso 2.** **Haz doble clic** en el nodo Modbus-Read para abrir su configuración.

**Paso 3.** **Configura los siguientes parámetros:**

   - **Nombre**: Asígnale un nombre apropiado, por ejemplo, "ReadOutputs".  
   - **FC value**: Cambia el valor FC a FC 5: Read Coil Status.  
   - **Dirección**: Establece la dirección en 8192 (según la hoja de datos del fabricante).  
   - **Cantidad**: Establece la cantidad en 4, en este caso, hay 4 salidas digitales.  
   - **Frecuencia de sondeo (Poll Rate)**: Cambia la frecuencia de sondeo a un valor adecuado para tu aplicación.  
   - **Servidor**: Selecciona el servidor "MyPLC" (configurado en el ejemplo anterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## Configuración del Nodo Modbus-Response

El nodo **Modbus-Response** se utiliza para mostrar la respuesta de un nodo de lectura/escritura Modbus.

**Paso 1.** **Arrastra y suelta** el nodo Modbus-Response en el flujo.

**Paso 2.** Conéctalo al nodo Modbus-Read. La respuesta mostrará un arreglo de números bajo el nodo Modbus-Response. Estos números representan el estado de cada salida digital.

**Paso 3.** **Arrastra y suelta un nodo Debug** para fines de inspección y conéctalo al nodo Modbus-Read.

Siguiendo estos pasos, podrás leer y mostrar los valores de registros/bobinas de tu dispositivo Modbus TCP de manera eficiente.

Los pasos generales se pueden demostrar de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

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

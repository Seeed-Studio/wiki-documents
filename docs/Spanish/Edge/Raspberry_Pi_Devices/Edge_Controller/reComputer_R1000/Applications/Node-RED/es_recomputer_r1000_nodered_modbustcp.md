---
description: Aprende a integrar Modbus TCP con Node-RED en el reComputer R1000. Esta guía cubre la configuración del hardware, la configuración de dispositivos Modbus y la creación de flujos en Node-RED para una automatización y monitoreo industrial eficientes.
title: reComputer R1000 con Node-RED y Modbus TCP
keywords:
  - Controlador Edge
  - reComputer R1000
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_node_red_modbus_tcp
last_update:
  date: 07/04/2024
  author: Kasun Thushara
---

## Introducción

**Modbus** es un protocolo de comunicación ampliamente utilizado en entornos industriales, conocido por su simplicidad y robustez. **Modbus RTU (Remote Terminal Unit)** es un protocolo de comunicación en serie que opera sobre las capas físicas RS-232 o RS-485. Utiliza una representación binaria compacta de los datos, lo que lo hace eficiente para la transmisión en largas distancias y en entornos ruidosos. **Modbus TCP**, por otro lado, extiende el protocolo a redes Ethernet, encapsulando tramas Modbus dentro de paquetes TCP/IP. Esto permite velocidades de comunicación más rápidas y la integración de Modbus con infraestructuras de TI modernas. Ambas versiones son favorecidas en entornos industriales por su fiabilidad, facilidad de implementación y capacidad para facilitar la comunicación entre una amplia variedad de dispositivos y sistemas, como PLCs, sensores y sistemas SCADA.

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
<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
</a></div></td>
</tr>
</table>
</div>

#### Dispositivos Compatibles con Modbus

El reComputer R1000 es compatible con la comunicación Modbus con diversos dispositivos, incluidos **PLCs, VFDs, HMIs, medidores de energía y sistemas BMS**. En este caso, se utilizará el PLC Siemens LOGO, que admite los **protocolos Modbus TCP/IP**.

---
description: Aprende a integrar Modbus TCP con Node-RED en el reComputer R1000. Esta guía cubre la configuración del hardware, la configuración de dispositivos Modbus y la creación de flujos en Node-RED para una automatización y monitoreo industrial eficientes.
title: reComputer R1000 con Node-RED y Modbus TCP
keywords:
  - Controlador Edge
  - reComputer R1000
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_node_red_modbus_tcp
last_update:
  date: 07/04/2024
  author: Kasun Thushara
---

## Introducción

**Modbus** es un protocolo de comunicación ampliamente utilizado en entornos industriales, conocido por su simplicidad y robustez. **Modbus RTU (Remote Terminal Unit)** es un protocolo de comunicación en serie que opera sobre las capas físicas RS-232 o RS-485. Utiliza una representación binaria compacta de los datos, lo que lo hace eficiente para la transmisión en largas distancias y en entornos ruidosos. **Modbus TCP**, por otro lado, extiende el protocolo a redes Ethernet, encapsulando tramas Modbus dentro de paquetes TCP/IP. Esto permite velocidades de comunicación más rápidas y la integración de Modbus con infraestructuras de TI modernas. Ambas versiones son favorecidas en entornos industriales por su fiabilidad, facilidad de implementación y capacidad para facilitar la comunicación entre una amplia variedad de dispositivos y sistemas, como PLCs, sensores y sistemas SCADA.

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
<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
</a></div></td>
</tr>
</table>
</div>

#### Dispositivos Compatibles con Modbus

El reComputer R1000 es compatible con la comunicación Modbus con diversos dispositivos, incluidos **PLCs, VFDs, HMIs, medidores de energía y sistemas BMS**. En este caso, se utilizará el PLC Siemens LOGO, que admite los **protocolos Modbus TCP/IP**.

### Preparación del Software

El reComputer R1000 viene con Raspberry Pi OS preinstalado. Si es la primera vez que inicias este dispositivo, consulta nuestra [Guía de Inicio](https://wiki.seeedstudio.com/recomputer_r/). También hemos preparado una [Guía de Inicio en Node-RED](https://wiki.seeedstudio.com/recomputer_r1000_getting_started_node_red/), que se recomienda revisar antes de proceder.

### Configurar los ajustes de Ethernet para Modbus TCP/IP

Como el dominio de IP de tu PLC/dispositivo puede ser diferente de tu configuración inalámbrica, es posible que debas cambiar la configuración de IP manualmente. Para ello:

- **Paso 01**: Ejecuta el siguiente comando si estás usando **Bullseye**:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura los ajustes del puerto Ethernet de acuerdo con la red de tu PLC/Dispositivo y establece prioridades utilizando el comando **metric**. Un valor más bajo en metric tiene mayor prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **Paso 01**: Si estás usando **Bookworm OS**, puedes utilizar la interfaz gráfica y hacer clic en el icono de red. En las opciones avanzadas, selecciona "Editar Conexiones".

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **Paso 02**: Selecciona "Wired Connection 2" (ETH 1) y agrega la dirección, máscara de red y puerta de enlace en la configuración de IPv4.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Instalar el nodo Modbus

Para instalar el nodo Modbus, sigue estos pasos:

**Paso 1.** Haz clic en el botón de Configuración (ícono de **tres líneas**) en la esquina superior derecha y selecciona **Administrar paleta.**

**Paso 2.** En la pestaña de instalación, usa la barra de búsqueda para encontrar el nodo [Modbus](https://flows.nodered.org/node/node-red-contrib-modbus).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/pallet.PNG" /></center>

**Paso 3.** Haz clic en **Instalar**.

**Paso 4.** Si aparece una advertencia, confirma la instalación.

**Paso 5.** Espera a que finalice la instalación. Una vez completada, el botón **Instalar** cambiará a **Instalado**.

**Paso 6.** Espera a que el proceso de instalación se complete. Una vez finalizado, el botón **Instalar** cambiará a **Instalado.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificación de Direcciones Modbus

Identificar correctamente las direcciones Modbus es un paso crucial. Se recomienda **consultar la hoja de datos del fabricante del PLC o dispositivo para obtener información detallada sobre las direcciones Modbus, incluidos registros de entrada, salida y retención**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Basado en esta información, puedes ajustar la dirección Modbus en la configuración de etiquetas. Por ejemplo, si la hoja de datos enumera la bobina de salida Q1 como 8193, debes configurar la dirección como 8192 en Node-RED (**disminuyendo en uno respecto a la dirección original**). De manera similar, si una entrada de red está listada como 1 y es de tipo bobina, la dirección debe establecerse en 0 en Node-RED.

## Configuración del Nodo Modbus-Write

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Write en el espacio de trabajo y luego **haz doble clic** en el nodo para abrir su configuración.

**Paso 2**. En la pestaña **Servidor**, edítala para agregar tu dispositivo ingresando los siguientes detalles:

   - **Nombre**: Nombre del Servidor
   - **Tipo**: TCP
   - **Host**: Dirección IP del servidor Modbus
   - **Puerto**: Dirección del puerto del servidor Modbus (típicamente 502)
   - **Unit-ID**: 255 (El Unit-ID se usa para identificar dispositivos individuales dentro de una red Modbus, especialmente cuando varios dispositivos comparten la misma línea de comunicación)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 3**. **Asigna un nombre apropiado a tu nodo**, por ejemplo, "Red IP 1". Para esta demostración, estás controlando una entrada de red en el programa del PLC.

**Paso 4**. Configura la opción **FC** en **FC 5: Forzar una sola bobina**.

**Paso 5**. Establece la **dirección en 0** (ya que estamos dirigiendo la entrada 0).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 6**. Usando el nodo inject, podemos inyectar valores booleanos. Aquí, utilizaremos un par de nodos inject para ese propósito.

Los pasos generales se pueden demostrar de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>


## Configuración del Nodo Modbus-Read

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Read en el flujo. Puedes encontrar este nodo en la pestaña Modbus de tu paleta.

**Paso 2**. **Haz doble clic** en el nodo Modbus-Read para abrir su configuración.

**Paso 3**. **Configura los siguientes parámetros:**

   - **Nombre**: Asigna un nombre apropiado, como "LeerSalidas".
   - **Valor FC**: Cambia el valor FC a FC 5: Leer Estado de Bobina.
   - **Dirección**: Establece la dirección en 8192 (según la hoja de datos del fabricante).
   - **Cantidad**: Ajusta la cantidad a 4, en este caso hay 4 salidas digitales.
   - **Tasa de sondeo**: Ajusta la tasa de sondeo a un valor adecuado según las necesidades de tu aplicación.
   - **Servidor**: Configura el servidor como "MiPLC" (configurado en el ejemplo anterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>


## Configuración del Nodo Modbus-Response

El **nodo Modbus-Response** se utiliza para mostrar la respuesta de un nodo Modbus Read/Write.

**Paso 1**. **Arrastra y suelta** el nodo Modbus-Response en el flujo.

**Paso 2**. Conéctalo con el nodo **Modbus Read**. La respuesta mostrará un array de números debajo del nodo Modbus-Response. Estos números representan el conteo de cada salida digital.

**Paso 3**. **Arrastra y suelta un Nodo Debug** para propósitos de inspección. Luego, conéctalo con el **nodo Modbus Read**.

Siguiendo estos pasos, puedes leer y mostrar los valores de registros/bobinas desde tu dispositivo Modbus TCP de manera efectiva.

Los pasos generales se pueden demostrar de la siguiente manera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes opciones de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
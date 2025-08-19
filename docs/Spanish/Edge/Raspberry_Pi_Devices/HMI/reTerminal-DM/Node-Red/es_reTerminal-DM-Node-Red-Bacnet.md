---
description: Esta wiki ofrece una guía completa para trabajar con el reTerminal DM, una HMI industrial IoT edge basada en Raspberry Pi 4. Incluye instrucciones para configurar Node-RED, simular temperaturas de sala con YABE y descubrir y leer parámetros de dispositivos BACnet IP para una integración eficiente en sistemas de gestión de edificios (BMS).
title: reTerminal DM con Node-RED y BACnet TCP
keywords:
  - BMS
  - HMI
  - Raspberry pi
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png
slug: /es/reterminal_dm_rpi_200_node_red_bacnet_tcp
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

BACnet IP (Building Automation and Control Network over IP) es un protocolo de comunicación diseñado para la gestión y automatización de sistemas de edificios. Permite la interconexión sin fisuras entre dispositivos de diferentes fabricantes a través de redes IP estándar, mejorando la integración y flexibilidad de los sistemas. Las principales ventajas de BACnet IP en los sistemas de gestión de edificios (BMS) incluyen mayor escalabilidad, instalación y mantenimiento simplificados, y la posibilidad de aprovechar la infraestructura de red existente. Además, BACnet IP soporta el intercambio de datos en tiempo real, lo que facilita un mejor monitoreo y control de los sistemas del edificio. Esto se traduce en una mayor eficiencia energética, reducción de costos operativos y una mejor comodidad y seguridad para sus ocupantes.

## Empezando

Antes de comenzar este proyecto, es posible que debas preparar tu hardware y software previamente, como se describe a continuación.

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

### Preparación del Software

Hemos preparado una [Guía de Primeros Pasos con Node-RED](https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Node-Red/). Se recomienda repasar esta guía antes de continuar con esta wiki.

### YABE

Por favor, visita este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que te permite simular y explorar dispositivos BACnet, lo que la hace ideal para pruebas y desarrollo. Una vez descargado e instalado en tu PC anfitrión, YABE se usará para simular datos de temperatura ambiente, que luego se leerán y procesarán en Node-RED ejecutándose en el reTerminal DM.

### Configurar la configuración de Ethernet para BACnet IP

Dado que el dominio de IP de tu dispositivo es diferente al de tu red inalámbrica, puede que debas cambiar manualmente la configuración de IP. Para ello:

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Configura la configuración del puerto Ethernet según el dominio de red de tu PLC/dispositivo y establece prioridades utilizando el comando **metric**. La métrica más baja tiene la mayor prioridad.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG"/></center>

## Instalar el nodo BACnet

1. **Abrir Node-RED:**
   Inicia Node-RED en tu reTerminal DM. Normalmente puedes acceder a él abriendo un navegador web y navegando a `http://<la-ip-de-tu-reTerminal-DM>:1880`.

2. **Acceder a Manage Palette:**
   En la esquina superior derecha de la interfaz de Node-RED, haz clic en las tres líneas horizontales (menú) y, desde el menú desplegable, selecciona "Manage palette".

3. **Instalar nuevos nodos:**
   En la ventana "Manage palette", ve a la pestaña "Install".

4. **Buscar el paquete:**
   En el cuadro de búsqueda, escribe `node-red-contrib-bacnet-extended` para encontrar el paquete.

5. **Instalar el paquete:**
   Una vez que veas `node-red-contrib-bacnet-extended` en la lista, haz clic en el botón "Install" junto a él. Esto iniciará el proceso de instalación.

6. **Esperar a que finalice la instalación:**
   La instalación puede tardar unos momentos. Al finalizar, deberías ver un mensaje de confirmación.

7. **Verificar la instalación:**
   Tras completar la instalación, los nodos de BACnet estarán disponibles en la paleta de Node-RED. Puedes verificarlos consultando la lista de nodos en la barra lateral izquierda del editor de Node-RED.

Ahora has instalado correctamente `node-red-contrib-bacnet-extended` y puedes comenzar a utilizarlo para integrar dispositivos BACnet en tus flujos de Node-RED.

## Iniciar el Simulador de Control de Temperatura Ambiental

Una vez que hayas instalado YABE, navega a la carpeta `add-on` y haz doble clic en `bacnet.Room.Simulator` para iniciarlo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/room-simulator.PNG" /></center>

Una vez iniciado, procede a arrancar YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/Yabe-app.png" /></center>

Luego, haz clic en el símbolo de `+` para agregar un dispositivo e ingresa la dirección IP del puerto Ethernet de tu PC. Haz clic en "Start".

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/YABE-config.PNG" /></center>

:::note
Puede que necesites configurar la IP del puerto Ethernet para asegurarte de que esté en el mismo dominio de red tanto que el reTerminal DM como tu PC.
:::

Después, deberías poder ver el dispositivo con el mismo ID de dispositivo que el simulador de temperatura ambiental.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/simulator&YABE.PNG" /></center>

## Descubrir dispositivos BACnet IP

1. **Nodos Requeridos:**
   Necesitarás los siguientes cuatro nodos:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **Agregar nodos al flujo:**
   Arrastra y suelta los nodos anteriores a tu área de trabajo en Node-RED.

3. **Conectar los nodos:**
   Conecta los nodos en el siguiente orden:
   
   ```  
   Inject >>> Function >>> Discover-devices >>> Debug  
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-device.PNG" /></center>

4. **Configurar el nodo Function:**
   Haz doble clic en el nodo Function para abrir su configuración y escribe el siguiente código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Deploy del flujo:**
   Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Iniciar el descubrimiento de dispositivos:**
   Haz clic en el botón de timestamp del nodo Inject para iniciar el proceso de descubrimiento.

7. **Verificar el Debug:**
   Espera a que aparezca la salida en la ventana de Debug. Verás la IP del dispositivo y el ID del dispositivo en el mensaje de debug.

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet1.gif" /></center>

## Leer todos los parámetros de dispositivos

Para leer todos los parámetros de los dispositivos BACnet mediante Node-RED, sigue estos pasos:

1. **Preparar nodos:**
   Necesitarás cuatro nodos: Inject, Function, Read-All-Devices y Debug.

2. **Agregar nodos al área de trabajo:**
   Arrastra y suelta los nodos Inject, Function, Read-All-Devices y Debug.

3. **Conectar nodos:**
   Conecta los nodos en el siguiente orden:

   ```  
   Inject >>> Function >>> Read-All-Devices >>> Debug  
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-all-devices.PNG" /></center>

4. **Configurar el nodo Function:**
   Haz doble clic en el nodo Function y escribe el siguiente código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Deploy del flujo:**
   Haz clic en el botón "Deploy".

6. **Iniciar la lectura de parámetros:**
   Haz clic en el botón de timestamp del nodo Inject para iniciar el proceso.

7. **Verificar la salida:**
   Espera a que aparezcan los parámetros de los dispositivos en la ventana de Debug.

<center><img width="300" src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-read-all.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet2.gif" /></center>

## Leer datos de un dispositivo único

1. **Preparar nodos:**
   Necesitarás cuatro nodos: Inject, Function, Read-Single-Device y Debug.

2. **Agregar nodos al área de trabajo:**
   Arrastra y suelta los nodos Inject, Function, Read-Single-Device y Debug.

3. **Conectar los nodos:**
   Conecta los nodos en el siguiente orden:

   ```  
   Inject >>> Function >>> Read-Single-Device >>> Debug  
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-device.PNG" /></center>

4. **Configurar el nodo Function:**
   Haz doble clic en el nodo Function y escribe el siguiente código:

   ```javascript
   msg.deviceId = DeviceID;
   msg.address = "IP:PORT ADD";
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-func.PNG" /></center>

5. **Deploy del flujo:**
   Haz clic en "Deploy".

6. **Iniciar la lectura del dispositivo:**
   Haz clic en el botón de timestamp del nodo Inject.

7. **Verificar la salida:**
   Revisa la ventana de Debug para ver los parámetros del dispositivo seleccionado.

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet3.gif" /></center>

## Leer datos de un objeto en un dispositivo único

1. **Preparar nodos:**
   Necesitarás cinco nodos: Inject, dos nodos Function, Read-Single-Devices y Debug.

2. **Agregar nodos al área de trabajo:**
   Arrastra y suelta los nodos Inject, el primer Function, Read-Single-Devices, el segundo Function y Debug.

3. **Conectar los nodos:**
   Conecta los nodos en el siguiente orden:

   ```  
   Inject >>> Function >>> Read-Single-Devices >>> Function >>> Debug  
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object.PNG" /></center>

4. **Configurar el primer nodo Function:**
   Haz doble clic en el primer nodo Function (cerca del nodo Inject) y escribe el siguiente código:

   ```javascript
   msg.deviceId = DeviceID;
   msg.address = "IP:PORT ADD";
   return msg;
   ```

5. **Configurar el segundo nodo Function:**
   Haz doble clic en el segundo nodo Function (cerca del nodo Debug) y escribe el siguiente código:

   ```javascript
   const objects = msg.payload['OBJECT_LIST(76)'];
   let temperatureIndoor = null;

   for (let obj of objects) {
     if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {
       temperatureIndoor = obj['PRESENT_VALUE(85)'];
       break;
     }
   }

   if (temperatureIndoor !== null) {
     msg.payload = { 'Temperature.Indoor': temperatureIndoor };
   } else {
     msg.payload = { error: 'Temperature.Indoor not found' };
   }

   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object-func.PNG" /></center>

5. **Deploy del flujo:**
   Haz clic en "Deploy".

6. **Iniciar la lectura del objeto:**
   Haz clic en el botón de timestamp del nodo Inject.

7. **Verificar la salida:**
   Revisa la ventana de Debug para ver los datos del objeto particular del dispositivo seleccionado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet4.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes canales de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varias vías de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

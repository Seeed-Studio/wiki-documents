---
description: Este wiki proporciona una guía integral para trabajar con Edge Box RPi 200, un controlador IoT industrial basado en Raspberry Pi 4. Incluye instrucciones para configurar Node-RED, simular temperaturas de habitación con YABE y descubrir y leer parámetros de dispositivos BACnet IP para una integración eficiente de Building Management System (BMS).
title: Edge Box RPi 200 con Node-RED y BACnet TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-RED
  - Bacnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_bacnet_tcp
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

BACnet IP (Building Automation and Control Network over IP) es un protocolo de comunicación diseñado para gestionar y automatizar sistemas de edificios. Permite que dispositivos de diferentes fabricantes operen juntos sin problemas en redes IP estándar, mejorando la integración y flexibilidad del sistema. Las principales ventajas de BACnet IP en los Sistemas de Gestión de Edificios (BMS) incluyen mejor escalabilidad, instalación y mantenimiento más sencillos y la capacidad de aprovechar la infraestructura de red existente. Además, BACnet IP admite el intercambio de datos en tiempo real, facilitando un mejor monitoreo y control de los sistemas del edificio. Esto se traduce en una mayor eficiencia energética, reducción de costos operativos y mayor comodidad y seguridad para los ocupantes.

## Antes de Empezar

Antes de iniciar este proyecto, puede que necesites preparar el hardware y software con anticipación, tal como se describe aquí.

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

Edge Box viene con Raspberry Pi OS preinstalado. Si esta es la primera vez que enciendes el dispositivo, por favor revisa nuestro [Getting Started Wiki](https://wiki.seeedstudio.com/Edge_Box_introduction/). Además, hemos preparado una [Guía de Inicio en Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Recomendamos revisarla antes de continuar con este wiki. En este tutorial, conectaremos la PC Host que ejecuta el simulador de temperatura de habitación YABE con Node-RED en el Edge Box.

### YABE

Por favor, visita este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que te permite simular y explorar dispositivos BACnet, siendo ideal para pruebas y desarrollo. Una vez descargado e instalado en tu PC Host, YABE se usará para simular los datos de temperatura de una habitación, que luego leeremos y procesaremos con Node-RED en el Edge Box.

### Configurar Ajustes de Ethernet para BACnet IP

Dado que el dominio IP de tu dispositivo es diferente al de tu configuración inalámbrica, es posible que tengas que cambiar la configuración de IP manualmente. Para ello:

- **Paso 01**: Ejecuta el siguiente comando:
```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Luego, configura las opciones del puerto Ethernet según el dominio de red de tu dispositivo y establece prioridades usando el comando metric. El metric más bajo tiene la prioridad más alta. Después, conecta Edge Box y el dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Instalar el nodo BACnet

1. **Abrir Node-RED:**
   Inicia Node-RED en tu Edge Box. Por lo general, puedes acceder abriendo un navegador web y navegando a `http://<tu-direccion-ip-edgebox>:1880`.

2. **Accede a Manage Palette:**
   En la esquina superior derecha de la interfaz de Node-RED, haz clic en las tres líneas horizontales (menú) para abrir el menú principal. En el menú desplegable, selecciona "Manage palette".

3. **Instala Nuevos Nodos:**
   En la ventana "Manage palette", ve a la pestaña "Install".

4. **Busca el Paquete:**
   En el cuadro de búsqueda, escribe `node-red-contrib-bacnet-extended` para encontrar el paquete.

5. **Instala el Paquete:**
   Cuando veas `node-red-contrib-bacnet-extended` en la lista de nodos disponibles, haz clic en el botón "Install" que está junto a él. Esto iniciará el proceso de instalación.

6. **Espera a que la Instalación Termine:**
   La instalación puede tardar algunos momentos. Una vez completada, verás un mensaje de confirmación.

7. **Verifica la Instalación:**
   Tras completar la instalación, los nodos de BACnet estarán disponibles en la paleta de Node-RED. Puedes verificarlo revisando la lista de nodos en la barra lateral izquierda del editor de Node-RED.

Ahora, has instalado correctamente `node-red-contrib-bacnet-extended` y puedes comenzar a usarlo para integrar dispositivos BACnet con tus flujos de Node-RED.

## Iniciar el Simulador de Control de Temperatura de Habitación

Una vez que hayas instalado YABE, navega a la carpeta `add-on` y haz doble clic en `bacnet.Room.Simulator` para iniciarlo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

Después de hacerlo, necesitas iniciar YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

Luego, haz clic en el ícono `+` para agregar un dispositivo y escribe la dirección IP del puerto Ethernet de tu PC. Haz clic en "Start".

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
Es posible que debas configurar la dirección IP del puerto Ethernet para asegurarte de que esté en el mismo dominio de red que el EdgeBox y tu PC.
:::

Después de eso, deberías ver el dispositivo con el mismo ID de dispositivo que el simulador de temperatura de habitación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Descubrir Dispositivos BACnet IP

1. **Nodos Requeridos:**
   Necesitarás los siguientes cuatro nodos:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **Agrega los Nodos al Flujo:**
   Arrastra y suelta los nodos anteriores a tu flujo de trabajo en Node-RED.

3. **Conecta los Nodos:**
   Conéctalos de la siguiente manera:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-device.PNG" /></center>

4. **Configura el Nodo Function:**
   Haz doble clic en el nodo Function para abrir el cuadro de diálogo de configuración. En el bloque de función, escribe el siguiente código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **Despliega el Flujo:**
   Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Inicia la Descarga de Dispositivos:**
   Haz clic en el botón de marca de tiempo (Inject) para iniciar el proceso de descubrimiento.

7. **Revisa la Salida de Debug:**
   Espera a que aparezca la salida en la ventana de Debug. Verás la IP del dispositivo y el ID del dispositivo en el mensaje de depuración.

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet1.gif" /></center>

## Leer Todos los Parámetros del Dispositivo

Para leer todos los parámetros de los dispositivos BACnet usando Node-RED, sigue estos pasos:

1. **Prepara los Nodos:**
   - Necesitarás cuatro nodos: Inject, Function, Read-All-Devices y Debug.

2. **Agrega los Nodos al Flujo:**
   - Arrastra y suelta los nodos Inject, Function, Read-All-Devices y Debug a tu área de trabajo.

3. **Conecta los Nodos:**
   - Conéctalos en el siguiente orden:
     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-all-devices.PNG" /></center>

4. **Configura el Nodo Function:**
   - Haz doble clic en el nodo Function para abrir la ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **Despliega el Flujo:**
   - Haz clic en "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Inicia la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de marca de tiempo en el nodo Inject para iniciar el proceso.

7. **Revisa la Salida:**
   - Espera a que aparezca la salida en la ventana de Debug. Verás los parámetros de los dispositivos en el área de red BACnet.

Este flujo leerá todos los parámetros de los dispositivos BACnet en tu red y los mostrará en la ventana de Debug de Node-RED.

<center><img width="300" src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-read-all.png" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet2.gif" /></center>

## Leer Datos de un Único Dispositivo

1. **Prepara los Nodos:**
   - Necesitarás cuatro nodos: Inject, Function, Read-Single-Device y Debug.

2. **Agrega los Nodos al Flujo:**
   - Arrastra y suelta los nodos Inject, Function, Read-Single-Device y Debug a tu área de trabajo.

3. **Conecta los Nodos:**
   - Conéctalos en el siguiente orden:
     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-device.PNG" /></center>

4. **Configura el Nodo Function:**
   - Haz doble clic en el nodo Function para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PUERTO";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-func.PNG" /></center>

5. **Despliega el Flujo:**
   - Haz clic en "Deploy" en la parte superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Inicia la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de marca de tiempo en el nodo Inject para iniciar el proceso.

7. **Revisa la Salida:**
   - Espera a que aparezca la salida en la ventana de Debug. Verás los parámetros del dispositivo seleccionado en el área de la red BACnet.

<center><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet3.gif" /></center>

## Leer un Objeto Particular de un Único Dispositivo

1. **Prepara los Nodos:**
   - Necesitarás cuatro nodos: Inject, dos Function nodes, Read-Single-Device y Debug.

2. **Agrega los Nodos al Flujo:**
   - Arrastra y suelta los nodos Inject, dos Function nodes, Read-Single-Device y Debug a tu área de trabajo.

3. **Conecta los Nodos:**
   - Conéctalos en el siguiente orden:
     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object.PNG" /></center>

4. **Configura los Nodos Function:**
   - Haz doble clic en el nodo Function cerca del nodo Inject para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PUERTO";
        return msg;
     ```
   - Haz doble clic en el nodo Function cerca del nodo Debug para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:

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

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object-func.PNG" /></center>

5. **Despliega el Flujo:**
   - Haz clic en "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Inicia la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de marca de tiempo en el nodo Inject para iniciar el proceso.

7. **Revisa la Salida:**
   - Espera a que aparezca la salida en la ventana de Debug. Verás los parámetros únicamente del objeto en particular del dispositivo seleccionado en el área de la red BACnet.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet4.gif" /></center>

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

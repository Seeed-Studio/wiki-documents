---
description: Esta wiki proporciona una guía completa para trabajar con el reTerminal DM, un HMI industrial de IoT edge basado en Raspberry Pi 4. Incluye instrucciones para configurar Node-RED, simular temperaturas de habitación con YABE, y descubrir y leer parámetros de dispositivos BACnet IP para una integración eficiente del Sistema de Gestión de Edificios (BMS).
title: reTerminal DM con Node Red y BACnet TCP
keywords:
  - BMS
  - HMI
  - Raspberry pi
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png
slug: /reterminal_dm_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/26/2024
  author: Kasun Thushara
---
## Introducción

BACnet IP (Building Automation and Control Network over IP) es un protocolo de comunicación diseñado para gestionar y automatizar sistemas de edificios. Permite que dispositivos de diferentes fabricantes interoperen sin problemas a través de redes IP estándar, mejorando la integración del sistema y la flexibilidad. Las principales ventajas de BACnet IP en Sistemas de Gestión de Edificios (BMS) incluyen escalabilidad mejorada, instalación y mantenimiento más fáciles, y la capacidad de aprovechar la infraestructura de red existente. BACnet IP también soporta intercambio de datos en tiempo real, facilitando un mejor monitoreo y control de los sistemas de edificios. Esto resulta en mayor eficiencia energética, costos operativos reducidos, y mayor comodidad y seguridad para los ocupantes.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Hemos preparado una [Guía de inicio en Node-RED](https://wiki.seeedstudio.com/es/reTerminal-DM-Getting-Started-with-Node-Red/). Se recomienda que revises esta guía antes de proceder con el wiki.

### YABE

Por favor ve a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer). YABE es una herramienta versátil que te permite simular y explorar dispositivos BACnet, haciéndola ideal para propósitos de prueba y desarrollo. Una vez descargado e instalado en tu PC Host, YABE se utilizará para simular datos de temperatura ambiente, los cuales luego leeremos y procesaremos usando Node-RED en el reTerminal DM.

### Configurar ajustes de Ethernet para BACnet IP

Dado que el dominio IP de tu dispositivo es diferente de tus configuraciones inalámbricas, es posible que tengas que cambiar la configuración IP manualmente. Para eso,

- **Paso 01**: Ejecuta el siguiente comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Paso 02**: Luego configure los ajustes del puerto Ethernet según el dominio de red de su PLC/Dispositivo y establezca prioridades usando el comando **metric**. La métrica más baja tiene la prioridad más alta.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG"/></center>

## Instalar nodo BACnet

1. **Abrir Node-RED:**
   Inicie Node-RED en su reTerminal. Normalmente puede acceder abriendo un navegador web y navegando a `http://<su-ip-reTerminal-DM>:1880`.

2. **Acceder a Gestionar Paleta:**
   En la esquina superior derecha de la interfaz de Node-RED, haga clic en las tres líneas horizontales (menú) para abrir el menú principal. Del menú desplegable, seleccione "Manage palette."

3. **Instalar Nuevos Nodos:**
   En la ventana "Manage palette", vaya a la pestaña "Install".

4. **Buscar el Paquete:**
   En el cuadro de búsqueda, escriba `node-red-contrib-bacnet-extended` para encontrar el paquete.

5. **Instalar el Paquete:**
   Una vez que vea `node-red-contrib-bacnet-extended` en la lista de nodos disponibles, haga clic en el botón "Install" junto a él. Esto iniciará el proceso de instalación.

6. **Esperar a que se Complete la Instalación:**
   La instalación puede tomar unos momentos. Una vez que esté completa, debería ver un mensaje de confirmación.

7. **Verificar la Instalación:**
   Después de que la instalación esté completa, los nodos BACnet estarán disponibles en la paleta de Node-RED. Puede verificar esto revisando la lista de nodos en la barra lateral izquierda del editor de Node-RED.

Ahora, ha instalado exitosamente `node-red-contrib-bacnet-extended` y puede comenzar a usarlo para integrar dispositivos BACnet con sus flujos de Node-RED.

## Iniciar Simulador de Controlador de Temperatura de Habitación

Una vez que haya instalado YABE, navegue a la carpeta `add-on` y haga doble clic en `bacnet.Room.Simulator` para iniciarlo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/room-simulator.PNG" /></center>

Una vez hecho, necesita iniciar YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/Yabe-app.png" /></center>

Luego, haga clic en la marca `+` para agregar un dispositivo e ingrese la dirección IP del puerto Ethernet de su PC. Haga clic en "Start."

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/YABE-config.PNG" /></center>

:::note
Es posible que necesites configurar la dirección IP del puerto Ethernet para asegurarte de que esté en el mismo dominio de red tanto que el reTerminal DM como tu PC.
:::

Después de eso, deberías poder ver el dispositivo con el mismo ID de dispositivo que el simulador de temperatura ambiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/simulator&YABE.PNG" /></center>

## Descubrir Dispositivos IP BACnet

1. **Nodos Requeridos:**
   Necesitarás los siguientes cuatro nodos:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **Añadir Nodos al Flujo:**
   Arrastra y suelta los nodos anteriores en tu flujo del banco de trabajo de Node-RED.

3. **Conectar los Nodos:**
   Conecta los nodos de la siguiente manera:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-device.PNG" /></center>

4. **Configurar el Nodo Function:**
   Haz doble clic en el nodo Function para abrir su diálogo de configuración. En el bloque de función, escribe el siguiente código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Desplegar el Flujo:**
   Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Activar el Descubrimiento de Dispositivos:**
   Haz clic en el botón de timestamp (nodo Inject) para iniciar el proceso de descubrimiento.

7. **Verificar la Salida de Debug:**
   Espera a que aparezca la salida en la ventana de Debug. Verás la IP del dispositivo y el ID del dispositivo en el mensaje de debug.

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet1.gif" /></center>

## Leer Todos los Parámetros del Dispositivo

Para leer todos los parámetros de dispositivos BACnet usando Node-RED, sigue estos pasos:

1. **Preparar Nodos:**
   - Necesitarás cuatro nodos: Inject, Function, Read-All-Devices y Debug.

2. **Añadir Nodos al Banco de Trabajo:**
   - Arrastra y suelta los nodos Inject, Function, Read-All-Devices y Debug en tu banco de trabajo.

3. **Conectar Nodos:**
   - Conecta los nodos en el siguiente orden:

     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-all-devices.PNG" /></center>

4. **Configurar el Nodo Function:**
   - Haz doble clic en el nodo Function para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:
   -

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Desplegar el Flujo:**
   - Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Iniciar la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de timestamp en el nodo Inject para iniciar el proceso.

7. **Verificar la Salida:**
   - Espera a que aparezca la salida en la ventana de Debug. Verás los parámetros de los dispositivos en el área de red BACnet.

Esta configuración leerá todos los parámetros de dispositivos BACnet en tu red y los mostrará en la ventana de Debug de Node-RED.

<center><img width="300" src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-read-all.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet2.gif" /></center>

## Leer datos de un solo dispositivo

1. **Preparar Nodos:**
   - Necesitarás cuatro nodos: Inject, Function, Read-All-Devices y Debug.

2. **Añadir Nodos al Banco de Trabajo:**
   - Arrastra y suelta los nodos Inject, Function, Read-Single-Device y Debug en tu banco de trabajo.

3. **Conectar Nodos:**
   - Conecta los nodos en el siguiente orden:

     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-device.PNG" /></center>

4. **Configurar el Nodo Function:**
   - Haz doble clic en el nodo Function para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-func.PNG" /></center>

5. **Desplegar el Flujo:**
   - Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Iniciar la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de timestamp en el nodo Inject para iniciar el proceso.

7. **Verificar la Salida:**
   - Espera a que aparezca la salida en la ventana de Debug. Verás los parámetros del dispositivo seleccionado en el área de red BACnet.

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet3.gif" /></center>

## Leer datos de objeto particular de un solo dispositivo

1. **Preparar Nodos:**
   - Necesitarás cuatro nodos: Inject, Dos nodos function, Read-Single-Device y Debug.

2. **Añadir Nodos al Banco de Trabajo:**
   - Arrastra y suelta los nodos Inject, Dos nodos function, Read-Single-Device y Debug en tu banco de trabajo.

3. **Conectar Nodos:**
   - Conecta los nodos en el siguiente orden:

     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object.PNG" /></center>

4. **Configurar el Nodo Function:**
   - Haz doble clic en el nodo Function cerca del nodo inject para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

   - Haz doble clic en el nodo Function cerca del nodo debug para abrir su ventana de configuración.
   - Ingresa el siguiente código en el bloque de función:
   -

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

5. **Desplegar el Flujo:**
   - Haz clic en el botón "Deploy" en la esquina superior derecha de la interfaz de Node-RED para desplegar el flujo.

6. **Iniciar la Lectura de Parámetros del Dispositivo:**
   - Haz clic en el botón de marca de tiempo en el nodo Inject para iniciar el proceso.

7. **Verificar la Salida:**
   - Espera a que aparezca la salida en la ventana Debug. Verás los parámetros de solo el objeto particular en el dispositivo seleccionado en el área de red BACnet.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet4.gif" /></center>

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

---
description: Primeros pasos con Node-RED en reTerminal DM
title: Primeros pasos con Node-RED en reTerminal DM
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/06/2025
  author: Erick González
---

# Primeros pasos con Node-RED en reTerminal DM

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo!🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED es una herramienta de programación que permite conectar dispositivos de hardware, APIs y servicios en línea de formas nuevas e interesantes.  
> Proporciona un editor basado en navegador que facilita la creación de flujos utilizando la amplia gama de nodos disponibles en la paleta, los cuales se pueden desplegar en su runtime con un solo clic.
>
> — nodered.org

Dado que el reTerminal DM cuenta con gran escalabilidad y conectividad híbrida (como E/S digital, bus CAN, RS485, RS232 y potentes capacidades de comunicación inalámbrica como WiFi, BLE, *4G, *LoRa®), Node-RED es una de las mejores herramientas de programación low-code que puede regirlas todas. Gracias al nodo Dashboard de Node-RED, se puede configurar y utilizar junto con el panel capacitivo de 10.1" multitáctil de 10 puntos de alta sensibilidad para funciones de Interfaz Hombre-Máquina (HMI) in situ.

> *Los módulos *4G y LoRa® no vienen incluidos por defecto con reTerminal DM; por favor, adquiere los módulos correspondientes según sea necesario.

A continuación, se presenta la guía de inicio para configurar y familiarizarse con la interfaz de Node-RED en reTerminal DM.

:::tip
* Para usuarios de **Raspbian OS**, por favor consulta: Instalar Node-RED  
* Para usuarios de **Sensecraft Edge OS**, por favor consulta: [Familiarizándose con Node-RED](#getting-familiar-with-node-red), ya que Sensecraft Edge OS viene con Node-RED preinstalado.
:::

## Instalar y Configurar Node-RED en Raspbian OS

Una vez que hayas instalado un nuevo sistema operativo en reTerminal DM siguiendo la [guía para instalar el OS en reTerminal DM](/reterminal-dm-flash-OS/), sigue los siguientes pasos para configurar Node-RED.

### Instalar Node-RED

* **PASO 1:** Acceso a tu reTerminal DM

  - **Opción 1:** Conecta directamente el ratón y el teclado y abre la aplicación `Terminal` en tu reTerminal DM.  
    Asegúrate de que el reTerminal DM esté conectado a Internet.
  
  - **Opción 2:** Conexión por SSH  
    Asegúrate de que tu ordenador anfitrión pueda acceder a reTerminal DM vía red y que el reTerminal DM esté conectado a Internet.
    
    **En Windows:**  
    Abre **PowerShell** y escribe:
    
    ```sh
    ssh pi@192.168.43.100
    ```
    
    (Reemplaza "pi" y la IP por tus datos correspondientes). Ingresa la contraseña (por defecto, en Raspbian OS: Usuario: `pi`, Contraseña: `raspberry`).
    
    **En Mac/Linux:**  
    Abre la aplicación **Terminal** y escribe:
    
    ```sh
    ssh pi@192.168.43.100
    ```
    
    Luego ingresa la contraseña (por defecto: Usuario: `pi`, Contraseña: `raspberry`).

* **PASO 2:** Instalar Node-RED

El equipo de Node-RED ha preparado un script [Todo-en-uno](https://nodered.org/docs/getting-started/raspberrypi) que puedes ejecutar en el Terminal nativo de reTerminal DM o mediante SSH:

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note
Existen varias opciones para instalar Node-RED en Raspberry Pi. Aquí se muestra la guía [Todo-en-uno](https://nodered.org/docs/getting-started/raspberrypi). Para más información, consulta la [guía oficial](https://nodered.org/docs/getting-started/).
:::

Una vez finalizado el proceso de instalación, deberías ver una carpeta llamada `.node-red` al ejecutar `ls -all`, como se muestra en la imagen a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Configurar Node-RED

Una vez instalado Node-RED, sigue estos pasos para configurarlo y preparar el entorno:

* **PASO 1:** Iniciar Node-RED

    Después de la instalación con el script Todo-en-uno, puedes utilizar los siguientes comandos:
  
    - `node-red-stop` para detener Node-RED  
    - `node-red-start` para iniciar Node-RED  
    - `node-red-log` para ver los registros recientes  
    - `sudo systemctl enable nodered.service` para iniciar Node-RED automáticamente en cada arranque  
    - `sudo systemctl disable nodered.service` para deshabilitar el inicio automático
  
    Para iniciar el editor de Node-RED, ejecuta el siguiente comando en el Terminal de reTerminal DM:
    
    ```sh
    node-red-start
    ```
    
    Si deseas habilitar Node-RED para que inicie automáticamente, utiliza:
    
    ```sh
    sudo systemctl enable nodered.service
    ```
    
    Verás un mensaje similar al mostrado en la siguiente imagen:
    
    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

* **PASO 2:** Acceder al editor de Node-RED

    Abre tu navegador web favorito y accede a la siguiente URL:
    - Opción 1: `http://127.0.0.1:1880` (si el navegador se ejecuta localmente en reTerminal DM).
    - Opción 2: `http://{RETERMINALDM_IP_ADDRESS}:1880` (si accedes desde otro equipo; reemplaza `{RETERMINALDM_IP_ADDRESS}` con la IP de tu reTerminal DM).

## Familiarizándose con Node-RED

Una vez que accedas al editor, deberías ver una interfaz similar a la imagen siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Visión General del Editor de Node-RED

Los elementos centrales del editor son:

- Panel de Nodos  
- Editor de Flujos  
- Panel de Configuración  
- Botón de Configuración  
- Botón Deploy

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### Instalar Nodos

Existen dos opciones para instalar módulos de nodos en Node-RED. Si usas SenseCraft EDGE OS, consulta el método del editor de Node-RED.

#### Opción 1: Línea de Comandos

**PASO 1:** Ingresa a la carpeta de Node-RED:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

**PASO 2:** Instalar el nodo Modbus:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

**PASO 3:** Reinicia el servicio de Node-RED:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### Opción 2: Desde el Editor de Node-RED

**PASO 1:** Haz clic en el botón `Settings` (icono de tres rayas) en la esquina derecha y selecciona `Manage palette`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

**PASO 2:** En la pestaña de la paleta, haz clic en la pestaña `Install`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

**PASO 3:** Busca el nodo que deseas instalar usando la barra de búsqueda y haz clic en el botón `install`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

**PASO 4:** Confirma la instalación haciendo clic en `Install` en la ventana emergente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

**PASO 5:** Espera a que la instalación finalice; verás que el botón cambiará a `installed`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

**PASO 6:** Ahora deberías ver los nodos Modbus en la barra lateral.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# Nodos Soportados por reTerminal DM

* [reTerminal DM RS485 Port con Node-RED](/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT con Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS con Node-RED](/reTerminal-DM-Node-Red-canbus)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diversos canales y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer distintas preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

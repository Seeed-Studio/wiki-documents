---
description: reTerminal DM Primeros Pasos con Node-Red
title: reTerminal DM Primeros Pasos con Node-Red
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/04/2023
  author: Peter Pan
---
# reTerminal DM Primeros Pasos con Node Red

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de maneras nuevas e interesantes.
> Proporciona un editor basado en navegador que facilita la conexión de flujos utilizando la amplia gama de nodos en la paleta que pueden desplegarse en su tiempo de ejecución con un solo clic.
>
> — nodered.org

Dado que reTerminal DM está equipado con rica escalabilidad y conectividad híbrida, como E/S Digital, bus CAN, RS485, RS232 y potentes capacidades de comunicación inalámbrica como WiFi, BLE, \*4G, \*LoRa®. Donde Node-RED es una de las mejores herramientas de programación de código bajo que podría gobernarlas todas, y gracias al nodo Node-RED Dashboard que podría configurarse y utilizarse junto con el panel capacitivo de alta sensibilidad multitáctil de 10 puntos de 10.1" para el propósito de Interfaz Humano-Máquina en el sitio.

> \*Los módulos 4G y LoRa® no vienen con reTerminal DM por defecto, por favor adquiera los módulos relevantes según corresponda.

Aquí está la guía de primeros pasos sobre cómo configurar, así como familiarizarse con la interfaz de Node-RED junto con reTerminal DM.

:::tip
- Para usuarios de **Raspbian OS**, por favor vaya a: [Install Node-RED](#install-and-setting-up-node-red)
- Para usuarios de **Sensecraft Edge OS**, por favor vaya a: [Getting Familiar with Node-RED](#getting-familiar-with-node-red), ya que Sensecraft Edge OS viene con Node-RED preinstalado
:::

## Instalar y Configurar Node-RED en Raspbian OS

Una vez que hayas completado la configuración de un nuevo Sistema Operativo con reTerminal DM siguiendo [Instalar OS en reTerminal DM](/es/reterminal-dm-flash-OS/), por favor sigue los pasos a continuación para configurar Node-RED.

### Instalar Node-RED

- **PASO 1:** Obtener acceso a tu reTerminal DM

  - opción 1: Conectar directamente el Mouse y Teclado

    Por favor ve y abre la aplicación `Terminal` en tu reTerminal DM.

    asegúrate de que tu reTerminal DM esté conectado a internet.

  - opción 2: usando SSH

    Asegúrate de que tu computadora host pueda acceder al reTerminal DM a través de la red y que reTerminal DM esté conectado a internet

    **en Windows:**

      Por favor abre el programa **PowerShell** y luego escribe `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, por favor reemplaza `{USERNAME}` y `{RETERMINALDM_IP_ADDRESS}` según tu configuración:

      Por ejemplo en mi caso el `{USERNAME}` es `pi` y `{RETERMINALDM_IP_ADDRESS}` es `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```

      Luego por favor ingresa la contraseña para el `{USER}` del Sistema Operativo que has configurado en tu reTerminal DM

      ej: Para Raspbian OS las credenciales de inicio de sesión predeterminadas son
    - Nombre de usuario: `pi`
    - Contraseña: `raspberry`

    **en Mac/Linux:**

      Por favor abre la aplicación **Terminal** y escribe `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, por favor reemplaza `{USERNAME}` y `{RETERMINALDM_IP_ADDRESS}` según tu configuración:

      Por ejemplo en mi caso el `{USERNAME}` es `pi` y `{RETERMINALDM_IP_ADDRESS}` es `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```

      Luego por favor ingresa la contraseña para el `{USER}` del Sistema Operativo que has configurado en tu reTerminal DM

      ej: Para Raspbian OS las credenciales de inicio de sesión predeterminadas son
    - Nombre de usuario: `pi`
    - Contraseña: `raspberry`

- **PASO 2:** Instalar Node-RED:

El equipo de Node-RED nos ha preparado un script [Todo-EN-UNO](https://nodered.org/docs/getting-started/raspberrypi), el cual puedes simplemente ingresar el siguiente comando en la aplicación nativa `Terminal` de reTerminal DM o en el `SSH Shell` del paso anterior.

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

Existen muchas opciones para instalar Node-RED en Raspberry Pi. Puedes explorar la [guía oficial](https://nodered.org/docs/getting-started/). Aquí te mostramos la guía [all-in-one](https://nodered.org/docs/getting-started/raspberrypi) para instalar Node-RED en reTerminal DM.
:::

Una vez que el proceso de instalación haya terminado, deberías ver una carpeta `.node-red` con los comandos `ls -all` como se muestra en la imagen a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Configurar Node-RED

Una vez que hayas instalado Node-RED, por favor sigue los pasos a continuación para configurar y preparar el entorno de Node-RED.

- **PASO 1:** Iniciar Node-RED:
  
    Después de que la instalación con el script [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) esté completa, puedes usar los siguientes comandos según corresponda:
  
    Usa `node-red-stop`                          para detener Node-RED<br />
    Usa `node-red-start`                         para iniciar Node-RED nuevamente<br />
    Usa `node-red-log`                           para ver la salida de registro reciente<br />
    Usa `sudo systemctl enable nodered.service`  para iniciar automáticamente Node-RED en cada arranque<br />
    Usa `sudo systemctl disable nodered.service` para deshabilitar el inicio automático en el arranque<br />

    Así que para iniciar el editor de Node-RED puedes ejecutar el siguiente comando en la aplicación `Terminal` en reTerminal DM:

    ```sh
    node-red-start
    ```

    si quieres habilitar node-RED como servicio de inicio automático podrías usar el comando `sudo systemctl enable nodered.service` y deberías ver la salida como se muestra a continuación.

    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

- **PASO 2:** Acceder al editor de Node-RED:

    Ahora por favor abre tu navegador web favorito e ingresa la url descrita a continuación:
  - Opción 1: Usa `http://127.0.0.1:1880`, si el navegador web se está ejecutando localmente en tu reTerminal DM.
  - Opción 2: Usa `http://{RETERMINALDM_IP_ADDRESS}:1880`, si el navegador web se está ejecutando remotamente en una computadora host, por favor reemplaza `{RETERMINALDM_IP_ADDRESS}` con la dirección ip de reTerminal DM.

## Familiarizándose con Node-RED

Ahora deberías ver un resultado similar al de la imagen a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Descripción general del editor de Node-RED

Por favor familiarízate con el editor de Node-RED.

Los elementos centrales del editor de Node-RED están listados:

- Panel de Nodos
- Editor de Flujo
- Panel de Configuración
- Botón de Configuración
- Botón de Despliegue

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### Instalar Nodos

Hay dos opciones para instalar módulos de nodos de Node-RED, si estás usando SenseCraft EDGE OS por favor usa el [método del editor de Node-RED](#option-2-node-red-editor):

#### Opción 1: Línea de comandos

PASO 1: Por favor ve a la carpeta de Node-RED

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

PASO 2: Instalar el Nodo Modbus

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

PASO 3: Una vez que el nodo se instale, por favor reinicia el servicio Node-RED con:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### Opción 2: Editor de Node-RED

PASO 1: Haz clic en el botón `Settings` con el icono de "tres rayas" ubicado en la esquina derecha y luego selecciona `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

PASO 2: En la pestaña de paleta haz clic en la pestaña `Install`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

PASO 3: Busca el nodo en la barra de búsqueda de nodos y haz clic en el botón `install` para instalar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

PASO 4: haz clic en el botón 'Install` de la ventana de advertencia desplegable para confirmar la instalación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

PASO 5: Espera a que se complete la instalación y deberías ver que el botón `install` cambió a `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

PASO 6: deberías ver los nodos Modbus en la barra lateral

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# Nodos Compatibles con reTerminal DM

- [Puerto RS485 de reTerminal DM con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
- [MQTT de reTerminal DM con Node-RED](/es/reTerminal-DM-Node-Red-mqtt)
- [CAN BUS de reTerminal DM con Node-RED](/es/reTerminal-DM-Node-Red-canbus)
  
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

---
description: Enviar mensaje desde Watcher a Node-Red
title: Watcher a Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /es/watcher_to_node_red
sidebar_position: 1
last_update:
  date: 06/28/2024
  author: Allen
---

# Inicio Rápido de Watcher a Node-RED

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de maneras nuevas e interesantes.

Proporciona un editor basado en navegador que facilita la conexión de flujos utilizando la amplia gama de nodos en la paleta que pueden desplegarse en su tiempo de ejecución con un solo clic.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

Para facilitar a nuestros usuarios **conectar datos del Watcher a varias otras plataformas PaaS para un procesamiento de datos más profundo**. Por ejemplo, desde Watcher a IFTTT, Telegram, Twilio, etc. Haremos una serie de tutoriales para **Watcher & Node-RED**.

Este tutorial, el primero de una serie, te guiará a través de la instalación y uso de Node-red y la llamada a la API de Watcher para conectar a Node-RED.

## Parte 1. Instalar Node.js®

Para instalar Node-RED localmente necesitarás una [versión compatible de Node.js](https://nodered.org/docs/faq/node-versions).

Descarga la última versión LTS 14.x de Node.js desde la [página oficial de Node.js](https://nodejs.org/en/). Te ofrecerá la mejor versión para tu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Ejecuta el archivo MSI descargado. Instalar Node.js requiere derechos de administrador local; si no eres administrador local, se te pedirá una contraseña de administrador durante la instalación. Acepta los valores predeterminados al instalar. Después de que se complete la instalación, cierra cualquier símbolo del sistema abierto y vuelve a abrir para asegurar que las nuevas variables de entorno sean reconocidas.
:::
Al instalar Node.js, si estás usando una computadora que no ha tenido ningún entorno de programación instalado, recomendaríamos que marques la casilla para instalar las herramientas necesarias durante la instalación de Node.js, lo que te ahorrará muchos problemas necesarios.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

La forma más fácil de instalar Node-RED es usando la herramienta de gestión de paquetes de Node, **npm**. Sin embargo, no recomendamos instalar Node-RED con npm 1.x, sino actualizarlo a la última versión **npm 2.x**.

:::note
En **Windows** (Requiere Windows 10 y superior), usa el atajo **Win+R** y escribe `cmd` en la ventana emergente para abrir la terminal y ejecutar el siguiente comando.

Si estás usando **MacOS** o **Linux**, por favor ejecuta el siguiente comando en la terminal y añade `sudo` al frente del comando para usuarios no root.
:::

```sh
npm install -g npm@2.x
```

Una vez instalado, abre un símbolo del sistema y ejecuta el siguiente comando para asegurar que Node.js y npm estén instalados correctamente.

```sh
node --version && npm --version
```

Deberías recibir una salida que se vea similar a:

```sh
> v16.17.0
> 2.15.12
```

## Parte 2. Instalar Node-RED

Instalar Node-RED como un módulo global añade el comando `node-red` a la ruta de tu sistema. Ejecuta lo siguiente en el símbolo del sistema:

```sh
npm install -g --unsafe-perm node-red
```

Si Node-RED está instalado como un paquete npm global, entonces ejecuta el comando node-red directamente:

```sh
node-red
```

Esto enviará el registro de Node-RED al terminal. Debes mantener el terminal abierto para mantener Node-RED funcionando.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Esto te permitirá ver el editor de Node-RED en http://localhost:1880.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## Parte 3. Ejecutar una tarea en Watcher

Dile a Watcher qué quieres que te ayude. Solo necesitas ingresar algunos comandos en el cuadro de entrada. Por ejemplo, **Notifícame cuando detecte personas** o **Dime si hay un incendio**, etc. Si quieres saber más, [**por favor salta aquí**](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

Así que Watcher te notificará a través de la APP SenseCraft así como alertas de audio y luz RGB parpadeante cuando detecte un incendio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## Parte 4. Watcher envía mensaje a Node-RED

Proporcionamos dos métodos para enviar mensajes desde watcher a Node-RED, nodo SenseCAP y protocolo HTTP. Puedes elegir cualquier método que te guste.

### Método 1: Usar nodo SenseCAP

#### Paso 1. Obtener la Clave API de Watcher

Abre tu APP SenseCraft y sigue los pasos a continuación para obtener el **ID de Organización** y la **Clave API**. Los usaremos más tarde.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 4</th>
      <th>Página 5</th>
      <th>Página 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Paso 2. Instalar el nodo SenseCAP

Haz clic en el icono de las tres barras y luego haz clic en la opción **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

Haz clic en la opción **Install**, ingresa **sensecap** para buscar, y luego **instálalo**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

Arrastra los módulos **OpenStream** y **debug** al área de trabajo y luego **conéctalos** con una línea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**Haz doble clic** en el módulo OpenStream y se abrirá una ventana lateral. Dale un nombre y crea una nueva cuenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

Nombra tu cuenta e ingresa tu **Organization ID** y **API key** que obtuviste anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

Haz clic en el botón **Done** para obtener todos los mensajes de la plataforma o puedes seleccionar mensajes específicos que desees recibir. Por ejemplo, si solo quieres recibir mensajes de tu Watcher, puedes llenar el código **EUI** que se puede encontrar en **Setting** -> **About Device** del dispositivo o en el mensaje del **Paso 6**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

Haz clic en el botón **Deploy**. Este botón es como el botón de compilar y ejecutar. Cualquier cambio que hagas, necesitas hacer clic en este botón.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

Después de eso, verás una señal de conectado, lo que significa que funciona como se esperaba. Cuando Watcher envíe mensajes los recibirás en Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### Método 2: Usar protocolo HTTP

#### Paso 1. Abrir la función de bloque HTTP

Cuando ejecutes una tarea, haz clic en el botón **Detail Configs**, y luego abre **HTTP Push Notification** y haz clic en **Go Setup**. Necesitas llenar **la dirección IP de tu computadora** y **el puerto de acceso de Node-RED** (el puerto predeterminado es 1880). Y luego haz clic en **Update Now** y **Run Task**.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
      <th>Página 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Paso 2. Configuración en Node-RED

Primero, necesitas importar el flujo de trabajo en tu Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

Pega el siguiente código en él y haz clic en el botón **Import**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// here to process data\n// for example, extract alarm info \n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

Ahora, cuando el watcher detecte personas, enviará mensajes a Node-RED automáticamente~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 5. Vista previa de imagen

Si quieres previsualizar la imagen del Watcher, necesitas instalar una librería en Node-RED.

Si no, puedes ignorar esta parte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

Después de la instalación, puedes encontrarla en la **parte de salida**, arrástrala a donde quieras previsualizar la imagen y conéctala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

Este paso es muy importante. Necesitas **hacer doble clic en el nodo de vista previa de imagen** y **completar la url base64 en este nodo**. No olvides **hacer clic en el botón Done y Deploy** en la esquina superior derecha. Después de eso, previsualizaremos la imagen cuando llegue nuevamente el mensaje del Watcher~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

¡Felicitaciones! Ahora los datos se transmiten del Watcher a Node-RED exitosamente. En el próximo wiki te guiaremos sobre cómo transmitir los datos del Watcher a otras plataformas, ¡bienvenido a probarlo~

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

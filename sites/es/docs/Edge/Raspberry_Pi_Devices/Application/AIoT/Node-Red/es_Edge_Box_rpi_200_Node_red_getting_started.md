---
description: Edge Box RPi 200 Primeros Pasos con Node Red 
title: Edge Box RPi 200 Primeros Pasos con Node Red 
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 05/14/2024
  author: Kasun Thushara
---
## Introducción

[Node-RED](https://nodered.org/) es una herramienta de programación versátil diseñada para conectar dispositivos de hardware, APIs y servicios en línea de manera fluida. Su editor de flujo basado en navegador simplifica el proceso de conectar diferentes componentes utilizando una variedad de nodos de la paleta. Con un tiempo de ejecución ligero construido sobre Node.js, utiliza eficientemente la Raspberry Pi y otro hardware de bajo costo, haciéndolo perfecto para aplicaciones de red en el borde.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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

### Preparación del Software

Edge Box-200 llega a tus manos con Raspberry Pi OS preinstalado. Si estás iniciando este dispositivo por primera vez, por favor lee nuestra Wiki de [Primeros Pasos](https://wiki.seeedstudio.com/es/Edge_Box_introduction/)

## Instalar Node Red en Edge box

- **Paso 01**: SSH a Edgebox
Por favor abre PowerShell si estás usando Windows o abre la aplicación Terminal si estás usando el programa y luego escribe ssh `{NOMBRE_USUARIO}@{DIRECCIÓN_IP_EDGEBOX}`. Como ejemplo

```sh
ssh pi@192.168.43.100
```

Luego ingresa la contraseña para el `{USER}` del Sistema Operativo que has configurado en tu Edge Box.

- **Paso 02**: Instalar Node-RED

El equipo de Node-RED nos ha preparado un script Todo-EN-UNO, que puedes simplemente ingresar con el siguiente comando en la APP Terminal nativa del EdgeBox (a través del visor VNC) o en el Shell SSH del paso anterior.

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

Al final de la instalación, habrá un par de preguntas realizadas por el prompt, y necesitas responderlas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 03**: Configurar Node-Red
Después de que la instalación con el script All-IN-ONE esté completa, puedes usar los siguientes comandos según corresponda:

Usa `node-red-start`                   para iniciar Node-RED<br />
Usa `node-red-stop`                    para detener Node-RED <br />
Usa `node-red-start`                   para iniciar Node-RED nuevamente <br />
Usa `node-red-log`                     para ver la salida de registro reciente <br />
Usa `sudo systemctl enable nodered.service`para iniciar automáticamente Node-RED en cada arranque <br />
Usa `sudo systemctl disable nodered.service`para deshabilitar el inicio automático en el arranque <br />

- **Paso 04**: Acceder al editor Node-RED

Ahora por favor abre tu navegador web favorito e ingresa la url descrita a continuación:

- Opción 1: Usa http://127.0.0.1:1880 , si el navegador web se está ejecutando localmente en tu Edgebox vía VNC.

- Opción 2: Usa http://\{EdgeBox_IP_ADDRESS\}:1880, si el navegador web se está ejecutando remotamente en una computadora host, por favor reemplaza \{EdgeBox_IP_ADDRESS\} con la dirección ip del EdgeBox.

## Familiarizándose con Node-RED

Ahora deberías ver un resultado similar a la imagen de abajo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Descripción general del editor Node-RED

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **Panel de Nodos**: El área donde los usuarios pueden navegar y seleccionar nodos de una paleta para agregar a sus flujos.
- **Editor de Flujo**: El espacio de trabajo donde los usuarios conectan visualmente nodos juntos para crear sus flujos.
- **Panel de Configuración**: La sección donde los usuarios pueden configurar las propiedades y ajustes de los nodos seleccionados.
- **Botón de Configuración**: Permite a los usuarios acceder y ajustar varias configuraciones y preferencias para el editor Node-RED.
- **Botón de Despliegue**: Permite a los usuarios desplegar sus flujos al tiempo de ejecución de Node-RED, haciéndolos activos y operacionales.

### Instalar Nodos

Hay un par de opciones: una es usando líneas de comando, y la siguiente es usando el editor Node-RED. Aquí, explicaré el método más simple, que es usar el editor Node-RED.

- **Paso 1**: Haz clic en el botón de Configuración con el ícono de **tres rayas** ubicado en la esquina derecha y luego selecciona Administrar paleta

- **Paso 2**: En la pestaña de paleta haz clic en la pestaña Instalar

- **Paso 3**: Busca el nodo en la barra de búsqueda de nodos y haz clic en el botón instalar para instalar

- **Paso 4**: haz clic en el botón **Instalar** de la ventana de advertencia desplegable para confirmar la instalación

- **Paso 5**: Espera a que la instalación se complete y deberías ver que el botón de instalar cambió a instalado.

- **Paso 6**: deberías ver los nodos instalados en la barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

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

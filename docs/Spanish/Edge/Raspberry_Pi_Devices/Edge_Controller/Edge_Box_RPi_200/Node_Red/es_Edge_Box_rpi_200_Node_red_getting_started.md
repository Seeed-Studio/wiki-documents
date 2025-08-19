---
description: Edge Box RPi 200 Primeros Pasos con Node-RED
title: Edge Box RPi 200 Primeros Pasos con Node-RED
keywords:
  - Edge Controller
  - Edge-Box
  - Node-RED
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

[Node-RED](https://nodered.org/) es una herramienta de programación versátil diseñada para conectar dispositivos de hardware, APIs y servicios en línea de forma sencilla. Su editor de flujo basado en navegador simplifica el proceso de interconectar diferentes componentes utilizando una variedad de nodos disponibles en la paleta. Con un tiempo de ejecución ligero basado en Node.js, aprovecha eficientemente la Raspberry Pi y otros dispositivos de bajo costo, lo que lo hace perfecto para aplicaciones de red perimetral (edge).

## Antes de Empezar

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software con anticipación, tal y como se describe aquí.

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

Edge Box-200 viene con Raspberry Pi OS preinstalado. Si es la primera vez que inicias el dispositivo, por favor revisa nuestro [Getting Started](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki.

## Instalar Node-RED en Edge Box

- **Paso 01**: SSH a EdgeBox

Abre PowerShell (en Windows) o Terminal (en otros sistemas) y escribe `ssh {USUARIO}@{DIRECCION_IP_EDGEBOX}`. Por ejemplo:

```sh
ssh pi@192.168.43.100
```

Luego ingresa la contraseña para el `{USUARIO}` del sistema operativo que configuraste en tu Edge Box.

- **Paso 02**: Instalar Node-RED

El equipo de Node-RED ha preparado un script TODO-EN-UNO, solo introduce el siguiente comando en la Terminal nativa de EdgeBox (vía VNC viewer) o en la Shell SSH del paso anterior.

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

Al final de la instalación, aparecerán algunas preguntas en el aviso, debes responderlas según corresponda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 03**: Configurar Node-RED

Tras completar la instalación con el script TODO-EN-UNO, puedes usar los siguientes comandos según sea necesario:

- `node-red-start` para iniciar Node-RED<br />
- `node-red-stop` para detener Node-RED<br />
- `node-red-start` para reiniciar Node-RED<br />
- `node-red-log` para ver el registro de salida reciente<br />
- `sudo systemctl enable nodered.service` para iniciar Node-RED automáticamente en cada arranque<br />
- `sudo systemctl disable nodered.service` para deshabilitar el arranque automático<br />

- **Paso 04**: Acceder al editor de Node-RED

Abre tu navegador web favorito e ingresa la URL descrita a continuación:

- Opción 1: Usa `http://127.0.0.1:1880`, si el navegador web se ejecuta localmente en tu EdgeBox a través de VNC.

- Opción 2: Usa `http://{DIRECCION_IP_EDGEBOX}:1880`, si el navegador web se ejecuta de forma remota en un equipo host. Sustituye `{DIRECCION_IP_EDGEBOX}` por la dirección IP de EdgeBox.

## Familiarizándote con Node-RED

Ahora deberías ver algo similar a la siguiente imagen:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Descripción general del editor de Node-RED

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **Panel de Nodos**: Área donde el usuario puede explorar y seleccionar nodos de la paleta para agregarlos a sus flujos.
- **Editor de Flujos**: Espacio de trabajo donde el usuario conecta visualmente los nodos para crear sus flujos.
- **Panel de Configuración**: Sección donde se configuran las propiedades y ajustes de los nodos seleccionados.
- **Botón de Configuración**: Permite acceder y ajustar varias configuraciones y preferencias del editor de Node-RED.
- **Botón Deploy**: Despliega los flujos al tiempo de ejecución de Node-RED, haciéndolos activos y operativos.

### Instalar Nodos

Existen un par de opciones: usar líneas de comando o el editor de Node-RED. Aquí explicaré el método más sencillo, que es utilizando el editor de Node-RED.

- **Paso 1**: Haz clic en el botón de Configuración (icono de **tres barras**) en la esquina derecha y luego selecciona **Manage palette**.

- **Paso 2**: En la pestaña de paleta, haz clic en la pestaña **Install**.

- **Paso 3**: Busca el nodo en la barra de búsqueda y haz clic en el botón **Install** para instalarlo.

- **Paso 4**: Haz clic en el botón **Install** en la ventana de advertencia desplegable para confirmar la instalación.

- **Paso 5**: Espera a que finalice la instalación y deberías ver que el botón Install cambia a Installed.

- **Paso 6**: Verás los nodos instalados en la barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

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

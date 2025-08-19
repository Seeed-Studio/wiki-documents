---
description: Administra y automatiza eficientemente tus soluciones IIoT con Node-RED en el reComputer-R1000 Raspberry Pi. Integra datos de diversos protocolos industriales, visualiza en tiempo real y mejora la eficiencia operativa con esta potente y fácil de usar plataforma.
title: Introducción a Node-RED en reComputer-R1000
keywords:
  - Edge Controller
  - reComputer
  - IoT
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_getting_started_node_red
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción

[Node-RED](https://nodered.org/) es una herramienta de programación versátil diseñada para conectar dispositivos de hardware, API y servicios en línea de manera sencilla. Su editor de flujo basado en navegador facilita la integración de diferentes componentes mediante una variedad de nodos disponibles en la paleta. Con un entorno de ejecución ligero basado en Node.js, aprovecha eficientemente el Raspberry Pi y otros dispositivos de bajo costo, lo que lo hace ideal para aplicaciones en redes de borde.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación del Software

El reComputer-R1000 viene con Raspberry Pi OS preinstalado. Si estás iniciando este dispositivo por primera vez, consulta nuestra [Guía de Inicio](https://wiki.seeedstudio.com/recomputer_r/).

## Instalación de Node-RED en reComputer-R1000

### Paso 1: Conectar por SSH a reComputer-R1000

Abre PowerShell en Windows o la aplicación Terminal en otro sistema y escribe:

```sh
ssh {USUARIO}@{DIRECCIÓN_IP_RECOMPUTER}
```

Ejemplo:

```sh
ssh pi@192.168.43.100
```

Luego, introduce la contraseña del usuario configurado en el sistema operativo de tu reComputer.

### Paso 2: Instalar Node-RED

El equipo de Node-RED ha preparado un script **todo-en-uno** que simplifica la instalación. Ejecuta el siguiente comando en la terminal de reComputer (a través de VNC Viewer o SSH):

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

Al final de la instalación, aparecerán algunas preguntas en pantalla. Responde según tus necesidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

### Paso 3: Configurar Node-RED

Después de completar la instalación con el script todo-en-uno, puedes utilizar los siguientes comandos según sea necesario:

- **Iniciar Node-RED:**
  ```sh
  node-red-start
  ```
- **Detener Node-RED:**
  ```sh
  node-red-stop
  ```
- **Ver el registro de Node-RED:**
  ```sh
  node-red-log
  ```
- **Habilitar inicio automático al arrancar el sistema:**
  ```sh
  sudo systemctl enable nodered.service
  ```
- **Deshabilitar inicio automático al arrancar el sistema:**
  ```sh
  sudo systemctl disable nodered.service
  ```

### Paso 4: Acceder al editor de Node-RED

Abre tu navegador web favorito e ingresa la siguiente URL según tu configuración:

* **Opción 1:** Usa `http://127.0.0.1:1880` si el navegador web se ejecuta localmente en tu reComputer a través de VNC.
* **Opción 2:** Usa `http://{DIRECCIÓN_IP_RECOMPUTER}:1880` si el navegador web se ejecuta de manera remota en otro equipo. Reemplaza `{DIRECCIÓN_IP_RECOMPUTER}` con la dirección IP de tu reComputer.

## Familiarizándose con Node-RED

Deberías ver una interfaz similar a la siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Descripción de la interfaz de Node-RED

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **Panel de Nodos:** Área donde los usuarios pueden explorar y seleccionar nodos de la paleta para agregarlos a sus flujos.
- **Editor de Flujos:** Espacio de trabajo donde los usuarios conectan visualmente los nodos para crear sus flujos.
- **Panel de Configuración:** Sección donde los usuarios configuran las propiedades y ajustes de los nodos seleccionados.
- **Botón de Configuración:** Permite acceder y ajustar diversas configuraciones y preferencias del editor de Node-RED.
- **Botón de Despliegue:** Habilita a los usuarios para desplegar sus flujos en el entorno de ejecución de Node-RED, activándolos y poniéndolos en funcionamiento.

### Instalación de Nodos

Existen dos opciones para instalar nodos en Node-RED: mediante la línea de comandos o desde el editor de Node-RED. Aquí explicaremos la forma más sencilla, utilizando el editor de Node-RED.

- **Paso 1:** Haz clic en el botón de **Configuración** (ícono de tres líneas en la esquina superior derecha) y selecciona **Manage palette**.
- **Paso 2:** En la pestaña de la paleta, selecciona la pestaña **Instalar**.
- **Paso 3:** Busca el nodo en la barra de búsqueda y haz clic en el botón **Instalar**.
- **Paso 4:** Confirma la instalación haciendo clic en el botón **Instalar** en la ventana emergente.
- **Paso 5:** Espera a que se complete la instalación. Una vez finalizada, el botón cambiará de **Instalar** a **Instalado**.
- **Paso 6:** Verás los nodos instalados en la barra lateral del editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
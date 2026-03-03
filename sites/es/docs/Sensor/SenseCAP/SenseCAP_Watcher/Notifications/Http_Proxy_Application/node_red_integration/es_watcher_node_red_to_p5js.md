---
description: Enviar mensaje desde Watcher & Node-RED a p5js
title: Watcher & Node-RED a P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /es/watcher_node_red_to_p5js
last_update:
  date: 08/12/2024
  author: Allen
---

# Inicio Rápido de Watcher & Node-RED a p5.js

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ¿Qué es [p5.js](https://p5js.org/)?

p5.js es una biblioteca de JavaScript que hace que la programación sea accesible para artistas y diseñadores. Proporciona una manera fácil de crear gráficos, animaciones y aplicaciones interactivas usando una sintaxis simple. Con características como dibujar en un lienzo, manejar entrada del usuario y soporte multimedia, p5.js es ideal para proyectos de programación creativa, propósitos educativos y arte digital. Su vibrante comunidad y recursos extensos ayudan a usuarios de todos los niveles de habilidad a comenzar.

## Configuración de Node-RED

### Paso 1. Ejecutar tarea en Watcher

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 2. Configuración

Hay 4 módulos que necesitas configurar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** Obtener datos desde Watcher a Node-RED. [Para detalles por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

2. **function:** Para procesar datos desde Watcher. **Haz doble clic** en el módulo function y pega los siguientes códigos en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **solicitud http:** Envía una <span id="post">solicitud POST</span> al **servidor** y luego a p5.js.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** Para ver información de salida, para depurarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### Paso 3.Despliegue

Cuando termines la configuración, no olvides **Desplegarlo**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## Construir un servidor

### Paso 4.Descargar código del servidor

[Por favor haz clic en este enlace](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) para descargar todo el código del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5.Ejecutar el servidor

Antes de ejecutar el servidor, debes instalar algunos paquetes primero. 

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

Descomprime el paquete y entra en él, luego ejecuta ```node server.js``` para ejecutar el servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

Ahora el servidor está escuchando en el puerto 3000, por lo que el mensaje de [Node-RED](#post) será enviado a este servidor, y luego a p5.js.

## Configuración de VScode

### Paso 6. Instalar extensiones

Necesitas instalar 2 extensiones, que son **Live Server** y **p5.vscode**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### Paso 7. Abrir proyecto

Abre el proyecto que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

La estructura se verá como la imagen de abajo cuando lo abras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### Paso 7. Ejecutar proyecto

Abre **sketch.js** y haz clic en el botón **Go Live**, que ejecutará el proyecto localmente en el navegador predeterminado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

El efecto se verá como la imagen de abajo, este servicio se ejecuta en el puerto 5500.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

Cuando se detecten personas, se verá así.

:::tip
Necesitas mantener ejecutándose Node-RED y server.js
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

¡Felicitaciones por completar exitosamente tu viaje desde Watcher hasta p5.js! Has adquirido habilidades valiosas, y hay muchas más características emocionantes esperando que las explores. ¡Sigue experimentando y disfruta las posibilidades creativas que te esperan!

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
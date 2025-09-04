---
description: Enviar mensaje desde Watcher & Node-RED a IFTTT
title: Watcher & Node-RED a IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /es/watcher_node_red_to_ifttt
last_update:
  date: 06/28/2024
  author: Allen
---

# Inicio Rápido de Watcher a IFTTT

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. ¿Qué es [IFTTT (If This Then That)](https://ifttt.com/)?

IFTTT es un servicio basado en web que permite a los desarrolladores crear automatizaciones e integraciones entre varias aplicaciones, dispositivos y servicios sin programación compleja. Permite a los usuarios definir declaraciones condicionales simples llamadas "applets" que activan acciones basadas en eventos específicos. Proporciona una interfaz fácil de usar y una vasta biblioteca de applets preconfigurados, haciéndolo accesible para que los desarrolladores creen automatizaciones e integraciones poderosas de manera eficiente.

## Parte 2. Cómo configurar IFTTT

### Paso 1. Configurar Webhooks

Primero, necesitamos **Crear** un Applet de IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

Necesitamos **Agregar** un disparador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

Busca **Webhooks** y haz clic en ese servicio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

Verás una breve introducción del disparador Webhooks y vamos a seleccionar el segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

Dale un nombre a tu disparador y créalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### Paso 2. Configurar Email

Cuando se active el disparador, necesitamos tomar una acción. Así que aquí está la acción que quieres tomar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

Vamos a enviar un email vía Gmail cuando se active el disparador. Por supuesto, hay millones de servicios que puedes usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Selecciona la cuenta de Gmail y completa la dirección de email donde quieres enviar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

Personaliza el **Asunto** y **Cuerpo** como quieras o por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

Haz clic en el botón **Continuar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Finalizar Applet

Puedes editar tu **Título del Applet** o dejarlo por defecto, y luego haz clic en **Finalizar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

Cuando termines, puedes guardar este enlace porque lo usaremos más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## Parte 3. Acceder a IFTTT en Node-RED

### Paso 4. El mensaje del observador se envía a Node-RED

Arrastra esos módulos al espacio de trabajo y conéctalos entre sí. Si aún no sabes cómo enviar mensajes del observador a Node-RED, [por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Procesar el mensaje que quieres enviar a IFTTT

Haz doble clic en el módulo **function** y escribe algo de código para obtener **value1** y **value2**, tal vez **value3**. Esos valores se enviarán a IFTTT.

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el módulo **http request**, selecciona el método **POST** y **pega la URL** que acabas de copiar de IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

Cuando termines, no olvides hacer **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 4. Enviar mensaje a través de IFTTT

### Paso 6. Enviar una tarea a Watcher

En primer lugar, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 7. Verificar esos mensajes en IFTTT y el teléfono

Abre **My Applets** y haz clic en el applet que creaste antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

Desplázate hacia abajo en la página y haz clic en el botón **View activity**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

Continúa desplazándote hacia abajo y haz clic en estos dos botones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

Y entonces verás esos mensajes enviados por Watcher así como tu correo electrónico.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Mensaje de IFTTT</th>
      <th>Mensaje de correo electrónico</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

¡Felicidades por completar la demostración de Watcher a email de IFTTT! Este es solo el comienzo de tu viaje con IFTTT. Hay innumerables aplicaciones e integraciones esperando a que las descubras. Sigue explorando, aprendiendo y automatizando para hacer tu vida más eficiente y productiva. Las posibilidades son infinitas con IFTTT, ¡así que diviértete y feliz experimentación!

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

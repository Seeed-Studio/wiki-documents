---
description: Enviar mensaje desde Watcher & Node-RED a twilio
title: Watcher & Node-RED a Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /es/watcher_node_red_to_twilio
last_update:
  date: 07/03/2024
  author: Allen
---

# Inicio Rápido de Watcher a Twilio

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. ¿Qué es [Twilio](https://www.twilio.com/)?

Twilio es una plataforma líder de comunicaciones en la nube para desarrolladores. Ofrece un conjunto de APIs para integrar capacidades de voz, video y mensajería en aplicaciones. Con Twilio, los desarrolladores pueden construir fácilmente características de comunicación poderosas como llamadas de voz, chat de video y mensajería SMS. Proporciona herramientas fáciles de usar e infraestructura confiable, convirtiéndolo en la opción principal para desarrolladores que crean aplicaciones innovadoras y mejoran las experiencias de usuario. Twilio opera con un modelo de pago por uso, permitiendo a los desarrolladores pagar solo por los servicios de comunicación específicos que utilizan.

## Parte 2. Cómo registrarse

**Paso 1.**[Haz clic aquí para ir a Twilio](https://console.twilio.com/). Cuando termines el registro, verás tu **SID** y **Token**. Además, necesitamos comprar un número para enviar mensajes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Ve a esta página y selecciona un número que te guste y cómpralo. Como nuevo usuario, Twilio te dará 15 dólares para probar sus funciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Aquí hay una introducción de este número, puedes echarle un vistazo y luego hacer clic en el botón Comprar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Esta página mostrará todos los números activos. El número que acabas de comprar se mostrará aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5.** Regresa a la página de la consola y verás **SID**, **Token** y **número de teléfono**. Eso es lo que necesitamos <span id="jump">más tarde</span>.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Cómo configurar Twilio en Node-RED

Si aún no sabes cómo enviar mensajes desde watcher a Node_RED, [por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

**Paso 1.** Primero necesitamos descargar el complemento de Twilio en Node-RED, así que haz clic en **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**Paso 2.** Busca twilio e instala el primero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Arrastra el módulo Twilio al espacio de trabajo y haz doble clic en él, y luego agrega una nueva configuración de Twilio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4.** Completa esas propiedades, **SID** y **From** y **Token** son de la [consola de Twilio](#jump). **Name** significa el nombre de esta configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**Paso 5.** Completa esas propiedades, **Output** significa si quieres SMS o llamada telefónica, **To** significa a qué número de teléfono quieres enviar, **Name** significa el nombre de este módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**Paso 6.** Después de eso, verás esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Parte 4. Enviar mensaje a twilio

### Obtener todos los resultados

**Paso 1.** Ejecutar una tarea en Watcher.

En primer lugar, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 2.** Arrastra el módulo **OpenStream** de sensecap y el módulo **debug** al espacio de trabajo y configúralos. Si no sabes cómo configurar, [por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/). Conéctalos y haz clic en el botón **Deploy** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Recibirás mensajes tanto en la **página de debug** como en el **mensaje de Twilio** en tu teléfono.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página de debug</th>
      <th>mensaje de Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Obtener resultados específicos

**Paso 1.** Si consideras que obtener todos los resultados es demasiado y solo quieres obtener resultados específicos. Necesitas arrastrar un **módulo de función** al centro y conectarlos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Haz doble clic en el **módulo de función** y escribe algo de código para obtener el mensaje que deseas. Haz clic en **Done** y **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

Obtener un mensaje específico.

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

Si quieres obtener más de un mensaje, por favor sigue los códigos a continuación.

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "Alert received at " + timestamp
};
return msg;
```

**Paso 2.** Ejecuta una tarea en Watcher, si no sabes cómo ejecutar una tarea, [consulta aquí.](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task)

**Paso 3.** Recibirás un mensaje tanto en la **página de depuración** como en el **mensaje de Twilio** en tu teléfono.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página de depuración</th>
      <th>mensaje de Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

¡Felicidades por conectar exitosamente Watcher con Twilio! Ahora, libera el poder de esta integración y comienza a construir aplicaciones innovadoras que aprovechen las capacidades de comunicación sin interrupciones～

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

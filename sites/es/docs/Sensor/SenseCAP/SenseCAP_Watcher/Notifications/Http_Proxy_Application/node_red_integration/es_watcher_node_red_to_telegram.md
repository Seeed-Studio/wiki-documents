---
description: Enviar mensaje desde Watcher & Node-RED a Telegram
title: Watcher & Node-RED a Telegram
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /es/watcher_node_red_to_telegram
last_update:
  date: 06/07/2024
  author: Allen
---

# Inicio Rápido de Watcher a Telegram

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Qué es [Telegram](https://telegram.org/)

Telegram es una aplicación de mensajería popular que ofrece una amplia gama de características tanto para usuarios como para desarrolladores. Con su API y protocolo abiertos, los desarrolladores pueden crear clientes personalizados de Telegram, bots e integrar los servicios de Telegram en sus propias aplicaciones. Telegram proporciona una plataforma segura y confiable para la comunicación en tiempo real, soportando varios tipos de medios, chats grupales y cifrado de extremo a extremo. Su infraestructura basada en la nube asegura una sincronización perfecta entre dispositivos y permite una fácil escalabilidad. Los desarrolladores pueden aprovechar las características y herramientas de Telegram para construir soluciones innovadoras y mejorar las experiencias de usuario dentro de sus proyectos.

## Cómo acceder a la API de Telegram

### Paso 1. Obtener token del bot

1. Primero necesitas descargar la aplicación de Telegram y entrar a la página de **BotFather**. Envía **/newbot** y según las indicaciones **nombra tu bot**.

2. Después de eso, **haz clic en el enlace** en la página 2 para saltar a tu bot (página 3) y luego **envía algo a tu bot**. Recuerda enviar algo, de lo contrario no podrás obtener tu chatid.

3. Otra cosa importante es **guardar tu token** donde hice mosaico en la página 2. Lo usaremos más tarde.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página 1</th>
      <th>página 2</th>
      <th>página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Paso 2. Obtener chatId del bot

Según el paso anterior, BotFather te dará algunos comentarios cuando hayas creado tu bot. Encontrarás el **Token** en los comentarios y el formato sería como: **123456789:AoUJnnpoFlkkdfJbCXlo....** Y luego usa tu Token para acceder a este enlace para obtener tu **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

Encontrarás tu **ChatId** siguiendo la imagen de abajo. El ChatId sería como: **7283028524**. **Guarda tu Token y ChatId**, los usaremos más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## Configurar el módulo de Telegram en Node-RED

### Paso 3. Instalar el módulo de Telegram

Sigue la imagen de abajo para instalar el módulo de Telegram. Si aún no has instalado Node-RED, [por favor consulta aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**Busca telegram** e instala el tercero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### Paso 4. Conectar y configurar módulos

**Arrastra** esos módulos al espacio de trabajo y conéctalos entre sí. Si no sabes cómo configurar **OpenStream**, aún puedes [consultar este enlace](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

Ahora vamos a configurar el módulo **function**. Haz doble clic en él y pega el siguiente código en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // change to your Telegram Chat ID

// set payload to send photo
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// set payload to send message
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// send photo
node.send({ payload: photoPayload });

// send message
node.send({ payload: messagePayload });
```

Después de eso, a continuación vamos a configurar el módulo **sender**, siguiendo la imagen de abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

Pega aquí tu **nombre del bot, Token, ChatId**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

La configuración del otro **sender** es similar, solo sigue la imagen de abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## Enviar información a Telegram

### Paso 5. Ejecutar una tarea en Watcher

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video de abajo. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 6. Enviar mensaje y foto a Telegram

Cuando la tarea se active, recibirás un mensaje de tu Watcher. Tanto en Node-RED como en la App de Telegram.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Node-RED</th>
      <th>Telegram</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/8.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/13.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

¡Felicidades por conectar exitosamente Watcher a Telegram! Has desbloqueado un mundo de posibilidades emocionantes para tu viaje de desarrollo. Prepárate para explorar y crear aplicaciones innovadoras que aprovechen las poderosas características de Telegram. ¡El futuro es brillante, y no podemos esperar a ver lo que construirás a continuación!

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

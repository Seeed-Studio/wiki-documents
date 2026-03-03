---
description: Este wiki muestra cómo desplegar y usar Clawdbot en reComputer Jetson.
title: Desarrollar reComputer Jetson usando Clawdbot
keywords:
- reComputer Super
- Jetson
- LLM
- Clawdbot
- Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /develop_recomputer_jetson_using_clawdbot
sku: 114110314, 114090066
last_update:
  date: 01/28/2026
  author: Youjiang
---


# Desarrollar reComputer Jetson usando Clawdbot

## Introducción

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>

    Tradicionalmente, desarrollar en un dispositivo edge Jetson requería una configuración física con monitor, teclado y ratón. Incluso con acceso SSH remoto, los desarrolladores aún dependían de flujos de trabajo basados en terminal y herramientas adicionales para monitoreo y despliegue.
    Con Clawdbot, el desarrollo se vuelve mucho más simple. Los desarrolladores ahora pueden interactuar con el reComputer Jetson directamente a través de una aplicación de chat como WhatsApp — enviando mensajes para verificar el estado del dispositivo, ejecutar comandos y depurar scripts de una manera más conveniente.

    Este wiki muestra cómo desplegar y usar Clawdbot en reComputer Jetson.
</div>

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops.png" />
</div>

## Prerrequisitos

- reComputer Super J4012
- Cámara USB

<table align="center">
    <tr>
        <th>reComputer Super J4012</th>
        <th>Cámara USB</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## Conexión de Hardware

Conecta la cámara USB a un puerto USB Type-A en el dispositivo Jetson.

## Primeros Pasos

1. Instalar Clawdbot en el dispositivo Jetson  
Abre una terminal en el dispositivo Jetson y ejecuta:

```bash
curl -fsSL https://molt.bot/install.sh | bash
```

2. Configurar Clawdbot  
Después de la instalación, la página de configuración se abre automáticamente. Sigue las indicaciones de la terminal y presta atención a:

- Seleccionar el LLM e ingresar la API Key
- Elegir el canal de interacción (WhatsApp en este ejemplo)

3. Iniciar el Agente AI Clawdbot  
Si todo está configurado correctamente, el agente se inicia automáticamente. Luego abre la WebUI en el navegador del dispositivo Jetson:  
`http://127.0.0.1:18789`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/webui.png" />
</div>

Ahora puedes abrir WhatsApp en tu teléfono y controlar el reComputer Jetson enviándote mensajes a ti mismo.

## Demostración del Efecto

En el video de demostración, usamos una aplicación de chat móvil para verificar el estado del dispositivo Jetson y desarrollamos un script de depuración de cámara a través de interacción basada en chat.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/9bQcx7G0CiU" title="Desarrollar reComputer Jetson usando Clawdbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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

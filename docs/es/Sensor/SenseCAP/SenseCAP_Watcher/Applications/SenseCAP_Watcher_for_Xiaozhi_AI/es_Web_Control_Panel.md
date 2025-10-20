---
description: Guía para usar el Panel de Control Web de tu SenseCAP Watcher Agent
title: Panel de Control Web(β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Web Control Panel
- Agent Configuration
- Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Guía del Panel de Control Web Beta

## Descripción General

El Panel de Control Web de SenseCAP Watcher (Beta) proporciona una interfaz basada en web para gestionar tu dispositivo Watcher y configurar sus ajustes de Agent. Esta versión beta incluye características esenciales para la gestión de dispositivos y personalización del Agent.

El siguiente video sirve como un tutorial paso a paso sobre cómo configurar tu dispositivo usando el Panel de Control Web.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Características Actuales

La versión beta del Panel de Control Web incluye las siguientes características clave:

1. Vinculación de Dispositivo
2. Configuración del Agent
3. Selección de Modelo LLM
4. Gestión del Historial de Chat
5. Visualización de Información del Dispositivo

## Vinculación de Dispositivo

### Proceso de Vinculación
1. Ingresa a la [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)
2. Para acceder al Panel de Control, haz clic en Watcher Agent en la esquina superior derecha de la página.
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>
3. Haz clic en el botón "Bind Device"
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
4. Sigue las instrucciones en pantalla e ingresa el código de verificación de 6 dígitos mostrado en el dispositivo



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Configuración del Agent

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### Plantilla de rol
- Proporcionamos plantillas preestablecidas, también puedes crear tus propias plantillas o modificar las plantillas preestablecidas.

### Apodo del Asistente
- Personaliza el nombre de tu Agent.
:::note
Esta característica no cambia la palabra de activación del Agent. 
La palabra de activación del Agent solo puede modificarse al compilar el firmware. 
La palabra de activación predeterminada es "Jarvis".
:::


### Voz del Personaje
- Selecciona diferentes voces

### Introducción/Prompt del Rol
1. Elige entre plantillas de rol predefinidas
2. Crea plantillas de rol personalizadas
3. Modifica plantillas existentes
:::note
El Apodo del Asistente configurado arriba solo funcionará si se agrega `assistant nickname` a la Introducción del Rol.
Para obtener la hora actual, necesitas agregar: __DATE__
:::


### Visualización del Historial
- Accede a los registros de chat
- Ve mensajes individuales
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## Información del Dispositivo

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

El panel de control muestra información esencial del dispositivo incluyendo:

- Nombre de la Placa
- Dirección MAC
- Versión de la APP
- Última Hora de Conexión
- Interruptor de Actualización Automática
- Operación

:::note
Esta es una versión beta del Panel de Control Web, y las características pueden actualizarse o cambiar en futuras versiones. Por favor verifica las actualizaciones regularmente para obtener la funcionalidad más reciente.
:::

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

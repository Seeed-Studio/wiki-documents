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
slug: /watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [zh-CN]
createdAt: '2025-05-07'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/es/watcher_web_control_panel/
---

# Guía Beta del Panel de Control Web

## Descripción general

El Panel de Control Web (Beta) de SenseCAP Watcher proporciona una interfaz basada en la web para gestionar tu dispositivo Watcher y configurar los ajustes de su Agent. Esta versión beta incluye funciones esenciales para la gestión del dispositivo y la personalización del Agent.

El siguiente video sirve como un tutorial paso a paso sobre cómo configurar tu dispositivo usando el Panel de Control Web.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Funciones actuales

La versión beta del Panel de Control Web incluye las siguientes funciones clave:

1. Vinculación de dispositivo
2. Configuración del Agent
3. Selección de modelo LLM
4. Gestión del historial de chat
5. Visualización de información del dispositivo

## Vinculación de dispositivo

### Proceso de vinculación
1. Accede al panel de control de Watcher Agent a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`**, o utiliza el [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37) y luego haz clic en **`Watcher Agent`** en la barra lateral izquierda.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_agent_workspace.png" style={{width:800, height:'auto'}}/></div>

2. Haz clic en el botón "Bind Device"
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
3. Sigue las instrucciones en pantalla e introduce el código de verificación de 6 dígitos que se muestra en el dispositivo



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Configuración del Agent

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### Plantilla de rol
- Proporcionamos plantillas preestablecidas; también puedes crear tus propias plantillas o modificar las plantillas preestablecidas.

### Apodo del asistente
- Personaliza el nombre de tu Agent.
:::note
Esta función no cambia la palabra de activación del Agent. 
La palabra de activación del Agent solo se puede modificar al compilar el firmware. 
La palabra de activación predeterminada es “Jarvis”.
:::


### Voz del personaje
- Selecciona una voz diferente

### Introducción/Prompt del rol
1. Elige entre plantillas de rol predefinidas
2. Crea plantillas de rol personalizadas
3. Modifica plantillas existentes
:::note
El Apodo del asistente configurado arriba solo funcionará si se añade `assistant nickname` a la Introducción del rol.
Para obtener la hora actual, necesitas añadir: __DATE__
:::


### Visualización del historial
- Accede a los registros de chat
- Visualiza mensajes individuales
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## Información del dispositivo

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

El panel de control muestra información esencial del dispositivo, incluyendo:

- Nombre de la placa
- Dirección MAC
- Versión de la APP
- Hora de última conexión
- Interruptor de actualización automática
- Operación

:::note
Esta es una versión beta del Panel de Control Web, y las funciones pueden actualizarse o cambiarse en futuras versiones. Revisa periódicamente si hay actualizaciones para obtener la funcionalidad más reciente.
:::

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

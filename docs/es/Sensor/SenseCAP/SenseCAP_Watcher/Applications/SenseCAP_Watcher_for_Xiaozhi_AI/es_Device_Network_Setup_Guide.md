---
description: Esta guía te ayudará a configurar y establecer conexiones de red para tu SenseCAP Watcher Agent
title: Guía de Configuración de Red del Dispositivo
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Network Setup
  - IoT Configuration
  - WiFi Configuration
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/device_network_setup
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Guía de Configuración de Red del Dispositivo

Este documento te guiará a través del proceso de configuración de red para tu SenseCAP Watcher Agent. Sigue estos pasos para conectar fácilmente tu dispositivo a tu red y comenzar.

El siguiente video sirve como un tutorial paso a paso sobre cómo configurar tu dispositivo usando el Panel de Control Web.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Requisitos Previos

Antes de comenzar la configuración, asegúrate de tener lo siguiente:

- SenseCAP Watcher con firmware Agent instalado
- Red Wi-Fi de 2.4GHz disponible (Excepto redes que requieren autenticación secundaria, ej. redes empresariales)
- Dispositivo móvil o computadora para la configuración

## Pasos de Configuración de Red

### Configuración Inicial

Paso 1. Enciende tu dispositivo
- Conecta el dispositivo a una fuente de alimentación, o mantén presionado el botón de la rueda de desplazamiento en la esquina superior derecha durante 5 segundos y luego suéltalo.
:::tip Nota
Si la configuración comienza inmediatamente después de flashear el firmware, usa un alfiler para presionar suavemente el botón de reinicio.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- El dispositivo se encenderá y entrará en modo de configuración Wi-Fi



### Configuración WiFi

Paso 1. Conectar al Punto de Acceso del Dispositivo
- En tu dispositivo móvil o computadora, busca una red WiFi llamada "Watcher-XXXX"
- Conéctate a esta red
- Espera unos segundos para que se establezca la conexión
- Una interfaz de configuración debería abrirse automáticamente en tu navegador
:::note
Si la página de configuración no se abre automáticamente, asegúrate de estar aún conectado a la red "Watcher-XXXX" y navega manualmente a `http://192.168.4.1` en el navegador web.
:::

Paso 2. Configurar Conexión WiFi
- Espera aproximadamente 5 segundos para que se complete el escaneo WiFi
- De la lista de redes de 2.4GHz disponibles, selecciona tu red Wi-Fi doméstica
- El SSID se completará automáticamente
- Ingresa la contraseña para tu red WiFi seleccionada
- Haz clic en el botón "Connect" para enviar

:::note
Solo se admiten redes de 2.4GHz
Si usas un punto de acceso de iPhone, habilita la opción "Maximum Compatibility"
La página de escaneo WiFi puede tardar unos 5 segundos en cargar - por favor no cierres o canceles la página
:::

Paso 3. Completar Proceso de Conexión
- Si las credenciales WiFi son correctas, el dispositivo se conectará automáticamente
- Aparecerá una marca de verificación verde, indicando configuración de red exitosa
- El dispositivo se reiniciará automáticamente después de 3 segundos
- Después del reinicio, el dispositivo se conectará automáticamente a la red WiFi configurada

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 


### Registro del Dispositivo

Paso 1. El dispositivo muestra un código de verificación
- Escucha/Busca el código de verificación de 6 dígitos
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

Paso 2. Registrar Dispositivo
- Accede a la [plataforma SenseCraft AI-Watcher Agent](https://sensecraft.seeed.cc/ai/watcher-agent)
- Configura tu Agent según este [WiKi](https://wiki.seeedstudio.com/es/watcher_web_control_panel/)

### Operaciones Básicas

1. Encender
   - Mantén presionada la rueda de desplazamiento durante 3-5 segundos, luego suéltala

2. Apagar
   - Desconecta la fuente de alimentación
   - Mantén presionada la rueda de desplazamiento durante 3 segundos, luego suéltala

3. Reiniciar
   - Usa un alfiler para presionar suavemente el botón de reinicio

4. Restablecimiento de Fábrica
   - Mantén presionada la rueda de desplazamiento durante 10 segundos

5. Volver a Entrar en Modo de Configuración de Red
   - Cuando el dispositivo muestre el estado "Scanning Wi-Fi"
   - Presiona la rueda de desplazamiento una vez
   - El dispositivo volverá a entrar en modo de configuración de red

## Solución de Problemas

Si encuentras problemas de conexión:

1. Problemas Comunes
   - Verifica dos veces el nombre y contraseña del Wi-Fi
   - Asegúrate de estar conectándote a una red de 2.4GHz


## FAQ

**P: ¿Por qué no puedo encontrar la red Watcher-XXXX?**

R: Intenta usar un alfiler para presionar suavemente el botón de reinicio nuevamente para reiniciar el dispositivo y entrar en modo de configuración.
Si previamente te has emparejado con una red, reinicia el dispositivo y presiona la rueda de desplazamiento una vez mientras el dispositivo muestra "Scanning Wi-Fi" para volver a entrar en modo de emparejamiento

**P: ¿Qué debo hacer si la página de configuración no carga automáticamente?**

R: Navega manualmente a `http://192.168.4.1` en el navegador web mientras estés conectado a la red Watcher-XXXX.

**P: ¿Cómo acceder a otras redes Wi-Fi?**

R: Cuando se muestre "Scanning Wi-Fi" al iniciar, presiona la rueda de desplazamiento para entrar en modo de configuración wifi. El wifi configurado se guardará.

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
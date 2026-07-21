---
description: Usa reSpeaker XVF3800 para controlar el reCamera Gimbal para la localización de fuentes de sonido
title: Localización de fuentes de sonido con reCamera Gimbal
keywords:
  - reCamera Gimbal
  - reSpeaker
  - localización de fuentes de sonido
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif
slug: /sound_source_localization_of_recamera_gimbal
sku: 108990119,114993700
sidebar_position: 11
last_update:
  date: 04/17/2026
  author: Xinrui Wu
createdAt: '2026-04-17'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/es/sound_source_localization_of_recamera_gimbal/
---


# Localización de fuentes de sonido con reCamera Gimbal

## Introducción

Decidimos divertirnos un poco y experimentar combinando IA perimetral de audio y visión. 🤖

En esta demo, conectamos la reSpeaker USB Mic Array de Seeed Studio a nuestro reCamera Gimbal con tecnología RISC-V. Al utilizar la localización de fuentes de sonido (DOA), el sistema permite que los motores sin escobillas del gimbal giren automáticamente y se orienten hacia la dirección del hablante en tiempo real. Es una exploración muy divertida de cómo nuestros dispositivos perimetrales multimodales pueden interactuar sin problemas.  

Aquí se muestra el efecto de uso después de completar esta demo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif" /></div>

## Preparación de hardware

un reCamerab Gimbal  
un reSpeaker XVF3800  
un ordenador  

<table align="center">
  <tr>
    <th style={{textAlign:'center'}}>reCamera Gimbal</th>
    <th style={{textAlign:'center'}}>reSpeaker XVF3800</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-With-Case-XIAO-ESP32S3-p-6628.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>

## 1. Abre SenseCraft para desplegar la aplicación

### 1.1 Configurar reCamera Gimbal

Primero, no conectes la fuente de alimentación de reCamera Gimbal, conecta directamente el Type-C al ordenador, accede a 192.168.42.1, haz clic en "Login to SenseCraft" en la esquina inferior izquierda después de entrar, luego conéctale WiFi después de iniciar sesión, asegúrate de que el WiFi conectado sea el mismo que el de tu ordenador, luego comprueba la dirección IP de reCamera Gimbal, copia la dirección IP y accede a ella para ver si se puede acceder con normalidad, luego desconecta el cable Type-C y conecta la fuente de alimentación de 12 V, después de que se complete la calibración automática de reCamera Gimbal, vuelve a visitar la dirección IP anterior en el navegador y entra en la interfaz de reCamera Gimbal para asegurarte de que Node-RED ha empezado a ejecutarse con normalidad.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_1.png" /></div>

### 1.2 Despliegue de la aplicación

Entra en [SenseCraft](https://sensecraft.seeed.cc/ai/application), haz clic en "Applications" para encontrar la aplicación llamada "Sound source localization Camera", haz clic en "Deploy this Application" después de entrar y luego selecciona "Option 1: Deploy via USB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_2.png" /></div>

El flujo de trabajo que veas después del despliegue debería ser similar a este:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_3.png" /></div>

## 2. Obtén el código fuente y configura el entorno de trabajo de Python

Visita el [proyecto en GitHub](https://github.com/xr686/reCamera-Gimbal-reSpeaker-Tracker.git), descarga el paquete y luego descomprímelo.

Para comunicarte con el reSpeaker a través de USB, instala la dependencia en tu ordenador:

\# Instala el paquete de Python requerido desde el archivo de requisitos proporcionado

```bash
pip install -r Sound-Tracking/requirements.txt
```

\# Instala libusb a través de Conda (esencial para la compatibilidad del controlador de back-end)

```bash
conda install -c conda-forge libusb
```

Por favor, sustituye "192.168.31.198" en el código reSpeaker.py por la dirección IP real de tu reCamera Gimbal después de conectarlo a WiFi.

## 3. Pruebas

Ejecuta el script de Python en tu ordenador para hacer lo siguiente:

```bash
python Sound-Tracking/reSpeaker.py
```

Habla al micrófono: deberías ver que la terminal de Python imprime continuamente SPEECH_DETECTED:1, mientras que la reCamera gira rápidamente hacia el ángulo de tu voz.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_4.png" /></div>

## ¡Amplía más formas de jugar!

Esta demo es solo el comienzo. Animamos mucho a todos a llevar a cabo un desarrollo secundario sobre esta base y ampliar un juego más hardcore. Por ejemplo:

-** Activar enlace **: Puedes modificar el script de Node-RED o de Python para hacer que reCamera Gimbal empiece a grabar ** o *hacer fotos* * inmediatamente después de girar hacia la posición de la fuente de sonido.

-**Seguridad inteligente**: Combinado con Home Assistant, puede rastrear y grabar automáticamente cuando se produce un ruido anormal en la habitación.

-**Confirmación dual visual y auditiva**: Combina la detección de objetivos YOLO11n con el seguimiento auditivo (por ejemplo: escuchar un sonido -> girar para mirar -> reconocimiento visual para confirmar si es una "persona").

¡Esperamos ver tus ideas!🎉

## Instrucciones de funcionamiento y precauciones

1. **Confirmar el despliegue**: Después de que Node-RED importe el nodo anterior, haz clic en **Deploy** en la esquina superior derecha para que surta efecto.

2. **Mecanismo de prueba**: Inicia primero Node-RED para asegurarte de que se está ejecutando en segundo plano y luego ejecuta el siguiente comando en el PC para ejecutar el script de Python:

Por favor, sustituye "192.168.31.198" en el código reSpeaker.py por la dirección IP real después de que reCamera Gimbal se conecte a WiFi.

   ```
   python Sound-Tracking/reSpeaker.py
   ```

Hablando al micrófono, deberías poder ver que la terminal de Python imprime constantemente:

   ```
   SPEECH_DETECTED: 1
   ```

Al mismo tiempo, la reCamera girará rápidamente hacia el ángulo físico del sonido.

3. **Calibración de la orientación física**: La orientación '0 de' de la matriz de micrófonos reSpeaker puede no ser exactamente la misma que la '0 de' por defecto de reCamera hacia adelante. Si descubres que el cabezal panorámico siempre se desvía de un ángulo fijo después de girar (por ejemplo, siempre se desvía 90 grados), puedes hacer doble clic directamente en el nuevo nodo de función recién creado 'Calculate & Throttle' en Node-RED, descomentar el código correspondiente y modificar el cálculo del desplazamiento: 'targetYaw = (targetYaw +90)% 360;'.

4. - - Diseño anti-vibración **: Debido a que el código de Python actualiza y envía datos cada 0,1 segundos, si todas estas señales de alta frecuencia se envían al controlador del motor (bus CAN), es fácil que el bus del dispositivo se sobrecargue y se bloquee. Por lo tanto, he escrito la lógica anti-vibración en el nodo de función de Node-RED (el generador solo se activará cuando el ángulo cambie '>5 °' o el intervalo de tiempo sea '>1 second').

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: SenseCraft AI es una plataforma AIoT de no-code/low-code de Seeed Studio que te permite desplegar modelos de IA preentrenados en dispositivos de borde como el reSpeaker XVF3800. Con la palabra de activación "Lumio", esta configuración habilita aplicaciones de IA controladas por voz, sin necesidad de programación compleja.
title: SenseCraft AI con reSpeaker XVF3800
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - Detección de palabras clave
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update: 
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-04'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_sensecraft/
---


## Introducción

SenseCraft AI es la plataforma de IA de no-code/low-code de Seeed Studio que simplifica el despliegue de modelos de inteligencia artificial preentrenados en dispositivos de borde como el reSpeaker XVF3800. Esta guía se centra en configurar el reSpeaker XVF3800 para la detección de palabra de activación utilizando el disparador personalizado "Lumio", lo que permite el control activado por voz para tus proyectos sin escribir código complejo. Con SenseCraft AI, puedes probar, previsualizar e integrar rápidamente eventos de palabra de activación en tus flujos de trabajo de hardware. La plataforma también te permite crear y cargar tus propios modelos personalizados para detectar eventos de sonido específicos y palabras de activación personalizadas, brindándote total flexibilidad para adaptar las interacciones por voz a las necesidades únicas de tu aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Desplegar un modelo existente

### Paso 1: Actualizar el firmware del dispositivo

Antes de desplegar el modelo de palabra de activación, asegúrate de que tu reSpeaker XVF3800 esté ejecutando la versión de firmware correcta.

El archivo de firmware requerido es:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

Sigue el [procedimiento](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware) estándar de DFU (Actualización de Firmware del Dispositivo) de tu dispositivo para flashear este archivo en el reSpeaker XVF3800.


### Paso 2: Navegar a la plataforma SenseCraft AI

Abre tu navegador web y ve a:
> **https://sensecraft.seeed.cc/**

### Paso 3: Acceder a la sección de entrenamiento

Desde el menú de navegación principal:
1. Haz clic en **Products**
2. Selecciona **SenseCraft AI**
3. Elige **Training AI Models**



### Paso 4: Abrir tu espacio de trabajo

1. Navega a tu **Workspace**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. Verifica que el espacio de trabajo esté configurado en **reSpeaker** como el tipo de dispositivo activo
3. Selecciona **reSpeaker** de la lista de dispositivos
4. Haz clic en el botón **Connect** para establecer una conexión con tu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 5: Reemplazar el modelo en ejecución

Una vez conectado, reemplazarás el modelo existente en el dispositivo:

1. Localiza la sección **Model** bajo "Replace the device running model"
2. Haz clic en **Select Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. Elige **Keyword Spotting- Lumos Keyword recognition** de entre las opciones disponibles

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

El modelo que estás desplegando se llama **Lumos**. Es un modelo ligero de reconocimiento de voz diseñado para proporcionar capacidades de interacción por voz eficientes y de baja latencia para dispositivos de borde. Al analizar las características espectrales del audio, el modelo puede detectar con precisión la palabra de activación específica **"Lumos"** incluso en medio de un ruido de fondo ambiental complejo.
:::


### Paso 6: Confirmar el despliegue del modelo

1. Aparecerá un cuadro de diálogo con los detalles del modelo
2. Haz clic en **Confirm** para continuar flasheando el modelo en tu dispositivo
3. Espera un momento mientras el modelo se flashea en el reSpeaker XVF3800

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### Paso 8: Probar la detección de la palabra de activación

Después de un despliegue exitoso, verás:

- **Visualización del espectro de audio**: muestra la entrada de sonido en tiempo real
- **Dos clases de detección**:
  - *Ruido de fondo*
  - *Lumos*

Para probar la palabra de activación:
1. Pronuncia claramente la palabra **"Lumos"** hacia el micrófono del reSpeaker
2. Observa cómo aumenta el nivel de confianza para la clase Lumos
3. Ajusta el **parámetro de umbral** según sea necesario para afinar la sensibilidad de detección

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

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


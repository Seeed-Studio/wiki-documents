---
description: Introducción sobre cómo usar Grove Vision AI V2 para construir una cámara web inteligente.
title: Cámara IP Inteligente Con Función AI
keywords:
  - vision AI
  - intelligent web camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_webcamera
last_update:
  date: 05/09/2024
  author: Allen
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/grove_vision_ai_v2_webcamera/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 puede ser dispositivos de vigilancia avanzados que integran inteligencia artificial para mejorar la seguridad y la eficiencia operacional. Estas cámaras pueden realizar análisis de video en tiempo real para detectar y alertar sobre actividades inusuales, reconocer rostros y monitorear la densidad de multitudes, haciéndolas ideales para aplicaciones en áreas como seguridad pública, gestión de retail y seguridad doméstica inteligente. Al automatizar las tareas de vigilancia, las cámaras IP con AI reducen la necesidad de monitoreo humano constante, permitiendo respuestas más rápidas a amenazas de seguridad potenciales y mejorando la seguridad general.

## Materiales Requeridos

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Kit Grove Vision AI V2</th>
   <th>XIAO ESP32S3 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Subir Modelo de IA a Grove Vision AI V2

Ahora comenzaremos rápidamente con los módulos usando SenseCraft AI, y esto solo requerirá el módulo únicamente.

### Paso 1. Conectar el Grove Vision AI V2 al Asistente de Modelos de IA SenseCraft

Primero, necesitamos abrir la página principal del Asistente de Modelos de IA SenseCraft.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a SenseCraft AI</font></span></strong></a>
</div>

Por favor usa un cable tipo Type-C para conectar el Grove Vision AI V2 a tu computadora.

En la esquina superior derecha de la página del Asistente de Modelos de IA SenseCraft, puedes seleccionar **Grove Vision AI (WE2)**. Luego haz clic en el botón **Connect** en el extremo derecho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

En la nueva ventana que aparece, selecciona el puerto COM correcto para el dispositivo y haz clic en el botón Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Subir un modelo adecuado

Luego, simplemente selecciona un modelo que quieras usar y haz clic en el botón **Send** de abajo. Aquí hay un ejemplo de Detección de Rostros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/1.png" style={{width:1000, height:'auto'}}/></div>

Por favor permanece en esta página por 1-2 minutos hasta que el modelo se suba exitosamente. Ten en cuenta que cambiar a otra pestaña de página durante este proceso puede resultar en una subida fallida (nuestro equipo está trabajando activamente en resolver este problema, y se solucionará pronto).

### Paso 3. Observaciones

Una vez que el modelo se suba exitosamente, podrás ver la transmisión en vivo desde la cámara del Grove Vision AI V2 en la Vista Previa de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/2.png" style={{width:1000, height:'auto'}}/></div>

## Desplegar un Servidor Http Con XIAO ESP32S3 Sense

### Paso 4. Descargar el paquete SSCMA y subirlo al IDE de Arduino

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar SSCMA Zip</font></span></strong></a>
</div>

Descarga el paquete zip desde aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/3.png" style={{width:1000, height:'auto'}}/></div>

Sube este paquete al IDE de Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/4.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Configurar tu wifi 2.4G y subir el programa al ESP32S3 sense

Abre la demo **camera web server**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/13.png" style={{width:1000, height:'auto'}}/></div>

Configura tu ssid y contraseña de wifi 2.4G.(Por favor presta atención al wifi 2.4G, no 5G)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Mi versión del paquete de placa esp32 es 2.0.14. Si encuentras que tu programa tiene algún error extraño, puedes cambiar tu versión a 2.0.14. Es debido a problemas de compatibilidad de versiones.
:::

Abre la función PSRAM del XIAO ESP32S3 sense y sube. Cuando uses la función de audio o video del S3 necesitas activar esto. Otros tipos de XIAO no necesitan hacer eso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/6.png" style={{width:1000, height:'auto'}}/></div>

Cuando funcione exitosamente, verás el resultado como este. Si encuentras algún error, por favor revisa **FAQ** al final de este artículo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/7.png" style={{width:1000, height:'auto'}}/></div>

## Acceder a la Cámara IP Inteligente

### Paso 6. Ver el resultado en el navegador

Primero, necesitas asegurarte de que tu computadora esté en la misma LAN que Grove Vision AI V2. Abre tu navegador e ingresa la dirección IP que obtuviste del paso anterior y haz clic en el botón **Start Stream**. Verás que el modelo de IA se ejecuta exitosamente en tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

## FAQ

### 1. Error de longitud del buffer Uart

Si encuentras un error como este.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/8.png" style={{width:1000, height:'auto'}}/></div>

Primero, necesitas ir al directorio de núcleos esp32, encontrar esp32-hal-uart.c y esp32-hal-uart.h y abrirlos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/9.png" style={{width:1000, height:'auto'}}/></div>

Y luego, necesitas cambiar el tamaño del buffer de la función uartBegin de uint16_t a uint32_t. Guárdalos y sube el programa nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/10.png" style={{width:1000, height:'auto'}}/></div>

### 2. Falló la carga del programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/11.png" style={{width:1000, height:'auto'}}/></div>

Mantén presionado el botón Boot y presiona el botón Reset, luego suelta. Eso reiniciará XIAO y resolverá este problema.

### 3. Sigue apareciendo con puntos

Eso es debido a la conexión de red. ¿Verifica si tu red está disponible? ¿Es 2.4G? Cambia a otra red u otra antena.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

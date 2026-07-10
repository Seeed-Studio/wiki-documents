---
description: recamera_pro_live_view
title: Vista en vivo
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_view
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/recamera_pro_live_view/
---

reCamera Pro tiene una página integrada de monitorización de vídeo en tiempo real, que permite a los usuarios ver transmisiones en vivo de la cámara directamente a través de un navegador. Los usuarios pueden configurar flujos de vídeo, ajustes de visualización, superposiciones OSD, enmascaramiento de privacidad y parámetros de transmisión. Esta página es adecuada para la instalación y depuración del dispositivo, la previsualización de imágenes, el ajuste de parámetros de vídeo y la verificación de funciones antes del despliegue.
reCamera Pro tiene una página integrada de monitorización de vídeo en tiempo real, que permite a los usuarios ver transmisiones en vivo de la cámara directamente a través de un navegador. Los usuarios pueden configurar flujos de vídeo, ajustes de visualización, superposiciones OSD, enmascaramiento de privacidad y parámetros de transmisión. Esta página es adecuada para la instalación y depuración del dispositivo, la previsualización de imágenes, el ajuste de parámetros de vídeo y la verificación de funciones antes del despliegue.
Al entrar en la página de monitorización de vídeo en tiempo real, el lado izquierdo muestra el área de vista previa de vídeo y el lado derecho muestra el área de configuración de funciones. Los usuarios pueden completar la reproducción de vídeo, el cambio de flujo y la configuración de parámetros relacionados en la misma página.

## Vista previa de vídeo

En el lado izquierdo de la página se proporciona una ventana de vista previa de vídeo en tiempo real donde los usuarios pueden elegir reproducir el flujo principal o el subflujo. Al hacer clic en **Start Playback** puedes ver la transmisión actual de la cámara en tu navegador.

En la parte inferior del área de vista previa se ofrecen funciones básicas de control de reproducción, que incluyen:

- Selección de flujo principal / subflujo

- Iniciar reproducción / Detener reproducción

- Ajuste de volumen

- Visualización del estado de conexión actual


Cuando el dispositivo está desconectado, el flujo de vídeo es anómalo o la red no es accesible, la ventana de vista previa mostrará un aviso de fallo de conexión, lo que facilita a los usuarios determinar rápidamente el estado actual del flujo de vídeo.

## Configuración básica

En el área de funciones de la derecha, los usuarios pueden acceder a la página de **Basic Settings** para configurar por separado los parámetros de codificación de vídeo para el flujo principal y el subflujo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

Los parámetros configurables incluyen:

| Parámetro | Descripción |
|---|---|
| Resolución | Establece la resolución de salida de vídeo, por ejemplo, 1920×1080 (1080P) |
| Formato de codificación | Establece el formato de codificación de vídeo, por ejemplo, H.264 |
| Frecuencia de imagen (FPS) | Establece la frecuencia de imagen del vídeo, por ejemplo, 30 FPS |
| GOP | Establece el intervalo de fotogramas clave, utilizado para controlar la frecuencia de generación de fotogramas clave |
| Modo de control de bitrate | Establece el método de control de bitrate, por ejemplo, VBR (bitrate variable) |
| Bitrate máximo | Establece el bitrate máximo para el flujo de vídeo, en Kbps |
| Calidad de bitrate | Establece el nivel de calidad de la codificación de vídeo |

Los usuarios pueden elegir configurar el flujo principal o el subflujo según sus escenarios de aplicación reales. El flujo principal es adecuado para vista previa en alta definición, almacenamiento de vídeo y análisis de IA; el subflujo es adecuado para vista previa en entornos de bajo ancho de banda, visualización remota o escenarios de acceso a vídeo multicanal.

Después de realizar modificaciones, haz clic en **Save Video Settings** para aplicar la configuración actual. Para restaurar o volver a introducir parámetros, haz clic en **Reset**.

La página también proporciona interruptores relacionados con el audio, incluidos **Audio Settings** y **Audio Storage Settings**, lo que permite a los usuarios habilitar o deshabilitar las funciones de captura y almacenamiento de audio según sea necesario.

## Configuración de visualización

La página de **Display Settings** se utiliza para ajustar los efectos de visualización de la cámara y los parámetros básicos de imagen.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

Los ajustes de visualización compatibles incluyen:

| Parámetro | Descripción |
|---|---|
| Volteo | Establece si la imagen se voltea, lo que puede utilizarse para adaptarse a diferentes orientaciones de instalación |
| Rotación | Establece el ángulo de rotación de la imagen, por ejemplo, 0° |
| Estándar de vídeo | Establece el estándar de vídeo, por ejemplo, PAL (50HZ) |

Además, esta página admite configuraciones de conmutación de parámetros día/noche, que incluyen:

| Parámetro | Descripción |
|---|---|
| Modo de conmutación | Establece el método de conmutación de modo día/noche, por ejemplo, conmutación automática |
| Sensibilidad del umbral de conmutación | Establece la sensibilidad para activar la conmutación día/noche |
| Tiempo de histéresis de conmutación | Establece el tiempo de retardo para la conmutación de modo día/noche para evitar cambios frecuentes |

En el área de ajuste básico de imagen, los usuarios pueden seleccionar diferentes perfiles y ajustar parámetros de imagen de la cámara como:

- Brillo

- Contraste

- Saturación

- Nitidez

- Tono

- Modo de exposición

- Modo de ganancia


Estos parámetros pueden utilizarse para optimizar los efectos de imagen en función del entorno de iluminación in situ, como interiores, exteriores, condiciones de poca luz o luz intensa.

Después de realizar modificaciones, haz clic en **Save Display Settings** o **Save Configuration** para aplicar la configuración actual.

## Configuración de OSD

La **OSD Settings** se utiliza para configurar la información superpuesta en la transmisión de vídeo, como el nombre del canal, la fecha y la hora, y el número de serie del dispositivo. Esta función es aplicable a escenarios de videovigilancia, reproducción de vídeo e identificación de dispositivos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

Las configuraciones OSD compatibles incluyen:

| Elemento de configuración | Descripción |
|---|---|
| Tamaño de fuente | Establece el tamaño del texto OSD |
| Color de fuente | Establece el color del texto OSD |
| Modo de color | Establece el modo de color OSD, con una opción para colores personalizados |
| Superposición de nombre de canal | Habilita la visualización del nombre del canal en la pantalla cuando está activado |
| Nombre de canal | Nombre de canal personalizado para mostrar, por ejemplo, Camera 01 |
| Coordenadas del nombre de canal | Establece la posición de visualización del nombre del canal en la pantalla |
| Superposición de fecha y hora | Habilita la visualización de la fecha y la hora en la pantalla cuando está activado |
| Formato de fecha | Establece el formato de visualización de la fecha |
| Formato de hora | Establece el formato de visualización de la hora, por ejemplo, formato de 24 horas |
| Mostrar día de la semana | Controla si se muestra la información del día de la semana |
| Coordenadas de fecha y hora | Establece la posición de visualización de la fecha y la hora en la pantalla |
| Superposición de número de serie | Controla si se muestra el número de serie del dispositivo en la pantalla |

Las coordenadas OSD se configuran utilizando posiciones relativas, lo que permite a los usuarios colocar el texto en ubicaciones adecuadas según el diseño de la pantalla. También puedes arrastrar directamente el texto a tu posición preferida.

Después de la configuración, haz clic en **Save Settings** para aplicar los parámetros OSD.

## Enmascaramiento de imagen

La función de **Image Masking** se utiliza para configurar áreas de enmascaramiento de privacidad. Los usuarios pueden habilitar el enmascaramiento de privacidad para oscurecer áreas sensibles en la transmisión de vídeo, evitando que la información privada se exponga en vistas previas en tiempo real, grabaciones o flujos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

Puedes añadir manualmente y dibujar automáticamente máscaras. Después de añadirlas, al guardar la configuración se mostrará inmediatamente el efecto.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

Esta función es aplicable en los siguientes escenarios:

- Enmascarar información sensible en áreas de oficina

- Enmascarar áreas privadas como residencias, números de puerta y pantallas

- Satisfacer necesidades específicas de protección de privacidad de vídeo en diversos escenarios


## Configuración de transmisión

La página de **Streaming Settings** se utiliza para configurar los métodos de salida del flujo de vídeo, facilitando la integración de reCamera Pro con plataformas de terceros, NVR, sistemas de gestión de vídeo o aplicaciones personalizadas.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

Los elementos de configuración compatibles incluyen:

| Parámetro | Descripción |
| --------- | ----------------- |
| Interruptor de configuración de flujo | Habilita o deshabilita la función de transmisión para el flujo actual |
| Flujo principal / subflujo | Selecciona el flujo a configurar |
| Protocolo de transmisión | Establece el protocolo de transmisión, por ejemplo, RTSP |
| Tipo de autenticación | Establece el método de autenticación para el acceso al flujo de vídeo, por ejemplo, sin autenticación |
| Aplicar configuración | Guarda y aplica la configuración de transmisión actual |

Los usuarios pueden configurar por separado los parámetros de transmisión para el flujo principal o el subflujo según sus necesidades reales de despliegue. Después de la configuración, los clientes o plataformas de terceros pueden acceder a la transmisión de vídeo de reCamera Pro a través de la dirección de flujo correspondiente.

## Resultados de IA

La página también proporciona una entrada de **AI Results** para ver o configurar cómo se muestran los resultados de inferencia de IA. Esta función puede utilizarse en escenarios de aplicaciones de IA en el borde, como detección de objetos y reconocimiento de clasificación, lo que permite a los usuarios observar los resultados de salida del modelo en imágenes en tiempo real.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4t447lMV5W.png" />

## Casos de uso típicos

La página de monitorización de vídeo en tiempo real es adecuada para los siguientes escenarios:

- Confirmar las imágenes en tiempo real después de la instalación de la cámara

- Configurar los parámetros del flujo principal y del subflujo

- Ajustar la resolución de vídeo, la frecuencia de imagen, el bitrate y el formato de codificación

- Depurar los modos día/noche y los parámetros de imagen

- Superponer hora OSD, nombres de canal e información del dispositivo

- Configurar áreas de enmascaramiento de privacidad

- Acceder a plataformas de terceros o NVR a través de transmisión RTSP

- Verificar la visualización de resultados de inferencia de IA


A través de la página de monitorización de vídeo en tiempo real, los usuarios pueden completar la vista previa de vídeo, la depuración de imagen, la configuración de flujos y los ajustes de transmisión para reCamera Pro sin instalar clientes adicionales, lo que mejora significativamente la eficiencia de despliegue y depuración del dispositivo.

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

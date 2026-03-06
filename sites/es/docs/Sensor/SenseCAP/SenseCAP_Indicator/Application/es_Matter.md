---
description: SenseCAP Indicator - Desarrollo de Aplicaciones Matter
title: Matter - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Matter
  - ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 8/28/2023
  author: Tim
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/SenseCAP_Indicator_Application_Matter/
---

# SenseCAP Indicator - Desarrollo de Aplicaciones Matter

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Introducción

Esta es una demostración de cómo usar el [SDK de Matter](https://project-chip.github.io/connectedhomeip-doc/index.html) para construir aplicaciones enriquecidas para tu SenseCAP Indicator.

El SenseCAP Indicator tiene una pantalla táctil que lo hace capaz de actuar como una poderosa interfaz de automatización del hogar. Matter hace el proceso más fácil que nunca ya que elimina muchos de los aspectos complicados de la configuración. Con la ayuda del SDK de Matter uno puede rápidamente escanear un código QR y configurar su dispositivo en su red doméstica.

Para este artículo repasaremos los pasos involucrados para poner tu dispositivo en funcionamiento con la demostración.

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El SDK de Matter proporciona un conjunto estándar de dispositivos y permite el acceso a sus datos y la carga de su estado al controlador. ESP-Matter fue desarrollado por Espressif como un marco de desarrollo oficial de Matter para los SoCs de la serie ESP32.

Para que tu SenseCAP Indicator funcione con Matter, necesitas seguir algunos pasos principales:

1. [Instalar esp-idf y esp-matter](#install_sdks)
2. [Configurar tu entorno y compilar](#configure_and_build)
3. [Usar la aplicación](#using_application)
4. [Configurar más la interfaz de usuario de Home Assistant](#going_beyond)

## Prerrequisitos

Antes de comenzar, asegúrate de haber leído la [Guía del Usuario](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) de la Placa SenseCAP Indicator para familiarizarte con su información de software y hardware.

## Instalar ESP IDF y ESP Matter {#install_sdks}

Querrás seguir las [instrucciones proporcionadas por la documentación del SDK ESP-Matter](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories) e instalar la versión 5.0.1 de ESP-IDF y la versión de lanzamiento 1.1 de ESP-Matter.

Después de que esas versiones hayan sido instaladas, por favor instala el parche proporcionado por Seeed Studio [aplicar el parche proporcionado](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch).

## Configurar tu entorno y compilar {#configure_and_build}

### Usar la CLI para configurar y compilar

```sh
~/esp/esp-idf/install.sh
~/.espressif/esp-matter/install.sh

. ~/esp/esp-idf/export.sh
. ~/.espressif/esp-matter/export.sh

cd examples/indicator_matter
idf.py set-target esp32s3
idf.py fullclean
idf.py erase-flash
idf.py build flash monitor
```

## Usando la aplicación {#using_application}

Una vez que el firmware ha sido flasheado, la pantalla comienza con solo el código QR. Abre la aplicación móvil de tu automatización del hogar e ingresa al flujo de aprovisionamiento del dispositivo (varía dependiendo del fabricante).

En el siguiente ejemplo puedes ver mi uso de la aplicación móvil de Home Assistant para conectarme a mi Home Assistant Yellow ejecutando el servicio Beta de Matter. 

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

Al escanear el dispositivo, mi teléfono inmediatamente comienza el proceso de aprovisionamiento. El proceso de aprovisionamiento maneja de forma segura el paso de tus credenciales al dispositivo permitiéndole conectarse al dispositivo controlador de automatización del hogar a través de wifi. De esta manera nunca necesitas escribir las credenciales de wifi en ningún lugar.

Después del aprovisionamiento, el dispositivo comenzará a reportar su temperatura y humedad al controlador de home assistant en intervalos de 10 segundos.

### Funcionalidad estándar

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

La aplicación Matter del Indicator permite navegar los datos del sensor de manera similar al firmware estándar. Al cargar, el dispositivo muestra la pantalla del reloj que está configurada basándose en tu ubicación para darte una hora precisa. La pantalla tiene eventos para detectar deslizamientos hacia la derecha e izquierda para alternar entre el tiempo, la visualización del sensor y la pantalla de configuración.


<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-2.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-3.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-4.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-5.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Hacer clic en un sensor muestra información adicional sobre el estado de ese sensor y el historial se puede ver de esta manera.

La pantalla de configuración permite configurar varios elementos de la función del dispositivo. Se puede configurar un reloj de 12 o 24 horas, la zona horaria es anulable, y el brillo de la pantalla es ajustable.

### Panel de Control de Matter Home Assistant

Para acceder al Panel de Control de Matter Home Assistant desliza hacia abajo desde la pantalla principal del reloj. Este panel tiene múltiples componentes diferentes que están asociados con dispositivos de demostración en el lado de Matter. Durante el proceso de aprovisionamiento estos dispositivos tienen endpoints creados que pueden ser utilizados para acceder a características comunes como atenuar una luz o apagarla completamente.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

En el caso de esta demostración se configuraron dos luces atenuables junto con una cerradura de puerta. Puedes ver que al hacer clic en los botones el lado de home assistant también se actualiza para reflejar estos cambios. Los deslizadores se pueden mover para establecer el brillo de la luz.

Desde el lado de home assistant los dispositivos pueden ser habilitados y deshabilitados o modificados según sea necesario y el SenseCAP Indicator también se actualiza para reflejarlo. De esta manera puedes tener automatizaciones adicionales que deshabiliten o habiliten funcionalidad en tu dispositivo Indicator y hacer que la pantalla refleje su estado en tiempo real.

El panel virtual y las capacidades de automatización del controlador doméstico en uso permiten varias combinaciones interesantes. Con el SenseCAP Indicator puedes construir paneles de tu propia imaginación para controlar dispositivos a través de tu entorno doméstico.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## Configurando la UI de Home Assistant más a fondo {#going_beyond}

La UI en sí está construida usando [LVGL](https://lvgl.io/). Para información más detallada sobre configurar LVGL consulta el [siguiente artículo](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display/).

La UI para el panel está compuesta de componentes LGVL con eventos configurados para callbacks de tal manera que sus datos se persisten tanto al almacenamiento local como al endpoint de matter. El controlador de panel virtual (`indicator_virtual_dashboard_controller.c`) maneja la actualización del formulario y publica eventos asociados para otros consumidores cuando los datos subyacentes son cambiados.

Para el ejemplo inicial se han configurado tres dispositivos y la lógica subyacente en el modelo matter maneja responder a eventos desde la vista y persistir los datos a los endpoints de matter o actualizar el estado de la UI.

En general las siguientes consideraciones deben hacerse al actualizar la UI y persistir a Matter:
- Durante el proceso de inicialización el método `indicator_matter_setup()` del modelo `indicator_matter.cpp` configura cualquier dispositivo asociado para uso con Matter. Además se configura un callback para eventos de vista de tal manera que los endpoints de matter se actualizan al cambiar.
- El modelo `indicator_virtual_dashboard.c` escucha eventos de vista asociados con el panel virtual y persiste los datos al almacenamiento para recuperación en la inicialización.
- La lógica matter se suscribe a los eventos alrededor de datos matter modificados (ya sea remotamente o localmente)
- El controlador de panel virtual maneja actualizar el estado del formulario según sea necesario en respuesta a eventos enviados vía los callbacks de Matter de `indicator_matter.cpp` en cambios desde el controlador de Matter.

## Recursos

1. **SDK de Demostración**: El SDK de Demostración para el SenseCAP Indicator está disponible en [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **Guía del Usuario**: La Guía del Usuario proporciona información detallada sobre el software y hardware de la Placa SenseCAP Indicator. Puedes leerla [aquí](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
3. **Guía de Introducción para ESP-IDF**: Esta guía proporciona pasos completos para configurar y usar ESP-IDF para construir proyectos. Puedes acceder a ella [aquí](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
4. **Guía de Instalación de Matter**: Si eres nuevo en ESP-Matter, esta guía te ayudará a instalarlo y configurarlo. Puedes encontrarla [aquí](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html).


## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

Si encuentras algún problema o tienes alguna pregunta mientras sigues este tutorial, no dudes en contactar a nuestro soporte técnico. ¡Siempre estamos aquí para ayudar!

Visita nuestro [Canal Oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) para hacer tus preguntas o las [discusiones de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir todo lo que quieras!

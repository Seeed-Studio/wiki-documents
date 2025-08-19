---
description: SenseCAP Indicator - Matter Application Development
title: Matter - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Matter
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 07/22/2025
  author: Guillermo
---

# SenseCAP Indicator - Desarrollo de Aplicaciones Matter

<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Introducción

Esta es una demostración de cómo usar el [SDK de Matter](https://project-chip.github.io/connectedhomeip-doc/index.html) para crear aplicaciones avanzadas para tu SenseCAP Indicator.

El SenseCAP Indicator tiene pantalla táctil, lo que lo convierte en una potente interfaz de automatización del hogar. Matter facilita enormemente el proceso al eliminar gran parte de la complejidad de la configuración. Con la ayuda del SDK de Matter, puedes escanear un código QR y configurar tu dispositivo en tu red doméstica en un instante.

En este artículo repasaremos los pasos necesarios para poner en marcha tu dispositivo con la demo.

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El SDK de Matter proporciona un conjunto estándar de dispositivos y permite acceder a sus datos y reportar su estado al controlador. ESP-Matter fue desarrollado por Espressif como framework oficial de Matter para SoCs ESP32.

Para que tu SenseCAP Indicator funcione con Matter, debes seguir estos pasos principales:

1. [Instalar esp-idf y esp-matter](#install_sdks)  
2. [Configurar el entorno y compilar](#configure_and_build)  
3. [Usar la aplicación](#using_application)  
4. [Configurar más la UI de Home Assistant](#going_beyond)  

## Requisitos Previos

Antes de comenzar, asegúrate de haber leído la [Guía del Usuario](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) del SenseCAP Indicator para familiarizarte con su software y hardware.

## Instalar ESP IDF y ESP Matter {#install_sdks}

Sigue las [instrucciones del SDK ESP-Matter](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories) e instala ESP-IDF v5.0.1 y ESP-Matter v1.1.  
Luego aplica el parche proporcionado por Seeed Studio: [patch de Seeed](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch).

## Configurar el entorno y compilar {#configure_and_build}

### Usando la CLI para configurar y compilar

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

## Usar la aplicación {#using_application}

Una vez que el firmware ha sido flasheado, la pantalla mostrará únicamente un código QR. Abre la aplicación de tu sistema de automatización del hogar en tu teléfono y entra en el flujo de aprovisionamiento del dispositivo (puede variar según el fabricante).

En el siguiente ejemplo se muestra el uso de la aplicación móvil de Home Assistant para conectarse a un Home Assistant Yellow que ejecuta el servicio beta de Matter.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

Al escanear el código QR, el teléfono inicia inmediatamente el proceso de aprovisionamiento. Este proceso transfiere de manera segura las credenciales al dispositivo, permitiéndole conectarse por Wi-Fi al controlador de automatización del hogar. Así, nunca tendrás que escribir las credenciales manualmente.

Después del aprovisionamiento, el dispositivo comenzará a reportar temperatura y humedad al controlador de Home Assistant cada 10 segundos.

### Funcionalidad estándar

<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

La aplicación Matter del Indicator permite explorar los datos de sensores de forma similar al firmware estándar. Al iniciarse, el dispositivo muestra una pantalla de reloj, la cual se configura automáticamente según tu ubicación para mostrar la hora exacta. Puedes deslizar a la izquierda y derecha para alternar entre la pantalla de reloj, la de sensores y la de configuración.

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

Al pulsar sobre un sensor puedes ver más información sobre su estado, así como el historial de datos.

La pantalla de configuración permite ajustar varios aspectos del dispositivo: cambiar entre reloj de 12 o 24 horas, modificar la zona horaria, y ajustar el brillo de la pantalla.

### Panel Matter en Home Assistant

Para acceder al panel Matter en Home Assistant, desliza hacia abajo desde la pantalla principal del reloj. Este panel contiene varios componentes asociados a dispositivos de demostración Matter. Durante el aprovisionamiento se crean endpoints para acceder a funciones como atenuar una luz o apagarla.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

En este ejemplo de demo, se configuraron dos luces regulables y una cerradura. Al pulsar los botones, Home Assistant también actualiza su estado. Los sliders permiten modificar el nivel de brillo de las luces.

Desde la interfaz de Home Assistant también es posible habilitar, deshabilitar o modificar los dispositivos. El SenseCAP Indicator se actualizará en tiempo real para reflejar esos cambios. Esto permite automatizaciones adicionales que controlen el dispositivo y actualicen su pantalla de acuerdo con el estado del entorno.

El panel de control virtual y las capacidades de automatización del controlador de hogar permiten crear combinaciones interesantes. Con el SenseCAP Indicator puedes diseñar tus propios tableros de control para administrar dispositivos en tu hogar.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## Configurar más la interfaz en Home Assistant {#going_beyond}

La interfaz de usuario está construida con [LVGL](https://lvgl.io/). Para más información sobre cómo configurar LVGL, consulta [este artículo](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/).

La UI del dashboard está compuesta por componentes LVGL con eventos vinculados a callbacks, lo cual permite que los datos se almacenen tanto localmente como en el endpoint de Matter. El controlador del dashboard virtual (`indicator_virtual_dashboard_controller.c`) se encarga de actualizar la vista y enviar eventos para otros módulos cuando cambian los datos.

En el ejemplo inicial, se configuran tres dispositivos. La lógica del modelo Matter responde a los eventos provenientes de la vista y guarda los datos en los endpoints Matter, además de actualizar el estado de la UI.

Aspectos clave al modificar la UI y sincronizar con Matter:

- Durante la inicialización, el método `indicator_matter_setup()` en `indicator_matter.cpp` configura los dispositivos asociados y registra los callbacks para eventos de la vista.
- El modelo `indicator_virtual_dashboard.c` escucha los eventos del dashboard virtual y guarda los datos para su recuperación posterior.
- La lógica Matter se suscribe a los eventos de modificación de datos (tanto remotos como locales).
- El controlador del dashboard virtual actualiza el estado de los formularios según los eventos enviados desde `indicator_matter.cpp` en respuesta a acciones del controlador Matter.

## Recursos

1. **Demo SDK**: El SDK de demostración para el SenseCAP Indicator está disponible en [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **Guía del Usuario**: Información detallada sobre el software y hardware del SenseCAP Indicator en [esta guía](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
3. **Guía de inicio de ESP-IDF**: Accede a la [guía oficial](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) para configurar ESP-IDF y compilar tus proyectos.
4. **Guía de instalación de Matter**: Si eres nuevo en ESP-Matter, revisa [esta guía](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html) para instalar y empezar.

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos para ayudarte!**

Si encuentras algún problema o tienes preguntas sobre este tutorial, no dudes en contactarnos.

Visita nuestro [canal oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) o únete a las [discusiones en GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir tus dudas o ideas.

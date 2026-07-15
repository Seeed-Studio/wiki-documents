---
description: Configuración de balena OS para EdgeBox RPi 200
title: Configuración de balena OS para EdgeBox RPi 200
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 07/20/2023
  author: Marc Pous & Peter Pan
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/Edgebox-rpi-200-balena-OS-setup/
---

## ¿Qué es balena?

balena es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a construir, desplegar y gestionar aplicaciones IoT a través de una flota de dispositivos. Soporta una amplia gama de arquitecturas de dispositivos e incluye características para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y HostOS, corregir errores e introducir nuevas características en tus aplicaciones IoT. balena proporciona una forma unificada de enviar actualizaciones de código, gestionar configuraciones de dispositivos y asegurar que los dispositivos funcionen de manera confiable y segura en el campo, independientemente de su ubicación o condiciones de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOS es el componente clave del ecosistema balena. balenaOS es un sistema operativo basado en Linux de código abierto, creado por balena, que está específicamente construido para ejecutar aplicaciones en contenedores en dispositivos embebidos a través de balenaEngine, un motor de contenedores ligero optimizado para dispositivos IoT. Está optimizado para confiabilidad, robustez y seguridad, factores cruciales para entornos IoT y de computación en el borde. Construido sobre el proyecto Yocto, balenaOS soporta más de 100 plataformas de hardware diferentes e incluye características integradas como actualizaciones del sistema operativo host y una API de supervisor para controlar aplicaciones. Al aprovechar los contenedores Docker, balenaOS asegura la portabilidad de aplicaciones y simplifica el proceso de desarrollo.

balenaCloud proporciona un panel central para gestionar tu flota de dispositivos IoT. Simplifica la gestión de dispositivos con funcionalidad para actualizaciones remotas, monitoreo de dispositivos y aplicaciones, resolución de problemas y acceso seguro a dispositivos. Con balenaCloud, puedes monitorear fácilmente cómo desplegar aplicaciones a un dispositivo o miles de dispositivos con un solo git push, balena CLI push o a través de integración continua y despliegue continuo integrados de tu elección. balena es una solución IoT escalable y robusta para cualquiera que busque gestionar eficientemente una flota de dispositivos IoT, el software y el sistema operativo host que se ejecuta en ellos.

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

La serie EdgeBox-RPI-200 son controladores de computación en el borde industriales todo-en-uno basados en Raspberry Pi, combinando múltiples propósitos industriales. Diseñados como hardware industrial robusto y de alta escalabilidad, montados con recursos IO ricos y respaldados por el gran ecosistema de software industrial de Raspberry Pi, es una opción ideal para automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Prerrequisitos

En este documento aprenderás cómo flashear balenaOS al Seeed Studio EdgeBox-RPI-200 para reducir la fricción al actualizar el software y el sistema operativo host que se ejecuta en tu flota de EdgeBox-RPI-200s.

### Hardware

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 
* [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) utilizada para flashear el SO en el CM4 del EdgeBox-RPI-200.
* Fuente de alimentación de riel DIN 24V (DC), en este caso se utiliza `Mean Well HDR-100-24 AC-DC`.
* Cables para conectar la fuente de alimentación con el EdgeBox-RPI-200.

### Software

* Una cuenta de [balenaCloud](https://balena.io) (regístrate aquí) y obtén los primeros 10 dispositivos gratis.
* [balenaEtcher](https://etcher.balena.io/) para flashear la memoria del CM4.


## Flashear balenaOS en el EdgeBox RPI200

Para flashear balenaOS en el EdgeBox-RPI-200 necesitarás desarmar el dispositivo y obtener el Raspberry Pi Compute Module 4.

**PASO 1:** Coloca el CM4 del EdgeBox-RPI-200 en la [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html). Por favor sigue [la página wiki](/es/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode) sobre cómo poner el almacenamiento eMMC del CM4 en modo de almacenamiento masivo USB con la [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**PASO 2:** ve a balenaCloud, crea una cuenta gratuita y crea una flota para tipos de dispositivo `Raspberry Pi 4` o `CM4`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>


**PASO 3:** Haz clic en `Add Device` y descarga la imagen de balenaOS con tus credenciales de red.

:::note
Recuerda que el EdgeBox RPI200 sin una antena WiFi no podrá conectarse a tu red WiFi.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**PASO 4**: Usando [balenaEtcher](https://etcher.balena.io/), flashea el CM4 con la imagen de balenaOS descargada de balenaCloud.

**PASO 5**: Una vez completado exitosamente, coloca el CM4 de vuelta en el EdgeBox-RPI-200 y enciéndelo con el adaptador de alimentación de riel DIN. El dispositivo podría aparecer en el panel de balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Configurar el Conector Phoenix GPIO

Para acceder al Conector Phoenix GPIO del EdgeBox-RPI-200 es necesario actualizar los parámetros del Device Tree de la imagen balenaOS predeterminada.

Para acceder al Conector Phoenix GPIO a través de `/dev/ttyACM0` o `/dev/ttyACM1` ve a `Device Configuration` y cambia los DToverlays

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

El device tree está definido en Define DT overlays como `"dwc2","dr_mode=host","w1-gpio"`. En Define DT parameters for the default overlay. Agregué el parámetro "enable_serial=1".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

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

---
description: Configuración de balena OS en EdgeBox RPi 200
title: EdgeBox RPi 200 balena OS Setup
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 02/13/2025
  author: Erick González
---

## ¿Qué es balena?

balena es una plataforma para Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a crear, desplegar y gestionar aplicaciones de IoT en una flota de dispositivos. Admite una amplia variedad de arquitecturas de dispositivos e incluye funciones para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y el HostOS, corregir errores e introducir nuevas características en tus aplicaciones. balena ofrece una forma unificada de enviar actualizaciones de código, administrar configuraciones de dispositivos y garantizar un funcionamiento confiable y seguro en campo, independientemente de su ubicación o condiciones de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

**balenaOS** es el componente clave del ecosistema balena. Se trata de un sistema operativo de código abierto basado en Linux, creado por balena y diseñado específicamente para ejecutar aplicaciones en contenedores en dispositivos embebidos mediante balenaEngine, un motor de contenedores ligero optimizado para dispositivos IoT. Está optimizado para la confiabilidad, robustez y seguridad, factores cruciales en entornos IoT y de computación en el borde. Construido sobre el proyecto Yocto, balenaOS soporta más de 100 plataformas de hardware diferentes e incluye características integradas como actualizaciones del sistema operativo host y una API de supervisor para controlar aplicaciones. Al usar contenedores Docker, balenaOS garantiza portabilidad de aplicaciones y simplifica el proceso de desarrollo.

**balenaCloud** ofrece un panel de control central para gestionar tu flota de dispositivos IoT. Simplifica la administración de dispositivos con funcionalidades para actualizaciones remotas, monitoreo de dispositivos y aplicaciones, solución de problemas y acceso seguro a los dispositivos. Con balenaCloud, puedes desplegar aplicaciones en un dispositivo o en miles de ellos con un simple git push, balena CLI push o usando cualquier integración continua que elijas. balena es una solución escalable y robusta para quienes deseen gestionar eficazmente una flota de dispositivos IoT, así como el software y host OS que ejecutan.

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg"/></div>

La serie EdgeBox-RPI-200 son controladores de computación perimetral industrial todo en uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial de alta escalabilidad y robustez, montados con ricos recursos de E/S y respaldados por el sólido ecosistema de software industrial de Raspberry Pi, son una elección ideal para soluciones de automatización inteligente e Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>

## Prerrequisitos

En este documento aprenderás a flashear balenaOS en el Seeed Studio EdgeBox-RPI-200 para simplificar el proceso de actualización del software y del host OS que se ejecutan en tu flota de EdgeBox-RPI-200.

### Hardware

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 
* [Carrier Board Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) para flashear el OS en la CM4 del EdgeBox-RPI-200.
* Fuente de alimentación DIN rail 24V (DC). En este caso se usa `Mean Well HDR-100-24 AC-DC`.
* Cables para conectar la fuente de alimentación con el EdgeBox-RPI-200.

### Software

* Una cuenta de [balenaCloud](https://balena.io) (regístrate aquí) que ofrece los primeros 10 dispositivos gratis.
* [balenaEtcher](https://etcher.balena.io/) para flashear la memoria de la CM4.


## Flashear balenaOS en la EdgeBox RPI200

Para flashear balenaOS en la EdgeBox-RPI-200 necesitas desarmar el dispositivo y extraer el Raspberry Pi Compute Module 4.

**PASO 1:** Retira la CM4 del EdgeBox-RPI-200 y colócala en la [Carrier Board Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html). Sigue [esta wiki](/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode) para saber cómo poner la eMMC en modo USB mass storage con la [Carrier Board Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="600" height="auto" /></p>

**PASO 2:** Accede a balenaCloud, crea una cuenta gratuita y crea una flota para dispositivos tipo `Raspberry Pi 4` o `CM4`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>

**PASO 3:** Haz clic en `Add Device` y descarga la imagen de balenaOS con tus credenciales de red.

:::note
Recuerda que si el EdgeBox RPI200 no tiene antena WiFi, no podrá conectarse a tu red WiFi.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**PASO 4**: Usa [balenaEtcher](https://etcher.balena.io/) para flashear la CM4 con la imagen de balenaOS descargada desde balenaCloud.

**PASO 5**: Una vez terminado, coloca de nuevo la CM4 en el EdgeBox-RPI-200 y enciéndelo con la fuente de alimentación DIN rail. El dispositivo podría aparecer en el panel de balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Configurar el conector Phoenix GPIO

Para acceder al GPIO del conector Phoenix del EdgeBox-RPI-200 es necesario actualizar los parámetros Device Tree de la imagen por defecto de balenaOS.

Para acceder al GPIO del conector Phoenix a través de `/dev/ttyACM0` o `/dev/ttyACM1`, ve a **Device Configuration** y modifica los DToverlays.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

El árbol de dispositivo (device tree) se define en **Define DT overlays** como `"dwc2","dr_mode=host","w1-gpio"`. En **Define DT parameters** para la superposición por defecto, agregué el parámetro `enable_serial=1`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

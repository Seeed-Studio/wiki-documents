---
description: Construir un dispositivo DAPLink usando Seeed Studio XIAO SAMD21
title: Construir un dispositivo DAPLink usando Seeed Studio XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-DAPLink
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO SAMD 21 DAPLink

Ahora, hemos **desarrollado el firmware DAPLink que funciona en tus placas Arduino** (*Serie SAMD*) como [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) para que puedas cargar y depurar placas de desarrollo que soporten DAPLink de la manera más rentable.

## Características

- Depurar y flashear CPUs Arm Cortex
- Proporciona un puerto serie virtual, eliminando la necesidad de un convertidor USB a puerto serie
- Arrastrar y soltar para cargar firmware (próximamente)

## Comenzar

Por favor visita el Wiki de Introducción a Arduino DAPLink aquí.

### Método `uf2`

Por conveniencia, también proporcionamos métodos `uf2` para cargar el firmware de Wio Terminal. Simplemente descarga los archivos `uf2` desde abajo.

- Descarga los archivos `uf2` de [**simple_daplink_xiao**](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2).

Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, por favor consulta también [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).

Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 descargados a la unidad `Arduino`.

### Pinout de conexión

Puedes usar lo siguiente como referencia:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" /></div>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
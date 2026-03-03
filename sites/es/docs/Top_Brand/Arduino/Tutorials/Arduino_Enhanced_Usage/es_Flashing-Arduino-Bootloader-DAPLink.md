---
description: Flashear el Bootloader de Arduino usando DAP Link
title: Flashear el Bootloader de Arduino usando DAP Link
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Flashing-Arduino-Bootloader-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Flashear el Bootloader de Arduino usando DAP Link

Este es el Tutorial Wiki de cómo usar DAP link (OpenOCD) para flashear el Bootloader de Arduino en Placas Arduino. Si el bootloader de tu Placa Arduino está interrumpido, puedes usar esta guía para re-flashear el bootloader de vuelta.

## Preparaciones

1. Primero que nada, debes seguir el [**Cómo usar Placas Arduino como Dispositivo DAPLink**](https://wiki.seeedstudio.com/es/Arduino-DAPLink/) primero para convertir una de tus placas SAMD en Dispositivo DAP-Link. Una vez que hayas configurado y **subido el programa Arduino ino de daplink**, puedes volver a este tutorial wiki.

2. Conecta el Hardware Objetivo con el Dispositivo DAP Link (Placa SAMD) según las configuraciones de pines.

     - SWO > SWO
     - CLK > CLK
     - GND > GND

Puede verse algo así donde el Seeeduino XIAO es el dispositivo DAP Link y Seeeduino Cortex M0+ es el Objetivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/examples.png"/></div>

## Comenzar

En este ejemplo, Seeeduino XIAO actúa como un dispositivo DAPLink y se usa para flashear el Bootloader de Arduino para Seeeduino Lotus Cortex M0+.

- Navega a la **ubicación raíz de la Ruta de Biblioteca de Placa Arduino** en Terminal y encuentra la ruta OpenOCD dentro de la ruta. Puede verse algo así:

```sh
cd ~/Library/Arduino15/packages/arduino/tools/openocd/
cd 0.10.0-arduino7/bin # La versión puede variar aquí
```

- Ejecuta el OpenOCD con scripts específicos:

**Nota:** Puede que necesites cambiar `ansonhe` por tu nombre de usuario o ajustar a tu ruta correcta.

```sh
./openocd -s ../share/openocd/scripts/ -f /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/variants/arduino_zero/openocd_scripts/arduino_zero.cfg
```

Si todo va bien, deberías ver algo como esto a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/server.png"/></div>

¡Ahora el servidor está funcionando!

- Deja la terminal anterior y abre una nueva terminal. También navega a la ubicación raíz de la ruta de Placa Arduino. Luego navega a la ruta arm-gcc:

```sh
cd ~/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

- Bajo esta ruta, puedes ejecutar lo siguiente:

```sh
./arm-none-eabi-gdb
```

- Una vez dentro del gdb, conecta con el objetivo usando:

```sh
target remote localhost:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/target.png"/></div>

- Carga el Bootloader de Arduino desde la ruta raíz de la biblioteca de Placa Arduino:

> También puedes encontrar el bootloader para placas Seeed SAMD aquí: [https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders)

**Nota:** Puede que necesites cambiar `ansonhe` por tu nombre de usuario o ajustar a tu ruta correcta.

```sh
file /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/bootloaders/zero/samd21_sam_ba.elf
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/file.png"/></div>

- Flashea el bootloader al objetivo:

```sh
load
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/load.png"/></div>

- Reinicia el dispositivo objetivo presionando los botones de reset y deberías ver que apareció COM. ¡Ahora el Bootloader de Arduino está flasheado al Seeeduino Lotus Cortex M0+ usando Seeeduino XIAO como Dispositivo DAPLink!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/ports.png"/></div>

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
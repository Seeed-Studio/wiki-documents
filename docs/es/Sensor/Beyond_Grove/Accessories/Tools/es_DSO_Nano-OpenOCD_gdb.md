---
title: DSO Nano/OpenOCD gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Nano-OpenOCD_gdb/
slug: /es/DSO_Nano-OpenOCD_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
---

#   Depuración con OpenOCD y gdb

Por favor usa openocd 4.0 o más reciente.

Este ejemplo asume que tienes un adaptador JTAG compatible con Segger J-Link entre tu computadora y el dispositivo (o placa de desarrollo) que estás depurando. Es posible usar un adaptador SWD (ST-Link) en su lugar, para esto usa openocd 0.7 o más reciente.

Inicia el servidor openocd con archivos de configuración que coincidan con tu hardware:
```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

O, si estás usando SWD:
```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

En una segunda ventana, inicia una sesión interactiva con openocd:
```
telnet localhost 4444
```

Esto parece ser necesario para evitar errores de "target is not halted" y otros problemas más tarde:
```
reset_config trst_and_srst
```

Detén el objetivo (el procesador arm):
```
reset halt
```

Si aún no has grabado el binario, usando por ejemplo dfu-util, puedes hacerlo sobre JTAG así:
```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

En una tercera ventana, inicia gdb o gdbtui:
```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

Ahora deberías poder ejecutar y depurar:
```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
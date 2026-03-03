---
title: DSO Nano/Qemu gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Nano-Qemu_gdb/
slug: /es/DSO_Nano-Qemu_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
---


##   Ejecutando código STM32 en el emulador qemu

Con el emulador qemu puedes ejecutar y depurar código arm sin ningún procesador arm! Puedes cargar el código en el emulador, conectar el depurador gdb y recorrer el código paso a paso. Por supuesto, los periféricos, temporizadores y otros componentes del microcontrolador no serán emulados, pero es útil para verificar parte del código. Necesitarás ejecutar qemu-system-arm que es parte del proyecto QEMU. En Debian/Ubuntu está incluido en el paquete qemu-system (o qemu-kvm-extras en versiones anteriores).

##   Compilando qemu-system-arm (opcional)

Si no hay paquetes de distribución para tu sistema, o la versión empaquetada es anterior a 0.13, se recomienda que lo compiles tú mismo:

```
wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)
tar xzf qemu-0.13.0.tar.gz
cd qemu-0.13.0
./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=
make
```

Ahora puedes ejecutarlo directamente desde la carpeta arm-softmmu, a menos que quieras instalarlo en, por ejemplo, /usr/local/bin.

##   Nota sobre el soporte STM32

El microcontrolador STM32 en el DSO Nano usa un núcleo ARM cortex-m3. El qemu-system-arm no conoce el diseño de ROM (flash) del STM32. En particular, no lee el puntero de pila y el vector de reinicio desde la dirección 0x08000000. Pero si tu archivo elf designa correctamente el manejador de reinicio como punto de entrada, usará esto como la dirección de inicio. Sin embargo, tendrás que establecer el puntero de pila (sp) manualmente.

##   Iniciar el emulador

**Inicia el emulador qemu y su servidor gdb interno (opción -s), cargando tu archivo elf como un "kernel":**
```
qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf
```

La opción "-m 513" crea un espacio de memoria que incluye las direcciones RAM 0x2000000 del STM32.

**Inicia gdb (¡el de tu cadena de herramientas ARM!) y conéctate al emulador qemu:**

```
arm-none-eabi-gdb dso-lib.elf
(gdb) target extended-remote localhost:1234
(gdb) set $sp = 0x20005000
(gdb) where
```

**Ahora puedes comenzar a recorrer el programa paso a paso, solo algunos ejemplos**

```
(gdb) display/i $pc
(gdb) stepi
(gdb) next
(gdb) break main.c:23
(gdb) x/16wx 0x20000000
(gdb) cont
(gdb) info reg
(gdb) info variables
(gdb) print *pProperty
```

##   Enlaces

*   [http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/](http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/)

*   [http://embdev.net/topic/129757](http://embdev.net/topic/129757)

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
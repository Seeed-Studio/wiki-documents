---
description: XIAO RP2350 Con NuttX(RTOS)
title: XIAO RP2350 Con NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /es/xiao_rp2350_nuttx
sidebar_position: 3
last_update:
    date: 03/11/2025
    author: rcsim
---

# Seeed Studio XIAO RP2350 con NuttX(RTOS)

:::note

Debido a cambios en las versiones de software, algunos pasos en esta documentación pueden ya no ser precisos o estar desactualizados.

:::

## Introducción

[NuttX](https://nuttx.apache.org/) es un sistema operativo en tiempo real (RTOS) maduro ampliamente reconocido por su cumplimiento de estándares y su pequeña huella de memoria. Una de las características principales de NuttX es su escalabilidad, que le permite ser utilizado en entornos que van desde microcontroladores de 8 bits hasta sistemas de 64 bits. Esta flexibilidad se logra a través del cumplimiento de estándares POSIX y ANSI, permitiéndote experimentar con características similares de NuttX a través de una amplia gama de chips de diferentes arquitecturas, familias y proveedores de semiconductores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Además, NuttX ofrece muchas características avanzadas y útiles, como subsistemas USB, Ethernet, Audio y Gráficos. Estas características hacen de NuttX una opción atractiva para desarrolladores que buscan un RTOS versátil y robusto capaz de operar en varios tipos de hardware.

NuttX soporta un número vasto y continuamente en expansión de placas. [La documentación oficial](https://nuttx.apache.org/docs/latest/platforms/) proporciona una lista completa de placas soportadas, organizadas por arquitectura y serie de Sistema-en-Chip (SoC).

Por ejemplo, la página del [Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html) en la documentación de NuttX ofrece descripciones detalladas de cada característica soportada e instrucciones sobre cómo utilizarlas. También hay una página específica en la documentación de NuttX para chips de la serie [Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html).

## Instalación

La documentación de Nuttx proporciona una [guía](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para Seeed Studio XIAO RP2350 por favor sigue estos pasos:

1. Descargar herramientas picotool (opcional):

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # somewhere in your PATH
    ```

2. Crear un espacio de trabajo

    ```bash
    mkdir nuttxspace
    ```

3. Clonar los repositorios

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

El Apache Nuttx está dividido en dos proyectos:

- Nuttx: contiene implementado el kernel, controladores y subsistemas.
- Apps: contiene una colección de herramientas, shells, utilidades de red, bibliotecas e intérpretes.

## Aplicaciones

Para iniciar una aplicación es necesario cargar una configuración en NuttX, llamando al comando:

```bash
./tools/configure.sh board_name:your_application
```

También es posible verificar la lista de placas compatibles ejecutando el comando:

```bash
./tools/configure.sh -L
```

4. Construir NuttX (el proceso de construcción generará los binarios del firmware, incluyendo nuttx.uf2):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. Cargar el firmware usando picotool:

    ```bash
    picotool load nuttx -t elf
    ```

6. Los botones RESET y BOOT se pueden usar para entrar en modo bootloader presionando y manteniendo presionados los botones BOOT y luego presionando y soltando el botón RESET. Entonces, la placa se enumerará como un dispositivo de almacenamiento en una computadora conectada vía USB. Guardar un archivo .UF2 en este dispositivo reemplazará el contenido de la ROM Flash en el RP2350.

## Práctica

Es hora de explorar NuttX de manera práctica. En esta sesión, hay tres aplicaciones disponibles: NSH, USBNSH y COMBO.

### NSH

El NuttShell(NSH) es un sistema de shell para ser usado en NuttX, similar a bash y otras opciones similares. Soporta un conjunto rico de comandos incluidos, scripting y la capacidad de ejecutar tus propias aplicaciones como "builtin" (parte del mismo binario de NuttX). La configuración NSH habilita la consola en UART0 usando 115200 bps.

Podemos iniciar el proceso de construcción limpiando la configuración previa

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Ahora seleccionamos la configuración NSH para la placa xiao-rp2350:

```bash
./tools/configure.sh xiao-rp2350:nsh
```

Compila el código fuente.

```bash
make -j
```

Carga el firmware en tu placa y conecta el USB-a-Serie a los pines TX y RX, luego ejecuta un programa de comunicación serie como minicon o picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

Accede a la consola NuttShell:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

Escribiendo `?`, accederás a las opciones disponibles para comandos y aplicaciones integradas.

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

Digamos hola a NuttX, escribe `hello` y luego ejecuta el comando:

```bash
nsh> hello
Hello, World!!
```

Felicidades, tu primera interacción con NuttX fue completada.

### USBNSH

Similar a la configuración NSH, pero usando CDC/ACM serial (consola habilitada en Puerto USB, a 115200 bps).

Podemos iniciar el proceso de compilación limpiando la configuración previa

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Ahora seleccionamos la configuración NSH para la placa xiao-rp2350:

```bash
./tools/configure.sh xiao-rp2350:usbnsh
```

Compila el código fuente.

```bash
make -j
```

Carga el firmware en tu placa, ejecuta un programa de comunicación serie como minicon o picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

Debes presionar Enter 3 veces, y entonces este mensaje se mostrará en la terminal.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### COMBO

Esta configuración habilita tres aplicaciones de ejemplo: gpio, leds y ws2812. La Entrada/Salida de Propósito General (GPIO) es la parte más fundamental de un microcontrolador, permitiéndole conectarse al mundo externo. De esta manera usaremos el NSH para acceder y configurar esos pines como deseemos. Pero primero, limpiemos la configuración anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecciona la configuración combo para la placa xiao-rp2350.

```bash
./tools/configure.sh xiao-rp2350:combo
```

Compila el código fuente.

```bash
make -j
```

Carga el firmware en tu placa, ejecuta un programa de comunicación serie como minicon o picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

Para verificar qué opciones se aceptan para interactuar con esta aplicación, escribe `gpio -h`, y devolverá una lista de parámetros.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

Para confirmar que se crearon los archivos de dispositivo GPIO, escribe `ls/dev`. Después de escribir, puedes ver que algunos gpios fueron declarados definidos en boards/arm/rp23xx/xiao-rp2350/include/board.h, los cuales representan:

- LED en placa:
  - Amarillo          -> GPIO25
 
- GPIOs
  - 1 Entrada         -> GPIO27
  - 1 Entrada de Interrupción -> GPIO26
  - 1 Salida          -> GPIO28

```bash
nsh> ls /dev
/dev:
 console
 gpio26
 gpio27
 gpio28
 leds0
 null
 ttyS0
 userleds
 zero
nsh> 
```

Sigue estos comandos para leer gpio27 y gpio26 (con interrupción) y escribir en gpio28.

```bash
nsh> gpio -w 1 /dev/gpio26
Driver: /dev/gpio26
  Interrupt pin: Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

El USERLEDS es un subsistema que permite el control de los LEDs con una sola operación. También, puedes usar líneas de comandos como el printf. En esta demostración encenderemos y apagaremos el LED Amarillo integrado cada 1 segundo.

Escribiendo `leds`, observas que los LEDs parpadean al mismo tiempo.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

El Seeed Studio XIAO RP2350 también tiene un LED direccionable WS2812 que se puede probar usando la aplicación ws2812:
```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```


Consulta el video a continuación con la demostración para el ejemplo de gpio, leds y ws2812:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>


Para más información sobre el RTOS NuttX, por favor visita la [Documentación de NuttX](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) por sus esfuerzos dedicados. Tu trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

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

---
description: XIAO ESP32S3 Con NuttX(RTOS)
title: XIAO ESP32S3 Con NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /es/xiao_esp32s3_nuttx
sidebar_position: 2
last_update:
    date: 04/08/2025
    author: rcsim
---

# Seeed Studio XIAO ESP32S3 con NuttX(RTOS)

## Introducción

[NuttX](https://nuttx.apache.org/) es un sistema operativo en tiempo real (RTOS) maduro ampliamente reconocido por su cumplimiento de estándares y su pequeña huella de memoria. Una de las características principales de NuttX es su escalabilidad, que le permite ser utilizado en entornos que van desde microcontroladores de 8 bits hasta sistemas de 64 bits. Esta flexibilidad se logra a través del cumplimiento de los estándares POSIX y ANSI, permitiéndote experimentar con características similares de NuttX a través de una amplia gama de chips de diferentes arquitecturas, familias y proveedores de semiconductores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Además, NuttX ofrece muchas características avanzadas y útiles, como subsistemas USB, Ethernet, Audio y Gráficos. Estas características hacen de NuttX una opción atractiva para desarrolladores que buscan un RTOS versátil y robusto capaz de operar en varios tipos de hardware.

NuttX soporta un número vasto y continuamente en expansión de placas. [La documentación oficial](https://nuttx.apache.org/docs/latest/platforms/) proporciona una lista completa de placas soportadas, organizadas por arquitectura y serie de Sistema-en-Chip (SoC).

Por ejemplo, la página del [Seeed Studio XIAO ESP32S3](https://nuttx.apache.org/docs/latest/platforms/arm/esp32s3/boards/xiao-esp32s3/index.html) en la documentación de NuttX ofrece descripciones detalladas de cada característica soportada e instrucciones sobre cómo utilizarlas. También hay una página específica en la documentación de NuttX para chips de la serie [Espressif ESP32S3](https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/index.html), donde puedes encontrar la lista de MCUs y periféricos soportados.

## Instalación

La documentación de Nuttx proporciona una [guía](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para Seeed Studio XIAO ESP32S3 por favor sigue estos pasos:

1. Descargar Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/): 

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
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
./tools/configurate.sh board_name:your_application
```

También es posible verificar la lista de placas compatibles ejecutando el comando:

```bash
./tools/configurate.sh -L
```

4. Construir NuttX (el proceso de construcción generará los binarios del firmware, incluyendo nuttx.uf2):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32s3:nsh
    make V=1
    ```
5. Los botones RESET y BOOT se pueden usar para entrar al modo "Bootloader" manteniendo presionada la tecla BOOT mientras se enciende y luego presionando la tecla RESET una vez.

6. Cargar el firmware usando esptool.py:

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## Práctica

Es hora de explorar NuttX de manera práctica. En esta sesión, hay dos aplicaciones disponibles: USBNSH y COMBO.

### NSH

El NuttShell(NSH) es un sistema de shell para ser usado en NuttX, similar a bash y otras opciones similares. Soporta un conjunto rico de comandos incluidos, scripting y la capacidad de ejecutar tus propias aplicaciones como "builtin" (parte del mismo binario de NuttX). La configuración NSH habilita la consola en USB usando 115200 bps.

Podemos iniciar el proceso de construcción limpiando la configuración previa

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Ahora seleccionamos la configuración NSH para la placa xiao-esp32s3:

```bash
./tools/configurate.sh xiao-esp32s3:usbnsh
```

Compila el código fuente.

```bash
make -j
```

Carga el firmware en tu placa, reinicia la placa y conecta la consola NuttShell (NSH) por USB usando
la interfaz serie CDC/ACM:

```bash
picocom -b 115200 /dev/ttyACM0
```

Accede a la consola NuttShell:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> uname -a
NuttX 12.8.0 2c845426da-dirty Apr  6 2025 22:53:57 xtensa esp32s3-xiao
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

Felicidades, tu primera interacción with NuttX fue completada.

### COMBO

Esta configuración habilita tres aplicaciones de ejemplo, gpio y leds. El General Purpose Input/Output (GPIO) es la parte más fundamental de un microcontrolador, permitiéndole conectarse al mundo externo. De esta manera usaremos el NSH para acceder y configurar esos pines como deseemos. Pero primero, limpiemos la configuración anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecciona la configuración combo para la placa xiao-esp32s3.

```bash
./tools/configurate.sh xiao-esp32s3:combo
```

Compila el código fuente.

```bash
make -j
```

Carga el firmware en tu placa, ejecuta un programa de comunicación serie como minicon o picocom:

```bash
picocom -b 115200 /dev/ttyACM0
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

Para confirmar que se crearon los archivos de dispositivo GPIO, escribe `ls/dev`. Después de escribir, puedes ver que algunos gpios fueron declarados definidos en boards/arm/ra/xiao-esp32s3/include/board.h, los cuales representan:

- LED en la placa:
  - Amarillo          -> GPIO21
 
- GPIOs
  - 1 Entrada         -> GPIO1
  - 1 Entrada c/ IRQ  -> GPIO3
  - 1 Salida          -> GPIO2

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 ttyS0
 userleds
 zero
nsh> 
```

Siguiendo estos comandos para leer GPIO1(/dev/gpio1) y GPIO3(/dev/gpio2) (con interrupción)
y escribir en GPIO2(/dev/gpio0).

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio0
  Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=1
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

El USERLEDS es un subsistema que permite el control de los LEDs con una sola operación. También, puedes usar líneas de comandos como el printf. En esta demostración encenderemos y apagaremos el LED Amarillo integrado cada 1 segundo.

Escribiendo `leds`, observas que los LEDs parpadean al mismo tiempo.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 7): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00

```

Consulta el video a continuación con la demostración para gpio y leds:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiao-esp32s3-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>


Para más información sobre NuttX RTOS, por favor visita [Documentación de NuttX](https://nuttx.apache.org/docs/latest/index.html)

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

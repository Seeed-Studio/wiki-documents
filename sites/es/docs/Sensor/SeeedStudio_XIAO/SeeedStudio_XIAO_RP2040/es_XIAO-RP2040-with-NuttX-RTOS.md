---
description: Seeed Studio XIAO RP2040 con NuttX
title: XIAO RP2040 Con NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiao-rp2040-with-nuttx
last_update:
    date: 8/18/2024
    author: halyssonJr
---

# Seeed Studio XIAO RP2040 con NuttX(RTOS)

## Introducción

[NuttX](https://nuttx.apache.org/) es un sistema operativo en tiempo real (RTOS) maduro ampliamente reconocido por su cumplimiento de estándares y su pequeña huella de memoria. Una de las características principales de NuttX es su escalabilidad, que le permite ser utilizado en entornos que van desde microcontroladores de 8 bits hasta sistemas de 64 bits. Esta flexibilidad se logra a través del cumplimiento de los estándares POSIX y ANSI, permitiéndote experimentar con características similares de NuttX a través de una amplia gama de chips de diferentes arquitecturas, familias y proveedores de semiconductores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Además, NuttX ofrece muchas características avanzadas y útiles, como subsistemas USB, Ethernet, Audio y Gráficos. Estas características hacen de NuttX una opción atractiva para desarrolladores que buscan un RTOS versátil y robusto capaz de operar en varios tipos de hardware.

NuttX soporta un número vasto y continuamente en expansión de placas. [La documentación oficial](https://nuttx.apache.org/docs/latest/platforms/) proporciona una lista completa de placas soportadas, organizadas por arquitectura y serie de Sistema-en-Chip (SoC).

Por ejemplo, la página [Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html) en la documentación de NuttX ofrece descripciones detalladas de cada característica soportada e instrucciones sobre cómo utilizarlas.

## Configuración de Herramientas

El primer paso para comenzar con NuttX es instalar una serie de herramientas requeridas, una cadena de herramientas para la arquitectura con la que trabajarás y, finalmente, descargar el código fuente de NuttX mismo. NuttX proporciona una [guía](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas.

Después de instalar y configurar el entorno, sigue estos pasos:

1. Descargar Raspberry Pi Pico SDK:

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git

```

3. Establece la variable de entorno PICO_SDK_PATH:

```
export PICO_SDK_PATH=<absolute_path_to_pico-sdk_directory>
```

2. Crear un espacio de trabajo

```
mkdir nuttxspace
```

3. Clonar los repositorios

```
cd nuttxspace
git clone https://github.com/apache/nuttx.git nuttx
git clone https://github.com/apache/nuttx-apps apps
```

Apache Nuttx se divide en dos proyectos:

- Nuttx: contiene implementado el kernel, controladores y subsistemas.
- Apps: contiene una colección de herramientas, shells, utilidades de red, bibliotecas e intérpretes.

## Aplicaciones

Para iniciar una aplicación es necesario cargar una configuración en NuttX, llamando al comando:

```
./tools/configurate.sh board_name:your_application
```

También es posible verificar la lista de placas compatibles ejecutando el comando:

```
./tools/configurate.sh -L
```

Una vez que se ejecuta el script, se debe compilar NuttX. Hay dos posibilidades para hacerlo usando: [Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html) o [CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html).

## Programación

Una vez garantizada la compilación exitosa, el siguiente objetivo es programar usando BOOTSEL. Para eso, debes seguir estos pasos:

**Paso 1**: Conecta el Seed Studio XIAO RP2040 al puerto USB mientras presionas el botón `B` (boot). La placa será detectada como Dispositivo de Almacenamiento Masivo USB `RPI-RP2`.

**Paso 2**: En el espacio de trabajo, ve a `nuttx` y copia `nuttx.uf2` en el Seed Studio XIAO RP2040.

**Paso 3**: Busca un nuevo dispositivo USB en tu computadora.

**Paso 4**: Abre una comunicación serie con el Seed Studio XIAO RP2040.

## Práctica

Es hora de explorar NuttX de manera práctica. En esta sesión, hay cuatro aplicaciones disponibles: USB NSH, GPIO, USERLEDS y controlador WS2812.

### USBNSH

El NuttXShell(NSH) es un sistema de shell para ser usado en NuttX, similar a bash y otras opciones similares. Soporta un conjunto rico de comandos incluidos, scripting y la capacidad de ejecutar tus propias aplicaciones como "builtin" (parte del mismo binario de NuttX).

Podemos iniciar el proceso de compilación limpiando la configuración previa

```
cd ~/nuttxspace/nuttx
make distclean
```

Ahora seleccionamos la configuración USBNSH para la placa seeed-xiao-rp2040:

```
./tools/configurate.sh seeed-xiao-rp2040:usbnsh
```

Compila el código fuente.

```
make -j
```

Después de programar y abrir la comunicación serie

```
picocom -b 115200 /dev/ttyACM0
```

Debes presionar Enter 3 veces, y entonces este mensaje se mostrará en la terminal.

```
NuttShell (NSH) NuttX-12.5.1
nsh> 
```

Escribiendo `?`, accederás a las opciones disponibles para comandos y aplicaciones integradas.

```
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

```
nsh> hello
Hello, World!!
```

Felicidades, tu primera interacción with NuttX fue completada.

### Driver GPIO

El General Purpose Input/Output (GPIO) es la parte más fundamental de un microcontrolador, permitiéndole conectarse al mundo externo. De esta manera usaremos el NSH para acceder y configurar esos pines como deseemos. Pero primero, limpiemos la configuración anterior.

```
cd ~/nuttxspace/nuttx
make distclean
```

Selecciona la configuración gpio para la placa seeed-xiao-rp2040.

```
./tools/configurate.sh seeed-xiao-rp2040:gpio
```

Compila el código fuente.

```
make -j
```

Después de programar y abrir la comunicación serie

```
picocom -b 115200 /dev/ttyACM0
```

Debes presionar Enter 3 veces, y entonces este mensaje se mostrará en la terminal.

```
NuttShell (NSH) NuttX-12.5.1
nsh>
```

Para verificar qué opciones se aceptan para interactuar con esta aplicación, escribe `gpio -h`, y devolverá una lista de parámetros.

```
NuttShell (NSH) NuttX-12.5.1
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

Para confirmar que los archivos de dispositivo GPIO fueron creados, escribe `ls/dev`. Después de escribir, puedes ver que algunos gpios fueron declarados definidos en [seed-studio-gpio.c](https://github.com/apache/nuttx/blob/9d5b9b7c056e59c2fcc81e7029c95a995140063c/boards/arm/rp2040/seeed-xiao-rp2040/src/rp2040_gpio.c#L49-L61), que representan:

- 3 LED en la placa (gpio 18, gpio 17 y gpio 16).
- 1 Entrada (gpio 6)
- 1 Entrada de Interrupción (gpio 7)

```
nsh> ls /dev
/dev:
 console
 gpio16
 gpio17
 gpio18
 gpio6
 gpio7
 null
 ttyACM0
```

Según el esquema del RP2040 de Seeed Studio, los LEDs de la placa se encienden cuando el nivel del GPIO se establece en cero.

Para controlar la salida del GPIO, debes pasar el parámetro —o, un valor (cero o uno), y la ruta (/dev/gpio).

Siguiendo estos dos comandos verás el LED amarillo parpadeando.

```
nsh> gpio -o 0 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-green.jpg"/></div>

De la misma manera, tendrás el mismo resultado para el LED rojo.

```
nsh> gpio -o 0 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-red.jpg"/></div>

### USERLED

El USERLEDS es un subsistema que permite controlar los LEDs con una sola operación. También, puedes usar línea de comandos como el printf. En esta demostración encenderemos y apagaremos el LED integrado cada 1 segundo.

Primero, limpia la configuración anterior.

```
cd ~/nuttxspace/nuttx
make distclean
```

Configura la placa para la aplicación userled usando el comando:

```
./tools/configurate.sh seeed-xiao-rp2040:userleds
```

Compila el código fuente.

```
make -j
```

Después de programar, abre la comunicación serie y presiona Enter 3 veces, siguiendo los mismos pasos mostrados en la aplicación anterior.

Si escribes: `ls /dev/`, mostrará una lista de dispositivos, y observa que se creó el archivo `userleds`.

```
nsh> ls /dev/
/dev:
 console
 userleds
 null
 ttyACM0
 ttyS0
```

Escribiendo `leds`, observas que los LEDs parpadean al mismo tiempo.

```
NuttShell (NSH) NuttX-12.5.1
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid # 3): Running
led_daemon: Opening /dev/userled
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-userleds.gif" style={{width:300, height:'auto'}}/></div>

## LED WS2812

El controlador WS2812 permite controlar cualquier píxel inteligente que use el protocolo ws2812. Esta aplicación sobre NSH permite llamar a un comando para realizar la muestra.

Limpiar la configuración anterior

```
cd ~/nuttxspace/nuttx
make distclean
```

Selecciona la configuración ws2812 para la placa seeed-xiao-rp2040.

```
./tools/configurate.sh seeed-xiao-rp2040:ws2812
```

Compila el código fuente.

```
make -j
```

La compilación terminó, ve a programar la placa, abre la comunicación serie y presiona Enter 3 veces, siguiendo los mismos pasos mostrados en la aplicación anterior. Escribiendo `?`, verás la aplicación ws2812 disponible.

```
NuttShell (NSH) NuttX-12.5.1
nsh> ?
help usage:  help [-v] [<cmd>]

    .           cp          exit        mkdir       rm          uname       
    [           cmp         expr        mkrd        rmdir       umount      
    ?           dirname     false       mount       set         unset       
    alias       dd          fdinfo      mv          sleep       uptime      
    unalias     df          free        pidof       source      usleep      
    basename    dmesg       help        printf      test        xd          
    break       echo        hexdump     ps          time        
    cat         env         kill        pwd         true        
    cd          exec        ls          reboot      truncate    

Builtin Apps:
    getprime    hello       nsh         ostest      sh          ws2812      
nsh> 

```

Antes de ejecutar la aplicación, es importante confirmar que en la carpeta `ls /dev/` se creó el archivo `leds0`, que se utilizará para el controlador ws2812.

```
nsh> ls /dev/
/dev:
 console
 leds0
 null
 ttyACM0
 ttyS0

```

Escribir `ws2812 -h` devolverá una lista de parámetros que son aceptados para interactuar con esta aplicación.

```
nsh> ws2812 -h
Usage: ws2812 [OPTIONS]

Arguments are "sticky".  For example, once the device path is
specified, that path will be re-used until it is changed.
  [-p path] selects the ws2812 device.  Default: /dev/leds0 Current: /dev/leds0
  [-l leds] selects number of ws2812s in the chain.  Default: 1 Current: 1
  [-r repeat] selects the number change cycles.  Default: 4 Current: 4
  [-d delay] selects delay between updates.  Default: 20000 us Current: 20000 us

```

Iniciemos nuestra aplicación, escribe `ws2812` y verás que los LEDs cambian de color.

```
nsh> ws2812
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-rgb.gif" style={{width:400, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

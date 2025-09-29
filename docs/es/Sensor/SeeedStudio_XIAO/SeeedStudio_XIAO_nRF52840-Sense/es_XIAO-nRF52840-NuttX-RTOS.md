---
description: XIAO nRF52840(sense) Con NuttX(RTOS)
title: XIAO nRF52840(sense) Con NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /es/xiao_nrf52840_nuttx
last_update:
    date: 02/12/2025
    author: rcsim
---

# Seeed Studio XIAO nRF52840 con NuttX(RTOS)

## Introducción

[NuttX](https://nuttx.apache.org/) es un sistema operativo en tiempo real (RTOS) maduro ampliamente reconocido por su cumplimiento de estándares y su pequeña huella de memoria. Una de las características principales de NuttX es su escalabilidad, que le permite ser utilizado en entornos que van desde microcontroladores de 8 bits hasta sistemas de 64 bits. Esta flexibilidad se logra a través del cumplimiento de estándares POSIX y ANSI, permitiéndote experimentar con características similares de NuttX a través de una amplia gama de chips de diferentes arquitecturas, familias y proveedores de semiconductores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

Además, NuttX ofrece muchas características avanzadas y útiles, como subsistemas USB, Ethernet, Audio y Gráficos. Estas características hacen de NuttX una opción atractiva para desarrolladores que buscan un RTOS versátil y robusto capaz de operar en varios tipos de hardware.

NuttX soporta un número vasto y continuamente en expansión de placas. [La documentación oficial](https://nuttx.apache.org/docs/latest/platforms/) proporciona una lista completa de placas soportadas, organizadas por arquitectura y serie de Sistema-en-Chip (SoC).

Por ejemplo, la página [Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html) en la documentación de NuttX ofrece descripciones detalladas de cada característica soportada e instrucciones sobre cómo utilizarlas. También hay una página específica en la documentación de NuttX para chips de la serie [Nordic Semiconductor nRF52](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html).

## Configuración de Herramientas

El primer paso para comenzar con NuttX en XIAO nRF52840 es instalar las Herramientas UF2 requeridas para convertir el formato de archivo hex a uf2, luego descargar el código fuente de NuttX en sí. NuttX proporciona una [guía](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Sigue estos pasos:

1. Descargar Herramientas UF2:

    ```bash
    git clone https://github.com/microsoft/uf2.git
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

Apache Nuttx está dividido en dos proyectos:

- Nuttx: contiene el kernel implementado, controladores y subsistemas.
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

4. Compilar NuttX

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. Convertir nuttx.hex al formato UF2 usando U2F Tools:

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. Conectar el Seeed Studio XIAO nRF52840, y entrar al modo bootloader haciendo clic rápidamente dos veces. La placa será detectada como un Dispositivo de Almacenamiento Masivo USB. Luego copiar "nuttx.uf2" al dispositivo.

## Práctica

Es hora de explorar NuttX de manera práctica. En esta sesión, hay tres aplicaciones disponibles: NSH, USBNSH, y JUMBO.

### NSH

El NuttShell(NSH) es un sistema de shell para ser usado en NuttX, similar a bash y otras opciones similares. Soporta un conjunto rico de comandos incluidos, scripting y la capacidad de ejecutar tus propias aplicaciones como "builtin" (parte del mismo binario de NuttX). La configuración NSH habilita la consola en UART0 usando 115200 bps.

Podemos iniciar el proceso de compilación limpiando la configuración previa

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Ahora seleccionamos la configuración NSH para la placa xiao-nrf5200:

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

Compila el código fuente.

```bash
make -j
```

Convierte nuttx.hex al formato UF2 usando U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
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

Ahora seleccionamos la configuración NSH para la placa xiao-nrf5200:

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

Compila el código fuente.

```bash
make -j
```

Convierte nuttx.hex al formato UF2 usando U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
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

### JUMBO

Esta configuración habilita dos aplicaciones de ejemplo, gpio y leds. La Entrada/Salida de Propósito General (GPIO) es la parte más fundamental de un microcontrolador, permitiéndole conectarse al mundo externo. De esta manera usaremos el NSH para acceder y configurar esos pines como deseemos. Pero primero, limpiemos la configuración anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecciona la configuración jumbo para la placa xiao-nrf52840.

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
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

Para confirmar que se crearon los archivos del dispositivo GPIO, escribe `ls/dev`. Después de escribir, puedes ver que algunos gpios fueron declarados definidos en [xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61), que representan:

- LED RGB en la placa:

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIOs
  - 1 Entrada          - P0.02(/dev/gpio0)
  - 1 Entrada de Interrupción - P0.03(/dev/gpio2)
  - 1 Salida          - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

Sigue estos comandos para leer gpio0 y gpio2 (con interrupción) y escribir en gpio1.

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

El USERLEDS es un subsistema que permite el control de los LEDs con una sola operación. También, puedes usar líneas de comandos como el printf. En esta demostración encenderemos y apagaremos el LED RGB integrado cada 1 segundo.

Escribiendo `leds`, observarás que los LEDs parpadean al mismo tiempo.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

Consulta el video a continuación con la demostración del ejemplo de gpio y leds:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
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

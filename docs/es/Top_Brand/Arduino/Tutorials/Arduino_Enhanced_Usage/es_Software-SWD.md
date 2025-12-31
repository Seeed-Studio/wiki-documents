---
description: Cómo Depurar Placas Arduino usando Interfaz SWD
title: Cómo Depurar Placas Arduino usando Interfaz SWD
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
# Cómo Depurar Placas Arduino usando Interfaz SWD

En este wiki, aprenderás cómo usar la **Interfaz SWD para depurar tus placas Arduino a través del Programador de Depuración J-Link**. Como referencia, se utiliza Wio Terminal como hardware para demostrar el proceso de depuración.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### Qué es la Depuración SWD

**SWD**, también conocido como [Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug) es una interfaz de 2 pines (SWDIO/SWCLK) que también es una interfaz JTAG alternativa que tiene el mismo protocolo JTAG. SWD utiliza un protocolo de cable bidireccional estándar de CPU ARM, definido en el programador de depuración ARM.

## Conexión de Hardware

Antes de comenzar, necesitarás los siguientes materiales:

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) (u Otras Placas Arduino con Interfaz SWD)

2. [**Programador de Depuración J-Link**](https://www.segger.com/products/debug-probes/j-link/)

### Interfaz SWD de Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

Para Wio Terminal, las almohadillas de la interfaz SWD están en la parte inferior del lado frontal de Wio Terminal (PCBA desnudo sin carcasa). Hay tres cables puente que necesitan ser extraídos:

- **SWCLK**
- **SWDIO**
- **GND**

Una vez que los cables puente estén soldados, podemos conectarlos al programador de depuración J-Link siguiendo el Mapa de Pines SWD:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

Conecta como sigue:

- **`SWCLK`** (Wio Terminal) -> **`SWCLK`** (Programador de Depuración J-Link Pin 7)
- **`SWDIO`** (Wio Terminal) -> **`SWDIO`** (Programador de Depuración J-Link Pin 9)
- **`GND`** (Wio Terminal) -> **`GND`** (Programador de Depuración J-Link Pin 4)

## Instalando J-Link GDB Server para Depuración

Para depurar con el programador de depuración J-Link, necesitarás descargar el [**J-Link GDB Server**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/). Descarga e instala según tu SO.

## Configuración de Arduino

Antes de lanzar J-Link GDB Server, también necesitarás abrir el IDE de `Arduino` para configuraciones posteriores.

### 1. Obtener la Ruta del Archivo ELF del Sketch de Arduino

En la configuración del IDE de Arduino, asegúrate de que **Show verbose output during compilation and upload** estén ambos marcados.

Bajo el sketch de Arduino que quieres depurar, haz clic en **Compile** (selecciona Wio Terminal como placa), y verifica la información del registro para obtener la ruta de la ubicación del archivo `.elf`. Tomemos `Blink` como ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

Copia esta ruta y se usará más tarde para GDB.

Por ejemplo, en mi caso:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. Obtener la Ruta de GCC

Bajo la misma información del registro de compilación del sketch, también puedes encontrar la ruta de GCC utilizada por Arduino que también puede ser usada para el Programador de Depuración J-Link más tarde.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

Por ejemplo, en mi caso:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## Comenzando con J-Link GDB Server

Conecta el Programador de Depuración J-Link a la PC y también alimenta Wio Terminal desde el puerto USB. Lanza el **J-Link GDB Server**, selecciona las siguientes configuraciones:

- Connection to J-Link: **USB**
- Target Device: **Cortex-M4**
- Target Interface: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

Selecciona **OK** y si todo va bien deberías ver la siguiente pantalla:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

Deberías ver que aparecerá el puerto de escucha y el servidor J-Link GDB está listo y funcionando!

## Lanzando un Cliente GDB

Ahora puedes lanzar el Cliente GDB usando la ruta que guardamos anteriormente de la ruta de GCC en Arduino. Abre Terminal y pega la ruta copiada + `/arm-none-eabi-gdb`:

Por Ejemplo: `/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

Ejecuta los siguientes comandos bajo gdb:

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Ruta del Archivo ELF del Sketch de Arduino, es decir, `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

¡Ahora puedes usar GDB para depurar tu Sketch de Arduino!

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### Método `.gdbinit`

También puedes crear un archivo `.gdbinit`, copiar lo siguiente y guardarlo en la ubicación `~/` para evitar repetir el proceso de configuración para gdb.

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

¡Ahora si solo lanzas el cliente GDB puedes comenzar a depurar directamente!

## Depuración

Algunos comandos útiles para GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## Herramienta Recomendada: XIAO Debug Mate
Para una experiencia de desarrollo más eficiente, recomendamos el [XIAO Debug Mate](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html). Esta herramienta de desarrollo todo en uno está diseñada para simplificar el proceso de depuración, ofreciendo una solución sin cables para el ecosistema XIAO mientras sigue siendo una utilidad versátil para proyectos embebidos más amplios. Alimentado por el ESP32-S3, sirve como una alternativa moderna a los depuradores tradicionales y voluminosos.

**Características Clave:**
- Multiherramienta 3 en 1: Combina un Depurador DAPLink, Monitor Serie y Medidor de Potencia en un dispositivo.
- Retroalimentación Visual: Cuenta con una pantalla LCD de 2.01 pulgadas para ver el estado de variables en tiempo real, curvas de potencia y registros serie sin una PC.
- Plug-and-Play para XIAO: Conecta directamente cualquier placa Seeed Studio XIAO para depuración instantánea.
- Soporte SWD Universal: Puede usarse como una sonda SWD independiente (a través del header de expansión de 2.54mm) para depurar otros microcontroladores ARM Cortex-M.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB_debug.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Recursos

- [Documentación Oficial de GNU GDB](https://www.gnu.org/software/gdb/documentation/)

- [Hoja de Referencia de Comandos del Depurador GNU GDB](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**P1. ¿Cómo quitar la carcasa de Wio Terminal?**

**R1.** Primero, saca las 4 almohadillas de goma de las 4 esquinas, y verás 2 tornillos que mantienen unida la carcasa de Wio Terminal. Simplemente desatorníllalos y puedes separarla.

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>

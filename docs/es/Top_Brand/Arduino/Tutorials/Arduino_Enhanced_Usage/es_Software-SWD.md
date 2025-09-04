---
description: Cómo depurar placas Arduino usando la interfaz SWD
title: Cómo depurar placas Arduino usando la interfaz SWD
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
# Cómo depurar placas Arduino usando la interfaz SWD

En este wiki, aprenderás cómo usar la **interfaz SWD para depurar tus placas Arduino a través del programador de depuración J-Link**. Como referencia, se utiliza Wio Terminal como hardware para demostrar el proceso de depuración.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### Qué es la depuración SWD

**SWD**, también conocido como [Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug) es una interfaz de 2 pines (SWDIO/SWCLK) que también es una interfaz JTAG alternativa que tiene el mismo protocolo JTAG. SWD utiliza un protocolo de cable bidireccional estándar de CPU ARM, definido en el programador de depuración ARM.

## Conexión de hardware

Antes de comenzar, necesitarás los siguientes materiales:

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) (u otras placas Arduino con interfaz SWD)

2. [**Programador de depuración J-Link**](https://www.segger.com/products/debug-probes/j-link/)

### Interfaz SWD de Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

Para Wio Terminal, las almohadillas de la interfaz SWD están en la parte inferior del lado frontal de Wio Terminal (PCBA desnuda sin carcasa). Hay tres cables puente que necesitan ser extraídos:

- **SWCLK**
- **SWDIO**
- **GND**

Una vez que los cables puente están soldados, podemos conectarlos al programador de depuración J-Link siguiendo el mapa de pines SWD:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

Conecta como sigue:

- **`SWCLK`** (Wio Terminal) -> **`SWCLK`** (Programador de depuración J-Link Pin 7)
- **`SWDIO`** (Wio Terminal) -> **`SWDIO`** (Programador de depuración J-Link Pin 9)
- **`GND`** (Wio Terminal) -> **`GND`** (Programador de depuración J-Link Pin 4)

## Instalación del servidor J-Link GDB para depuración

Para depurar con el programador de depuración J-Link, necesitarás descargar el [**servidor J-Link GDB**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/). Descarga e instala según tu sistema operativo.

## Configuración de Arduino

Antes de lanzar el servidor J-Link GDB, también necesitarás abrir el IDE de `Arduino` para configuraciones posteriores.

### 1. Obtención de la ruta del archivo ELF del sketch de Arduino

En la configuración del IDE de Arduino, asegúrate de que **Mostrar salida detallada durante la compilación y carga** estén ambas marcadas.

Bajo el sketch de Arduino que quieres depurar, haz clic en **Compilar** (selecciona Wio Terminal como placa), y verifica la información del registro para obtener la ruta de la ubicación del archivo `.elf`. Tomemos `Blink` como ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

Copia esta ruta y se usará más tarde para GDB.

Por ejemplo, en mi caso:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. Obtener la Ruta de GCC

Bajo la misma información de registro de compilación del sketch, también puedes encontrar la ruta de GCC utilizada por Arduino, la cual también puede ser usada para el Programador de Depuración J-Link más adelante.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

Por ejemplo, en mi caso:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## Comenzando con el Servidor GDB de J-Link

Conecta el Programador de Depuración J-Link a la PC y también alimenta Wio Terminal desde el puerto USB. Inicia el **Servidor GDB de J-Link**, selecciona las siguientes configuraciones:

- Conexión a J-Link: **USB**
- Dispositivo Objetivo: **Cortex-M4**
- Interfaz Objetivo: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

Selecciona **OK** y si todo va bien deberías ver la siguiente pantalla:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

Deberías ver que aparece el puerto de escucha y el servidor GDB de J-Link está activo y listo!

## Iniciando un Cliente GDB

Ahora puedes iniciar el Cliente GDB usando la ruta que guardamos anteriormente de la ruta GCC en Arduino. Abre Terminal y pega la ruta copiada + `/arm-none-eabi-gdb`:

Por Ejemplo: `/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

Ejecuta los siguientes comandos bajo gdb:

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Ruta del Archivo ELF del Sketch de Arduino, es decir `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

¡Ahora puedes usar GDB para depurar tu Sketch de Arduino!

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### Método `.gdbinit`

También puedes crear un archivo `.gdbinit`, copia lo siguiente y guárdalo en la ubicación `~/` para evitar repetir constantemente el proceso de configuración para gdb.

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

Ahora si simplemente lanzas el cliente GDB y puedes empezar a depurar directamente!

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

## Recursos

- [Documentación Oficial de GNU GDB](https://www.gnu.org/software/gdb/documentation/)

- [Hoja de Referencia de Comandos del Depurador GNU GDB](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**P1. ¿Cómo quitar la carcasa del Wio Terminal?**

**R1.** Primero, saca las 4 almohadillas de goma de las 4 esquinas, y verás 2 tornillos que mantienen unida la carcasa del Wio Terminal. Simplemente desatorníllalos y puedes separarlo.

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>

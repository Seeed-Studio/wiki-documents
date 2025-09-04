---
description: MicroPython para Placas Compatibles con Arduino
title: MicroPython para Placas Compatibles con Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Compiling_MicroPython_for_embedded_devices
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


# Compilando MicroPython para dispositivos embebidos

## Qué es MicroPython

MicroPython es una implementación de software de un lenguaje de programación ampliamente compatible con Python 3, escrito en C, que está optimizado para ejecutarse en un microcontrolador.

MicroPython consiste en un compilador de Python a bytecode y un intérprete en tiempo de ejecución de ese bytecode. Al usuario se le presenta un prompt interactivo (el REPL) para ejecutar comandos compatibles inmediatamente. Se incluye una selección de bibliotecas principales de Python; MicroPython incluye módulos que dan al programador acceso al hardware de bajo nivel.

## Cómo construir firmware (Usemos Xiao SAMD como ejemplo)

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) ya soporta desarrollo con micropython.

### Primero: Preparar el software relevante

"arm-none-linux-gnueabi" es la cadena de herramientas que puede instalarse en sistemas basados en Debian usando un gestor de paquetes como apt (el paquete se llama gcc-arm-linux-gnueabi). En Ubuntu el arm-none-linux-gnueabi está incluido en ubertooth-firmware-source, También necesitamos preparar el entorno instalando las herramientas necesarias como gcc python y git make. Así que ejecutamos este comando

```bash
sudo apt update
sudo apt install cmake make gcc ubertooth-firmware-source python3 git 
```

### Segundo: Cambiar espacios de trabajo Clonando código fuente

Clonar el código fuente y descargar el código para los sub-módulos necesarios

Ejecutar las siguientes declaraciones en secuencia

```bash
cd ~
git clone https://github.com/micropython/micropython
cd ~/micropython
git submodule update --init --recursive
```

La información que descargaremos está en este archivo, que contiene la ruta de descarga y la dirección del repositorio de código

```bash
cat ~/micropython/.gitmodules 
```

### Tercero: Construir el mpy-cross, compilador cruzado de MicroPython

La mayoría de los puertos requieren que el compilador cruzado de MicroPython se construya primero. Este programa, llamado mpy-cross, se usa para pre-compilar scripts de Python a archivos .mpy que luego pueden incluirse (congelarse) en el firmware/ejecutable para un puerto. Para construir mpy-cross usar:

```bash
cd ~/micropython/mpy-cross
make
```

### Siguiente: Construir dependencias externas

Usamos el [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) que ya soporta desarrollo con micropython. Es un controlador basado en el chip samd de arquitectura arm.
Así que especificamos el número de versión y vamos al directorio correspondiente y compilamos:

```bash
cd ~/micropython/ports/samd
BOARD=SEEED_XIAO make V=1
```

### Finalmente: Grabando firmware

podemos ver el firmware generado aquí, copiamos el firmware al dispositivo y el micro python está disponible en el XIAO SAMD

```bash
ls ~/micropython/ports/samd/build-SEEED_XIAO/ |grep firmware.uf2
```

```bash
sudo cp ~/micropython/ports/samd/build-SEEED_XIAO/firmware.uf2 /media/$USER/Arduino/
```

## Probar nuestro firmware

Copia el código de abajo y verás el led azul parpadeando

```python3
from machine import Pin, Timer

led = Pin(19, Pin.OUT)
Counter = 0    
def fun(tim):
    global Counter
    Counter = Counter + 1
    state  =  Counter%2
    led.value(state)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/XIAO_SAMD_MICROPYTHON_LED.gif" border="0" /></p>

Como puedes ver [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) ya soporta desarrollo con micropython.

También puedes referirte a este proceso para compilar firmware de micropython para otros dispositivos.

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
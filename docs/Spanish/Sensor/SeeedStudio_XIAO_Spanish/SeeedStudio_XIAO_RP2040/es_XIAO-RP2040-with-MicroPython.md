---
description: XIAO RP2040 con de Seeed Studio con MicroPython
title: XIAO RP2040 con MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-with-MicroPython
last_update:
  date: 02/18/2025
  author: Guillermo
---

# **Seeed Studio XIAO RP2040 con MicroPython**

## **Introducción a MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una función de compilación parcial de código nativo. Proporciona un subconjunto de las características de Python 3.5, implementado para procesadores embebidos y sistemas restringidos. Es diferente de CPython, y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **Comenzando con MicroPython**

Primero, vamos a conectar el Seeed Studio XIAO RP2040 al computador y cargar un código simple en MicroPython para verificar si la placa funciona correctamente.

### **Configuración de Hardware**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Cable Type-C x1
- PC x1

### **Configuración de Software**

- **Paso 1**. Descarga e instala la última versión del [editor Thonny](https://thonny.org/) según tu sistema operativo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Paso 2**. Inicia Thonny.

- **Paso 3**. Haz clic en **"Herramientas --> Opciones"** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Paso 4**. Elige la interfaz "Intérprete" y selecciona el dispositivo como **"MicroPython (Raspberry Pi Pico)"** y el puerto como **"Intentar detectar el puerto automáticamente"**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Conectar Seeed Studio XIAO RP2040 a la PC y encenderlo**

- **Paso 1**. Mantén presionado el botón "BOOT" y luego conecta el Seeed Studio XIAO RP2040 a la PC mediante el cable Type-C. Si todo funciona correctamente, aparecerá un disco llamado "RPI-RP2" en la PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Paso 2**. Haz clic en **Instalar o actualizar MicroPython**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

Luego, buscará automáticamente el dispositivo y lo mostrará en el volumen de destino. En la selección de versión de MicroPython a continuación, dejaremos la opción por defecto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

Haz clic en el botón Instalar y cierra esta página cuando el estado de la instalación indique Hecho. La siguiente información aparecerá en la interfaz una vez que el firmware esté completo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **Paso 3**. Copie el siguiente código en Thonny.

```cpp
from machine import Pin, Timer
 
led = Pin(25, Pin.OUT)
Counter = 0
Fun_Num = 0
 
def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

- **Paso 4**. Sube el código haciendo clic en el botón **"Run current script"**. La primera vez que lo hagas, Thonny te preguntará dónde deseas guardar el archivo de código. Tanto **Este equipo** como **Raspberry Pi Pico** son opciones válidas.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si todo funciona bien, verás el LED encenderse y apagarse una vez por segundo. Además, la salida del número creciente también se mostrará en la ventana de Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

La conexión está completa y ahora podemos proceder con los otros proyectos.

## **Encender el LED RGB en el Seeed Studio XIAO RP2040**

El Seeed Studio XIAO RP2040 está equipado con un LED RGB y lo vamos a encender utilizando MicroPython. Se requiere una biblioteca de terceros, por lo que primero debemos añadir una biblioteca adicional.

- **Paso 1**. Descarga la biblioteca [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en "Archivo --> Guardar como" y guarda la biblioteca.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige "Raspberry Pi Pico" como la ubicación donde guardamos.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Asegúrate de que el nombre del archivo guardado sea "ws2812.py", de lo contrario no funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Paso 3**. Copia el siguiente código en Thonny.

```cpp
from ws2812 import WS2812
import utime
import machine
power = machine.Pin(11,machine.Pin.OUT)
power.value(1)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

led = WS2812(12,1)#WS2812(pin_num,led_count)

while True:
    print("Beautiful color")
    for color in COLORS: 
        led.pixels_fill(color)
        led.pixels_show()
        utime.sleep(0.2)
```

- **Paso 4**. Sube los códigos haciendo clic en el botón "Ejecutar script actual". La primera vez, Thonny te preguntará dónde deseas guardar tu archivo de código. Tanto **Este equipo** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si funciona correctamente, verás cómo el LED RGB cambia y parpadea las luces. Además, el texto "Beautiful Color" también se mostrará en la Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Conectar Seeed Studio XIAO RP2040 con la pantalla a través de IIC**

En este proyecto, vamos a conectar el [Grove - Pantalla OLED 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de la interfaz IIC para demostrar la función IIC en el Seeed Studio XIAO RP2040.

**Conexión de hardware**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1**. Descarga la biblioteca [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en "Archivo --> Guardar como" y guarda la biblioteca en el "Raspberry Pi Pico".

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige "Raspberry Pi Pico" como la ubicación donde guardarás.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Asegúrate de que el nombre del archivo guardado sea "ssd1306.py", de lo contrario no funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **Paso 3**. Copia los siguientes códigos en Thonny.

```cpp
from ssd1306 import SSD1306_I2C
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)
oled = SSD1306_I2C(128, 64, i2c)

while True:  
    oled.fill(0)#clear
    oled.text("Hello,World!",0,0)
    oled.show()
    #sleep(0.5)
```

- **Paso 4**. Sube los códigos haciendo clic en el botón "Ejecutar script actual". La primera vez, Thonny te preguntará dónde deseas guardar el archivo de los códigos. Tanto **Este equipo** como **Raspberry Pi Pico** son opciones válidas.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si todo funciona correctamente, verás el texto "Hello, World!" mostrado en la pantalla.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Consola de dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO utilizando MicroPython. Con este programa, puedes cargar, descargar y eliminar archivos fácilmente. ¡Le agradecemos por su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

## Recursos adicionales

Algunas bibliotecas adicionales y códigos de muestra están disponibles aquí:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## Soporte técnico y discusión sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>






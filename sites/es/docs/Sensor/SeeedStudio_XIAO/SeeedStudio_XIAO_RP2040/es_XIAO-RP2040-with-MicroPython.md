---
description: Seeed Studio XIAO RP2040 con MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO RP2040 con MicroPython**

## **Introducción a MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una característica de compilación parcial de código nativo. Proporciona un subconjunto de características de Python 3.5, implementado para procesadores embebidos y sistemas restringidos. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **Primeros Pasos**

Primero, vamos a conectar el Seeed Studio XIAO RP2040 a la computadora y cargar un código simple desde MicroPython para verificar si la placa está funcionando bien.

### **Configuración de Hardware**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Cable Type-C x1
- PC x1

### **Configuración de Software**

- **Paso 1**. Descarga e instala la última versión del [editor Thonny](https://thonny.org/) según tu sistema operativo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Paso 2**. Ejecuta Thonny

- **Paso 3**. Haz clic en **"Tools-->Options"** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Paso 4**. Elige la interfaz "Interpreter" y selecciona el dispositivo como **"MicroPython(Raspberry Pi Pico)"** y el puerto como **"Try to detect prot automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Conectar Seeed Studio XIAO RP2040 a la PC e Iluminarlo**

- **Paso 1**. Mantén presionado el botón "BOOT" y luego conecta el Seeed Studio XIAO RP2040 a la PC a través del cable Type-C. Si funciona bien, aparece un escritorio "RPI-RP2" en la PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Paso 2**. Haz clic en **Install or update MicroPython**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

Luego buscará automáticamente el dispositivo y lo mostrará en el Target Volume. En la selección de versión en Micropython a continuación, simplemente dejamos la predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

Haz clic en el botón Install y cierra esta página cuando el estado de instalación diga Done. La siguiente información se mostrará en la interfaz una vez que el firmware esté completo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **Paso 3**. Copia los siguientes códigos a Thonny.

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

- **Paso 4**. Sube los códigos haciendo clic en el botón "Run current script". Por primera vez, Thonny preguntará dónde quieres guardar tu archivo de códigos. Tanto **This Computer** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si funciona bien, verás que la luz LED se enciende y se apaga una vez por segundo. Y la salida del número creciente también se mostrará en el Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

La conexión está completa y ahora podemos proceder a los otros proyectos.

## **Encender el LED RGB en el Seeed Studio XIAO RP2040**

Hay un LED RGB equipado en el Seeed Studio XIAO RP2040 y vamos a encenderlo con MicroPython. Se requiere una biblioteca de terceros, así que necesitamos agregar una biblioteca adicional primero.

- **Paso 1**. Descarga la biblioteca [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en "File-->Save as" y guarda la biblioteca.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige "Raspberry Pi Pico" como la ubicación donde guardamos.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Asegúrate de que el nombre del archivo guardado sea "ws2812.py", de lo contrario no funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Paso 3**. Copia los siguientes códigos a Thonny.

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

- **Paso 4**. Sube los códigos haciendo clic en el botón "Run current script". Por primera vez, Thonny preguntará dónde quieres guardar tu archivo de códigos. Tanto **This Computer** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si funciona bien, verás que la luz LED RGB se convierte y parpadea las luces. Y la salida del texto "Beautiful Color" también se mostrará en el Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Conectar con Seeed Studio XIAO RP2040 con Display a través de IIC**

En este proyecto, vamos a conectar [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de la interfaz IIC para demostrar la función IIC en el Seeed Studio XIAO RP2040.

**Conexión de Hardware**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1**. Descarga la librería [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en "File-->Save as" y guarda la librería en el "Raspberry Pi Pico"

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige el "Raspberry Pi Pico" como la ubicación donde guardamos.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Asegúrate de que el nombre del archivo guardado sea "ssd1306.py", de lo contrario no funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **Paso 3**. Copia los siguientes códigos a Thonny.

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

- **Paso 4**. Sube los códigos haciendo clic en el botón "Run current script". Por primera vez, Thonny preguntará dónde quieres guardar tu archivo de códigos. Tanto **This Computer** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si funciona bien, verás el texto "Hello,World!" mostrado en la pantalla.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Consola de Dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO usando MicroPython. Con este programa puedes fácilmente subir, descargar y eliminar archivos. ¡Le agradecemos su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

## Recursos Adicionales

Algunas librerías adicionales y códigos de ejemplo están aquí:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



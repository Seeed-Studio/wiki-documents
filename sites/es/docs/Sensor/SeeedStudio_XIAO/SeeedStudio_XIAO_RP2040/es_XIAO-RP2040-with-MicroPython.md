---
description: Seeed Studio XIAO RP2040 con MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/es/XIAO-RP2040-with-MicroPython/
---

# Seeed Studio XIAO RP2040 con MicroPython

## Introducción a MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una función parcial de compilación a código nativo. Proporciona un subconjunto de las funciones de Python 3.5, implementado para procesadores embebidos y sistemas con recursos limitados. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## Primeros pasos

Primero, vamos a conectar la Serie Seeed Studio XIAO RP2040 al ordenador y subir un código sencillo desde MicroPython para comprobar si la placa funciona correctamente.

### Configuración de hardware

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) o [Seeed Studio XIAO RP2040 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Plus-p-6932.html) x1
- Cable Type-C x1
- PC x1

### Conectar la Serie XIAO RP2040 al PC

- **Paso 1**. Mantén pulsado el botón **BOOT** y luego conecta la Serie Seeed Studio XIAO RP2040 al PC mediante el cable Type-C. Si todo funciona bien, aparecerá un disco **RPI-RP2** en el PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Paso 2**. Flashear el firmware

    Solo tienes que ir a la página oficial y descargar el firmware más reciente, luego arrastrar y soltar el archivo `.uf2` en el disco **RPI-RP2** para finalizar el flasheo del firmware.

    - [Firmware MicroPython de la Serie XIAO RP2040](https://micropython.org/download/SEEED_XIAO_RP2040/)

### Configuración de software

- **Paso 1**. Descarga e instala la última versión del [editor Thonny](https://thonny.org/) de acuerdo con tu sistema operativo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Paso 2**. Inicia Thonny

- **Paso 3**. Haz clic en **Tools-->Options** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Paso 4**. Elige la interfaz **Interpreter** y selecciona el dispositivo como **MicroPython(generic)** y el puerto como **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

**Paso 5.** La información de la versión se mostrará en la Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2_1.png" /></div><br/>

**Paso 6.** Ve a Files -> New, pega el siguiente código y ejecuta el script.

```py
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

- El LED parpadeará a intervalos de 1 segundo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.jpg" /></div><br/>

:::tip

- La sección de [Recursos adicionales](#Recursos-adicionales) contiene firmware de MicroPython y ejemplos relevantes para XIAO RP2040 Plus. Puedes usar estos ejemplos siguiendo los tutoriales de XIAO RP2040, pero asegúrate de reemplazar y modificar los pines correspondientes.
- Para comprobar las diferencias dentro de la serie XIAO RP2040, consulta [XIAO RP2040 Series Pin Overview](https://wiki.seeedstudio.com/es/XIAO-RP2040/#visión-general-del-hardware)

:::

## Pines de la Serie XIAO RP2040

| Nombre de pin en MicroPython | GPIO de XIAO RP2040 | GPIO de XIAO RP2040 Plus | ADC | Función |
| :--- | :---: | :---: | :---: | :--- |
| D0 / A0 | GPIO26 | GPIO26 | 0 | GPIO, ADC0 |
| D1 / A1 | GPIO27 | GPIO27 | 1 | GPIO, ADC1 |
| D2 / A2 | GPIO28 | GPIO28 | 2 | GPIO, ADC2 |
| D3 / A3 | GPIO29 | GPIO29 | 3 | GPIO, ADC3 |
| D4 / SDA | GPIO6 | GPIO6 | — | GPIO, I2C SDA |
| D5 / SCL | GPIO7 | GPIO7 | — | GPIO, I2C SCL |
| D6 / TX | GPIO0 | GPIO0 | — | GPIO, UART TX |
| D7 / RX | GPIO1 | GPIO1 | — | GPIO, UART RX |
| D8 / SCK | GPIO2 | GPIO2 | — | GPIO, SPI SCK |
| D9 / MISO | GPIO4 | GPIO4 | — | GPIO, SPI MISO |
| D10 / MOSI | GPIO3 | GPIO3 | — | GPIO, SPI MOSI |
| NEOPIXEL | GPIO12 | GPIO12 | — | Datos WS2812 NeoPixel |
| NEOPIXEL_POWER / NEO_PWR / RGB_EN | GPIO11 | GPIO11 | — | Habilitación de alimentación de NeoPixel (RGB_EN en Plus) |
| LED_G / D23 | GPIO16 | GPIO16 | — | LED RGB verde; Plus D23 |
| LED_R / D24 | GPIO17 | GPIO17 | — | LED RGB rojo; Plus D24 |
| LED_B / LED | GPIO25 | GPIO25 | — | LED RGB azul / LED de usuario |
| D12 | — | GPIO18 | — | GPIO de expansión Plus |
| D13 / SCL1 | — | GPIO21 | — | Plus I2C1 SCL |
| D14 / SDA1 | — | GPIO20 | — | Plus I2C1 SDA |
| D15 | — | GPIO19 | — | GPIO de expansión Plus |
| D16 | — | GPIO22 | — | GPIO de expansión Plus |
| D17 | — | GPIO23 | — | GPIO de expansión Plus |
| D19 | — | GPIO5 | — | GPIO de expansión Plus |
| D20 | — | GPIO13 | — | GPIO de expansión Plus |
| D21 | — | GPIO14 | — | GPIO de expansión Plus |
| D22 | — | GPIO15 | — | GPIO de expansión Plus |
| D25 | — | GPIO10 | — | GPIO de expansión Plus |
| D26 | — | GPIO9 | — | GPIO de expansión Plus |
| D27 | — | GPIO8 | — | GPIO de expansión Plus |
| BAT_EN | — | GPIO24 | — | Habilitación de alimentación de batería Plus |

## Encender el LED RGB en el Seeed Studio XIAO RP2040

Hay un LED RGB incorporado en el Seeed Studio XIAO RP2040 y vamos a encenderlo con MicroPython. Se requiere una biblioteca de terceros, así que primero necesitamos añadir una biblioteca adicional.

- **Paso 1**. Descarga la biblioteca [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en **File-->Save as** y guarda la biblioteca.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige **Raspberry Pi Pico** como la ubicación donde guardamos.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Asegúrate de que el nombre del archivo guardado sea **ws2812.py**, de lo contrario no funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Paso 3**. Copia los siguientes códigos en Thonny.

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

- **Paso 4**. Sube los códigos haciendo clic en el botón "Run current script". La primera vez, Thonny te preguntará dónde quieres guardar tu archivo de código. Tanto **This Computer** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si todo funciona bien, verás que el LED RGB cambia y hace parpadear las luces. Y la salida del texto "Beautiful Color" también se mostrará en la Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## Conectar Seeed Studio XIAO RP2040 con pantalla mediante IIC

En este proyecto, vamos a conectar [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de la interfaz IIC para demostrar la función IIC en el Seeed Studio XIAO RP2040.

**Conexión de hardware**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1**. Descarga la biblioteca [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) y ábrela con Thonny.

- **Paso 2**. Haz clic en "File-->Save as" y guarda la biblioteca en la "Raspberry Pi Pico"

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Elige "Raspberry Pi Pico" como la ubicación donde guardamos.

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

- **Paso 4**. Sube los códigos haciendo clic en el botón "Run current script". La primera vez, Thonny te preguntará dónde quieres guardar tu archivo de código. Tanto **This Computer** como **Raspberry Pi Pico** están bien.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Si todo funciona bien, verás el texto "Hello,World!" mostrado en la pantalla.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Consola de dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO usando MicroPython. Con este programa puedes subir, descargar y borrar archivos fácilmente. ¡Le agradecemos su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div>

## Recursos adicionales

Algunas bibliotecas adicionales y códigos de ejemplo están aquí:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

- **[ZIP]** [XIAO-RP2040-Plus-Firmware-And-Examples](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

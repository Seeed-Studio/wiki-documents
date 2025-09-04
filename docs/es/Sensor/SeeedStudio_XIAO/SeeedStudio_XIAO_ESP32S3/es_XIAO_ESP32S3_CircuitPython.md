---
description: CircuitPython para XIAO ESP32S3
title: Proyecto XIAO ESP32S3 CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_project_circuitpython
last_update:
  date: 08/18/2024
  author: Isaac, Djair Guilherme
---

# Descripción del Proyecto

Esta wiki ha sido actualizada: https://wiki.seeedstudio.com/es/xiao_esp32s3_with_micropython/

CircuitPython es un lenguaje de programación ideal para XIAO ESP32S3 ya que simplifica los proyectos de computación física. Basado en Python, tiene una sintaxis amigable para principiantes e incluye módulos para acceder a hardware como sensores y pantallas. Dado que CircuitPython ya soporta el chip ESP32S3, este proyecto intenta compilar CircuitPython en la placa Seeed Studio XIAO ESP32S3.

## XIAO ESP32S3 con Pantalla OLED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### Preparación del Hardware

Estoy usando Seeed Studio XIAO ESPS3 y Seeed Studio Grove OLED Display 0.96 como hardware aquí.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio Grove OLED Display 0.96</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Software

Estoy usando el software Thonny IDE (Windows) y algunas librerías y archivos relacionados.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>archivos relacionados(librerías)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>

### Primeros Pasos

#### Descargar el Firmware de Circuitpython para XIAO ESP32S3

[Firmwares de Circuitpython 9.1.1 y 9.20 Alpha para XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

#### Conectar la placa XIAO ESP32S3 a la PC en modo BootLoader

El método específico es:

- **Paso 1**. Presiona y mantén presionado el botón BOOT en el XIAO ESP32S3 sin soltarlo.

- **Paso 2**. Mantén presionado el botón BOOT y luego conéctalo a la computadora mediante el cable de datos. Suelta el botón BOOT después de conectarlo a la computadora.

- **Paso 3**. Sube el programa **Blink** para verificar el funcionamiento del XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Abrir Thonny y Configurar las opciones

1. Después de ejecutar Thonny, navega a "Tools -> Options" y haz clic en la selección "Options"

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. Selecciona la opción "Interpreter" y haz clic en la selección "CircuitPython (generic)"

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### Flashear el firmware de CircuitPython a la placa XIAO ESP32S3

1. Haz clic en "(esptool)" en Thonny. Te pedirá que descargues el firmware más reciente de CircuitPython y lo flashees a la placa.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. El "(esptool)" en Thonny se muestra como se ve a continuación y primero elige el "Target port" correcto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. Selecciona la familia CircuitPython como "ESP32-S3" y selecciona el ícono con las tres líneas horizontales junto al botón de instalación, para incluir el Firmware que descargaste.
Ej. (seeed_xiao_esp32s3_911.bin o seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny completará el reset y ahora puedes hacer clic en "Install".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. Después de un tiempo mostrando "Done", la ventana se puede cerrar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. Habrá un controlador "CIRCUITPY" en la PC, lo que muestra que la placa ha sido flasheada exitosamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### Agregar los archivos relacionados (librerías) al controlador "CIRCUITPY"

Copia todos los archivos de los [archivos relacionados (librería)](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip) al controlador "CIRCUITPY".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
Los archivos "adafruit_ssd1306.mpy" y "adafruit_framebuf.mpy" son necesarios al usar "Seeed Studio Grove OLED Display 0.96"

La librería adafruit_framebuf usa un archivo de fuente llamado font5x8.bin para renderizar texto. Este archivo necesita ser accesible dentro del entorno donde se ejecuta tu código.
:::

#### Escribir código (IIC) y subirlo para lograr la visualización OLED

1. Después de agregar los archivos, ahora puedo importar la librería adafruit_ssd1306 en el código usando el comando import adafruit_ssd1306 y el entorno está ahora configurado para controlar la pantalla OLED. El código se muestra a continuación:

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins

# Create a display object with 128x64 resolution and an I2C address of 0x3C
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# Clear the display
display.fill(0)
display.show()

# Write text on the display
display.text('SeeedStudio ESP32S3', 0, 0 , 1)
display.text('Code by CircuitPython!', 0, 20 , 2)
display.show()
```

2. Sube el código haciendo clic en el botón "Run"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. El resultado final

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 Sense con Uso de XIAO Round Display con Sense Camera

### Preparación del Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Round Display para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Software

1. Instala el firmware en XIAO ESP32S3 Sense.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Firmware</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>Descargar ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. Instala los módulos y dependencias necesarios.

Siempre puedes instalar las librerías de CircuitPython usando la herramienta [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup), de Adafruit. Una vez instalada, solo tienes que escribir para instalar cualquier librería.

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### Comenzando

Después de instalar todas las librerías necesarias, simplemente escribe el código en code.py o main.py en CIRCUITPY, a continuación para ver el Marco de Cámara en la Pantalla Redonda.

```python
import board
import busio
import displayio
import espcamera
import adafruit_ticks
import gc9a01
import struct

i2c = busio.I2C(board.SCL, board.SDA)
spi = busio.SPI(clock=board.SCK, MOSI=board.MOSI)
cam_i2c = busio.I2C(board.CAM_SCL, board.CAM_SDA)

tft_dc  = board.D3
tft_cs  = board.D1
tft_bl  = board.D6

display_bus = displayio.FourWire(spi, command=tft_dc, chip_select=tft_cs)
display = gc9a01.GC9A01(display_bus, width=240, height=240, rotation=0)

# Appears that this example does not use Displayio at all
# print frame directly on display_bus to be faster
# so, rotation setting not works...

main = displayio.Group()
display.root_group = main

# Camera Init
cam = espcamera.Camera(
    data_pins=board.CAM_DATA,
    external_clock_pin=board.CAM_XCLK,
    pixel_clock_pin=board.CAM_PCLK,
    vsync_pin=board.CAM_VSYNC,
    href_pin=board.CAM_HREF,
    pixel_format=espcamera.PixelFormat.RGB565,
    frame_size=espcamera.FrameSize.R240X240,
    i2c=cam_i2c,
    external_clock_frequency=20_000_000,
    framebuffer_count=2,
    grab_mode=espcamera.GrabMode.WHEN_EMPTY)

# Sending init bytes to display_bus
display_bus.send(36, struct.pack(">hh", 0, 239))
display_bus.send(42, struct.pack(">hh", 0, 239))
display_bus.send(43, struct.pack(">hh", 0, 80+239))
display.auto_refresh = False

t0 = adafruit_ticks.ticks_ms()

while True:
    frame = cam.take(1)                                                         
    if isinstance(frame, displayio.Bitmap):                                     
        display_bus.send(44, frame)                                             
        t1 = adafruit_ticks.ticks_ms()                                          
        fps = 1000 / adafruit_ticks.ticks_diff(t1, t0)
        print(f"{fps:3.1f}fps")  # typically runs at about 25fps
        t0 = t1
```

## Qué más

- Los archivos relacionados provienen todos del [paquete de bibliotecas de Adafruit CircuitPython](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) ensamblado desde https://circuitpython.org/libraries y puedes encontrar todos los archivos de hardware compatibles que usan CircuitPython.
- El archivo "font5x8.bin" proviene de [aquí](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)
- [Firmware](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense) para Round Display y cámara

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Isaac](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).
- Y [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274).

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

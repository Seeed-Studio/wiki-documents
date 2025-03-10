---
description: CircuitPython for XIAO ESP32S3
title: XIAO ESP32S3 con CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_project_circuitpython
last_update:
  date: 02/11/2025
  author: Guillermo
---

# Descripción del Proyecto  

Este wiki ha sido actualizado: [https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/](https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/)  

CircuitPython es un lenguaje de programación ideal para XIAO ESP32S3, ya que simplifica los proyectos de computación física. Basado en Python, ofrece una sintaxis fácil de aprender y módulos para acceder a hardware como sensores y pantallas. Dado que CircuitPython ya es compatible con el chip ESP32S3, este proyecto intenta compilar CircuitPython en la placa Seeed Studio XIAO ESP32S3.  

## XIAO ESP32S3 con Pantalla OLED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### Preparación del Hardware  

Estoy utilizando Seeed Studio XIAO ESP32S3 y Seeed Studio Grove OLED Display 0.96 como el hardware para este proyecto.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Software  

Estoy utilizando el software Thonny IDE (Windows) junto con algunas bibliotecas y archivos relacionados.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>related files(libraries)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>


### Empezando

#### Descargar el Firmware de Circuitpython para XIAO ESP32S3  

[Circuitpython Firmwares 9.1.1 y 9.20 Alpha para XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)


#### Conectar la placa XIAO ESP32S3 a la PC en modo BootLoader  

El método específico es:  

- **Paso 1**. Mantén presionado el botón **BOOT** en la XIAO ESP32S3 sin soltarlo.  

- **Paso 2**. Sin soltar el botón **BOOT**, conecta la placa a la computadora mediante el cable de datos. Suelta el botón **BOOT** después de la conexión.  

- **Paso 3**. Carga el programa **Blink** para verificar el funcionamiento de la XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Abrir Thonny y configurar las opciones  

1. Después de ejecutar Thonny, ve a **"Herramientas -> Opciones"** y haz clic en la opción **"Opciones"**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. Selecciona la opción **"Intérprete"** y haz clic en **"CircuitPython (genérico)"**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### Flashea el firmware de CircuitPython a tu placa XIAO ESP32S3

1. Haz clic en **"(esptool)"** en Thonny. Se te pedirá que descargues el firmware más reciente de CircuitPython y lo flashees en la placa.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. El **"(esptool)"** en Thonny se muestra como en la siguiente imagen, y primero debes elegir el **"Target port"** correcto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. Selecciona la familia de CircuitPython como **"ESP32-S3"** y haz clic en el ícono con tres líneas horizontales junto al botón de instalación para incluir el firmware que descargaste.  
Ejemplo: **seeed_xiao_esp32s3_911.bin** o **seeed_xiao_esp32s3_920.bin**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonny completará el reinicio y ahora puedes hacer clic en "Install".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. Después de un momento, cuando aparezca "Done", se puede cerrar la ventana.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. Aparecerá un controlador "CIRCUITPY" en la PC, lo que indica que la placa se ha flasheado correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### Agregar los archivos relacionados (bibliotecas) al controlador "CIRCUITPY"

Copia todos los archivos de las [bibliotecas relacionadas](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip) al controlador "CIRCUITPY".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>


:::note
El archivo "adafruit_ssd1306.mpy" y el archivo "adafruit_framebuf.mpy" son necesarios al usar el "Grove OLED Display 0.96 de Seeed Studio".

La biblioteca adafruit_framebuf utiliza un archivo de fuente llamado "font5x8.bin" para renderizar texto. Este archivo debe estar accesible dentro del entorno donde se ejecuta tu código.
:::

#### Escribir código (IIC) y cargarlo para lograr que la pantalla OLED funcione

1. Después de agregar los archivos, ahora puedo importar la biblioteca adafruit_ssd1306 en el código usando el comando import adafruit_ssd1306 y el entorno está ahora configurado para manejar la pantalla OLED. El código se muestra a continuación:

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6, IO5)  # Inicializa la comunicación I2C utilizando los pines IO6 e IO5

# Crea un objeto display con resolución de 128x64 y una dirección I2C de 0x3C
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# Limpia la pantalla
display.fill(0)
display.show()

# Escribe texto en la pantalla
display.text('SeeedStudio ESP32S3', 0, 0, 1)
display.text('¡Código por CircuitPython!', 0, 20, 2)
display.show()
```

2. Carga el código haciendo clic en el botón "Ejecutar".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. El resultado final

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>


## XIAO ESP32S3 Sense con la pantalla redonda XIAO y la cámara Sense

### Preparación del hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Display Circular para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del software

1. Instala el firmware en el XIAO ESP32S3 Sense.

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
            <strong>Descarga ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. Instala los módulos y dependencias necesarias.

Siempre puedes instalar las bibliotecas de CircuitPython utilizando la herramienta [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup) de Adafruit. Una vez instalada, solo debes escribir el comando para instalar las bibliotecas necesarias.

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### Empezando

Después de instalar todas las bibliotecas necesarias, solo escribe el código en `code.py` o `main.py` en CIRCUITPY. A continuación, se muestra el código para ver el cuadro de la cámara en la pantalla redonda.

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

# Parece que este ejemplo no usa Displayio
# Se muestra el cuadro directamente en display_bus para hacerlo más rápido
# por lo que la configuración de rotación no funciona...

main = displayio.Group()
display.root_group = main

# Inicialización de la cámara
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

# Envío de bytes de inicialización a display_bus
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
        print(f"{fps:3.1f}fps")  # normalmente corre a aproximadamente 25fps
        t0 = t1
```


## Qué más

- Los archivos relacionados son todos del [paquete de bibliotecas de Adafruit CircuitPython](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) de https://circuitpython.org/libraries, y puedes encontrar todos los archivos de hardware compatibles utilizando CircuitPython.
- El archivo "font5x8.bin" proviene de [aquí](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin).
- [Firmware](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense) para la pantalla redonda y la cámara.

## ✨ Proyecto del contribuyente

- Este proyecto está respaldado por el [Proyecto del Contribuyente](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Isaac](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) y tu trabajo será exhibido [aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).
- Y a [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274).

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

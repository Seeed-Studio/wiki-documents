---
description: Grove - OLED Display 1.12&#34
title: Grove - OLED Display 1.12&#34
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-OLED_Display_1.12inch
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>

Nuestras nuevas pantallas OLED de 1.12” son perfectas cuando necesitas una pantalla pequeña con 16 niveles de gris. La parte visible del OLED mide 1.12” en diagonal y contiene 96x96 (versión 1.0) | 128x128 (versión 2.0) píxeles en escala de grises. Como la pantalla utiliza OLEDs, no hay retroiluminación y el contraste es muy alto.

Este OLED utiliza el chip controlador SSD1327 (V1.0) o SH1107G (V2.1), que gestiona la pantalla. Puedes comunicarte con el chip controlador usando I2C de 4 hilos (pines de reloj, datos, alimentación y GND).

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)

## Especificación

- Modo de comunicación: I2C
- Pantalla en escala de grises: 16 niveles de gris.
- Admite visualización de color normal e inverso.
- Admite desplazamiento horizontal continuo.
- Interfaz compatible con Grove

## Versión

  ---

  | Versión del producto              | Cambios                                                                                                                                                                                    | Fecha de lanzamiento |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Inicial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Cambia el IC controlador de SSD1327 a SH1107G, actualiza los píxeles en escala de grises de 96X96 a 128X128 | Nov 2015     |

## Especificaciones

---

|Elemento|Valor|
|-----|------|
|Tensión de funcionamiento | 3.3/5 V|
|Matriz de puntos | 96x96 |
| Color de pantalla| 16 niveles de gris |
| Pantalla OLED | LY120-96096 |
| Chip controlador | SSD1327Z |
| Tamaño de punto | 0.15(An) mm x 0.15(Al) mm |
| Paso de punto | 0.75(An) mm x 0.175(Al) mm|
| Temperatura de funcionamiento | -40~70 oC|

:::tip
    Para más detalles sobre los módulos Grove, consulta [Grove System](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas compatibles
<!-- ---

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas arriba como compatibles indican la compatibilidad de software o teórica del módulo. En la mayoría de los casos, solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino. No es posible ofrecer bibliotecas / código de demostración para todas las posibles MCU. Por lo tanto, los usuarios deben escribir su propia biblioteca de software.
:::

## Comenzando

### Jugar con Arduino

#### Hardware

Aquí mostraremos cómo funciona este Grove - OLED Display mediante una sencilla demo. Primero, necesitas preparar lo siguiente:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

Este es un módulo fácil de usar; lo que necesitas hacer es conectar el módulo al puerto I2C de un Base Shield. Hay 4 pines, definidos como se indica a continuación.

|pin|Función  | Nota   | Color del cable |
|--------|------|-----|---------------|
|pin1 | SCL | Reloj I2C | AMARILLO |
|pin2   | SDA| Datos I2C| BLANCO|
|pin3   | VCC  | Alimentación, 5V/3.3V| ROJO |
|pin4 | GND  | Tierra | NEGRO |

**Descripción general del hardware**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>

#### Software

- **Paso 1.** Conecta Grove - OLED Display 1.12'' al puerto **I2C** del Base Shield mediante un cable Grove.

- **Paso 2.** Abre Arduino IDE y el Library Manager **(Sketch > Include Library > Manage Libraries)** para instalar la biblioteca u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>

- **Paso 3.** Escribe "**u8g2**" en el campo de búsqueda, selecciona la última versión y haz clic en el botón "Install".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>

- **Paso 4.** Carga el código de demostración a continuación en tu Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::success
       Si todo va bien, se mostrará un "Hello World!" en la pantalla del Grove - OLED Display 1.12''.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>

:::note
        Si no dispone de un Base Shield, [Seeeduino Serie Vx](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) con **interfaz I2C** también funciona.
:::

#### Introducción a la biblioteca U8g2

U8g2 es una biblioteca gráfica monocroma para dispositivos embebidos. U8g2 admite OLEDs y LCDs monocromos, incluidos nuestros chips SSD1327/SH1107G.

La biblioteca de Arduino U8g2 se puede instalar desde el library manager del Arduino IDE. U8g2 también incluye la biblioteca U8x8:

**U8g2**

- Incluye todos los procedimientos gráficos (dibujar líneas/cajas/círculos).
- Admite muchas fuentes. (Casi) sin restricción en la altura de la fuente.
- Requiere algo de memoria en el microcontrolador para renderizar la pantalla.

**U8x8**

- Dispositivo de salida solo de texto (caracteres).
- Solo se permiten fuentes que encajen en una cuadrícula de 8x8 píxeles.
- Escribe directamente en la pantalla. No se requiere búfer en el microcontrolador.

Aquí se proporciona el [**wiki de la biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) así como la página de [Referencia de la API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

### Jugar con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1.** Elementos utilizados en este proyecto:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat for RasPi </th>
      <th>Grove - OLED Display 1.12''</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Paso 2.** Inserta el Grove Base Hat en la Raspberry.
- **Paso 3.** Conecta el Grove - OLED Display 1.12'' al puerto I2C del Base Hat.
- **Paso 4.** Conecta la Raspberry Pi al PC mediante un cable USB.

#### Software

- **Paso 1.** Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu Raspberry Pi.
- **Paso 2.** Ejecuta los siguientes comandos para correr el código.

```
# virutalenv para Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_lcd_1.2inches
```

A continuación se muestra el código sh1107g.py.

```python
'''
This is the code for
    - `Grove - 16 x 2 LCD (Black on Red) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Re-p-3197.html>`_
    - `Grove - 16 x 2 LCD (Black on Yellow) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yello-p-3198.html>`_
    - `Grove - 16 x 2 LCD (White on Blue) <https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html>`_

Examples:

    .. code-block:: python

        import time
        from grove.factory import Factory

        # LCD 16x2 Characters
        lcd = Factory.getDisplay("JHD1802")
        rows, cols = lcd.size()
        print("LCD model: {}".format(lcd.name))
        print("LCD type : {} x {}".format(cols, rows))

        lcd.setCursor(0, 0)
        lcd.write("hello world!")
        lcd.setCursor(0, cols - 1)
        lcd.write('X')
        lcd.setCursor(rows - 1, 0)
        for i in range(cols):
            lcd.write(chr(ord('A') + i))

        time.sleep(3)
        lcd.clear()
'''
from grove.display.base import *
# from upm.pyupm_lcd import *
from grove.i2c import Bus
import sys

# sphinx autoapi required
__all__ = ["SH1107G"]

BasicFont = [
        [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00],
        [0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00],
        [0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00],
        [0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00],
        [0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00],
        [0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00],
        [0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00],
        [0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00],
        [0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00],
        [0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
        [0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00],
        [0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00],
        [0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00],
        [0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00],
        [0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00],
        [0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00],
        [0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00],
        [0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00],
        [0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00],
        [0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00],
        [0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00],
        [0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00],
        [0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00],
        [0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00],
        [0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00],
        [0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00],
        [0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00],
        [0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00],
        [0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00],
        [0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00],
        [0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00],
        [0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00],
        [0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00],
        [0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00],
        [0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00],
        [0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00],
        [0x00,0x3F,0x40,0x38,0x40,0x3F,0x00,0x00],
        [0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00],
        [0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00],
        [0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00],
        [0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00],
        [0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00],
        [0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00],
        [0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00],
        [0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00],
        [0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00],
        [0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00],
        [0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00],
        [0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00],
        [0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00],
        [0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00],
        [0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00],
        [0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00],
        [0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00],
        [0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00],
        [0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00],
        [0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00],
        [0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00],
        [0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00],
        [0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00],
        [0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00],
        [0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00],
        [0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00],
        [0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00],
        [0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00],
        [0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x7F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00],
        [0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00],
]

class SH1107G(Display):
    '''
    OLED Display 1.12"(v2) use chip SH1107G.

    Args:
        address(int): I2C device address, default to 0x3E.
    '''
    MAX_GRAY    = 100
    _REG_CMD    = 0x00
    _REG_DATA   = 0x40
    _PAGE_CNT   = 16
    _PAGE_BYTES = 128
    _TOTAL_BYTES= _PAGE_CNT * _PAGE_BYTES
    
    _DISPLAY_CMD_OFF = 0xAE;
    _DISPLAY_CMD_ON = 0xAF;

    _BASE_LOW_COLUMN_ADDR = 0x00;
    _BASE_HIGH_COLUMN_ADDR = 0x10;
    _BASE_PAGE_START_ADDR = 0xB0;
    def __init__(self, address = 0x3C):
        super(SH1107G, self).__init__()
        self._bus = Bus()
        self._addr = address

        if self._bus.write_byte(self._addr, 0):
            print("Check if the OLED SH1107G inserted, then try again")
            sys.exit(1)
 
        id = self._bus.read_byte_data(self._addr, SH1107G._REG_CMD)
        # print(" id = 0x{:2x}".format(id))
        self._sh1107 = (id & 0x3F) == 0x07

        blk =     [0xAE]   # Display OFF
        blk.append(0xD5)   # Set Dclk
        blk.append(0x50)   # 100Hz
        blk.append(0x20)   # Set row address
        blk.append(0x81)   # Set contrast control
        blk.append(0x80)
        blk.append(0xA0)   # Segment remap
        blk.append(0xA4)   # Set Entire Display ON 
        blk.append(0xA6)   # Normal display
        blk.append(0xAD)   # Set external VCC
        blk.append(0x80)
        blk.append(0xC0)   # Set Common scan direction
        blk.append(0xD9)   # Set phase leghth
        blk.append(0x1F)
        blk.append(0xDB)   # Set Vcomh voltage
        blk.append(0x27)
        blk.append(0xAF)   # Display ON
        blk.append(0xB0)
        blk.append(0x00)
        blk.append(0x10)
        self._cmds(blk)
        self.clear()

    def _cmd(self, cmd):
        try:
            self._bus.write_byte_data(self._addr,
                                    SH1107G._REG_CMD, cmd)
        except IOError:
            print("*** Check if OLED module inserted ***")
            sys.exit(1)

    def _cmds(self, cmds):
        for c in cmds:
            self._cmd(c)

    def _datas(self, datas):
        length = len(datas)
        data = bytearray(length + 1)
        data[0] = SH1107G._REG_DATA
        for i in range(length):
            data[i + 1] = datas[i]
        try:
            self._bus.write_i2c_block_data(self._addr,
                                  SH1107G._REG_DATA, datas)
        except IOError:
            print("*** Check if OLED module inserted ***")
            sys.exit(1)

    @property
    def name(self):
        '''
        Get device name

        Returns:
            string: SH1107G/SSD1307 depends your device plugin.
        '''
        return "SH1107G"

    def type(self):
        '''
        Get device type

        Returns:
            int: ``TYPE_GRAY``
        '''
        return TYPE_GRAY

    def size(self):
        '''
        Get display size

        Returns:
            (Rows, Columns): the display size, in characters.
        '''
        return 16, 16

    def clear(self):
        '''
        Clears the screen and positions the cursor in the upper-left corner.
        '''
        zeros = [ 0x0 for dummy in range(SH1107G._TOTAL_BYTES) ]
        self.draw(zeros, SH1107G._TOTAL_BYTES)

    def draw(self, data, bytes):
        '''
        Quickly transfer/draw bulk data (specified by data) to OLED,
        transfer size specified by bytes.

        Args:
            data (list of int): the data to transfer/draw
            bytes (int)       : data size
        '''

        # all pages fill with data
        for i in range(SH1107G._PAGE_CNT):
            if i > bytes / SH1107G._PAGE_BYTES:
                return
            self._cmd(self._BASE_PAGE_START_ADDR + i)
            self._cmd(self._BASE_LOW_COLUMN_ADDR)
            self._cmd(self._BASE_HIGH_COLUMN_ADDR)
            # fill one PAGE bytes
            for k in range(0, SH1107G._PAGE_BYTES, 32):
                # I2C limit to 32 bytes each transfer
                begin = i * SH1107G._PAGE_BYTES + k
                end   = begin + 32
                self._datas(data[begin:end])

    def home(self):
        '''
        Positions the cursor in the upper-left of the OLED.
        That is, use that location in outputting subsequent text to the display.
        '''
        self.setCursor(0, 0)

    def setCursor(self, row, column):
        '''
        Position the OLED cursor; that is, set the location
        at which subsequent text written to the OLED will be displayed.

        Args:
            row   (int): the row at which to position cursor, with 0 being the first row
            column(int): the column at which to position cursor, with 0 being the first column

 Returns:
     None
        '''
        self._cmd(self._BASE_PAGE_START_ADDR + row)
        self._cmd(0x08 if column % 2 else self._BASE_LOW_COLUMN_ADDR)
        self._cmd(self._BASE_HIGH_COLUMN_ADDR + (column >> 1))

    def _putchar(self, c):
        asc = ord(c)
        if asc < 32 or asc > 127:
                asc = ord(' ')
        for i in range(8):
            fontmap = []
            fontmap.append(BasicFont[asc - 32][i])
            self._datas(fontmap)

    def write(self, msg):
        '''
        Write character(s) to the OLED.

        Args:
            msg (string): the character(s) to write to the display

        Returns:
            None
        '''
        for i in range(len(msg)):
            self._putchar(msg[i])

    def _backlight_on(self, en):
        self._cmd(self._DISPLAY_CMD_ON if en else self._DISPLAY_CMD_OFF)


def main():
    import time

    oled = SH1107G()
    rows, cols = oled.size()
    print("OLED model: {}".format(oled.name))
    print("OLED type : {} x {}".format(cols, rows))

    oled.backlight(False)
    time.sleep(1)

    oled.backlight(True)
    oled.setCursor(0, 0)
    oled.write("hello world!")
    oled.setCursor(0, cols - 1)
    oled.write('X')
    oled.setCursor(rows - 1, 0)
    for i in range(cols):
        oled.write(chr(ord('A') + i))

    time.sleep(3)
    oled.clear()

if __name__ == '__main__':
    main()

```

```python
（env）pi@raspberrypi:~ grove_lcd_1.2inches
```

:::tip success

Si todo va bien, podrás ver el siguiente resultado

:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/play_with_raspberry.jpg" />
</div>

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

## Visor de esquemáticos en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
- **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
- **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
- **[Datasheet]** [SSD1327 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
- **[Datasheet]** [LY120 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
- **[Datasheet]** [SH1107G_datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
- **[Tool]** [Reference for Make a 96x96 Image](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## Proyecto

**Smart Crops: ¡Implementando IoT en la agricultura convencional!** Nuestra misión con la naturaleza es preservarla, diseñando e implementando tecnologías y métodos de monitoreo con la ayuda de IoT a través de Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**Sistema automático de riego de plantas** Un dispositivo que riega plantas y monitorea la temperatura usando un ESP8266 y una aplicación Android.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**Flying BeagleBone Green** BBBmini es una cape de autopiloto/controlador de vuelo Linux de última generación para BeagleBone. Puede usarse para drones (Copter), aviones o rovers.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para proporcionarte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

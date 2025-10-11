---
description: Grove - 16x2 LCD
title: Grove - 16x2 LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-16x2_LCD_Series
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 16 x 2 LCD es una pantalla LCD I2C perfecta para Arduino y Raspberry Pi con alto contraste y fácil implementación. 16x2 significa dos líneas y cada línea tiene 16 columnas, 32 caracteres en total. Con la ayuda del conector Grove I2C, solo se necesitan 2 pines de señal y 2 pines de alimentación. Ni siquiera necesitas preocuparte por cómo conectar estos pines. Simplemente conéctalo a la interfaz I2C en Seeeduino o Arduino/Raspberry Pi+baseshield a través del cable Grove. No habrá cableado complicado, soldadura, ni preocupación por quemar el LCD causado por la resistencia limitadora de corriente incorrecta.

## Versiones

|Versión|Pedido|
|---|---|
|El Grove - 16 x 2 LCD (Negro sobre Amarillo)|[Comprar Ahora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|El Grove - 16 x 2 LCD (Negro sobre Rojo)|[Comprar Ahora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|El Grove - 16 x 2 LCD (Blanco sobre Azul) |[Comprar Ahora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|

:::note
         El [Grove - LCD RGB Backlight](https://wiki.seeedstudio.com/es/Grove-LCD_RGB_Backlight/) ha sido bien recibido desde su creación. Basándose en los comentarios de los clientes, ahora, traemos un derivado de retroiluminación monocromática más rentable para ti.
:::
Excepto por las retroiluminaciones RGB, estos tres productos son casi idénticos al Grove - LCD RGB Backlight, todos son de 16 caracteres de ancho, 2 filas con retroiluminación de alto brillo.

## Lectura previa

Se recomienda encarecidamente leer una introducción de **Qué es un Grove - 16 x 2 LCD** y **Cómo funciona** si no estás familiarizado con él. Por favor visita nuestro **[blog](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)** para información detallada.

## Características

- Construcción de pantalla: 16 Caracteres * 2 Líneas
- Modo de pantalla: STN
- MCU a bordo
- Interfaz de bus I2C
- Soporte para fuentes en inglés y japonés

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / 5V|
|Temperatura de operación|0 a 50℃|
|Temperatura de almacenamiento|-10 a 60℃|
|Método de manejo|1/16 duty, 1/5 bias|
|Interfaz|I^2^C|
|Dirección I^2^C|0X3E|

## Aplicaciones Típicas

- Visualización de temperatura
- Visualización de tiempo
- Cualquier proyecto que requiera una pantalla simple

## Plataformas Compatibles

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|

:::caution
         Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Materiales requeridos

| Seeeduino V4.2 | Base Shield|  Grove - 16 x 2 LCD |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::note
        * Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
    
        * Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

#### Descripción General del Hardware

**Resistor Pull-Up I2C**

La primera versión de la serie Grove - 16 x 2 LCD no tiene un resistor pull-up incorporado, ni proporciona una almohadilla para soldar el resistor pull-up opcional. Hemos rediseñado el módulo, y la nueva versión tiene resistores pull-up incorporados.  

 Si tienes una versión anterior en tus manos, puedes soldar tú mismo un resistor DIP de 10kΩ en la almohadilla trasera del conector Grove. Por favor sigue la imagen de abajo, suelda un resistor DIP de 10kΩ entre los pines **VCC** y **SCL** y un resistor DIP de 10kΩ entre los pines **VCC** y **SDA**.

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**Esquema**

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### Conexión del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      |  Cable Grove       | Grove - 16 x 2 LCD |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SDA            | Blanco              | SDA |
| SCL            | Amarillo             | SCL |

- **Paso 1.** Conecta el Grove - 16 x 2 LCD al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino y conecta el Seeeduino a la PC mediante un cable USB.

#### Software

:::tip
   Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) desde Github.

:::tip
        El Grove - 16 x 2 LCD comparte la misma librería con el [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/es/Grove-LCD_RGB_Backlight/). Su uso es casi el mismo, excepto que el Grove - 16 x 2 LCD no soporta la API de color RGB, como **setRGB()**.
:::

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：

**1).** Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

**2).** Ábrelo en tu computadora haciendo clic en **HelloWorld.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

**3).** O, puedes simplemente hacer clic en el icono

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

:::note
        * El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.

        * Dado que la serie **Grove - 16 x 2 LCD** son todas de retroiluminación monocromática, necesitas comentar el código relacionado con colores RGB. En el código de demostración anterior, es decir, la línea 6 y la línea 17.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
        Si todo va bien, verás que la LCD muestra la oración clásica: **hello world**.
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tienes Base Shield contigo, la Serie Seeeduino VX con interfaz I2C también funciona.
:::

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1.** Cosas usadas en este proyecto:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat para RasPi </th>
      <th>Grove - 16x2 LCD</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtén Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtén Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtén Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Paso 2.** Conecta el Grove Base Hat al Raspberry.
- **Paso 3.** Conecta el Grove - 16 x 2 LCD al puerto I2C del Base Hat.
- **Paso 4.** Conecta el Raspberry Pi a la PC a través del cable USB.

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu raspberry pi.
- **Paso 2.** Ejecuta los comandos de abajo para ejecutar el código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_16x2_lcd
```

A continuación se muestra el código jhd1802.py.

```python

from grove.display.base import *
from grove.i2c import Bus
import time
import sys

# sphinx autoapi required
__all__ = ["JHD1802"]

class JHD1802(Display):
    '''
    Grove - 16 x 2 LCD, using chip JHD1802.
        - Grove - 16 x 2 LCD (Black on Yellow)
        - Grove - 16 x 2 LCD (Black on Red)
        - Grove - 16 x 2 LCD (White on Blue)

    Also, it's our class name,
    which could drive the above three LCDs.

    Args:
        address(int): I2C device address, default to 0x3E.
    '''
    def __init__(self, address = 0x3E):
        self._bus = Bus()
        self._addr = address
        if self._bus.write_byte(self._addr, 0):
            print("Check if the LCD {} inserted, then try again"
                    .format(self.name))
            sys.exit(1)
        self.textCommand(0x02)
        time.sleep(0.1)
        self.textCommand(0x08 | 0x04) # display on, no cursor
        self.textCommand(0x28)

    @property
    def name(self):
        '''
        Get device name

        Returns:
            string: JHD1802
        '''
        return "JHD1802"

    def type(self):
        '''
        Get device type

        Returns:
            int: ``TYPE_CHAR``
        '''
        return TYPE_CHAR

    def size(self):
        '''
        Get display size

        Returns:
            (Rows, Columns): the display size, in characters.
        '''
        # Charactor 16x2
        # return (Rows, Columns)
        return 2, 16

    def clear(self):
        '''
        Clears the screen and positions the cursor in the upper-left corner.
        '''
        self.textCommand(0x01)

    def draw(self, data, bytes):
        '''
        Not implement for char type display device.
        '''
        return False

    def home(self):
        '''
        Positions the cursor in the upper-left of the LCD.
        That is, use that location in outputting subsequent text to the display.
        '''
        self.textCommand(0x02)
        time.sleep(0.2)

    def setCursor(self, row, column):
        '''
        Position the LCD cursor; that is, set the location
        at which subsequent text written to the LCD will be displayed.

        Args:
            row   (int): the row at which to position cursor, with 0 being the first row
            column(int): the column at which to position cursor, with 0 being the first column

 Returns:
     None
        '''
        # print("setCursor: row={}, column={}".format(row,column))
        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)

    def write(self, msg):
        '''
        Write character(s) to the LCD.

        Args:
            msg (string): the character(s) to write to the display

        Returns:
            None
        '''
        for c in msg:
            self._bus.write_byte_data(self._addr,0x40,ord(c))

    def _cursor_on(self, enable):
        if enable:
            self.textCommand(0x0E)
        else:
            self.textCommand(0x0C)
            
            
    def textCommand(self, cmd):
        self._bus.write_byte_data(self._addr,0x80,cmd)
        
def main():
    import time

    lcd = JHD1802()
    rows, cols = lcd.size()
    print("LCD model: {}".format(lcd.name))
    print("LCD type : {} x {}".format(cols, rows))

    lcd.backlight(False)
    time.sleep(1)

    lcd.backlight(True)
    lcd.setCursor(0, 0)
    lcd.write("hello world!")
    lcd.setCursor(0, cols - 1)
    lcd.write('X')
    lcd.setCursor(rows - 1, 0)
    for i in range(cols):
        lcd.write(chr(ord('A') + i))

    time.sleep(3)
    lcd.clear()

if __name__ == '__main__':
    main()

```

```python
(env)pi@raspberrypi:~ grove_16x2_lcd
```

:::tip success
Si todo va bien, podrás ver el siguiente resultado
:::

- La retroiluminación se apagará durante 1 segundo, luego se encenderá de nuevo.
- La LCD mostrará:

```
hello world!   X
ABCDEFGHIJKLMNOP
```

- Después de 3 segundos, toda la pantalla se borrará y la pantalla quedará en blanco.

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **Paso 2.** Conecta Grove - 16 x 2 LCD al puerto **I2C** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [**Primeros pasos con ArduPy**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en el Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy contenga la biblioteca ArduPy de Grove - 16 x 2 LCD usando los siguientes comandos. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-LCD1602.py`:

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #column 1, row 2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::note
       Para más referencia de la API, consulte [**aquí**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602).
:::

- **Paso 4.** Guarde el `ArduPy-LCD1602.py` en una ubicación que conozca. Ejecute el siguiente comando y **reemplace** `<YourPythonFilePath>` con la ubicación de su `ArduPy-LCD1602.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **Paso 5.** Veremos los resultados en el Grove - 16 x 2 LCD.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- **[PDF]** [JDH_1804_Datasheet](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Proyecto de Control Remoto Universal IR Grove**：¿Tienes múltiples controles remotos? ¿Tienes un Arduino? Opera múltiples dispositivos con una sola pulsación de un control remoto IR Keyes.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />

**Pruebas de alcance simplificadas con el RE-Mote y LCD**：Reduce la cantidad de equipos y preparativos requeridos para pruebas de campo (2.4GHz y 868MHz), empaca todo lo que necesitas en tu mano.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />

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

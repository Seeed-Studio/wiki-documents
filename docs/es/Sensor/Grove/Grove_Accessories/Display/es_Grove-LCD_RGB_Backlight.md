---
description: Grove - LCD RGB Backlight
title: Grove - LCD RGB Backlight
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LCD_RGB_Backlight
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg" alt="pir" width={600} height="auto" /></p>

¿Cansado de la tediosa retroiluminación monocolor? Este Grove te permite establecer el color que desees a través
de la interfaz Grove simple y concisa. Utiliza I2C como método de comunicación con tu microcontrolador.
Así, el número de pines requeridos para el intercambio de datos y control de retroiluminación se reduce de ~10 a 2, liberando IOs para
otras tareas desafiantes. Además, Grove - LCD RGB Backlight soporta caracteres definidos por el usuario. ¿Quieres obtener
un corazón de amor o algunos otros caracteres extranjeros? ¡Solo aprovecha esta característica y diseñalo!
Este producto es un reemplazo de Grove - Serial LCD. Si estás buscando módulos LCD 16x2 primitivos, también
tenemos a la venta la versión de retroiluminación verde amarilla y la versión de retroiluminación azul.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
Grove-LCD RGB Backlight ha sido actualizado de V4.0 a V5.0, y el código también ha sido mejorado para compatibilidad. Ahora puedes usar el nuevo código compatible para manejar el más poderoso Grove-LCD RGB Backlight V5.0.

A continuación está el registro de cambios:

- Nueva compatibilidad 5v/3.3v.
- Dirección I2C RGB cambiada de 0x62 a 0x30.
- Chip controlador RGB actualizado de PCA9632 a SGM31323.
- PCB serigrafía actualizada de "Grove-LCD RGB Backlight V4.0" a "Grove-LCD RGB Backlight V5.0".
- Corregidos otros problemas conocidos

Nuevo código (compatible con v4.0 y v5.0):https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/
:::

## Versión

| Versión del Producto              | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|---------------|
| Grove-LCD RGB Backlight V1.0 | Inicial                                   | Junio 2012     |
| Grove-LCD RGB Backlight V2.0 | Optimizar diseño PCB                       | Nov 2013     |
| Grove-LCD RGB Backlight V4.0 | Optimizar diseño PCB                       | Sep 2016     |

## Características

- Retroiluminación RGB
- Comunicación I2C
- Fuentes en inglés integradas
- LCD 16x2

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Elemento|Valor|
|------|----------|
| Voltaje de Entrada|5V|
| Corriente de Operación | &lt;60mA |
|CGROM | 10880 bit |
| CGRAM | 64x8 bit |
| Dirección I2C del LCD | 0X3E |
| Dirección I2C del RGB | 0X62 |

:::note
    Hay 4 direcciones I2C y usamos 2 direcciones I2C para LCD y RGB.
:::

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de Aplicación

- Interfaz Humano Máquina
- Casa Inteligente
- Centro de Sensores

Aquí hay algunos proyectos para tu referencia.

|Edison Wi-Fi Address|WiFi Enabled Greenhouse|Grove Lucky Dumpling|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg" alt="pir" width={600} height="auto" /></p>|
|[¡Hazlo Ahora!](https://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/)|[¡Hazlo Ahora!](https://www.instructables.com/id/Arduino-Grove-Greenhouse/)|[¡Hazlo Ahora!](https://www.instructables.com/id/Grove-Lucky-Dumpling/)|
|Toothbrushing Instructor|LinkIt ONE Pager|LinkIt ONE IoT Demo|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg" alt="pir" width={600} height="auto" /></p>|
|[¡Hazlo Ahora!](https://www.instructables.com/id/Toothbrushing-Instructor/)|[¡Hazlo Ahora!](https://www.instructables.com/id/LinkIt-ONE-Pager/)|[¡Hazlo Ahora!](https://community.seeedstudio.com/project_detail.html?id=78)|

## Comenzando

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-LCD RGB Backlight |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|

- **Paso 2.** Conecta Grove-LCD RGB Backlight al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-LCD RGB Backlight al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-LCD RGB Backlight |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| SDA           | Blanco                   |
| SCL           | Amarillo                  |

**Software**

- **Paso 1.** Descarga la [Biblioteca Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) desde Github.
- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.
- **Paso 3.** Aquí hay 12 ejemplos en la biblioteca como se muestra a continuación.

  - Autoscroll
  - Blink
  - Cursor
  - CustomCharacter
  - Display
  - fade
  - HelloWorld
  - Scroll
  - SerialDisplay
  - setColor
  - setCursor
  - TextDirection

- **Paso 4.** Por favor sigue la imagen de abajo para seleccionar el ejemplo **HelloWorld** y cargar el arduino. Si no sabes cómo cargar el código, por favor revisa [cómo cargar código](https://wiki.seeedstudio.com/es/Upload_Code/).

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg" alt="pir" width={600} height="auto" /></p>

Aquí está el código de HelloWorld.ino.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
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

- **Paso 4.** Veremos el hello world en la LCD.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Usando un cable Grove conecta Grove - LCD RGB Backlight al puerto I2C del Seeeduino. Si estás usando Arduino, por favor aprovecha un Base Shield.

**Paso 2.** Conecta el Seeedino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás "hello, world!" y el tiempo de ejecución del sistema mostrado en la LCD.
:::

### Jugar con Raspberry Pi

**Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove-LCD RGB Backlight |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta Grove-LCD RGB Backlight al puerto **I2C** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg" alt="pir" width={600} height="auto" /></p>

**Software**

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar el Grove-LCD RGB Backlight para mostrar.

```python
cd ~/GrovePi/Software/Python/grove_rgb_lcd
python3 grove_rgb_lcd.py
```

Aquí está el código grove_rgb_lcd.py.

```python
import time,sys

if sys.platform == 'uwp':
    import winrt_smbus as smbus
    bus = smbus.SMBus(1)
else:
    import smbus
    import RPi.GPIO as GPIO
    rev = GPIO.RPI_REVISION
    if rev == 2 or rev == 3:
        bus = smbus.SMBus(1)
    else:
        bus = smbus.SMBus(0)

# this device has two I2C addresses
DISPLAY_RGB_ADDR = 0x62
DISPLAY_TEXT_ADDR = 0x3e

# set backlight to (R,G,B) (values from 0..255 for each)
def setRGB(r,g,b):
    bus.write_byte_data(DISPLAY_RGB_ADDR,0,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,1,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,0x08,0xaa)
    bus.write_byte_data(DISPLAY_RGB_ADDR,4,r)
    bus.write_byte_data(DISPLAY_RGB_ADDR,3,g)
    bus.write_byte_data(DISPLAY_RGB_ADDR,2,b)

# send command to display (no need for external use)    
def textCommand(cmd):
    bus.write_byte_data(DISPLAY_TEXT_ADDR,0x80,cmd)

# set display text \n for second line(or auto wrap)     
def setText(text):
    textCommand(0x01) # clear display
    time.sleep(.05)
    textCommand(0x08 | 0x04) # display on, no cursor
    textCommand(0x28) # 2 lines
    time.sleep(.05)
    count = 0
    row = 0
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

#Update the display without erasing the display
def setText_norefresh(text):
    textCommand(0x02) # return home
    time.sleep(.05)
    textCommand(0x08 | 0x04) # display on, no cursor
    textCommand(0x28) # 2 lines
    time.sleep(.05)
    count = 0
    row = 0
    while len(text) < 32: #clears the rest of the screen
        text += ' '
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

# example code
if __name__=="__main__":
    setText("Hello world\nThis is an LCD test")
    setRGB(0,128,64)
    time.sleep(2)
    for c in range(0,255):
        setText_norefresh("Going to sleep in {}...".format(str(c)))
        setRGB(c,255-c,0)
        time.sleep(0.1)
    setRGB(0,255,0)
    setText("Bye bye, this should wrap onto next line")
```

- **Paso 4.** Veremos la pantalla Grove-LCD RGB Backlight mostrando Going to sleep in 1...

## FAQ

- P1: ¿Cómo usar múltiples Grove-LCD RGB Backlight?
  - R1: Por favor consulta la [guía de usuario de Arduino Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).

- P2: ¿Cómo usar un botón para cambiar el Grove RGB LCD para mostrar diferentes páginas?
  - R2: Aquí está el código.

```cpp

#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;
const int switchPin = 2;
static int hits = 0;
int switchState = 0;
int prevSwitchState = 0;

void setup() {
    lcd.begin(16, 2);
    pinMode(switchPin,INPUT);
    Serial.begin(9600);
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
}

void loop() {  
  switchState = digitalRead(switchPin);
  Serial.print("switchState:");Serial.println(switchState);
  if (switchState != prevSwitchState) {
    if (switchState == HIGH) {
          hits = hits + 1;
          delay(10);
    }
  }
 
  Serial.print("hits:");Serial.println(hits);
  if(hits==1)
  {
    Serial.println("Page 1");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
  }else
  if(hits==2)
  {
   Serial.println("Page 2");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 2"); 
  }else

  if(hits==3)
  {
   Serial.println("Page 3");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 3"); 
  }else
  
  if ( hits>=4)
  {
     hits = 0;
     Serial.println("couter is reset");
     Serial.println("Page 1");
     lcd.clear();
     lcd.setCursor(0, 0);
     lcd.print("Page 1");
  }
delay(500);
}
```

## Recursos

- **[Biblioteca]** [Biblioteca de Software](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)
- **[Documento]** [Página de Github para este documento](https://github.com/SeeedDocument/Grove_LCD_RGB_Backlight)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/Grove_LCD_RGB_Backlight_CDC_File.zip)
- **[Hoja de datos]** [PCA9633](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/PCA9633.pdf)
- **[Hoja de datos]** [JHD1313](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/JHD1313%20FP-RGB-1%201.4.pdf)

## Proyectos

**Particle + Grove LCD RGB Backlight = Reloj en Tiempo Real**: Conecta Grove LCD RGB Backlight a Particle usando I2C para mostrar la hora.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-grove-lcd-rgb-backlight-realtime-clock-42151f/embed' width='350'></iframe>

**Módulo LCD RGB Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yniND_abVos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tbdTTC3Jmgk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

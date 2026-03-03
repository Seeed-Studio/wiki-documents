---
description: La descripción de ArduPy
title:  ArduPy con Wio Terminal
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ArduPy
last_update:
  date: 8/7/2023
  author: cessarr
---

# Primeros pasos con ArduPy

Para comenzar con ArduPy, primero necesitas instalar **`aip` - ArduPy Integrated Platform** que es una utilidad para desarrollar ArduPy e interactuar con la placa ArduPy. Permite a los usuarios comenzar rápidamente con ardupy. `aip` está diseñado para ser una herramienta simple de línea de comandos. Puedes personalizar tu propio firmware de ardupy a través de ella, sin necesidad de conocer más detalles sobre ArduPy.

## Placas Compatibles

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## Inicio Rápido con ArduPy

El siguiente método se utiliza para experimentar el software ArduPy de la manera más simple. ¡Sigue los procedimientos para comenzar ahora!

- **PASO.1 Entrar en modo bootloader**

Conecta tu dispositivo a tu PC mediante conexión USB. Entra en el modo bootloader reiniciando el dispositivo rápidamente.

  1. Para **Wio Terminal**, consulta [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).
  2. Para **Seeeduino XIAO**, consulta [aquí](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#reset).

Debería aparecer una unidad USB llamada **`Arduino`** en tu PC. Ve a la ubicación de la unidad USB Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

- **PASO.2 Descargar el Firmware UF2 de ArduPy**

Descarga el firmware de ArduPy en forma de archivos UF2.

  1. Para [Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
  2. Para [Seeeduino XIAO](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

y guárdalo en tu unidad.

- **PASO.3 Flashear el Firmware de ArduPy al Dispositivo**

Una vez descargado el firmware para tu dispositivo. Arrastra los archivos `.UF2` a la unidad USB `ARDUINO`. Ahora, tu placa desaparecerá de la PC. ¡Reinicia la placa y habrá cargado el firmware de ArduPy en ella!

- **PASO.4 Hacer parpadear el dispositivo**

Ahora, aparecerá una unidad USB llamada **`ARDUPY`** en tu PC. Abre `ARDUPY` y verás un archivo python `main.py`. Abre el `main.py` con tu editor favorito como [Microsoft Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) y etc. Copia el siguiente código y guarda el `main.py`.

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

¡Ahora deberías ver que el LED integrado de tu dispositivo comienza a parpadear! ¡Consulta las secciones siguientes para descubrir más sobre ArduPy! ¡Aprenderás sobre la herramienta `ArduPy-aip` y cómo usar `aip` para compilar y flashear tu propio firmware a los dispositivos!

## Instalar `aip` con macOS

Para usuarios de macOS, puedes simplemente ejecutar lo siguiente en Terminal para instalar ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Nota:** asegúrate de tener **Python 3** instalado en macOS. Para instalar Python 3, puedes usar [**Homebrew**](https://brew.sh/) que es un gestor de paquetes de software para macOS. Una vez instalado Homebrew, ejecuta lo siguiente para instalar python 3: **`brew install python3`**. También puedes descargar e instalar [Python 3 desde el sitio web oficial de Python](https://www.python.org/downloads/mac-osx/).


## Instalar `aip` con Windows

Puedes descargar las últimas versiones de ArduPy para windows en la sección de abajo. Una vez descargado, extrae el binario `aip` en un directorio que esté en tu `PATH`.

- [**Para Windows 64 Bit**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

O si tienes un entorno de **Python 3**, también puedes instalar usando `pip3`:

```sh
pip3 install ardupy-aip
```

## Instalar `aip` con Linux

Para usuarios de Linux, puedes simplemente ejecutar lo siguiente en Terminal para instalar ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Nota:** asegúrate de tener **Python 3** instalado y que `pip3` esté actualizado.

## ArduPy-aip CLI

`aip` es una interfaz de línea de comandos para ArduPy, puedes usar aip para instalar bibliotecas de ArduPy, compilar y flashear firmware de ArduPy al hardware con facilidad. Simplemente usa `help` para obtener más información:

```sh
aip help
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- Para obtener información de la placa (información del firmware):

```sh
aip board
```

- Para instalar bibliotecas de Arduino vinculadas con ArduPy:

Por favor, consulta aquí las [**bibliotecas ArduPy**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=) disponibles.

```sh
aip install <ArduPy Library Path> 
# Example Usage: 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- Para desinstalar librerías de ArduPy:

```sh
aip uninstall <ArduPy Library Path> 
# Example Usage: 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- Para listar las librerías ArduPy instaladas

```sh
aip list
```

- Para construir el Firmware de ArduPy que contiene las librerías que instalaste y las características básicas de ArduPy. Ten en cuenta que ahora puedes elegir construir para [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) o [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) ahora!

```sh
aip build --board=<board>
# For Seeeduino XIAO:
# aip build --board=xiao
# For Wio Terminal:
# aip build --board=wio_terminal
```


- Para flashear el Firmware ArduPy en el hardware:

```sh
aip flash
```

!!!Nota
        Después de los comandos, usa las banderas `-h` para ver más uso de ese comando. Por ejemplo, `aip flash -h`.

- Para interactuar con la placa (explorador de archivos basado en shell):

```sh
aip shell
```

**Nota:** Una vez que ingreses al ardupy-mpfshell, puedes usar `help` para obtener más información y comandos.

- Ingresando al modo **REPL**:

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- Para ejecutar archivo Python:

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- Para cargar archivos en la placa usando shell:

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### Ejecutando tu Primer Script

Una vez flasheado el firmware ArduPy, debería aparecer una unidad USB llamada **`ARDUPY`** en tu PC. Puedes crear los siguientes archivos Python para comenzar.

- **`boot.py`**

Para ejecutar un script de MicroPython desde el arranque, simplemente nombra tu proyecto **`boot.py`** en la ubicación raíz de la placa. **Este script se ejecuta cuando el dispositivo arranca.**

- **`main.py`**

Este es el script python por defecto, pero no se ejecuta en el arranque. El `main.py` se ejecuta cuando se guardan cambios en `main.py`. Es decir, puede recargarse automáticamente.

### Uso bajo ardupy-mpfshell

Una vez dentro de ardupy-mpfshell, usa `help` para verificar el uso de comandos. Aquí se listan algunos comandos útiles:

- Para listar archivos en los dispositivos:

```sh
ls
```

- Para eliminar un archivo (o un directorio) en el dispositivo:

```sh
rm <File/Directory>
```

- Para subir por ejemplo el archivo local `boot.py` al dispositivo:

```sh
put <YourPythonFilePath> [Path]
```

- Para ejecutar los archivos, es decir, `test.py` en el dispositivo:

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## Ejemplo de Uso de aip para Incluir Otras Librerías de ArduPy

`aip` es una de las características clave de ArduPy, que puede ser utilizada para convertir Librerías de Arduino a Interfaz de Python para ser usada con ArduPy. Aquí proporcionamos un ejemplo de cómo incluir la librería ArduPy en el Firmware de ArduPy usando Wio Terminal:

1.Abre Terminal/Powershell, ejecuta lo siguiente para instalar las librerías de ardupy.

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2.Construye el firmware:

```sh
aip build --board=wio_terminal
```

**Nota:** El uso del firmware de flasheo aparecerá en la parte inferior de la compilación.

3.Flashea el firmware "**NUEVO**" en la placa **copiando el uso del final de la compilación**. Aquí aip buscará automáticamente la placa conectada a la PC y subirá el firmware. Si la placa no está conectada, aparecerá un error.

```sh
aip flash
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### Uso de Ejemplo de la Biblioteca

Una vez que la biblioteca esté incluida dentro del firmware de ArduPy y cargada en el dispositivo, puedes importar y usar el módulo de la siguiente manera:

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

>Reemplaza `/Users/ansonhe/Desktop` con tu ruta.

donde el `ur.py` es:

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

Para más referencia, consulte el [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor).

### FAQ

Para más referencia de aip, visite [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) para obtener más información.

---

## Tiempo y Retardo

- Importando el módulo time y retardando:

```py
import time

time.sleep(1)           # Delay for 1 second
time.sleep_ms(500)      # Delay for 500 milliseconds
time.sleep_us(500)      # Delay for 500 microseconds
```

- Usando contador de tiempo:

```py
import time

time.ticks_ms()          # milliseconds counter
start = time.ticks_us()  # microseconds counter
time.ticks_diff(time.tick_us(), start) # Measure the difference between counters
```

**Nota:** Puedes usar la tecla **`TAB`** para auto-sugerir y ver todas las funciones disponibles. Por ejemplo, después de escribir `time.`, presiona **`TAB`** para ver todas las funciones en time.

Para más referencia, por favor visita [MicroPython funciones relacionadas con time](https://docs.micropython.org/en/latest/library/utime.html).

## Pin y GPIO

### Diagrama de Pines para Seeeduino XIAO

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

### Diagrama de Pines para Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

Para referenciar GPIO en ArduPy, simplemente usa el mapa de pines físicos del dispositivo que estés usando. Por ejemplo, para Wio Terminal, el Pin 1 es 3.3V y el Pin 2 es 5V.

- Importando Pin y configurando GPIO:

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # Setting Pin 3 as a output pin
p3.on()                 # Setting Pin 3 to HIGH
p3.off()                # Setting Pin 3 to LOW

p3.value(1)             # Setting Pin 3 to HIGH using value method


p5 = Pin(5, Pin.IN)     # Setting Pin 5 as input pin
p5.value()              # Prints the value of the input pin

p3 = Pin(3, Pin.OUT, value=1) # Setting Pin 3 as output pin and HIGH in one line
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # Setting Pin 5 as input with pull-up resistors
```

## Mapa

Para facilitar el acceso a los periféricos de las placas, ArduPy ha mapeado los mismos métodos de llamada de Arduino:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # Setting builtin LED as output

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

## PWM (Modulación por Ancho de Pulso)

Para usar PWM, debes utilizar los canales PWM en el dispositivo. Por favor, consulta el mapa de pines del dispositivo e indica dónde están los canales PWM.

- Usando PWM:

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # Creating PWM Channel on Pin 13
pwm0.freq()             # Current frequency
pwm0.freq(1000)         # Sets the frequency to 1000Hz
pwm0.duty()             # Current duty cycle
pwm0.duty(200)          # Sets the duty cycle to 200
pwm0.deinit()           # Switch off PWM on the pin

pwm1 = PWM(Pin(16), freq=1000, duty=200) # PWM in one line
```

## ADC

Para usar ADC en el dispositivo, debes usar los pines analógicos. Por ejemplo, Pin 13(A0) en Wio Terminal.

**Nota: El canal ADC en Wio Terminal es de 10 bits(0-1023).**

- Usando ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # Crating ADC on Pin 13
adc.read()              # reading ADC value, 0 ~ 1023
```

## DAC

Para usar DAC en el dispositivo, debes usar los pines DAC o los pines PWM en la placa. Por ejemplo, Pin 11(DAC0) en Wio Terminal.

**Nota: El canal DAC en Wio Terminal es de 12 bits(0-4095).**

- Usando DAC:

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # Creating DAC on Pin 11
dac0.write(512)          # Writing value to DAC, 512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # Creating DAC on Pin 26 and using 10 bit resolution
dac1.write(1023)                    # Writing max output to DAC, 3.3V
```

**Nota:** Al usar DAC en pines PWM, la resolución en el canal será solo de 8 bits.

```py
# Using DAC om PWM Pins
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # Creating DAC on Pin 16
dac2.write(128)         # Writing value to DAC, 128/255*3.3 = 1.65V
```

## LCD

Para Wio Terminal, la pantalla TFT LCD se puede usar como se muestra a continuación. Para más referencias de LCD, por favor visita [**Referencia de API LCD de ArduPy**](https://wiki.seeedstudio.com/es/ArduPy-LCD/).


- Usando el módulo LCD:

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

Nota: Usa **`tab`** para ver las funciones disponibles.

---

## Primeros Pasos con el IDE

Como se mencionó anteriormente, puedes usar tu editor preferido para escribir tu programa de Python. Para ejecutar y probar el programa fácilmente, puedes simplemente editar el archivo `main.py` en la ubicación USB de `ARDUPY` (función de recarga automática). Aquí se demostrará otro ejemplo rápido usando **Wio Terminal**:

>Asegúrate de haber seguido los procedimientos anteriores antes de la siguiente sesión.

1.Abre `main.py` en la ubicación USB de `ARDUPY`.

2.Copia el siguiente código a `main.py` y guarda el archivo.

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# DRAW CIRCLE SEGMENTS
# x,y == coords of centre of circle
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = subtended angle
# r = radius
# colour = 16 bit colour value

def fillSegment(x, y, startAngle, subAngle, r, color):
    # Calculate first pair of coordinates for segment start
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # Draw colour blocks every inc degrees
    for i in range(startAngle, startAngle+subAngle, 1):
        # Calculate pair of coordinates for segment end
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # Copy segment end to segment start for next segment
        x1 = x2
        y1 = y2

def main():
    # Draw 4 pie chart segments
    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)
    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)
    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)
    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)
    time.sleep(1)
    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)

if __name__ == "__main__":
    while True:
        main()
```

3.¡Deberías ver que el Wio Terminal comienza a dibujar un gráfico circular en la pantalla instantáneamente!

La recarga automática puede ser muy útil cuando se prueba en programas pequeños.

## Soporte Técnico

Por favor envía cualquier problema técnico a nuestro [foro](https://forum.seeedstudio.com/)<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>
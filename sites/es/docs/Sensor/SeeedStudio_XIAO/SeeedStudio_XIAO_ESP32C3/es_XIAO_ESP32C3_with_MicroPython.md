---
description: Seeed Studio XIAO ESP32C3 con MicroPython
title: XIAO ESP32C3 con MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png
slug: /xiao_esp32c3_with_micropython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/xiao_esp32c3_with_micropython/
---

# **Seeed Studio XIAO ESP32C3 con MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una función parcial de compilación a código nativo. Proporciona un subconjunto de las funciones de Python 3.5, implementado para procesadores embebidos y sistemas con recursos limitados. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

## Instalación de MicroPython

#### Instalar Esptool

Si aún no has instalado esptool.py, puedes hacerlo usando pip en tu PC:

``` linux
pip install esptool
```

#### Descargar el firmware de MicroPython para XIAO ESP32C3

Necesitas descargar el archivo binario de firmware desde [micropython.org](https://micropython.org/download/ESP32_GENERIC_C3/)
Después de descargar el archivo bin correcto, navega a la carpeta y abre una terminal cmd allí.
En el momento del borrador final, la última versión del archivo bin es:

```
ESP32_GENERIC_C3-20230602-v1.23.0.bin
```

#### Conecta el XIAO ESP32C3 a tu PC

Debes mantener presionado el botón BOOT en tu placa XIAO ESP32C3 para entrar en modo 'bootloader' mientras la conectas con el cable USB tipo C a tu PC.

#### Comprobar el puerto

Averigua todos los dispositivos serie en tu PC.

- Linux

En Linux, puedes usar el comando *dmesg* para ver los dispositivos conectados:

```Linux
dmesg | grep tty
```

Como alternativa, puedes listar los dispositivos serie usando *ls*:

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

En Windows, puedes comprobar los puertos serie a través del Administrador de dispositivos. Busca la sección “Ports (COM & LPT)” para ver los puertos serie disponibles. También puedes usar el comando mode en el Símbolo del sistema para listar los puertos serie:

```
mode
```

- macOS

En macOS, puedes listar los puertos serie disponibles usando el comando *ls*:

```
ls /dev/cu*
```

Esto mostrará todos los dispositivos de puerto serie.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
Si el puerto está ocupado, puedes usar el siguiente comando para encontrar y matar procesos que estén usando el puerto (en macOS):
Identifica los procesos que usan el puerto:

```
lsof | grep port
```

Este comando lista los archivos abiertos y busca cualquier proceso que use el puerto especificado.
Encuentra el ID de proceso (PID) en la salida y mata el proceso:

```
kill -9 <PID>
```

Sustituye *PID* por el ID de proceso real que encontraste.
:::

#### Borrar la flash

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

Sustituye '/dev/cu.usbmodem11301' por el nombre de puerto correcto de tu sistema (por ejemplo, `COM3` en Windows, `/dev/ttyUSB0` en Linux).
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/2.png" /></div>

#### Escribir la flash

Flashea el firmware en el XIAO ESP32C3:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_C3-20240602-v1.23.0.bin
```

De nuevo, sustituye '/dev/cu.usbmodem11301' por el nombre de puerto correcto, y 'ESP32_GENERIC_C3-20240602-v1.23.0.bin' por la ruta a tu archivo de firmware en blanco.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/3.png" /></div>
Luego puedes empezar a compilar scripts usando tu herramienta preferida para el ESP32.

## Editores recomendados para MicroPython

Algunas de las herramientas populares se enumeran a continuación.

- [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
- [Arduino for micropython](https://docs.arduino.cc/micropython/)
- [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
- [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)

### 1. Thonny

Instala y abre Thonny, luego configúralo siguiendo las instrucciones:

```
pip install thonny
#open thonny after installation
thonny
```

Ve a Run-->Configure Interpreter, y asegúrate de que la pestaña Interpreter en las opciones de Thonny se vea como se muestra a continuación, selecciona "CircuitPython (generic)" y el puerto:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

Haz clic en "OK" en el cuadro de diálogo y deberías ver el shell de Micropython en la parte inferior de la ventana de Thonny como se muestra en la figura siguiente.
Introduce el script línea por línea en el Shell para obtener el tamaño de la flash y de la SRAM:

```python
import gc
gc.mem_free()

import esp
esp.flash_size()
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

¡Enhorabuena por haber configurado MicroPython correctamente en tu XIAO ESP32C3 con Thonny!

### 2. Arduino Lab for MicroPython

Descarga Arduino Lab for MicroPython y conecta el dispositivo a tu PC.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

Programa de esta forma:

```python
from machine import Pin
import time

# Define the LED pin
led = Pin(7, Pin.OUT)  # Use the correct GPIO number instead of D10

# Blink the LED in a loop
while True:
    led.value(1)   # Turn the LED on
    time.sleep(1)  # Wait for a second
    led.value(0)   # Turn the LED off
    time.sleep(1)  # Wait for a second
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/9.png" /></div>

### 3. Pymakr en Visual Studio Code

- Instalar Pymakr
Sigue las [instrucciones de instalación](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/) para instalar Pymakr.

- Conecta tu XIAO ESP32C3 a tu ordenador.
- Crea un nuevo proyecto
Abre VS Code y crea un nuevo proyecto para tu microcontrolador.
- Añade un nuevo archivo de Python
Crea un nuevo archivo de Python dentro de tu proyecto.
- Sube el script al MCU y compila el script

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPtCraft IDE

- [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)

- [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
- [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## Información de pinout/puertos

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/11.png" /></div>

- Para más información, consulta la [descripción general del hardware](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#hardware-overview)
- [Esquemático de Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## Primeros pasos con MicroPython en el XIAO ESP32C3

Aquí tienes [una referencia rápida para el funcionamiento del ESP32 con micropython](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython).
Para más información sobre [bibliotecas de micropython](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries).

### Control general de la placa

El REPL de MicroPython (*R*ead-*E*val-*P*rint-*L*oop) está en UART0 (GPIO1=TX, GPIO3=RX) a una velocidad en baudios de 115200. La autocompletación con tabulador es útil para averiguar qué métodos tiene un objeto. El modo de pegado (ctrl-E) es útil para pegar un gran bloque de código Python en el REPL.
Puedes usar la función *dir()* en MicroPython (similar a Python) para listar los atributos y métodos de un objeto.
Por ejemplo, introduce *dir(machine)* en el shell:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/12.png" /></div>

El módulo *machine*:

```python
import machine
machine.freq()          # get the current frequency of the CPU, for esp32c3 is 160000000
machine.freq(160000000) # set the CPU frequency to 160 MHz
```

El módulo *esp*:

```python
import esp

esp.osdebug(None)       # turn off vendor O/S debugging messages
esp.osdebug(0)          # redirect vendor O/S debugging messages to UART(0)

# low level methods to interact with flash storage
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

El módulo *esp32*:
ESP32C3, ESP32S2 y ESP32S3 tienen un sensor de temperatura interno disponible y devuelven la temperatura en grados Celsius:

```python
import esp32
esp32.mcu_temperature() # read the internal temperature of the MCU, in Celsius
```

### Red-WLAN

El módulo *Network*:
Para más información, consulta [aquí](https://docs.micropython.org/en/latest/library/network.WLAN.html).

```python
import network

wlan = network.WLAN(network.STA_IF) # create station interface
wlan.active(True)       # activate the interface
wlan.scan()             # scan for access points
wlan.isconnected()      # check if the station is connected to an AP
wlan.connect('ssid', 'key') # connect to an AP
wlan.config('mac')      # get the interface's MAC address
wlan.ifconfig()  # get the interface's IPv4 addresses

ap = network.WLAN(network.AP_IF) # create access-point interface
ap.config(ssid='ESP-AP') # set the SSID of the access point
ap.config(max_clients=10) # set how many clients can connect to the network
ap.active(True)         # activate the interface

```

Una función útil para conectarse a tu red WiFi local es:

```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('ssid', 'key') #replace the ssid and key
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())

```

### Retardo y temporización

El módulo *time*:

```python
import time

time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### Temporizadores

El puerto ESP32 tiene cuatro temporizadores de hardware. Utiliza la [clase](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer) con un ID de temporizador de 0 a 3 (inclusive):

```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```

El periodo está en milisegundos.
Los temporizadores virtuales no son compatibles actualmente en este puerto.

### Pines y GPIO

La clase *machine.Pin*:

```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # create output pin on GPIO2
p2.on()                 # set pin to "on" (high) level
p2.off()                # set pin to "off" (low) level
p2.value(1)             # set pin to on/high

p3 = Pin(3, Pin.IN)     # create input pin on GPIO3
print(p3.value())       # get value, 0 or 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # enable internal pull-up resistor
p5 = Pin(5, Pin.OUT, value=1) # set pin high on creation
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # set maximum drive strength
```

Los pines disponibles están dentro de los siguientes rangos (inclusive): 2,3,4,5,6,7,8,9,10,20,21. Estos corresponden a los números reales de pines GPIO del chip ESP32C3.

### UART(bus serie)

La clase *machine.UART*:

```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # write 5 bytes
uart1.read(5)         # read up to 5 bytes
```

El ESP32C3 tiene un UART de hardware. Los pines se enumeran a continuación:

| UART | Pin |
|------|-----|
| TX   | 21  |
| RX   | 20  |

### PWM(modulación por ancho de pulso)

PWM se puede habilitar en todos los pines habilitados para salida. La frecuencia base puede ir de 1Hz a 40MHz pero hay una compensación; a medida que aumenta la frecuencia base, disminuye la resolución del ciclo de trabajo.
La clase *machine.PWM*:

```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # create PWM object from a pin
freq = pwm2.freq()         # get current frequency
pwm2.freq(1000)            # set PWM frequency from 1Hz to 40MHz

duty = pwm2.duty()         # get current duty cycle, range 0-1023 (default 512, 50%)
pwm2.duty(256)             # set duty cycle from 0 to 1023 as a ratio duty/1023, (now 25%)

duty_u16 = pwm2.duty_u16() # get current duty cycle, range 0-65535
pwm2.duty_u16(2**16*3//4)  # set duty cycle from 0 to 65535 as a ratio duty_u16/65535, (now 75%)

duty_ns = pwm2.duty_ns()   # get current pulse width in ns
pwm2.duty_ns(250_000)      # set pulse width in nanoseconds from 0 to 1_000_000_000/freq, (now 25%)

pwm2.deinit()              # turn off PWM on the pin

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # create and configure in one go
print(pwm3)                               # view PWM settings
```

Los chips ESP tienen diferentes periféricos de hardware:

| Especificación de hardware                         | ESP32C3 | ESP32 |
|------------------------------------------------|----------|-------|
| Número de grupos (modos de velocidad)                 | 1        | 2     |
| Número de temporizadores por grupo                      | 4        | 4     |
| Número de canales por grupo                    | 6        | 8     |
| Diferentes frecuencias PWM (grupos * temporizadores)     | 4        | 8     |
| Total de canales PWM (Pines, ciclos de trabajo) (grupos * canales) | 6        | 16    |

### ADC(conversión analógica a digital)

En XIAO ESP32C3, la funcionalidad ADC está disponible en los pines 2,3,4.
:::note
A3(GP105) - Usa ADC2, que puede quedar inoperativo debido a señales de muestreo falsas. Para lecturas analógicas, utiliza ADC1(A0/A1/A2) en su lugar. Consulta la hoja de datos de XIAO ESP32C3.
:::
La clase *machine.ADC*:

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
val = adc.read_u16()  # read a raw analog value in the range 0-65535
val = adc.read_uv()   # read an analog value in microvolts
```

### SPI

#### Bus SPI por software

SPI por software (usando bit-banging) funciona en todos los pines y se accede a través de la clase *machine.SoftSPI*:

```python
from machine import Pin, SoftSPI

# construct a SoftSPI bus on the given pins
# polarity is the idle state of SCK
# phase=0 means sample on the first edge of SCK, phase=1 means the second
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # set the baudrate

spi.read(10)            # read 10 bytes on MISO
spi.read(10, 0xff)      # read 10 bytes while outputting 0xff on MOSI

buf = bytearray(50)     # create a buffer
spi.readinto(buf)       # read into the given buffer (reads 50 bytes in this case)
spi.readinto(buf, 0xff) # read into the given buffer and output 0xff on MOSI

spi.write(b'12345')     # write 5 bytes on MOSI

buf = bytearray(4)      # create a buffer
spi.write_readinto(b'1234', buf) # write to MOSI and read from MISO into the buffer
spi.write_readinto(buf, buf) # write buf to MOSI and read MISO back into buf
```

#### Bus SPI por hardware

Se accede al SPI por hardware a través de la clase machine.SPI y tiene los mismos métodos que el SPI por software anterior:

```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(8), mosi=Pin(10), miso=Pin(9))
```

| SPI  | Pin |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

#### Bus I2C por software

I2C por software (usando bit-banging) funciona en todos los pines capaces de salida y se accede a través de la clase *machine.SoftI2C*:

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(7), sda=Pin(6), freq=100000)

i2c.scan()              # scan for devices

i2c.readfrom(0x3a, 4)   # read 4 bytes from device with address 0x3a
i2c.writeto(0x3a, '12') # write '12' to device with address 0x3a

buf = bytearray(10)     # create a buffer with 10 bytes
i2c.writeto(0x3a, buf)  # write the given buffer to the peripheral
```

#### Bus I2C por hardware

Se accede al controlador a través de la clase *machine.I2C* y tiene los mismos métodos que el I2C por software anterior:

```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(7), sda=Pin(6), freq=400000)
```

| I2C  | GPIO | Pin |
|------|------|-----|
| SCL  | GPIO7 | D5  |
| SDA  | GPIO6 | D4  |

### Expension Board Base para XIAO

*Requisitos previos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> con header soldado</th>
      <th>Expension Board Base para XIAO</th>
      <th>Sensor de luz Grove</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### Leer los datos del sensor de luz

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
from machine import Pin, ADC

# Initialize the analog input on pin 2 (corresponds to A0)
analog_in = ADC(Pin(2))
analog_in.atten(ADC.ATTN_11DB)  # Configure the input range (0-3.6V)

def get_voltage(pin):
    # Convert the raw ADC value to voltage
    return (pin.read() / 4095) * 3.3

while True:
    # Read the raw analog value
    raw_value = analog_in.read()
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)

    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))

    # Delay for a short period of time before reading again
    time.sleep(1)

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/14.png" /></div>

#### Encender la pantalla OLED

Conecta tu XIAO ESP32C3, abre Thonny y haz clic en la parte inferior derecha para configurar el intérprete
Selecciona intérprete - Micropython (ESP32) y **Port >>> haz clic en OK**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/15.png" /></div>

Si todo va bien, verás la salida en la consola
Instala las [bibliotecas](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_MicroPython/#install-required-libraries) requeridas
Haz clic en "Tools" >>> haz clic en "Management Packages" >>> introduce el nombre de la biblioteca >>> haz clic en "Search micropython-lib and PyPl"
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/16.png" /></div>

Ejecuta el script y flashea en la placa.
Después de terminar de programar, haz clic en el botón verde para ejecutar el script.

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# Pin assignment
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # Clear the screen
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # Show the text
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/17.png" /></div>

Gracias por leer este artículo. No dudes en compartir tus ideas en los comentarios.

## Recursos

- [El archivo binario de firmware](https://micropython.org/download/ESP32_GENERIC_C3/) para XIAO ESP32C3 con MicroPython

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

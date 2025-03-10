---
description: Seeed Studio XIAO ESP32S3 with MicroPython
title: XIAO ESP32S3 con MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png
slug: /es/xiao_esp32s3_with_micropython
last_update:
  date: 02/12/2025
  author: Guillermo
---

# **XIAO ESP32S3 de Seeed Studio con MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una característica de compilación de código nativo parcial. Ofrece un subconjunto de las características de Python 3.5, implementado para procesadores embebidos y sistemas con limitaciones. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).


## Instalando MicroPython

#### Instalar Esptool
Si aún no has instalado esptool.py, puedes hacerlo utilizando pip en tu PC:
```linux
pip install esptool
```

#### Descargar el firmware de MicroPython para XIAO ESP32S3
Necesitas descargar el archivo binario del firmware desde [micropython.org](https://micropython.org/download/ESP32_GENERIC_S3/).
Después de descargar el archivo binario correcto, navega a la carpeta y abre una terminal cmd en esa ubicación.
Hasta la fecha final, la última versión del archivo binario es:
```
ESP32_GENERIC_S3-20230602-v1.23.0.bin
```

#### Conectar el XIAO ESP32S3 a tu PC
Debes presionar y mantener presionado el botón BOOT en tu placa XIAO ESP32S3 para ingresar al modo 'bootloader' mientras conectas el cable USB tipo C a tu PC.

#### Verificar el puerto
Descubre todos los dispositivos seriales en tu PC.

* Linux 

OEn Linux, puedes usar el comando *dmesg* para ver los dispositivos conectados:
```Linux
dmesg | grep tty
```
Alternativamente, puedes listar los dispositivos seriales usando *ls*:
```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

En Windows, puedes localizar la dirección del puerto USB a serial abriendo el administrador de dispositivos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

* macOS

En macOS, puedes listar los puertos seriales disponibles utilizando el comando *ls*:
```
ls /dev/cu*
```
Esto mostrará todos los dispositivos de puertos seriales.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::Tip
Si el puerto está ocupado, puedes usar el siguiente comando para encontrar y matar los procesos que están utilizando el puerto (en macOS):
Identificar los procesos que utilizan el puerto:
```
lsof | grep port
```
Este comando lista los archivos abiertos y busca cualquier proceso que esté utilizando el puerto especificado.  
Encuentra el ID del proceso (PID) en la salida y mata el proceso:
```
kill -9 <PID>
```
Reemplaza *PID* con el ID de proceso real encontrado.

#### Borrar flash
```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 erase_flash
```
Reemplaza '/dev/cu.usbmodem11301' con el nombre correcto del puerto de tu sistema (por ejemplo, `COM3` en Windows, `/dev/ttyUSB0` en Linux).


#### Escribir el firmware
Flashea el firmware en el XIAO ESP32S3:
```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_S3-20240602-v1.23.0.bin
```
Nuevamente, reemplaza '/dev/cu.usbmodem11301' con el nombre correcto del puerto, y 'ESP32_GENERIC_S3-20240602-v1.23.0.bin' con la ruta a tu archivo de firmware en blanco. No olvides hacer un reinicio completo a través del pin RTS. Luego, puedes comenzar a compilar el script usando la herramienta de tu preferencia para ESP32.

## Editores recomendados para MicroPython

* [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
* [Arduino para MicroPython](https://docs.arduino.cc/micropython/)
* [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
* [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
  
### 1. Thonny  
Instala y abre Thonny, luego configúralo siguiendo estas instrucciones:  
```
pip install thonny
# Abre Thonny después de la instalación
thonny
```  
Ve a **Ejecutar --> Configurar intérprete** y asegúrate de que la pestaña **Intérprete** en las opciones de Thonny se vea como en la imagen siguiente. Selecciona **"CircuitPython (generic)"** y el puerto correspondiente:  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>  

Haz clic en **"OK"** en el diálogo y deberías ver la consola de MicroPython en la parte inferior de la ventana de Thonny, como se muestra en la imagen siguiente.  

Ingresa el script línea por línea en la Shell para obtener el tamaño de la memoria flash y SRAM:

```python
import esp
esp.flash_size()
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/4.png" /></div>

¡Felicidades por haber configurado exitosamente MicroPython en tu XIAO ESP32C3 con Thonny!

### 2. Laboratorio de Arduino para MicroPython  
Descarga el laboratorio de Arduino para MicroPython y conecta el dispositivo a tu PC.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

Código como este:
```python
from machine import Pin
import time

# Define el pin del LED
led = Pin(7, Pin.OUT)  # Usa el número GPIO correcto en lugar de D10

# Parpadea el LED en un bucle
while True:
    led.value(1)   # Enciende el LED
    time.sleep(1)  # Espera un segundo
    led.value(0)   # Apaga el LED
    time.sleep(1)  # Espera un segundo
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/7.png" /></div>

### 3. Pymakr en Visual Studio Code  
* Instalar Pymakr  
Sigue las [instrucciones de instalación](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/) para instalar Pymakr.
* Conectar tu XIAO ESP32C3 a tu computadora.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/8.png" /></div>

* Conectar tu XIAO ESP32C3 a tu computadora.
* Crear un nuevo proyecto  
Abre VS Code y crea un nuevo proyecto para tu microcontrolador.
* Agregar un nuevo archivo Python 
Crea un nuevo archivo Python dentro de tu proyecto.
* Subir el script al MCU y compilar el script  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPtCraft IDE
* [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)
* [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
* [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## Información de Pines/Puertos 
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/10.png" /></div>

* Para más información, consulta la [visión general del hardware](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#hardware-overview)
* [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

## Empezando con MicroPython en el XIAO ESP32S3

Aquí tienes [una referencia rápida para la operación del ESP32 con micropython](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython).
Para más información sobre las [bibliotecas de micropython](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries).

### Control general de la placa
El REPL de MicroPython (*R*ead-*E*val-*P*rint-*L*oop) está en UART0 (GPIO1=TX, GPIO3=RX) con una velocidad de baudios de 115200. La opción de autocompletar con la tecla de tabulación es útil para descubrir qué métodos tiene un objeto. El modo de pegado (ctrl-E) es útil para pegar un bloque grande de código Python en el REPL.

Puedes usar la función *dir()* en MicroPython (similar a Python) para listar los atributos y métodos de un objeto.  
Por ejemplo, ingresa *dir(machine)* en la consola:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/11.png" /></div>

Uso del modulo *machine*:
```python
import machine
machine.freq()          # obtener la frecuencia actual del CPU, para el esp32c3 es 160000000
machine.freq(160000000) # establecer la frecuencia de la CPU a 160 MHz
```

El módulo *esp*:
```python
import esp

esp.osdebug(None)       # desactivar los mensajes de depuración del sistema operativo del proveedor
esp.osdebug(0)          # redirigir los mensajes de depuración del sistema operativo del proveedor al UART(0)

# métodos de bajo nivel para interactuar con el almacenamiento flash
esp.flash_size()         # obtener el tamaño del flash
esp.flash_user_start()   # obtener el inicio del área de usuario en el flash
esp.flash_erase(sector_no)  # borrar un sector del flash
esp.flash_write(byte_offset, buffer)  # escribir en el flash
esp.flash_read(byte_offset, buffer)   # leer del flash
```

El módulo *esp32*:
El ESP32C3, ESP32S2 y ESP32S3 tienen un sensor de temperatura interno disponible que devuelve la temperatura en grados Celsius:
```python
import esp32
esp32.mcu_temperature()  # leer la temperatura interna del MCU, en Celsius
```

### Red-WLAN
El módulo *Network*:

Más información en [aquí](https://docs.micropython.org/en/latest/library/network.WLAN.html).

```python
import network

wlan = network.WLAN(network.STA_IF) # crear la interfaz de estación
wlan.active(True)       # activar la interfaz
wlan.scan()             # escanear puntos de acceso
wlan.isconnected()      # verificar si la estación está conectada a un punto de acceso
wlan.connect('ssid', 'key') # conectarse a un punto de acceso
wlan.config('mac')      # obtener la dirección MAC de la interfaz
wlan.ifconfig()         # obtener las direcciones IPv4 de la interfaz

ap = network.WLAN(network.AP_IF) # crear la interfaz de punto de acceso
ap.config(ssid='ESP-AP') # configurar el SSID del punto de acceso
ap.config(max_clients=10) # establecer cuántos clientes pueden conectarse a la red
ap.active(True)         # activar la interfaz
```

Una función útil para conectarse a tu red WiFi local es:

```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('conectando a la red...')
        wlan.connect('ssid', 'key') #reemplaza ssid y clave
        while not wlan.isconnected():
            pass
    print('configuración de red:', wlan.ifconfig())
```

### Retardos y temporización

El módulo *time*:

```python
import time

time.sleep(1)           # dormir durante 1 segundo
time.sleep_ms(500)      # dormir durante 500 milisegundos
time.sleep_us(10)       # dormir durante 10 microsegundos
start = time.ticks_ms() # obtener el contador de milisegundos
delta = time.ticks_diff(time.ticks_ms(), start) # calcular la diferencia de tiempo
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
El período está en milisegundos.

Los temporizadores virtuales no son compatibles actualmente en este puerto.

### Pines y GPIOs

La clase *machine.Pin*:

```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # crear un pin de salida en GPIO2
p2.on()                 # establecer el pin en "encendido" (alto)
p2.off()                # establecer el pin en "apagado" (bajo)
p2.value(1)             # establecer el pin en alto/encendido

p3 = Pin(3, Pin.IN)     # crear un pin de entrada en GPIO3
print(p3.value())       # obtener el valor, 0 o 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # habilitar la resistencia interna de pull-up
p5 = Pin(5, Pin.OUT, value=1) # establecer el pin en alto al crearlo
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # establecer la máxima fuerza de conducción
```

Los pines disponibles son de los siguientes rangos (inclusive): 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 21. Estos corresponden a los números reales de los pines GPIO del chip ESP32C3.


### UART (bus serie)

La clase *machine.UART*:

```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # escribir 5 bytes
uart1.read(5)         # leer hasta 5 bytes
```

El ESP32S3 tiene un UART de hardware. Los pines disponibles para el UART son los siguientes:

| UART | Pin |
|------|-----|
| TX   | 43  |
| RX   | 44  |

### PWM (Modulación por ancho de pulso)

PWM se puede habilitar en todos los pines habilitados para salida. La frecuencia base puede variar de 1 Hz a 40 MHz, pero hay una compensación; a medida que aumenta la frecuencia base, la resolución del ciclo de trabajo disminuye.

La clase *machine.PWM*:

```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # crear objeto PWM a partir de un pin
freq = pwm2.freq()         # obtener la frecuencia actual
pwm2.freq(1000)            # establecer la frecuencia PWM entre 1Hz y 40MHz

duty = pwm2.duty()         # obtener el ciclo de trabajo actual, rango 0-1023 (predeterminado 512, 50%)
pwm2.duty(256)             # establecer el ciclo de trabajo de 0 a 1023 como una relación duty/1023 (ahora 25%)

duty_u16 = pwm2.duty_u16() # obtener el ciclo de trabajo actual, rango 0-65535
pwm2.duty_u16(2**16*3//4)  # establecer el ciclo de trabajo de 0 a 65535 como una relación duty_u16/65535 (ahora 75%)

duty_ns = pwm2.duty_ns()   # obtener el ancho del pulso actual en ns
pwm2.duty_ns(250_000)      # establecer el ancho del pulso en nanosegundos entre 0 y 1_000_000_000/freq (ahora 25%)

pwm2.deinit()              # apagar PWM en el pin

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # crear y configurar en un solo paso
print(pwm3)                               # ver la configuración del PWM
```
### ADC (Conversión de Analógico a Digital)

En el XIAO ESP32S3, la funcionalidad ADC está disponible La clase *machine.ADC*:
```python
from machine import ADC

adc = ADC(pin)        # crea un objeto ADC que actúa sobre un pin
val = adc.read_u16()  # lee un valor analógico sin procesar en el rango de 0 a 65535
val = adc.read_uv()   # lee un valor analógico en microvoltios
```

### SPI

#### Bus SPI por software

SPI por software (utilizando "bit-banging") funciona en todos los pines y se accede a través de la clase *machine.SoftSPI*:
```python
from machine import Pin, SoftSPI

# construir un bus SoftSPI en los pines dados
# la polaridad es el estado inactivo de SCK
# phase=0 significa muestrear en el primer flanco de SCK, phase=1 significa en el segundo
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # establecer la velocidad de baudios

spi.read(10)            # leer 10 bytes en MISO
spi.read(10, 0xff)      # leer 10 bytes mientras se envía 0xff en MOSI

buf = bytearray(50)     # crear un buffer
spi.readinto(buf)       # leer en el buffer dado (lee 50 bytes en este caso)
spi.readinto(buf, 0xff) # leer en el buffer dado y enviar 0xff en MOSI

spi.write(b'12345')     # escribir 5 bytes en MOSI

buf = bytearray(4)      # crear un buffer
spi.write_readinto(b'1234', buf) # escribir en MOSI y leer desde MISO en el buffer
spi.write_readinto(buf, buf) # escribir buf en MOSI y leer MISO de vuelta en buf
```

#### Bus SPI por hardware

El bus SPI por hardware se accede a través de la clase *machine.SPI* y tiene los mismos métodos que el SPI por software mencionado anteriormente:

```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(7), mosi=Pin(9), miso=Pin(8))
```
| SPI  | Pin |
|------|-----|
| SCK  | D7  |
| MOSI | D9 |
| MISO | D8  |


### I2C

#### Bus I2C por software

El bus I2C por software (utilizando bit-banging) funciona en todos los pines capaces de salida y se accede a través de la clase *machine.SoftI2C*:
```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(6), sda=Pin(5), freq=100000)  # crear un bus I2C en los pines SCL y SDA con frecuencia de 100 kHz

i2c.scan()              # escanear dispositivos conectados al bus I2C

i2c.readfrom(0x3a, 4)   # leer 4 bytes del dispositivo con dirección 0x3a
i2c.writeto(0x3a, '12') # escribir '12' al dispositivo con dirección 0x3a

buf = bytearray(10)     # crear un búfer de 10 bytes
i2c.writeto(0x3a, buf)  # escribir el búfer dado al periférico
```

#### Bus I2C por hardware
El controlador se accede a través de la clase *machine.I2C* y tiene los mismos métodos que el bus I2C por software mencionado anteriormente:
```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(6), sda=Pin(5), freq=400000)
```

### Placa de expansión base para XIAO
*Requisitos previos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32S3<br /> con pines soldados</th>
      <th>Placa de Expansión para XIAO</th>
      <th>Sensor Grove Light</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html">
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

# Inicializar la entrada analógica en el pin 1 (corresponde a A0)
entrada_analogica = ADC(Pin(1))
entrada_analogica.atten(ADC.ATTN_11DB)  # Configurar el rango de entrada (0-3.6V)

def obtener_tension(pin):
    # Convertir el valor crudo del ADC a tensión
    return (pin.read() / 4095) * 3.3

while True:
    # Leer el valor analógico crudo
    valor_crudo = entrada_analogica.read()
    # Convertir el valor crudo a tensión
    tension = obtener_tension(entrada_analogica)
    
    # Imprimir el valor crudo y la tensión en la consola serial
    print("[Luz] Valor crudo: {:5d} Tensión: {:.2f}V".format(valor_crudo, tension))
    
    # Esperar un corto período de tiempo antes de leer nuevamente
    time.sleep(1)

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/13.png" /></div>

#### Encender la pantalla OLED
Conecta tu XIAO ESP32C3, abre Thonny y haz clic en la esquina inferior derecha para configurar el intérprete.
Selecciona el intérprete - Micropython (ESP32) y **Puerto >>> Haz clic en OK**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/14.png" /></div>

Si todo va bien, verás la salida en la terminal.
Instala las bibliotecas necesarias
Haz clic en "Herramientas" >>> Haz clic en "Gestión de paquetes" >>> Ingresa el nombre de la biblioteca >>> Haz clic en "Buscar micropython-lib y PyPl".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/15.png" /></div>

Ejecuta el script y flashea a la placa.
Después de terminar de programar, haz clic en el botón verde para ejecutar el script.

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# Asignación de pines
i2c = SoftI2C(scl=Pin(6), sda=Pin(5))  # Ajusta los números de los pines según tus conexiones
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # Limpiar la pantalla
oled.text("¡Hola, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # Mostrar el texto
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/17.png" /></div>

#### Prueba de transmisión de cámara

Se proporciona una prueba de transmisión de cámara también para el ESP32S3 Sense (con cámara). Por favor, consulta [aquí](https://wiki.seeedstudio.com/XIAO_ESP32S3_Micropython/#step-3-testing-the-streaming-example).

¡Gracias por leer este artículo! No dudes en compartir tus comentarios.

## Recursos
* [The firmware binary file](https://micropython.org/download/ESP32_GENERIC_S3/) for XIAO ESP32S3 with MicroPython


## Soporte Técnico y Discusión de Productos  

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

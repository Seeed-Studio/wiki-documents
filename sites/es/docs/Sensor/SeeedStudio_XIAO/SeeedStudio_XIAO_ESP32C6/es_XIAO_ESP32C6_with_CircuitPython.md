---
description: Seeed Studio XIAO ESP32C6 con CircuitPython
title: XIAO ESP32C6 con CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /es/xiao_esp32c6_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C6 con CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png" /></div>

¡Esta wiki presenta cómo instalar y ejecutar el CircuitPython oficial de Adafruit Industries en la placa de desarrollo Seeed Studio XIAO ESP32C6!
CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando CircuitPython

### Método 1: Línea de comandos esptool

#### Instalar Esptool

Si aún no has instalado esptool.py, puedes hacerlo usando pip en tu pc:

``` linux
pip install esptool
```

#### Descargar el firmware de ESP32C6 CircuitPython

Necesitas descargar el archivo binario del firmware desde [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c6/)
Después de descargar el archivo bin correcto, navega a la carpeta y abre una terminal cmd allí.
Al momento de la versión final, la versión más reciente del archivo bin es:

```
adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

#### Conecta el XIAO ESP32C6 a tu PC

Necesitas presionar y mantener presionado el botón BOOT en tu placa XIAO ESP32C6 para entrar al modo 'bootloader' mientras conectas el cable USB tipo C a tu pc.

#### Verificar puerto

Encuentra todos los dispositivos serie en tu pc.

- Linux

En Linux, puedes usar el comando *dmesg* para ver los dispositivos conectados:

```Linux
dmesg | grep tty
```

Alternativamente, puedes listar dispositivos serie usando *ls*:

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

En Windows, puedes verificar los puertos serie a través del Administrador de dispositivos. Busca la sección "Puertos (COM y LPT)" para ver los puertos serie disponibles. También puedes usar el comando mode en el Símbolo del sistema para listar los puertos serie:

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
Si el puerto está ocupado, puedes usar el siguiente comando para encontrar y terminar cualquier proceso que esté usando el puerto (en macOS):
Identificar procesos que usan el puerto:

```
lsof | grep port
```

Este comando lista archivos abiertos y busca cualquier proceso que use el puerto especificado.
Encuentra el ID del proceso (PID) de la salida y termina el proceso:

```
kill -9 <PID>
```

Reemplaza *PID* con el ID de proceso real encontrado.
:::

#### Borrar flash

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 erase_flash
```

Reemplaza '/dev/cu.usbmodem11301' con el nombre de puerto correcto de tu sistema (por ejemplo, `COM3` en Windows, `/dev/ttyUSB0` en Linux).

#### Escribir flash

Flashea el firmware en el XIAO ESP32C6:

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

Nuevamente, reemplaza '/dev/cu.usbmodem11301' con el nombre de puerto correcto, y 'adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin' con la ruta a tu archivo de firmware en blanco.
Hard resetting via RTS pin...

### Método 2: Web Serial esptool

La herramienta WebSerial ESPTool fue diseñada para ser una opción compatible con web para programar placas de microcontroladores de la familia ESP de Espressif que tienen un cargador de arranque ROM basado en serie. Te permite borrar el contenido del microcontrolador y programar hasta 4 archivos en diferentes desplazamientos. Por favor consulta [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool).

¡Entonces puedes comenzar a compilar scripts usando tu herramienta preferida para ESP32C6!

## Editores Recomendados para CircuitPython

Generalmente, cuando CircuitPython termina de instalarse, o conectas una placa CircuitPython a tu computadora con CircuitPython ya instalado, la placa aparece en tu computadora como una unidad USB llamada CIRCUITPY.
Sin embargo, los microcontroladores ESP32 / ESP32-C3 / ESP32-C6 que no soportan USB nativo no pueden presentar una unidad CIRCUITPY.
En estas placas, hay formas alternativas de transferir y editar archivos. Puedes usar [Thonny](https://thonny.org/), que utiliza comandos ocultos enviados al REPL para leer y escribir archivos. O puedes usar el [flujo de trabajo web de CircuitPython](https://code.circuitpython.org/), introducido en Circuitpython 8. El flujo de trabajo web proporciona acceso WiFi basado en navegador al sistema de archivos de CircuitPython, por favor consulta [comenzando con el flujo de trabajo web usando el editor de código](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny

Instala y abre thonny, luego configura Thonny siguiendo las instrucciones:

```
pip install thonny
#open thonny after installation
thonny
```

Ve a Run-->Configure Interpreter, y asegúrate de que la pestaña Interpreter en las opciones de Thonny se vea como se muestra a continuación, selecciona "CircuitPython (generic)" y puerto:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

haz clic en "OK" en el diálogo y deberías ver el shell de Micropython en la parte inferior de la ventana de thonny como se muestra en la figura a continuación.
Entonces puedes usar **L**eer-**E**valuar-**I**mprimir-**B**ucle, o REPL para conexión serial, que te permite ingresar líneas individuales de código y ejecutarlas inmediatamente en el shell. Es realmente útil si tienes problemas con un programa en particular y no puedes descubrir por qué. Es interactivo, así que es genial para probar nuevas ideas. Por favor consulta [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) para más información.

Interactuando con el REPL con *help()*, que te dice dónde empezar a explorar el REPL. Para ejecutar código en REPL, escríbelo junto al prompt de REPL.
Para listar los módulos integrados escribe *help("modules")* y aparecerá una lista de todos los módulos principales integrados en CircuitPython, incluyendo "*board*".
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/3.png" /></div>

Entonces puedes escribir "*import board*" en el REPL y presionar enter. A continuación, escribe "*dir(board)*" en el REPL y obtendrás una lista de todos los pines en tu placa.

```
#check pin using following command.For details on REPL, see Welcome to CircuitPython! 
#enter to the shell of Thonny.
>>> import board
>>> dir(board)
['__class__', '__name__', 'A0', 'A1', 'A2', 'A4', 'A5', 'A6', 'D0', 'D1', 'D10', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'I2C', 'LP_I2C_SCL', 'LP_I2C_SDA', 'LP_UART_RXD', 'LP_UART_TXD', 'MISO', 'MOSI', 'MTCK', 'MTDI', 'MTDO', 'MTMS', 'RX', 'SCK', 'SCL', 'SDA', 'SPI', 'TX', 'UART', '__dict__', 'board_id']
```

### 2. Flujo de Trabajo Web de CircuitPython

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>
[El Editor de Código de CircuitPython](https://code.circuitpython.org/) proporciona una experiencia más completa y enriquecedora al editar archivos en tu dispositivo basado en ESP32 que ejecuta la última versión de CircuitPython.
El editor te permite editar archivos usando Bluetooth web, USB y Flujo de Trabajo Web a través de WiFi.

## Información de Pines/Puertos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/5.png" /></div>

- Para más información, consulta la [descripción general del hardware](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#hardware-overview)
- [Esquemático del Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

## Comenzando con CircuitPython en el XIAO ESP32C6

### Red-WLAN

Para placas sin USB nativo (como ESP32-C6 o ESP32) necesitarás usar el REPL para conectarte al Wi-Fi. La función Wi-Fi se habilita cuando se añade un archivo llamado *settings.toml* a la carpeta raíz del sistema de archivos de CircuitPython.

#### Método 1: Crear archivo *setting.toml* a través de REPL

Crear archivo *settings.toml* a través de REPL:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- Reemplaza con el nombre de tu red wifi local *wifissid*
- Reemplaza con tu contraseña de wifi local *password*
- La otra contraseña, , se usa cuando accedes a la placa a través de un navegador web. Configúrala como desees *webpassword*

Una vez conectado, puedes presionar el botón **Reset** para activar el firmware, luego presiona return varias veces para llegar al prompt REPL. Luego reconecta el dispositivo a Thonny, la dirección IP de tu XIAO ESP32C6 aparecerá.

#### Método 2: Editar el archivo *setting.toml* a través de Archivos de Thonny

Abre Thonny-->Ver-->Archivos, y escribe la red wifi, contraseña y webpassword en el archivo setting.toml. Recuerda guardarlo y presionar el botón Reset para activar el firmware, y reabrir Thonny.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/6.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/7.png" /></div>
:::note
No olvides, ESP32 no soporta redes de 5 GHz, así que usa tu SSID de 2.4 GHz si tienes dos.
:::
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/8.png" /></div>

### Retraso y temporización

El módulo *time*:

```python
import time
dir(time)
time.sleep(1)           # sleep for 1 second
time.localtime()        # get local time
```

### Pines y GPIO

Puede usar el módulo "*board*" y "*microcontroller*" para controlar el gpio con el siguiente código y conectar un LED al D5:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/16.png" /></div>

```python
# using board module
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
    
# using microcontroller module
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO23)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/9.png" /></div>

### UART(bus serie)

Usando el módulo *busio*:

```python
import board
import busio

# initialise UART
uart = busio.UART(board.LP_UART_TXD, board.LP_UART_RXD, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

El XIAO ESP32C6 tiene un UART por hardware. Los pines se listan a continuación:

| UART       | Pin   | GPIO  |
|------------|-------|-------|
| LP_UART_TXD | A5    | GPIO5 |
| LP_UART_RXD | A4    | GPIO4 |

### PWM(modulación por ancho de pulso)

Usando el módulo *pwmio*:

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# initialise PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# a dimming led
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)
```

### ADC(conversión analógica a digital)

Usando el módulo *analogio*:

```python
import board
import analogio
import time

# initialise ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```

### SPI

```python
import board
import busio
import digitalio

# Initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
# Call try_lock (and later unlock) to ensure you are the only user of the SPI bus
spi.try_lock()

# Choose a chip select pin
cs = digitalio.DigitalInOut(board.D3)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True

# Make sure chip select is active (low) before communicating
cs.value = False

# Send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)

try:
    # Write and read data
    spi.write_readinto(data_out, data_in)
    print("Received:", data_in)
finally:
    # Ensure chip select is inactive (high) after communication
    cs.value = True
```

El XIAO ESP32C6 tiene un SPI por hardware. los pines se listan a continuación:

| SPI  | Pin |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### Placa de Expansión Base para XIAO

*Prerrequisitos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C6<br /> con header soldado</th>
      <th>Placa de Expansión Base para XIAO</th>
      <th>Sensor de luz Grove</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### Leer los datos del sensor de luz

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# Initialize the analog input on A0
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # Read the raw analog value
    raw_value = analog_in.value
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)
    
    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # Delay for a short period of time before reading again
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/11.png" /></div>

#### Encender la pantalla OLED

**Descargar y Extraer el Paquete de Librerías**:
- Ve a la [librería](https://circuitpython.org/libraries) y descarga el paquete de librerías para CircuitPython. Para instalar, descarga el paquete apropiado para tu versión de CircuitPython.

**Copiar Librerías a CIRCUITPY**:
- Extrae el archivo ZIP del paquete de librerías. Encontrarás una carpeta llamada lib con varios archivos *.mpy*.
- Abre Thonny-->View-->Files, y luego copia los archivos .mpy necesarios y la carpeta lib al dispositivo CircuitPython/lib.
Necesitarás instalar manualmente las librerías necesarias del paquete:
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy
  
**Copiar fond5x8.bin a CIRCUITPY**:
- Descarga el archivo font5x8.bin desde [aquí](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin).
- Abre Thonny-->View-->Files, y luego copia los archivos font5x8.bin al dispositivo CircuitPython.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/12.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/13.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/14.png" /></div>

**Crear Tu Código de CircuitPython**:
- Crea un archivo code.py (o main.py). Este archivo debe contener tu código de CircuitPython.

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA)

# Define the display parameters
oled_width = 128
oled_height = 64

# Initialize the OLED display
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# Fill the display with the color 0
oled.fill(0)
# Set the first pixel white
oled.pixel(0, 0, 1)
oled.show()
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/15.png" /></div>

## "Desinstalando" CircuitPython

Muchas de nuestras placas pueden usarse con múltiples lenguajes de programación. Por ejemplo, la Circuit Playground Express puede usarse con MakeCode, Code.org CS Discoveries, CircuitPython y Arduino. Es posible que quieras volver a Arduino o MakeCode. No hay nada que desinstalar. CircuitPython es "solo otro programa" que se carga en tu placa. Así que simplemente puedes cargar otro programa (Arduino o MakeCode) y sobrescribirá CircuitPython.

### Respalda tu Código

antes de reemplazar CircuitPython, no olvides hacer una copia de seguridad del código que tienes en la unidad CIRCUITPY. Eso significa tu *code.py* y cualquier otro archivo, la carpeta lib, etc. Puedes perder estos archivos cuando remuevas CircuitPython, ¡así que los respaldos son clave! Simplemente arrastra los archivos a una carpeta en tu laptop o computadora de escritorio como lo harías con cualquier unidad USB.

### Cambiando a Arduino

Si quieres usar Arduino en su lugar, simplemente usa el IDE de Arduino para cargar un programa de Arduino. Aquí hay un ejemplo de subir un programa simple "Blink" de Arduino, pero no tienes que usar este programa en particular.
Comienza conectando tu placa, y haciendo doble clic en reset hasta que obtengas el/los LED(s) integrado(s).

¡Gracias por leer este artículo! Siéntete libre de compartir tus pensamientos en los comentarios.

## Recursos

* [El archivo binario del firmware](https://circuitpython.org/board/seeed_xiao_esp32c6/) para XIAO ESP32C6 con CircuitPython
- [El paquete de bibliotecas para CircuitPython](https://circuitpython.org/libraries)

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

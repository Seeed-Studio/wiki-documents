---
description: Seeed Studio XIAO ESP32C3 con CircuitPython
title: XIAO ESP32C3 con CircuitPython
keywords:
  - xiao
  - esp32c3
  - circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/es/xiao_esp32c3_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C3 con CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

Este wiki presenta cómo instalar y ejecutar el CircuitPython oficial de Adafruit Industries en la placa de desarrollo Seeed Studio XIAO ESP32C3.
CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca, sin necesidad de descargas previas en el escritorio. Una vez que tengas tu placa configurada, abre cualquier editor de texto y empieza a editar código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalación de CircuitPython

### Método 1: Esptool por línea de comandos

#### Instalar Esptool

Si aún no has instalado esptool.py, puedes hacerlo usando pip en tu PC:

``` linux
pip install esptool
```

#### Descargar el firmware CircuitPython para XIAO ESP32C3

Necesitas descargar el archivo binario de firmware desde [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/)
Después de descargar el archivo bin correcto, navega a la carpeta y abre una terminal cmd allí.
En el momento del borrador final, la última versión del archivo bin es:

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### Conectar el XIAO ESP32C3 a tu PC

Debes mantener presionado el botón BOOT en tu placa XIAO ESP32C3 para entrar en modo 'bootloader' mientras la conectas con el cable USB tipo C a tu PC.

#### Comprobar el puerto

Averigua todos los dispositivos serie en tu PC.

- Linux

En Linux, puedes usar el comando *dmesg* para ver los dispositivos conectados:

```Linux
dmesg | grep tty
```

Alternativamente, puedes listar los dispositivos serie usando *ls*:

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

Este comando lista los archivos abiertos y busca cualquier proceso que esté usando el puerto especificado.
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

#### Escribir en la flash

Flashea el firmware en el XIAO ESP32C3:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

De nuevo, sustituye '/dev/cu.usbmodem11301' por el nombre de puerto correcto, y 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' por la ruta a tu archivo de firmware en blanco.
Reinicio forzado mediante el pin RTS...

### Método 2: Web Serial esptool

WebSerial ESPTool fue diseñado como una opción basada en la web para programar placas de microcontroladores de la familia Espressif ESP que tienen un bootloader ROM basado en serie. Te permite borrar el contenido del microcontrolador y programar hasta 4 archivos en diferentes offsets. Consulta [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool).

Luego puedes empezar a compilar scripts usando tu herramienta preferida para XIAO ESP32C3.

## Editores recomendados para CircuitPython

Generalmente, cuando CircuitPython termina de instalarse, o conectas una placa CircuitPython a tu ordenador con CircuitPython ya instalado, la placa aparece en tu ordenador como una unidad USB llamada CIRCUITPY.
Sin embargo, los microcontroladores ESP32 o ESP32-C3 que no admiten USB nativo no pueden presentar una unidad CIRCUITPY.
En estas placas, hay formas alternativas de transferir y editar archivos. Puedes usar [Thonny](https://thonny.org/), que utiliza comandos ocultos enviados al REPL para leer y escribir archivos. O puedes usar el [flujo de trabajo web de CircuitPython](https://code.circuitpython.org/), introducido en Circuitpython 8. El flujo de trabajo web proporciona acceso WiFi basado en navegador al sistema de archivos de CircuitPython, consulta [getting started with web workflow using the code editor](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny

Instala y abre Thonny, luego configúralo siguiendo las instrucciones:

```
pip install thonny
#open thonny after installation
thonny
```

Ve a Run-->Configure Interpreter, y asegúrate de que la pestaña Interpreter en las opciones de Thonny se vea como se muestra a continuación, selecciona "CircuitPython (generic)" y el puerto:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

Haz clic en "OK" en el cuadro de diálogo y deberías ver el shell de Micropython en la parte inferior de la ventana de Thonny como se muestra en la figura siguiente.
Entonces puedes usar **R**ead-**E**valuate-**P**rint-**L**oop, o REPL para la conexión serie, lo que te permite introducir líneas individuales de código y ejecutarlas inmediatamente en el shell. Es realmente útil si tienes problemas con un programa en particular y no puedes averiguar por qué. Es interactivo, por lo que es ideal para probar nuevas ideas. Consulta [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) para más información.

Interactuar con el REPL con *help()*, que te indica por dónde empezar a explorar el REPL. Para ejecutar código en el REPL, escríbelo junto al prompt del REPL.
Para listar los módulos integrados escribe *help("modules")* y aparecerá una lista de todos los módulos principales integrados en CircuitPython, incluido "*board*".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

Luego puedes escribir *"import board"* en el REPL y pulsar Enter. A continuación, escribe *"dir(board)"* en el REPL y obtendrás una lista de todos los pines de tu placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. Flujo de trabajo web de CircuitPython

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) proporciona una experiencia más completa y enriquecedora al editar archivos en tu dispositivo basado en ESP32 que ejecuta la última versión de CircuitPython.
El editor te permite editar archivos usando Bluetooth web, USB y flujo de trabajo web a través de WiFi.

## Información de pinout/puertos

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

- Para más información, consulta la [visión general del hardware](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#visión-general-del-hardware)
- [Esquemático de Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## Primeros pasos con CircuitPython en el XIAO ESP32C3

### Red-WLAN

Para placas sin USB nativo (como ESP32-C3 o ESP32) necesitarás usar el REPL para conectarte al Wi-Fi. La función Wi-Fi se habilita cuando se añade un archivo llamado *settings.toml* a la carpeta raíz del sistema de archivos de CircuitPython.
Crea el archivo *settings.toml* mediante REPL:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- Sustituye por el nombre de tu red wifi local *wifissid*
- Sustituye por la contraseña de tu wifi local *password*
- La otra contraseña se usa cuando accedes a la placa a través de un navegador web. Establécela como quieras *webpassword*

Una vez conectado, puedes pulsar el botón **Reset** para activar el firmware, luego pulsa Intro unas cuantas veces para llegar al prompt del REPL. Después vuelve a conectar el dispositivo a Thonny, y aparecerá la dirección IP de tu XIAO ESP32C3.

:::note
No lo olvides, ESP32 no es compatible con redes de 5 GHz, así que usa tu SSID de 2,4 GHz si tienes dos.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

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

### Pines y GPIO

Puedes usar los módulos "*board*" y "*microcontroller*" para controlar el GPIO con el siguiente código y conectar un LED a D5:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

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

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART(bus serie)

Usando el módulo *busio*:

```python
import board
import busio

# initialise UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

El XIAO ESP32C3 tiene un UART de hardware. Los pines se enumeran a continuación:

| UART | Pin |
|------|-----|
| TX   | D6  |
| RX   | D7  |

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

# initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# choose a chip
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

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

### Placa base de expansión para XIAO

*Requisitos previos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> con encabezado soldado</th>
      <th>Placa base de expansión para XIAO</th>
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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### Encender la pantalla OLED

**Descargar y extraer el paquete de bibliotecas**:

- Ve a la [biblioteca](https://circuitpython.org/libraries) y descarga el paquete de bibliotecas para CircuitPython. Para instalarlo, descarga el paquete apropiado para tu versión de CircuitPython.

**Copiar bibliotecas a CIRCUITPY**:

- Extrae el archivo ZIP del paquete de bibliotecas. Encontrarás una carpeta llamada lib con varios archivos *.mpy*.
- Abre Thonny-->View-->Files y luego copia los archivos .mpy necesarios y la carpeta lib al dispositivo CircuitPython/lib.
Tendrás que instalar manualmente las bibliotecas necesarias desde el paquete:
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**Crea tu código CircuitPython**:

- Crea un archivo code.py (o main.py). Este archivo debe contener tu código CircuitPython.

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

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>

## "Desinstalar" CircuitPython

Muchas de nuestras placas se pueden usar con múltiples lenguajes de programación. Por ejemplo, la Circuit Playground Express se puede usar con MakeCode, Code.org CS Discoveries, CircuitPython y Arduino. Puede que quieras volver a Arduino o MakeCode. No hay nada que desinstalar. CircuitPython es "solo otro programa" que se carga en tu placa. Así que simplemente puedes cargar otro programa (Arduino o MakeCode) y sobrescribirá CircuitPython.

### Haz una copia de seguridad de tu código

Antes de reemplazar CircuitPython, no olvides hacer una copia de seguridad del código que tienes en la unidad CIRCUITPY. Eso significa tu *code.py* y cualquier otro archivo, la carpeta lib, etc. Puedes perder estos archivos cuando elimines CircuitPython, ¡así que las copias de seguridad son clave! Simplemente arrastra los archivos a una carpeta en tu portátil u ordenador de escritorio como lo harías con cualquier unidad USB.

### Pasar a Arduino

Si quieres usar Arduino en su lugar, simplemente utiliza el IDE de Arduino para cargar un programa de Arduino. Aquí tienes un ejemplo de cómo subir un sencillo programa "Blink" de Arduino, pero no tienes que usar este programa en particular.
Comienza conectando tu placa y haciendo doble clic en reset hasta que obtengas el/los LED(s) integrados.

Gracias por leer este artículo. No dudes en compartir tus ideas en los comentarios.

## Recursos

- [El archivo binario de firmware](https://circuitpython.org/board/seeed_xiao_esp32c3/) para XIAO ESP32C3 con CircuitPython
- [El paquete de bibliotecas para CircuitPython](https://circuitpython.org/libraries)

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

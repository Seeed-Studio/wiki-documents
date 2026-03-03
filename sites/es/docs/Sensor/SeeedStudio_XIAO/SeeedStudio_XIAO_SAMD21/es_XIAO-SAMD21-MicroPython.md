---
description: Seeed Studio XIAO SAMD21 con MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# **Seeed Studio XIAO SAMD21 con MicroPython**

## **Introducción a MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una característica de compilación de código nativo parcial. Proporciona un subconjunto de características de Python 3.5, implementado para procesadores embebidos y sistemas restringidos. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **Primeros Pasos**

Primero, vamos a conectar el Seeed Studio XIAO SAMD21 a la computadora y cargar un código simple desde MicroPython para verificar si la placa está funcionando bien.

### **Configuración del Hardware**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Cable Type-C x1
- PC x1

### **Configuración del Software**

- **Paso 1**. Descarga e instala la última versión del [editor Thonny](https://thonny.org/) según tu sistema operativo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Paso 2**. Ejecuta Thonny

- **Paso 3**. Haz clic en **"Tools-->Options"** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Paso 4**. Elige la interfaz "Interpreter" y selecciona el dispositivo como **"MicroPython(generic)"** y el puerto como **"Try to detect port automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>

### **Conectar Seeed Studio XIAO SAMD21 a la PC y Encenderlo**

- **Paso 1**. Mantén presionado el botón "BOOT" y luego conecta el Seeed Studio XIAO SAMD21 a la PC a través del cable Type-C. Si funciona bien, aparecerá un escritorio "Arduino" en la PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Paso 2**. Flashear el firmware

Solo ve al [enlace](https://micropython.org/download/SEEED_XIAO_SAMD21/) oficial y descarga el firmware más reciente

También es posible [compilar tu propio firmware](https://wiki.seeedstudio.com/es/Compiling_MicroPython_for_embedded_devices/) para garantizar la seguridad y el soporte para las características más recientes, pero esto no es necesario.

## Desarrollo de Software

### Tabla de asignación de pines SEEED XIAO SAMD21

|Pin|GPIO|Xiao Pin name|IRQ|ADC|
|-|--|---|--|---|
|2|PA02|0|2|0| * | * | * | * |
|4|PA04|1|4|4| * | * | * | * |
|10|PA10|2|10|18| * | * | * | * |
|11|PA11|3|11|19| * | * | * | * |
|8|PA08|4|*|16| * | * | * | * |
|9|PA09|5|9|17| * | * | * | * |
|40|PB082|6|8|2| * | * | * | * |
|41|PB09|7|9|3| * | * | * | * |
|7|PA07|8|7|7| * | * | * | * |
|5|PA05|9|5|5| * | * | * | * |
|6|PA06|10|6|6| * | * | * | * |
|18|PA18|RX_LED|2|*| * | * | * | * |
|30|PA30|SWCLK|10|*| * | * | * | * |
|31|PA31|SWDIO|11|*| * | * | * | * |
|19|PA19|TX_LED|3|*| * | * | * | * |

### Cargar tu código

Carga los códigos haciendo clic en el botón "Run current script". Por primera vez, Thonny preguntará dónde quieres guardar tu archivo de códigos. Tanto **This Computer** como **MicroPython device** están bien.

Si quieres usar el programa sin conexión, debes guardar el programa en XIAO SAMD21

Mantén presionado Ctrl + Shift + S al mismo tiempo, luego selecciona guardar en **MicroPython device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### PRUEBA GPIO (LED)

Necesitamos preparar:

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

Copia los siguientes códigos a Thonny.

Podemos ver que el LED azul RX_LED se enciende y parpadea una vez por segundo

```python
from machine import Pin, Timer

led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)

tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

### Control GPIO de Relés

Necesitamos preparar:

- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>

### Detección humana para control automático

Necesitamos preparar:

- [Radar Doppler para detección humana](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>

### Soporte I2C

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Decimal address: ",device," | Hexa address: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'a') # write 'a' to device with address 0x51
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>

La familiaridad con micropython te permite hacer más, esperamos crear más valor para ti. ¡Siéntete libre de compartir tus proyectos con nosotros también!

### Soporte DAC

Gracias a Aleksei Tertychnyi por enviar el código, todas las funcionalidades relacionadas fueron desarrolladas y contribuidas por él.

```python
from machine import Pin, Timer, DAC

led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) #DAC on A0 output

def loop(tim):
    global counter
    led.value(counter%2)
    print('DAC value: ', end =" ")
    print(counter)
    dac.write(counter%1024)
    counter = counter + 1

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```

El voltaje en el **pin A0** comenzará a aumentar gradualmente, después de alcanzar el máximo aproximadamente a *3.3V*, caerá a *0V* y el ciclo se repetirá.

### Soporte ADC
Código de ejemplo ADC en MicroPython:

```python
from machine import Pin, Timer, ADC
led = Pin(18, Pin.OUT)  # digital output for blinking
counter = 0             # simple counter for LED toggle

ADC_CONVERT_V = 1.0 / 65535.0  # conversion factor: raw ADC (16-bit) → voltage (vref=1.0V)

adc = ADC(4, vref=0)   # ADC reads on pin A4, using internal 1.0V reference
adcVoltage = 0.0       # variable to store measured voltage

def fun(tim):
    global counter, adcVoltage  # make sure we update the global variables
    counter += 1                # increment counter
    adcVoltage = adc.read_u16() * ADC_CONVERT_V  # read ADC and convert to voltage
    print(adcVoltage)           # print voltage to REPL
    led.value(counter % 2)      # toggle LED every callback (blink)

tim = Timer(-1)                    # create a virtual timer
tim.init(period=1000,              # callback period in milliseconds (1000 ms = 1 s)
         mode=Timer.PERIODIC,      # periodic callback
         callback=fun)             # function to call
```

## Consola de Dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO usando MicroPython. Con este programa puedes fácilmente cargar, descargar y eliminar archivos. ¡Le agradecemos su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

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

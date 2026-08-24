---
description: Seeed Studio XIAO SAMD21 con MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/es/XIAO-SAMD21-MicroPython/
---

# **Seeed Studio XIAO SAMD21 con MicroPython**

## **Introducción a MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una función parcial de compilación de código nativo. Proporciona un subconjunto de las funciones de Python 3.5, implementado para procesadores embebidos y sistemas con recursos limitados. Es diferente de CPython y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## Primeros pasos

Primero, vamos a conectar el Seeed Studio XIAO SAMD21 al ordenador y subir un código sencillo desde MicroPython para comprobar si la placa funciona correctamente.

### Configuración de hardware

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Cable Type‑C x1
- PC x1

### Flashear el firmware

#### Para XIAO SAMD21

- **Paso 1**. Mantén pulsado el botón **BOOT** y luego conecta el Seeed Studio XIAO SAMD21 al PC mediante el cable Type‑C. Si todo funciona bien, aparecerá un disco **Arduino** en el PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Paso 2**. Flashear el firmware

Simplemente ve al [firmware MicroPython de XIAO SAMD21](https://micropython.org/download/SEEED_XIAO_SAMD21/) oficial y descarga el firmware más reciente

También es posible [compilar tu propio firmware](https://wiki.seeedstudio.com/es/Compiling_MicroPython_for_embedded_devices/) para garantizar la seguridad y la compatibilidad con las funciones más recientes, pero no es necesario.
<br/>
#### Para XIAO SAMD21 Plus

- **Paso 1**. Conecta el XIAO SAMD21 Plus a tu PC con un cable Type‑C y luego pulsa el botón Reset dos veces consecutivas. Si todo funciona correctamente, aparecerá un disco **Arduino** en tu PC.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Paso 2**. Haz clic en el siguiente enlace para descargar el firmware y luego arrastra y suelta el archivo `.uf2` en el disco **Arduino** para finalizar el flasheo del firmware.
[XIAO SAMD21 Plus MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_SAMD/img/xiao-samd21-plus-micropython.zip)

### Configuración de software

- **Paso 1**. Descarga e instala la última versión del [editor Thonny](https://thonny.org/) de acuerdo con tu sistema operativo

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Paso 2**. Inicia Thonny

- **Paso 3**. Haz clic en **Tools-->Options** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Paso 4**. Elige la interfaz **Interpreter** y selecciona el dispositivo como **MicroPython(generic)** y el puerto como **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

## Desarrollo de software

### Tabla de asignación de pines de la serie SEEED XIAO SAMD21

| Nombre de pin MicroPython | GPIO XIAO SAMD21 (ID) | GPIO XIAO SAMD21 Plus (ID) | IRQ<br />SAMD21 / Plus | ADC | Función |
| :--- | :---: | :---: | :---: | :---: | :--- |
| D0 / A0 / A0_D0 | PA02 (2) | PA02 (2) | 2 / 2 | 0 | GPIO, ADC, DAC |
| D1 / A1 / A1_D1 | PA04 (4) | PA04 (4) | 4 / 4 | 4 | GPIO, ADC |
| D2 / A2 / A2_D2 | PA10 (10) | PA10 (10) | 10 / 10 | 18 | GPIO, ADC |
| D3 / A3 / A3_D3 | PA11 (11) | PA11 (11) | 11 / 11 | 19 | GPIO, ADC |
| D4 / A4 / A4_D4 / SDA | PA08 (8) | PA08 (8) | NMI / NMI | 16 | GPIO, ADC, I2C SDA |
| D5 / A5 / A5_D5 / SCL | PA09 (9) | PA09 (9) | 9 / 9 | 17 | GPIO, ADC, I2C SCL |
| D6 / A6 / A6_D6 / TX | PB08 (40) | PB08 (40) | 8 / 8 | 2 | GPIO, ADC, UART TX |
| D7 / A7 / A7_D7 / RX | PB09 (41) | PB09 (41) | 9 / 9 | 3 | GPIO, ADC, UART RX |
| D8 / A8 / A8_D8 / SCK | PA07 (7) | PA07 (7) | 7 / 7 | 7 | GPIO, ADC, SPI SCK |
| D9 / A9 / A9_D9 / MISO | PA05 (5) | PA05 (5) | 5 / 5 | 5 | GPIO, ADC, SPI MISO |
| D10 / A10 / A10_D10 / MOSI | PA06 (6) | PA06 (6) | 6 / 6 | 6 | GPIO, ADC, SPI MOSI |
| D11 / TX_LED | PA19 (19) | — | 3 / — | — | LED TX de la placa original |
| D12 / RX_LED | PA18 (18) | PA28 (28) | 2 / 8 | — | LED RX original; GPIO de expansión Plus |
| D13 / USER_LED / SCL1 | PA17 (17) | PA17 (17) | 1 / 1 | — | LED de usuario original; Plus I2C1 SCL |
| D14 / SDA1 | — | PA16 (16) | — / 0 | — | Plus I2C1 SDA |
| D15 | — | PA15 (15) | — / 15 | — | GPIO de expansión Plus |
| D16 | — | PA14 (14) | — / 14 | — | GPIO de expansión Plus |
| D17 | — | PA13 (13) | — / 13 | — | GPIO de expansión Plus |
| D18 | — | PA12 (12) | — / 12 | — | GPIO de expansión Plus |
| D19 / I2S_SD | — | PA19 (19) | — / 3 | — | GPIO Plus y datos I2S |
| D20 / I2S_SCK | — | PA20 (20) | — / 4 | — | GPIO Plus y reloj I2S |
| D21 / I2S_WS | — | PA21 (21) | — / 5 | — | GPIO Plus y selección de palabra I2S |
| D22 | — | PB10 (42) | — / 10 | — | GPIO de expansión Plus |
| D23 | — | PB11 (43) | — / 11 | — | GPIO de expansión Plus |
| D24 | — | PB23 (55) | — / 7 | — | GPIO de expansión Plus |
| D25 | — | PA23 (23) | — / 7 | — | GPIO de expansión Plus |
| D26 | — | PA22 (22) | — / 6 | — | GPIO de expansión Plus |
| D27 | — | PA18 (18) | — / 2 | — | GPIO de expansión Plus |
| RGB_LED | — | PA27 (27) | — / 15 | — | Datos del LED RGB direccionable |
| BUTTON | — | PB22 (54) | — / 6 | — | Botón de usuario Plus |
| SWCLK | PA30 (30) | PA30 (30) | 10 / 10 | — | Reloj SWD |
| SWDIO | PA31 (31) | PA31 (31) | 11 / 11 | — | Datos SWD |

:::note
El número entre paréntesis en GPIO (ID) se refiere al ID de pin SAMD de MicroPython, no al número de pin físico del encapsulado del MCU.
:::

### Sube tu código

Sube los códigos haciendo clic en el botón "Run current script". La primera vez, Thonny preguntará dónde quieres guardar tu archivo de código. Tanto **This Computer** como **MicroPython device** son opciones válidas.

Si quieres usar el programa sin conexión, debes guardar el programa en XIAO SAMD21

Pulsa y mantén Ctrl + Shift + S al mismo tiempo y luego selecciona guardar en **MicroPython device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### PRUEBA GPIO (LED)

Necesitamos preparar:

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

Copia los siguientes códigos en Thonny.

Podemos ver que el RX_LED azul se enciende y parpadea una vez por segundo

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

### Relés de control GPIO

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

### Detección de personas para control automático

Necesitamos preparar:

- [Radar Doppler para detección de personas](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
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

### Compatibilidad con I2C

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

La familiaridad con MicroPython te permite hacer más; esperamos poder crear más valor para ti. ¡No dudes en compartir también tus proyectos con nosotros!

### Compatibilidad con DAC

Gracias a Aleksei Tertychnyi por enviar el código; todas las funcionalidades relacionadas fueron desarrolladas y aportadas por él.

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

El voltaje en el **pin A0** comenzará a aumentar gradualmente; después de alcanzar el máximo en aproximadamente *3.3V*, caerá a *0V* y el ciclo se repetirá.

### Compatibilidad con ADC
Ejemplo de código MicroPython para ADC:

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

## Consola de dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO usando MicroPython. Con este programa puedes subir, descargar y eliminar archivos fácilmente. ¡Le agradecemos su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div>

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

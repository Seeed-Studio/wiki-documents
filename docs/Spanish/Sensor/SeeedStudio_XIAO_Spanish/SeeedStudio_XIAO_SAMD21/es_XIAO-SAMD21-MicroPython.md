---
description: Seeed Studio XIAO SAMD21 with MicroPython
title: XIAO SAMD21 de Seeed Studio con MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-SAMD21-MicroPython
last_update:
  date: 02/19/2025
  author: Guillermo
---

# **XIAO SAMD21 de Seeed Studio con MicroPython**

## **Introducción a MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una característica de compilación de código nativo parcial. Ofrece un subconjunto de las características de Python 3.5, implementado para procesadores embebidos y sistemas con recursos limitados. Es diferente de CPython, y puedes leer más sobre las diferencias [aquí](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>


## **Empezando**

Primero, vamos a conectar la Seeed Studio XIAO SAMD21 al computador y cargar un código simple desde MicroPython para verificar si la placa funciona correctamente.

### **Configuración de Hardware**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Cable Tipo-C x1
- PC x1

### **Configuración de Software**

- **Paso 1**. Descarga e instala la versión más reciente del [editor Thonny](https://thonny.org/) según tu sistema operativo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>


- **Paso 2**. Inicia Thonny.

- **Paso 3**. Haz clic en **"Herramientas-->Opciones"** para abrir la configuración.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>


- **Paso 4**. Elige la interfaz "Intérprete" y selecciona el dispositivo como **"MicroPython (genérico)"** y el puerto como **"Intentar detectar el puerto automáticamente"**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>


### **Conectar la Seeed Studio XIAO SAMD21 al PC y encenderla**

- **Paso 1**. Mantén presionado el botón "BOOT" y luego conecta la Seeed Studio XIAO SAMD21 al PC mediante el cable Tipo-C. Si todo funciona correctamente, debería aparecer un escritorio llamado "Arduino" en el PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>


- **Paso 2**. Flashear el firmware

Para Windows:

Copia el [firmware de Seeed XIAO SAMD21 para soporte de MicroPython](https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2) y colócalo en esta carpeta.

Para Linux:

```bash
wget "https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"
cp SEEED_XIAO-20220618-v1.19.1.uf2 /media/$USER/Arduino/
```

También es posible [compilar tu propio firmware](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/) para asegurar la seguridad y soporte de las últimas características, pero esto no es necesario.

## Desarrollo de Software

### Tabla de asignación de pines de SEEED XIAO SAMD21

|Pin|GPIO|Nombre de Pines de XIAO|IRQ|ADC|
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

Carga el código haciendo clic en el botón "Ejecutar script actual". La primera vez, Thonny te preguntará dónde deseas guardar el archivo del código. Tanto **Este Computador** como **Dispositivo MicroPython** son válidos.

Si deseas usar el programa sin conexión, deberías guardar el programa en el XIAO SAMD21.

Mantén presionadas las teclas Ctrl + Shift + S al mismo tiempo, luego selecciona guardar en **Dispositivo MicroPython**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>


### PRUEBA GPIO (LED)

Necesitamos preparar:
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

Copia el siguiente código en Thonny.

Podemos ver que el LED azul RX_LED se enciende y parpadea una vez por segundo.

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

### Control GPIO con Relés

Necesitamos preparar:
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relé](https://www.seeedstudio.com/Grove-Relay.html)
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


### Detección de humanos para control automático

Necesitamos preparar:

- [Radar Doppler para detección de humanos](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relé](https://www.seeedstudio.com/Grove-Relay.html)
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
    Su navegador no admite la etiqueta de video.
  </video></div>


### Compatibilidad I2C

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Dirección decimal: ",device," | Dirección hexadecimal: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # leer 4 bytes del dispositivo con dirección 0x51
i2c.writeto(0x51, 'a') # escribir 'a' al dispositivo con dirección 0x51
print(i2c.readfrom(0x51, 4))   # leer 4 bytes del dispositivo con dirección 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))  

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>


La familiaridad con MicroPython te permite hacer mucho más, ¡esperamos crear más valor para ti! No dudes en compartir tus proyectos con nosotros también.

## Consola de Dispositivo MicroPython

Nuestro socio **Neil** ha escrito un programa de consola de línea de comandos para XIAO usando MicroPython. Con este programa, puedes cargar, descargar y eliminar archivos fácilmente. ¡Le agradecemos su contribución a XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diferentes formas para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
title: Comenzando con MicroPython en XIAO RP2350 de Seeed Studio 
description: |
  XIAO RP2350, un microcontrolador de vanguardia de Seeed Studio. Cuenta con un procesador de doble núcleo, mayor memoria SRAM y flash, y conectividad mejorada.
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /es/getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Guillermo
  date: 2024-11-22T05:59:15.764Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## XIAO RP2350 de Seeed Studio 

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div><br></br>

El XIAO RP2350 integra el poder del Raspberry Pi RP2350 (dos núcleos Cortex-M33 que funcionan a 150 MHz con FPU, seguridad mejorada y cifrado) en el formato clásico de XIAO. Con unas dimensiones de solo 21x17.8mm, cuenta con 19 pines GPIO multifuncionales, un LED RGB y un Sistema de Gestión de Batería con un consumo de energía ultra bajo de 27μA, suministro de energía mediante batería y medición directa del voltaje de la batería. Gracias al ecosistema XIAO, el XIAO RP2350 es compatible con una amplia gama de complementos, como pantallas, matrices de LED, módulos Grove, CAN Bus, sensores de Vision AI y sensores mmWave. Con soporte nativo para MicroPython, C y C++, el XIAO RP2350 es ideal para desarrolladores de todos los niveles que buscan crear aplicaciones compactas y alimentadas por batería para control inteligente, dispositivos portátiles, teclados DIY y más.

## Características

- **Placa MCU Potente:** Equipado con un chip Raspberry Pi RP2350 que cuenta con dos núcleos Arm Cortex-M33 a 150 MHz con FPU.
- **Características de Seguridad Mejoradas:** Arranque seguro incorporado y cargador de arranque cifrado que garantizan la seguridad de la aplicación.
- **Soporte de Software:** Compatible con C/C++ y MicroPython, lo que facilita el desarrollo de proyectos y prototipos.
- **Recursos Integrados Ricos:** Incluye un LED RGB, 2 MB de Flash, 520 kB de SRAM y 19 pines GPIO multifuncionales (Analógicos, Digitales, I²C, UART, SPI, PWM).
- **Expansión de 8 Nuevos Pinos de E/S:** Comparado con los microcontroladores XIAO anteriores, la adición de 8 pines de E/S en la parte posterior admite aplicaciones más complejas.
- **Diseño Eficiente en Términos de Energía:** Consumo ultra bajo de solo 27μA en modo de suspensión, lo que permite el suministro de energía mediante batería. La medición directa del voltaje de la batería a través de un E/S interno mejora el sistema de gestión de baterías (BMS).
- **Diseño Compacto del Tamaño de un Pulgar:** Con unas dimensiones de 21 x 17.8 mm, adoptando el clásico formato de XIAO de Seeed Studio, ideal para aplicaciones que requieren poco espacio.
- **Amigable con la Producción:** Diseño SMD (Surface Mount Device) con todos los componentes en la parte frontal y agujeros de sellado en ambos lados, lo que facilita una producción en masa eficiente.

## Especificaciones

<table align="center">
    <tr>
        <td>Producto</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">Procesador</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>Dual Cortex-M0+ @ 133MHz</td>
        <td>Dual Cortex-M33 @ 150MHz, FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>Flash</td>
        <td>2MB Onboard</td>
        <td>2MB PSRAM</td>
    </tr>
    <tr>
        <td>LEDs</td>
        <td>1 LED de usuario, 1 LED de poder, 1 LED RGB<br></br>Dos LEDs para la descarga en puertos serie</td>
        <td>1 LED de usuario, 1 LED de poder, 1 LED RGB</td>
    </tr>
    <tr>
        <td>Interfaz</td>
        <td>11 Pins:4x análogos,11x Digital, 1x I²C, 1x UART, 1x SPI, todos PWM</td>
        <td><b>19 Pins:3x análogos,19x Digital, 2x I²C, 2x UART, 2x SPI, todos PWM</b></td>
    </tr>
    <tr>
        <td>Botón</td>
        <td align="center" colspan="2">1 RESET button, 1 BOOT button</td>
    </tr>
    <tr>
        <td>Seguridad</td>
       <td align="center"> - </td>
        <td>OTP, Secure Boot, Arm TrustZone</td>
    </tr>
    <tr>
        <td>Baja potencia</td>
       <td align="center"> - </td>
        <td>5V/205uA <br></br>3.7V/57uA</td>
    </tr>
    <tr>
        <td>Compatibilidad de software</td>
        <td>MicroPython/CircuitPython, Arduino</td>
        <td>MicroPython, C/C++</td>
    </tr>
    <tr>
        <td>Temperatura de trabajo</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>Dimensiones</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## Descripción general del hardware

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 Pinout Frontal</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 Pinout Trasero</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>Componentes XIAO RP2350</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

¿Necesitas más detalles sobre los pines? Navega a [Recursos y Materiales](#recursos-y-materiales) a continuación.

## Plataformas Soportadas

El XIAO RP2350, alimentado por el RP2350, es compatible con MicroPython y el SDK C/C++ proporcionado por Raspberry Pi. Esta flexibilidad permite a los desarrolladores elegir su lenguaje y entorno de programación preferido para la creación de prototipos y desarrollo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## Empezando ▶️

:::info attention
Esta página está enfocada principalmente en los usuarios de MicroPython. Para aquellos interesados en aprender a programar con el SDK o para usuarios avanzados, pueden comenzar con el [SDK C/C++ de la serie Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf). Esta guía te ayudará a configurar el entorno y comenzar con código de ejemplo. Además, puedes visitar [XIAO RP2350 con SDK C/C++](/xiao-rp2350-c-cpp-sdk) para obtener instrucciones más específicas relacionadas con el XIAO RP2350.
:::

:::warning Problema con el Firmware de MicroPython

A partir del **10 de noviembre de 2024**, la versión estable del firmware de MicroPython **`1.24.0`** disponible para su descarga en [MicroPython.org para RPI_PICO2](https://micropython.org/download/RPI_PICO2/) es actualmente **incompatible con ciertos dispositivos debido a variaciones en el chip de flash**.

El **equipo de Seeed** está trabajando activamente para resolver este problema en colaboración con los mantenedores oficiales de MicroPython. Mientras tanto, puedes utilizar una **versión preliminar** del firmware de MicroPython como solución temporal: [Vista Previa del Firmware MicroPython para RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/RPI_PICO2-20240809-v1.24.0-preview.201.g269a0e0e1.uf2).

:::

### Paso 1: Instalación de MicroPython en XIAO RP2350

Para instalar el firmware de MicroPython en el XIAO RP2350, sigue estos pasos:

**Paso 1.1. Descarga del Firmware de MicroPython:**  

- Dirígete a la página de [Descargas de MicroPython](https://micropython.org/download/RPI_PICO2/).
- Descarga el archivo de firmware `.uf2` más reciente y compatible con el XIAO RP2350.

**Paso 1.2 Ingresar en Modo BOOTSEL:**  

Puedes ingresar al modo BOOTSEL en el XIAO RP2350 utilizando cualquiera de los dos métodos a continuación:

<Tabs>
<TabItem value="method1" label="Method 1: Before Connecting to Computer" default>

1. **Presiona y Mantén el Botón BOOT:**  
   Con el XIAO RP2350 desconectado de tu computadora, **presiona y mantén** presionado el botón BOOT.
2. **Conéctalo a tu Computadora:**  
   Mientras mantienes presionado el botón BOOT, conecta el XIAO RP2350 a tu computadora mediante un cable USB.
3. **Suelta el Botón BOOT:**  
   Después de que la placa esté conectada a tu computadora, puedes soltar el botón BOOT. El XIAO RP2350 debería estar ahora en modo BOOTSEL, y tu computadora lo reconocerá como un dispositivo de almacenamiento extraíble.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantén presionado el botón BOOT -> Conecta el cable-> Suelta el botón BOOT</em></div>
</div>

</TabItem>

<TabItem value="method2" label="Method 2: While Connected to Computer">

1. **Presiona y Mantén el Botón BOOT:**  
   Con el XIAO RP2350 ya conectado a tu computadora, presiona y mantén presionado el botón BOOT.
2. **Haz Clic en el Botón RESET:**  
   Mientras sigues manteniendo presionado el botón BOOT, presiona y suelta el botón RESET, que está etiquetado como "B" en la esquina inferior derecha de la placa en la imagen de arriba.
3. **Suelta el Botón BOOT:**  
   Después de presionar el botón RESET, suelta el botón BOOT. El XIAO RP2350 debería estar ahora en modo BOOTSEL, y tu computadora lo reconocerá como un dispositivo de almacenamiento extraíble.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantén presionado el botón BOOT-> Haz clic en RESET-> Suelta el botón BOOT</em></div>
</div>

</TabItem>
</Tabs>

**Paso 1.3. Instalar el Firmware:**  

- **Arrastra y suelta** el archivo `.uf2` descargado en la unidad de almacenamiento extraíble del XIAO RP2350.
- La placa se reiniciará automáticamente después de que el archivo sea copiado, completando la instalación del firmware.

### Paso 2: Instalación de Thonny IDE

:::tip Acerca de MicroPython

[MicroPython](https://micropython.org/) es un lenguaje interpretado similar a [Python](https://www.python.org/). Sin embargo, a diferencia de Python, MicroPython se ejecuta directamente sobre el hardware (bare-metal), proporcionando un prompt interactivo (REPL) para ejecutar comandos de inmediato, así como la capacidad de ejecutar e importar scripts desde el sistema de archivos integrado.

Para conectarte a la placa XIAO RP2350 y comenzar a escribir y ejecutar tu código Python, puedes usar cualquier herramienta de terminal que soporte conexiones seriales, como minicom, PuTTY, electerm, warp, entre otras. Para una experiencia más *fácil de usar*, puedes emplear **[Thonny](https://thonny.org/)** por su facilidad de uso, características integradas e interfaz amigable para principiantes. De esta manera, podrás disfrutar escribiendo y ejecutando tu código Python directamente en el dispositivo.

:::

Thonny IDE es un editor de Python amigable para principiantes, ideal para el desarrollo de MicroPython. Aquí te explico cómo instalarlo:

1. **Descargar Thonny:**  
   - Visita la [Página de Descargas de Thonny](https://thonny.org/).
   - Elige el instalador adecuado para tu sistema operativo (Windows, macOS o Linux) y descárgalo.

2. **Instalar Thonny:**  
   - **Ejecuta** el instalador descargado.
   - **Sigue** las instrucciones en pantalla para completar el proceso de instalación.

3. **Configurar Thonny para MicroPython:**  
   - **Abre** Thonny IDE.
   - Mira en la esquina inferior derecha de la ventana de Thonny.
   - Haz clic en el área de selección del **intérprete**.
   - Elige **'MicroPython (RP2040)'** del menú desplegable.
   - Asegúrate de que el **Puerto** correcto esté seleccionado—Thonny generalmente lo detecta automáticamente.

¡Ahora estás listo para escribir y cargar código MicroPython en tu XIAO RP2350 usando Thonny IDE!

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY Console">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

Si tu dispositivo ya está listo con MicroPython, comencemos con un proyecto sencillo:

### ¡Hagámoslo Parpadear! ✨

Hacer que la placa parpadee un LED es el primer programa que generalmente todos ejecutan. Lo mismo ocurre con el XIAO RP2350.

:::note
El **LED de usuario**, el LED amarillo en el XIAO RP2350, está conectado a **GPIO25/D19** según el diagrama esquemático.  
Para todas las placas de la familia XIAO, el **LED de usuario** se **enciende** cuando se establece en un **nivel bajo** y se **apaga** cuando se establece en un **nivel alto**.
:::

<Tabs>
  <TabItem value="blink" label="Blink" default>

```python showLineNumbers
from machine import Pin # Importa la clase Pin desde el módulo machine
from time import sleep  # Importa la función sleep desde el módulo time

# Inicializa el GPIO25 como un pin de salida, que controla el LED DE USUARIO
led = Pin(25, Pin.OUT) 

# Apaga el LED inicialmente
led.value(1) # led.on() -> nivel alto -> luz apagada
sleep(0.5) # Espera 0.5 segundos

# Enciende el LED
led.value(0) # led.off() -> nivel bajo -> luz encendida
sleep(0.5) # Espera 0.5 segundos

# Ingresa en un bucle infinito
while True:
    # Cambia el estado del LED (de encendido a apagado o de apagado a encendido)
    led.toggle() 
    # Imprime el estado actual del LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Espera 0.5 segundos antes del siguiente cambio
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="Fading a LED" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Ejemplo usando PWM para atenuar un LED.

import time
from machine import Pin, PWM

# Construir el objeto PWM, con el LED en Pin(25).
pwm = PWM(Pin(25))

# Establecer la frecuencia del PWM.
pwm.freq(1000)

# Atenuar el LED hacia adentro y hacia afuera varias veces.
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

Once you have copied the code into Thonny IDE, as shown in the image below, simply click the `Run current script` button or press `F5`. This will execute the code snippet and you'll see the LED on the XIAO RP2350 start to blink.

### Play with RGB LEDs

The XIAO RP2350 comes with a built-in RGB LED that you can control using MicroPython. Below is an example of how to cycle through different colors:

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Variable global de brillo (de 0.0 a 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# Configura el pin de alimentación
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Enciende la alimentación al LED

# Crea la máquina de estados con el programa ws2812, con salida en LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Inicia la máquina de estados, esperará datos en su FIFO.
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("Iniciando transiciones de colores aleatorios con brillo ajustable...")

# Bucle principal
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 pasos para una transición suave
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Ajusta este valor para cambiar la velocidad de transición
    current_color = next_color

    # Opcionalmente, puedes cambiar el brillo aquí para propósitos de demostración
    # BRIGHTNESS = random.random()  # Esto ajustará el brillo de manera aleatoria en cada ciclo
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### Battery & Power Management

Is it possible to read the battery voltage without extra components? Yes, with the XIAO RP2350, it’s easier than ever. In previous XIAO family members, such as the [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), reading the battery voltage required manually connecting to *A0* with a resistor.

But with the XIAO RP2350, this process is simplified. You can now directly use the `A3/GPIO29` pin to read the battery voltage level, streamlining your design and development. Just remember to set the `GPIO19` pin to high, as it’s necessary to enable battery level reading.

Follow along with this code snippet to read the battery voltage using the Pico SDK:

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Función para inicializar el pin GPIO para habilitar la lectura del voltaje de la batería
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Configura el pin a alto para habilitar la lectura del voltaje de la batería

def main():
    print("Ejemplo ADC Batería - GPIO29 (A3)")
    
    init_gpio()  # Inicializa el pin de habilitación
    adc = ADC(Pin(29))  # Inicializa el ADC en GPIO29

    conversion_factor = 3.3 / (65535)  # Factor de conversión para un ADC de 12 bits y referencia de 3.3V
    
    while True:
        result = adc.read_u16()  # Lee el valor del ADC
        voltage = result * conversion_factor * 2  # Calcula el voltaje, considerando el divisor de voltaje (factor de 2)
        print("Valor crudo: 0x{:03x}, voltaje: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Retraso de 500 milisegundos

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// Función para inicializar el pin GPIO para habilitar la lectura del voltaje de la batería
void init_gpio() {
    const int enable_pin = 19; // Pin para habilitar la lectura del voltaje de la batería

    gpio_init(enable_pin); // Inicializa el pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Configura el pin como salida
    gpio_put(enable_pin, 1); // Configura el pin a alto para habilitar la lectura del voltaje de la batería
}

int main() {
    stdio_init_all(); // Inicializa la entrada/salida estándar
    printf("Ejemplo ADC Batería - GPIO29 (A3)\n");

    init_gpio(); // Inicializa el pin de habilitación
    adc_init(); // Inicializa el ADC

    // Inicializa el pin GPIO del ADC (GPIO29)
    adc_gpio_init(29);
    // Selecciona la entrada del ADC 3 (correspondiente a GPIO29)
    adc_select_input(3);

    while (1) {
        // Conversión de 12 bits, asumiendo que el valor máximo == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Factor de conversión para un ADC de 12 bits y referencia de 3.3V
        uint16_t result = adc_read(); // Lee el valor del ADC
        // Calcula el voltaje, considerando el divisor de voltaje (factor de 2)
        printf("Valor crudo: 0x%03x, voltaje: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Retraso de 500 milisegundos
    }
}
```

  </TabItem>
</Tabs>

## Recursos y Materiales

El XIAO RP2350 aprovecha el poder del Raspberry Pi RP2350, aprovechando una gran cantidad de recursos compartidos de la comunidad de Raspberry Pi. Esto abre un mundo de posibilidades para que puedas personalizar tus proyectos en esta pequeña placa con creatividad ilimitada. A continuación, se presentan recursos y materiales esenciales para ayudarte a comenzar.

***Hojas de datos y esquemáticos***

- 📄 **[PDF]** [Hoja de datos RP2350](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Esquema de Seeed Studio XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Hoja de Pines de Seeed Studio XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Dimensiones de Seeed Studio XIAO RP2350 en DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[Link]** [Archivo 3D STEP de Seeed Studio XIAO RP2350](https://grabcad.com/library/seeed-studio-xiao-rp2350-1)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

***Recursos relacionados***

- 📄 **[PDF]** [Introducción a Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf): Guía completa para configurar y programar las placas Raspberry Pi Pico, ideal para principiantes interesados en aprender MicroPython o C/C++.
- 📄 **[PDF]** [SDK de Python para Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf): El libro que documenta los tutoriales de configuración de MicroPython y las APIs.
- 📄 **[PDF]** [SDK de C/C++ para Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf): El libro que documenta las APIs del SDK de C/C++ para Pico.
- 🔗 **[Kicad]** [Footprint de Seeed Studio XIAO RP2350](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Expansión y Aplicaciones

[La serie XIAO](/xiao_topic_page) tiene una amplia gama de periféricos y accesorios para que puedas aprender y usar, ya sea que quieras una pantalla colorida para una interacción perfecta, una placa integrada con luces RGB brillantes y simples, y mucho más, solo esperando ser explorado.

Como miembro de la familia XIAO, el XIAO RP2350 hace lo mismo. Por supuesto, para aprovechar mejor los pines adicionales, seguirán llegando nuevos *periféricos y placas*, aprovechando al máximo el rendimiento para el cual fue creado.

- 🌟 **[Expandiendo con accesorios](/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Descubre la amplia gama de complementos y módulos compatibles con la familia XIAO, desde pantallas y matrices LED hasta módulos Grove y sensores, y aprende cómo pueden mejorar tus proyectos.

### Comunidad y Aprendizaje

Además, sumérgete en la vibrante comunidad de Raspberry Pi para expandir tu conocimiento y descubrir nuevas ideas de proyectos. Aprovecha los recursos compartidos por la comunidad, los foros y los tutoriales para mejorar tu experiencia con el XIAO RP2350. Además del Wiki de Seeed Studio, aquí hay algunos otros lugares recomendados para aprender:

- **[Documentación de Raspberry Pi](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: Obtén información confiable y actualizada sobre el RP2350.
- **[Foros de Raspberry Pi](https://www.raspberrypi.org/forums/)**: Interactúa con otros entusiastas, haz preguntas y comparte tus proyectos.
- **[Repositorio GitHub de XIAO](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: Explora el repositorio oficial de XIAO para más documentación centralizada e interacción con nuestro equipo, **¡Únete a nosotros!**
- **[r/embedded en Reddit](https://www.reddit.com/r/embedded/)**: Únete a la comunidad de sistemas embebidos, comparte ideas y discute varios temas.
- **[Tema de Pico en GitHub](https://github.com/topics/pico)**: Explora repositorios y discusiones relacionadas con el Pico.
- **[Hackster.io](https://www.hackster.io/)**: Descubre proyectos y tutoriales relacionados con varias plataformas de hardware, incluyendo XIAO y Raspberry Pi.
- **[Instructables](https://www.instructables.com/)**: Encuentra proyectos DIY y guías paso a paso para crear con XIAO y otros hardware.
- **[Comunidad Element14](https://www.element14.com/community/)**: Participa en discusiones, seminarios web y proyectos relacionados con electrónica y sistemas embebidos.

Y más, siempre eres bienvenido a compartir tus proyectos en nuestro [Discord de Seeed Studio](https://discord.com/invite/kpY74apCWj) y [Foro de Seeed Studio](https://forum.seeedstudio.com/). Estas plataformas brindan una excelente oportunidad para conectar con otros makers, recibir comentarios y encontrar inspiración. Ya sea que necesites ayuda para solucionar un problema, quieras mostrar tu última creación o simplemente desees ser parte de una comunidad de apoyo, *el Discord y el Foro de Seeed Studio* son los lugares perfectos para interactuar y colaborar.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte soporte en diferentes áreas para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

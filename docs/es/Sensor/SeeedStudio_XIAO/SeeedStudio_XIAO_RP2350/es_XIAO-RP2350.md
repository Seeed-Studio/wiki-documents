---
title: Introducción al Seeed Studio XIAO RP2350(MicroPython)
description: |
  XIAO RP2350, un microcontrolador de vanguardia de Seeed Studio. Cuenta con un procesador de doble núcleo, mayor SRAM y memoria flash, y conectividad mejorada.
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /es/getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
  </a>
</div><br></br>

El XIAO RP2350 empaqueta la potencia del Raspberry Pi RP2350 (núcleos duales Cortex-M33 funcionando a 150MHz con FPU, seguridad y cifrado mejorados) en el factor de forma clásico XIAO. Midiendo solo 21x17.8mm, cuenta con 19 GPIOs multifunción, un LED RGB, y un Sistema de Gestión de Batería con consumo ultra bajo de 50μA, alimentación por batería, y medición directa del voltaje de la batería. Gracias al ecosistema XIAO, el XIAO RP2350 es compatible con una amplia gama de complementos, incluyendo pantallas, matriz LED, módulos Grove, Bus CAN, sensores Vision AI, y sensores mmWave. Con soporte nativo para MicroPython, C, y C++, el XIAO RP2350 es perfecto para desarrolladores de todos los niveles que buscan crear aplicaciones compactas alimentadas por batería para control inteligente, wearables, teclados DIY, y más.

## Características

- **Placa MCU Potente:** Equipada con un chip Raspberry Pi RP2350 que cuenta con dual Arm Cortex-M33 simétrico @ 150MHz con FPU.
- **Características de Seguridad Mejoradas:** Arranque seguro integrado y bootloader cifrado aseguran la seguridad de la aplicación.
- **Soporte de Software:** Compatible con C/C++ y MicroPython, asegurando desarrollo fácil de proyectos y prototipado.
- **Recursos Integrados Ricos:** Integra un LED RGB, 2MB Flash, 520kB SRAM, y 19 GPIOs multifunción(Analógico, Digital, I²C, UART, SPI, PWM).
- **8 Nuevos IOs Expandidos:** Comparado con MCUs XIAO anteriores, la adición de 8 pines IO en la parte trasera soporta aplicaciones más complejas.
- **Diseño de Energía Eficiente:** Consumo ultra bajo de solo 50μA en modo de suspensión, habilitando alimentación por batería. Medición directa del voltaje de la batería vía IO interno mejora el sistema de gestión de batería (BMS).
- **Diseño Compacto del Tamaño del Pulgar:** Midiendo 21 x 17.8mm, adoptando el factor de forma clásico XIAO de Seeed Studio, ideal para aplicaciones conscientes del espacio.
- **Amigable para Producción:** Diseño de Dispositivo de Montaje Superficial (SMD) con todos los componentes en el frente y agujeros de estampado en ambos lados, facilitando la producción en masa eficiente.

## Especificación

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
        <td>2MB Flash</td>
    </tr>
    <tr>
        <td>LEDs</td>
        <td>1 user LED(3 colors), 1 power LED, 1 RGB LED</td>
        <td>1 user LED, 1 charge LED(Battery Charging Indicator)，1 RGB LED</td>
    </tr>
    <tr>
        <td>Interfaz</td>
        <td>11 Pins:4x Analog,11x Digital, 1x I²C, 1x UART, 1x SPI, All PWM</td>
        <td><b>19 Pins:3x Analog,19x Digital, 2x I²C, 2x UART, 2x SPI, All PWM</b></td>
    </tr>
    <tr>
        <td>Botón</td>
        <td align="center" colspan="2">1 botón RESET, 1 botón BOOT</td>
    </tr>
    <tr>
        <td>Seguridad</td>
       <td align="center"> - </td>
        <td>OTP, Secure Boot, Arm TrustZone</td>
    </tr>
    <tr>
        <td>Bajo consumo</td>
       <td align="center"> - </td>
        <td>4.2V/50uA</td>
    </tr>
    <tr>
        <td>Compatibilidad de software</td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr, <a href="https://wiki.seeedstudio.com/es/xiao_topic_page/">y más por venir</a></td>
        <td>Arduino, PlatformIO, MicroPython, CircuitPython, <a href="https://wiki.seeedstudio.com/es/xiao_topic_page/">y más por venir</a></td>
    </tr>
    <tr>
        <td>Temperatura de Funcionamiento</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>Dimensiones</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## Descripción General del Hardware

<div class="table-center">
<table align="center">
 <tr>
     <th>Pinout Frontal XIAO RP2350</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>Pinout Trasero XIAO RP2350</th>
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

¿Necesitas más detalles sobre los pinouts? Navega a [Recursos y Activos](#recursos-y-activos) abajo.

## Plataforma Soportada

El XIAO RP2350, alimentado por el RP2350, soporta MicroPython y el SDK C/C++ proporcionado por Raspberry Pi. Esta flexibilidad permite a los desarrolladores elegir su lenguaje de programación y entorno preferido para prototipado y desarrollo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>SDK C/C++</th>
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

## Introducción▶️

:::info attention
Esta página se enfoca principalmente en usuarios de MicroPython. Para aquellos interesados en aprender programación SDK o para usuarios avanzados, es posible que quieran comenzar con el [SDK C/C++ de la serie Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf). Esta guía te ayudará a configurar el entorno y comenzar con código de ejemplo. Adicionalmente, puedes visitar [XIAO RP2350 con SDK C/C++](/es/xiao-rp2350-c-cpp-sdk) para instrucciones más específicas relacionadas con el XIAO RP2350.
:::

:::tip
Actualmente, la función ADC puede no funcionar correctamente cuando se usa el [firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/SEEED_XIAO_RP2350.uf2) oficial. Por favor descarga y usa nuestro firmware modificado primero. Una vez que el pull request sea fusionado, actualizaremos el contenido relevante en la Wiki en consecuencia.
:::

### Paso 1: Instalando MicroPython en XIAO RP2350

Para instalar el firmware de MicroPython en el XIAO RP2350, sigue estos pasos:

**Paso 1.1. Descargar el Firmware de MicroPython:**  

- Navega a la página de [Descargas de MicroPython](https://micropython.org/download/SEEED_XIAO_RP2350/).
- Descarga el archivo de firmware `.uf2` más reciente compatible con el XIAO RP2350.

:::tip
El firmware por defecto es para arquitectura ARM, si quieres usar RISC-V, por favor usa la versión de firmware correspondiente en el enlace.
:::

**Paso 1.2 Entrar en Modo BOOTSEL:**  

Puedes entrar en modo BOOTSEL en el XIAO RP2350 usando cualquiera de los dos métodos a continuación:

<Tabs>
<TabItem value="method1" label="Método 1: Antes de Conectar a la Computadora" default>

1. **Presiona y Mantén el Botón BOOT**:  
   Mientras tu XIAO RP2350 está desconectado de tu computadora, **presiona y mantén** el botón BOOT.
2. **Conecta a tu Computadora**:  
   Mientras mantienes el botón BOOT, conecta el XIAO RP2350 a tu computadora usando un cable USB.
3. **Suelta el Botón BOOT**:  
   Después de que la placa esté conectada a tu computadora, puedes soltar el botón BOOT. El XIAO RP2350 ahora debería estar en modo BOOTSEL, y tu computadora lo reconocerá como un dispositivo de almacenamiento removible.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantener Boot-> Conectar Cable-> Soltar Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="Método 2: Mientras Está Conectado a la Computadora">

1. **Presiona y Mantén el Botón BOOT**:  
   Con el XIAO RP2350 ya conectado a tu computadora, presiona y mantén el botón BOOT.
2. **Haz Clic en el Botón RESET**:  
   Mientras aún mantienes el botón BOOT, presiona y suelta el botón RESET, que está etiquetado como "B" en la esquina inferior derecha de la placa en la imagen de arriba.
3. **Suelta el Botón BOOT**:  
   Después de presionar el botón RESET, suelta el botón BOOT. El XIAO RP2350 ahora debería estar en modo BOOTSEL, y tu computadora lo reconocerá como un dispositivo de almacenamiento removible.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantener Boot-> Hacer Clic en Reset-> Soltar Boot</em></div>
</div>

</TabItem>
</Tabs>

**Paso 1.3. Instalar el Firmware:**  

- **Arrastra y suelta** el archivo `.uf2` descargado en la unidad de almacenamiento removible del XIAO RP2350.
- La placa se reiniciará automáticamente después de que el archivo sea copiado, completando la instalación del firmware.

### Paso 2: Instalando Thonny IDE

:::tip about MicroPython

[MicroPython](https://micropython.org/) es un lenguaje interpretado similar a [Python](https://www.python.org/). Sin embargo, a diferencia de Python, MicroPython se ejecuta directamente en el hardware (bare-metal), proporcionando un prompt interactivo (REPL) para ejecutar comandos inmediatamente, así como la capacidad de ejecutar e importar scripts desde el sistema de archivos integrado.

Para conectarte a la placa XIAO RP2350 y comenzar a escribir y ejecutar tu código Python, puedes usar cualquier herramienta de terminal que soporte conexiones serie, como minicom, PuTTY, electerm, warp, y más. Para una *experiencia más amigable*, puedes usar **[Thonny](https://thonny.org/)** por su facilidad de uso, características integradas e interfaz amigable para principiantes. De esta manera, puedes disfrutar escribiendo y ejecutando tu código Python directamente en el dispositivo.

:::

Thonny IDE es un editor de Python amigable para principiantes que es excelente para el desarrollo con MicroPython. Aquí te mostramos cómo instalarlo:

1. **Descargar Thonny:**  
   - Visita la [Página de Descarga de Thonny](https://thonny.org/).
   - Elige el instalador apropiado para tu sistema operativo (Windows, macOS, o Linux) y descárgalo.

2. **Instalar Thonny:**  
   - **Ejecuta** el instalador descargado.
   - **Sigue** las instrucciones en pantalla para completar el proceso de instalación.

3. **Configurar Thonny para MicroPython:**  
   - **Abre** Thonny IDE.
   - Mira en la esquina inferior derecha de la ventana de Thonny.
   - Haz clic en el área de selección del **intérprete**.
   - Elige **'MicroPython (RP2040)'** del menú desplegable.
   - Asegúrate de que el **Puerto** correcto esté seleccionado—Thonny típicamente lo detecta automáticamente.

¡Ahora estás listo para escribir y subir código MicroPython a tu XIAO RP2350 usando Thonny IDE!

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="Consola PuTTY">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

Si tu dispositivo está listo con MicroPython, comencemos con un proyecto simple:

### ¡Hagamos que Parpadee! ✨

Hacer que la placa parpadee un LED es a menudo el primer programa que todos ejecutan. Lo mismo ocurre con el XIAO RP2350.

:::note
El `USER LED`, el LED amarillo en el XIAO RP2350, está conectado a `GPIO25/D19` según el diagrama esquemático.
Para todas las placas de la familia XIAO, el `USER LED` se **encenderá** cuando se establezca a `nivel bajo` y se **apagará** cuando se establezca a `nivel alto`.
:::

<Tabs>
  <TabItem value="blink" label="Parpadeo" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="Desvanecer un LED" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
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

Una vez que hayas copiado el código en Thonny IDE, como se muestra en la imagen de abajo, simplemente haz clic en el botón `Run current script` o presiona `F5`. Esto ejecutará el fragmento de código y verás el LED en el XIAO RP2350 comenzar a parpadear.

### Jugar con LEDs RGB

El XIAO RP2350 viene con un LED RGB integrado que puedes controlar usando MicroPython. A continuación se muestra un ejemplo de cómo alternar entre diferentes colores:

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
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

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
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

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### Batería y Gestión de Energía

¿Es posible leer el voltaje de la batería sin componentes adicionales? Sí, con el XIAO RP2350, es más fácil que nunca. En miembros anteriores de la familia XIAO, como el [XIAO ESP32C3](/es/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), leer el voltaje de la batería requería conectar manualmente a *A0* con una resistencia.

Pero con el XIAO RP2350, este proceso se simplifica. Ahora puedes usar directamente el pin `A3/GPIO29` para leer el nivel de voltaje de la batería, simplificando tu diseño y desarrollo. Solo recuerda establecer el pin `GPIO19` en alto, ya que es necesario para habilitar la lectura del nivel de batería.

Sigue este fragmento de código para leer el voltaje de la batería usando el Pico SDK:

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")

    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference

    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

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

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>

## Recursos y Activos

El XIAO RP2350 aprovecha el poder del Raspberry Pi RP2350, utilizando una gran cantidad de recursos compartidos de la comunidad Raspberry Pi. Esto abre un mundo de posibilidades para que personalices tus proyectos en esta pequeña placa con creatividad ilimitada. A continuación se presentan recursos y activos esenciales para ayudarte a comenzar.

***Hojas de Datos y Esquemas***

- 📄 **[PDF]** [Hoja de Datos RP2350](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Esquema Seeed Studio XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Hoja de Pines Seeed Studio XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Dimensiones Seeed Studio XIAO RP2350 en DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[Enlace]** [Archivo 3D STEP Seeed Studio XIAO RP2350](https://grabcad.com/library/seeed-studio-xiao-rp2350-2)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [Firmware de Prueba de Bajo Consumo](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***Recursos Relacionados***

- 📄 **[PDF]** [Introducción a la serie Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf): Una guía completa para configurar y programar placas Raspberry Pi Pico, ideal para principiantes que buscan aprender MicroPython o C/C++.
- 📄 **[PDF]** [SDK Python de la serie Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf) el libro que documenta los tutoriales de configuración de MicroPython y las APIs
- 📄 **[PDF]** [SDK C/C++ de la serie Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) el libro que documenta las APIs del SDK C/C++ de Pico
- 🔗 **[Kicad]** [Huella Seeed Studio XIAO RP2350](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Expansión y Aplicaciones

[La serie XIAO](/es/xiao_topic_page) tiene una amplia gama de periféricos y accesorios periféricos para que aprendas y uses, ya sea que quieras una pantalla colorida que permita una interacción perfecta, una placa integrada con luces RGB brillantes y simples, y mucho más, solo esperando a ser explorados.

Como miembro de la familia XIAO, el XIAO RP2350 hace lo mismo. Por supuesto, para hacer un mejor uso de los pines adicionales disponibles, nuevos *periféricos y placas* seguirán llegando, aprovechando completamente el rendimiento para el cual fue creado.

- 🌟 **[Expandiendo con Accesorios](/es/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Descubre la amplia gama de complementos y módulos compatibles con la Familia XIAO, desde pantallas y matrices LED hasta módulos Grove y sensores, y aprende cómo pueden mejorar tus proyectos.

### Comunidad y Aprendizaje

Además, sumérgete en la vibrante comunidad de Raspberry Pi para expandir tu conocimiento y descubrir nuevas ideas de proyectos. Aprovecha los recursos compartidos por la comunidad, foros y tutoriales para mejorar tu experiencia con el XIAO RP2350. Además del Wiki de Seeed Studio, aquí hay algunos otros lugares recomendados para aprender:

- **[Documentación de Raspberry Pi](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: Obtén información confiable y actualizada sobre el RP2350.
- **[Foros de Raspberry Pi](https://www.raspberrypi.org/forums/)**: Interactúa con otros entusiastas, haz preguntas y comparte tus proyectos.
- **[Repositorio GitHub de XIAO](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: Explora el repositorio oficial de XIAO para documentación más centralizada y más interacción con nuestro equipo, **¡Únete a Nosotros!**
- **[r/embedded en Reddit](https://www.reddit.com/r/embedded/)**: Únete a la comunidad de sistemas embebidos, comparte ideas y discute varios temas.
- **[Tema Pico en GitHub](https://github.com/topics/pico)**: Explora repositorios y discusiones relacionadas con el Pico.
- **[Hackster.io](https://www.hackster.io/)**: Descubre proyectos y tutoriales relacionados con varias plataformas de hardware, incluyendo XIAO y Raspberry Pi.
- **[Instructables](https://www.instructables.com/)**: Encuentra proyectos DIY y guías paso a paso para crear con XIAO y otro hardware.
- **[Comunidad Element14](https://www.element14.com/community/)**: Participa en discusiones, webinars y proyectos relacionados con electrónica y sistemas embebidos.

Y más, siempre eres bienvenido a compartir tus proyectos en nuestro [Discord de Seeed Studio](https://discord.com/invite/kpY74apCWj) y [Foro de Seeed Studio](https://forum.seeedstudio.com/). Estas plataformas proporcionan una excelente oportunidad para conectar con otros makers, obtener retroalimentación y encontrar inspiración. Ya sea que necesites ayuda para solucionar un problema, quieras mostrar tu última creación, o simplemente desees ser parte de una comunidad de apoyo, *el Discord y Foro de Seeed Studio* son los lugares perfectos para participar y colaborar.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

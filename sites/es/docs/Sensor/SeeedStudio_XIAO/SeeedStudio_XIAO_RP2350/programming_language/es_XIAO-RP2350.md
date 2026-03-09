---
title: Seeed Studio XIAO RP2350 con MicroPython
description: |
  XIAO RP2350, un microcontrolador de vanguardia de Seeed Studio. Incorpora un procesador de doble núcleo, mayor memoria SRAM y flash, y conectividad mejorada.
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /getting-started-xiao-rp2350
sku: 102010550,102010637
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
createdAt: '2024-08-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/getting-started-xiao-rp2350/
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

El XIAO RP2350 integra la potencia del Raspberry Pi RP2350 (dos núcleos Cortex-M33 funcionando a 150 MHz con FPU, seguridad y cifrado mejorados) en el clásico factor de forma XIAO. Con unas dimensiones de solo 21 x 17,8 mm, incorpora 19 GPIO multifunción, un LED RGB y un sistema de gestión de batería con un consumo ultrabajo de 50 μA, alimentación por batería y medición directa del voltaje de la batería. Gracias al ecosistema XIAO, el XIAO RP2350 es compatible con una amplia gama de complementos, incluidos pantallas, matrices LED, módulos Grove, bus CAN, sensores de IA de visión y sensores mmWave. Con compatibilidad nativa para MicroPython, C y C++, el XIAO RP2350 es perfecto para desarrolladores de todos los niveles que deseen crear aplicaciones compactas y alimentadas por batería para control inteligente, wearables, teclados DIY y más.


## Plataformas compatibles

El XIAO RP2350, impulsado por el RP2350, es compatible con MicroPython y con el SDK de C/C++ proporcionado por Raspberry Pi. Esta flexibilidad permite a los desarrolladores elegir su lenguaje de programación y entorno preferidos para la creación de prototipos y el desarrollo.

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

## Primeros pasos▶️

:::info attention
Esta página se centra principalmente en los usuarios de MicroPython. Para quienes estén interesados en aprender programación con SDK o para usuarios avanzados, quizá quieran comenzar con el [Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf). Esta guía le ayudará a configurar el entorno y comenzar con código de ejemplo. Además, puede visitar [XIAO RP2350 with C/C++ SDK](/es/xiao-rp2350-c-cpp-sdk) para obtener instrucciones más específicas relacionadas con el XIAO RP2350.
:::

### Paso 1:Instalar MicroPython en XIAO RP2350

Para instalar el firmware de MicroPython en el XIAO RP2350, siga estos pasos:

**Paso 1.1. Descargar el firmware de MicroPython:**  

- Vaya a la página [MicroPython Downloads](https://micropython.org/download/SEEED_XIAO_RP2350/).
- Descargue el archivo de firmware `.uf2` más reciente compatible con el XIAO RP2350.

:::tip
1. El firmware predeterminado es para arquitectura ARM; si desea usar RISC-V, utilice la versión de firmware correspondiente en el enlace.

2. Asegúrese de estar utilizando la versión más reciente del firmware, ya que las versiones antiguas pueden contener diversas vulnerabilidades de software.
:::

**Paso 1.2. Entrar en modo BOOTSEL:**  

Puede entrar en modo BOOTSEL en el XIAO RP2350 utilizando cualquiera de los dos métodos siguientes:

<Tabs>
<TabItem value="method1" label="Method 1: Before Connecting to Computer" default>

1. **Press and Hold the BOOT Button**:  
   While your XIAO RP2350 is disconnected from your computer, **press and hold** the BOOT button.
2. **Connect to Your Computer**:  
   While holding the BOOT button, connect the XIAO RP2350 to your computer using a USB cable.
3. **Release the BOOT Button**:  
   After the board is connected to your computer, you can release the BOOT button. The XIAO RP2350 should now be in BOOTSEL mode, and your computer will recognize it as a removable storage device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantener Boot-> Conectar el cable-> Soltar Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="Method 2: While Connected to Computer">

1. **Press and Hold the BOOT Button**:  
   With the XIAO RP2350 already connected to your computer, press and hold the BOOT button.
2. **Click the RESET Button**:  
   While still holding the BOOT button, press and release the RESET button, which is labeled "B" on the bottom right corner of the board in the image above.
3. **Release the BOOT Button**:  
   After pressing the RESET button, release the BOOT button. The XIAO RP2350 should now be in BOOTSEL mode, and your computer will recognize it as a removable storage device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Mantener Boot-> Pulsar Reset-> Soltar Boot</em></div>
</div>

</TabItem>
</Tabs>

**Paso 1.3. Instalar el firmware:**  

- **Arrastre y suelte** el archivo `.uf2` descargado en la unidad de almacenamiento extraíble del XIAO RP2350.
- La placa se reiniciará automáticamente después de copiar el archivo, completando la instalación del firmware.

### Paso 2:Instalar Thonny IDE

:::tip about MicroPython

[MicroPython](https://micropython.org/) es un lenguaje interpretado similar a [Python](https://www.python.org/). Sin embargo, a diferencia de Python, MicroPython se ejecuta directamente sobre el hardware (bare-metal), proporcionando un intérprete interactivo (REPL) para ejecutar comandos de inmediato, así como la capacidad de ejecutar e importar scripts desde el sistema de archivos integrado.

Para conectarse a la placa XIAO RP2350 y comenzar a escribir y ejecutar su código Python, puede utilizar cualquier herramienta de terminal que admita conexiones serie, como minicom, PuTTY, electerm, warp y más. Para una *experiencia más fácil de usar*, puede utilizar **[Thonny](https://thonny.org/)** por su facilidad de uso, funciones integradas e interfaz amigable para principiantes. De este modo, podrá disfrutar escribiendo y ejecutando su código Python directamente en el dispositivo.

:::

Thonny IDE es un editor de Python para principiantes que resulta excelente para el desarrollo con MicroPython. A continuación se explica cómo instalarlo:

1. **Descargar Thonny:**  
   - Visite la [Thonny Download Page](https://thonny.org/).
   - Elija el instalador adecuado para su sistema operativo (Windows, macOS o Linux) y descárguelo.

2. **Instalar Thonny:**  
   - **Ejecute** el instalador descargado.
   - **Siga** las instrucciones en pantalla para completar el proceso de instalación.

3. **Configurar Thonny para MicroPython:**  
   - **Abra** Thonny IDE.
   - Mire en la esquina inferior derecha de la ventana de Thonny.
   - Haga clic en el área de selección del **interpreter**.
   - Elija **'MicroPython (RP2040)'** en la lista desplegable.
   - Asegúrese de que el **Port** correcto esté seleccionado; Thonny normalmente lo detecta automáticamente.

¡Ahora ya está listo para escribir y cargar código MicroPython en su XIAO RP2350 usando Thonny IDE!

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY Console">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

Si su dispositivo ya está listo con MicroPython, comencemos con un proyecto sencillo:

### ¡Hagamos que parpadee! ✨

Conseguir que la placa haga parpadear un LED suele ser el primer programa que todos ejecutan. Lo mismo ocurre con el XIAO RP2350.

:::note
El `USER LED`, el LED amarillo del XIAO RP2350, está conectado a `GPIO25/D19` según el diagrama esquemático.
Para todas las placas de la familia XIAO, el `USER LED` se **encenderá** cuando se configure a `low level` y se **apagará** cuando se configure a `high level`.
:::

<Tabs>
  <TabItem value="blink" label="Blink" default>

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
  <TabItem value="pwm" label="Fading a LED" default>

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

Una vez que hayas copiado el código en Thonny IDE, como se muestra en la imagen de abajo, simplemente haz clic en el botón `Run current script` o presiona `F5`. Esto ejecutará el fragmento de código y verás que el LED del XIAO RP2350 comienza a parpadear.

### Juega con los LEDs RGB

El XIAO RP2350 viene con un LED RGB integrado que puedes controlar usando MicroPython. A continuación se muestra un ejemplo de cómo recorrer diferentes colores:

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

### Batería y gestión de energía

¿Es posible leer el voltaje de la batería sin componentes adicionales? Sí, con el XIAO RP2350 es más fácil que nunca. En miembros anteriores de la familia XIAO, como el [XIAO ESP32C3](/es/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), leer el voltaje de la batería requería conectarse manualmente a *A0* con una resistencia.

Pero con el XIAO RP2350, este proceso se simplifica. Ahora puedes usar directamente el pin `A3/GPIO29` para leer el nivel de voltaje de la batería, agilizando tu diseño y desarrollo. Solo recuerda configurar el pin `GPIO19` a alto, ya que es necesario para habilitar la lectura del nivel de la batería.

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


### Expansión y aplicaciones

[La serie XIAO](/es/xiao_topic_page) tiene una gran variedad de periféricos y accesorios periféricos para que aprendas y uses; tanto si quieres una pantalla colorida que permita una interacción perfecta, como una placa integrada con luces RGB brillantes y sencillas, etc., todo está esperando a que lo explores.

Como miembro de la familia XIAO, el XIAO RP2350 hace lo mismo. Por supuesto, para aprovechar mejor los pines adicionales expuestos, seguirán apareciendo nuevos *periféricos y placas*, utilizando plenamente el rendimiento para el que fue creado.

- 🌟 **[Ampliación con accesorios](/es/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Descubre la amplia gama de complementos y módulos compatibles con la familia XIAO, desde pantallas y matrices de LED hasta módulos Grove y sensores, y aprende cómo pueden mejorar tus proyectos.

### Comunidad y aprendizaje

Además, sumérgete en la vibrante comunidad de Raspberry Pi para ampliar tus conocimientos y descubrir nuevas ideas de proyectos. Aprovecha los recursos compartidos por la comunidad, foros y tutoriales para mejorar tu experiencia con el XIAO RP2350. Además de la Wiki de Seeed Studio, aquí tienes otros lugares recomendados para aprender:

- **[Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: Obtén información fiable y actualizada sobre el RP2350.
- **[Raspberry Pi Forums](https://www.raspberrypi.org/forums/)**: Interactúa con otros entusiastas, haz preguntas y comparte tus proyectos.
- **[XIAO GitHub Repository](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: Explora el repositorio oficial de XIAO para obtener documentación más centralizada y más interacción con nuestro equipo, **¡Únete a nosotros!**
- **[r/embedded on Reddit](https://www.reddit.com/r/embedded/)**: Únete a la comunidad de sistemas embebidos, comparte ideas y debate sobre diversos temas.
- **[Pico Topic on GitHub](https://github.com/topics/pico)**: Explora repositorios y debates relacionados con el Pico.
- **[Hackster.io](https://www.hackster.io/)**: Descubre proyectos y tutoriales relacionados con varias plataformas de hardware, incluyendo XIAO y Raspberry Pi.
- **[Instructables](https://www.instructables.com/)**: Encuentra proyectos DIY y guías paso a paso para crear con XIAO y otros hardware.
- **[Element14 Community](https://www.element14.com/community/)**: Participa en debates, seminarios web y proyectos relacionados con la electrónica y los sistemas embebidos.

Y mucho más; siempre eres bienvenido a compartir tus proyectos en nuestro [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) y [Seeed Studio Forum](https://forum.seeedstudio.com/). Estas plataformas brindan una excelente oportunidad para conectar con otros makers, recibir comentarios y encontrar inspiración. Tanto si necesitas ayuda para solucionar un problema, quieres mostrar tu última creación o simplemente deseas formar parte de una comunidad solidaria, *el Discord y el Foro de Seeed Studio* son los lugares perfectos para participar y colaborar.

## Soporte técnico y debate sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

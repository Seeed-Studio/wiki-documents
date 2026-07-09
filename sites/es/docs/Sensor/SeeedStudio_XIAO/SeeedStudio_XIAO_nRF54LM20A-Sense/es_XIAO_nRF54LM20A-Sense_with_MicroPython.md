---
title: Seeed Studio XIAO nRF54LM20A Sense con MicroPython
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_started/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_micropython
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-06-15'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_micropython/
---

# Seeed Studio XIAO nRF54LM20A Sense con MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con soporte para emisión de código nativo para el código crítico en rendimiento. Proporciona un subconjunto de las funciones principales de Python 3.6+, optimizado para microcontroladores y sistemas con recursos limitados. Es diferente de CPython, y puedes leer más sobre las diferencias en la página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Uso de MicroPython con XIAO nRF54LM20A Sense

A continuación, te guiaré sobre cómo usar **MicroPython** en la **XIAO nRF54LM20A Sense** y programarla con [Thonny IDE](https://thonny.org/), basado en el sistema operativo Windows.

### Preparación de hardware

Antes de comenzar, necesitas preparar una placa de desarrollo XIAO nRF54LM20A Sense.


<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### Instalar [Thonny IDE](https://thonny.org/)

Elige la versión adecuada para la instalación. Aquí lo estoy instalando en un sistema Windows, por lo que he seleccionado la versión para Windows.

Sigue las instrucciones para la versión de Python deseada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Luego, simplemente sigue los pasos predeterminados para la configuración.

### Despliegue del firmware de MicroPython

A continuación, te guiaremos sobre cómo desplegar el firmware de MicroPython en la XIAO nRF54LM20A Sense.

:::tip

Antes de grabar el firmware, conecta la XIAO nRF54LM20A Sense a tu ordenador

:::


1. Descargar el paquete comprimido del firmware


<div class="xiao_nrf54lm20a_flash.zip.zip" style={{textAlign: 'center'}}>
    <a class="xiao_nrf54lm20a_flash.zip.zip" href="https://github.com/Seeed-Studio/micropython-seeed-boards/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. Descomprimir la carpeta

Es necesario descomprimir la carpeta en cualquier directorio, y aparecerá el contenido de los siguientes archivos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/1.1.png" style={{width:400, height:'auto'}}/></div>

3. Usar un script para grabar el firmware de MicroPython

- Para Windows, haz clic derecho en la carpeta extraída para abrir una terminal de PowerShell y ejecuta el script de grabación. Después de que el script se ejecute correctamente, los resultados de salida se muestran en la siguiente figura

```bash
.\flash.bat
```


- Para Mac/Linux

```bash
cd ~/xiao_nrf54lm20a_flash

sed -i '' $'s/\r$//' xiao_nrf54lm20a_flash.sh

chmod +x xiao_nrf54lm20a_flash.sh
./xiao_nrf54lm20a_flash.sh
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/2.png" style={{width:800, height:'auto'}}/></div>

### Probar el efecto de la grabación

Este capítulo te guía principalmente para configurar Thonny IDE



1. Abre Thonny IDE, haz clic en la esquina inferior derecha para prepararte para seleccionar Configure interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/3.png" style={{width:800, height:'auto'}}/></div>

2. Selecciona **MicroPython (generic)**, elige el **Port** correspondiente según el dispositivo y haz clic en OK

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/4.png" style={{width:800, height:'auto'}}/></div>

3. Después de la conexión exitosa, se verá como en la figura siguiente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/5.png" style={{width:800, height:'auto'}}/></div>

4. En File -> New, crea un archivo nuevo y realiza una prueba de guardado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/6.png" style={{width:800, height:'auto'}}/></div>

5. Después de grabar el firmware, escribe un programa en Python para hacer que el LED RGB-B parpadee con una frecuencia de cada 0,5 segundos

```py
from machine import Pin
import time

led_r = Pin(("gpio1", 22), Pin.OUT)
led_g = Pin(("gpio1", 24), Pin.OUT)
led_b = Pin(("gpio1", 23), Pin.OUT)

led_r.value(1)
led_g.value(1)
led_b.value(1)

while True:
    led_b.value(0)          
    time.sleep_ms(500)     

    led_b.value(1)         
    time.sleep_ms(500)      
```

6. Haz clic en el botón de la esquina superior izquierda para ejecutar el programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/7.png" style={{width:800, height:'auto'}}/></div>

- El efecto del programa se muestra en la figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/12.gif" style={{width:800, height:'auto'}}/></div>

## Digital

Los pines digitales se utilizan principalmente para el control de encendido y apagado de sensores y actuadores externos mediante la salida de niveles lógicos altos y bajos. Combinado con la placa de expansión Grove Base for XIAO y los módulos periféricos estándar Grove, esta sección demuestra cómo usar los pines digitales en la XIAO nRF54LM20A Sense con MicroPython.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

De acuerdo con el pinout de la XIAO nRF54LM20A Sense, se puede seleccionar **D0 (P1.0)** como el pin de control para el **Grove-Button**, y **D1 (P1.31)** se puede seleccionar como el pin de control para el **Grove-Piezo Buzzer**.

:::tip

- Para el pinout de la XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver los detalles.

:::

```python
"""
Grove Button (D0 / P1.0) + Grove Piezo Buzzer (D1 / P1.31) - Digital mode
Button pressed → Buzzer ON; Button released → Buzzer OFF
"""

import time
from boards.xiao import XiaoPin

BUTTON = 0   # D0  → P1.0 (Grove Button, onboard pull-down)
BUZZER = 1   # D1  → P1.31 (Grove Piezo Buzzer)

try:
    button = XiaoPin(BUTTON, XiaoPin.IN)
    buzzer = XiaoPin(BUZZER, XiaoPin.OUT)
    buzzer.value(0)
    print("Digital demo started. Press the button to activate the buzzer.")

    while True:
        val = button.value()
        buzzer.value(val)
        time.sleep(0.01)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    buzzer.value(0)
```

**Explicación del código:**

1. **Importaciones y definiciones de pines:** `XiaoPin` de `boards.xiao` proporciona control de GPIO. `BUTTON = 0` se asigna a D0 (P1.0), `BUZZER = 1` se asigna a D1 (P1.31).
2. **Inicialización:** El pin del botón se configura como entrada (el Grove Button tiene una resistencia de pull-down integrada — HIGH cuando se presiona). El pin del zumbador se configura como salida, inicializado en LOW (apagado).
3. **Bucle principal:** Lee continuamente el estado del botón y lo escribe directamente en el zumbador. Cuando se presiona el botón (HIGH), el zumbador se enciende; cuando se suelta (LOW), el zumbador se apaga. Una pausa de 10 ms evita un bucle ocupado.
4. **Limpieza:** El bloque `finally` garantiza que el zumbador se apague cuando el programa finaliza.

### Resultado

Después de ejecutar el programa, presiona el botón y el zumbador emitirá un pitido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM conmuta rápidamente los niveles del pin a una frecuencia fija y ajusta dinámicamente el ciclo de trabajo, generando señales analógicas equivalentes hacia los periféricos. Se utiliza ampliamente para el control preciso del ángulo de servomotores y el ajuste suave del brillo de los LED.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

De acuerdo con el pinout del XIAO nRF54LM20A Sense, **D0 (P1.0)** se puede seleccionar como el pin de control para el **Grove-Servo**.

:::tip

- Para el pinout del XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver los detalles.

:::

```python
"""
Servo control on D0 (P1.0) via PWM (50 Hz).
Sweeps 0 → 180° and back.
"""

import time
from boards.xiao import XiaoPWM

SERVO_PIN = 0             # D0 → P1.0
FREQ = 50                 # Standard servo: 50 Hz
PERIOD_NS = 20_000_000    # 20 ms period in nanoseconds

# Standard servo: 0.5 ms → 0°, 2.5 ms → 180°
MIN_NS = 500_000
MAX_NS = 2_500_000

STEP_MS = 30              # 30 ms per degree step

try:
    servo = XiaoPWM(SERVO_PIN)
    servo.init(freq=FREQ, duty_ns=MIN_NS)
    print("PWM servo demo started on D0 (P1.0).")

    while True:
        # 0° → 180°
        for angle in range(0, 181):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

        # 180° → 0°
        for angle in range(180, -1, -1):
            pulse = MIN_NS + int((angle / 180.0) * (MAX_NS - MIN_NS))
            servo.duty_ns(pulse)
            print("Angle: %d deg" % angle)
            time.sleep_ms(STEP_MS)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    servo.deinit()
```

**Explicación del código:**

1. **Importaciones y constantes:** `XiaoPWM` proporciona salida PWM. Los servos estándar de hobby funcionan a 50 Hz con un ancho de pulso de 0.5–2.5 ms correspondiente a una rotación de 0–180°.
2. **Inicialización:** El canal PWM se inicializa en D0 con una frecuencia de 50 Hz. El ciclo de trabajo inicial se establece en el ancho de pulso mínimo (posición de 0°).
3. **Bucle principal:** Dos bucles anidados barren el servo de 0° a 180° y luego de vuelta. El ángulo se convierte en un ancho de pulso en nanosegundos mediante interpolación lineal. El ángulo actual se imprime en la consola.
4. **Limpieza:** `servo.deinit()` libera el recurso PWM en el bloque `finally`.

### Resultado

Después de flashear el firmware, el servo gira de 0° a 180° a una velocidad de 33 radianes por segundo y luego vuelve a girar a 0°.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

Mientras tanto, el ángulo actual del servo se imprimirá a través del puerto serie USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/13.png" style={{width:800, height:'auto'}}/></div>

## Analógico

La entrada analógica se basa en un convertidor analógico-digital (ADC) y se utiliza principalmente para capturar señales de voltaje analógicas continuas de sensores externos. Los valores digitales de muestreo en bruto se pueden mapear a valores reales de medición de ingeniería utilizando algoritmos de conversión lineales o no lineales.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

De acuerdo con el pinout del XIAO nRF54LM20A Sense, **D0 (P1.0, AIN0)** se utiliza como pin de entrada ADC. El valor del ADC se lee y se imprime a través del puerto serie USB cada 500 ms.

:::tip

- Para el pinout del XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver los detalles.

:::

```python
"""
Read ADC on D0 (P1.0 / AIN0) and print raw value every 500 ms.
"""

import time
from boards.xiao import XiaoADC

ADC_PIN = 0   # D0 → P1.0 (AIN0)

try:
    adc = XiaoADC(ADC_PIN)
    print("ADC demo started on D0 (P1.0 / AIN0).")

    while True:
        raw = adc.read_uv()
        voltage = raw / 1_000_000.0
        print("ADC raw: %d uV  |  Voltage: %.3f V" % (raw, voltage))
        time.sleep(0.5)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

**Explicación del código:**

1. **Importaciones:** `XiaoADC` de `boards.xiao` proporciona funcionalidad ADC. `ADC_PIN = 0` se asigna a D0 (P1.0 / AIN0).
2. **Inicialización:** `XiaoADC(ADC_PIN)` configura el pin para la conversión analógico-digital.
3. **Bucle principal:** `adc.read_uv()` devuelve la lectura del ADC en microvoltios (µV). El valor se convierte a voltios para su visualización. Tanto las lecturas en µV sin procesar como el voltaje se imprimen cada 500 ms.
4. **Manejo de errores:** `try/except/finally` garantiza un apagado correcto.

### Resultado

Después de flashear el programa, inserta el Grove-Capacitive Soil Moisture Sensor en plantas en maceta domésticas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
Abre el asistente de puerto serie en tu ordenador y observa los valores de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/9.png" style={{width:800, height:'auto'}}/></div>

:::tip

Tabla de lectura de referencia de voltaje
| Estado     | Voltaje de salida del sensor | Valor bruto ADC esperado|
| -------------- | -------------- | ---------------- |
| En aire (seco) | ~2.0–2.4V      | ~3400–4095       |
| En suelo húmedo       | ~1.3–1.8V      | ~2200–3000       |
| Totalmente sumergido en agua   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

Debido a las diferencias individuales de los componentes, las mediciones de diferentes módulos en el mismo entorno pueden variar.

:::

## UART

El receptor/transmisor asíncrono universal (UART) es un protocolo estándar de comunicación serie asíncrona. No requiere señales de reloj externas para la sincronización y realiza la transmisión y recepción de datos basándose en la velocidad en baudios preestablecida por ambas partes. Se puede establecer un enlace de datos full-dúplex simplemente cruzando los pines TX y RX.

### Preparación de hardware


<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Adaptador de módulo CH340G USB-a-Serie TTL</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A Sense, **D6 (P1.08)** y **D7 (P1.09)** se utilizan como pines TX y RX para la comunicación UART a 115200 baudios.

:::tip

- Para el pinout del XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

```python
import time
from machine import UART
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

uart_id = xiao.uart("uart1")   # → "uart21"

uart = None
try:
    uart = UART(uart_id, baudrate=115200)
    print("UART demo started.")

    uart.write("========================================\r\n")
    uart.write("  UART Demo for XIAO nRF54LM20A Sense\r\n")
    uart.write("========================================\r\n")
    uart.write("Pin Configuration:\r\n")
    uart.write("  TX: D6 (P1.08)\r\n")
    uart.write("  RX: D7 (P1.09)\r\n")
    uart.write("  Baud Rate: 115200\r\n")
    uart.write("\r\nType something and press Enter to see it echoed.\r\n\r\n")

    heartbeat_count = 0
    last_heartbeat = time.ticks_ms()

    while True:
        if uart.any():
            data = uart.read()
            if data:
                uart.write(data)

        now = time.ticks_ms()
        if time.ticks_diff(now, last_heartbeat) >= 5000:
            last_heartbeat = now
            heartbeat_count += 1
            uart.write("\r\n[Heartbeat #%d]\r\n" % heartbeat_count)
            print("Heartbeat #%d" % heartbeat_count)

        time.sleep_ms(10)

except KeyboardInterrupt:
    print("\nStopped by user")
except Exception as e:
    print("\nError: %s" % e)
finally:
    if uart is not None:
        uart.deinit()
```

**Explicación del código:**

1. **Importaciones y mapeo de pines:** `machine.UART` proporciona acceso al hardware UART. `xiao.pin(n)` devuelve la tupla de puerto y pin para un número de pin digital dado desde la definición de la placa.
2. **Inicialización:** UART 1 se configura a 115200 baudios con TX en D6 (P1.08) y RX en D7 (P1.09). Se envía un mensaje de bienvenida al inicio.
3. **Bucle principal:** Los datos entrantes se devuelven (echo). Se envía un mensaje de latido cada 5 segundos para confirmar que el UART sigue en funcionamiento.
4. **Limpieza:** `uart.deinit()` libera el hardware UART en el bloque `finally`.

### Resultado

1. Cablea de acuerdo con la siguiente tabla:

| XIAO nRF54LM20A Sense | CH340 |
| --------------------- | ----- |
| VBUS                  | 5V    |
| GND                   | GND   |
| D6 (P1.08) - TX       | RX    |
| D7 (P1.09) - RX       | TX    |

2. Abre el software de monitorización de puerto serie en tu ordenador. La información UART configurada se imprime al inicio. De forma predeterminada, la cadena `[Heartbeat #N] UART running...` se imprime cada 5 segundos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/10.png" style={{width:600, height:'auto'}}/></div>

## I2C

I2C es un protocolo síncrono de comunicación de datos half-dúplex. Permite la conexión de múltiples dispositivos mediante direccionamiento a través de la línea de reloj SCL y la línea de datos SDA, y se utiliza comúnmente para leer datos de sensores como IMU y sensores de temperatura/humedad, o para la salida de pantallas OLED.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Placa base de expansión Seeed Studio para XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A Sense, **D4 (P1.03)** y **D5 (P1.07)** se configuran respectivamente como pines I2C SDA y SCL. Este ejemplo controla una pantalla OLED SSD1306 128×64 mediante I2C.

:::tip

- Para el pinout del XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

<details>

<summary>oled.py</summary>

```python
"""
SSD1306 128x64 OLED display via I2C on XIAO nRF54LM20A Sense.
SDA: D4 (P1.03), SCL: D5 (P1.07)
"""

import time
from boards.xiao import XiaoI2C

SDA = 4          # D4 → P1.03
SCL = 5          # D5 → P1.07
I2C_BUS = "i2c0"
FREQ = 400_000   # 400 kHz

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font data
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))
    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]
    for cmd in commands:
        ssd1306_write_commands(cmd)
    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

def ssd1306_draw_text(text, x, y):
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))
    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)
    ssd1306_write_data(display_data)

try:
    i2c = XiaoI2C(I2C_BUS, SDA, SCL, FREQ)
    print("I2C initialized on %s (SDA: D%d, SCL: D%d)" % (I2C_BUS, SDA, SCL))

    i2c_addr = i2c.scan()
    if SSD1306_I2C_ADDR not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

    # Initialize display and draw text
    ssd1306_init()
    ssd1306_draw_text("NRF54LM20A", 22, 2)
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    print("Display updated. Running...")

    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

**Explicación del código:**

1. **Importaciones y definiciones de pines:** `XiaoI2C` de `boards.xiao` proporciona la gestión del bus I2C. SDA está en D4 (P1.03) y SCL en D5 (P1.07). El bus funciona a 400 kHz.
2. **Controlador SSD1306:** La pantalla OLED SSD1306 se controla mediante escrituras I2C sin procesar de comandos/datos. Las funciones auxiliares `ssd1306_write_command()`, `ssd1306_write_data()`, `ssd1306_clear()`, `ssd1306_init()` y `ssd1306_draw_text()` forman un controlador mínimo.
3. **Datos de fuente:** Un diccionario de fuentes de mapa de bits de 8×8 proporciona definiciones de glifos para caracteres ASCII imprimibles. La función `ssd1306_draw_text()` representa cadenas de texto buscando los mapas de bits de los glifos y enviándolos a la pantalla.
4. **Lógica principal:** Se escanea el bus I2C para verificar que el SSD1306 esté presente en la dirección `0x3C`. La pantalla se inicializa y se dibujan dos líneas de texto centrado ("NRF54LM20A" y "HELLO WORLD").
5. **Limpieza:** El bloque `try/except` gestiona un apagado correcto en caso de interrupción por teclado o error.

### Resultado


Después de que el programa se ejecute, el texto **NRF54LM20A** y **HELLO WORLD** se mostrará en la pantalla, y la información de estado se imprimirá a través del puerto serie USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI es un protocolo de comunicación síncrono, full-dúplex y de alta velocidad. Depende de una línea de reloj SCK dedicada para la sincronización de datos y adopta una topología de cuatro hilos que consta de los pines MOSI, MISO, SCK y CS/SS. Se utiliza ampliamente para controlar pantallas de alta resolución, almacenamiento Flash/tarjetas SD y sensores de muestreo de alta frecuencia.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Pantalla redonda para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout de la XIAO nRF54LM20A Sense, la configuración SPI utiliza los siguientes pines:

| Función | Pin digital | Pin físico |
| -------- | ----------- | ------------ |
| SCK      | D8          | P1.04        |
| MOSI     | D10         | P1.06        |
| MISO     | D9          | P1.05        |
| CS       | D1          | P1.31        |
| DC       | D3          | P1.29        |

:::tip

- Para el pinout de la XIAO nRF54LM20A Sense, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver los detalles.

:::

```python
import time
from machine import Pin, SPI
from boards.xiao_nrf54lm20a import xiao_nrf54lm20a as xiao

cs  = Pin(("gpio1", 31), Pin.OUT)   # D1
dc  = Pin(("gpio1", 29), Pin.OUT)   # D3
bl  = Pin(("gpio1", 8), Pin.OUT)   
rst = Pin(("gpio1", 30), Pin.OUT)   # D2 

spi_id = xiao.spi("spi0") 
spi = SPI(spi_id, baudrate=8000000, polarity=0, phase=0)

cs.value(1)
dc.value(1)
bl.value(1) 

LCD_W = 240
LCD_H = 240

def write_command(cmd):
    dc.value(0); cs.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    cs.value(1)

def write_data(data):
    dc.value(1); cs.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(bytearray(data))
    cs.value(1)

def set_addr_window(x0, y0, x1, y1):
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2A]))
    dc.value(1)
    spi.write(bytearray([x0>>8, x0&0xFF, x1>>8, x1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2B]))
    dc.value(1)
    spi.write(bytearray([y0>>8, y0&0xFF, y1>>8, y1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2C]))
    cs.value(1)

def init_display():
    # Hardware reset (if reset pin is connected)
    rst.value(1)
    time.sleep_ms(10)
    rst.value(0)
    time.sleep_ms(10)
    rst.value(1)
    time.sleep_ms(120)

    # GC9A01 full initialization sequence
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)

    write_command(0xFE) 
    write_command(0xEF) 

    write_command(0xEB)
    write_data(0x14)

    write_command(0x84)
    write_data(0x40)

    write_command(0x85)
    write_data(0xFF)

    write_command(0x86)
    write_data(0xFF)

    write_command(0x87)
    write_data(0xFF)

    write_command(0x88)
    write_data(0x0A)

    write_command(0x89)
    write_data(0x21)

    write_command(0x8A)
    write_data(0x00)

    write_command(0x8B)
    write_data(0x80)

    write_command(0x8C)
    write_data(0x01)

    write_command(0x8D)
    write_data(0x01)

    write_command(0x8E)
    write_data(0xFF)

    write_command(0x8F)
    write_data(0xFF)

    write_command(0xB6)
    write_data(0x00)
    write_data(0x20)

    write_command(0x36)
    write_data(0x08)  # Memory access control, adjust rotation direction as needed

    write_command(0x3A)
    write_data(0x05)  # RGB565 16-bit color mode

    write_command(0x90)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08) 

    write_command(0xBD)
    write_data(0x06)

    write_command(0xBC)
    write_data(0x00)

    write_command(0xFF)
    write_data(0x60)
    write_data(0x01)
    write_data(0x04)

    write_command(0xC3)
    write_data(0x13)
    write_command(0xC4)
    write_data(0x13)

    write_command(0xC9)
    write_data(0x22)

    write_command(0xBE)
    write_data(0x11)

    write_command(0xE1)
    write_data(0x10)
    write_data(0x0E)

    write_command(0xDF)
    write_data(0x21)
    write_data(0x0c)
    write_data(0x02)

    write_command(0xF0)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF1)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xF2)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)

    write_command(0xF3)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)

    write_command(0xED)
    write_data(0x1B)
    write_data(0x0B)

    write_command(0xAE)
    write_data(0x77)

    write_command(0xCD)
    write_data(0x63)

    write_command(0x70)
    write_data(0x07)
    write_data(0x07)
    write_data(0x04)
    write_data(0x0E) 
    write_data(0x0F)
    write_data(0x09)
    write_data(0x07)
    write_data(0x08)
    write_data(0x03)

    write_command(0xE8)
    write_data(0x34)

    write_command(0x62)
    write_data(0x18)
    write_data(0x0D)
    write_data(0x71)
    write_data(0xED)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x0F)
    write_data(0x71)
    write_data(0xEF)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x63)
    write_data(0x18)
    write_data(0x11)
    write_data(0x71)
    write_data(0xF1)
    write_data(0x70) 
    write_data(0x70)
    write_data(0x18)
    write_data(0x13)
    write_data(0x71)
    write_data(0xF3)
    write_data(0x70) 
    write_data(0x70)

    write_command(0x64)
    write_data(0x28)
    write_data(0x29)
    write_data(0xF1)
    write_data(0x01)
    write_data(0xF1)
    write_data(0x00)
    write_data(0x07)

    write_command(0x66)
    write_data(0x3C)
    write_data(0x00)
    write_data(0xCD)
    write_data(0x67)
    write_data(0x45)
    write_data(0x45)
    write_data(0x10)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)

    write_command(0x67)
    write_data(0x00)
    write_data(0x3C)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_data(0x01)
    write_data(0x54)
    write_data(0x10)
    write_data(0x32)
    write_data(0x98)

    write_command(0x74)
    write_data(0x10)
    write_data(0x85)
    write_data(0x80)
    write_data(0x00)
    write_data(0x00)
    write_data(0x4E)
    write_data(0x00)

    write_command(0x98)
    write_data(0x3e)
    write_data(0x07)

    write_command(0x35) 
    write_command(0x21)

    write_command(0x11)
    time.sleep_ms(120)

    write_command(0x29)
    time.sleep_ms(120)

    bl.value(0) 
    print("Seeed Studio Round Display & Backlight Active!")

def fill_screen(color):
    hi = (color >> 8) & 0xFF
    lo = color & 0xFF
    set_addr_window(0, 0, LCD_W-1, LCD_H-1)
    dc.value(1); cs.value(0)
    buf = bytearray([hi, lo] * LCD_W)
    for _ in range(LCD_H):
        spi.write(buf)
    cs.value(1)

init_display()

colors = [
    (0xF800, "RED"),
    (0x07E0, "GREEN"),
    (0x001F, "BLUE"),
    (0xFFE0, "YELLOW"),
    (0x07FF, "CYAN"),
    (0xF81F, "MAGENTA"),
    (0x0000, "BLACK"),
    (0xFFFF, "WHITE"),
]

while True:
    for color, name in colors:
        print("Solid: %s" % name)
        fill_screen(color)
        time.sleep_ms(1000)
```

### Resultado

Después de ejecutar el programa, la pantalla redonda se actualiza en la secuencia de rojo, verde, azul, amarillo, cian y magenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:400, height:'auto'}}/></div>


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

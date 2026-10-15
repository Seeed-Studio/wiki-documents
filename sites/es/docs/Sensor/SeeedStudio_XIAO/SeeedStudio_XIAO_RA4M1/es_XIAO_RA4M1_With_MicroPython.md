---
title: Seeed Studio XIAO RA4M1 Con MicroPython
description: Multiplexación de pines con Seeed Studio XIAO RA4M1
image: https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-RA4M1.webp
slug: /xiao_ra4m1_micropython
keywords:
  - XIAO
  - RAM41
  - MicroPython
last_update:
  date: 12/25/2025
  author: Zeller
  sidebar_position: 9
createdAt: '2025-12-25'
updatedAt: '2025-12-31'
url: https://wiki.seeedstudio.com/es/xiao_ra4m1_micropython/
---

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con una función de compilación de código nativo parcial. Proporciona un subconjunto de características de Python 3.5, implementado para procesadores embebidos y sistemas restringidos. Es diferente de CircuitPython y puedes leer más sobre las diferencias en la [documentación de MicroPython](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython con XIAO RA4M1

A continuación, te guiaré sobre cómo usar MicroPython en el XIAO MG24 Sense y programarlo con Thonny IDE, basado en el sistema operativo Windows.

### Preparación del Hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO RA4M1</th>
<th>Seeed Studio XIAO Debug Mate</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

### Instalar [Thonny IDE](https://thonny.org/)

Elige la versión apropiada para la instalación. Aquí, lo estoy instalando en un sistema Windows, así que he seleccionado la versión de Windows.

Sigue las instrucciones para la versión de Python deseada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div><br/>

Luego, simplemente sigue los pasos predeterminados para la configuración.

### Descargar el repositorio

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Clónalo en la máquina local, y luego recuerda la ruta donde se almacena este MicroPython de XIAO RA4M1. Esta ruta se usará más tarde.

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### Ejemplo de Parpadeo de LED

Aquí te mostraremos cómo encender el LED USER en el XIAO MG24 usando MicroPython con Thonny IDE.

#### **Paso 1.** Flashear el firmware de MicroPython

- Descarga el paquete de [Firmware de MicroPython para XIAO RA4M1](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/xiao_ra4m1_flash.zip) y extráelo en la ubicación apropiada. Luego abre la terminal en esta carpeta.

- Inserta el XIAO RA4M1 en el XIAO XIAO Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/debug_1_1.jpg" style={{width:600, height:'auto'}}/></div>

- Haz clic en xiao_ra4m1_flash.bat y espera a que se complete la programación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_1.png" style={{width:600, height:'auto'}}/></div>

- Para Mac / Linux

```bash
sudo chmod +x xiao_ra4m1_flash.sh && ./xiao_ra4m1_flash.sh
```

:::tip
Este script tiene comandos de cadena de herramientas de flasheo preconfigurados. Si lo estás usando por primera vez, puede tomar un poco de tiempo.
:::

:::tip
Después de haber terminado de programar el firmware, necesitas desconectar el XIAO RA4M1 del XIAO XIAO XIAO Debug Mate y conectarlo vía USB-C.
:::

#### **Paso 2.** Configuración del Intérprete

Abre Thonny IDE, luego haz clic en la esquina inferior derecha de la interfaz para configurar las opciones del intérprete. Selecciona MicroPython (generic) y Puerto. Después de una configuración exitosa, la información de la versión de MicroPython se mostrará en el Shell.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_2.png" style={{width:600, height:'auto'}}/></div>

#### **Paso 3.** Subir el archivo boards

- Abre la vista, selecciona **File**, y la ruta del administrador de archivos se mostrará en la barra lateral izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_3.png" style={{width:600, height:'auto'}}/></div>

- Abre la ruta del archivo clonado o descargado, y abre `micropython-seeed-boards-master\examples`
- Hay múltiples archivos Python de xiao en la carpeta **boards**, pero la capacidad de memoria flash del XIAO RAM41 es limitada, así que solo necesitas mantener los dos archivos: `xiao.py` y `xiao_ra4m1.py`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_4.png" style={{width:600, height:'auto'}}/></div>

- Selecciona la carpeta **boards** y súbela al flash. Luego, podrás ver el archivo subido en el dispositivo/flash de MicroPython.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_5.png" style={{width:600, height:'auto'}}/></div>

#### **Paso 4.** Ejecutar el Código

Haz clic en **File** -> **New** para crear un nuevo archivo y guárdalo como blink.py.<br/>

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

Explicación del Código:

- **Importar Módulos**
        - `time` Importa el módulo time
        - `Xiao Pin` Importa la clase de control de pines para la placa de desarrollo Seeed Xiao desde el módulo boards.xiao, que se usa para operar los pines en la placa.

- **Definir Pines**
        - `led = "led""` Especifica que el pin está conectado al pin `led` de la placa de desarrollo (aquí, el pin USER)

- **Lógica Principal (bloque try)**
        - El LED USER parpadeará a intervalos de 0.5 segundos.

Copia el código anterior, luego haz clic en el botón verde o presiona F5 para ejecutarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/mpy_6.png" style={{width:600, height:'auto'}}/></div>

Una vez que el código comience a ejecutarse, el LED USER parpadeará a intervalos de 0.5 segundos.

El resultado es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_1.gif" style={{width:400, height:'auto'}}/></div>

### Ejemplo de PWM

En el XIAO RA4M1, los pines D5–D10 soportan la función PWM. Introduciremos cómo usar la función PWM con una luz de respiración PWM como ejemplo.

#### Preparación del Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

- Crea un nuevo archivo llamado pwm.py y copia el código de referencia en él.
- Dado que solo los pines D5–D10 del XIAO RA4M1 soportan la función PWM, aquí se selecciona el pin D9.

```py
import time
from boards.xiao import XiaoPWM 

led = 9   #D9

try:
    # set the frequency and period of the PWM signal
    FREQ = 1000             
    PERIOD_NS = int(1_000_000_000 // FREQ)  
    # set the number of steps to fade the LED and the delay between steps
    FADE_STEPS = 255        
    STEP_DELAY = 0.01       
    STEP_SIZE = 3

    # initialize the PWM with a frequency and a 0% duty cycle
    pwm = XiaoPWM(led) 
    pwm.init(freq=FREQ, duty=0)
    while True:
        # fade the LED in and out
        for fade in range(0, FADE_STEPS + 1, STEP_SIZE):
            duty_ns = int((fade * PERIOD_NS) / FADE_STEPS)
            if duty_ns < 20:
                duty_ns = 20
            elif duty_ns > 960000:
                duty_ns = 960000
            pwm.duty_ns(duty_ns)
            time.sleep(STEP_DELAY)
        # fade the LED in and out again
        for fade in range(FADE_STEPS, -1, -STEP_SIZE):
            duty_ns = int((fade * PERIOD_NS) / FADE_STEPS)
            if duty_ns < 20:
                duty_ns = 20
            elif duty_ns > 960000:
                duty_ns = 960000
            pwm.duty_ns(duty_ns)
            time.sleep(STEP_DELAY)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s",repr(e))
finally:
    if pwm is not None:
        try:
            pwm.deinit()
        except Exception:
            pass
```

Explicación del Código:

- **Importar Módulos**
        - `time`: Importa el módulo de tiempo estándar para manejar retrasos (usado para controlar la velocidad del efecto de respiración).
        - `XiaoPWM`: Importa la clase de control PWM (Modulación por Ancho de Pulso) del módulo `boards.xiao`, usada para generar señales similares a analógicas en el pin digital.

- **Definir Pines y Constantes**
        - `PIN = 0`: Especifica que el dispositivo está conectado al pin D0 en la placa de desarrollo.
        -`FREQ / PERIOD_NS`: Establece la frecuencia PWM a 1000 Hz y calcula el período total en nanosegundos (1 segundo / 1000).
        - `FADE_STEPS / STEP_DELAY`: Configura la resolución de la animación (255 pasos) y la velocidad (0.01s de espera entre cambios).

- **Lógica Principal (bloque try)**
        - **Inicialización**: El código inicializa el objeto PWM en el pin D0 comenzando con 0% de brillo (ciclo de trabajo).
        - **Bucle de Respiración**: Dentro del bucle infinito `while True`, dos bucles `for` controlan el brillo del LED:
            1. **Fade In**: Aumenta gradualmente el `duty_ns` (ancho de pulso) de 0 a la duración completa del período.
            2. **Fade Out**: Disminuye gradualmente el `duty_ns` desde el período completo de vuelta a 0.

- **Cálculo del Ciclo de Trabajo**: La fórmula `(fade * PERIOD_NS) // FADE_STEPS` mapea el paso del bucle (0-255) al tiempo en nanosegundos requerido para el hardware PWM.
        - **Seguridad/Limpieza**: El bloque `finally` asegura que `pwm.deinit()` sea llamado para liberar recursos de hardware si el programa se detiene (ej., vía Ctrl+C).

#### Gráfico de Resultado

Después de que el programa se ejecute, el LED logrará un efecto de desvanecimiento, y puedes ajustar el tamaño del paso PWM según tus necesidades reales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_2.gif" style={{width:400, height:'auto'}}/></div>

### Ejemplo Analógico

La Placa de Desarrollo XIAO RA4M1 tiene un ADC de 12 bits para lectura de alta resolución de valores de sensores analógicos, lo que nos ayuda a leer valores más precisos.

A continuación, elegiremos dos sensores para reflejar las características del ADC.

#### Preparación de Hardware

<table align="center">
 <tr>
        <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - LED de Color Variable</th>
        <th>Grove-Sensor de Ángulo Rotatorio</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a></div>
    </td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a></div>
    </td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a></div>
    </td>
 </tr>
</table>

#### Software

- Crea un nuevo archivo llamado adc.py y copia el código de referencia en él.

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM 

adc_pin = 0   #D0
pwm_pin = 9   #D9

try:
    adc = XiaoADC(adc_pin)             
    pwm = XiaoPWM(pwm_pin)      

    FREQ = 1000                     
    PERIOD_NS = 1000000000 // FREQ 


    pwm.freq(FREQ)     
    pwm.duty_ns(0)      

    MAX_VOLTAGE = 3.3      
    DEAD_ZONE = 0.02
    last_duty = -1 

    while True:
        raw_value = adc.read_u16()
        voltage = (raw_value / 65535.0) * MAX_VOLTAGE

        # Calculate the base percentage (0.0 - 1.0)
        duty_percent = voltage / MAX_VOLTAGE

        # scope limitation
        if duty_percent < 0: duty_percent = 0
        if duty_percent > 1: duty_percent = 1

        if abs(duty_percent - last_duty) < DEAD_ZONE:
            time.sleep(0.05)
            continue

        inverted_duty = 1.0 - duty_percent
        duty_ns = int(inverted_duty * PERIOD_NS)

        if duty_ns < 20: duty_ns = 20
        elif duty_ns > (PERIOD_NS * 0.96): duty_ns = int(PERIOD_NS * 0.96)

        pwm.duty_ns(duty_ns)

        print("Voltage: {:.2f}V, Brightness: {:.1f}%".format(voltage, duty_percent * 100))

        last_duty = duty_percent
        time.sleep(0.05)

except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: {}".format(e))
finally:
    pwm.deinit()
```

- **Importar Módulos**
        - `time`: Importa el módulo de tiempo estándar para manejar retrasos (usado para controlar la velocidad del efecto de respiración).
        - `XiaoPWM`: Importa la clase de control PWM (Modulación por Ancho de Pulso) del módulo `boards.xiao`, usada para generar señales similares a analógicas en el pin digital.
Explicación del Código:

- **Importar Módulos**
        - `time`: Importa el módulo de tiempo estándar para manejar retrasos (usado para controlar la velocidad de muestreo del bucle).
        - `XiaoADC`, `XiaoPWM`: Importa las clases de control de hardware del módulo `boards.xiao`. `XiaoADC` maneja la entrada analógica (potenciómetro), y `XiaoPWM` maneja la salida de modulación por ancho de pulso (LED).

- **Definir Pines y Constantes**
        - `adc_pin = 0` / `pwm_pin = 1`: Mapea los pines físicos. El pin D0 se usa para el sensor de entrada, y el pin D1 se usa para el LED de salida.
        - `FREQ / PERIOD_NS`: Establece la frecuencia de operación PWM a 1000 Hz y calcula la duración del período en nanosegundos (1,000,000 ns).
        - `MAX_VOLTAGE / DEAD_ZONE`: Define el voltaje de referencia (3.3V) y un umbral de zona muerta del 2% para filtrar el ruido eléctrico y prevenir que el LED parpadee.

- **Lógica Principal (bloque try)**
        - **Inicialización**: Configura los objetos ADC y PWM. El PWM comienza con un ciclo de trabajo de 0.
        - **Bucle de Control**: Dentro del bucle `while True`, el código monitorea continuamente el sensor:
            1. **Leer y Normalizar**: Lee el entero de 16 bits sin procesar (0-65535) del ADC y lo convierte en un voltaje de punto flotante (0.0V - 3.3V).
            2. **Filtro de Vibración**: Compara la lectura actual con `last_duty`. Si el cambio es menor que la `DEAD_ZONE`, el bucle omite la actualización para mantener estabilidad.

- **Cálculo del Ciclo de Trabajo e Inversión de Lógica**
        - **Lógica Activa Baja**: La línea `inverted_duty = 1.0 - duty_percent` invierte la lógica.
        - **Razón**: Tu LED probablemente es **Activo Bajo** (conectado a VCC).
        - **Efecto**: A medida que el voltaje aumenta, `duty_ns` se vuelve más pequeño (manteniendo el pin LOW por más tiempo), haciendo que el LED sea **más brillante**.

- **Limitadores de Seguridad**: El código limita la señal de salida entre un mínimo de 20ns y un máximo del 96% del período. Esto protege el hardware y asegura que la señal permanezca dentro de un rango válido.

- **Salida y Limpieza**
        - **Retroalimentación**: Imprime el voltaje actual y el porcentaje de brillo en la consola usando `.format()` para compatibilidad con versiones anteriores de MicroPython.
        - **Seguridad/Limpieza**: El bloque `finally` garantiza que `pwm.deinit()` se ejecute cuando el programa se detenga, apagando de forma segura los recursos de hardware PWM.

#### Gráfico de resultados

- Gira el Grove-Rotary Angle Sensor, y el brillo del LED cambiará en consecuencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_4.gif" style={{width:400, height:'auto'}}/></div>

- La ventana Shell también imprimirá el voltaje y el porcentaje de brillo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mpy_5.png" style={{width:400, height:'auto'}}/></div>

### Ejemplo UART

UART es uno de los protocolos de comunicación más utilizados. Permite la transmisión de datos con solo dos líneas de datos, y su bajo costo lo hace ampliamente utilizado en muchos campos. A continuación, demostraremos la aplicación de la comunicación serie tomando como ejemplo la transmisión de datos del módulo GPS.

#### Preparación del Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RA4M1</th>
   <th>Módulo L76K GNSS para Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a></div>
    </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Software

- Crea un nuevo archivo llamado uart.py y copia el código de referencia en él.

<details>

<summary>Código de Referencia</summary>

```py
from boards.xiao import XiaoUART
import time
import math

uart = "uart1"
baudrate = 9600
tx = 6              # D6
rx = 7              # D7

# Coordinate structure
class Coordinates:
    def __init__(self, Lon=0.0, Lat=0.0):
        self.Lon = Lon
        self.Lat = Lat

# GPS data structure
class GNRMC:
    def __init__(self):
        self.Lon = 0.0      # GPS Longitude
        self.Lat = 0.0      # GPS Latitude
        self.Lon_area = ''  # E or W
        self.Lat_area = ''  # N or S
        self.Time_H = 0     # Time Hour
        self.Time_M = 0     # Time Minute
        self.Time_S = 0     # Time Second
        self.Status = 0     # 1: Successful positioning, 0: Positioning failed

# Convert WGS-84 to GCJ-02
def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * pi) + 40.0 * math.sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * pi) + 320 * math.sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

# Convert WGS-84 to GCJ-02
def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * pi) + 40.0 * math.sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * pi) + 300.0 * math.sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# Convert GCJ-02 to BD-09
def bd_encrypt(gg):
    bd = Coordinates()
    x = gg.Lon
    y = gg.Lat
    z = math.sqrt(x * x + y * y) + 0.00002 * math.sin(y * x_pi)
    theta = math.atan2(y, x) + 0.000003 * math.cos(x * x_pi)
    bd.Lon = z * math.cos(theta) + 0.0065
    bd.Lat = z * math.sin(theta) + 0.006
    return bd

# Convert WGS-84 to GCJ-02
def transform(gps):
    gg = Coordinates()
    dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0)
    dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0)
    radLat = gps.Lat / 180.0 * pi
    magic = math.sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * math.cos(radLat) * pi)
    gg.Lat = gps.Lat + dLat
    gg.Lon = gps.Lon + dLon
    return gg

# Convert to Baidu coordinates (BD-09)
def L76X_Baidu_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    bd09_coords = bd_encrypt(gcj02_coords)
    return bd09_coords

# Convert to Google coordinates (GCJ-02)
def L76X_Google_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    return gcj02_coords

# Parse GNRMC NMEA sentence
def parse_gnrmc(nmea_sentence):
    gps = GNRMC()

    if not nmea_sentence.startswith(b'$GNRMC') and not nmea_sentence.startswith(b'$PNRMC'):
        return gps

    try:
        # Convert to string and split by commas
        sentence_str = nmea_sentence.decode('ascii', 'ignore')
        fields = sentence_str.split(',')

        if len(fields) < 12:
            return gps

        # Parse time field (HHMMSS.sss)
        if fields[1]:
            time_str = fields[1]
            if '.' in time_str:
                time_str = time_str.split('.')[0]
            if len(time_str) >= 6:
                gps.Time_H = int(time_str[0:2]) + 8  # GMT+8
                gps.Time_M = int(time_str[2:4])
                gps.Time_S = int(time_str[4:6])
                if gps.Time_H >= 24:
                    gps.Time_H -= 24

        # Parse status
        gps.Status = 1 if fields[2] == 'A' else 0

        if gps.Status == 1:
            # Parse latitude (DDMM.MMMMM)
            if fields[3] and fields[4]:
                lat_str = fields[3]
                if '.' in lat_str:
                    degrees = float(lat_str[0:2])
                    minutes = float(lat_str[2:])
                    gps.Lat = degrees + minutes / 60.0
                    gps.Lat_area = fields[4]

            # Parse longitude (DDDMM.MMMMM)
            if fields[5] and fields[6]:
                lon_str = fields[5]
                if '.' in lon_str:
                    degrees = float(lon_str[0:3])
                    minutes = float(lon_str[3:])
                    gps.Lon = degrees + minutes / 60.0
                    gps.Lon_area = fields[6]

    except Exception as e:
        print("Parse error:", e)

    return gps

# Print formatted GPS data
def print_gps_data(gps):
    print("\n--- GPS Data ---")
    print("Time (GMT+8): {:02d}:{:02d}:{:02d}".format(gps.Time_H, gps.Time_M, gps.Time_S))
    if gps.Status == 1:
        print("Latitude (WGS-84): {:.6f} {}".format(gps.Lat, gps.Lat_area))
        print("Longitude (WGS-84): {:.6f} {}".format(gps.Lon, gps.Lon_area))

        # Coordinate conversion
        baidu_coords = L76X_Baidu_Coordinates(gps)
        google_coords = L76X_Google_Coordinates(gps)

        print("Baidu Latitude: {:.6f}".format(baidu_coords.Lat))
        print("Baidu Longitude: {:.6f}".format(baidu_coords.Lon))
        print("Google Latitude: {:.6f}".format(google_coords.Lat))
        print("Google Longitude: {:.6f}".format(google_coords.Lon))
        print("GPS positioning successful.")
    else:
        print("GPS positioning failed or no valid data.")

try:
    uart = XiaoUART(uart, baudrate, tx, rx)
    # Initialize UART
    uart.init(9600, bits=8, parity=None, stop=1)
    # Buffer to accumulate complete messages
    buffer = bytearray()
    # Constants for coordinate transformation
    pi = 3.14159265358979324
    a = 6378245.0
    ee = 0.00669342162296594323
    x_pi = 3.14159265358979324 * 3000.0 / 180.0
    while True:
        available = uart.any()
        if available > 0:
            # Read all available bytes
            data = uart.read(available)
            buffer.extend(data)
            # Check if we have a complete line (ends with newline)
            if b'\n' in buffer:
                # Find the newline position
                newline_pos = buffer.find(b'\n')
                # Extract the complete message
                complete_message = buffer[:newline_pos + 1]
                # Remove the processed part from buffer
                buffer = buffer[newline_pos + 1:]
                # Parse GNRMC sentences
                if complete_message.startswith(b'$GNRMC') or complete_message.startswith(b'$PNRMC'):
                    gps_data = parse_gnrmc(complete_message)
                    print_gps_data(gps_data)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    uart.deinit()
```

</details>

Explicación del Código:

- **Importar Módulos**
        - `XiaoUART` Importa la clase de comunicación UART para la placa de desarrollo Seeed Xiao desde el módulo `boards.xiao`, utilizada para inicializar y controlar la comunicación serie.
        - `time` Importa el módulo de tiempo para soportar funciones relacionadas con el tiempo (aunque no se usa directamente aquí, se importa para uso futuro potencial o compatibilidad).
        - `math` Importa funciones matemáticas (`sin`, `cos`, `sqrt`, `atan2`, etc.) requeridas para algoritmos de transformación de coordenadas.

- **Definir Configuración UART**
        - `uart = "uart1"` Especifica la instancia del controlador UART a usar — aquí, `uart1`.
        - `baudrate = 9600` Establece la velocidad de baudios para comunicación serie a 9600 bps.
        - `tx = 6` Especifica que el pin de transmisión UART (TX) está conectado al pin digital D6.
        - `rx = 7` Especifica que el pin de recepción UART (RX) está conectado al pin digital D7.

- **Definir Estructuras de Datos**
        - Clase `Coordinates`: Un contenedor simple para almacenar valores de longitud/latitud como números de punto flotante.
        - Clase `GNRMC`: Representa datos GPS analizados de una sentencia NMEA `$GNRMC`. Contiene:
            - Latitud/Longitud en grados decimales
            - Indicadores de hemisferio (`N/S`, `E/W`)
            - Tiempo (hora, minuto, segundo — ajustado a GMT+8)
            - Bandera de estado (1 = posición válida, 0 = sin posición)

- **Funciones de Transformación de Coordenadas**
        - `transformLat(x, y)` & `transformLon(x, y)` — Funciones auxiliares que implementan parte del algoritmo de conversión WGS-84 → GCJ-02 (usado en China para ofuscación de mapas).
        - `bd_encrypt(gg)` — Convierte coordenadas GCJ-02 al sistema de coordenadas BD-09 de Baidu aplicando desplazamiento y rotación adicionales.
        - `transform(gps)` — Función principal que convierte coordenadas WGS-84 (GPS crudo) a GCJ-02 usando fórmulas trigonométricas complejas basadas en el modelo elíptico de la Tierra.
        - `L76X_Baidu_Coordinates(gps)` — Envoltorio que convierte GPS crudo (WGS-84) → GCJ-02 → BD-09 (formato de Mapas Baidu).
        - `L76X_Google_Coordinates(gps)` — Envoltorio que convierte GPS crudo (WGS-84) → GCJ-02 (formato de Google Maps en China).

- **Analizar Sentencia GNRMC**
        - `parse_gnrmc(nmea_sentence)` — Analiza una cadena NMEA `$GNRMC` o `$PNRMC` cruda en un objeto `GNRMC` estructurado.
            - Extrae tiempo (convierte de UTC a GMT+8).
            - Verifica estado (`A` = activo/posición válida, `V` = inválido).
            - Analiza latitud/longitud del formato DDMM.MMMMM → grados decimales.
            - Devuelve objeto `GNRMC` poblado o uno vacío por defecto si el análisis falla.

- **Mostrar Datos GPS Formateados**
        - `print_gps_data(gps)` — Imprime información GPS legible incluyendo:
            - Tiempo local (GMT+8)
            - Coordenadas WGS-84 crudas con hemisferio
            - Coordenadas convertidas GCJ-02 (compatible con Google) y BD-09 (compatible con Baidu)
            - Mensaje de estado indicando si el posicionamiento tuvo éxito

- **Lógica Principal (bloque try)**
        - Inicializa interfaz UART con parámetros especificados.
        - Define constantes globales necesarias para matemáticas de coordenadas (`pi`, `a`, `ee`, `x_pi`) — parámetros del elipsoide terrestre y factores de escala.
        - Entra en bucle infinito para leer continuamente datos GPS entrantes vía UART.
            - Usa `buffer` para acumular mensajes parciales hasta que se recibe una línea completa (terminando con `\n`).
            - Cuando llega una línea completa:
                - Verifica si comienza con `$GNRMC` o `$PNRMC`
                - Si es así, la analiza usando `parse_gnrmc()`
                - Muestra salida formateada vía `print_gps_data()`
        - Maneja excepciones:
            - `KeyboardInterrupt`: Sale elegantemente con Ctrl+C.
            - `Exception` general: Captura e imprime cualquier error inesperado.
        - Finalmente, llama `uart.deinit()` para limpiar recursos UART antes de salir.

#### Gráfico de resultados

- Abre cualquier herramienta de puerto serie y establece la velocidad de baudios a 9600.
- El módulo GPS debe usarse en un área exterior abierta.
- El programa imprimirá la información GPS de tu ubicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

### Ejemplo I2C

XIAO RAM41 tiene una interfaz I2C que puede usarse para transmisión de datos y análisis de muchos sensores, así como para usar pantallas OLED.

#### Preparación de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

- Crea un nuevo archivo llamado i2c.py y copia el código de referencia en él.

<details>

<summary>Código de Referencia</summary>

```py
import time
from boards.xiao import XiaoI2C  

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

# Basic 8x8 font 
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
}

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(0x3C, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(0x3C, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(0x3C, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([0x21, 0, 127]))
    ssd1306_write_commands(bytearray([0x22, 0, 7]))

    empty_data = bytearray(128)
    for _ in range(8):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([0x21, 0, 127])

# Initialize SSD1306 display with recommended settings
def ssd1306_init():
    commands = [
        bytearray([0xAE]),
        bytearray([0xD5, 0x80]),
        bytearray([0xA8, 63]),
        bytearray([0xD3, 0x00]),
        bytearray([0x40]),
        bytearray([0x8D, 0x14]),
        bytearray([0x20, 0x00]),
        bytearray([0xA1]),
        bytearray([0xC8]),
        bytearray([0xDA, 0x12]),
        bytearray([0x81, 0xCF]),
        bytearray([0xD9, 0xF1]),
        bytearray([0xDB, 0x40]),
        bytearray([0xA4]),
        bytearray([0xA6]),
        bytearray([0xAF])
    ]

    for cmd in commands:
        ssd1306_write_commands(cmd)

    ssd1306_clear()
    print("SSD1306 initialized successfully")
    ssd1306_write_commands([0x21, 0, 127])

# Draw a string of text at specified column and page (row) on SSD1306
def ssd1306_draw_text(text, x, y): 
    ssd1306_write_commands(bytearray([0x21, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([0x22, y, y + 0]))

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
    i2c_addr = i2c.scan()
    if 0x3C not in i2c_addr:
        raise Exception("SSD1306 not found on I2C bus")
    else:
        print("SSD1306 found on I2C bus: 0x3C")
    # Initialize display
    ssd1306_init()
    ssd1306_draw_text("HELLO WORLD", 20, 4)
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
```

</details>

Explicación del Código:

- **Importar Módulos**
        - `time`: Importa el módulo de tiempo estándar para manejar pausas y retrasos del programa (usado aquí para el sleep del bucle `while`).
        - `XiaoI2C`: Importa la clase I2C específica del hardware desde `boards.xiao`, que maneja el protocolo de comunicación de bajo nivel para la placa de desarrollo XIAO.

- **Definir Configuración I2C**
        - `sda = 4`, `scl = 5`: Asigna las líneas de datos I2C (SDA) y reloj (SCL) a los pines digitales D4 y D5 respectivamente.
        -`i2c = "i2c0"`: Selecciona el bus periférico I2C de hardware específico (bus 0) en el microcontrolador.
        - `frq = 400000`: Establece la velocidad de comunicación a 400 kHz (Modo Rápido), permitiendo actualizaciones rápidas de pantalla.
        - `i2c = XiaoI2C(...)`: Instancia el objeto I2C con la configuración de pines y frecuencia definida.

- **Definir Datos de Fuente**
        - `font_data`: Un diccionario que actúa como tabla de búsqueda. Mapea caracteres (como 'H', 'E') a una lista de 8 bytes hexadecimales. Estos bytes representan la máscara de bits para los píxeles de ese carácter en una cuadrícula de 8x8.

- **Funciones Auxiliares (Controlador de Bajo Nivel)**
        - `ssd1306_write_command(cmd)`: Envía una sola instrucción de control a la pantalla. Prefija el byte con `0x00`, diciéndole al controlador SSD1306 que el siguiente byte es un comando, no datos de píxeles.
        - `ssd1306_write_commands(cmds)`: Envía eficientemente una secuencia de comandos de configuración en una sola transacción I2C para minimizar la sobrecarga.
        - `ssd1306_write_data(data)`: Envía datos gráficos a la RAM de la pantalla. Prefija los datos con `0x40`, indicando que los siguientes bytes representan píxeles que deben encenderse.

- **Funciones Auxiliares (Control de Alto Nivel)**
        - `ssd1306_clear()`: Borra el contenido de la pantalla. Establece la dirección de columna (0-127) y la dirección de página (0-7) para cubrir toda la pantalla, luego escribe ceros (píxeles en blanco) en cada ubicación de memoria.
        - `ssd1306_init()`: Envía una secuencia estricta de códigos hexadecimales (ej., `0xAE` para apagar la pantalla, `0x8D 0x14` para habilitar la bomba de carga) para configurar el voltaje del panel OLED, la dirección de escaneo y el modo de direccionamiento antes de encenderlo.
        - `ssd1306_draw_text(text, x, y)`: La función gráfica principal.
        - Establece la ventana de dibujo en la pantalla usando los comandos `0x21` (Dirección de Columna) y `0x22` (Dirección de Página).
        - Itera a través de la cadena de entrada, recupera los bytes de la fuente y realiza operaciones bit a bit (`val |= (1 << row)`) para transponer/rotar los datos para que coincidan con la estructura de memoria específica del SSD1306.

- **Lógica Principal (Flujo de Ejecución)**
        - `i2c.scan()`: Detecta todos los dispositivos conectados al bus I2C para asegurar que el cableado sea correcto.
        - **Validación de Dirección**: Verifica si la pantalla está presente en la dirección `0x3C`. Si no se encuentra, genera un error para detener la ejecución; de lo contrario, imprime una confirmación.
        - `ssd1306_init()`: Despierta la pantalla y aplica la configuración.
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)`: Renderiza el texto "HELLO WORLD" comenzando en la columna de píxel 20 en la página 4 (aproximadamente en el centro-izquierda de la pantalla).
        - `while True`: Entra en un bucle infinito que duerme por 1 segundo repetidamente, manteniendo el programa en ejecución para que la pantalla permanezca activa.
        - `try...except`: Envuelve la lógica principal en un manejador de errores para capturar problemas (como hardware faltante) o una interrupción del usuario (Ctrl+C), asegurando que el programa termine de manera elegante con un mensaje legible.

#### Gráfico de resultado

- Una vez que el programa comience a ejecutarse, mostrará **HELLO WORLD** en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/result_3.jpg" style={{width:400, height:'auto'}}/></div>

### Resumen

¡Felicitaciones! Habiendo completado los tutoriales anteriores, has adquirido la capacidad para el desarrollo básico y la depuración con XIAO RA4M1 y MicroPython. Esperamos verte crear proyectos más interesantes basados en estas habilidades fundamentales

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

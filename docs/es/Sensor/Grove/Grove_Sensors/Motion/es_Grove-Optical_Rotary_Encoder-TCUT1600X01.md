---
description: Grove - Codificador Rotatorio Óptico(TCUT1600X01)
title: Grove - Codificador Rotatorio Óptico(TCUT1600X01)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Optical_Rotary_Encoder-TCUT1600X01
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - Codificador Rotatorio Óptico(TCUT1600X01) es un sensor transmisivo que incluye un emisor infrarrojo y dos detectores fototransistores. Normalmente, el emisor infrarrojo emite rayos infrarrojos, los detectores fototransistores reciben los rayos infrarrojos, entonces el fototransistor se enciende, ambas salidas están en Alto, los indicadores LED a bordo se iluminan. Cuando hay un obstáculo bloqueando, el fototransistor no puede recibir los rayos infrarrojos, por lo que el fototransistor se apagará y ambas salidas estarán en Bajo, los indicadores LED a bordo se desvanecen.

Puedes usar este sensor como un codificador rotatorio para detectar la velocidad o rotación, y gracias a los dos detectores fototransistores, incluso puedes detectar la dirección de rotación.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html)

## Características

- Detectores fototransistores dobles, pueden determinar la dirección de rotación
- Indicadores LED a bordo
- Interfaz Grove

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / 5V|
|Temperatura de operación|-40°C a +105°C|
|Rango de temperatura de almacenamiento|-40°C a +125°C|
|Longitud de onda del emisor| 950 nm|
|Separación|3 mm|
|Interfaz|Digital|

## Aplicaciones

- Sensores ópticos automotrices
- Sensor de posición preciso para codificador
- Sensor para movimiento, velocidad y dirección
- Sensor para codificación de "girar y empujar"

## Descripción General del Hardware

### Mapa de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

**Alimentación**
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

El voltaje típico del TCUT1600X01 es 5V, por lo que usamos el convertidor elevador de modo de corriente [MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf) para proporcionar un 5V estable. La entrada del MP3120 varía de 0.8V a 5V, por lo que puedes usar este módulo con tu Arduino tanto
en 3.3V como en 5V.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

Cuando los detectores fototransistores reciben la señal infrarroja, la salida debería ser Alta, y cuando el obstáculo bloquea el infrarrojo, OUT1 y OUT2 deberían ser Bajas. Sin embargo, debido a la corriente de fuga, no será 0V. El voltaje de fuga varía con el voltaje de entrada.

### Dibujo Mecánico
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg" alt="pir" width={600} height="auto" /></p>

### Detección Direccional

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Gracias a los dos detectores fototransistores, podemos detectar la dirección de movimiento. Si el obstáculo se mueve de izquierda a derecha, los cambios de estados de salida deberían ser **11 --> 01 --> 00 --> 10**; de la misma manera, si el obstáculo se mueve de derecha a izquierda, debería ser **11 --> 10 --> 00 -->01**.
:::

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Codificador Rotatorio Óptico|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Optical Rotary Encoder al puerto **D5** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - Optical Rotary Encoder         |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| D6           | Blanco                    |
| D5           | Amarillo                   |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Instala la **Encoder Library** en el Arduino IDE. Puedes encontrar esta biblioteca siguiendo la siguiente ruta: **Sketch-->Include Library-->Manage Libraries**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg" alt="pir" width={600} height="auto" /></p>

Luego busca **encoder** en la ventana emergente. Encuentra **Encoder by Paul Stoffregen**, elige la **Version1.4.1**, luego haz clic en **Install**.
<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- When the library is installed you will see <font style="font-weight:bold;color:#00C3CE">INSTALLED</font>, click **Close** then.  -->

Cuando la biblioteca esté instalada verás **INSTALLED**, haz clic en **Close** entonces.

<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

>Gracias a Paul por su espléndida biblioteca.

- **Paso 2.** Reinicia el Arduino IDE. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el Arduino IDE a través de la ruta: **File --> Examples --> Encoder --> Basic**.
  
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_3.jpg" alt="pir" width={600} height="auto" /></p>

    2. Ábrelo en tu computadora haciendo clic en **Basic.pde** que puedes encontrar en **xxxx\Arduino\libraries\Encoder\examples\Basic**, **XXXX** es la ubicación donde instalaste el Arduino IDE.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_4.jpg" alt="pir" width={600} height="auto" /></p>

    3. O, puedes simplemente hacer clic en el icono
     <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->
     <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

      en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el Arduino IDE.

```cpp
/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * This example code is in the public domain.
 */

#include <Encoder.h>

// Change these two numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(5, 6);
//   avoid using pins with LEDs attached

void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
}
```

:::tip
    Puedes cambiar dos números a los pines conectados a tu encoder, para el Mejor Rendimiento: ambos pines tienen capacidad de interrupción, por lo que puedes cambiar la línea 13 del código a <mark>Encoder myEnc(2, 3);</mark>, mientras tanto, debes conectar este sensor al **D2** del baseshield.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

:::success
     Si todo va bien, obtendrás el resultado. Cuando muevas el obstáculo de izquierda a derecha, el valor del contador aumentará en 1; cuando muevas el obstáculo de derecha a izquierda, el valor del contador se decrementará en 1.
:::

```cpp
Basic Encoder Test:
0
1
2
3
4
3
2
1
0
-1
-2
-3
-4
```

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1.** Elementos utilizados en este proyecto:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat para RasPi </th>
      <th>Grove - Codificador Rotatorio Óptico</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Paso 2.** Conecta el Grove Base Hat al Raspberry.
- **Paso 3.** Conecta el Grove - OLED Display 1.12'' al puerto I2C del Base Hat.
- **Paso 4.** Conecta el Raspberry Pi a la PC a través del cable USB.

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu raspberry pi.
- **Paso 2.** Ejecuta los siguientes comandos para ejecutar el código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_optical_rotary_encoder
```

A continuación se muestra el código de grove_optical_rotary_encoder.py.

```python

'''
This is the code for
    - Grove - Optical Rotary Encoder(TCUT1600X01) <https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X0-p-3142.html>`_

Examples:

    .. code-block:: python

        from grove.grove_button import GroveButton
        import time, sys

        # connect to pin 5 (slot D5)
        PIN = 5
        encoder = GroveOpticalRotaryEncoder(PIN)

        # Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)

'''
from __future__ import print_function
import time, sys, signal, atexit
from grove.gpio import GPIO

__all__ = ["GroveOpticalRotaryEncoder"]

# The UPM version rotaryencoder has bug result in segment fault.
# This pure python version could work well.
class GroveOpticalRotaryEncoder(object):
    '''
    Grove optical Rotary Encoder(TCUT1600X01) class

    Args:
        pin(int): the number of gpio/slot your grove device connected.
    '''
    def __init__(self, pin1, pin2 = None):
        pin2 = pin1 + 1 if pin2 is None else pin2
        self.__gpio  = GPIO(pin1, GPIO.IN)
        self.__gpio2 = GPIO(pin2, GPIO.IN)
        self.__gpio.on_event = self.__gpio_event
        self._pos = 0

    # called by GPIO library
    def __gpio_event(self, pin, value):
        v1 = self.__gpio.read()
        if not v1: return
        v2 = self.__gpio2.read()
        self._pos += 1 if v2 else -1

    def position(self, pos = None):
        '''
        set or get the position counter

        Args:
            pos(int):
                optinal, the position counter to be set.

                if not specified, only get the current counter

        Returns:
            (int): current position counter
        '''
        if not pos is None:
            self._pos = pos
        return self._pos

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    '''
    from upm.pyupm_rotaryencoder import RotaryEncoder as GroveOpticalRotaryEncoder
    from mraa import getGpioLookup

    mraa_pin1 = getGpioLookup("GPIO%02d" % (pin + 0))
    mraa_pin2 = getGpioLookup("GPIO%02d" % (pin + 1))

    # Instantiate a Grove Rotary Encoder, using signal pins mraa_pin1 & mraa_pin2
    myRotaryEncoder = GroveOpticalRotaryEncoder(mraa_pin1, mraa_pin2);
    '''
    myRotaryEncoder = GroveOpticalRotaryEncoder(pin)

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myRotaryEncoder
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # Read the value every second and detect motion
    counter = 0
    while True:
        print("\rPosition: {0}  ".format(myRotaryEncoder.position()), file=sys.stderr, end='')
        counter += 1
        if counter >= 5000:
            print("")
            counter = 0
        time.sleep(0.001)

if __name__ == '__main__':
    main()
```

```python
（env）pi@raspberrypi:~ grove_optical_rotary_encoder
```

:::tip success
Cuando el comando se ejecute exitosamente, imprimirá el valor cada segundo y detectará movimiento.
:::

```python
# Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)
```

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle de Grove - Optical Rotary Encoder](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip)

- **[PDF]** [Hoja de datos de TCUT1600X01](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Optical_Sensor.pdf)

- **[PDF]** [Hoja de datos de MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<iframe width={560} height={315} src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

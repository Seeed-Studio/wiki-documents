---
description: Grove - Botón es un botón de pulso momentario. Contiene un "momentario on/off" independiente.
title: Boton de pulso momentario
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Button_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernadez
---

![](https://github.com/SeeedDocument/Grove_Button/raw/master/img/Button.jpg)

Grove - Botón es un botón de pulso momentario. Contiene un "momentario on/off" independiente. "Momentario" significa que el botón rebota hacia arriba después de ser presionado. La salida del botón es una señal HIGH cuando es presionado, y LOW cuando se encuentra sin presión. La Sig marcada en la serigrafía hace relación a la señal, mientras que el NC permanece sin utilizarse. Contamos con dos versiones de este botón disponibles, como se muestra en las fotografías. La única diferencia yace en la dirección del conector Grove.

[![](https://github.com/SeeedDocument/Grove_Button/raw/master/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Button-p-766.html)

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
| -------------------- | ------- | -------------------- |
| Grove-Botón          | Inicial | Nov 25 2010          |

## Características

- Fácil de utilizar botón momentario ON/OFF
- Utiliza estándar cables Grove de 4-pines

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Espeficiaciones

| Parámetros               | Valor/Rango    |
| ------------------------ | -------------- |
| Voltaje de Operación     | 3.3/5V         |
| Vida Eléctrica           | 200,000 ciclos |
| Fuerza de Operación      | 100 ± 50gf     |
| Temperatura de Operación | -25℃ to +70℃   |
| Tamaño                   | 20mmX20mm      |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

### Jugando con Arduino

#### Hardware

- Paso 1. Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Grove - Botón                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Button/raw/master/img/button_s.jpg) |
| [Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                 | [Get ONE Now](https://www.seeedstudio.com/Grove-Button-p-766.html)                                         |

- Paso 2. Conecta el Grove - Botón al puerto D2 del Grove - Base Shield.
- Paso 3. Inserta el Grove - Shield base en tu Seeeduino/Arduino.
- Paso 4. Conecta el Seeeduino a la PC por medio de un cable USB.

![](https://github.com/SeeedDocument/Grove_Button/raw/master/img/seeeduino_button.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove-Botón |
| ------------ | ----------- |
| 5V           | Rojo        |
| GND          | Negro       |
| No conectado | Blanco      |
| D2           | Amarillo    |

#### Software

- Paso 1. Copia el siguiente código en tu Arduino IDE y subelo.

```c
const int buttonPin = 2;     // El numero del pin al push button
const int ledPin =  13;      // Numero del pin LED

// Variable cambianle
int buttonState = 0;         // Variable de lectura de estados del pushbutton

void setup() {
    //Inicialización del pin LED como salida:
    pinMode(ledPin, OUTPUT);
    //Inicialización del pushbutton como entrada:
    pinMode(buttonPin, INPUT);
}

void loop(){
    // read the state of the pushbutton value:
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed.
    // if it is, the buttonState is HIGH:
    if (buttonState == HIGH) {
        // Encendemos el LED:
        digitalWrite(ledPin, HIGH);
    }
    else {
        // Apagamos el LED:
        digitalWrite(ledPin, LOW);
    }
}
```

- Paso 2. Veremos el led del pin 13 de la tarjeta encendiendo y apagando.

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Boton al puerto D2 del Shield Base.

**Paso 2.** Ensambla el Shield Base en tu Seeeduino/Arduino.

**Paso 3.** Vincula tu Seeeduino/Arduino a tu PC usando un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte Arduino, y arrasta un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Inserta bloques siguiento la imagen a continuación o puedes abrir el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Button/master/img/cc_Button.png)

Sube el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código haya finalizado de subirse, el LED en el Arduino/Seeeduino se encenderá cuando el Boton sea presionado.W

### Jugando con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Componente usados en este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Boton                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Button/raw/master/img/button_s.jpg) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                         | [Get ONE Now](https://www.seeedstudio.com/Grove-Button-p-766.html)                                         |

- **Paso 2**. Ensambla el Grove Base Hat en tu Raspberry Pi.
- **Paso 3**. Conecta el Grove - Boton al puerto PWM del Base Hat (Puerto 12).
- **Paso 4**. Conecta el Raspberry Pi a tu PC usando un cable USB.
  ![](https://github.com/SeeedDocument/Grove_Button/raw/master/img/with_hat.jpg)

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando y corre el código.

```
cd grove.py/grove
python grove_button.py 12
```

Si puedes conecta el LED Rojo a un puerto diferente del Base Hat, en lugar de ejecutar **python grove_led.py 12**, deberás correr el siguiente comando.

```
python grove_button.py portnumber
```

A continuación se encuentra el código grove_button.py.

```python

import time
from grove.button import Button
from grove.factory import Factory


class GroveButton(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        self.__last_time = time.time()
        self.__on_press = None
        self.__on_release = None
        self.__btn.on_event(self, GroveButton.__handle_event)

    @property
    def on_press(self):
        return self.__on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return
        self.__on_press = callback

    @property
    def on_release(self):
        return self.__on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return
        self.__on_release = callback

    def __handle_event(self, evt):
        dt, self.__last_time = evt["time"] - self.__last_time, evt["time"]
        # print("event index:{} event:{} pressed:{}".format(evt["index"], evt["code"], evt["pressed"]))
        if evt["code"] == Button.EV_LEVEL_CHANGED:
            if evt["pressed"]:
                if callable(self.__on_press):
                    self.__on_press(dt)
            else:
                if callable(self.__on_release):
                    self.__on_release(dt)


Grove = GroveButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    button = GroveButton(pin)

    def on_press(t):
        print('Button is pressed')
    def on_release(t):
        print("Button is released, pressed for {0} seconds".format(round(t,6)))

    button.on_press = on_press
    button.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo va bien, serás capáz de ver el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_button.py 12
Hat Name = 'Grove Base Hat RPi'
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is released, pressed for 0.002685 seconds
Button is pressed
Button is released, pressed for 0.219019 seconds
Button is pressed
Button is released, pressed for 0.001372 seconds
Button is pressed
Button is pressed
Button is released, pressed for 0.043143 seconds
Button is pressed
Button is released, pressed for 1.083292 seconds
^CTraceback (most recent call last):
  File "grove_button.py", line 103, in <module>
    main()
  File "grove_button.py", line 99, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes presionar ctrl+c para salir del programa.

### Jugando con Raspberry Pi(usando GrovePi_Plus)

#### Hardware

- Paso 1. Prepara los siguientes componentes:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Button                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Button/raw/master/img/button_s.jpg) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                    | [Get ONE Now](https://www.seeedstudio.com/Grove-Button-p-766.html)                                         |

- Paso 2. Ensambla el GrovePi_Plus en tu Raspberry.
- Paso 3. Conecta el Grove - Boton al puerto D3 del GrovePi_Plus.
- Paso 4. Conecta la Raspberry a tu PC utilizando un cable USB.

![](https://github.com/SeeedDocument/Grove_Button/raw/master/img/rasp_button.jpg)

#### Software

- Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- Paso 2. Git clone el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Paso 3. Ejecute los siguiente comandos:

```
cd ~/GrovePi/Software/Python
python grove_button.py
```

Here is the grove_button.py code.

```python
import time
import grovepi

# Connect the Grove Button to digital port D3
# SIG,NC,VCC,GND
button = 3

grovepi.pinMode(button,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(button))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Paso 4. Veremos el botón en encedido y apagado.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_button.py
0
1
1
1
1
0
0
```

## Recursos

- **[Eagle&PDF]** [Grove-Boton Archivos Eagle](https://github.com/SeeedDocument/Grove_Button/raw/master/resources/Grove_-_Button_v1.0_Source_File.zip)

- **[Más Lecturas]** [Wooden Laser Gun](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

- **[Codecraft]** [Archivos CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Button/master/res/Grove_Button_CDC_File.zip)

## Proyectos

**Grove - Introducción en Botones y cadenas de LEDs:**: Principante-Ejemplo - Apuesto a que los principiantes sonreirán después del proyecto, ¡Envienos una selfie!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-button-led-string-light-f7e4d6/embed' width='350'></iframe>

**Usando Grove Botón para controlar Grove LED**: Cómo contectar y usar Grove Botón para controlar el Grove Socket LED Kit.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**Botón y LED Grove modulares**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RCtsxwx4OaA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/78lVn_-oYaY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

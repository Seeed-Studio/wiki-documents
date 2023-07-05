---
description: El Switch - Grove es un mini SPDT deslizable, ideal para situaciones de "ENCENDIDO/APAGADO".
title: Switch P
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Switch-P_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernadez
---

![](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/switch_p.jpg)

El Switch - Grove es un mini SPDT deslizable, ideal para situaciones de "ENCENDIDO/APAGADO". Es un interruptor confiable de gran calidad de construcción que adaptamos en muchas de nuestras placas. ¡Te recomendamos almacenar algunos para tu sistema de prototipos Grove!.

La "P" en este producto significa "montaje en panel".

<p style={{}}><a href="http://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión de producto    | Cambios | Fecha de lanzamiento |
| ---------------------- | ------- | -------------------- |
| Switch(P) - Grove V1.0 | Inicial | Julio 2012           |

## Características

- Interfaz Grove
- Fácil de usar
- Elemento básico Grove

Consejo:
Para más detalles sobre módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Especificaciones

| Detalle                  | Valor/Rango   |
| ------------------------ | ------------- |
| Voltaje de operación     | 3.3/5V        |
| Vida eléctrica           | 10,000 ciclos |
| Fuerza de operación      | 200 ± 50gf    |
| Temperatura de operación | -20℃ a +80℃   |
| Tamaño                   | 20mmX20mm     |

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

Nota:
Si es la primera vez que usas Arduino, te recomendamos visitar [Comenzando con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de empezar.

### Juega con Arduino

**Hardware**

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Switch(P)-Grove                                                                                               | LED Morado (3mm)- Grove                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/SwitchP_s.jpg) | ![](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/grove_led_s.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                               | [Obtenlo ahora](<http://www.seeedstudio.com/Grove-Switch(P)-p-1252.html>)                                     | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html) |

- **Paso 2.** Conecta el Switch(P)-Grove al puerto **D2** del Shield Base-Grove.
- **Paso 3.** Conecta el LED- Grove al puerto **D6** del Shield Base - Grove.
- **Paso 4.** Conecta el Shield Base - Grove al Seeeduino.
- **Paso 5.** Conecta el Seeeduino a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/seeeduino_switch_led.jpg)

Nota:
Si no tienes el Shield Base - Grove, también puedes conectar el Switch (P) - Grove y el LED Morado - Grove al Seeeduino como se muestra a continuación.

| Seeeduino | Switch(P)-Grove | Seeeduino | LED Morado (3mm)- Grove |
| --------- | --------------- | --------- | ----------------------- |
| 5V        | Rojo            | 5V        | Rojo                    |
| GND       | Negro           | GND       | Negro                   |
| NC        | Blanco          | NC        | Blanco                  |
| D2        | Amarillo        | D6        | Amarillo                |

**Software**

- **Paso 1.** Copia el siguiente código en el IDE de Arduino y cárgalo. Si no sabes cómo hacerlo, revisa [cómo cargar un código](http://wiki.seeedstudio.com/Upload_Code/).

```
const int switchPin = 2;     // número del pin del switch
const int ledPin =  6;      // número del pin del LED

int switchState = 0;         // variable para leer el estatus del botón

void setup() {
    // inicializa el pin del LED como salida:
    pinMode(ledPin, OUTPUT);
    // inicializa el pin del switch como entrada:
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // lee el estado del valor del switch:
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        //prende el LED:
        digitalWrite(ledPin, HIGH);
        Serial.println("switch high!");
    }
    else {
        //apaga el LED:
        digitalWrite(ledPin, LOW);
        Serial.println("switch low");
    }
}

```

- **Paso 2.** Cuando cambiemos a HIGH el LED se encenderá, y también podremos ver la salida en el Monitor Serie como se muestra a continuación.

```
switch high!
switch high!
switch high!
```

### Juega con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | Base Hat Grove para RasPi                                                                                                      | Switch P - Grove                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/SwitchP_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](<http://www.seeedstudio.com/Grove-Switch(P)-p-1252.html>)                                     |

- **Paso 2**. Conecta el Base Hat Grove a la Raspberry.
- **Paso 3**. Conecta el Switch al puerto 12 de la Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/Switch_Hat.jpg)

Nota:
En el paso 3, puedes conectar el switch a **cualquier puerto GPIO** pero debes asegurarte de cambiar el número del puerto correspondiente en el código.

#### Software

- **Paso 1**. Sigue [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
python grove_switch.py 12

```

Aquí está el código grove_switch.py

```python


import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("on")
        else:
            print("off")
        time.sleep(1)


if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo ha ido bien, verás el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_switch.py 12
off
off
on
off
on
on
off
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes quitar este código presionando ctrl+c.

### Juega con Raspberry Pi (con GrovePi_Plus)

**Hardware**

- **Paso 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Switch(P)-Grove                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/SwitchP_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Obtelo ahora](<http://www.seeedstudio.com/Grove-Switch(P)-p-1252.html>)                                      |

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.
- **Paso 3.** Conecta el Switch(P)-Grove al puerto **D3** del GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/img/rpi_switch.jpg)

**Software**

- **Paso 1.** Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para monitorear el estado del switch.

```python
cd ~/GrovePi/Software/Python
python grove_switch.py
```

Aquí está el código grove_switch.py

```python
import time
import grovepi

# Conecta el Switch Grove al puerto digital D3
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Paso 4.** Podrás ver el estado del switch como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_switch.py
1
1
0
0
0
```

## Recursos

- **[Eagle&PDF]** [Switch(P)-Grove Esquemático](https://github.com/SeeedDocument/Grove-Switch-P/raw/master/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## Proyectos

**Usando un switch para abrir y cerrar un relé**: Aprenderás el valor de un interruptor con sus funciones HIGH y LOW. Además, aprenderás a usar un relé como actuador.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

## Soporte técnico

Por favor envíe problemas técnicos o dudas a nuestro [foro](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

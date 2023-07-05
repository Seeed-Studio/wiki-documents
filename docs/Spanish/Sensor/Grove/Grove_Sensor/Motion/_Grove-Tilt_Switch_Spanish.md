---
description: El Grove - Interruptor de Inclinación (Grove-Tilt Switch) es equivalente a un botón, y es usando cómo una entrada digital.
title: Grove - Interruptor de Inclinación
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Tilit_Switch_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/img/Tilt1.jpg)

El Grove - Interruptor de Inclinación (Grove-Tilt Switch) es equivalente a un botón, y es usando cómo una entrada digital. Dentro del sensor de inclinación nos encontramos con un par de pelotas o bolas, que hacen contacto en cuando el pin se encuentra en vertical. Inclinelas en caso contrario y estás no se tocarán, no haciendo el cierre del circuito. Se encuentra cableado a la linea SIG, NC indica que el pin no se encuentra conectado.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

## Características

- Interfaz Grove
- Fácil de usar
- Módulo Grove Simple

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Artículo
</th>
<th scope="col">
Min
</th>
<th scope="col">
Nominal
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Ángulo de Conexión
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Ángulo de Desconexión
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Vida Eléctrica
</th>
<td colspan="3">
100,000
</td>
<td>
Ciclo
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

### Jugando con Arduino

El pin de Señal del Grove - Interruptor de Inclinación esta normalmente apagada. Cuando el Interruptor de Inclinación se encuentra en una posición vertical, el par de bolas dentro del interruptor harán contacto tornando la señal de salida en encendido.

El siguiente sketch demuestra una simple aplicación de uso del Interruptor de Inclinación y el Botón - Grove para controlar un LED.

- Como indica la siguiente imagen, el Interruptor de Inclinación se encuentra conectado al puerto 5 del Grove - Shield Base y el Botón - Grove al puerto digital 7. El LED se encuentra conectado al puerto digital 1. La instalación del hardware es la siguiente:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/img/Digitalv1.0b.jpg)

- Copia y pega el siguiente código en un nuevo Sketch de Arduino.

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

- Carga el código.
- El LED encenderá cuando presiones del botón o actives el interruptor de Inclinación. ¡Pruebalo!

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Interruptor de Inclinación al puerto D5, acto seguido conecta el Grove - Botón y el Grove - LED Rojo al puerto D7 y D2, respectivamente, al Shield Base.

**Paso 2.** Ensamble el Shiel Base a tu Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino/Arduino a tu computadora por medio de cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega suporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como se muestra en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/img/cc_Tilt_Switch.png)

Carga el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando la carga del código termine, inclina el Interruptor de Inclinación o presiona el botón, el LED encederá.

### Juega con Raspberry Pi (Con Base Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Dispositivos para este proyecto:

| Raspberry pi                                                                                                   | Grove Base para RasPi                                                                                                          | Grove - Interruptor de Inclinación                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Tilt_Switch/raw/master/img/thumbnail.jpg) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                         | [Get ONE Now](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)                                          |

- **Paso 2**. Ensambla el Grove Base en tu Raspberry.
- **Paso 3**. Conecta el Interruptor de Inclinación en el puerto 12 de la base.
- **Paso 4**. Conecta el Raspberry Pi a tu PC usando a través de un cable USB.

![](https://github.com/SeeedDocument/Grove-Tilt_Switch/raw/master/img/Tilt_Hat.jpg)

¡Nota!
Para el paso 3 podrás conectar el Interruptor de Inclinación a **cualquier puerto GPIO** pero, asegurate de cambiar los comandos con el número correspondiente.

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los comandos debajo para correr el código.

```
cd grove.py/grove
python grove_tilt_switch.py 12

```

A continuación se encuentra el código grove_tilt_switch.py.

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo ha salido bien, podrás ver el siguiente resultado cuando toques el Interuptor de Inclinación.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugando con Raspberry Pi (con GrovePi_Plus)

### Con Raspberry Pi

1.Deberás tener una Raspberry Pi y un Grovepi o un Grovepi+.

2.Deberás tener completa la configuración del ambiente de desarrollo, de otra manera ve [Aquí](/GrovePi_Plus).

3.Conexión

- Ensambla el Interruptor de Inclinación en el puerto D3 del grovepi usando un cable Grove.

4.Navega al directorio de demostraciones:

```
       cd yourpath/GrovePi/Software/Python/
```

- Para ver el cógido:

```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5. Corre la demostración

```
    sudo python grove_tilt_switch.py
```

6.Resultado: Pon el sensor en vertical por un lado, y la señal del pin será positiva.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/img/Grovepi_tilt_Switch_00.png)

## Referencia

El Ángulo de operación del Interruptor de Inclinación Grove se muestra debajo:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/img/Tilt_Switch_Operate.jpg)

<div class="admonition note">
<p class="admonition-title">Nota</p>
La marca J1 en el módulo Grove es la terminal de referencia.
</div>

## Recursos

- [Grove - Tilt Switch v1.0 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
- [Grove - Tilt Switch v1.1 PDF File](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
- [Grove - Tilt Switch v1.1 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
- [SW200D Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/res/SW200D_datasheet.pdf)
- [Codecraft CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Tilt_Switch/master/res/Grove_Tilt_Switch_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch -->

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

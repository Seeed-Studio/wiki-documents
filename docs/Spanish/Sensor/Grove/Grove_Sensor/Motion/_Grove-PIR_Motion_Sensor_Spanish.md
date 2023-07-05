---
description: Este sensor permite detectar el movimiento, generalmente humano, que se encuentre en su rango.
title: Motion Sensor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-PIR_Motion_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove_-_PIR_Motion_Sensor.jpg)

Este sensor permite detectar el movimiento, generalmente humano, que se encuentre en su rango. Simplemente conéctelo a la Base Shield - Grove y prográmelo, cuando alguien se mueva en su rango de detección, el sensor emitirá HIGH en el pin de señal (SIG).

<p style={{}}><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Características

- Compatible con la interfaz Grove
- Rango de detección ajustable
- Tiempo de reacción ajustable

Consejo:
Para más información sobre módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Especificaciones

| Parámetro                             | Valor/Rango |
| ------------------------------------- | ----------- |
| Voltaje de operación                  | 3V–5V       |
| Corriente de operación(VCC = 3V)      | 100uA       |
| Corriente de operación(VCC = 5V)      | 150uA       |
| Rango de detección                    | 0.1 - 6m    |
| Distancia de detección predeterminada | 3m          |
| Tiempo de reacción                    | 1 - 25s     |
| Longitud de onda de trabajo           | 7 - 14um    |
| Ángulo de detección                   | 120 grados  |

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

Nota:
Si es tu primera vez utilizando Arduino, te recomendamos visitar [Comenzando con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de empezar.

### Juega con Arduino

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                             | Sensor de Movimiento PIR- Grove                                                                                                                  | Base Shield                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Obtenlo ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)                                                                  | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                    |

- **Paso 2.** Conecta el Sensor de Movimiento PIR- Grove al puerto **D2** de la Base Shield - Grove.

- **Paso 3.** Conecta la Base Shield - Grove al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/connect_arduino.jpg)

Nota:
Si no tienes la Base Shield - Grove, también puedes conectar directamente el Sensor de Movimiento PIR- Grove al Seeeduino como se muestra a continuación.

| Seeeduino   | Sensor de Movimiento PIR- Grove |
| ----------- | ------------------------------- |
| 5V          | Rojo                            |
| GND         | Negro                           |
| No conectar | Blanco                          |
| D2          | Amarillo                        |

#### Software

- Copia el siguiente código en el IDE de Arduino y cárgalo. Si no sabes cómo cargar el código, por favor revisa [cómo cargar códigos](http://wiki.seeedstudio.com/Upload_Code/).

```c
/*macro definiciones del pin del sensor de mov PIR y el pin del LED*/
#define PIR_MOTION_SENSOR 2//Usa el pin 2 para recibir la señal del módulo


void setup()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    Serial.begin(9600);

}

void loop()
{
    if(digitalRead(PIR_MOTION_SENSOR))//Si detecta gente moviéndose?
        Serial.println("Hi,people is coming");
    else
        Serial.println("Watching");

 delay(200);
}

```

Nota:
La distancia de detección y el tiempo de reacción pueden ser ajustados añadiendo dos potenciómetros extra en la tarjeta. Para más detalles, vea Eagle V1.2 en Recursos. El módulo también puede ser configurado como reaccionable o irreaccionable cambiando la unión de los jumpers.

El resultado debe lucir como esto:

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/result_arduino.png)

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Sensor de Movimiento PIR- Grove al puerto D2 de la Base Shield.

**Paso 2.** Conecta la Base Shield al Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, por favor revisa [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como se muestra en la imagen, o abre el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_PIR_Motion_Sensor/master/img/cc_PIR_Motion_Sensor.png)

Carga el programa a tu Seeeduino/Arduino.

¡Éxito!
Cuando el código termine de cargarse, el LED se encenderá cuando detecte movimiento.

### Juega con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | Base Hat - Grove para RasPi                                                                                                    | Sensor de Movimiento PIR- Grove                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)                                                                  |

- **Paso 2**. Conecta la Base Hat - Grove a la Raspberry.
- **Paso 3**. Conecta el Sensor de Movimiento PIR al puerto 12 de la Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Motion_Hat.jpg)

Nota:
En el Paso 3 puedes conectar el Sensor de Movimiento PIR- Grove a **cualquier puerto GPIO**, pero debes asegurarte de cambiar en el comando el número de puerto correspondiente.

#### Software

- **Paso 1**. Sigue [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
python grove_mini_pir_motion_sensor.py 12

```

Aquí está el código grove_mini_pir_motion_sensor.py

```python

import time
from grove.gpio import GPIO


class GroveMiniPIRMotionSensor(GPIO):
    def __init__(self, pin):
        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GroveMiniPIRMotionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))

    def callback():
        print('Motion detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

¡Éxito!
Si todo salió bien, verás el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12
Motion detected.
Motion detected.
Motion detected.
^CTraceback (most recent call last):
  File "grove_mini_pir_motion_sensor.py", line 84, in <module>
    main()
  File "grove_mini_pir_motion_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes quitar este programa presionando ctrl+c.

### Juega con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                      | GrovePi_Plus                                                                                                            | Sensor de Movimiento PIR- Grove                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                   | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                     | [Obtenlo ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)                                                                  |

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.

- **Paso 3.** Conecta el sensor al puerto **D8** del GrovePi_Plus.

- **Paso 4.** Conecta la Raspberry a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/connect_pi.jpg)

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Actualizando el Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar a la última versión de firmware del GrovePi.

¡Consejo!
En este wiki usamos el path **~/GrovePi/** en vez de **/home/pi/Desktop/GrovePi**, debes asegurarte que el Paso 2 y el Paso 3 usen el mismo path.

Nota:
Recomendamos firmemente actualizar el firmware o algunos sensores pueden marcar errores.

- **Paso 3.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Corre los comandos que se muestran abajo para usar el Sensor de Movimiento PIR para monitorear el movimiento de la gente.

```
cd ~/GrovePi/Software/Python
sudo python grove_pir_motion_sensor.py
```

Aquí está el código grove_pir_motion_sensor.py

```python
import time
import grovepi

# Conecta el Sensor de Movimiento PIR-Grove al puerto digital D8
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # Detecta movimiento, usualmente humano, en el rango de detección
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # Si tu tiempo de detección es menor a este, puede que no veas muchas detecciones
        time.sleep(.2)

    except IOError:
        print "Error"
```

El resultado debe lucir así:

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_pir_motion_sensor.py

-
-
-
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
-
-

```

## Preguntas frecuentes

**¿Cómo hacer que la distancia sea ajustable?**

R2: usada para ajustar la distancia de detección (el coeficiente AMP, 2MΩ). R6: usada para ajustar el tiempo de reacción (ciclo de activación, 100KΩ).

La distancia de detección puede ser ajustada desde 6 metros hasta unos cuantos centímetros. Si el potenciómetro se gira hasta un extremo, el módulo estará demasiado sensible para ser activado por la atmósfera, incluso si no hay gente moviéndose enfrente de él. El tiempo de reacción también puede ser ajustado por el potenciómetro Delay_time, cuyo valor puede ir desde 25s a 1s.

Si R2 y R6 están soldadas, por favor asegúrate de que R13 y R14 estén vacías.

Nota:
Hay riesgo de que la tarjeta se dañe. Por favor, piénselo antes de hacer esta modificación.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Resistor.png)

## Recursos

- **[Eagle]** [Sensor de Movimiento PIR- Grove Archivo Eagle v1.2](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip)
- **[PDF]** [Sensor de Movimiento PIR- Grove v1.2 Esquemático](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Sensor de Movimiento PIR- Grove Eagle V1.2 PCB](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[Librería]** [Repositorio Github para Sensor de Movimiento PIR](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[Hoja de datos]** [BISS0001 Datasheet](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Twig_-_BISS0001.pdf)
- **[Hoja de datos]** [Fresnel lens 8120 Datasheet](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Fresnel_lens_8120.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_PIR_Motion_Sensor/master/res/Grove_PIR_Motion_Sensor_CDC_File.zip)

## Proyectos

**Alarma antirrobo con Sensor de Movimiento PIR**: Este artículo explica la alarma antirrobo con un Sensor de Movimiento PIR.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed' width='350'></iframe>

## Soporte técnico

Por favor envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

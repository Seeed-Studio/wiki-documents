---
description: El Grove - Sensor de Temperatura utiliza Termistor para detectar la temperatura ambiente.
title: Grove Sensor de Temperatura
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Temperature_Sensor_V1.2_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

<p style={{}}><img src="https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_View.jpg" /></p>

El Grove - Sensor de Temperatura utiliza [Termistor](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/NCP18WF104F03RC.pdf) para detectar la temperatura ambiente. La resistencia de un termistor incrementa cuando la temperatura ambiente decrese. Esta es la característica que utilizamos para calcular la temperatura del entorno. El rango de detección es de -40 a 125ºC con una presicón de ±1.5ºC.

Nota: Esta Wiki trabaja con el Grove - Sensor de Temperatur v1.1, así como también con el V1.0, Por favor revisa [Grove - Sensor de Temperatura](http://wiki.seeedstudio.com/Grove-Temperature_Sensor)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Especificaciones

---

- Voltaje: 3.3 ~ 5V
- Resistencia de Potencia Cero: 100 KΩ
- Tolerancia de Resistencia: ±1%
- Rango de Temperatura de Operación: -40 ~ +125 ℃
- B-Constante nominal： 4250 ~ 4299K

¡Consejo!
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

---

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

---

Después de esta sección, podrás hacer funcionar el Grove - Sensor de Temperatura V1.1/1.2 con solo unos pasos.

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Sensor de Temperatura                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_View_little.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                  | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)                                                                      |

- **Paso 2.** Conecta el Grove - Sensor de Temperatura al puerto **A0** del Grove Shield Base.

- **Paso 3.** Inserta el Grove - Shield Base en el Seeeduino.

- **Paso 4.** Conecta el Seeeduino al PC vía USB.

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/connect_Arduino.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo como se muestra a continuación.

| Seeeduino    | Grove - Sensor de Temperatura |
| ------------ | ----------------------------- |
| 5V           | Rojo                          |
| GND          | Negrp                         |
| No Conectado | Blanco                        |
| A0           | Amarillo                      |

#### Software

- **Paso 1.** Lanza el IDE de Arduino y da click en **Archivo>Nuevo** para abrir una nueva página. Copia el siguiente código y subelo. Si no sabes como hacerlo, por favor revisa [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```
// Demo code for Grove - Temperature Sensor V1.1/1.2
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275;               // B valor del termistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Sensor de Temperatura conectado a A0

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; //Convertimos la entrada a temperatura

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

**Paso 2.** Abre el **Monitor Serial** del Arduino IDE dando click **Herramientas-> Serial Monitor**. O presiona ctrl+shift+m al mismo tiempo. Si todo ha salido bien, obtendrás la temperatura.

El resultado será similar a esto:

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_result.jpg)

### Jugando con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Materiales usados en este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Sensor de Temperatura                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_View_little.jpg) |
| [¡Obtenlo ya!](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                 | [¡Obtenlo ya!](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                        | [¡Obtenlo ya!](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)                                                                         |

- **Paso 2**. Inserta el Grove Base Hat en tu Raspberry.
- **Paso 3**. Conecta el Sensor de Temperatura al puerto A0 del Hat Base.
- **Paso 4**. Conecta el Raspberry Pi con tu PC vía cable USB.

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Temperature_Hat.jpg)

¡Nota!
En el paso 3, puedes concetar el sensor de temperatura a **cualquier puerto Analógico** solo asegurate de cambiar el comando con el puerto correspondiente.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el Archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_temperature_sensor.py 0

```

A continuación el código grove_temperature_sensor.py.

```python

import sys
import time
from grove.factory import Factory


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = Factory.getTemper("NTC-ADC", pin)

    print('Detecting temperature...')
    while True:
        print('{} Celsius'.format(sensor.temperature))
        time.sleep(1)


if __name__ == '__main__':
    main()

```

¡Éxito!
Si todo ha salido bien, podrás ver un resultado similar al siguiente:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_temperature_sensor.py 0
Hat Name = 'Grove Base Hat RPi'
Detecting temperature...
24.7473402633 Celsius
24.7473402633 Celsius
24.7473402633 Celsius
24.7112751977 Celsius
24.7112751977 Celsius
^CTraceback (most recent call last):
  File "grove_temperature_sensor.py", line 53, in <module>
    main()
  File "grove_temperature_sensor.py", line 49, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir del programa presionando ctrl+c.

¡Atención!
Deberás notar que para los puertos analógicos, la serigrafía tiene algo como **A1, A0**. Sin embargo, para el comando usamos los parámetros usamos **0** y **1**, al igual que con los puertos digitales. Entonces, asegurate de poner el módulo en el puerto correcto, o podrás tener conflictos de pines.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi                                                                                                      | GrovePi_Plus                                                                                                            | Grove - Sensor de Temperatura                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_View_little.jpg) |
| [Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                     | [Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                       | [Get One Now](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)                                                                          |

- **Paso 2.** Inserta el GrovePi_Plus en tu Raspberry.

- **Paso 3.** Conecta el Grove - Sensor de Temperatura en el puerto **A0** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry en tu PC vía cable USB.

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/connect_pi.jpg)

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar al firmware más reciente del GrovePi.

¡Consejo!
En este Wiki usamos el path **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, debes asegurarte de que el Paso 2 y 3 utilicen el mismo path.

¡Nota!
Te sugerimos actualizar el Firmware. o podrás tener errores con algunos sensores.

- **Paso 3.** Git clone el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Ejecuta los siguientes comando para usar el Grove - Sensor de Temperatura para medir temperatura.

```
cd ~/GrovePi/Software/Python
sudo python grove_temperature_sensor.py
```

A continuación el código grove_temperature_sensor.py.

```python

# NOTa:
# 	The sensor uses a thermistor to detect ambient temperature.
# 	The resistance of a thermistor will increase when the ambient temperature decreases.
#
# 	There are 3 revisions 1.0, 1.1 and 1.2, each using a different model thermistor.
# 	Each thermistor datasheet specifies a unique Nominal B-Constant which is used in the calculation forumla.
#
# 	The second argument in the grovepi.temp() method defines which board version you have connected.
# 	Defaults to '1.0'. eg.
# 		temp = grovepi.temp(sensor)        # B value = 3975
# 		temp = grovepi.temp(sensor,'1.1')  # B value = 4250
# 		temp = grovepi.temp(sensor,'1.2')  # B value = 4250

import time
import grovepi

# Conecta el sensor al puerto A0
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        temp = grovepi.temp(sensor,'1.2')
        print("temp =", temp)
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")

```

El resultado se verá así:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_temperature_sensor.py

('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.368489566400115)
('temp =', 25.61468397498203)
('temp =', 27.43501590142614)
('temp =', 27.85285590636829)
('temp =', 27.18509952680688)
('temp =', 26.852756540240193)

```

## Referencias

---

Si quiere conocer como funciona el algoritmo de temperatura, puedes usar la siguiente imagen:

![](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg)

## Recursos

---

- **[Zip]** [Archivos Eagle Grove - Sensor de Temperatura v1.1](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/Grove_-_Temperature_sensor_v1.1.zip)
- **[PDF]** [Grove - Sensor de Temperatura v1.1.PDF](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/Grove_-_Temperature_sensor_v1.1.pdf)
- **[PDF]** [Sensor de Temperatura datasheet](https://github.com/SeeedDocument/Grove-Temperature_Sensor_V1.2/raw/master/res/NCP18WF104F03RC.pdf)

## Proyectos

**Módulo Grove Sensor de Temperatura**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wjL7xOGqAqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9pkmiK8EM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

---
description: Este sensor de temperatura y humedad proporciona una salida digital precalibrada.
title: Sensor de temperatura y humedad
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-TemperatureAndHumidity_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/main.jpg)

Este sensor de temperatura y humedad proporciona una salida digital precalibrada. Un elemento sensor capacitivo mide la humedad relativa y la temperatura se mide con un termistor de coeficiente de temperatura negativo (NTC). Tiene una excelente fiabilidad y estabilidad a largo plazo. Tenga en cuenta que este sensor no funcionará para temperaturas inferiores a 0 grados.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Características

---

- Mide humedad relativa y temperatura
- Compensación de temperatura de rango completo calibrado
- Señal digital
- Estabilidad de largo plazo
- Distancia de transmición larga(>20m)
- Bajo consumo de energía

Consejo:
Para más información sobre los módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Ideas de uso

---

- Producto de consumo
- Estación meteorológica
- Regulador de humedad
- Aire acondicionado

## Especificaciones

---

### Especificaciones clave

| Detalle       | Min                   |
| ------------- | --------------------- |
| Tamaño PCB    | 2.0cm\*4.0cm          |
| Interfaz      | 2.0mm cabecera de pin |
| Estructura IO | SIG,VCC,GND,NC        |
| ROHS          | Sí                    |

### Características electrónicas

<table border="1">
<tr>
<th>
Detalle
</th>
<th>
Condición
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unidad
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Suministro de corriente de medición
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Suministro promedio de corriente
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Rango de medición
</td>
<td>
Humedad
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Exactitud
</td>
<td>
Humedad
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensibilidad
</td>
<td>
Humedad
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repetibilidad
</td>
<td>
Humedad
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Estabilidad a largo plazo
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/año
</td>
</tr>
<tr align="center">
<td>
Periodo de recolección de señal
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

Cuando el MCU manda una señal de activación, el sensor cambiará del modo de bajo consumo a modo activo. Después de que el sensor de señal de activación envíe una señal de respuesta al MCU, los datos recopilados de 40 bits son enviados, y se activa una nueva recopilación de señal (tenga en cuenta que los datos recopilados de 40 bits que se envían del sensor a la MCU ya se han recopilado antes de que llegue la señal de activación). Una señal de disparo recibe datos de respuesta de 40 bits del sensor una vez. Los datos de un solo bus se utilizan para la comunicación entre MCU y el sensor.

El proceso de comunicación se muestra a continuación:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Twig-Temperature_Humidity.jpg)

Tarda 5ms para comunicarse una vez. El bit de datos de alto orden se envía primero. Los datos de señal son de 40 bits, compuesto de 16 bits de datos de humedad, 16 bits de datos de temperatura y 8 bits de la suma de comprobación. El formato de los datos es el siguiente:

    8bits parte entera de la humedad+8bits parte decimal de la humedad
    +8bits parte entera de la temperatura+8bits parte decimal de la temperatura
    +8bits suma de comprobación.

Nota:
Si es la primera vez que usas Arduino, visita [Empezando con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de empezar.

### Juega con Arduino

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Sensor de temperatura y humedad                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                    | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)                                              |

- **Paso 2.** Conecta el Sensor de temperatura y humedad - Grove al puerto **D2** del Shield Base - Grove.

- **Paso 3.** Conecta el Shield Base - Grove al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/connect_arduino.jpg)

Nota:
Si no tienes el Shield Base - Grove, puedes conectar directamente el sensor al Seeeduino como se muestra.

| Seeeduino     | Sensor de temperatura y humedad |
| ------------- | ------------------------------- |
| 5V            | Rojo                            |
| GND           | Negro                           |
| No se conecta | Blanco                          |
| D2            | Amarillo                        |

#### Software

- **Paso 1.** Descarga la [ librería Seeed DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) de Github.

- **Paso 2.** Visita [Cómo instalar una librería](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería en Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo “DHTtester” siguiendo: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Con este demo se puede obtener información sobre la temperatura y humedad del ambiente.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/path.png)

Nota:
Este Sensor de temperatura y humedad - Grove y [Sensor de temperatura y humedad pro - Grove](http://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/) comparten la librería. No importa qué producto estés usando, asegúrate de haber hecho efectiva la línea de definición del sensor de la placa, y de haber comentado las líneas de definición de otras especificaciones. Por ejemplo, el sensor que utilizamos para el Sensor de temperatura y humedad - Grove es DHT 11. Por lo tanto, la parte de definición de la especificación del sensor debería ser:

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

La configuración predeterminada de la biblioteca es `DHT 22`, así que debes cambiarla a `DHT 11` manualmente.

- **Paso 4.** Carga el demo. Si no sabes cómo hacerlo, visita [cómo cargar un código](http://wiki.seeedstudio.com/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino **Herramientas-> Monitor Serie**. O teclea ctrl + shift + m al mismo tiempo. Si todo sale bien, podrás ver la temperatura.

El resultado debe verse así:

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/result_ar.png)

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Sensor de temperatura y humedad - Grove al puerto D2 del Shield Base.

**Paso 2.** Conecta el Shield Base al Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a la PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es la primera vez que usas Codecraft, visita [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o descarga el archivo cdc que se encuentra al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/cc_Temperature_Humidity.png)

Carga el programa al Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargar, podrás ver la temperatura y la humedad en el Monitor Serie.

### Juega con Raspberry Pi (con Base Hat Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | Base Hat Grove para RasPi                                                                                                      | Sensor de Temperatura y Humedad - Grove                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)                                              |

- **Paso 2**. Conecta la Base Hat Grove a la Raspberry.
- **Paso 3**. Conecta el sensor de temperatura y humedad al puerto 12 del Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/Temp_Hum_Hat.jpg)

Nota:
Para el paso 3, puedes conectar el sensor a **cualquier puerto GPIO** pero asegurarte de cambiar el comando con el número correspondiente.

#### Software

- **Paso 1**. Visita [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
python grove_temperature_humidity_sensor.py 11 12

```

Nota: 1. Para correr el código, la línea de comando debe ser +++python grove_temperature_humidity_sensor.py DHT type pin+++. En cuanto a este módulo, El DHT es 11 y conectamos el sensor de temperatura y humedad al pin 12 en el caso de arriba. 2. Este sensor de temperatura y humedad - Grove y el [Sensor de temperatura y humedad pro - Grove](http://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/) comparten el código de python, llamado 'grove_temperature_humidity_sensor.py'. La única diferencia es el DTH 22 del sensor pro y DTH 11 de este sensor.

A continuación se muestra el código grove_temperature_humidity_sensor.py

```python

import RPi.GPIO as GPIO
# de grove.helper import *
def set_max_priority(): pass
def set_default_priority(): pass
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

PULSES_CNT = 41

class DHT(object):
    DHT_TYPE = {
        'DHT11': '11',
        'DHT22': '22'
    }

    MAX_CNT = 320

    def __init__(self, dht_type, pin):
        self.pin = pin
        if dht_type != self.DHT_TYPE['DHT11'] and dht_type != self.DHT_TYPE['DHT22']:
            print('ERROR: Please use 11|22 as dht type.')
            exit(1)
        self._dht_type = '11'
        self.dht_type = dht_type
        GPIO.setup(self.pin, GPIO.OUT)

    @property
    def dht_type(self):
        return self._dht_type

    @dht_type.setter
    def dht_type(self, type):
        self._dht_type = type
        self._last_temp = 0.0
        self._last_humi = 0.0

    def _read(self):
        # Envía señal de caída para disparar datos de salida del sensor
        # Espera 20ms para recolectar 42 bytes de datos
        GPIO.setup(self.pin, GPIO.OUT)
        set_max_priority()

        GPIO.output(self.pin, 1)
        sleep(.2)

        GPIO.output(self.pin, 0)
        sleep(.018)

        GPIO.setup(self.pin, GPIO.IN)
        # se necesita un pequeño retraso
        for i in range(10):
            pass

        # pullup by host 20-40 us
        count = 0
        while GPIO.input(self.pin):
            count += 1
            if count > self.MAX_CNT:
                # print("pullup by host 20-40us failed")
                set_default_priority()
                return None, "pullup by host 20-40us failed"

        pulse_cnt = [0] * (2 * PULSES_CNT)
        fix_crc = False
        for i in range(0, PULSES_CNT * 2, 2):
            while not GPIO.input(self.pin):
                pulse_cnt[i] += 1
                if pulse_cnt[i] > self.MAX_CNT:
                    # print("pulldown by DHT timeout %d" % i)
                    set_default_priority()
                    return None, "pulldown by DHT timeout %d" % i

            while GPIO.input(self.pin):
                pulse_cnt[i + 1] += 1
                if pulse_cnt[i + 1] > self.MAX_CNT:
                    # print("pullup by DHT timeout %d" % (i + 1))
                    if i == (PULSES_CNT - 1) * 2:
                        # fix_crc = true
                        # break
                        pass
                    set_default_priority()
                    return None, "pullup by DHT timeout %d" % i

        # volver a la prioridad normal
        set_default_priority()

        total_cnt = 0
        for i in range(2, 2 * PULSES_CNT, 2):
            total_cnt += pulse_cnt[i]

        # nivel bajo ( 50 us) contador promedio
        average_cnt = total_cnt / (PULSES_CNT - 1)
        # print("bucle promedio bajo nivel = %d" % average_cnt)

        data = ''
        for i in range(3, 2 * PULSES_CNT, 2):
            if pulse_cnt[i] > average_cnt:
                data += '1'
            else:
                data += '0'

        data0 = int(data[ 0: 8], 2)
        data1 = int(data[ 8:16], 2)
        data2 = int(data[16:24], 2)
        data3 = int(data[24:32], 2)
        data4 = int(data[32:40], 2)

        if fix_crc and data4 != ((data0 + data1 + data2 + data3) & 0xFF):
            data4 = data4 ^ 0x01
            data = data[0: PULSES_CNT - 2] + ('1' if data4 & 0x01 else '0')

        if data4 == ((data0 + data1 + data2 + data3) & 0xFF):
            if self._dht_type == self.DHT_TYPE['DHT11']:
                humi = int(data0)
                temp = int(data2)
            elif self._dht_type == self.DHT_TYPE['DHT22']:
                humi = float(int(data[ 0:16], 2)*0.1)
                temp = float(int(data[17:32], 2)*0.2*(0.5-int(data[16], 2)))
        else:
            # print("checksum error!")
            return None, "checksum error!"

        return humi, temp

    def read(self, retries = 15):
        for i in range(retries):
            humi, temp = self._read()
            if not humi is None:
                break
        if humi is None:
            return self._last_humi, self._last_temp
        self._last_humi,self._last_temp = humi, temp
        return humi, temp

Grove = DHT


def main():
    import sys
    import time

    if len(sys.argv) < 3:
        print('Usage: {} dht_type pin'.format(sys.argv[0]))
        sys.exit(1)

    typ = sys.argv[1]
    sensor = DHT(typ, int(sys.argv[2]))

    while True:
        humi, temp = sensor.read()
        if not humi is None:
            print('DHT{0}, humidity {1:.1f}%, temperature {2:.1f}*'.format(sensor.dht_type, humi, temp))
        else:
            print('DHT{0}, humidity & temperature: {1}'.format(sensor.dht_type, temp))
        time.sleep(1)


if __name__ == '__main__':
    main()



```

¡Éxito!
Si todo ha ido bien, verás el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor.py 11 12
DHT11, humidity 31.0%, temperature 22.0*
DHT11, humidity 30.0%, temperature 23.0*
DHT11, humidity 29.0%, temperature 23.0*
^CTraceback (most recent call last):
  File "grove_temperature_humidity_sensor.py", line 192, in <module>
    main()
  File "grove_temperature_humidity_sensor.py", line 188, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes quitar este programa presionando ctrl+c.

### Juega con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Step 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                      | GrovePi_Plus                                                                                                            | Sensor de temperatura y humedad - Grove                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                   | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                     | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)                               |

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.

- **Paso 3.** Conecta el Sensor de Temperatura y humedad - Grove al puerto **D4** del GrovePi_Plus.

- **Paso 4.** Conecta la Raspberry a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/connect_pi.jpg)

#### Software

- **Paso 1.** Visita [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Visita [Actualización de Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar al firmware de Grovepi más nuevo.

Consejo:
En este wiki usamos el path **~/GrovePi/** en vez de **/home/pi/Desktop/GrovePi**, debes asegurarte de que el paso 2 y 3 usen el mismo.

Nota:
Recomendamos firmemente actualizar el firmware o algunos sensores pueden presentar errores.

- **Paso 3.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Revisa el código.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

Debe ser así:

```python
import grovepi
import math
# Conecta el sensor al puerto digital D4
# Este ejemplo usa el sensor azul
# SIG,NC,VCC,GND
sensor = 4  # El sensor va al puerto digital 4.

# temp_humidity_sensor_type
# Base Kit Grove trae el sensor azul
blue = 0    # Sensor azul
white = 1   # Sensor blanco

while True:
    try:
        # Este ejmplo usa el sensor azul
        # El primer parámetro es el puerto, el segundo es el tipo de sensor.
        [temp,humidity] = grovepi.dht(sensor,blue)
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Toca ctrl+x para quitar el nano.

Nota:
El sensor de temperatura y humedad - Grove y el sensor de temperatura y humedad pro - Grove comparten el código python llamado
`grove_dht_pro.py`. La única diferencia es en la oración `[temp,humidity] = grovepi.dht(sensor,blue)`. Usamos el parámetro
`blue` para el sensor de temperatura y humedad - Grove y `white` para el sensor de temperatura y humedad pro - Grove. El valor predeterminado es azul, así que para este sensor no es necesario cambiar el código.

- **Paso 5.** Ejecuta los siguientes comandos para obtener los valores.

```
sudo python grove_dht_pro.py
```

El resultado debe verse así:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```

## Recursos

- **[Zip]** [Sensor de temperatura y humedad archivo eagle](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/res/Temperature_Humidity.zip)

- **[Zip]** [Sensor de temperatura y humedad Librería](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## Proyectos

**Sistema de gestión de baños**: Usando este sistema, varias personas pueden compartir un solo baño eficientemente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

## Soporte técnico

Por favor envíe cualquier problema o duda a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

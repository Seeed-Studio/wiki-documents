---
description: Grove - Sensor de Gas(MQ2)
title: Grove - Sensor de Gas(MQ2) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Gas_Sensor-MQ2
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>

El módulo Grove - Sensor de Gas(MQ2) es útil para la detección de fugas de gas (hogar e industria). Es adecuado para detectar H2, GLP, CH4, CO, Alcohol, Humo o Propano. Debido a su alta sensibilidad y tiempo de respuesta rápido, la medición se puede realizar lo antes posible. La sensibilidad del sensor se puede ajustar mediante potenciómetro.

<!-- |Sensor|Gas Type|Compra ahora|
|:---:|---|---|
|[MQ2](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ2/)|Combustible Gas, Smoke|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ3](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ3/)|Alcohol Vapor|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ5](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ5/)|LPG, Natural Gas, Town Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ9](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ9/)|Carbon Monoxide, Coal Gas, Liquefied Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Tipo de Gas</h4></td>
    <td><h4>Consigue Uno Ahora</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Gas Combustible, Humo</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>Vapor de Alcohol</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>GLP, Gas Natural, Gas de Ciudad</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>Monóxido de Carbono, Gas de Carbón, Gas Licuado</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Características

- Amplio alcance de detección
- Estable y larga vida útil
- Respuesta rápida y alta sensibilidad

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Elemento | Parámetro              | Mín | Típico     | Máx | Unidad |
|----------|------------------------|-----|------------|-----|--------|
| VCC      | Voltaje de Trabajo     | 4.9 | 5          | 5.1 | V      |
| PH       | Consumo de Calefacción | 0.5 | -          | 800 | mW     |
| RL       | Resistencia de Carga   |     | ajustable  |     |        |
| RH       | Resistencia del Calentador | - | 33         | -   | Ω      |
| Rs       | Resistencia de Detección | 3   | -          | 30  | kΩ     |

## Plataformas Compatibles

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de Aplicación

- Detección de fugas de gas.
- Juguetes
- Aplicaciones IoT
- Detecciones Inteligentes

## Primeros Pasos

El voltaje de salida del sensor de gas aumenta cuando la concentración de gas aumenta. La sensibilidad se puede ajustar girando el potenciómetro. Para información detallada sobre el sensor MQ-2, consulte la hoja de datos proporcionada en la sección **Recursos**.

:::warning
    Tenga en cuenta que el mejor tiempo de precalentamiento para el sensor es superior a 24 horas.
:::

### Jugar con arduino

#### Hardware

- **Paso 1.** Prepare los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-Gas Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Paso 2.** Conecta Grove-Gas_Sensor-MQ2 al puerto A0 del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!--connected with arduino-->
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>
Conecta el Grove - Gas Sensor(MQ2) al puerto A0 como se muestra en la imagen de arriba.

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Gas_Sensor-MQ2 al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-Gas_Sensor-MQ2 |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| A0            | Amarillo                  |

#### Software

hay algunos ejemplos. Por favor copia y pega el código de abajo en un nuevo sketch de Arduino, y súbelos respectivamente. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Ejemplo básico: Detección de Gas**

En este ejemplo, el sensor está conectado al pin A0. Se muestra el voltaje leído del sensor. Este valor puede usarse como umbral para detectar cualquier aumento/disminución en la concentración de gas.

```cpp
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

 **Medición : Aproximación**

Estos ejemplos demuestran formas de conocer la concentración aproximada de Gas. Según la hoja de datos de los sensores MQx, estas ecuaciones están probadas para condiciones estándar y no están calibradas. Puede variar según el cambio de temperatura o humedad.

:::note
    Por favor mantenga el Sensor de Gas en un ambiente de aire limpio.
:::

```c
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float R0;  // Get the value of R0 via in H2
    float sensorValue;

  // Get a average data by testing 100 times
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;


    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // omit * RL
    R0 = RS_air/9.8; // The ratio of RS/R0 is 9.8 in a clear air from Graph (Found using WebPlotDigitizer)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

Luego, abre el monitor serie del IDE de Arduino. Anota el valor de R0 y esto se usará en el siguiente programa. Por favor anota el R0 después de que la lectura se estabilice.

:::warning
    Reemplaza el R0 de abajo con el valor de R0 probado arriba.
:::
Expón el sensor a cualquiera de los gases listados arriba.

```c
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit * RL

          /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

Ahora, podemos obtener la concentración de gas de la figura a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png" alt="pir" width={600} height="auto" /></p>

Según el gráfico, podemos ver que la concentración mínima que podemos probar es 100ppm y la máxima es 10000ppm, en otras palabras, podemos obtener una concentración de gas entre 0.01% y 1%. Sin embargo, no podemos proporcionar una fórmula porque la relación entre la proporción y la concentración es no lineal.

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove-Gas Sensor MQ2 al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el Grove-Gas Sensor MQ2 a **cualquier Puerto Analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta los siguientes comandos para escribir el código.

```sh
cd grove.py/grove
nano grove_gas_sensor_mq2.py
```

Luego debes copiar el siguiente código en este archivo y presionar ++ctrl+x++ para salir y guardar.

```python
import math
import sys
import time
from grove.adc import ADC

class GroveGasSensorMQ2:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ2(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ2


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ2(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ2))
        time.sleep(.3)

if __name__ == '__main__':
    main()
```

- **Paso 4**. Ejecuta el siguiente comando para ejecutar el código

```sh
python grove_gas_sensor_mq2.py 0
```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```sh
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq2.py 0
Detecting...
Gas value: 760
Gas value: 714
Gas value: 675
Gas value: 637
Gas value: 603
Gas value: 568
Gas value: 535
Gas value: 506
Gas value: 481
Gas value: 464
Gas value: 449
Gas value: 429
Gas value: 413
Gas value: 456
Gas value: 470
Gas value: 440
Gas value: 404
Gas value: 373
Gas value: 352
Gas value: 339
Gas value: 330
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq2.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq2.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

:::note
        Puede que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Gas_Sensor-MQ2 al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.
<!--wrong link-->
<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **Paso 3.** Ejecuta los siguientes comandos para usar este sensor

```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

Aquí está el código de grove_gas_sensor.py:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the  Grove Gas Sensor
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

# NOTE:
# There are 5 gas sensors
# MQ2 - Combustible Gas, Smoke
# MQ3 - Alcohol Vapor
# MQ5 - LPG, Natural Gas, Town Gas
# MQ9 - Carbon Monoxide, Coal Gas, Liquefied Gas
# 02 - Oxygen
# The sensitivity can be adjusted by the onboard potentiometer
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# Connect the Grove Gas Sensor to analog port A0
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(gas_sensor)

        # Calculate gas density - large value means more dense gas
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Gas_Sensor-MQ2 al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.
<!--wrong link-->
<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **Paso 3.** Ejecuta los siguientes comandos para usar este sensor

```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

Aquí está el código de grove_gas_sensor.py:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the  Grove Gas Sensor
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''
# NOTE:
# There are 5 gas sensors
# MQ2 - Combustible Gas, Smoke
# MQ3 - Alcohol Vapor
# MQ5 - LPG, Natural Gas, Town Gas
# MQ9 - Carbon Monoxide, Coal Gas, Liquefied Gas
# 02 - Oxygen
# The sensitivity can be adjusted by the onboard potentiometer
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# Connect the Grove Gas Sensor to analog port A0
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(gas_sensor)

        # Calculate gas density - large value means more dense gas
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Wio Terminal | Grove - Sensor de Gas(MQ2) |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)|

- **Paso 2.** Conecta Grove - Gas Sensor(MQ2) al puerto Grove **A0** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy esté flasheado en Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-mq2.py`:

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq2 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("MQ2 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq2.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ2 Gas Sensor Reading is: ", mq2.read())

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-mq2.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-mq2.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
```

- **Paso 5.** Veremos la visualización del valor del gas en la terminal como se muestra a continuación, y se mostrará en la pantalla de la Wio Terminal LCD.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
MQ2 Gas Sensor Reading is:  60
MQ2 Gas Sensor Reading is:  61
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  63
MQ2 Gas Sensor Reading is:  66
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  64
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

<!-- -  **[Suggest Reading]** [How to choose a Gas Sensor](#/How_to_Chose_A_Gas_Sensor) -->
- **[Referencias]** [Qué es LEL](https://en.wikipedia.org/wiki/Flammability_limit)
- **[Esquema]** [Grove Sensor de Gas - Archivos EAGLE (Esquema y Placa)](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip)
- **[Esquema]** [Grove Sensor de Gas - Esquema PDF](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Schematic.pdf)
- **[Hoja de Datos]** [Hoja de Datos MQ-2](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/MQ-2.pdf)

## Proyectos

**Arduino y Sensor de Gas MQ2**: El módulo Grove Sensor de Gas (MQ2) es útil para la detección de fugas de gas (hogar e industria). Es adecuado para detectar H2, GLP, CH4 y CO.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karimmufte/arduino-and-mq2-gas-sensor-57f98c/embed' width='350'></iframe>

[**Nariz electrónica para detectar maduración de frutas**](https://hackaday.io/project/16809-electronic-nose-to-detect-fruit-ripening)

[**ED-E: Sistema de Automatización y Monitoreo del Hogar**](https://hackaday.io/project/8011-ed-e-home-automation-and-monitoring-system)

**Monitoreo y Respuesta Inteligente Escalable de Calidad del Aire** ¡Monitoreo de Calidad del Aire que utiliza el Módulo de Cómputo Intel Edison, Amazon AWS, Visualización a través de Kibana, y drones!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/iot-warriors/scalable-intelligent-air-quality-monitoring-and-response-b72732/embed' width='350'></iframe>

**Octopod: Proyecto Inteligente de Automatización del Hogar IoT** Octopod, un sistema completo de automatización del hogar de forma única que te permite monitorear tu hogar y mantener la seguridad con IA y cerraduras RFID inteligentes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sakshambhutani2001/octopod-smart-iot-home-automation-project-fa939b/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

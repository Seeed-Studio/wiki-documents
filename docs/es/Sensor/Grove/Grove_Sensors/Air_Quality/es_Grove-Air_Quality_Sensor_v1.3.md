---
description: Grove - Sensor de Calidad del Aire v1.3
title: Grove - Sensor de Calidad del Aire v1.3
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove-Air_Quality_Sensor_v1.3.webp
slug: /es/Grove-Air_Quality_Sensor_v1.3
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
---


---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" /></p>

Este sensor está diseñado para el monitoreo integral de las condiciones del aire interior. Es sensible a una amplia gama de gases nocivos, como monóxido de carbono, alcohol, acetona, diluyente, formaldehído y otros. Debido al mecanismo de medición, este sensor no puede generar datos específicos para describir cuantitativamente las concentraciones de gases objetivo. Pero aún es lo suficientemente competente para ser utilizado en aplicaciones que requieren solo resultados cualitativos, como rociadores refrescantes automáticos y sistemas de circulación de aire automáticos.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
|---------------------|---------|---------------------|
| Grove - Sensor de Calidad del Aire v1.3 | Inicial | Mayo 2016      |

## Características

- Responde a un amplio rango de gases objetivo
- Costo eficiente
- Duradero
- Compatible con 5V y 3.3V

:::caution
    1. Requiere aire relativamente limpio como condición inicial.
    2. La exposición prolongada a aire altamente contaminado puede debilitar significativamente su sensibilidad.
    3. Coffre-fort et armoire forte:
:::

## Plataformas Soportadas

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Demostración

Como se describe en la Introducción, este sensor funciona mejor proporcionando resultados cualitativos sobre un amplio rango de gases objetivo. En esta demostración, definiremos 4 estados para referencia en el archivo '.cpp'. Estos son:

- a. aire fresco -- indicando una buena condición del aire
- b. baja contaminación -- indicando que existe una concentración bastante baja de gases objetivo.
- c. alta contaminación(sin el mensaje "Force signal active" impreso en el monitor serie) -- deberías estar consciente del nivel de contaminación y considerar si se pueden tomar algunas medidas.
- d. alta contaminación(con el mensaje "Force signal active" impreso en el monitor serie) -- se deben tomar medidas inmediatas para mejorar la calidad del aire.

Encapsulamos la estructura de decisión en un archivo '.cpp'. Puedes encontrar información allí sobre cómo modificar los umbrales.

¡Vamos a probarlo!

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Seeeduino V4.2 | Base Shield | Grove - Air Quality Sensor |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Paso 2.** Conecta Grove - Air Quality Sensor al puerto **A0** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Air Quality Sensor al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Air Quality Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| A0            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la [Librería AirQuality_Sensor](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor).
- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Copia el código en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/*
    Grove_Air_Quality_Sensor.ino
    Demo for Grove - Air Quality Sensor.

    Copyright (c) 2019 seeed technology inc.
    Author    : Lets Blu
    Created Time : Jan 2019
    Modified Time:

    The MIT License (MIT)

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
*/
#include "Air_Quality_Sensor.h"

AirQualitySensor sensor(A0);

void setup(void) {
    Serial.begin(9600);
    while (!Serial);

    Serial.println("Waiting sensor to init...");
    delay(20000);

    if (sensor.init()) {
        Serial.println("Sensor ready.");
    } else {
        Serial.println("Sensor ERROR!");
    }
}

void loop(void) {
    int quality = sensor.slope();

    Serial.print("Sensor value: ");
    Serial.println(sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("High pollution! Force signal active.");
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("High pollution!");
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("Low pollution!");
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("Fresh air.");
    }

    delay(1000);
}
```

- **Paso 4.** Veremos la distancia mostrada en la terminal como se muestra a continuación.

```
Waiting sensor to init...
Sensor ready.
Sensor value: 48
Fresh air.
Sensor value: 51
Fresh air.
Sensor value: 49
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
```

Para ajustar los umbrales y mensajes indicativos, consulte la estructura de decisión a continuación en el archivo .cpp.

```c
int AirQualitySensor::slope(void) {
    _lastVoltage = _currentVoltage;
    _currentVoltage = analogRead(_pin);

    _voltageSum += _currentVoltage;
    _volSumCount += 1;

    updateStandardVoltage();
    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {
        return AirQualitySensor::FORCE_SIGNAL;
    }
    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 150) {
        return AirQualitySensor::HIGH_POLLUTION;
    }
    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 50) {
        return AirQualitySensor::LOW_POLLUTION;
    }
    else {
        return AirQualitySensor::FRESH_AIR;
    }

    return -1;
}
```

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Air Quality Sensor al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás la calidad del aire en el Monitor Serie.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry Pi | Grove Base Hat para RasPi | Grove - Air Quality Sensor |
|--------------|--------------------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove - Air Quality Sensor al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

#### Software

:::caution
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el código.

```
cd grove.py/grove
python3 grove_air_quality_sensor_v1_3.py 0
```

A continuación se muestra el código grove_air_quality_sensor_v1_3.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveAirQualitySensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveAirQualitySensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveAirQualitySensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if value > 100:
            print("{}, High Pollution.".format(value))
        else:
            print("{}, Air Quality OK.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()

```

:::tip
    Si todo va bien, podrás ver el siguiente resultado:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 
Detecting ...
138, High Pollution.
139, High Pollution.
140, High Pollution.
141, High Pollution.
139, High Pollution.
140, High Pollution.
140, High Pollution.
140, High Pollution.
139, High Pollution.
138, High Pollution.
139, High Pollution.
138, High Pollution.
138, High Pollution.
^CTraceback (most recent call last):
  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>
    main()
  File "grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

Puedes usar este sensor para detectar la calidad del aire. Presiona ++ctrl+c++ para salir.

:::note
        Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario, puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi(con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry Pi | GrovePi_Plus | Grove - Sensor de Calidad del Aire |
|--------------|--------------|-----------------------------|
|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta Grove-MOSFET ranger al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

#### Software

- **Paso 1.** Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 2.** Para ver el código

```
nano grove_air_quality_sensor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Air Quality Sensor to analog port A0
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "High pollution"
        elif sensor_value > 300:
            print "Low pollution"
        else:
            print "Air fresh"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 3.** Ejecuta la demostración.

```
sudo python grove_air_quality_sensor.py
```

- **Paso 4.** Veremos la salida mostrada en la terminal como se muestra a continuación.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png" alt="pir" width={600} height="auto" /></p>

### Jugar con ESP-IDF

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base para XIAO</th>
    <th>Grove Sensor de Calidad del Aire v1.3</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- **Paso 2.** Conecta el Sensor de Calidad del Aire Grove a tu placa ESP32:
  - Conecta el VCC del sensor a 3.3V
  - Conecta el GND del sensor a GND
  - Conecta el SIG del sensor a un pin GPIO compatible con ADC (por ejemplo, GPIO34)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/ESP32_Grove_AirQuality.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Instala ESP-IDF siguiendo la [guía oficial](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)

- **Paso 2.** Clona el componente del Sensor de Calidad del Aire Analógico Grove:

```bash
cd your_project/components
git clone https://github.com/Priyanshu0901/grove_analog_aqs.git
```

- **Paso 3.** Configura el componente usando menuconfig:

```bash
idf.py menuconfig
```

Navega a "Component config → Grove Analog Air Quality Sensor" para configurar:

- Número de unidad ADC (0 para ADC1, 1 para ADC2)
- Canal ADC (que coincida con tu conexión GPIO)
- Atenuación ADC (por defecto: ADC_ATTEN_DB_12 para 3.3V)
- Umbrales de calidad del aire
- Opciones de gestión de energía (opcional)

- **Paso 4.** Crea un nuevo proyecto y usa el componente:

```c
#include "grove_analog_aqs.h"

void app_main(void)
{
    // Initialize with default configuration
    grove_aqs_config_t config = GROVE_AQS_DEFAULT_CONFIG();
    esp_err_t ret = grove_aqs_init(&config);
    if (ret != ESP_OK) {
        ESP_LOGE(TAG, "Sensor initialization failed: %d", ret);
        return;
    }
    
    // Read sensor data
    grove_aqs_data_t data;
    ret = grove_aqs_read_data(&data);
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "Raw ADC value: %d", data.raw_value);
        ESP_LOGI(TAG, "Voltage: %d mV", data.voltage_mv);
        ESP_LOGI(TAG, "Air quality: %s", grove_aqs_quality_to_string(data.quality));
    }
    
    // Cleanup when done
    grove_aqs_deinit();
}
```

- **Paso 5.** Compila y flashea el proyecto:

```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

:::note
    Reemplaza /dev/ttyUSB0 con el puerto serie de tu ESP32.
:::

#### Salida Esperada

```
I (242) sleep_gpio: Enable automatic switching of GPIO sleep configuration
I (249) main_task: Started on CPU0
I (249) main_task: Calling app_main()
I (249) grove_aqs_example: Initializing Grove Analog Air Quality Sensor
I (259) grove_aqs_example: Using ADC Unit: 0, ADC Channel: 2
I (259) grove_aqs: Initializing with ADC Unit: 0, ADC Channel: 2
I (269) grove_aqs: ADC calibration enabled
I (269) grove_aqs: Grove Analog Air Quality Sensor initialized successfully
I (279) grove_aqs_example: Waiting for sensor to stabilize...
I (3279) grove_aqs: Air quality reading: Raw=300, Voltage=218mV, Quality=Fresh
I (3279) grove_aqs_example: Reading #1:
I (3279) grove_aqs_example:   Raw ADC value: 300
I (3279) grove_aqs_example:   Voltage: 218 mV
I (3279) grove_aqs_example:   Air quality: Fresh
I (3289) grove_aqs_example:   Advice: Air is fresh and clean!
I (4289) grove_aqs: Air quality reading: Raw=298, Voltage=216mV, Quality=Fresh
I (4289) grove_aqs_example: Reading #2:
I (4289) grove_aqs_example:   Raw ADC value: 298
I (4289) grove_aqs_example:   Voltage: 216 mV
I (4289) grove_aqs_example:   Air quality: Fresh
I (4299) grove_aqs_example:   Advice: Air is fresh and clean!
I (5299) grove_aqs: Air quality reading: Raw=286, Voltage=208mV, Quality=Fresh
I (5299) grove_aqs_example: Reading #3:
I (5299) grove_aqs_example:   Raw ADC value: 286
I (5299) grove_aqs_example:   Voltage: 208 mV
I (5299) grove_aqs_example:   Air quality: Fresh
I (5309) grove_aqs_example:   Advice: Air is fresh and clean!
I (6309) grove_aqs: Air quality reading: Raw=283, Voltage=206mV, Quality=Fresh
```

:::tip
    El componente proporciona las siguientes características:
    - Calibración automática del ADC
    - Umbrales de calidad del aire configurables
    - Control de alimentación GPIO opcional
    - Manejo de errores y registro
    - Soporte para ADC1 y ADC2
:::

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Librería]** [Librería del Sensor de Calidad del Aire](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- **[Eagle]** [Grove_-_Air_quality_sensor_v1.3_sch_pcb](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- **[PDF]** [Grove_-_Air_quality_sensor_v1.3_sch](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- **[PDF]** [Air_quality_sensor_MP503_Chinese](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- **[PDF]** [Air_quality sensor_MP503_English](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip)
- **[ESP-IDF]** [Componente del Sensor de Calidad del Aire Analógico Grove](https://github.com/Priyanshu0901/grove_analog_aqs.git) - Componente ESP-IDF para el Sensor de Calidad del Aire Grove
- **[ESP-IDF]** [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) - Guía oficial de programación ESP-IDF

## Proyectos

**SPCPM (Monitor de Contaminación Urbana Alimentado por Energía Solar)**: Monitor de contaminación del aire y sonora de bajo mantenimiento y alta eficiencia que se despliega por toda la ciudad sin cableado.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed' width='350'></iframe>

**Un sitio web para ver los datos ambientales a tu alrededor**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>

<!-- **Centro de Control del Hogar usando BeagleBone Green Wireless**:

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed" width={350} /> -->

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

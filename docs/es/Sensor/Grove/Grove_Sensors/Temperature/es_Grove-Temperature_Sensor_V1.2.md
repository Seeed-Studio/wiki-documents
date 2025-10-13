---
description: Grove - Sensor de Temperatura V1.2
title: Grove - Sensor de Temperatura V1.2
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Temperature_Sensor_V1.2
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View.jpg" /></div>

El Grove - Sensor de Temperatura utiliza un [Termistor](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) para detectar la temperatura ambiente. La resistencia de un termistor aumentará cuando la temperatura ambiente disminuya. Es esta característica la que utilizamos para calcular la temperatura ambiente. El rango detectable de este sensor es -40 - 125ºC, y la precisión es ±1.5ºC

Nota: Esta wiki funciona también con el sensor de temperatura Grove V1.1, para V1.0 por favor consulte [Grove - Sensor de Temperatura](https://wiki.seeedstudio.com/es/Grove-Temperature_Sensor)

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor consulte el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Pruebe la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para su próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp. y Humedad del Aire</strong></a></td>
    </tr>
  </tbody>
</table>

## Especificaciones

---

- Voltaje: 3.3 ~ 5V
- Resistencia de potencia cero: 100 KΩ
- Tolerancia de resistencia: ±1%
- Rango de temperatura de funcionamiento: -40 ~ +125 ℃
- Constante B nominal： 4250 ~ 4299K

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

-------------------

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

---
Después de esta sección, puedes hacer funcionar el Grove - Sensor de Temperatura V1.1/1.2 con solo unos pocos pasos.

:::note
Si esta es la primera vez que trabajas with Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Sensor de Temperatura |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Paso 2.** Conecta Grove - Temperature Sensor al puerto **A0** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_Arduino.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove_Ultrasonic_Ranger al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Temperature Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| A0            | Amarillo                  |

#### Software

- **Paso 1.** Inicia Arduino IDE y haz clic en **File>New** para abrir una nueva página. Copia el siguiente código en la nueva página y súbelo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
// Demo code for Grove - Temperature Sensor V1.1/1.2
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275000;            // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0

#if defined(ARDUINO_ARCH_AVR)
#define debug  Serial
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
#define debug  SerialUSB
#else
#define debug  Serial
#endif

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

**Paso 2.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la temperatura.

El resultado debería ser así:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_result.jpg" /></div>

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Temperatura |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el sensor de temperatura al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Temperature_Hat.jpg" /></div>

:::note
Para el paso 3 puedes conectar el sensor de temperatura a **cualquier Puerto analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```sh
cd grove.py/grove
python3 grove_temperature_sensor.py 0
```

A continuación se muestra el código de grove_temperature_sensor.py.

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

:::tip
    Si todo va bien, podrás ver el siguiente resultado
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_temperature_sensor.py 0
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

Puedes salir de este programa simplemente presionando ++ctrl+c++.

:::note
Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Sensor de Temperatura |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta Grove - Temperature Sensor ranger al puerto **A0** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC mediante cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_pi.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **Paso 4.** Ejecuta los siguientes comandos para usar el Grove - Temperature Sensor para medir la temperatura.

```sh
cd ~/GrovePi/Software/Python
sudo python3 grove_temperature_sensor.py
```

Aquí está el código de grove_temperature_sensor.py.

```python
# NOTE:
#  The sensor uses a thermistor to detect ambient temperature.
#  The resistance of a thermistor will increase when the ambient temperature decreases.
#
#  There are 3 revisions 1.0, 1.1 and 1.2, each using a different model thermistor.
#  Each thermistor datasheet specifies a unique Nominal B-Constant which is used in the calculation forumla.
#
#  The second argument in the grovepi.temp() method defines which board version you have connected.
#  Defaults to '1.0'. eg.
#   temp = grovepi.temp(sensor)        # B value = 3975
#   temp = grovepi.temp(sensor,'1.1')  # B value = 4250
#   temp = grovepi.temp(sensor,'1.2')  # B value = 4250

import time
import grovepi

# Connect the Grove Temperature Sensor to analog port A0
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

El resultado debería ser como:

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_temperature_sensor.py

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

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Wio Terminal | Grove - Sensor de Temperatura |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.htmll)|

- **Paso 2.** Conecta Grove - Temperature Sensor al puerto **A0** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/WT-temp.png" /></div>

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy esté flasheado en el Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-temp.py`:

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time, math

raw = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff
B = 4275 # B value of the thermistor
R0 = 100000 # R0 = 100k

def temp(reading):
    R = 1023.0 / reading - 1.0
    R = R0*R 
    temperature = 1.0/(math.log(R/R0)/B+1/298.15)-273.15 # Convert to temperature via datasheet
    return temperature

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("Temperature Reading", 45, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- ", 20, 50)
        spr.drawFloat(temp(raw.read()), 3, 40,50)
        spr.drawString("C", 120, 50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("Temperature: ", temp(raw.read()), "C")

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-temp.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-temp.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
```

- **Paso 5.** Veremos el valor de temperatura mostrado en la terminal como se muestra a continuación, y mostrándose en la pantalla LCD del Wio Terminal.

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
Positional argument (/dev/cu.usbmodem141101) takes precedence over --open.
Connected to ardupy
Temperature:  28.08603 C
Temperature:  28.50415 C
Temperature:  28.16953 C
Temperature:  28.25308 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.33671 C
Temperature:  28.16953 C
Temperature:  28.25308 C
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Ardupy-temp.png" /></div>

## Referencia

---
Si quieres saber cómo funciona el algoritmo de temperatura, por favor consulta la imagen de abajo:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg" /></div>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- **[Zip]** [Grove - Temperature Sensor v1.1 Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip)
- **[PDF]** [Grove - Temperature Sensor v1.1.PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.pdf)
- **[PDF]** [Hoja de datos del Sensor de Temperatura](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)

## Proyectos

**Módulo sensor de temperatura Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wjL7xOGqAqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9pkmiK8EM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

---
description: Grove - Sensor de Agua
title: Grove - Sensor de Agua
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Water_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png" alt="pir" width={600} height="auto" /></p>

El módulo Sensor de Agua es parte del sistema Grove. Indica si el sensor está seco, húmedo o completamente sumergido en agua midiendo la conductividad. Las pistas del sensor tienen una resistencia de pull-up débil de 1 MΩ. La resistencia mantendrá el valor de la pista del sensor en alto hasta que una gota de agua cortocircuite la pista del sensor con la pista conectada a tierra. Aunque no lo creas, este circuito funcionará con los pines de E/S digitales de tu Arduino o puedes usarlo con los pines analógicos para detectar la cantidad de contacto inducido por agua entre las pistas conectadas a tierra y del sensor.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

## Versión

| Versión del Producto         | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Sensor de Agua V1.1   | Inicial                                                                                                                                                                                    | Julio 2014      |

## Características

- Interfaz compatible con Grove
- Bajo consumo de energía
- Módulo Grove de 2.0cm x 2.0cm
- Alta sensibilidad

## Ideas de Aplicaciones

- Detección de lluvia
- Fuga de líquidos
- Detector de desbordamiento de tanque

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Trabajo
</th>
<td>
4.75
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
Corriente
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Trabajo
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Humedad de Trabajo (sin condensación)
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas Primeros Pasos con Arduino antes de comenzar.
:::

### Jugar Con Arduino

#### Hardware

Conecta el módulo a la placa Basic usando cualquiera de los pines digitales. Puedes obtener el valor del pin de señal. Cuando hay agua en los cables conductores desnudos, el valor es LOW. De lo contrario, será HIGH.

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **Paso 2.** Conecta el Sensor de Agua al puerto D2 del Grove-Base Shield.
- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove_Water_Sensor al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Sensor de Agua |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```

- **Paso 2.** Veremos la salida mostrada en la terminal como se muestra a continuación.

```c
1
1
0
0
1
1
```

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Water Sensor al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás si hay agua o no en el Monitor Serie.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|

|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove - Water Sensor al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el código.

```
cd grove.py/grove
python grove_water_sensor.py 0
```

A continuación se muestra el código grove_water_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()


```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (most recent call last):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value        
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt


```

Puedes usar este sensor para detectar el agua. Presiona ++ctrl+c++ para salir.

:::note
        Puede que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi(con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Sensor de Agua |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Water Sensor al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 3.** Para ver el código

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Connect the Grove Water Sensor to digital port D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 4.** Ejecute la demostración.

```
sudo python grove_water_sensor.py
```

- **Paso 5.** Veremos la salida mostrada en la terminal como se muestra a continuación.

```
1
1
0
0
1
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático del Sensor de Agua Grove](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip)
- **[Librería]** [Código de demostración para el Sensor de Agua Grove](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip)

<!-- Este archivo Markdown fue creado desde https://wiki.seeedstudio.com/es/Grove-Water_Sensor/ -->

## Proyecto

**Cultivos Inteligentes: ¡Implementando IoT en la Agricultura Convencional!**: Nuestra misión con la naturaleza es preservarla, diseñando e implementando tecnologías y métodos de monitoreo con la ayuda de IoT a través de Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

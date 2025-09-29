---
description: Grove - Sensor de Barómetro
title: Grove - Sensor de Barómetro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Barometer_Sensor
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg" alt="pir" width={600} height="auto" /></p>


Este Grove - Sensor de Barómetro cuenta con un chip Bosch BMP085 de alta precisión para detectar presión barométrica y temperatura. Puede medir ampliamente presión que va desde 300hPa hasta 1100hPa, es decir, +9000m a -500m sobre el nivel del mar, con una súper alta precisión de 0.03hPa(0.25m) en modo de ultra alta resolución. El chip solo acepta voltaje de entrada de 1.8V a 3.6V. Sin embargo, con circuito externo añadido, este módulo se vuelve compatible con 3.3V y 5V. Por lo tanto, puede ser usado en Arduino/Seeeduino o Seeeduino Stalker sin modificación. Está diseñado para ser conectado directamente a un microcontrolador a través del bus I2C.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html)

Características
--------

-   Interfaz digital de dos cables (I2C)
-   Amplio rango de presión barométrica
-   Rango de voltaje de alimentación flexible
-   Consumo de energía ultra bajo
-   Medición de bajo ruido
-   Completamente calibrado
-   Medición de temperatura incluida

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de Aplicación
-----------------

-   Mejora de navegación GPS
-   Navegación interior y exterior
-   Ocio y deportes
-   Pronóstico del tiempo
-   Indicación de velocidad vertical (velocidad de ascenso/descenso)

Especificaciones
--------------

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
Voltaje
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td>
89
</td>
<td>
/
</td>
<td>
130
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Presión
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
Transferencia de datos I2C más rápida
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensión
</th>
<td colspan="3">
20.4*24.3*9.7
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
Peso
</th>
<td colspan="3">
2
</td>
<td>
g
</td>
</tr>
</table>

Uso
---

### Con Arduino

La condición barométrica es uno de los criterios utilizados para predecir cambios próximos en el clima y deducir la altitud sobre el nivel del mar. Aquí hay una demostración para mostrarte cómo leer los datos barométricos de este Grove - Sensor Barómetro.

1.Conéctalo al puerto IIC de Seeeduino o Grove - Base Shield a través de un cable Grove. Y conecta Arduino a la PC a través de un cable USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG" alt="pir" width={600} height="auto" /></p>


2.Descarga la biblioteca [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip);Descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\\arduino-1.0.1\\libraries.

3.Crea un nuevo sketch de Arduino y pega los códigos de abajo en él o abre el código directamente por la ruta:File -> Example ->Barometer_Sensor->Barometer_Sensor.

```
/* Barometer demo V1.0
*  Based largely on code by  Jim Lindblom
*  Get pressure, altitude, and temperature from the BMP085.
*  Serial.print it out at 9600 baud to serial monitor.
*
*  By:https://www.seeedstudio.com
*/
#include "Barometer.h"
#include <Wire.h>

float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;

void setup(){
    Serial.begin(9600);
    myBarometer.init();
}

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
    altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //display 2 decimal places
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //whole number only.
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //display 4 decimal places

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //display 2 decimal places
    Serial.println(" m");

    Serial.println();

    delay(1000); //wait a second and get values again.
}
```

4.Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica, presión atmosférica relativa y altitud.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


Lo siguiente es un gráfico de referencia que traza la relación entre la altitud sobre el nivel del mar y la presión barométrica.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


### Con Raspberry Pi

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus/).

3.Conexión

-   Conecta el sensor barómetro en los conectores i2c del grovepi.

4.Navega al directorio de las demos:
```
cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/
```

-   Para ver el código

```
nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" to exit #
```

```
#!/usr/bin/python

import smbus
import RPi.GPIO as GPIO
#import grovepi from grove_i2c_barometic_sensor import BMP085

# ===========================================================================
# Example Code
# ===========================================================================

# Initialise the BMP085 and use STANDARD mode (default value)
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# To specify a different operating mode, uncomment one of the following:
# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode
# bmp = BMP085(0x77, 1)  # STANDARD Mode
# bmp = BMP085(0x77, 2)  # HIRES Mode
# bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = smbus.SMBus(1)
else:
    bus = smbus.SMBus(0)

temp = bmp.readTemperature()

# Read the current barometric pressure level
pressure = bmp.readPressure()

# To calculate altitude based on an estimated mean sea level pressure
# (1013.25 hPa) call the function as follows, but this won't be very accurate
# altitude = bmp.readAltitude()

# To specify a more accurate altitude, enter the correct mean sea level
# pressure level.  For example, if the current pressure level is 1023.50 hPa
# enter 102350 since we include two decimal places in the integer value
altitude = bmp.readAltitude(101560)

print "Temperature: %.2f C" % temp
print "Pressure:    %.2f hPa" % (pressure / 100.0)
print "Altitude:    %.2f m" % altitude
```

5.Ejecuta la demostración.
```
sudo python grove_i2c_barometic_sensor_example.py
```

6.Resultado

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

-   [Grove - Archivo Eagle del Sensor Barómetro](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip)
-   [Librería del Sensor Barómetro](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)
-   [Repositorio Github para la Librería del Sensor Barómetro](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor -->

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

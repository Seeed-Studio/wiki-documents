---
description: Grove - Sensor Barómetro (BMP180)
title: Grove - Sensor Barómetro (BMP180)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Barometer_Sensor-BMP180
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg" alt="pir" width={600} height="auto" /></p>


Este es un módulo Grove para el barómetro digital Bosch BMP180 de alta precisión y bajo consumo. El BMP180 ofrece un rango de medición de presión de 300 a 1100 hPa con una precisión de hasta 0.02 hPa en modo de resolución avanzada. Está basado en tecnología piezo-resistiva para alta precisión, robustez y estabilidad a largo plazo. El chip solo acepta voltaje de entrada de 1.8V a 3.6V. Sin embargo, con circuito externo añadido, este módulo se vuelve compatible con 3.3V y 5V. Por lo tanto, puede ser usado en Arduino/Seeeduino o Seeeduino Stalker sin modificación. Está diseñado para conectarse directamente a un microcontrolador a través del bus I2C.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)

## Características

-   Interfaz digital de dos cables (I2C)
-   Amplio rango de presión barométrica
-   Rango de voltaje de alimentación flexible
-   Consumo de energía ultra-bajo
-   Medición de bajo ruido
-   Calibrado de fábrica
-   Rango operativo de -40 a +85°C, precisión de temperatura ±2°C
-   Dirección I2C: 0x77

:::note
    Si quieres usar múltiples dispositivos I2C, por favor consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Ideas de Aplicación


-   Mejora de navegación GPS
-   Navegación interior y exterior
-   Ocio y deportes
-   Pronóstico del tiempo
-   Indicación de velocidad vertical (velocidad de ascenso/descenso)

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
1.1
</td>
<td>
/
</td>
<td>
20
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
40.1*20.2*9.7
</td>
<td>
mm
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::


## Primeros pasos


### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP180 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **Paso 2.** Conecta Grove-Barometer_Sensor-BMP180 al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    	Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP180  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Paso 1.** Descarga [la biblioteca](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.


**Paso 3.** Crea un nuevo sketch de Arduino y pega los códigos de abajo o abre el código directamente por la ruta: File -> Example ->Barometer_Sensor->Barometer_Sensor.


Aquí está el código

```cpp
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

 **Paso 4.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica, presión atmosférica relativa y altitud.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


### Jugar con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:


| Raspberry pi | GrovePi_Plus | Grove-Barometer_Sensor-BMP180 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Barometer_Sensor-BMP180 al puerto **I2C** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>


#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.


```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

-	**Paso 3.** Ejecuta los siguientes comandos para usar este sensor

```bash
cd ~/GrovePi/Software/Python/grove_barometer_sensors/barometric_sensor_bmp180
python grove_i2c_barometic_sensor_example.py
```

```python
#!/usr/bin/python
import time
import smbus
import RPi.GPIO as GPIO
#import grovepi
from grove_i2c_barometic_sensor_BMP180 import BMP085

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

while True :
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

  print("Temperature: %.2f C" % temp)
  print("Pressure:    %.2f hPa" % (pressure / 100.0))
  print("Altitude:    %.2f m" % altitude)
  time.sleep(.1)

```


-	**Paso 4.** Aquí está el resultado:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos


- **[Eagle]**  [Grove - Sensor Barómetro(BMP180) Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip)
- **[Librería]**  [Librería Barometer_Sensor](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- **[Hoja de Datos]**  [Hoja de datos BMP180](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf)
- **[Altitud Vs. Presión]** Lo siguiente es un gráfico de referencia que muestra la relación entre la altitud sobre el nivel del mar y la presión barométrica.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


## Proyectos

**Estación Meteorológica y de Seguridad con Blynk**: ¡Monitorea el clima y la seguridad remotamente con Blynk y el CC32000 LaunchPad!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/rei-vilo/weather-and-security-station-with-blynk-74608b/embed' width='350'></iframe>

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
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>



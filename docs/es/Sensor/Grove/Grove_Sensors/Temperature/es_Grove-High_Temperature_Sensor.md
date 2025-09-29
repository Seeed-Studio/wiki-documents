---
description: Grove - Sensor de Alta Temperatura
title: Grove - Sensor de Alta Temperatura
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-High_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_01.jpg" /></div>

Los termopares son dispositivos muy sensibles. Requieren un buen amplificador con compensación de unión fría. El Grove - Sensor de Alta Temperatura utiliza un termopar tipo K y un amplificador de termopar que mide la temperatura ambiente usando un termistor para la compensación de unión fría. El rango detectable de este sensor es -50~600°C, y la precisión es ±(2.0% + 2°C).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 Temp. y Humedad del Aire</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versión

| Versión del Producto                      | Cambios | Fecha de Lanzamiento |
|-------------------------------------------|---------|----------------------|
| Grove - Sensor de Alta Temperatura V1.0 | Inicial | 25 Feb 2014  |

## Especificaciones

| Parámetro                                     | Valor/Rango                         |
|-----------------------------------------------|-------------------------------------|
| Voltaje de Operación                          | 3.3-5V                              |
| Potencia máxima nominal a 25℃                 | 300mW                               |
| Rango de temperatura de operación            | -40 ~ +125 ℃                        |
| Rango de medición de temperatura              | -50 ~ +600 ℃                        |
| Rango de voltaje de salida del amplificador  | 0 ~ 3.3 V                           |
| Material del termopar                         | Fibra de Vidrio                     |
| Compensación de unión fría                    | Medición de temperatura ambiente    |
| Precisión de medición de temperatura del termopar | +/-2.0% (+ 2 ℃)                     |
| Longitud del cable del sensor de temperatura termopar  | 100cm                               |
| Dimensión                                     | 20mm x 40mm                         |

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

#### Hardware

- Paso 1. Necesitamos preparar las siguientes cosas:

| Seeeduino V4.2 | Base Shield |  Grove-High Temperature Sensor|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Paso 2. Conecta el Sensor de Alta Temperatura Grove al puerto **A0** en el Base Shield.
- Paso 3. Conecta el Base Shield al Seeeduino-V4.2.
- Paso 4. Conecta el Seeeduino-V4.2 a la PC usando un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/arduino_connection.jpg" /></div>

:::note
    Si no tenemos un Base Shield, no te preocupes, el sensor puede conectarse directamente a tu Arduino. Por favor sigue las tablas de abajo para conectar con Arduino.
:::

| Seeeduino |Sensor de Alta Temperatura Grove |
|------------------|------- --|
| GND              | Negro  |
| 5V               |  Rojo   |
| A1               | Blanco  |
| A0               | Amarillo |

#### Software

- Paso 1. Descarga la [Librería del Sensor de Alta Temperatura Grove](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip) desde Github.
- Paso 2. Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- Paso 3. Copia el código en el IDE de Arduino y súbelo.

```cpp
#include "High_Temp.h"

HighTemp ht(A1, A0);

void setup()
{
    Serial.begin(115200);
    Serial.println("grove - hight temperature sensor test demo");
    ht.begin();
}

void loop()
{
    Serial.println(ht.getThmc());
    delay(100);
}
```

- Paso 4. Abre tu Monitor Serie y establece la velocidad de baudios en 115200, Veremos la temperatura en Celsius aquí.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/Htsdata.jpg" /></div>

### Jugar Con Raspberry Pi

#### Hardware

- Paso 1. Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue UNO Ahora](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Paso 2. Conecta el GrovePi_Plus al Raspberry.
- Paso 3. Conecta el sensor ultrasónico Grove al puerto **A0** del GrovePi_Plus.
- Paso 4. Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/raspberry_connection.jpg" /></div>

#### Software

- Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- Paso 2. Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- Paso 3. Clona el repositorio de Github con Git.

```txt
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Paso 4. Ejecuta los siguientes comandos para usar el ultrasonic_ranger para medir la distancia.

```txt
cd ~/GrovePi/Software/Python/grove_hightemperature_sensor
python3 high_temperature_example.py
```

Aquí está el código de grove_ultrasonic.py.

```python

import grove_hightemperature_sensor as grovepi # our library
from time import sleep # and for the sleep function
import sys # we need this for the exception throwing stuff

# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!

def Main():
    room_temperature_pin = 15 # this is equal to A1
    probe_temperature_pin = 14 # this is equal to A0
    # so you have to connect the sensor to A0 port

    # instatiate a HighTemperatureSensor object
    sensor = grovepi.HighTemperatureSensor(room_temperature_pin, probe_temperature_pin)

    # and do this indefinitely
    while True:
        # read the room temperature
        room_temperature = sensor.getRoomTemperature()
        # and also what's important to us: the temperature at the tip of the K-Type sensor
        probe_temperature = sensor.getProbeTemperature()

        # print it in a fashionable way
        print('[room temperature: {:5.2f}°C][probe temperature: {:5.2f}°C]'.format(room_temperature, probe_temperature))
        # and wait for 250 ms before taking another measurement - so we don't overflow the terminal
        sleep(0.25)


if __name__ == "__main__":
    try:
        Main()

    # in case CTRL-C / CTRL-D keys are pressed (or anything else that might interrupt)
    except KeyboardInterrupt:
        print('[Keyboard interrupted]')
        sys.exit(0)

    # in case there's an IO error aka I2C
    except IOError:
        print('[IO Error]')
        sys.exit(0)

    # in case we have a math error (like division by 0 - can happen depending on the read values)
    # or if the values exceed a certain threshold
    # experiment and you'll see
    except ValueError as e:
        print('[{}]'.format(str(e)))
        sys.exit(0)
```

- Paso 4. Veremos la visualización de temperatura en la terminal como se muestra a continuación.

```txt
pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python3 high_temperature_example.py
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
```

## Preguntas Frecuentes

**P1: ¿Cómo realizar la calibración del sensor de alta temperatura Grove?**

**R1:** Por favor descarga la [librería](https://files.seeedstudio.com/wiki/Grove_High_Temperature_Sensor/resource/Grove_HighTemp_Sensor-master_cal.zip) y luego sigue las siguientes instrucciones.

- Paso 1. ejecuta el getTemperature-calibration-measurement.ino para obtener la información siguiente.

```txt
10:02:17.792 -> "You have Scucessfully record the sample data,please copy the following line of code to your clipboard and replace the first line of function loop()
10:02:17.935 ->       double TMP[]={10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29};
10:02:18.038 ->       double Real_temperature[]={10.00,20.00,30.00,40.00,50.00,60.00,70.00,80.00,90.00,100.00};
```

- Paso 2. pegar en getTemperature-calibration_demo.ino y ejecutar la calibración.

- Paso 3. ejecutar getTemperature.ino para leer la temperatura.

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-High_Temperature_Sensor.pdf)
- **[Eagle]** [Grove - Archivo Eagle del Sensor de Alta Temperatura](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip)
- **[Librería]** [Librería del Sensor de Alta Temperatura](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor)
- **[Hoja de datos]** [OPA333 PDF](http://www.ti.com/lit/ds/symlink/opa333.pdf)
- **[Hoja de datos]** [LMV358 PDF](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Lmv358.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_High_Temperature_Sensor -->

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

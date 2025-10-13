---
description: Grove - Sensor de Luz
title: Grove - Sensor de Luz
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Light_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg" /></div>

El Grove - Sensor de luz integra una foto-resistencia (resistor dependiente de la luz) para detectar la intensidad de la luz. La resistencia de la foto-resistencia disminuye cuando la intensidad de la luz aumenta. Un chip dual OpAmp LM358 a bordo produce voltaje correspondiente a la intensidad de la luz (es decir, basado en el valor de resistencia). La señal de salida es un valor analógico, mientras más brillante sea la luz, mayor será el valor.

Este módulo puede usarse para construir un interruptor controlado por luz, es decir, apagar las luces durante el día y encender las luces durante la noche.

:::caution
El valor del sensor de luz solo refleja la tendencia aproximada de la intensidad de la luz, NO representa el Lumen exacto.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor consulta el Sensor de Intensidad de Luz Inalámbrico S2102 con mayor rendimiento y robustez para la detección de intensidad de luz. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a>
      </td>
    </tr>
  </tbody>
</table>

## Versión

| Versión del Producto         | Cambios                                                            | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------|----------------------|
| Grove - Light Sensor 1.0     | Inicial                                                            | 28 Abr 2013          |
| Grove - Light Sensor(P)      | Mover conector Grove al lado posterior                             | 15 May 2014          |
| Grove - Light Sensor(P) V1.1 | Reemplazar fotorresistor-5528 con LS06-S Vs.Grove - Light Sensor(P)  | 31 Dic 2015          |
| Grove - Light Sensor 1.2     | Reemplazar fotorresistor-5528 con LS06-S Vs.Grove - Light Sensor 1.0 | 20 Ene 2016          |

## Características

* Salida de valor analógico
* Alta confiabilidad y sensibilidad
* Huella pequeña

* Reconoce un espectro más amplio

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

### Soporte de Plataforma

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Especificación

|Elemento|Valor|
|-----|--------|
|Voltaje de operación|3~5V|
|Corriente de operación| 0.5~3 mA|
|Tiempo de respuesta|20-30 milisegundos|
|Longitud de onda pico|540 nm|
|Peso|4 g|

## Comenzando

### Jugar con Arduino

#### Hardware

* Paso 1. Prepara los siguientes elementos:

| Seeeduino V4 | Base Shield |Grove - Sensor de Luz | Grove - Barra LED |
|--------------|----------------------|-----------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html)|

* Paso 2. Conecta el Sensor de Luz Grove al puerto A0 del Shield Base Grove.
* Paso 3. Conecta la Barra LED Grove al puerto D2 del Shield Base Grove.
* Paso 4. Conecta el Shield Base Grove al Seeeduino.
* Paso 5. Conecta el Seeeduino a la PC a través de un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/seeeduino_light.jpg" /></div>

:::note
Si no tenemos el Shield Base Grove, también podemos conectar directamente el Sensor de Luz Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Sensor de Luz Grove |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| A0            | Amarillo                  |
| Seeeduino       | Barra LED Grove |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| D3            | Blanco                   |
| D2            | Amarillo                  |


#### Software

* Paso 1. Descarga la [Librería de Barra LED Grove](https://github.com/Seeed-Studio/Grove_LED_Bar/archive/master.zip) desde Github.
* Paso 2. Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Seeeduino.
* Paso 3. Copia el código en el IDE de Seeeduino y súbelo.

```c

#include <Grove_LED_Bar.h>

Grove_LED_Bar bar(3, 2, 0);  // Clock pin, Data pin, Orientation

void setup()
{
  // nothing to initialize
  bar.begin();
  bar.setGreenToRed(true);
}

void loop()
{

  int value = analogRead(A0);
  value = map(value, 0, 800, 0, 10);

  bar.setLevel(value);
  delay(100);
}
```

* Paso 2. La barra LED cambiará según la luz.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Light Sensor al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/cc_Light_Sensor.png" /></div>

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, verás el valor de brillo mostrado en el Monitor Serie.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

* **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Light Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|

* **Paso 2**. Conecta el Grove Base Hat al Raspberry.
* **Paso 3**. Conecta el sensor de luz al puerto A0 del Base Hat.
* **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/Light_Hat.jpg" /></div>

:::note
Para el paso 3 puedes conectar el sensor de luz a **cualquier Puerto Analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

* **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
* **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_light_sensor_v1_2.py 0

```

A continuación se muestra el código grove_light_sensor_v1_2.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLightSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def light(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveLightSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLightSensor(int(sys.argv[1]))

    print('Detecting light...')
    while True:
        print('Light value: {0}'.format(sensor.light))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

:::tip
Si todo va bien, podrás ver el siguiente resultado correspondiente a la luz ambiental
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_light_sensor_v1_2.py 0
Detecting light...
Light value: 600
Light value: 448
Light value: 267
Light value: 311
Light value: 102
Light value: 82
Light value: 63
Light value: 54
Light value: 49
Light value: 45
Light value: 545
^CTraceback (most recent call last):
  File "grove_light_sensor_v1_2.py", line 67, in <module>
    main()
  File "grove_light_sensor_v1_2.py", line 64, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

:::note
Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi (con GrovePi_Plus)

#### Hardware

* Paso 1. Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove - Sensor de Luz | Grove - LED Rojo |
|--------------|-------------|-----------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

* Paso 2. Conecta el GrovePi_Plus al Raspberry.
* Paso 3. Conecta el sensor de luz Grove al puerto A0 del GrovePi_Plus.
* Paso 4. Conecta el Led Rojo Grove al puerto D4 del GrovePi_Plus.
* Paso 5. Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/rasp_light.jpg" /></div>

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

* Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
* Paso 2. Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* Paso 3. Ejecuta los siguientes comandos.

```
cd ~/GrovePi/Software/Python
python3 grove_light_sensor.py
```

Aquí está el código de grove_light_sensor.py.

```python
import time
import grovepi

# Connect the Grove Light Sensor to analog port A0
# SIG,NC,VCC,GND
light_sensor = 0

# Connect the LED to digital port D4
# SIG,NC,VCC,GND
led = 4

# Turn on LED once sensor exceeds threshold resistance
threshold = 10

grovepi.pinMode(light_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(light_sensor)

        # Calculate resistance of sensor in K
        resistance = (float)(1023 - sensor_value) * 10 / sensor_value

        if resistance > threshold:
            # Send HIGH to switch on LED
            grovepi.digitalWrite(led,1)
        else:
            # Send LOW to switch off LED
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d resistance = %.2f" %(sensor_value,  resistance))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* Paso 4. El LED se encenderá cuando el sensor de luz se cubra.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_light_sensor.py
sensor_value = 754 resistance = 3.57
sensor_value = 754 resistance = 3.57
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 313 resistance = 22.68
sensor_value = 155 resistance = 56.00
sensor_value = 753 resistance = 3.59
```

# Archivo Eagle para Grove - Sensor de Luz V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Archivo Eagle para Grove - Sensor de Luz(P) V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Archivo Eagle para Grove - Sensor de Luz(P) V1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/Grove_Light_Sensor_CDC_File.zip)
* **[Eagle&PDF]** [Archivo Eagle para Grove - Sensor de Luz V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip)
* **[Eagle&PDF]**  [Archivo Eagle para Grove - Sensor de Luz(P) V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
* **[Eagle&PDF]**  [Archivo Eagle para Grove - Sensor de Luz(P) V1.1](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
* **[Datasheet]** [Información de Referencia LS06-MΦ5](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf)
* **[Datasheet]**  [LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf)
* **[Lectura Adicional]** Caja Secreta

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png" /></div>

Aquí te mostraremos un proyecto hecho con Grove - Sensor de Luz - Caja Secreta. Primero necesitas una caja, una caja de papel, caja de madera, cualquier caja está bien. Pon algo en la caja, porque la llamamos caja secreta, eso significa que no queremos que nadie la abra, de lo contrario habrá una alarma para informarte.

Aquí usamos LinkIt ONE como controlador, que es una placa compatible con Arduino y consta de funciones ricas. Y necesitas las cosas de abajo:

* [LinkIt ONE](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html)
* Grove - Sensor de Luz
* Grove - Base Shield
* Una Tarjeta Sim

Conectemos Grove - Sensor de Luz a A0 o Base Shield, y abre Arduino IDE, copia el código de abajo y sube el ejemplo a LinkIt ONE. Entonces cuando alguien abra la caja, la luz lo detectará, y te enviará un SMS.

```c
// demo of Grove Starter kit for LinkIt ONE
// Secret box

#include <LGSM.h>

char num[20] = "13425171053";           // your number write here
char text[100] = "Warning: Your box had been opened!!";    // what do you want to send


const int pinLight = A0;                // light sensor connect to A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // until put in box
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // box is open
    {
        Serial.println("box had been opened");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM ready for work!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS is sent");
        }
        else
        {
            Serial.println("SMS send fail");
        }

        while(!isLightInBox());             // until put in box
        delay(2000);
    }

    delay(10);
}
```

## Proyectos

**Grove - Introducción a un Sensor de Luz**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**¡El Cubo del Medio Ambiente! Conoce la Tierra Bajo Ti usando Sigfox**: Un cubo con todos los sensores necesarios, adecuado para una amplia gama de aplicaciones como agricultura, monitoreo, etc.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**Módulo sensor de luz Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GOROc2f5Xkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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


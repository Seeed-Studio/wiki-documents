---
description: Grove - Sensor de Llama
title: Grove - Sensor de Llama
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Flame_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg" /></div>

El Grove - Sensor de Llama puede utilizarse para detectar fuentes de fuego u otras fuentes de luz con longitudes de onda en el rango de 760nm - 1100 nm. Está basado en el sensor YG1006, que es un fototransistor de silicio NPN de alta velocidad y alta sensibilidad. Debido a su resina epoxi negra, el sensor es sensible a la radiación infrarroja. En juegos de robots bomberos, el sensor juega un papel muy importante, puede utilizarse como los ojos del robot para encontrar la fuente de fuego.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Características

- Interfaz Grove
- Alta Sensibilidad Fotográfica
- Tiempo de Respuesta Rápido
- Fácil de usar
- La sensibilidad es ajustable

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

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
4.75
</td>
<td>
5.0
</td>
<td>
5.30
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
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Ancho de Banda Espectral
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de detección
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de Respuesta
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Operación
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros pasos

El módulo se utiliza principalmente para detectar la luz infrarroja. Emite señales digitales 0 y 1 a través de una salida de comparador. El valor de salida será 0 cuando se detecte luz infrarroja. Y la sensibilidad es ajustable mediante el potenciómetro de precisión.

### Jugar con Arduino

El módulo se utiliza principalmente para detectar la luz infrarroja. Emite señales digitales 0 y 1 a través de una salida de comparador. El valor de salida será 0 cuando se detecte luz infrarroja. Y la sensibilidad es ajustable mediante el potenciómetro de precisión.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-Flame_Sensor |Grove - Red LED|
|--------------|-------------|-----------------|-----|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **Paso 2.** Conecta Grove-Flame_Sensor al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Red LED al puerto **D3** del Grove-Base Shield.
- **Paso 4.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 5.** Conecta Seeeduino a la PC mediante un cable USB.

<!--link-->
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino       |  Grove-Flame_Sensor  |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |
| Seeeduino       |  Grove - Red LED |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D3            | Amarillo                  |


#### Software

**Paso 1.** Copia el código y cárgalo en la placa controladora.

Aquí está el código

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 //connect SENSOR to digital pin2
#define LED 3 //connect Grove - LED to pin3

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

**Paso 2.** El LED se encenderá cuando haya luz infrarroja.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Flame Sensor al puerto D2, y conecta un Grove - Red LED al puerto D3 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png" /></div>

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, el LED se encenderá cuando el Sensor de Llama detecte llama.
:::

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-Flame_Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Flame_Sensor al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar este sensor

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

Aquí está el código del ejemplo:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Flame Sensor (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
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
import time
import grovepi

# Connect the Grove Flame Sensor to digital port D2
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

## Referencia

El sensor puede detectar la fuente de luz cuya longitud de onda está en el rango de 760nm - 1100 nm. La imagen a continuación muestra la sensibilidad espectral.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg" /></div>

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove - Archivo Eagle del Sensor de Llama](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[Librería]** [Repositorio Github para la Librería Grove_Flame_Sensor](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[Hoja de Datos]** [Hoja de datos LM293D](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip)

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

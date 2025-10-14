---
title: Grove - Sensor de Sonoridad
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Loudness_Sensor/
slug: /es/Grove-Loudness_Sensor
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/Loudness%20Sensor_new.jpg)

El Grove - Sensor de Sonoridad está diseñado para detectar el sonido del entorno. Basado en el amplificador LM2904 y un micrófono integrado, amplifica y filtra la señal de alta frecuencia que recibe del micrófono, y emite una envolvente positiva. Esto se utiliza para la adquisición de señales de Arduino. El valor de salida depende del nivel de entrada de sonido. Para evitar perturbaciones de señal innecesarias, la señal de entrada pasará por dos veces de filtrado dentro del módulo. Hay un potenciómetro de tornillo que permite ajustes manuales a la ganancia de salida.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión del Producto         | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|----------------------|
|Grove-Sensor de Sonoridad V0.9b   | Inicial                                   | Dic 2012             |

## Características

- Interfaz Grove
- Fácil de usar
- Elemento básico Grove

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro             | Valor/Rango            |
|-----------------------|------------------------|
| Voltaje               | 3.5~10 VDC             |
| Frecuencia de Trabajo | 5~2000 Hz              |
| Sensibilidad          | -60~-56dBV/Pa          |
| Relación Señal-Ruido  | >58 dB                 |
| Rango de Señal de Salida | Señal Analógica (0-1023) |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Loudness Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **Paso 2.** Conecta el Sensor de Sonoridad Grove al puerto **A0** del Shield Base Grove.
- **Paso 3.** Conecta el Shield Base Grove al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_loudness.jpg)

:::note
 Si no tenemos el Shield Base Grove, también podemos conectar directamente el Sensor de Sonoridad Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino |  Sensor de Sonoridad Grove |
|-----------|-----------------|
| 5V        | Rojo             |
| GND       | Negro           |
| NC        | Blanco           |
| A0        | Amarillo          |

**Software**

- **Paso 1.** Por favor copia el código de abajo al IDE de Arduino y súbelo al arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```
int loudness;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    loudness = analogRead(0);
    Serial.println(loudness);
    delay(200);
}

```

- **Paso 2.** Abre el puerto serie para monitorear la salida. Habrá un cambio significativo cuando soples al sensor.

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_serial.png)

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi | Grove - Sensor de Sonoridad |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|

|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove - Loudness Sensor al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.
![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/withrpi_basehat.jpg)

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
python grove_loudness_sensor.py 0
```

A continuación se muestra el código grove_water_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLoudnessSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveLoudnessSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLoudnessSensor(int(sys.argv[1]))

    print('Detecting loud...')
    while True:
        value = sensor.value
        if value > 10:
            print("Loud value {}, Loud Detected.".format(value))
            time.sleep(.5)

if __name__ == '__main__':
    main()


```

:::success
    Si todo va bien, podrás ver el siguiente resultado:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_loudness_sensor.py 0
Detecting loud...
Loud value 15, Loud Detected.
Loud value 11, Loud Detected.
Loud value 250, Loud Detected.
Loud value 429, Loud Detected.
Loud value 203, Loud Detected.
Loud value 16, Loud Detected.
Loud value 11, Loud Detected.
^CTraceback (most recent call last):
  File "grove_loudness_sensor.py", line 68, in <module>
    main()
  File "grove_loudness_sensor.py", line 65, in main
    time.sleep(.5)
KeyboardInterrupt


```

Puedes usar este sensor para detectar el volumen. Presiona ++ctrl+c++ para salir.

:::note
        Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi(con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove-Sensor de Volumen |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Sensor de Sonoridad Grove al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/rpi_loudness.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para monitorear el volumen.

```python
cd ~/GrovePi/Software/Python
python grove_loudness_sensor.py
```

Aquí está el código grove_loudness_sensor.py.

```python
import time
import grovepi

# Connect the Grove Loudness Sensor to analog port A0
# SIG,NC,VCC,GND
loudness_sensor = 0

while True:
    try:
        # Read the sound level
        sensor_value = grovepi.analogRead(loudness_sensor)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Paso 4.** Veremos el estado del volumen como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_loudness_sensor.py
sensor_value = 135
sensor_value = 23
sensor_value = 196
sensor_value = 258
sensor_value = 98
sensor_value = 131
```

## FAQ

- P1: ¿Cuál es la diferencia entre el sensor de sonoridad Grove y el sensor de sonido Grove?
  - R1: El sensor de sonoridad Grove tiene un potenciómetro de tornillo para ajustar la ganancia de salida.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Esquema del Sensor de Sonoridad Grove](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip)
- **[Hoja de Datos]** [Hoja de Datos LM2904DR](https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/LM2904DR.pdf)

## Proyectos

**Kit de Monitoreo Ambiental con Energía Solar**: Un kit de código abierto alimentado por energía solar para monitorear la calidad del aire, nivel de sonido, humedad y temperatura.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed' width='350'></iframe>

**El Código Da Vinci**: El trabajo combina arte y electrónica. La parte artística forma el esqueleto y consiste en 11 capas de tablero de fibra de densidad media.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

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

---
description: Grove - Sensor GSR
title: Grove - Sensor GSR
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-GSR_Sensor
last_update:
  date: 1/6/2023
  author: Seraphina
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" /></div>

GSR significa respuesta galvánica de la piel, es un método para medir la conductancia eléctrica de la piel. Las emociones fuertes pueden causar estímulos en tu sistema nervioso simpático, resultando en que las glándulas sudoríparas secreten más sudor. Grove - GSR te permite detectar tales emociones fuertes simplemente conectando dos electrodos a dos dedos de una mano. Es interesante para crear proyectos relacionados con emociones como un monitor de calidad del sueño.

:::caution
¡El Sensor Grove-GSR mide la resistencia de las personas, NO la Conductividad!
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Versión

| Versión del Producto                  |  Cambios | Fecha de Lanzamiento                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | Inicial     |  19 de junio, 2013     |
| Grove - GSR_Sensor V1.2  |Agregar C3 100nf entre M324PW-TSSOP14 y GND  | 31 de julio, 2014 |

## Especificación

| Parámetro               | Valor/Rango                    |
|-------------------------|--------------------------------|
| Voltaje de operación    | 3.3V/5V                        |
| Sensibilidad            | Ajustable mediante potenciómetro |
| Señal de entrada        | Resistencia, NO Conductividad   |
| Señal de salida         | Voltaje, lectura analógica      |
| Material de contacto del dedo | Níquel                    |

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

### Jugar Con Arduino

#### Hardware

- Paso 1. Necesitamos preparar las siguientes cosas:

| Seeeduino V4.2 | Base Shield |  Grove - GSR|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- Paso 2. Conecta el Grove-GSR al **A0** en el Base Shield.
- Paso 3. Conecta el Base Shield al Seeeduino-V4.2.
- Paso 4. Conecta el Seeeduino-V4.2 a la PC usando un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" /></div>

:::note
Si no tenemos un Base Shield, no te preocupes, el sensor se puede conectar directamente a tu Arduino. Por favor sigue las tablas de abajo para conectar con Arduino.
:::

| Seeeduino |Grove-GSR Sensor |
|------------------|---------|
| GND              | Negro  |
| 5V               |  Rojo   |
| NC               | Blanco  |
| A0               | Amarillo |

#### Software

- Paso 1. Copia el código en el IDE de Arduino y súbelo.

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}

```

- Paso 2. No uses el sensor GSR.
- Paso 3. Haz clic en Herramientas-> Monitor Serie desde Arduino IDE
- Paso 4. Usa el destornillador para ajustar la resistencia hasta que la salida serie se minimice. Los datos del puerto serie en este punto se anotan como Serial_calibration.
- Paso 5. Usa el sensor GSR.
- Paso 6. Veremos el gráfico de abajo. Por favor respira profundo y observa las tendencias.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" /></div><br />

**Resistencia Humana** = ((1024 + 2 x Lectura_Puerto_Serie) x 10000)/(Serial_calibration - Lectura_Puerto_Serie)

- La unidad es ohmio;
- Lectura_Puerto_Serie es el valor mostrado en el Puerto Serie (entre 0~1023);
- Serial_calibration es del Paso 4 (Usa el destornillador para ajustar la resistencia hasta que la salida serie se minimice. Los datos del puerto serie en este punto se anotan como Serial_calibration).

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Cosas usadas en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor GSR|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove - GSR Sensor al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" /></div>

:::note
Para el paso 3 puedes conectar el sensor Grove - GSR a **cualquier Puerto Analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
nano grove_gsr_sensor.py

```

Luego debes copiar el siguiente código en este archivo y presionar ++ctrl+x++ para salir y guardar.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **Paso 4**. Ejecuta el siguiente comando para ejecutar el código

```

python grove_gsr_sensor.py 0

```

:::tip
Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
^CTraceback (most recent call last):
  File "grove_gsr_sensor.py", line 69, in <module>
    main()
  File "grove_gsr_sensor.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

:::note
Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

## FAQ

**P1: ¿Cuál es la unidad de salida?**

R1: Medimos la señal por voltaje e imprimimos al puerto COM como (0~1023).

# Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar Wiki PDF](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Hoja de datos]** [Hoja de datos LM324](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

## Proyectos

**eMotion - Hacia un Mejor Futuro**: Creemos que podemos usar sensores biométricos, la seguridad de la plataforma Helium y la fortaleza de Google Cloud para detectar posibles estados de ansiedad.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

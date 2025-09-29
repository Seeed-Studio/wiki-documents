---
description: Grove - Sensor de Movimiento PIR
title: Grove - Sensor de Movimiento PIR
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-PIR_Motion_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

Este sensor te permite detectar movimiento, generalmente movimiento humano en su rango. Simplemente conéctalo al Grove - Base shield y prográmalo, cuando alguien se mueva en su rango de detección, el sensor emitirá HIGH en su pin SIG.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

## Características

- Interfaz compatible con Grove
- Distancia de detección ajustable
- Tiempo de retención ajustable

:::tip
    Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Parámetro |Valor/Rango
|---|---|
|Voltaje de Operación| 3V–5V
|Corriente de Operación(VCC = 3V)| 100uA
|Corriente de Operación(VCC = 5V)| 150uA
|Rango de Medición |0.1 - 6m
|Distancia de detección por defecto| 3m
|Tiempo de Retención |1 - 25s
|Longitud de Onda de Trabajo |7 - 14um
|Ángulo de Detección| 120 grados

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Grove - Sensor de Movimiento PIR | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- **Paso 2.** Conecta Grove - PIR Motion Sensor al puerto **D2** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-PIR Motion Sensor al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - PIR Motion Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |

#### Software

- Copia el código de abajo en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/*
macro definitions of PIR motion sensor pin
Use pin 2 to receive the signal from the module
*/
#define PIR_MOTION_SENSOR 2


void setup()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    Serial.begin(9600);  

}

void loop()
{
    // If it detects moving people
    // To know more about why digital numbers are used as boolean, check https://www.techtarget.com/whatis/definition/Boolean#:~:text=The%20Boolean%20data,1%20or%200
    if(digitalRead(PIR_MOTION_SENSOR))
        Serial.println("Hi,people is coming");
    else
        Serial.println("Watching");

 delay(200);
}

```

:::note
    La distancia de detección y el tiempo de retención se pueden ajustar añadiendo dos potenciómetros adicionales en la placa. Para más detalles, consulte el V1.2 Eagle a continuación. El módulo también se puede configurar como re-activable o no re-activable cambiando el puente.
:::

El resultado debería ser así:

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png" alt="pir" width={600} height="auto" /></p>

:::tip
Use una tapa de puente para cortocircuitar dos pines para activar un disparador repetible o no repetible. Si usa GND y el pin 1, la combinación resulta en un disparador no repetible (predeterminado). Si usa el pin 1 y VCC, el disparador es repetible. Un disparador no repetible significa que el evento ocurre una vez dentro de un ciclo (generalmente unos pocos segundos). En el caso del ejemplo de la wiki, es un disparador no repetible.
:::

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecte un Grove - PIR Motion Sensor al puerto D2 de un Base Shield.

**Paso 2.** Conecte el Base Shield a su Seeeduino/Arduino.

**Paso 3.** Conecte Seeeduino/Arduino a su PC mediante un cable USB.

#### Software

**Paso 1.** Abra [Codecraft](https://ide.chmakered.com/), añada soporte para Arduino, y arrastre un procedimiento principal al área de trabajo.

:::note
    Si esta es su primera vez usando Codecraft, vea también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastre bloques como en la imagen de abajo o abra el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png" alt="pir" width={600} height="auto" /></p>

Suba el programa a su Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, el LED se encenderá cuando la gente se acerque.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - PIR Motion Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el sensor de movimiento PIR al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el sensor de movimiento PIR a **cualquier GPIO Puerto** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python grove_mini_pir_motion_sensor.py 12

```

A continuación se muestra el código de grove_mini_pir_motion_sensor.py.

```python

import time
from grove.gpio import GPIO


class GroveMiniPIRMotionSensor(GPIO):
    def __init__(self, pin):
        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GroveMiniPIRMotionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))

    def callback():
        print('Motion detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12
Motion detected.
Motion detected.
Motion detected.
^CTraceback (most recent call last):
  File "grove_mini_pir_motion_sensor.py", line 84, in <module>
    main()
  File "grove_mini_pir_motion_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - PIR Motion Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta el sensor al puerto **D8** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
    En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::
:::note
    Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::
:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Ejecuta los siguientes comandos para usar el Sensor de Movimiento PIR para monitorear el movimiento de personas.

```
cd ~/GrovePi/Software/Python
sudo python3 grove_pir_motion_sensor.py
```

Aquí está el código grove_pir_motion_sensor.py.

```python
import time
import grovepi

# Connect the Grove PIR Motion Sensor to digital port D8
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # Sense motion, usually human, within the target range
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # if your hold time is less than this, you might not see as many detections
        time.sleep(.2)

    except IOError:
        print "Error"
```

El resultado debería ser como:

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_pir_motion_sensor.py

-
-
-
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
-
-

```

## Preguntas Frecuentes

**P1: ¿Cómo hacer que la distancia sea ajustable?**

R1: R2: se usa para ajustar la distancia de detección (el coeficiente AMP, 2MΩ). R6: se usa para ajustar el tiempo de mantenimiento (el ciclo de trabajo del disparador, 100KΩ).

La distancia de detección se puede ajustar desde 6 metros hasta solo varios centímetros. Si el potenciómetro se ajusta a un extremo, el módulo será demasiado sensible para ser activado por la atmósfera incluso cuando no hay personas moviéndose frente a él. El tiempo de mantenimiento también se puede ajustar mediante el potenciómetro Delay_time, el valor es aproximadamente de 25s a 1s.

Si R2 y R6 están soldados, asegúrese de que R13 y R14 estén vacíos.

:::note
    Existe el riesgo de que la placa pueda ser destruida. Por favor, piénselo bien antes de hacer esta modificación.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove - PIR Motion Sensor Eagle File v1.2](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip)
- **[PDF]** [Grove - PIR Motion Sensor v1.2 Schematics](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Grove - PIR Motion Sensor Eagle V1.2 PCB](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[Library]** [Repositorio Github para PIR Motion Sensor](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[Datasheet]** [BISS0001 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Twig_-_BISS0001.pdf)
- **[Datasheet]** [Fresnel lens 8120 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Fresnel_lens_8120.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove_PIR_Motion_Sensor_CDC_File.zip)

## Proyectos

**Alarma Antirrobo con Sensor de Movimiento PIR**: Este artículo explica las Alarmas Antirrobo con un Sensor de Movimiento PIR.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed' width='350'></iframe>

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

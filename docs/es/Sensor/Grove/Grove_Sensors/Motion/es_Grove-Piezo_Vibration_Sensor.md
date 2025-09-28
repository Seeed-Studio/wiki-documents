---
description: Grove - Sensor de Vibración Piezoeléctrico
title: Grove - Sensor de Vibración Piezoeléctrico
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Piezo_Vibration_Sensor
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg" alt="pir" width={600} height="auto" /></p>

Grove-Sensor de Vibración Piezoeléctrico es adecuado para mediciones de flexibilidad, vibración, impacto y tacto. El módulo está basado en el sensor de película PZT LDT0-028. Cuando el sensor se mueve hacia adelante y hacia atrás, se generará un cierto voltaje por el comparador de voltaje en su interior. Un amplio rango dinámico (0.001Hz~1000MHz) garantiza un excelente rendimiento de medición. Y, puedes ajustar su sensibilidad ajustando el potenciómetro integrado con un tornillo.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)

## Versión

| Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Vibración Piezoeléctrico V1.1 | Inicial                                                                                                                                                                                    | Jul 2014      |

## Características

- Conector grove estándar
- Amplio rango dinámico：0.1Hz~180Hz
- Sensibilidad ajustable
- Alta receptividad para impactos fuertes

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Aplicaciones

- Detección de Vibración en Lavadora
- Interruptor de Activación de Bajo Consumo
- Detección de Vibración de Bajo Costo
- Alarmas de Automóvil
- Movimiento Corporal
- Sistemas de Seguridad

## Primeros Pasos

### Jugar con Arduino

#### Hardware

El Grove - Sensor de Vibración Piezoeléctrico emite un nivel lógico ALTO cuando se detecta vibración. Podemos usar cualquiera de los pines de Arduino para leer los datos. Aquí hay un ejemplo del Sensor de Vibración Piezoeléctrico controlando un LED. Cuando se detecta la vibración, este sensor emite una señal lógica alta (la sensibilidad se puede cambiar ajustando el potenciómetro), un LED se enciende.

- Paso 1. Prepare los siguientes elementos:

| Seeeduino V4 | Base Shield | Grove - Vibración Piezoeléctrica |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|)<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- Paso 2. Conecta el módulo al **D2** del shield base usando el cable grove de 4 pines, usamos el **LED digital del pin 13 de la placa** como salida.
- Paso 3. Conecta el Shield Básico al Arduino.
- Paso 4. Conecta el Arduino a la PC usando un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Puede generar un nivel bajo aunque originalmente genere un nivel alto cuando aumentes el voltaje umbral ajustando el potenciómetro en sentido horario.
:::

#### Software

- Paso 1. Copia y pega el código de abajo en un nuevo sketch de Arduino.

```c
const int ledPin=13;
void setup() {
    Serial.begin(9600);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorState = digitalRead(2);
    Serial.println(sensorState);
    delay(100);
    if(sensorState == HIGH)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

- Paso 2. El LED se encenderá cuando se detecte vibración.

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Vibración Piezoeléctrica|
|----------------|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - Sensor de Vibración Piezoeléctrico al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el sensor de vibración piezoeléctrico a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_piezo_vibration_sensor.py 12

```

A continuación se muestra el código de grove_piezo_vibration_sensor.py.

```python

import time
from grove.gpio import GPIO


class GrovePiezoVibrationSensor(GPIO):
    def __init__(self, pin):
        super(GrovePiezoVibrationSensor, self).__init__(pin, GPIO.IN)
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

Grove = GrovePiezoVibrationSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GrovePiezoVibrationSensor(int(sys.argv[1]))

    def callback():
        print('Detected.')

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

pi@raspberrypi:~/grove.py/grove $ python3 grove_piezo_vibration_sensor.py 12
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
^CTraceback (most recent call last):
  File "grove_piezo_vibration_sensor.py", line 84, in <module>
    main()
  File "grove_piezo_vibration_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- Paso 1. Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Piezo Vibration |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- Paso 2. Conecta el GrovePi_Plus al Raspberry.
- Paso 3. Conecta el Grove-Piezo Vibration al puerto A0 del GrovePi_Plus.
- Paso 4. Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- Paso 2. Clona el repositorio de Github con Git.

```python
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- Paso 3. Ejecuta los siguientes comandos para detectar la vibración.

```python
cd ~/GrovePi/Software/Python
python3 grove_piezo_vibration_sensor.py
```

Aquí está el código de grove_piezo_vibration_sensor.py.

```python
import time
import grovepi

# Connect the Grove Piezo Vibration Sensor to analog port A0
# OUT,NC,VCC,GND
piezo = 0

grovepi.pinMode(piezo,"INPUT")

while True:
    try:
        # When vibration is detected, the sensor outputs a logic high signal
        print grovepi.analogRead(piezo)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- Paso 4. Veremos la visualización de vibración en la terminal como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_piezo_vibration_sensor.py
1023
1023
1023
1023
18
17
18
17
```

:::note
    También podemos usar grovepi.digitalRead(2) para leer el estado de vibración conectando el sensor al puerto D2 del GrovePi.
:::

## Preguntas Frecuentes

**P1: ¿Es salida digital o analógica?**

R1: Es salida digital, Bajo o Alto.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar Wiki PDF](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Grove-Piezo_Vibration_Sensor_wiki.pdf)
- **[Eagle]** [Grove - Archivo Eagle del Sensor de Vibración Piezo](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip)
- **[PDF]** [Grove - Archivo PDF del Esquemático del Sensor de Vibración Piezo](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove-Piezo_Vibration_Sensor.pdf)
- **[PDF]** [Grove - Archivo PDF del PCB del Sensor de Vibración Piezo](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove%20-%20Piezo%20Vibration%20Sensor%20v1.1%20PCB.pdf)
- **[Hoja de Datos]** [Hoja de Datos del Sensor de Vibración Piezo](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Piezo_Vibration_Sensor.pdf)

## Proyectos

**Kit Inicial Grove Para Arduino - Sensor de Vibración Piezo**: Te enseña cómo usar el sensor de vibración Piezo en el kit inicial Arduino Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/trduunze/grove-starter-kit-for-arduino-piezo-vibration-sensor-92c531/embed' width='350'></iframe>

**Monitor de Asiento**: Usando la nube ARTIK para monitorear el estado del asiento de la cabina.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/momososo/seat-monitor-4288dc/embed' width='350'></iframe>

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

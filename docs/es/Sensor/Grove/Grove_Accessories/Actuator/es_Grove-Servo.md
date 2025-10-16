---
title: Grove - Servo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Servo/
slug: /es/Grove-Servo
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - Servo es un motor DC con engranajes y sistema de retroalimentación. Se utiliza en el mecanismo de accionamiento de robots. El módulo es un producto adicional para los amantes de Grove. Hemos regulado el servo de tres cables en un conector estándar Grove. Ahora puedes conectarlo y usarlo como un módulo Grove típico, sin el desorden de cables puente.

Pero si prefieres más un servo prototipo, echa un vistazo al EMAX 9g ES08A High Sensitive Mini Servo. Son el mismo modelo, ambos de buena calidad y precio accesible.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

Características
---

- Módulo pequeño
- Interfaz Compatible con Grove
- Fácil de usar

Especificaciones
---

<table cellSpacing={0} width="80%">
  <tbody>
    <tr>
      <th scope="col"> Elemento </th>
      <th scope="col"> Mín </th>
      <th scope="col"> Típico </th>
      <th scope="col"> Máx </th>
      <th scope="col"> Unidad </th>
    </tr>
    <tr>
      <th> Voltaje de Trabajo </th>
      <td> 4.8 </td>
      <td> 5.0 </td>
      <td> 6.0 </td>
      <td> V </td>
    </tr>
    <tr>
      <th> Torque </th>
      <td colSpan={3}> 1.5/1.8 </td>
      <td> Kg.cm </td>
    </tr>
    <tr>
      <th scope="row"> Velocidad </th>
      <td colSpan={3}> 0.12/0.16 </td>
      <td> s/60° </td>
    </tr>
    <tr>
      <th scope="row"> Tamaño </th>
      <td colSpan={3}> 32X11.5X24 </td>
      <td> mm </td>
    </tr>
    <tr>
      <th scope="row"> Peso </th>
      <td colSpan={3}> 8.5 </td>
      <td> g </td>
    </tr>
  </tbody>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

:::note
El método de conexión del servo descrito en este artículo no es el enfoque más apropiado o recomendado. Para servos—especialmente cuando se usan múltiples servos simultáneamente—se debe usar una placa controladora de servos dedicada para proporcionar energía adicional a los servos, con la placa de desarrollo controlando los servos a través de la placa controladora. Dado que Seeed Studio actualmente no ofrece una placa controladora adecuada, este artículo demuestra la conexión del servo directamente a la placa principal solo como ejemplo de uso. Este enfoque **no se recomienda** para proyectos reales.
:::

Aquí te mostraremos cómo funciona este Grove - Servo a través de una demostración simple. Primero que nada, necesitamos preparar las siguientes cosas:

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

El Servo tiene tres cables: alimentación, tierra y señal. El cable de alimentación es típicamente rojo y debe conectarse al pin de 5V en la placa Arduino/Seeeduino. El cable de tierra es típicamente negro o marrón y debe conectarse a un pin de tierra en la placa Arduino. El pin de señal es típicamente amarillo, naranja o blanco y debe conectarse al **D5** en la placa Arduino. Podemos cambiar al puerto digital que queramos. Pero no olvides cambiar el número de puerto en la definición del código de demostración al mismo tiempo.

- Conecta el módulo al puerto **D5** del Base Shield.
- Conecta el Grove- Base Shield al Arduino.
- Conecta el Arduino a la PC mediante un cable USB.

#### Software

- Hagamos que el eje de un servo se mueva de un lado a otro a través de 180 grados usando la [Librería Servo de Arduino](https://arduino.cc/en/Reference/Servo).
- Abre el código directamente por la ruta: **File → Examples →Servo→Sweep**.

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```cpp
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(5);  // attaches the servo on pin 5 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

- Sube el sketch. Podemos ver el servo moverse.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Servo al puerto D5 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, verás el servo moverse.
:::

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

:::note
El método de conectar el servo descrito en este artículo no es el enfoque más apropiado o recomendado. Para servos—especialmente cuando se usan múltiples servos simultáneamente—se debe usar una placa controladora de servos dedicada para proporcionar energía adicional a los servos, con la placa de desarrollo controlando los servos a través de la placa controladora. Dado que Seeed Studio actualmente no ofrece una placa controladora adecuada, este artículo demuestra conectar el servo directamente a la placa principal solo como ejemplo de uso. Este enfoque **no se recomienda** para proyectos reales.
:::

#### Hardware

- **Paso 1**. Elementos usados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Servo|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - Servo al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::note
Para el paso 3 puedes conectar el módulo servo a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::tip
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_servo.py 12

```

A continuación se muestra el código grove_servo.py.

```python

import RPi.GPIO as IO
import sys
import time
from numpy import interp

IO.setwarnings(False)
IO.setmode(IO.BCM)

class GroveServo:
    MIN_DEGREE = 0
    MAX_DEGREE = 180
    INIT_DUTY = 2.5

    def __init__(self, channel):
        IO.setup(channel,IO.OUT)
        self.pwm = IO.PWM(channel,50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # Map angle from range 0 ~ 180 to range 25 ~ 125
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp/10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('Usage: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()


```

:::tip
    Si todo va bien, podrás ver el barrido del servo.
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 degree
1 degree
2 degree
3 degree
4 degree
5 degree
6 degree
7 degree
8 degree
9 degree
10 degree
11 degree
12 degree
13 degree
14 degree
15 degree
16 degree
17 degree
18 degree
19 degree
20 degree
21 degree
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt


```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Recursos

- **[Documento]** [Entendiendo los Servos RC](http://www.rchelicopterfun.com/rc-servos.html)
- **[Librería]**[Tutorial de Arduino - Librería Servo](https://www.arduino.cc/en/Reference/Servo)
- **[Librería]** [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
- **[Demo]** [Reloj Digital/Analógico - Arduino + PaperCraft](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
- **[Demo]** [Mesa XY con Servo de Hobby de Bajo Costo](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## Proyectos

**Módulo servomotor Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

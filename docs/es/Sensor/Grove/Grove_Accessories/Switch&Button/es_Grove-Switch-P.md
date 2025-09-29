---
description: Grove - Switch(P)
title: Grove - Switch(P)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Switch-P
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

Este Grove – Switch es un mini interruptor deslizante SPDT, excelente para situaciones de "ENCENDIDO/APAGADO". Es un interruptor confiable de gran calidad de construcción que adoptamos en muchas de nuestras placas. Deberías tener algunos en stock para tu sistema de prototipado Grove.

¿Qué significa "P"? "P" significa "montaje en panel" en este producto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versión

| Versión del Producto         | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|----------------------|
|Grove-Switch(P) V1.0          | Inicial                                   | Jul 2012             |

## Características

- Interfaz Grove
- Fácil de usar
- Elemento básico de Grove

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro             | Valor/Rango    |
|-----------------------|----------------|
| Voltaje de operación  | 3.3/5V         |
| Vida eléctrica        | 10,000 ciclos  |
| Fuerza de operación   | 200 ± 50gf     |
| Temperatura de operación | -20℃ a +80℃   |
| Tamaño                | 20mmX20mm      |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Switch(P) |Grove - Purple LED (3mm)|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **Paso 2.** Conecta Grove-Switch(P) al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove-LED al puerto **D6** del Grove-Base Shield.
- **Paso 4.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 5.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Switch(P) y Grove - Purple LED (3mm) al Seeeduino como se muestra a continuación.
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - Purple LED (3mm) |
|-----------|-----------------|-----------|--------------------------|
| 5V        | Rojo            | 5V        | Rojo                     |
| GND       | Negro           | GND       | Negro                    |
| NC        | Blanco          | NC        | Blanco                   |
| D2        | Amarillo        | D6        | Amarillo                 |

**Software**

- **Paso 1.** Por favor copia el código de abajo al IDE de Arduino y súbelo al arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```
const int switchPin = 2;     // the number of the pushbutton pin
const int ledPin =  6;      // the number of the LED pin

int switchState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the switch pin as an input:
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // read the state of the switch value:
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        //turn LED on:
        digitalWrite(ledPin, HIGH);
        Serial.println("switch high!");
    }
    else {
        //turn LED off:
        digitalWrite(ledPin, LOW);
        Serial.println("switch low");
    }
}

```

- **Paso 2.** Cuando cambiamos a alto y el LED estará encendido. También podemos ver la salida Serial como se muestra a continuación.

```
switch high!
switch high!
switch high!
```

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Switch P |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Switch al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::note
Para el paso 3 puedes conectar el switch a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_switch.py 12

```

A continuación se muestra el código de grove_switch.py.

```python


import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("on")
        else:
            print("off")
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
off
off
on
off
on
on
off
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-Switch(P) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta Grove-Switch(P) al puerto **D3** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**Software**

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para monitorear el estado del interruptor.

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

Aquí está el código de grove_switch.py.

```python
import time
import grovepi

# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Paso 4.** Veremos el estado del interruptor como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_switch.py 
1
1
0
0
0
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Esquemático Grove-Switch(P)](https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## Proyectos

**Usando un Interruptor para Abrir y Cerrar un Relé**: Aprenderás el valor de un interruptor, con su función Alta y Baja. Además aprenderás cómo usar un relé como actuador.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

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

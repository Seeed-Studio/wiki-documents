---
description: Grove - Botón
title: Grove - Botón
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Button
last_update:
  date: 1/10/2023
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/Button.jpg" /></div>

Grove - Botón es un pulsador momentáneo. Contiene un botón independiente "momentáneo encendido/apagado". "Momentáneo" significa que el botón rebota por sí mismo después de ser liberado. El botón emite una señal HIGH cuando se presiona, y LOW cuando se libera. La marca Sig en la capa de serigrafía significa señal mientras que NC significa que no se usa en absoluto. Hay dos versiones de este botón disponibles como se muestra en las imágenes. La única diferencia es la dirección del conector Grove.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Button/image/300px-Get_One_Now_Banner.png" /></a></p>

## Versión

| Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Botón | Inicial                                                                                                                                                                                    | 25 Nov 2010      |

## Características

- Botón momentáneo ON/OFF fácil de usar
- Utiliza cables Grove estándar de 4 pines

:::tip
Para más detalles sobre los módulos Grove, consulte el [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro             | Valor/Rango    |
|-----------------------|----------------|
| Voltaje de operación  | 3.3/5V         |
| Vida eléctrica        | 200,000 ciclos |
| Fuerza de operación   | 100 ± 50gf     |
| Temperatura de operación | -25℃ a +70℃   |
| Tamaño                | 20mmX20mm      |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

- Paso 1. Prepara las siguientes cosas:

| Seeeduino V4.2 | Base Shield|  Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- Paso 2. Conecta Grove-Button al puerto D2 de Grove-Base Shield.
- Paso 3. Conecta Grove - Base Shield al Seeeduino.
- Paso 4. Conecta el Seeeduino a la PC a través de un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/seeeduino_button.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Button al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-Button |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |

#### Software

- Paso 1. Copia el código en Arduino IDE y súbelo.

```c
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the pushbutton pin as an input:
    pinMode(buttonPin, INPUT);
}

void loop(){
    // read the state of the pushbutton value:
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed.
    // if it is, the buttonState is HIGH:
    if (buttonState == HIGH) {
        // turn LED on:
        digitalWrite(ledPin, HIGH);
    }
    else {
        // turn LED off:
        digitalWrite(ledPin, LOW);
    }
}
```

- Paso 2. Veremos el LED integrado del Pin13 encenderse y apagarse.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Button al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/cc_Button.png" /></div>

Sube el programa a tu Arduino/Seeeduino.

tipsuccess
    Cuando el código termine de subirse, el LED en la placa Arduino/Seeeduino se encenderá cuando se presione el Button.

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi | Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|

|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove - Button al puerto PWM (puerto 12) del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/with_hat.jpg" /></div>

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

```
cd grove.py/grove
python3 grove_button.py 12
```

Si conectas el LED Rojo a un puerto diferente del Base Hat, en lugar de ejecutar **python grove_led.py 12**, deberías ejecutar el siguiente comando.

```
python3 grove_button.py portnumber
```

A continuación se muestra el código grove_button.py.

```python

import time
from grove.button import Button
from grove.factory import Factory


class GroveButton(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        self.__last_time = time.time()
        self.__on_press = None
        self.__on_release = None
        self.__btn.on_event(self, GroveButton.__handle_event)

    @property
    def on_press(self):
        return self.__on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return
        self.__on_press = callback

    @property
    def on_release(self):
        return self.__on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return
        self.__on_release = callback

    def __handle_event(self, evt):
        dt, self.__last_time = evt["time"] - self.__last_time, evt["time"]
        # print("event index:{} event:{} pressed:{}".format(evt["index"], evt["code"], evt["pressed"]))
        if evt["code"] == Button.EV_LEVEL_CHANGED:
            if evt["pressed"]:
                if callable(self.__on_press):
                    self.__on_press(dt)
            else:
                if callable(self.__on_release):
                    self.__on_release(dt)


Grove = GroveButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    button = GroveButton(pin)

    def on_press(t):
        print('Button is pressed')
    def on_release(t):
        print("Button is released, pressed for {0} seconds".format(round(t,6)))

    button.on_press = on_press
    button.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
Si todo va bien, podrás ver el siguiente resultado:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_button.py 12
Hat Name = 'Grove Base Hat RPi'
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is released, pressed for 0.002685 seconds
Button is pressed
Button is released, pressed for 0.219019 seconds
Button is pressed
Button is released, pressed for 0.001372 seconds
Button is pressed
Button is pressed
Button is released, pressed for 0.043143 seconds
Button is pressed
Button is released, pressed for 1.083292 seconds
^CTraceback (most recent call last):
  File "grove_button.py", line 103, in <module>
    main()
  File "grove_button.py", line 99, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes presionar `ctrl`+`c` para salir de este programa.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- Paso 1. Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- Paso 2. Conecta el GrovePi_Plus al Raspberry.
- Paso 3. Conecta el Grove-Button al puerto D3 del GrovePi_Plus.
- Paso 4. Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/rasp_button.jpg" /></div>

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- Paso 2. Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Paso 3. Ejecuta los siguientes comandos.

```
cd ~/GrovePi/Software/Python
python3 grove_button.py
```

Aquí está el código de grove_button.py.

```python
import time
import grovepi

# Connect the Grove Button to digital port D3
# SIG,NC,VCC,GND
button = 3

grovepi.pinMode(button,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(button))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Paso 4. Veremos el botón encendido y apagado.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_button.py
0
1
1
1
1
0
0
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Archivos Eagle de Grove-Button](https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip)

- **[Más Lectura]** [Pistola Láser de Madera](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Button/res/Grove_Button_CDC_File.zip)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg" /></div>

¡Inspirados por OVERWATCH, hemos hecho un juguete de Pistola Láser de Madera muy genial para divertirnos estos días!

La Pistola Láser de Madera y el Objetivo de la Pistola están basados en una placa Arduino llamada Seeeduino Lotus. El emisor láser en la Pistola Láser está controlado para disparar pulsos láser para "activar" el Objetivo de la Pistola. Y hay 3 sensores de luz en el Objetivo de la Pistola para detectar el pulso láser. Parece muy simple ¿verdad? Si estás interesado en nuestro proyecto, ¡por favor haz uno para ti o tu hijo! Vale la pena pasar un día haciéndolo como regalo de Navidad.

## Proyectos

**Grove - Introducción en un Botón y Cadena de Luces LED**: Ejemplo para Principiantes - ¡Apuesto a que los Principiantes sonreirán después del proyecto - envíame una selfie!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-button-led-string-light-f7e4d6/embed' width='350'></iframe>

**Usando Botón Grove Para Controlar LED Grove**: Cómo conectar y usar el Botón Grove para controlar el kit de socket LED Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**Módulos Grove de Botón y LED**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RCtsxwx4OaA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/78lVn_-oYaY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Grove - LED Rojo
title: Grove - LED Rojo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Red_LED
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" alt="pir" width={600} height="auto" /></p>

Grove - LED Rojo es similar al módulo Grove - LED que aloja una fuente de luz LED. Además, también tiene un potenciómetro integrado para gestionar los requisitos de energía del LED. La PCB de este módulo tiene orificios de montaje que se pueden montar en la superficie requerida de tu prototipo. Por ejemplo, se puede usar como una lámpara piloto para indicar la presencia de energía o señal.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

## Versión

| Versión del Producto         | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED_v1.3 | Inicial                                                                                                                                                                                    | Mar 15 2016      |

## Características

- Proporciona una indicación de luz LED para tu proyecto
- Soporta LEDs de diferentes colores, el LED se conecta al soporte LED en lugar de soldarse en la placa
- Soporta control de brillo y mayor rango de voltajes de entrada con ajuste de potenciómetro integrado

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

- Paso 1. Prepara las siguientes cosas:

| Seeeduino V4.2 | Base Shield|  Grove - LED Rojo |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- Paso 2. Conecta el LED Rojo Grove al puerto D2 del Shield Base Grove.
- Paso 3. Conecta el Shield Base Grove al Seeeduino.
- Paso 4. Conecta el Seeeduino a la PC a través de un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos el Shield Base Grove, también podemos conectar directamente el LED Rojo Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | LED Rojo Grove |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1**. Copia el código en el IDE de Arduino y súbelo.

```
void setup() {
  // initialize digital pin2  as an output.
  pinMode(2, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(2, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(2, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- **Paso 2**. Veremos el LED encenderse y apagarse.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - LED Rojo al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás el LED parpadeando.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - LED Rojo |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el LED Rojo al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el LED Rojo a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::note
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
cd yourpath/grove.py/grove
python3 grove_led.py 12
```

Si conectas el LED Rojo a un puerto diferente del Base Hat, en lugar de ejecutar **python grove_led.py 12**, deberías ejecutar el siguiente comando.

```
python3 grove_led.py portnumber
```

A continuación se muestra el código grove_led.py.

```python

from grove.gpio import GPIO


class GroveLed(GPIO):
    def __init__(self, pin):
        super(GroveLed, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveLed


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    led = GroveLed(int(sys.argv[1]))

    while True:
        led.on()
        time.sleep(1)
        led.off()
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Si todo va bien, podrás ver el led encenderse y apagarse.
:::
:::note
    Para la mayoría de los módulos grove, necesitas añadir el parámetro del número de pin, como en este ejemplo `python3 grove_led.py 12`, **12** es el pin GPIO elegido y la salida del pin 12 alimentará el led.  
:::

### Jugar Con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- Paso 1. Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove - Red Led |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- Paso 2. Conecta el GrovePi_Plus al Raspberry.
- Paso 3. Conecta Grove-Red Led al puerto D4 del GrovePi_Plus.
- Paso 4. Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2**. Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3**. Ejecuta los siguientes comandos.

```
cd ~/GrovePi/Software/Python
python3 grove_led_blink.py
```

Aquí está el código de grove_led_blink.py.

```python

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

print ("This example will blink a Grove LED connected to the GrovePi+ on the port labeled D4. If you're having trouble seeing the LED blink, be sure to check the LED connection and the port number. You may also try reversing the direction of the LED on the sensor.")
print (" ")
print ("Connect the LED to the port labele D4!" )

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)  # Send HIGH to switch on LED
        print ("LED ON!")
        time.sleep(1)

        digitalWrite(led,0)  # Send LOW to switch off LED
        print ("LED OFF!")
        time.sleep(1)

    except KeyboardInterrupt: # Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:    # Print "Error" if communication error encountered
        print ("Error")
        
```

- **Paso 4**. Veremos el LED encenderse y apagarse.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_led_blink.py
This example will blink a Grove LED connected to the GrovePi+ on the port labeled D4.
If you're having trouble seeing the LED blink, be sure to check the LED connection and the port number.
You may also try reversing the direction of the LED on the sensor.

Connect the LED to the port labele D4!
LED ON!
LED OFF!
LED ON!
LED OFF!
```

## Recursos

- **[PDF]** [Esquemático del Grove-LED Rojo](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove_Red_LED_CDC_File.zip)

## Proyectos

**Usando el Botón Grove para Controlar el LED Grove**: Cómo conectar y usar el Botón Grove para controlar el kit de socket LED Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**Módulos Grove de Botón y LED**:

<iframe width={560} height={315} src="https://www.youtube.com/embed/RCtsxwx4OaA" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

<iframe width={560} height={315} src="https://www.youtube.com/embed/78lVn_-oYaY" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

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

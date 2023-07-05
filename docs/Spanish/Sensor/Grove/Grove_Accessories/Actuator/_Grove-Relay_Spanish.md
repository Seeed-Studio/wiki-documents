---
description: El Grove - Módulo Relevador es un interruptor digital normalmente-abierto.
title: Grove - Módulo Relevador
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Relay_Spanish.md
last_update:
  date: 06/20/23
  author: Mario Andres De los Santos Hernandez
---

<p style={{}}><img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/Twig-Relay.jpg" /></p>

El Grove - Módulo Relevador es un interruptor digital normalmente-abierto. Con el, puedes controlar circuitos de alto voltaje con un bajo voltaje, digamos con 5v de un controlador. En la tarjeta tenemos un indicador LED, el cual se encenderá cuando las terminales controladas esten cerradas.

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>
</p>

## Versión

| Parámentros                       | V1.1                 | V1.2                |
| :-------------------------------- | :------------------- | :------------------ |
| Fecha de Lanzamiento del producto | 27 de Enero del 2013 | 9 de Junio del 2014 |
| Voltaje de Operación              | 5V                   | 3.3V~5V             |
| Corriente de Operación            | 60mA                 | 100mA               |
| Vida del Relevador                | 100,000 Ciclos       | 100,000 Ciclos      |
| Max Voltaje de Switcheo           | 250VAC/30VDC         | 250VAC/30VDC        |
| Max Corriente de Switcheo         | 5A                   | 5A                  |

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plaformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

### Jugando con Arduino

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

#### Materiales requeridos

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Botón **x2**                                                                                      | Grove - Relevador                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button_s.jpg) | ![](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Thumbnail.jpg)                   |
| <a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquierelo aquí</a>                        | <a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquierelo aquí</a>                       | <a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Adquierelo aquí</a>         | <a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">Adquierelo aquí</a> |

¡Nota!
**1** Por favor conecta el USB con gentileza, de otra manera podrías dañar el puerto. Utilice el cable USB con 4 cables internos, ya que solo este permite comunicación. Si no esta seguro respecto a que cable tiene, puede dar click [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

    **2** Cada módulo Grove viene con un cable Grove cuando lo adquieres. En caso de que extraviaras el tuyo, puedes dar click [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprarlo.

#### Hardware

- **Paso 1.** Conecta el Grove - Relevador al puerto **D4** del Grove - Shield Base.

- **Paso 2.** Conecta un Grove - Botón al puerto **D2** del Grove - Shield Base, y el segundo al puerto **D3**.

- **Paso 3.** Inserta el Grove - Shield Base a tu Seeeduino.

- **Paso 4.** Conecta el Seeeduino al PC usando un cable Micro-USB.

![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button-relay.jpg)

Nota:
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo al Seeeduino como se muestra en la tabla:

| Grove-Relevador | Arduino | Grove Cable |
| --------------- | ------- | ----------- |
| GND             | GND     | Negro       |
| VCC             | 5V      | Rojo        |
| SIG             | D4      | Amarillo    |

| Grove-Botón #1 | Arduino | Grove Cable |
| -------------- | ------- | ----------- |
| GND            | GND     | Negro       |
| VCC            | 5V      | Rojo        |
| SIG            | D2      | Amarillo    |

| Grove-Botón #2 | Arduino | Grove Cable |
| -------------- | ------- | ----------- |
| GND            | GND     | Negro       |
| VCC            | 5V      | Rojo        |
| SIG            | D3      | Amarillo    |

#### Software

Aquí tenemos una demostración que muestra como controlar el módulo Grove - Relevador con un Grove - Botón. Cuando el botón sea presionado, el relevador se cerrará y cuando el otro botón sea presionado, este se abrirá.

- **Paso 1.** Abre el IDE Arduino y copia el siguiente código en un nuevo sketch.

```
// Control Relevador

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}

```

- **Paso 2.** Carga la demostración. Si no sabes como subir el código, por favor revisa [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

Subido con éxito, si presionas el botón #1 el relevador deberá encender; si presionas el segundo, el relevador se apagará.

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Relevador al puerto D4, conecta los botones al puerto D2 y D3 del Shield Base.

**Paso 2.** Inserta el Shield Base en tu Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino/Arduino en tu PC via USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega Soporte Arduino, y desplaza un <em>main procedure</em> al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Agrega bloques hasta obtener el siguiente diagrama o abre el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/cc_Relay.png)

Sube el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código finalice de subirse. El relevador se encenderá cuando el botón del puerto D2 sea presionado, y se apagará cuando el del puerto D3 sea presionado de nuevo.

### Jugando conRaspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Materiales a utilizar:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Relevador                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Thumbnail.jpg) |
| [Adquierelo aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                     | [Adquierelo aquí](https://www.seeedstudio.com/Grove-Relay-p-769.html)                                      |

- **Paso 2**. Ensambla el Grove Base Hat en tu Raspberry.
- **Paso 3**. Conecta el Grove - Relevador al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a tu PC utilizando un cable USB.

![](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Relay_Hat.jpg)

¡Nota!
Para el paso 3, puedes conectar el módulo relevador a **cualquier puerto GPIO** solo asegurate de cambiar el comando con su correspondiente número de puerto.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el ambiente de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos y corre el código.

```
cd grove.py/grove
python grove_relay.py 12

```

A continuación se encuentra el código grove_relay.py.

```python

from grove.gpio import GPIO


class GroveRelay(GPIO):
    def __init__(self, pin):
        super(GroveRelay, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveRelay


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    relay = GroveRelay(int(sys.argv[1]))

    while True:
        try:
            relay.on()
            time.sleep(1)
            relay.off()
            time.sleep(1)
        except KeyboardInterrupt:
            relay.off()
            print("exit")
            exit(1)

if __name__ == '__main__':
    main()



```

¡Éxito!
Si todo ha salido bien, serás capáz de ver el LED indicador parpadeando.

Puedes salir del programa simplemente presionando ctrl+c.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

**Materiales Requeridos**

| Raspberry pi                                                                                                      | GrovePi_Plus                                                                                                            | Grove-Botón                                                                                               | Grove-Relevador                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/button_s.jpg) | ![](https://github.com/SeeedDocument/Grove-Relay/raw/master/img/Thumbnail.jpg)                  |
| <a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Adquierelo aquí</a>      | <a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Adquierlo aquí</a>                         | <a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Adquierlo aquí</a>          | <a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">Adquierlo aquí</a> |

- **Paso 1.** Inserta el GrovePi_Plus en tu Raspberry.

- **Paso 2.** Conecta el Grove-Relevador al puerto **D4** del GrovePi_Plus.

- **Paso 3.** Conecta el Grove-Botón al puerto **D3** al GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a tu PC por medio del cable USB.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/GrovePiPlus_Grove_relay.jpeg)

#### Software

Si esta es la primera vez que utilizas el GrovePi, por favor realiza los primeros passos. Si ya estas familiarizado con el GrovePi, puedes saltarte el **Paso 1** y **Paso 2**.

- **Paso 1.** Configurando el Software. En la linea de comando, escribe lo siguiente:

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

Para más detalles al respecto, puedes consultar [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar al último firmware de GrovePi.

!!!Note
We firmly suggest you to update the firmware, or for some sensors you may get errors.

- **Step 3.** Run the following command to get the result.

```
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python grove_switch_relay.py
```

Si quieres revisar el código, puedes usar el siguiente comando:

```
sudo nano grove_switch_relay.py

```

The code :

```python
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND

switch = 3
# Connect the Grove Relay to digital port D4
# SIG,NC,VCC,GND

relay = 4
grovepi.pinMode(switch,"INPUT")
grovepi.pinMode(relay,"OUTPUT")
while True:
    try:
        if grovepi.digitalRead(switch):
            grovepi.digitalWrite(relay,1)
        else:
            grovepi.digitalWrite(relay,0)
            time.sleep(.05)
    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

### Jugando con TI LaunchPad

Controlando otros eléctronicos (Relavador)

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/img/Relay.jpg)

Este ejemplo muestra cómo utilizar el módulo Grove - Relevador para controlar un número de carga más grande, por ejemplo una lámpara de escritorio. Una señal de 3V puede ser activar el relevador, permitiendo a la corriente pasar hacia el dispositivo conectado.

```
/*
Relay
El ejemplo básico de energía.
Este código ejemplo es de uso público.
*/

#define RELAY_PIN 39

// Configura la rutina precionando el botón de reset.
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.
}

//La rutina correrá una y otra vez por siempre:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)
         delay(1000);   // wait for a second
         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW
         delay(1000);   // wait for a second
}
```

## Recursos

- **[Eagle]** [Grove - Relevador Esquemático y PCB, Archivos de EAGLE](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - Relevador PCB en formato PDF](https://github.com/SeeedDocument/Grove-Relay/raw/master/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - Relevador Esquemático en formato PDF](https://github.com/SeeedDocument/Grove-Relay/raw/master/res/Grove%20-%20Relay%20Schematic.pdf)
- **[Datasheet]** [HLS8-T73 Serie Relevador Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/res/Relay_Datasheet.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-Relay/master/res/Grove_Relay_CDC_File.zip)

## Proyectos

<style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />

<table className="tg">
  <tbody><tr>
      <th className="tg-031e"><iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed" width={350} /></th>
      <th className="tg-031e"><iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed" width={350} /></th>
      <th className="tg-yw4l"><iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed" width={350} /></th>
    </tr>
  </tbody></table>


**Relevador Grove módulos**:
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/JOsjUOI9FU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico
Envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>

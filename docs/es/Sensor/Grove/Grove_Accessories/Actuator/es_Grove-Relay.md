---
title: Grove - Relé
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Relay/
slug: /es/Grove-Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---


<!-- <p style=":center"><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" /></p> -->

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

El módulo Grove-Relé es un interruptor digital normalmente abierto. A través de él, puedes controlar circuitos de alto voltaje con bajo voltaje, digamos 5V en el controlador. Hay un LED indicador en la placa, que se encenderá cuando los terminales controlados se cierren.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Parámetro     | V1.1     |V1.2     |
| :------------- | :------------- |:------------- |
| Fecha de Lanzamiento del Producto       | 27 de enero de 2013       |9 de junio de 2014|
|Voltaje de Operación|5V|3.3V~5V|
|Corriente de Operación|60mA|100mA|
|Vida del Relé|100,000 Ciclos|100,000 Ciclos|
|Voltaje Máximo de Conmutación|250VAC/30VDC|250VAC/30VDC|
|Corriente Máxima de Conmutación|5A|5A|

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

#### Materiales requeridos

| Seeeduino V4.2 | Base Shield| Grove-Button **x2** |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" >Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Paso 1.** Conecta Grove-Relay al puerto **D4** del Grove-Base Shield.

- **Paso 2.** Conecta Grove-Button#1 al puerto **D2** del Grove-Base Shield, Conecta Grove-Button#2 al puerto **D3** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable Micro-USB.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

:::note
    Si no tenemos el base shield, también podemos conectar directamente el Grove-Relay y Grove-Button a la placa Arduino. Por favor sigue la conexión de abajo.
:::

| Grove-Relay | Arduino | Cable Grove|
|-------------|---------|-----------|
| GND         | GND     | Negro|
| VCC         | 5V      |Rojo|
| SIG         | D4      |Amarillo|

| Grove-Button#1 | Arduino |Cable Grove|
|----------------|---------|-------|
| GND            | GND     |Negro|
| VCC            | 5V      |Rojo|
| SIG            | D2      |Amarillo|

| Grove-Button#2 | Arduino |Cable Grove|
|----------------|---------|----|
| GND            | GND     |Negro|
| VCC            | 5V      |Rojo|
| SIG            | D3      |Amarillo|

#### Software

Aquí hay una demostración que te muestra cómo controlar un Grove - Relay con un Grove - Button. Cuando se presiona un botón, el relé se cerrará. Cuando se presiona el otro botón, el relé se abrirá.

- **Paso 1.** Abre el Arduino IDE y copia el siguiente código en un nuevo sketch.

```
// Relay Control

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
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}

```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

Una vez terminada la subida, si presionas el botón#1 el relé debería encenderse; y si presionas el botón#2 el relé debería apagarse.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Relay al puerto D4, conecta dos Grove - Button al puerto D2 y puerto D3 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Relay/img/cc_Relay.png)

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse. El relé se encenderá cuando presiones el botón conectado al puerto D2, y se apagará cuando presiones el botón conectado al puerto D3.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - Relay al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay_Hat.jpg)

:::note
    Para el paso 3 puedes conectar el módulo de relé a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
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

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_relay.py 12

```

A continuación se muestra el código de grove_relay.py.

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

:::success
    Si todo va bien, podrás ver el indicador LED parpadeando.
:::
Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

**Materiales requeridos**

| Raspberry pi | GrovePi_Plus| Grove-Button  |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 2.** Conecta el Grove-Relay al puerto **D4** del GrovePi_Plus.

- **Paso 3.** Conecta el Grove-Button al puerto **D3** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC mediante cable USB.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### Software

Si esta es la primera vez que usas GrovePi, por favor realiza esta parte paso a paso. Si ya eres un usuario experimentado con GrovePi, puedes omitir el **Paso1** y el **Paso2**.

- **Paso 1.** Configurando el Software. En la línea de comandos, escribe los siguientes comandos:

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, **no puedes usar esta línea de comandos**.
:::

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

Para más detalles sobre esta parte, consulte [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Paso 2.** Siga [Actualización del Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente de GrovePi.

:::note
    Recomendamos firmemente que actualice el firmware, o para algunos sensores puede obtener errores.
:::

- **Paso 3.** Ejecute el siguiente comando para obtener el resultado.

:::note
     Si está usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, debe usar esta línea de comandos **solo con Python3**.
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python3 grove_switch_relay.py
```

Si quieres revisar el código, puedes usar el siguiente comando:

```
sudo nano grove_switch_relay.py

```

El código:

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

### Jugar con TI LaunchPad

Controlando otros dispositivos electrónicos (Relé)

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

Este ejemplo muestra cómo usar el módulo Grove-relay para controlar cargas más grandes, es decir, una lámpara de escritorio. Una señal de voltaje de 3V puede hacer que el relé se active, permitiendo que la corriente fluya a través del dispositivo conectado.

```
/*
Relay
The basic Energia example.
This example code is in the public domain.
*/

#define RELAY_PIN 39

// the setup routine runs once when you press reset:
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.
}

// the loop routine runs over and over again forever:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)
         delay(1000);   // wait for a second
         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW
         delay(1000);   // wait for a second
}
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Recursos

- **[Eagle]** [Grove - Relay Esquemático y PCB en formato Eagle](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - Relay PCB en formato PDF](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - Relay Esquemático en formato PDF](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
- **[Hoja de Datos]** [Hoja de Datos del Relé Serie HLS8-T73](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove_Relay_CDC_File.zip)

## Proyectos

<table class="tg">
  <tr>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe></th>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed' width='350'></iframe></th>
    <th class="tg-yw4l"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed' width='350'></iframe></th>
  </tr>
</table>

**Módulo relé Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JOsjUOI9FU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

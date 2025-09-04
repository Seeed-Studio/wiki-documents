---
description: Grove Dual Button
title: Grove Dual Button
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Dual-Button
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove Dual Button
category: Grove Inputs
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020103
tags:
--- -->

![](https://files.seeedstudio.com/products/111020103/img/111020103wiki.png)

Grove - Dual Button incluye 2 botones, te permite controlar dos canales de señal con un módulo grove. Con 4 tapas de teclas de diferentes colores proporcionadas, puedes ajustar libremente la combinación de colores según sea necesario.

El botón es simplemente controlado por los Pines Digitales GPIO. Cuando el botón es presionado, los Pines pueden alcanzar una señal LOW desde el botón; por otro lado, cuando está en estado suelto, los Pines siempre obtendrán una señal HIGH hasta que sea presionado.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Características

- Diseño modular compacto y menos conexiones de cables con dos botones en un módulo grove
- Diferentes tapas de teclas de colores proporcionadas, ajusta libremente la combinación de colores según sea necesario.

## Especificaciones

|Elemento|Valor|
|---|---|
|Rango de voltaje|3V–5V|
|Interfaz|Grove|
|Dimensiones|20mm * 40mm|
|Batería|Excluida|

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Comenzando con Arduino

#### Materiales Requeridos

|Seeeduino Nano|Grove Shield para Arduino Nano|Grove Zumbador Pasivo|Grove Paquete de LED|Grove Botón Dual|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|


#### Conexión de Hardware

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

El Grove Botón Dual se conecta con la interfaz "D2" en el shield Grove, el Grove Zumbador Pasivo se conecta con la interfaz "D4" y el Grove Paquete de LED se conecta con la interfaz "D6".

#### Software

- **Paso1** Copia el código de abajo al IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
 //set the corresponding notes with frequency
 #define NOTE_D0 0
 #define NOTE_D1 294
 #define NOTE_D2 330
 #define NOTE_D3 350
 #define NOTE_D4 393
 #define NOTE_D5 441
 #define NOTE_D6 495
 #define NOTE_D7 556
 
 #define NOTE_DL1 147
 #define NOTE_DL2 165
 #define NOTE_DL3 175
 #define NOTE_DL4 196
 #define NOTE_DL5 221
 #define NOTE_DL6 248
 #define NOTE_DL7 278
 
 #define NOTE_DH1 589
 #define NOTE_DH2 661
 #define NOTE_DH3 700
 #define NOTE_DH4 786
 #define NOTE_DH5 882
 #define NOTE_DH6 990
 #define NOTE_DH7 112
 
 #define WHOLE 1
 #define HALF 0.5
 #define QUARTER 0.25
 #define EIGHTH 0.25
 #define SIXTEENTH 0.625
 
 //the note part of the whole song
 int tune[] =
 {
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,
 
   NOTE_D1, NOTE_D1, NOTE_D3,
   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,
   NOTE_D5,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,
   NOTE_D1,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,
   NOTE_D6,
 };
 
 //the duration time of each note
 float duration[] =
 {
   1, 1, 0.5, 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,
   0.5, 1, 0.5, 1, 0.5, 0.5,
   0.5, 0.5, 0.5, 0.5, 1, 1,
 
   1, 1, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1, 1, 0.5, 0.5, 1,
   0.5, 1, 1 + 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1
 };
 
 int length;//define the number of notes
 int tonePin = 4; //set the buzzer Pin
 int button1 = 2; //set the button1 pin
 int button2 = 3; //set the button2 pin
 int LED = 6;  //set the LED pin
 bool state1 = 1; //set button1 state
 bool state2 = 1; //set button2 state
 void setup()
 {
   pinMode(tonePin, OUTPUT); // set the buzzer as output mode
   pinMode(button1,INPUT);
   pinMode(button2,INPUT);
   pinMode(LED,OUTPUT);
   length = sizeof(tune) / sizeof(tune[0]); //count the number of note
 }
 
 void loop()
 {
  state1 = digitalRead(button1);
  state2 = digitalRead(button2);
  if (state1 == 0)
  {
    digitalWrite(LED,HIGH);
    }
  else
  {
    digitalWrite(LED,LOW);
    } 
  if (state2 == 0)
  {
       for (int x = 0; x < length; x++) //"sing" the note one by one
     {
     tone(tonePin, tune[x]); //output the "x" note
     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"
     noTone(tonePin);//stop the current note and go to the next note
    } 
  } 
  else
  {
    digitalWrite(tonePin,LOW);
    }
  
 }
```

- **Paso2** Presiona cada botón para controlar el LED y el Buzzer.

### Comenzando con Raspberry Pi

#### Materiales Requeridos

|Raspberry Pi 4B(4GB)|Grove Base Hat para Raspberry Pi|Grove Buzzer Pasivo|Grove Paquete LED|Grove Botón Dual|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### Conexión de Hardware

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

Conecta el pasivo con el pin PWM "12", botón "D5", LED "D16".

#### Código

- **Paso 1** Instala Grove.py en tu Raspberry.  

Instalación de un clic, inicio rápido, como quieras llamarlo, con el único comando a continuación, podemos instalar/actualizar todas las dependencias y la última versión de grove.py.

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, **no puedes usar esta línea de comandos**.
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip
si todo va bien, verás el siguiente aviso.

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
Además de la instalación con un clic, también puedes instalar todas las dependencias y la última versión de grove.py paso a paso.

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Paso 2** Crea un archivo python para el código.

```
cd grove.py
nano button.py
```

- **Paso 3** Copia el siguiente código al archivo python

```python
#!/usr/bin/env python
import time
from grove.factory import Factory
from grove.grove_led import GroveLed

led = GroveLed(16)
button1 = Factory.getButton("GPIO-HIGH", 5)
button2 = Factory.getButton("GPIO-HIGH", 6)
buzzer = Factory.getGpioWrapper("Buzzer", 12)

while True:
    if button1.is_pressed():
        led.on()
    else:
        led.off()
    if button2.is_pressed():
        buzzer.on() 
    else:
        buzzer.off()           
```

- **Paso 4** Ejecutar el programa

```
sudo chmod +x button.py
sudo ./button.py
```

Si todo va bien, puedes controlar el led y el zumbador mediante el botón dual.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Esquema de hardware](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## Soporte Técnico y Discusión de Productos

<br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

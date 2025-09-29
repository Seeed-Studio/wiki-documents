---
title: Grove - Zumbador Pasivo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Passive-Buzzer/
slug: /es/Grove-Passive-Buzzer
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png)

Este es un zumbador pasivo de 3-5V. Puedes cambiar la frecuencia PWM para obtener diferentes sonidos de pitido y conseguir una "música de zumbador". Además, el zumbador puede configurarse como una alarma para aplicaciones de seguridad. ¡Así que consigue uno y comienza tu propio proyecto!

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Características

- Pasivo: Zumbador pasivo sintonizable
- Interfaz: Grove

## Especificaciones

|Elemento|Valor|
|---|---|
|Rango de voltaje|3V–5V|
|Frecuencia de resonancia|2700 Hz|
|Salida de sonido|> 80dB|
|Temperatura de funcionamiento|-20-70 °C|
|Dimensiones|20mm *20mm* 10mm|
|Peso|3g|
|Batería|Excluida|

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

#### Materiales Requeridos

|Seeeduino XIAO|Grove Breadboard|Grove Passive Buzzer|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|


#### Conexión de Hardware

![](https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg)

La interfaz Grove en la breadboard y en el Grove Passive Buzzer están conectadas por el cable Grove.

#### Software

- **Paso1** Copia el código de abajo al IDE de Arduino y súbelo. Si no sabes cómo actualizar el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Ejemplo de código1 - simplemente obtener el sonido de pitido

```cpp
int buzzer = 5; // Buzzer connect with Pin 5
int frequency = 2700; //reach the Resonant Frequency
int cycle = 1000000/frequency;  
void setup()
{
Serial.begin(9600); // set the baud rate
pinMode(buzzer,OUTPUT); // set buzzer as output
}

void loop() 
{
  digitalWrite(buzzer,HIGH);
  delayMicroseconds(cycle/2);
  digitalWrite(buzzer,LOW);
  delayMicroseconds(cycle/2);  // run the PMW cycle
}
```

- **Paso 2** Después de cargar el código a la placa, escucharás el pitido del zumbador.

#### Ejemplo de código 2 - Usar el zumbador para reproducir música

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
 int buzzer = 5; //set the buzzer Pin
 void setup()
 {
   pinMode(buzzer, OUTPUT); // set the buzzer as output mode
   length = sizeof(tune) / sizeof(tune[0]); //count the number of note
 }
 
 void loop()
 {
    for (int x = 0; x < length; x++) //"sing" the note one by one
    {
     tone(buzzer, tune[x]); //output the "x" note
     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"
     noTone(buzzer);//stop the current note and go to the next note
    } 
    delay(5000);//after playing the whole song, delay for 5 sec
 }    
```

- **Paso 3** Después de subir el código a la placa, puedes escuchar una música desde el zumbador.

### Jugar con Raspberry Pi

#### Materiales Requeridos

|Raspberry Pi 4B(4GB)|Grove Base Hat para Raspberry Pi|Grove Sensor de Movimiento PIR Digital|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener uno ahora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### Conexión de Hardware

![](https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg)

Conecta el Buzzer con "PWM" en el Grove Base Hat.

#### Código de Software

- **Paso 1** Instala Grove.py en tu Raspberry.

Instalación de un clic, inicio rápido, como quieras llamarlo, con el único comando a continuación, podemos instalar/actualizar todas las dependencias y la última versión de grove.py.

:::warning
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, **no puedes usar esta línea de comandos**.
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::success
        si todo va bien, verás el siguiente aviso.

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ``` -
:::

Además de la instalación con un clic, también puedes instalar todas las dependencias y la última versión de grove.py paso a paso.

:::warning
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
nano example.py
```

- **Paso 3** Copia el siguiente código al archivo de python

```
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    CHORDS = [upmBuzzer.BUZZER_DO， upmBuzzer.BUZZER_RE， upmBuzzer.BUZZER_MI， 
        upmBuzzer.BUZZER_FA， upmBuzzer.BUZZER_SOL， upmBuzzer.BUZZER_LA， 
        upmBuzzer.BUZZER_SI]
    for i in range(0， len(CHORDS)):
        buzzer.playSound(CHORDS[i]， 500000)
        time.sleep(0.1)

    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

- **Paso 4** Ejecutar el programa

```
sudo chmod +x example.py
sudo ./example.py
```

Si todo va bien, puedes escuchar "do, re, mi, fa, sol, la, si".

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [MLT_8530_DATASHEET](https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf)
- **[PDF]** [Esquema de hardware](https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf)

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

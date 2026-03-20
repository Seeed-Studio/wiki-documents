---
description: Grove Dual Button
title: Grove Dual Button
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Dual-Button
sku: 111020103
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Dual-Button/
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

Grove - Dual Button inclui 2 botões, permitindo que você controle dois canais de sinal com um único módulo Grove. Com 4 teclas de cores diferentes fornecidas, você pode ajustar livremente a combinação de cores conforme necessário.

O botão é simplesmente acionado pelos pinos digitais GPIO. Quando o botão é pressionado, os pinos recebem um sinal BAIXO vindo do botão; por outro lado, quando ele está em estado solto, os pinos sempre receberão um sinal ALTO até que seja pressionado.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Recursos

- Design modular compacto e menos conexão de fios com dois botões em um único módulo Grove
- Diferentes teclas coloridas fornecidas, ajuste livremente a combinação de cores conforme necessário.

## Especificação

|Item|Valor|
|---|---|
|Faixa de tensão|3V–5V|
|Interface|Grove|
|Dimensões|20mm * 40mm|
|Bateria|Excluída|

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros passos

### Primeiros passos com Arduino

#### Materiais necessários

|Seeeduino Nano|Grove Shield para Arduino Nano|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Adquira agora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### Conexão de hardware

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

O Grove Dual Button se conecta à interface "D2" no Grove shield, o Grove Passive Buzzer se conecta à interface "D4" e o Grove LED Pack se conecta à interface "D6"
interface.

#### Software

- **Passo 1** Copie o código abaixo para o Arduino IDE e faça o upload. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

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

- **Passo 2** Pressione cada botão para controlar o LED e o buzzer.

### Primeiros passos com Raspberry Pi

#### Materiais necessários

|Raspberry Pi 4B(4GB)|Grove Base Hat para Raspberry Pi|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Adquira agora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### Conexão de hardware

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

Conecte o buzzer passivo ao pino PWM "12", o botão ao "D5" e o LED ao "D16".

#### Código

- **Passo 1** Instale o Grove.py no seu Raspberry.  

Instalação com um clique, início rápido, chame como quiser, com o único comando abaixo podemos instalar/atualizar todas as dependências e a versão mais recente do grove.py.

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você **não pode usar esta linha de comando**.
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip
se tudo correr bem, você verá o seguinte aviso.

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
Além da instalação com um clique, você também pode instalar todas as dependências e a versão mais recente do grove.py passo a passo.

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você precisa usar esta linha de comando **apenas com Python3**.
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Passo 2** Crie um arquivo Python para o código.

```
cd grove.py
nano button.py
```

- **Passo 3** Copie o seguinte código para o arquivo Python

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

- **Passo 4** Execute o programa

```
sudo chmod +x button.py
sudo ./button.py
```

Se tudo correr bem, você poderá controlar o LED e o buzzer com o botão duplo.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## Suporte Técnico & Discussão sobre o Produto

<br />
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
title: Grove - Buzzer Passivo
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Passive-Buzzer/
slug: /Grove-Passive-Buzzer
sku: 107020109
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Passive-Buzzer/
---

![](https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png)

Este é um buzzer passivo de 3-5V. Você pode alterar a frequência PMW para obter diferentes sons de bip e criar uma "música de buzzer". Além disso, o buzzer pode ser configurado como um alarme para aplicações de segurança. Então pegue um e comece o seu próprio projeto!

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Recursos

- Passivo: Buzzer passivo ajustável
- Interface: Grove

## Especificações

|Item|Valor|
|---|---|
|Faixa de tensão|3V–5V|
|Frequência de ressonância|2700 Hz|
|Saída de som|> 80dB|
|Temperatura de trabalho|-20-70 °C|
|Dimensões|20mm *20mm* 10mm|
|Peso|3g|
|Bateria|Excluída|

## Plataforma suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

#### Materiais Necessários

|Seeeduino XIAO|Grove Breadboard|Grove Passive Buzzer|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### Conexão de Hardware

![](https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg)

A interface Grove na breadboard e no Grove Passive Buzzer é conectada pelo cabo Grove.

#### Software

- **Passo 1** Copie o código abaixo para a IDE do Arduino e faça o upload. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

#### Exemplo de código 1 - simplesmente obter o som de bip

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

- **Passo 2** Depois de carregar o código na placa, você ouvirá o buzzer apitar.

#### Exemplo de código 2 - Usar o buzzer para tocar música

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

- **Passo 3** Depois de carregar o código na placa, você pode ouvir uma música vinda do buzzer.

### Brincar com Raspberry Pi

#### Materiais Necessários

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### Conexão de Hardware

![](https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg)

Conecte o Buzzer ao "PWM" no Grove Base Hat.

#### Código de Software

- **Passo 1** Instale Grove.py no seu Raspberry.

Instalação com um clique, início rápido, chame como quiser; com o único comando abaixo, podemos instalar/atualizar todas as dependências e a versão mais recente do grove.py.

:::warning
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você **não pode usar esta linha de comando**.
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::success
        Se tudo correr bem, você verá o seguinte aviso.

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ``` -
:::

Além da instalação com um clique, você também pode instalar todas as dependências e a versão mais recente do grove.py passo a passo.

:::warning
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Passo 2** Crie um arquivo python para o código.

```
cd grove.py
nano example.py
```

- **Passo 3** Copie o código a seguir para o arquivo python

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

- **Passo 4** Execute o programa

```
sudo chmod +x example.py
sudo ./example.py
```

Se tudo correr bem, você poderá ouvir "dó, ré, mi, fá, sol, lá, si".

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [MLT_8530_DATASHEET](https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
title: Grove - Buzzer
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Buzzer/
slug: /Grove-Buzzer
sku: 107020000
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Buzzer/
---


![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)

O módulo Grove - Buzzer tem um [buzzer piezo](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric) como componente principal. O piezo pode ser conectado a saídas digitais e emitirá um tom quando a saída estiver em nível ALTO. Como alternativa, ele pode ser conectado a uma saída analógica de modulação por largura de pulso para gerar vários tons e efeitos.

[![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Buzzer V1.0| Inicial                                                                                                                                                                                    | 25 Nov 2010      |
| Grove-Buzzer V1.1 | Adicionado Transistor S9013                                                                                                                                                                                    | 30 Mai 2014      |

## Recursos

- Buzzer piezoelétrico fácil de usar
- Usa cabos Grove padrão de 4 pinos para se conectar a outros módulos Grove, como Grove Power Modules e Grove - Base Shield

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Itens              | Especificação |
|--------------------|---------------|
| Tensão de Operação  | 3.3V/5V       |
| Saída de Som       | ≥85dB         |
| Frequência de Ressonância | 2300±300Hz    |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Passo 2.** Conecte o Grove-Buzzer à porta D6 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/seeeduino_buzzer.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove-buzzer diretamente ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove-Buzzer |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não Conectado | Branco                   |
| D6            | Amarelo                  |

#### Software

- Passo 1. Copie o código para a IDE do Arduino e faça o upload.

```c
void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(1000);
  digitalWrite(6, LOW);
  delay(1000);
}
```

- Passo 2. Iremos ouvir o buzzer ligando e desligando.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - Buzzer à porta D6 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta for a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/cc_Buzzer.png)

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o envio do código terminar, você ouvirá o som do buzzer intermitentemente.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove -  Buzzer|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry Pi.
- **Passo 3**. Conecte o Grove Buzzer à porta PWM do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, terá que usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento e instale o grove.py no seu Raspberry Pi.

- **Passo 2**. Execute o comando abaixo para rodar o código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
# enter commmand
grove_pwm_buzzer
```

A seguir está o código grove_pwm_buzzer.py.

```python
from __future__ import print_function

import time
import RPi.GPIO as GPIO

def main():
    from grove.helper import helper
    # helper.root_check()

    print("Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]")
    # Grove Base Hat for Raspberry Pi
    pin = 12
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    # create PWM instance
    pwm = GPIO.PWM(pin, 10)
    pwm.start(0) 

    chords = [1047, 1175, 1319, 1397, 1568, 1760, 1976]
    # Play sound (DO, RE, MI, etc.), pausing for 0.5 seconds between notes
    try:
        for note in chords:
            pwm.ChangeFrequency(note)
            pwm.ChangeDutyCycle(95)
            time.sleep(0.5) 
    finally:
        pwm.stop()
        GPIO.cleanup()

    print("Exiting application")

if __name__ == '__main__':
    main()
```

:::success
    Se tudo correr bem, o buzzer tocará algumas vezes e depois parará, o programa será encerrado automaticamente.
 :::

Você pode sair deste programa simplesmente pressionando **ctrl+c**.

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Buzzer à porta D8 do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/rasp_buzzer.jpg)

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Faça o git clone do repositório Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo.

```
cd ~/GrovePi/Software/Python
python3 grove_buzzer.py
```

Aqui está o código grove_buzzer.py.

```python
import time
import grovepi

# Connect the Grove Buzzer to digital port D8
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # Buzz for 1 second
        grovepi.digitalWrite(buzzer,1)
        print ('start')
        time.sleep(1)

        # Stop buzzing for 1 second and repeat
        grovepi.digitalWrite(buzzer,0)
        print ('stop')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("Error")
```

- Passo 4. Nós iremos ouvir o buzzer ligando e desligando.

```
(env)pi@raspberrypi:~ grove_pwm_buzzer
start
stop
start
stop
```

### Brincar com TI LaunchPad

#### Hardware

- Este exemplo mostra como usar o módulo Grove buzzer para tocar melodias. Ele envia uma onda quadrada com a frequência apropriada para o buzzer, gerando o tom correspondente.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Buzzer.jpg)

#### Software

```c
/*
  Buzzer
 The example use a buzzer to play melodies. It sends a square wave of the
 appropriate frequency to the buzzer, generating the corresponding tone.

 The circuit:
 * Buzzer attached to pin39 (J14 plug on Grove Base BoosterPack)
 * one side pin (either one) to ground
 * the other side pin to VCC
 * LED anode (long leg) attached to RED_LED
 * LED cathode (short leg) attached to ground

 * Note:
 This example code is in the public domain.

 https://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* Macro Define */
#define BUZZER_PIN               39            /* sig pin of the buzzer */

int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* set buzzer pin as output */
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop()
{
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

/* play tone */
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

# Grove - Arquivos de Esquemático do Buzzer v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Arquivos de Esquemático do Buzzer v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Grove - Arquivos de Esquemático do Buzzer v1.1](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Grove - Arquivos de Esquemático do Buzzer v1.0](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[DataSheet]** [S9013datasheet](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/S9013.pdf)
- **[Mais Leitura]** [Wooden Laser Gun](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Buzzer/res/Grove_Buzzer_CDC_File.zip)

![](https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg)

Inspirados em OVERWATCH, fizemos nestes dias um brinquedo muito legal de Pistola Laser de Madeira para nos divertir!

A Pistola Laser de Madeira e o Alvo da Pistola são todos baseados em uma placa Arduino chamada Seeeduino Lotus. O emissor de laser na Pistola Laser é controlado para disparar pulsos de laser para "ativar" o Alvo da Pistola. E há 3 sensores de luz no Alvo da Pistola para detectar o pulso de laser. Parece bem simples, certo? Se você estiver interessado em nosso projeto, por favor faça um para você ou para seu filho! Vale a pena gastar um dia fazendo este DIY como um presente de Natal.

## Projetos

**Grove - Introdução em um Buzzer**: Meus primeiros passos com os componentes Grove "plug & play". Este é principalmente um Buzzer.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**Water Waste Monitor**: Milhões de galões de água são desperdiçados todos os anos. Aprenda a conservar água com este projeto!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**Módulo Buzzer Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

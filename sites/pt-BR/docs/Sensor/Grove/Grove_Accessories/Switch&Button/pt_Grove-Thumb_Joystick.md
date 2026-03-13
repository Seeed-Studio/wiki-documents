---
description: Grove - Thumb Joystick
title: Grove - Thumb Joystick
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Thumb_Joystick
sku: 101020028
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Thumb_Joystick/
---
<!-- ---
name: Grove - Thumb Joystick
category: Sensor
bzurl: https://seeedstudio.com/Grove-Thumb-Joystick-p-935.html
oldwikiname: Grove_-_Thumb_Joystick
prodimagename: Bgjoy1.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/bgjoy1.jpg
surveyurl: https://www.research.net/r/Grove-Thumb_Joystick
sku: 101020028
tags: grove_analog, io_3v3, io_5v, plat_duino,plat_pi
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg)

Grove - Thumb Joystick é um módulo compatível com Grove, muito semelhante ao joystick 'analógico' dos controles do PS2 (PlayStation 2). Os eixos X e Y são dois potenciômetros de ~10k que controlam o movimento 2D gerando sinais analógicos. O joystick também possui um botão que pode ser usado para aplicações especiais. Quando o módulo está em modo de operação, ele gera dois valores analógicos, representando duas direções. Em comparação com um joystick normal, seus valores de saída são restritos a um intervalo menor (ou seja, 200~800); somente quando é pressionado o valor de X será definido como 1023 e o MCU poderá detectar a ação de pressionar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border={0} /></a></p>

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Grove - Thumb Joystick V1.1 | Inicial                                                                                                                                                                                    | Out 2016           |

## Especificações

| Item                                | Mín  | Típico | Máx  | Unidade |
|-------------------------------------|------|--------|------|---------|
| Tensão de Trabalho                  | 4.75 | 5.0    | 5.25 | V       |
| Valor Analógico de Saída (coordenada X) | 206  | 516    | 798  | \       |
| Valor Analógico de Saída (coordenada Y) | 203  | 507    | 797  | \       |

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

O Grove - Thumb Joystick é um dispositivo analógico que gera um sinal analógico variando de 0 a 1023. Isso exige que usemos a porta analógica do Arduino para fazer as leituras.

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **Passo 2.** Conecte o módulo às portas `A0`/`A1` do Grove - Base Shield usando o cabo Grove de 4 pinos.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumb_Joystick.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar o Grove-Thumb Joystick diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Thumb Joystick |
|-----------------|-------------------------|
| 5V              | Vermelho                |
| GND             | Preto                   |
| `A1`            | Branco                  |
| `A0`            | Amarelo                 |

#### Software

- **Passo 1.** Copie e cole o código abaixo em um novo sketch do Arduino.

```c
/*
  Thumb Joystick demo v1.0
  by:https://www.seeedstudio.com
  connect the module to A0&A1 for using;
*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

- **Passo 2.** Você pode verificar os valores dos sinais analógicos de saída abrindo o Serial Monitor.

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumd_Joystick_Result.jpg)

O valor de saída da porta analógica do Arduino pode ser convertido para a resistência correspondente usando a fórmula: R=(float)(1023-sensorValue)\*10/sensorValue.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Thumb Joystick à porta `A0` de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/cc_Thumb_Joystick.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, você verá as coordenadas de X e Y exibidas no Serial Monitor.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Thumb Joystick à porta `A0` do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Thumb_Hat.jpg)

:::note
No passo 3 você pode conectar o thumb joystick a **qualquer porta Analógica**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_thumb_joystick.py 0

```

:::note
você pode executar o programa com ++python grove_thumb_joystick.py pin++, onde pin pode ser um dentre {0, 2, 4, 6} no grupo ADC e conecte o dispositivo ao slot correspondente {`A0`, `A2`, `A4`, `A6`}.
:::

A seguir está o código grove_thumb_joystick.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveThumbJoystick:

    def __init__(self, channelX, channelY):
        self.channelX = channelX
        self.channelY = channelY
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channelX), self.adc.read(self.channelY)

Grove = GroveThumbJoystick


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveThumbJoystick(int(pin), int(pin + 1))

    while True:
        x, y = sensor.value
        if x > 900:
            print('Joystick Pressed')
        print("X, Y = {0} {1}".format(x, y))
        time.sleep(.2)

if __name__ == '__main__':
    main()


```

:::tip
Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_thumb_joystick.py 0
Hat Name = 'Grove Base Hat RPi'
X, Y = 506 484
X, Y = 484 484
X, Y = 506 484
X, Y = 506 487
Joystick Pressed
X, Y = 999 485
X, Y = 310 736
X, Y = 681 484
Joystick Pressed
X, Y = 999 277
Joystick Pressed
X, Y = 999 487
X, Y = 506 484
X, Y = 501 486
X, Y = 509 484
X, Y = 511 486
X, Y = 510 485
^CTraceback (most recent call last):
  File "grove_thumb_joystick.py", line 69, in <module>
    main()
  File "grove_thumb_joystick.py", line 66, in main
    time.sleep(.2)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
Você pode ter notado que, para a porta analógica, o número do pino na serigrafia é algo como **`A1`, `A0`**, porém no comando usamos o parâmetro **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário, pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Thumb Joystick ranger à porta **`A0`** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Pi_Joystick%20connection.jpg)

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você terá que usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/

```

- **Passo 2.**  Para ver o código

```
nano grove_thumb_joystick.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Thumb Joystick to analog port A0

# GrovePi Port A0 uses Arduino pins 0 and 1
# GrovePi Port A1 uses Arduino pins 1 and 2
# Don't plug anything into port A1 that uses pin 1
# Most Grove sensors only use 3 of their 4 pins, which is why the GrovePi shares Arduino pins between adjacent ports
# If the sensor has a pin definition SIG,NC,VCC,GND, the second (white) pin is not connected to anything

# If you wish to connect two joysticks, use ports A0 and A2 (skip A1)

# Uses two pins - one for the X axis and one for the Y axis
# This configuration means you are using port A0
xPin = 0
yPin = 1
grovepi.pinMode(xPin,"INPUT")
grovepi.pinMode(yPin,"INPUT")

# The Grove Thumb Joystick is an analog device that outputs analog signal ranging from 0 to 1023
# The X and Y axes are two ~10k potentiometers and a momentary push button which shorts the x axis

# My joystick produces slightly different results to the specifications found on the url above
# I've listed both here:

# Specifications
#     Min  Typ  Max  Click
#  X  206  516  798  1023
#  Y  203  507  797

# My Joystick
#     Min  Typ  Max  Click
#  X  253  513  766  1020-1023
#  Y  250  505  769
while True:
    try:
        # Get X/Y coordinates
        x = grovepi.analogRead(xPin)
        y = grovepi.analogRead(yPin)

        # Calculate X/Y resistance
        Rx = (float)(1023 - x) * 10 / x
        Ry = (float)(1023 - y) * 10 / y

        # Was a click detected on the X axis?
        click = 1 if x >= 1020 else 0

        print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Passo 3.** Execute a demonstração.

```
sudo python3 grove_thumb_joystick.py
```

- **Passo 4.** Veremos a saída exibida no terminal como abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/pi_result.png)|

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---------

- **[Eagle]** [Esquemático do Grove-Thumb Joystick](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip)
- **[Datasheet]** [Datasheet do Joystick Analógico](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Analog_Joystick_Datasheet.jpg)
- **[PDF]** [Arquivo PDF do Esquemático do Joystick](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Joystick.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Grove_Thumb_Joystick_CDC_File.zip)

## Projetos

**Servidor de música com Raspberry pi**: Um primeiro passo para projeto com Raspberry Pi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

**Construa um Controle Personalizado de Minecraft**: Construa um Controle Personalizado de Minecraft com o GrovePi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dexterindustries/build-a-custom-minecraft-controller-d55d9c/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

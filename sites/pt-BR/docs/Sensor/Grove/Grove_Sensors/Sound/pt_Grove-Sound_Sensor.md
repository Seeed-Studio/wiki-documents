---
title: Grove - Sensor de Som
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor/
slug: /Grove-Sound_Sensor
sku: 101020023
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor/
---

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)

O Grove - Sound Sensor pode detectar a intensidade do som do ambiente. O principal componente do módulo é um microfone simples, que é baseado no amplificador L358 e em um microfone de eletreto. A saída deste módulo é analógica e pode ser facilmente amostrada e testada por um Seeeduino.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="{200}" height="{38}" border="{0}" /></a></p>

## Recursos

* Fácil de usar
* Fornece sinal de saída analógica
* Integra-se facilmente com módulos lógicos no lado de entrada dos circuitos Grove

:::warning
    Este sensor de som é usado para detectar se há som ao redor ou não, por favor não use o módulo para coletar sinal de áudio. Por exemplo, você pode usá-lo para fazer uma lâmpada com controle por som, mas não como um dispositivo de gravação.
:::

## Especificações

|Item|Valor|
|-----|------|
|Faixa de Tensão de Operação| 5 V |
|Corrente de Operação(Vcc=5V)|4~5 mA|
|Ganho de Tensão(V=6V, f=1kHz)|26 dB|
|Sensibilidade do Microfone(1kHz)|-60~-56dBV/Pa|
|Impedância do Microfone|2,2k Ohm|
|Frequência do Microfone|16-20 kHz|
|Relação S/N do Microfone|54 dB|

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

**Hardware**

* **Passo 1.** Prepare os itens abaixo:

|Seeeduino V4.2| Base Shield|Grove-Sound Sensor|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **Passo 2.** Conecte o Grove-Sound Sensor à porta **A0** do Grove-Base Shield.
* **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
* **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/1_connect.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Sound Sensor ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| A1            | Branco                  |
| A0            | Amarelo                 |

**Software**

* **Passo 1.** Copie o código abaixo para o Arduio IDE e envie para o Arduino. Se você não sabe como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
// test code for Grove - Sound Sensor
// loovee @ 2016-8-30

const int pinAdc = A0;

void setup()
{
    Serial.begin(115200);
    //Serial.println("Grove - Sound Sensor Test...");
}

void loop()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    Serial.println(sum);
    delay(10);
}

```

* **Passo 2.** Clique em **Serial > Plotter** para obter a curva de variação do sensor. Por favor, faça algum barulho para ver a mudança do valor.

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/sound_raw.png)

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Sound Sensor à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/cc_Sound_Sensor.png)

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o envio do código terminar, você verá o valor do som exibido no Serial Monitor.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

* **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Sound Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
* **Passo 3**. Conecte o Grove - Sound Sensor à porta A0 do Base Hat.
* **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/Sound_Hat.jpg)

:::note
    No passo 3 você pode conectar o sensor de som a **qualquer Porta Analógica**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

* **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
* **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_sound_sensor.py 0

```

A seguir está o código grove_sound_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSoundSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def sound(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveSoundSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSoundSensor(int(sys.argv[1]))

    print('Detecting sound...')
    while True:
        print('Sound value: {0}'.format(sensor.sound))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0 
Detecting sound...
Sound value: 499
Sound value: 525
Sound value: 529
Sound value: 493
Sound value: 457
Sound value: 457
Sound value: 503
Sound value: 537
Sound value: 606
Sound value: 614
Sound value: 661
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
        Você pode ter notado que, para a porta analógica, a numeração de pinos na serigrafia é algo como **A1, A0**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique‑se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

**Hardware**

* **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus|Grove-Sound Sensor|Grove-Blue LED|
|--------------|-------------|-----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/groveblue%20led.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[Adquira agora](https://www.seeedstudio.com/Grove---Blue-LED-p-1139.html)|

* **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.

* **Passo 3.** Conecte o Grove-Sound Sensor à porta **A0** do GrovePi_Plus e conecte o Grove-Blue LED à porta **D5** do GrovePi_Plus

* **Passo 4.** Conecte o Raspberry ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/2_connect.jpg)

**Software**

* **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

* **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

:::tip
    Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa garantir que o Passo 2 e o Passo 3 usem o mesmo caminho.
:::

:::note
    Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você pode obter erros.
:::

* **Passo 3.** Dê git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* **Passo 4.** Navegue até o diretório de demos:

```
cd yourpath/GrovePi/Software/Python/
```

Aqui está o código do grove_sound_sensor.py.

```python

#!/usr/bin/env python
#
# GrovePi Example for using the Grove Sound Sensor and the Grove LED
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Modules:
#  https://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor
#  https://www.seeedstudio.com/wiki/Grove_-_LED_Socket_Kit
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import time
import grovepi

# Connect the Grove Sound Sensor to analog port A0
# SIG,NC,VCC,GND
sound_sensor = 0

# Connect the Grove LED to digital port D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(sound_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

# The threshold to turn the led on 400.00 * 5 / 1024 = 1.95v
threshold_value = 400

while True:
    try:
        # Read the sound level
        sensor_value = grovepi.analogRead(sound_sensor)

        # If loud, illuminate LED, otherwise dim
        if sensor_value > threshold_value:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* **Passo 5.** Execute a demonstração.

```
sudo python3 grove_sound_sensor.py
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [**Eagle**][Esquemático e PCB em formato Eagle](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip)
* [**PDF**][Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf)
* [**PDF**][PCB em formato PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf)
* [**Datasheet**][LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM358.pdf)
* [**Codecraft**][Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove_Sound_Sensor_CDC_File.zip)

## Projetos

**Crie um sensor IoT Wi‑Fi multitarefa**: Este tutorial mostra como fazer um sensor conectado à internet, aproveitando os recursos exclusivos de multitarefa do Energia & TI LaunchPad.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adrianf/create-a-multi-tasking-iot-wi-fi-sensor-9d7fdf/embed' width='350'></iframe>

**Medidor de Som com LED usando Wio-Link e Node-Red**: Sensor de som Grove da SeeedStudio e tira de LED conectados ao Wio-Link sendo controlados por um fluxo Node-Red.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

**Módulo Grove sensor de som**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/N19VfMYyn60" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NfFlz8KEFxw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores de umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

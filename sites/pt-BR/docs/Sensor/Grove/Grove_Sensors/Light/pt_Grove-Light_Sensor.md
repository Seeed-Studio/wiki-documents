---
description: Grove - Light Sensor
title: Grove - Light Sensor
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Light_Sensor
sku: 101020132, 101020173, 101020022, 101020014, 114993647
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Light_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg" /></div>

O Grove - Light Sensor integra um fotoresistor (resistor dependente de luz) para detectar a intensidade da luz. A resistência do fotoresistor diminui quando a intensidade da luz aumenta. Um chip dual OpAmp LM358 na placa produz uma tensão correspondente à intensidade da luz (isto é, com base no valor da resistência). O sinal de saída é um valor analógico; quanto mais forte a luz, maior o valor.

Este módulo pode ser usado para construir um interruptor controlado por luz, ou seja, desligar as luzes durante o dia e ligar as luzes durante a noite.

:::caution
O valor do sensor de luz apenas reflete a tendência aproximada da intensidade da luz, ele NÃO representa o Lúmen exato.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x oferecem uma experiência pronta para uso para detecção ambiental. Consulte o Sensor Sem Fio de Intensidade de Luz S2102 com desempenho e robustez superiores para detecção de intensidade luminosa. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a>
      </td>
    </tr>
  </tbody>
</table>

## Versão

| Versão do Produto              | Alterações                                                            | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------|---------------|
| Grove - Light Sensor 1.0     | Inicial                                                            | 28 Abr 2013   |
| Grove - Light Sensor(P)      | Mover o conector Grove para o lado de trás                                  | 15 Mai 2014   |
| Grove - Light Sensor(P) V1.1 | Substituir photoresistor-5528 por LS06-S vs. Grove - Light Sensor(P)  | 31 Dez 2015   |
| Grove - Light Sensor 1.2     | Substituir photoresistor-5528 por LS06-S vs. Grove - Light Sensor 1.0 | 20 Jan 2016   |

## Recursos

* Saída de valor analógico
* Alta confiabilidade e sensibilidade
* Pequena dimensão

* Reconhece espectro mais amplo

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

### Suporte de Plataforma

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

## Especificação

|Item|Valor|
|-----|--------|
|Tensão de operação|3~5V|
|Corrente de operação| 0,5~3 mA|
|Tempo de resposta|20-30 milissegundos|
|Comprimento de onda de pico|540 nm|
|Peso|4 g|

## Primeiros Passos

### Brincar com Arduino

#### Hardware

* Passo 1. Prepare os itens abaixo:

| Seeeduino V4 | Base Shield |Grove - Light Sensor | Grove - LED Bar |
|--------------|----------------------|-----------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Adquira agora](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html)|

* Passo 2. Conecte o Grove-Light Sensor à porta A0 do Grove-Base Shield.
* Passo 3. Conecte o Grove-Led Bar à porta D2 do Grove-Base Shield.
* Passo 4. Conecte o Grove - Base Shield ao Seeeduino.
* Passo 5. Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/seeeduino_light.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Light Sensor ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove-Light Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não Conectado | Branco                   |
| A0            | Amarelo                  |

| Seeeduino       | Grove-Led Bar |
|---------------|-------------------------|
| 5V            | Vermelho                     |
| GND           | Preto                   |
| D3            | Branco                   |
| D2            | Amarelo                  |

#### Software

* Passo 1. Baixe a [Grove-LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar/archive/master.zip) do Github.
* Passo 2. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Seeeduino.
* Passo 3. Copie o código para a IDE do Seeeduino e faça o upload.

```c

#include <Grove_LED_Bar.h>

Grove_LED_Bar bar(3, 2, 0);  // Clock pin, Data pin, Orientation

void setup()
{
  // nothing to initialize
  bar.begin();
  bar.setGreenToRed(true);
}

void loop()
{

  int value = analogRead(A0);
  value = map(value, 0, 800, 0, 10);

  bar.setLevel(value);
  delay(100);
}
```

* Passo 2. A barra de LED mudará com base na luz.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Light Sensor à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta for a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/cc_Light_Sensor.png" /></div>

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, você verá o valor de brilho exibido no Monitor Serial.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

* **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Light Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|
|[Adquira AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|

* **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
* **Passo 3**. Conecte o sensor de luz à porta A0 do Base Hat.
* **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/Light_Hat.jpg" /></div>

:::note
No passo 3 você pode conectar o sensor de luz a **qualquer porta Analógica**, mas certifique-se de alterar o comando com o número da porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

* **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
* **Passo 2**. Baixe o arquivo fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_light_sensor_v1_2.py 0

```

A seguir está o código grove_light_sensor_v1_2.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLightSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def light(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveLightSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLightSensor(int(sys.argv[1]))

    print('Detecting light...')
    while True:
        print('Light value: {0}'.format(sensor.light))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

:::tip
Se tudo correr bem, você conseguirá ver o seguinte resultado correspondente à luz ambiente
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_light_sensor_v1_2.py 0
Detecting light...
Light value: 600
Light value: 448
Light value: 267
Light value: 311
Light value: 102
Light value: 82
Light value: 63
Light value: 54
Light value: 49
Light value: 45
Light value: 545
^CTraceback (most recent call last):
  File "grove_light_sensor_v1_2.py", line 67, in <module>
    main()
  File "grove_light_sensor_v1_2.py", line 64, in main
    time.sleep(1)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
Você pode ter notado que, para a porta analógica, a numeração serigrafada do pino é algo como **A1, A0**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo à porta correta, caso contrário pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

* Passo 1. Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - Light Sensor | Grove - Red LED |
|--------------|-------------|-----------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[Adquira Agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira Agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira Agora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Adquira Agora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

* Passo 2. Conecte o GrovePi_Plus ao Raspberry.
* Passo 3. Conecte o Grove-light sensor à porta A0 do GrovePi_Plus.
* Passo 4. Conecte o Grove-Red Led à porta D4 do GrovePi_Plus.
* Passo 5. Conecte o Raspberry ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/rasp_light.jpg" /></div>

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

* Passo 1. Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
* Passo 2. Dê um git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* Passo 3. Execute os comandos abaixo.

```
cd ~/GrovePi/Software/Python
python3 grove_light_sensor.py
```

Aqui está o código grove_light_sensor.py.

```python
import time
import grovepi

# Connect the Grove Light Sensor to analog port A0
# SIG,NC,VCC,GND
light_sensor = 0

# Connect the LED to digital port D4
# SIG,NC,VCC,GND
led = 4

# Turn on LED once sensor exceeds threshold resistance
threshold = 10

grovepi.pinMode(light_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(light_sensor)

        # Calculate resistance of sensor in K
        resistance = (float)(1023 - sensor_value) * 10 / sensor_value

        if resistance > threshold:
            # Send HIGH to switch on LED
            grovepi.digitalWrite(led,1)
        else:
            # Send LOW to switch off LED
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d resistance = %.2f" %(sensor_value,  resistance))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* Passo 4. O LED acenderá quando o sensor de luz for coberto.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_light_sensor.py
sensor_value = 754 resistance = 3.57
sensor_value = 754 resistance = 3.57
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 313 resistance = 22.68
sensor_value = 155 resistance = 56.00
sensor_value = 753 resistance = 3.59
```

# Arquivo Eagle para Grove - Light Sensor V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Arquivo Eagle para Grove - Light Sensor(P) V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Arquivo Eagle para Grove - Light Sensor(P) V1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/Grove_Light_Sensor_CDC_File.zip)
* **[Eagle&PDF]** [Arquivo Eagle para Grove - Light Sensor V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip)
* **[Eagle&PDF]**  [Arquivo Eagle para Grove - Light Sensor(P) V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
* **[Eagle&PDF]**  [Arquivo Eagle para Grove - Light Sensor(P) V1.1](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
* **[Datasheet]** [Informações de Referência LS06-MΦ5](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf)
* **[Datasheet]**  [LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf)
* **[More Reading]** Caixa Secreta

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png" /></div>

Aqui mostraremos um projeto feito com Grove - Light Sensor - Secret Box. Primeiro você precisa de uma caixa: caixa de papelão, caixa de madeira, qualquer caixa serve. Coloque algo dentro da caixa; como a chamamos de caixa secreta, isso significa que não queremos que ninguém a abra, caso contrário haverá um alarme para avisá-lo.

Aqui usamos o LinkIt ONE como controlador, que é uma placa compatível com Arduino e consiste em funções ricas. E você precisa dos itens abaixo:

* [LinkIt ONE](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html)
* Grove - Light Sensor
* Grove - Base Shield
* Um cartão SIM

Vamos conectar o Grove - Light Sensor à A0 do Base Shield e abrir a Arduino IDE, copiar o código abaixo e enviar o exemplo para o LinkIt ONE. Então, quando alguém abrir a caixa, a luz irá detectá-la e enviar um SMS para você.

```c
// demo of Grove Starter kit for LinkIt ONE
// Secret box

#include <LGSM.h>

char num[20] = "13425171053";           // your number write here
char text[100] = "Warning: Your box had been opened!!";    // what do you want to send


const int pinLight = A0;                // light sensor connect to A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // until put in box
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // box is open
    {
        Serial.println("box had been opened");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM ready for work!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS is sent");
        }
        else
        {
            Serial.println("SMS send fail");
        }

        while(!isLightInBox());             // until put in box
        delay(2000);
    }

    delay(10);
}
```

Divirta-se.

## Projetos

**Grove - Introdução a um Sensor de Luz**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**The Environment Cube! Know the Land Beneath You using Sigfox**: Um cubo com todos os sensores necessários, adequado para uma ampla gama de aplicações como agricultura, monitoramento, etc.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**Módulo Grove de sensor de luz**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GOROc2f5Xkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


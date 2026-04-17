---
description: Grove - Sensor de Chama
title: Grove - Sensor de Chama
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Flame_Sensor
sku: 101020049
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Flame_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg" /></div>

O Grove - Sensor de Chama pode ser usado para detectar fonte de fogo ou outras fontes de luz com comprimento de onda na faixa de 760 nm - 1100 nm. Ele é baseado no sensor YG1006, que é um fototransistor de silício NPN de alta velocidade e alta sensibilidade. Devido à sua resina epóxi preta, o sensor é sensível à radiação infravermelha. Em competições de robôs de combate a incêndio, o sensor desempenha um papel muito importante e pode ser usado como os olhos do robô para encontrar a fonte de fogo.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Recursos

- Interface Grove
- Alta fotosensibilidade
- Tempo de resposta rápido
- Fácil de usar
- Sensibilidade ajustável

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.30
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente
</th>
<td>
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de largura de banda espectral
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de detecção
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
Tempo de resposta
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de operação
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros passos

O módulo é usado principalmente para detectar luz infravermelha. Ele gera sinais digitais 0 e 1 através de uma saída de comparador. O valor de saída será 0 quando a luz infravermelha for detectada. E a sensibilidade é ajustável pelo potenciômetro de precisão.

### Brincar com Arduino

O módulo é usado principalmente para detectar luz infravermelha. Ele gera sinais digitais 0 e 1 através de uma saída de comparador. O valor de saída será 0 quando a luz infravermelha for detectada. E a sensibilidade é ajustável pelo potenciômetro de precisão.

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove-Flame_Sensor |Grove - Red LED|
|--------------|-------------|-----------------|-----|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|[Adquira agora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **Passo 2.** Conecte o Grove-Flame_Sensor à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Red LED à porta **D3** do Grove-Base Shield.
- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 5.** Conecte o Seeeduino ao PC através de um cabo USB.

<!--link-->
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       |  Grove-Flame_Sensor  |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

| Seeeduino       |  Grove - Red LED |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D3            | Yellow                  |

#### Software

**Passo 1.** Copie o código e grave-o na placa controladora.

Aqui está o código

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 //connect SENSOR to digital pin2
#define LED 3 //connect Grove - LED to pin3

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

**Passo 2.** O LED acenderá quando houver luz infravermelha.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Flame Sensor à porta D2 e conecte um Grove - Red LED à porta D3 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png" /></div>

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, o LED acenderá quando o Sensor de Chama detectar fogo.
:::

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove-Flame_Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Flame_Sensor à porta **D2** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg" /></div>

#### Software

- **Passo 1.** Siga o [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Faça o git clone do repositório do Github.

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo para usar este sensor

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

Aqui está o código de exemplo:

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Flame Sensor (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
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

# Connect the Grove Flame Sensor to digital port D2
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

## Referência

O sensor pode detectar a fonte de luz cujo comprimento de onda está na faixa de 760nm - 1100 nm. A imagem abaixo mostra a sensibilidade espectral.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg" /></div>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Arquivo Eagle do Grove - Flame Sensor](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[Library]** [Repositório Github para a biblioteca Grove_Flame_Sensor](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[Datasheet]** [Folha de dados do LM293D](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip)

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode transformar facilmente o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria embutida de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

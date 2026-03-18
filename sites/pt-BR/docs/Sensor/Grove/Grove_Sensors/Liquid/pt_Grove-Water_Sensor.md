---
description: Grove - Sensor de Água
title: Grove - Sensor de Água
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Water_Sensor
sku: 101020018
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Water_Sensor/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png" alt="pir" width={600} height="auto" /></p>


O módulo Water Sensor faz parte do sistema Grove. Ele indica se o sensor está seco, úmido ou completamente imerso em água medindo a condutividade. As trilhas do sensor possuem um resistor pull‑up fraco de 1 MΩ. O resistor puxará o valor da trilha do sensor para alto até que uma gota de água feche curto a trilha do sensor com a trilha aterrada. Acredite ou não, este circuito funcionará com os pinos de E/S digitais do seu Arduino ou você pode usá‑lo com os pinos analógicos para detectar a quantidade de contato induzido por água entre as trilhas aterrada e do sensor.


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Water Sensor V1.1 | Inicial                                                                                                                                                                                    | Julho de 2014      |


## Recursos


- Interface compatível com Grove
- Baixo consumo de energia
- Módulo Grove de 2,0 cm x 2,0 cm
- Alta sensibilidade

## Ideias de Aplicações

- Detecção de chuva
- Vazamento de líquido
- Detector de transbordamento de tanque

## Especificações

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de Trabalho
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Trabalho
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Umidade de Trabalho (sem condensação)
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Plataformas Suportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja Getting Started with Arduino antes de começar.
:::
### Brincar com Arduino

#### Hardware

Conecte o módulo à placa básica usando qualquer um dos pinos digitais. Você pode obter o valor do pino de sinal. Quando houver água nos fios condutores expostos, o valor será LOW. Caso contrário, será HIGH.

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **Passo 2.** Conecte o Water Sensor à porta D2 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC via um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Se não tivermos o Grove Base Shield, também podemos conectar o Grove_Water_Sensor diretamente ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove - Water Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Not Conencted | Branco                   |
| D2            | Amarelo                  |

#### Software
- **Passo 1.** Copie o código para o Arduino IDE e faça o upload. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```
- **Passo 2.** Veremos a saída exibida no terminal como abaixo.

```c
1
1
0
0
1
1
```

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Water Sensor à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png" alt="pir" width={600} height="auto" /></p>

Carregue o programa no seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser carregado, você verá se há água ou não no Monitor Serial.
:::
### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry Pi.
- **Passo 3**. Conecte o Grove - Water Sensor à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3.** Execute o comando abaixo para rodar o código.

```
cd grove.py/grove
python grove_water_sensor.py 0
```


A seguir está o código grove_water_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()


```


:::success
    Se tudo correr bem, você poderá ver o seguinte resultado
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (most recent call last):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value        
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt


```

Você pode usar este sensor para detectar água. Pressione ++ctrl+c++ para sair.


:::note
        Você pode ter notado que, para a porta analógica, o número do pino na serigrafia é algo como **A1, A0**, porém, no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|


- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Water Sensor à porta **D2** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg" alt="pir" width={600} height="auto" /></p>


#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Navegue até o diretório de demos:

```
cd yourpath/GrovePi/Software/Python/
```

-	**Passo 3.** Para ver o código

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Connect the Grove Water Sensor to digital port D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

-	**Passo 4.** Execute a demonstração.

```
sudo python grove_water_sensor.py
```

- **Passo 5.** Veremos a saída exibida no terminal como abaixo.

```
1
1
0
0
1
```


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[Eagle]** [Esquemático do Grove Water Sensor](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip)
- **[Library]** [Código de demonstração para o Grove Water Sensor](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://wiki.seeedstudio.com/pt-br/Grove-Water_Sensor/ -->

## Projeto 

**Smart Crops: Implementing IoT in Conventional Agriculture!**: Nossa missão com a natureza é preservá-la, projetando e implementando tecnologias e métodos de monitoramento com a ajuda de IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
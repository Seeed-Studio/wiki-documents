---
description: Grove - Potenciômetro Deslizante
title: Grove - Potenciômetro Deslizante
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Slide_Potentiometer
sku: 101020036
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Slide_Potentiometer/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG" alt="pir" width={600} height="auto" /></p>

O módulo Grove - Slide Potentiometer incorpora um resistor variável linear com resistência máxima de 10KΩ. Quando você move o cursor de um lado para o outro, sua tensão de saída irá variar de 0 V até o Vcc que você aplicar. Ele se conecta a outros módulos Grove através de um **Cabo Grove** padrão de 4 pinos. Três dos pinos são conectados a OUT (Pino 1), Vcc (Pino 3) e GND (Pino 4), enquanto o quarto pino (Pino 2) é conectado a um LED indicador verde on-board. O LED é usado para representar visualmente a mudança de resistência no potenciômetro.


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)
Features
--------

-   Comprimento de curso deslizante de 30 mm
-   Curva de resistência linear
-   Compatível com Grove

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Application Ideas
-----------------

Aqui estão alguns projetos para sua referência.

| **Arduino BoomBox**                                                  | **Arduino BeatBox**                                                    |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg" alt="pir" width={600} height="auto" /></p>  |
| [Faça AGORA!](https://community.seeedstudio.com/project_detail.html?id=171)       | [Faça AGORA!](https://community.seeedstudio.com/project_detail.html?id=187)         |



Specifications
--------------

<table border="2" cellspacing="0" width="60%">
<tr>
<th scope="col">
Item
</th>
<th>
Min
</th>
<th>
Typical
</th>
<th>
Max
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage (DC)
</th>
<td>
3.3V
</td>
<td>
5.0V
</td>
<td>
30V
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td>
-
</td>
<td>
-
</td>
<td>
30mA
</td>
</tr>
<tr align="center">
<th scope="row">
Dimension
</th>
<td colspan="3">
24mm x60mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Net Weight
</th>
<td colspan="3">
8.6g
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Rotational life
</th>
<td colspan="3">
&gt;15,000 cycles
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Total resistance
</th>
<td colspan="3">
10KΩ
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Stroke length
</th>
<td colspan="3">
30mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Total resistance tolerance
</th>
<td colspan="3">
+/- 20%
</td>
</tr>
</table>


Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Getting Started
---------------

#### Como um Resistor Ajustável

Como mostrado abaixo, o Grove - Slide Potentiometer pode ser usado como um simples potenciômetro deslizante em qualquer projeto independente ou controlado por MCU.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG" alt="pir" width={600} height="auto" /></p>

### Standalone

Siga estas etapas para montar um circuito Grove de exemplo usando este módulo, mas sem utilizar nenhuma placa microcontroladora:

1.  Conecte o módulo de potenciômetro deslizante ao lado de entrada do seu circuito (à esquerda do módulo de alimentação). No lado de saída do circuito, você pode usar uma variedade de módulos de Interface de Usuário (Grove - Red LED, Grove - LED String Light, Grove - Mini Fan, Grove - Buzzer, Grove - Recorder etc.)
2.  Alimente o circuito quando estiver completo.
3.  O módulo de potenciômetro deslizante agora pode ser usado para acionar uma saída. Por exemplo:

    -   Quando usado em conjunto com um módulo de saída Grove - Red LED, observe que o brilho do LED aumenta à medida que você move o cursor de GND para Vcc. Em Vcc, a resistência do potenciômetro é mínima e o LED brilha com máxima intensidade. O mesmo comportamento pode ser visto quando o potenciômetro deslizante é usado com o módulo Grove - LED String Light - quanto mais tensão você aplica levando o cursor em direção à marca Vcc, mais brilhantes se tornam as luzes de LED.
    -   Da mesma forma, você pode usar o potenciômetro deslizante para variar a velocidade do seu Grove - Mini Fan ou a frequência com que o módulo Grove - Buzzer soa
    -   O potenciômetro deslizante também pode ser usado como uma chave LIGA/DESLIGA para qualquer circuito. Leve o cursor até a posição Vcc para ligá-lo e mova-o para baixo até GND para desligar um circuito.

Em termos de escolha de um módulo de alimentação, você pode usar o módulo Grove - USB Power ou o módulo Grove - DC Jack Power para construir circuitos Grove independentes.

<!-- 链接有问题### With [Arduino](/pt-br/Arduino "Arduino") -->

#### Como um Divisor de Tensão

Siga estes passos simples para fazer o módulo de potenciômetro deslizante funcionar como um divisor de tensão:

<!-- 链接有问题1.When using the module in conjunction with an [Arduino](/pt-br/Arduino "Arduino") or a [Seeeduino](/pt-br/Seeeduino_v4.2 "Seeeduino"), use the Grove - Base Shield and connect the Grove - Slide Potentiometer module to the shield using a designated Grove Interface (e.g. Analog Port 0 as shown below). -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG" alt="pir" width={600} height="auto" /></p>

2.Connect the board to PC using USB cable.

3.Upload the following sample sketch.

```
int adcPin = A0; // select the input pin for the potentiometer
int ledPin = A1; // select the pin for the LED
int adcIn = 0;   // variable to store the value coming from the sensor
void setup()
{
    Serial.begin(9600); // init serial to 9600b/s
    pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT
    Serial.println("Sliding Potentiometer Test Code!!");
}
void loop()
{
    // read the value from the sensor:
    adcIn = analogRead(adcPin);
    if(adcIn >= 500) digitalWrite(ledPin,HIGH);  // if adc in > 500, led light
    else digitalWrite(ledPin, LOW);
    Serial.println(adcIn);
    delay(100);
}
```

4.Open the serial monitor. You should see some data from ADC.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg" alt="pir" width={600} height="auto" /></p>

5.Move the lever back and forth. The serial data will change correspondingly. When the output resistance exceeds a certain preset value, the on-board indicator LED will also light up.

#### Como um Dispositivo HID

O Slide Potentiometer pode ser um dispositivo de interface humana (HID) eficaz e pode ser usado, por exemplo, no controle de rádio de um carrinho de brinquedo controlado por rádio. A figura abaixo mostra dois Slide Potentiometers no painel de controle - um para controlar a velocidade da roda esquerda e o outro para controlar a velocidade da roda direita do carrinho de brinquedo, respectivamente. Agora você pode alterar as velocidades de ambos os motores e observar o comportamento. Você verá que, se fizer a roda direita girar mais rápido que a esquerda, o carro irá virar para a direita, e se fizer a roda esquerda girar mais rápido que a direita, o carro irá virar para a esquerda.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG" alt="pir" width={600} height="auto" /></p>

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Slide Potentiometer à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, consulte também o [Guia para usar Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos conforme a imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png" alt="pir" width={600} height="auto" /></p>

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser enviado, deslize o Slide Potentiometer e você verá o valor do sensor exibido no Serial Monitor. E se você deslizar além da metade do Potentiometer, o LED nele acenderá. 
:::
### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Slide Potentiometer |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_small.JPG" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|



- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Slide Potentiometer à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    No passo 3 você pode conectar o slide potentiometer a **qualquer porta Analógica**, mas certifique-se de alterar o comando com o número da porta correspondente.
:::

#### Software

:::note
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
python3 grove_slide_potentiometer.py 0
```

A seguir está o código grove_slide_potentiometer.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSlidePotentiometer(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveSlidePotentiometer


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSlidePotentiometer(int(sys.argv[1]))

    while True:
        print('Slide potentiometer value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::success
    Se tudo correr bem, você conseguirá ver o seguinte resultado
:::   
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_slide_potentiometer.py 0
Slide potentiometer value: 987
Slide potentiometer value: 988
Slide potentiometer value: 986
Slide potentiometer value: 8
Slide potentiometer value: 2
Slide potentiometer value: 0
Slide potentiometer value: 1
Slide potentiometer value: 0
Slide potentiometer value: 24
Slide potentiometer value: 0
Slide potentiometer value: 0
Slide potentiometer value: 11
Slide potentiometer value: 995
Slide potentiometer value: 999
Slide potentiometer value: 999
^CTraceback (most recent call last):
  File "grove_slide_potentiometer.py", line 66, in <module>
    main()
  File "grove_slide_potentiometer.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt

```


Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
        Você deve ter notado que, para a porta analógica, o número de pino na serigrafia é algo como **A0, A1**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::


### Brincar com Raspberry Pi (com GrovePi_Plus)
:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

1.Você deve ter um raspberry pi e um grovepi ou grovepi+.

<!-- 链接有问题2.You should have completed configuring the development enviroment, otherwise follow [here](/pt-br/GrovePi_Plus). -->

3.Conexão

-   Conecte o sensor ao soquete A0 do grovepi usando um cabo grove.

4.Navegue até o diretório de demonstrações:

```
    cd yourpath/GrovePi/Software/Python/
```

-   Para ver o código

```
    nano grove_slide_potentiometer.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Slide Potentiometer to analog port A0
# OUT,LED,VCC,GND
slide = 0   # pin 1 (yellow wire)

# The device has an onboard LED accessible as pin 2 on port A0
# OUT,LED,VCC,GND
led = 1     # pin 2 (white wire)

grovepi.pinMode(slide,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(slide)

        # Illuminate onboard LED
        if sensor_value > 500:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print "sensor_value =", sensor_value

    except IOError:
        print "Error"
```

5.Execute a demonstração.
```
sudo python3 grove_slide_potentiometer.py
```


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Recursos
---------

-   [Arquivo Eagle do Sliding Potentiometer](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar)
-   [Sliding Potentiometer em PDF](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf)
-   [Datasheet do Sliding Potentiometer](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf)
-   [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Grove_Slide_Potentiometer_CDC_File.zip)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Slide_Potentiometer -->

## Projetos

**Raspberry pi music server**: Um primeiro passo para projeto com Raspberry Pi

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

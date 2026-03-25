---
title: Grove - Sensor Ultrassônico
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Ultrasonic_Ranger/
slug: /Grove-Ultrasonic_Ranger
sku: 101020010
last_update:
  date: 03/01/2023
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Ultrasonic_Ranger/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/V2.jpg" alt="pir" width={600} height="auto" /></p>

Este Grove - Sensor Ultrassônico é um módulo de medição de distância sem contato que funciona a 40KHz. Quando fornecemos um sinal de disparo em pulso com mais de 10uS através do pino de sinal, o Grove_Ultrasonic_Ranger emitirá 8 ciclos de nível de ciclo de 40kHz e detectará o eco. A largura de pulso do sinal de eco é proporcional à distância medida. Aqui está a fórmula: Distância = tempo em nível alto do sinal de eco * velocidade do som (340M/S)/2. O sinal de disparo e de eco do Grove_Ultrasonic_Ranger compartilham um único pino SIG.

:::warning
 Não conecte ou desconecte o Grove-Ultrasonic-Ranger com o sistema energizado, caso contrário o sensor será danificado. A área medida não deve ser inferior a 0,5 metros quadrados e deve ser lisa.
:::
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Grove-Ultrasonic ranger V1.0 | Inicial                                                                                                                                                                                    | Mar 2012           |
| Grove-Ultrasonic ranger V2.0 | Melhora a estabilidade de energia com placa principal de baixa tensão com as seguintes mudanças: 1. Adicionado um capacitor C14 2. Layout redesenhado para deixá-lo mais organizado 3. Compatível com sistema de tensão de 3,3V | Julho 2017         |

## Especificação

|Parâmetro| Valor/Faixa|
|:------|:------------------|
|Tensão de operação| 3,2~5,2V|
|Corrente de operação| 8mA|
|Frequência ultrassônica| 40kHz|
|Faixa de medição| 2-350cm|
|Resolução| 1cm|
|Saída|PWM|
|Tamanho|50mm X 25mm X 16mm|
|Peso|13g|
|Ângulo de medição|15 graus|
|Temperatura de trabalho|-10~60 graus C|
|Sinal de disparo|10uS TTL|
|Sinal de eco|TTL|

:::tip
    Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::note
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos firmemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Passo 2.** Conecte o Ultrasonic Ranger à porta D7 do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/arduino%20connection.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove_Ultrasonic_Ranger diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| Não Conectado | Branco                  |
| D7            | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [Biblioteca UltrasonicRanger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip) no Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload. Se você não sabe como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);
void setup()
{
 Serial.begin(9600);
}
void loop()
{
 long RangeInInches;
 long RangeInCentimeters;

 Serial.println("The distance to obstacles in front is: ");
 RangeInInches = ultrasonic.MeasureInInches();
 Serial.print(RangeInInches);//0~157 inches
 Serial.println(" inch");
 delay(250);

 RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
 Serial.print(RangeInCentimeters);//0~400cm
 Serial.println(" cm");
 delay(250);
}
```

- **Passo 4.** Veremos a distância exibida no terminal como abaixo.

```sh
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
```

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Ultrasonic Ranger à porta D7 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/cc_Ultrasonic_Ranger.png)

Faça o upload do programa para o seu Arduino/Seeeduino.

:::success
    Quando o envio do código terminar, você verá a distância exibida no Serial Monitor.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens utilizados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.

- **Passo 3**. Conecte o Grove - Ultrasonic Ranger à porta D5 do Base Hat.

- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

:::note
    No passo 3 você pode conectar o sensor ultrassônico a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.

- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```sh
cd grove.py/grove
python3 grove_ultrasonic_ranger.py 5 6
```

A seguir está o código grove_ultrasonic_ranger.py.

```python
import sys
import time
from grove.gpio import GPIO

usleep = lambda x: time.sleep(x / 1000000.0)

_TIMEOUT1 = 1000
_TIMEOUT2 = 10000

class GroveUltrasonicRanger(object):
    def __init__(self, pin):
        self.dio =GPIO(pin)

    def _get_distance(self):
        self.dio.dir(GPIO.OUT)
        self.dio.write(0)
        usleep(2)
        self.dio.write(1)
        usleep(10)
        self.dio.write(0)

        self.dio.dir(GPIO.IN)

        t0 = time.time()
        count = 0
        while count < _TIMEOUT1:
            if self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT1:
            return None

        t1 = time.time()
        count = 0
        while count < _TIMEOUT2:
            if not self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT2:
            return None

        t2 = time.time()

        dt = int((t1 - t0) * 1000000)
        if dt > 530:
            return None

        distance = ((t2 - t1) * 1000000 / 29 / 2)    # cm

        return distance

    def get_distance(self):
        while True:
            dist = self._get_distance()
            if dist:
                return dist

Grove = GroveUltrasonicRanger

def main():
    if len(sys.argv) < 2:
        print('Usage: {} pin_number'.format(sys.argv[0]))
        sys.exit(1)

    sonar = GroveUltrasonicRanger(int(sys.argv[1]))

    print('Detecting distance...')
    while True:
        print('{} cm'.format(sonar.get_distance()))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::success
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ultrasonic_ranger.py 5 6
Detecting distance...
121.757901948 cm
246.894770655 cm
2.60205104433 cm
0.205533257846 cm
0.657706425108 cm
247.433267791 cm
122.485489681 cm
^CTraceback (most recent call last):
  File "grove_ultrasonic_ranger.py", line 110, in <module>
    main()
  File "grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt
```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 3.** Conecte o Grove-Ultrasonic Ranger à porta **D4** do GrovePi_Plus.

- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/pi%20connection.jpg)

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, deverá usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Faça o git clone do repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo para usar o ultrasonic_ranger para medir a distância.

```
cd ~/GrovePi/Software/Python
python3 grove_ultrasonic.py
```

Aqui está o código grove_ultrasonic.py.

```python
# GrovePi + Grove Ultrasonic Ranger

from grovepi import *

# Connect the Grove Ultrasonic Ranger to digital port D4
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # Read distance value from Ultrasonic
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "Error"
    except IOError:
        print "Error"
```

- **Passo 4.** Veremos a distância exibida no terminal como abaixo.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_ultrasonic.py
9
9
9
9
9
9
9
9
9
9
9
```

### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Wio Terminal | Grove - Ultrasonic Ranger |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Passo 2.** Conecte o Grove - Ultrasonic Ranger à porta **D0** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC através de um cabo USB Tipo-C.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/with-WT.jpg)

#### Software

- **Passo 1.** Siga [**ArduPy Getting Started**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy contenha a biblioteca ArduPy do Ultrasonic Ranger usando os seguintes comandos. Para mais informações, siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-ultrasonic.py`:

```python
from arduino import grove_ultra_ranger
from machine import LCD
from machine import Sprite
import time

Ultrasonic = grove_ultra_ranger(0)
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.RED)
        spr.drawString("Ultrasonic Sensor", 55, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Centimeters: ", 20, 50)
        spr.drawString("- Inches: ", 20, 80)
        spr.drawNumber(Ultrasonic.cm, 200,50)
        time.sleep_ms(50) # Needed for data to be read again
        spr.drawNumber(Ultrasonic.inch, 130,80)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("The distance to obstacles in front is:", Ultrasonic.cm, 'centimeter')
        print("The distance to obstacles in front is:", Ultrasonic.inch, 'inches')

if __name__ == "__main__":
    main()
```

- **Passo 4.** Salve o `ArduPy-ultrasonic.py` em um local que você conheça. Execute o seguinte comando e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-ultrasonic.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
```

- **Passo 5.** Veremos a distância exibida no terminal como abaixo, e também exibida na tela LCD do Wio Terminal.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The distance to obstacles in front is: 3 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 4 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
```

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/WT-ur.jpg)

## FAQs

**P1: Como o sensor Grove-Ultrasonic funciona?**

- R1: Quando fornecemos um sinal de gatilho de pulso com mais de 10uS através do pino de sinal, o Grove_Ultrasonic_Ranger emitirá 8 ciclos de nível de ciclo de 40kHz e detectará o eco. A largura de pulso do sinal de eco é proporcional à distância medida. Aqui está a fórmula: Distância = tempo em nível alto do sinal de eco * velocidade do som (340M/S)/2.

**P2: Por que o sensor Grove-Ultrasonic tem apenas 1 pino de sinal, comparado com outros sensores ultrassônicos com pinos Trig e Echo?**

- R2: O trig e o sinal de eco do Grove_Ultrasonic_Ranger compartilham 1 pino SIG através do MCU.  

**P3: Podemos conectar vários sensores ultrassônicos a um Arduino?**

- R4: Sim, aqui está o exemplo, um sensor está conectado ao D2 e o outro ao D3.

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic1(2);
Ultrasonic ultrasonic2(3);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    long RangeInCentimeters1;
    long RangeInCentimeters2;

    RangeInCentimeters1 = ultrasonic1.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters1);//0~400cm
    Serial.println(" cm");

    RangeInCentimeters2 = ultrasonic2.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters2);//0~400cm
    Serial.println(" cm");

    delay(250);
}
```

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Esquemático do Grove_Ultrasonic Ranger](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [Sensor Ultrassônico Cerâmico NU40C16T/R-1](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/NU40C16T-R-1.pdf)
- **[Library]** [Biblioteca Grove_Ultrasonic Ranger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[Project]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[Project]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[Project]** [Automatic Water Level Controller](https://community.seeedstudio.com/project_detail.html?id=241)
- **[Example]** [Example_Measure_distance_and_led_display](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_distance_and_led_display.zip)
- **[Example]** [Example_Measure_and_display_the_distance](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_and_display_the_distance.zip)

## Projeto

**Hackeando as Escadas no Novo Escritório da Seeed**: Transforme as escadas do escritório em uma instalação interativa, e até mesmo em uma forma legal de transmitir a mensagem "STAFF ONLY" aos visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Grove - Sensor de Ângulo Rotativo
title: Grove - Sensor de Ângulo Rotativo
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Rotary_Angle_Sensor
sku: 101020048, 101020017
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Rotary_Angle_Sensor/
---



![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rotary.jpg)

O sensor de ângulo rotativo produz saída analógica entre 0 e Vcc (5 V CC com o Seeeduino) em seu conector D1. O conector D2 não é usado. A faixa angular é de 300 graus com uma variação linear de valor. O valor de resistência é de 10 k ohms, perfeito para uso com Arduino. Isso também pode ser conhecido como um “potenciômetro”.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

Há outro produto, Grove - Rotary Angle Sensor(P). O que significa “P”? “P” é de “panel mount” neste produto. É a versão irmã do Grove - Rotary Angle Sensor. Eles são idênticos, exceto que o conector Grove é movido para a parte de trás, para que você possa usá-lo facilmente como um dispositivo de interface humana organizado e sem fios.

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Grove-Rotary_Angle_Sensor-P-.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/GroveRotaryP_02.jpg" />
      </td>
    </tr>
  </tbody></table>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/grove-rotary-angle-sensorp-p-1242.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versão

| Versão do Produto                 | Alterações                           | Data de Lançamento |
|-----------------------------------|--------------------------------------|--------------------|
|Grove-Rotary Angle Sensor(P) V1.1  | Inicial                              | Jan 2013    |
|Grove-Rotary Angle Sensor V1.2     | Inicial                              | Mai 2014    |

## Características

- Interface Grove
- Fácil de usar
- Módulo base Grove

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

|Item|Mín|Típico|Máx|Unidade|
|----|----|----|----|----|
|Tensão|4.75|5.0|5.25|VCC|
|Ângulo rotativo|0|/|300|Graus|
|Dimensão|/|19x19x30.1|/|mm|

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever a própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

**Hardware**

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove-Rotary Angle Sensor |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[Get One Now](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **Passo 2.** Conecte o Grove-Rotary Angle Sensor à porta **A0** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove-LED à porta **D3** do Grove-Base Shield.
- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 5.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/seeeduino_rotary.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Rotary Angle Sensor e o Grove-LED ao Seeeduino, como abaixo. O Grove-LED deve ser conectado à porta PWM. Para o Seeeduino, elas são D3,5,6,9,10,11.
:::

| Seeeduino | Grove-Rotary Angle Sensor | Seeeduino | Grove-LED |
|-----------|---------------------------|-----------|-----------|
| 5V        | Red                       | 5V        | Red       |
| GND       | Black                     | GND       | Black     |
| NC        | White                     | NC        | White     |
| A0        | Yellow                    | D3        | Yellow    |

**Software**

- **Passo 1.** Copie o código abaixo para a IDE do Arduio e faça o upload para o Arduino. Se você não sabe como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
/*macro definitions of Rotary angle sensor and LED pin*/

#define ROTARY_ANGLE_SENSOR A0
#define LED 3  //the Grove - LED is connected to PWM pin D3 of Arduino
#define ADC_REF 5 //reference voltage of ADC is 5v.If the Vcc switch on the seeeduino
                    //board switches to 3V3, the ADC_REF should be 3.3
#define GROVE_VCC 5 //VCC of the grove interface is normally 5v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

void setup()
{
    Serial.begin(9600);
    pinMode(ROTARY_ANGLE_SENSOR, INPUT);
    pinMode(LED,OUTPUT);   
}

void loop()
{   
    float voltage;
    int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
    voltage = (float)sensor_value*ADC_REF/1023;
    float degrees = (voltage*FULL_ANGLE)/GROVE_VCC;
    Serial.println("The angle between the mark and the starting position:");
    Serial.println(degrees);

    int brightness;
    brightness = map(degrees, 0, FULL_ANGLE, 0, 255);
    analogWrite(LED,brightness);
    delay(500);
}

```

- **Passo 2.** Ajuste o Grove-Rotary Angle Sensor e veremos o Grove-LED mudar o brilho.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Rotary Angle Sensor à porta A0 e conecte um Grove - Red LED à porta D3 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/cc_Rotary_Angle_Sensor.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, o brilho do LED irá variar dependendo do ângulo do sensor, e o valor do ângulo será exibido no Serial Monitor.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o sensor rotativo à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Rotary_Hat.jpg)

:::note
No passo 3 você pode conectar o sensor de ângulo rotativo a **qualquer porta Analógica**, mas certifique-se de alterar o comando com o número de porta correspondente.
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
python3 grove_rotary_angle_sensor.py 0

```

A seguir está o código grove_rotary_angle_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveRotaryAngleSensor(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveRotaryAngleSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveRotaryAngleSensor(int(sys.argv[1]))

    while True:
        print('Rotary Value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::tip
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_rotary_angle_sensor.py 0
Rotary Value: 932
Rotary Value: 931
Rotary Value: 931
Rotary Value: 931
Rotary Value: 933
Rotary Value: 931
Rotary Value: 742
Rotary Value: 666
Rotary Value: 666
Rotary Value: 549
Rotary Value: 520
Rotary Value: 499
Rotary Value: 430
Rotary Value: 430
Rotary Value: 321
Rotary Value: 286
Rotary Value: 205
Rotary Value: 127
Rotary Value: 88
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
^CTraceback (most recent call last):
  File "grove_rotary_angle_sensor.py", line 66, in <module>
    main()
  File "grove_rotary_angle_sensor.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt


```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
Você pode ter notado que, para a porta analógica, a numeração dos pinos na serigrafia é algo como **A0, A1**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

**Hardware**

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus |  Grove-Rotary Angle Sensor |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[Get One Now](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Rotary Angle Sensor à porta **A0** do GrovePi_Plus.
- **Passo 4.** Conecte o Grove-LED à porta **D5** do GrovePi_Plus.
- **Passo 5.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rpi_rotary.jpg)

**Software**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Dê um git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo para monitorar o nível de ruído.

```python
cd ~/GrovePi/Software/Python
python3 grove_rotary_angle_sensor.py
```

Aqui está o código grove_rotary_angle_sensor.py.

```python
import time
import grovepi

# Connect the Grove Rotary Angle Sensor to analog port A0
# SIG,NC,VCC,GND
potentiometer = 0

# Connect the LED to digital port D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# Reference voltage of ADC is 5v
adc_ref = 5

# Vcc of the grove interface is normally 5v
grove_vcc = 5

# Full value of the rotary angle is 300 degrees, as per it's specs (0 to 300)
full_angle = 300

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(potentiometer)

        # Calculate voltage
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # Calculate rotation in degrees (0 to 300)
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # Calculate LED brightess (0 to 255) from degrees (0 to 300)
        brightness = int(degrees / full_angle * 255)

        # Give PWM output to LED
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- **Passo 4.** Ajuste o Grove-Rotary Angle Sensor e veremos o Grove-LED mudar o brilho.

### Brincar com TI LaunchPad

**Lendo o Potenciômetro (Rotary Angle Sensor)**

Este exemplo mostra como ler a saída analógica vinda do módulo potenciômetro Grove. Vamos combinar alguns módulos Grove neste exemplo! Ao girar o botão do potenciômetro, exibiremos o valor de leitura analógica no display digital de 4 dígitos Grove.

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Angle_sensor.jpg)

```
/*
    Rotary Angle Sensor
    Demonstrates analog input by reading an analog sensor on J16 of the Grove Base BoosterPack. The speed of the red LED on the LaunchPad will change depending on the position of the potentiometer knob. This example will also display the analog reading value on the Grove 4-digital display.

    The circuit:
    * Potentiometer attached to pin 24 (J6 on Grove Base BoosterPack)
    * center pin of the potentiometer to the analog pin
    * one side pin (either one) to ground
    * the other side pin to VCC (3.3V)

    * Note: Because of unstable of the voltage, the value of the rotary angle sensor
            varies slightly from run to run even you don't touch it.  

    Created by Oliver Wang

    This example code is in the public domain.

    https://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_v1.1b#Grove_-_Rotary_Angle_Sensor
    */

#include "TM1637.h"

/* Macro Define */
#define CLK               39                  /* 4-digital display clock pin */
#define DIO               38                /* 4-digital display data pin */
#define ROTARY_ANGLE_P    24               /* pin of rotary angle sensor */

/* Global Variables */
TM1637 tm1637(CLK, DIO);                  /* 4-digital display object */
int analog_value = 0;                     /* variable to store the value coming from rotary angle sensor */

int8_t bits[4] = {0};                     /* array to store the single bits of the value */

/* the setup() method runs once, when the sketch starts */
void setup() {

    /* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);

}

/* the loop() method runs over and over again */
void loop() {   

    analog_value = analogRead(ROTARY_ANGLE_P);      /* read the value from the sensor */
    memset(bits, 0, 4);                             /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
        /* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;  
        tm1637.display(i, bits[i]);                 /* display by 4-digital display */
    }
    delay(100);
}
```

# Grove - Rotary Angle Sensor(P) v1.1 Arquivo de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Rotary Angle Sensor v1.2 Arquivo de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Grove-Rotary Angle Sensor v1.2 Arquivo de Esquemático](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip)
- **[Eagle&PDF]** [Grove - Rotary Angle Sensor(P) v1.1 Arquivo de Esquemático](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip)
- **[Library]** [Repositório Github para Rotary Angle Sensor](https://github.com/Seeed-Studio/Grove_Rotary_Angle_Sensor)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove_Rotary_Angle_Sensor_CDC_File.zip)

## Projetos

**Usando o Grove-Rotary Angle Sensor(P) para Controlar o Grove LED**: Usando Arduino/Genuino 101 para controlar o brilho de um LED através do Grove-Rotary Angle Sensor(P).

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-rotary-angle-sensor-p-to-control-grove-led-725e32/embed' width='350'></iframe>

**Módulo Grove de Ângulo Rotativo**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/31RaX7JGv5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xx7hMoFQohY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Grove - Sensor de Temperatura V1.2
title: Grove - Sensor de Temperatura V1.2
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Temperature_Sensor_V1.2
sku: 101020015
last_update:
  date: 1/3/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Sensor_V1.2/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View.jpg" /></div>

O Grove - Sensor de Temperatura usa um [Termistor](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) para detectar a temperatura ambiente. A resistência de um termistor irá aumentar quando a temperatura ambiente diminuir. É essa característica que usamos para calcular a temperatura ambiente. A faixa detectável deste sensor é de -40 a 125 ºC, e a precisão é de ±1,5 ºC

Nota: Este wiki também funciona com Grove - Sensor de Temperatura V1.1, para V1.0 consulte [Grove - Temperature Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Sensor)

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp &amp; Umidade do Ar</strong></a></td>
    </tr>
  </tbody>
</table>

## Especificações

---

- Tensão: 3,3 ~ 5 V
- Resistência em zero potência: 100 KΩ
- Tolerância de resistência: ±1%
- Faixa de temperatura de operação: -40 ~ +125 ℃
- Constante B nominal: 4250 ~ 4299K

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

-------------------

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

## Primeiros Passos

---
Após esta seção, você poderá fazer o Grove - Sensor de Temperatura V1.1/1.2 funcionar com apenas alguns passos.

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Sensor de Temperatura |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Adquira Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira Agora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Passo 2.** Conecte o Grove - Sensor de Temperatura à porta **A0** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC via um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_Arduino.jpg" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove_Ultrasonic_Ranger ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Sensor de Temperatura |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não Conectado | Branco                   |
| A0            | Amarelo                  |

#### Software

- **Passo 1.** Abra a Arduino IDE e clique em **File>New** para abrir uma nova página. Copie o código a seguir para a nova página e faça o upload. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
// Demo code for Grove - Temperature Sensor V1.1/1.2
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275000;            // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0

#if defined(ARDUINO_ARCH_AVR)
#define debug  Serial
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
#define debug  SerialUSB
#else
#define debug  Serial
#endif

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

**Passo 2.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá a temperatura.

O resultado deverá ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_result.jpg" /></div>

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Temperatura |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Adquira AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o sensor de temperatura à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Temperature_Hat.jpg" /></div>

:::note
No passo 3 você pode conectar o sensor de temperatura a **qualquer Porta analógica**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
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
python3 grove_temperature_sensor.py 0
```

A seguir está o código grove_temperature_sensor.py.

```python
import sys
import time
from grove.factory import Factory


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = Factory.getTemper("NTC-ADC", pin)

    print('Detecting temperature...')
    while True:
        print('{} Celsius'.format(sensor.temperature))
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::tip
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_temperature_sensor.py 0
Hat Name = 'Grove Base Hat RPi'
Detecting temperature...
24.7473402633 Celsius
24.7473402633 Celsius
24.7473402633 Celsius
24.7112751977 Celsius
24.7112751977 Celsius
^CTraceback (most recent call last):
  File "grove_temperature_sensor.py", line 53, in <module>
    main()
  File "grove_temperature_sensor.py", line 49, in main
    time.sleep(1)
KeyboardInterrupt
```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
Você deve ter notado que, para a porta analógica, o número do pino serigrafado é algo como **A1, A0**, porém no comando usamos o parâmetro **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário poderá haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 3.** Conecte o Grove - Temperature Sensor à porta **A0** do GrovePi_Plus.

- **Passo 4.** Conecte o Raspberry ao PC via cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_pi.jpg" /></div>

#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::tip
Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa garantir que o Passo 2 e o Passo 3 usem o mesmo caminho.

:::note
Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você poderá obter erros.
:::

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 3.** Faça o git clone do repositório Github.

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **Passo 4.** Execute os comandos abaixo para usar o Grove - Temperature Sensor para medir a temperatura.

```sh
cd ~/GrovePi/Software/Python
sudo python3 grove_temperature_sensor.py
```

Aqui está o código grove_temperature_sensor.py.

```python
# NOTE:
#  The sensor uses a thermistor to detect ambient temperature.
#  The resistance of a thermistor will increase when the ambient temperature decreases.
#
#  There are 3 revisions 1.0, 1.1 and 1.2, each using a different model thermistor.
#  Each thermistor datasheet specifies a unique Nominal B-Constant which is used in the calculation forumla.
#
#  The second argument in the grovepi.temp() method defines which board version you have connected.
#  Defaults to '1.0'. eg.
#   temp = grovepi.temp(sensor)        # B value = 3975
#   temp = grovepi.temp(sensor,'1.1')  # B value = 4250
#   temp = grovepi.temp(sensor,'1.2')  # B value = 4250

import time
import grovepi

# Connect the Grove Temperature Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        temp = grovepi.temp(sensor,'1.2')
        print("temp =", temp)
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")

```

O resultado deve ser semelhante a:

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_temperature_sensor.py

('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.28652137917777)
('temp =', 25.368489566400115)
('temp =', 25.61468397498203)
('temp =', 27.43501590142614)
('temp =', 27.85285590636829)
('temp =', 27.18509952680688)
('temp =', 26.852756540240193)

```

### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Wio Terminal | Grove - Temperature Sensor |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.htmll)|

- **Passo 2.** Conecte o Grove - Temperature Sensor à porta **A0** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC através de um cabo USB Tipo-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/WT-temp.png" /></div>

#### Software

- **Passo 1.** Siga [**ArduPy Getting Started**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy está gravado no Wio Terminal. Para mais informações, por favor siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-temp.py`:

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time, math

raw = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff
B = 4275 # B value of the thermistor
R0 = 100000 # R0 = 100k

def temp(reading):
    R = 1023.0 / reading - 1.0
    R = R0*R 
    temperature = 1.0/(math.log(R/R0)/B+1/298.15)-273.15 # Convert to temperature via datasheet
    return temperature

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("Temperature Reading", 45, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- ", 20, 50)
        spr.drawFloat(temp(raw.read()), 3, 40,50)
        spr.drawString("C", 120, 50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("Temperature: ", temp(raw.read()), "C")

if __name__ == "__main__":
    main()
```

- **Passo 4.** Salve o `ArduPy-temp.py` em um local que você conheça. Execute o comando a seguir e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-temp.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
```

- **Passo 5.** Veremos o valor da temperatura exibido no terminal como abaixo, e sendo exibido na tela LCD do Wio Terminal.

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
Positional argument (/dev/cu.usbmodem141101) takes precedence over --open.
Connected to ardupy
Temperature:  28.08603 C
Temperature:  28.50415 C
Temperature:  28.16953 C
Temperature:  28.25308 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.33671 C
Temperature:  28.16953 C
Temperature:  28.25308 C
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Ardupy-temp.png" /></div>

## Referência

---
Se você quiser saber como o algoritmo da temperatura é obtido, por favor consulte a imagem abaixo:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg" /></div>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- **[Zip]** [Grove - Temperature Sensor v1.1 Eagle File](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip)
- **[PDF]** [Grove - Temperature Sensor v1.1.PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.pdf)
- **[PDF]** [Temperature Sensor datasheet](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)

## Projetos

**Módulo Grove sensor de temperatura**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wjL7xOGqAqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9pkmiK8EM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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


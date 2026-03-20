---
description: Grove - Sensor de Alta Temperatura
title: Grove - Sensor de Alta Temperatura
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-High_Temperature_Sensor
sku: 111020002
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-High_Temperature_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_01.jpg" /></div>

Termopares são dispositivos muito sensíveis. Eles exigem um bom amplificador com compensação de junta fria. O Grove - High Temperatire Sensor usa um termopar tipo K e um amplificador de termopar que mede a temperatura ambiente usando um termistor para compensação de junta fria. A faixa detectável deste sensor é de -50~600°C, e a precisão é de ±(2,0% + 2°C).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só o ajuda com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x proporcionam uma experiência pronta para uso em sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 Temp do Ar &amp; Umidade</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versão

| Versão do Produto                     | Alterações | Data de Lançamento |
|--------------------------------------|-----------|--------------------|
| Grove - High Temperature Sensor V1.0 | Inicial   | 25 Fev, 2014       |

## Especificações

| Parâmetro                                     | Valor/Faixa                         |
|-----------------------------------------------|-------------------------------------|
| Tensão de operação                            | 3,3-5V                              |
| Potência máxima nominal a 25℃                 | 300mW                               |
| Faixa de temperatura de operação              | -40 ~ +125 ℃                        |
| Faixa de medição de temperatura               | -50 ~ +600 ℃                        |
| Faixa de tensão de saída do amplificador      | 0 ~ 3,3 V                           |
| Material do termopar                          | Fibra de vidro                      |
| Compensação de junta fria                     | Medição da temperatura ambiente     |
| Precisão de medição de temperatura do termopar | +/-2,0% (+ 2 ℃)                    |
| Comprimento do cabo do sensor de temperatura do termopar | 100cm                    |
| Dimensão                                      | 20mm x 40mm                         |

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

- Etapa 1. Precisamos preparar os seguintes itens:

| Seeeduino V4.2 | Base Shield |  Grove-High Temperature Sensor|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Etapa 2. Conecte o Grove-High Temperature Sensor à porta **A0** no Base Shield.
- Etapa 3. Conecte o Base Shield ao Seeeduino-V4.2.
- Etapa 4. Conecte o Seeeduino-V4.2 ao PC usando um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/arduino_connection.jpg" /></div>

:::note
    Se não tivermos um Base Shield, não se preocupe, o sensor pode ser conectado diretamente ao seu Arduino. Siga as tabelas abaixo para conectar ao Arduino.
:::

| Seeeduino |Grove-High Temperature Sensor |
|------------------|------- --|
| GND              | Preto  |
| 5V               |  Vermelho   |
| A1               | Branco  |
| A0               | Amarelo |

#### Software

- Etapa 1. Baixe a [Grove-High Temperature Sensor Library](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip) no Github.
- Etapa 2. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- Etapa 3. Copie o código para a IDE do Arduino e faça o upload.

```cpp
#include "High_Temp.h"

HighTemp ht(A1, A0);

void setup()
{
    Serial.begin(115200);
    Serial.println("grove - hight temperature sensor test demo");
    ht.begin();
}

void loop()
{
    Serial.println(ht.getThmc());
    delay(100);
}
```

- Etapa 4. Abra o Serial Monitor e configure o baud rate como 115200. Veremos aqui a temperatura em Celsius.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/Htsdata.jpg" /></div>

### Brincar com Raspberry Pi

#### Hardware

- Etapa 1. Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Etapa 2. Conecte o GrovePi_Plus ao Raspberry.
- Etapa 3. Conecte o Grove-Ultrasonic Ranger à porta **A0** do GrovePi_Plus.
- Etapa 4. Conecte o Raspberry ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/raspberry_connection.jpg" /></div>

#### Software

- Etapa 1. Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- Etapa 2. Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::tip
Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa ter certeza de que o Passo 2 e o Passo 3 usam o mesmo caminho.
:::

:::note
Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você poderá obter erros.
:::

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, terá que usar esta linha de comando **apenas com Python3**.
:::

- Passo 3. Execute o comando git clone no repositório do Github.

```txt
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Passo 4. Execute os comandos abaixo para usar o ultrasonic_ranger para medir a distância.

```txt
cd ~/GrovePi/Software/Python/grove_hightemperature_sensor
python3 high_temperature_example.py
```

Aqui está o código grove_ultrasonic.py.

```python

import grove_hightemperature_sensor as grovepi # our library
from time import sleep # and for the sleep function
import sys # we need this for the exception throwing stuff

# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!

def Main():
    room_temperature_pin = 15 # this is equal to A1
    probe_temperature_pin = 14 # this is equal to A0
    # so you have to connect the sensor to A0 port

    # instatiate a HighTemperatureSensor object
    sensor = grovepi.HighTemperatureSensor(room_temperature_pin, probe_temperature_pin)

    # and do this indefinitely
    while True:
        # read the room temperature
        room_temperature = sensor.getRoomTemperature()
        # and also what's important to us: the temperature at the tip of the K-Type sensor
        probe_temperature = sensor.getProbeTemperature()

        # print it in a fashionable way
        print('[room temperature: {:5.2f}°C][probe temperature: {:5.2f}°C]'.format(room_temperature, probe_temperature))
        # and wait for 250 ms before taking another measurement - so we don't overflow the terminal
        sleep(0.25)


if __name__ == "__main__":
    try:
        Main()

    # in case CTRL-C / CTRL-D keys are pressed (or anything else that might interrupt)
    except KeyboardInterrupt:
        print('[Keyboard interrupted]')
        sys.exit(0)

    # in case there's an IO error aka I2C
    except IOError:
        print('[IO Error]')
        sys.exit(0)

    # in case we have a math error (like division by 0 - can happen depending on the read values)
    # or if the values exceed a certain threshold
    # experiment and you'll see
    except ValueError as e:
        print('[{}]'.format(str(e)))
        sys.exit(0)
```

- Passo 4. Veremos a temperatura exibida no terminal como abaixo.

```txt
pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python3 high_temperature_example.py
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
```

## Perguntas Frequentes

**P1: Como fazer a calibração do sensor Grove-High Temperature?**

**R1:**  Baixe a [libray](https://files.seeedstudio.com/wiki/Grove_High_Temperature_Sensor/resource/Grove_HighTemp_Sensor-master_cal.zip) e siga as instruções abaixo.  

- Passo 1. execute o getTemperature-calibration-measurement.ino para obter as informações abaixo.

```txt
10:02:17.792 -> "You have Scucessfully record the sample data,please copy the following line of code to your clipboard and replace the first line of function loop()
10:02:17.935 ->       double TMP[]={10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29};
10:02:18.038 ->       double Real_temperature[]={10.00,20.00,30.00,40.00,50.00,60.00,70.00,80.00,90.00,100.00};
```

- Passo 2. cole em getTemperature-calibration_demo.ino e execute a calibração.

- Passo 3. execute getTemperature.ino para ler a temperatura.  

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-High_Temperature_Sensor.pdf)
- **[Eagle]** [Arquivo Eagle do Grove - High Temperature Sensor](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip)
- **[Library]** [Biblioteca High Temperature Sensor](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor)
- **[Datasheet]** [OPA333 PDF](http://www.ti.com/lit/ds/symlink/opa333.pdf)
- **[Datasheet]** [LMV358 PDF](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Lmv358.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_High_Temperature_Sensor -->

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


---
description: Grove - Sensor de Temperatura e Umidade (SHT31)
title: Grove - Sensor de Temperatura e Umidade (SHT31)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TempAndHumi_Sensor-SHT31
sku: 101020212
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-TempAndHumi_Sensor-SHT31/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg" /></div>

Grove - Temp&Humi Sensor(SHT31) é um sensor de temperatura e umidade altamente confiável, preciso, de resposta rápida e integrado. O sensor (chip) utilizado no módulo é projetado com a tecnologia CMOSens<sup>®</sup> da Sensirion. O chip é bem calibrado, linearizado e compensado para saída digital.

A precisão típica deste módulo pode ser de **±2%RH** (para umidade relativa) e **±0,3°C** (para temperatura). Este módulo é compatível com 3,3 Volts e 5 Volts e, portanto, não requer um conversor de nível de tensão. Este módulo se comunica usando o barramento serial I<sup>2</sup>C e pode funcionar em até 1 MHz de velocidade. Também fornecemos uma biblioteca altamente abstrata para tornar este produto ainda mais fácil de usar.

Usar o sensor é fácil. Para o [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compatível com Arduino), basta conectar esta placa breakout à placa de controle principal por meio de um [cabo Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57). Em seguida, use a biblioteca fornecida e o código de exemplo/demo disponível no GitHub para obter seus dados. Se você estiver usando um Arduino sem um Base Shield, simplesmente conecte o pino VIN ao pino de 5V, GND ao terra, SCL ao Clock I2C (Analógico 5) e SDA ao Data I2C (Analógico 4).

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o registrador de dados [S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para medições ambientais. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez, para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

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
          <strong>S2101 Temp. do Ar &amp; Umidade</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Temperature&Humidity Sensor(SHT31) V1.0 | Inicial                                                                                                                                                                                    | Jan 2016      |

## Características

- Altamente confiável, preciso e com tempo de resposta rápido
- Compatível com Grove e fácil de usar
- Bem calibrado, linearizado, compensado para saída digital
- Biblioteca de desenvolvimento altamente abstrata
- Endereço I2C  0x44

:::note
    Se você quiser usar múltiplos dispositivos I2C, consulte [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/).
:::

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Parâmetro                | Valor                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Tensão de entrada (VCC)      | 3,3 volts ou 5 volts                                                                                         |
| Nível lógico de E/S          | 3,3 volts ou 5 volts com base em VCC                                                                            |
| Corrente de operação        | 100 μA                                                                                                       |
| Temperatura de operação    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| Faixa do sensor de temperatura | -40–125 ℃, com precisão de ±0,3°C                                                                              |
| Faixa do sensor de umidade    | 0% - 100% (Umidade Relativa), com precisão de ±2%                                                              |
| Chip do sensor              | SHT31([Datasheet](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| Porta            | I<sup>2</sup>C                                                                                               |
| Peso                   | 4 g (para a placa breakout), 9 g para todo o pacote cada peça                                                   |
| Dimensões               | 40(comprimento)×20(largura) mm                                                                                      |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Temp&Hum Sensor(SHT31) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)|

- **Passo 2.** Conecte o Grove - Temperature&Humidity Sensor(SHT31) à porta I2C do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg" /></div>

## Visão Geral de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg" /></div>

:::caution
 Não toque, chacoalhe ou deixe este produto vibrar enquanto estiver em uso. Caso contrário, isso afetará a precisão dos dados medidos.
:::

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Temperature&Humidity Sensor(SHT31) ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [Library](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra um novo sketch e copie o código a seguir para o novo sketch.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **Passo 4.** Envie o demo. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina o baud rate para **9600**. Se tudo correr bem, você obterá os resultados.

O resultado deverá ser semelhante a:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png" /></div>

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp&Hum Sensor(SHT31)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **Passo 2.** Conecte o Grove Base Hat ao Raspberry.
- **Passo 3.** Conecte o Grove - Temperature&Humidity Sensor (SHT31) à porta **I2C** do Base Hat.
- **Passo 4.** Conecte o Raspberry Pi ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg" /></div>

#### Software

- **Passo 1.** Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Entre no ambiente virtual correspondente.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Passo 3.** Execute o comando abaixo para rodar o código.

```
#Run code
python grove_temperature_humidity_sensor_sht3x.py
#View Code
less grove_temperature_humidity_sensor_sht3x.py
```

A seguir está o código grove_temperature_humidity_sensor_sht3x.py.

```python

import time
from grove.i2c import Bus


def CRC(data):
    crc = 0xff
    for s in data:
        crc ^= s
        for _ in range(8):
            if crc & 0x80:
                crc <<= 1
                crc ^= 0x131
            else:
                crc <<= 1
    return crc


class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x44, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise ValueError("humidity CRC mismatch")


        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()

```

- Execute este código
```

python grove_temperature_humidity_sensor_sht3x.py
```

  Se tudo correr bem, você verá o seguinte resultado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/GROVE-fix/SHT3.png" /></div>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Temos este componente disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com Seeed e Geppeto. Construa agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Recursos

- **[EAGLE]** [Arquivos de PCB e esquemático em PDF do Grove - Temperature&Humidity Sensor(SHT31)](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[Datasheet]** [Datasheet do Sensor SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[Library]** [Biblioteca e código de exemplo](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[MoreReading]** [I<sup>2</sup>C Guia prático para Arduino](https://www.arduino.cc/en/Reference/Wire)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## Projetos

**MediaTek Open Source Hardware Plant Health Monitor**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

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

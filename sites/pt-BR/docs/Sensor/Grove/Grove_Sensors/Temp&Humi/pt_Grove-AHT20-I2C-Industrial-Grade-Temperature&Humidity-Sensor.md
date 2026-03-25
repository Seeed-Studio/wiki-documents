---
description: Grove - AHT20 I2C Sensor de Temperatura e Umidade de Grau Industrial
title: Grove - AHT20 I2C Sensor de Temperatura e Umidade de Grau Industrial
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor
sku: 101990644
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" /></div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

AHT20 é uma nova geração de sensor de temperatura e umidade incorporado em um pacote SMD sem chumbo e de fileira dupla plana, adequado para soldagem por refluxo. O AHT20 está equipado com um chip ASIC recém-projetado: um sensor de umidade capacitivo semicondutor MEMS aprimorado e um sensor de temperatura padrão no chip. O desempenho do AHT20 é mais estável em ambientes agressivos em comparação com a geração anterior de sensores de temperatura e umidade, como o Grove - Temperature & Humidity Sensor Pro (AM2302/DHT22); na verdade, o AHT20 é adequado para a maioria dos cenários industriais.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101 com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial bem-sucedido.

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
          <strong>S2101 Temperatura do Ar &amp; Umidade</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Características

- Faixa de medição de temperatura -40 ~ 85°C, faixa de medição de umidade 0 ~ 100% RH
- Saída digital, interface Grove I2C
- Excelente estabilidade de longo prazo
- Pacote SMD adequado para soldagem por refluxo
- Resposta rápida e forte capacidade anti-interferência
- Compatível com Arduino
- Interface de 4 pinos reservada

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação |DC: 2.0V-5.5V|
|Faixa de Medição (umidade) |0 ~ 100% RH|
|Faixa de Temperatura| -40 ~ + 85 ℃|
|Precisão de Umidade|± 2% RH (25 ℃)|
|Precisão de Temperatura| ± 0.3 ℃|
|Resolução| Temperatura : 0.01 ℃; Umidade : 0.024% RH|
|Interface de Saída|Interface Grove I²C|
|Endereço I2C|0x38| -->

## Plataforma Suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

### Materiais Necessários

| Seeeduino Lotus V1.1 |Grove-AHT20 Sensor de Temperatura&Umidade|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Adquira agora](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

### Conexão de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/hardware-connection.jpg" /></div>

:::tip
Please plug the USB cable，Grove-AHT20 Temperature&Humidity Sensor Interface into Seeeduino Lotus V1.1 Interface gently, otherwise you may damage the port.
:::

- **Etapa 1.** Conecte o Grove-AHT20 Sensor de Temperatura&Umidade à interface **I2C** do Seeeduino Lotus V1.1 com um Cabo Grove.

- **Etapa 2.** Conecte o Seeeduino Lotus V1.1 ao PC por meio de um cabo USB.

- **Etapa 3.** Baixe o código, consulte a parte de software.

- **Etapa 4.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua IDE Arduino.

### Software

:::caution
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Etapa 1.** Baixe o [código de demonstração](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/archive/master.zip).

- **Etapa 2.** Copie todo o arquivo **Seeed_Arduino_AHT20** e cole-o na pasta de biblioteca da sua IDE Arduino.

- **Etapa 3.** Abra o arquivo **BasicRead** de **examples** com sua IDE Arduino.

- **Etapa 4.** Faça o upload da demonstração. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

#### Código de Software

```cpp
// ARDUINO DEMO FOR GROVE-AHT20
//
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void setup()
{
    Serial.begin(115200);
    Serial.println("AHT20 DEMO");
    AHT.begin();
}

void loop()
{
    float humi, temp;

    int ret = AHT.getSensor(&humi, &temp);

    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temerature: ");
        Serial.println(temp);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }

    delay(100);
}

// END FILE
```

:::tip
  Se tudo correr bem, você pode ir ao **Serial Monitor** para ver um resultado como o seguinte:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/outcome_aht20.png" /></div>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box' }}>
</div>

### Brinque com Raspberry Pi 

#### Hardware

- **Etapa 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove-AHT20 Sensor de Temperatura&Umidade |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

- **Etapa 2**. Conecte o Grove Base Hat ao Raspberry.
- **Etapa 3**. Conecte o Grove-AHT20 Sensor de Temperatura&Umidade à porta **I2C** do Base Hat.
- **Etapa 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Etapa 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Etapa 2**. Entre no ambiente virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```
<Tabs>
  <TabItem value="old" label="old" default>

- **Etapa 3**. Execute os comandos abaixo para rodar o código.

```
nano ~/grove_env/AHT20_demo.py
```

```python 
import time
from grove.i2c import Bus


class GroveTemperatureHumidityAHT20(object):
    def __init__(self, address=0x38, bus=1):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        self.bus.write_i2c_block_data(self.address, 0x00, [0xac, 0x33, 0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        humidity = data[1]
        humidity <<= 8
        humidity += data[2]
        humidity <<= 4
        humidity += (data[3] >> 4)
        humidity /= 1048576.0
        humidity *= 100

        temperature = data[3] & 0x0f
        temperature <<= 8
        temperature += data[4]
        temperature <<= 8
        temperature += data[5]
        temperature = temperature / 1048576.0*200.0-50.0  # Convert to Celsius

        return temperature, humidity


def main():
    sensor = GroveTemperatureHumidityAHT20()
    while True:
        temperature, humidity  = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()
```

- Execute este código

```
python AHT20_demo.py
```

  </TabItem>

  <TabItem value="new" label="new">

  - **Etapa 3**. Execute o comando abaixo para rodar o código.

- O seguinte é para verificar o código grove_temperature_humidity aht20.py.

```
less grove_temperature_humidity aht20.py
```


- Execute este código
```
python grove_temperature_humidity aht20.py
```

  </TabItem>
</Tabs>


Se tudo correr bem, você verá o seguinte fenômeno.😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/AHT20_1.png" alt="pir" width={600} height="auto" /></p>



## Recursos

- **[ZIP]** [Grove-AHT-eagle-file](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip)
- **[PDF]** [Datasheet of AHT20](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/AHT20-datasheet-2020-4-16.pdf)

## Suporte Técnico & Discussão de Produtos

Por favor, envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


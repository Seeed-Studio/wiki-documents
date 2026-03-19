---
description: Grove - Sensor de Temperatura I2C de Alta Precisão (MCP9808)
title: Grove - Sensor de Temperatura I2C de Alta Precisão (MCP9808)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808
sku: 101020556
last_update:
  date: 12/30/2022
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG" /></div>

O Grove - Sensor de Temperatura I2C de Alta Precisão (MCP9808) é um módulo digital de alta precisão baseado no MCP9808. Diferente de outros sensores, você pode escolher
a resolução de medição deste sensor. Além de medições de temperatura de alta precisão, também oferecemos alerta de temperatura
programável. Usamos um pino separado para enviar o sinal de alarme, você achará muito conveniente usar esse sinal como uma interrupção para controlar outra placa.

Em resumo, acreditamos que este sensor será uma nova estrela para controle de temperatura.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A série de sensores industriais SenseCAP S210x oferece uma experiência pronta para uso para medição ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

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

## Recursos

- Alta precisão
  - ±0,25 (típico) de -40°C a +125°C
  - ±0,5°C (máximo) de -20°C a 100°C
  - ±1°C (máximo) de -40°C a +125°C

- Resolução de medição selecionável pelo usuário
  - +0,5°C, +0,25°C, +0,125°C, +0,0625°C
- Saída de alerta de temperatura programável pelo usuário
- Interface I2C

## Especificação

|Item|Valor|
|---|---|
|Tensão de trabalho|3.3V/5V|
|Faixa de operação|-40°C a +125°C|
|Interface digital|Padrão I2C 400 kHz|
|Endereço I2C|0x18(padrão)/ 0x18~0x1F(opcional)|

## Aplicações

- Aplicações industriais
- Freezers e refrigeradores industriais
- Processamento de alimentos
- Computadores pessoais e servidores
- Periféricos de PC
- Eletrônicos de consumo
- Dispositivos portáteis/de mão

## Visão geral de hardware

### Mapa de pinos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg" /></div>

**Endereço I2C**

Oferecemos 3 conjuntos de pads na parte de trás da placa de circuito impresso. O padrão é que AD0~AD2 estejam todos conectados aos pads de nível baixo; você pode cortar esses pads e soldá-los para o outro lado (nível alto).
O endereço I2C é um endereço de 7 bits <mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>. <mark>0011</mark> é o código de endereço, que é a configuração de fábrica, nós não podemos mudá-lo.
<mark>A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark> é o endereço escravo, nós podemos mudá-lo. A configuração padrão é A<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0, portanto o endereço I2C padrão
é <mark>0011000</mark>. Normalmente o endereço deve ter 8 bits, então precisamos adicionar um bit 0 ao MSB (Most Significant Bit), e então obtemos <mark>0001,1000</mark>. Este é um endereço binário,
e frequentemente usamos o endereço hexadecimal no código, então vamos converter o endereço binário em um endereço hexadecimal; aqui obtemos <mark>0x18</mark>. Pelo mesmo raciocínio, se soldarmos todos os pads para o
 nível alto, obteremos <mark>0001,1111</mark>, que é <mark>0x1F</mark>. Portanto, o endereço I2C varia de 0x18 a 0x1F; dentre eles, você pode escolher o que quiser, apenas certifique-se de mudar
o endereço I2C no arquivo **Seeed_MCP9808.h** na biblioteca **Grove_Temperature_sensor_MCP9808-master**.

```cpp
#define DEFAULT_IIC_ADDR  0X18
```

Mapa de endereços

A<sub>2</sub>=0|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-000,0x18|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-001,0x19
A<sub>1</sub>=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-010,0x1A|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-011,0x1B

A<sub>2</sub>=1|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-100,0x1C|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-101,0x1D
A<sub>1</sub>=0=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-110,0x1E|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-111,0x1F

**<span style={{textDecoration: 'overline'}}>ALE</span> Pad**

Você pode ver o pad <span style={{textDecoration: 'overline'}}>ALE</span> na parte de trás da placa de circuito impresso. O sinal de alerta enviado por esse pad pode ser usado como um sinal de interrupção externa para outros controladores.
A saída padrão é alta; nesta placa deve ser 3,3V. Quando a condição é atendida, a tensão de saída se torna baixa (0V). Você pode definir a condição quando terminar este wiki 😄

### Esquemático

**Endereço I2C**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg" /></div>

Como mencionamos acima, usamos esses três conjuntos de pads para selecionar o endereço I2C; se você quiser mudar o endereço padrão, pode cortar o fio e ressoldá-lo.

**MCP9808**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg" /></div>

Como você pode ver, o pad <span style={{textDecoration: 'overline'}}>ALE</span>
está conectado aos 3,3V através de um resistor de pull-up.

 **Circuito de conversor de nível bidirecional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg" /></div>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferente de um barramento I2C. O barramento I<sup>2</sup>C deste sensor usa 3,3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q6** e **Q5** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como chaves bidirecionais. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::tip
        Nesta seção mostramos apenas parte do esquemático; para o documento completo, consulte os [Recursos](https://wiki.seeedstudio.com/pt-br/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#Recursos)
:::

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - I2C High Accuracy Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank">Get One Now</a>|

:::note

**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - I2C High Accuracy Temperature Sensor à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/connect.jpg" /></div>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove-MCP9808          |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove MCP9808](https://github.com/Seeed-Studio/Grove_Temperature_sensor_MCP9808) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo pelo caminho: **File --> Examples --> Grove Temperature Sensor MCP9808 --> MCP9808_demo_with_limit**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/demo_path.jpg" /></div>

:::tip
        Como mostrado na imagem acima, fornecemos dois demos para você, **MCP9808_basic_demo** e **MCP9808_demo_with_limit**. O **MCP9808_basic_demo** apenas fornece a temperatura, a função de alerta está desativada.
        E para o demo **MCP9808_demo_with_limit**, a função de alerta está ativada. Se você só quer a temperatura, o demo básico será suficiente. Se você quiser usar a função de alerta, você deve escolher o demo com limite.
:::

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser como

```cpp
sensor init!!
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.19
temperature value is: 29.25
```

**Agora, vamos ver como usar o Pad <span style={{textDecoration: 'overline'}}>ALE</span>.**

O código no demo **MCP9808_demo_with_limit**:

```cpp
#include "Seeed_MCP9808.h"


MCP9808  sensor;

void setup()
{
    Serial.begin(115200);
    if(sensor.init())
    {
        Serial.println("sensor init failed!!");
    }
    //Set upper limit is 30°C
    sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
    delay(10);
    //Set upper limit is 32°C
    sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,0x0200);
    delay(10);
    //Enable the alert bit.The alert bit outputs low when the temperature value beyond limit.Otherwise stays high.
    sensor.set_config(SET_CONFIG_ADDR,0x0008);

    Serial.println("sensor init!!");
}


void loop()
{
    float temp=0;
    //Get temperature ,a float-form value.
    sensor.get_temp(&temp);
    Serial.print("temperature value is: ");
    Serial.println(temp);
    delay(1000);
}

```

Além de medir a temperatura, este código também implementa uma função. Quando a temperatura é menor que 30℃, o **Pad <span style={{textDecoration: 'overline'}}>ALE</span>** fornece, por padrão, alta-3,3 V.
Quando a temperatura é maior que 30℃, o **Pad <span style={{textDecoration: 'overline'}}>ALE</span>** fornecerá baixa-0 V.

Então você pode perguntar, e se eu quiser mudar a temperatura de limiar. Ok, por favor vá até a linha 14:

```cpp
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
```

Usamos esta função para controlar a temperatura, o primeiro parâmetro é o endereço do registrador UPPER_LIMIT e o segundo parâmetro <mark>0x01e0</mark> é a temperatura em hexadecimal que definimos, como mencionamos acima, é 30℃. O <mark>0x01e0</mark> é um número hexadecimal de quatro bits, o último bit à direita representa a parte fracionária. Nós o definimos como 0, então o número válido é <mark>0x1e</mark>. **e** significa 14 em decimal,
e o bit mais alto **1** significa 16 em decimal. Então <mark>0x1e</mark> é igual a 16+14=30.

Fornecemos 3 funções no arquivo **Seeed_MCP9808.cpp**.  
```sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16);```
```sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16);```
```sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16);```

As we mentioned before, the default output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** is high, and the output level goes low when the temperature meets certain conditions. You can use those 3 functions to set your own conditions.

**sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16)** is used to set the lower temperature limit, **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is lower than the value we set, the output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** will goes down.

**sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16)** is used to set the upper temperature limit, also **u16** is the 4 bit Hexadecimal temperature we set. When the temperature is higher than the value we set, the output of the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** will goes down.

**sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16)** is used for the inturrupt mode, in this wiki we only show you how to work as a comparator. If you want to know more, please check the [datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf) .

Now we can set a condition zone by lower_limit and upper_limit, when the temperature comes to the condition zone, the output will goes low.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/Zone.jpg" /></div>

For example, if you want the **<span style={{textDecoration: 'overline'}}>ALE</span> Pad** output high between 28℃ and 30℃, and output low when the tempareture is higer than 30℃ or lower than 28℃.
The code should be like:

```cpp

sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,0x01c0);
delay(10);
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
delay(10);

```

:::caution
        Please make sure the **upper_limit** is higer than the **lower_limit**, otherwise it will not output properly. And please make sure the **critical_limit** is higer than the **upper_limit**. A certain delay() is required to ensure that the registers are written correctly.
:::

### Play With Raspberry Pi

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - I2C High Accuracy Temperature Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - I2C High Accuracy Temperature Sensor to I2C port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/MCP9808_Hat.jpg" /></div>

#### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment and install the grove.py to your raspberry pi.

- **Step 2**. Excute below commands to run the code.

```
# virutalenv para Python3
virtualenv -p python3 env
source env/bin/activate
#digitar comando
grove_high_accuracy_temperature
```

Following is the mcp9808.py code.

```python

import math
import threading
from grove.i2c import Bus 
from grove.temperature import Temper

RES_LOW = 0x00
RES_MEDIUM = 0x01
RES_HIGH = 0x02
RES_PRECISION = 0x03

MCP9808_REG_AMBIENT_TEMP = 0x05

class TemperMCP9808(Temper):
    def __init__(self, address=0x18):
        self._addr = address
        self._bus = Bus()
        self._resolution = Temper.RES_1_2_CELSIUS

    def _derive_res(self, res):
        ares = -1
        if res >= Temper.RES_1_2_CELSIUS:
            ares = RES_LOW
        elif res >= Temper.RES_1_4_CELSIUS:
            ares = RES_MEDIUM
        elif res >= Temper.RES_1_8_CELSIUS:
            ares = RES_HIGH
        elif res >= Temper.RES_1_16_CELSIUS:
            ares = RES_PRECISION

        if ares < 0:
            return False
        self._bus.write_byte(self._addr, ares)
        # print("ares = {}".format(ares))
        return True

    @property
    def temperature(self):
        result = self._bus.read_word_data(self._addr, MCP9808_REG_AMBIENT_TEMP)
        # Swap the bytes
        data = (result & 0xff) << 8 | (result & 0xff00) >> 8
        # print("data = {}".format(data))
        # print("data = {}".format(hex(data)))
        # Check if the temperature is negative
        if data & 0x1000:
            data = -((data ^ 0x0FFF) + 1)
        else:
            data = data & 0x0fff
        return data / 16.0
```

:::tip success
If everything goes well, you will be able to see the following result
:::

```python

(env)pi@raspberrypi:~ grove_high_accuracy_temperature 
Insira Grove - I2C-High-Accuracy-Temperature
  em qualquer slot I2C do Grove-Base-Hat
Detectando temperatura...
24.5 Celsius
24.5 Celsius
24.375 Celsius
^CRastreamento (última chamada mais recente):
  File "grove_high_accuracy_temperature.py", line 54, in <module>
    main()
  File "grove_high_accuracy_temperature.py", line 50, in main
    time.sleep(1)
KeyboardInterrupt

```

You can quit this program by simply press **ctrl+c**.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - I2C High Accuracy Temperature Sensor(MCP9808) Eagle files](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Seeed MCP9808 Library](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [Datasheet of MCP9808](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf)
- **[PDF]** [Datasheet of 2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)
- **[PDF]** [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HQr6jSmfJs0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Tech Support & Product Discussion


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

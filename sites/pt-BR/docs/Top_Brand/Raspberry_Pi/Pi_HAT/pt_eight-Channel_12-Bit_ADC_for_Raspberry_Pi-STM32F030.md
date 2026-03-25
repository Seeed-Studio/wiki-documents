---
description: ADC de 8 Canais e 12 Bits para Raspberry Pi (STM32F030)
title: ADC de 8 Canais e 12 Bits para Raspberry Pi (STM32F030)
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030
sku: 103030280
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/
---


![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/main.jpg)

ADC é um acessório comum para Raspberry Pi. Hoje em dia, muitos MCUs baratos possuem ADC integrado, então fizemos este ADC de 8 canais baseado no STM32F030, que é um MCU ARM Cortex M0 econômico e de baixo consumo de energia. Nós disponibilizamos 8 canais de ADC a partir do MCU e integramos 4 conectores Grove analógicos para que você também possa usar módulos Grove analógicos com ele.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Unidade de cálculo de CRC
- Controlador DMA (acesso direto à memória) de 5 canais
- RTC de calendário com alarme e despertar periódico de Stop/Standby
- Temporizadores
  - Temporizador de controle avançado
  - Temporizadores de uso geral e temporizadores básicos
  - Temporizadores watchdog independentes e de sistema
  - Temporizador SysTick
- Relógio em tempo real (RTC)
- Depuração por fio serial (SWD)
- Suporta Raspberry Pi 3B/3B+/4

## Especificação

|Item|Valor|
|---|---|
|Tensão de Alimentação de Operação|3.3V|
|Resolução do ADC|12 bit|
|Frequência Máxima de Clock|48 MHz|
|Tamanho da Memória de Programa|16kB|
|Tamanho da RAM de Dados|4 kB|
|Largura do Barramento de Dados|32 bit|
|Temperatura de Operação|-40～85℃|
|Interfaces de Comunicação|I2C|
|Endereço I2C|0x04(padrão)|
|Tamanho|C: 65mm L: 55mm A: 18mm|
|Peso|25.9g|
|Tamanho da embalagem|C: 140mm L: 75mm A: 25mm|
|Peso Bruto|45g|

## Aplicações típicas

- Medição de temperatura
- Bens de consumo

## Visão Geral de Hardware

### Pinagem

**Visão geral**

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin.jpg)

**GPIO**

A mesma pinagem do Raspberry Pi.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-5.jpg)

**SWD**

Usamos a porta SWD para gravar o firmware nesta placa. Além disso, você pode ver o pino 9/pino 10/pino 11 nesta seção. Esses três pinos não são usados por nenhuma porta Grove, você é livre para usá-los sem se preocupar com conflitos de pinos.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-1.jpg)

**Porta Grove Analógica**

Como não há ADC integrado no Raspberry Pi, a placa de ADC baseada em STM32 permite que o sensor analógico funcione com o seu Raspberry Pi.

Há 4 soquetes Grove analógicos nesta placa, de forma que esta placa de ADC pode funcionar diretamente com módulos Grove usando o cabo [Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html).

O sensor analógico fornece a tensão analógica para o ADC de 12 bits. Depois que o ADC converte os dados analógicos em dados digitais, ele envia os dados digitais para o Raspberry Pi através da interface I2C.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-4.jpg)

**Portas de conector fêmea**

Igual à porta Grove analógica, mas nesta parte em vez de usar o cabo [Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html) você precisa usar o [Breadboard Jumper Wire Pack](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html).

8 portas de junção analógicas, A0 ~ A7.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-3.jpg)

**Borne de parafuso**

Igual ao acima, mas com método de conexão diferente. Este grupo de conectores de pinos inclui os pinos analógicos A0 ~ A7, Vcc e GND.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-2.jpg)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Hardware

**Materiais necessários**

|Raspberry pi|8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)(STM32F030)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)|

- **Passo 1**. Insira o ADC de 8 Canais e 12 Bits para Raspberry Pi (STM32F030) no Raspberry Pi.
- **Passo 2**. Conecte o Raspberry Pi ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection1.jpg)

### Software

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Passo 1**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 2**. Instale a biblioteca grove.py

```
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 adc_8chan_12bit.py 

```

A seguir está o código adc_8chan_12bit.py.

```python

import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0


class Pi_hat_adc():
    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        self.bus=Bus(bus_num)
        self.addr=addr


    #get all raw adc data,THe max value is 4095,cause it is 12 Bit ADC
    def get_all_adc_raw_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array

    def get_nchan_adc_raw_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+n,2)
        val =data[1]<<8|data[0]
        return val
    #get all data with unit mv.
    def get_all_vol_milli_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array

    def get_nchan_vol_milli_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
        val =data[1]<<8|data[0]
        return val

    #get all data ratio,unit is 0.1%
    def get_all_ratio_0_1_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array

    def get_nchan_ratio_0_1_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+n,2)
        val =data[1]<<8|data[0]
        return val



ADC = Pi_hat_adc()
def main():
    raw_data=ADC.get_all_adc_raw_data()
    vol_data=ADC.get_all_vol_milli_data()
    ratio_data=ADC.get_all_ratio_0_1_data()
    print("raw data for each channel:(1-8chan)(12 bit-max=4096):")
    print(raw_data)
    print("voltage for each channel:(unit:mv,max=3300mv):")
    print(vol_data)
    print ("ratio for each channel(unit 0.1%,max=100.0%):")
    print(ratio_data)

    print(" ")
    print("NOTICE!!!:")
    print("The default setting of ADC PIN is floating_input.")
    print(" ")

if __name__ == '__main__':
    main()


```

:::tip
    Se tudo correr bem, você conseguirá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 adc_8chan_12bit.py 
raw data for each channel:(1-8chan)(12 bit-max=4096):
[2177, 2098, 2064, 2038, 2127, 2066, 2172, 2145]
voltage for each channel:(unit:mv,max=3300mv):
[1599, 1741, 1668, 1658, 1644, 1787, 1694, 1677]
ratio for each channel(unit 0.1%,max=100.0%):
[521, 544, 514, 504, 500, 559, 524, 505]

NOTICE!!!:
The default setting of ADC PIN is floating_input.



```

### Exemplo

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

Tomaremos o [Grove - Sound Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor/) como exemplo para apresentar como usar esta placa.

Conexão de hardware

- **Passo 1**. Conecte o ADC de 8 Canais e 12 Bits para Raspberry Pi (STM32F030) ao Raspberry Pi.
- **Passo 2**. Conecte o Grove - Sound Sensor à porta A0 do módulo ADC.
- **Passo 3**. Conecte o Raspberry Pi ao PC através de um cabo USB.

Diagrama de conexão de hardware

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection2.jpg)

Digite o seguinte comando ++python grove_sound_sensor.py 0++ na interface de linha de comando.

```cpp

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0
Detecting sound...
Sound value: 433
Sound value: 342
Sound value: 443
Sound value: 300
Sound value: 632
Sound value: 258
Sound value: 591
Sound value: 267
Sound value: 871
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando `ctrl`+`c`.

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br />

:::noteNota de alteração de produto:

Como os chips da série ST32 estão fora de estoque globalmente, os preços aumentaram várias vezes e não há uma data de entrega definida. Não tivemos escolha a não ser mudar para o chip MM32. Os modelos de substituição específicos são os seguintes: STM32F030F4P6TR é substituído por MM32F031F6P6. Após a substituição do chip, as funções do produto, características, métodos de uso e códigos permanecem inalterados. Deve-se notar que a versão do firmware foi alterada, e o firmware de fábrica foi ajustado de acordo com os diferentes chips. Se você precisar regravar o firmware, faça o download do firmware correspondente ao chip.
:::

## Recursos

- **[Zip]** [Arquivos Eagle de 8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) (STM32F030)](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip)

- **[Zip]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_firmware.zip)

- **[Zip]** [Biblioteca de Software de 8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) (STM32F030)](https://github.com/Seeed-Studio/grove.py)

- **[PDF]** [Datasheet STM32F030](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_Datasheet.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

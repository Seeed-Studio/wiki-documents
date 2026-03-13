---
description: Grove - Sensor de Corrente CC de 10A (ACS725)
title: Grove - Sensor de Corrente CC de 10A (ACS725)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-10A_DC_Current_Sensor-ACS725
sku: 101020616
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-10A_DC_Current_Sensor-ACS725/
---

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/preview.png" /></div>

O Grove - Sensor de Corrente CC de 10A (ACS725) é um sensor de corrente CC de alta precisão baseado no ACS725. O CI sensor de corrente Allegro™ ACS725 é uma solução econômica e precisa para detecção de corrente CC em sistemas industriais, automotivos, comerciais e de comunicação.

O Grove - Sensor de Corrente CC de 10A (ACS725) pode medir corrente contínua de até 10A e possui uma sensibilidade base de 264mV/A. Este sensor não oferece suporte a corrente CA; se você quiser medir carga CA, verifique:

[Grove - ±5A DC/AC Current Sensor (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Saída analógica de alta largura de banda de 120 kHz para tempos de resposta mais rápidos em aplicações de controle
- Desempenho de ruído líder na indústria com largura de banda amplamente aprimorada por meio de técnicas proprietárias de projeto de amplificador e filtro
- Resistência do condutor primário de 1,2 mΩ para baixa perda de energia e alta capacidade de suportar corrente de surto
- Detecção Hall diferencial rejeita campos de modo comum
- Saída analógica

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura ambiente de operação| -40 – 150℃|
|Temperatura de armazenamento|- 65°C – 165°C|
|Tensão de trabalho|&lt;400V|
|Faixa de detecção de corrente|0 – 10A|
|Sensibilidade|264mV/A(Típ.)|
|Interface de saída|Analógica|
|Interface de entrada|Terminal de parafuso|

## Princípio de Funcionamento

Existem dois tipos de detecção de corrente: direta e indireta. A classificação é feita principalmente com base na tecnologia usada para medir a corrente.

**Detecção direta:**

- Lei de Ohm

**Detecção indireta:**

- Lei de Indução de Faraday
- Sensores de campo magnético
- Efeito Faraday

O Grove - Sensor de Corrente CC de 10A (ACS725) utiliza tecnologia de sensores de campo magnético. E existem três tipos de tecnologia de sensores de campo magnético:

- Efeito Hall
- Sensores de fluxo magnético (fluxgate)
- Sensor de corrente magnetorresistivo

O Grove - Sensor de Corrente CC de 10A (ACS725) é baseado no princípio de Hall, e a detecção Hall diferencial rejeita o modo comum.

## Visão Geral do Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Pinagem</i></figcaption>
</figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

:::caution
É proibido o corpo humano tocar o módulo durante o teste, caso contrário há perigo de choque elétrico.
:::

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Sensor de Corrente CC de 10A (ACS725)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/thumbnail.jpg" /></div>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Base Shield.

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tem certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - Sensor de Corrente CC de 10A (ACS725) à porta **A0** do Base Shield.

- **Passo 2.** Conecte os polos positivo e negativo do circuito a ser testado aos polos positivo e negativo correspondentes do terminal de parafuso.

:::tip
Se você inverter os polos positivo e negativo, a leitura será invertida. Este sensor precisa de calibração antes do uso, portanto, não ligue o circuito primeiro.
:::

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Usamos a Fonte de Alimentação CC neste exemplo; por favor, ajuste a corrente para 0A ou não a ligue inicialmente</i></figcaption>
</figure>
</div>

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) do Github.

- **Passo 2.** Na pasta /example/, você pode encontrar o código de demonstração. Aqui tomamos **Grove_10A_Current_Sensor** como exemplo. Basta clicar em [Grove_10A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_10A_Current_Sensor/Grove_10A_Current_Sensor.ino) para abrir a demo. Ou você pode copiar o código a seguir:

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A0

// Take the average of 500 times
const int averageValue = 500;

long int sensorValue = 0;
float sensitivity = 1000.0 / 264.0; //1000mA per 264mV 


float Vref = 322;   //Vref is zero drift value, you need to change this value to the value you actually measured before using it.
void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 10 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;


  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 

  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");

  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}
```

- **Passo 3.** Envie o exemplo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de baud para **9600**.

- **Passo 5. Calibração**
        Quando não há corrente fluindo, o sensor ainda terá um pequeno valor de saída. Chamamos esse valor de **offset de zero**.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>O offset de zero desta placa é 346,68 mV, convertido em corrente é 93,48 mA</i></figcaption>
</figure>
</div>

Devido à presença do offset de zero, o sensor também terá uma leitura quando não houver corrente. Então definimos um parâmetro **Vref** para corrigir isso, você pode encontrá‑lo no bloco de código acima.

Linha 19:

```cpp
float Vref = 322;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

No código de demonstração, definimos o Vref como 322, porém, o valor do offset de zero varia de placa para placa. Como você sabe, a placa que usamos nesta demonstração é 346,68. Então vamos modificar a Linha 21:

```cpp
float Vref = 346.68;
```

Então salve o código e faça o upload do código novamente, siga o Passo 2 e o Passo 3. Agora vamos ver:

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" /></a></p>
  <figcaption><b>Figura 6</b>. <i>Agora o offset de zero de corrente passa a ser 0 mA</i></figcaption>
</figure>
</div>

Quando a saída de corrente se torna 0 mA ou um valor pequeno, você concluiu a calibração.

- **Passo 6.** Agora é tudo com você, você pode ligar a corrente. Sinta‑se à vontade para usar, lembre‑se de que este é um Sensor de Corrente CC de 10 A, a corrente não pode exceder 10 A!  

Se você quiser saber a fórmula de cálculo do resultado, consulte o [FAQ Q1](#faq)

### Brincar com Raspberry

**Materiais necessários**

| Raspberry pi | Grove Base Hat para RasPi| Sensor de Corrente CC de 10 A |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

#### Conexão de Hardware

- **Passo 1**. Conecte o Grove Base Hat ao Raspberry Pi.

- **Passo 2**. Conecte o Grove - Sensor de Corrente CC de 10 A (ACS70331) à porta **A0** do Base Hat.

- **Passo 3**. Conecte os polos positivo e negativo do circuito a ser testado aos correspondentes polos positivo e negativo do terminal de parafuso.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" /></a></p>
  <figcaption><b>Figura 7</b>. <i>Usamos a fonte de alimentação CC nesta demonstração, por favor ajuste a corrente para 0 A ou não ligue a alimentação no início</i></figcaption>
</figure>
</div>

:::tip
Se você inverter os polos positivo e negativo, a leitura será invertida. Este sensor precisa de calibração antes do uso, então, por favor, não ligue o circuito primeiro.
:::

- **Passo 4**. Alimente o Raspberry Pi via cabo Micro‑USB.

:::caution
Você pode alimentar o Raspberry Pi pela porta USB do computador ou por um adaptador CC, no entanto, se estiver usando o Raspberry Pi 3B+, recomendamos fortemente que você o alimente por um adaptador CC; se você usar a porta USB do PC, poderá danificar o Raspberry Pi 3B+.
:::

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.

- **Passo 2**. Baixe o arquivo‑fonte clonando a biblioteca [grove.py](https://github.com/Seeed-Studio/grove.py).

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os seguintes comandos para rodar o código.

```python
cd grove.py/grove   # to enter the demo file folder
python grove_current_sensor.py 0 10A   # to run the demo program 
```

Então o terminal exibirá o seguinte:

```python
pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
323
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

Toque `ctrl`+`c` para sair.

:::note
Observe o segundo comando, há dois parâmetros após o nome do arquivo:

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font>   significa que o sensor está conectado à porta A0. Se você conectar o sensor à porta A2, então precisa alterar este parâmetro para 2. Este parâmetro tem um intervalo de 0‑7, mas se você usar o Grove base hat, só poderá usar 0/2/4/6 por causa das limitações físicas da interface.  

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>10A</font> significa que o tipo de sensor de corrente é 10 A CC
:::

Sensor                                     |Tipo de corrente|Valor do Parâmetro
-------------------------------------------|----------------|----
Grove - 2.5A DC Current Sensor(ACS70331)   |CC              |2.5A
Grove - ±5A DC/AC Current Sensor (ACS70331)|CC              |5A_DC
                                           |CA              |5A_AC
Grove - 10A DC Current Sensor (ACS725)     |CC              |10A

<div align="center"><i>Esta série tem três sensores de corrente, a lista de parâmetros é como acima</i></div>

:::note
Observe que o sensor de corrente CC de 10 A terá um grande erro ao medir uma faixa pequena, portanto é recomendado que você forneça uma corrente superior a 200 mA para teste. Além disso, o ambiente de medição afetará a precisão, como a ondulação da tensão de alimentação, que deve ser a menor possível.
:::

- **Passo 4 Calibração**.  

    Quando não há corrente fluindo, o sensor ainda terá um pequeno valor de saída. Chamamos esse valor de offset de zero. Como você pode ver, no passo 3, o offset de zero desta placa é 324 mV, convertido em corrente é 8 mA.

    Devido à presença do offset de zero, o sensor também terá uma leitura quando não houver corrente. Então definimos um parâmetro **Vref** para corrigi‑lo, você pode encontrá‑lo em **python grove_current_sensor.py**. Para o Grove - 10A DC Current Sensor (ACS725), definimos o **Vref** como 322 por padrão, porém o offset de zero varia de placa para placa. É por isso que precisamos fazer a calibração primeiro.

    Verifique o código em python abaixo.

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# This is the library for Grove Base Hat
# which used to connect grove sensors for Raspberry Pi.
'''
This is the code for
    - `Grove - 2.5A DC current sensor  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A AC/DC current sensor <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A current sensor      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
Examples:
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        #if use 10A current sensor input: pin = 0 , sensor_type = "10A"
        if (sensor_type == "2.5A"):
            sensitivity = 1000.0 / 800.0
            Vref = 260
        if (sensor_type == "5A_DC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "5A_AC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "10A"):
            sensitivity = 1000.0 / 264.0
            Vref = 322
        averageValue = 500
        ADC = Current()
        while True:
            if(sensor_type == "5A_AC"):
                pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
            else:
                temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                current = temp[0]
                pin_voltage = temp[1]

            current = round(current)
            print("pin_voltage(mV):")
            print(pin_voltage)
            print("current(mA):")
            print(current)
            print()
            time.sleep(1)

'''

import sys
import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0

__all__ = ['Current','Bus']

class Current():
    '''
    Grove Current Sensor class
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        Init iic.
        Args: 
            bus_num(int): the bus number;
            addr(int): iic address;
        '''
        self.bus = Bus(bus_num)
        self.addr = addr

    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        Get n chanel data with unit mV.
        :param int n: the adc pin.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: voltage value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A DC/10A cunrrent sensor get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        currentVal = (val - Vref) * sensitivity
        return currentVal,val

    def get_nchan_AC_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        5A current sensor AC output and get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        sensorValue = 0
        for i in range(averageValue):
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val=data[1]<<8|data[0]
            if(val > sensorValue):
                sensorValue=val
            time.sleep(0.00004)
        currentVal = ((sensorValue - Vref) * sensitivity)*0.707
        return currentVal   

ADC = Current()
def main():
    if(len(sys.argv) == 3):

        pin = int(sys.argv[1])
        sensor_type = sys.argv[2]
        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

            while True:

                if(sensor_type == "5A_AC"):
                    pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                    current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
                else:
                    temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                    current = temp[0]
                    pin_voltage = temp[1]

                current = round(current)
                print("pin_voltage(mV):")
                print(pin_voltage)
                print("current(mA):")
                print(current)
                print()
                time.sleep(1)

        else:
            print("parameter input error!")
            print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
            print("parameter1: 0-7")
            print("parameter2: 2.5A/5A_DC/5A_AC/10A")

    else:
        print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
        print("parameter1: 0-7")
        print("parameter2: 2.5A/5A_DC/5A_AC/10A")


if __name__ == '__main__':
    main()

```

Você pode modificar o **Vref** na linha 156 do bloco de código acima:

```python

        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

```

Como você pode ver, para o Sensor de Corrente de 10A o **Vref** padrão é 322, e no **Passo 3**, podemos ver que quando não há corrente o valor de deslocamento de zero é 324mV. Então vamos alterá‑lo para 324.

```python
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 324
```

Agora, vamos executar este demo novamente.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
325
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
323
current(mA):
-4.0
()
pin_voltage(mV):
324
current(mA):
0.0

```

Bem, melhor do que antes, agora você pode medir a corrente com mais precisão 😄

## FAQ

**P1#** Qual é a fórmula de cálculo da corrente?

**R1:** Se você acha que a [parte de princípio](#working-principle) é muito complicada, vamos colocar de uma forma simples. A corrente no circuito a ser testado excita o campo magnético, o que faz com que o valor de resistência dos elementos GMR mude. E a mudança de resistência na ponte causa uma mudança na tensão na saída do chip. Chamamos a saída de tensão de **V<sub>IOUT</sub>**.

<div><p style={{textAlign: 'center'}}>
   V<sub>IOUT</sub> = Sens × I<sub>p</sub> +  V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens é o coeficiente que converte a corrente em uma tensão de saída. Para este módulo é 264mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> é o valor de corrente no circuito a ser testado, unidade mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> é a tensão de saída quando o I<sub>p</sub> é 0mA (o que significa que não há corrente no circuito a ser testado), unidade mV.

Aqui vem o valor da corrente:  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

Agora, vamos rever a figura 5, explicaremos por que o valor de corrente da saída não é 0 quando o valor real de corrente no circuito a ser testado é 0. Como você pode ver na figura 5, o **initialValue** é 346,68mV, que é o **V<sub>IOUT</sub>**; a corrente é 93,48mA, que é o **I<sub>p</sub>**. Quanto ao **V<sub>IOUT(Q)</sub>**, ele é o **Vref** que definimos no código.
Na figura 5, ele é 265. E o **Sens** é 264mA/V, que é 264mA/1000mV. Agora, é só fazer algumas contas:

<div><p style={{textAlign: 'center'}}>
  {'{'}(346.68mV-322mV) / (264mA/1000mV){'}'} = 93.48mA
</p></div>

Então, na figura 6, quando definimos o **Vref** para 346,68, o **Ip** passa a ser 0mA.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo de esquemático do Grove - 10A DC Current Sensor (ACS725)](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [Folha de dados do ACS725](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/ACS725.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Grove - Sensor de Corrente CC de 2,5A (ACS70331)
title: Grove - Sensor de Corrente CC de 2,5A (ACS70331)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-2.5A-DC-Current-Sensor-ACS70331
sku: 101020652
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-2.5A-DC-Current-Sensor-ACS70331/
---


<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/preview.png" /></div>

O Grove - 2.5A DC Current Sensor(ACS70331) é um sensor de corrente CC de alta precisão baseado no ACS70331. O ACS70331 é uma série de chips, este módulo usa o ACS70331EESATR-2P5U3, que é o CI de sensor de corrente de alta sensibilidade da Allegro para aplicações de detecção de corrente &lt;2.5 A. Ele incorpora tecnologia magnetorresistiva gigante (GMR) que é 25 vezes mais sensível do que sensores tradicionais de efeito Hall para detectar o campo magnético gerado pela corrente que flui através do condutor primário integrado de baixa resistência.

O Grove - 2.5A DC Current Sensor(ACS70331) pode medir corrente CC de até 2,5 A e possui uma sensibilidade básica de 800mV/A. Este sensor não suporta corrente CA, se você quiser medir a carga CA, verifique:

[Grove - 2.5A DC Current Sensor (ACS725)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Largura de banda de 1 MHz com tempo de resposta &lt;550 ns
- Baixo ruído: 8 mA(rms) a 1 MHz
- Resistência do condutor primário de 1,1 mΩ resulta em baixa perda de energia
- Alto PSRR de CC permite uso com fontes de alimentação ou baterias de baixa precisão (operação de 3 a 4,5 V)
- Saída analógica

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura ambiente de operação| -40 – 85℃|
|Temperatura de armazenamento|- 65°C – 125°C|
|Tensão de trabalho|&lt;100V|
|Faixa de detecção de corrente|0 – 2.5A|
|Sensibilidade|800mV/A(Típ.)|
|Interface de saída|Analógica|
|Interface de entrada|Borne de parafuso|

## Princípio de Funcionamento

Existem dois tipos de detecção de corrente: direta e indireta. A classificação é feita principalmente com base na tecnologia usada para medir a corrente.

**Detecção direta:**

- Lei de Ohm

**Detecção indireta:**

- Lei de Indução de Faraday
- Sensores de campo magnético
- Efeito Faraday

O Grove - 2.5A DC Current Sensor(ACS70331) usa tecnologia de sensores de campo magnético. E existem três tipos de tecnologias de sensores de campo magnético:

- Efeito Hall
- Sensores de fluxo magnético (flux gate)
- Sensor de corrente magnetorresistivo

O Grove - 2.5A DC Current Sensor(ACS70331) é baseado no princípio do sensor de corrente magnetorresistivo, que também é conhecido como GMR. Um magnetorresistor (MR) é um dispositivo de dois terminais que altera sua resistência de forma parabólica com o campo magnético aplicado. Essa variação da resistência do MR devido ao campo magnético é conhecida como Efeito Magnetorresistivo.

A construção interna do encapsulamento QFN do ACS70331 é mostrada na Figura 2. O die fica acima do caminho de corrente primário de forma que o campo magnético seja produzido no plano com os elementos GMR no die. Os elementos GMR 1 e 2 detectam o campo na direção +X para o fluxo de corrente IP positivo, e os elementos GMR 3 e 4 detectam o campo na direção –X para o fluxo de corrente IP positivo. Isso permite a medição diferencial da corrente e a rejeição de campos externos parasitas.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Construção interna do ACS70331</i></figcaption>
</figure>
</div>

Os quatro elementos GMR são dispostos em uma configuração de ponte de Wheatstone como mostrado na Figura 2, de modo que a saída da ponte seja proporcional ao campo diferencial detectado pelos quatro elementos, rejeitando campos comuns.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>Figura 2</b>. <i>Configuração de ponte de Wheatstone</i></figcaption>
</figure>
</div>

## Visão Geral de Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Pinagem</i></figcaption>
</figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

:::caution
É proibido que o corpo humano toque o módulo durante o teste, caso contrário há perigo de choque elétrico.
:::

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | 2.5A DC Current Sensor(ACS70331)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 e do Baseshield.

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - 2.5A DC Current Sensor(ACS70331) à porta **A0** do Base Shield.

- **Passo 2.** Conecte os polos positivo e negativo do circuito a ser testado aos respectivos polos positivo e negativo do borne de parafuso.

:::tip
Se você inverter os polos positivo e negativo, a leitura será invertida. Este sensor precisa de calibração antes do uso, portanto, não ligue o circuito primeiro.
:::

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect.png" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Usamos a Fonte de Alimentação CC neste demo, por favor ajuste a corrente para 0A ou não a ligue no início</i></figcaption>
</figure>
</div>

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) do Github.

- **Passo 2.** Na pasta /example/, você pode encontrar o código de demonstração. Aqui tomamos o [Grove_2_5A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/tree/master/examples/Grove_2_5A_Current_Sensor) como exemplo. Apenas clique em Grove_2_5A_Current_Sensor.ino para abrir o demo. Ou você pode copiar o seguinte código:

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

// Take the average of 10 times

const int averageValue = 10;

int sensorValue = 0;

float sensitivity = 1000.0 / 800.0; //1000mA per 800mV 


float Vref = 265;  //Firstly,change this!!!

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

- **Passo 3.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de transmissão para **9600**.

- **Passo 5. Calibração**  
        Quando não há corrente fluindo, o sensor ainda terá um pequeno valor de saída. Chamamos esse valor de **offset de zero**.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/ca.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/ca.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>O offset de zero desta placa é 283.20mV, convertido em corrente é 22.75mA</i></figcaption>
</figure>
</div>

Devido à presença do offset de zero, o sensor também terá uma leitura quando não houver corrente. Então definimos um parâmetro **Vref** para corrigir isso, você pode encontrá-lo no bloco de código acima.

Linha 21:

```cpp
float Vref = 265;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

No código de demonstração, definimos o Vref como 265, no entanto, o valor do offset de zero varia de placa para placa. Como você sabe, a placa que usamos nesta demonstração é 283.20. Então vamos modificar a Linha 21:

```cpp
float Vref = 283;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

Agora vamos fazer o upload do código modificado e verificar o resultado:

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/afca.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/afca.jpg" /></a></p>
  <figcaption><b>Figura 6</b>. <i>Agora o offset de zero da corrente se torna 0mA</i></figcaption>
</figure>
</div>

Quando a saída de corrente se tornar 0mA ou um valor pequeno, você terá concluído a calibração.

- **Passo 5.** Agora é com você, você pode ligar a corrente. Fique à vontade para usar, lembre-se de que este é um sensor de corrente contínua (DC) de 2.5A, a corrente não pode exceder 2.5A!  

Se você quiser saber a fórmula de cálculo do resultado, consulte o [FAQ Q1](#faq)

### Brincar com Raspberry

**Materiais necessários**

| Raspberry pi | Grove Base Hat para RasPi| Sensor de Corrente DC de 2.5A |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html)|

#### Conexão de Hardware

- **Passo 1**. Conecte o Grove Base Hat ao Raspberry Pi.

- **Passo 2**. Conecte o Grove - Sensor de Corrente DC de 2.5A (ACS70331) à porta **A0** do Base Hat.

- **Passo 3**. Conecte os polos positivo e negativo do circuito a ser testado aos correspondentes polos positivo e negativo do terminal de parafuso.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect_pi.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect_pi.png" /></a></p>
  <figcaption><b>Figura 7</b>. <i>Usamos a Fonte de Alimentação DC nesta demonstração, por favor ajuste a corrente para 0A ou não ligue a fonte inicialmente</i></figcaption>
</figure>
</div>

:::tip
Se você inverter os polos positivo e negativo, a leitura será invertida. Este sensor precisa de calibração antes do uso, portanto, não ligue o circuito primeiro.
:::

- **Passo 4**. Alimente o Raspberry Pi via cabo Micro-USB.

:::caution
Você pode alimentar o Raspberry Pi pela porta USB do computador ou por um adaptador DC, no entanto, se estiver usando o Raspberry Pi 3B+, recomendamos fortemente que você o alimente por adaptador DC, pois se você usar a porta USB do PC, poderá danificar o Raspberry Pi 3B+.
:::

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.

- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca [grove.py](https://github.com/Seeed-Studio/grove.py).

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os seguintes comandos para rodar o código.

```python
cd grove.py/grove   # to enter the demo file folder
python grove_current_sensor.py 0 2.5A   # to run the demo program 
```

Então o terminal exibirá a saída como a seguir:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 2.5A
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
269
current(mA):
11.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

Pressione `ctrl`+`c`+ para sair.

:::note
Por favor, observe o segundo comando. Existem dois parâmetros após o nome do arquivo:

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font> significa que o sensor está conectado à porta A0. Se você conectar o sensor à porta A2, então precisará alterar este parâmetro para 2. Este parâmetro possui um intervalo de 0-7, mas se você usar o Grove Base Hat, só poderá usar 0/2/4/6 devido às limitações físicas da interface.  

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>2.5A</font> significa que o tipo de sensor de corrente é 2.5A DC

:::

Sensor                                     |Tipo de corrente|Valor do Parâmetro
-------------------------------------------|----------------|----
Grove - 2.5A DC Current Sensor(ACS70331)   |DC              |2.5A
Grove - 2.5A DC Current Sensor (ACS725)|DC              |5A_DC

                                           |AC              |5A_AC
Grove - 10A DC Current Sensor (ACS725)     |DC              |10A

<div align="center"><i>Esta série possui três sensores de corrente, a lista de parâmetros é como acima</i></div>

:::note
Observe que o sensor de corrente DC de 2.5A terá um grande erro ao medir uma faixa pequena, portanto é recomendado que você forneça uma corrente superior a 200mA para teste. Além disso, o ambiente de medição afetará a precisão, como por exemplo o ripple da tensão de alimentação que deve ser o menor possível.
:::

- **Passo 4 Calibração**.  

    Quando não há corrente fluindo, o sensor ainda terá um pequeno valor de saída. Chamamos esse valor de offset de zero. Como você pode ver, no passo 3, o offset de zero desta placa é 270mV, convertido em corrente é 13mA.

    Devido à presença do offset de zero, o sensor também terá uma leitura quando não houver corrente. Então definimos um parâmetro **Vref** para corrigi-lo, você pode encontrá-lo no **python grove_current_sensor.py**. Para o Grove - Sensor de Corrente DC de 2.5A (ACS70331), definimos o **Vref** como 260 por padrão, entretanto o offset de zero varia de placa para placa. É por isso que precisamos fazer a calibração primeiro.

    Verifique o código python abaixo：

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

Você pode modificar o **Vref** na linha 147 do bloco de código acima:

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

Como você pode ver, para o Sensor de Corrente de 2,5A o **Vref** padrão é 260, e no **Passo 3**, podemos ver que, quando não há corrente, o valor de deslocamento de zero é 270mV. Então vamos alterá‑lo para 270.

```python
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 270
```

Agora, vamos executar este demo novamente.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 2.5A
pin_voltage(mV):
269
current(mA):
-1.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

Bem, melhor do que antes, agora você pode medir a corrente com mais precisão 😄

## FAQ

**P1#** Qual é a fórmula de cálculo da corrente?

**R1:** Se você acha que a [parte do princípio](#princípio-de-funcionamento) é muito complicada, vamos colocá‑la de uma forma simples. A corrente no circuito a ser testado excita o campo magnético, o que faz com que o valor de resistência dos elementos GMR mude. E a mudança de resistência na ponte causa uma mudança na tensão na saída do chip. Chamamos a saída de tensão de **V<sub>IOUT</sub>**.

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens é o coeficiente que converte a corrente em uma tensão de saída. Para este módulo, ele é 800mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> é o valor de corrente no circuito a ser testado, unidade mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> é a tensão de saída quando o I<sub>p</sub> é 0mA (o que significa que não há corrente no circuito a ser testado), unidade mV.

Aqui está o valor atual: 

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

Agora, vamos revisar a figura 5, explicaremos por que o valor de corrente da saída não é 0 quando o valor de corrente real no circuito a ser testado é 0. Como você pode ver na figura 5, o **initialValue** é 283,20mV, que é o **V<sub>IOUT</sub>**; a corrente é 22,75mA, que é o **I<sub>p</sub>**. Quanto ao **V<sub>IOUT(Q)</sub>**, ele é o **Vref** que definimos no código.
Na figura 5, ele é 265. E o **Sens** é 800mA/V, que é 800mA/1000mV. Agora, é só fazer algumas contas:

<div><p style={{textAlign: 'center'}}>
  {'{'}(283.20mV-265mV) / (800mA/1000mV){'}'} = 22.75mA
</p></div>

Então, na figura 6, quando definimos o **Vref** como 283,20, o **Ip** passa a ser 0mA.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove%20-%202.5A%20DC%20Current%20Sensor(ACS70331).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo de esquemático do Grove - 2.5A DC Current Sensor(ACS70331)](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove%20-%202.5A%20DC%20Current%20Sensor(ACS70331).zip)
- **[PDF]** [Folha de dados do ACS70331](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

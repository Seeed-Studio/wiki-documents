---
description: Grove - ADC de 16 bits e 4 canais (ADS1115)
title: Grove - ADC de 16 bits e 4 canais (ADS1115)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-16-bit-ADC-ADS1115
sku: 109020041
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-16-bit-ADC-ADS1115/
---

<!-- ---
name: Grove - 4-Channel 16-bit ADC(ADS1115)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 109020041
--- -->

![](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png)

Para microcontroladores sem conversor analógico-digital, ou quando você precisa de um ADC mais preciso. Nós fornecemos o Grove - ADC de 16 bits e 4 canais (ADS1115), um ADC de 4 canais baseado no ADS1115 da Texas Instrument, que é um chip ADC de 16 bits de alta precisão e baixo consumo de energia. Ele suporta 4 entradas de terminação simples ou 2 entradas diferenciais. Além disso, possui uma taxa de dados programável que varia de 8 SPS a 860 SPS com ganho programável interno (até x16) para sinais pequenos.

O módulo também contém uma porta Grove que é internamente conectada ao canal 0 e canal 1, o que o torna mais fácil de usar com o ecossistema Grove.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Ampla faixa de alimentação: 2,0V ~ 5,5V, suporta sistema de 3,3 ou 5V
- ADC de alta resolução de 16 bits
- Taxa de dados programável: 8 SPS a 860 SPS
- Ganho programável interno: x16 com referência de tensão interna de baixa deriva e oscilador
- O PGA integrado tem ganho ajustável e pode ser controlado por software
- 4 entradas de terminação simples ou 2 entradas diferenciais

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de entrada|3,3V / 5V|
|Resolução do ADC| 16 bits |
|Taxa de dados programável|8SPS - 860 SPS|
|Canais| Entrada de 4 canais de terminação simples ou entrada de 2 canais diferenciais|
|Interface|I2C, Endereço padrão: 0x48|

## Visão geral de hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"/></div>

## Plataformas compatíveis

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - ADC de 16 bits (ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - ADC de 16 bits (ADS1115) à porta **I2C** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino a um PC por meio de um cabo USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"/></div>

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) do Github.

:::note
Consulte How to install library para [instalar a biblioteca](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para Arduino.
:::

- **Passo 2.** Reinicie a IDE do Arduino. Abra o exemplo **Seeed_Arduino_ADS1115** pelo caminho: **File** → **Examples** → **Grove - ADS1115** → **single_ended**.

O código de exemplo `single_ended` é o seguinte:

```Cpp
#include "ADS1115.h"

#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    ADS1115<SoftwareWire> ads(myWire);//IIC
#else
    #include <Wire.h>
    ADS1115<TwoWire> ads(Wire);//IIC
#endif

void setup(void)
{
    Serial.begin(115200);
    while(!ads.begin(0x48)){
        Serial.print("ads1115 init failed!!!");
        delay(1000);
    }
    //ads.begin(0x49)
    //ads.begin(0x4A)
    //ads.begin(0x4B)

    ads.setOperateMode(ADS1115_OS_SINGLE);
    ads.setOperateStaus(ADS1115_MODE_SINGLE);

  ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x gain +/- 6.144V  1 bit =  0.1875mV (default)
    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x gain   +/- 4.096V  1 bit =  0.125mV
    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x gain   +/- 2.048V  1 bit =  0.0625mV
    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x gain   +/- 1.024V  1 bit =  0.03125mV
    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x gain   +/- 0.512V  1 bit =  0.015625mV
    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x gain  +/- 0.256V  1 bit =  0.0078125mV

    ads.setSampleRate(ADS1115_DR_8); //8 SPS
    // ads.setSampleRate(ADS1115_DR_16); //16 SPS
    // ads.setSampleRate(ADS1115_DR_32); //32 SPS
    // ads.setSampleRate(ADS1115_DR_64); //64 SPS
    // ads.setSampleRate(ADS1115_DR_128); //128 SPS
    // ads.setSampleRate(ADS1115_DR_250); //250 SPS
    // ads.setSampleRate(ADS1115_DR_475); //475 SPS
    // ads.setSampleRate(ADS1115_DR_860); //860 SPS
}
void loop(void)
{
    int16_t adc0,adc1,adc2,adc3;
    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND
    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND
    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND
    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND
    Serial.print("AIN0: "); Serial.println(adc0);
    Serial.print("AIN1: "); Serial.println(adc1);
    Serial.print("AIN2: "); Serial.println(adc2);
    Serial.print("AIN3: "); Serial.println(adc3);
    Serial.println(" ");
    delay(1000);
}
```

- **Passo 3.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de baud para **115200**.

- **Passo 5.** O resultado deve ser assim para 4 canais:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"/></div>

:::note
Neste exemplo, o ganho de 2/3x é definido, portanto é necessário multiplicar o valor por 0,1875mV. Por exemplo, 10201 x 0,1875mV = 1,91V.
:::

### Brincar com Raspberry Pi

### Hardware

| Raspberry Pi | Grove Base Hat para RasPi | Grove - ADC de 16 bits (ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](#)|

### Software

O Grove - ADC de 16 bits (ADS1115) tem o mesmo uso que o 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) e, portanto, siga os tutoriais [**aqui**](https://wiki.seeedstudio.com/pt-br/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started).

### Brincar com Wio Terminal

**Materiais necessários**

| Wio Terminal | Grove - ADC de 16 bits (ADS1115) | Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](#)|[Adquira agora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **Passo 1.** Conecte o Grove - ADC de 16 bits (ADS1115) à porta **I2C** do Wio Terminal.

- **Passo 2.** Conecte o Wio Terminal a um PC por meio de um cabo USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"/></div>

#### Software

- **Passo 1.** Baixe a biblioteca [Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) do Github.

:::note
Siga o [Wio Terminal's get started](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/) antes dos passos a seguir.
:::

- **Passo 2.** Baixe o [**código de exemplo**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115) aqui.

- **Passo 3.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Ajuste o sensor rotativo e você verá a tensão correspondente na tela LCD do Wio Terminal:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"/></div>

### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Wio Terminal | Grove - ADC de 16 bits (ADS1115) |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](#)|

- **Passo 2.** Conecte o Grove - 16 Bit ADC(ADS1115) à porta **I2C** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC através de um cabo USB Type-C.

#### Software

- **Passo 1.** Siga [**ArduPy Getting Started**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy com a biblioteca ADS1115 esteja gravado no Wio Terminal. Para mais informações, siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-ads1115
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-ads1115.py`:

Nota: Para mais APIs, verifique [aqui](https://github.com/Seeed-Studio/seeed-ardupy-ads1115).

```python
from arduino import grove_ads1115
import time

ads = grove_ads1115()
ads.setPGAGain(0x0000)

while True:
    print ("The channel0 value is :", ads.channel0)
    print ("The channel1 value is :", ads.channel1)
    print ("The channel2 value is :", ads.channel2)
    print ("The channel3 value is :", ads.channel3)
    time.sleep(1)
```

- **Passo 4.** Salve o `ArduPy-ads1115.py` em um local que você conheça. Execute o seguinte comando e **substitua** `<YourPythonFilePath>` pelo local do seu arquivo `ArduPy-ads1115.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
```

- **Passo 5.** Veremos o valor do ADC exibido no terminal como abaixo:

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The channel0 value is : 17487.0
The channel1 value is : 3790.0
The channel2 value is : 3170.0
The channel3 value is : 3122.0
The channel0 value is : 17486.0
The channel1 value is : 3272.0
The channel2 value is : 3064.0
The channel3 value is : 3063.0
The channel0 value is : 17486.0
The channel1 value is : 3482.0
The channel2 value is : 3201.0
The channel3 value is : 3185.0
The channel0 value is : 17487.0
The channel1 value is : 17261.0
The channel2 value is : 5055.0
The channel3 value is : 4480.0
The channel0 value is : 11839.0
The channel1 value is : 3540.0
The channel2 value is : 1690.0
The channel3 value is : 1562.0
```

## Precauções

:::caution
Ao usar vários canais em **A0** e **A1** no borne de parafuso, lembre-se de não conectar nada na interface Grove, pois ela também usa A0 e A1. ISSO PODE SER PERIGOSO AO LIDAR COM BATERIAS.
:::

1. Durante o uso, a tensão máxima **não deve exceder 5,5 V**.

2. Ao usar a aquisição multicanal, a frequência de amostragem deve ser configurada acima de 250SPS, caso contrário a frequência de amostragem ficará muito lenta e pode haver a possibilidade de o canal anterior não ser convertido antes de o próximo canal ser iniciado, resultando em falha de funcionamento

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivos de Esquemático do Grove - 16 Bit ADC(ADS1115)](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip)

- **[PDF]** [Datasheet do Texas Instruments ADS1115](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf)

## Suporte Técnico e Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

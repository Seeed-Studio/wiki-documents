---
description: Grove - Sensor de Gás Multicanal
title: Grove - Sensor de Gás Multicanal
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Multichannel_Gas_Sensor
sku: 101020088
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Multichannel_Gas_Sensor/
---
<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor2.png" />
      </td>
    </tr>
  </tbody></table>



O Grove – Sensor de Gás Multicanal é um sensor de detecção ambiental com um MiCS-6814 integrado que pode detectar muitos gases prejudiciais à saúde, e três gases podem ser medidos simultaneamente devido aos seus múltiplos canais, portanto ele pode ajudá‑lo a monitorar a concentração de mais de um gás.

Este sensor pertence ao **sistema Grove**, e você pode conectá‑lo ao **Base shield** e trabalhar com o Arduino diretamente sem nenhum fio jumper. Sua interface é I2C, portanto conecte‑o à porta I2C do Base shield e então você já pode começar a usá‑lo.

<div class="admonition caution">
<p class="admonition-title">Cuidado</p>
O valor do sensor apenas reflete a tendência aproximada da concentração de gás dentro de uma faixa de erro permissível, ele NÃO representa a concentração exata de gás. A detecção de certos componentes no ar geralmente requer um instrumento mais preciso e caro, o que não pode ser feito com um único sensor de gás. Se o objetivo do seu projeto é obter a concentração de gás em um nível muito preciso, então não recomendamos este sensor de gás.
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)

:::tip
     Atualizamos o produto para [Multichannel Gas Sensor v2](https://wiki.seeedstudio.com/pt-br/Grove-Multichannel-Gas-Sensor-V2/) com documentos mais detalhados e mais módulos de sensores onboard. Além disso, lançamos o [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor atende às suas necessidades.
:::

## Antes de usar

### Leituras relacionadas

Sugerimos que você leia estes conteúdos antes de usar o sensor de gás, isso o ajudará a aprender mais sobre Arduino e nossos produtos, e também facilitará o uso de hardware open source.

-   Primeiros passos com Arduino
-   O que é o sistema Grove
-   Por que eu preciso de um Base shield?

Depois de ler isso, você saberá como usar o Base shield com produtos Grove para funcionar bem com o Arduino. Vamos começar!

### O que preparar

Este tutorial incluirá alguns produtos necessários:

-   Arduino UNO R3 ou Seeeduino v4
-   Base Shield
-   Grove - Multichannel Gas Sensor

Visão geral de hardware
-----------------

<!-- <center>
![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png)
</center> -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" alt="pir" width={600} height="auto" /></p>


Quatro pinos são indicados na figura acima

| Rótulo do pino | Descrição             |
|-----------|-------------------------|
| GND       | Conectar ao terra       |
| VCC       | Fonte de alimentação: 3.3V - 5V |
| SDA       | Dados I2C               |
| SCL       | Clock I2C               |

A fonte de alimentação é entre 3.3V e 5V, portanto este sensor pode ser compatível com um microcontrolador cujo valor de saída seja 3.3V.

Recursos
-------

-   Três elementos de detecção totalmente independentes em um único encapsulamento
-   Construído com ATmega168PA
-   Interface I2C com endereço programável
-   Potência de aquecimento pode ser desligada para baixo consumo
-   Gases detectáveis
    -   Monóxido de carbono CO 1 – 1000ppm
    -   Dióxido de nitrogênio NO2 0.05 – 10ppm
    -   Etanol C2H6OH 10 – 500ppm
    -   Hidrogênio H2 1 – 1000ppm
    -   Amônia NH3 1 – 500ppm
    -   Metano CH4 &gt;1000ppm
    -   Propano C3H8 &gt;1000ppm
    -   Iso-butano C4H10 &gt;1000ppm

Diagrama de blocos
-------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg" alt="pir" width={600} height="auto" /></p>


Plataformas compatíveis
<!-- -------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::


Características elétricas
--------------------------

| Item          | Condição  | Mín. | Típ. | Máx. | Unidade |
|---------------|------------|------|------|------|------|
| Tensão        | -          | 3.1  | 3.3  | 5.25 | V    |
| Ripple        | @Potência Máx | -    | 80   | 100  | mV   |
| Potência de aquecimento | -          | -    | -    | 88   | mW   |
| Potência Máx  | -          | -    | -    | 150  | mW   |
| Precisão do ADC | -        | -    | 10   | -    | Bits |
| Taxa I2C      | -          | -    | 100  | 400  | kHz  |
| VIL           | @I2C       | -0.5 | -    | 0.99 | V    |
| VIH           | @I2C       | 2.31 | -    | 5.25 | V    |

### Desempenho do sensor RED

| Característica do sensor RED  | Símbolo | Típ | Mín | Máx  | Unidade |
|----------------------------|--------|-----|-----|------|------|
| Resistência de detecção no ar  | R0     | -   | 100 | 1500 | kΩ   |
| Faixa típica de detecção de CO | FS     | -   | 1   | 1000 | ppm  |
| Fator de sensibilidade         | SR     | -   | 1.2 | 50   | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg" alt="pir" width={600} height="auto" /></p>



### Desempenho do sensor OX

| Característica do sensor OX    | Símbolo | Típ | Mín  | Máx | Unidade |
|-----------------------------|--------|-----|------|-----|------|
| Resistência de detecção no ar   | R0     | -   | 0.8  | 20  | kΩ   |
| Faixa típica de detecção de NO2 | FS     | -   | 0.05 | 10  | ppm  |
| Fator de sensibilidade          | SR     | -   | 2    | -   | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### Desempenho do sensor NH3

| Característica do sensor NH3   | Símbolo | Típ | Mín | Máx  | Unidade |
|-----------------------------|--------|-----|-----|------|------|
| Resistência de detecção no ar   | R0     | -   | 10  | 1500 | kΩ   |
| Faixa típica de detecção de NH3 | FS     | -   | 1   | 300  | ppm  |
| Fator de sensibilidade          | SR     | -   | 1.5 | 15   | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg" alt="pir" width={600} height="auto" /></p>


Primeiros passos
-------------

:::warning
    O sensor precisa ser pré-aquecido por pelo menos 10 minutos antes de obter dados estáveis.
:::
**Instalação de hardware:**

1.Conecte o Grove - Multichannel Gas Sensor ao Seeeduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg" alt="pir" width={600} height="auto" /></p>


**Enviar código:**

2.Faça o download de [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor/archive/master.zip) e [instale](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) na biblioteca do Arduino.

3.Abra o código diretamente pelo caminho: File -> Example -> Mutichannel_Gas_Sensor-> ReadSensorValue_Grove.

O código de ReadSensorValue_Grove é apresentado abaixo.

```c
// Read Data from Grove - Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Serial.begin(115200);  // start serial for output
    Serial.println("power on!");
    gas.begin(0x04);//the default I2C address of the slave is 0x04 ; for verison 2 of the multichannel gas sensor the i2c address is 0x08
    gas.powerOn();
    Serial.print("Firmware Version = ");
    Serial.println(gas.getVersion());
}

void loop()
{
    float c;

    c = gas.measure_NH3();
    Serial.print("The concentration of NH3 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CO();
    Serial.print("The concentration of CO is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_NO2();
    Serial.print("The concentration of NO2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C3H8();
    Serial.print("The concentration of C3H8 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C4H10();
    Serial.print("The concentration of C4H10 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CH4();
    Serial.print("The concentration of CH4 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_H2();
    Serial.print("The concentration of H2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C2H5OH();
    Serial.print("The concentration of C2H5OH is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    delay(1000);
}
```

4.Faça o upload do código. Lembre-se de selecionar Seeeduino Uno no menu Tools | Board do ambiente Arduino e selecionar a porta serial correta que o Arduino está usando.

Ao abrir o monitor serial, você pode ver os dados brutos lidos do sensor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg" alt="pir" width={600} height="auto" /></p>


:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Atualizar Firmware
-----------------

Este módulo Grove possui um MCU ATmega168 que vem gravado com um firmware de fábrica. A versão foi atualizada para V2 em 11/Nov/2016.
Envie o código abaixo para detectar a versão do seu sensor.

```c
// Get firmware version of Grove Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    Serial.begin(115200);
    gas.begin(SENSOR_ADDR);

    unsigned char version = gas.getVersion();
    Serial.print("Version = ");
    Serial.println(version);    
}

void loop()
{
    // nothing to do
}
```

Se a versão do seu sensor for V1, recomendamos que você atualize para V2 para obter um desempenho melhor.

Para atualizar o firmware, você precisa de:

* Um Arduino UNO/Seeeduino V3/
* 6 fios dupont 
* Ferro de solda

Há um pad ICSP na parte de trás da placa; você precisa conectar esses pads a uma placa Arduino.

| Sensor | Arduino |
|--------|---------|
| MISO   | D12     |
| SCK    | D13     |
| NRST   | D10     |
| GND    | GND     |
| MOSI   | D11     |
| VCC    | 5V      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg" alt="pir" width={600} height="auto" /></p>


Em seguida, abra o exemplo **UpdateFrimware** no seu Arduino, abra o Serial Monitor e você verá algumas informações impressas.
Digite um 'g' para começar.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png" alt="pir" width={600} height="auto" /></p>



Calibração
--------------

Se você sempre obtiver um valor não autêntico, tente calibrar o sensor. 
Abra o exemplo **calibration** e envie para o seu Arduino, abra o Serial Monitor para obter informações enquanto ele está calibrando. 

:::note
    A calibração é feita antes de os módulos saírem da fábrica. Se você quiser recalibrar, certifique-se de que as condições do ar estejam limpas. E a calibração pode levar de alguns minutos até meia hora. 
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Recursos
---------

-   [Grove - Multichannel Gas Sensor v1.0 sch](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_sch.pdf)
-   [Grove - Multichannel Gas Sensor eagle files](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip)
-   [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)
-   [MiCS-6814 Datasheet](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Multichannel_Gas_Sensor -->

FAQ
---------
* **P1. Como alterar o endereço I2C do módulo**

    * *R1. Abra o exemplo I2C_Address e execute-o.*

* **P2. Eu alterei o endereço I2C e, por azar, esqueci qual é.**

    * *R2. Não se preocupe, execute o exemplo factory_setting para voltar ao padrão. Observe que os dados de calibração também voltarão ao padrão de fábrica.*

* **P3. O multichannel gas sensor funciona com Wio GPS e Wio LTE?**

    * *R3. Sim, consulte o código abaixo. 

Wio GPS: 

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (12)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;

    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);

    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);

    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;

    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);

    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);

    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```


Wio LTE:

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (26)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    // SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;

    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);

    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);

    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;

    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);

    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);

    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```


## Projetos

**Smart Crops: Implementando IoT na Agricultura Convencional!**: Nossa missão com a natureza é preservá-la, projetando e implementando tecnologias e métodos de monitoramento com a ajuda de IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais
Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8-em-1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>



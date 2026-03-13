---
description: Grove - Acelerômetro Analógico de 3 Eixos 40g (ADXL356C)
title: Grove - Acelerômetro Analógico de 3 Eixos 40g (ADXL356C)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C
sku: 101020638
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C/
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png" alt="pir" width={600} height="auto" /></p>

Você pode encontrar uma variedade de [acelerômetros de 3 eixos](https://www.seeedstudio.com/tag/accelerometer.html) em nosso site que podem atender a diferentes cenários e necessidades. Desta vez, trazemos a você os acelerômetros triaxiais da série ADI ADXL de grau industrial, alta estabilidade, alta precisão e baixo consumo de energia.  

O Grove - Acelerômetro Analógico de 3 Eixos ±40g (ADXL356C) é um acelerômetro [MEMS](https://www.seeedstudio.com/tag/MEMS.html) com saída analógica. Este sensor possui duas faixas de medição selecionáveis: ±10g, ±40g. Você só precisa fazer um pequeno trabalho de calibração para obter um resultado relativamente preciso. A porta Grove on-board pode fornecer dados analógicos de dois canais: um para o eixo Z e um para o eixo X/Y. Você pode escolher a saída do sinal do eixo X ou do eixo Y com a chave on-board. Também é possível usar o furo de soldagem de 4 pinos para obter a saída dos eixos X/Y/Z ao mesmo tempo. O consumo de energia deste sensor é extremamente baixo, 150 μA no modo de operação normal e apenas 21 μA no modo de espera. Você pode alternar o modo de operação alterando a conexão do pad na parte traseira.

A Série de Acelerômetros ADI ADXL inclui quatro produtos que atenderão às suas diferentes necessidades de faixa e tipo de saída:

Product|Measurement Range|Output Port|Power Consumption
-----|-----|----|----
[Grove - 3-Axis Analog Accelerometer ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analog|measurement mode:150 μA / standby mode:21 μA
[Grove - 3-Axis Analog Accelerometer ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analog|measurement mode:150 μA / standby mode:21 μA
[Grove - 3-Axis Digital Accelerometer ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|Digital I2C|measurement mode:200μA
[Grove - 3-Axis Digital Accelerometer ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|Digital I2C|measurement mode:22μA

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)

## Recursos

- Ruído líder na indústria, desvio mínimo de offset em função da temperatura e estabilidade de longo prazo, permitindo aplicações de precisão com calibração mínima.
- O encapsulamento hermético oferece excelente estabilidade de longo prazo; offset de 0 g vs. temperatura (todos os eixos): 0,75 mg/°C máximo
- O baixo ruído do ADXL356 em frequências mais altas é ideal para monitoramento de condição sem fio.
- Baixo desvio, baixo ruído
- Consumo de energia ultrabaixo: modo de operação normal - 150 μA, modo de espera 21 μA.

## APLICAÇÕES

- Unidades de medição inercial (IMUs)/sistemas de referência de altitude e rumo (AHRSs)
- Sistemas de estabilização de plataforma
- Monitoramento de integridade estrutural
- Monitoramento de condição
- Imageamento sísmico
- Detecção de inclinação
- Robótica

## Especificação

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating ambient temperature| -40 – 125℃|
|Output Full-Scale Range (FSR)|±10g / ±40g|
|Sensitivity at X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiometric to V<sub>1P8ANA)</sub>|±10 g@80 mv/g (Typ.) / ±40 g@20 mv/g (Typ.)|
|Sensitivity Change due to Temperature|±0.01%/°C  (TA = −40°C to +125°C)|
|0g OFFSET / (Referred to V1P8ANA/2)|±125 mg(Typ.)|
|Output interface|Analog|

## Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield |Grove 3-aixs Accelermeter ADXL356C|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 com o Base Shield.

:::note
  **1** Conecte o cabo USB com cuidado; caso contrário, você pode danificar a porta. Use o cabo USB com 4 fios internos, pois o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar. 
   **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - Acelerômetro Analógico de 3 Eixos ±20g (ADXL356B) à porta **A0** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [Seeed_ADXL_356.ino](https://github.com/linux-downey/Seeed_ADXL356/blob/master/Seeed_ADXL_356/Seeed_ADXL_356.ino) no Github.

ou você pode simplesmente copiar o código a seguir.

:::note
       Este código foi escrito tanto para o ADXL_356B quanto para o ADXL_356C e, se você precisar implementá-lo no 356C, mude a linha `#define MODUEL_RANGE  20` para `#define MODUEL_RANGE  40`, caso contrário ele não funcionará.
:::

```cpp

#include <Arduino.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

float cali_data_xy;
float cali_data_z;
int16_t scale;

#define MODUEL_RANGE           20

#define MODULE_VOL             1.8

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf_xy[CALI_BUF_LEN];
float cali_buf_z[CALI_BUF_LEN];

#define XY_PIN   A0
#define Z_PIN    A1

float deal_cali_buf(float *buf)
{
 float cali_val = 0;

 for(int i = 0;i < CALI_BUF_LEN;i++)
 {
  cali_val += buf[i];
 }
 cali_val = cali_val/CALI_BUF_LEN;
 return (float)cali_val;
}


void calibration(void)
{
 SERIAL.println("Please Place the module horizontally!");
 delay(1000);
 SERIAL.println("Start calibration........");

 for(int i=0;i<CALI_BUF_LEN;i++)
 {
  cali_buf_xy[i] = analogRead(XY_PIN);;
  cali_buf_z[i] = analogRead(Z_PIN);
  delay(CALI_INTERVAL_TIME);
 }
 cali_data_xy =  deal_cali_buf(cali_buf_xy);
 cali_data_z =  (float)deal_cali_buf(cali_buf_z);
 SERIAL.println("Calibration OK!!");
 scale = (float)1000 / (cali_data_z - cali_data_xy);
 cali_data_z -= (float)980 / scale;
 SERIAL.println(cali_data_xy);
 SERIAL.println(cali_data_z);
 SERIAL.println(scale);

}



void AccMeasurement(void)
{
 int16_t val_xy = 0;
 int16_t val_z = 0;
 val_xy = analogRead(XY_PIN);
 val_z = analogRead(Z_PIN);

 SERIAL.print("Raw data xy  = ");
 SERIAL.println(val_xy);
 SERIAL.print("Raw data z  = ");
 SERIAL.println(val_z);
 SERIAL.println(" ");

 val_xy -= cali_data_xy;
 val_z -= cali_data_z;
 SERIAL.print("x or y position acc is ");
 SERIAL.print(val_xy * scale / 1000.0);
 SERIAL.println(" g ");
 SERIAL.print("z position acc is ");
 SERIAL.print(val_z * scale / 1000.0);
 SERIAL.println(" g ");
 SERIAL.println(" ");
 SERIAL.println(" ");
 SERIAL.println(" ");
 delay(1000);
}

void setup()
{
 SERIAL.begin(115200);
 #ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    analogReadResolution(12);
    #endif
 calibration();
 SERIAL.print("Scale = ");
 SERIAL.println(scale);

}



void loop()
{
 AccMeasurement();
}

```

- **Passo 2.** Faça o upload da demonstração. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

- **Passo 4. Calibração** Siga as dicas de calibração no Serial Monitor, em apenas alguns passos a calibração será concluída

- **Passo 5.** Agora você pode usar este sensor, e a saída será assim:

```cpp
Please Place the module horizontally!
Start calibration........
Calibration OK!!
184.93
185.03
121
Scale = 121
Raw data xy  = 185
Raw data z  = 193

x or y position acc is 0.00 g 
z position acc is 0.85 g 



Raw data xy  = 188
Raw data z  = 196

x or y position acc is 0.36 g 
z position acc is 1.21 g
```

:::note
        Se você usar a porta Grove para enviar os dados, os eixos X e Y não podem ser enviados ao mesmo tempo; você pode usar a chave integrada para selecionar o canal de saída. Se quiser enviar X/Y/Z ao mesmo tempo, você pode usar o furo de solda de 4 pinos.
:::

## FAQ

**P1: Como selecionar a faixa de medição de ±10g?**  

R1: Para alterar a faixa de medição, você precisa modificar tanto o hardware quanto o software. Primeiro, corte o pad traseiro que está conectado a ±40g e ressolde-o em ±10g. Em seguida, modifique o código na linha 12 do bloco de código

```
#define MODUEL_RANGE           40
```

```
\downdownarrows
```

```
#define MODUEL_RANGE           10
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - 3-Axis Analog Accelerometer ±20g (ADXL356C)](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip)
- **[PDF]** [Folha de dados ADXL 356](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/ADXL356B.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

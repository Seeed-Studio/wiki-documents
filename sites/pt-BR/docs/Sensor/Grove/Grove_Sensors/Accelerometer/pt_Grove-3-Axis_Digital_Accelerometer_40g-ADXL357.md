---
description: Grove - Acelerômetro Digital Triaxial 40g (ADXL357)
title: Grove - Acelerômetro Digital Triaxial 40g (ADXL357)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer_40g-ADXL357
sku: 101020639
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357/
---



<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png" alt="pir" width={600} height="auto" /></p>

Você pode encontrar uma variedade de [acelerômetros triaxiais](https://www.seeedstudio.com/tag/accelerometer.html) em nosso site que podem atender a diferentes cenários e necessidades. Desta vez, trazemos a você os acelerômetros triaxiais da série industrial ADI ADXL, com alta estabilidade, alta precisão e baixo consumo de energia.  

O Grove - 3-Axis Digital Accelerometer ±40g (ADXL357) é um Acelerômetro [MEMS](https://www.seeedstudio.com/tag/MEMS.html) com saída digital. Este sensor possui três faixas de medição e precisões selecionáveis: ±10g@51200 LSB/g, ±20g@25600 LSB/g, ±40g@12800 LSB/g. Você só precisa fazer um pequeno trabalho de calibração para obter um resultado relativamente preciso. Ele fornece todos os dados através da porta Grove I2C, e o endereço I2C também é selecionável. Além disso, também fornecemos dois pinos de saída de interrupção que podem ser configurados em 4 modos.

A Série de Acelerômetros ADI ADXL inclui quatro produtos que atenderão às suas diferentes necessidades de faixa e saída:

Product|Measurement Range|Output Port
-----|-----|----
[Grove - 3-Axis Analog Accelerometer ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analógico
[Grove - 3-Axis Analog Accelerometer ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analógico
[Grove - 3-Axis Digital Accelerometer ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|I2C digital
[Grove - 3-Axis Digital Accelerometer ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|I2C digital

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)

## Recursos

- Ruído líder na indústria, desvio mínimo de offset em função da temperatura e estabilidade de longo prazo, possibilitando aplicações de alta precisão com calibração mínima.
- Invólucro hermético oferece excelente estabilidade de longo prazo; offset de 0 g vs. temperatura (todos os eixos): 0,75 mg/°C máximo
- Densidade de ruído ultrabaixa (todos os eixos): 80 μg/√Hz
- Conversor analógico‑digital (ADC) de 20 bits integrado
- Baixo desvio, baixo ruído e baixo consumo de energia
- Suporta saída de interrupção de dois canais
- Suporta FIFO (96*21 bits)

## APLICAÇÕES

- Unidades de medição inercial (IMUs) / sistemas de referência de altitude e rumo (AHRSs)
- Sistemas de estabilização de plataforma
- Monitoramento de integridade estrutural
- Monitoramento de condição
- Imageamento sísmico
- Detecção de inclinação
- Robótica

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3,3V / 5V|
|Temperatura ambiente de operação| -40 – 125℃|
|Sensibilidade em X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiométrico para V<sub>1P8ANA)</sub>|±10 g@80 mv/g (Típ.) / ±20 g@40 mv/g (Típ.) / ±40 g@20 mv/g (Típ.)|
|Mudança de sensibilidade devido à temperatura|±0,01%/°C  (TA = −40°C a +125°C)|
|OFFSET de 0g / (referido a V1P8ANA/2)|±125 mg (Típ.)|
|Interface de saída|Digital|

## Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

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

| Seeeduino V4.2 | Base Shield |Grove Acelerômetro Triaxial ADXL357|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 com o Base Shield.

:::note
  **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

 **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - 3-Axis Analog Accelerometer ±20g (ADXL357) à porta **I2c** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a [biblioteca Seeed_ADXL_357](https://github.com/Seeed-Studio/Seeed_ADXL357B) no Github.

- **Passo 2**. Consulte Como [instalar biblioteca](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3**. Em seguida, abra `example/ADXL_357/basic_demo`
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png" alt="pir" width={600} height="auto" /></p>

```cpp
//basic_demo.ino
#include "Seeed_adxl357b.h"


#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif


#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250
int32_t cali_buf[3][CALI_BUF_LEN];
int32_t cali_data[3];

float factory;

Adxl357b  adxl357b;


int32_t deal_cali_buf(int32_t *buf)
{
 int32_t cali_val = 0;

 for(int i = 0;i < CALI_BUF_LEN;i++)
 {
  cali_val += buf[i];
 }
 cali_val = cali_val/CALI_BUF_LEN;
 return (int32_t)cali_val;
}


void calibration(void)
{
 int32_t x;
 SERIAL.println("Please Place the module horizontally!");
 delay(1000);
 SERIAL.println("Start calibration........");

 for(int i=0;i<CALI_BUF_LEN;i++)
 {
  if(adxl357b.checkDataReady())
  {
   if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))
   {
   }
  }
  delay(CALI_INTERVAL_TIME);
  // SERIAL.print('.');
 }
 // SERIAL.println('.');
 for(int i=0;i<3;i++)
 {
  cali_data[i] =  deal_cali_buf(cali_buf[i]);
  SERIAL.println(cali_data[i]);
 }
 x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);
 factory = 1.0 / (float)x;
 // SERIAL.println(x);
 SERIAL.println("Calibration OK!!");
}


void setup(void)
{
 uint8_t value = 0;
 float t;

 SERIAL.begin(115200);
 if(adxl357b.begin())
 {
  SERIAL.println("Can't detect ADXL357B device .");
  while(1);
 }
 SERIAL.println("Init OK!");
 /*Set full scale range to ±40g*/
 adxl357b.setAdxlRange(FOURTY_G);
 /*Switch standby mode to measurement mode.*/
 adxl357b.setPowerCtr(0);
 delay(100);
 /*Read Uncalibration temperature.*/
 adxl357b.readTemperature(t);

 SERIAL.print("Uncalibration  temp = ");
 SERIAL.println(t);
 /**/
 calibration();

}


void loop(void)
{
 int32_t x,y,z;
 uint8_t entry = 0;
 if(adxl357b.checkDataReady())
 {
  if(adxl357b.readXYZAxisResultData(x,y,z))
  {
   SERIAL.println("Get data failed!");
  }
  SERIAL.print("X axis = ");
  SERIAL.print(x*factory);
  SERIAL.println('g');
  SERIAL.print("Y axis = ");
  SERIAL.print(y*factory);
  SERIAL.println('g');
  SERIAL.print("Z axis = ");
  SERIAL.print(z*factory);
  SERIAL.println('g');

 }
 delay(100);
}


```

- **Passo 4.** Faça o upload do demo. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

- **Passo 6. Calibração** aguarde a calibração, em apenas alguns segundos a calibração será concluída

- **Passo 7.** Agora você pode usar este sensor, e a saída será assim:

```cpp
Start calibration.......Init OK!
Uncalibration  temp = 29.20
Please Place the module horizontally!
Start calibration........
-1652
11143
6063
Calibration OK!!
X axis = -1.24g
Y axis = 8.50g
Z axis = 4.55g
X axis = -1.21g
Y axis = 8.43g

```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo de esquemático do Grove-3-Axis_Digital_Accelerometer-40g-ADXL357](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip)
- **[PDF]** [Datasheet do ADXL 357](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf)

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

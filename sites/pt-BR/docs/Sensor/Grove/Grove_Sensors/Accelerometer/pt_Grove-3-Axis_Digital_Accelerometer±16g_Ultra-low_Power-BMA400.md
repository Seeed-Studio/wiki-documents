---
description: Grove - Acelerômetro Digital de 3 Eixos ±16g Ultrabaixo Consumo (BMA400)
title: Grove - Acelerômetro Digital de 3 Eixos ±16g Ultrabaixo Consumo (BMA400)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg" alt="pir" width={600} height="auto" /></p>

O sensor Grove - Acelerômetro Digital de 3 Eixos ±16g Ultrabaixo Consumo (BMA400) é um sensor de aceleração triaxial digital de 12 bits, com recursos inteligentes de interrupção disparados por movimento e posição no chip. Ele pode detectar sua postura de movimento, como Caminhando, Correndo, Parado.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html)

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400)  | Inicial                                                                                               | Nov 2018      |

## Recursos

- Ultrabaixo consumo de energia
- Funcionalidade programável
- FIFO no chip
- Recursos de interrupção no chip

> Modo automático de baixa potência/Despertar automático  
> Atividade/Inatividade  
> Contador de passos  
> Reconhecimento de atividade (Caminhando, Correndo, Parado)  
> Detecção de orientação  
> Toque/Toque duplo

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Consumo de energia|18uA @5V / 14uA @3.3V|
|Temperatura de Operação|-40℃ ~ +85℃|
|Faixa de Aceleração|±2g, ±4g, ±8g, ±16g|
|Sensibilidade|1024LSB/g / @±2g 512LSB/g /  @±4g256LSB/g / @±8g128LSB/g / @±16g|
|Interface|I^2^C|
|Endereço I^2^C|0x15(padrão) / 0x14(opcional)|
|Tamanho|C: 40mm L: 20mm A: 10mm|
|Peso|3.2g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 10mm|
|Peso bruto|10g|

## Aplicações típicas

- Contagem de passos com consumo de corrente ultrabaixo para ampla vida útil da bateria
- Aplicações de fitness / Rastreamento de atividades
- Detecção de toque / toque duplo
- Detecção de queda para registro de garantia
- Medições de janela/porta para controle climático e sistemas de alarme

## Visão Geral do Hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

**Alimentação**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg" alt="pir" width={600} height="auto" /></p>

A tensão típica do BMA400 é 1,8 V, portanto usamos o chip [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para fornecer 1,8 V estáveis. A entrada do XC6206P33 varia de 1,8 V a 6,0 V, então você pode usar este módulo com o seu Arduino tanto em 3,3 V quanto em 5 V.

**Circuito de conversão de nível bidirecional**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg" alt="pir" width={600} height="auto" /></p>

Este é um circuito típico de conversão de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I^2^C. O barramento I<sup>2</sup>C deste sensor usa 1,8 V; se o barramento I<sup>2</sup>C do Arduino usar 5 V ou 3,3 V, este circuito será necessário. No esquemático acima, **Q1** e **Q2** são MOSFETs de canal N [CJ2102](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/CJ2102.pdf), que atuam como chaves bidirecionais. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove BMA400 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank">Get One Now</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Acelerômetro Digital de 3 Eixos ±16g Ultrabaixo Consumo (BMA400) à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove BMA400 |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_BMA400](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das três maneiras a seguir：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Grove 3-Axis Digital Accelerometer ±16g Ultra-low Power(BMA400) --> BMA400_Example**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra-o no seu computador clicando em **BMA400_Example.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_3Axis_Digital_Accelerometer_BMA400-master\examples\BMA400_Example**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg" alt="pir" width={600} height="auto" /></p>

    3. Ou você pode simplesmente clicar no ícone <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
 no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na IDE do Arduino.

```cpp

#include "BMA400.h"

float x = 0, y = 0, z = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();

    Serial.begin(115200);
    while(!Serial);
    Serial.println("BMA400 Raw Data");

    while(1)
    {
        if(bma400.isConnection())
        {
            bma400.initialize();
            Serial.println("BMA400 is connected");
            break;
        }
        else Serial.println("BMA400 is not connected");

        delay(2000);
    }
}

void loop(void)
{
    bma400.getAcceleration(&x, &y, &z);
    temp = bma400.getTemperature();

    Serial.print(x);
    Serial.print(",");
    Serial.print(y);
    Serial.print(",");
    Serial.print(z);
    Serial.print(",");

    Serial.print(temp);

    Serial.println();

    delay(50);
}
```

:::warning
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto, recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Faça o upload da demonstração. Se você não sabe como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de baud para **115200**.

:::success
     Se tudo correr bem, poderá ser exibido como abaixo:
:::

```cpp
BMA400 Raw Data
BMA400 is connected
85.94,357.42,916.02,23
-148.44,222.66,464.84,23
-626.95,320.31,1109.38,23
-500.00,-111.33,144.53,23
-398.44,-232.42,433.59,23
-783.20,-255.86,638.67,23
-1453.13,-552.73,822.27,23
```

O formato de dado bruto:

Eixo X/unidade mg; Eixo Y/unidade mg; Eixo Z/unidade mg; temperatura/unidade ℃

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip)

- **[Zip]** [Biblioteca Seeed BMA400](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400/archive/master.zip)

- **[PDF]** [Datasheet BMA400](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/BMA400_datasheet.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

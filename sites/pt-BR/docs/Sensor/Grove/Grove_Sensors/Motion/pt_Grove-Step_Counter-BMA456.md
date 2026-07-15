---
description: Grove - Contador de Passos(BMA456)
title: Grove - Contador de Passos(BMA456)
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Step_Counter-BMA456
sku: 101020583
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Step_Counter-BMA456/
---

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg)

O Grove - Step Counter(BMA456) é baseado no BMA456, que é um módulo de aceleração tri-axial, de baixa gravidade e alto desempenho, extremamente pequeno. Graças ao algoritmo especial da BOSCH, transformamos este módulo em um pedômetro portátil.

Confiável, econômico e, além disso, muito fácil de usar, você pode facilmente adicionar este módulo plug and play aos seus dispositivos vestíveis.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html)

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Step Counter(BMA456) | Inicial                                                                                               | Out 2018      |

## Recursos

- FIFO em chip
- Ultra baixo consumo de energia
- Interrupção em chip
- Funcionalidade programável

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Faixa de Aceleração|±2g, ±4g, ±8g, ±16g|
|Sensibilidade|16384 @±2g / 8192 @±4g / 4096 @±8g / 2048 @±16g|
|Interface|I^2^C|
|Endereço I^2^C|0x19(padrão) / 0x18(opcional)|
|Tamanho|C: 40mm L: 20mm A: 10mm|
|Peso|3.2g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 10mm|
|Peso Bruto|9g|

## Aplicações típicas

- Aplicações com restrições de altura
- Solução Plug and Play de contador de passos com funcionalidade de watermark
- Aplicações de condicionamento físico / Rastreamento de atividades
- Gerenciamento de energia para aplicações vestíveis
- Liga/desliga de display e troca de perfis
- Interface de usuário sem botões de hardware
- Compensação de inclinação de e-compass e sincronização de dados
- Medições de ângulo de alto desempenho

## Visão Geral do Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg)

### Esquemático

**Alimentação**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg)

A tensão típica do BMA456 é 1,8V, então usamos o chip [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para fornecer 1,8V estáveis. A entrada do XC6206P33 varia de 1,8V a 6,0V, portanto você pode usar este módulo com o seu Arduino tanto em 3,3V quanto em 5V.

**Circuito de conversão de nível bidirecional**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg)

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I^2^C. O barramento I<sup>2</sup>C deste sensor usa 3,3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q6** e **Q5** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Step Counter(BMA456) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo com 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Step Counter(BMA456) à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg)

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Step Counter(BMA456) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_BMA456](https://github.com/Seeed-Studio/Seeed_BMA456) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo; você pode abri-lo das três maneiras a seguir：
    1. Abra-o diretamente na Arduino IDE através do caminho: **File --> Examples --> Grove -Step Counter(BMA456) --> step_counter**.
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg)

    2. Abra-o no seu computador clicando em **step_counter.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_BMA456-master\examples\step_counter**, em que **XXXX** é o local onde você instalou a Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg)

    3. Ou, você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp
#include "arduino_bma456.h"

uint32_t step = 0;

void setup(void)
{    
    Serial.begin(115200);
    Serial.println("BMA456 Step Counter");

    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);
    bma456.stepCounterEnable();
}

void loop(void)
{ 
    step = bma456.getStepCounterOutput();

    Serial.print("Step: ");
    Serial.println(step);

    delay(1000);
}
```

:::note
        O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de baud para **115200**.

:::success
     Se tudo correr bem, quando você abrir o Serial Monitor e andar com este sensor ou movê-lo para simular a postura de caminhada, ele poderá mostrar como abaixo:
:::

```cpp
BM
Step: 0
BMA456 Step Counter
Step: 0
Step: 0
...
...
Step: 18
Step: 20
Step: 22
Step: 24
Step: 26
Step: 28
Step: 30
Step: 32
Step: 34
Step: 36
Step: 38
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Step Counter(BMA456) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip)

- **[Zip]** [Biblioteca Seeed BMA456](https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip)

- **[PDF]** [Datasheet BMA456](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

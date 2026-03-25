---
description: Grove - Coulomb Counter 3.3V a 5V (LTC2941)
title: Grove - Coulomb Counter 3.3V a 5V (LTC2941)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Coulomb_Counter_3.3V_to_5V-LTC2941
sku: 101020593
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/
---


<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/main.jpg" /></div>

O coulomb (símbolo: C) é a unidade de carga elétrica do Sistema Internacional de Unidades (SI). É a carga (símbolo: Q ou q) transportada por uma corrente constante de um ampere em um segundo: 1C=1A•1s. Um Coulomb Counter é um dispositivo para medir a corrente que seus dispositivos ou sensores estão utilizando.

O Grove - Coulomb Counter 3.3V a 5V (LTC2941) é baseado no LTC2941, seu intervalo de operação é perfeitamente adequado para baterias de íon de lítio de célula única. Um contador de coulomb de precisão integra a corrente através de um resistor de detecção entre o terminal positivo da bateria e a carga ou o carregador. Este módulo mede a quantidade de ampère-hora que foi usada; se você usar uma bateria totalmente carregada, poderá testar a quantidade de bateria que utilizou, a porcentagem restante, assim como a bateria restante exibida no seu telefone. E, inversamente, se você estiver carregando uma bateria, pode usar este módulo para monitorar o processo de carregamento.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Indica a carga e descarga acumulada da bateria
- Integração analógica de alta precisão
- 1% de precisão de carga
- Interface SMBus/I2C

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|2,7V a 5,5V|
|Temperatura de operação|0℃ a +70℃|
|Precisão|±2ppm de 0°C a +40°C|
|Interface|I2C|
|Endereço I2C|0x64|

## Aplicações Típicas

- Produtos portáteis de baixo consumo
- Telefones celulares
- Reprodutor de MP3
- Câmeras
- GPS

## Visão Geral de Hardware

### Pinagem

**Visão geral**

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out_0.jpg" /></div>

:::caution
Tanto 3 quanto 4 são interfaces de entrada de energia, selecione uma como entrada de energia, não use as duas ao mesmo tempo, e a tensão não pode exceder 5V, caso contrário o módulo pode ser danificado.
:::
___
**Interface Grove**

Este módulo se comunica com a placa de controle via interface I2C:

>GND: Pino de alimentação, conecte ao GND do sistema  
>VCC: Pino de alimentação, conecte a 5V ou 3,3V, alimentação para este módulo.
>SDA: Pino de sinal, dados seriais I2C  
>SCL: Pino de sinal, clock serial I2C

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out1.jpg" /></div>

___
**OUT**

Saída de energia, conecte à carga ou ao carregador.

>+: Eletrodo positivo da saída de energia  
>-: Eletrodo negativo da saída de energia

:::caution
Não conecte diretamente a cargas indutivas, como motores ou servos, caso contrário o chip pode ser danificado devido ao ripple causado por cargas indutivas.
:::

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out2.jpg" /></div>

___
**IN**

Entrada de energia, alimentação para a **OUT**

>+: Eletrodo positivo da entrada de energia  
>-: Eletrodo negativo da entrada de energia

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out3.jpg" /></div>

:::caution
Se você usar o [I2C Scanner](https://playground.arduino.cc/Main/I2cScanner/) para escanear o ID I2C do dispositivo, você precisa fornecer 3,3V/5V ao terminal IN.
:::

___
**Entrada da Bateria**

Entrada da bateria, suporta bateria Li-PO de 3,7–4,2V, Jst2.0 (2 pinos-2,0mm), alimentação para a **OUT**

>+: Eletrodo positivo da entrada da bateria  
>-: Eletrodo negativo da entrada da bateria

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out4.jpg" /></div>

___
**Pino de Alarme**

Conecte ao pino AL/CC do LTC2941, saída de alerta ou entrada de carga completa. O LTC2941 suporta função de alerta, e reservamos os pinos de hardware relevantes para você, no entanto o software que fornecemos não suporta esta função. Portanto, você precisará trabalhar na parte de software por conta própria se precisar desta parte.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out5.jpg" /></div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Coulomb Counter 3.3V a 5V (LTC2941) |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte a carga ou o carregador à porta **OUT**.

- **Passo 2.** Conecte a bateria à porta **JST** ou conecte outra fonte de alimentação à porta **IN**.

- **Passo 3.** Conecte o Grove - Coulomb Counter 3.3V a 5V (LTC2941) à porta **I2C** do Grove-Base Shield.

- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 5.** Conecte o Seeeduino ao PC via cabo USB.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Coulomb Counter 3.3V a 5V (LTC2941) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3,3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    1. Abra diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Grove - Coulomb Counter for 3.3V to 5V(LTC2941) --> battery_power**.  
    >**battery_power:** Esta demonstração mostrará os dados de carga elétrica na unidade **C** e **mAh**, 1mAh=3,6C, bem como a bateria restante em porcentagem.  
    >**current_expend:** Esta demonstração mostrará quanta energia você está consumindo.

    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_1.jpg" /></div>

    2. Abra-o em seu computador clicando em **battery_power.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_LTC2941-master\examples\battery_power**, onde **XXXX** é o local em que você instalou a Arduino IDE.
    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_2.jpg" /></div>

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp

#include "LTC2941.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

float coulomb = 0, mAh = 0, percent = 0;

void setup(void)
{
    Wire.begin();

    SERIAL.begin(115200);
    while(!SERIAL.available());

    SERIAL.println("LTC2941 Raw Data");

    ltc2941.initialize();
    ltc2941.setBatteryFullMAh(400);
}

void loop(void)
{
    coulomb = ltc2941.getCoulombs();
    mAh = ltc2941.getmAh();
    percent = ltc2941.getPercent();

    SERIAL.print(coulomb);
    SERIAL.print("C,");
    SERIAL.print(mAh);
    SERIAL.print("mAh,");
    SERIAL.print(percent);
    SERIAL.print("%");

    SERIAL.println();

    delay(1000);
}
```

:::caution
O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Step 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Step 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina o baud rate para **115200**.

:::tip
Se tudo correr bem, quando você abrir o Serial Monitor e pressionar qualquer tecla e depois pressionar o botão de envio, ele poderá aparecer como abaixo:
:::

```cpp
LTC2941 Raw Data
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
```

#### Descrição da função

No demo, usamos uma bateria de 400 mAh, então você pode ver os resultados `1439.96mC,399.99mAh,100.00%`. A porcentagem de bateria restante é válida somente depois que você definir a capacidade da bateria. Você pode alterar a capacidade da bateria na linha 21 do código,

```cpp
ltc2941.setBatteryFullMAh(400); // set the battery capacity here
```

Além disso, toda vez que você reabrir a porta serial ou ligar novamente a placa de controle, os dados serão redefinidos para `100.00%`. Portanto, ainda há muito trabalho a fazer se você quiser usá-la no seu telefone :D

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - Coulomb Counter 3.3V to 5V (LTC2941)](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip)

- **[Zip]** [Biblioteca Seeed LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941/archive/master.zip)

- **[PDF]** [Datasheet LTC2941](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

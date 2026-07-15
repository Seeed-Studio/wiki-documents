---
description: Grove - Sensor Deslizante de Toque Capacitivo (CY8C4014LQI)
title: Grove - Sensor Deslizante de Toque Capacitivo (CY8C4014LQI)
category: Sensor
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI
sku: 101020552
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/
---

<!-- ---
name: Grove - Capacitive Touch Slide Sensor(CY8C4014LQI)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020552
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/main.jpg)

O Grove - Capacitive Touch Slide Sensor (CY8C4014LQI) é um sensor de toque multifuncional. Você pode tocar os dois botões ou deslizar no controle deslizante de 5 segmentos, cada almofada de toque tem um LED correspondente para indicar o status do toque. Também fornecemos um pino de interrupção padrão em nível alto e, assim que você tocar no botão ou deslizar o controle deslizante, ele mudará para nível baixo.

É muito divertido usar este módulo como um controle de jogo ou aplicá-lo a outras aplicações de toque.

:::note
O produto vem com uma caixa de acrílico, e recomendamos fortemente que você não remova a caixa para usá-lo. Ele pode ser acionado por engano quando seu dedo tocar a trilha ou o pad na parte de trás.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Capacitive Touch Slide Sensor(CY8C4014LQI) | Inicial                                                                                               | Jul 2018      |

## Recursos

- Subsistema MCU de 32 bits
- CPU ARM Cortex-M0 de 16 MHz
- Até 16KB de flash com Acelerador de Leitura
- Até 2KB de SRAM
- Ajuste automático de hardware (SmartSense™) em uma faixa de sensor de 5 pF a 45 pF
- Interface I2C

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3,3V / 5V|
|Temperatura Ambiente de Operação|-40°C a +85°C|
|Temperatura de Junção de Operação|-40°C a +100°C|
|Interface|I2C|
|Endereço I2C Padrão|0x08|
|Tamanho|C: 60mm L: 20mm A: 6mm|
|Peso|8g|
|Tamanho da Embalagem|C: 140mm L: 90mm A: 10mm|
|Peso Bruto|15g|

## Aplicações

- Controle de jogo
- Aplicações de toque

## Visão Geral do Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out_back.jpg)

### Esquemático

**Alimentação**

Este módulo é baseado no **CY8C4014LQI**, a tensão de entrada deste chip varia de 1,71v a 5,5v, então você pode usar tanto o pino de 3,3v quanto o de 5v do Arduino para alimentar este módulo.

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

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Touch Slide Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Capacitive Touch Slide Sensor à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Capacitive Touch Slide Sensor |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3,3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove_touch_sensor_CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo, você pode abri-lo das três formas a seguir：
    1. Abra-o diretamente na Arduino IDE pelo caminho: **File --> Examples --> Grove_touch_sensor_CY8C40XX --> basic_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path.png)

    2. Abra-o em seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_touch_sensor_CY8C40XX-master\examples\basic_demo**, em que **XXXX** é o local onde você instalou a Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path_1.jpg)

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na Arduino IDE.

```cpp

#include "Seeed_CY8C401XX.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

CY8C sensor;
void setup()
{
    SERIAL.begin(115200);

    sensor.init();
}


void loop()
{
    u8 value=0;
    sensor.get_touch_button_value(&value);
    SERIAL.print("button value is");
    SERIAL.println(value,HEX);
    if(value&0x01)
        SERIAL.println("button 1 is pressed");
    if(value&0x2)
        SERIAL.println("button 2 is pressed");

    sensor.get_touch_slider_value(&value);
    SERIAL.print("slider value is");
    SERIAL.println(value,HEX);
    SERIAL.println(" ");


    delay(1000);
}
```

:::caution
O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Carregue o demo. Se você não souber como carregar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::tip
Se tudo correr bem, quando você abrir o Serial Monitor e tocar no sensor deslizante de toque, verá o LED acender e o Serial Monitor será mostrado como abaixo:
:::

```cpp
button value is1
button 1 is pressed
slider value is0

button value is3
button 1 is pressed
button 2 is pressed
slider value is9
```

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/result.gif)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - Capacitive Touch Slide Sensor(CY8C4014LQI)](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip)

- **[Zip]** [Biblioteca Grove touch sensor CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX/archive/master.zip)

- **[PDF]** [Folha de dados do CY8C4014LQI](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/CY8C4014LQI_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto



  <br />Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

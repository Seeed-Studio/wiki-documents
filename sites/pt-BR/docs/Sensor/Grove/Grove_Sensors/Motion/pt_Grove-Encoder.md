---
description: Grove-Encoder
title: Grove-Encoder
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Encoder
sku: 111020001
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Encoder/
---
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg" alt="pir" width={600} height="auto" /></p>



Este módulo é um encoder rotativo incremental. Ele codifica o sinal de rotação do eixo e envia o sinal por pulso eletrônico. O Grove – Encoder é um dos módulos da série Grove e possui uma interface Grove padrão.
Quando você precisar adicionar um botão rotativo ao seu projeto, por exemplo um botão de volume para um alto‑falante, um painel de seleção ou uma entrada digital, esta será a sua primeira escolha.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

## Recursos

*   Encoder incremental.
*   Interface Grove.
*   Rotação de 360 graus.

## Especificação

| Item | Mín | Típico | Máx | Unidade |
|--|--|--|--|--|
| Tensão | 4.5 | 5 | 5.5 | V |
| Corrente | 10 | 20 | 30 | mA |
| Dimensão | |20x 20 | |mm |
| Peso líquido || 12 || g |


## Plataformas compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::
### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove - Circular LED | Grove - Encoder|
|--------------|-------------|-----------------|----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Circular%20LED._Sjpg.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Encoder.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **Passo 2.** Conecte o Grove-Encoder à porta D2 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove-Circular LED à porta D5 do Grove-Base Shield.
- **Passo 4.** Conecte o Grove-Base Shield ao Seeeduino.
- **Passo 5.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG" alt="pir" width={600} height="auto" /></p>

:::note
	Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Encoder e conectar o Grove-Circular LED ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove-Encoder  |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| D3           | Branco                   |
| D2            | Amarelo                  |


| Seeeduino       | Grove-Circular LED  |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| D6           | Branco                   |
| D5           | Amarelo                  |

:::note
    Se você quiser mudar para outra porta para o Grove-Encoder, altere o digitalRead(2) e digitalRead(3) em Encoder.cpp.
:::
#### Software

- **Passo 1.** Baixe a [Encoder Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip), [CircularLED Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip), [TimerOne Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip) no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como enviar o código, confira [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED(6,5);

unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}

```

- **Passo 4.** A luz mudará conforme o encoder girar, como abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif" alt="pir" width={600} height="auto" /></p>

:::note
    Ele é capaz de gerar outro sinal quando é pressionado para baixo. Porém, devido à limitação do número de cabos de sinal Grove, o módulo foi feito sem a saída desse sinal.
:::

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[Eagle]** [Arquivos Eagle do Grove-Encoder](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[Library]** [TimeOne Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)
- **[Library]** [Encoder Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)
- **[Library]** [CircularLED Library](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)
- **[Demo]** [Demo no fórum Arduino](https://arduino.cc/playground/Main/RotaryEncoders)


## Suporte técnico e discussão sobre o produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

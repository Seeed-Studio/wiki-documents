---
title: Grove - Interruptor Digital de Distância 0,5 a 5cm (GP2Y0D805Z0F)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F_P/
slug: /Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F
sku: 101020533
last_update:
  date: 01/04/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/
---


![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/main.JPG)

Grove - Interruptor Digital de Distância 0,5 a 5cm é um módulo de detecção de distância por infravermelho baseado no GP2Y0D805Z0F. Normalmente a saída deste sensor é 1 (Alto); quando o objeto entra na faixa de medição do sensor, ele será acionado e emitirá um 0 (Baixo). Ao mesmo tempo, o LED integrado acenderá. Como o nome sugere, a faixa de medição é de 0,5 cm a 5 cm.

Existem dois tipos de Grove - Interruptor Digital de Distância 0,5 a 5cm: Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F) e [Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)(P)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html). Na versão sem a letra P, a lente e a interface Grove ficam do mesmo lado; na versão com a letra P, a lente e a interface Grove ficam em lados diferentes.

GP2Y0D805Z0F é uma unidade de sensor de medição de distância, composta por uma combinação integrada de PD (diodo fotoelétrico), IRED (diodo emissor de infravermelho) e circuito de processamento de sinal. A variação da refletividade do objeto, a temperatura ambiente e o tempo de operação não influenciam facilmente a detecção de distância graças à adoção do método de triangulação.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank"><img src=https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

## Recursos

- Fácil de usar
- LED indicador integrado  
- Saída digital

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3,3 V / 5 V|
|Faixa de acionamento|0,5 cm - 5 cm |
|Temperatura de operação|-10℃ -- 60℃|

## Aplicações

- Interruptor sem toque (equipamentos sanitários, controle de iluminação, etc.)
- Robô aspirador

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - Digital Distance Interrupter 0.5 to 5cm |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos, pois cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Digital Distance Interrupter 0.5 to 5cm à porta **D2** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/connect.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Mech keycap ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove - Digital Distance Interrupter 0.5 to 5cm|
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Not Conencted | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Abra o Arduino IDE e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
/*
 *  
 * Copyright (c) 2018 Seeed Technology Co., Ltd.
 * Website    : www.seeed.cc
 * Author     : downey
 * Create Time: May 2018
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#define SENSOR  2

void setup()
{
 Serial.begin(115200);
 pinMode(SENSOR,INPUT);
}


void loop()
{
 short val=0;
 val=digitalRead(SENSOR);
 Serial.print("val=");
 Serial.println((int)val);
 if(0==val)
 {
  Serial.println("Sensor is triggered!!");
 }
 delay(100);
}

```

- **Passo 2.** Envie o demo. Se você não souber como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Altere a taxa de baud para **115200**.
se tudo correr bem, você obterá a saída deste módulo.

O resultado deve ser algo como:

```
val=1
val=1
val=1
val=1
val=1
val=1
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=1
val=1
val=1
val=1
```

Normalmente a saída deste sensor é 1 (Alto); quando o objeto entra na faixa de medição do sensor, ele será acionado e emitirá um 0 (Baixo)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo eagle do Grove - Digital Distance Interrupter 0.5 to 5cm](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip)
- **[PDF]** [GP2Y0D805Z0F Datasheet](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/GP2Y0D805Z0F.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

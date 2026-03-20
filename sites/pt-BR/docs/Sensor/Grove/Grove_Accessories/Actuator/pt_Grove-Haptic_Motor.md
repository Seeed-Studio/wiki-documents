---
title: Grove - Haptic Motor
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Haptic_Motor/
slug: /Grove-Haptic_Motor
sku: 105020011
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Haptic_Motor/
---

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

Grove - Haptic motor é um módulo Grove integrado com o [DRV2605L](http://www.ti.com/product/DRV2605L), que dará mais sensações ao seu projeto. Este motor é especialmente projetado para vários efeitos, como aumentar e diminuir gradualmente o nível de vibração, para wearables e outros dispositivos IoT. Atualmente desenvolvemos uma biblioteca fácil de usar que simula, ao todo, 123 tipos de modos de vibração, o que tornará seu protótipo mais rápido. Além disso, você pode desenvolver funções mais avançadas com o driver DRV2605L, que melhorará o desempenho do atuador em termos de consistência de aceleração, tempo de partida e tempo de frenagem, e é acessível através de um barramento compatível com I2C compartilhado ou sinal de entrada PWM.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Mais efeitos de vibração.
- Acelere o processo de prototipagem do seu projeto.
- Biblioteca fácil de usar com 123 tipos de modos de vibração.
- Driver poderoso para implementar funções mais avançadas.

:::tip
    Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Parâmetro                      | Valor          |
|--------------------------------|----------------|
| Tensão de operação             | 3.3~5.0 V      |
| Ripple (na potência máxima)    | 50~100 mV      |
| Potência máxima                | 750 mW         |
| Velocidade I2C                 | 100 kHz        |
| Efeitos de vibração            | 123 tipos      |
| Driver                         | DRV2605L       |
| Porta                          | I<sup>2</sup>C |
| Endereço padrão I<sup>2</sup>C | 0x5A           |

# Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Ideias de aplicação

- Telefones celulares, tablets.
- Dispositivos vestíveis.
- Controles remotos, dispositivos com tela sensível ao toque.
- Interfaces homem-máquina industriais.

## Visão geral de hardware

**Vista frontal:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

**Vista traseira:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg)

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Haptic motor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **Passo 2.** Conecte o Grove - Haptic motor à porta I2C do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove - Haptic motor diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Haptic motor |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
|SDA  | Branco                  |
|SCL             | Amarelo                 |

#### Software

- **Passo 1.** Baixe o [Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip) no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* Software I2C = false, Verbose = true */
    if (haptic.init(false, true) != 0) Serial.println("init failed!");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("auto calibration failed!");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("Effect No: ");
        Serial.println(i);

        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **Passo 4.** Veremos a vibração.

:::warning
    Nunca toque no driver DRV2605L quando ele estiver energizado, pois isso pode causar danos a ele.
:::

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Haptic-Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Library]** [Grove-Haptic Motor Library](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
- **[Eagle]** [Grove-Haptic Motor Schematic](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip)
- **[PDF]** [Grove-Haptic Motor Schematic](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf).
- **[Datasheet]** [More about drive circuit DRV2605L](http://www.ti.com/product/DRV2605L).

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

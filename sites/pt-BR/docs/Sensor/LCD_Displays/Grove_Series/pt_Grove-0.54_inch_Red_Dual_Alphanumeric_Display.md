---
description: Grove - Display Alfanumérico Duplo Vermelho de 0,54 polegada
title: Grove - Display Alfanumérico Duplo Vermelho de 0,54 polegada
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-0.54_inch_Red_Dual_Alphanumeric_Display
sku: 104020132
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png" alt="pir" width={600} height="auto" /></p>

Este módulo é um display alfanumérico de 2 dígitos com alto brilho e luz de fundo vermelha, cada dígito é composto por um tubo digital de 14 segmentos. O display de 7 segmentos comumente usado só pode exibir os números 0–9 e um número limitado de letras. Em contraste, o display digital de 14 segmentos não tem essa limitação, ele pode exibir todos os caracteres, por isso o chamamos de display alfanumérico. A altura do dígito é de 0,54 polegada e o LED vermelho usado neste módulo tem brilho super alto, então você pode vê-lo a alguns metros de distância.

Normalmente, o display de 14 segmentos precisa usar 17 ou mais fios para controlar o display, o que significa que uma grande quantidade de IO da sua placa de controle principal (como Arduino) será ocupada. Com a ajuda do chip HT16K33 on-board e do conector Grove, nós o transformamos em um display i2c, apenas quatro fios são suficientes. Sem soldagem trabalhosa e sem fiação complicada, se você estiver usando o [seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html), é realmente plug and play, muito fácil.

Nós já lançamos muitos [displays](https://www.seeedstudio.com/displays-c-929.html) para Arduino, Raspberry Pi, Beaglebone e outros SBC (Single Board Computer), agora trazemos para você o Grove - Display Alfanumérico Duplo Vermelho de 0,54", o display de 14 segmentos significa mais possibilidade e criatividade. Esperamos que ele ajude você a criar projetos mais interessantes.

Caso você só precise de um display alfanumérico de quatro dígitos, você pode conferir o [Grove - 0.54" Red Quad Alphanumeric Display](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html).

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)

## Recursos

- Pode exibir todas as letras e números
- Brilho ultraalto: 30mcd
- Grove I2C, ocupa apenas dois pinos de IO
- Drivers onboard, fácil de usar
- Display de cátodo

## Especificação

| Parâmetro                     | Valor           |
|-------------------------------|-----------------|
| Tensão de alimentação         | 3.3V / 5V       |
| Temperatura ambiente de operação | -30°C a 85°C   |
| Display de LED                | JM-S05422AH-001 |
| Driver Controlador de LED     | HT16K33         |
| Cor do LED                    | Vermelho        |
| Brilho ultraalto              | 30mcd           |
| Altura do LED                 | 0.54inch        |
| Segmento de LED               | 14              |
| Tamanho                       | 40 * 40mm       |
| Interface de saída            | I2C             |
| Endereço I2C (selecionável)   | 0x70 (padrão)   |

## Aplicações

- Indicadores de controle industrial
- Relógios digitais, termômetros, contadores, multímetros
- Leituras de instrumentação
- Outras aplicações de consumo
- Displays de LED

## Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

Aqui está a tabela sobre os endereços I2C.

| A2 | A1 | A0 | Endereço I2C |
|----|----|----|--------------|
| 0  | 0  | 0  | 0x70         |
| 0  | 0  | 1  | 0x71         |
| 0  | 1  | 0  | 0x72         |
| 0  | 1  | 1  | 0x73         |
| 1  | 0  | 0  | 0x74         |
| 1  | 0  | 1  | 0x75         |
| 1  | 1  | 0  | 0x76         |
| 1  | 1  | 1  | 0x77         |

:::warning
    Se você conectar vários displays, terá que fornecer VCC e GND externos para o display separadamente e conectar SDA, SCL e GND à placa Seeeduino.  
:::

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield |Grove - 0.54" Red Dual Alphanumeric Display|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front-s.png" alt="pir" width={600} height="auto" /></p>
|[Compre AGORA](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Compre AGORA](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Compre AGORA](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Base Shield.

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - 0.54" Red Dual Alphanumeric Display à porta **I2C** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - 0.54" Red Dual Alphanumeric Display ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - 0.54" Red Dual Alphanumeric Display |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::
**1. Começando com display_basic**

- **Passo 1.** Faça o download da [Grove - 0.54" Red Dual Alphanumeric Display Library](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33) no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Abra **Arduino IDE -> File -> Examples -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**
- **Passo 4.** Descomente o **tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR)** como abaixo, você tem que descomentá-lo para todos os outros exemplos também.

```
    // If using four digital tubes, use this configuration.
    // tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // If using two digital tubes, use this configuration.
     tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **Passo 5.** Envie o exemplo para o Arduino. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- **Passo 4.** Você pode ver o LED executando 12 -> 4567 -> AB -> abcd repetidamente.

**2. Outros Exemplos**

- **display_custom:** Exibir caracteres únicos e pontos.
- **display_scroll_string:** Exibe uma string rolando que é maior do que 2.
- **display_scroll_number:** Exibe um número rolando que é maior do que 99.
- **number_increment:** Exibe um número crescente.
- **combine_two_displays:** Você pode conectar 2 Grove - 0.54" Red Quad Alphanumeric Displays ou Grove - 0.54" Red Dual Alphanumeric Display ou ambos Grove - 0.54" Red Dual Alphanumeric Display e Grove - 0.54" Red Quad Alphanumeric Display.

Se você usar 2 Grove - 0.54" Red Dual Alphanumeric Displays, modifique o código conforme abaixo.

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_2,I2C_ADDR_DEFAULT_FOUR);
```

Se você usar ambos Grove - 0.54" Red Dual Alphanumeric Display e Grove - 0.54" Red Qual Alphanumeric Display, modifique o código conforme abaixo.

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::warning
    Se você conectar 2 módulos, o tubo vermelho ficará um pouco escuro devido à fonte de alimentação limitada do Arduino. 
:::
**3. API**

- **Init(NUMERIC_I2C_ADDR):** inicializa o dispositivo com endereço I2C, o endereço I2C padrão do Grove - 0.54" Red Quad Alphanumeric Display é 0x71.
- **setBrightness(15):** define o brilho, o intervalo é 0-15, quanto maior o brilho, maior o consumo de energia.
- **setBlinkRate(BLINK_OFF):** define o intervalo de piscagem, você pode definir como BLINK_OFF/BLINK_2HZ/BLINK_1HZ.
- **displayNum(1234567,500):** exibe o número, existem 2 parâmetros. O primeiro parâmetro é o número e o segundo é o intervalo de rolagem (ms). Se o número &lt;100, os tubos exibem número estático. Caso contrário, exibem número rolando. O intervalo de rolagem (ms) só funciona no modo de rolagem e você pode definir o intervalo como 0.
- **displayString("ABCDEFGHJIYZ",500):** exibe o caractere, existem 2 parâmetros. O primeiro parâmetro é o caractere e o segundo é o intervalo de rolagem (ms). Se o caractere tiver menos de 2 caracteres, os tubos exibem caractere estático. Caso contrário, exibem caracteres rolando. O intervalo de rolagem (ms) só funciona no modo de rolagem e você pode definir o intervalo como 0. A função não oferece suporte a letras minúsculas e as exibe da mesma forma que letras maiúsculas.
- **setTubeSingleChar(FIRST_TUBE,'t'):** define o caractere único em um tubo específico.
- **tube.setPoint(true,false):** liga e desliga os 2 pontos. Este exemplo liga o primeiro ponto e desliga o segundo.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - 0.54" Red Dual Alphanumeric Display](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip)
- **[PDF]** [Datasheet do Módulo LED](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/DIP-LED-2-BETY-14-SEG.pdf)
- **[PDF]** [Datasheet do HT16K33](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[Library]** [Biblioteca Grove - 0.54" Red Dual Alphanumeric Display](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

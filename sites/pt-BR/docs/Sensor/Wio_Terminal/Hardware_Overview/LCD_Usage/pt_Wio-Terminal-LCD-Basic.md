---
title: Básico de LCD
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /Wio-Terminal-LCD-Basic
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Basic/
---

# Noções básicas da tela TFT LCD

## Sistemas de coordenadas de pixels

Uma imagem digital 2D é composta por linhas e colunas de pixels. Um pixel na imagem é especificado dizendo em qual coluna e em qual linha o pixel está. Em termos simples, um pixel pode ser identificado por um par de inteiros fornecendo o número da coluna e o número da linha. Por exemplo, o pixel com coordenadas (4,7) estaria na coluna 4 e na linha 7. 

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>


Convencionalmente, as colunas são numeradas da parte superior esquerda para a direita, começando em zero, mas em alguns casos, também pode começar de outros cantos (definindo a rotação).

## Modelo de cores de 8 bits e 16 bits

Os pixels também são expressos em forma de cor, portanto é melhor abordar alguns modelos de cor. Os modelos de cor de 8 bits e 16 bits são bons para MCUs trabalharem, então este é um bom começo. Esses dois modelos de cor consistem em 3 componentes de cor - **Vermelho, Verde e Azul**. Dependendo do modelo de cor, esses 3 componentes de cor serão armazenados em variáveis de 8 bits ou 16 bits.

### Cor de 8 bits

| Bit  | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Vermelho   | Vermelho   | Vermelho   | Verde   | Verde   | Verde   | Azul   | Azul   |

### Cor de 16 bits

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Vermelho   | Vermelho   | Vermelho   | Vermelho   | Vermelho   | Verde   | Verde   | Verde   | Verde   | Verde   | Verde   | Azul   | Azul   | Azul   | Azul   | Azul   |

Aqui estão algumas cores de exemplo básicas predefinidas (16 bits) incluídas na biblioteca LCD:

```cpp
#define TFT_BLACK       0x0000      /*   0,   0,   0 */
#define TFT_NAVY        0x000F      /*   0,   0, 128 */
#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */
#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */
#define TFT_MAROON      0x7800      /* 128,   0,   0 */
#define TFT_PURPLE      0x780F      /* 128,   0, 128 */
#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */
#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */
#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */
#define TFT_BLUE        0x001F      /*   0,   0, 255 */
#define TFT_GREEN       0x07E0      /*   0, 255,   0 */
#define TFT_CYAN        0x07FF      /*   0, 255, 255 */
#define TFT_RED         0xF800      /* 255,   0,   0 */
#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */
#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */
#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */
#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */
#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */
```

## Inicialização da tela TFT LCD

Para inicializar a tela TFT LCD no Wio Terminal:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // turn on the backlight
  ...
}
```

onde r é a rotação da tela TFT LCD (de 0 a 3), significando de qual canto ela irá começar.

### Código de exemplo

Este exemplo inicializa a tela TFT LCD no Wio Terminal e preenche a tela com a cor vermelha.

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // fills entire the screen with colour red
}

void loop() {

}
```

## Desligando a luz de fundo do LCD

Para desligar a luz de fundo do LCD do Wio Terminal, simplesmente defina o pino de controle da luz de fundo do LCD `72Ul` e coloque-o em `HIGH` para ligar e em `LOW` para desligar:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // Control Pin of LCD

void setup() {
  // put your setup code here, to run once:

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // Turning off the LCD backlight
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // Turning on the LCD backlight
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // put your main code here, to run repeatedly:

}
```

## Controlando o brilho da luz de fundo do LCD

Este exemplo foi escrito por [**Kenta IDA**](https://github.com/ciniml) e todos os créditos vão para Kenta IDA.

**PASSO 1.** **Baixe o [repositório](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook) aqui.**

- Em `examples/WioTerminal_BackLight`.

**PASSO 2.** **Envie o código.**

Envie o `lcd_backlight_control.ino` para o Wio Terminal e você verá a mudança de brilho no LCD.

## Suporte Técnico e Discussão sobre o Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
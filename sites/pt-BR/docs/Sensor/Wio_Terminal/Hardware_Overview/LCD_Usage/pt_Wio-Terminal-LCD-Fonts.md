---
title: Fonts
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Fonts/
slug: /Wio-Terminal-LCD-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Fonts/
---
# Usando fontes diferentes

Este repositório descreve como usar diferentes fontes gratuitas (GNU FreeFonts) incluídas na biblioteca. Você pode seguir este guia para escolher sua fonte favorita para exibir no Wio Terminal!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## Fontes disponíveis

Existem três fontes principais que podem ser usadas nesta biblioteca, incluindo `Serif`, `Sans` e `Mono`. Cada fonte está disponível com alguns estilos (**bold**, *italic*, oblíqua) e tamanhos de fonte de 9pt, 12pt, 18pt e 24pt.

## Usando fontes no Wio Terminal

Para usar essas fontes facilmente, é altamente recomendado copiar o arquivo `Free_Fonts.h` do [repositório Seeed_Arduino_LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/#instalando-a-biblioteca-tft-lcd-separadamente). Assumimos que você já baixou o repositório e o caminho é `~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`, você pode anexar este arquivo de cabeçalho à localização do seu sketch. Isso tornará a referência às fontes muito mais fácil.

Para economizar muita digitação, cada fonte pode ser referenciada no sketch de três maneiras, seja com:

1.Nome do arquivo da fonte com o `&` na frente, por exemplo: `&FreeSansBoldOblique24pt7b`.

#### Exemplo do Método 1

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2.FF# onde # é um número determinado observando a lista em `Free_Fonts.h`

#### Exemplo do Método 2

```cpp
tft.setFreeFont(FF32);
```

3.Uma abreviação do nome do arquivo. Veja a lista abaixo para ver as abreviações usadas.

#### Exemplo do Método 3

```cpp
tft.setFreeFont(FSSBO24)
```

Onde as letras significam:

- F = Fonte Free
- M = Mono
- SS = Sans Serif (S duplo para distingui-la das fontes serifadas)
- S = Serif
- B = Bold
- O = Oblique (letra O, não zero)
- I = Italic
- No = tamanho em pontos, 9, 12, 18 ou 24

## Código de exemplo usando fontes diferentes

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" //include the header file
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); //Black background

  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //select Free, Sans, Bold, Oblique, 12pt.
  tft.drawString("Sans Serif 12pt",70,80);//prints string at (70,80)

  tft.setFreeFont(FF10); //select Free, Mono, Oblique, 12pt.
  tft.drawString("Mono 12pt",70,110);//prints string at (70,110)

  tft.setFreeFont(FS12); //select Free, Serif, 12pt.
  tft.drawString("Serif 12pt",70,140);//prints string at (70,140)

}
void loop() {}
```

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte a fim de garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

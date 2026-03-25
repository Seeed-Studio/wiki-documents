---
title: Fontes Suaves
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Anti-aliased-Fonts/
---
# Exibindo Fontes Suavizadas (Anti-aliased)

Este repositório demonstra como usar fontes suavizadas (Anti-aliased) no Wio Terminal (**ou seja, exibindo caracteres japoneses, caracteres gregos e outros glifos UCS-2**)! Além disso, fontes suaves também podem ser usadas para exibir caracteres normais em inglês com sua fonte favorita do seu computador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## Instalação das Bibliotecas

### Instalando a biblioteca de cartão SD para o Wio Terminal

- visite [Visão geral do sistema de arquivos](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-Overview/)

### Instalando a biblioteca TFT LCD para o Wio Terminal

- visite [Visão geral do TFT LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/)

## Gerar arquivo de fonte vlw

Aqui é demonstrado como gerar um arquivo de fonte vlw que pode ser usado como fonte suave no Wio Terminal.

### Passo 1

Baixe o software [**Processing**](https://processing.org/) e faça o download de acordo com o seu sistema operacional.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### Passo 2

Abra o **Processing** e navegue até `Tools` -> `Create Font...`

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### Passo 3

A janela **Create Font** aparecerá. Você poderá escolher a fonte disponível no seu computador. Altere o tamanho da fonte e clique em `Characters...`. Você também pode alterar o nome do arquivo vlw em Filename.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### Passo 4

Uma janela **Character Selector** aparecerá, e você poderá escolher os blocos de caracteres Unicode do idioma específico (ou seja, Basic Latin neste caso). ***Para caracteres asiáticos, recomenda-se usar os blocos Unicode da categoria CJK ou CJK Compatibility.*** Clique em `OK` para salvar as configurações da fonte.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### Passo 5

Navegue até `File` -> `Save` e salve o arquivo do sketch na sua unidade local no computador. Agora, geramos o arquivo de fonte vlw!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## Armazenando no cartão SD

Depois de gerar o arquivo de fonte vlw, você pode encontrar o arquivo vlw dentro da pasta **`data`** dentro do arquivo do sketch que você salvou na etapa anterior.

Agora, copie o arquivo de fonte vlw para o cartão SD e coloque o cartão SD de volta no Wio Terminal.

## Configurando a biblioteca LCD

Por padrão, a opção de fonte suave na biblioteca LCD está **desativada** para economizar recursos no Wio Terminal. **Portanto, é necessário configurá-la para habilitar a fonte suave no Wio Terminal.**

Navegue até as pastas de bibliotecas do Arduino (**libraries**) -> **Seeed_Arduino_LCD** e abra **`User_Setup.h`** com um editor. Procure por **`#define SMOOTH_FONT`** e descomente a linha conforme a seguir:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

Agora que você habilitou a fonte suave no Wio Terminal, pode exibir quaisquer fontes ou caracteres que quiser!

## Exibição

- **Para carregar a fonte do cartão SD para o Wio Terminal:**

```cpp
void loadFont(String fontName);
```

em que `fontName` é o nome do arquivo de fonte vlw.

- **Para mostrar na tela todos os caracteres dentro do vlw:**

```cpp
void showFont(uint32_t td);
```

em que `td` é o tempo de atraso entre as telas ao mostrar todos os caracteres.

- **Para descarregar fontes:**

```cpp
void unloadFont();
```

Para exibir caracteres na tela, você pode usar as funções exatamente como nas bibliotecas tft usando **`tft.println()`**. Além disso, você pode usar outras funções como **`tft.setCursor()`** e **`tft.setTextColor`** para alterar a posição e a cor da exibição dos caracteres.

**Nota**: Verifique o `User_Setup.h` na biblioteca LCD e certifique-se de que `#define SMOOTH_FONT` esteja descomentado.

## Código completo

Baixe o código completo e os arquivos vlw de exemplo [aqui](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip).

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); //Black background

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SD card error!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // Show all characters on screen with 2 second (2000ms) delay between screens
  tft.showFont(2000); // Note: This function moves the cursor position!

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("Konnichiwa");
  tft.println("Sayonara");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();

}
void loop(){}
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

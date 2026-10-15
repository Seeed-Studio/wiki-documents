---
title: Carregando Imagem
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/
slug: /Wio-Terminal-LCD-Loading-Image
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/
---


# Carregando Imagens

Este repositório descreve como carregar e exibir imagens do cartão SD na tela TFT LCD do Wio Terminal. Isso pode ser uma implementação muito útil para o seu projeto e pode ser usado em vários lugares!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## Instalação de Bibliotecas

### Instalando a biblioteca de Cartão SD para o Wio Terminal

- visite [Visão Geral do Sistema de Arquivos](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-Overview/)

### Instalando a Biblioteca TFT LCD para Wio Terminal

- visite [Visão Geral do TFT LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/)

## Configuração do Formato da Imagem

### ETAPA 1: Preparar a imagem
:::note
    Precisamos converter o formato da imagem para o formato BMP de 24 bits do Windows e colocar a imagem na pasta correta já preparada. Recomendamos usar o `Microsoft paint` para fazer isso.
:::
 - **Etapa 1-1:** Usar o `Microsoft paint` para redimensionar a imagem para caber no tamanho máximo de pixels da área de exibição da sua tela

 - **Etapa 1-2:** Em seguida, salve a imagem clicando em `Save as` seguido de `BMP picture` e, no menu suspenso de tipo de arquivo, selecione o arquivo `24-bit bitmap (.bmp)`.

 - **Etapa 1-3:** Crie uma pasta chamada `bmp` e salve suas imagens em formato Windows `.bmp` dentro dessa pasta.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### ETAPA 2: Converter a imagem `24-bit bitmap` para o formato `8-bit or 16-bit bmp` legível pelo microcontrolador
:::note
    Para exibir imagens bmp em nosso sistema embarcado, precisamos remover algumas informações (arquivos de cabeçalho) do nosso formato bmp do Windows. Escrevemos um script em Python para fazer isso para nós, então escolha uma das duas opções a seguir para converter suas imagens.
:::
#### Opção 1: Usando Executáveis Pré-compilados para Windows (apenas Windows):

- **Etapa 2-1-1:** Preparamos o executável usando o pacote [Pyinstaller](https://pyinstaller.org/en/stable/); você pode baixar o executável simplesmente clicando em [bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)

- **Etapa 2-1-2:** Coloque o `bmp_converter.exe` baixado no mesmo diretório da `pasta bmp` criada na `Etapa 1-3`.

- **Etapa 2-1-3:** Dê um duplo clique para executar o `bmp_converter.exe`; então, no `terminal` que aparecer, selecione uma das duas opções: "Enter `1` for 8-bit colour convert; Enter `2` for 16-bit colour convert".

#### Opção 2: Usando Código-fonte em Python (para múltiplas plataformas)
:::note
    Você deve ter o Python instalado em seu computador
:::
- **Etapa 2-2-1:** Baixe o script em Python [bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) e salve-o no mesmo diretório da `pasta bmp` criada na `Etapa 1-3`.

- **Etapa 2-2-2:** Abra o `cmd` ou o `terminal` para executar o script em Python. Primeiro, use `cd` até o diretório que salvou o `bmp_converter.py` e a `pasta bmp` e, em seguida, execute o script em Python.

- **Etapa 2-2-3:** Duas opções: Enter `1` for 8-bit colour convert; Enter `2` for 16-bit colour convert

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### ETAPA 3: Imagem pronta

Agora, você conseguirá encontrar as imagens `.bmp` convertidas dentro de outra pasta chamada `rgb332`(8-bit) ou `rgb565`(16-bit) na pasta bmp.

## Primeiros Passos

### Instale a biblioteca [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)

Esta biblioteca é usada para tornar o carregamento e a exibição de imagens muito mais fáceis. Baixe a [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) e anexe esse arquivo de cabeçalho ao local do seu sketch.

### Inicialização de Imagem no Arduino

- **Para exibir imagens na tela**

```Cpp
//To draw on 8-bit color image on screen, starting from point (x, y):
drawImage<uint8_t>("path to sd card iamge", x, y);

//To draw on 16-bit color image on screen, starting from point  (x, y):
drawImage<uint16_t>("path to sd card iamge", x, y);
```

- **Para inicializar a imagem (Não é necessário se usar a função drawImage acima)**

```Cpp
//when using 8-bit colour, initialise the image following this:
Raw8 * img8 = newImage<uint8_t>("path to sd card image");

//when using 16-bit colour, initialise the image following this:
Raw16 * img16 = newImage<uint16_t>("path to sd card image");
```

## Código de exemplo

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //Including SD card library
# include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //Display this 8-bit image in sd card from (0, 0)

}

void loop() {
}

```

## Perguntas Frequentes

**Se ocorrer `ImportError: No module named PIL`:**

- Instale o módulo Python digitando `pip install pillow` no cmd ou no terminal
## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
title: Histograma
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Histogram/
slug: /Wio-Terminal-LCD-Histogram
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Histogram/
---
# Histograma

Este repositório descreve como desenhar um histograma no Wio Terminal. Semelhante à biblioteca Line Charts, você pode usá-lo para exibir valores brutos de sensores e visualizar leituras na tela. Esta biblioteca é muito flexível e pode ser modificada conforme a sua necessidade.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png" /></div>

## Instalação das bibliotecas

### Instalando as bibliotecas de Histograma

- Visite [Seeed_Arduino_Histogram](https://github.com/Seeed-Studio/Seeed_Arduino_Histogram) e baixe todo o repositório para o seu disco local.

- Agora, a biblioteca pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_Histogram` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Primeiros Passos

### Inicializar para desenhar o Histograma

Inclua a biblioteca Histogram e inicialize o histograma da seguinte forma:

```cpp
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
#include"Histogram.h"

TFT_Histogram histogram=TFT_Histogram(); //Initializing Histogram
TFT_eSPI tft = TFT_eSPI(); //Initializing TFT

void setup(void) {
  tft.init();
  histogram.initHistogram(&tft);
  ...
}
```

### Criando colunas no Histograma

Para criar colunas no histograma:

```cpp
void formHistogram(String label,int NO,double Histogram_value,int Histogram_WIDTH,uint32_t colour);
```

onde `label` é o nome exibido sob a coluna, `NO` é a etiqueta numérica da coluna do histograma, `Histogram_value` é o valor da coluna do histograma, `Histogram_WIDTH` é a largura da coluna do histograma e `colour` é a cor da coluna do histograma.

### Exibir o Histograma

Para exibir o Histograma:

```cpp
void showHistogram();
```

### Alterando os valores das colunas

Para alterar os valores das colunas existentes:

```cpp
void changeParam(uint8_t NO, String lable, float Histogram_value, uint32_t colour);
```

onde `NO` se refere novamente à etiqueta numérica da coluna do histograma (qual coluna alterar).

### Excluindo uma coluna

Para excluir uma coluna do histograma:

```cpp
void deleteCylinder(uint8_t NO);
```

onde `NO` se refere à etiqueta numérica da coluna do histograma.

### Adicionando gráfico de linha ao Histograma

Adicionando gráfico de linha:

```cpp
void lineChart(uint32_t colour);
```

onde `color` é a cor do gráfico de linha.

### Ocultando o eixo do Histograma

```cpp
void notShowAxis();
```

### Outras funções úteis

Para outras funções úteis da biblioteca de histograma, consulte **`Histogram.h`**. Além disso, ela também fornece conjuntos de exemplos, bem como uma demonstração de todas as funções que pode ser encontrada na pasta `examples`.

## Código de Exemplo

```cpp
#include <TFT_eSPI.h> //Hardware-specific library
#include <SPI.h>
#include"Histogram.h" //include histogram library

TFT_Histogram histogram=TFT_Histogram(); //Initializing tft and histogram
TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  histogram.initHistogram(&tft);
  histogram.formHistogram("a",1,50.55,40,TFT_RED); //Column 1
  histogram.formHistogram("b",2,20,40,TFT_BLACK); //Column 2
  histogram.formHistogram("c",3,100,50,TFT_GREEN); //Column 3
  histogram.formHistogram("d",4,53,50,TFT_BLUE); //Column 4
  histogram.formHistogram("e",5,133,30,TFT_YELLOW); //Column 5
  histogram.formHistogram("f",6,53,50,TFT_ORANGE); //Column 6
  histogram.formHistogram("g",7,80,50,TFT_PINK); //Column 7

  histogram.showHistogram(); //show histogram
  delay(3000);

  histogram.changeParam(6,"F",55,TFT_PINK);//change column 6
  histogram.deleteCylinder(7);//delete colum 7
  histogram.lineChart(TFT_BLACK);

  delay(2000);
  histogram.notShowAxis();//hiding the axis of histogram
}
void loop() {

}
```

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

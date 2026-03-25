---
description: Tela sensível ao toque de 4 polegadas
title: Tela sensível ao toque de 4 polegadas
keywords:
  - SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen/
---
# **Tela sensível ao toque de 4 polegadas**

O SenseCAP Indicator é equipado com uma tela sensível ao toque de 4 polegadas, na qual você pode personalizar a interface de usuário (UI) de que precisar.
Neste tutorial, vamos guiá-lo sobre como usar a biblioteca gráfica LvGL (Light and Versatile Graphics Library) para o SenseCAP Indicator.

**Sistemas de coordenadas de pixels**

Uma imagem digital 2D é composta por linhas e colunas de pixels. Um pixel na imagem é especificado indicando em qual coluna e em qual linha o pixel está. Em termos simples, um pixel pode ser identificado por um par de inteiros que fornecem o número da coluna e o número da linha.

Convencionalmente, as colunas são numeradas da parte superior esquerda para a direita, começando em zero, mas em alguns casos, também pode começar de outros cantos (definindo a rotação).

**Modelo de cor de 16 bits**

Os pixels também são expressos em forma de cor, portanto é melhor também cobrir alguns modelos de cor. O modelo de cor de 16 bits é adequado para MCUs trabalharem, então este é um bom começo. O modelo de cor é composto por 3 componentes de cor - Vermelho, Verde e Azul. Dependendo do modelo de cor, esses 3 componentes de cor serão armazenados em uma variável de 16 bits.

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Vermelho   | Vermelho   | Vermelho   | Vermelho   | Vermelho   | Verde   | Verde   | Verde   | Verde   | Verde   | Verde   | Azul   | Azul   | Azul   | Azul   | Azul   |

**Inicialização da tela LCD**

Para inicializar a tela LCD no SenseCAP Indicator:

```c
lcd init:
bsp_board_init()
```

# **Suporte técnico**

Não se preocupe, nós cuidamos de tudo! Por favor, visite o nosso [Canal oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido grande ou necessidade de personalização, entre em contato pelo e-mail iot@seeed.cc

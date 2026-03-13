---
title: Grove - LED Matrix Driver v1.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-LED_Matrix_Driver_v1.0/
slug: /Grove-LED_Matrix_Driver_v1.0
sku: 105020013
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_Matrix_Driver_v1.0/
---


![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg)

Grove - LED Matrix Driver v1.0 é um driver de matriz de LEDs do tipo UART (Serial) para matriz de pontos que incorpora diversas funções gráficas. Ele só pode suportar matriz de LEDs de 32×64. Este produto é uma interface UART compatível com **Grove**. Ele fornece APIs fáceis e ricas que abstraem a complexidade do hardware de acionamento de LEDs subjacente. Tudo o que você precisa fazer é apenas chamar essas APIs no código para implementar diferentes funcionalidades para o seu projeto.

Cada ponto (ou seja, pixel) suporta LEDs de duas cores. Ele pode produzir três cores ao todo: vermelho (cor primária), verde (cor primária) e amarelo (cor mista). A corrente de entrada para todos os LEDs pode ser configurada de uma só vez.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html)

:::note
Este módulo Grove não suporta alterar separadamente a corrente de entrada de cada LED.
:::

Recursos
--------

- Compatível com Grove e fácil de usar
- API altamente abstrata e completa
- Suporta pixel de LED de duas cores. Três cores ao todo (a terceira cor é uma mistura das duas cores primárias)
- Interface: UART (SoftSerial no Arduino)

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

| Parâmetro                              | Valor                                                                                                                          |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Tensão de operação (V)                 | 3,3–5 Volts                                                                                                                    |
| Corrente de operação (mA)              | Máxima: 28–50 mA                                                                                                               |
| Tensão de saída (do driver da matriz)  | 3,3 Volts                                                                                                                      |
| Funções de símbolos/gráficos suportadas | Ponto, linha reta, círculo, caractere, string, número, emoji, imagem (você pode exibir esses símbolos chamando a API diretamente no código) |
| Tamanho de matriz de LED suportado     | 32 (linha)×64 (coluna)                                                                                                         |
| Cor suportada em cada ponto da matriz de LED | LEDs duplos (verde e vermelho) e uma cor mista (amarelo), e você pode usar apenas um LED em cada ponto da matriz de LED      |
| Conector para matriz de LED            | DBSTAR_HUB 08A                                                                                                                |
| Protocolo para porta Grove             | UART                                                                                                                           |
| Temperatura de trabalho                | -40–80 ℃                                                                                                                       |
| Dimensões                              | 46,5×44 mm                                                                                                                     |
| Peso                                   | 9 g (para o módulo), 12,5 (para todo o pacote individual)                                                                     |

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg)

- **Soquete Grove**, para conectar este produto à placa de controle principal.
- **Porta da matriz de LED (DBSTAR_HUB 08A)**, para conectar a matriz de LED. Se você não conseguir encontrar um conector como este, pode usar jumpers como alternativa.

### **O pacote inclui** (partes principais)

| Nome das partes                                                                                                               | Quantidade |
|-------------------------------------------------------------------------------------------------------------------------------|-----------|
| Grove - LED Matrix Driver v1.0                                                                                                | 1 peça    |
| [Cabo Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 peça    |

Primeiros Passos
---------------

Agora vamos executar alguns exemplos básicos com este módulo.

### Com Arduino

#### Material necessário

- Grove - LED Matrix Driver v1.0 × 1
- Matriz de LED 32×64 com um LED vermelho e um LED verde em cada ponto da matriz (matriz de LED de cor única também serve) × 1
- Linha de alimentação (em fita) × 1
- Fonte de 5 Volts (saída) para regular a tensão de entrada da matriz de LED × 1
- Cabo flat de 8 pinos (fêmea) × 1
- Arduino UNO (outros modelos de Arduino também servem) × 1
- [Cabo Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
- Grove - Base Shield × 1

#### Conexões

Conecte todas as partes como a seguir:

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg)

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg)

#### Trabalho de Codificação

Você pode encontrar mais sketches de demonstração em &lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt; e a biblioteca de desenvolvimento em &lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt;

1. Um código de demonstração típico. Você pode enviar o código para a placa de controle principal com o [Codebender](https://codebender.cc).

<iframe frameBorder={0} height={500} src="https://codebender.cc/embed/sketch:300168" width="50%">
</iframe>

2. Baixe e envie o código. Se você não sabe como enviar um sketch para o Arduino, visite &lt;https://www.arduino.cc/en/Guide/Windows&gt; para usuários de Windows ou &lt;https://www.arduino.cc/en/Guide/MacOSX&gt; para usuários de Mac. Você pode ver o resultado como abaixo.

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo do esquemático](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip)
- [Datasheet do STM32F103C8T6](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf)
- [Biblioteca no Github](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver)
- [Firmware para este produto](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_LED_Matrix_Driver_v1.0 -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

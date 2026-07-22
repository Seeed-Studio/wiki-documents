---
description: Introdução à ePaper Breakout Board
title: Introdução à ePaper Breakout Board
keywords:
  - XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board
sku: 104990843,104990845,104990846,104990847,104990853,104990855,104990857,104990858,104990859,104990861,105990172
sidebar_position: 1
last_update:
  date: 05/23/2023
  author: Carla
createdAt: '2023-10-30'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/
---
# Introdução à ePaper Breakout Board

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

Conheça a XIAO eInk Expansion Board, sua solução ideal para controlar displays eInk com a família XIAO sem esforço. Projetada com um conector FPC de 24 pinos, esta placa fornece uma ligação perfeita à nossa série de produtos eInk; se você quiser ampliar suas opções, o Header de 8 pinos 2,54 permite integrar facilmente qualquer microcontrolador de sua escolha. Pense nesta placa como a “melhor amiga para sempre” do seu eInk, ampliando seus recursos e facilitando sua vida.

:::note
Esta breakout board não inclui um display eInk; o display deve ser adquirido separadamente.
:::

## Introdução

### Recursos

- Conector FPC de 24 pinos: fornece uma conexão robusta e confiável para displays eInk.
- Soquete XIAO: permite usar o XIAO como processador, oferecendo uma solução de controle compacta e poderosa.
- Header de 8 pinos 2,54: oferece flexibilidade ao permitir que você conecte qualquer microcontrolador, abrindo um mundo de possibilidades.
- Plug-and-Play: projetado para facilidade de uso, sendo perfeito tanto para iniciantes quanto para especialistas.
- Aplicações versáteis: adequado para uma ampla gama de displays eInk, de tamanhos pequenos a grandes.

### Aplicações

- Sinalização digital: use a eInk Breakout Board para criar sinalizações digitais dinâmicas e energeticamente eficientes.
- E-readers: construa seu próprio e-reader personalizado com recursos adaptados às suas necessidades.
- Painéis de controle para casa inteligente: integre a placa em um sistema de casa inteligente para um painel de controle moderno e elegante.
- Etiquetas de preço para varejo: crie etiquetas de preço eletrônicas para uma experiência de varejo mais eficiente e ecológica.
- Ferramentas educacionais: desenvolva materiais educacionais interativos que possam ser facilmente atualizados e sejam eficientes em termos de energia.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. Conector FPC de 24 pinos: para o ePaper de 2,13 polegadas.
2. Soquete XIAO: para conectar a placa de desenvolvimento Seeed Studio XIAO.
3. Quebra de IO: para conectar outros controladores, como Arduino UNO ou Raspberry Pi.

### Definições de pinos

<div class="table-center">

|  Pinos SPI do eInk |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### eInk compatíveis

1. [E-paper de 1,54 polegada - Matriz de pontos 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [E-Paper de 2,13 polegadas - Monocromático flexível 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [E-Paper de 2,13 polegadas - Quádruplo 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [E-paper de 2,9 polegadas - Monocor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [E-Paper de 4,2 polegadas - Monocor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
6. [E-Paper de 4,26 polegadas - Monocor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
7. [E-paper de 5,65 polegadas - Sete cores 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [E-paper de 5,83 polegadas - Monocor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)



### Preparação de hardware

**Passo 1.** Preparação de material

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**PASSO 2.** Insira o XIAO no soquete XIAO: alinhe os pinos e insira cuidadosamente o seu XIAO no soquete XIAO na placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**PASSO 3.** Insira o eInk no conector FPC: deslize cuidadosamente o seu E-paper no conector FPC de 24 pinos na ePaper Breakout Board.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### Preparação de software

 A ferramenta de programação recomendada é a Arduino IDE, e você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote da placa.
:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à Arduino IDE.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** para concluir a adição.

## Instalar a biblioteca Seeed GFX

**Passo 3.** Instale a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Role para baixo e abra este link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecione o tipo do seu dispositivo e ele irá gerar algum código. Copie esse código e o usaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se do tipo dos seus dispositivos ou componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/epaper_display.jpg" style={{width:600, height:'auto'}}/></div>

Depois de baixar a biblioteca, vá para **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Existem 4 exemplos básicos, abra um exemplo básico de que você goste:

1. Bitmap: Exibe uma imagem bitmap.
2. Clock: Exibe um relógio.
3. Clock_digital: Exibe um relógio digital.
4. Shape: Exibe tamanhos diferentes de palavras e formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Enviar o código

Crie um **novo arquivo "driver.h"** e cole esse código nele. O código deve ser assim:

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

Depois disso, vá para **Tools** -> **Board** -> **XIAO ESP32C6** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**. Em seguida, clique em **Upload** para enviar o código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

Agora você verá o retorno na sua tela de epaper! A seguir estão os resultados dos exemplos Helloworld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Se você estiver usando uma tela e-ink de 1,54 polegadas ou 2,9 polegadas, devido aos seus chips de driver, pode ocorrer cintilação ao usar efeitos dinâmicos, como relógios. Fique tranquilo, isso não é um problema de programa. No entanto, não é recomendado executar exemplos de efeitos dinâmicos por longos períodos para evitar reduzir a vida útil da tela.

Se você estiver usando telas de 5,83 e 7,5 polegadas, elas possuem chips diferentes, portanto não terão o fenômeno de cintilação.
:::

## Software de extração de imagem

### Uso dos sites (recomendado)

Aqui estou usando uma tela e-ink de 7,5 polegadas para o teste

#### Como fazer uma imagem

Este [URL](https://jlamch.net/MXChipWelcome/) fornece uma operação de extração de imagem muito conveniente, que pode facilmente nos ajudar a exibir uma variedade de imagens na tela e-ink, vamos começar!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Passo 1**. Selecionar imagem

Primeiro escolha a imagem desejada, tente não exceder o tamanho de 800*480.

**Passo 2**. Configurações da imagem

- Tamanho da tela (Canvas Size)
  - Tamanho da tela: Defina as dimensões da tela. Por exemplo, 800 x 480 pixels significa que a largura da tela é 800 pixels e a altura é 480 pixels.

- Cor de fundo
  - Cor de fundo: Escolha a cor de fundo da tela. As opções incluem:

  - White: Fundo branco
  - Black: Fundo preto

- Transparent: Fundo transparente
  - Invert Image Color
  - Invert Image Color: Esta opção é usada para inverter as cores da imagem. Quando selecionada, as cores da imagem serão invertidas.

- Brilho / Limite de Alfa
  - Brilho / Limite de Alfa: Defina o valor de brilho dos pixels, variando de 0 a 255. Valores mais altos tornam os pixels mais claros; pixels abaixo desse valor ficarão pretos.

- Redimensionamento
  - Redimensionamento: Escolha o método de redimensionamento da imagem. As opções incluem:

- Tamanho original: Manter o tamanho original
  - Outras opções de redimensionamento (opções específicas podem precisar de mais explicações)
- Centralizar
  - Centralizar: Escolha se deseja centralizar a imagem na tela. Observação: esta opção só funciona se a imagem for maior que o tamanho original.

**Passo 3**. Pré-visualização

Depois que as configurações estiverem concluídas, você poderá ver aqui uma pré-visualização de como sua imagem aparecerá

**Passo 4**. Saída

- Copie o código convertido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- Substitua o código da imagem neste arquivo de cabeçalho
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### Efeito de exibição

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Uso do software Image2lcd

#### Como fazer uma imagem

Use o software interno **Paint** no Windows para criar uma imagem com a **mesma resolução** da tela que você está usando e salve-a como arquivo `BMP` ou `JPG`;

:::note
A resolução da sua imagem deve ser a mesma da tela que você está usando, por exemplo, o E-paper de 4,2 polegadas é 400 x 300 pixels, então você não pode usar o tamanho de 300 x 400, isso fará com que o iamge2lcd gere um arquivo `.h` com 200 bytes extras.
:::

As cores da imagem devem ser consistentes com as cores padrão da prancheta que vem com o Windows. A cor da prancheta é a seguinte:

<div class="table-center">

|      E-paper      | Cores |
|       ---      |  ---   |
|1.54-inch E-paper - Dotmatix 200x200           | preto e branco puros          |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | preto e branco puros          |
|2.13-inch E-Paper - Quadruple 212x104          | preto, branco, vermelho e amarelo |
|2.9 inch E-paper - Monocolor 128x296           | preto e branco puros          |
|2.9-inch e-paper - Quadruple color 128x296     | preto, branco, vermelho e amarelo |
|4.2-inch E-Paper - Monocolor 400x300           | preto e branco puros          |
|4.26-inch E-Paper - Monocolor 800x480          | preto e branco puros          |
|5.65-inch E-paper -  Sevencolor 600x480        | preto, branco, vermelho, amarelo, azul, verde, laranja|
|5.83-inch E-paper - Monocolor 648x480          | preto e branco puros          |
|7.5-inch E-paper - Monocolor 800x480           | preto e branco puros          |
|7.5-inch E-paper - Tri-Color 800x480           | preto e branco puros          |

</div>

#### Conversão de bitmap

**Passo 1.** Abra [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extraia-o e abra o aplicativo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Abra a imagem, selecione o "Output file type" como "C array (*.c)", selecione o "Scan mode" como "Horizon Scan", as outras configurações de parâmetros são mostradas a seguir:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Max Width and Height</th>
        <th>Reverse color</th>
        <th>Display mode</th>
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">Monochrome</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">Monochrome</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper - Quadruple 212x104 </th>
        <td align="center">4 Gray</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9 inch E-paper - Monocolor 128x296</th>
         <td align="center">Monochrome</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9-inch e-paper - Quadruple color 128x296 </th>
        <td align="center">4 Gray</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>4.2-inch E-Paper - Monocolor 400x300</th>
        <td align="center">Monochrome</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>4.26-inch E-Paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>5.65-inch E-paper -  Sevencolor 600x480</th>
        <td align="center">256 colors</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>5.83-inch E-paper - Monocolor 648x480</th>
        <td align="center">Monochrome</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>7.5-inch E-paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">Espelhar esquerda-direita</td>
    </tr>
    <tr>
        <th>E-paper de 7,5 polegadas - Tricolor 800x480</th>
        <td align="center">Monocromático</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
  </table>
</div>

:::tip

- Depois de definir a Largura e Altura Máximas, é necessário clicar na seta para confirmar.
- Não inclua dados de cabeçalho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Passo 3.** Clique em "Save" para salvar o array de saída do lcd como um arquivo `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[ZIP]** [Arquivo Eagle de PCB&SCH](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

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

---
description: Shield de pequeno e-Paper
title: Shield de pequeno e-Paper
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Small_e-Paper_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Small_e-Paper_Shield/
---


![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E_shield_01.jpg)
![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E_shield_02.jpg)

e-Paper pode ser o material mais confortável para leitura. Ele reflete a luz em vez de emiti-la para imitar a experiência de leitura em papel convencional. E dessa forma, muito menos energia é consumida. O Small e-Paper Shield é um shield driver para e-Papers de tamanhos pequenos. Ele é capaz de controlar e-Papers de 1,44 polegada, 2,0 polegadas e 2,7 polegadas e suporta mais de 170 idiomas. A superfície superior deste shield é mantida plana e limpa para dar grande suporte ao e-Paper anexado a ele. Se você está considerando um display leve e confortável para leitura, e-Paper seria uma boa escolha.

**Atenção:** Como esta placa driver suporta e-Papers de diferentes tamanhos, o e-Paper não está incluído neste produto. Temos e-Paper de 2,0 polegadas e 2,7 polegadas à venda simultaneamente. Vá e adicione o mais adequado ao seu carrinho agora!

**Modelo:** [SLD00200P](https://www.seeedstudio.com/depot/small-epaper-shield-p-1597.html)

### Escolha a biblioteca

Para escolher a biblioteca correta você deve conhecer a versão do seu painel.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Definition_of_Model_Labels.jpg)

**Preste atenção ao rótulo do seu painel**:

- se o nome do modelo for 'EG020AS012' ou 'EM027AS011', então você deve escolher a biblioteca antiga, clique aqui [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield).

- se o nome do modelo for 'EG020BS011' ou 'EM027BS013', então você deve escolher a nova biblioteca, clique aqui [New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EPDV230.zip).

## Especificações

- Placa compatível: Arduino Uno/Leonardo/Arduino Mega

- Tensão de operação: 3.3/5VDC

- Corrente de operação (atualizar tela): 40mA

- Tipo de interface: SPI

<font color="Green">
</font>

### PINs no Arduino

<table>
  <tr>
    <th>Arduino</th>
    <th>E-paper</th>
  </tr>
  <tr>
    <td width="150px">D2</td>
    <td width="250px">M_EPD_PANEL_ON</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>M_EPD_BORDER</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>M_/SD_CS</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>M_EPD_PWM</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>M_EPD_/RESET</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>M_EPD_BUSY</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>M_EPD_DISCHARGE</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>M_/WORD_STOCK_CS</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>M_/EPD_CS</td>
  </tr>
  <tr>
    <td>ICSP PORT</td>
    <td>M_MOSI , M_SCK , M_MISO</td>
  </tr>
  <tr>
    <td>A0</td>
    <td>M_TEMP_SEN</td>
  </tr>
  <tr>
    <td>A1</td>
    <td>M_OE123﻿﻿</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>M_CKV</td>
  </tr>
  <tr>
    <td>A3</td>
    <td>M_STV_IN</td>
  </tr>
  <tr>
    <td>3.3V</td>
    <td>M_VCC_3V3</td>
  </tr>
  <tr>
    <td>5V</td>
    <td>M_VCC_5V</td>
  </tr>
</table>

## Demonstração

O Small e-Paper Shield pode exibir imagens, uma variedade de gráficos e textos. Há muitos exemplos na biblioteca que lhe dão algumas ideias sobre como usar o módulo. Agora vamos experimentar a poderosa biblioteca e o amplo ângulo de visão do e-Paper.

### Instalação de hardware

- Conecte o e-Paper à interface FFC do Small e-Paper Shield.
- Conecte o Small e-Paper Shield ao Arduino/Seeeduino e conecte-o ao PC usando um cabo USB.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E-Paper_Screen.jpg)

Agora é hora de mostrar demos usando a biblioteca, que precisa ser baixada [aqui](https://github.com/Seeed-Studio/ePaper). Depois de fazer o download, você precisa colocá-la na pasta libraries da Arduino IDE pelo caminho:...\arduino-1.0.1\libraries.

### Exibição da Demo

Aqui selecionamos a tela de 2,0 polegadas como exemplo para mostrar suas funções de exibição.

#### Demo 1: Exibir textos

- Abra o código: File -&gt; Examples -&gt; ePaper -&gt; text como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Text_Code.jpg)

**Nota importante:**

> Precisamos reafirmar esta observação:
>
> - Se você usar Arduino UNO, Seeeduino 3.0 e qualquer placa que use Atmega 328P ou Atmega32U4 como controlador, você deve inserir um cartão SD usando esta demo. O cartão SD é usado para armazenar dados temporários devido ao pequeno espaço de armazenamento do Atmega328p e Atmega32U4.
> - Se você usar um Arduino Mega, ou qualquer outra placa que use Atmega1280 ou Atmega2560, não precisa inserir um cartão SD.

- Altere o parâmetro para corresponder ao tamanho da sua tela. Você precisa alterar 200 para 270 se sua tela for de 2,7 polegadas. E você precisa fazer essa alteração ao usar outros exemplos.

<pre>#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270</pre>

- Envie o código para o seu microcontrolador. Clique [aqui](https://seeeddoc.github.io/Upload_Code/) se você não souber como fazer.

- Agora você pode ver isto:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Display_text.jpg)

- Tente alterar o texto exibido e a posição de exibição. Você pode aprender o uso de cada função.

#### Demo 2: Exibir gráfico

O exemplo: _draw_ será um bom exemplo para exibir uma variedade de gráficos. Você precisa abrir este código: _draw_ como na demo 1. Lembre-se da observação sobre se você precisa de um cartão SD para concluir a demo. Certifique-se se o cartão SD é necessário ou não, dependendo do tipo do seu microcontrolador. E altere o parâmetro para corresponder ao tamanho da sua tela.

Após concluir as modificações e enviar o código, um belo padrão será exibido na tela:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Display_graphic.jpg)

A imagem é criada chamando as funções de desenho gráfico. Você pode criar seu próprio padrão e testá-lo na tela. Cada função de desenho tem uma descrição específica na referência.

#### Demo 3: Exibir imagem

Semelhante aos displays TFT e displays OLED, o Small e-Paper Shield suporta a exibição de imagens.

Agora você precisa abrir o exemplo de imagem: File -&gt; Examples -&gt; ePaper -&gt; image.

Você precisa enviar o código para ver o resultado.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Dispaly_image.jpg)

**Nota：Como você pode ver, o tamanho de tela padrão neste sketch "image" é definido como 2,7 polegadas. Por favor, modifique a configuração do tamanho da tela em caso de exibição incorreta.**

<pre>  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 </pre>

Claro, você pode mudar a imagem exibida alterando os dados de matriz da imagem.

Por exemplo, se sua tela e-Paper for de 2,7 polegadas, você precisa fornecer os dados de matriz de 264 X 176 pixels e copiar o código para 'static unsigned char image_270[] PROGMEM ={}' em picture.h.
Você precisa copiar o código de dados de matriz de 200x96 pixels para 'static unsigned char image_200[] PROGMEM ={}' ao usar uma tela de 2,0 polegadas.

#### Como exibir uma imagem

Graças à contribuição de Muchiri John, obtivemos uma ferramenta muito útil e fácil de usar. Com esta ferramenta, exibir uma imagem não é mais difícil.

Você pode baixar a ferramenta [aqui](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EpdImageKit.zip)

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Snapshot_epaper_shied_tools.jpg)

## Referência

A biblioteca Small e-Paper fornece interfaces de software completas para explorar os recursos do display e-Paper. Há descrições específicas sobre as funções.

### Descrição das funções

<u>1. void begin(EPD_size sz);</u>

_Esta função configura o tamanho da tela._

- sz: pode ser EPD_1_44, EPD_2_0, EPD_2_7.

<u>2. void setDirection(EPD_DIR dir);</u>

_Esta função é usada para definir a direção de exibição._

- dir: pode ser DIRLEFT,DIRRIGHT,DIRNORMAL,DIRDOWN

<u>3. int drawChar(char c, int x, int y);</u>

_Esta função pode ser usada para exibir um caractere._

- c: o caractere que você quer exibir.

- x: a coordenada X inicial do caractere.

- y: a coordenada Y inicial do caractere.

<u>4. int drawString(char *string, int poX, int poY);</u>

_Esta função pode ser usada para exibir uma string._

- *string: a string que você quer exibir.

- poX: a coordenada X inicial da string.

- poY: a coordenada Y inicial da string.

<u>5. int drawNumber(long long_num,int poX, int poY);</u>

_Esta função pode ser usada para exibir um número inteiro._

- long_num: os dados de inteiro longo que você quer exibir. O máximo é

- poX: a coordenada X inicial dos dados

- poY: a coordenada Y inicial dos dados

<u>6. int drawFloat(float floatNumber,int decimal,int poX, int poY);</u>

_Esta função pode ser usada para exibir um número de ponto flutuante. Os dados de ponto flutuante exibidos são arredondados de acordo com a casa decimal definida._

- floatNumber: o número de ponto flutuante que você quer exibir.

- decimal: define a casa decimal.

- poX: a coordenada X inicial dos dados.

- poY: a coordenada Y inicial dos dados.

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_Esta função pode ser usada para exibir um caractere ou um caractere chinês usando unicode. Veja as páginas 18 a 24 do [datasheet GT20L16P1Y](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/GT20L16P1Y_Datasheet.pdf) para encontrar o unicode de caracteres; os caracteres incluem Latim, Hebraico, Tailandês, Grego, Cirílico e Árabe. O unicode chinês pode ser visto em [tabela de código de caracteres GB2312 (chinês simplificado)](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Character_code_table.pdf)._

- uniCode: o código de máquina correspondente a um caractere ou um caractere chinês.

- x: a coordenada X inicial.

- y: a coordenada Y inicial.

Nota: o unicode de caractere entre 0x0020 e 0x007E pode ser inserido diretamente via teclado. Por exemplo, para exibir o caractere 'G', a função pode ser drawUnicode(0x0047, 3,10) ou displayChar ('s',3,10);

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_Esta função pode ser usada para exibir vários caracteres e caracteres chineses._

- *uniCode: um array unicode.

- len: comprimento da string.

- x: a coordenada X inicial da string.

- y: a coordenada Y inicial da string.

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_Esta função pode ser usada para exibir uma linha._

- x0: a coordenada X inicial da linha

- y0: a coordenada Y inicial da linha

- x1: a coordenada X final da linha

- y1: a coordenada Y final da linha

<u>10. void drawCircle(int poX, int poY, int r);</u>

_Esta função pode ser usada para desenhar um círculo._

- poX: a coordenada X do centro

- poY: a coordenada Y do centro
- r: o raio do centro

<u>11. void drawHorizontalLine( int poX, int poY, int len);</u>

_Esta função pode ser usada para desenhar uma linha horizontal._

- poX: a coordenada X inicial da linha.

- poY: a coordenada Y inicial da linha.

- len: o comprimento da linha

<u>12. void drawVerticalLine( int poX, int poY, int len);</u>

_Esta função pode ser usada para desenhar uma linha vertical._

- poX: a coordenada X inicial da Linha.

- poY: a coordenada Y inicial da Linha.

- len: o comprimento da linha.

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_Esta função pode ser usada para desenhar um retângulo._

- poX: a coordenada X inicial do retângulo.

- poY: a coordenada Y inicial do retângulo.

- len: o comprimento do retângulo.

- width: a largura do retângulo.

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_Esta função pode ser usada para desenhar um retângulo preenchido._

- poX: a coordenada X inicial do retângulo.

- poY: a coordenada Y inicial do retângulo.

- len: o comprimento do retângulo.

- width: a largura do retângulo.

<u>15. void fillCircle(int poX, int poY, int r);</u>

_Esta função pode ser usada para desenhar um círculo preenchido._

- poX: a coordenada X do centro.

- poY: a coordenada Y do centro.

- r: o raio do centro

**Exemplo:**

```cpp
EPAPER.drawRectangle(10, 10, 100, 80);
EPAPER.fillCircle(50, 50, 30);
EPAPER.fillRectangle(50, 65, 50, 20);
EPAPER.drawCircle(150, 50, 10);
EPAPER.fillCircle(150, 50, 5);
EPAPER.drawHorizontalLine(120, 50, 60);
EPAPER.drawVerticalLine(150, 20, 60);
```

<u>16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_Esta função pode ser usada para desenhar um triângulo. Ele é formado por três pontos._

- poX1(poX2,poX3): a coordenada X de um ponto do triângulo.

- poY1(poY2,poY3): a coordenada Y de um ponto do triângulo.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small_e-Paper_Shield_V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Arquivo Eagle do Small e-Paper Shield](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small_e-Paper_Shield_V2.1.zip)
- **[PDF]**[PDF do Small e-PaperShield v2.1](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small%20e-PaperShield%20v2.1.pdf)
- **[EAGLE]**[SCH do Small e-PaperShield v2.1](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small%20e-PaperShield%20v2.1.sch)
- **[Library]**  [Biblioteca Small e-Paper](https://github.com/Seeed-Studio/Small_ePaper_Shield)
- **[Datasheet]** [Datasheet dos painéis e-Paper](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)
- **[Tool]** [Ferramenta epdImageKit](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EpdImageKit.zip)
- **[Library]** [Nova Biblioteca de Painel【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EPDV230.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

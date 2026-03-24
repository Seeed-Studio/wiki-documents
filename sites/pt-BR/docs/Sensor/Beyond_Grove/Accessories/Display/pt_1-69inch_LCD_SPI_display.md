---
description: Introdução ao Display LCD SPI de 1,69 polegadas
title: 1.69 inch LCD SPI Display
keywords:
  - oled display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /1-69inch_lcd_spi_display
sku: 104990802
last_update:
  date: 08/17/2023
  author: Citric
createdAt: '2023-08-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/1-69inch_lcd_spi_display/
---

# Display LCD SPI de 1,69 polegadas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução

Este Display LCD de 1,69 polegadas é uma tela de cristal líquido serial de 1,69 polegadas com cantos arredondados. Oferecendo uma resolução superior de 240×280 e 262K cores RGB de exibição, esta tela proporciona uma representação de imagem nítida e colorida. A lógica de design por trás deste display é apresentar uma solução de exibição simples e de alta qualidade para atender às necessidades de vários projetos DIY ou de Internet das Coisas (IoT).

Ele adota uma interface de 8 pinos com 4 pinos de alimentação com retroiluminação e 4 pinos SPI que se comunicam com o CI driver ST7789V2. Nós preparamos a biblioteca de driver e exemplos para que você comece de forma rápida e conveniente com o desenvolvimento do seu projeto.

### Especificações

<div class="table-center">
 <table align="center">
        <tbody>
            <tr>
                <th>Tensão de operação</th>
                <td>3.3V / 5V</td>
                <th>Resolução</th>
                <td>240 × 280 pixels</td>
            </tr>
            <tr>
                <th>Interface de comunicação</th>
                <td>SPI de 4 fios</td>
                <th>Tamanho da tela</th>
                <td>27.97 × 32.63mm</td>
            </tr>
            <tr>
                <th>Painel de exibição</th>
                <td>IPS</td>
                <th>Pitch de pixel</th>
                <td>0.11655 × 0.11655mm</td>
            </tr>
            <tr>
                <th>Driver</th>
                <td>ST7789V2</td>
                <th>Dimensões</th>
                <td>31.50 × 39.00mm</td>
            </tr>
        </tbody>
    </table>
</div>

### Dimensões externas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/7.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/8.jpg" style={{width:450, height:'auto'}}/></div>

### Recursos

- Resolução de 240×280, 262K cores RGB, efeito de exibição nítido e colorido
- Interface SPI, minimiza os pinos de E/S necessários, suporta placas controladoras como XIAO/Raspberry Pi/Arduino/STM32
- Acompanha recursos de desenvolvimento (exemplos para XIAO/Raspberry Pi/Arduino/STM32)

### Ideias de aplicação

- **Pulseira ou relógio**: O display pode ser montado com o MCU XIAO para construir um dispositivo de pulseira ou relógio, onde ele pode mostrar a data e informações do relógio com sua tela de alta resolução e colorida. Seu pequeno tamanho o torna um excelente componente para criar rapidamente um protótipo.

- **Tela de exibição de informações do PC:** Você pode usar este display LCD conectado à placa conversora e utilizá-lo para exibir informações de funcionamento do seu PC, como temperatura e RPM da ventoinha. Seus parafusos podem ajudar você a fixá-lo facilmente no gabinete do PC.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/9.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

### Preparação de hardware

Agora vamos mostrar como usar nossa placa XIAO nRF52840, que contém 6 DOF de IMU, Bluetooth e microfone PDM; você pode perceber que esta placa com este display são os componentes-chave de que você precisa para construir um relógio digital.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO nRF52840</th>
   <th>Display LCD SPI de 1,69 polegadas</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Em seguida, você deve conectar os pinos do display à placa XIAO nRF52840; siga a imagem abaixo para conectá-los:

| Display LCD SPI de 1,69 polegadas| XIAO nRF52840 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

## Visão geral da biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

Com base no programa de exemplo Arduino fornecido pela **Waveshare**, nós escrevemos uma biblioteca Arduino para uso com toda a série XIAO, e você pode ir diretamente para o Github desta biblioteca por meio do botão abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos observar as funções disponíveis da biblioteca.

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)` —— Inicialização comum de registradores.

    **Parâmetros de entrada**
  - `cs`: Define o pino de seleção de chip; o valor padrão é o pino **D1** do XIAO.
  - `dc`: Define o pino DC; o valor padrão é o pino **D3** do XIAO.
  - `rst`: Define o pino de reset; o valor padrão é o pino **D0** do XIAO.
  - `bl`: Define o pino de controle da retroiluminação; o valor padrão é o pino **D6** do XIAO.

- `void SetBacklight(uint16_t Value)` —— Configuração da retroiluminação.

    **Parâmetros de entrada**
  - `Value`: Intensidade da retroiluminação, com valores que variam de 0 a 255.

- `void Reset(void)` —— Reset de hardware.

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)` —— Define a posição do cursor.

    **Parâmetros de entrada**
  - `Xstart`: Coordenada x inicial do tipo uint16_t.
  - `Ystart`: Coordenada y inicial do tipo uint16_t.
  - `Xend`: Coordenadas finais do tipo uint16_t.
  - `Yend`: Coordenadas finais do tipo uint16_t.

- `void Clear(uint16_t Color)` —— Função de limpar tela, atualiza a tela para uma determinada cor.

    **Parâmetros de entrada**
  - `Color`: A cor com a qual você deseja limpar toda a tela.

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)` —— Atualiza uma determinada área para a mesma cor.

    **Parâmetros de entrada**
  - `Xstart`: Coordenada x inicial do tipo uint16_t.
  - `Ystart`: Coordenada y inicial do tipo uint16_t.
  - `Xend`: Coordenadas finais do tipo uint16_t.
  - `Yend`: Coordenadas finais do tipo uint16_t.
  - `color`: Define a cor.

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)` —— Define a cor de uma área.

    **Parâmetros de entrada**
  - `Xstart`: Coordenada x inicial do tipo uint16_t.
  - `Ystart`: Coordenada y inicial do tipo uint16_t.
  - `Xend`: Coordenadas finais do tipo uint16_t.
  - `Yend`: Coordenadas finais do tipo uint16_t.
  - `color`: Define a cor.

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)` —— Desenha um uint16_t.

    **Parâmetros de entrada**
  - `x`: Define a coordenada X.
  - `y`: Define a coordenada Y.
  - `Color`: Define a cor.

- `void SetRotate(uint16_t Rotate)` —— Seleciona a rotação da imagem.

    **Parâmetros de entrada**
  - `Rotate`: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270

- `void SetMirroring(uint8_t mirror)` —— Seleciona o espelhamento da imagem.

    **Parâmetros de entrada**
  - `mirror`: MIRROR_NONE, MIRROR_HORIZONTAL, MIRROR_VERTICAL, MIRROR_ORIGIN

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)` —— Desenha pixels.

    **Parâmetros de entrada**
  - `Xpoint`: No ponto X.
  - `Ypoint`: No ponto Y.
  - `Color`: Cores desenhadas.

- `void DrawPoint( uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)` —— Desenha o ponto (Xpoint, Ypoint) preenchendo a cor.

    **Parâmetros de entrada**
  - `Xpoint`: A coordenada Xpoint do ponto.
  - `Ypoint`: A coordenada Ypoint do ponto.
  - `Color`: Define a cor.
  - `Dot_Pixel`: Tamanho do ponto.

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)` —— Desenhar uma linha de inclinação arbitrária.

    **Parâmetros de Entrada**
  - `Xstart`：Coordenadas do ponto inicial em X.
  - `Ystart`：Coordenadas do ponto inicial em Y.
  - `Xend`：Coordenada X do ponto final.
  - `Yend`：Coordenada Y do ponto final.
  - `Color`：A cor do segmento de linha.

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)` —— Desenhar um retângulo.

    **Parâmetros de Entrada**
  - `Xstart`：Coordenadas do ponto inicial em X.
  - `Ystart`：Coordenadas do ponto inicial em Y.
  - `Xend`：Coordenada X do ponto final.
  - `Yend`：Coordenada Y do ponto final.
  - `Color`：A cor do segmento de linha.
  - `Filled`: Se é preenchido --- 1 preenchido 0：vazio

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)` —— Usar o método de 8 pontos para desenhar um círculo do tamanho especificado na posição especificada.

    **Parâmetros de Entrada**
  - `X_Center`：Coordenada X do centro
  - `Y_Center`：Coordenada Y do centro
  - `Radius`：Raio do círculo
  - `Color`：A cor do segmento do círculo
  - `Filled`: Se é preenchido: 1 preenchido 0：Não.

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Exibir a string.

    **Parâmetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `pString`：O primeiro endereço da string em inglês a ser exibida.
  - `Font`：Um ponteiro de estrutura que exibe um tamanho de caractere.
  - `Color_Background`: Selecionar a cor de fundo do caractere em inglês.
  - `Color_Foreground`: Selecionar a cor de primeiro plano do caractere em inglês.

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Exibir número.

    **Parâmetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `Nummber`：O número exibido.
  - `Font`：Um ponteiro de estrutura que exibe um tamanho de caractere.
  - `Color_Background`: Selecionar a cor de fundo do caractere em inglês.
  - `Color_Foreground`: Selecionar a cor de primeiro plano do caractere em inglês.

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber,  int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Exibir número de ponto flutuante.

    **Parâmetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `Nummber`：Os dados de ponto flutuante que você deseja exibir.
  - `Decimal_Point`：Mostrar casas decimais.
  - `Font`: Um ponteiro de estrutura que exibe um tamanho de caractere.
  - `Color`: Selecionar a cor de fundo do caractere em inglês.

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)` —— Exibir imagem.

    **Parâmetros de Entrada**
  - `image`: Endereço inicial da imagem.
  - `xStart`：Coordenadas iniciais em X.
  - `yStart`：Coordenadas iniciais em Y.
  - `xEnd`: Largura da imagem.
  - `yEnd`: Altura da imagem.

### Variáveis Padrão

```cpp
#define RST_PIN D0
#define DC_PIN  D3
#define BL_PIN  D6
#define CS_PIN  D1

#define LCD_WIDTH   240 //LCD width
#define LCD_HEIGHT  280 //LCD height

/**
 * image color
**/
#define WHITE         0xFFFF
#define BLACK         0x0000    
#define BLUE          0x001F  
#define BRED          0XF81F
#define GRED          0XFFE0
#define GBLUE         0X07FF
#define RED           0xF800
#define MAGENTA       0xF81F
#define GREEN         0x07E0
#define CYAN          0x7FFF
#define YELLOW        0xFFE0
#define BROWN         0XBC40 
#define BRRED         0XFC07 
#define GRAY          0X8430 
#define DARKBLUE      0X01CF  
#define LIGHTBLUE     0X7D7C   
#define GRAYBLUE      0X5458 
#define LIGHTGREEN    0X841F 
#define LGRAY         0XC618 
#define LGRAYBLUE     0XA651
#define LBBLUE        0X2B12

/**
 * Display rotate
**/
#define ROTATE_0            0
#define ROTATE_90           90
#define ROTATE_180          180
#define ROTATE_270          270

#define MIRROR_NONE        0x00
#define MIRROR_HORIZONTAL  0x01
#define MIRROR_VERTICAL    0x02
#define MIRROR_ORIGIN      0x03
```

### Instalação

Como você baixou a biblioteca em formato zip, abra o seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar, e se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Exemplo com XIAO

Depois de baixar e instalar a biblioteca corretamente, você pode encontrar dois programas de exemplo chamados **helloworld.ino** e **bgcolor.ino** na pasta de exemplos. O bgcolor.ino é um exemplo para mostrar a cor de fundo, nós definimos o vermelho como padrão. E o helloworld.ino é um exemplo para mostrar a animação sobre o logotipo da nossa empresa, e este exemplo contém o efeito que o exemplo bgcolor possui.

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // put your setup code here, to run once:
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // put your main code here, to run repeatedly:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);

  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);

  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);

  Display.DrawString_EN(20, 180, "By: Citric", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

Você verá o logotipo da Seeed Studio sendo exibido dinamicamente no display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/11.jpg" style={{width:700, height:'auto'}}/></div>

## Solução de Problemas

### 1. A tela não funciona quando eu a reprogramo enquanto a tela está conectada?

R: Se o seu programa estiver se comunicando constantemente com a tela, a reprogramação pode interromper esse processo, fazendo com que a tela funcione incorretamente. Você pode tentar desligar a alimentação para restaurar o funcionamento normal da tela.

### 2. Que tipo de fonte de alimentação devo usar para o display?

R: A placa de circuito pode aceitar uma tensão de entrada de 3,3 V ou 5 V, então você pode usar uma fonte de alimentação dentro desse intervalo.

### 3. As cores no meu display não parecem corretas. Qual pode ser o problema?

R: Certifique-se de que o display esteja corretamente inicializado no seu código e de que você esteja usando os valores de cor corretos. Se você ainda estiver enfrentando problemas, pode haver um defeito no display ou nos fios de conexão. Verifique as conexões ou tente com outro display, se disponível.

## Recursos

- **[PDF]** [Schematic](https://www.waveshare.com/w/upload/2/2b/1.69inch_LCD_Module.pdf)
- **[PDF]** [Datasheet](https://www.waveshare.com/w/upload/c/c9/ST7789V2.pdf)
- **[PDF]** [2D Drawing](https://www.waveshare.com/w/upload/4/41/1.69inch_LCD_Module_2Ddrawing.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

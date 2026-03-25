---
description: Usando LVGL e TFT no Seeed Studio Round Display para XIAO
title: Usando LVGL e TFT para toda a Série XIAO
keywords:
  - XIAO
  - Round Dislay
  - lvgl
  - draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /using_lvgl_and_tft_on_round_display
sku: 104030087
last_update:
  date: 09/12/2024
  author: Citric
createdAt: '2023-03-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/using_lvgl_and_tft_on_round_display/
---

# Usando LVGL e TFT no Seeed Studio Round Display para toda a série XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Obrigado por adquirir os produtos Seeed Studio Round Display. Nesta seção do tutorial, vamos focar em como usar a biblioteca `Seeed_GFX` e a biblioteca `LVGL` para desenhar vários mostradores ricos e interessantes no Round Display, e apresentar o uso de algumas funções comuns dessas duas bibliotecas úteis, porém complexas, do simples ao avançado. Com o conteúdo deste tutorial, espero que você possa usar este produto para desenhar o mostrador ideal. Tenha uma ótima experiência de aprendizagem!

## Primeiros passos

Antes de começar o estudo, gostaríamos que você se preparasse com o seguinte.

### Preparação de hardware

Para fins de demonstração, este tutorial usará o **XIAO ESP32S3** como controle principal.

<table align="center">
 <tr>
     <th>Seeed Studio Round Display for XIAO</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Se você quiser usar outros produtos XIAO, os tutoriais e métodos deste artigo também são aplicáveis.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
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
 </tr>
</table>

Ao instalar o XIAO com o Round Display, deixe o conector Type-C do XIAO voltado para fora do Round Display e, em seguida, conecte cada pino aos headers duplos de 7 pinos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### Preparação de software

Esta parte foi descrita em detalhes no [Basic Wiki](https://wiki.seeedstudio.com/pt-br/get_start_round_display#software-preparation), então você pode ir diretamente lê-la.

## Desenhando mostradores simples usando a biblioteca Seeed_GFX

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) (Baseada em modificações da biblioteca TFT_eSPI, com amplo suporte para os produtos de display da Seeed) é uma biblioteca de gráficos e fontes rica em recursos, compatível com Arduino IDE, para processadores de 32 bits. A biblioteca TFT fornecida pelo XIAO Round Display é baseada na biblioteca após a compatibilidade do XIAO e do XIAO Round Display, que suporta o uso de toda a série XIAO.

### Interfaces comuns para a biblioteca TFT

#### 1. Criar objetos TFT

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. Inicialização

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` e `tft.init()` são duas funções com a mesma função.

#### 3. Limpar tela

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. Configurando a orientação da tela

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0, 1, 2, 3 representam 0°, 90°, 180°, 270°, respectivamente, e 4 é a imagem espelhada.

#### 5. Conversão de cor

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. Inversão de cor

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. Configurações relacionadas a texto

```c
/* cursor */
void setCursor(int16_t x, int16_t y)                     // Set the cursor for tft.print()
void setCursor(int16_t x, int16_t y, uint8_t font)       // Set the cursor and font size of tft.print()
int16_t getCursorX(void)                                 // Read the current cursor x position (moves with tft.print())
int16_t getCursorY(void)                                 // Retrieve the current cursor y position

/* font color */
void setTextColor(uint16_t color)                        // Set the color of characters only
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // Set the character foreground and background colors

/* font size */
void setTextSize(uint8_t size)                           // Set the character size multiplier (this increases the pixel size)
void setTextWrap(bool wrapX, bool wrapY = false)         // Turn on/off line feeds for text in TFT width and/or height

/* Text reference position */
void setTextDatum(uint8_t datum)                         // Set text reference position (default is top left corner)
uint8_t getTextDatum(void)                               // Get the text reference position

/* Set the background fill, which can be used to clear the display of the specified area */
void setTextPadding(uint16_t x_width)                    // Set the text fill (background margin/rewrite) width in pixels
uint16_t getTextPadding(void)                            // Get text fill
```

Como você pode ver pelas funções acima, se quiser imprimir o texto exibido, você pode simplesmente usar a função `tft.print()`.

#### 8. Desenho de formas simples

Você pode desenhar algumas formas simples, incluindo pontos de pixel, segmentos de linha reta, retângulos, círculos, etc., usando as seguintes funções.

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // Plotting individual pixel points

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // Draw a line

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // Draw a rectangle
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // Draw a rectangle with a fill color

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle with a fill color

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse with a fill color

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triangle
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color
```

#### 9. Desenho de formas complexas

A biblioteca TFT também nos fornece métodos para desenhar formas complexas, como retângulos arredondados, arcos arredondados, formas extremamente suaves, etc.

```c
/** 
    Draw a pixel blended with the background pixel colour (bg_color) specified,  return blended colour 
    If the bg_color is not specified, the background pixel colour will be read from TFT or sprite 
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    Draw a small anti-aliased filled circle at ax,ay with radius r (uses drawWideLine)
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // Draw vertical straight lines
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // Draw horizontal lines
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // Draw a thick solid line
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  //Draws a tapered line. aw and bw represent the start and end width of the tapered line, respectively.


/**
    As per "drawSmoothArc" except the ends of the arc are NOT anti-aliased, this facilitates dynamic arc length changes with arc segments and ensures clean segment joints. 
    The sides of the arc are anti-aliased by default. If smoothArc is false sides will NOT be anti-aliased
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    Draw an anti-aliased (smooth) arc between start and end angles. Arc ends are anti-aliased.
    By default the arc is drawn with square ends unless the "roundEnds" parameter is included and set true
    Angle = 0 is at 6 o'clock position, 90 at 9 o'clock etc. The angles must be in range 0-360 or they will be clipped to these limits
    The start angle may be larger than the end angle. Arcs are always drawn clockwise from the start angle.
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    Draw an anti-aliased filled circle at x, y with radius r
    Note: The thickness of line is 3 pixels to reduce the visible "braiding" effect of anti-aliasing narrow lines this means the inner anti-alias zone is always at r-1 and the outer zone at r+1
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    Draw an anti-aliased filled circle at x, y with radius r
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    Draw a rounded rectangle that has a line thickness of r-ir+1 and bounding box defined by x,y and w,h
    The outer corner radius is r, inner corner radius is ir
    The inside and outside of the border are anti-aliased
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    Draw a filled rounded rectangle , corner radius r and bounding box defined by x,y and w,h
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. Variáveis e texto

Além de simplesmente exibir uma string específica, às vezes precisamos exibir algumas variáveis na tela, como hora e valores de sensores, etc. Então, dependendo do tipo da variável, você pode optar por usar as seguintes funções diferentes.

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. Processamento de imagens

Para usar a função `pushImage()` para exibir uma imagem na tela com a biblioteca TFT, você pode seguir estas etapas:

- Converta o arquivo de imagem para um formato de array C/C++ que o Arduino possa reconhecer. Você pode usar ferramentas online como **Image2CPP** para converter uma imagem bitmap em um formato de array.

- Inclua o arquivo de array de imagem gerado no seu programa Arduino.

- Inicialize a biblioteca e a tela TFT, definindo a resolução e o modo de cor da tela.

- Use a função `tft.pushImage(x, y, width, height, data)` para enviar os dados da imagem para a tela, onde x e y são as coordenadas do canto superior esquerdo da imagem, width e height são a largura e a altura da imagem, e data é o array da imagem.

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. Classe TFT_eSprite

`TFT_eSprite` e `TFT_eSPI` são ambas bibliotecas Arduino para displays LCD TFT, mas elas têm funções e objetivos de projeto diferentes.

TFT_eSPI é uma biblioteca poderosa com muitos recursos avançados e opções de configuração que podem alcançar vários efeitos de exibição. Ela suporta múltiplos chips e controladores de driver de display e pode ser usada em várias plataformas de hardware Arduino. Ela usa a interface SPI e código altamente otimizado para alcançar altas taxas de atualização e baixo uso de memória. A biblioteca TFT_eSPI pode ser usada para várias aplicações, incluindo jogos, gráficos e GUI.

TFT_eSprite é um complemento para a biblioteca TFT_eSPI e é usada principalmente para desenhar pequenos sprites no display, como personagens de jogos, ícones, texto, etc. TFT_eSprite pode alcançar velocidades de desenho mais rápidas porque armazena em cache as imagens na memória e realiza atualizações parciais. Isso permite taxas de atualização mais rápidas ao atualizar pequenos sprites e pode economizar tempo de processador e espaço de memória.

Portanto, TFT_eSPI é uma biblioteca geral poderosa adequada para múltiplas aplicações, enquanto TFT_eSprite é uma biblioteca que se concentra em desenhar pequenos sprites e pode fornecer maior eficiência de desenho.

O formato geral para usar a biblioteca TFT_eSPI é o seguinte.

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // Write the code to draw the graph
}
```

O formato geral para usar a biblioteca TFT_eSprite é o seguinte.

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // Create a sprite of 128*128 size

    // Write the code to draw the graph

    spr.pushSprite(0, 0);  // Placement of the drawn sprite
    spr.deleteSprite();
}
```

:::note
No código de exemplo acima, quando o programa sai da função `loop()`, `spr.deleteSprite();` é chamado para deletar o objeto TFT_eSprite e liberar o espaço de memória. Dessa forma, ao criar um objeto TFT_eSprite no próximo loop, o espaço de memória liberado anteriormente pode ser usado para evitar desperdício de recursos de memória.
:::

Para mais informações sobre as funções da biblioteca TFT e seu uso, recomendamos ler os arquivos **TFT_eSPI.h** e **TFT_eSPI.cpp** na biblioteca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### Sobre as opções de personalização da biblioteca TFT

Às vezes precisamos usar algumas bibliotecas de fontes personalizadas ou alguns recursos que não estão habilitados para economizar espaço. Nesse ponto, precisaremos modificar o conteúdo do arquivo **Setup66_Seeed_XIAO_Round.h**.

- O caminho padrão desse arquivo em sistemas **Windows** é:

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- O caminho padrão desse arquivo em sistemas **MacOS** é:

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

Ligue ou desligue algumas funções desnecessárias de acordo com o uso real.
Por exemplo, se você quiser usar fontes personalizadas, então deverá remover o comentário de `#define SMOOTH_FONT`, caso contrário, você provavelmente terá erros durante a execução.

Claro, os arquivos de cabeçalho das suas fontes personalizadas devem ser salvos no mesmo diretório dos arquivos ino, o que é uma etapa necessária para contornar erros.

### Programa de exemplo de mostrador baseado em TFT

Nós escrevemos um programa de mostrador para o Round Display que pode ser usado diretamente. Devido à limitação de espaço de memória de alguns modelos XIAO, esse programa apenas executa a função básica de movimento do ponteiro e não é projetado para outras funções. Os usuários podem usar esse programa para aprender o uso da biblioteca TFT e a função de movimento do ponteiro, e completar o desenvolvimento de mostradores mais complexos de acordo com a situação real.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Desenhando mostradores simples usando a biblioteca LVGL

A biblioteca LVGL é uma biblioteca gráfica embarcada de uso geral que oferece um conjunto rico de controles de interface gráfica do usuário, como botões, rótulos, listas etc., que podem ser usados para construir diversas interfaces de usuário. Diferente da biblioteca TFT, a biblioteca LVGL fornece uma interface gráfica orientada a objetos e abstraída, que é mais fácil de usar e manter, mas pode trazer alguns compromissos de desempenho e confiabilidade.

A biblioteca LVGL é uma ferramenta muito útil ao construir interfaces de usuário complexas, reduzindo a carga de trabalho de escrita e manutenção de código. Já a biblioteca TFT é mais adequada para algumas aplicações que exigem gráficos de alto desempenho, como processamento de imagem em tempo real, renderização de vídeo, etc.

### Interfaces comuns para a biblioteca LVGL

A API da biblioteca LVGL é muito rica e complexa, e esperamos que todos que usam LVGL reservem um tempo para ler a documentação oficial introdutória do LVGL.

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### Desenhando interfaces gráficas complexas com o SquareLine Studio

Além de ler a extensa documentação oficial do LVGL e escrever nossos próprios programas gráficos LVGL, também podemos usar a ferramenta oficial LVGL SquareLine Studio para melhorar nossa eficiência de desenvolvimento.

Em seguida, daremos uma breve introdução sobre o uso do software na tela redonda e métodos de configuração, para ajudá-lo a começar rapidamente a usar o software para projetar algumas interfaces.

:::caution
Recomendamos que você use a versão **v1.5.1** do SquareLine Studio. Esta também é a versão mais recente do software no momento em que este Wiki foi escrito.

Ambiente usado na preparação deste tutorial:

1. **[Seeed_GFX library](https://github.com/Seeed-Studio/Seeed_GFX)** por Bodmer, modificada pela Seeed Studio.

2. **[SeeedStudio_lvgl library](https://github.com/Seeed-Projects/SeeedStudio_lvgl)** por kisvegabor, embeddedt, pete-pjb, modificada pela Seeed Studio.
:::

#### Etapa 1. Baixar o SuqareLine Studio

Você pode acessar o site oficial do SquareLine Studio clicando [aqui](https://squareline.io/), depois clique em **TRY IT FOR FREE** para baixar o software para o seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

Se o seu computador estiver usando este software pela primeira vez, então você obterá uma avaliação gratuita de 30 dias; caso contrário, a versão gratuita também é capaz de desenhar até 5 páginas, usando 50 widgets.

:::caution
Se você é um usuário iniciante, por favor, não se registre para entrar em uma conta que não tenha saldo, isso pode custar toda a avaliação de 30 dias!
:::

#### Etapa 2. Configurar as informações da interface da tela

Em seguida, podemos abrir o software e começar criando uma página de exibição em branco.

Como estamos usando programação em Arduino, então o que criarmos também precisa ser um arquivo Arduino.

Nossa tela circular tem resolução de **240*240** e suporta apenas profundidade de cor de **16bit**. Além disso, o nome e o tema do projeto precisam ser definidos por você; aqui vou usar o estilo escuro como tema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

E se você for rápido demais, como eu, e esquecer de definir o formato do mostrador e já criar o projeto? Sem problemas, no canto superior esquerdo da interface principal, você também pode encontrar a aba Project Settings para fazer alterações nas configurações que acabou de definir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Observe que conclua a configuração do seu projeto antes de começar oficialmente a desenhar e certifique-se de que ele corresponda às especificações da nossa tela, caso contrário, tudo o que você desenhar poderá não ser exibido corretamente na tela.

Nem tudo pode ser modificado após a criação do projeto, como o nome do projeto. Por favor, não use nenhum idioma diferente do inglês nem caracteres especiais no nome do projeto, e por favor não use o sinal **"-"**, substitua o sinal **"-"** por **"_"**. Caso contrário, o programa exportado poderá apresentar erros durante a compilação!
:::

#### Etapa 3. Entendendo o layout funcional do software

Com base nos meus hábitos de uso, dividi a interface principal do software aproximadamente nas seguintes partes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Hierarquia e painel de Animação**: Esta área permite configurar diferentes páginas de mostrador, camadas de exibição e animações.

- **Widgets**: Aqui você pode escolher quais componentes usar para adicionar na página de exibição. Esses componentes são integrados ao software e podem ser usados diretamente. Componentes que não estiverem disponíveis aqui precisarão ser adicionados depois no seu próprio software de programação.

- **Área de Trabalho**: Na área de trabalho, você pode alterar a posição de certos componentes arrastando e soltando. Ainda mais convenientemente, a exibição final será consistente com o que é mostrado na área de trabalho, então o que você vê é o que você obtém.

- **Assets & Console**: Assets mostra os trechos de imagem que você adicionou, e esses trechos de imagem adicionados podem ser usados nos componentes que suportam inserção de imagens. Console mostrará algumas mensagens de erro (se houver) que ocorreram durante a configuração.

- **Área de Configuração**: O principal objetivo aqui é configurar as propriedades do componente.

Primeiro teremos um conhecimento geral da interface do software e, em seguida, guiaremos você por meio do entendimento prático do uso de cada parte.

#### Etapa 4. Usar o software para realizar suas ideias

Suponha que eu queira desenhar uma interface de música agora. Claro, eu gosto muito de ouvir música, então quero desenhar uma interface de exibição de música como exemplo.

Eu gostaria de ter os seguintes componentes nesta tela de exibição de música.

- A capa do álbum da minha música favorita como plano de fundo.
- Ter uma barra de progresso de reprodução
- Ter uma barra de controle de volume
- Ter um botão de reproduzir e pausar

Depois de organizar nossos requisitos, precisamos então projetar os componentes de exibição de baixo para cima, como construir um prédio.

O primeiro passo é criar uma imagem de fundo musical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

Selecione **Panel** nos widgets, você pode clicar nele e ele será colocado automaticamente no centro do mostrador, ou você pode arrastá-lo para a posição do mostrador onde deseja colocá-lo.

Vamos colocar a imagem exibida no Panel em vez de diretamente no fundo do mostrador porque eu não gosto que todo o mostrador seja essa imagem, e o Panel pode ser redimensionado livremente.

Neste ponto, você pode ver que já existe uma série de propriedades na Área de Configuração que podemos definir. As configurações de cada componente são geralmente semelhantes, com uma ou duas opções que podem ser um pouco diferentes.

> **Name**: Você deve nomear o widget. Não pode haver um número, sublinhado ou caractere especial no início do nome. Depois de exportar o código, você pode encontrar o widget por esse nome.

> **Layout**: Você pode usar um layout para organizar automaticamente os filhos de um widget. Se o layout estiver habilitado, os valores X e Y dos filhos não podem ser ajustados manualmente, a menos que a flag `IGNORE_LAYOUT` ou `FLOATING` esteja habilitada nos filhos.

> **Main Flags**
>
> - **Hidden** - Torna o objeto oculto. (Como se ele não estivesse lá.)
> - **Clickable** - Torna o objeto clicável por dispositivos de entrada
> - **Click focusable** - Adiciona o estado focado ao objeto quando clicado
> - **Checkable** - Alterna o estado marcado quando o objeto é clicado
> - **Snappable** - Se o encaixe de rolagem estiver habilitado no pai, ele pode ajustar para este objeto
> - **Press lock** - Mantém o objeto pressionado mesmo se o toque deslizar para fora do objeto
> - **Event bubble** - Propaga os eventos também para o pai
> - **Gesture bubble** - Propaga os eventos também para o pai
> - **Adv hittest** - Permite realizar um teste de acerto (clique) mais preciso. Por exemplo, levando em conta cantos arredondados
> - **Ignore layout** - Torna o objeto posicionável pelos layouts
> - **Floating** - Não rola o objeto quando o pai rola e ignora o layout

> **Scroll Flags**
>
> - **Scrollable** - Torna o objeto rolável
> - **Scroll elastic** - Permite rolagem interna, mas com velocidade reduzida
> - **Scroll momentum** - Faz o objeto rolar mais quando é "arremessado"
> - **Scroll one** - Permite rolar apenas um filho ajustável
> - **Scroll chain** - Permite propagar a rolagem para um pai
> - **Scroll on focus** - Rola automaticamente o objeto para torná-lo visível quando focado

>**Scroll Settings**
>
> - **Scroll direction** - As barras de rolagem são exibidas de acordo com uma configuração
> - **Scrollbar mode** - As barras de rolagem são exibidas de acordo com um modo configurado. Existem os seguintes modos:
>   - **Off** - Nunca mostrar as barras de rolagem
>   - **On** - Sempre mostrar as barras de rolagem
>   - **Active** - Mostrar barras de rolagem enquanto um objeto está sendo rolado
>   - **Auto** - Mostrar barras de rolagem quando o conteúdo for grande o suficiente para ser rolado

> **States**: O objeto pode estar em uma combinação dos seguintes estados:
>
> - **Clickable** - Estado alternado ou marcado
> - **Disable** - Estado desativado
> - **Focusable** - Focado via teclado, codificador ou clicado via touchpad/mouse
> - **Pressed** - Está sendo pressionado

> **Configurações de estilo**: Os estilos podem ser usados para adicionar efeitos aos widgets ou às suas partes. Você pode adicionar uma cor de fundo personalizada, borda, sombra, etc. Em Configurações de Estilo, você pode adicionar ou modificar os valores desses parâmetros.
>
> **Estado**: Você pode criar um estilo personalizado para cada estado.
>
> **Propriedades de Estilo**: Propriedades de Estilo são os parâmetros a serem definidos para os estilos.
>
> - **Arc**: O Estilo Arc pode ser usado naqueles widgets que têm o componente Arc.
>   - **Line color** - A cor da linha
>   - **Arc width** - A largura do arco
>   - **Arc rounded** - As extremidades da linha do arco são arredondadas
>   - **Arc image** - A imagem de fundo para a linha do arco
> - **Background**: O Estilo Background é o fundo dos widgets. Você pode criar gradientes ou deixar os cantos do fundo arredondados.
>   - **Color and alpha** - Define a cor de fundo e o alfa do objeto.
>   - **Gradient color** - Define a cor de gradiente do fundo.
>   - **Bg main stop** - Define o ponto a partir do qual a cor de fundo deve começar para gradientes.
>   - **Bg gradinet stop** - Define o ponto a partir do qual a cor de gradiente do fundo deve começar
>   - **Bg radius** - O raio que você usa para deixar os cantos de fundo arredondados
>   - **Gradient direction** - A direção do gradiente. Pode ser horizontal ou vertical.
>   - **Clip corner** - Habilite para recortar o conteúdo excedente no canto arredondado.
> - **Background Image**: Você pode definir uma imagem como imagem de fundo.
>   - **Bg image** - A imagem que você usa como imagem de fundo
>   - **Bg image opa** - A opacidade da imagem de fundo
>   - **Recolor** - Com a função Recolor, você pode usar uma cor na imagem de fundo. Defina a profundidade da cor alterando o parâmetro alfa.
>   - **Bg image tiled** - Se habilitado, a imagem de fundo será repetida em mosaico
> - **Blend**: Usando o Estilo Blend, você pode misturar as cores de pixel da parte atual do widget com as cores do objeto que a segue.
>   - **Blend mode** - Escolha entre quatro opções.
>     - **Normal** - Estado padrão
>     - **Additive** - Soma de pixels
>     - **Subtractive** - Subtrai pixels
>     - **Multiply** - Multiplica pixels
>   - **Blend opacity** - Aqui você pode definir a opacidade da parte do widget
> - **Border**: Usando Border, você pode desenhar uma borda ao redor do objeto selecionado nas linhas internas.
>   - **Border color** - A cor da borda
>   - **Border width** - A largura da borda
>   - **Border side** - A direção da borda
> - **Line**: O Estilo Line pode ser usado naqueles widgets que têm o componente Line.
>   - **Color** -  A cor da linha
>   - **Width** - A largura da linha
>   - **Line rounded** - As extremidades da linha serão arredondadas
> - **Outline**: O estilo Outline é semelhante ao estilo Border, mas aqui você desenha a borda ao redor da parte selecionada do widget.
>   - **Outline color** - A cor do contorno
>   - **Outline width** - A largura do contorno
>   - **Outline pad** - Distância a partir da lateral do widget em pixels
> - **Paddings**: O estilo Paddings coloca um preenchimento na parte do widget. Isso significa que as partes abaixo dele na hierarquia serão deslocadas pela distância definida no padding com valores em pixels.
>   - **Pad** - A extensão do preenchimento
> - **Shadow**: Usando um Estilo Shadow, você pode desenhar uma sombra ou um brilho na parte selecionada do widget.
>   - **Shadow color** - A cor da sombra
>   - **Shadow width** - A largura da sombra
>   - **Shadow spread** - A profundidade da sombra
>   - **Shadow OX** - Desloca a sombra no eixo X
>   - **Shadow OY** - Desloca a sombra no eixo Y
> - **Text**: O Estilo Text define os parâmetros do texto que pode ser encontrado no widget.
>   - **Text color** - A cor do texto
>   - **Letter spacing** - O espaço entre as letras
Line spacing - O espaço entre as linhas
>   - **Text align** - A direção do alinhamento do texto
>   - **Text decor** - Você pode sobrelinhar ou sublinhar o texto
>     - **None** - Texto normal
>     - **Understand** - Texto sublinhado
>     - **Strikethrough** - Texto sobrelinhado
>     - **Text font** - A fonte do texto
>
> **Propriedades de Evento**: Adicionando eventos, você pode criar diferentes interações para widgets, por exemplo mudar a tela, reproduzir uma animação, etc. ao pressionar um botão.
>
> - **Add Event**: Na parte inferior do Painel Inspector, você pode encontrar o botão ADD EVENT. Primeiro, você deve nomear o evento e depois escolher um gatilho para iniciá-lo.
>   - **Event name** - O nome do evento
>   - **Event Trigger** - A interação de início do evento
>     - **Pressed** - Um objeto foi pressionado
>     - **Clicked** - Um objeto foi pressionado por um curto período de tempo e depois solto. Não é chamado se houver rolagem
>     - **Long pressed** - Um objeto foi pressionado por um período de tempo mais longo
>     - **Long pressed repeat** - Chamado após `long_press_time` a cada `long_press_repeat_time` ms. Não é chamado se houver rolagem
>     - **Focused** - Um objeto está em foco
>     - **Defocused** - Um objeto está sem foco
>     - **Value changed** - O valor do objeto foi alterado.
>     - **Ready** - Um processo foi concluído
>     - **Cancel** - Um processo foi cancelado
>     - **Screen loaded** - Uma tela foi carregada, chamado quando todas as animações forem concluídas
>     - **Screen unloaded** - Uma tela foi descarregada, chamado quando todas as animações forem concluídas
>     - **Screen load start** - O carregamento de uma tela foi iniciado, disparado quando o atraso de mudança de tela expira
>     - **Screen unload start** - A descarga de uma tela foi iniciada, disparado imediatamente quando lv_scr_load/lv_scr_load_anim é chamado
>       - **Checked** - Um widget marcado
>       - **Unchecked** - Um widget desmarcado
>       - **Gesture** - Direção de deslizamento do toque de dedo
> - **Add Event**
>   - **Actions**: Actions são aqueles elementos do evento que começam quando o gatilho acontece.
>     - **Call function**: Usando a ação Call function, você pode adicionar um nome de função ao qual o evento pode se referir. Essa função será criada no arquivo ui__events.c ou ui_events.py durante o processo de exportação.
>     - **Change Screen**: Você pode alternar entre telas com esta ação.
>       - **Screen to** - A tela para a qual você gostaria de mudar
>       - **Fade mode** - A animação durante a mudança de tela
>       - **Speed** - A velocidade de mudança de tela
>       - **Delay** - O atraso da mudança de tela
>     - **Increment Arc**: Você pode modificar o valor do Widget Arc.
>     - **Increment Bar**: Você pode modificar o valor do Widget Bar.
>     - **Increment Slider**: Você pode modificar o valor do Widget Slider.
>     - **Modify Flag**: Você pode modificar o estado de flag de um widget.
>     - **Play Animation**: Você pode reproduzir as animações criadas no Painel Animation.
>       - **Animation** - A animação selecionada
>       - **Target** - Widget de destino no qual você gostaria de usar a animação
>       - **Delay** - O tempo de atraso da animação
>     - **Set Opacity**: A opacidade do widget selecionado.
>     - **Set Flag**: Define o valor para o estado de flag do widget.
>     - **Set Property**: Altera o valor da propriedade do widget.
>     - **Set text value from arc**: Exibe o valor do Widget Arc em um Widget Label usando esta ação.
>     - **Set text value from slider**: Exibe o valor do Widget Slider em um Widget Label usando esta ação.
>     - **Set text value when checked**: Altera o texto de um Widget Label dependendo do estado marcado ou desmarcado do objeto de destino.

##### Uso do Panel

Resumindo, se eu precisar exibir a imagem do álbum na metade superior do mostrador, então preciso ajustar as coordenadas e o tamanho do Panel e definir a imagem de fundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
Para ocupar o mínimo possível de memória na placa-mãe, insira a imagem o máximo possível na resolução do mostrador para comprimi-la, não deixe a imagem grande sem ajuste!
:::

Então podemos definir a transparência da imagem em **Bg Image opa**. Eu não quero que ela seja completamente opaca porque uma imagem completamente opaca afetará a exibição do meu texto depois.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

Vale a pena notar aqui que todos os componentes têm linhas de moldura por padrão, portanto, para não afetar a estética, precisamos remover as linhas de moldura. A maneira de fazer isso é definir a transparência da cor da Border para 0.

Portanto, **se você quiser remover qualquer cor ou qualquer segmento de linha, você pode fazer isso definindo a transparência para 0**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Uso do Label

Em seguida, adicionamos texto no meio (usamos widgets **Label**), que mostra o artista e o nome da música. No estilo, podemos alterar o tamanho da fonte, a cor e outros conteúdos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Uso do Imgbutton

Abaixo do texto, adicionamos alguns componentes de reprodução (usamos widgets **Imgbutton**), como botão de play/pause e botão de alternar faixa para cima/para baixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton é um tipo especial de botão, a maior diferença entre ele e o Button normal é que o Imgbutton pode ser configurado com três estados de estilo: antes de pressionar o botão, ao pressionar e após soltar o botão, respectivamente. Este processo é muito semelhante ao cenário em que pressionamos para alternar o estado de reprodução. Se você achar que o botão para cima/para baixo não precisa de uma função tão complexa, você também pode usar o Button diretamente.

Então agora definimos as imagens dos botões Press e Release para o estilo de play, e somente no estado Disable é o estilo de pause.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

Em seguida, adicionamos um evento, cuja função é: quando o usuário pressionar o botão, o estado muda para Disable, de modo que o efeito de troca da imagem seja alcançado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

Se você quiser verificar o efeito, pode clicar no botão de play no canto superior direito da área de trabalho e, então, clicar no botão de play para ver o efeito da troca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Uso do Arc

Depois adicionamos o último componente, que é a barra de volume e a barra de progresso de reprodução. Faremos isso usando o Arc.

Para o Arc, as principais coisas que precisamos ajustar são a cor e o tamanho dos anéis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN: Refere-se ao design de estilo do fundo retangular atrás de todo o Arc. O **Arc** configurado no estilo MAIN não indica o estilo da área do arco.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR: Refere-se à configuração de estilo do arco da área de indicação inicial. A configuração de **Arc** sob INDICATOR é geralmente a utilizada.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB: Refere-se à configuração deste círculo na imagem. Se você não precisar desse círculo, pode definir a transparência dele como 0. O tamanho desse círculo precisa ser definido dentro do Arc em INDICATOR.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

Este é o efeito que eu quero alcançar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

Se você marcou que ele é clicável, então pode clicar no botão Run e arrastar o arco, assim você conseguirá o efeito de alterar a barra de volume.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### Troca de Tela

Com a interface de música praticamente desenhada, podemos muito bem adicionar em seguida uma nova interface principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

Depois, projete um evento que mude a tela principal para a tela de música. Por exemplo, eu desenho aqui para alternar para a interface de reprodução de música deslizando o dedo para a direita sob a interface principal.

Como a interface principal é a personagem principal, esse evento deve ser adicionado à interface principal em Screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

Se você quiser ter um efeito de animação que mude lentamente após um deslizar, então você pode manter Speed em 500; se quiser mudar imediatamente, então Speed deve ser definido como 0.

##### Animação do Ponteiro

Voltando ao design da interface principal, queremos adicionar o efeito de animação da rotação do ponteiro do mostrador.

A primeira coisa a fazer é desenhar seus próprios ponteiros de segundos, minutos e horas. Em seguida, adicione-os ao mostrador principal no estilo de **Image**.

O ajuste da posição do ponteiro exige paciência, pois precisamos garantir que o ponteiro esteja girando em torno de um ponto fixo na imagem.

Transform é definido para o posicionamento da imagem. O Pivot na aba Image abaixo define as coordenadas do ponto de rotação. A maneira geral de definir isso é primeiro ajustar o Transform para garantir que o ponto fixo do ponteiro esteja no centro do mostrador e, em seguida, ajustar um pouco as coordenadas do Pivot. Quando todos os ângulos conseguirem fazer com que o ponto fixo do ponteiro não se mova, então esses parâmetros são os mais adequados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

Depois que você tiver todas as posições dos ponteiros determinadas, poderá começar a adicionar novos efeitos de animação. As configurações de efeito de animação para diferentes ponteiros podem ser encontradas na figura a seguir.

<table align="center">
 <tr>
     <th>Second</th>
     <th>Minute </th>
        <th>Hour</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

Por fim, apenas definimos a animação do movimento do ponteiro para tocar enquanto a tela principal é carregada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
Os tutoriais acima basicamente cobriram 80% dos cenários de uso do software, e muitos dos outros componentes são muito semelhantes. Por fim, aqui vão algumas dicas e sugestões para você ao usar o software.

1. Você precisa colocar todos os componentes com funcionalidade de toque no topo, caso contrário isso interferirá na implementação da funcionalidade de toque do componente.

    Por padrão, o último componente colocado pelo software fica no topo. Isso significa que, na aba Hierarchy, os componentes que estão organizados mais para baixo tendem a ficar no topo. Na interface de música que você acabou de desenhar, a camada superior é o Arc para ajustar o volume, o que causa um problema, porque o Arc é um retângulo que ocupa todo o mostrador e afetará o toque do botão de play; portanto, normalmente você precisa ajustar a camada do botão de play para ficar acima da camada do Arc, de modo que isso não afete o toque.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. Desligue o maior número possível de funções desnecessárias para economizar mais memória.

    Todo componente terá alguns Flags marcados por padrão, mas nem todos são necessários. Embora os padrões não sejam um problema, desligar os Flags indesejados fará com que a interface do mostrador rode com mais fluidez.

    Como o álbum de fundo na interface de música, não há necessidade de clique nem de animação, e é bom desligar a opção em Flags. Mas ao desligar também é preciso considerar a situação real; por exemplo, na cena de deslizar para trocar a página do mostrador, desligar a função de alguns Flags fará com que o deslizamento seja desativado, então ainda é necessário, de acordo com o efeito ao rodar, decidir com critério o que desligar.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. Certifique-se de dar um nome exclusivo a todos os seus componentes e animações, eventos, etc.

    O software só pode poupar o tempo de desenhar alguns padrões e animações, mas efeitos mais complexos podem exigir que você os programe depois para serem alcançados. Então é importante poder encontrar rapidamente onde seus componentes estão localizados no código. Dar nomes aos componentes, eventos e animações é fundamental!

:::

#### Passo 5. Exportar e aplicar programas

Depois que sua UI do mostrador estiver desenhada, você pode considerar exportar a UI para um programa e carregá-la no XIAO via Arduino. Clique no canto superior esquerdo do software e clique em **Export** -> **Create Template Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

Em seguida, selecione o caminho para salvar e o código será exportado automaticamente. O modelo de projeto exportado terá nele os seguintes arquivos.

- **libraries**: Este diretório de pasta fornece todas as bibliotecas que você precisa usar em seu projeto. Para o nosso tutorial, as bibliotecas *lvgl* e *TFT_eSPI* neste diretório **não são necessárias**, mas *ui* e *lv_conf.h* são **úteis** para nós.
- **ui**: Dentro está o programa do projeto para Arduino, o arquivo .ino.
- REANME.md

O que precisamos fazer, então, é primeiro colocar as bibliotecas e arquivos de configuração necessários na pasta libraries do Arduino. Depois modificar o arquivo .ino para garantir que a funcionalidade funcione.

Copie, por favor, a pasta **ui** e o arquivo **lv_conf.h** do diretório de pasta libraries exportado pelo SquareLine Studio para o diretório raiz da sua biblioteca do Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

Depois, podemos abrir diretamente o arquivo .ino dentro da pasta ui. Em seguida, precisamos fazer alterações nos seguintes arquivos para garantir que o programa seja compilado sem problemas.

- **ui.ino**:

<table align="center">
 <tr>
  <th>Descrições</th>
     <th>Captura de tela</th>
     <th>Trecho de código</th>
 </tr>
 <tr>
  <th>Definir a biblioteca TFT a ser usada e importar a biblioteca da tela redonda</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>Ver Código de Exemplo</b></a></td>
 </tr>
    <tr>
  <th>Comente as definições duplicadas da classe tft</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>Ver Código de Exemplo</b></a></td>
 </tr>
 <tr>
  <th>Reescrevendo funções de toque</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>Ver Código de Exemplo</b></a></td>
 </tr>
 <tr>
  <th>Adicionar função de inicialização da tela e função de inicialização do toque</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>Ver Código de Exemplo</b></a></td>
 </tr>
 <tr>
  <th>Rotacionar tela</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>Ver Código de Exemplo</b></a></td>
 </tr>
</table>

Then you can choose which XIAO you use to compile and upload.

### Sobre as opções de personalização da biblioteca LVGL

Se você encontrar uma mensagem de erro informando que alguns componentes não estão definidos após a compilação, então muito provavelmente você não substituiu o arquivo **lv_conf.h** no diretório raiz da biblioteca do Arduino pelo arquivo **lv_conf.h** exportado pelo SquareLine Studio.

Para economizar memória na placa-mãe, o arquivo lv_conf.h padrão desativa alguns dos recursos do lvgl. Mas se você usar essas funções no desenho do seu mostrador, será necessário ativá-las manualmente.

- O caminho padrão para o `lv_conf.h` em sistemas **Windows** é:

`C:\Users\{UserName}\Documents\Arduino\libraries`

- O caminho padrão para o `lv_conf.h` em sistemas **MacOS** é:

`\Users\{UserName}\Documents\Arduino\libraries`

Como um exemplo simples, no exemplo acima, usamos a fonte `MONTSERRAT 8`, mas por padrão essa fonte está desativada, portanto pode haver um erro durante o processo de compilação.

Então, tudo o que precisamos fazer é alterar o 0 após essa fonte no arquivo lv_conf.h para 1, o que significa que a fonte está ativada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

Se você encontrar um erro semelhante, poderá verificar novamente se o recurso de personalização está ativado.

### Programa de mostrador baseado em LVGL

Criamos dois estilos de mostrador para a tela circular como referência para os usuários. Devido à lógica de UI complexa, isso exigirá uma certa quantidade de desempenho e memória na placa-mãe XIAO. Se o seu XIAO estiver compilando o seguinte programa de mostrador com erro de memória insuficiente, então talvez você precise atualizar o seu XIAO ou reduzir a funcionalidade dos mostradores.

- Estilo de mostrador I:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

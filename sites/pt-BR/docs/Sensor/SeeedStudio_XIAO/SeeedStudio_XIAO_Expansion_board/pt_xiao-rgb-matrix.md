---
description: Primeiros Passos com a 6x10 RGB MATRIX para XIAO
title: Primeiros Passos com a 6x10 RGB MATRIX para XIAO
keywords:
  - XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /rgb_matrix_for_xiao
sku: 104030107
last_update:
  date: 08/11/2023
  author: Citric
createdAt: '2023-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/rgb_matrix_for_xiao/
---

# Primeiros Passos com a 6x10 RGB MATRIX para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

Apresentando a "6x10 RGB-MATRIX para XIAO" – uma adição deslumbrante à série de produtos XIAO da Seeed Studio. Agora, com a 6x10 RGB-MATRIX, você tem o poder de iluminar seus projetos com um espectro de cores. Composta por 60 LEDs WS2812 meticulosamente organizados, esta matriz não se trata apenas de estética; é uma ferramenta para dar vida às suas visões criativas. Seja você criando uma peça de arte interativa, projetando um sistema dinâmico de notificações ou simplesmente querendo adicionar um toque de cor às suas criações, esta matriz é a sua tela. Ajustada para integração perfeita com o controlador principal XIAO, sua adaptabilidade é ainda mais destacada pela inclusão de ilhas de solda VCC, GND e DIN, garantindo flexibilidade em uma infinidade de cenários.

## Introdução

### Recursos

- 60 LEDs WS2812: Dispostos em uma grade 6x10, esses LEDs são perfeitos para criar exibições vibrantes.
- Design compacto: Cada LED tem apenas 1mm x 1mm, oferecendo uma tela de alta densidade sem ocupar muito espaço.
- Conexão versátil: Embora seja projetada para o controlador principal XIAO, também incluímos ilhas de solda VCC, GND e DIN para aplicações mais amplas.
- Capacidades RGB: Cada LED pode exibir uma ampla gama de cores, dando a você a liberdade de criar exibições dinâmicas e coloridas.

### Especificação

- Tipo de LED: WS2812
- Número de LEDs: 60
- Disposição: 6 linhas x 10 colunas
- Tamanho do LED: 1mm x 1mm
- Porta de conexão para XIAO: D0
- Ilhas adicionais: VCC, GND, DIN, DOUT

### Aplicações

- Telas interativas: Use a matriz de LEDs para feedback visual dinâmico em seus projetos.
- Notificações: Crie notificações ou alertas coloridos para seus dispositivos.
- Instalações artísticas: Incorpore a matriz de LEDs em peças de arte para um toque moderno.
- Tecnologia vestível: Integre em roupas ou acessórios para um visual futurista.
- Jogos: Melhore experiências de jogo com efeitos visuais vibrantes.
- Iluminação geral: Use para iluminação ambiente ou criação de clima em diversos ambientes.

## Primeiros Passos

Bem-vindo ao guia de início rápido da 6x10 RGB-MATRIX para XIAO. Este guia tem como objetivo ajudá-lo a configurar e começar a usar sua nova placa de expansão de matriz de LEDs em conjunto com o controlador principal XIAO RP2040.

### Preparação de Hardware

Ao receber seu produto, será necessário realizar alguma soldagem. Fornecemos dois cabeçalhos de pinos no pacote. Você precisará soldar esses cabeçalhos na placa de expansão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

Quando a soldagem estiver concluída, você poderá prosseguir para conectar a placa de expansão ao controlador principal XIAO RP2040.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
Por favor, tenha especial cuidado ao conectar; não conecte enquanto o XIAO estiver energizado e não conecte os pinos de alimentação de forma incorreta. Caso contrário, é provável que a placa queime.
:::

### Preparação de Software

Este tutorial usará o XIAO RP2040 como mestre; se você estiver usando o XIAO RP2040 pela primeira vez, leia o seu Wiki de Primeiros Passos.

- [Seeed Studio XIAO RP2040 com Arduino](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/)

Enquanto isso, todos os programas de exemplo fornecidos neste tutorial também funcionarão em outros XIAOs, e você também pode configurar antecipadamente o ambiente de desenvolvimento Arduino de acordo com o XIAO que está utilizando.

## Visão Geral da Biblioteca Arduino

:::tip

Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

### Função

Antes de começarmos a desenvolver um sketch, vamos ver as funções disponíveis da biblioteca.

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— Construtor de NeoPixel quando o comprimento, o pino e o tipo de pixel são conhecidos em tempo de compilação.

  **Parâmetros de entrada**:

  - `n`: Número de NeoPixels na tira.
  - `p`: Número do pino do Arduino que conduzirá os dados de entrada do NeoPixel.
  - `t`: Tipo de pixel — some as constantes NEO_* definidas em Adafruit_NeoPixel.h, por exemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperam um fluxo de dados de 800 KHz (vs 400 KHz) com bytes de cor expressos em ordem verde, vermelho, azul por pixel.

  **Valor de retorno**: objeto Adafruit_NeoPixel. Chame a função `begin()` antes de usar.

- `void begin(void)` —— Configura o pino do NeoPixel como saída.

- `void show(void)` —— Transmite os dados de pixel na RAM para os NeoPixels.

- `void setPin(int16_t p)` —— Define/altera o número do pino de saída do NeoPixel. O pino anterior, se houver, é configurado como INPUT e o novo pino é configurado como OUTPUT.

  **Parâmetros de entrada**:

  - `p`: Número do pino do Arduino (-1 = nenhum pino).

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— Define a cor de um pixel usando componentes separados de vermelho, verde, azul e branco (apenas para NeoPixels RGBW).

  **Parâmetros de entrada**:

  - `n`: Índice do pixel, começando em 0.
  - `r`: Brilho do vermelho, 0 = mínimo (desligado), 255 = máximo.
  - `g`: Brilho do verde, 0 = mínimo (desligado), 255 = máximo.
  - `b`: Brilho do azul, 0 = mínimo (desligado), 255 = máximo.
  - `w` (Opcional): Brilho do branco, 0 = mínimo (desligado), 255 = máximo, ignorado se estiver usando pixels RGB.

- `void setPixelColor(uint16_t n, uint32_t c)` —— Define a cor de um pixel usando um valor RGB ou RGBW de 32 bits "compactado".

  **Parâmetros de entrada**:

  - `n`: Índice do pixel, começando em 0.
  - `c`: Valor de cor de 32 bits. O byte mais significativo é o branco (para pixels RGBW) ou ignorado (para pixels RGB), o próximo é vermelho, depois verde, e o byte menos significativo é azul.

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— Preenche toda ou parte da tira de NeoPixel com uma cor.

  **Parâmetros de entrada**:

  - `c`: Valor de cor de 32 bits. O byte mais significativo é o branco (para pixels RGBW) ou ignorado (para pixels RGB), o próximo é vermelho, depois verde, e o byte menos significativo é azul. Se todos os argumentos não forem especificados, este será 0 (desligado).
  - `first`: Índice do primeiro pixel a ser preenchido, começando em 0. Deve estar dentro dos limites; nenhum recorte é realizado. 0 se não for especificado.
  - `count`: Número de pixels a serem preenchidos, como um valor positivo. Passar 0 ou deixar não especificado preencherá até o final da tira.

- `void setBrightness(uint8_t b)` —— Ajusta o brilho de saída. Não afeta imediatamente o que está sendo exibido atualmente nos LEDs. A próxima chamada para `show()` irá atualizar os LEDs neste nível.

  **Parâmetros de entrada**:

  - `b`: Configuração de brilho, 0=mínimo (desligado), 255=mais brilhante.

- `void clear(void)` ——  Preenche toda a tira de NeoPixel com 0 / preto / desligado.

- `void updateLength(uint16_t n)` —— Altera o comprimento de um objeto de tira Adafruit_NeoPixel declarado anteriormente. Os dados antigos são desalocados e os novos dados são limpos. O número do pino e o formato do pixel permanecem inalterados.

  **Parâmetros de entrada**:

  - `n`: Novo comprimento da tira, em pixels.

- `void updateType(neoPixelType t)` —— Altera o formato de pixel de um objeto de tira Adafruit_NeoPixel declarado anteriormente. Se o formato mudar de uma das variantes RGB para uma variante RGBW (ou de RGBW para RGB), os dados antigos serão desalocados e os novos dados são limpos. Caso contrário, os dados antigos permanecerão na RAM e não serão reordenados para o novo formato, portanto é recomendável seguir com `clear()`.

  **Parâmetros de entrada**:

  - `t`: Tipo de pixel — some as constantes NEO_* definidas em Adafruit_NeoPixel.h, por exemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperam um fluxo de dados de 800 KHz (vs 400 KHz) com bytes de cor expressos em ordem verde, vermelho, azul por pixel.

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— Converte valores separados de vermelho, verde e azul em uma única cor RGB de 32 bits "compactada".

  **Parâmetros de entrada**:

  - `r`: Brilho do vermelho, de 0 a 255.
  - `g`: Brilho do verde, de 0 a 255.
  - `b`: Brilho do azul, de 0 a 255.

  **Retorno**: Valor RGB compactado de 32 bits, que pode então ser atribuído a uma variável para uso posterior ou passado para a função `setPixelColor()`. O formato RGB compactado é previsível, independentemente da ordem de cores da tira de LED.

### Instalação

- **Método Um**

A **[Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel)** será usada neste tutorial; você pode procurá-la no gerenciador de bibliotecas do Arduino e fazer o download e instalá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **Método Dois**

Baixe a biblioteca por meio do botão abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Demo: Running Lights

The following sample program is used to achieve the effect of running lights, where the lamp beads will be lit sequentially one by one. This program is compatible with all XIAO.

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels

void setup() {
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // END of Trinket-specific code.

  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<NUMPIXELS; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // Send the updated pixel colors to the hardware.

    delay(DELAYVAL); // Pause before next pass through loop
  }
}
```

Upload the program and if all goes well, you can see the light beads light up one by one.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
This program specially reduces the brightness of the lamp beads, if the brightness is pulled to the maximum, looking directly at the lamp beads for a long time may cause damage to your eyes.
:::

## Multiple light boards splicing

RGB MATRIX for XIAO supports multiple splice extensions with guaranteed power supply. You can splice multiple light boards in sequence as instructed in the figure below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
When multiple light panels are spliced together, they may become hot and under-powered. At this time, the light boards may display abnormally, at this time, please supply additional power to the light boards to ensure that each light board can have a stable 5V input.
:::

## Resources

- **[ZIP]** [PCB&SCH Eagle file](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [Datasheet - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

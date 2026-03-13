---
description: Grove - RGB LED Stick (10 - WS2813 Mini)
title: Grove - RGB LED Stick (10 - WS2813 Mini)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-RGB_LED_Stick-10-WS2813_Mini
sku: 104020131,104020172,104020170
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-RGB_LED_Stick-10-WS2813_Mini/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Integrámos 10 LEDs RGB de cores completas neste stick, e com apenas um pino de sinal você pode controlar facilmente todos os 10 LEDs. Todos os LEDs são WS2813 Mini, que é um LED de controle inteligente e com ótima relação custo‑benefício.
Além disso, o WS2813 suporta transmissão contínua de sinal em ponto de ruptura, o que significa que você pode continuar a usar os outros LEDs mesmo que um LED esteja queimado.

Você pode usar este pequeno stick para criar centenas de milhares de efeitos de luz, esperamos que ele traga ainda mais diversão para você.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html)

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | Inicial                                                                                               | Nov 2018      |

## Recursos

- CI WS2813B, LED 3535
- Proteção inteligente contra ligação invertida.
- Os níveis de cinza de cada pixel são 256, o que alcança exibição em cores completas “256*256*256=16777216”.
- A frequência de atualização chega a 2KHz.
- Interface em cascata serial, recepção e decodificação de dados dependem de apenas uma linha de sinal.
- Versão com fios de sinal duplo, transmissão contínua de sinal em ponto de ruptura.

### Transmissão contínua de sinal em ponto de ruptura

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

Desde que não haja dois ou mais LEDs adjacentes queimados, os LEDs restantes poderão funcionar normalmente.

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Temperatura de Operação|-25℃ ~ +85℃|
|Temperatura de Armazenamento|-40℃ ~ +105℃|
|Corrente Constante do Canal RGB|16mA|
|Interface|Digital|
|Tamanho|C: 80mm L: 10mm A: 10mm|
|Peso|3.7g|
|Tamanho da Embalagem|C: 150mm L: 100mm A: 25mm|
|Peso Bruto|13g|

## Aplicações Típicas

- Decoração de Natal
- Iluminação
- Brinquedos

## Visão Geral de Hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever a própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">Compre Agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; cabos de 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove ao comprar. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::important
    **1**. Se você usar o Arduino UNO como placa‑mãe, é recomendado usar a alimentação em CC. Caso contrário, a ondulação máxima de VCC pode exceder 100mV. Se você usar o Seeeduino V4.2 como placa‑mãe, não precisa conectar alimentação em CC.

    **2**. Não há suporte para troca a quente (hot swap).
:::

- **Passo 1.** Conecte o Grove - RGB LED Stick (10 WS2813 Mini) à porta **D6** do Grove‑Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3.3V     | Vermelho                | VCC |
| Sem conexão            | Branco              | NC |
| D6            | Amarelo             | SIG |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri‑lo das seguintes três maneiras：
    1. Abra diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Adafruit_Neopixel --> simple**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra no seu computador clicando em **simple.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_Led_Strip-master\examples\simple**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

    3. Ou, você pode simplesmente clicar no ícone
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN            6

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS      10

// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest
// example for more information on possible values.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // delay for half a second

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // End of trinket special code
  pixels.setBrightness(255);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // Moderately bright green color.

    pixels.show(); // This sends the updated pixel color to the hardware.

    delay(delayval); // Delay for a period of time (in milliseconds).

  }
}
```

:::note
        O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
        Se tudo correr bem, agora você pode ver a tira de LED brilhando:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Eagle Files](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip)

- **[Zip]** [Led_Strip Library](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [Ficha técnica WS2813-Mini](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

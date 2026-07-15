---
title: Shield MaTrix V0.9
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Shield-MaTrix-V0.9b/
slug: /Shield-MaTrix-V0.9b
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Shield-MaTrix-V0.9b/
---
![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

Shield MaTrix é um Shield empilhável para Arduino, que torna possível aprender programação usando os sensores mais simples a bordo.

## Rastreador de Versão

|Revisão|Descrições|Lançamento|
|------|------|--------|
| 0.9 | Protótipo |11-abril-2013|
|0.9b|Versão pública|27-outubro-2013|

## Recurso

- Compatível com Arduino Mega (recomendado Freaduino Mega V1.4 (ATMega 2560 ) )

- Suporte para Arduino Shield

- Suporte para dispositivos sem fio baseados em nRF24L01+, xBee

- Suporte à Matriz de LED 60mm 8X8 (vermelho brilhante, verde brilhante, amarelo)

- Controle IR (controle remoto)

- LED RGB (para indicar vários parâmetros)

- Botão de relógio (ligar / desligar várias configurações)

- Buzzer (alarme ou ao pressionar os botões do controle remoto)

- Sensor de luz (iluminação automática das matrizes)

- RTC (relógio de tempo real)

- Interface I2C (I / O opcional)

- Tensão 9-24 V ou controlador USB (recomendado 12V 2A)

## Ideias de Aplicação

- Relógio digital (sincronização NTP) com alarme
- Estação meteorológica (temperatura-casa-rua-porão, pressão, umidade)
- Letreiro (leitura de e-mail, redes sociais, etc.)
- Transferência de dados (para um dispositivo semelhante)

## O princípio de exibição de dados

Para exibir diferentes informações na matriz de LED, é utilizada exibição dinâmica.
Ao mesmo tempo, a informação é exibida apenas em uma linha (os LEDs correspondentes acendem (vermelho e (ou) verde)), todas as outras linhas - são apagadas. O próximo passo - a linha anterior é apagada e a próxima linha acende (para ela os LEDs atuais). A comutação das linhas é muito rápida e os olhos percebem essa comutação como uma única imagem.

Para minimizar o número de pinos envolvidos, são usados dois tipos diferentes de chips: os registradores de deslocamento (usados para controlar as colunas) e um demultiplexador (controlar as linhas).

Os registradores de deslocamento são ligados em cadeia e conectados via SPI (os pinos envolvidos são descritos abaixo).

O demultiplexador possui três entradas de endereço (DA0, DA1, DA2) - uma combinação de "0" e "1" nas entradas aponta claramente para uma das 8 saídas, que estará em nível ativo. Adicionalmente, o demultiplexador possui entradas de controle (E1, E2, E3) - com as duas primeiras (E1 e E2, elas estão conectadas em nosso esquema) é organizada uma extinção completa da matriz, e com a entrada E3 - é organizada a regulação de brilho (usando PWM).

## Interfaces

- Interface para 4 matrizes de LED bicolores

  - Conjunto de registradores de deslocamento (74HC595 - 8 pcs.) para controlar as colunas dos LEDs

  - Demultiplexador 74HC138 para controlar as linhas dos LEDs e seu brilho (via PWM)

- Relógio embutido (RTC) - baseado no DS1307 com bateria de backup (CR1220 ou CR1226)

- Interface para módulo RF nRF24L01 +

- Botão de relógio (por exemplo, para desligar o som do alarme)

- Receptor IR em 38kHz (para controle remoto)

- Fiação para conectar LED-RGB com cátodo comum ou ânodo (selecionado por jumper)

- Sensor de luz (por exemplo, para ajustar automaticamente o brilho)

- Transdutor piezo "beeper"

- Interface I2C

- Interface xBee

- Interface para Arduino- Shield

- Pinos na placa, envolvidos no Arduino Mega

  - D5 - receptor IR

  - D24 - botão de relógio

- xBee

  - D16 - DIN

  - D17 - DOUT

- I2C (DS1307)

  - D20 - SDA

  - D21 - SCL

- LED-RGB (verificar)

  - D34 - vermelho

  - D35 - verde

  - D36 - azul

- nRF24L01 +

  - D19 - RF_IRQ

  - D37 - RF_SCK

  - D38 - RF_MISO

  - D39 - RF_MOSI

  - D40 - RF_NSS

  - D41 - RF_CE

  - D45 - beeper

  - A7 - sensor de luz

- Registradores de Deslocamento

  - D42 - SS

  - D51 - MOSI

  - D52 - SCK

- Demultiplexação

  - D49 - DA0

  - D48 - DA1

  - D47 - DA2

  - D44 - E3 (brilho)

  - D43 - E1, E2 (extinção)

## Bibliotecas necessárias

Para usar os vários componentes do Shield MaTrix são necessárias as seguintes bibliotecas:

Exibe informações na matriz - MaTrix - [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip) (incluindo um teste de exibição simples e dois sketches de exibição em tempo real.)

- Relógio de tempo real (RTC) - RTClib - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

- Receptor IR - IRremote [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip) (Com esta biblioteca, você pode controlar o display usando um controle remoto IR)

- nRF24L01 + - iBoardRF24 - [iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip) (biblioteca de controle remoto [DevDuino Sensor Node 2.4G nRF24L01+](https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22))

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg)

Bibliotecas adicionais necessárias que são usadas durante a operação das bibliotecas:

- Wire

- SPI

- [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

## Recursos ao usar bibliotecas

Apenas duas bibliotecas requerem pequenos comentários sobre seu uso:

### Receptor IR

Como o receptor IR está conectado ao pino digital 5, é necessário alterar o arquivo / IRremote / IRremoteInt.h com o código correto da seguinte forma:

```

// Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46

```

### nRF24L01+

Inicialize o módulo da seguinte forma:

```


//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);



```

## Funções da biblioteca MaTrix

Para usar a biblioteca MaTrix no seu sketch é necessário declarar na função void setup () a seguinte linha de código:

`
`

``` #include <SPI.h>
#include <MaTrix.h> //connection library MaTrix

 MaTrix mymatrix;       //object creation mymatrix
```

## Variáveis

**byte array[8][8]** - array principal.
Os dados deste array determinam o que é exibido atualmente na matriz de LED

`
`

```
 byte array[8][8] = { // An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

Cada bit corresponde ao LED correspondente na matriz. 0 - LED "apagado", 1 - LED "aceso"

**byte shadow[8][8]** - array adicional ("sombra").
Funções da biblioteca usadas para organizar vários efeitos e rolagem de texto (os dados do array de sombra para um determinado efeito são reescritos de acordo com a regra do array de "sombra" para o principal).
`
`

```
 byte shadow[8][8] = { //An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

## Definições

`
`

```
 // Color
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
```

```
 // delay iteration in "drawing" effects (ms)
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
```

```
 // effects
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
```

```
 // hardware data
 #define BRIGHT 44    // brightness (pin 44 - PWM)
 #define LightSENS A7 // light sensor
```

## Função principal

<u> **mymatrix.init();**</u>

<dl><dd>_Description_: inicialização do módulo.</dd></dl>

<u> **mymatrix.clearLed();**</u>

<dl><dd>_Description_: limpeza do display.</dd></dl>

<u> **mymatrix.brightness(byte brightLevel);**</u>

<dl><dd>_Description_: define o brilho do display.</dd><dd>_brightLevel_:nível de brilho (byte), um valor de 255 - define o brilho máximo.</dd></dl>

Exemplo de uso:

`
`

```
 mymatrix.brightness(177);
```

<u> **mymatrix.get Brightness();**</u>

<dl><dd>_Description_: retorna o brilho atual do display.</dd></dl>

Exemplo de uso:

`
`

```
 Serial.println(mymatrix.getBrightness());
```

<u> **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**</u>

<dl><dd>_Descrição_: exibe a string especificada.</dd><dd>_pos_: posição inicial do primeiro caractere (byte). Contando a partir da borda direita da matriz, começando em 0.</dd><dd>_color_: cor (byte). Três valores predefinidos - RED, GREEN, YELLOW</dd><dd>_*Font_: um ponteiro para a fonte (unsigned char). Fontes disponíveis na biblioteca: caracteres - font5x8 (Latim), font6x8 (Latim e Cirílico); dígitos - digit6x8bold, digit6x8future. Para detalhes sobre fontes, veja o arquivo fonts.c do arquivo compactado da biblioteca MaTrix.</dd><dd>_effect_: o efeito da inscrição (char). Valores predefinidos disponíveis: LEFT, UP, DOWN (deslocamento na direção correspondente), FADE (aparecimento), NONE (Sem efeito - instantâneo). Valor padrão - NONE.</dd><dd>_speed_: velocidade de reprodução do efeito (int). Valores predefinidos disponíveis: VSLOW, SLOW, MID,  FAST, VFAST (de "muito lento" a "muito rápido"), valor padrão - MID.</dd></dl>

Exemplo de uso:

`
`

```
 mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
```

<u> **printRunningString(String s, byte color, unsigned char *Font, int speed);**</u>

<dl><dd>_Descrição_: exibe a linha "correndo" definida.</dd><dd>_color_: cor (byte). Três valores predefinidos - RED, GREEN, YELLOW</dd><dd>_*Font_: um ponteiro para a fonte (unsigned char). Fontes disponíveis na biblioteca: caracteres - font5x8 (Latim), font6x8 (Latim e Cirílico); dígitos - digit6x8bold, digit6x8future. Para detalhes sobre fontes, veja o arquivo fonts.c do arquivo compactado da biblioteca MaTrix.</dd><dd>_speed_: velocidade de reprodução do efeito (int). Valores predefinidos disponíveis: VSLOW, SLOW, MID,  FAST, VFAST (de "muito lento" a "muito rápido"), valor padrão - MID.</dd></dl>

Exemplo de uso:

`
`

```
 mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
```

## Funções auxiliares

<u> **printArray();**</u>

<dl><dd>_Descrição_: exibe na porta serial o estado atual do array principal (array).</dd></dl>

<u> **printShadow();**</u>

<dl><dd>_Descrição_: exibe na porta serial o estado atual da "sombra" do array (shadow).</dd></dl>

<u> **printChar(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Descrição_: a função altera o bloco de dados (array) de forma que, quando exibido na matriz, na posição predeterminada, seja mostrado o símbolo desejado na cor desejada.</dd><dd>_pos_: posição inicial do caractere (byte). Contando a partir da borda direita da matriz, começando em 0.</dd><dd>_color_: cor (byte). Três valores predefinidos - RED, GREEN, YELLOW</dd></dl>

Atenção! A fonte usada ao chamar a função deve ser definida usando `setFont`.

<u> **printCharShadow(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Descrição_: função semelhante a printChar, mas a modificação é aplicada ao array "shadow" (sombra).</dd></dl>

<u> **printStr(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Descrição_: a função altera o bloco de dados (array) de forma que, quando exibido em uma matriz, na posição predeterminada, o array de caracteres seja exibido na cor desejada.</dd><dd>_*s_: um ponteiro para um array de caracteres (unsigned char).</dd><dd>_pos_: posição inicial do primeiro caractere (byte). Contando a partir da borda direita da matriz, começando em 0.</dd><dd>_color_: cor (byte). Três valores predefinidos - RED, GREEN, YELLOW</dd></dl>

Atenção! A fonte usada ao chamar a função deve ser definida usando `setFont`.

<u> **printStrShadow(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Descrição_: função semelhante a printChar, mas a modificação é aplicada ao array "shadow" (sombra).</dd></dl>

## Referências

[ **ZIP** ] Versão atual da biblioteca [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip).

## Esquemático

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG)

No lado direito da placa (quando vista a partir da matriz) estão:

- Botão de relógio

- Interface para nRF24l01 +

- Local para montagem do LED RGB

- Jumper de seleção do tipo de LEDs (ânodo comum ou cátodo comum)

- Receptor IR

- Interface I2C

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG)

No lado esquerdo da placa estão:

- Sensor de luz

- Buzzer piezo (beeper)

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG)

[Esquemático do dispositivo](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg)

## Suporte Técnico & Discussão sobre o Produto

 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

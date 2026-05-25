---
description: Grove - Matriz de LED RGB c/Driver
title: Grove - Matriz de LED RGB c/Driver
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-RGB_LED_Matrix_w-Driver
sku: 105020073
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-RGB_LED_Matrix_w-Driver/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg" alt="pir" width={600} height="auto" /></p>

A matriz de LED RGB 8x8 é incrível para exibir imagens simples; 64 LEDs de pixel e 255 cores para cada pixel significam possibilidades quase infinitas. Porém, a fiação complicada da matriz é intimidante. Agora apresentamos a Grove - RGB LED Matrix w/Driver para você; deixe toda a fiação e soldagem complexas e variáveis para trás, apenas um único conector Grove para controlar facilmente a matriz de LED RGB 8x8. Incrível? Experimente você mesmo e vai adorar.

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html)

## Versão

| Versão do Produto  | Mudanças                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | Inicial                                                                                               | Dez 2018      |

## Recursos

- 8x8 pixels, **<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** 255 cores
- MCU integrado
- ±1%(típ.) de precisão de corrente do LED entre canais
- Suporte para exibição de imagens personalizadas

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Temperatura de Operação|-40℃ ~ +85℃|
|Interface|I2C|
|Endereço I2C|0x65|
|Tamanho|C: 40mm L: 40mm A: 21mm|
|Peso|17.3g|
|Tamanho da Embalagem|C: 120mm L: 100mm A: 33mm|
|Peso Bruto|28g|

## Aplicações Típicas

- Exibição simples de imagens
- Brinquedos

## Visão Geral do Hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg" alt="pir" width={600} height="auto" /></p>

---
**Interface Grove**  

Usamos a interface I2C para controlar a matriz de LED:

>GND: conecte este módulo ao GND do sistema  
>VCC: você pode usar 5V para este módulo  
>SDA: dados seriais I2C  
>SCL: clock serial I2C

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg" alt="pir" width={600} height="auto" /></p>

---

**Módulo DC-DC**

Usamos o MP-2155 para fornecer uma tensão estável de 3,3V para o MCU e para o chip driver de LED.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg" alt="pir" width={600} height="auto" /></p>

---

**Interface de Download de Firmware**  

Conecte aos pinos SDA e SCL; funciona como UART ao fazer o download do firmware.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg" alt="pir" width={600} height="auto" /></p>

---

**Driver de LED**

O [MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf) é um driver de LED APDM (modulação adaptativa de densidade de pulso) de corrente constante com 12 canais (R/G/B x 4). Como este módulo é uma matriz 8x8,
precisamos de canais de saída **<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** x8; portanto, usamos dois MY9221.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg" alt="pir" width={600} height="auto" /></p>

---
**Matriz de LED 8x8**

Usamos 64 LEDs KTR-3528RGB para formar uma matriz de LED 8x8

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg" alt="pir" width={600} height="auto" /></p>

Usamos o sinal V para seleção de coluna e o sinal RGB para seleção de linha.  
Nomeamos os LEDs por **D**, D1 - D64. R1/G1/B1 - R8/G8/B8 são acionados por dois MY9221, **V1 - V8** é controlado pelo chip 74HC183PW. Se todos os LEDs estiverem desligados, V1 - V9 deve ser puxado para nível baixo por padrão, e todas as linhas de canal RGB serão todas puxadas para nível alto.  

por exemplo.

**D8** está na primeira linha, oitava coluna. Se quisermos deixar o **D8** Verde-255, devemos colocar V8 em nível alto, e colocar R1/B1 em nível alto, puxar G1 para o terra. Então apenas o LED verde acenderá, você verá o D8 ficar verde puro.

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade de hardware ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Matrix w/Driver |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank">Compre Agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::important
    **1**. Se você usar o Arduino UNO como placa-mãe, é recomendado usar a fonte de alimentação DC. Caso contrário, a ondulação máxima do VCC pode exceder 100mV. Se você usar o Seeeduino V4.2 como placa-mãe, não precisa conectar a alimentação DC.

    **2**. Hot swap não é suportado.
:::

- **Passo 1.** Conecte o Grove - RGB LED Matrix w/Driver à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - RGB LED Matrix w/Driver |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
|SDA           | Branco             | SDA |
|SCL            | Amarelo            | SCL |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_RGB_LED_Matrix](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na Arduino IDE pelo caminho: **File --> Examples --> Seeed_RGB_Led_Matrix --> display_emoji**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra-o no seu computador clicando em **display_emoji.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_RGB_LED_Matrix-master\examples\display_emoji**, em que **XXXX** é o local onde você instalou a Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

    3. Ou, você pode simplesmente clicar no ícone
     <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)  -->
       <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif


#define DISPLAY_COLOR    0X11


void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("Can not detect led matrix!!!");
        while(1);
    }
    SERIAL.println("Matrix init success!!!");

}

void loop()
{
    for(int i=0;i<35;i++)
    {
        matrix.displayEmoji(i,5000,true);
        delay(5000);
    }
}
```

:::note
        O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
        Se tudo correr bem, agora você poderá ver a matriz de LEDs exibindo:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif" alt="pir" width={600} height="auto" /></p>

### DIY

Agora vamos falar sobre DIY.

:::note
        Nesta versão do firmware, se você quiser fazer o DIY da sua própria imagem com a serial do UNO, você precisa modificar o arquivo do Arduino. Se você usar mega ou lotus, a alteração não será necessária.
:::

> Localize a pasta de instalação do Arduino **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src**, abra o arquivo **Wire.h**

altere

```
#define BUFFER_LENGTH 32
```

para

```
#define BUFFER_LENGTH 128
```

> Em seguida, localize a pasta de instalação do Arduino **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src\utility**, abra o arquivo **twi.h**.  

altere

```
#define TWI_BUFFER_LENGTH 32
```

para

```
#define TWI_BUFFER_LENGTH 128
```

---

Vamos começar o DIY.

- **Passo 1.** Baixe o [editor de imagens](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/docs.zip), é um arquivo zip, descompacte-o.

- **Passo 2.** Encontre o **index.html** na pasta **doc-->doc**, clique duas vezes para abri-lo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Crie suas próprias imagens; quando terminar uma, clique em **Insert** no painel de controle, então você pode editar outra. Quando terminar toda a sequência de imagens, você pode copiar o código na área de código.

- **Passo 4.** Substitua o seguinte bloco de código, linha 9 **unit64_t example[]** pelo seu próprio código.

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

uint64_t example[] = {

  0xffff5e5e5e5effff,
  0xff5effffffff5eff,
  0x5eff5effff5eff5e,
  0x5effffffffffff5e,
  0x5eff5effff5eff5e,
  0x5effff5e5effff5e,
  0xff5effffffff5eff,
  0xffff5e5e5e5effff,

  0xffff29292929ffff,
  0xff29ffffffff29ff,
  0x29ff29ffff29ff29,
  0x29ffffffffffff29,
  0x29ff29292929ff29,
  0x29ffffffffffff29,
  0xff29ffffffff29ff,
  0xffff29292929ffff,

  0xffff00000000ffff,
  0xff00ffffffff00ff,
  0x00ff00ffff00ff00,
  0x00ffffffffffff00,
  0x00ffff0000ffff00,
  0x00ff00ffff00ff00,
  0xff00ffffffff00ff,
  0xffff00000000ffff
};

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("Can not detect led matrix!!!");
        while(1);
    }
    SERIAL.println("Matrix init success!!!");

}

void loop()
{
 for (int i=0;i<3;i++) {
        matrix.displayFrames(example+i*8, 200, false, 1);
        delay(500);
    }
}
```

:::success
        Se tudo correr bem, agora você poderá ver a matriz de LEDs exibindo:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - RGB LED Matrix Driver](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip)

- **[Zip]** [Arquivos Eagle do RGB LED Matrix 8x8](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/RGB%20LED%20Matrix%208x8.zip)

- **[Zip]** [Biblioteca Seeed_RGB_LED_Matrix](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix/archive/master.zip)

- **[PDF]** [Datasheet MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf)

- **[PDF]** [Datasheet MP2155](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MP2155.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

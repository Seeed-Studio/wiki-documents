---
description: Grove - Matriz de LED Vermelha c/Driver
title: Grove - Matriz de LED Vermelha c/Driver
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Red_LED_Matrix_w_Driver
sku: 104020089
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Red_LED_Matrix_w_Driver/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main2.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Matrix-w-Driver.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div>

A matriz de LED tem baixo custo e é geralmente usada para exibir números e imagens simples. Grove - Red LED Matrix c/Driver é a combinação da matriz de LED quadrada 20 mm 8*8 - vermelha e do Grove - LED Matrix Driver. O HT16K33 é um controlador driver de LED multifunção com mapeamento de memória que permite controlar a matriz de LED com nossas bibliotecas preparadas e fáceis de usar, ou você pode criar sua própria biblioteca para controlá-la e satisfazer sua necessidade.

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Red LED Matrix w/Driver | Inicial                                                                                               | Set 2018      |

## Características

- Oscilador RC integrado
- Auto incremento de endereço R/W
- Máx. 8 x 8 padrões
- Interface I^2^C-bus

## Especificação

|Item|Valor|
|---|---|
|Tensão de Alimentação|3.3V / 5V|
|Número de pontos da matriz de LED|8 * 8|
|Temperatura de operação|-40～85℃|
|Temperatura de armazenamento|-50～125℃|
|Interface|I2C|
|Endereço I2C|0x70(defult) 0x71~0x77(configurable)|
|Tamanho|C: 40mm L: 40mm A: 21mm|
|Peso|17.4g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 20mm|
|Peso bruto|24g|

:::note
         Há 8 possíveis endereços I2C deste Grove, de 0x70 a 0x77. O endereço I^2^C padrão é 0x77. Você pode alterar o endereço I2C fazendo algumas soldagens conforme instruído na tabela abaixo. 
:::

|Endereço I^2^C|Conexão|
|---|---|
|0x70|Desconectar: A0 A1 A2|
|0x71|Desconectar: A1 A2, Conectar: A0|
|0x72|Desconectar: A0 A2, Conectar: A1|
|0x73|Desconectar: A2, Conectar: A1 A0|
|0x74|Desconectar: A0 A1, Conectar: A2|
|0x75|Desconectar: A1, Conectar: A0 A2|
|0x76|Desconectar: A0, Conectar: A1 A2|
|0x77|Conectar: A0 A1 A2|

Por exemplo, se eu quiser mudar o endereço para 0x73, preciso conectar o pad A1,A0 e desconectar o pad A2. Então terei o endereço 0b01110011, que é 0x73.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## Aplicações típicas

- Indicadores de controle industrial
- Relógios digitais, termômetros, contadores, multímetros
- Conjuntos combinados
- Conjuntos de videocassete
- Leituras de instrumentação
- Outras aplicações de consumo
- Displays de LED

## Visão geral de hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield|Grove - Red LED Matrix w/Driver|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail2.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Red-LED-Matrix-w/Driver.html)|

:::note
    **1.** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Por favor, use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

    **2.** Cada módulo Grove vem com um cabo Grove quando você compra. Caso perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Red LED Matrix w/Driver à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo, você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na Arduino IDE através do caminho: **File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra-o no seu computador clicando em **basic_demo.ino** que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**, **XXXX** é o local onde você instalou a Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. Ou, você pode simplesmente clicar no ícone
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     no canto superior direito do bloco de código para copiar o código a seguir em um novo sketch na Arduino IDE.

```cpp


#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"


Matrix_8x8 matrix;

void setup()
{
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop()
{
    for (int i=0;i<33;i++)
    {
        // The input range of writeBar is [0-32]
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}


```

:::note
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

:::success
  Se tudo correr bem, você poderá ver várias barras exibidas na matriz de LED.
:::
Se você quiser executar outros exemplos, pode seguir processos semelhantes e verá diferentes exibições.

**Faça você mesmo (DIY)**

Você está disposto a deixar a matriz de LEDs exibir o emoji? Agora é a sua vez de criar o seu próprio. Prepare-se com os requisitos de Hardware e Software listados acima.

- **Passo 1.** Use o [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) online para editar e criar animações para matrizes de LED 8*8.

- **Passo 2.** Selecione a cor dos LEDs no canto superior direito. No meu caso, escolhi "vermelho", pois estou usando a matriz de LED vermelha.

- **Passo 3.** Crie o seu próprio desenho simplesmente clicando no ponto em branco.

- **Passo 4.** Copie o arquivo hex gerado de acordo com o seu desenho. Há duas maneiras de fazer isso:
  - copie o valor hex na caixa hex no canto inferior esquerdo.
  - copie o código correspondente na seção de código Arduino/C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Crie o novo arquivo '.ino' na mesma pasta que outros exemplos de matriz de LED e copie o código abaixo.

```cpp

#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

//put your own design hex group here.
const uint64_t Emoji[] = 
{
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Matrix_8x8 matrix;


void setup() {
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
    /*************************************************************
    * Description
    *    Setting the blink rate of matrix
    * Parameter
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * Return
    *    Null.
    *************************************************************/
}

void loop() {
  for (int i = 0;i < 3;i++)
    {
        matrix.writeOnePicture(Emoji[i]);
        /*************************************************************
        * Description
        *    Write a picture in display buffer.
        *    Call display() to show display buffer.
        * Parameter
        *    pic: A uint64_t type 8x8 matrix picture, you can make it at
        *         https://xantorohara.github.io/led-matrix-editor/#
        * Return
        *    Null.
        *************************************************************/
        matrix.display();
        /*************************************************************
        * Description
        *    Clear the display buffer.
        *    This function will display nothing on 8x8 Matrix after call display().
        * Parameter
        *    Null.
        * Return
        *    Null.
        *************************************************************/
        delay(500);
    }
}

```

- **Passo 6.** Envie seu projeto para o seu seeeduino.

:::success

         Se tudo correr bem, sua matriz de LED exibirá como abaixo.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - LED Matrix Driver(HT16K33)](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip)

- **[Zip]** [Biblioteca de Software Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [Datasheet HT16K33](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349%2C%20SMD%20IC%20Driver%3BSOP-28-物料规格书-1.pdf)

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

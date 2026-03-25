---
description: Grove - LED Matrix Driver (HT16K33)
title: Grove - LED Matrix Driver (HT16K33)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Matrix_Driver-HT16K33
sku: 105020074
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_Matrix_Driver-HT16K33/
---



<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg" alt="pir" width={600} height="auto" /></p>

A matriz de LED é de baixo custo e geralmente usada para exibir números e imagens simples. O Grove - LED Matrix Driver é um produto baseado em I2C que permite controlar a matriz de LED com nossas bibliotecas preparadas e fáceis de usar, ou você pode criar sua própria biblioteca para controlá‑la de acordo com a sua necessidade. A matriz de LED 8*8 pode ser montada e desmontada da placa controladora com facilidade, sendo conveniente trocar o display de matriz de LED de cores diferentes conforme a sua necessidade.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
<!-- [<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

## Versão

<!-- | Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - LED Matrix Driver (HT16K33) | Initial                                                                                               | Sep 2018      | -->

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>Product Version</th>
            <th>Changes</th>
            <th>Released Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grove - LED Matrix Driver (HT16K33)</td>
            <td>Initial</td>
            <td>Sep 2018</td>
        </tr>
    </tbody>
</table>
</div>

## Características

- Oscilador RC integrado
- Auto incremento de endereço R/W
- Máx. 8 x 8 padrões
- Interface I2C-bus

## Especificação

<!-- |Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|LED Matrix Dot NO.|8 * 8|
|Operating temperature|-40～85℃|
|Storage temperature|-50～125℃|
|Interface|I2C|
|I2C address|0x70(defult) 0x71~0x77(configurable)|
|size|L: 40mm W: 40mm H: 17mm| 
|Weight|8.8g|
|Package size|L: 140mm W: 90mm H: 18mm|
|Gross Weight|15g| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>Item</th>  
                <th>Value</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>Tensão de alimentação</td>  
                <td>3.3V / 5V</td>  
            </tr>  
            <tr>  
                <td>Nº de pontos da matriz de LED</td>  
                <td>8 * 8</td>  
            </tr>  
            <tr>  
                <td>Temperatura de operação</td>  
                <td>-40～85℃</td>  
            </tr>  
            <tr>  
                <td>Temperatura de armazenamento</td>  
                <td>-50～125℃</td>  
            </tr>  
            <tr>  
                <td>Interface</td>  
                <td>I2C</td>  
            </tr>  
            <tr>  
                <td>Endereço I2C</td>  
                <td>0x70 (padrão) 0x71~0x77 (configurável)</td>  
            </tr>  
            <tr>  
                <td>Tamanho</td>  
                <td>C: 40mm L: 40mm A: 17mm</td>  
            </tr>  
            <tr>  
                <td>Peso</td>  
                <td>8.8g</td>  
            </tr>  
            <tr>  
                <td>Tamanho da embalagem</td>  
                <td>C: 140mm L: 90mm A: 18mm</td>  
            </tr>  
            <tr>  
                <td>Peso bruto</td>  
                <td>15g</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  

:::note
Existem 8 possíveis endereços I2C deste Grove, de 0x70 a 0x77. O endereço I2C padrão é 0x77. Você pode alterar o endereço I2C fazendo algumas soldagens conforme instruído na tabela abaixo.
:::
<!-- |I2C address|Connection|
|---|---|
|0x70|Disconnect: A0 A1 A2|
|0x71|Disconnect: A1 A2, Connect: A0|
|0x72|Disconnect: A0 A2, Connect: A1|
|0x73|Disconnect: A2, Connect: A1 A0|
|0x74|Disconnect: A0 A1, Connect: A2|
|0x75|Disconnect: A1, Connect: A0 A2|
|0x76|Disconnect: A0, Connect: A1 A2|
|0x77|Connect: A0 A1 A2| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>I2C address</th>  
                <th>Connection</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>0x70</td>  
                <td>Disconnect: A0 A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x71</td>  
                <td>Disconnect: A1 A2, Connect: A0</td>  
            </tr>  
            <tr>  
                <td>0x72</td>  
                <td>Disconnect: A0 A2, Connect: A1</td>  
            </tr>  
            <tr>  
                <td>0x73</td>  
                <td>Disconnect: A2, Connect: A1 A0</td>  
            </tr>  
            <tr>  
                <td>0x74</td>  
                <td>Disconnect: A0 A1, Connect: A2</td>  
            </tr>  
            <tr>  
                <td>0x75</td>  
                <td>Disconnect: A1, Connect: A0 A2</td>  
            </tr>  
            <tr>  
                <td>0x76</td>  
                <td>Disconnect: A0, Connect: A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x77</td>  
                <td>Connect: A0 A1 A2</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  

Por exemplo, se eu quiser alterar o endereço para 0x73, preciso conectar os pads A1 e A0 e desconectar o pad A2. Assim, obterei o endereço 0b01110011, que é 0x73.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## Aplicações Típicas

- Indicadores de controle industrial
- Relógios digitais, termômetros, contadores, multímetros
- Conjuntos combinados
- Conjuntos de VCR
- Leituras de instrumentação
- Outras aplicações de consumo
- Displays LED

## Visão Geral do Hardware

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

### Usando com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield|Grove-LED Matrix Driver| matrix LED - Red|
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/LED_matrix.jpg" alt="pir" width={600} height="auto" /></p>
|[Compre um agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Compre um agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Compre um agora](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)|[Compre um agora](https://www.seeedstudio.com/20mm-8-8-square-matrix-LED-Red-p-36.html)|

:::note
**1.** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com apenas 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2.** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o LED de matriz quadrada vermelha ao Grove-LED Matrix Driver.

- **Passo 2.** Conecte o Grove - LED Matrix Driver à porta **I2C** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na Arduino IDE pelo caminho: **File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra-o no seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**, em que **XXXX** é o local onde você instalou a Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. Ou, você pode simplesmente clicar no ícone
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na Arduino IDE.

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

#include "SoftI2C.h"
#include "I2Cdev.h"

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
    hard_ware_iic.begin();
    matrix.init(&hard_ware_iic,0x70);
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop() {
    for (int i = 0; i < 33; i++) {
        // The input range of writeBar is [0-32]
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}
```

:::note
O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os primeiros dois métodos.
:::

:::success
Se tudo correr bem, você será capaz de ver várias barras exibidas na matriz de LEDs.
:::

Se você quiser executar outros exemplos, pode seguir processos semelhantes e ver diferentes exibições.

### DIY

Você está disposto a deixar a matriz de LEDs exibir emojis? Agora é a sua vez de criar o seu próprio. Prepare-se com os requisitos de Hardware e Software listados acima.

- **Passo 1.** Use o [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) online para editar e criar animações para matrizes de LED 8*8.

- **Passo 2.** Selecione a cor dos LEDs no canto superior direito. No meu caso, eu escolhi 'red', pois estou usando a matriz de LED vermelha.

- **Passo 3.** Crie seu próprio design simplesmente clicando no ponto em branco.

- **Passo 4.** Copie o arquivo hex gerado de acordo com o seu design. Existem duas maneiras de fazer isso:
  - copie o valor hex na caixa hex no canto inferior esquerdo.
  - copie o código correspondente na seção de código Arduino/C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Crie o novo arquivo '.ino' na mesma pasta que outros exemplos de LED Matrix e copie o código abaixo.

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

#include "SoftI2C.h"
#include "I2Cdev.h"

//put your own design hex group here.
const uint64_t Emoji[] = {
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
  Wire.begin();
  matrix.init(&hard_ware_iic, 0x70);
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
  for (int i = 0; i < 3; i++) {
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

- **Passo 6.** Faça o upload do seu projeto para o seu Seeeduino.

:::success
Se tudo correr bem, sua LED Matrix será exibida como abaixo.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 Biblioteca de Software](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [Datasheet HT16K33](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349,SMD-IC-Driver;SOP-28-1.pdf)

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

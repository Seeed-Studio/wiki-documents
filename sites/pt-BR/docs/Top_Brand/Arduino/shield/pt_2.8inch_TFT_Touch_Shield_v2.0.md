---
description: Escudo_de_Toque_TFT_de_2.8_polegadas_v2.0
title: Escudo de Toque TFT de 2,8" v2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /2.8inch_TFT_Touch_Shield_v2.0
sku: 104030004
last_update:
  date: 01/10/2023
  author: Eico
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/2.8inch_TFT_Touch_Shield_v2.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/main.jpg" alt="pir" width={600} height="auto" /></p>

O TFT Touch Shield V2.0 é uma tela sensível ao toque resistiva, compatível com as plataformas Arduino/Seeeduino/Arduino Mega/SAMD21. Ele pode ser usado como dispositivo de exibição ou bloco de desenho. Em comparação com a versão anterior, 2.8''TFT Touch Shield V1.0, atualizamos o driver da tela para um chip mais profissional, o driver ILI9341, fornecendo um método de comunicação SPI que economiza pinos sem sacrificar a velocidade de transmissão de dados. Devido à mudança do método de comunicação, os programas desenvolvidos para a versão original precisam ser modificados antes de serem migrados para a nova versão. Com um módulo de cartão SD integrado neste shield, ele preserva a capacidade para outras expansões do seu projeto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

* Tela grande com experiência fácil e confortável
* Luz de fundo controlável via programação
* Exibição com 65k cores ricas
* Método de comunicação SPI que economiza pinos
* Faixa ativa de toque em tela cheia

## Especificação

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão de Trabalho</h4></td>
    <td><h4>5 V</h4></td>
  </tr>
  <tr>
    <td><h4>Resolução</h4></td>
    <td><h4>320 x 240</h4></td>
  </tr>  
  <tr>
    <td><h4>Cores</h4></td>
    <td><h4>65k</h4></td>
  </tr>
  </tbody></table>

## Placas Compatíveis

O 2.8 inch TFT Touch Shield v2.0 foi testado e é totalmente compatível com as seguintes placas:

* Arduino Uno (todas as revisões)/Seeeduino (V4 & V4.2)
* Arduino Mega/Seeeduino Mega
* Arduino Zero (M0)/Seeeduino Lorawan
* Arduino Leonardo/Seeeduino Lite
* Seeeduino Cortex-M0+/Seeeduino Lotus Cortex-M0+

## Ideias de Aplicação

* Jogo
* Hub de Sensores
* Interface Homem‑Máquina
* Casa Inteligente

Aqui estão alguns projetos incríveis para sua referência.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Telefone Arduino</h3></td>
    <td><h3>Monitor de Facebook</h3></td>
    <td><h3>Monitor de Instrucatbles</h3></td>
  </tr>
  <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/" target="_blank"><span>Crie Agora!</span></a></td>
  <td><a href="https://www.instructables.com/id/Facebook-Like-Monitor/" target="_blank"><span>Crie Agora!</span></a></td>
  <td><a href="https://www.instructables.com/id/Make-a-Instructables-Indicator/" target="_blank"><span>Crie Agora!</span></a></td>  
  </tr>  
  </tbody></table>

## Mapa de Pinos

:::note
Você pode usar os pinos NÃO USADOS para controlar outros módulos.
:::

Pinos Digitais

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome do Pino</h3></td>
    <td><h3>Função</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>  
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>TF_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>TFT_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>TFT_DC</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>BACKLIGHT(Selectable)</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>SPI_MOSI</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>SPI_MISO</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>SPI_SCK</h4></td>
  </tr>  
  </tbody></table>

Pinos Analógicos

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome do Pino</h3></td>
    <td><h3>Função</h3></td>
  </tr>
  <tr>
    <td><h4>A0</h4></td>
    <td><h4>TOUCH PANEL</h4></td>
  </tr>
  <tr>
    <td><h4>A1</h4></td>
    <td><h4>TOUCH PANEL</h4></td>
  </tr>  
  <tr>
    <td><h4>A2</h4></td>
    <td><h4>TOUCH PANEL</h4></td>
  </tr>
  <tr>
    <td><h4>A3</h4></td>
    <td><h4>TOUCH PANEL</h4></td>
  </tr>
  <tr>
    <td><h4>A4</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>A5</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  </tbody></table>

## Primeiros Passos

:::note
Este guia de primeiros passos é baseado no ambiente Win10 e Arduino IDE 1.6.9.
:::
Nós mostraremos como este display funciona, por favor prepare os materiais abaixo para começar.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>2.8 TFT Touch Shield V2</h3></td>
    <td><h3>Cabo Micro USB</h3></td>
  </tr>

 <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Mais Detalhes</span></a></td>
  <td><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><span>Mais Detalhes</span></a></td>
  <td><a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html" target="_blank"><span>Mais Detalhes</span></a></td>  
  </tr>  
  </tbody></table>

### Baixar Biblioteca Arduino

Esta biblioteca oferece suporte às seguintes plataformas:

* Arduino/Genuino UNO
* Seeeduino V3/4.0/4.2
* Arduino/Genuino Mega
* Arduino Leonardo
* Seeeduino Lite/Clio/Lotus
* LinkIt ONE (o painel de toque não funciona)

Clique para baixar o [Touch Screen Driver](https://github.com/Seeed-Studio/Touch_Screen_Driver/archive/master.zip)，depois clique no botão abaixo para baixar a biblioteca e instalá‑la; se você não souber como instalar uma biblioteca Arduino, consulte o tutorial [(HOW TO INSTALL AN ARDUINO LIBRARY)](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

 <p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/TFT_Touch_Shield_V2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/library.png" /></a></p>
Esta biblioteca inclui os seguintes exemplos,

* drawCircle
* drawLines
* drawNumber
* drawRectangle
* paint
* shapes
* text
* tftbmp
* tftbmp2

Usamos o exemplo 'shapes' para esta demonstração.

:::note
Recomendamos usar Seeed_Arduino_LCD com chips de flash internos maiores que 128k. Se você tiver um dispositivo com flash menor, recomendo usar o TFT_Touch_Shield_V2.
:::

### Conecte os cabos e envie o código

**Passo 1.** Insira a placa TFT_Touch_Shield_V2 no Seeeduino,

**Passo 2.** Conecte sua placa Seeeduino ao computador com o cabo USB

**Passo 3.** Abra o Arduino IDE, selecione a porta COM e a placa corretas (neste exemplo usamos o Seeeduino V4)

**Passo 4.** Clique em **File > Examples > TFT_Touch_Shield_V2-master > shapes** para abrir o código. Envie o exemplo para o Seeeduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/shapes%20example.png" alt="pir" width={600} height="auto" /></p>
Se você tiver alguma dúvida sobre como enviar o código, consulte [aqui](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/#getting-started) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/display.jpeg" alt="pir" width={600} height="auto" /></p>

## Luz de Fundo

A luz de fundo está sempre ativada por padrão; se você quiser mudar a luz de fundo, será necessário fazer um pequeno hack na placa. Observe a parte traseira da placa. Há um rótulo BACKLIGHT. Um lado é chamado de ON e o outro lado é chamado de D7. Precisamos cortar o fio entre o pad do meio e o pad ON e soldar o pad do meio com o pad D7. Como mostrado abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/backlight.png" alt="pir" width={600} height="auto" /></p>
Então você pode controlar a luz de fundo via D7.

 Para ligar a luz de fundo:

 ```cpp
     digitalWrite(7, HIGH);
 ```

Para desligar a luz de fundo:

 ```cpp
    digitaWrite(7, LOW);
 ```

:::caution
Tenha cuidado ao usar um estilete e um ferro de solda.
:::

## FAQ

P: como dirigir o 2.8 TFT Touch Shield V2 usando o Seeed_Arduino_LCD?

R: Se você quiser dirigir o 2.8 TFT Touch Shield V2 com o Seeed_Arduino_LCD, os detalhes abaixo mostrarão como usá‑lo.

**Passo 1.** Baixe e instale o  [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD). Se você não souber como instalar uma biblioteca Arduino, consulte o tutorial [(HOW TO INSTALL AN ARDUINO LIBRARY)](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 2.** Configure o User_Setup.h consultando os comentários de User_Setup.h para fazer sua placa funcionar com o LCD.

**Passo 3.** Selecione Examples -> Seeed_Arduino_LCD -> 320 x 240, que inclui todos os exemplos do 2.8 TFT Touch Shield V2, para enviar o exemplo para a placa.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemático e PCB em formato Eagle](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip)
* [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch.pdf)
* [PCB em formato PDF](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch%20PCB.pdf)
* [Biblioteca na página do Github](https://github.com/Seeed-Studio/TFT_Touch_Shield_V2)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

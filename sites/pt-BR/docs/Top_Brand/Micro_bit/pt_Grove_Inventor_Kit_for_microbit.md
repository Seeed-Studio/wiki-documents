---
description: Grove_Inventor_Kit_for_microbit
title: Kit Inventor Grove para micro:bit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Inventor_Kit_for_microbit
sku: 103100063, 103030195, 110060762
last_update:
  date: 01/05/2022
  author: Eico
no_comments: false
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Inventor_Kit_for_microbit/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>

O BBC micro:bit é um computador de bolso que pode facilmente realizar sua criatividade sem muito conhecimento de eletrônica e programação. Há inúmeras possibilidades de criação que você pode explorar com o micro:bit, desde robôs até instrumentos musicais. Porém, se você quiser criar mais coisas, apenas 1 micro:bit é quase insuficiente, e é por isso que apresentamos a você o Kit Inventor Grove para micro:bit.

O Kit Inventor Grove para Micro:bit traz possibilidades infinitas para o seu micro:bit. A placa principal deste kit é o Grove Shield para micro:bit, com o qual você pode usar diversos módulos Grove, incluindo sensores, display e atuadores para interagir com o micro:bit. Se você nunca usou e não faz ideia do que é Grove, aqui está a introdução do Grove. Tudo o que você precisa saber é que, com o Grove, não há mais necessidade de soldagem ou jumpers. Seu protótipo será mais fácil e muito mais conveniente.

Nós já preparamos 8 módulos Grove para você começar com o micro:bit. Com esses módulos Grove, você pode medir distância e exibi-la, usar gestos para tocar músicas diferentes ou fazer um guarda inteligente para sua mesa ou quarto. Nós preparamos todas as bibliotecas (pacotes) necessárias para download gratuito. Se você é iniciante em micro:bit, não se preocupe porque também preparamos 12 projetos diferentes que podem ensiná-lo passo a passo. Se você é um usuário avançado, este kit ajudará você a criar projetos mais criativos do que os outros.

:::note

A tensão de saída do micro:bit é em torno de 3,0 V; usar o micro:bit ou pilhas AA para alimentar o circuito pode causar mau funcionamento de módulos Grove que exigem tensão de entrada e corrente de acionamento altas (por exemplo, Grove - Ultrasonic Ranger). Para que esse tipo de módulo Grove funcione bem, use a porta micro-USB no Grove Shield para micro:bit para alimentar o circuito.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Shield de extensão elegante com periféricos ricos e convenientes;
- 10 módulos Grove cuidadosamente selecionados para trabalhar com o micro:bit;
- 12 projetos incríveis para você começar rapidamente;
- Instruções bem documentadas.

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

### **Lista de peças**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome da peça</h3></td>
    <td><h3>Quantidade</h3></td>
  </tr>
  <tr>
    <td><h4>Grove Shield para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Rotary Angle Sensor(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Speaker </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Light Sensor v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Red LED</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Micro USB - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Manual com 12 Projetos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo tipo jacaré</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Grove</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## Primeiros Passos

### Fundamentos com Micro:bit

Você precisa conhecer alguns conceitos essenciais se for a primeira vez que está mexendo com o Micro:bit. Você pode clicar [**aqui**](https://microbit.org/code/) para ver mais sobre o Micro:bit.

O Micro:bit oferece dois tipos de editor - JavaScript Block Editor e Python Editor. O JavaScript Block Editor suporta programação gráfica; é fácil de aprender. Portanto, este tutorial é baseado no JavaScript Block Editor.

Aqui estão dois passos simples antes de você aproveitar nosso kit; depois disso podemos começar a programar.

#### Etapa 1. Abra o Editor

Clique para abrir o **[JavaScript Block Editor](https://makecode.microbit.org/)** e você verá uma interface de programação gráfica na web.

#### Etapa 2. Adicione o Pacote Grove

- Clique na engrenagem no canto superior direito > selecione **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

- Insira a URL do projeto: **github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

- Agora você pode encontrar **Grove** na barra de ferramentas.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### Demonstração 1. Reconhecimento de Gestos

O sensor de gestos pode reconhecer 9 gestos diferentes; nesta demonstração, você aprenderá como exibir o nome do gesto reconhecido
no micro:bit.

#### Lista de peças

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome da peça</h3></td>
    <td><h4>Quantidade</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Shield para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Universal Grove de 4 pinos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>

  </tbody></table>

#### Conexão

- Conecte o **micro:bit** ao **Grove Shield para micro:bit**.
- Conecte o Grove-Gesture à porta **I2C** do micro:bit por meio de um cabo Universal Grove de 4 pinos.
- Conecte o micro:bit ao PC através de um cabo Micro-USB.

:::warning

por favor, certifique-se de que a matriz de LEDs esteja voltada para cima quando você conectar o micro:bit, ou você pode danificar a placa.

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### Software

- Etapa 1:

  Adicione o bloco On Gesture
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

- Etapa 2:

  Selecione Right, para que o sensor possa reconhecer quando você move sua mão da direita para a esquerda.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

- Etapa 3:

  Adicione o bloco básico **show string** e insira-o no bloco Gesture. Em seguida, clique duas vezes em "Hello!" e mude para "Right".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

- Etapa 4:

  Adicione "Left" e "Clockwise" da mesma maneira, e insira **show icon** em "Clockwise".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

- Etapa 5:

  Quando terminar tudo isso, renomeie o projeto para "gesture". Então você pode fazer o download do projeto para sua placa. Clique em **Download** no canto inferior esquerdo e baixe o arquivo **microbit-gesture.hex** para a unidade de armazenamento do MICROBIT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  Agora aproveite seu projeto.

:::tip
  Você pode encontrar os blocos pela cor. Por exemplo, se você não sabe onde está **show icon**, como ele é azul e o módulo **Basic** também é azul, você pode encontrá-lo ali. Simples e eficaz, não é?
:::

### Demonstração 2. Medidor Ultrassônico

Nesta demonstração, você aprenderá a usar o sensor ultrassônico para medir distância e mostrar o valor em um
display.

#### Lista de peças

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome da peça</h3></td>
    <td><h4>Quantidade</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove Shield para micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Universal Grove de 4 pinos</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Cabo Micro-USB</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### Conexão

- Conecte o **micro:bit** ao **Grove Shield para micro:bit**.

:::warning
por favor, certifique-se de que a matriz de LEDs esteja voltada para cima quando você conectar o micro:bit, ou você pode danificar a placa.
:::

- Conecte o Grove-Ultrasonic Ranger à porta **P0/P14** do micro:bit por meio de um cabo Universal Grove de 4 pinos.
- Conecte o Grove-4-Digit Display à porta **P1/P15** do micro:bit por meio de um cabo Universal Grove de 4 pinos.
- Conecte o micro:bit ao PC através de um cabo Micro-USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### software

- Etapa 1:

  Adicione o bloco básico **on start**, depois adicione os blocos de variável **set item to 0**, renomeie ‘items’ para ‘Display’. Se você adicionou o pacote Grove com sucesso, substitua “0” pelo bloco Grove 4-Digit Display em P1 e P15.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

- Etapa 2:

  Adicione o bloco básico forever, depois adicione o bloco Grove item show number 0, renomeie ‘item’ para ‘Display’, substitua ‘0’ pelo bloco Grove Ultrasonic Sensor (in cm) at P0.

- Etapa 3:

  Adicione o bloco básico pause (ms) (100).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

- Etapa 4:

  Renomeie o projeto para "Ultrasonic Meter", faça o download e divirta-se.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

  [**Grove Inventor Kit for micro:bit User Manual**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit Getting Started Videos**](http://microbit.org/start/)

  [**About micro:bit**](http://microbit.org/about/)

  [**micro:bit Hardware**](http://microbit.org/guide/hardware/)

  [**micro:bit Apps**](http://microbit.org/code/)

  [**Grove Shield for microbit_eagle file.zip**](https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

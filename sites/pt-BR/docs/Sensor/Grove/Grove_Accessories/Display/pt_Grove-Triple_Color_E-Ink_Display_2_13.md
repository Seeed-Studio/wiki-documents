---
description: Grove - Tela E-Ink Tricolor 2,13"
title: Grove - Tela E-Ink Tricolor 2,13"
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Triple_Color_E-Ink_Display_2_13
sku: 104020130
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Triple_Color_E-Ink_Display_2_13/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - Triple Color E-Ink Display 2.13'' é uma tela que continua exibindo mesmo após ser desligada; nós a chamamos de E-Paper (papel eletrônico) ou E-Ink. O display é uma tela eletroforética de matriz ativa TFT, com interface e um
projeto de sistema de referência. A área ativa de 2,13 polegadas contém 212x104 pixels e possui capacidade de exibição completa de 1 bit branco/preto e 1 bit vermelho.

Devido a vantagens como consumo de energia ultrabaixo, amplo ângulo de visão e exibição nítida sem eletricidade, é uma escolha ideal para aplicações como etiqueta de prateleira, instrumento industrial e assim por diante.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)

## Características

- Alto contraste
- Alta refletância
- Ângulo de visão ultralargo
- Consumo de energia ultrabaixo
- RAM de exibição integrada

## Especificação

|Item|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura de operação| 0～40℃|
|Temperatura de armazenamento| -25～60℃|
|Faixa de umidade|40~70%RH|
|Resolução da tela|212(H) x 104(V) pixel|
|DPI|111|
|Interface|UART|
|Taxa de transmissão com Arduino|230400|

:::note
        Atualizações contínuas e frequentes causarão danos irreparáveis ao E-Ink. Recomenda-se que o intervalo de atualização seja maior que 180 s.
:::

## Pinagem

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' pinout" title="Pinout" />
    <figcaption><b>Figura 1</b>. <i>pinagem</i></figcaption>
  </figure>
</div>

## Plataformas Compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Triple Color E-Ink Display 2.13''|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos de 2 fios não podem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 2.** Conecte o Seeeduino ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código; consulte a parte de software.

- **Passo 4.** Conecte o Grove - Triple Color E-Ink Display 2.13'' à porta **UART** do Grove-Base Shield.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' connect" title="connect" />
    <figcaption><b>Figura 2</b>. <i>conexão</i></figcaption>
  </figure>
</div>

:::note
      Este módulo se comunica com a placa de controle por meio da interface UART. Se você usar uma placa Atmega328p como o Arduino UNO ou Seeeduino V4.2, precisará desconectar este módulo antes de baixar o código, porque há apenas uma porta serial de hardware.
      Se este módulo ocupar a porta UART, o programa de download não poderá usar a porta serial. Porém, se você usar uma placa SAMD, como Seeeduino Lotus ou Arduino Mega, há duas ou mais portas seriais de hardware disponíveis. Portanto, não é necessário desconectar o módulo antes do download.  
:::

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_2.13/tree/master/examples/Eink_factory_code_213) do Github.

- **Passo 2.** Abra o arquivo **Eink_factory_code_213.ino** com a sua IDE do Arduino.

- **Passo 3.** Envie o exemplo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
  Se tudo correr bem, você verá a tela piscando, e o display mostrará o logo da Seeed
:::

### DIY

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/demo.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>Figura 3</b>. <i>demo de DIY</i></figcaption>
  </figure>
</div>

Será muito divertido exibir sua própria imagem; agora, vamos mostrar como fazer o DIY do seu próprio E-paper.

Antes de começar, verifique novamente o **Eink_factory_code_213.ino**. Você pode encontrar facilmente os dois arrays.

```cpp
const unsigned char IMAGE_BLACK[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

e

```cpp
const unsigned char IMAGE_RED[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

Como você pode ver, os dois arrays são chamados **const unsigned char IMAGE_BLACK[]** e **const unsigned char IMAGE_RED[]**,
> **const unsigned char IMAGE_BLACK[]** é usado para exibir a imagem preta  
> **const unsigned char IMAGE_RED[]** é usado para exibir a imagem vermelha

Na verdade, para exibir sua própria imagem, você só precisa substituir esses dois arrays de imagem. Ou seja, você só precisa obter o seu próprio array de imagem. Felizmente, existe uma ferramenta chamada **Image2LCD**; você pode procurá-la no Google, não é difícil de encontrar. Supondo que você já tenha baixado e instalado este software. A seguir, mostraremos como usar este software.

- **Passo 1.** Prepare uma imagem de 104*212 pixels.

:::tip
        A tela de tinta só suporta imagens com nível de cinza de segunda ordem, isto é, preto e branco. Se o nível de cinza da imagem for muito alto, as cores não poderão ser exibidas completamente.
:::

- **Passo 2.** Abra o software **Image2LCD** e clique no ícone Open para abrir sua imagem. Você verá a seguinte janela.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/image2LCD.png" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>Figura 4</b>. <i>Configuração do Image2LCD</i></figcaption>
  </figure>
</div>

Por favor, marque a opção correspondente conforme mostrado acima.

>1. Tipo de arquivo de saída -> *.C  
>2. Modo de varredura -> Horizon Scan  
>3. BitsPixel -> monocromático  
>4. Largura e Altura máximas -> 104 x 212  
>5. Reverse color:  Se você precisa marcar esta opção depende do efeito que deseja exibir. Para mais detalhes, consulte a **Tabela 1** abaixo.

- **Passo 3.** Depois de configurar as opções acima, você só precisa clicar no botão **Save** no canto superior esquerdo para gerar o array de imagem correspondente. Em seguida, substitua o array factoryCode pelo seu próprio array de imagem.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/code.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title />
    <figcaption><b>Figura 5</b>. <i>Basta substituir a parte selecionada com o quadro vermelho, o que significa que você deve manter o nome do array</i></figcaption>
  </figure>
</div>

Como mencionamos acima, há dois arrays, você pode ficar confuso: qual deles substituir? Bem, isso depende de qual efeito de exibição você deseja. Verifique a **Tabela 1**.

<!-- |Display|<p style="background:black"><font color="red">Black background Red image</font></p>|<p style="background:white"><font color="red">White background Red image</font></p>|<p style="background:red"><font color="black">Red background Black image</font></p>|<p style="background:red"><font color="white">Red background White image</font></p> |
|---|----|----|----|----|
|Black Array|00|FF|00|FF|
|Red Array|Image(Reversed)|Image(Reversed)|Image|Image| -->

|Display|<font color="red">Imagem vermelha em fundo preto</font>|<font color="red">Imagem vermelha em fundo branco</font>|<font color="black">Imagem preta em fundo vermelho</font>|Imagem branca em fundo vermelho |
|---|----|----|----|----|
|Black Array|00|FF|00|FF|
|Red Array|Image(Reversed)|Image(Reversed)|Image|Image|

|Display|<font color="red">Tela inteira vermelha</font>|<font color="black">Imagem preta em fundo branco</font>|<font color="red">Vermelho em fundo vermelho</font>|Imagem branca em fundo preto |
|---|----|----|----|----|
|Black Array|Image(Reversed)|Image(Reversed)|Image|Image|
|Red Array|00|FF|00|FF|

<div align="center"><b>Tabela 1.</b><i>Efeito de exibição do array</i></div>

:::note
        a.**00** significa que todos os elementos no array são 0x00, na verdade você precisa de 2756 0x00   
        b.**FF** significa que todos os elementos no array são 0xFF, na verdade você precisa de 2756 0xFF  
        c.**Image(Reversed)** significa que você precisa marcar a opção **Reverse color** no **Passo 2(Figura 4)**  
        b.**Image** significa não marcar a opção **Reverse color** no **Passo 2(Figura 4)**
:::
:::tip
        *Fazer um array de 2756 0x00 ou 0xFF?*  
        *Não se preocupe, entendemos a sua dor, você pode simplesmente clicar no arquivo 0x00.c e 0xFF.c e copiar para o seu código.*
:::
[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/ff.c)

Consideramos que o estado original é tela inteira branca. Ao atualizar a imagem, o array preto é atualizado primeiro, depois o array vermelho é atualizado, e a imagem do array vermelho sobrescreve a imagem preta.

Este display é 104 x 212, portanto existem 104x212 = 22048 pixels, e cada pixel é controlado por um bit. O elemento no array é um número hexadecimal de dois dígitos, como **0xF0**. Convertendo **0xF0** para binário, obtemos **1111 0000**. Um pixel com valor 1 exibirá branco, e um pixel com valor 0 exibirá a cor do array correspondente (vermelho ou preto). Isso significa que cada elemento no array da imagem controla 8 pixels. Portanto, você precisa de um array com 22048/8 = 2756 elementos.

**Passo 4.** Baixe o código para o seu Arduino e depois conecte o módulo de display à placa Arduino. Após piscar por um tempo, você verá o padrão que definiu.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - Display E-Ink Tricolor 2.13''](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip)

- **[PDF]** [Ficha Técnica do E-paper 2.13 polegadas](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/E-paper_2.13_inch.pdf)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

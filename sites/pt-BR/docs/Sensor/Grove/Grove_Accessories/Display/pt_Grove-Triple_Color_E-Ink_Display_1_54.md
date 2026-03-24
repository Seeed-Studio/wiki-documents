---
description: Grove - Display de E-Ink de Três Cores 1,54"
title: Grove - Display de E-Ink de Três Cores 1,54"
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Triple_Color_E-Ink_Display_1_54
sku: 104020129
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Triple_Color_E-Ink_Display_1_54/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - Triple Color E-Ink Display 1.54'' é uma tela que ainda pode exibir a imagem após ser desligada; nós a chamamos de E-Paper (papel eletrônico) ou E-Ink. O display é uma tela eletroforética de matriz ativa TFT, com interface e um
projeto de sistema de referência. A área ativa de 1,54 polegada contém 152x152 pixels e possui capacidades de exibição completa de 1 bit branco/preto e 1 bit vermelho.

Devido às vantagens como consumo de energia ultrabaixo, amplo ângulo de visão e visualização nítida sem eletricidade, é uma escolha ideal para aplicações como etiqueta de prateleira, instrumento industrial e assim por diante.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)

## Recurso

- Alto contraste
- Alta refletância
- Ângulo de visão ultra amplo
- Consumo de energia ultrabaixo
- RAM de exibição integrada

## Especificação

|Item|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura de operação| 0～40℃|
|Temperatura de armazenamento| -25～60℃|
|Faixa de umidade|40~70%RH|
|Resolução do display|152(H) x 152(V) pixel|
|DPI|140|
|Interface|UART|
|Taxa de baud com Arduino|230400|

:::note
        Atualizações contínuas frequentes causarão danos irreparáveis ao E-Ink. Recomenda-se que o intervalo de atualização seja maior que 180s.
:::

## Pinout

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' pinout" title="Pinout" />
    <figcaption><b>Figura 1</b>. <i>pinout</i></figcaption>
  </figure>
</div>

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Demo com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Triple Color E-Ink Display 1.54''|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 2.** Conecte o Seeeduino ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código; consulte a parte de software.

- **Passo 4.** Conecte o Grove - Triple Color E-Ink Display 1.54'' à porta **UART** do Grove-Base Shield.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' connect" title="connection" />
    <figcaption><b>Figura 2</b>. <i>connection</i></figcaption>
  </figure>
</div>

:::note
      Este módulo se comunica com a placa de controle por meio da interface UART. Se você usar a placa Atmega328p como Arduino UNO ou Seeeduino V4.2, precisará desconectar este módulo antes de fazer o download do código, porque há apenas uma porta serial de hardware.
      Se este módulo ocupar a porta UART, o programa de download não poderá usar a porta serial. Porém, se você usar uma placa SAMD, como o seeeduino Lotus ou o Arduino Mega, há duas ou mais portas seriais de hardware disponíveis. Portanto, não há necessidade de desconectar o módulo antes do download.  
:::

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_1.54/tree/master/examples/E_ink154_factoryCode) do Github.

- **Passo 2.** Abra o arquivo **E_ink154_factoryCode.ino** com a sua IDE do Arduino.

- **Passo 3.** Faça o upload do demo. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
  Se tudo correr bem, você verá o display piscando e o display mostrará o logo da Seeed
:::

### DIY

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/demo_wiki.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>Figura 3</b>. <i>DIY demo</i></figcaption>
  </figure>
</div>

Será muito divertido exibir sua própria imagem; agora, vamos mostrar como fazer o DIY do seu próprio E-paper.

Antes de começar, verifique novamente o **E_ink154_factoryCode.ino**. Você pode encontrar facilmente os dois arrays.

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

Na verdade, para exibir sua própria imagem, você só precisa substituir esses dois arrays de imagem. Ou seja, você só precisa obter seus próprios arrays de imagem. Felizmente, existe uma ferramenta chamada **Image2LCD**; você pode procurá-la no Google, não é difícil de encontrar. Suponha que você já tenha baixado e instalado este software. A seguir, mostraremos como usar este software.

- **Passo 1.** Prepare uma imagem de 152*152 pixels.

:::tip
        A tela de tinta só oferece suporte a imagens com nível de cinza de segunda ordem, ou seja, preto e branco. Se o nível de cinza da imagem for muito alto, as cores completas não poderão ser exibidas completamente.
:::

- **Passo 2.** Abra o software **Image2LCD** e clique no ícone Open para abrir sua imagem. Você verá a seguinte janela.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/image2LCD_1.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>Figura 4</b>. <i>Configuração do Image2LCD</i></figcaption>
  </figure>
</div>

Por favor, marque as opções correspondentes conforme mostrado acima.

>1. Tipo de arquivo de saída -> *.C  
>2. Modo de varredura -> Horizon Scan  
>3. BitsPixel -> monocromático  
>4. Largura e Altura máximas -> 152 x 152  
>5. Reverse color:  Se você precisa marcar esta opção ou não depende do efeito que você deseja exibir. Para mais detalhes, por favor verifique a **Tabela 1** abaixo.

- **Passo 3.** Depois de configurar as opções acima, você só precisa clicar no botão **Save** no canto superior esquerdo para gerar o array de imagem correspondente. Em seguida, substitua o array factoryCode pelo seu próprio array de imagem.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/code.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title />
    <figcaption><b>Figura 5</b>. <i>Apenas substitua a parte selecionada com a caixa vermelha, o que significa que você deve manter o nome do array</i></figcaption>
  </figure>
</div>

Como mencionamos acima, existem dois arrays, você pode ficar confuso: qual deles substituir? Bem, isso depende de qual efeito de exibição você deseja. Verifique a **Tabela 1**.

|Display|<font color="red">Imagem vermelha com fundo preto</font>|<font color="red">Imagem vermelha com fundo branco</font>|<font color="black">Imagem preta com fundo vermelho</font>|Imagem branca com fundo vermelho |
|---|----|----|----|----|
|Black Array|00|FF|00|FF|
|Red Array|Image(Reversed)|Image(Reversed)|Image|Image|

|Display|<font color="red">Tela inteira vermelha</font>|<font color="black">Imagem preta com fundo branco</font>|<font color="red">Imagem vermelha com fundo vermelho</font>|Imagem branca com fundo preto |
|---|----|----|----|----|
|Black Array|Image(Reversed)|Image(Reversed)|Image|Image|
|Red Array|00|FF|00|FF|

<div align="center"><b>Tabela 1.</b><i>Efeito de exibição do array</i></div>

:::note
        a.**00** significa que todos os elementos no array são 0x00, na verdade você precisa de 2888 0x00   
        b.**FF** significa que todos os elementos no array são 0xFF, na verdade você precisa de 2888 0xFF  
        c.**Image(Reversed)** significa que você precisa marcar a opção **Reverse color** no **Passo 2(Figura 4)**  
        b.**Image** significa não marcar a opção **Reverse color** no **Passo 2(Figura 4)**
:::
:::tip
        *Fazer um array de 2888 0x00 ou 0xFF?*  
        *Não se preocupe, entendemos a sua dor, você só precisa clicar no arquivo 0x00.c e 0xFF.c e copiar para o seu código.*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

Nós consideramos que o estado original é tela inteira branca. Ao atualizar a imagem, o array preto é atualizado primeiro, depois o array vermelho é atualizado, e a imagem do array vermelho sobrescreve a imagem preta.

Este display é 152 x 152, então há 152x152=23104 pixels, cada pixel é controlado por um bit. O elemento no array é um número hexadecimal de dois dígitos, como **0xF0**. Convertendo **0xF0** para um número binário teremos
**1111 0000**. Um pixel com valor 1 exibirá branco, e um pixel com valor 0 exibirá a cor do array correspondente (vermelho ou preto). O que significa que cada elemento no array de imagem controla 8 pixels. Portanto, você precisa de um array de 23104/8=2888 elementos.

**Passo 4.** Baixe o código para o seu Arduino, depois conecte o módulo de display na placa Arduino. Após piscar por um tempo, você verá o padrão que definiu.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - Triple Color E-Ink Display 1.54''](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip)

- **[PDF]** [Datasheet do E-paper 1,54 polegadas](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/E-Ink%20152X152-Black%2CWhite%20and%20Red-1.54inch.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

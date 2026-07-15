---
description: Shield E-link Tricolor de 2,7 polegadas para Arduino
title: Shield E-link Tricolor de 2,7 polegadas para Arduino
keywords:
  - shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /2.7inch-Triple-Color-E-Ink-Shield-for-Arduino
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino/
---
<!-- ---
nam2.7'' Triple-color E-link Shield for Arduinoe: 2.7'' Triple-Color E-Ink Shield for Arduino
category: Shield
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 104030067
tags:
--- -->

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-all.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

A tela E-Ink, também conhecida como tela E-paper, já foi lançada em vários tamanhos, incluindo o módulo Grove E-Ink e o Raspberry Pi E-Ink hat. Agora apresentamos a você o novo membro da família Seeed E-Ink -- o Display E-Ink Tricolor de 2,7'' para Arduino.

O Display E-Ink Tricolor de 2,7'' é um shield de display E-Ink para Arduino, que contém 264x176 pixels e pode exibir branco/preto/vermelho para cada pixel. Este shield se comunica com o Arduino por meio da interface SPI e reserva uma interface Grove I2C para uso com outros módulos. Com a ajuda de um circuito de comparação, o módulo alcança auto-adaptação aos sistemas de tensão de 3,3 V e 5 V.

Comparado aos displays LCD tradicionais, o E-Ink elimina a necessidade de retroiluminação e, portanto, o consumo de energia é ultrabaixo. E o E-Ink possui um ângulo de visão extremamente amplo com contraste muito alto, de modo que pode ser exibido com clareza mesmo sob luz solar direta. Além disso, o E-Ink pode exibir imagens definidas pelo usuário por um longo tempo (por semanas ou até meses) sem qualquer fonte de alimentação. Que display incrível!

Se você estiver interessado, pode clicar na imagem abaixo para ver os diferentes tamanhos de E-Ink para Arduino ou Raspberry Pi E-Ink.

## Recursos

- Consumo de energia ultrabaixo
- Ângulo de visão ultra amplo
- Alto contraste

## Aplicações

- Cenário de exibição de baixo consumo
- Cenário de exibição ao ar livre
- Instrumento industrial
- Etiqueta de prateleira

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

#### Materiais Necessários

| Seeeduino Lotus | Shield E-Ink Tricolor de 2,7'' para Arduino|
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-integrate-thumbnail.png)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Adquira agora](https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html)|

#### Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/hardware_overview.png)

:::note
**1** Conecte o cabo USB, o conector FPC do E-Ink e o Shield E-Ink Tricolor ao Seeeduino com cuidado, caso contrário você poderá danificar a porta.
:::

- **Passo 1.** Conecte o Shield E-Ink Tricolor ao Seeeduino.

- **Passo 2.** Conecte o Seeeduino ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código, por favor consulte a parte de software.

- **Passo 4.** Execute o código e até a sua própria imagem será exibida na tela.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/connection.jpg" alt="Conexão do Triple-Color E-Ink Shield for Arduino" title="connection" />
<figcaption><b>Figura 2</b>. <i>conexão</i></figcaption>
</figure>
</div>

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip).

- **Passo 2.** Abra o arquivo **epd2in7b-demo.ino** com a sua IDE do Arduino.

- **Passo 3.** Copie todo o arquivo **Seeed_Elink_Shield** e cole-o na pasta de bibliotecas da sua IDE do Arduino.

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
Se tudo correr bem, você verá o display piscando e o display mostrará o logo da Seeed
:::

### DIY

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/5.jpg" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>Figura 3</b>. <i>Demo DIY</i></figcaption>
</figure>
</div>

Será muito divertido exibir a sua própria imagem, agora, vamos mostrar como fazer o seu próprio E-paper DIY.

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
> **const unsigned char IMAGE_BLACK[]** é usado para exibição de imagem preta  
> **const unsigned char IMAGE_RED[]** é usado para exibição de imagem vermelha

Na verdade, para exibir a sua própria imagem, você só precisa substituir esses dois arrays de imagem. Ou seja, você só precisa obter o seu próprio array de imagem. Felizmente, existe uma ferramenta chamada [Image2LCD](https://www.buydisplay.com/download/software/Image2Lcd.zip), você pode procurá-la no Google, não é difícil de encontrar. Suponha que você já tenha baixado e instalado este software. A seguir, mostraremos como usar este software.

- **Passo 1.** Prepare uma imagem de 264*176 pixels.

:::tip
A tela de tinta só suporta imagens com nível de cinza de segunda ordem, isto é, preto e branco. Se o nível de cinza da imagem for muito alto, as cores não poderão ser exibidas completamente.
:::

- **Passo 2.** Abra o software **Image2LCD** e clique no ícone Open para abrir a sua imagem. Você verá a seguinte janela.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image2LCD_1.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>Figura 4</b>. <i>Configuração do Image2LCD</i></figcaption>
</figure>
</div>

Marque as opções correspondentes conforme mostrado acima.

>1. Output file type -> *.C  
>2. Scan mode -> Horizon Scan  
>3. BitsPixel -> monochrome  
>4. Max Width and Height -> 264 x 176  
>5. Reverse color: Se você precisa marcar ou não esta opção depende do efeito que deseja exibir. Para mais detalhes, consulte a **Tabela 1** abaixo.

- **Passo 3.** Depois de configurar as opções acima, você só precisa clicar no botão **Save** no canto superior esquerdo para gerar o array de imagem correspondente. Em seguida, substitua o array factoryCode pelo seu próprio array de imagem.

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image3.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="" />
<figcaption><b>Figura 5</b>. <i>Basta substituir a parte selecionada com o retângulo vermelho, o que significa que você deve manter o nome do array</i></figcaption>
</figure>
</div>

Como mencionamos acima, existem dois arrays, você pode ficar confuso: qual deles substituir? Bem, isso depende de qual efeito de exibição você deseja. Consulte a **Tabela 1**. E depois de escolher uma cor para substituir, lembre-se de excluir o código da outra cor, mas mantendo o nome do array.

|<br />Exibição|<p style={{background: 'black'}}><font color="red">Fundo preto<br /> Imagem vermelha</font></p>|<p style={{background: 'white'}}><font color="red">Fundo branco<br /> Imagem vermelha</font></p>|<p style={{background: 'red'}}><font color="black">Fundo vermelho<br /> Imagem preta</font></p>|<p style={{background: 'red'}}><font color="white">Fundo vermelho<br /> Imagem branca</font></p>|
|---|----|----|----|----|
|Array Preto|00|FF|00|FF|
|Array Vermelho|Imagem (invertida)|Imagem (invertida)|Imagem|Imagem|

|<br />Display|<p style={{background: 'red'}}><font color="black">Tela inteira<br /> vermelha </font></p>|<p style={{background: 'white'}}><font color="black">Fundo branco<br /> Imagem preta</font></p>|<p style={{background: 'red'}}><font color="black">Fundo vermelho<br /> vermelho</font></p>|<p style={{background: 'black'}}><font color="white">Fundo preto<br /> Imagem branca</font></p>|
|---|----|----|----|----|
|Black Array|Imagem (invertida)|Imagem (invertida)|Imagem|Imagem|
|Red Array|00|FF|00|FF|

<div align="center"><b>Tabela 1.</b><i>Efeito de exibição do array</i></div>

:::note
a.**00** significa que todos os elementos do array são 0x00, na verdade você precisa de 2888 0x00<br />
b.**FF** significa que todos os elementos do array são 0xFF, na verdade você precisa de 2888 0xFF  <br />
c.**Image(Reversed)** significa que você precisa marcar a opção **Reverse color** na **Etapa 2(Figura 4)** <br />  
d.**Image** significa não marcar a opção **Reverse color** na **Etapa 2(Figura 4)**
:::

:::tip
*Quer criar um array de 2888 0x00 ou 0xFF?*  
*Não se preocupe, entendemos sua dor, você pode simplesmente clicar no arquivo 0x00.c e 0xFF.c e copiar para o seu código.*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

Consideramos que o estado original é tela inteira branca. Ao atualizar a imagem, o array preto é atualizado primeiro, depois o array vermelho é atualizado, e a imagem do array vermelho sobrescreve a imagem preta.

Esta tela é 152 x 152, então há 152x152=23104 pixels, cada pixel é controlado por um bit. O elemento no array é um número hexadecimal de dois dígitos, como **0xF0**. Convertendo **0xF0** para um número binário, obteremos
**1111 0000**. Um pixel com valor 1 exibirá branco, e um pixel com valor 0 exibirá a cor do array correspondente (vermelho ou preto). O que significa que cada elemento no array de imagem controla 8 pixels. Portanto, você precisa de um array de 23104/8=2888 elementos.

**Etapa 4.** Baixe o código para o seu Arduino, depois conecte o módulo de display à placa Arduino. Após piscar por um tempo, você verá o padrão que definiu.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [2.7-Triple-Color-E-Ink-Display-for-Arduino.zip](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip)
- **[Zip]** [Biblioteca de Código de Demonstração](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)

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

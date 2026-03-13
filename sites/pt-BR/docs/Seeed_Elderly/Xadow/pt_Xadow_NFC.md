---
description: Xadow - NFC
title: Xadow - NFC
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_NFC
sku: 113040000
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_NFC/
---
---
Near Field Communication (NFC) é um conjunto de tecnologias sem fio de curto alcance. Ela está por trás de aplicações diárias como sistemas de controle de acesso e sistemas de pagamento móvel.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg)

Xadow NFC apresenta um módulo transceptor altamente integrado PN532 que lida com a comunicação sem contato a 13,56 MHz. Você pode ler e gravar uma tag de 13,56 MHz com este módulo ou implementar troca de dados ponto a ponto com dois Xadow NFC. O Xadow NFC é projetado para usar os protocolos de comunicação I2C, SPI ou UART, e I2C é o modo padrão. Além disso, nós atribuimos uma antena PCB independente que pode facilmente se estender para fora de qualquer gabinete que você usar, deixando mais espaço para você projetar o exterior do seu projeto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

## Especificação
---
- Tensão de Funcionamento: 3,3 V
- Corrente de Funcionamento:
  - Modo Estático: 73 mA
  - Modo de Gravação/Leitura: 83 mA
- Interface do host suportada: I2C (padrão), SPI, UART.
- Serve para comunicação sem contato a 13,56 MHz.
- Suporta protocolos ISO14443 Tipo A e Tipo B.
- A distância máxima de operação para detectar tags NFC é de 28 mm dependendo do tamanho atual da antena.
- Suporta comunicação P2P.
- Dimensões: 25,43 mm x 20,35 mm

## Demonstração
---
Xadow NFC tem muitas capacidades, pois integra um controlador NFC PN532; nossa biblioteca Arduino oferece suporte a leitura/gravação de tags, comunicação telefone-para-Xadow NFC e emulação de tag neste momento, é um astro 3-em-1.

:::note:
    Quando o Xadow NFC estiver usando protocolos de comunicação SPI, já existe uma biblioteca que oferece suporte à comunicação telefone-para-Xadow NFC. O modo de comunicação padrão para este produto é I2C, portanto a biblioteca não pode ser usada diretamente.
:::
Antes de ler/gravar tags, o que você precisa preparar é a instalação de hardware e as bibliotecas.

- A instalação de hardware é mostrada abaixo:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg)

:::note:
    Ao conectar o Xadow - NFC à [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board), você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa se conectar ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::

- Baixe a [PN532 library](https://github.com/Seeed-Studio/PN532) e a [NDEF Library](https://github.com/don/NDEF). Não se esqueça de instalar essas bibliotecas na pasta de bibliotecas do Arduino. Se você ainda não souber claramente a operação, consulte [aqui](https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library) para ver mais detalhes.

:::note:
    Certifique-se de que você tenha as pastas - PN532, PN532_SPI, PN532_I2C, PN532_HSU e NDEF (da NDEF Library) na sua pasta de bibliotecas do Arduino.
:::
**Demo 1: Gravar mensagens na tag**

- Abra o código diretamente pelo caminho: File -> Example ->Ndef_dev->WriteTag.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg)

Neste código, a função message.addUriRecord("https://arduino.cc") é usada para gravar mensagem na tag. Você pode substituir a mensagem "https://arduino.cc" por uma nova mensagem. Por exemplo, inserimos "do you happy?" e "hello, world" usando esta função.

- Carregue o código e abra o Monitor Serial, ele pedirá que você coloque uma tag NFC na antena NFC. Após uma operação bem-sucedida, ele irá pedir que você leia a tag.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg)

**Demo 2: Ler tag**

Se você quiser saber se a operação de gravação que acabou de fazer foi bem-sucedida, você pode usar o código: ReadTag para verificar.

- Abra o código: ReadTag diretamente pelo caminho: File -> Example ->Ndef_dev->ReadTag e carregue-o para sua Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp)

- Abra o Monitor Serial para ver as informações da tag. A figura a seguir mostra o resultado da leitura:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg)

É essencial explicar uma mensagem NDEF para que se tenha um reconhecimento claro sobre a figura acima. Pode haver vários registros em uma mensagem NDEF. Para fins de análise, usamos apenas um registro NDEF.

**TNF(001)** - O valor do campo TNF indica a estrutura do valor do campo TYPE. O valor 0x01 (tipo bem conhecido do NFC Forum) indica que o campo TYPE contém um valor que segue o formato de nome de tipo RTD definido na especificação RTD do NFC Forum).

**Type Length** - O campo TYPE_LENGTH é um inteiro sem sinal de 8 bits que especifica o comprimento em octetos do campo TYPE. O campo TYPE_LENGTH é sempre zero para determinados valores do campo TNF.

**Pay load Length** - O campo PAYLOAD_LENGTH é um inteiro sem sinal que especifica o comprimento em octetos do campo PAYLOAD (a carga útil da aplicação). O tamanho do campo PAYLOAD_LENGTH é determinado pelo valor do sinalizador SR.

**Type(55)** - O valor do campo TYPE é um identificador que descreve o tipo da carga útil, o tipo de registro URI (“U”)

**Pay Load** - O restante da string em UTF-8


## Visualizador Online do Esquemático do Xadow NFC

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Visualizador Online do Esquemático da Antena do Xadow NFC

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos
---
- [Arquivo Eagle do Xadow NFC](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip)
- [Arquivo Eagle da Antena do Xadow NFC](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip)
- [PN532 Datasheet](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

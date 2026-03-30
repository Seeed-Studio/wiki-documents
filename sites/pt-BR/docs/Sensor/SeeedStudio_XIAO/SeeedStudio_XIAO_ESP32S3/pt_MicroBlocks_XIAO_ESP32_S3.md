---
description: Usando o XIAO ESP32-S3 no MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_microblocks/
---

# XIAO ESP32-S3 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem baseada em blocos que facilita para iniciantes (de 9 anos até adultos) programarem microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor que o MicroPython; capacidade de controlar pinos GPIO e se comunicar com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem o MicroBlocks para prototipagem e testes rápidos por causa de seu ciclo de desenvolvimento rápido e interativo.

## Pinagem e recursos de hardware do XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

Esta placa oferece conectividade Wi-Fi e BLE por meio de uma antena externa (fornecida).

A placa possui 11 pinos GPIO (pinos 0..10).
A versão Sense tem dois pinos GPIO extras na placa da câmera (pinos 11..12).
Os pinos 0..5 e 8..10 podem ser entradas analógicas.

O pino 13 é o LED amarelo de usuário (invertido).

A versão Sense inclui uma placa de extensão com uma câmera (uma câmera OV2640 com resolução de 1600x1200 ou uma OV3660 com resolução de 2048x1536) e um microfone digital.

**Observação: o suporte à câmera ainda não foi implementado no MicroBlocks, mas pode ser adicionado no futuro.**

## Instalando o firmware MicroBlocks

O firmware MicroBlocks para esta placa pode ser instalado diretamente a partir do editor MicroBlocks.

Conecte a placa ao computador com um cabo USB de dados (**não** um cabo somente para alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.

Ative o "advanced mode" no menu de engrenagem:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecione **install ESP firmware from microblocks.fun** no menu de engrenagem expandido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecione **xiao esp32 s3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

Quando solicitado, use o botão "Connect" (ícone de plugue) para abrir uma conexão USB com a placa. Quando o processo de instalação do firmware começar, um indicador de progresso aparecerá:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

A instalação do firmware leva de 30 a 60 segundos. Não altere as abas do navegador até que ela seja concluída.

Depois que o firmware estiver instalado, você poderá conectar a placa ao MicroBlocks e começar a programar!

## Modo bootloader

Geralmente não é necessário entrar manualmente no modo bootloader ao instalar o firmware MicroBlocks em placas ESP32.

Para entrar no modo bootloader, se necessário, mantenha pressionado o botão B (boot) enquanto pressiona e solta o botão R (reset).
Você também pode conectar a placa ao computador enquanto mantém o botão B pressionado.

**Os minúsculos botões B e R em cada lado do conector USB são difíceis de apertar;
talvez seja necessário usar a unha ou uma pequena ferramenta para pressioná-los.**

## Conectando a placa ao MicroBlocks

Conecte a placa ao computador com um cabo USB de dados (**não** um cabo somente para alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Observação:** Você também pode conectar sem fio selecionando **connect (BLE)** no menu de conexão.

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, então você pode testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado na memória flash persistente e pode ser executado mesmo quando a placa não está conectada ao editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é ligada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos internos, o MicroBlocks possui quase 200 bibliotecas
que oferecem suporte a recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplo

Este script fará o LED amarelo de usuário piscar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

A [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) inclui muitos exemplos adicionais.

## Demonstração de projeto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
Para uma demonstração mais abrangente, o maker [Zeller](https://www.hackster.io/Zeller) criou um Mood Player usando o XIAO ESP32S3, a XIAO Expansion Board, juntamente com os acessórios Grove Speaker e Grove Button. Com o MicroBlocks, você pode criar seus padrões e músicas favoritos sem escrever código complexo. Um tutorial passo a passo com instruções detalhadas pode ser encontrado no [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef).

## Agradecimentos especiais

Agradecimentos especiais ao John, do MicroBlocks, por escrever o artigo.

## Recursos do MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)

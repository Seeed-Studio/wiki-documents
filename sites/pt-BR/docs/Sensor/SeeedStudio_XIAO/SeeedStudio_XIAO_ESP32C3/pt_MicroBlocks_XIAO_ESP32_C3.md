---
description: XIAO ESP32-C3 com MicroBlocks
title: XIAO ESP32-C3 com MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_microblocks/
---

# XIAO ESP32-C3 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem baseada em blocos que facilita para iniciantes (dos 9 anos até adultos) programar microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor que o MicroPython; capacidade de controlar pinos GPIO e se comunicar com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem MicroBlocks para prototipagem rápida e testes por causa de seu ciclo de desenvolvimento rápido e interativo.

### Pinout e recursos de hardware do XIAO ESP32C3

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explore o pinout interativo</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

Esta placa oferece conectividade Wi-Fi e BLE por meio de uma antena externa (fornecida).

A placa possui 11 pinos GPIO (pinos 0..10). Os pinos 0..3 podem ser entradas analógicas.

Esta placa **não** tem um LED de usuário integrado;
conecte um LED externo entre o pino 10 e o terra para usar o bloco MicroBlocks "set user LED".

### Instalando o firmware MicroBlocks

O firmware MicroBlocks para esta placa pode ser instalado diretamente a partir do editor MicroBlocks.

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo apenas de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.

Ative o "advanced mode" no menu de engrenagem:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecione **install ESP firmware from microblocks.fun** no menu de engrenagem expandido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecione **xiao_esp32_c3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

Quando solicitado, use o botão "Connect" (ícone de plugue) para abrir uma conexão USB com a placa. Quando o processo de instalação do firmware começar, um indicador de progresso aparecerá:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

A instalação do firmware leva de 30 a 60 segundos. Não alterne as abas do navegador até que esteja concluída.

Depois que o firmware estiver instalado, você pode conectar a placa ao MicroBlocks e começar a programar!

## Modo bootloader

Geralmente não é necessário entrar manualmente no modo bootloader ao instalar o firmware MicroBlocks em placas ESP32.

Para entrar no modo bootloader, se necessário, mantenha pressionado o botão B (boot)
enquanto pressiona e solta o botão R (reset).
Você também pode conectar a placa ao seu computador enquanto mantém pressionado o botão B.

## Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo apenas de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Observação:** você também pode conectar sem fio selecionando **connect (BLE)** no menu de conexão.

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## Programando em MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, para que você possa testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado em memória flash persistente e pode ser executado mesmo quando a placa está
desconectada do editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é ligada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas
que oferecem suporte a recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplo

Embora esta placa não tenha um LED de usuário integrado,
se você conectar um LED entre o pino 10 e o terra, este script irá fazê-lo piscar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

A [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
inclui muitos exemplos adicionais.

## Agradecimentos especiais

Agradecimentos especiais ao John, da MicroBlocks, por escrever o artigo.

## Recursos MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)

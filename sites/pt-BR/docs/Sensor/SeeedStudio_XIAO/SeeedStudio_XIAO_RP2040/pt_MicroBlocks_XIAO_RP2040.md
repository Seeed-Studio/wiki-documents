---
description: Usando o XIAO RP2040 no MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2040_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2040_microblocks/
---

# XIAO RP2040 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem baseada em blocos que facilita para iniciantes (de 9 anos até adultos) a programação de microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor que o MicroPython; capacidade de controlar pinos GPIO e interagir com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem MicroBlocks para prototipagem e testes rápidos por causa de seu ciclo de desenvolvimento interativo e ágil.

### Pinout e recursos de hardware do XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-overview.jpg" style={{width:600, height:'auto'}}/></div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-pinout.png" style={{width:700, height:'auto'}}/></div><br />

Esta placa possui 11 pinos GPIO (pinos 0..10). Os pinos 0..3 podem ser entradas analógicas.
Ela também possui três pequenos LEDs: vermelho (pino 11, o LED do usuário), verde (pino 12) e azul (pino 13).
Todos os LEDs são invertidos: defina o pino associado como LOW para acender o LED.

Esta placa também possui um único LED RGB (NeoPixel) no pino 14.

## Instalando o firmware do MicroBlocks

Para entrar no modo bootloader, mantenha pressionado o botão B (boot) enquanto clica no botão R (reset).
Os três LEDs acenderão e uma unidade USB virtual chamada **RPI-RP2** aparecerá.

Baixe o [arquivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2040.uf2),
da [pasta vm](https://microblocks.fun/downloads/latest/vm)
e então arraste o arquivo para a unidade USB virtual.

O firmware será instalado e, após alguns segundos, a unidade USB virtual desaparecerá.
Você pode ignorar qualquer aviso de que o disco não foi ejetado corretamente.

## Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo apenas de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2040.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2040.png" style={{width:200, height:'auto'}}/></div>

## Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, para que você possa testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado na memória flash persistente e pode ser executado mesmo quando a placa
não está conectada ao editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é ligada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas
que oferecem suporte a recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplos

Este script fará os LEDs vermelho, azul e verde se alternarem em ciclo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

Este script fará o NeoPixel RGB mudar de cor:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-neopixel.png" style={{width:300, height:'auto'}}/></div>

A [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
inclui muitos exemplos adicionais.

## Agradecimentos especiais

Agradecimentos especiais ao John, da MicroBlocks, por escrever o artigo.

## Recursos do MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)

---
description: Usando o XIAO RP2350 no MicroBlocks.
title: XIAO RP2350 com MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2350_microblocks/
---

## XIAO RP2350 com MicroBlocks

### MicroBlocks

MicroBlocks é uma linguagem em blocos que torna fácil para iniciantes (de 9 anos até adultos) programarem microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor que o MicroPython; capacidade de controlar os pinos GPIO e de interagir com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem MicroBlocks para prototipagem rápida e testes por causa de seu ciclo de desenvolvimento rápido e interativo.

### Pinout e recursos de hardware do XIAO RP2350

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

Os pinos 0..18 são pinos GPIO. (**Observação: GPIO 11-18 são pads na parte de trás da placa.**)
Os pinos 0..2 podem ser entradas analógicas. Esta placa tem um LED amarelo de usuário no pino 19 (invertido)
e um único LED RGB (NeoPixel) no pino 20.

### Instalando o firmware do MicroBlocks

Para entrar no modo bootloader, mantenha pressionado o pequeno botão B (boot) enquanto clica no botão R (reset). Uma unidade USB virtual chamada **RP2350** irá aparecer.

Baixe o [arquivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2),
na [pasta vm](https://microblocks.fun/downloads/latest/vm)
e então arraste o arquivo para a unidade USB virtual.

O firmware será instalado e, após alguns segundos, a unidade USB virtual desaparecerá.
Você pode ignorar qualquer aviso de que o disco não foi ejetado corretamente.

### Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo somente de energia).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, para que você possa testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado em memória flash persistente e pode ser executado mesmo quando a placa
não está conectada ao editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é ligada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas
que oferecem suporte a recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

### Exemplos

Este script fará o LED amarelo de usuário piscar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

Este script fará o NeoPixel RGB mudar de cor:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

A [referência dos blocos](https://wiki.microblocks.fun/en/reference_manual)
inclui muitos outros exemplos.

## Agradecimentos Especiais

Agradecimentos especiais ao John, do MicroBlocks, por escrever o artigo.

### Recursos do MicroBlocks

- [Website](https://microblocks.fun)

- [Guia do Usuário](https://wiki.microblocks.fun/en/ide)

- [Referência dos Blocos](https://wiki.microblocks.fun/en/reference_manual)

- [Referência das Bibliotecas](https://wiki.microblocks.fun/en/libraries)

- [Guias de Aprendizagem](https://learn.microblocks.fun)

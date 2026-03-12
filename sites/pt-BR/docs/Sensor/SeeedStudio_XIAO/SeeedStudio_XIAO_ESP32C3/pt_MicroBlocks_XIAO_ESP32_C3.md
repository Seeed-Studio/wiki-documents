---
description: XIAO ESP32-C3 com MicroBlocks
title: XIAO ESP32-C3 com MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_microblocks/
---

# XIAO ESP32-C3 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem de blocos que facilita para iniciantes (de 9 anos a adultos) a programação de microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa com desempenho melhor que o MicroPython; a capacidade de controlar pinos GPIO e se comunicar com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns designers de hardware preferem MicroBlocks para prototipagem rápida e testes devido ao seu ciclo de desenvolvimento rápido e interativo.

### Pinagem e Recursos de Hardware do XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

Esta placa oferece conectividade Wi-Fi e BLE por meio de uma antena externa (fornecida).

A placa possui 11 pinos GPIO (pinos 0..10). Os pinos 0..3 podem ser entradas analógicas.

Esta placa **não** possui um LED de usuário integrado;
conecte um LED externo entre o pino 10 e o terra para usar o bloco "set user LED" do MicroBlocks.

### Instalando o Firmware do MicroBlocks

O firmware do MicroBlocks para esta placa pode ser instalado diretamente pelo editor do MicroBlocks.

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo somente de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.

Ative o "modo avançado" no menu de engrenagem:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecione **install ESP firmware from microblocks.fun** no menu de engrenagem expandido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecione **xiao_esp32_c3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

Quando solicitado, use o botão "Connect" (ícone de plugue) para abrir uma conexão USB com a placa. Quando o processo de instalação do firmware começar, um indicador de progresso será exibido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

A instalação do firmware leva de 30 a 60 segundos. Não troque de aba no navegador até que seja concluída.

Após a instalação do firmware, você pode conectar a placa ao MicroBlocks e começar a programar!

## Modo Bootloader

Geralmente não é necessário entrar manualmente no modo bootloader ao instalar o firmware do MicroBlocks em placas ESP32.

Para entrar no modo bootloader, se necessário, mantenha pressionado o botão B (boot)
enquanto pressiona e solta o botão R (reset).
Você também pode conectar a placa ao computador enquanto mantém o botão B pressionado.

## Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo somente de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Nota:** Você também pode conectar sem fio selecionando **connect (BLE)** no menu de conexão.

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, então você pode testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado na memória flash persistente e pode ser executado mesmo quando a placa não está
conectada ao editor do MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é ligada.

MicroBlocks suporta concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas
que suportam recursos adicionais e periféricos.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplo

Embora esta placa não possua um LED de usuário integrado,
se você conectar um LED entre o pino 10 e o terra, este script irá piscá-lo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

A [Referência de Blocos](https://wiki.microblocks.fun/en/reference_manual)
inclui muitos exemplos adicionais.

## Agradecimentos Especiais

Agradecimentos especiais a John do MicroBlocks por escrever o artigo.

## Recursos do MicroBlocks

- [Site](https://microblocks.fun)

- [Guia do Usuário](https://wiki.microblocks.fun/en/ide)

- [Referência de Blocos](https://wiki.microblocks.fun/en/reference_manual)

- [Referência de Bibliotecas](https://wiki.microblocks.fun/en/libraries)

- [Guias de Aprendizado](https://learn.microblocks.fun)

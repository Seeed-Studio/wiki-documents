---
description: Usando o XIAO nRF52840 no MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_ble_microblocks/
---

# XIAO nRF52840 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem em blocos que facilita para iniciantes (de 9 anos a adultos) programarem microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor do que o MicroPython; capacidade de controlar pinos GPIO e fazer interface com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem MicroBlocks para prototipagem rápida e testes por causa de seu ciclo de desenvolvimento rápido e interativo.

## Pinagem e Recursos de Hardware do XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

Uma grande vantagem desta placa é seu rádio Nordic de baixo consumo, que permite ao MicroBlocks programar a placa sem fio via Bluetooth Low Energy (BLE).

Os pinos 0..10 são pinos GPIO. Os pinos 0..5 podem ser entradas analógicas.
Esta placa também possui três minúsculos LEDs: vermelho (pino 11, o LED do usuário), azul (pino 12) e verde (pino 13).
Todos os LEDs são invertidos: defina o pino associado como LOW para acender o LED.

A versão Sense também inclui um microfone PDM onboard, sensor de temperatura e IMU LSM6DS3TR-C de 6 eixos, que são suportados pelas bibliotecas "Microphone", "Basic Sensors" e "Motion" do MicroBlocks.

## Instalando o Firmware do MicroBlocks

Para entrar no modo bootloader, clique rapidamente no botão de reset duas vezes.
(O botão de reset é bem pequenininho, localizado à esquerda da porta USB quando a porta está voltada para cima.)

Uma unidade USB virtual chamada **XIAO-SENSE** aparecerá.

Baixe o [arquivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2) na [pasta de firmware](https://microblocks.fun/downloads/latest/vm) do MicroBlocks e arraste o arquivo para a unidade USB virtual.

O firmware será instalado e, após alguns segundos, a unidade USB virtual desaparecerá.
Você pode ignorar qualquer aviso de que o disco não foi ejetado corretamente.

## Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo somente de energia).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Observação:** Você também pode conectar sem fio selecionando **connect (BLE)** no menu de conexão.

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Se o seu Xiao nRF52840 tiver sua própria fonte de alimentação, você também pode conectá-lo sem um cabo USB selecionando "connect (BLE)" no menu de conexão.

## Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, então você pode testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de scripts e monte-os para criar scripts.

Seu código é armazenado na memória flash persistente e pode ser executado mesmo quando a placa não está conectada ao editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é energizada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas que suportam recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplos

Este script fará o LED vermelho do usuário piscar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

Este script irá alternar entre os LEDs vermelho, azul e verde:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

A [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) inclui muitos exemplos adicionais.

## Agradecimentos Especiais

Agradecimentos especiais ao John, do MicroBlocks, por escrever o artigo.

## Recursos do MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)

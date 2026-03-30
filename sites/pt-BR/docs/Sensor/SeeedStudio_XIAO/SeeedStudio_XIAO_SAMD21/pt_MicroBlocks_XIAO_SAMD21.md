---
description: Usando o XIAO SAMD21 no MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_samd21_microblocks/
---

# XIAO SAMD21 com MicroBlocks

## MicroBlocks

MicroBlocks é uma linguagem baseada em blocos que facilita para iniciantes (dos 9 anos até adultos) a programação de microcontroladores. Apesar de sua aparente simplicidade, MicroBlocks é uma linguagem de programação poderosa, com desempenho melhor que MicroPython; capacidade de controlar pinos GPIO e interfacear com periféricos via I2C, SPI e serial; e quase 200 bibliotecas de extensão. Na verdade, alguns projetistas de hardware preferem MicroBlocks para prototipagem e testes rápidos por causa de seu ciclo de desenvolvimento rápido e interativo.

### Pinout e Recursos de Hardware do XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

Como todas as placas XIAO, esta placa possui 11 pinos GPIO, pinos 0..10. Todos os pinos podem ser usados para entrada analógica e saída digital e analógica.
Os pinos 1..10 suportam saída de modulação por largura de pulso (PWM), como em outras placas Xiao.

Diferente de outras placas, o pino 0 desta placa é um **conversor digital-para-analógico de 10 bits** (DAC). Definir o pino 0 para um número entre 0 e 1023 faz com que o pino forneça uma tensão constante entre 0 e 3,3 volts. (Em contraste, o PWM gera uma série de pulsos digitais em que o número determina a largura do pulso.) O pino DAC pode ser usado para gerar áudio ou outros sinais analógicos.

Esta placa possui um LED de usuário amarelo (pino 13) e LEDs RX/TX azuis (pinos 11 e 12).
Todos os LEDs são invertidos: defina o pino associado como LOW para acender o LED.

Os LEDs RX/TX podem ser usados pelo MicroBlocks, com uma ressalva.
MicroBlocks está trocando dados constantemente com a placa,
então os LEDs RX/TX piscariam intensamente ao usar o editor MicroBlocks.
Como essa piscada é distrativa, os LEDs RX/TX ficam desativados por padrão
e só são ativados quando um script define o pino associado.
Com isso em mente, os LEDs RX/TX podem ser úteis quando o IDE não está conectado.

## Instalando o Firmware do MicroBlocks

Entrar no modo bootloader nesta placa é complicado, já que não há botão de boot. Use um fio para fechar curto duas vezes, rapidamente, os dois contatos do pino RST à esquerda da porta USB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

Quando der certo, o LED de usuário amarelo vai acender e apagar lentamente,
e uma unidade USB virtual chamada **Arduino** aparecerá.

Baixe o [arquivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2),
na [pasta de firmware](https://microblocks.fun/downloads/latest/vm) do MicroBlocks
e então arraste o arquivo para a unidade USB virtual.

O firmware será instalado e, após alguns segundos, a unidade USB virtual desaparecerá.
Você pode ignorar qualquer aviso de que o disco não foi ejetado corretamente.

## Conectando a placa ao MicroBlocks

Conecte a placa ao seu computador com um cabo USB de dados (**não** um cabo apenas de alimentação).

Execute o [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) em um navegador Chrome ou Edge.
Clique no botão **connect** (ícone de plugue):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

Selecione **connect (USB)** no menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

Selecione sua placa na caixa de diálogo e clique no botão **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

Um círculo verde e o nome da placa aparecerão quando a placa estiver conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

## Programando no MicroBlocks

MicroBlocks é um ambiente de programação **ao vivo**, então você pode testar enquanto programa.
Clique em blocos e scripts para executá-los.
Arraste blocos para o painel de script e monte-os para criar scripts.

Seu código é armazenado na memória flash persistente e pode ser executado mesmo quando a placa
não está conectada ao editor MicroBlocks.
Scripts sob um bloco **when started** são executados quando a placa é energizada.

MicroBlocks oferece suporte a concorrência. Até dez scripts podem ser executados ao mesmo tempo.

Além de seus muitos blocos integrados, MicroBlocks possui quase 200 bibliotecas
que oferecem suporte a recursos e periféricos adicionais.
Clique no botão **Add Library** para adicionar bibliotecas.

## Exemplo

Este script fará o LED de usuário amarelo piscar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

A [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
inclui muitos exemplos adicionais.

## Demonstração de Projeto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

Para uma demonstração de projeto mais abrangente, o maker [Luis](https://www.hackster.io/luis_a_la_m) construiu um dispositivo Neo-pixel de LED 8x8 usando XIAO SAMD21, Grove Shield para XIAO e uma Matriz de LEDs, com o qual você pode usar o MicroBlocks para desenhar padrões de pixels impressionantes sem escrever código complexo. Um tutorial passo a passo pode ser encontrado no [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15).


## Agradecimentos Especiais

Agradecimentos especiais ao John, da MicroBlocks, por escrever o artigo.

## Recursos do MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)

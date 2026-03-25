---
description: Seeed Studio Round Display for XIAO-FAQ
title: Por que recebo um erro quando uso o XIAO nRF52840 (Sense)?
slug: /error_when_use_XIAOnRF52840
last_update:
  date: 6/30/2023
  author: cheng.tang
createdAt: '2023-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/error_when_use_XIAOnRF52840/
---
Ao usar o conteúdo deste tutorial, dois tipos diferentes de problemas podem ocorrer para o XIAO nRF52840.

1. Problemas de compatibilidade entre o nRF52840 e a biblioteca TFT.

  Se você estiver usando a biblioteca TFT, a compilação e o upload ocorrem sem qualquer erro, tudo muito suave. Mas, ao exibir, você percebe que não há nenhuma imagem. Então, você pode ter encontrado um problema de compatibilidade entre o nRF52840 e a biblioteca TFT. Isso significa que você só pode substituir o XIAO ou usar a biblioteca Arduino GFX para finalizar a imagem.

2. Erro de compilação causado por escolher a placa de desenvolvimento errada.

Se você estiver tendo problemas no processo de compilação. A mensagem de erro geralmente é sobre um erro de SPI, por exemplo `'SPI_X' was not declared in this scope`
. Então isso significa que você está escolhendo o tipo errado de placa de desenvolvimento. Para usar todo o conteúdo deste tutorial, você precisa usar a versão **non-mbed** do XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

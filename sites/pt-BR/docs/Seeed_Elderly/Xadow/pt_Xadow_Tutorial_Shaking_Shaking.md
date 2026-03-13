---
description: XadowTtutorial-Shaking Shaking
title: XadowTtutorial-Shaking Shaking
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Tutorial_Shaking_Shaking
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Tutorial_Shaking_Shaking/
---

Para esta demonstração, você precisa usar:

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow Barometer.

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Untitled.png)

Conecte-os com cabos FFC, então você precisa fazer algumas preparações que se referem às etapas da primeira demonstração. Diferente da demo1, você precisa baixar [a biblioteca:Smile](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip) e abrir diretamente o arquivo SMILE INO.

Funções desta demonstração: em circunstâncias normais, o OLED exibe o valor atual da pressão barométrica. Quando você sacode o Xadow Accelerometer, aparecerá um rosto sorridente na tela.

## Nota

Antes de enviar o código：smile para a Xadow main board, certifique-se de que existam as bibliotecas:OLED_Display12864 e [DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/DigitalAccelerometer_ADXL345.zip) na biblioteca do Arduino. Caso contrário, faça o download delas e coloque-as na pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0.1\libraries após descompactar. Não se esqueça de selecionar Seeed Xadow no menu Tools | Board do ambiente Arduino._

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_data.jpg)

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_smile.jpg)

## Recursos

[Código da Demo2 SMILE](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

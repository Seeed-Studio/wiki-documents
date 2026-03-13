---
description: Tutorial Xadow - Detector de Aceleração
title: Tutorial Xadow - Detector de Aceleração
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Tutorial_Acceleration_Detector
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Tutorial_Acceleration_Detector/
---
Nós fizemos um detector de aceleração; ele detecta a aceleração e lembra os usuários por meio de vibração. Quando a aceleração muda, o Xadow Vibration irá vibrar e o OLED exibirá o valor do acelerômetro. Você também pode ver a tensão atual da bateria na tela OLED.

Esta demo requer:

<!-- 
*   [Xadow Main Board](/pt-br/Xadow_Main_Board/)

*   [Xadow OLED](/pt-br/Xado_OLED_128multiply64)

*   [Xadow Vibrator Motor](https://wiki.seeedstudio.com/pt-br/Xadow_Vibrator_Motor/)

*   [Xadow Accelerometer](/pt-br/Xadow_3_Aixs_Accelerometer/) -->


![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Untitled2.jpg)

Para completar a demonstração, você precisa:

*   Conectar Xadow Main Board, Xadow OLED, Xadow Vibrator e Xadow Accelerometer na mesma direção com cabos FFC.

<!-- *   Connect Xadow Main Board to PC with a Micro USB cable. Before uploading code, you need to install Xadow driver. Please click [here](/pt-br/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board) to learn the specific operation. -->

*   Quando você vir "Now, you can program and use the Xadow as you use other Arduino boards", isso significa que você concluiu os preparativos.

*   Baixe [o arquivo: acceleDetector Library](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip) e abra diretamente o arquivo INO acceleDetector.

:::note
    Antes de compilar, você deve se certificar de que existem [a biblioteca:OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/OLED_Display12864.zip) e [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/Sleep_FromArduino.zip) na biblioteca do Arduino. Se não houver, faça o download delas e coloque-as na pasta libraries da IDE Arduino no caminho: ..\arduino-1.0.1\libraries depois de descompactar._
:::
*   Compile o código e faça o upload para a placa Xadow. Você precisa selecionar Seeed Xadow no menu Tools | Board do ambiente Arduino.
*   Então você poderá ver a imagem a seguir:

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Demo_1_effect_picture.jpg)

Mude o valor de aceleração chacoalhando o sensor; você verá o valor do sensor no módulo OLED

##  Recursos

[Código Demo1 acceleDetector](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

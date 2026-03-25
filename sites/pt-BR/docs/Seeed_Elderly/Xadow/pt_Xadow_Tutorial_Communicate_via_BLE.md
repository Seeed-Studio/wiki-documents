---
description: Tutorial Xadow - Comunicação via BLE
title: Tutorial Xadow - Comunicação via BLE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Tutorial_Communicate_via_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Tutorial_Communicate_via_BLE/
---
Você já pensou na seguinte cena: abrir o telefone e ver a pressão barométrica atual ou a aceleração de movimento? O módulo Xadow pode ajudá-lo a alcançar isso.

Para esta demonstração, você precisa usar o

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow BLE Slave

Se você já aprendeu a realizar o Demo 1 e o Demo 2, só precisa conectar os módulos Xadow Main Board, Xadow OLED, Xadow Accelerometer e Xadow BLE Slave e baixar [o código:BLE_Slave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip).

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg)

Agora você pode abrir o arquivo INO do BLE_Slave, compilar e fazer o upload.

<!-- If you are just starting to use, please install Xadow driver referring to [here](/pt-br/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board). And ready to download the library:[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/DigitalAccelerometer_ADXL345.zip) and [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/Sleep_FromArduino.zip) and put them on the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries after unzip._ -->
<!-- Now you can open your phone's bluetooth for observing data. When the accelerometer value is changed, then the bluetooth serial  will display real-time data. Note that your phone's bluetooth should be bluetooth 4.0 (iphone4S or above)and you need to download bluetooth serial tools. For more information, please refer to [the usage of Xadow BLE Slave](/pt-br/Xadow_BLE_Slave#Usage). -->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg)

Você pode ver que há dois comandos (ledon e ledoff) na tela do telefone. Eles são usados para controlar o estado do indicador VERDE. Experimente!

##  Recursos

[Código Demo3 BLESlave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

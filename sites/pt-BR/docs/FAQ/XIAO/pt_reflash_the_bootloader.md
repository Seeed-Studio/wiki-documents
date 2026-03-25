---
description: XIAO ESP32C3-FAQ
title: Como regravar o bootloader com o firmware de fábrica
slug: /reflash_the_bootloader
last_update:
  date: 6/30/2023
  author: cheng.tang
createdAt: '2023-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reflash_the_bootloader/
---
Você pode simplesmente conectar a placa a um PC via **USB Type-C** e regravar o bootloader com o firmware de fábrica usando a **ESP RF Test Tool**.

- **Passo 1.** Mantenha pressionado o **BOTÃO BOOT** e conecte o XIAO ESP32C3 ao PC para entrar no **modo bootloader**

- **Passo 2.** Depois que estiver conectado, solte o BOTÃO BOOT

- **Passo 3.** Visite [esta página](https://www.espressif.com/en/support/download/other-tools) e baixe **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 4.** Extraia o arquivo **.zip**, navegue até `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` e abra **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Passo 5.** Selecione **ESP32C3** como ChipType, sua porta COM, **115200** como BaudRate e clique em **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Você verá a seguinte saída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Passo 6.** Selecione **Flash** e clique em **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Passo 7.** Baixe o [firmware de fábrica do XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) e selecione-o.

- **Passo 8.** Por fim, clique em **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Você verá a seguinte saída quando a gravação for concluída com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>
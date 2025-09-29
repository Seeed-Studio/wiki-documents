---
description: XIAO ESP32C3-FAQ
title: Cómo volver a flashear el bootloader con firmware de fábrica
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reflash_the_bootloader
last_update:
  date: 6/30/2023
  author: cheng.tang
---
Puedes simplemente conectar la placa a una PC vía **USB Type-C** y volver a flashear el bootloader con firmware de fábrica usando **ESP RF Test Tool**.

- **Paso 1.** Mantén presionado el **BOTÓN BOOT** y conecta XIAO ESP32C3 a la PC para entrar en **modo bootloader**

- **Paso 2.** Después de que esté conectado, suelta el BOTÓN BOOT

- **Paso 3.** Visita [esta página](https://www.espressif.com/en/support/download/other-tools) y descarga **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el **.zip**, navega a `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` y abre **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Paso 5.** Selecciona **ESP32C3** como ChipType, tu puerto COM, **115200** como BaudRate y haz clic en **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Paso 6.** Selecciona **Flash** y haz clic en **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Paso 7.** Descarga el [firmware de fábrica de XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) y selecciónalo.

- **Paso 8.** Finalmente haz clic en **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida cuando el flasheo sea exitoso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>
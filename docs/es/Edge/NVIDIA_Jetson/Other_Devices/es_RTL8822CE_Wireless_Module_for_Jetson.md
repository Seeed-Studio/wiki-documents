---
description: Este wiki presenta las características y especificaciones del módulo inalámbrico RTL8822CE, un módulo inalámbrico M.2 de banda dual Wi-Fi y Bluetooth v5.0 compatible con varios dispositivos embebidos (por ejemplo, reComputer J4012). El artículo proporciona información detallada sobre sus especificaciones técnicas, dispositivos compatibles, pasos de instalación de hardware y métodos para configurar redes inalámbricas y Bluetooth a través de la interfaz de escritorio o línea de comandos.
title: Módulo Inalámbrico RTL8822CE para Jetson
keywords:
  - Edge
  - reComputer
  - Wifi
  - Bluetooth
  - Wireless 
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.webp
slug: /es/rtl8822ce_wireless_module_for_jetson
last_update:
  date: 12/3/2024
  author: Youjiang
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/RTL8822CE_Wireless_NIC_for_Jetson.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8822CE-WIFI-Module-p-6313.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span>
    </strong>
  </a>
</div>


El RTL8822CE es una tarjeta M.2 compacta de banda dual WLAN+Bluetooth Combo que integra un subsistema WLAN de banda dual 2T2R con controladores PCI Express y un subsistema Bluetooth v5.0 con soporte USB. Compatible con los estándares IEEE 802.11 a/b/g/n/ac, ofrece una velocidad PHY máxima de hasta 867 Mbps y soporta modo dual Bluetooth (v5.0/v4.2/v2.1). Ideal para conectividad inalámbrica y Bluetooth de alto rendimiento para usar con dispositivos embebidos como [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

## Características

- Soporta banda dual 2.4G/5GHz
- La velocidad PHY inalámbrica puede alcanzar hasta 867Mbps
- Estándares IEEE: IEEE 802.11a/b/g/n/ac
- Factor de forma: M.2 2230 genérico clave A o clave E
- Conecta a antena externa a través de conectores MHF4
- Fuente de alimentación: fuente de alimentación DC3.3V±0.2V
- Soporta Linux, Windows 10/11, etc.

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>Estándares WLAN</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>Especificación BT</td>
      <td>Especificación Core Bluetooth v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>Interfaz Host</td>
      <td>PCI Express 2.1 para WLAN y USB2.0 FS para Bluetooth</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Conecta a las antenas externas a través del conector MHF4</td>
    </tr>
    <tr>
      <td>Dimensión</td>
      <td>M.2 30*22*2.15mm (L*W*H)</td>
    </tr>
    <tr>
      <td>Fuente de Alimentación</td>
      <td>DC 3.3V±0.2V@ 1000mA(Máx)</td>
    </tr>
    <tr>
      <td>Temperatura de Operación</td>
      <td>-20℃ a +70℃</td>
    </tr>
    <tr>
      <td>Humedad de Operación</td>
      <td>10% a 95% RH (Sin Condensación)</td>
    </tr>
    </table>
</div>

## Dispositivos Compatibles

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## Conexión de Hardware

:::danger
En este wiki, usaremos el reComputer J4012 como ejemplo para demostrar cómo instalar y configurar un módulo inalámbrico RTL8822CE en un dispositivo Jetson.
:::

Paso 1. Prepara todos los materiales que se utilizarán.

- reComputer J4012 equipado con Jetpack 5.1.2
- Módulo Wi-Fi Infineon

Paso 2. Inserta el módulo inalámbrico en el puerto M.2 Key E.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## Configurar el Módulo Inalámbrico

Podemos acceder directamente al escritorio de Jetson y conectarnos a la red wifi a través de `Settings` --> `WiFi`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

También podemos configurar Bluetooth a través de `Settings` --> `Bluetooth`.

:::info
Adicionalmente, podemos configurar el módulo inalámbrico a través de la línea de comandos, como usar el comando `bluetoothctl` para configurar dispositivos Bluetooth.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

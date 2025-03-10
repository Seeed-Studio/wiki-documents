---
description: Esta wiki presenta las características y especificaciones del módulo inalámbrico RTL8822CE, un módulo inalámbrico M.2 de banda dual Wi-Fi y Bluetooth v5.0 compatible con varios dispositivos integrados (por ejemplo, reComputer J4012). El artículo proporciona información detallada sobre sus especificaciones técnicas, dispositivos compatibles, pasos de instalación de hardware y métodos para configurar redes inalámbricas y Bluetooth a través de la interfaz de escritorio o la línea de comandos.
title: Módulo inalámbrico RTL8822CE para dispositivos Jetson
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

<!-- Need to jump button  -->

La RTL8822CE es una tarjeta compacta M.2 combinada WLAN+Bluetooth de doble banda que integra un subsistema WLAN de doble banda 2T2R con controladores PCI Express y un subsistema Bluetooth v5.0 con soporte USB. Compatible con los estándares IEEE 802.11 a/b/g/n/ac, ofrece una velocidad PHY máxima de hasta 867 Mbps y admite el modo dual Bluetooth (v5.0/v4.2/v2.1). Ideal para conectividad inalámbrica y Bluetooth de alto rendimiento para usar con dispositivos integrados como [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).



## Características
- Admite doble banda 2,4G/5GHz
- La velocidad PHY inalámbrica puede alcanzar hasta 867 Mbps
- Estándares IEEE: IEEE 802.11a/b/g/n/ac
- Factor de forma: M.2 2230 generic A key o E key
- Conexión a antena externa a través de conectores MHF4
- Fuente de alimentación: Fuente de alimentación DC3.3V±0.2V
- Compatible con Linux, Windows 10/11, etc.

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
      <td>Bluetooth Core v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>Interfaz Host</td>
      <td>PCI Express 2.1 para WLAN y USB2.0 FS para Bluetooth</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Conexión a las antenas externas a través del conector MHF4.</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td>M.2 30*22*2.15mm (L*W*H)</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>DC 3.3V±0.2V@ 1000mA(Max)</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td>-20℃ to +70℃</td>
    </tr>
    <tr>
      <td>Humedad de operación</td>
      <td>10% to 95% RH</td>
    </tr>
    </table>
</div>

## Dispositivos soportados

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## Conexión de Hardware

:::Peligro
En esta wiki, usaremos la reComputer J4012 como ejemplo para demostrar cómo instalar y configurar un módulo inalámbrico RTL8822CE en un dispositivo Jetson.
:::

Pas 1. Prepara todos los materiales que se necesitarán.

- reComputer J4012 equipada con Jetpack 5.1.2
- Módulo Infineon Wi-Fi

Paso 2. Inserta el módulo inalámbrico en el puerto M.2 Key E.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## Configura el módulo inalámbrico

Podemos acceder directamente al escritorio de Jetson y conectarnos a la red wifi a través de `Settings` --> `WiFi`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

También podemos configurar el Bluetooth a través de `Settings` --> `Bluetooth`.

:::info
Además, podemos configurar el módulo inalámbrico a través de la línea de comandos, como usar el comando `bluetoothctl` para configurar dispositivos Bluetooth.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::



## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


---
description: Este wiki apresenta os recursos e especificações do módulo sem fio RTL8822CE, um módulo sem fio M.2 Wi-Fi de banda dupla e Bluetooth v5.0 compatível com vários dispositivos embarcados (por exemplo, reComputer J4012). O artigo fornece informações detalhadas sobre suas especificações técnicas, dispositivos compatíveis, etapas de instalação de hardware e métodos para configurar redes sem fio e Bluetooth pela interface desktop ou linha de comando.
title: Módulo Sem Fio RTL8822CE para Jetson
keywords:
  - Edge
  - reComputer
  - Wifi
  - Bluetooth
  - Wireless
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.webp
slug: /rtl8822ce_wireless_module_for_jetson
sku: 114993556,E24121001
last_update:
  date: 12/3/2024
  author: Youjiang
createdAt: '2024-12-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/rtl8822ce_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/RTL8822CE_Wireless_NIC_for_Jetson.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8822CE-WIFI-Module-p-6313.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span>
    </strong>
  </a>
</div>


O RTL8822CE é uma placa compacta M.2 Dual-band WLAN+Bluetooth Combo que integra um subsistema WLAN Dual-band 2T2R com controladores PCI Express e um subsistema Bluetooth v5.0 com suporte USB. Compatível com os padrões IEEE 802.11 a/b/g/n/ac, oferece uma taxa PHY máxima de até 867 Mbps e suporta modo duplo Bluetooth (v5.0/v4.2/v2.1). Ideal para conectividade sem fio e Bluetooth de alto desempenho com dispositivos embarcados, como o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

## Recursos

- Suporta banda dupla 2.4G/5GHz
- A taxa PHY sem fio pode atingir até 867 Mbps
- Padrões IEEE: IEEE 802.11a/b/g/n/ac
- Fator de forma: M.2 2230 genérico chave A ou chave E
- Conexão à antena externa por meio de conectores MHF4
- Fonte de alimentação: fonte de alimentação DC 3,3V±0,2V
- Suporta Linux, Windows 10/11, etc.

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>Padrões WLAN</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>Especificação BT</td>
      <td>Bluetooth Core Specification v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>Interface do Host</td>
      <td>PCI Express 2.1 para WLAN e USB2.0 FS para Bluetooth</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Conecta-se às antenas externas através de conector MHF4</td>
    </tr>
    <tr>
      <td>Dimensão</td>
      <td>M.2 30*22*2.15mm (C*L*A)</td>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td>DC 3.3V±0.2V@ 1000mA (Máx)</td>
    </tr>
    <tr>
      <td>Temperatura de Operação</td>
      <td>-20℃ a +70℃</td>
    </tr>
    <tr>
      <td>Umidade de Operação</td>
      <td>10% a 95% RH (sem condensação)</td>
    </tr>
    </table>
</div>

## Dispositivos Compatíveis

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## Conexão de Hardware

:::danger
Neste wiki, usaremos o reComputer J4012 como exemplo para demonstrar como instalar e configurar um módulo sem fio RTL8822CE em um dispositivo Jetson.
:::

Passo 1. Prepare todos os materiais que serão usados.

- reComputer J4012 equipado com Jetpack 5.1.2
- Módulo Wi-Fi Infineon

Passo 2. Insira o módulo sem fio na porta M.2 Key E.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## Configurar o Módulo Sem Fio

Podemos acessar diretamente o desktop do Jetson e conectar à rede Wi-Fi através de `Settings` --> `WiFi`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

Também podemos configurar o Bluetooth através de `Settings` --> `Bluetooth`.

:::info
Além disso, podemos configurar o módulo sem fio via linha de comando, como usar o comando `bluetoothctl` para configurar dispositivos Bluetooth.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este wiki apresenta os recursos e especificações do módulo sem fio RTL8852BE, um módulo sem fio Wi-Fi 6 e Bluetooth M.2 compatível com dispositivos NVIDIA Jetson. O artigo fornece informações detalhadas sobre suas especificações técnicas, instalação de driver para JetPack 5 e JetPack 6, e métodos para configurar redes sem fio e Bluetooth.
title: Módulo Sem Fio RTL8852BE para Jetson
keywords:
  - Edge
  - reComputer
  - Wifi
  - Wifi 6
  - Bluetooth
  - Wireless
  - RTL8852BE
slug: /rtl8852be_wireless_module_for_jetson
last_update:
  date: 4/14/2026
  author: Zibo
createdAt: '2026-04-14'
updatedAt: '2026-04-14'
sku: 100042928
url: https://wiki.seeedstudio.com/pt-br/rtl8852be_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/8852be.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span>
    </strong>
  </a>
</div>



O RTL8852BE é um módulo sem fio M.2 Wi-Fi 6 (802.11ax) baseado no chipset Realtek. Ele integra uma interface PCIe para WLAN e uma interface USB para Bluetooth, oferecendo taxa de transferência significativamente maior e menor latência em comparação com módulos Wi-Fi 5 de geração anterior. É ideal para dispositivos embarcados como o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) que exigem conectividade sem fio de alto desempenho.

## Recursos

- Suporta banda dupla 2,4 GHz / 5 GHz
- IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)
- Taxa PHY de até 1200 Mbps na banda de 5 GHz
- Fator de forma: M.2 2230, chave A ou chave E
- Alimentação: DC 3,3 V
- Suporta Linux (JetPack 5 / JetPack 6), Windows 10/11

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**RTL8852BE**</td>
    </tr>
    <tr>
      <td>Padrões WLAN</td>
      <td>IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)</td>
    </tr>
    <tr>
      <td>Especificação BT</td>
      <td>Bluetooth 5.2</td>
    </tr>
    <tr>
      <td>Interface do Host</td>
      <td>PCIe 2.1/2.0 para WLAN e USB 2.0 para Bluetooth</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Conecta às antenas externas por meio de conector MHF4</td>
    </tr>
    <tr>
      <td>Dimensão</td>
      <td>M.2 2230 (22 x 30 x 2,15 mm)</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td>DC 3,3 V</td>
    </tr>
    <tr>
      <td>Velocidade Máxima Sem Fio</td>
      <td>Até 1200 Mbps</td>
    </tr>
    <tr>
      <td>Temperatura de Operação</td>
      <td>-20°C a +70°C</td>
    </tr>
    <tr>
      <td>Umidade de Operação</td>
      <td>10% a 95% UR (sem condensação)</td>
    </tr>
    </table>
</div>

## Dispositivos Suportados

Toda a linha reComputer

- Toda a linha reComputer

## Instalação do Driver

O módulo RTL8852BE pode ser detectado pelo Jetson como um dispositivo PCIe, mas talvez não tenha seu driver carregado automaticamente. Você precisará instalar o driver manualmente, dependendo da sua versão do JetPack.

```bash
lspci | grep -i network
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/lspci.PNG"/>
</div>



### JetPack 5.x

Para JetPack 5, use o driver [lwfinger/rtw8852be](https://github.com/lwfinger/rtw8852be):

```bash
git clone https://github.com/lwfinger/rtw8852be.git
cd rtw8852be/
sudo apt-get update
sudo apt-get install make gcc linux-headers-$(uname -r) build-essential git
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp5_install.png"/>
</div>

```bash
make
sudo make install
sudo modprobe 8852be
```

### JetPack 6.x

Para JetPack 6, use o driver [rtw89](https://github.com/a5a5aa555oo/rtw89):

```bash
git clone https://github.com/a5a5aa555oo/rtw89
cd rtw89
```

Edite o `Makefile` para definir o caminho correto dos cabeçalhos do kernel:

```diff
# JP 6.2
KDIR ?= /usr/src/linux-headers-5.15.148-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/

# JP 6.0
KDIR ?= /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/makefile.png"/>
</div>

Em seguida, compile e instale:

```bash
make
sudo make install
sudo modprobe rtw89_8852be
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp6_install.png"/>
</div>
## Verificar o Módulo Sem Fio
:::info
O nome da interface pode variar dependendo da versão do JetPack:

- JetPack 5: normalmente `wlan0`
- JetPack 6: pode aparecer como `wlP1p1s0`

Ajuste o nome da interface nos comandos abaixo de acordo. Use o seguinte comando para descobrir:
```bash
ifconfig
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/interface.png"/>
</div>

:::

## Configurar a Rede Sem Fio

### Verificar Redes WiFi Próximas

```bash
sudo iw dev wlan0 scan | grep -E "SSID|freq"
```

Substitua `wlan0` pelo nome real da sua interface, se for diferente.

### Conectar a uma Rede WiFi

```bash
sudo nmcli device wifi connect "YOUR_SSID" password "YOUR_PASSWORD" ifname wlan0
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/link_wifi.PNG"/>
</div>

### Verificar Conexão WiFi 6

Verifique o status atual do link:

```bash
iw dev wlan0 link
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/veryfiy_wifi6.PNG"/>
</div>

A saída mostrará informações como:

- **freq**: A frequência de operação (por exemplo, 5180 MHz corresponde à banda de 5 GHz)
- **HE-MCS**: O esquema de modulação e codificação Wi-Fi 6 (por exemplo, MCS 9 representa a maior eficiência de codificação)
- **TX/RX rate**: As velocidades atuais de transmissão e recepção

## Configuração de Bluetooth

A funcionalidade Bluetooth do módulo RTL8852BE pode ser configurada usando `bluetoothctl`:

```bash
bluetoothctl
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/bluetooth.png"/>
</div>
## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

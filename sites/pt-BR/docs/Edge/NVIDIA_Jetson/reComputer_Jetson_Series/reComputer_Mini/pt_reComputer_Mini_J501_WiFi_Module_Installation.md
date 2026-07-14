---
description: Desmonte o gabinete do reComputer Mini J501 e instale ou substitua um módulo Wi‑Fi no slot M.2 Key E
title: Instalação do Módulo WiFi no reComputer Mini J501
keywords:
  - reComputer Mini
  - J501
  - WiFi
  - SSD
  - NVMe
  - M.2 Key E
  - M.2 Key M
  - AGX Orin
  - Jetson AGX Orin
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_mini_j501_wifi_module_installation
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 100042928, 114993556, 100020039
createdAt: '2026-06-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/pt-br/recomputer_mini_j501_wifi_module_installation/
---

## Introdução

Neste documento, você aprenderá como desmontar o **reComputer Mini J501** e instalar ou substituir um **módulo Wi‑Fi** (M.2 Key E).

O slot Wi‑Fi fica na parte inferior da **placa carrier do reComputer Mini J501**. A **placa de expansão traseira** cobre o slot **M.2 Key E** e deve ser removida para manutenção do Wi‑Fi. A **placa de expansão superior** possui recortes que expõem os parafusos de fixação da placa carrier, portanto não precisa ser removida durante a manutenção. As mesmas etapas de desmontagem, passando pela remoção da placa carrier, também se aplicam à substituição do **SSD NVMe** (M.2 Key M) — a placa de expansão traseira não cobre esse slot.

:::warning
Desligue o dispositivo e desconecte todos os cabos (incluindo entrada DC e Ethernet) antes da desmontagem. Use manuseio seguro contra ESD ao tocar na placa carrier e nos módulos M.2.
:::

## reComputer Mini (J501)

O **reComputer Mini J501** usa a **placa carrier Robotics J501 Mini** com módulos **NVIDIA Jetson AGX Orin** (32GB/64GB), oferecendo até **275 TOPS** de desempenho de IA em um gabinete industrial compacto. A placa carrier fornece Ethernet dupla, USB 3.2, DisplayPort e slots de expansão M.2, incluindo **M.2 Key E** para Wi‑Fi/BT.

<div align="center">
  <img width ="600" alt="Placa carrier reComputer Mini J501 para Jetson AGX Orin" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span>
    </strong>
  </a>
</div>
<br />

Para especificações do dispositivo, gravação do JetPack e uso das interfaces, consulte [Hardware e Guia de Introdução da placa carrier Robotics J501 Mini](https://wiki.seeedstudio.com/pt-br/recomputer_j501_mini_getting_started/).

## Módulo Wi‑Fi

Recomendamos usar um módulo Wi‑Fi/BT Realtek M.2 Key E compatível com Jetson (por exemplo, RTL8852BE).

<div align="center">
  <img width ="600" alt="Módulo Realtek M.2 Key E WiFi e Bluetooth para Jetson" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_07.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span>
    </strong>
  </a>
</div>

## Conexão de Hardware

:::info
Este guia se concentra na instalação do **módulo Wi‑Fi**. Para substituir o **SSD NVMe**, siga apenas as Etapas 2–3 — ignore a Etapa 4 (remoção da placa de expansão traseira).
:::

**Etapa 1.** Prepare todos os materiais que serão usados.

- Gabinete do reComputer Mini J501 (desligado)
- Módulo Wi‑Fi/BT M.2 Key E compatível
- Cabo(s) de antena IPEX (geralmente incluído(s) com o módulo Wi‑Fi)
- Chave de fenda Phillips

### Desmonte o Gabinete do J501

**Etapa 2.** Remova a tampa superior do gabinete.

<div align="center"><img width ="800" alt="reComputer Mini J501 com a tampa superior do gabinete removida" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_01.png?v=2"/></div>

**Etapa 3.** Remova a placa carrier principal.

Remova todos os **quatro parafusos de fixação dos cantos** na placa carrier (marcados em vermelho abaixo).

<div align="center"><img width ="800" alt="Quatro parafusos de fixação nos cantos da placa carrier J501 marcados em vermelho" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_02.png"/></div>

- Levante cuidadosamente a placa carrier para fora do chassi.
- Coloque a placa sobre uma superfície limpa e não condutiva.

<div align="center"><img width ="800" alt="Placa carrier J501 removida do chassi e colocada em uma superfície de trabalho" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_03.png"/></div>

**Etapa 4.** Remova a placa de expansão **traseira** *(apenas para instalação do Wi‑Fi)*.

Vire a placa carrier de modo que o **lado inferior** fique voltado para cima. Uma **placa de expansão traseira** está conectada à parte de trás por conectores placa a placa e bloqueia o acesso ao slot **M.2 Key E**. Ignore esta etapa se você estiver apenas substituindo o SSD NVMe no slot **M.2 Key M**.

<div align="center"><img width ="800" alt="Placa carrier J501 virada com a placa de expansão traseira ainda conectada por conectores placa a placa" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_04.png"/></div>

- Puxe suavemente a placa de expansão traseira para longe dos conectores da placa carrier.
- Separe a placa de expansão traseira.

O slot **M.2 Key E** (WiFi/BT) agora está acessível. As etapas abaixo cobrem a instalação do módulo Wi‑Fi.

<div align="center"><img width ="800" alt="Slot WiFi M.2 Key E atrás da área da placa de expansão traseira e slot M.2 Key M do SSD NVMe acessível na parte de trás da placa carrier J501" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_05.png"/></div>

### Instale o Módulo Wi‑Fi

**Etapa 5.** Insira o módulo sem fio na porta **M.2 Key E** no ângulo correto (normalmente 30°), depois pressione para baixo e fixe com o parafuso de montagem.

**Etapa 6.** Conecte o(s) **cabo(s) de antena IPEX** ao módulo. Direcione os cabos longe das blindagens metálicas e dos furos dos parafusos para que não sejam prensados durante a remontagem.

<div align="center">
  <img width ="1000" alt="Módulo WiFi instalado no slot M.2 Key E com cabo de antena IPEX conectado na placa carrier J501" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_06.png"/>
</div>

### Remonte o Gabinete do J501

**Etapa 7.** Remonte o dispositivo na ordem inversa:

1. Se você a removeu, recoloque a placa de expansão traseira na parte de trás da placa carrier.
2. Coloque a placa carrier de volta no chassi e aperte os quatro parafusos dos cantos.
3. Recoloque a tampa superior do gabinete.

## Configuração de Software (Instalação do Driver)

Se você estiver usando um módulo **RTL8852BE**, siga:

- [Módulo Sem Fio RTL8852BE para Jetson](https://wiki.seeedstudio.com/pt-br/rtl8852be_wireless_module_for_jetson/)

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

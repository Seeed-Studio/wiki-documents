---
description: Gerenciamento de Hotspot
title: Gerenciamento de Hotspot
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management
aliases:
  - /Cloud_Chain/cloud/sensecraft-data/sensecraft-hotspot/sensecraft-hotspot-app/hotspot_management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management/
---

**Gerenciamento de Hotspot**
======================

**Informações do Hotspot**
=======================

O aplicativo SenseCAP Hotspot gerencia hotspots que estão tanto no SenseCAP Dashboard quanto na sua carteira. Se o seu hotspot tiver sido adicionado à conta do SenseCAP Dashboard, o aplicativo SenseCAP fornece todas as informações sobre o seu Hotspot, como recompensas, status online, status P2P, witness, localização e assim por diante.

Existem quatro status que determinam as informações e operações que o aplicativo SenseCAP fornece aos hotspots.

1.  **SenseCAP**: o SenseCAP Hotspot não apenas foi adicionado à conta do Dashboard, mas também a carteira Helium à qual o Hotspot pertence foi adicionada ao aplicativo SenseCAP
2.  **Only Wallet**: a carteira do SenseCAP Hotspot foi adicionada ao aplicativo SenseCAP.
3.  **Only Dashboard**: o SenseCAP Hotspot foi adicionado à conta do Dashboard.
4.  **Other Maker**: não é um SenseCAP Hotspot e a sua carteira foi adicionada ao aplicativo SenseCAP

<table style={{borderCollapse: 'collapse', width: '100%', height: 105}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Status Type</strong></td><td style={{width: '33.3333%', height: 21}}><strong>Information</strong></td><td style={{width: '33.3333%', height: 21}}><strong>Operation</strong></td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>SenseCAP</td><td style={{width: '33.3333%', height: 21}}>All Info</td><td style={{width: '33.3333%', height: 21}}>All Operation</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>Only Wallet</td><td style={{width: '33.3333%', height: 21}}>Rewards<br />Scale<br />Location<br />Relayed<br />Witness<br />Helium Online Status</td><td style={{width: '33.3333%', height: 21}}>All Operation</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>Only Dashboard</td><td style={{width: '33.3333%', height: 21}}>All Info</td><td style={{width: '33.3333%', height: 21}}>Set Tag<br />Followed<br />Copy Address<br />Add To Dashboard</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>Other Maker</td><td style={{width: '33.3333%', height: 21}}>-</td><td style={{width: '33.3333%', height: 21}}>-</td></tr></tbody></table>


![SesneCAP Hotspto App](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-app-sensecap.png)

**Operações do Hotspot**
=====================

O aplicativo SenseCAP combina o Helium Hotspot App e o SenseCAP Dashboard e fornece as seguintes operações para ajudar você a gerenciar seus hotspots e recompensas.

*   **Update Location**: atualizar a localização do hotspot na blockchain Helium
*   **Update Antenna**: atualizar a antena do hotspot na blockchain Helium
*   **Pair(Update Wi-Fi or Run Diagnostics)**: configurar o Wi-Fi do hotspot e executar diagnósticos por Bluetooth
*   **Tag**: definir tag como no SenseCAP Dashboard
*   **Copy Address**: copiar o endereço do Hotspot ou o endereço do proprietário
*   etc...
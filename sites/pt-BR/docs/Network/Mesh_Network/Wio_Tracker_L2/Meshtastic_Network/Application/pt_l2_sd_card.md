---
description: Tutorial de cartão SD para a Série Wio Tracker L2. Inclui formatação, geração de mapa e instalação de mapa
title: Uso do Cartão SD
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /l2_sd_card
sku: 100029766
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/l2_sd_card/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mapas offline permitem que o **Wio Tracker L2** exiba blocos de mapa localmente sem uma conexão com a Internet. Isso é útil ao operar em áreas remotas ou locais com cobertura de rede limitada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={600} height="auto" /></p>

## Pré-requisitos

Prepare os seguintes itens antes de começar.

### Hardware

- Wio Tracker L2
- Cartão microSD (Capacidade: **8 GB–32 GB**, Sistema de arquivos: **FAT32**)
- Computador
- Leitor de cartão microSD

### Software

- Firmware Meshtastic
- Pacote de mapa offline

:::tip

Se o MUI não tiver sido instalado no seu dispositivo, conclua primeiro a instalação do firmware.

:::

## Prepare o cartão microSD

### Etapa 1. Formate o cartão microSD

[Click here](https://www.sdcard.org/downloads/formatter/) para baixar o formatador:

Após instalar o software:

1. Insira o cartão microSD no leitor de cartões.
2. Inicie o **SD Memory Card Formatter**.
3. Selecione o seu cartão microSD.
4. Escolha `Quick format`
5. Clique em **Format**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardFormat.png" alt="pir" width={400} height="auto" /></p>

O cartão agora está pronto para armazenar mapas offline.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FormatSucceed.png" alt="pir" width={400} height="auto" /></p>

:::warning

A formatação exclui permanentemente todos os dados do cartão microSD. Faça backup de quaisquer arquivos importantes antes de prosseguir.

:::
### Step2. Create the Directory Structure
For MUI to recognize your maps, they must be placed in a specific folder hierarchy on the root of your SD card:
1. Create a folder named maps (lowercase).
2. Inside maps, create a subfolder for the style, such as CartoDark.
3. The final path should look like: SD_ROOT/maps/CartoDark/


###  Step3. Download the Offline Map

[Click here](https://github.com/meshtastic/device-ui/tree/master/maps) to download the offline map package from the official download page. 

The downloaded package contains all required map data for MUI. `atlas.zip`, `dark-matter-brown.zip`, `osm.zip`, `positron.zip`are four different types of map file packages. You can choose one or more of your favorites to download.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Downloadmap.png" alt="pir" width={400} height="auto" /></p>

###  Step 4. Copy the Map Files

1. Open the microSD card.
2. Extract the downloaded ZIP package into the `maps` folder

The directory should look like this:

```text
microSD
└── maps
    ├── atlas
        └── 0
        └── ...
        └── 8
    ├── dark-matter-brown
    └── osm
```

:::note

Do not rename the **maps** folder unless otherwise instructed.

:::

Remova com segurança o cartão microSD após a conclusão do processo de cópia. Em seguida, você pode inserir o cartão no L2 e verificar o mapa.
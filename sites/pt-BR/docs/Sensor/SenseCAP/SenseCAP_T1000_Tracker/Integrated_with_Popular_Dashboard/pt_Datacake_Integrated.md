---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Datacake Integrado (via TTS)
keywords:
  - SenseCAP
  - tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 8/15/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_Datacake_TTS/
---

[Datacake](https://datacake.co/) é uma plataforma IoT multiuso, que oferece a possibilidade de criar aplicações IoT personalizadas, sem exigir habilidades de programação.

Para atender à crescente necessidade de criação de aplicações IoT, temos trabalhado com a Datacake para criar templates que permitem à comunidade adicionar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao Datacake por meio da The Things Network de forma prática e fácil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, consulte [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para primeiro conectar o seu SenseCAP T1000 Tracker ao TTS.

## Configurar o Datacake

Para começar, registre uma conta no [Datacake](https://app.datacake.de/signup).

### Criar um Workspace

Primeiro, crie um Workspace no Datacake navegando até o botão **Create Workspace** no canto superior esquerdo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Dispositivo

Clique em **Devices** no menu à esquerda.
Para adicionar um novo dispositivo, clique no botão **Add Device** à direita.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

Escolha **LoRaWAN** para adicionar dispositivos LoRaWAN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

Carregamos um template para os usuários, você só precisa selecionar o modelo do produto e colar o EUI do seu dispositivo para configurar rapidamente.

:::info
Device Template: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### Obter um API Token

Vá até **Account Settings** no seu workspace do Datacake e copie o seu API Token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## Configurar o The Things Stack

No The Things Stack, navegue até **Integrations** → **Webhooks** e clique em **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Escolha o template de Webhook Datacake.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Dê um nome à sua integração preenchendo o Webhook ID e cole o API Token do Datacake para a autorização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Dashboard do Datacake

Em seguida, você pode verificar os dados do seu dispositivo no Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>

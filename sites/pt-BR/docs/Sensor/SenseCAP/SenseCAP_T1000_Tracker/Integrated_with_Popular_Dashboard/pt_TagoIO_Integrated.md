---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO Integrado(via TTS)
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 8/18/2023
  author: Jessie
createdAt: '2023-08-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TagoIO_TTS/
---


[TagoIO](https://tago.io/) é uma plataforma de nuvem IoT para empresas gerenciarem dispositivos, dados, usuários, análises e integrações. Sua interface intuitiva facilita para empresas de todos os portes criar e implantar soluções IoT inovadoras.

O conteúdo deste capítulo orientará os usuários sobre como conectar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao TagoIO por meio do TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, verifique [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para conectar primeiro o seu SenseCAP T1000 Tracker ao TTS.

## Configurar o TagoIO

Para começar, crie uma conta no [TagoIO](https://admin.tago.io/signup).

### Adicionar dispositivo

Vá até a aba **Devices** e clique em **Add Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

Pesquise por **Seeed SenseCAP T1000** para uma configuração rápida.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

Dê um nome ao seu dispositivo e cole o EUI do dispositivo, depois clique em **Create my Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### Gerar autorização

Clique em **Generate authorization** e copie sua autorização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## Configurar The Things Stack

No The Things Stack, vá para **Integrations** → **Webhooks** e clique em **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Escolha o modelo de Webhook TaoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

Nomeie sua integração preenchendo o Webhook ID e cole o Plugin ID e o token do TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

Depois que o seu dispositivo estiver conectado, você poderá verificar todas as conexões na aba **Live Inspector** no TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## Dashboard do TagoIO (Opcional)

Um dashboard é onde você coloca seus widgets para visualizar e interagir com os dados, tudo em tempo real. Você pode personalizar seu dashboard conforme suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

Vá até a aba **Dashboard**, dê um nome ao seu dashboard e clique em **Create my Dashboard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p]

**Dashboard de Localização**

Clique em **Add widget** e escolha o tipo **Map**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

**Data from**: Seu dispositivo -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>

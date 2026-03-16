---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title: Wialon Integrado
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Wialon
last_update:
  date: 6/4/2024
  author: Jessie
createdAt: '2024-06-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_Wialon/
---


[Wialon](https://wialon.com/) é a plataforma de software de gerenciamento de frotas para monitoramento por GPS e IoT que rastreia mais de 3,7 milhões de unidades móveis e estacionárias em mais de 150 países do mundo e é composta por mais de 2.500 empresas parceiras, 700 fabricantes de hardware e centenas de desenvolvedores de soluções baseadas em Wialon.

O conteúdo deste capítulo irá orientar os usuários sobre como conectar o SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) à plataforma Wialon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, verifique [Get Started](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker) para conectar primeiro o seu SenseCAP T1000 Tracker à SenseCAP Cloud.

## Obter a API do SenseCAP no SenseCAP Portal

Faça login no [SenseCAP Portal](https://sensecap.seeed.cc/portal), navegue até `Access API keys` e clique em `Create Access Key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

Em seguida, você receberá o `API ID` e as `Access API keys`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Configuração do Wialon

Faça login no [Wialon Hosting](https://hosting.wialon.com/?lang=en).

**Wialon Hosting** é uma plataforma para monitoramento por GPS e IoT que é armazenada e administrada em nossos data centers.

### Adicionar Unidade

Navegue até a aba **Units** e clique em **New** para adicionar uma nova unidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

Dê um nome à sua unidade e selecione o `Device Type` como `SenseCAP API`, clique no ícone de chave inglesa para preencher as propriedades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**:sensecap.seeed.cc<br/>
**API ID**: O API ID no SenseCAP Portal<br/>
**API Password**: As Access API keys no SenseCAP Portal<br/>
**Unique ID**: O EUI do seu dispositivo.

Mantenha o seu dispositivo online e então você poderá ver a localização no mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### Geofence(opcional)

Geofence é uma área limitada no mapa que pode ser usada para fins de monitoramento.

Navegue até a aba `Geofences` e clique em `New` para adicionar uma nova geofence.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* Indique o nome da geofence.
* Selecione o tipo.
* Marque o centro da geofence no mapa (clique duas vezes no local desejado).
* Indique o raio da geofence.
* Clique em `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>

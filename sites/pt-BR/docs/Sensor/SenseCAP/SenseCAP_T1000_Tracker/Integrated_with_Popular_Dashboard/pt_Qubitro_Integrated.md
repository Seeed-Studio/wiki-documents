---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Integração com Qubitro (via TTS)
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 8/15/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_Qubitro_TTS/
---


[Qubitro](https://www.qubitro.com/) é uma Plataforma de Dados de Dispositivos (DDP) para desenvolvedores que fornece as ferramentas, fluxos de trabalho e infraestrutura de que você precisa para desenvolver soluções mais rapidamente, sem a necessidade de integrar manualmente vários serviços. O Qubitro oferece suporte nativo a fontes de dados populares e fornece ferramentas para colaboração em tempo real nos seus projetos, combinadas com uma infraestrutura escalável.

O conteúdo deste capítulo irá orientar os usuários sobre como conectar o [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) SenseCAP ao Qubitro por meio do TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, verifique [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para conectar primeiro o seu SenseCAP T1000 Tracker ao TTS.

## Configurar o Qubitro 

Para começar, crie uma conta no [Qubitro](https://portal.qubitro.com/login). Ao criar uma conta, você estará automaticamente no plano Starter. 



### Obter credenciais no Dashboard do Qubitro

Crie um novo projeto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>


Clique no botão **New source** e clique em **The Things Stack** na lista.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

Em seguida, você obterá o Project ID e as Webhook Signing Keys.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>


## Configurar o The Things Stack

Acesse o [TTS Console](https://eu1.cloud.thethings.network/console/) para configurar a integração por webhook.

No The Things Stack, vá para **Integrations** → **Webhooks** e clique em **Add Webhook**.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Escolha o template de Webhook do Qubitro. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Nomeie sua integração preenchendo o Webhook ID e cole os valores fornecidos na primeira etapa no Portal do Qubitro. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

Clique no botão **Create Qubitro Webhook** e volte para o Portal do Qubitro.



## Status do dispositivo

Clique no botão **Go to project** e depois no botão **Refresh** para verificar se os dispositivos foram listados com sucesso.


:::info Dica
Depois que a integração for configurada, todos os dispositivos conectados ao mesmo projeto no The Things Stack serão sincronizados automaticamente.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Configurar o decodificador no Qubitro

Navegue até a página do seu dispositivo e clique no botão **Create function**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

Escolha a **função Decoder** e clique em **Get started**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>


Carregamos um modelo para os usuários; você só precisa selecionar o modelo do produto para configurar rapidamente.

:::info
**Tipo de formatter**: Modelo de dispositivo  
**Marca do fabricante**: Seeed Studio  
**Modelo**: SenseCAP_T1000
:::

Em seguida, clique em **Save and complete**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>



## Verificar os dados

Navegue até o dispositivo e clique na aba **Data** para verificar os dados recebidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>


## Personalizar o dashboard (opcional)

**Dashboard de Localização**

Navegue até a página de dashboard e clique em **Create new**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

Dê um nome ao seu dashboard e clique em **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>


Escolha **Map** como o tipo de widget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

Escolha seu dispositivo e o valor de **coordinates**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>

Então você poderá verificar sua localização no dashboard.  
Você também pode personalizar outros widgets.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>

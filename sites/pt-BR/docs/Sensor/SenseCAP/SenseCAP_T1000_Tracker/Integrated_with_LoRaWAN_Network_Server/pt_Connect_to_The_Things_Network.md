---
description: Connect_to_The_Things_Network
title: Conectar à The Things Network
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_TTN
last_update:
  date: 8/15/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN/
---



O The Things Stack (TTS) é um conjunto de servidores de rede LoRaWAN® que é o componente crítico para qualquer solução LoRaWAN. Neste capítulo vamos orientar os usuários a conectar o [SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) à The Things Network.



## Configuração do Dispositivo

Antes de conectar ao TTS, você precisa configurar os parâmetros básicos do seu dispositivo no aplicativo SenseCAP Mate, consulte [Get Started](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker) para mais detalhes.

* Defina a plataforma como TTN e, em seguida, copie o Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

O The Things Stack (TTS) é um servidor de rede LoRaWAN de nível empresarial, construído sobre um núcleo de código aberto. O The Things Stack permite que você crie e gerencie redes LoRaWAN no seu próprio hardware ou na nuvem.

Para começar, registre uma conta em [The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>





### Etapa 1: Criar um aplicativo

Navegue até a página Applications e clique em "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Insira um Application ID e clique em Create Application para salvar suas alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### Etapa 2: Registrar o Dispositivo

Carregamos um modelo para os usuários, você só precisa selecionar o modelo do produto para fazer a configuração rapidamente.
Selecione o método de entrada como 'Select the end device in the LoRaWAN Device Repository'

:::info
**End device brand**:SenseCAP<br />
**Model**:SenseCAP T1000 Tracker A/B
:::

Selecione o plano de frequência de acordo com o seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>



Cole o Device EUI/APP EUI/APP Key a partir do SenseCraft App e, em seguida, clique em `Register end device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
O "JoinEUI" acima é semelhante ao "AppEUI".
:::


### Etapa 3: Verificar os dados

Quando o dispositivo tentar se conectar à rede, a luz de respiração piscará. Se o dispositivo ingressar na rede com sucesso, a luz de respiração piscará rapidamente e haverá uma melodia leve e alegre.

Em seguida, você pode verificar os dados no console do TTS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## Recurso

[SenseCAP T1000 Tracker Decoder para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)
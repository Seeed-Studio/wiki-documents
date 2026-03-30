---
description: Conectar o SenseCAP T1000 Tracker ao Loriot
title: Conectar ao Loriot
keywords:
  - Tracker
  - Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 12/12/2023
  author: KeweiLee
createdAt: '2023-12-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_Tracker_Loriot/
---


[LORIOT](https://docs.loriot.io/display/NMS/Getting+Started) LoRAWAN Network Server (LNS) é independente de hardware e é compatível com todos os gateways e sensores LoRaWAN® do mercado.

:::info
Se você não tem uma conta Loriot, vá [aqui](https://loriot.io/register.html), selecione um dos LORIOT Community Public Servers na sua região e registre uma nova conta.
:::

## Adicionar uma Rede

Redes são simplesmente uma coleção de gateways LoRaWAN e fornecem um ambiente eficiente para monitorar e gerenciar seus gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" alt="pir" width={800} height="auto" /></p>

Ao adicionar um novo gateway, ele precisa ser atribuído a uma rede. Ele pode ficar sozinho ou em conjunto com outros gateways.

Um método típico para agrupar gateways em redes é por localização geográfica, modelo, cliente ou qualquer outra estrutura que funcione melhor para você.

Não há restrição sobre quantos gateways podem ser incluídos em uma rede (desde que dentro do limite de gateways da conta), mas cada gateway só pode pertencer a uma única rede.

### Adicionar seu primeiro Gateway

Inicie sua rede LoRaWAN adicionando seu primeiro gateway! Você também pode seguir o guia passo a passo da Loriot [step by step](https://docs.loriot.io/display/NMS/Register+a+Gateway+or+Base+Station) para registrar um Gateway ou Base Station e começar. 

Criamos aqui um gateway (Basics Station Semtech) como exemplo. Navegue até `Network`, depois clique na rede que você acabou de adicionar. Clique em `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" alt="pir" width={800} height="auto" /></p>

Na metade inferior da página aparecerá uma lista de gateways; selecione o modelo de gateway relevante clicando na sua imagem.
Para registrar o gateway, é necessário inserir o endereço MAC eth0 do gateway (seis octetos separados por dois-pontos).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" alt="pir" width={800} height="auto" /></p>

Por fim, sua localização pode ser definida de duas maneiras diferentes: selecionando um local no mapa ou preenchendo as informações necessárias para registrar o endereço manualmente.

### Configurar o certificado do seu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" alt="pir" width={800} height="auto" /></p>

Na página `Certificate` você encontrará o Network Server Address, o Network Server Port e poderá baixar ou copiar o TLS CA Certificate para configurar o modelo do seu gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/Certificate.png" alt="pir" width={800} height="auto" /></p>

Na interface de usuário do seu gateway, selecione "LoRa Basics Station" como o modo de operação. Certifique-se de configurar o endereço, a porta e o certificado do servidor usando as informações obtidas na última etapa. Isso é necessário para estabelecer a conexão entre o gateway e o LORIOT Network Management System.

Volte para a interface do LORIOT e verifique se sua LoRa Basics™ Station agora está online e funcionando corretamente com o LORIOT Network Management System.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" alt="pir" width={800} height="auto" /></p>


## Adicionar um Aplicativo

[Applications](https://docs.loriot.io/display/NMS/Create+a+New+Application) são simplesmente onde registramos, gerenciamos e organizamos dispositivos e selecionamos o destino de saída para os dados do dispositivo.
Ao adicionar um novo dispositivo (ou dispositivos), ele é atribuído a um aplicativo; isso informa ao servidor em qual aplicativo seu(s) dispositivo(s) está(ão) registrado(s) e os detalhes da saída de dados escolhida.   

Desde que o número total de dispositivos não exceda o limite da conta do usuário, qualquer quantidade de dispositivos pode ser adicionada a um aplicativo, independentemente do tipo de sensor ou fabricante.

Normalmente, um aplicativo conterá todos os dispositivos de um caso de uso específico (por exemplo, todos os sensores em um prédio inteligente) ou dispositivos do mesmo tipo (por exemplo, sensores de temperatura).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" alt="pir" width={800} height="auto" /></p>


### Adicionar seu primeiro dispositivo (SenseCAP T1000 Tracker)


Clique em `Enroll Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" alt="pir" width={800} height="auto" /></p>

O LORIOT Network Server é compatível com dispositivos LoRaWAN 1.0.x e 1.1. O dispositivo pode ser adicionado por meio de dois processos de registro diferentes. OTAA (Over-The-Air-Activation) é a opção recomendada para a maioria dos dispositivos, mas ABP (activation by personalization) também está disponível. Após conectar-se com sucesso ao Tracker usando o SenseCAP Mate App via Bluetooth, você pode obter as informações OTAA nesta aba.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={600} height="auto" /></p>

Defina a plataforma como other platform e, em seguida, copie o Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" alt="pir" width={400} height="auto" /></p>

Por fim, selecione Enroll. Depois de adicionar seu(s) dispositivo(s), você poderá ver o fluxo de dados no Loriot.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" alt="pir" width={800} height="auto" /></p>





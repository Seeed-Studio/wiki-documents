---
description: Conectando o R1225 ao ChirpStack
title: Conectando ao ChirpStack
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_chirpstack
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/connecting_r1225_to_chirpstack/
updatedAt: '2026-04-29'
---
## Configuração do ChirpStack

O ChirpStack fornece componentes de código aberto para redes LoRaWAN. Juntos, eles formam uma solução pronta para uso, incluindo uma interface web amigável para gerenciamento de dispositivos e APIs para integração.

### Adicionar Gateway

Antes de começar, por favor [login](https://www.chirpstack.io/application-server/use/login/) no [ChirpStack Application Server](https://www.chirpstack.io/application-server/).

As credenciais padrão são: Nome de usuário: admin; Senha: admin

:::tip Note
Se você ainda não conectou sua instância do [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) com uma instância do [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/), você precisa fazer isso primeiro. Veja [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). Além disso, você precisa conectar a organização ao network-server criando um [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navegue até `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

Insira o `Gateway Name` e o `Gateway ID (EUI: 64)`

**Gateway name**: Um nome para o seu gateway

**Gateway EUI**: O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no Console Local

**Stats interval(secs)**: O intervalo esperado, em segundos, no qual o gateway envia suas estatísticas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em `Submit`

### Adicionar perfil de dispositivo

Antes de poder adicionar seu dispositivo ao ChirpStack, você precisa criar um [device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) se ainda não tiver feito isso.

Navegue até **`Device profile` > `Add device profile`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: Um nome para o seu perfil de dispositivo

**Region**: Selecione o plano de Região de acordo com o seu gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Algoritmo ADR padrão (apenas LoRa)

:::note
Selecione a versão MAC/revisão dos parâmetros regionais/algoritmo ADR de acordo com o seu dispositivo. Para mais detalhes, consulte: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### Adicionar dispositivo

Navegue até **`Application` > `Add Application`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Clique na aplicação à qual você deseja adicionar seu dispositivo. Na aba **Devices**, clique em **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: Um nome para o seu dispositivo

**Device EUI**: O EUI do dispositivo pode ser encontrado na etiqueta do dispositivo ou no SenseCAP Mate APP

**Device profile**: Escolha o perfil de dispositivo que criamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## Configuração do Gateway

Configure o gateway pela interface Web UI, por favor consulte o [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para fazer login primeiro no Console Local.

### Configurações da Rede LoRa

Navegue até **LoRa > LoRa Network**

**Mode:** Packet Forwarder

Configurações do Packet Forwarder:

**Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

**Server Address**: O endereço do seu servidor ChirpStack

**Server Port(Up/Down)**: 1700

Outras configurações podem ser deixadas como padrão ou alteradas para atender às suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### Configurações do Plano de Canais

Navegue até **`LoRa` > `Channel Plan`**

Selecione a Região e o plano de Frequência de acordo com a escolha real.

Após a configuração, clique em **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## Visualização de Dados

### Dados do gateway

Navegue até **`Gateways`**, escolha o gateway que você deseja verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### Dados do dispositivo

Depois de adicionar seu dispositivo LoRaWAN ao ChirpStack, valide se o seu dispositivo é capaz de ativar (no caso de OTAA) e enviar dados.

Navegue até **Applications** > **Devices**, escolha o dispositivo que você deseja verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>

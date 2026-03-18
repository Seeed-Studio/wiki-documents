---
description: Conectar o SenseCAP M2 Multi-Platform Gateway ao ChirpStack
title: Conectando ao ChirpStack
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/
---


### Configuração do ChirpStack

O ChirpStack fornece componentes de código aberto para redes LoRaWAN. Juntos, eles formam uma solução pronta para uso, incluindo uma interface web amigável para gerenciamento de dispositivos e APIs para integração.

#### Adicionar gateway

Antes de começar, por favor [Login](https://www.chirpstack.io/application-server/use/login/) no [ChirpStack Application Server](https://www.chirpstack.io/application-server/).

As credenciais padrão são: Username: admin; Password: admin

:::tip Note
Se você ainda não conectou sua instância do [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) a uma instância do [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/), você precisa fazer isso primeiro. Veja [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). Além disso, você precisa conectar a organização ao network-server criando um [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navegue até **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: Um nome para o seu gateway

**Gateway EUI**: O Gateway EUI pode ser encontrado na etiqueta do dispositivo ou no Local Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### Adicionar perfil de dispositivo

Antes de poder adicionar seu dispositivo ao ChirpStack, você precisa criar um [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) se ainda não tiver feito isso.

Navegue até **Device profile> Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: Um nome para o seu perfil de dispositivo

**Region**: Selecione o plano de região de acordo com o seu gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Default ADR algorithm( LoRa only)

:::note
Selecione MAC version/Regional parameters revision/ADR algorithm de acordo com o seu dispositivo. Para detalhes, consulte: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### Adicionar dispositivo

Navegue até **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Clique na aplicação à qual você deseja adicionar seu dispositivo. Na aba **Devices**, clique em **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: Um nome para o seu dispositivo

**Device EUI**: O Device EUI pode ser encontrado na etiqueta do dispositivo ou no SenseCAP Mate APP

**Device profile**: Escolha o perfil de dispositivo que criamos na etapa 1.2 passo 1.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### Configuração do Gateway

Configure o gateway via Web UI, por favor verifique o [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para fazer login primeiro no Local Console.

#### Configurações da rede LoRa

Navegue até **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder Settings:

**Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

**Server Address**: O endereço do seu servidor ChirpStack

**Server Port(Up/Down)**: 1700

Outras configurações podem ser deixadas como padrão ou podem ser alteradas para atender aos seus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### Configurações do plano de canais

Navegue até **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

Selecione a Região e o plano de Frequência de acordo com a escolha real.

Após configurar, clique em **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### Visualização de dados

#### Dados do gateway

Navegue até **Gateways**, escolha o gateway que você deseja verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### Dados do dispositivo

Depois de adicionar seu dispositivo LoRaWAN ao ChirpStack, valide se o seu dispositivo consegue ativar (no caso de OTAA) e enviar dados.

Navegue até **Applications** > **Devices**, escolha o dispositivo que você deseja verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>

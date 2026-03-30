---
description: Conectar o gateway SenseCAP M2 Multi-Platform ao TTN
title: Conectando ao TTN
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/
---


Existem duas maneiras de se conectar à The Things Network: Packet forward e Basics™ Station. Escolha uma maneira de conectar seu gateway.

Semtech UDP Packet Forwarder é o encaminhador de pacotes LoRaWAN® original, conectando-se a servidores por meio do protocolo Semtech UDP.

LoRa Basics™ Station é a maneira preferencial de conectar gateways à The Things Stack.

## **Conectando via Packet Forwarders**

O Semtech UDP Packet Forwarder é o encaminhador de pacotes LoRaWAN® original, conectando-se a servidores por meio do protocolo Semtech UDP.

### Configuração no TTN

- **Passo 1**: Faça login em [The Things Stack](https://eu1.cloud.thethings.network/console). Se você não tem uma conta TTN, registre-se primeiro.

- **Passo 2**: Registre o gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: O Gateway EUI pode ser encontrado na etiqueta do dispositivo ou no console local

**Gateway ID**: Um identificador exclusivo para o seu gateway (o ID deve conter apenas letras minúsculas, números e traços)

**Gateway name**: Um nome para o seu gateway

**Frequency plan**: Selecione a frequência correspondente de acordo com a versão do seu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

Você pode verificar o gateway na visão geral após o registro bem-sucedido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### Configuração do Gateway

Configure o gateway via Web UI, por favor consulte o [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para fazer login primeiro no console local.

- **Passo 1**: Configurações da Rede LoRa

Navegue até **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2:** Defina Mode como Packet Forward

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3:** Configurações do Packet Forwarder:

1. **Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

2. **Server Address**:
Para Semtech UDP Packet Forwarder use 'server-address'
O 'server-address' é o endereço da sua implantação do The Things Stack.
Consulte [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) para mais informações.

3. **Server Port(Up/Down)**: As portas Up e Down são tipicamente 1700.

Outras configurações podem ser deixadas como padrão ou alteradas para atender às suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

Clique em **Save&Apply** para aplicar suas configurações.

- **Passo 4**: Configurações do Plano de Canais

Navegue até **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

Selecione a região e o plano de frequência de acordo com a escolha real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

Após a configuração, clique em **Save&Apply**

## **Conectando via Basic Station**

LoRa Basics™ Station é a maneira preferencial de conectar gateways à The Things Stack.

### Configuração no TTN

- **Passo 1**: Registrar o gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2**: Habilite Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

Isso somente permitirá que um gateway se conecte se ele utilizar uma conexão Basic Station ou MQTT habilitada para TLS.

- **Passo 3:** Crie uma chave de API

Selecione uma opção para gerar automaticamente uma chave de API para o serviço CUPS ou LNS, então você poderá autorizar o gateway imediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

Escolha um servidor de acordo com sua necessidade e, em seguida, clique em "Register gateway"

**LoRaWAN Network Server (LNS)**

LNS estabelece uma conexão de dados entre um gateway LoRa Basics™ Station e um Network Server (neste caso, The Things Stack). Quadros LoRa® uplink e downlink são trocados por meio dessa conexão de dados. O protocolo LNS é necessário para enviar e receber dados LoRaWAN.

**Configuration and Update Server (CUPS)**

CUPS permite que um Network Server configure gateways remotamente e atualize o firmware do gateway. CUPS não é necessário para enviar e receber dados LoRaWAN, mas pode simplificar bastante o gerenciamento de gateways. Configurar CUPS também irá recuperar automaticamente as credenciais LNS e configurar o LNS no seu gateway.

Mais informações sobre LoRa Basics™ Station estão disponíveis no [Portal de Desenvolvedores da Semtech](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Configuração do Gateway

- **Passo 1**: Configurações da Rede LoRa
Navegue até **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2**: Defina Mode como Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3**: Configurações da Basic Station:

1. **Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

2. **Server**: Selecione LNS ou CUPS
Verifique o passo anterior para mais detalhes sobre os servidores.

3. **URL:**
CUPS usa o URI: https://server-address:443, LNS usa o URI: wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode:** TLS server authentication and Client token
The Things Stack suporta autenticação de servidor TLS e token de cliente. Isso requer um arquivo *.trust* e um arquivo *.key*.

5. **trust:** Este é o [certificado CA](https://en.wikipedia.org/wiki/Certificate_authority) que protege seu domínio.
Um arquivo .pem contendo certificados comuns está disponível em [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Baixe a **minimal certificate list**, então copie o conteúdo de dados do arquivo de certificado (o certificado pode ser aberto em forma de texto).

6. **token:** Authorization:Bearer `<Your_API_Key>`

Outras configurações podem ser deixadas como padrão ou alteradas para atender às suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## Verificar o Status do Gateway

Após a conclusão das configurações, podemos visualizar os dados em tempo real do seu gateway.

Você pode ver que seu gateway está conectado ao TTN agora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>

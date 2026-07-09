---
description: Conectando o R1225 ao TTN
title: Conectando ao TTN
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_ttn
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/connecting_r1225_to_ttn/
updatedAt: '2026-03-30'
---
# Conectando ao TTN

Há duas maneiras de se conectar ao The Things Network: Packet forward e Basics™ Station. Escolha uma maneira de conectar seu gateway.

Semtech UDP Packet Forwarder é o encaminhador de pacotes LoRaWAN® original, conectando-se a servidores por meio do protocolo UDP da Semtech.

LoRa Basics™ Station é a maneira preferida de conectar Gateways ao The Things Stack.

## **Conectando via Packet Forwarder**

O Semtech UDP Packet Forwarder é o encaminhador de pacotes LoRaWAN® original, conectando-se a servidores por meio do protocolo UDP da Semtech.

### Configuração TTN

- **Passo 1**: Faça login no [The Things Stack](https://eu1.cloud.thethings.network/console). Se você não tiver uma conta TTN, registre-se primeiro.

- **Passo 2**: Registre o gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: O Gateway EUI pode ser encontrado na etiqueta do dispositivo ou no Console Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: Um identificador exclusivo para o seu gateway (o ID deve conter apenas letras minúsculas, números e traços)

**Gateway name**: Um nome para o seu gateway

**Frequency plan**: Selecione a frequência correspondente de acordo com a versão do seu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN3.png" alt="pir" width={800} height="auto" /></p>

### Configuração do Gateway

Configure o gateway via Web UI, consulte o [Quick Start](https://wiki.seeedstudio.com/pt-br/r1225_quick_start/) para fazer login primeiro no Console Local.

- **Passo 1**: Configurações da Rede LoRa

Navegue até `LoRa` > `LoRa Network`

- **Passo 2:** Defina o modo como Packet Forwarder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN4.png" alt="pir" width={800} height="auto" /></p>

- **Passo 3:** Configurações do Packet Forwarder:

1. **Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

2. **Server Address**:
Para o Semtech UDP Packet Forwarder use 'server-address'
O 'server-address' é o endereço da sua implantação do The Things Stack.
Veja [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) para mais informações.

3. **Server Port(Up/Down)**: As portas Up e Down são normalmente 1700.

Outras configurações podem ser deixadas como padrão ou alteradas para atender às suas necessidades.

Clique em **`Save&Apply`** para aplicar suas configurações.

- **Passo 4**: Configurações do Plano de Canais

Navegue até  `LoRa` >  `Channel Plan`

Selecione a Região e o plano de Frequência de acordo com a escolha real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN5.png" alt="pir" width={800} height="auto" /></p>

Após a configuração, clique em **`Save&Apply`**

## **Conectando via Basic Station**

LoRa Basics™ Station é a maneira preferida de conectar Gateways ao The Things Stack.

### Configuração TTN

- **Passo 1**: Faça login no [The Things Stack](https://eu1.cloud.thethings.network/console). Se você não tiver uma conta TTN, registre-se primeiro.

- **Passo 2**: Registre o gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: O Gateway EUI pode ser encontrado na etiqueta do dispositivo ou no Console Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: Um identificador exclusivo para o seu gateway (o ID deve conter apenas letras minúsculas, números e traços)

**Gateway name**: Um nome para o seu gateway

**Frequency plan**: Selecione a frequência correspondente de acordo com a versão do seu gateway

- **Passo 3**: Habilite Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN6.png" alt="pir" width={800} height="auto" /></p>

Isso só permitirá que um gateway se conecte se ele usar uma conexão Basic Station ou MQTT habilitada para TLS.

- **Passo 4:** Crie uma chave de API

Selecione uma opção para gerar automaticamente uma chave de API para o serviço CUPS ou LNS, então você poderá autorizar o gateway imediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN7.png" alt="pir" width={800} height="auto" /></p>

Escolha um Servidor de acordo com sua necessidade e, em seguida, clique em "Register gateway"

#### (LNS)LoRaWAN Network Server

LNS estabelece uma conexão de dados entre um gateway LoRa Basics™ Station e um Network Server (neste caso, o The Things Stack). Quadros LoRa® de uplink e downlink são trocados por meio dessa conexão de dados. O protocolo LNS é necessário para enviar e receber dados LoRaWAN.

#### (CUPS)Configuration and Update Server 

CUPS permite que um Network Server configure gateways remotamente e atualize o firmware do gateway. CUPS não é necessário para enviar e receber dados LoRaWAN, mas pode simplificar bastante o gerenciamento de gateways. Configurar o CUPS também recuperará automaticamente as credenciais LNS e configurará o LNS no seu gateway.

Mais informações sobre o LoRa Basics™ Station estão disponíveis no [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Configuração do Gateway

- **Passo 1**: Configurações da Rede LoRa
Navegue até **`LoRa`** > **`LoRa Network`**

- **Passo 2**: Defina o modo como Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN8.png" alt="pir" width={800} height="auto" /></p>

As credenciais correspondem à chave de API selecionada na plataforma TTN.

- **Passo 3**: Configurações do Basic Station:

1. **Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

2. **Server**: Selecione LNS ou CUPS
Verifique o passo anterior para mais detalhes sobre os servidores.

3. **URL:**
CUPS usa o URI: https://server-address:443, LNS usa o URI: wss://server-address:8887

4. **Authentication Mode:** Autenticação de servidor TLS e token de cliente
The Things Stack oferece suporte à autenticação de servidor TLS e token de cliente. Isso requer um arquivo *.trust* e um arquivo *.key*.

5. **trust:** Este é o [certificado da autoridade certificadora (CA)](https://en.wikipedia.org/wiki/Certificate_authority) que protege seu domínio.
Um arquivo .pem contendo certificados comuns está disponível em [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Baixe a **minimal certificate list**, depois copie o conteúdo de dados do arquivo de certificado (o certificado pode ser aberto em formato de texto).

6. **token:** Authorization:Bearer `<Your_API_Key>`

Outras configurações podem ser deixadas como padrão ou alteradas para atender às suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN9.png" alt="pir" width={800} height="auto" /></p>

## Verificar o Status do Gateway

Depois que as configurações forem concluídas, podemos visualizar os dados em tempo real do seu gateway.

Você pode ver que seu gateway está conectado ao TTN agora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN.png" alt="pir" width={800} height="auto" /></p>
---
description: Connect_Wio_Tracker_1110_to_TTN
title: Conectar Wio Tracker ao LoRa Cloud™ Locator
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 10/23/2023
  author: Jessie
createdAt: '2023-08-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/connect_wio_tracker_to_locator/
---


Este documento detalha as instruções passo a passo sobre como configurar a [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) e configurá-la no [LoRa Cloud™ Locator](https://locator.loracloud.com).

## Configurações do Gateway

### Adicionar o Gateway no LoRa Cloud™ Locator

Faça login em [LoRa Cloud™ Locator web](https://locator.loracloud.com).

Navegue até `GATEWAY SETTINGS`, clique em `Add New Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>

Insira o EUI do Gateway e selecione a banda de frequência LoRaWAN® correta com base na sua localização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Create` e você deverá ver um pop-up com os arquivos de suporte do novo Gateway (certificados, chaves). Certifique-se de clicar em Download e salvar os arquivos em um local seguro (talvez seja necessário permitir que o navegador faça o download de vários arquivos). Os arquivos baixados são:

- **cups_url.txt**: Contém a URL que deve ser usada no seu gateway para apontar para o servidor CUPS
- **cups.trust**: Contém o certificado de confiança CUPS
- **cups.crt**: Contém o certificado usado para se conectar ao servidor CUPS
- **cups.key**: Contém a chave privada usada para se conectar ao servidor CUPS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### Configurar o Gateway

Em seguida, precisamos configurar o [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), veja [Get Started](https://wiki.seeedstudio.com/pt-br/quick_start_with_M2_MP/) para mais detalhes.

Faça login na página Luci, navegue até `LoRa` > `LoRa Network`

- **Passo 1**: Configurações da Rede LoRa
Navegue até **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>

- **Passo 2**: Defina o Modo para Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>

- **Passo 3**: Configurações da Basics Station:

2. **Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

3. **Server**: Selecione CUPS

4. **URL:**: Copie a URL do seu arquivo `cups_url.txt`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>

```cpp
Example: https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>

5. **Authentication Mode:** TLS Server and Client Authentication

6. **trust**/**certificate**/**key** : Copie o conteúdo dos arquivos que baixamos antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

Clique em `Save & Apply` quando tudo estiver configurado.

Quando o seu gateway estiver configurado corretamente, o status deverá mudar para `Connected`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>

## Configurações do Dispositivo

### Configurar o dispositivo

Por favor, consulte [Connect Wio Tracker 1110 Dev Board to TTN](https://wiki.seeedstudio.com/pt-br/connect_wio_tracker_to_TTN/) para selecionar a plataforma para o TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

### Adicionar dispositivo no LoRa Cloud™ Locator

Em seguida, volte para a página web do LoRa Cloud™ Locator, navegue até `DEVICE SETTINGS`, clique em `Add New Device`.

**Tracker type**: `LoRa Basics™ Modem SDK`

Escolha o APPKey como modo de ativação e, em seguida, copie o Dev EUI, Join EUI e APP key que definimos anteriormente.
**Network**: `The Things Network Community`, e selecione o seu cluster regional, depois clique em `Create` para adicionar o seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

Depois que o dispositivo ingressar na rede com sucesso, você poderá ver suas mensagens aqui.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

Em seguida, navegue até `TRACKING`, você já pode verificar a localização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>

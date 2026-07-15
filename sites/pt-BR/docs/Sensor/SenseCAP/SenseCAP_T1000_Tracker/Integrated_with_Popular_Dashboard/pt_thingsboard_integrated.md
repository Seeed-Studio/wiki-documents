---
description: Rastreador SenseCAP T1000 e Thingsboard Integrado
title: ThingsBoard Integrado(via TTS)
keywords:
  - ThingsBoard
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /thingsboard_integrated
last_update:
  date: 8/20/2024
  author: Jessie
createdAt: '2024-08-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/thingsboard_integrated/
---


[ThingsBoard](https://thingsboard.io/) é uma plataforma IoT de código aberto que permite o desenvolvimento, gerenciamento e escalonamento rápidos de projetos de IoT. Nosso objetivo é fornecer a solução IoT pronta para uso em nuvem ou local que disponibilize a infraestrutura do lado do servidor para suas aplicações de IoT.

O conteúdo deste capítulo orientará os usuários sobre como conectar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao ThingsBoard por meio do TTN.

## Introdução

Antes de iniciar a configuração, consulte [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para conectar primeiro seu SenseCAP T1000 Tracker ao TTS.

## Configurar o ThingsBoard

Para começar, crie uma conta no [ThingsBoard](https://thingsboard.cloud/).

### Criar conversor

Primeiro, precisamos criar um Uplink Data Converter que será usado para receber mensagens do TTS.

Navegue até `Data converters`, clique em `Create new converter`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png" alt="pir" width={800} height="auto" /></p>

Nomeie o conversor, ative o `Debug mode`, copie o código a seguir e clique em `Add`.

```cpp
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var telemetry = {};

var messages = data.uplink_message.decoded_payload.messages[0];
for (var i = 0; i < messages.length; i++) {
    var measurement = messages[i];

    var type = measurement.type.toLowerCase();
    var typeKey = '';
    for (var j = 0; j < type.length; j++) {
        if (type[j] === ' ') {
            typeKey += '_';
        } else {
            typeKey += type[j];
        }
    }

    telemetry[typeKey] = measurement.measurementValue;
}

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png" alt="pir" width={800} height="auto" /></p>

### Adicionar integração

Navegue até `Integration`, clique em `Add Integration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `The Things Stack Community`<br/>
**Enable**: `Enable integration`  `Debug mode`  `Allow create devices or assets`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png" alt="pir" width={800} height="auto" /></p>

Escolha `Select existing` e selecione aquele que criamos antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png" alt="pir" width={800} height="auto" /></p>

Ignore o `Downlink data converter`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png" alt="pir" width={800} height="auto" /></p>

**Region**: Região onde sua aplicação foi registrada dentro do TTS<br/>
**Username**: Nome de usuário do TTS<br/>
**Password**: Senha do TTS<br/>
**Use API v3**: Defina como `Enable`

:::tip
As informações podem ser encontradas na integração MQTT do TTS.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createNEW.png" alt="pir" width={800} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png" alt="pir" width={800} height="auto" /></p>

### Visualização de dados

Navegue até `Entities` -> `Devices`, aqui você pode ver que:

- um novo dispositivo foi registrado no ThingsBoard
- na seção `Latest Telemetry` você verá os dados atualizados do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Dashboard

Navegue até `Dashboards`, clique em `Create new dashboard`.

Insira o título do dashboard e clique em `Next`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png" alt="pir" width={800} height="auto" /></p>

Adicione um `widget`, selecione o widget a ser adicionado.

### Mapa de localização

Selecione um widget de `map`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `Device`<br/>
**Device**: O dispositivo que criamos.<br/>
**Data key**: `latitude`, `longitude`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png" alt="pir" width={800} height="auto" /></p>

### Outros parâmetros

Consulte os passos acima para adicionar outros widgets.

#### Temperatura

**Device**: O dispositivo que criamos.<br/>
**Data key**: `air_temperature`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png" alt="pir" width={800} height="auto" /></p>

#### Bateria

**Device**: O dispositivo que criamos.<br/>
**Data key**: `battery`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png" alt="pir" width={800} height="auto" /></p>

Aqui está um exemplo básico, você pode personalizar seu próprio dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png" alt="pir" width={800} height="auto" /></p>

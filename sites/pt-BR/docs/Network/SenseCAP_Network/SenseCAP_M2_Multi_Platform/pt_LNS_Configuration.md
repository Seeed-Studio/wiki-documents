---
description: Configuração de LNS do Gateway Multi-Plataforma SenseCAP M2
title: Configuração de LNS
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_m2_LNS_config
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-08-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_m2_LNS_config/
---


O Gateway Multi-Plataforma SenseCAP M2 tem um LoRaWAN Network Server integrado, é baseado em Chirpstack e fornece uma solução rápida e confiável para lançar uma rede LoRaWAN.

## Configuração do Gateway

Configure o gateway pela interface Web UI, verifique o [Quick Start](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para fazer login no Luci.

### Configurações do Plano de Canal

Navegue até `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecione a Região e o plano de Frequência.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Após a configuração, clique em `Save&Apply`

### Configuração do Servidor de Rede Local

Navegue até `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

Defina Mode como `Local Network Server`, adicione suas informações de MQTT (Broker Host/Port/User/Password), os outros parâmetros podem permanecer com o valor padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Save&Apply` para aplicar suas configurações.

:::tip Note
Levará cerca de 1 minuto para iniciar o processo, então você poderá acessar a configuração da GUI.
:::

## Configuração da GUI do ChirpStack

Faça login na GUI do ChirpStack via `http://localhost:8080`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

A conta e senha padrão: `admin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

Então você verá a página do dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### Verificar as Regiões

Navegue até `Network Server` > `Regions`.

Deve haver um Region ID, clique nele e confirme as informações, elas devem ser as mesmas das suas configurações na etapa anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Perfil de Dispositivo

Navegue até `Tenant` > `Device Profiles` e clique em `Add Profile`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**MAC version**: LoRaWAN 1.0.3

**Regional parameters reversion**: A

**ADR algorithm**: Default ADR algorithm(LoRa only)

**Expected uplink interval**: Personalizado, padrão 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

Navegue até `Codec` e selecione `JavaScript functions`, copie o [SenseCAP Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) e envie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Gateway

Navegue até `Gateway` e clique em `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

Defina o Name e o Gateway ID (você pode clicar para gerar o ID aleatoriamente), então envie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Dispositivo

Navegue até `Tenant` > `Application` e clique em Add `Application`.

Dê um nome para sua aplicação e envie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

Navegue até sua aplicação e clique em `Add device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

Cole o EUI do seu dispositivo e selecione o perfil de dispositivo que adicionamos antes, então envie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

Cole a Application key e clique em enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
Verifique o guia do usuário para configurar o dispositivo corretamente, selecione a plataforma como `Other Platform`.
:::

### Verificar o status do dispositivo

Verifique os `Events` do seu dispositivo, você receberá o pacote de junção quando o dispositivo se juntar à rede.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

Você também pode verificar os detalhes do pacote.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## Integrações

Este capítulo é para desenvolvimento de serviços em nuvem, a seguinte diretriz é para referência.

### MQTT

#### Tópico

A integração MQTT expõe todos os eventos conforme documentado por tipos de Evento.

O tópico de evento padrão é:

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

Consulte [Event Types](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) para mais detalhes.

Você pode encontrar o Application id na aba da sua aplicação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Event types**

|up|Evento de uplink|
| - | - |
|status|Margem e status da bateria|
|join|Evento de junção de dispositivo|
|ack|Confirmação de downlink (n)ack|
|txack|Confirmação de transmissão de downlink|
|log|Evento de log (ou erro)|
|location|Evento de localização|
|integration|Evento de integração|

:::info Note
`+` significa receber todas as mensagens
:::

**Exemplo**:

- Para receber mensagens de uplink de todos os dispositivos sob um determinado gateway:

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- Para receber todas as mensagens de todos os dispositivos sob a aplicação:

```cpp
application/+/device/+/event/+
```

- Para receber todas as mensagens de dispositivos de todos os gateways:

```cpp
gateway/+/device/+/event/+
```

Você pode verificar o `gatewayid` para distinguir os gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### Payload

Quando object.valid é true, significa que a análise de dados foi bem-sucedida, então você pode percorrer object.messages e extrair o tipo de dado que precisar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) Descrição de exemplo de payload de evento Up para sensores SenseCAP LoRaWAN S210X:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: Bateria
- `upload_interval`: intervalo de upload, unidade: Segundo
- `upload_version`: Versão de Hardware/Firmware
- `report_telemetry`: Valor da medição

O `measurementId` na mensagem ‘report_telemetry’, por favor verifique [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) Descrição de exemplo de payload de evento Up para SenseCAP Data logger:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

O `measurementId` na mensagem ‘report_telemetry’, por favor verifique [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) para mais detalhes.

### HTTP

Clique em `+` na aba HTTP para adicionar uma nova integração HTTP.

O LNS enviará mensagens como POST para a URL configurada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

Envie as informações da sua URL.

:::info Note
Suporta apenas http, não https.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

A integração HTTP fará requisições POST para o endpoint ou endpoints de evento configurados (várias URLs podem ser configuradas, separadas por vírgulas). O parâmetro de query de URL event indica o tipo do evento.

A integração HTTP expõe todos os eventos conforme documentado por [Event Type](https://www.chirpstack.io/docs/chirpstack/integrations/events.html).

**Exemplo**:

(main.py)

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse_qs 

from chirpstack_api import integration 

from google.protobuf.json_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON marshaler 

\# False - Protobuf marshaler (binary) 

json = False 

def do_POST(self): 

self.send_response(200) 

self.end_headers() 

query_args = parse_qs(urlparse(self.path).query) 

content_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content_len) 

if query_args["event"][0] == "up": 

self.up(body) 

elif query_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device_info.dev_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device_info.dev_eui, join.dev_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve_forever() 
```

### Downlink

Mensagem de downlink:

:::info
É recomendado marcar o downlink como retido. Assim, o comando não será executado repetidamente.
:::

O tópico padrão é：`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`: Verifique o comando de downlink no **Manual do Usuário do Dispositivo** para mais detalhes.

|Tópico|application/APPLICATION_ID/device/DEV_EUI/command/down|
| - | :- |
|devEUI|EUI do dispositivo|
|confirmed|true/false(se o payload deve ser enviado como dado de downlink confirmado ou não)|
|fPort|FPort a ser usado (deve ser > 0)|
|data|dados codificados em base64 (texto simples, será criptografado pelo ChirpStack)|

**Exemplo**:

1) Reiniciar os sensores LoRaWAN SenseCAP S210x:

**Tópico**:

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`
**Json：**

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

1) Definir o intervalo de upload dos sensores LoRaWAN SenseCAP S210x para 1 min:

**Tópico**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ

" 
} 
```

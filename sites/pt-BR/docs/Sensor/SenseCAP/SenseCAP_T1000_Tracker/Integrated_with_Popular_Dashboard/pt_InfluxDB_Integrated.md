---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB Integrado (via TTS)
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/18/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_InfluxDB_TTS/
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) é um banco de dados de séries temporais de código aberto, com foco em leitura de alto desempenho, escrita de alto desempenho, armazenamento eficiente e análise em tempo real de grandes quantidades de dados de séries temporais. Além de protocolos nativos como HTTP e UDP, também é compatível com protocolos de comunicação de componentes como CollectD, Graphite, OpenTSDB e Prometheus. Amplamente utilizado em monitoramento DevOps, monitoramento de IoT, análise em tempo real e outros cenários.

O conteúdo deste capítulo orientará os usuários sobre como conectar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao InfluxDB por meio do TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, verifique [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para conectar primeiro o seu SenseCAP T1000 Tracker ao TTS.

## Preparação

Antes de configurar o InfluxDB, precisamos instalar o agente Telegraf (versão 1.9.2 ou superior).

[Telegraf Configuration](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## Configurar o InfluxDB Cloud

Faça login no seu [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### Criar Bucket

Na guia **Buckets**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

Clique no botão **Create Bucket** para criar um novo bucket.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

Dê um nome ao seu bucket, escolha por quanto tempo os dados permanecerão no banco de dados e clique em **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### Gerar Tokens

Navegue até a guia **API TOKENS** e clique no botão **GENERATE API TOKEN** para criar um token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Configurar o Telegraf

### Integração MQTT

Esta seção mostra como configurar seu agente Telegraf com o plugin MQTT Consumer usado para conectar ao servidor MQTT do TTS.

Navegue até a guia **TELEGRAF** e clique em **CREATE CONFIGURATION**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

Selecione o bucket que criamos antes e selecione system.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

Dê um nome à sua configuração, selecione Create and Verify e depois Finish.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

Depois de ter baixado o arquivo de configuração do Telegraf conforme descrito na configuração do InfluxDB Cloud 2.0, atualize-o adicionando as seguintes linhas e modificando-as de acordo com as informações do seu servidor MQTT:

```cpp
[[inputs.mqtt_consumer]]
#
#MQTT broker URLs to be used. The format is scheme://host:port, schema can be tcp, ssl, or ws.
  servers = ["tcp://localhost:1883"]
#
#Topics to subscribe to
  topics = ["#"]
#
#Username and password
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
#Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
#Define the message format
  data_format = "json"
```

:::info
Você pode verificar as informações do TTS na aba a seguir.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

Em seguida, você precisa copiar o token gerado anteriormente na aba Tokens e exportá-lo para uma variável de ambiente para ser usado pelo plugin de saída do InfluxDB, ou você pode simplesmente passá-lo diretamente como um valor de token no arquivo de configuração. Você pode definir a variável de ambiente usando o seguinte comando no seu terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Execute o agente Telegraf no seu terminal com o seguinte comando:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### Integração HTTP

Esta seção mostra como configurar o agente Telegraf com o plugin HTTP Listener v2 e como criar uma integração Webhook correspondente no The Things Stack.

Atualize a configuração do Telegraf que você baixou anteriormente, conforme descrito na configuração do InfluxDB Cloud 2.0, adicionando as seguintes linhas e modificando-as de acordo com a sua configuração:

```cpp
[[inputs.http_listener_v2]]
#
# Address and port to host HTTP listener on
  service_address = ":8080"
#
# Path to listen to
  path = "/telegraf"
#
# HTTP methods to accept
  methods = ["POST"]
#
# Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
# Define the message format
  data_format = "json"
```

Copie o token gerado na aba Tokens e use-o como valor de token para o plugin de saída no seu arquivo de configuração do Telegraf, ou exporte-o para uma variável de ambiente com o seguinte comando no seu terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Inicie o agente Telegraf executando o seguinte comando no terminal:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## Data Explorer

Selecione o tipo de explorer, selecione **_measurement** no menu suspenso na janela Filter e marque a caixa **mqtt_consumer**. Em seguida, você pode escolher o tópico e o parâmetro que deseja monitorar.

**Dados de Localização**

FROM: Seu bucket <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

Você também pode clicar em **SAVE AS** no canto superior direito para salvar este explorer como uma célula de Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## Dashboards (Opcional)

Um dashboard é onde você visualiza e interage com os dados em tempo real. Você pode personalizar o dashboard de acordo com suas necessidades.

Navegue até a guia **Dashboard** e clique em **Create Dashbaord**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>

---
description: Visualização de dados com Power BI
title: Visualização de dados com Power BI
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_Azure_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100_Azure_to_PowerBI/
---
# Visualização de dados do Microsoft Azure IoT com Power BI

**SenseCAP K1100 - The Sensor Prototype Kit** representa a essência da comunicação LoRa® concentrada pela Seeed Studio em tecnologia e produtos de inteligência de borda, para a implantação e domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria integrada de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. do ar &amp; Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. do ar &amp; Umidade &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade do solo &amp; Temp.</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade do solo &amp; Temp. &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) é um conjunto de serviços em nuvem gerenciados pela Microsoft que conectam, monitoram e controlam bilhões de ativos de IoT. Ele inclui segurança e sistemas operacionais para dispositivos e equipamentos, juntamente com dados e análises que ajudam as empresas a criar, implantar e gerenciar aplicações de IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

Conecte e analise todo o seu patrimônio de dados combinando o Power BI com os serviços de análise do Azure — incluindo Azure Synapse Analytics e Azure Data Lake Storage. Analise petabytes de dados, use recursos avançados de IA, aplique proteção adicional de dados e compartilhe insights com mais facilidade em toda a sua organização.

Transforme seus dados em uma vantagem competitiva usando o Power BI e o Azure juntos para conectar, combinar e analisar todo o seu patrimônio de dados.

Neste tutorial, você configura seu aplicativo IoT Central para exportar a telemetria coletada dos dispositivos. Em seguida, você usa o Power BI para criar um painel personalizado para o gerente da loja visualizar os insights derivados da telemetria.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

Neste tutorial, você aprenderá como:

- Configurar um aplicativo IoT Central para exportar telemetria para um hub de eventos.
- Usar Logic Apps para enviar dados de um hub de eventos para um conjunto de dados de streaming do Power BI.
- Criar um painel do Power BI para visualizar dados no conjunto de dados de streaming.

## Preparação preliminar

Para concluir este tutorial, você precisa de:

- Uma assinatura do Azure. Se você não tiver uma assinatura do Azure, crie uma [conta gratuita](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) antes de começar.
- Uma conta do Power BI. Se você não tiver uma conta do Power BI, inscreva-se em uma [avaliação gratuita do Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de começar.
- Em qualquer um dos wikis a seguir, você já terá enviado dados com sucesso para o Azure IoT Central.
  - [Conectar SenseCAP ao Azure IoT Central via Node-RED](https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [Conectar Wio Terminal ao Microsoft Azure IoT Central (WiFi)](https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Criar um grupo de recursos

Antes de criar seu hub de eventos e aplicativo lógico, você precisa criar um **grupo de recursos** para gerenciá-los. O grupo de recursos deve estar na mesma localização que o seu aplicativo IoT Central de análise de checkout na loja. Para criar um grupo de recursos:

**Etapa 1.** Faça login no [portal do Azure](https://portal.azure.com/).

**Etapa 2.** Na navegação à esquerda, selecione **Resource groups**. Em seguida, selecione **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- Para **Subscription**, selecione o nome da assinatura do Azure que você usou para criar seu aplicativo IoT Central.
- Para o nome do **Resource group**, insira **retail-store-analysis**.
- Para a **Region**, selecione a mesma região que você escolheu para o aplicativo IoT Central.

**Etapa 3.** Selecione Review + Create.

Na página Review + Create, selecione Create.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

Agora você tem um grupo de recursos chamado retail-store-analysis na sua assinatura.

## Configurar um Event Hub

Antes de configurar o aplicativo de monitoramento de varejo para exportar telemetria, você precisa criar um event hub para receber os dados exportados. As etapas a seguir mostram como criar seu event hub:

**Etapa 4.** No [portal do Azure](https://portal.azure.com/), selecione **Create a resource** no canto superior esquerdo da tela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**Etapa 5.** Em Search the Marketplace, insira Event Hubs e pressione Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**Etapa 6.** Criar um event hub

Na página Event Hubs, selecione Create. Na página Create Namespace, siga as etapas a seguir:

- Selecione a mesma **Subscription** que você usou para criar seu aplicativo IoT Central.
- Selecione o grupo de recursos **retail-store-analysis**.
- Insira um nome exclusivo para o namespace, como **k1100-retail-store-analysis**.
- Selecione o mesmo local que você usou para o seu aplicativo IoT Central.
- Escolha o nível de preços Basic.

Selecione **Review + create**. Talvez você tenha que esperar alguns minutos para que o sistema disponibilize os recursos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**Etapa 7.** Obter uma chave compartilhada do Event Hubs.

No [portal do Azure](https://portal.azure.com/), navegue até o grupo de recursos **retail-store-analysis**.

Aguarde a conclusão da implantação. Talvez seja necessário selecionar Refresh para atualizar o status da implantação. Você também pode verificar o status da criação do namespace do event hub em Notifications.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

No grupo de recursos **retail-store-analysis**, selecione o **Event Hubs Namespace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

Você verá a página inicial do seu Event Hubs Namespace no portal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

Você precisa de uma **connection string** com permissões de envio para se conectar a partir do IoT Central. Para criar uma connection string:

- No seu namespace do Event Hubs no portal do Azure, selecione **Shared access policies**. Selecione **+ Add**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- Insira **SendPolicy** como o nome da política, selecione **Send** e, em seguida, selecione Create.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- Selecione **SendPolicy** na lista de políticas. Anote o valor de **Connection string-primary key**. Você irá usá-lo ao configurar o destino de exportação no IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**Etapa 8.** Obter uma chave de gerenciamento e escuta do Event Hubs.

Você precisa de uma connection string com permissões de gerenciamento e escuta para se conectar ao event hub a partir do seu logic app. Para recuperar uma connection string:

- No seu namespace do Event Hubs no portal do Azure, selecione Shared access policies.

- Selecione **RootManageSharedAccessKey** na lista de políticas.
Anote o valor de **Connection string-primary key**. Você irá usá-lo ao configurar o logic app para buscar telemetria do seu event hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**Etapa 8.** Criar um event hub para usar.

Agora que você tem um Event Hubs Namespace, pode criar um event hub para usar com seu aplicativo IoT Central:

- Na página inicial do seu Event Hubs Namespace no portal, selecione **+ Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- Na página Create Event Hub, insira **store-telemetry** como nome e, em seguida, selecione **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

Agora você tem um event hub que pode usar ao configurar a exportação de dados do seu aplicativo IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## Configurar a exportação de dados

Agora que você tem um event hub, pode configurar seu aplicativo IoT Central para exportar telemetria dos dispositivos conectados. As etapas a seguir mostram como configurar a exportação.

**Etapa 1.** Faça login no seu [IoT Central Application](https://apps.azureiotcentral.com/home).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**Etapa 2.** Exportação de dados

Selecione **Data export** no painel esquerdo. Selecione **+ New export**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- Insira **Telemetry export** como o nome da exportação.
- Selecione **Telemetry** como o tipo de dados a serem exportados.
- Na seção Destinations, selecione **create a new one**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- Novo destino
  - Insira **Store data event hub** como o **Destination name**.
  - Selecione **Azure Event Hubs** como o **Destination type**.
  - Selecione **Connection string** como a **Authorization**.
  - Cole a connection string para o **SendPolicy** que você salvou ao criar o event hub.
  - Insira store-telemetry como o Event Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

Selecione **Create** e depois **Save**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

Na página Telemetry export, aguarde o status da exportação mudar para Healthy.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

A exportação de dados pode levar alguns minutos para começar a enviar telemetria para o seu event hub. Você pode ver o status da exportação na página Data exports.

## Criar os conjuntos de dados do Power BI

Seu dashboard do Power BI exibirá dados do seu aplicativo de monitoramento de varejo. Nesta solução, você usa conjuntos de dados de streaming do Power BI como fonte de dados para o dashboard do Power BI. Nesta seção, você define o esquema dos conjuntos de dados de streaming para que o logic app possa encaminhar dados do event hub. As etapas a seguir mostram como criar dois conjuntos de dados de streaming para os sensores ambientais e um conjunto de dados de streaming para o sensor de ocupação:

**Etapa 1.** Faça login na sua [conta Power BI](https://app.powerbi.com/).

**Etapa 2.** Criar um workspace.

Selecione **Workspaces** e, em seguida, selecione **Create a workspace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

Na página Create a workspace, insira **In-store analytics - checkout** como o nome do Workspace. Selecione **Save**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Etapa 3.** Criar um conjunto de dados de streaming.

Na página do workspace, selecione **+ New** > **Streaming dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

Na página New streaming dataset, escolha API e selecione Next.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Insira **Sensor** como o nome do Dataset.

Insira os três Values from stream na tabela a seguir:

| Value name                | Value type                   |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| Light                     | Number                       |
| Acceleration X            | Number                       |
| Acceleration Y            | Number                       |
| Acceleration Z            | Number                       |
| Sound                     | Number                       |

Agora você tem conjuntos de dados de streaming. O logic app irá rotear telemetria do Wio Terminal conectado ao seu aplicativo In-store analytics - checkout para o conjunto de dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## Criar um logic app

Nesta solução, o logic app lê telemetria do event hub, faz o parse dos dados e, em seguida, os envia para os conjuntos de dados de streaming do Power BI que você criou.

Antes de criar o logic app, você precisa do ID do dispositivo do Wio Terminal que conectou ao seu aplicativo IoT Central.

**Etapa 1.** Anotar o Device ID.

- Faça login no seu [IoT Central application](https://apps.azureiotcentral.com/myapps). Selecione **Devices** no painel esquerdo. Em seguida, selecione **Seeed Wio Terminal**.

Anote o **Device ID**. Na captura de tela a seguir, o ID é **k1100**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**Etapa 2.** Criar o logic app

- Faça login no [portal do Azure](https://portal.azure.com/) e selecione **Create a resource** no canto superior esquerdo da tela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- Em Search the Marketplace, insira **Logic App** e, em seguida, pressione Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

Na página de criação do Logic App:

- Selecione a mesma **Subscription** que você usou para criar sua aplicação IoT Central.
- Selecione o grupo de recursos **retail-store-analysis**.
- Insira um nome exclusivo para o seu logic app, como **yourname-retail-store-analysis**.
- Selecione a mesma localização que você usou para sua aplicação IoT Central.
- Selecione o Type como **Consumption**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

Selecione Create. Talvez você precise esperar alguns minutos para que o sistema provisiona os recursos.

**Etapa 2.** Configurar o Logic Apps Designer

No portal do Azure, navegue até o seu novo logic app. Na página Logic Apps Designer, role para baixo e selecione **Blank Logic App**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- Em **Search connectors and triggers**, insira **Event Hubs**.
- Em **Triggers**, selecione **When events are available in Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- Insira **Store telemetry** como o **Connection name**.
- Selecione **Access key** como o **Authentication Type**.
- Cole a cadeia de conexão do event hub para a política **RootManageSharedAccessKey** da qual você fez uma anotação anteriormente e selecione **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

Na ação When events are available in Event Hub:

- Em **Event Hub name**, selecione **store-telemetry**.
- Em **Content type**, selecione **application/json**.
- Defina o Interval como três e o Frequency como segundos.
- Selecione Save para salvar seu logic app.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

Para adicionar a lógica ao design do seu logic app, selecione **Code view**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

Substitua `"actions: {},"` pelo seguinte JSON. Em seguida, substitua o espaço reservado `[YOUR RUUVITAG DEVICE ID]` pelo ID do seu Wio Terminal.

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

Selecione **Save** e, em seguida, selecione **Designer** para ver a versão visual da lógica que você adicionou.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

Selecione **Switch by DeviceID** para expandir a ação. Em seguida, selecione **Sensor environment** e selecione **Add an action**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

Em **Search connectors and actions**, insira **Add rows to a dataset**. Selecione a ação **Power BI Add rows to a dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

Selecione **Sign in** e siga as instruções para fazer login na sua conta Power BI. Após a conclusão do processo de login, na ação Add rows to a dataset:

- Selecione **In-store analytics - checkout** como o **Workspace**.
- Selecione **Sensor** como o **Dataset**.
- Selecione **RealTimeData** como a **Table**.
- Selecione **Add new parameter** e, em seguida, selecione os campos **Timestamp**, **Light**, **Acceleration X**, **Acceleration Y**, **Acceleration Z** e **Sound**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- Selecione o campo **Timestamp** e, em seguida, selecione **enqueuedTime** na lista Dynamic content.
- Selecione o campo **Light** e, em seguida, selecione **See more** ao lado de Parse Telemetry. Em seguida, selecione Light.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- Selecione o campo **Acceleration X** e, em seguida, selecione **See more** ao lado de Parse Telemetry. Em seguida, selecione accelX.
- Selecione o campo **Acceleration Y** e, em seguida, selecione **See more** ao lado de Parse Telemetry. Em seguida, selecione accelY.
- Selecione o campo **Acceleration Z** e, em seguida, selecione **See more** ao lado de Parse Telemetry. Em seguida, selecione accelZ.
- Selecione o campo **Sound** e, em seguida, selecione **See more** ao lado de Parse Telemetry. Em seguida, selecione Sound.

Selecione **Save** para salvar suas alterações. A ação Sensor environment se parece com a captura de tela a seguir.

Selecione a ação Zone 2 environment e selecione Add an action.

Em Search connectors and actions, insira Add rows to a dataset.

O logic app é executado automaticamente. Para ver o status de cada execução, navegue até a página Overview do logic app no portal do Azure e selecione Runs history. Selecione Refresh para atualizar a lista de execuções.

## Criar um painel do Power BI

Agora você tem telemetria fluindo da sua aplicação IoT Central através do seu event hub. Em seguida, seu logic app analisa as mensagens do event hub e as adiciona a um conjunto de dados de streaming do Power BI. Agora, você pode criar um painel do Power BI para visualizar a telemetria:

**Etapa 1.** Faça login na sua [conta Power BI](https://app.powerbi.com/).

**Etapa 2.** Selecione **Workspaces** > **In-store analytics - checkout**.

**Etapa 3.** Selecione **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Insira **Store analytics** como o nome do painel e selecione **Create**.

### Adicionar gráficos de linha

Adicione blocos de gráfico de linha para mostrar o Tri-axis dos sensores integrados do Wio Terminal. Use as informações da tabela a seguir para criar os blocos. Para adicionar cada bloco, comece selecionando **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecione **Custom Streaming Data** e, em seguida, selecione **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configure a coordenada horizontal para exibir o timestamp e a coordenada vertical para exibir os valores de dados nos eixos X, Y e Z.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

Quando o fluxo de dados começar a ser transferido, você poderá ver o painel como um gráfico de linhas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### Add cards to show environmental data

### Add tiles to show checkout occupancy data-->

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

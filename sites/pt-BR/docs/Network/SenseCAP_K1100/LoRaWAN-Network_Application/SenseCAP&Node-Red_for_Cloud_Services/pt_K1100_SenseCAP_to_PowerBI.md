---
description: SenseCAP & Node-RED para Power BI
title: SenseCAP & Node-RED para Power BI
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_SenseCAP_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_PowerBI/
---
# Conectando SenseCAP ao Power BI via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da tecnologia de comunicação LoRa® e de produtos de inteligência de borda, para a forma mais fácil de implantar e dominar aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração por Bluetooth, a compatibilidade com a rede LoRaWAN® global, a bateria integrada de 19 Ah e o poderoso suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp &amp; Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp &amp; Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Power BI

Conecte e analise todo o seu conjunto de dados combinando o Power BI com os serviços de análise do Azure — incluindo Azure Synapse Analytics e Azure Data Lake Storage. Analise petabytes de dados, use recursos avançados de IA, aplique proteção adicional de dados e compartilhe com mais facilidade insights em toda a sua organização.

Neste tutorial vamos guiá-lo sobre como importar dados de sensores do **SenseCAP** para o **Power BI** para um processamento de dados mais aprofundado usando o Node RED.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

## Preparação preliminar

Para concluir este tutorial, você precisa de:

- Se você não instalou ou não sabe o que é Node-RED, consulte os [tutoriais de Node-RED & SenseCAP](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/).
- Uma conta do Power BI. Se você não tiver uma conta do Power BI, inscreva-se em uma [avaliação gratuita do Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de começar.
- Em qualquer um dos seguintes wikis, você já tiver enviado dados com sucesso para o SenseCAP.
  - [Enviar dados do sensor para o SenseCAP via LoRa®](https://wiki.seeedstudio.com/pt-br/K1100-quickstart/#enviar-dados-do-sensor-para-o-sensecap-via-lora)

<!--## Create SenseCAP node

**Step 1.** Start Node-RED

Start Node-RED by typing the command `node-red` in the terminal and open a browser and enter the address **http://localhost:1880** in the address bar to access the editor of Node-RED.

**Step 2.** Install the SenseCAP node

Click on the upper-right menu bar and select Settings.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/6.png"/></div>

Search and install **node-red-sensecap-paas** in the **Paletts -> Install**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/1.png"/></div>

**Step 3.** Configure SenseCAP node

Add **sensecap.OpenStream** from the storage bar on the left，double-click it to enter the configuration page, then click the edit button to edit **sensecap.OpenStream** node.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/2.png"/></div>

Please edit your account.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/7.png"/></div>

In the new page, please fill in the following fields.

- Name: Name this account.
- Orgnization ID: From the **Organization Information** section, copy the Organization ID.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/8.png"/></div>

- API Key: Please click on **Security** -> **Access API keys** on the left side of the dashboard. Then Create an Access Key.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/9.png"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/10.png"/></div>

Then just click on the **Update** or **Save** button.

On the screen for setting up nodes, please fill in the following fields.
- Name: Name your node.
- EUI: Please enter the EUI of your device, which can be found in the SenseCAP console.
- Measurement ID: Sensor number. Information on sensor numbers can be found in the [SenseCAP Documentation Centre](https://sensecap-docs.seeed.cc/sensor_types_list.html).
- Output Format: Select **Power BI**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/5.png"/></div>

!!!Note
    Nossa recomendação é preencher o Measurement ID, que será um valor de sensor cada vez que for transmitido para o Power BI. Se isso for deixado em branco, vários valores de sensores serão transmitidos ao mesmo tempo e o Power BI receberá dados confusos.
    Se você precisar analisar valores de vários sensores ao mesmo tempo, poderá usar vários nós SenseCAP.-->

## Criar nó MQTT

**Passo 1.** Iniciar o Node-RED

Inicie o Node-RED digitando o comando `node-red` no terminal e abra um navegador e insira o endereço [http://localhost:1880](http://localhost:1880) na barra de endereços para acessar o editor do Node-RED.

**Passo 2.** Criar nó MQTT

Usamos o nó **Network -> mqtt in** e configuramos mqtt no formato da SenseCAP API conforme solicitado no [tutorial anterior](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/#nó-mqtt).

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: O formato é `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Seu ID de organização. Nós o obtivemos em [Get the SenseCAP API](/pt-br/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` usa seus próprios números ou letras minúsculas gerados aleatoriamente.

- Topic Format: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Seu ID de organização. Nós o obtivemos em Get the SenseCAP API.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificação exclusiva dos dispositivos sensores. Essas informações podem ser encontradas na etiqueta na parte de trás do Grove - Wio E5, bem como no dispositivo do console SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Uma interface física no dispositivo à qual o sensor está conectado. Para o kit K1100, o valor padrão aqui é 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID do valor medido. Esse ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação SenseCAP</a></td>
    </tr>
  </tbody></table>

:::note
Recomendamos que um nó mqtt in transmita apenas os valores de um único sensor para evitar confusão de dados causada pela transmissão dos valores de vários sensores ao mesmo tempo.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>

**Step 3.** Validate MQTT nodes

Depois de configurado, clique no botão **Deploy** no canto superior direito para verificar se a configuração foi bem-sucedida. Se estiver preenchido corretamente, a palavra **Connected** será exibida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar nó function

O relatório de dados para o Power BI precisa seguir um formato de dados específico, portanto é necessário adicionar um nó function para processar o formato dos dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arraste o nó function da barra de funções à esquerda, clique duas vezes nele para entrar na página de edição e, em seguida, copie o código para On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4100) {
            body.co2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4150) {
            body.accelX = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4151) {
            body.accelY = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4152) {
            body.accelZ = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4192) {
            body.soundintensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4195) {
            body.tvoc = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4097) {
            body.airtemperature = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4098) {
            body.airhumidity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            body.timestamp = msg.payload.timestamp
        }
        msg.payload = body;
    }
    return msg;
}
```

:::tip
    O código acima é comum a todos os sensores e você pode optar por colá-lo inteiro em um nó function ou recortar uma seção de um dos sensores que você está usando para utilizar.
    Vale notar que o nome do sensor no programa precisa corresponder ao nome definido posteriormente no Power BI para que o fluxo de dados seja transferido com sucesso. Por exemplo, no programa acima o sensor de luz tem o nome de valor: **lightIntensity**.
:::

## Criar os conjuntos de dados do Power BI

**Passo 1.** Faça login na sua [conta do Power BI](https://app.powerbi.com/).

**Passo 2.** Criar um workspace.

Selecione **Workspaces** e, em seguida, selecione **Create a workspace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

Na página Create a workspace, insira **In-store analytics - checkout** como o nome do Workspace. Selecione **Save**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Passo 3.** Criar um conjunto de dados de streaming.

Na página do workspace, selecione **+ New** > **Streaming dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

Na página New streaming dataset, escolha API e selecione Next.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Insira **Light-Sensor** como o nome do Dataset.

Insira os valores de luz do fluxo na tabela a seguir:

| Nome do valor             | Tipo de valor                |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| lightIntensity            | Number                       |

:::tip
O Nome do valor deve ser o mesmo que o nome do programa function no Node RED.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>

Agora você tem um conjunto de dados de streaming. Por favor, anote a **Push URL** que você obteve aqui, pois a usaremos na próxima etapa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png" /></div>

## Configurar nó http request

Adicione **http request** da barra de armazenamento à esquerda, clique duas vezes nele para entrar na página de configuração e, em seguida, clique no botão de edição para editar o nó **http request**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png" /></div>

Copie a URL obtida na seção anterior para o campo URL na página http request.

Basta alterar o método para **POST** e salvar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png" /></div>

## Fazer o deploy e observar os dados

**Passo 1.** Deploy

Em seguida, conectamos todos os nós e clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você verá o nó mqtt in mostrando connected.

Se você quiser ver as informações de log dos dados, pode adicionar um nó debug após o nó function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png" /></div>

Quando o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, poderemos então verificar os dados no log de debug do Node-RED.

**Passo 2.** Configurar dashboards do Power BI

Selecione **Workspaces** > **In-store analytics - checkout**.

Selecione **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Insira **Store analytics** como o nome do dashboard e selecione **Create**.

### Adicionar gráficos de linha

Adicione blocos de gráfico de linha para mostrar o valor de luz dos sensores embutidos do Wio Terminal. Use as informações na tabela a seguir para criar os blocos. Para adicionar cada bloco, comece selecionando **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecione **Custom Streaming Data** e, em seguida, selecione **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configure a coordenada horizontal para exibir o carimbo de data/hora e a coordenada vertical para exibir os valores de dados no valor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png" /></div>

Quando o fluxo de dados começar a ser transferido, você poderá ver o dashboard como um gráfico de linha.

Você também pode adicionar mais gráficos ou análises de dados para atender às suas necessidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png" /></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca utilizada sob licença da LoRa Alliance®.

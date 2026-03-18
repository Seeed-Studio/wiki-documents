---
description: SenseCAP & Node-RED para Microsoft Azure IoT Central
title: SenseCAP & Node-RED para Microsoft Azure IoT Central
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_SenseCAP_to_Azure_IoT_Central
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_Azure_IoT_Central/
---


# Conectando o SenseCAP ao Azure IoT Central via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a concentração da Seeed Studio na essência da comunicação LoRa® em tecnologia e produtos de inteligência de borda, para a implantação e domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) do SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só o ajuda na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp do Ar &amp; Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp do Ar &amp; Umidade &amp; CO2</strong></a></td>
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

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) é um conjunto de serviços em nuvem gerenciados pela Microsoft que conectam, monitoram e controlam bilhões de ativos de IoT. Ele inclui segurança e sistemas operacionais para dispositivos e equipamentos, juntamente com dados e análises que ajudam as empresas a criar, implantar e gerenciar aplicações de IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Microsoft Azure IoT Central

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) é uma solução SaaS (software como serviço) de IoT global totalmente gerenciada que facilita conectar, monitorar e gerenciar seus ativos de IoT em escala. É altamente segura, acompanha o crescimento do seu negócio, garante que seus investimentos sejam repetíveis e integra-se com seus aplicativos de negócios existentes. Ela também preenche a lacuna entre seus aplicativos de negócios e os dados de IoT. Por fim, oferece gerenciamento centralizado para reconfigurar e atualizar seus dispositivos.

O conteúdo deste capítulo continuará a usar o Node-RED apresentado anteriormente e facilitará o gerenciamento do kit K1100 no Microsoft Azure IoT Central por meio do uso do Node-RED.

Se você ainda não instalou ou não sabe o que é Node-RED, consulte os [Tutoriais Node-RED & SenseCAP](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/).

## Instalar o SenseCraft

**SenseCraft** é uma plataforma de software de código aberto para criar sensores inteligentes sem código. Ela fornece uma solução completa pronta para uso para detectar o mundo real, processar dados e enviar os dados para a nuvem da maneira mais fácil e rápida possível, sem nenhuma experiência em programação! Agora é compatível com o Wio Terminal.

Ao usar o SenseCraft, podemos transferir valores de sensores do kit K1100 diretamente para a plataforma SenseCAP sem programação. Isso é, claro, alcançado via **LoRaWAN**®.

:::note
Se você quiser acessar o Azure IoT Central via **WiFi (MQTT)**, consulte este [Wiki](https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Azure-IoT-Central/).
:::
**Passo 1.** Baixe o firmware para o seu computador

Em **Latest release**, clique em **SenseCraft-vx.x.uf2** para baixar o arquivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Faça o upload do firmware para o Wio Terminal

Conecte o Wio Terminal ao PC e ligue-o em ON, entre no **Bootloader Mode** deslizando o interruptor de energia para baixo, para mais longe da posição "ON", solte, deslize novamente e solte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Quando o Wio Terminal estiver no modo Bootloader, o LED azul começará a pulsar de uma forma diferente do piscar normal.
:::
Abra o Explorador de Arquivos no seu PC e você verá uma nova unidade externa chamada **Arduino**; arraste o **arquivo .uf2** baixado anteriormente para essa **unidade Arduino**.

Agora carregamos com sucesso o SenseCraft no Wio Terminal.

## Criar nó MQTT

**Passo 1.** Inicie o Node-RED

Inicie o Node-RED digitando o comando `node-red` no terminal e abra um navegador e insira o endereço [http://localhost:1880](http://localhost:1880) na barra de endereços para acessar o editor do Node-RED.

**Passo 2.** Criar nó MQTT

Usamos o nó **Network -> mqtt in** e configuramos o mqtt no formato da API do SenseCAP conforme solicitado no [tutorial anterior](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc
- Porta: 1883
- Protocolo: MQTT V3.1.1
- ID do Cliente: O formato é `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Seu ID de organização. Nós o obtivemos em [Get the SenseCAP API](/pt-br/K1100_sensecap_node-red#get-the-sensecap-api).

  - `<Random ID>` usa seus próprios números gerados aleatoriamente ou letras minúsculas.

- Formato do Tópico: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Seu ID de organização. Nós o obtivemos em Get the SenseCAP API.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificação exclusiva dos dispositivos de sensor. Esta informação pode ser encontrada no adesivo na parte de trás do Grove - Wio E5, bem como no dispositivo do console SenseCAP.</td>
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
      <td align="center">ID do valor medido. Este ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação SenseCAP</a></td>
    </tr>
  </tbody></table>

**Passo 3.** Validar nós MQTT

Uma vez configurado, clique no botão **Deploy** no canto superior direito para verificar se a configuração foi bem-sucedida. Se estiver preenchido corretamente, a palavra **Connected** será exibida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar Microsoft Azure IoT Central

**Passo 1.** Faça login no Azure IoT Central.

Acesse o site oficial do [Azure IoT Central](https://apps.azureiotcentral.com/home), clique em **Build** no menu de navegação à esquerda e clique em **Custom apps**.

Se você ainda não estiver conectado ao Azure IoT Central, será solicitado que conclua um registro/login neste momento.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Passo 2.** Preencha **Application name** e escolha **Standard 0** em **Pricing plan**. A URL da aplicação será criada automaticamente quando você preencher o nome da aplicação. Neste exemplo, vamos realizar esta tarefa com custo mínimo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Se você é um novo usuário do Azure IoT Central, recomendamos que selecione **Free**, pois isso não consumirá suas taxas.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Passo 3.** Clique em **Create** para criar o novo aplicativo. Agora você configurou com sucesso o Azure IoT Central!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/3.png" /></div>

**Passo 4.** Criar um modelo de Dispositivo

Crie um novo modelo de dispositivo clicando em **Device templates** na barra de menu à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Selecione **Wio Terminal** como nosso modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Em seguida, basta clicar em **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Então, é criado um modelo pronto para uso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Passo 5.** Criar um Dispositivo

Clique em **Devices -> Seeed Wio Terminal** no menu à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Clique em **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Clique no botão **Create** para concluir a criação do dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Depois de criar o dispositivo, você verá o dispositivo que acabamos de criar em **Device**. Acesse o dispositivo e clique no botão **Connect** no canto superior esquerdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aqui precisamos das informações exibidas ali.

```
ID scope
Device ID
Primary key
```

Anote essas informações, pois as usaremos nas próximas etapas.

## Configurar Node-RED

**Passo 1.** Baixar Paletas Azure IoT

Clique na barra de menu superior direita e selecione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Pesquise e instale **node-red-contrib-azure-iot-central** em **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png" /></div>

**Passo 2.** Configurar o nó Azure Iot Central

Arraste o nó Azure Iot Central da barra de funções à esquerda, dê um duplo clique para entrar na página de configuração e, em seguida, clique no botão de edição para editar o nó Azure Iot Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png" /></div>

A configuração deve ser preenchida da seguinte forma:

- Transport: MQTT
- Authentication: SAS
- Scope ID
- Device ID
- Primary Key

Os três últimos são exatamente os que obtemos em **Configure Microsoft Azure IoT Central**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png" /></div>

**Passo 3.** Configurar o nó function

O relatório de dados para o Azure Iot Central precisa seguir um formato de dados específico, portanto é necessário adicionar um nó function para processar o formato dos dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png" /></div>

Arraste o nó function da barra de funções à esquerda, dê um duplo clique para entrar na página de edição e depois copie o código para On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if(length>=2){
        var measurementId = strs[length-1]
        var body = {}
        var value = payload.value
        if(measurementId==4100){
            body.co2 = value
        }else if(measurementId==4103){
            body.soilmoisture= value
        }else if(measurementId==4150){
            body.accelX= value
        }else if(measurementId==4151){
            body.accelY = value
        }else if(measurementId==4152){
            body.accelZ = value
        }else if(measurementId==4192){
            body.soundintensity = value
        }else if(measurementId==4193){
            body.lightIntensity = value
        }else if(measurementId==4195){
            body.tvoc = value
        }else if(measurementId==4097){
            body.airtemperature = value
        }else if(measurementId==4098){
            body.airhumidity = value
        }else if(measurementId==4175){
            body.AIdetection_1 = value
        }else if(measurementId==4176){
            body.AIdetection_2 = value
        }else if(measurementId==4177){
            body.AIdetection_3 = value
        }else if(measurementId==4178){
            body.AIdetection_4 = value
        }else if(measurementId==4179){
            body.AIdetection_5 = value
        }else if(measurementId==4180){
            body.AIdetection_6 = value
        }else if(measurementId==4181){
            body.AIdetection_7 = value
        }else if(measurementId==4182){
            body.AIdetection_8 = value
        }else if(measurementId==4183){
            body.AIdetection_9 = value
        }else if(measurementId==4184){
            body.AIdetection_10 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Em seguida, conectamos todos os nós e clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você poderá ver o nó mqtt in mostrando connected.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png" /></div>

Se você quiser ver as informações de log dos dados, pode adicionar um nó debug depois do nó function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png" /></div>

Quando o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, poderemos verificar os dados no Azure Iot Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png" /></div>

## Apresentação de Dados

No entanto, como não definimos o tipo do sensor, os dados visíveis na coluna **Raw data** são colocados em **Unmodeled data**, portanto precisamos analisar os dados de acordo com o código acima.

Precisamos alterar o estilo do modelo exibido em **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Depois de fazer suas alterações, basta clicar em **Save** e depois em **Publish**. Todas as alterações em **Device template** precisarão ser salvas e publicadas seguindo este procedimento antes que entrem em vigor.

:::tip
Por favor, preencha o **Display name** aqui de acordo com o nome do código JavaScript fornecido acima.
:::
Claro, se você quiser enriquecer sua página de painel de dados, também poderá configurá-la para ser exibida em Overview.

Clique em **Overview** no menu de navegação à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Expanda o menu suspenso **select a telemetry** e selecione a telemetria que você deseja visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Clique em **Add tile** e você verá o bloco adicionado ao painel do Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png" /></div>

**Observação:** Você pode redimensionar ou alterar a visualização dos blocos de acordo com sua preferência

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png" /></div>

Então, em seguida, personalize o seu painel de monitoramento de dados do sensor como quiser!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png" /></div>

## Solução de Problemas

> P1: Por que não consigo encontrar a Palette no Node-RED?

R: Se você não conseguir encontrar a Palette nas configurações, verifique se aparece alguma mensagem de erro no seu terminal quando você inicia o Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

O cenário mais comum é que a sua versão do npm é muito antiga para iniciar o editor de Palette.

Se a sua situação for como a descrita acima, execute o **Powershell como administrador** e insira o seguinte comando para atualizar o npm.

```sh
npm install -g npm
```

Depois, basta reiniciar o Node-RED.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

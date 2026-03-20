---
description: Conecte o N3uron com dispositivos que suportam MQTT e Modbus
title: Conecte o N3uron com dispositivos que suportam MQTT e Modbus
keywords:
  - Edge Box RPi 200
  - MQTT
  - IIoT
  - Industrial
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox_rpi_200_N3uron_modbus_mqtt_aws
last_update:
  date: 5/10/2024
  author: Kasun Thushara and Xabier Fernández
createdAt: '2024-05-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox_rpi_200_N3uron_modbus_mqtt_aws/
---
## Introdução

Na automação industrial, Modbus se destaca como um dos protocolos mais comuns. MQTT surgiu como o principal protocolo para IoT em automação industrial devido a muitas características. Seu design leve, eficiência, escalabilidade e suporte a mensagens assíncronas são notáveis. No MQTT, os dispositivos se comunicam apenas quando há um evento a ser relatado, em contraste com verificações constantes de atualização. Essa abordagem orientada a eventos, juntamente com o reporte por exceção — enviando dados apenas quando eles se desviam das normas ou em gatilhos específicos — preserva largura de banda e recursos, otimizando a transmissão de dados para aplicações críticas de IoT.

A potente combinação do Edge Box RPi 200 e do Duo [N3uron](https://n3uron.com/) facilita o gerenciamento eficiente da planta ao fornecer conectividade robusta e recursos de manipulação de dados. Este Wiki enfatiza a importância do Modbus TCP em ambientes industriais, destacando a integração perfeita de dispositivos MQTT para aprimorar ainda mais a conectividade.

## Pré-requisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos fortemente estudar o guia [Getting Started with N3uron](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-n3uron/). Ele fornece insights essenciais sobre como navegar na interface web do N3uron, compreender conceitos como o módulo Web UI e Web Vision, entender o conceito de tags e criar dashboards básicos. Se você ainda não explorou esses fundamentos, é aconselhável fazê-lo antes de prosseguir. Você pode acessar o guia através do link fornecido.

### Configurar as definições de Ethernet

Como o domínio de IP do seu PLC é diferente das suas configurações sem fio, você pode ter que alterar manualmente a configuração de IP. Para isso,

- Passo 01: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- Passo 02: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu PLC e defina prioridades usando o comando 'metric'. O menor valor de métrica tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Criação e configuração do módulo Modbus

Criar uma instância de módulo na interface WebUI do N3uron

- Passo 01: No painel Navigation, selecione **Config**.
- Passo 02: No painel Explorer, selecione **Modules**.
- Passo 03: Clique no menu Model e selecione **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- Passo 04: A instância pode receber qualquer nome, mas, para o exemplo, usaremos **ModbusClient**.
- Passo 05: Defina a propriedade Module Type como **ModbusClient**. Deixe o restante das propriedades com seus valores padrão e clique em **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Criação e configuração de canal

- Passo 01: Sob o Modbus Client e Model criados, selecione **New Channel**. Dê ao canal o nome **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- Passo 02: Agora, vamos nos comunicar com o PLC usando Modbus TCP. Forneça o **endereço IP** do PLC e o **endereço da porta**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
 Se você estiver usando Modbus RTU, há várias configurações a serem consideradas. Para isso, você precisa fornecer detalhes como a porta COM, taxa de baud, etc. Para mais informações sobre como configurar os protocolos Modbus RTU e TCP no N3uron, consulte o [guia](https://docs.n3uron.com/docs/modbus-client-configuration) fornecido.
:::

- Passo 03: Adicionar um dispositivo: Cada canal pode ter um ou mais dispositivos. Defina um **nome** para o dispositivo e prossiga com a configuração. Neste caso, o nome do dispositivo é **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- Passo 04: Há algumas configurações que você pode ajustar por meio desta interface. Você pode encontrar mais detalhes neste link. Entretanto, para este caso, vamos mantê-las como estão.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Configuração de Tag

- Passo 01: Vá para o **WebUI**, selecione **Config** e clique em **Tag**. Na seção Model, clique no menu e escolha **New Tag**. Dê o nome Q1. Normalmente, Q é usado para indicar a bobina de saída.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/addtag.PNG" /></center>

- Passo 02: Em seguida, você precisa fazer as seguintes configurações.
  - Source : Enabled/Yes
  - Module Type : ModbusClient
  - ModuleName: ModbusClient
  - Config: Device: Client/PLC
  - Modbus address: 008931
  - Data type: Boolean
e **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 É recomendável consultar o datasheet do PLC ou do fabricante do dispositivo em relação aos endereços Modbus. Lá você encontrará detalhes sobre endereços de entrada, saída e holding. De acordo com essas especificações, ajustes devem ser feitos na linha Modbus address na configuração da tag. Por exemplo, se o fabricante indicar a bobina de saída Q1 como 8193, o endereço deve ser configurado como 008193. Da mesma forma, se a entrada de rede for indicada como 1 e for do tipo coil, o endereço deve ser definido como 000001.
:::

- Passo 03: Simulação em tempo real

Uma vez conectado ao sistema, você pode visualizar o status em tempo real das bobinas de saída e das bobinas de entrada.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 A interação com o PLC por meio da interface do N3uron requer permissões de acesso apropriadas, incluindo capacidades de leitura e escrita.
:::

## Criar uma instância de módulo MQTT na interface WebUI do N3uron

- Passo 01: No painel Navigation, selecione **Config**.
- Passo 02: No painel Explorer, selecione **Modules**.
- Passo 03: Clique no menu Model e selecione **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- Passo 04: A instância pode receber qualquer nome, mas, para o exemplo, usaremos **MQTT**.
- Passo 05: Defina a propriedade Module Type como **MqttClient**. Deixe o restante das propriedades com seus valores padrão e clique em **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configurar o módulo MQTT do N3uron

- Passo 01: No painel Explorer, selecione a instância MQTT que você acabou de criar.
- Passo 02: Clique no botão Model e selecione New Connection.
- Passo 03: Dê um nome à New connection. Neste exemplo, ela foi nomeada **MqttClient**:

  - Destination broker : Custom
  - Authentication mode: Password
  - Username : Your Broker Username
  - Password: Your Broker Password
  - Protocol:MQTT
  - Broker URL:Broker ip
**Save** configurations

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Assinar um tópico usando o módulo MQTT do N3uron

- Passo 01: No painel Model, clique com o botão direito na conexão AWS, selecione New Subscriber e dê um nome. Neste exemplo, usaremos simplesmente Subscriber.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- Passo 02: Clique nele e adicione um nome no campo Topic. Neste exemplo, usamos device/data.

:::note
Para testes e experiência prática, fornecemos um [Arduino code](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) que pode ser executado no XIAO. Além disso, você precisará inserir suas próprias credenciais nesse código antes de fazer o upload.
:::

- Passo 03: Defina as seguintes propriedades usando os valores mostrados abaixo, deixando o restante com seus valores padrão:

  - Qos: Qos 0.
  - Encoding: UTF8
  - Compression: None
  - Serialization: JSON
  - Data parser/Type: MqttClient JSON
E **Save**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
 Aqui, utilizamos um analisador de dados configurado para o formato MQTTClient JSON. O dispositivo XIAO publica dados para o broker nesse formato. Se o seu dispositivo não publicar dados nesse formato específico, você precisará identificar o formato que ele utiliza e criar um trecho de código JavaScript personalizado para tratar os dispositivos adequadamente. Para orientações adicionais, consulte as [diretrizes](https://docs.n3uron.com/docs/mqtt-client-custom-parser) fornecidas.
:::

## Criar uma Tag

- Passo 01: No painel Explorer, selecione **Tags**.
- Passo 02: No menu Model, clique com o botão direito no ícone da pasta, selecione **New Tag** e dê um nome. Neste exemplo, usaremos **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- Etapa 03: No painel Configuration, defina as seguintes propriedades usando os valores mostrados abaixo, deixando o restante com seus valores padrão:

  - Type: Number.
  - Source/Enabled: Sim
  - Module Type: MqttClient
  - Module name: MQTT
  - Config/Subscriber: MqttClient/Subscriber
Clique em **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- Etapa 04: Simulação em tempo real
Uma vez conectado ao sistema, você pode visualizar o status em tempo real da saída do MQTT Broker.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bônus: Vamos publicar o status da fábrica com a AWS

:::note
 Fornecemos instruções passo a passo sobre como conectar a [nuvem AWS ao seu dispositivo Edge Box RPi 200](https://wiki.seeedstudio.com/pt-br/Edgebox-Rpi-200_N3uron_AWS/). Se você é novo neste wiki, consulte este link.

:::

- Etapa 01: No painel Explorer, selecione a instância **MQTT** que você acabou de criar.
- Etapa 02: Clique no botão de menu Model e selecione **New Connection**.
- Etapa 03: Dê um nome à nova conexão. Neste exemplo, ela foi nomeada **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- Etapa 04: Configure as propriedades da conexão:

  - A: Selecione **Amazon Web Services** no menu suspenso **Destination Broker**. **Authentication mode** será **Certificate**. Além disso, o **Client Id** é **N3uron** neste exemplo.
  - B: Carregue o **Certificate, Private key and CA certificate** que você baixou e salvou quando criou o Thing no AWS IoT Console.
  - C: No console AWS IoT, no menu à esquerda, vá para **Settings** e copie seu **Device Data Endpoint**. Volte ao N3uron e cole-o no campo **Broker URL**.
  - D: Deixe o restante das propriedades com seus valores padrão e clique em **Save**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- Etapa 05: No painel Model, clique com o botão direito na conexão **MqttPublisher** que você acabou de configurar, selecione **New Publisher** e dê a ela um nome. Neste exemplo, usaremos simplesmente **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- Etapa 06: Clique nela e adicione um nome no campo **Topic**. Neste exemplo, usamos **N3uron**.

- Etapa 07: Clique no botão **Tag Filter**, selecione **New Tag Filter** e altere o nome padrão. Neste exemplo, usamos **TagFilter**. Deixe Mode, Path e Regex pattern com seus valores padrão. Com essa configuração, todas as tags configuradas no N3uron serão publicadas em nosso AWS Broker.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- Etapa 08: Vá para o console AWS IoT e, no menu à esquerda, selecione **MQTT test client**. Clique na aba **Subscribe to a topic**, insira **N3uron** em Topic filter para assinar tudo e clique em **Subscribe**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awsend.PNG" /></center>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

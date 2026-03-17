---
description: Este wiki fornece um guia passo a passo para configurar um servidor OPC UA usando Node-RED em um reComputer R1000 com Raspberry Pi. Ele inclui instruções detalhadas sobre instalação e configuração do nó de servidor OPC UA, conexão de dispositivos Modbus TCP e RTU e monitoramento de dados usando o cliente OPC UaExpert. Perfeito para quem deseja integrar e visualizar dados industriais com facilidade.
title: reComputer R1000 atuando como servidor OPC UA com Node-RED
keywords:
  - Controlador de Borda
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_nodered_opcua_server
last_update:
  date: 08/14/2024
  author: Kasun Thushara
createdAt: '2024-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_opcua_server/
---

## Introdução

A Arquitetura Unificada OPC (OPC Unified Architecture - UA), introduzida em 2008, representa uma evolução significativa nos padrões de comunicação industrial. Diferente de seus antecessores sob o guarda-chuva do OPC Classic, o OPC UA é uma arquitetura orientada a serviços e independente de plataforma, que unifica todas as funcionalidades das especificações OPC anteriores em uma estrutura única e extensível. Essa abordagem moderna não apenas preserva as capacidades centrais do OPC Classic, como também as aprimora com um design em múltiplas camadas que atende às demandas complexas dos ambientes industriais atuais.

A arquitetura do OPC UA é projetada com princípios-chave em mente: ela garante **equivalência funcional** ao mapear todas as especificações OPC Classic baseadas em COM para o framework UA, permitindo transições perfeitas para sistemas legados. A **independência de plataforma** do OPC UA permite que ele opere em uma ampla gama de dispositivos, desde microcontroladores embarcados até infraestruturas em nuvem, tornando-o versátil e preparado para o futuro. A **segurança** é uma pedra angular do OPC UA, com recursos robustos de criptografia, autenticação e auditoria para proteger a integridade e a confidencialidade dos dados. Além disso, sua **natureza extensível** permite a integração contínua de novos recursos sem interromper as aplicações existentes, garantindo que ele possa se adaptar às necessidades industriais em evolução. As capacidades de **modelagem abrangente de informações** do OPC UA também fornecem uma ferramenta poderosa para definir estruturas de informação complexas, tornando-o uma escolha ideal para indústrias que exigem soluções de gerenciamento de dados detalhadas e escaláveis.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o Seu Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

Neste tutorial, criaremos um exemplo prático de configuração do nosso reComputer R1000 como um servidor OPC UA usando Node-RED. Vamos focar na coleta de dados de dispositivos Modbus TCP e RTU, embora valha mencionar que você também pode coletar dados de dispositivos MQTT, BACnet e outros. Para fins de demonstração, usaremos especificamente Modbus TCP e RTU. Se você não estiver familiarizado com a coleta de dados a partir desses protocolos, consulte nossos tutoriais anteriores:

- [reComputer R1000 com Node-RED e BACnet IP](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_node_red_bacnet_ip/)
- [reComputer R1000 com Node-RED e Modbus TCP](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_node_red_modbus_tcp/)
- [reComputer R1000 com Node-RED e MQTT](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_mqtt/)

## Instalando o Nó de Servidor OPC-UA

**Acessar o Node-RED no reComputer R1000**

Abra seu navegador web e acesse `http://{reComputer_IP_ADDRESS}:1880` para abrir a interface do Node-RED no seu reComputer R1000.

**Instalar o Nó de Servidor OPC-UA**

No Node-RED, vá até o menu no canto superior direito e selecione Manage palette.

Na guia Install, pesquise por `node-red-contrib-opcua-server`.

Clique no botão Install ao lado do pacote de nó para adicioná-lo ao seu ambiente Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**Adicionar o Nó Compact OPC-UA Server.**

Após a instalação, localize os nós OPC-UA no palette do Node-RED. Arraste e solte o nó de servidor compacto no seu espaço de trabalho para começar a configurar seu servidor OPC-UA.

## Configuração de Porta

Depois de arrastar o nó de servidor compacto para o seu espaço de trabalho, clique duas vezes nele para abrir as configurações de configuração.

No painel de configuração, você verá o número da Porta atribuído ao servidor. Anote esse número de porta, pois você precisará dele nas próximas etapas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**Criar a URL de Endpoint**

Altere para a guia **Discovery** dentro das configurações.

Aqui, você precisará criar uma **URL de Endpoint** para o servidor OPC-UA.

Use o seguinte formato para a URL:
`opc.tcp://<IP_reComputer>:<Port>`

Por exemplo, se o endereço IP do seu reComputer for 192.168.0.157 e a porta atribuída for 54840, sua URL de Endpoint será:
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## Armazenando Variáveis no Contexto do Fluxo

No Node-RED, a função flow.set() é usada para armazenar dados no contexto do fluxo, permitindo salvar informações que podem ser acessadas por qualquer nó dentro do mesmo fluxo. Isso é particularmente útil quando você precisa compartilhar dados entre diferentes partes do seu fluxo.

**Adicionar um Nó Function**

Arraste e solte um nó Function no seu espaço de trabalho do Node-RED. Clique duas vezes no nó Function para abrir o editor.

**Armazenando Dados de Temperatura**

Suponha que você queira armazenar o valor de temperatura de um sensor Modbus RTU como uma variável de contexto de fluxo. No editor do nó Function, insira o seguinte código.

```bash
flow.set("Temperature", msg.payload);

```

Esse código salva os dados de temperatura (contidos em msg.payload) em uma variável de contexto de fluxo chamada "Temperature".

**Conectando o Nó Function**

Conecte esse nó Function ao nó onde os dados brutos de temperatura estão chegando. Isso garante que o valor de temperatura seja armazenado assim que for recebido do sensor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**Armazenando Valores DI/DO do CLP**

Se você precisar armazenar um valor específico de um array de Entrada/Saída Digital (DI/DO) de um CLP, poderá fazer isso usando uma abordagem semelhante. Por exemplo, para armazenar o valor da terceira bobina no array, use o seguinte código:

```bash
flow.set("Coil3", msg.payload[2]);

```

Esse código extrai o terceiro valor do array msg.payload e o armazena em uma variável de contexto de fluxo chamada "Coil3".

**Conectando o Nó Function para DI/DO**

Conecte esse nó Function ao nó que gera o array DI/DO. Isso armazenará o valor específico da bobina sempre que o array for atualizado.

## Configuração do Espaço de Endereços do Servidor OPC UA

A aba **Address Space** é onde o Modelo de Informação do servidor OPC UA é construído. Esse modelo define a estrutura e os dados disponíveis para os clientes OPC UA, usando classes e métodos do SDK node-opcua.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Import the OPC UA SDK and utilities from the coreServer
const opcua = coreServer.choreCompact.opcua;

```

### Criação de Namespace

O **namespace** é criado dentro do espaço de endereços do servidor. Esse namespace conterá todos os nós e variáveis específicos da sua aplicação.

```bash
// Create a new namespace for the server within the address space
const namespace = addressSpace.getOwnNamespace();
// Internal reference to the server instance for use within functions
var flexServerInternals = this;

```

### Tipos de Dados e Códigos de Status OPC UA

As classes **Variant, DataType e StatusCodes** do SDK OPC UA são usadas para definir os tipos e os status das variáveis que serão publicadas pelo servidor.

```bash
// Define OPC UA data structures and types for later use
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```

### Inicializando Variáveis

As variáveis que serão publicadas pelo servidor são inicializadas no contexto do fluxo. Essas variáveis representam os dados que os clientes irão ler ou escrever.

```bash
// Initialize variables in the flow context that will be exposed by the OPC UA server
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### Definindo a Estrutura de Pastas no Espaço de Endereços

Uma estrutura de pastas é definida dentro do namespace do servidor para organizar os nós. Essa estrutura facilita para os clientes a navegação pelos dados disponíveis.

```bash
// Find the root folder node in the address space
const rootFolder = addressSpace.findNode("RootFolder");

// Add a new device folder under the root for the RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Add subfolders for digital outputs (DIO) and analog values under the device folder
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### Definindo Views OPC UA

As views OPC UA são hierarquias personalizadas que fornecem maneiras alternativas para os clientes navegarem pelos dados do servidor, além da estrutura de pastas padrão.

```bash
// Create a view for digital outputs (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Create a view for analog values
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Add references to the nodes in the respective views
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Reference to the Humidity node
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Reference to the Coil2 node
});
```

## Conectando ao servidor OPC UA com o UaExpert

Para se conectar ao nosso endpoint de servidor OPC UA, você precisará de um cliente OPC UA. Siga estas etapas para começar:

**Baixar o UaExpert**

[Visite](https://www.unified-automation.com/downloads/opc-ua-clients) e faça o registro para baixar o UaExpert, um cliente OPC UA gratuito.

**Instalar o UaExpert**

Após o download, instale o UaExpert em seu computador seguindo as instruções exibidas na tela.

**Configurar a conexão**

Inicie o UaExpert e vá para a seção Endpoints. Crie uma nova conexão inserindo a URL de endpoint do seu servidor OPC UA.
For example:`opc.tcp://<IP_reComputer>:<Port>`

Exemplo: `opc.tcp://192.168.0.157:54840`

Configure quaisquer definições de segurança ou regras de conexão necessárias com base na configuração do seu servidor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**Conectar ao servidor**

Quando a conexão estiver estabelecida, navegue até o Address Space no UaExpert. Você verá a pasta principal chamada RaspberryPI-reComputer, que você criou no Node-RED. Dentro dessa pasta principal, você encontrará duas subpastas: Analog e DIO.

**Monitorar valores**

Arraste e solte as variáveis das pastas Analog e DIO na área de visualização de dados do UaExpert. Agora você pode monitorar visualmente como os valores mudam em tempo real conforme o seu sistema opera.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

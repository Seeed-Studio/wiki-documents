---
description: Aprenda como integrar o aplicativo N3uron no reComputer R1000 com recursos de computação de borda e interagir com o AWS IoT Core. Neste tutorial, veremos as etapas para assinar dados de saída de forma eficiente.
title: reComputer R1000 conecta AWS IoT Core com N3uron
keywords:
  - reComputer-R1000
  - Primeiros passos
  - IIoT
  - Industrial
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_n3uron_aws
last_update:
  date: 7/11/2024
  author: Kasun Thushara
createdAt: '2024-03-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron_aws/
---
## Introdução

Descrevemos o processo de transmissão de dados do seu [dispositivo reComputer-R1000 com AWS IoT Core usando o protocolo MQTT](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_aws/). Este tutorial será integrado perfeitamente ao processo mencionado. Neste tutorial, vamos nos aprofundar nas particularidades da interface entre a plataforma N3uron Edge IIoT e o AWS IoT Core.

## Pré-requisitos

### Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos fortemente estudar o guia [Primeiros Passos com N3uron](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron/). Ele fornece informações essenciais sobre como navegar na interface web do N3uron, entender conceitos como o módulo Web UI e Web Vision, compreender o conceito de tags e criar dashboards básicos. Se você ainda não explorou esses fundamentos, é recomendável fazê-lo antes de prosseguir. Você pode acessar o guia através do link fornecido.

Se você ainda não explorou nosso guia sobre integração do [AWS IoT Core com o reComputer-R1000](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_aws/), também recomendamos que o faça. Este guia abrangente cobre tudo, desde o básico até as etapas avançadas de publicação de um valor no IoT Core. **Como ele complementa o tutorial atual, é útil se familiarizar com esse conteúdo também**.

## Configurar a Plataforma IIoT N3uron

**Criar uma instância de módulo na interface WebUI do N3uron**

- Etapa 01: No painel **Navigation**, selecione **Config**.
- Etapa 02: No painel **Explorer**, selecione **Modules**.
- Etapa 03: Clique no menu **Model** e selecione **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG" /></center>

- Etapa 04: A instância pode receber qualquer nome, mas, para o exemplo, usaremos **MQTT**.
- Etapa 05: Defina a propriedade **Module Type** como **MqttClient**. Deixe o restante das propriedades com seus valores padrão e clique em **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configurar o módulo MQTT do N3uron no painel Explorer do WebUI

- Etapa 01: No painel **Explorer**, selecione a instância **MQTT** que você acabou de criar.
- Etapa 02: Clique no botão de menu Model e selecione **New Connection**.
- Etapa 03: Dê um nome à nova conexão. Neste exemplo, ela foi chamada de **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG" /></center>

- Etapa 04: Configure as propriedades da conexão:

  - A: Selecione **Amazon Web Services** no menu suspenso **Destination Broker**. O **Authentication mode** será **Certificate**. Além disso, o **Client Id** é **N3uron** neste exemplo.
  - B: Carregue o **Certificate, Private key and CA certificate** que você baixou e salvou quando criou o Thing no AWS IoT Console.
  - C: No console do AWS IoT, no menu à esquerda, vá para **Settings** e copie o seu **Device Data Endpoint**. Volte ao N3uron e cole-o no campo **Broker URL**.
  - D: Deixe o restante das propriedades com seus valores padrão e clique em **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG" /></center>

## Assinar um tópico usando o módulo MQTT do N3uron

- Etapa 01: No painel **Model**, clique com o botão direito na conexão **AWS**, selecione **New Subscriber** e dê um nome. Neste exemplo, usaremos simplesmente **Subscriber**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG" /></center>

- Etapa 02: Clique nele e adicione um nome no campo Topic. Neste exemplo, usamos device/data. (No nosso tutorial do AWS, publicamos dados sob este tópico.)

- Etapa 03: Defina as seguintes propriedades usando os valores mostrados abaixo, deixando o restante com seus valores padrão:
  - **Qos**: Qos 0.
  - **Encoding**: UTF8
  - **Compression**: None
  - **Serialization**: JSON
  - **Data parser/Type**: MqttClient JSON

E salve.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG" /></center>

## Criar uma Tag

- Etapa 01: No **painel Explorer**, selecione **Tags**.
- Etapa 02: No menu Model, clique com o botão direito no ícone da pasta, selecione **New Tag** e dê um nome. Neste exemplo, usaremos **Subscribed_value**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG" /></center>

- Etapa 03: No painel Configuration, defina as seguintes propriedades usando os valores mostrados abaixo, deixando o restante com seus valores padrão:
  - **Type**: Number.
  - **Source/Enabled**: Yes
  - **Module Type**: MqttClient
  - **Module name**: MQTT
  - **Config/Subscriber**: AWS/Subscriber

- Etapa 04: Clique em **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG" /></center>

Depois de executar o script em python que fornecemos no AWS IoT e reComputer-R1000 e AWS IoT.
Volte para a interface WebUI do N3uron e, no painel esquerdo, selecione **Data/Real Time**. Agora você deverá ver a tag **Subscribed_Value** que criou anteriormente com um valor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG" /></center>

## Visualização

Se você criou um módulo webvision, pode iniciar estas etapas.

- Etapa 01: Navegue até **WebVision** na seção **Config** e clique em **Open Designer**. Faça login usando suas credenciais de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG" /></center>

- Etapa 02: Na seção Templates, crie um novo Container com o nome que desejar. Em seguida, defina esse container como inicial. Isso definirá esta como nossa tela inicial do WebVision. Ele aparecerá com um símbolo de asterisco (*) ao lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG" /></center>

- Etapa 03: Altere a cor de fundo do container.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG" /></center>

- Etapa 04: Dentro do container Main, navegue até **Components** e adicione um novo componente. Para este exemplo, selecione o componente **Label**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG" /></center>

- Etapa 05: Você pode modificar as propriedades do label para uma aparência melhor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG" /></center>

- Etapa 06: Dentro do **componente Label**, selecione a tag que fornecerá os valores exibidos no componente Label.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG" /></center>

- Etapa 07: Selecione a propriedade da tag

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG" /></center>

- Etapa 08: Em seguida, navegue até WebVision na seção Config e clique em Open UI. Faça login usando suas credenciais de Administrador.

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

 Subsequentemente, você verá o resultado final, que envolve a atualização dos valores do label de acordo com os dados assinados a partir da nuvem.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG" /></center>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

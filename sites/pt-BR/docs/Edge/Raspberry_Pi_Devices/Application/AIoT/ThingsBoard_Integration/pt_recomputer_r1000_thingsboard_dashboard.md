---
description: Aprenda a usar o ThingsBoard no dispositivo reComputer com este guia passo a passo. Descubra como adicionar dispositivos, configurar nós MQTT e criar dashboards interativos usando recursos populares para monitoramento de dados eficiente.
title: Crie Dashboards IoT Dinâmicos com ThingsBoard e reComputer R1000
keywords:
  - reComputer-R1000
  - Primeiros passos
  - IIoT
  - Industrial
  - Thingsboard
  - Computação de Borda
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /recomputer_r1000_thingsboard_dashboard
last_update:
  date: 10/25/2024
  author: Kasun Thushara
createdAt: '2024-10-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_thingsboard_dashboard/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## Introdução

O [ThingsBoard Community Edition](https://thingsboard.io/), uma plataforma open source, oferece recursos poderosos para criar dashboards interativos que se destacam entre outras soluções IoT de código aberto. Com uma variedade de ferramentas gráficas, o ThingsBoard permite que os usuários visualizem e monitorem facilmente os dados coletados de dispositivos IoT, tornando-o ideal para gerenciar e analisar dados em tempo real. Seja para automação industrial, projetos de cidades inteligentes ou monitoramento ambiental, o ThingsBoard oferece uma forma versátil e amigável de acompanhar e responder a insights de dados de IoT.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Se você é novo no ThingsBoard, certifique-se de que ele está instalado corretamente. Consulte [este wiki](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_thingsboard_ce/) para obter orientações.

## Login no ThingsBoard

Use as seguintes credenciais para fazer login:

:::note
Username: tenant@thingsboard.org

Password: tenant
:::

## Etapa 1: Provisionar um Dispositivo

- Navegue até a página `Devices` na seção `Entities`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- Clique no ícone `+` no canto superior direito da tabela e selecione `Add new device` no menu suspenso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- Insira o nome do dispositivo. Forneça Client Id, Password, Username. Clique em `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- À medida que você adiciona mais dispositivos, eles aparecerão no topo da tabela. A tabela ordena automaticamente os dispositivos pelo horário de criação, com os mais novos listados primeiro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## Etapa 2: Conectar o Dispositivo

- Clique no seu dispositivo e depois clique no botão `Check connectivity` na janela `Device details`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- Na janela aberta, selecione o protocolo de mensagens e o seu sistema operacional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- Instale as ferramentas de cliente necessárias e copie o comando fornecido.
- Execute o comando copiado. Assim que as leituras de `temperature` forem publicadas com sucesso, o estado do dispositivo mudará de "Inactive" para `Active`. Você também verá as leituras de temperatura publicadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div>

- Feche a janela de conectividade.

## Etapa 3: Configurar o Nó MQTT no Node-RED

- Se você coleta dados usando protocolos diferentes como Modbus, BACnet ou OPC UA, pode usar o Node-RED.
- Abra o Node-RED e adicione um nó `MQTT Out`.
- Na configuração do broker do MQTT Out, configure o `client name, password, broker username, and the IP address of the reComputer`.
- Use o tópico `v1/devices/me/telemetry` para enviar dados de telemetria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- Se você quiser aprender mais sobre o nó MQTT In, [você pode explorá-lo mais a fundo](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_mqtt/).

:::note
Você não precisa instalar o broker Mosquitto no reComputer.
:::

## Etapa 4: Criar um Dashboard

### Criar um Dashboard Vazio

- Navegue até a página `Dashboards` a partir do menu principal no lado esquerdo da tela.
- Clique no sinal `+` no canto superior direito da tela e selecione `Create new dashboard` no menu suspenso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div>

- Na caixa de diálogo, insira um título para o dashboard (a descrição é opcional). Clique em `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div>

- Após criar o dashboard, ele será aberto automaticamente e você poderá começar a adicionar widgets.
- Para salvar o dashboard, clique no botão `Save` no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div>

- Seu primeiro dashboard agora está criado. À medida que você adicionar mais dashboards, eles aparecerão no topo da lista, ordenados pelo timestamp de criação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div>

### Adicionar um Widget de Gráfico

- Entre no modo de edição e clique no botão `Add new widget` na parte superior da tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div>

- Encontre o pacote de widgets `Charts` e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div>

- Selecione o widget `Time series chart`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div>

- No campo `Device`, especifique o dispositivo que você criou anteriormente como a fonte de dados.
- Na seção `Series`, insira a chave de dados `Temperature` para monitorar os valores de temperatura de um dispositivo.
- Clique em `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div>

- Redimensione o widget e aplique as alterações.

Você pode explorar widgets adicionais de dashboard [aqui](https://thingsboard.io/docs/user-guide/dashboards/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

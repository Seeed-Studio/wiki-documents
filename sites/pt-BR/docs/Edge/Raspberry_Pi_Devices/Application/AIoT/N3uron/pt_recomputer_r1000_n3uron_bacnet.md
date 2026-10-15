---
description: Neste wiki, exploraremos como usar o reComputer 1000 para Sistemas de Gerenciamento de Prédios (BMS) com N3uron e BACnet IoT. Aprenda como integrar e simular dispositivos, aprimorando suas soluções de BMS de forma eficiente.
title: Conecte N3uron com BACnet no reComputer R1000
keywords:
  - reComputer R1000
  - Primeiros passos
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_n3uron_bacnet
last_update:
  date: 7/11/2024
  author: Kasun Thushara
createdAt: '2024-06-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron_bacnet/
---
## Introdução

BACnet é um protocolo amplamente adotado em Sistemas de Gerenciamento de Prédios (BMS) devido ao seu padrão aberto, que permite integração e comunicação perfeitas entre dispositivos de diferentes fabricantes. Sua popularidade também é impulsionada por sua flexibilidade, suportando várias configurações de rede e fornecendo interoperabilidade robusta. O [N3uron](https://n3uron.com/), uma plataforma poderosa e versátil, aprimora as capacidades do BACnet ao possibilitar a aquisição e o gerenciamento eficientes de dados. Usando BACnet TCP com o YABE Room Simulator, os usuários podem simular e visualizar dispositivos BACnet, facilitando testes e desenvolvimento. Essa combinação garante uma abordagem abrangente e eficaz para soluções de BMS, aproveitando os pontos fortes de cada tecnologia.

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

Recomendamos fortemente estudar o guia [Getting Started with N3uron](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron/). Ele fornece ideias essenciais sobre como navegar na interface web do N3uron, entender conceitos como o módulo Web UI e Web Vision, compreender o conceito de tags e criar dashboards básicos. Se você ainda não explorou esses fundamentos, é recomendável fazê-lo antes de prosseguir. Você pode acessar o guia através do link fornecido.

### YABE

Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e faça o download do YABE (Yet Another BACnet Explorer). O YABE é uma ferramenta versátil que permite simular e explorar dispositivos BACnet, sendo ideal para fins de teste e desenvolvimento. Depois de baixado e instalado em seu PC Host, o YABE será usado para simular dados de temperatura de ambiente, que serão então lidos e processados usando Node-RED no reComputer R1000.

### Configurar definições de Ethernet para BACnet TCP/IP

Como o domínio IP do seu CLP/Dispositivo é diferente das suas configurações sem fio, talvez seja necessário alterar a configuração de IP manualmente. Para isso,

- **Passo 01**: Execute o seguinte comando se você estiver usando o **Bullseye**:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Passo 02**: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu CLP/Dispositivo e defina as prioridades usando o comando **metric**. O menor valor de métrica tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **Passo 01**: Se você estiver usando o **Bookworm OS**, pode usar a interface gráfica para clicar no ícone de rede. Nas opções avançadas, escolha "Edit Connections."

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **Passo 02**: Escolha "Wired Connection 2" (ETH 1) e adicione o endereço, máscara de rede e gateway nas configurações de IPv4.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## Conectando a um Controlador de Ambiente a partir do N3uron usando o Cliente BACnet

**Criar o Módulo**

- Vá para `Config => Modules => Model => New Module`.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/Module.PNG" /></center>

**Configurar o Módulo**

- Forneça um nome para o módulo (por exemplo, `BACnetClient`).
- Atribua o tipo de módulo (`BacnetClient`).
- Salve a nova configuração.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/bacnetmodule.PNG" /></center>

**Criar um Novo Canal**

- Clique no botão no lado esquerdo do cabeçalho Model.
- Selecione `New Channel`.
- Nomeie o canal (por exemplo, `CH01`).

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>

**Configurar o Cliente BACnet**

- Clique no botão `Network interface discovery` à direita do campo Network interface.
- Selecione a interface correspondente à rede à qual você deseja se conectar (por exemplo, use `0.0.0.0` para todas as interfaces).

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- A porta padrão de comunicação BACnet é `47808` (BAC0 em HEX).
- Deixe o endereço de broadcast como `255.255.255.255`.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- Quando o módulo estiver configurado, clique em `Save`.
- Reinicie o módulo.

**Descobrir e Selecionar o Dispositivo**

- Clique no botão `Browse Devices` à direita do campo Devices.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- Descubra e selecione o dispositivo correspondente ao qual você deseja se conectar.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- Deixe os outros parâmetros com seus valores padrão.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- Quando o módulo e o dispositivo estiverem configurados, clique em `Save`.
- Reinicie o módulo.

- O "BACnet Browser" no N3uron é aberto e, após selecionar o dispositivo, clique em "Rebrowse" para ver uma lista de objetos.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- A pasta "Temperature Indoor" é localizada e arrastada para a seção "Model". Na seção "Data", na aba "Real Time", os valores de tag para "Temperature Indoor" são exibidos corretamente.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

 Neste ponto, a conexão está pronta e podemos seguir para a criação de novas tags do zero.

## Criar uma Nova Tag

- No painel Explorer, selecione `Tags`.
- No painel Model, crie uma nova tag e nomeie-a `PRESENT_VALUE`.

**Configurar a Tag**

- Defina os parâmetros de configuração da seguinte forma:
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value` (Opcional)
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: Navegue e descubra a propriedade clicando no botão à direita. Selecione `ANALOG_INPUT:0`, depois `PRESENT_VALUE`. Escolha `From device` no modo de prioridade de escrita.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

Agora, vá para a seção Data/Real-Time no painel Navigation, onde você deverá conseguir ver todos os dados lidos daquele dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

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

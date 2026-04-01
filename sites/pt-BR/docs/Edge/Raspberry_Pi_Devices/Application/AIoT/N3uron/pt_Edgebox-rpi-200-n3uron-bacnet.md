---
description: Neste wiki, vamos explorar como usar o EdgeBox RPi 200 para Sistemas de Gerenciamento Predial (BMS) com N3uron e BACnet IoT. Aprenda como integrar e simular dispositivos, aprimorando de forma eficaz suas soluções de BMS.
title: Conecte o N3uron com BACnet no EdgeBox RPi 200
keywords:
  - Edge Box Rpi 200
  - Primeiros passos
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edgebox_rpi_200_n3uron_bacnet
last_update:
  date: 6/20/2024
  author: Kasun Thushara
createdAt: '2024-06-20'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/edgebox_rpi_200_n3uron_bacnet/
---

BACnet é um protocolo amplamente adotado em Sistemas de Gerenciamento Predial (BMS) devido ao seu padrão aberto, que permite integração e comunicação contínuas entre dispositivos de diferentes fabricantes. Sua popularidade também é impulsionada por sua flexibilidade, oferecendo suporte a várias configurações de rede e proporcionando uma interoperabilidade robusta. O [N3uron](https://n3uron.com/), uma plataforma poderosa e versátil, aprimora as capacidades do BACnet ao permitir aquisição e gerenciamento de dados de forma eficiente. Usando BACnet TCP com o YABE Room Simulator, os usuários podem simular e visualizar dispositivos BACnet, facilitando testes e desenvolvimento. Essa combinação garante uma abordagem abrangente e eficaz para soluções de BMS, aproveitando os pontos fortes de cada tecnologia.


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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

Recomendamos fortemente estudar o guia [Começando com N3uron](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-n3uron/). Ele fornece insights essenciais sobre como navegar na interface web do N3uron, compreender conceitos como o módulo Web UI e Web Vision, entender o conceito de tags e criar dashboards básicos. Se você ainda não explorou esses fundamentos, é aconselhável fazê-lo antes de prosseguir. Você pode acessar o guia através do link fornecido.

### YABE

Por favor, acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e faça o download do YABE (Yet Another BACnet Explorer). O YABE é uma ferramenta versátil que permite simular e explorar dispositivos BACnet, tornando-o ideal para fins de teste e desenvolvimento. Depois de baixado e instalado no seu PC Host, o YABE será usado para simular dados de temperatura de ambiente, que então leremos e processaremos usando o Node-RED no Edge Box.

### Configurar as definições de Ethernet 

Como o domínio IP do seu CLP é diferente das suas configurações sem fio, talvez seja necessário alterar a configuração de IP manualmente. Para isso,
- Etapa 01: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- Etapa 02: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu CLP e defina prioridades usando o comando 'metric'. O menor valor de métrica tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Conectando a um controlador de ambiente a partir do N3uron usando BACnet Client

**Criar o Módulo**
- Navegue até `Config => Modules => Model => New Module`.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/Module.PNG" /></center>

**Configurar o Módulo**
- Forneça um nome para o módulo (por exemplo, `BACnetClient`).
- Atribua o tipo de módulo (`BacnetClient`).
- Salve a nova configuração.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/bacnetmodule.PNG" /></center>


**Criar um Novo Canal**
- Clique no botão no lado esquerdo do cabeçalho Model.
- Selecione `New Channel`.
- Dê um nome ao canal (por exemplo, `CH01`).

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/channeladd.PNG" /></center>


**Configurar o BACnet Client**
- Clique no botão `Network interface discovery` à direita do campo Network interface.
- Selecione a interface correspondente da rede à qual você deseja se conectar (por exemplo, use `0.0.0.0` para todas as interfaces).

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/networkad.PNG" /></center>

- A porta padrão de comunicação BACnet é `47808` (BAC0 em HEX).
- Deixe o endereço de broadcast como `255.255.255.255`.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/CH1.PNG" /></center>

- Quando o módulo estiver configurado, clique em `Save`.
- Reinicie o módulo.

**Descobrir e Selecionar o Dispositivo**
- Clique no botão `Browse Devices` à direita do campo Devices.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browsedevice.PNG" /></center>

- Descubra e selecione o dispositivo correspondente ao qual você deseja se conectar.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/searcheddevices.PNG" /></center>

- Deixe os outros parâmetros com seus valores padrão.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/room_1.PNG" /></center>

- Quando o módulo e o dispositivo estiverem configurados, clique em `Save`.
- Reinicie o módulo.

- O "BACnet Browser" no N3uron é aberto e, após selecionar o dispositivo, clica-se em "Rebrowse" para ver uma lista de objetos. 

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browser.PNG" /></center>

- A pasta "Temperature Indoor" é localizada e arrastada para a seção "Model". Na seção "Data", na aba "Real Time", os valores das tags para "Temperature Indoor" são exibidos corretamente.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/drag.gif" /></center>

 Neste ponto, a conexão está pronta e podemos prosseguir para criar novas tags do zero.


## Criar uma Nova Tag
- No painel Explorer, selecione `Tags`.
- No painel Model, crie uma nova tag e nomeie-a como `PRESENT_VALUE`.

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

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/search-tag.png" /></center>

Agora, vá para a seção Data/Real-Time no painel de Navegação, onde você deverá conseguir ver todos os dados lidos daquele dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/realtime.png" /></center>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

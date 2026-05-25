---
description: Este artigo introduz principalmente como usar o fuxa para comunicação MQTT.
title: reComputer R1000 com fuxa para usar cliente mqtt
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - cliente mqtt
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-06-26'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_mqtt_client/
---

## Introdução

FUXA é um software baseado na web para Visualização de Processos (SCADA/HMI/Dashboard). Com o FUXA você pode criar visualizações de processos modernas com designs individuais para suas máquinas e exibição de dados em tempo real. Ele suporta Modbus RTU/TCP, protocolo Siemens S7, OPC-UA, BACnet IP, MQTT e outros protocolos.

Este artigo introduz principalmente como usar o fuxa para comunicação mqtt no reComputerR1000. Este artigo usa mosquitto como o agente do servidor MQTT, fuxa e node-red como o cliente MQTT, e apresenta um escravo ModbusTCP como a fonte dos dados publicados pelo fuxa. fuxa assina um tópico chamado /dev/fromNode_red e publica um tópico chamado /dev/fromfuxa. Os dados deste tópico vêm do escravo ModbusTCP; node-red assina um tópico chamado /dev/fromfuxa e publica um tópico chamado /dev/fromfuxa. /dev/fromNode_red topic. O framework de comunicação é mostrado na figura:
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

## Começando

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

* Python 3.11 pode ser incompatível com fuxa. Se a sua versão do Python for 3.11, considere alterar para uma versão diferente do Python.
- Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) em um PC com W10. Você também pode usar outras ferramentas de teste modbus
- Usando [fuxa](https://github.com/frangoteam/FUXA) no reComputer R1000. Você pode consultar as seguintes etapas para instalar o fuxa no reComputer R1000

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

* Sobre como usar a função modbusTCP no fuxa, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_modbus_rtu_and_tcp/).
- Sobre como baixar e configurar o mosquitto, você pode consultar este [tutorial](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_mqtt/). Aqui também é mostrado como configurar a comunicação mqtt no node-red, você também pode consultá-lo.

### Configuração de Hardware

Para ModbusTCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Etapas de comunicação do cliente MQTT

**Etapa 1**: Consulte este [tutorial](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_modbus_rtu_and_tcp/) e use o `fuxa` para estabelecer uma conexão com o `modbusmechanic`. E consulte este [wiki](https://wiki.seeedstudio.com/pt-br/Edge-Box-Node-Red-MQTT/) para implantar `mosquitto` e `Node-red` no reComputer R1000.

**Etapa 2**: Conecte-se ao servidor MQTT. Clique no botão `+` no canto inferior direito da interface do `fuxa`, insira `Name`, `Type`, selecione `MQTTclient` e, em seguida, insira o endereço IP e o número da porta do servidor MQTT. Se o seu servidor MQTT exigir verificação de segurança, você também precisará inserir `Client ID`, `Username`, `Password`, etc. Nosso servidor não requer essa verificação, portanto não é preenchida. Por fim, clique em `OK` e aguarde até que um ponto verde apareça no canto inferior esquerdo do módulo, indicando que a conexão com o servidor MQTT foi bem-sucedida.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**Etapa 3**: Assinar o tópico. Entre na interface de configuração, clique no botão `+` no canto superior esquerdo, insira o tópico a ser assinado em `Browser Topics on broker`, aqui assinamos o tópico `/dev/fromNode_red` publicado pelo node-red, e então clique no botão de pesquisa ao lado dele, você pode ver o conteúdo do tópico correspondente. fuxa suporta dois formatos de exibição: `raw` e `json`. Aqui escolhemos `json`, e finalmente clicamos em `subscribe` para assinar com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**Etapa 4**: Publicar o tópico. Entre na interface de configuração, selecione a coluna `Publish`, insira o nome do tópico a ser publicado em `Topic path`, aqui inserimos /dev/fromfuxa, e então clique em `Add attribute to payload`, aparecerá uma linha de conteúdo de dados que pode ser publicada, aqui selecionamos 4 dados obtidos do escravo ModbusTCP e um carimbo de data/hora como o conteúdo do nosso tópico de publicação, e selecionamos o formato de publicação como `json`, e por fim clicamos em `Publish` para publicar com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**Etapa 5**: Após a conclusão da configuração acima, alteramos os dados no lado do escravo Modbus. Você pode ver as mudanças em tempo real dos dados na janela de depuração do node-red, indicando que o fuxa publicou com sucesso os dados através do tópico /dev/fromfuxa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

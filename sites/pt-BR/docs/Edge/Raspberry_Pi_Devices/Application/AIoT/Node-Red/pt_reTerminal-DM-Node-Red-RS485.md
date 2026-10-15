---
description: Porta RS485 do reTerminal DM com Node-RED
title: Porta RS485 do reTerminal DM com Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-RS485
last_update:
  date: 04/04/2023
  author: Peter Pan
createdAt: '2023-04-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Node-Red-RS485/
---

# Porta RS485 do reTerminal DM com Node-RED

## Breve informação sobre RS485, Modbus, Modbus RTU e nó Modbus do Node-RED

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485 são protocolos de comunicação serial usados para transmitir dados entre dispositivos. RS485 é um padrão para transmissão de dados de comunicação serial, comumente usado em aplicações industriais. Ele utiliza um sinal diferencial, o que significa que existem duas linhas de dados (A e B) e uma linha de terra (GND) para comunicação. Esse sinal diferencial fornece melhor imunidade a ruído e permite comprimentos de cabo maiores, de até 4.000 pés. A taxa máxima de dados para RS485 é normalmente maior que a do RS232, chegando a 10 Mbps. RS485 é projetado para comunicação multiponto. Isso significa que o RS485 pode transmitir dados entre vários dispositivos no mesmo barramento. Em resumo, RS485 é comumente usado para comunicação de longa distância entre vários dispositivos, como em sistemas de controle industrial.

### Modbus RTU

Modbus RTU é um protocolo de comunicação industrial popular usado para troca de dados entre dispositivos em um sistema de supervisão e aquisição de dados (SCADA). É um protocolo de comunicação serial que opera sobre os padrões de barramento RS485 ou RS232. Modbus RTU usa uma arquitetura mestre-escravo, na qual um dispositivo mestre inicia a comunicação com um ou mais dispositivos escravos. O mestre envia uma mensagem de requisição para um dispositivo escravo, que então responde com uma mensagem contendo os dados solicitados. As mensagens Modbus RTU consistem em um cabeçalho, dados e um campo de verificação de erro. O cabeçalho contém informações sobre a mensagem, como o endereço do escravo e o código de função. O campo de dados contém os dados que estão sendo transmitidos. O campo de verificação de erro é usado para garantir a integridade da mensagem. Modbus RTU suporta uma variedade de tipos de dados, incluindo binário, inteiro, ponto flutuante e string. Ele também suporta uma gama de códigos de função que permitem diferentes tipos de acesso a dados, como leitura de registradores de retenção, escrita de única bobina e leitura de registradores de entrada. Uma das vantagens do Modbus RTU é sua simplicidade e facilidade de implementação. Ele é amplamente suportado por uma variedade de dispositivos e softwares, tornando-se uma escolha popular para sistemas de automação e controle industrial. Também é bem adequado para aplicações que exigem troca de dados em tempo real e comunicação de baixa latência.

Modbus RTU é um protocolo de comunicação popular usado em uma variedade de aplicações industriais, tais como:

  *  Sistemas de automação e controle predial: Modbus RTU é comumente usado para monitorar e controlar iluminação, HVAC e outros sistemas prediais.

  *  Sistemas de gestão de energia: Modbus RTU pode ser usado para monitorar e controlar o consumo de energia em edifícios comerciais e industriais.

  *  Manufatura e controle de processos: Modbus RTU é frequentemente usado para monitorar e controlar processos de manufatura, como linhas de montagem, sistemas de esteiras e máquinas de embalagem.

  *  Tratamento de água e esgoto: Modbus RTU é usado para monitorar e controlar a operação de bombas, válvulas e outros equipamentos em instalações de tratamento de água e de águas residuais.

  *  Produção de óleo e gás: Modbus RTU é usado em instalações de produção de óleo e gás para monitorar e controlar bombas, compressores e outros equipamentos.

  *  Sistemas de energia renovável: Modbus RTU pode ser usado para monitorar e controlar painéis solares, turbinas eólicas e outros sistemas de energia renovável.

  *  Sistemas de transporte: Modbus RTU é usado para monitorar e controlar semáforos, iluminação e outros equipamentos em sistemas de transporte.

Em geral, qualquer aplicação que exija troca de dados em tempo real e comunicação de baixa latência em um ambiente industrial pode se beneficiar do uso de Modbus RTU.

### Nó Modbus

Node-RED possui um nó Modbus integrado, que permite aos usuários integrar facilmente dispositivos Modbus em seus fluxos Node-RED. O nó Modbus suporta os protocolos Modbus TCP e Modbus RTU e pode ser usado para ler e escrever dados de dispositivos Modbus.

Para usar o nó Modbus no Node-RED, você pode simplesmente arrastá-lo e soltá-lo no canvas e configurá-lo com as configurações Modbus apropriadas, como o endereço do dispositivo, código de função e tipo de dado. Uma vez configurado, o nó Modbus pode ser conectado a outros nós no fluxo para processar e exibir os dados.

Node-RED também possui uma variedade de outros nós e plugins que podem ser usados para estender sua funcionalidade e integrar com outros sistemas e dispositivos. Por exemplo, há nós para MQTT, HTTP e outros protocolos de comunicação, bem como nós para processamento, visualização e armazenamento de dados.

No geral, Node-RED fornece uma plataforma poderosa e flexível para construir aplicações de IoT e automação industrial, e seu nó Modbus integrado facilita a integração de dispositivos Modbus nesses fluxos.

# Iniciando com o nó Modbus no reTerminal DM

Você pode encontrar mais informações na página [Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus).

Se você estiver usando Senscraft Edge OS pode pular as etapas de instalação do nó Modbus e ir para [como usar o nó Modbus com o reTerminal DM](#como-usar-o-nó-modbus-com-o-retermianl-dm)

## Instalar nó Modbus

Nesta seção vamos instalar o nó `node-red-contrib-modbus`, então revise como [instalar nós](/pt-br/reTerminal-DM-Getting-Started-with-Node-Red#instalar-nós).

### Opção 1: Linha de comando

Antes de tudo, atualize seus conhecimentos sobre como acessar o reTerminal DM via SSH; por favor, verifique as etapas [aqui](/pt-br/reterminal-dm-flash-OS#install-drivers)

Depois que você tiver acesso ao reTerminal DM com SSH, poderá prosseguir com as etapas abaixo:

PASSO 1: Vá para a pasta do Node-RED

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```
PASSO 2: Instalar nó Modbus

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

PASSO 3: Assim que o nó for instalado, reinicie o serviço Node-RED com:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### Opção 2: Editor do Node-RED

PASSO 1: Clique no botão `Settings` com o ícone de "três traços" localizado no canto direito e selecione `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

PASSO 2: Na aba palette clique na aba `Install`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

PASSO 3: Procure pelo nó na barra de busca de nós e clique no botão `install` para instalar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

PASSO 4: clique no botão 'Install` na janela de aviso suspensa para confirmar a instalação

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

PASSO 5: Aguarde a conclusão da instalação e você deverá ver o botão `install` mudar para `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

PASSO 6: você deverá ver os nós Modbus na barra lateral

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>


## Como usar o nó Modbus com o reTermianl DM

### pré-requisito

#### Hardware

* 1 x Adaptador USB para RS485/RS232
* 6 x Cabos
* 1 x reTerminal DM
* 1 x Computador Host

#### Software 

* Ferramenta GUI de comunicação MODBUS como [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) instalada na sua máquina host

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### Preparação 

PASSO 1: Conecte o hardware como mostrado abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

PASSO 2: Instale o [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic) se você quiser seguir exatamente as etapas abaixo.

PASSO 2-1: Baixe o arquivo de release de [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip)

:::note

Na época em que preparamos este wiki, a versão mais recente de `ModbusMechanic` é a v2.7.

:::

PASSO 2-2: descompacte o arquivo de release e execute o arquivo executável Java `ModbusMechanic.jar` usando o seguinte comando no linux:

```sh

java -jar ModbusMechanic.jar

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

PASSO 2-3: Configure o `Serial Settings Port` para o `ModbusMechanic` exatamente como mostrado abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

PASSO 3: Configurar `Slave Simulator`

PASSO 3-1: Abra o `Slave Simulator` nas ferramentas do `ModbusMechanic`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

ETAPA 3-2: Em seguida, selecione `RTU` no popup de 1 Mbit

ETAPA 3-4-2: Insira `1` como o `Register number` 

ETAPA 3-4-3: Selecione `U int 16` como o `Data type`

ETAPA 3-4-4: Insira `120` como o `Value` 

ETAPA 3-4-5: marque o `Word Swap`

ETAPA 3-4-6: clique em `Add` para confirmar 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

ETAPA 3-5: você deve ter configurações semelhantes à imagem abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

ETAPA 3-6: repita as ETAPAS 4-4 para adicionar mais dois registradores como mostrado abaixo, onde `Register 2` com `Vale of 12` e `Register 3` com `Value of 1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>


#### Editar os Fluxos

ETAPA 1: Arraste `Modbus Read` para o painel `Flow Editor`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

ETAPA 2: Configurar o Servidor Modbus

ETAPA 2-1: Clique duas vezes em `Modbus Read` para abrir o `Node editor panel`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

ETAPA 2-2: Clique no ícone de `pencil` para a opção de configuração do servidor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

Depois de clicar no ícone de `pencil` você deverá ver o painel de configuração `Add new modbus-client config node`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

ETAPA 2-3: Siga cuidadosamente as etapas abaixo para configurar a porta Modbus como mostrado na imagem abaixo.

ETAPA 2-3-1: defina o tipo como Serial Expert na lista suspensa

ETAPA 2-3-2: selecione a porta serial `/dev/ttyCH343USB1`

ETAPA 2-3-3: configure as opções da porta serial como mostrado na imagem abaixo

ETAPA 2-3-4: configure a opção extra da porta do servidor Modbus como mostrado na imagem abaixo

ETAPA 2-3-5: Clique em `Add` ou `Update` para aplicar as alterações.


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

ETAPA 3: Configure o nó Modbus-Read como mostrado na imagem abaixo e clique em `Done`

:::note

As etapas a seguir são apenas exemplos; você pode alterar a configuração de acordo com sua própria situação  

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>



ETAPA 4: Encontre e arraste para fora `debug node` e `Modbus Response node` e conecte os nós juntos como mostrado abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### Resultado Final

Parabéns, você experimentou e aprendeu com sucesso como usar Modbus com reTerminal DM com node-RED; agora, seus resultados finais devem ser semelhantes à imagem mostrada abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>


Você pode copiar o código JSON a seguir para importar os Nós

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
    }
]

``` 

# Explore mais nós no reTerminal DM com node-RED

* [reTerminal DM MQTT com Node-RED](/pt-br/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS com Node-RED](/pt-br/reTerminal-DM-Node-Red-canbus)
* 
## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

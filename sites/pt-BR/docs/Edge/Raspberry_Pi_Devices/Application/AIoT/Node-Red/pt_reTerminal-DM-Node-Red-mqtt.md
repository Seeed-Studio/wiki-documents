---
description: reTerminal DM MQTT com Node-RED
title: reTerminal DM MQTT com Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-mqtt
last_update:
  date: 04/27/2023
  author: Peter Pan
createdAt: '2023-04-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Node-Red-mqtt/
---
# reTerminal DM MQTT com Node-RED

## Breve informação sobre MQTT

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTT & Node-RED

MQTT (Message Queuing Telemetry Transport) é um protocolo de mensagens leve que foi projetado para permitir a comunicação entre dispositivos em um contexto de máquina a máquina (M2M) ou Internet das Coisas (IoT). O MQTT foi desenvolvido pela IBM em 1999 e mais tarde se tornou um padrão aberto. O MQTT foi projetado para ser uma forma simples e eficiente de enviar pequenos pacotes de dados entre dispositivos. Ele usa um padrão de mensagens publish/subscribe, onde as mensagens são publicadas em um broker e então entregues a todos os assinantes que se inscreveram em um tópico específico. Isso permite que os dispositivos se comuniquem entre si sem precisar conhecer os endereços IP uns dos outros ou outros detalhes de rede. O MQTT é particularmente útil em situações em que os dispositivos estão conectados por redes não confiáveis, como redes de baixa largura de banda ou alta latência, porque usa uma pequena quantidade de largura de banda e tem uma sobrecarga baixa. Ele também suporta níveis de Qualidade de Serviço (QoS), o que permite diferentes níveis de confiabilidade na entrega das mensagens. O MQTT se tornou uma escolha popular para aplicações de IoT e M2M por causa de sua simplicidade e eficiência, e é suportado por uma ampla gama de dispositivos e plataformas.

Um broker MQTT é um servidor que atua como ponto central para a troca de mensagens MQTT entre dispositivos em uma rede de IoT ou M2M baseada em MQTT. Ele recebe mensagens publicadas pelos dispositivos e as distribui para outros dispositivos que se inscreveram nos mesmos tópicos.

MQTT é um dos muitos protocolos que o Node-RED suporta, tornando-o uma ótima ferramenta para construir aplicações de IoT baseadas em MQTT. O Node-RED fornece nós integrados para MQTT, o que permite aos usuários conectar-se a um broker MQTT e publicar ou assinar mensagens. Os nós MQTT podem ser facilmente configurados usando a interface do Node-RED, e os usuários podem especificar o endereço do broker, porta, ID do cliente, nome de usuário e senha. Os nós também suportam níveis de QoS do MQTT, que podem ser definidos para garantir uma entrega confiável das mensagens. No Node-RED, os usuários podem criar fluxos que lidam com mensagens MQTT recebidas e executar várias ações com base no payload da mensagem. Por exemplo, um fluxo pode assinar o tópico MQTT de um sensor de temperatura, analisar o valor da temperatura e então enviar um alerta se a temperatura exceder um determinado limite. O Node-RED também fornece vários nós para integração com outros serviços e dispositivos de IoT, como endpoints HTTP, bancos de dados e serviços em nuvem. Isso permite que os usuários construam facilmente aplicações de IoT complexas que podem se comunicar com uma ampla variedade de dispositivos e serviços.

No geral, o Node-RED fornece uma maneira simples e intuitiva de construir aplicações de IoT baseadas em MQTT, graças aos seus nós MQTT integrados e ao suporte para outros serviços e dispositivos de IoT.

# Começando com o nó MQTT no reTerminal DM

Como o nó MQTT é integrado ao Node-RED, você pode usar o nó MQTT sem qualquer passo extra para instalar nós. No entanto, será necessário ter um broker MQTT para publicar ou assinar mensagens em um tópico. Portanto, as etapas a seguir incluirão como instalar um Broker MQTT local no reTerminal DM e então utilizar o Broker MQTT para enviar e receber mensagens.

## Pré-requisitos

### Hardware

- 1 x reTerminal DM
- 1 x Computador Host

:::note
O Computador Host deve conseguir ter conexão de internet com o reTerminal DM para realizar os seguintes passos de configuração.
:::

### Software

- MQTT Broker [Eclipse Mosquitto](https://mosquitto.org/)

## Instalar o MQTT Broker [Eclipse Mosquitto](https://mosquitto.org/)

Nesta seção vamos instalar o [Eclipse Mosquitto](https://mosquitto.org/), que é um broker MQTT de código aberto amplamente utilizado em aplicações de IoT e M2M. Ele é desenvolvido pela Eclipse Foundation e está disponível sob a Eclipse Public License. O Mosquitto é projetado para ser leve e eficiente, tornando-o bem adequado para uso em dispositivos de baixo consumo e em ambientes com largura de banda de rede limitada. Ele suporta o protocolo MQTT 5.0 mais recente, bem como versões anteriores, como MQTT 3.1.1.

Antes de tudo, revise seus conhecimentos sobre como acessar o reTerminal DM via SSH, por favor verifique os passos [aqui](/pt-br/reterminal-dm-flash-OS#instalar-drivers)

Depois que você tiver acesso ao reTerminal DM com SSH, poderá prosseguir para os passos abaixo:

PASSO 1: Atualize a lista de pacotes executando o seguinte comando:

```sh
sudo apt-get update
```

PASSO 2: Instale o Mosquitto executando o seguinte comando:

```sh
sudo apt-get install mosquitto
```

PASSO 3: Instale as ferramentas de cliente do Mosquitto executando o seguinte comando:

```sh
sudo apt-get install mosquitto-clients
```

PASSO 4: Quando a instalação estiver concluída, você pode iniciar o serviço Mosquitto executando o seguinte comando:

```sh
sudo systemctl start mosquitto
```

PASSO 5: Para verificar se o Mosquitto está em execução, você pode executar o seguinte comando:

```sh
sudo systemctl status mosquitto
```

Por padrão, o Mosquitto é configurado para escutar na `port 1883` para tráfego MQTT. Você pode testar a instalação assinando um tópico usando as ferramentas de cliente Mosquitto, da seguinte forma:

Abra uma nova sessão SSH e execute o seguinte comando para assinar um tópico:

```sh
mosquitto_sub -h localhost -t test
```

Em outra sessão SSH, execute o seguinte comando para publicar uma mensagem no mesmo tópico:

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

Você deverá ver a mensagem "Hello, world!" aparecer na primeira janela da sessão SSH onde você executou o comando mosquitto_sub.

E é isso! Você instalou com sucesso o Mosquitto no seu reTerminal DM e o testou usando as ferramentas de cliente Mosquitto. Agora vamos nos aprofundar na forma de comunicação MQTT com Node-RED

## Nó MQTT com reTerminal DM

No Node-RED, existem MQTT in e MQTT out que representam, respectivamente, Subscribe e Publish.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### Editar os Flows

:::note

Os passos a seguir são apenas para fins de tutorial, onde usaremos mqtt-in para assinar a mensagem publicada por mqtt out no mesmo tópico.

:::

PASSO 1: Arraste `mqtt in` para o painel `Flow Editor`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

PASSO 2: Configurar o `Modbus Server` e o nó `mqtt in`

PASSO 2-1: Dê um clique duplo em `mqtt in` para abrir o `Node editor panel`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

PASSO 2-2: Clique no ícone de `lápis` para a opção de configuração do servidor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

Depois de clicar no ícone de `lápis` você deverá ver o painel de configuração `Add new mqtt-broker config node`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

PASSO 2-3: Na aba `Connection` configure os seguintes campos de acordo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note

Por enquanto você pode deixar as abas `Security` e `Messages` sem alterações.

:::

PASSO 2-4: Configure o Tópico a ser assinado, aqui usamos `test-mqtt`, e deixe todo o resto como padrão, depois clique no botão `Done`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

PASSO 2-5: Os passos a seguir irão introduzir o nó `debug`, que neste caso é usado para visualizar e depurar a saída do tópico assinado de `mqtt in`, como mostrado na imagem abaixo

PASSO 2-5-1: Portanto, arraste um nó `debug` para o painel `Flow Editor`

PASSO 2-5-2: Conecte o nó `debug` ao nó `mqtt in`

PASSO 2-5-3: Clique no `little bug button` no `Option and Config panel` para abrir o `debug console` no `Option and Config panel`

PASSO 2-5-4: Clique no botão `Deploy` para implantar o flow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note

Como ainda não configuramos nenhum publicador de tópico MQTT, não haverá mensagem exibida no `debug console`

:::

PASSO 3: Configurar o nó `mqtt out`

PASSO 3-1: Dê um clique duplo no nó `mqtt out` para abrir o `Node editor panel`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

PASSO 3-1: Portanto, arraste um nó `mqtt out` para o painel `Flow Editor` como mostrado na imagem abaixo

PASSO 3-1-1: Você deve selecionar o mesmo Servidor que configuramos no `PASSO 2-3:` que é `localhost:1883`

PASSO 3-1-2: Você deve configurar o mesmo nome de Tópico da configuração do tópico no `PASSO 2-4:` que é `test-mqtt`.

PASSO 3-1-3: da mesma forma, o QoS deve estar alinhado com a configuração de `mqtt in` como `2`

PASSO 3-1-4: Clique em `Done` para concluir a configuração

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

PASSO 4: Configurar o nó `inject`

PASSO 4-1: Arraste o nó `inject` para o painel `Flow Editor`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

STEP 4-2: Clique duas vezes no nó `inject` para abrir o `Node editor panel`, você deverá ver a configuração padrão do nó `inject`

STEP 4-2-1: clique no `x` na linha msg.topic para removê-la

STEP 4-2-2: clique na opção `timestamp` para abrir uma lista suspensa na linha `msg.payload`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

STEP 4-2-3: Selecione a opção `string` na lista suspensa

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

STEP 4-2-4: No campo de mensagem, insira `this is the message` como a mensagem que vamos enviar para o tópico `test-mqtt` e depois clique em `Done`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

STEP 4-2-5: Conecte o nó `inject` ao nó `mqtt out` e clique em `Delpoy`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### Resultado Final

Parabéns, você experimentou e aprendeu com sucesso como usar o protocolo MQTT com o reTerminal DM e o node-RED; seu resultado final deverá ser semelhante à imagem mostrada abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

Você pode copiar o seguinte código JSON para importar os nós

```json
[
    {
        "id": "8d317d539464f080",
        "type": "tab",
        "label": "MQTT",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "128fa85f993944d6",
        "type": "mqtt in",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b6a7c986cb61ea54",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 300,
        "y": 220,
        "wires": [
            [
                "a022e0bf3404fdd9"
            ]
        ]
    },
    {
        "id": "a022e0bf3404fdd9",
        "type": "debug",
        "z": "8d317d539464f080",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "9d0098383c96ee8b",
        "type": "mqtt out",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "b6a7c986cb61ea54",
        "x": 520,
        "y": 320,
        "wires": []
    },
    {
        "id": "3c967b7d5cc112fc",
        "type": "inject",
        "z": "8d317d539464f080",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "this is the message",
        "payloadType": "str",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "9d0098383c96ee8b"
            ]
        ]
    },
    {
        "id": "b6a7c986cb61ea54",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    }
]

```

# Explore mais nós no reTerminal DM com o node-RED

- [reTerminal DM RS485 Port with Node-RED](/pt-br/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM CAN BUS with Node-RED](/pt-br/reTerminal-DM-Node-Red-canbus)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

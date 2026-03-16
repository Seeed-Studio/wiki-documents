---
description: reTerminal DM CANBUS com Node-RED
title: reTerminal DM CANBUS com Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/28/2023
  author: Peter Pan
createdAt: '2023-04-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Node-Red-canbus/
---

# reTerminal DM CAN BUS com Node-RED

## Informações breves sobre CAN BUS

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

O barramento CAN (Controller Area Network bus) é um tipo de rede usada para conectar múltiplas unidades de controle eletrônico (ECUs) dentro de um veículo ou sistema industrial. Ele foi originalmente desenvolvido pela Bosch na década de 1980 e se tornou um padrão internacional (ISO 11898) para comunicação serial em veículos e outras aplicações.

O barramento CAN permite a troca de dados em alta velocidade entre as ECUs, permitindo que elas compartilhem informações e coordenem suas atividades. Ele usa um sistema de dois fios, com um fio para transmitir dados e o outro para receber dados, e suporta múltiplos nós, tornando-o ideal para uso em sistemas complexos onde muitos dispositivos precisam se comunicar entre si.

A tecnologia de barramento CAN é amplamente utilizada na indústria automotiva para uma variedade de aplicações, incluindo controle do motor, controle da transmissão, ABS (sistema de freios antibloqueio), controle de airbag e muitas outras. Ela também é usada em outros setores, como automação industrial, equipamentos médicos e aeroespacial, onde a comunicação confiável e eficiente entre dispositivos é essencial.

O barramento CAN possui muitas vantagens, incluindo alta confiabilidade, baixo custo e capacidade de operar em ambientes severos. É fácil de instalar e manter, e é altamente resistente a interferências eletromagnéticas. Essas características fazem dele uma escolha ideal para muitas aplicações diferentes em que é necessária comunicação confiável e eficiente.

## Começando com o Node CAN BUS no reTerminal DM

Para usar o Node-RED com o barramento CAN, você precisará de um dispositivo de interface CAN que se conecte à porta CAN BUS do reTerminal DM e de um node CAN bus do Node-RED que permita enviar e receber mensagens na rede; neste caso, vamos explorar juntos os nodes `node-red-contrib-socketcan`. Depois de instalar o node CAN bus no Node-RED, você pode começar a criar fluxos que leem dados da rede CAN bus, os processam e os enviam para outros sistemas ou dispositivos. Por exemplo, você pode ler o RPM do motor a partir do barramento CAN de um veículo, processar os dados para calcular o consumo de combustível e enviar o resultado para um dashboard para exibição.

Você pode encontrar mais informações na página [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan).

Se você estiver usando o Senscraft Edge OS, pode pular as etapas de instalação do node Socketcan.

### Pré-requisitos

#### Hardware

- 1 x reTerminal DM
- 1 x Computador Host
- 1 x [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### Preparação de hardware

Conecte o hardware conforme mostrado abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### Software

:::note
O Computador Host deve conseguir ter conexão à internet com o reTerminal DM para executar as etapas de configuração a seguir.
:::

##### Instalar o Node Socketcan

Neste tutorial da Wiki vamos usar o node `node-red-contrib-socketcan`, então instale o `node-red-contrib-socketcan` seguindo o guia [install nodes](/pt-br/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes).

##### Configurar CAN BUS no reTerminal DM

:::note
Pressupõe-se que você tenha acesso direto ao app `Terminal` no reTerminal DM ou acesso ao reTerminal DM via SSH; caso contrário, siga a primeira etapa [aqui](/pt-br/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red) para se familiarizar com o procedimento.
:::

Digite um a um os seguintes comandos para habilitar um dispositivo CAN virtual chamado can0 com a porta CAN BUS no reTerminal DM.

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

Após inserir os comandos acima, você deverá ver o dispositivo `can0` com o comando `ifconfig`, conforme mostrado abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### Configurar software e driver usb-can no computador host

:::note
Se você estiver usando o mesmo [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html), poderá seguir as etapas abaixo para configurar o driver de software para usar o analisador.
:::

Visite o repositório do driver no GitHub `USB-CAN Analyzer` [USB-CAN Analyzer system driver](https://github.com/kobolt/usb-can) e siga a seção Readme para instalar o driver de acordo com seu sistema operacional.

Exemplo de comandos para enviar e receber tráfego CAN bus

```
# dump CAN bus traffic from CAN bus
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# send the bytes 0x00112233 from ID 005 on at CAN bus
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233

```

### Node Socketcan com reTerminal DM

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### Importar os fluxos

:::note

As etapas a seguir são apenas para fins de tutorial; nesta seção, vamos mostrar como importar rapidamente um fluxo copiando o fluxo em formato JSON e colando-o na caixa de entrada do menu pop-up de importação de nodes.

:::

PASSO 1: Abra a janela `Import nodes` clicando no `Setting Button` e depois clicando no botão `Import`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png" /></div>

PASSO 2: copie o seguinte fluxo JSON

```json

[
    {
        "id": "829af3ee.a57c1",
        "type": "tab",
        "label": "CAN BUS",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7b24a62e.8f5458",
        "type": "debug",
        "z": "829af3ee.a57c1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 350,
        "y": 360,
        "wires": []
    },
    {
        "id": "5f671b29.cd24bc",
        "type": "socketcan-out",
        "z": "829af3ee.a57c1",
        "name": "socketcan-out",
        "config": "d9bf56bb5f3e2f92",
        "x": 150,
        "y": 360,
        "wires": [
            [
                "7b24a62e.8f5458"
            ]
        ]
    },
    {
        "id": "caba412f.047b2",
        "type": "socketcan-in",
        "z": "829af3ee.a57c1",
        "name": "socketcan-in",
        "config": "d9bf56bb5f3e2f92",
        "x": 350,
        "y": 120,
        "wires": []
    },
    {
        "id": "a64240cb.3f0788",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":false,\"canid\":123,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "3ff96369.ef6f5c",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "123#00112233",
        "payloadType": "str",
        "x": 160,
        "y": 200,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "6879c00a.5edb68",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - ext",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1F334455#1122334455667788",
        "payloadType": "str",
        "x": 160,
        "y": 240,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "1ee3b274.4cb8fe",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - ext",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":true,\"canid\":32278,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 160,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "391a4c45.7acd8c",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Send CAN frames in using different payloads on CAN0",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Receiove CAN data from interface CAN0",
        "info": "",
        "x": 220,
        "y": 320,
        "wires": []
    },
    {
        "id": "d9bf56bb5f3e2f92",
        "type": "socketcan-config",
        "interface": "can0"
    }
]

```

ETAPA 3: Na janela `Import nodes`, selecione a aba `Clipboard` e então cole o código de fluxo json acima na `caixa de diálogo vermelha`, depois clique no botão `import`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

ETAPA 4: Você deverá ver uma nova aba de fluxo chamada `CAN BUS` criada após as etapas acima, e verifique se o fluxo é o mesmo que o mostrado abaixo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

ETAPA 5: para configurar a interface CAN, você precisará dar um clique duplo no `socketcan-in node` para abrir a janela `edit node`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
Certifique-se de ter concluído a etapa em [Configure CAN BUS on reTerminal DM setion](#configure-can-bus-on-reterminal-dm) para criar um dispositivo de interface can0 no reTerminal DM
:::

ETAPA 6: Na janela `Edit socketcan-in node` clique no ícone de `lápis` na opção `interface` para abrir a janela `Add new socketcan-config config node`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

ETAPA 7: Na janela `Add new socketcan-config config node` insira `can0` na caixa de diálogo da interface

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

ETAPA 8: depois de clicar no botão `Add` nas etapas acima você deverá ver que a `interface` está definida como `can0` e então clicar em `Done` para aplicar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

ETAPA 9: configure a interface CAN Bus para o `socketcan-out`, o que apenas requer dar um clique duplo no nó `scoketcan-out` e selecionar `can0` para Config, então clique em `Done`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

ETAPA 10: Clique em `Deploy` agora

#### Teste Final e Resultado

Parabéns, você experimentou e aprendeu com sucesso como usar o protocolo CAN Bus com o reTerminal DM e o node-RED, seus resultados finais devem ser semelhantes à imagem mostrada abaixo

Para o Computador Host enviar dados CAN Bus e o reTerminal DM receber:

- Portanto, a partir da janela de terminal do Computador Host, você pode executar o comando `./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233` para enviar `00112233` (em hex) para o reTerminal DM, e na janela de depuração do reTerminal DM você pode ver que os dados são

```json  
0: 0 
1: 17 
2: 34
3: 51
```

que é a representação binária do conjunto de dados HEX `x00 x11 x22 x33`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

Para o Computador Host receber dados CAN Bus e o reTerminal DM enviar:

- Você precisará clicar no botão `inject` no Node-Red do reTerminal DM como mostrado na imagem abaixo para enviar os dados `01 02 03 04 05` para o Computador Host, e como você pode ver na janela de terminal do computador host o comando para receber é `./canusb -t -d /dev/ttyUSB0 -s 250000 -t`, os dados recebidos são `05 04 03 02 01` pois estão em ordem de primeiro a entrar, primeiro a sair:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# Explore mais nós no reTerminal DM com node-RED

- [Porta RS485 do reTerminal DM com Node-RED](/pt-br/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTT com Node-RED](/pt-br/reTerminal-DM-Node-Red-mqtt)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

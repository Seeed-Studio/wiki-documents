---
description: Primeiros passos com o reTerminal DM e Node-Red
title: Primeiros passos com o reTerminal DM e Node-Red
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/04/2023
  author: Peter Pan
createdAt: '2023-04-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Getting-Started-with-Node-Red/
---
# Primeiros passos com o reTerminal DM e Node Red

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED é uma ferramenta de programação para conectar dispositivos de hardware, APIs e serviços online de maneiras novas e interessantes.
> Ela fornece um editor baseado em navegador que torna fácil conectar fluxos usando a ampla gama de nós na paleta, que podem ser implantados em seu runtime com um único clique.
>
> — nodered.org

Como o reTerminal DM é equipado com ampla escalabilidade e conectividade híbrida, como I/O Digital, barramento CAN, RS485, RS232 e poderosas capacidades de comunicação sem fio como WiFi, BLE, \*4G, \*LoRa®. Onde o Node-RED é uma das melhores ferramentas de programação de baixo código que poderia controlá-los todos, e graças ao nó Node-RED Dashboard que pode ser configurado e utilizado junto com o painel capacitivo de alta sensibilidade de 10,1" com multitoque de 10 pontos para fins de Interface Homem-Máquina local.

> Os módulos \*4G e LoRa® não acompanham o reTerminal DM por padrão, compre os módulos relevantes separadamente.

Aqui está o guia de primeiros passos sobre como configurar, bem como se familiarizar com a interface do Node-RED no reTerminal DM.

:::tip
- Para usuários do **Raspbian OS** vá para: [Instalar Node-RED](#instalar-e-configurar-node-red-no-raspbian-os)
- Para usuários do **Sensecraft Edge OS** vá para: [Familiarizando-se com o Node-RED](#familiarizando-se-com-node-red), já que o Sensecraft Edge OS vem com o Node-RED pré-instalado

:::

## Instalar e configurar Node-RED no Raspbian OS

Depois de concluir a instalação de um novo Sistema Operacional no reTerminal DM seguindo o guia [Instalar OS no reTerminal DM](/pt-br/reterminal-dm-flash-OS/), siga as etapas abaixo para configurar o Node-RED.

### Instalar Node-RED

- **PASSO 1:** Obter acesso ao seu reTerminal DM

  - opção 1: Conectar diretamente o mouse e o teclado

    Abra o aplicativo `Terminal` no seu reTerminal DM.

    Certifique-se de que o seu reTerminal DM esteja conectado à internet.

  - opção 2: usando SSH

    Certifique-se de que o computador host possa acessar o reTerminal DM via rede e que o reTerminal DM esteja conectado à internet

    **no Windows:**

      Abra o programa **PowerShell** e digite `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, substitua `{USERNAME}` e `{RETERMINALDM_IP_ADDRESS}` de acordo com a sua configuração:

      Por exemplo, no meu caso o `{USERNAME}` é `pi` e `{RETERMINALDM_IP_ADDRESS}` é `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```

      Em seguida, digite a senha para o `{USER}` do Sistema Operacional que você configurou no seu reTerminal DM

      ex: Para o Raspbian OS, as credenciais de login padrão são
    - Nome de usuário: `pi`
    - Senha: `raspberry`

    **no Mac/Linux:**

      Abra o aplicativo **Terminal** e digite `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, substitua `{USERNAME}` e `{RETERMINALDM_IP_ADDRESS}` de acordo com a sua configuração:

      Por exemplo, no meu caso o `{USERNAME}` é `pi` e `{RETERMINALDM_IP_ADDRESS}` é `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```

      Em seguida, digite a senha para o `{USER}` do Sistema Operacional que você configurou no seu reTerminal DM

      ex: Para o Raspbian OS, as credenciais de login padrão são
    - Nome de usuário: `pi`
    - Senha: `raspberry`

- **PASSO 2:** Instalar Node-RED:

A equipe do Node-RED preparou para nós um script [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi), no qual você só precisa inserir o seguinte comando no aplicativo `Terminal` nativo do reTerminal DM ou no `SSH Shell` do passo acima.

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

Há muitas opções para instalar o Node-RED com Raspberry Pi, você pode explorar o [guia oficial](https://nodered.org/docs/getting-started/), aqui mostramos o guia [all-in-one](https://nodered.org/docs/getting-started/raspberrypi) para instalar o Node-RED no reTerminal DM.
:::

Quando o processo de instalação terminar, você deverá ver uma pasta `.node-red` com o comando `ls -all`, como mostrado na imagem abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Configurar Node-RED

Depois de instalar o Node-RED, siga as etapas abaixo para configurar e deixar o ambiente Node-RED pronto.

- **PASSO 1:** Iniciar Node-RED:

    Após a conclusão da instalação com o script [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi), você pode usar os seguintes comandos:

    Use `node-red-stop`                          para parar o Node-RED<br />
    Use `node-red-start`                         para iniciar o Node-RED novamente<br />
    Use `node-red-log`                           para ver a saída recente de log<br />
    Use `sudo systemctl enable nodered.service`  para iniciar automaticamente o Node-RED em cada boot<br />
    Use `sudo systemctl disable nodered.service` para desativar a inicialização automática na inicialização<br />

    Portanto, para iniciar o editor Node-RED você pode executar o seguinte comando no aplicativo `Terminal` no reTerminal DM:

    ```sh
    node-red-start
    ```

    Se você quiser habilitar o Node-RED como serviço de inicialização automática, pode usar o comando `sudo systemctl enable nodered.service` e deverá ver a saída conforme mostrado abaixo.

    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

- **PASSO 2:** Acessar o editor Node-RED:

    Agora abra seu navegador web favorito e insira a URL descrita abaixo:
  - Opção 1: Use `http://127.0.0.1:1880`, se o navegador estiver sendo executado localmente no seu reTerminal DM.
  - Opção 2: Use `http://{RETERMINALDM_IP_ADDRESS}:1880`, se o navegador estiver sendo executado remotamente em um computador host, substitua `{RETERMINALDM_IP_ADDRESS}` pelo endereço IP do reTerminal DM.

## Familiarizando-se com Node-RED

Agora você deverá ver um resultado semelhante ao da imagem abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Visão geral do editor Node-RED

Familiarize-se com o editor Node-RED.

Os elementos centrais do editor Node-RED são listados:

- Painel de Nós
- Editor de Fluxo
- Painel de Configuração
- Botão de Configurações
- Botão de Implantar

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### Instalar Nós

Há duas opções para instalar módulos de nó do Node-RED, se você estiver usando o SenseCraft EDGE OS use o [método via editor Node-RED](#opção-2-node-red-editor):

#### Opção 1: Linha de comando

PASSO 1: Vá para a pasta do Node-RED

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

PASSO 2: Instalar Nó Modbus

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: Once the node gets install, Please restart the Node-RED service with:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### Option 2: Node-RED editor

STEP 1: Click the `Settings` button with "three dash" icon located at the right corner and then select the `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: At the palette tab click `Install` tab

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: Search for the node in the node search bar and Click `install` button to install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: click on 'Install` button from the dropdown warning window to confirm install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: Wait for the installation to complete and you should see the `install` button changed to `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: you should see the Modbus nodes in the side bar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# reTerminal DM Supported Nodes

- [reTerminal DM RS485 Port with Node-RED](/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTT with Node-RED](/reTerminal-DM-Node-Red-mqtt)
- [reTerminal DM CAN BUS with Node-RED](/reTerminal-DM-Node-Red-canbus)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Introdução ao Wio-WM1110 Dev Kit
title: Introdução ao Wio-WM1110 Dev Kit
keywords:
  - Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 8/7/2023
  author: Jessie
createdAt: '2023-06-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Get_Started_with_Wio-WM1110_Dev_Kit/
---

## Preparação

- Wio-WM1110 Dev Kit x 1
- Computador x 1
- Cabo USB Tipo-C x 1
- Gravador de depuração J-Link x 1

### Conexão do dispositivo

Conecte a Wio-WM1110 Dev Board ao gravador de depuração J-Link da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info Conexão:
**3V3** (Wio-WM1110 Dev Board) -> **VTref** (J-Link Debug Programmer Pino 1)  
**CLK** (Wio-WM1110 Dev Board) -> **SWCLK** (J-Link Debug Programmer Pino 9)  
**DIO** (Wio-WM1110 Dev Board) -> **SWDIO** (J-Link Debug Programmer Pino 7)  
**GND** (Wio-WM1110 Dev Board) -> **GND** (J-Link Debug Programmer GND)
:::

### Configure sua toolchain

Antes de começar a desenvolver, as seguintes ferramentas são necessárias para este Guia de Introdução.

#### SEGGER Embedded Studio (SES)

SES é uma solução tudo-em-um para gerenciar, compilar, testar e implantar aplicações embarcadas. Isso significa operações de desenvolvimento suaves e eficientes graças à sua ampla gama de recursos. O poderoso gerenciador de projetos possibilita o gerenciamento de projetos grandes e pequenos. Os recursos de controle de versão permitem a implantação automática de aplicações.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>

:::tip
É recomendada a utilização da versão 5.68.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### Pacote de Software e Documentação SEGGER J-Link

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link Software and Documentation Pack-Download</span></a>

#### nRF5 SDK

O nRF5 SDK fornece um ambiente de desenvolvimento rico para dispositivos da Série nRF5, incluindo uma ampla seleção de drivers, bibliotecas, exemplos para periféricos, SoftDevices e protocolos de rádio proprietários.

Todos os exemplos de código incluídos no SDK são adaptados para compilar e rodar no Wio-WM1110 Dev Kit.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Pacote de Exemplos da Seeed

A Seeed fornece um projeto de exemplo para que os desenvolvedores possam começar mais rapidamente. Este exemplo inclui comunicação LoRaWAN, aquisição de informações de posicionamento, aquisição de dados de sensores onboard, etc.

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed Example-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## Executando um primeiro teste

**Adicionar o arquivo de exemplo da Seeed ao nRF5 SDK**

Copie o [arquivo de exemplo da Seeed](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) para o seguinte caminho do nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

Vamos compilar o projeto ses_blinky" para verificar se sua toolchain está configurada corretamente.
Importe o projeto "ses_blinky".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**Compilando o aplicativo de teste**

Selecione "Build" > "Compile project_target".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**Gravando o aplicativo de teste**

Após compilar o aplicativo, você pode gravá-lo na Dev board.

Clique em "Target" -- "Connect J-Link"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

Clique em "Build" -- "Build and Run" para compilar o projeto blinky.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

Você verá "Download successful" quando estiver concluído.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

Em seguida, os 2 LEDs na placa piscarão da seguinte forma.

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## Introdução

Este capítulo irá guiá-lo na exibição de informações de localização atual no Node-Red via TTN e explica como configurar todos os servidores necessários (Network Server(NS) e um Application Server(AS)).

**Arquitetura & Fluxo de Dados**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### Configurar as chaves

Antes que um dispositivo possa se comunicar via NS, precisamos registrá-lo com as 3 chaves.

O Wio-WM1110 DK permite que os usuários definam o DevEUI, AppEUI e AppKey, isso é necessário nas próximas etapas, então você pode definir seus próprios parâmetros no arquivo 'lorawan_key_config.h' e depois gravá-lo no DK.

Arquivo localizado em:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

Ou você pode obter as chaves geradas pelo TTN, depois preenchê-las no arquivo 'lorawan_key_config.h' e executá-lo no DK.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### Serviços LoRa Cloud™ Modem & Geolocation

Os serviços LoRa Cloud Modem & Geolocation fornecem um conjunto completo de recursos de gerenciamento de ciclo de vida para dispositivos LoRa® operando em uma rede LoRaWAN. Esses recursos incluem, mas não se limitam a:

- Telemetria abrangente do dispositivo
- Configuração de dispositivo e aplicação
- Sincronização de relógio
- Serviços avançados de transporte de dados com robustez contra perda de pacotes e fragmentação de dados transparente (buffer streaming e upload de arquivos).
- Geolocalização

Para começar, acesse o [portal LoRa Cloud™](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) e registre uma conta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 1: Criar um Owner

Para criar um token, primeiro é necessário criar um owner.
Navegue até a página DEVICE OWNERS.
Clique em CREATE NEW OWNER.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 2: Obter um Token

Um token é necessário para que o servidor de aplicação autentique chamadas ao servidor LoRa Cloud Modem & Geolocation Services.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 3: URL da API

A URL do LoRa Cloud Modem & Geolocation Services depende da região em que o dispositivo será implantado.
Clique em "Manage Tokens", então você poderá verificar a URL da API:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
Quando os dados são recebidos de um dispositivo, ele é registrado automaticamente no servidor LoRa Cloud Modem & Geolocation Services. Isso significa que o dispositivo não precisa ser registrado antecipadamente.
:::

### LoRaWAN® Network Server(TTN)

Atualmente usamos [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)

Para começar, registre uma conta na The Things Industries ou na The Things Network.

#### Etapa 1: Criar uma aplicação

Navegue até a página Applications, clique em "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Digite um Application ID e clique em Create Application para salvar suas alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 2: Registrar o dispositivo

Clique em "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Defina os seguintes parâmetros:

**Frequency Plan**: Selecione o plano de frequência apropriado para a região alvo

**LoRaWAN version**:LoRaWAN Specification 1.0.3

**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: Aqueles que você definiu no arquivo 'lorawan_key_config.h' na configuração anterior.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 3: Criar Credenciais

O servidor de rede The Things Network V3 exige que você gere uma senha MQTT exclusiva. Na página Application do console:

- Clique em Integrations e depois em MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

- Selecione Generate new API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

- Copie os valores dos seguintes campos: Server Address, Username e Password.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### Application Server

O servidor de aplicação lida com os dados da aplicação e quadros de gerenciamento do dispositivo. Como não há conexão em segundo plano entre o servidor de rede LoRaWAN® e o LoRa Cloud™ Modem & Geolocation Services, todos os uplinks relacionados ao tráfego do modem devem ser encaminhados pelo servidor de aplicação para o LoRa Cloud Modem & Geolocation Services.

Nós usamos o Node-RED como servidor de aplicação. O Node-RED é uma ferramenta de programação visual baseada em navegador que permite prototipagem rápida. Construído sobre Node.js, o Node-RED pode ser usado para conectar fluxos usando uma ampla variedade de nós. Esses nós podem então ser implantados no runtime do Node-RED com um único clique.

#### Instalar Node.js®

Para instalar o Node-RED localmente você precisará de uma <a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span> Supported Node Version </span></a>

Baixe a versão LTS 16.x mais recente do Node.js do site oficial <a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>. Ele oferecerá a melhor versão para o seu sistema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

Ao instalar o Node.js, se você estiver usando um computador que não teve nenhum ambiente de programação instalado, recomendamos que você marque a caixa para instalar as ferramentas necessárias durante a instalação do Node.js, o que lhe poupará muitos problemas desnecessários.

A maneira mais fácil de instalar o Node-RED é usando a ferramenta de gerenciamento de pacotes do Node, o npm. No entanto, não recomendamos instalar o Node-RED com o npm 1.x, mas sim atualizá-lo para a versão mais recente do npm 2.x.

:::note
No Windows (requer Windows 10 ou superior), use o atalho Win+R e digite cmd na janela pop-up para abrir o terminal e executar o seguinte comando.
:::

Se você estiver usando MacOS ou Linux, execute o seguinte comando no terminal e adicione sudo antes do comando para usuários sem privilégios de root.

```cpp
npm install -g npm@2.x
```

Depois de instalado, abra um prompt de comando e execute o seguinte comando para garantir que o Node.js e o npm estejam instalados corretamente.

```cpp
node --version && npm --version
```

Você deverá receber uma saída semelhante a:

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### Instalar Node-RED

Instalar o Node-RED como um módulo global adiciona o comando node-red ao caminho do seu sistema. Execute o seguinte no prompt de comando:

```cpp
npm install -g --unsafe-perm node-red
```

Se o Node-RED estiver instalado como um pacote global do npm, execute diretamente o comando node-red:

```cpp
node-red
```

Isso permitirá que você veja o editor do Node-RED em http://localhost:1880.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

A interface do usuário possui três áreas principais:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

- **Palette**: Aqui você pode selecionar nós; eles são blocos funcionais que podem ser arrastados e soltos e depois conectados para criar um fluxo.
- **Flow**: Este é o código-fonte do programa. Neste painel, você pode conectar nós para criar uma aplicação.
- **Sidebar**: A Sidebar exibe qualquer informação de Ajuda ou depuração disponível para o nó selecionado.

#### Instalar bibliotecas

Para configurar a demonstração, vamos instalar 2 bibliotecas adicionais:

- [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): Lida com conexões para servidores LoRa Cloud™

- [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): Página web de mapa-múndi para plotar "coisas"

Clique no menu no canto superior direito e selecione "Manage palette".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

Selecione Install no menu Palette.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

Pesquise por "node-red-contrib-loracloud-utils" e instale.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

Repita estas etapas para instalar as bibliotecas "node-red-contrib-web-worldmap".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### Importar o Flow

O pacote da Seeed inclui exemplos úteis para guiá-lo neste projeto de exemplo, você só precisa importar estes 2 arquivos de configuração.

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

Então você verá os seguintes fluxos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### Configurar o Flow

**Configurando o LoRaWAN Network Server (MQTT)**
Todos os conectores de servidor de rede são ativados por padrão; no entanto, a conexão MQTT deve ser configurada separadamente.
Antes de começar, obtenha os dados necessários:

- Endereço do servidor MQTT
- Porta MQTT
- Nome de usuário MQTT
- Senha MQTT

Esses dados podem ser obtidos na **Etapa 3: Criar Credenciais**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

Dê um clique duplo no nó "TTN v3-Uplinks" e edite o nó MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

Você pode encontrar o Server e a Port na [etapa anterior](https://wiki.seeedstudio.com/pt-br/Wio-WM1110_Dev_Kit_Server_Configuration/#Etapa-3%3A-Criar-Credenciais:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

Em seguida, adicione o nome de usuário e a senha em "Security".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

Clique em Add e depois clique em Done.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

Dê um clique duplo no nó "TTN joinReq" e selecione o servidor MQTT que adicionamos na etapa anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**Configuração do Modem & Geolocation Service**

Para configurar o servidor, os valores de MGS URL e MGS TOKEN da [etapa anterior](https://wiki.seeedstudio.com/pt-br/Wio-WM1110_Dev_Kit_Server_Configuration/#Etapa-2%3A-Obter-um-token)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

Preencha o EUI do seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

Clique no botão "Deploy" para implantar o fluxo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### Visualização de Dados

Clique em "Debug" para visualizar os dados retornados pelos serviços LoRa Cloud Modem & Geolocation:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**Geolocalização**

Para exibir o mapa, adicione `/worldmap` ao URL no seu navegador.
Por exemplo: http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## Recursos

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

## Suporte Técnico

**Precisa de ajuda com o seu Wio-WM1110 Dev Kit? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>

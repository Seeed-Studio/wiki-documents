---
description: Enviar mensagem do Watcher para o Node-Red
title: Watcher para Node-RED
keywords:
  - watcher
  - Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /watcher_to_node_red
sidebar_position: 1
last_update:
  date: 06/28/2024
  author: Allen
createdAt: '2024-07-02'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/
---

# Guia Rápido de Watcher para Node-RED

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) é uma ferramenta de programação para conectar dispositivos de hardware, APIs e serviços online de maneiras novas e interessantes.

Ele fornece um editor baseado em navegador que facilita a conexão de fluxos usando a ampla variedade de nós na paleta, que podem ser implantados em seu runtime com um único clique.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

Para facilitar que nossos usuários **conectem dados do Watcher a várias outras plataformas PaaS para um processamento de dados mais profundo**. Por exemplo, do Watcher para IFTTT, Telegram, Twilio etc. Faremos uma série de tutoriais para **Watcher & Node-RED**.

Este tutorial, o primeiro de uma série, irá guiá-lo pela instalação e uso do Node-RED e pela chamada da API do Watcher para se conectar ao Node-RED.

## Parte 1. Instalar Node.js®

Para instalar o Node-RED localmente, você precisará de uma [versão compatível do Node.js](https://nodered.org/docs/faq/node-versions).

Baixe a versão LTS 14.x mais recente do Node.js na [página inicial oficial do Node.js](https://nodejs.org/en/). Ela oferecerá a melhor versão para o seu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Execute o arquivo MSI baixado. A instalação do Node.js requer privilégios de administrador local; se você não for um administrador local, será solicitado que forneça uma senha de administrador durante a instalação. Aceite as opções padrão ao instalar. Após a conclusão da instalação, feche quaisquer prompts de comando abertos e reabra-os para garantir que as novas variáveis de ambiente sejam carregadas.
:::
Ao instalar o Node.js, se você estiver usando um computador que não teve nenhum ambiente de programação instalado, recomendamos que você marque a caixa para instalar as ferramentas necessárias durante a instalação do Node.js, o que evitará muitos problemas desnecessários.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

A maneira mais fácil de instalar o Node-RED é usando a ferramenta de gerenciamento de pacotes do Node, o **npm**. No entanto, não recomendamos instalar o Node-RED com o npm 1.x, mas sim atualizá-lo para a versão mais recente do **npm 2.x**.

:::note
No **Windows** (requer Windows 10 ou superior), use o atalho **Win+R** e digite `cmd` na janela pop-up para abrir o terminal e executar o seguinte comando.

Se você estiver usando **MacOS** ou **Linux**, execute o seguinte comando no terminal e adicione `sudo` na frente do comando para usuários sem privilégios de root.
:::

```sh
npm install -g npm@2.x
```

Depois de instalado, abra um prompt de comando e execute o comando a seguir para garantir que o Node.js e o npm estejam instalados corretamente.

```sh
node --version && npm --version
```

Você deverá receber uma saída semelhante a:

```sh
> v16.17.0
> 2.15.12
```

## Parte 2. Instalar Node-RED

Instalar o Node-RED como um módulo global adiciona o comando `node-red` ao caminho do seu sistema. Execute o seguinte no prompt de comando:

```sh
npm install -g --unsafe-perm node-red
```

Se o Node-RED estiver instalado como um pacote global do npm, execute diretamente o comando node-red:

```sh
node-red
```

Isso irá enviar o log do Node-RED para o terminal. Você deve manter o terminal aberto para manter o Node-RED em execução.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Isso permitirá que você veja o editor do Node-RED em http://localhost:1880.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## Parte 3. Executar uma tarefa no Watcher

Diga ao Watcher com o que você quer que ele o ajude. Você só precisa inserir alguns comandos na caixa de entrada. Por exemplo, **Me avise quando detectar pessoas** ou **Me avise se houver um incêndio**, etc. Se quiser saber mais, [**clique aqui**](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

Assim, o Watcher irá notificá-lo pelo SenseCraft APP, bem como com alertas de áudio e luz RGB piscando quando detectar um incêndio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## Parte 4. Watcher envia mensagem para o Node-RED

Fornecemos dois métodos para enviar mensagens do Watcher para o Node-RED, SenseCAP Node e protocolo HTTP. Você pode escolher qualquer método que desejar.

### Método 1: Usar SenseCAP node

#### Passo 1. Obter a chave de API do Watcher

Abra o SenseCraft APP e siga as etapas abaixo para obter o **Organization ID** e a **API Key**. Iremos usá-los mais tarde.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 4</th>
      <th>Página 5</th>
      <th>Página 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Passo 2. Instalar SenseCAP node

Clique no ícone de três barras e depois clique na opção **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

Clique na opção **Install**, digite **sensecap** para pesquisar e então **instale**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

Arraste os módulos **OpenStream** e **debug** para a área de trabalho e então **conecte-os** com uma linha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**Clique duas vezes** no módulo OpenStram e então será aberta uma janela lateral. Dê um nome a ele e crie uma nova conta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

Dê um nome à sua conta e insira o seu **Organization ID** e a **API key** que você acabou de obter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

Clique no botão **Done** para receber todas as mensagens da plataforma ou você pode selecionar mensagens específicas que deseja receber. Por exemplo, se você quiser receber apenas as mensagens do seu Watcher, você pode preencher o código **EUI** que pode ser encontrado em **Setting** do dispositivo -> **About Device** ou na mensagem no **Passo 6**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

Clique no botão **Deploy**. Este botão é como o botão de compilar e executar. Sempre que você fizer alguma alteração, precisará clicar neste botão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

Depois disso, você verá um símbolo de conectado, o que significa que está funcionando como esperado. Quando o Watcher enviar mensagens, você as receberá no Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### Método 2: Usar protocolo HTTP

#### Passo 1. Abrir função de bloco HTTP

Quando você executar uma tarefa, clique no botão **Detail Configs** e então ative **HTTP Push Notification** e clique em **Go Setup**. Você precisa preencher **o endereço IP do seu computador** e a **porta de acesso do Node-RED** (a porta padrão é 1880). Em seguida, clique em **Update Now** e **Run Task**.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
      <th>Página 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Passo 2. Configuração no Node-RED

Primeiro, você precisa importar o fluxo de trabalho no seu Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

Cole o código a seguir nele e clique no botão **Import**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// here to process data\n// for example, extract alarm info \n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

Agora, quando o Watcher detectar pessoas, ele enviará mensagem para o Node-RED automaticamente~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 5. Pré-visualizar imagem

Se você quiser pré-visualizar a imagem do Watcher, você precisa instalar uma biblioteca no Node-RED.

Caso contrário, você pode ignorar esta parte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

Após a instalação, você pode encontrá-la na **parte de saída**; arraste-a para onde quiser pré-visualizar a imagem e conecte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

Esta etapa é muito importante. Você precisa **dar um clique duplo no nó de pré-visualização de imagem** e **preencher a URL base64 neste nó**. Não se esqueça de **clicar nos botões Done e Deploy** no canto superior direito. Depois disso, iremos pré-visualizar a imagem quando a mensagem do Watcher chegar novamente~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

Parabéns! Agora os dados são transmitidos do Watcher para o Node-RED com sucesso. No próximo wiki, vamos guiá-lo sobre como enviar os dados do Watcher para outra plataforma, seja bem-vindo para experimentar~

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

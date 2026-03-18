---
description: Aprenda a configurar e ajustar o FlowFuse em um reComputer. Este guia aborda a criação de uma conta, instalação do Node.js, adição e configuração de dispositivos, criação de fluxos Node-RED e implantação de snapshots em dispositivos a partir da nuvem para integração e gerenciamento contínuos.
title: reComputer R1000 com FlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_flow_fuse
last_update:
  date: 07/30/2024
  author: Kasun Thushara
createdAt: '2024-07-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flow_fuse/
---
## Introdução

[FlowFuse](https://flowfuse.com/) aprimora o Node-RED adicionando recursos para desenvolvimento colaborativo, gerenciamento de implantações remotas, suporte a pipelines de entrega DevOps e hospedagem de aplicações Node-RED. Ele atua como uma plataforma DevOps especificamente projetada para o desenvolvimento e entrega de aplicações Node-RED, facilitando o trabalho em equipe e a implantação eficiente dos projetos.

## Início Rápido

Antes de começar este projeto, você precisa preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## Preparação de Software

### Instalando Node.js para FlowFuse em um reComputer

Para preparar seu reComputer para o FlowFuse, você precisa instalar o Node.js. Siga estas etapas para instalar o Node.js versão 20:

1. **Preparando o Repositório do Node.js**

Primeiro, atualize sua lista de pacotes e instale os certificados e ferramentas necessários:

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```

2. **Configurando o Repositório NodeSource**

Em seguida, configure o repositório NodeSource no seu reComputer:

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Adicionando o Repositório do Node.js**

De acordo com a documentação do FlowFuse, é recomendada a instalação do Node.js versão 20. Defina a variável `NODE_MAJOR` para 20:

```sh
NODE_MAJOR=20
```

Adicione o repositório do Node.js à lista de fontes do seu reComputer:

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

Atualize novamente sua lista de pacotes para incluir o repositório do Node.js:

```sh
sudo apt update
```

4. **Instalando Node.js**

Por fim, instale o Node.js:

```sh
sudo apt install nodejs
```

Agora você tem o Node.js versão 20 instalado no seu dispositivo.

Para começar a usar o FlowFuse, você precisará criar uma conta e verificar seu e-mail. Siga estes passos simples:

## Criar uma Conta

1. **Acesse a Página de Registro**:
   - Vá para [FlowFuse Account Creation](https://app.flowfuse.com/account/create).

2. **Preencha o Formulário de Registro**:
   - **Username**: Escolha um nome de usuário exclusivo.
   - **Full Name**: Informe seu nome completo.
   - **Email**: Forneça um endereço de e-mail válido.
   - **Password**: Crie uma senha forte.

3. **Envie o Formulário**:
   - Depois de preencher todos os campos obrigatórios, clique no botão 'Create Account'.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **Verifique Seu E-mail**:
   - Vá para a caixa de entrada do seu e-mail e procure um e-mail de verificação do FlowFuse.

5. **Abra o E-mail de Verificação**:
   - Abra o e-mail e use o código para verificar o e-mail.

6. **Retorne à Página de Login do FlowFuse**:
   - Vá para a página de login do FlowFuse.

7. **Insira Suas Credenciais**:
   - Username/Email: Insira o nome de usuário ou e-mail com o qual você se registrou.
   - Password: Insira sua senha.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **Login**:
   - Clique no botão `Login` para acessar sua conta FlowFuse. E talvez seja solicitado que você crie uma equipe.

## Criando uma Aplicação no FlowFuse

Para organizar suas instâncias Node-RED, elas são agrupadas em Aplicações. Dentro da sua Aplicação, você pode ter uma ou mais Instâncias de Node-RED. A Instância é uma versão personalizada do Node-RED que inclui vários plugins do FlowFuse para integrá-la à plataforma.

1. **Navegue até a Seção de Aplicações**:
   - No painel do FlowFuse, clique em `Create Application`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **Preencha os Detalhes da Aplicação**:
   - **Name**: Insira um nome para sua aplicação.
   - **Description**: Forneça uma breve descrição da sua aplicação.
   - **Instance Name**: Escolha um nome para sua instância Node-RED.
   - **Blueprint: Select** `Blank Workspace` como blueprint.
   - **Node-RED Version**: Escolha a versão mais recente do Node-RED no menu suspenso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **Crie a Aplicação**:
   - Depois de preencher todos os detalhes, clique no botão `Create`.

## Criando um Fluxo no FlowFuse

Vamos criar um fluxo no Node-RED para gerar um número aleatório e exibi-lo em um dashboard. Se você é novo no Node-RED, pode visitar nosso [guia de Primeiros Passos com Node-RED](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_getting_started_node_red/). Etapas para Criar um Fluxo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Abra o Editor Node-RED**:
   - Vá para a sua instância e selecione a instância que você acabou de criar.
   - Clique em `Open Editor` para abrir o editor Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **Instale os Nós Necessários**:
   - Você pode não ver os nós `random` e `gauge` por padrão. Para instalá-los:
   - Vá para o menu no canto superior direito e selecione `Manage palette`.
   - Vá para a aba `Install`.
   - Pesquise pelos nós `Random` e `Dashboard` e instale-os.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **Crie o Fluxo**:
   - Copie o fluxo a seguir e importe-o no seu editor Node-RED para economizar tempo:

```sh
[
    {
        "id": "fd017c5f719054f5",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "45888468a69bbabb",
        "type": "random",
        "z": "fd017c5f719054f5",
        "name": "Random",
        "low": 1,
        "high": "100",
        "inte": "true",
        "property": "payload",
        "x": 340,
        "y": 160,
        "wires": [
            [
                "ce3820147521aaa6"
            ]
        ]
    },
    {
        "id": "5e571c440b2340e9",
        "type": "inject",
        "z": "fd017c5f719054f5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "45888468a69bbabb"
            ]
        ]
    },
    {
        "id": "ce3820147521aaa6",
        "type": "ui_gauge",
        "z": "fd017c5f719054f5",
        "name": "",
        "group": "7ac87662e9cf0550",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Random Number",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "7ac87662e9cf0550",
        "type": "ui_group",
        "name": "Default",
        "tab": "0dc7fe4a8add5b68",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0dc7fe4a8add5b68",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

4. **Faça o Deploy do Fluxo**:
   -Clique no botão `Deploy` no canto superior direito para implantar seu fluxo.

## Adicionando e Configurando um Dispositivo no FlowFuse

1. **Para adicionar e configurar um dispositivo no FlowFuse, siga estes passos**:

- No painel do FlowFuse, navegue até a seção `Devices`.
- Clique no botão `Add Device`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

- Preencha os Detalhes do Dispositivo
- Clique no botão `Add` para criar seu dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **Copie a Configuração do Dispositivo**

- Após adicionar o dispositivo, será apresentada uma Configuração de Dispositivo.
- Nas instruções manuais, copie o trecho de código fornecido. Você precisará dessas credenciais para conectar o dispositivo à nuvem FlowFuse.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## Instalando o Agente do Dispositivo

No terminal do seu reComputer, execute o seguinte comando para instalar o agente de dispositivo do FlowFuse:

```sh
sudo npm install -g @flowfuse/device-agent
```

### Configurando o Agente do Dispositivo

1. **Criar o Diretório de Configuração**:  - Execute o seguinte comando um por um para criar o diretório de configuração e definir as permissões apropriadas:

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```

2. Criar e editar o arquivo de configuração:**  - Abra um novo arquivo de configuração chamado `device.yml`:

```sh
nano device.yml
```

- Cole a configuração de dispositivo copiada neste arquivo e salve pressionando `Ctrl + X`, depois `Y` e `Enter`.

3. Executar o Device Agent:  - Execute o seguinte comando para iniciar o agente de dispositivo do FlowFuse:

```sh
flowfuse-device-agent --port=1881
```

Seu dispositivo agora está configurado e conectado à nuvem FlowFuse, pronto para uso.

## Implantando o Flow em um Dispositivo

Para implantar o flow no seu dispositivo, você precisa criar um snapshot da sua instância do Node-RED e enviá-lo para o terminal reComputer. Siga estas etapas:

### Criar um Snapshot

1. **Navegar até a Aplicação**:
   - Vá para sua aplicação FlowFuse e selecione a instância que você criou.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **Selecionar 'Snapshot'**:
   - Clique na opção `Snapshot` no menu da instância.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **Criar um Novo Snapshot**:
   - Como ainda não há snapshots, você precisa criar um.
   - Clique em `Create Snapshot`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **Preencher os Detalhes do Snapshot**:
   - `Name`: Insira um nome para o seu snapshot.
   - `Description`: Forneça uma breve descrição do snapshot.
   - `Set as Target`: Marque a caixa para definir este snapshot como o alvo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **Criar o Snapshot**:
   - Clique no botão `Create` para criar o snapshot. Isso irá capturar o estado atual da sua instância do Node-RED, incluindo fluxos, credenciais, variáveis de ambiente, pacotes NPM (com versões travadas) e configurações de runtime.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## Enviando o Snapshot para o Dispositivo

Para implantar o snapshot no seu dispositivo, siga estas etapas:

1. **Ir para a Seção de Dispositivos**

- No painel do FlowFuse, vá para a seção `Devices`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **Selecionar o Dispositivo**

- Encontre o dispositivo que você criou e configurou anteriormente.
- Toque nos três pontos ao lado do nome do dispositivo.
- Clique em `Add Instance`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **Adicionar a Instância ao Dispositivo**

- Escolha a aplicação e a instância que você criou anteriormente.
- Clique no botão `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **Implantar o Flow**

- Seu flow será implantado no dispositivo em poucos segundos. Ele será executado com as configurações e definições capturadas no snapshot.

5. **Acessar o Dispositivo**

- Acesse o seu dispositivo navegando para `<ip_address_recomputer>:1881/ui` no seu navegador web.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

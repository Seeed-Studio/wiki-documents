---
description: Gerencie e automatize com eficiência suas soluções de IIoT com o Node-RED no reComputer-R1000 Raspberry Pi. Integre dados de vários protocolos industriais de forma contínua, visualize em tempo real e aumente a eficiência operacional com esta plataforma poderosa e fácil de usar.
title: Primeiros Passos com Node Red no reComputer-R1000
keywords:
  - Controlador de Borda
  - reComputer
  - IoT
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_getting_started_node_red
sku: 113991274,E24010521
last_update:
  date: 07/01/2024
  author: Kasun Thushara
createdAt: '2024-05-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_getting_started_node_red/
---
## Introdução

[Node-RED](https://nodered.org/) é uma ferramenta de programação versátil projetada para conectar dispositivos de hardware, APIs e serviços on-line de forma contínua. Seu editor de fluxos baseado em navegador simplifica o processo de interligar diferentes componentes usando uma variedade de nós da paleta. Com um ambiente de execução leve construído sobre Node.js, ele utiliza com eficiência o Raspberry Pi e outros hardwares de baixo custo, tornando-o perfeito para aplicações de borda de rede.

## Primeiros Passos

Antes de começar este projeto, talvez seja necessário preparar seu hardware e software com antecedência, conforme descrito aqui.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a></div></td>
    </tr>
  </table>
</div>

### Preparação de Software

O reComputer-R1000 chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso Wiki [Primeiros Passos](https://wiki.seeedstudio.com/pt-br/recomputer_r/)

## Instalar Node Red no reComputer-R1000

- **Passo 01**: Acessar o reComputer-R1000 via SSH
Abra o PowerShell se você estiver usando Windows ou abra o aplicativo Terminal se estiver usando outro programa e, em seguida, digite ssh `{USERNAME}@{RECOMPUTER_IP_ADDRESS}`. Como exemplo

```sh
ssh pi@192.168.43.100
```

Depois, insira a senha para o `{USER}` do sistema operacional que você configurou no seu reComputer.

- **Passo 02**: Instalar Node-RED

A equipe do Node-RED preparou um script All-IN-ONE para nós, no qual você só precisa inserir o seguinte comando no aplicativo Terminal nativo do reComputer (via VNC Viewer) ou no shell SSH do passo acima.

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

Ao final da instalação, serão feitas algumas perguntas pelo prompt e você precisará respondê-las.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 03**: Configurar Node-Red
Após a conclusão da instalação com o script All-IN-ONE, você pode usar os seguintes comandos conforme necessário:

Use `node-red-start`                   para iniciar o Node-RED<br />
Use `node-red-stop`                    para parar o Node-RED <br />
Use `node-red-start`                   para iniciar o Node-RED novamente <br />
Use `node-red-log`                     para visualizar a saída recente de log <br />
Use `sudo systemctl enable nodered.service`para ativar a inicialização automática do Node-RED em cada boot <br />
Use `sudo systemctl disable nodered.service`para desativar a inicialização automática na inicialização <br />

- **Passo 04**: Acessar o editor do Node-RED

Agora abra o seu navegador da web favorito e insira a URL descrita abaixo:

- Opção 1: Use `http://127.0.0.1:1880`, se o navegador estiver sendo executado localmente no seu reComputer via VNC.

- Opção 2: Use `http://{reComputer_IP_ADDRESS}:1880`, se o navegador estiver sendo executado remotamente em um computador host; substitua `{reComputer_IP_ADDRESS}` pelo endereço IP do reComputer.

## Familiarizando-se com o Node-RED

Agora você deverá ver um resultado semelhante à imagem abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Visão geral do editor do Node-RED

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **Painel de Nós**: A área onde os usuários podem navegar e selecionar nós de uma paleta para adicionar aos seus fluxos.
- **Editor de Fluxos**: A área de trabalho onde os usuários conectam visualmente nós para criar seus fluxos.
- **Painel de Configuração**: A seção onde os usuários podem configurar as propriedades e definições dos nós selecionados.
- **Botão de Configurações**: Permite que os usuários acessem e ajustem várias configurações e preferências do editor Node-RED.
- **Botão Deploy**: Permite que os usuários façam o deploy de seus fluxos para o runtime do Node-RED, tornando-os ativos e operacionais.

### Instalar Nós

Existem algumas opções: uma é usar linhas de comando e a outra é usar o editor do Node-RED. Aqui, explicarei o método mais simples, que é usar o editor do Node-RED.

- **Passo 1**: Clique no botão Settings com o ícone de **três traços**, localizado no canto direito, e então selecione Manage palette

- **Passo 2**: Na aba palette, clique na aba Install

- **Passo 3**: Pesquise o nó na barra de pesquisa de nós e clique no botão install para instalar

- **Passo 4**: clique no botão **Install** na janela de aviso suspensa para confirmar a instalação

- **Passo 5**: Aguarde a conclusão da instalação; você deverá ver o botão install mudar para installed.

- **Passo 6**: você deverá ver os nós instalados na barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

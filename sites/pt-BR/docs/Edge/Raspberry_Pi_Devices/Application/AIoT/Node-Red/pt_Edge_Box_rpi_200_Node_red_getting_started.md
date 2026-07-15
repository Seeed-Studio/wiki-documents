---
description: Primeiros Passos com Node-RED no Edge Box RPi 200
title: Primeiros Passos com Node-RED no Edge Box RPi 200
keywords:
  - Controlador de Borda
  - Edge-Box
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge-Box-Getting-Started-with-Node-Red
last_update:
  date: 05/14/2024
  author: Kasun Thushara
createdAt: '2024-05-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/
---
## Introdução

[Node-RED](https://nodered.org/) é uma ferramenta de programação versátil projetada para conectar dispositivos de hardware, APIs e serviços online de forma perfeita. Seu editor de fluxos baseado em navegador simplifica o processo de conectar diferentes componentes usando uma variedade de nós da paleta. Com um runtime leve construído em Node.js, ele utiliza com eficiência o Raspberry Pi e outros hardwares de baixo custo, tornando-o perfeito para aplicações em redes de borda.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

O Edge Box-200 chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso Wiki [Getting Started](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/)

## Instalar Node-RED no Edge Box

- **Passo 01**: Fazer SSH para o Edgebox
Abra o PowerShell se estiver usando Windows ou abra o aplicativo Terminal se estiver usando macOS/Linux e, em seguida, digite ssh `{USERNAME}@{EDGEBOX_IP_ADDRESS}`. Como exemplo

```sh
ssh pi@192.168.43.100
```

Em seguida, insira a senha para o `{USER}` do sistema operacional que você configurou no seu Edge Box.

- **Passo 02**: Instalar Node-RED

A equipe do Node-RED preparou para nós um script All-IN-ONE, no qual você só precisa inserir o seguinte comando no aplicativo Terminal nativo do EdgeBox (via VNC viewer) ou no shell SSH do passo acima.

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

Ao final da instalação, serão feitas algumas perguntas pelo prompt, e você precisará respondê-las.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 03**: Configurar Node-RED
Após a conclusão da instalação com o script All-IN-ONE, você pode usar os seguintes comandos conforme necessário:

Use `node-red-start`                   para iniciar o Node-RED<br />
Use `node-red-stop`                    para parar o Node-RED <br />
Use `node-red-start`                   para iniciar o Node-RED novamente <br />
Use `node-red-log`                     para visualizar a saída recente de log <br />
Use `sudo systemctl enable nodered.service`to autostart Node-RED at every boot <br />
Use `sudo systemctl disable nodered.service`to disable autostart on boot <br />

- **Passo 04**: Acessar o editor do Node-RED

Agora, abra seu navegador da Web favorito e insira a URL descrita abaixo:

- Opção 1: Use `http://127.0.0.1:1880`, se o navegador estiver sendo executado localmente no seu Edgebox via VNC.

- Opção 2: Use `http://{EdgeBox_IP_ADDRESS}:1880`, se o navegador estiver sendo executado remotamente em um computador host; substitua `{EdgeBox_IP_ADDRESS}` pelo endereço IP do EdgeBox.

## Familiarizando-se com o Node-RED

Agora você deverá ver um resultado semelhante ao da imagem abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Visão geral do editor Node-RED

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **Painel de Nós**: A área onde os usuários podem navegar e selecionar nós de uma paleta para adicionar aos seus fluxos.
- **Editor de Fluxos**: A área de trabalho onde os usuários conectam visualmente os nós para criar seus fluxos.
- **Painel de Configuração**: A seção onde os usuários podem configurar as propriedades e definições dos nós selecionados.
- **Botão de Configurações**: Permite que os usuários acessem e ajustem várias configurações e preferências do editor Node-RED.
- **Botão Deploy**: Permite que os usuários façam o deploy de seus fluxos para o runtime do Node-RED, tornando-os ativos e operacionais.

### Instalar Nós

Há algumas opções: uma é usando linhas de comando e a outra é usando o editor Node-RED. Aqui, vou explicar o método mais simples, que é usando o editor Node-RED.

- **Passo 1**: Clique no botão Settings com o ícone de **três traços** localizado no canto direito e, em seguida, selecione Manage palette

- **Passo 2**: Na aba palette, clique na aba Install

- **Passo 3**: Procure pelo nó na barra de pesquisa de nós e clique no botão install para instalar

- **Passo 4**: Clique no botão **Install** na janela de aviso suspensa para confirmar a instalação

- **Passo 5**: Aguarde a conclusão da instalação e você deverá ver o botão install mudando para installed.

- **Passo 6**: você deverá ver os nós instalados na barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

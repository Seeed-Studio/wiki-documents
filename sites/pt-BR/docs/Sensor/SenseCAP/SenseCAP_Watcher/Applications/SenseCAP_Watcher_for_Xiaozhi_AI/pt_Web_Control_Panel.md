---
description: Guia para usar o Painel de Controle Web do seu SenseCAP Watcher Agent
title: Painel de Controle Web(β)
sidebar_position: 3
keywords:
  - SenseCAP
  - Watcher
  - Web Control Panel
  - Agent Configuration
  - Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-05-07'
updatedAt: '2025-10-17'
url: https://wiki.seeedstudio.com/pt-br/watcher_web_control_panel/
---

# Guia do Painel de Controle Web Beta

## Visão geral

O Painel de Controle Web (Beta) do SenseCAP Watcher fornece uma interface baseada na web para gerenciar seu dispositivo Watcher e configurar as definições do Agent. Esta versão beta inclui recursos essenciais para gerenciamento do dispositivo e personalização do Agent.

O vídeo a seguir serve como um tutorial passo a passo sobre como configurar seu dispositivo usando o Painel de Controle Web.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Recursos atuais

A versão beta do Painel de Controle Web inclui os seguintes recursos principais:

1. Vinculação de dispositivo
2. Configuração do Agent
3. Seleção de modelo de LLM
4. Gerenciamento do histórico de chat
5. Exibição de informações do dispositivo

## Vinculação de dispositivo

### Processo de vinculação
1. Acesse o painel de controle do Watcher Agent via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`**, ou use o [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/37) e então clique em **`Watcher Agent`** na barra lateral esquerda.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_agent_workspace.png" style={{width:800, height:'auto'}}/></div>

2. Clique no botão "Bind Device"
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
3. Siga as instruções na tela e insira o código de verificação de 6 dígitos exibido no dispositivo



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Configuração do Agent

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### Modelo de função
- Fornecemos modelos predefinidos; você também pode criar seus próprios modelos ou modificar os modelos predefinidos.

### Apelido do assistente
- Personalize o nome do seu Agent.
:::note
Este recurso não altera a palavra de ativação do Agent. 
A palavra de ativação do Agent só pode ser modificada ao compilar o firmware. 
A palavra de ativação padrão é “Jarvis”.
:::


### Voz do personagem
- Selecione vozes diferentes

### Introdução/Prompt da função
1. Escolha entre modelos de função predefinidos
2. Crie modelos de função personalizados
3. Modifique modelos existentes
:::note
O Apelido do assistente definido acima só funcionará se `assistant nickname` for adicionado à Introdução da função.
Para obter a hora atual, você precisa adicionar: __DATE__
:::


### Visualização do histórico
- Acesse os registros de chat
- Veja mensagens individuais
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## Informações do dispositivo

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

O painel de controle exibe informações essenciais do dispositivo, incluindo:

- Nome da placa
- Endereço MAC
- Versão do APP
- Último horário de conexão
- Interruptor de atualização automática
- Operação

:::note
Esta é uma versão beta do Painel de Controle Web, e os recursos podem ser atualizados ou alterados em versões futuras. Verifique regularmente se há atualizações para obter a funcionalidade mais recente.
:::

## Suporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

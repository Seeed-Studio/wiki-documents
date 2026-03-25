---
description: Este artigo fornece um guia de configuração detalhado para configurar o dispositivo Watcher em três diferentes fluxos de implantação de processamento, incluindo Fluxo de Processamento Eficiente em Nuvem, Fluxo de Processamento Inteligente Híbrido e Fluxo de Processamento Seguro Local. Ele oferece uma visão geral da estrutura de serviço de software do Watcher, ilustrando as interações entre o usuário, o aplicativo SenseCraft Mate e o dispositivo Watcher.
title: Introdução ao Serviço de Software do Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 10/09/2024
  author: Evelyn Chen
createdAt: '2024-09-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_software_service_framework/
---


## Visão Geral da Estrutura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

Esta é a estrutura de serviço de software do Watcher, ilustrando as interações e o fluxo de tarefas entre o usuário, o aplicativo SenseCraft Mate e o dispositivo Watcher. Oferecemos múltiplas opções de configuração que permitem aos usuários personalizar a implantação do serviço com base em seus requisitos de segurança de dados e qualidade de serviço.

A estrutura integra serviços de IA em nuvem e implantações de IA locais, combinados com serviços de dados, serviços de comunicação de dispositivos, orquestração de tarefas, serviços de análise de imagens, agentes de canal de alerta e serviços de treinamento de modelos.
você pode optar por implantar seu LLM na nuvem ou em infraestrutura local. Os dados originais e o resultado também podem ser escolhidos para serem armazenados ou transmitidos na nuvem ou em dispositivo local.
Comparação entre nuvem e soluções de armazenamento local, bem como a necessidade de armazenamento de maior desempenho em máquinas virtuais habilitadas para GPU.

Esses componentes formam três opções de implantação para os usuários escolherem:

1. **Fluxo de Processamento Eficiente em Nuvem**
2. **Fluxo de Processamento Inteligente Híbrido**
3. **Fluxo de Processamento Seguro Local**

As seções a seguir fornecem uma explicação detalhada da estrutura e orientam você na configuração de cada uma das três opções de implantação.

**Serviço de Dados**

O Watcher oferece serviços de dados flexíveis, permitindo que você se conecte à plataforma de dados SenseCraft para enviar dados de alerta, status do dispositivo e imagens de pré-visualização. A plataforma SenseCraft fornece um endereço de broker MQTT e token por meio de uma requisição HTTP. Como alternativa, você pode optar por enviar dados para plataformas de terceiros via configuração Bluetooth no aplicativo, ignorando completamente a plataforma SenseCraft.

**Serviço de Comunicação do Dispositivo**

Para comunicação do dispositivo, o Watcher suporta fluxos de tarefas remotas e atualizações de firmware OTA por meio de MQTT. Você pode usar o aplicativo SenseCraft Mate para criar tarefas e enviá-las ao dispositivo através da plataforma SenseCraft. O aplicativo também verifica a versão mais recente do firmware e, quando disponível, irá notificá-lo. Após a confirmação, a plataforma enviará a atualização para o dispositivo.

**Serviço de Orquestração de Tarefas**

O serviço de orquestração de tarefas do Watcher permite interações diretas por voz, onde seu diálogo é enviado ao serviço via HTTP, processado e o fluxo de tarefas é retornado ao dispositivo. O aplicativo SenseCraft Mate também pode recuperar fluxos de tarefas e enviá-los remotamente para o dispositivo.

**Serviço de Análise de Visão**

Em termos de análise de visão, o Watcher oferece um serviço unificado de análise de imagens. Você pode escolher entre SenseCraft, OpenAI ou agente de IA de terceiros por meio da configuração Bluetooth e inserir as chaves de API relevantes. Quando o dispositivo enviar uma imagem, ele utilizará o serviço selecionado, seja o `local llava` ou um serviço de terceiros como o OpenAI.

**Serviço de Notificação de Alertas**

Para notificações de alerta, o Watcher permite múltiplas opções, incluindo notificações push do aplicativo a partir da nuvem SenseCraft, conexões UART com outros hardwares e conexões HTTP com servidores locais ou plataformas de terceiros. Os alertas também podem ser enviados para plataformas como Discord usando formatos de dados padrão. Além disso, o Watcher pode encaminhar essas notificações para outras plataformas, como Home Assistant, IFTTT ou Webhooks, usando formatos compatíveis. Para mais detalhes, consulte a Aplicação de Proxy HTTP.

Você tem a flexibilidade de escolher entre múltiplas opções de implantação e configurar facilmente seu assistente Watcher personalizado. Seja sua prioridade a segurança dos dados ou a eficiência do processamento, oferecemos três soluções adaptáveis: Fluxo de Processamento Eficiente em Nuvem, Fluxo de Processamento Inteligente Híbrido e Fluxo de Processamento Seguro Local. Personalize seu assistente Watcher para lhe proporcionar a melhor experiência de serviço inteligente!

## Fluxo de Processamento Eficiente em Nuvem

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

Este diagrama fornece uma visão geral do Fluxo de Processamento Eficiente em Nuvem, ilustrando as interações entre o usuário, os serviços em nuvem e os aplicativos locais. Nesta configuração, todos os serviços são executados por meio da nuvem SenseCraft para oferecer um fluxo de trabalho simplificado e eficiente. Depois de começar e concluir a vinculação do dispositivo, você pode selecionar os serviços em nuvem ou locais apropriados com base em suas necessidades.

As seções a seguir explicam cada parte do Fluxo de Processamento Eficiente em Nuvem e fornecem orientações sobre como configurá-lo:

**Etapa 1**. Configuração Inicial:
Após concluir a [configuração](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade) e selecionar SenseCraft AI Services, você pode começar a usar os serviços em nuvem do Watcher.

**Etapa 2**. Interação do Usuário:
Há duas maneiras de ativar os serviços SenseCraft e alocar tarefas para o Watcher, detalhadas a seguir (consulte a seção XXX):

* Opção 1: Via App: Os usuários podem ativar os serviços de IA SenseCraft por meio do aplicativo móvel. Em seguida, enviam mensagens de tarefas no chat.
* Opção 2: Via Comandos de Voz: Os usuários podem atribuir tarefas por meio de conversa por voz diretamente com o Watcher.

**Etapa 3**. Orquestração de Tarefas:
Uma vez que o SenseCraft é ativado, ele funciona como uma Plataforma como Serviço (PaaS) para fornecer serviços de orquestração de tarefas. Isso inclui três elementos centrais:

* STT (Speech-to-Text): Converte comandos falados em texto.
* TTS (Text-to-Speech): Converte respostas baseadas em texto em saída falada.
* Serviços de IA: Responsáveis por compreender, processar e orquestrar tarefas. Com base no conteúdo da tarefa, o serviço seleciona os modelos mais adequados do repositório de modelos SenseCraft, incluindo modelos de linguagem de grande porte (LLMs) e modelos TinyML.

Além de selecionar manualmente modelos TinyML locais na configuração manual, as tarefas também podem ser processadas automaticamente com base no seu prompt de entrada. Após o modelo de orquestração de tarefas interpretar seu prompt, ele pode chamar o modelo TinyML apropriado da biblioteca SenseCraft. Por exemplo, se um usuário solicitar: "Me avise quando você vir um pássaro", o serviço de orquestração de tarefas selecionará um modelo de reconhecimento de pássaros da biblioteca TinyML para otimizar a velocidade de resposta.

Na *configuração manual*, você pode escolher entre o **Vision LLM** (para maior precisão) ou o **modelo TinyML** (para processamento mais rápido).

**Etapa 4**. Despacho de Tarefas após a Orquestração
Quando a orquestração de tarefas é concluída, o método de despacho das tarefas dependerá do status do recurso SenseCraft Remote Control:

* Se o controle remoto estiver ativado: O sistema utilizará o serviço de dados PaaS e o serviço de comunicação do dispositivo para enviar os resultados das tarefas ao Watcher por meio do broker MQTT.
* Se o controle remoto estiver desativado: As tarefas serão encaminhadas ao Watcher via Bluetooth. Se o dispositivo estiver fora do alcance do Bluetooth, você precisará ativar o controle remoto para a transmissão de tarefas.

**Etapa 5**. Processamento de Tarefas de Análise de Visão

Após receber a tarefa do SenseCraft, o dispositivo Watcher irá invocar o Serviço de Análise Visual. Ele analisará a tarefa usando o modelo de IA escolhido pelo usuário ou determinado pelo serviço de orquestração de tarefas.

**Etapa 6**. Notificações do Sistema
O Watcher pode notificar o usuário ou um sistema local utilizando vários métodos:

* Notificações push do aplicativo
* Saída de porta serial/UART
* Notificações push HTTP

O Watcher também pode enviar dados para servidores locais, aplicativos de terceiros ou serviços de alerta como Discord, Home Assistant ou IFTTT.
Para mais detalhes, consulte a seção Aplicação de Proxy HTTP.

## Fluxo de Processamento Inteligente Híbrido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

Este diagrama ilustra o Fluxo de Processamento Inteligente Híbrido, que envolve interações do usuário, alguns serviços em nuvem e aplicativos locais. A abordagem híbrida equilibra segurança de dados, experiência do usuário e eficiência, combinando orquestração de tarefas baseada em nuvem com modelos visuais locais.

**Etapa 1**. Configuração Inicial
Após [começar e vincular o dispositivo](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/#device-binding-and-ota-upgrade), os usuários podem selecionar os serviços locais apropriados com base em suas necessidades, ativar o serviço privado do Watcher e inserir a URL do servidor Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Etapa 2**. Interação do Usuário:
Os usuários podem enviar tarefas por meio do aplicativo SenseCraft, que iniciará o serviço de orquestração de tarefas dentro da plataforma.

**Etapa 3**. Orquestração de Tarefas:
Uma vez que uma tarefa é recebida, a plataforma SenseCraft, funcionando como uma PaaS (Platform-as-a-Service), irá orquestrar a tarefa usando três serviços centrais:

* STT (serviço de Speech-to-Text)
* TTS (serviço de Text-to-Speech)
* Serviços de IA para compreensão, processamento e orquestração de tarefas.

O serviço de orquestração de tarefas interpreta a tarefa e seleciona o modelo apropriado da biblioteca de modelos SenseCraft ou LLM (Large Language Model), dependendo dos requisitos da tarefa.

Além de selecionar manualmente modelos TinyML locais na configuração manual, as tarefas também podem ser processadas automaticamente com base no seu prompt de entrada. Após o modelo de orquestração de tarefas interpretar seu prompt, ele pode chamar o modelo TinyML apropriado da biblioteca SenseCraft. Por exemplo, se um usuário solicitar: "Me avise quando você vir um pássaro", o serviço de orquestração de tarefas selecionará um modelo de reconhecimento de pássaros da biblioteca TinyML para otimizar a velocidade de resposta.

Na *configuração manual*, você pode escolher entre o **Vision LLM** (para maior precisão) ou o **modelo TinyML** (para processamento mais rápido).

**Etapa 4**. Despacho de Tarefas após a Orquestração
Após a orquestração de tarefas, o sistema escolherá o método de envio dependendo do status do SenseCraft Remote Control:

* Se o controle remoto estiver ativado: o sistema usará o serviço de dados PaaS e o serviço de comunicação do dispositivo para enviar os resultados das tarefas ao Watcher via broker MQTT.
* Se o controle remoto estiver desativado: as tarefas serão enviadas ao Watcher via Bluetooth. Se o dispositivo estiver fora do alcance do Bluetooth, o controle remoto deve ser ativado para a continuidade da operação.

**Etapa 5**. Processamento da Tarefa de Análise de Visão
Quando o Watcher receber a tarefa, ele invocará o serviço local de análise visual implantado em um servidor local. A tarefa será analisada usando o modelo de IA selecionado pelo usuário ou orquestrado pelo serviço de tarefas SenseCraft.

**Etapa 6**. Notificações do Sistema
O Watcher pode notificar o usuário ou um sistema local usando vários métodos:

* Notificações push do app
* Saída de porta serial/UART
* Notificações push HTTP

O Watcher também pode enviar dados para servidores locais, aplicativos de terceiros ou serviços de alerta como Discord, Home Assistant ou IFTTT.
Para mais detalhes, consulte a seção Aplicação de Proxy HTTP.

## Fluxo de Processamento Local Seguro

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

Este diagrama descreve o “Fluxo de Processamento Local Seguro”, que foca na interação completa do usuário com aplicativos implantados localmente. Para garantir a privacidade dos dados, os serviços de orquestração de tarefas e de análise de imagens são implantados inteiramente no servidor local, oferecendo proteção total de privacidade. No entanto, esse método limita a funcionalidade, pois os serviços em nuvem SenseCraft não estão disponíveis. As tarefas só podem ser iniciadas por comandos de voz em campo, e os usuários devem configurar serviços de notificação para visualizar dados históricos.

**Etapa 1**. Configuração Inicial
Após o [começar e vinculação do dispositivo](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/#vinculação-do-dispositivo-e-atualização-ota), os usuários podem selecionar os serviços locais apropriados com base em suas necessidades, ativar o serviço privado do Watcher e inserir a URL do servidor Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Etapa 2**. Interação do Usuário:
Os usuários podem emitir tarefas pressionando o botão de rolagem no dispositivo Watcher e enviando comandos por meio de conversa por voz.

**Etapa 3**. Orquestração de Tarefas:

O servidor Watcher hospedado no servidor local fornece serviços de orquestração de tarefas, semelhantes ao sistema de orquestração de tarefas SenseCraft. Este sistema local consiste em três serviços centrais:

* STT (serviço de conversão de fala em texto)
* TTS (serviço de conversão de texto em fala)
* Serviços de IA para compreensão, processamento e orquestração de tarefas.

Após interpretar a tarefa, o serviço local de orquestração de tarefas envia as tarefas para o Watcher.

**Etapa 4**. Processamento da Tarefa de Análise de Visão
Quando o Watcher receber a tarefa, ele chamará o serviço local de análise visual implantado no servidor local. A tarefa será analisada usando o modelo de IA selecionado durante a orquestração da tarefa.

**Etapa 5**. Notificações do Sistema
O Watcher pode notificar usuários ou sistemas locais usando os seguintes métodos:

* Saída de porta serial/UART
* Notificações push HTTP

Além disso, o Watcher pode enviar dados para servidores locais, aplicativos de terceiros ou serviços de alerta como Discord, Home Assistant e IFTTT.
Para mais detalhes, consulte a seção Aplicação de Proxy HTTP.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este artigo apresenta como usar o Gapi em dispositivos NVIDIA Jetson, um API gateway incorporável projetado para transformar rapidamente as conquistas do Jetson AI Lab em aplicações do mundo real por meio de um mecanismo de fluxo de trabalho low‑code e um framework de microsserviços.
title: Primeiros Passos com o Gapi
tags:
  - Otimização de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
createdAt: '2024-09-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/gapi_getting_started-with_jetson/
---

# Primeiros Passos com o Gapi em Dispositivos NVIDIA® Jetson

[Gapi](https://genainerds.com/#/Gapi) é um API gateway incorporável que cria integrações de streaming entre microsserviços de IA e os sistemas que os usuários utilizam todos os dias.

O objetivo do projeto é acelerar a velocidade de criação de pilotos e demos das conquistas do Jetson AI Lab em ambientes do mundo real. IA generativa "On Device" não significa que ela tenha que viver em uma ilha!

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- Mecanismo de fluxo de trabalho com interface low code, com dezenas de integrações abertas e clientes personalizáveis para web móvel e desktop.
- Framework de microsserviços para encapsular contêineres Jetson (Ollama, Whisper, Piper TTS, etc. já estão prontos, com mais a caminho). Ou encapsule seus próprios modelos/códigos e integre-os aos Workflows.
- Mensageria em tempo real, híbrida, binária+json suaviza chamadas entre serviços e reduz a latência.
- Um caminho rápido para comprovar o valor da IA generativa para as partes interessadas em seu ambiente real.

## Gapi Server

Software de API gateway incorporável que roda em segundo plano com uma interface de fluxo de trabalho low code para testes. O servidor é um hub de mensagens e máquina de estados para os "nós" do fluxo de trabalho que se comunicam com os Microsserviços. Pense nele como um tecido conectivo para aplicações.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
Um Microsserviço é um processo que executa alguns scripts wrapper em python que integram códigos/modelos personalizados em Workflows usando uma API de streaming.
:::

- O Gapi Server pode rodar em qualquer Jetson Orin ou, na verdade, em qualquer computador, pois os Microsserviços se conectam para fora por meio de web sockets seguros. Ele não usa nenhum recurso de GPU. Há também uma pequena versão de demonstração para pular a instalação do Server (mas você ainda precisará executar seus próprios Microsserviços).
- [Página do Projeto Gapi](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Documentação do Gapi](https://genainerds.com/#/Docs)
- [Demo Hospedada do Gapi](https://genaigapi.com/)

## Requisitos

- Qualquer NVIDIA Jetson Orin
- Docker
- Espaço de Armazenamento Suficiente: 1,3 GB

## Instalar o Gapi no Jetson

**Execute estas etapas para instalar o Gapi no Jetson:**

```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**Fazer Login**

- Acesse em: http://[host-device-ip]:8090
- Usuário: root
- Senha: !gapi2024
- Altere a senha em Settings! A documentação mostra como adicionar certificado SSL.

## Workflows

Os Workflows conectam visualmente a execução e o fluxo de dados entre os Nós.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

Uma Transação (ou disparo único) possui dados de "Rolling Input" que acumula conforme as etapas de Nó para Nó se comunicam com Microsserviços e APIs. Todos os Nós aproveitam variáveis e controle de fluxo usando conceitos familiares de json e javascript.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

Cada Nó pode anexar ou referenciar os dados em andamento na Transação enquanto toma decisões ao longo do caminho.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

Veja as Transações ao vivo enquanto elas se iniciam a partir de clientes, webhooks e mensagens publicadas por Microsserviços, com feedback visual e depuração.

## Microsserviços

Um Microsserviço é um processo que executa um script wrapper em python que integra seus códigos/modelos personalizados para que possam ser integrados aos Workflows do Gapi.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

Você pode executar um Microsserviço onde quiser e conectá-lo a um Gapi Server por meio do protocolo de mensagens de streaming híbrido binário+json.

Existem alguns “Microsserviços da Comunidade" prontos para uso que nós integramos, testamos e empacotamos em imagens Docker. Quando você os executa, eles se integram automaticamente, carregam as camadas NVIDIA corretamente e oferecem logging para o sistema host.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

Ainda melhor, crie o seu próprio! Basta implementar um handler on_message em Python para processar solicitações e responder. O restante é tratado para você.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

Pense em um Microsserviço como um simples wrapper para algum código ou modelo que você tenha. Ele funciona da mesma forma que qualquer outro Nó dentro de um Workflow. Quando chega a vez do seu Nó de Microsserviço, sua função on_message será chamada. Seu script recebe os dados em andamento da Transação para contexto e então você publica seus dados diretamente de volta no fluxo.

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## Executando os Microsserviços da Comunidade

**Requisitos para Microsserviços da Comunidade**

1. Qualquer NVIDIA Jetson Orin
2. Espaço de Armazenamento Suficiente:
    - Literalmente 4 KB para o seu próprio Microsserviço
    - De cerca de ~4 GB a ~10 GB para cada Microsserviço da Comunidade

**Etapas:**

1. Faça login e vá até a aba Micro Services
2. Siga as instruções na caixa azul nessa página para baixar sua configuração personalizada
3. Em seguida, siga as instruções abaixo disso para instalar o Microsserviço desejado

## Parabéns! Agora você pode seguir as Dicas de Workflow

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

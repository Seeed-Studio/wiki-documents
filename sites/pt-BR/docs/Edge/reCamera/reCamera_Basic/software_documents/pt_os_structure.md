---
description: uma análise detalhada da estrutura do sistema operacional (SO) da reCamera
title: Estrutura do SO da reCamera
keywords:
  - Edge
  - reCamera
  - opereating system
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /recamera_os_structure
sidebar_position: 2
last_update:
  date: 02/15/2025
  author: Dawn Yao
createdAt: '2025-02-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_os_structure/
---

# Estrutura de Software da reCamera

O software vem com um reCamera OS estável que oferece suporte a atualizações de firmware via OTA. Além disso, a plataforma Node-RED e Sensecraft AI é integrada ao dispositivo para uma experiência de implantação mais fácil. Essa integração oferece a desenvolvedores iniciantes uma experiência de programação modular baseada em nós Node-RED. Para desenvolvedores avançados, o desenvolvimento aprofundado baseado em Linux e Python também estão disponíveis para explorar e se divertir.

Damos as boas-vindas a desenvolvedores proficientes em JavaScript, C/C++, Python, Linux OS, Buildroot, bem como a entusiastas, estudantes e iniciantes, para se envolverem em desenvolvimento adicional e explorar aplicações.

## reCamera OS

Este é um sistema operacional embarcado construído sobre o Buildroot, integrando os serviços `supervisor`, `sscma` (Seeed SenseCraft Model Assistant) e `Node-RED`. O diagrama de arquitetura é mostrado abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

O [código-fonte](https://github.com/Seeed-Studio/reCamera-OS) do SO está disponível no GitHub. Nossa equipe também está se esforçando para tornar o SO mais fácil de usar e versátil, cada atualização será publicada [aqui](https://github.com/Seeed-Studio/reCamera-OS/releases). A nova versão pode ser atualizada por OTA com a interface Web ou [atualizada manualmente](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control).

### 🧩 Supervisor

Supervisor é um gerenciador de processos leve que monitora e gerencia outros serviços. Ele é responsável por iniciar e parar serviços, bem como lidar com eventos do sistema e fornecer interfaces para outros serviços ou para a UI. Ele fornece os serviços abaixo:

#### Serviços do Sistema

- ***Gerenciamento de dispositivo***: identificar e configurar dispositivos conectados, dispositivos de armazenamento etc.
- ***Gerenciamento de usuário***: gerenciar contas de usuário, credenciais e chaves SSH.
- ***Configuração de rede***: configurar conexões de rede com fio e sem fio.
- ***Operações de sistema de arquivos***: gerenciar arquivos do dispositivo.
- ***Descoberta de dispositivo***:
  - Usa mDNS para transmitir informações do dispositivo. O hostname do dispositivo é recamera.local.
  - Quando uma interface web envia uma solicitação, o dispositivo reCamera faz uma varredura na rede local em busca de outros dispositivos reCamera via mDNS, gera uma lista de dispositivos descobertos, formata os dados e os retorna para a interface web. (Observação: atualmente, apenas as informações de um dispositivo são retornadas.)

#### Serviço de Atualização

- Gerenciamento de download de pacotes/firmware
- Verificação de segurança
- Automação de instalação

#### Serviço Daemon

- Monitoramento de integridade do sistema
- Recuperação automática de aplicações

#### Serviço de Log

- Rastreamento do status de execução
- Diagnóstico de erros

#### Serviço de Aplicação

- Implantação de aplicações
- Empacotamento de aplicações

### 🧩 Interface Web Básica

A interface web básica fornece uma interface amigável para que os usuários gerenciem o dispositivo. Ela obtém dados do Supervisor e forma a interface web básica da reCamera quando o dispositivo é ligado. A interface é mostrada abaixo:

- Página Inicial: `ip_address/#/init`
- Área de Trabalho: `ip_address/#/workspace` (para versão do SO 0.1.4 e superior)
- Configuração de Rede: `ip_address/#/network`
- Segurança: `ip_address/#/security`
- Terminal: `ip_address/#/terminal`
- Sistema: `ip_address/#/system`
- Energia: `ip_address/#/power`

Essas interfaces web básicas permitem que os usuários tenham acesso seguro às funcionalidades centrais de configuração do dispositivo quando ele é ligado. O [código-fonte](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www) também está disponível no Github caso você queira modificar o front-end da interface web básica.

### 🧩 Módulos Node-RED

#### sscma-node

Este é o módulo do lado do servidor para o Node-RED que permite a comunicação entre o cliente Node-RED e o serviço sscma. O [código-fonte](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node) está no Github para que qualquer desenvolvedor C/C++ possa realizar desenvolvimento estendido. Ele fornece os seguintes recursos:

- Serviço de processamento de imagem
- Gerenciamento de modelos de IA
- Serviço de streaming de mídia
- Serviço de armazenamento de dados

#### node-red-sscma

`node-red-contrib-sscma` é o componente de nó Node-RED projetado para facilitar a rápida implantação de modelos de IA por meio de programação baseada em fluxos. O [código-fonte](https://github.com/Seeed-Studio/node-red-contrib-sscma) também está no Github para que qualquer desenvolvedor faça desenvolvimento estendido seguindo o [protocolo](https://wiki.seeedstudio.com/pt-br/node_red_protocol). Isso permite integração perfeita das saídas dos modelos de IA com outros dispositivos, possibilitando automação inteligente e fluxos de trabalho inteligentes.

Um exemplo de como `camera node` e `model node` se comunicam é mostrado abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 Integração SenseCraft

Também há uma interface com a plataforma SenseCraft para modelos e fluxos de aplicação. O fluxo Node-RED pode ser armazenado no serviço em nuvem SenseCraft. Você também pode treinar seu próprio modelo e publicá-lo, tornando super fácil, com um clique, implantar diferentes aplicações no dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

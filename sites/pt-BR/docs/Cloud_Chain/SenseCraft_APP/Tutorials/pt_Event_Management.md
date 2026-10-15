---
sidebar_position: 1
description: SenseCraft App Versão 2.9.0 Manual do Usuário de Eventos
title: Gerenciamento de Eventos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-app/tutorials/event-management
aliases:
  - /sensecap_mate_app_event
last_update:
  date: 03/20/2023
  author: Matthew
createdAt: '2024-03-20'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-app/tutorials/event-management/
---

# Gerenciamento de Eventos no SenseCraft App

## Funções de Evento

A versão 2.9.0 do SenseCraft App introduz uma nova função de alarme de Evento que permite aos usuários criar eventos e definir condições de disparo do dispositivo. Quando os dispositivos atendem a essas condições, mensagens de alarme serão enviadas aos usuários. A página do dispositivo agora inclui uma nova função de centro de mensagens onde você pode visualizar mensagens de alarme acionadas pelo dispositivo e notificações do sistema, possibilitando alertas em tempo real, monitoramento remoto e gerenciamento remoto.

### Instalar o SenseCraft App V2.9.0

- Faça login na sua conta no SenseCraft App e navegue até a página Event
- Siga estas etapas para configurar alertas de Evento:

#### Etapa 1: Criar um Alerta de Evento

Clique no ícone Add ou no botão "Add Event" para criar um alerta de Evento. Na página Add Event, vá para Conditions para adicionar opções de condição e depois clique no botão Add para selecionar um dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

#### Etapa 2: Configurar Dispositivo e Condições

Selecione o dispositivo e escolha o tipo de medição. Defina as condições de alarme selecionando opções como "greater than" ou "less than" e depois arraste a barra de progresso para definir o valor de limite. Clique em "Next Step" para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

#### Etapa 3: Definir Ações de Recuperação

Na página Add Event, configure "Back to normal actions" para quando o dispositivo retornar às condições normais. Escolha se deseja enviar uma notificação e depois clique em "Save". Digite um nome de Evento e clique em "Submit" para adicionar com sucesso o alarme de Evento e retornar à lista de Eventos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

#### Etapa 4: Visualizar Mensagens de Alarme

Na página do Dispositivo, clique em "Message Center" para visualizar as mensagens de alarme. Isso mostra dois tipos de mensagens:

- **Device Warnings**: notificações de alarme acionadas pelo dispositivo
- **System Notifications**: mensagens do sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

#### Etapa 5: Gerenciar Mensagens de Alarme

Clique em uma mensagem de alarme para visualizar os detalhes quando um dispositivo aciona as condições configuradas. Após a visualização, retorne à lista de alarmes em que o status muda para "read". Clique no botão de edição para selecionar mensagens para várias operações, como marcar como lidas ou excluir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

#### Etapa 6: Visualizar Mensagens do Sistema

Navegue até mensagens do sistema e clique para visualizar notificações detalhadas do sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>

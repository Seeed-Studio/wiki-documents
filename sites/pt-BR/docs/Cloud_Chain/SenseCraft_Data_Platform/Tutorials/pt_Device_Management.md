---
sidebar_position: 3
description: Gerenciamento de Dispositivos SenseCAP Portal
title: Gerenciamento de Dispositivos
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/device-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/tutorials/device-management/
---


Aqui são oferecidos vários métodos para gerenciar dispositivos SenseCAP, incluindo Gerenciamento de Gateway, Gerenciamento de Grupo de Nós e Gerenciamento de Nó Sensor.

## Gateway

① Filtre o gateway com base em EUI, frequência, status e horário de registro.
② Lista de gateways, exibindo EUI, nome, status e assim por diante.
③ Clique no EUI para entrar na página de detalhes do dispositivo e ver informações básicas, localização, vinculação, etc.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## Gerenciamento de Grupo de Nós

Você pode gerenciar dispositivos de forma conveniente por grupos. Você pode criar novos grupos, excluir grupos ou mover dispositivos para um determinado grupo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## Gerenciamento de Nó Sensor

Na página de Nó Sensor, você pode ver todos os Nós Sensor vinculados à sua conta.
① Os dispositivos incluem tipos como “LoRa” e “NB-IoT” e podem ser visualizados por categoria.
② Critérios de filtro, de acordo com EUI, frequência, grupo, status e horário de registro para filtrar o nó.
③ Lista de Nós Sensor, exibindo EUI, nome, status, tipo de dado e assim por diante.
④ Clique no EUI para entrar na página de detalhes do dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## Informações Gerais

Na página de informações gerais, você pode definir o nome do dispositivo e verificar o status do dispositivo, status da bateria, registro recente de conexão online e etc.

- Status da Bateria: se exibir “Bateria Insuficiente”, significa que a bateria está abaixo de 10%.
- Registro recente de conexão online: o gateway ficará offline em poucos minutos, e outros dispositivos ficarão offline depois (tipicamente três intervalos de upload).

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## Canal

Dispositivo de Canal Único: Apenas um canal, o que significa que o nó pode conectar apenas uma sonda, como o LoRaWAN Sensor Node.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
Dispositivo Multicanal: Com vários canais, várias sondas de sensor podem ser conectadas, como o Sensor Hub.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## Dados

Você pode verificar os dados periódicos de cada canal, bem como os dados de status do dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## Configurações

Only Read Key / Full Access Key: Isto é usado com a API.
Configurações do Dispositivo: Ajuste a frequência de coleta de dados do dispositivo, variando de 5 a 43.200 minutos. A nova frequência de coleta entrará em vigor na próxima vez que o dispositivo enviar dados.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## Localização

Se o dispositivo tiver função de GPS, as informações de localização serão automaticamente atualizadas aqui.
Se o dispositivo não tiver GPS, você pode definir o GPS manualmente: “Search location” - “Map punctuation” - “Set as address”.

:::note
Ao usar o GPS do dispositivo, tente posicionar o dispositivo ao ar livre, sem cobertura acima.
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## Vincular Dispositivo

Se você quiser transferir o dispositivo para outra conta ou excluir o dispositivo, pode fazê-lo nesta página.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)

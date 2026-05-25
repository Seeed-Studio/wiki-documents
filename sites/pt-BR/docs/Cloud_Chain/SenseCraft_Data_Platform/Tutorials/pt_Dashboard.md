---
sidebar_position: 1
description: Painel do SenseCAP Portal
title: Painel
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/dashboard
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/tutorials/dashboard/
---


O painel permite monitorar o status dos dispositivos e os dados dos sensores em tempo real.

## Visão geral

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg)

① Adicionar “Cena” ou “Gráfico”.
② Visão geral dos dispositivos: exibe o número total de dispositivos.
③ Monitoramento: conta todos os dispositivos offline e com bateria fraca.
④ Intervalo de atualização de dados: define como e em que momento a página (página web) é atualizada.
⑤ Avisos: aviso de atualização da versão do portal e outras informações.
⑥ Cena: o módulo de exibição visual correspondente é configurado de acordo com a área do sensor.
⑦ Gráfico: um ou mais sensores do mesmo tipo podem ser selecionados para exibir dados históricos durante um período de tempo.

## Configurar cena

De acordo com o local de instalação ou cenário de aplicação, você pode optar por criar dados de cena, agrupando diferentes dados e mostrando os dados mais recentes na forma de ícones.
Exemplo: Há vários grupos na conta: station-1, station-2, station-3… Crie uma cena para station-1.
① Personalize o nome, crie a exibição da cena de “station-1” e selecione “Adicionar tipo de medição”.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg)

② Selecione os dados de medição a serem exibidos no grupo “station-1” e confirme.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg)

## Configurar gráficos

Você pode criar gráficos para mostrar informações como tipo de medição, EUI do dispositivo, intervalo de tempo, etc.
① Selecione “Adicionar” - “Gráfico”.
② Personalize o nome e selecione “adicionar tipo de medição”.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg)
③ Selecione o tipo de dado e o tempo a serem exibidos.
④ Selecione um grupo.
⑤ Selecione o nó de sensor específico no grupo.
⑥ Selecione o tipo de medição.
⑦ Confirme.

:::note
Apenas um tipo de medição pode ser adicionado por gráfico. Adicione até 5 curvas por gráfico.
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg)

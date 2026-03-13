---
sidebar_position: 2
title: Preços de API para SenseCraft Data Platform
description: Preços de API para SenseCraft Data Platform
keywords:
  - Cloud
  - SenseCraft Data Platform
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-fee/sensecraft-data-platform-api-pricing
aliases:
  - /Cloud_Chain/SenseCAP_API/API_pricing
last_update:
  date: 06/06/2025
  author: Jancee
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-fee/sensecraft-data-platform-api-pricing/
---

# Preços de API para SenseCraft Data Platform

===============


Com o portal web do `SenseCraft Data Platform`, você paga apenas pelo que usar, sem taxas mínimas ou uso obrigatório de serviço.

*   um (up-message): O número de mensagens carregadas pelo sensor.
*   dm(download-message): O número de mensagens que obtêm dados históricos por meio da API.

Regras
-----

1.  Adicione um dispositivo sensor a cada conta de usuário, e o sistema distribuirá uma certa quantidade de um e dm gratuitamente.
2.  Para cada dado carregado pelo sensor, 1 um é consumido.
3.  Obtenha um dado histórico por HTTP e consuma 1 dm.
4.  A assinatura de dados do sensor por meio de MQTT não consumirá dm.
5.  um /dm podem ser comprados com o código de recarga online e, em seguida, insira o código de recarga na conta para concluir a recarga.
6.  Quando um/dm for 0, o sistema enviará uma mensagem para lembrar o usuário da taxa vencida. Se o tempo for superior a 1 mês, a função da conta não poderá ser usada.

Camada Gratuita  

------------

| Tipo de Dispositivo (um dispositivo) | um (up-message) | dm (download-message) |
| --- | --- | --- |
| Nó Sensor LoRaWAN | 100,000 | 1000,000 |
| SensorHub | 250,000 | 2,500,000 |

Taxas  

-------

| Preços | um (up-message) | dm (download-message) |
| --- | --- | --- |
| $ 0.99 | 100,000 | 1,000,000 |

Pré-pago
--------

Entre em contato com a equipe de vendas da SenseCAP para recarregar.

Dicas
----

*   Recomenda-se assinar dados do sensor usando MQTT sem consumir o número de dm (download-message).
*   O envio de dados do Sensor LoRaWAN é afetado pela Internet (o gateway se conecta ao Portal pela Internet). Quando o acesso à Internet é instável, o Nó Sensor reenviará os dados até três vezes para garantir que os dados possam ser transmitidos com sucesso para o SenseCAP Portal. A Camada Gratuita é baseada no pior cenário de rede, portanto, por quanto tempo você a utilizará depende da situação.

Exemplo
-------

De acordo com o tipo de dispositivo e o intervalo de envio de dados, o tempo aproximado disponível é o seguinte:

| Tipo de Dispositivo (um dispositivo)                | Intervalo de Dados | Tempo          |
|-----------------------------------------|---------------|---------------|
| Sensor de Temperatura e Umidade LoRaWAN | 1 hora        | 2 ~ 5 anos    |
|                                         | 30 minutos    | 1 ~ 2.5 anos  |
|                                         | 5 minutos     | 4 ~ 10 meses  |
| Sensor de Intensidade de Luz LoRaWAN    | 1 hora        | 4 ~ 10 anos   |
|                                         | 30 minutos    | 2 ~ 5 anos    |
|                                         | 5 minutos     | 8 ~ 20 meses  |
| SensorHub (5 tipos de medições)         | 1 hora        | 5.6 anos      |
|                                         | 30 minutos    | 2.8 anos      |
|                                         | 5 minutos     | 11 meses      |
| SensorHub (7 tipos de medições)         | 1 hora        | 4 anos        |
|                                         | 30 minutos    | 2 anos        |
|                                         | 5 minutos     | 8 meses       |

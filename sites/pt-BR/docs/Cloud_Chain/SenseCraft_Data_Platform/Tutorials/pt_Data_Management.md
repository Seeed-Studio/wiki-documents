---
sidebar_position: 2
description: Gerenciamento de dados do SenseCAP Portal
title: Gerenciamento de dados
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/data-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/tutorials/data-management/
---


O SenseCAP Portal fornece consultas de dados que filtram ou exportam os dados de sensores de que você precisa com base em vários critérios.

## Tabela

- ① O dispositivo permite visualizar dois tipos de dados: “Uplink Data” e “Threshold Data”. Você pode clicar para ver cada tipo.
- ② Critérios de filtro, de acordo com EUI, frequência, grupo, status e horário de registro para filtrar o nó.
- ③ Lista de dados mostrando EUI, nome do dispositivo, tipo de dado, medições, horário de coleta e envio, etc.
- ④ Clique em EUI para entrar na página de detalhes do dispositivo e visualizar as informações básicas do Sensor Node.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement1.png" /></div>

## Gráfico
① Clique em Graph.

<div align="left"><img width={1200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement2.png" /></div>

② Adicione uma nova página, insira um nome de página e selecione o número de linhas e colunas.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-2.jpg)

③  Dê um nome ao ícone criado e clique em concluir.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement3.png" /></div>

④ Clique para adicionar medição

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement4.png" /></div>

⑤Selecione o tipo de medição e o intervalo de tempo a ser exibido. Em seguida, selecione dados específicos do sensor.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement5.png" /></div>
⑥ Em seguida, clique em **Confirm** para visualizar os dados do gráfico gerado.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement6.png" /></div>

- Podem ser configuradas até três linhas e três colunas por página, e várias páginas podem ser criadas. Consulte o gráfico do Dashboard para etapas detalhadas.

## Ver informações da conta

Na página de gerenciamento de conta, você pode verificar as informações da sua conta e clicar para alterá-las.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-4.jpg)




## Adicionar / gerenciar subcontas
Você pode registrar uma nova subconta aqui e vinculá-la à sua conta principal. Após preencher as informações necessárias, você pode definir o tipo de permissão para a subconta.

1. **Limited User**: Não possui permissões. Não pode visualizar os dados dos dispositivos da conta principal nem adicionar, editar ou excluir dispositivos.
2. **Observer**: Pode visualizar os dispositivos vinculados à conta principal e os dados enviados, mas não pode adicionar, editar ou excluir dispositivos.
3. **Administrator**: Pode visualizar, editar e excluir dispositivos vinculados à conta principal.
4. Após preencher as informações, clique em **Confirm** para concluir o registro.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement7.png" /></div>
<br />

Clique em **Sub Account List** para visualizar e gerenciar as subcontas.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement8.png" /></div>

<br />

Clique em **Update Account Information** para modificar os detalhes da subconta ou clique em **Delete** para remover a subconta.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement9.png" /></div>
<br />
Insira a nova subconta adicionada e a senha para fazer login.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement10.png" /></div>
<br />
Você pode visualizar o status do dispositivo e as informações de dados relacionadas da conta principal.
<br />
<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement11.png" /></div>
---
description: Este guia explica como exibir as localizações dos dispositivos MeshCore em Mapas de Nós MeshCore.
title: Mapa de Nós MeshCore
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/meshcore_node_map_l1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por que usar o Mapa de Nós MeshCore

O Mapa de Nós pode fornecer visibilidade em tempo real da rede [MeshCore](https://meshcore.io/#hardware) ao traçar as localizações dos nós, permitindo que os usuários entendam a topologia da rede e a distribuição dos nós. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

O Mapa de Nós MeshCore depende de os nós relatarem periodicamente sua posição geográfica para a rede. Ele é particularmente útil para:

- **Descobrir repetidores próximos**: Identifique repetidores disponíveis para estender a conectividade
- **Monitorar sua própria rede**: Acompanhe o status e a localização dos nós
- **Depuração e otimização**: Otimize a colocação de repetidores e gateways


## Tutorial no Mapa Oficial MeshCore

O Mapa de Nós MeshCore mais popular é o `MeshCore Node Map` oficial. [Clique aqui](https://map.meshcore.io/) para acessar o site.

### Configuração de nó companheiro

Para que um nó companheiro apareça no Mapa de Nós MeshCore, o dispositivo deve estar devidamente configurado para relatar sua localização. Configure da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Configuração de Repetidor ou Room Server

Para que um repetidor ou room server apareça no Mapa de Nós MeshCore, o dispositivo deve estar devidamente configurado para relatar sua localização. 

Primeiro faça login no repetidor. A senha de administrador padrão de um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Ative o GPS e obtenha a localização (alguns firmwares de repetidor não suportam a atualização da localização em tempo real; talvez seja necessário escolher sua localização manualmente).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Pesquisar seu nó

Após a configuração, aguarde alguns minutos e então você poderá ver seus nós no mapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

Você pode ver o nome do dispositivo, a função e as informações de configuração. Assim, usando esse mapa, você pode facilmente descobrir onde estão aqueles nós ativos.

## (Avançado) Criando seu próprio frontend de Mapa de Nós

Para usuários avançados, é possível criar um frontend de Mapa de Nós personalizado. Recomenda-se usar o seguinte fluxo de trabalho: 

[Nó MeshCore normal] → [Nós Mesh configurados com MQTT] → [Backend API / Banco de dados] → [Interface de Mapa no Frontend]
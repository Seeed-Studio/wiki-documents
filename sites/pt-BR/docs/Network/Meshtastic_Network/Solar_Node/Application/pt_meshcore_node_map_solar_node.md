---
description: Este guia explica como exibir as localizações dos dispositivos MeshCore nos Mapas de Nó MeshCore.
title: Mapa de Nós MeshCore
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_solar_node
sku: 114993643,114993633
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/pt-br/meshcore_node_map_solar_node/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por que usar o Mapa de Nós MeshCore

O Mapa de Nós pode fornecer visibilidade em tempo real na rede [MeshCore](https://meshcore.io/#hardware) ao traçar as localizações dos nós, permitindo que os usuários compreendam a topologia da rede e a distribuição dos nós.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

O Mapa de Nós MeshCore depende de nós que reportam periodicamente sua posição geográfica para a rede. Ele é particularmente útil para:

- **Descobrir repetidores próximos**: Identificar repetidores disponíveis para estender a conectividade
- **Monitorar sua própria rede**: Acompanhar o status e a localização dos nós
- **Depuração e otimização**: Otimizar o posicionamento de repetidores e gateways

## Tutorial sobre o Mapa Oficial MeshCore

O Mapa de Nós MeshCore mais popular é o `MeshCore Node Map` oficial. [Clique aqui](https://map.meshcore.io/) para acessar o site.

### Configuração do companion

Para que um nó companion apareça no Mapa de Nós MeshCore, um dispositivo deve ser configurado corretamente para reportar sua localização. Configure da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Configuração de Repeater ou Room Server

Para que um repeater ou room server apareça no Mapa de Nós MeshCore, um dispositivo deve ser configurado corretamente para reportar sua localização.

Primeiro faça login no repeater. A senha de administrador padrão de um repeater é `password`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Ative o GPS e obtenha a localização (alguns firmwares de repeater não suportam a atualização da localização em tempo real; talvez seja necessário escolher manualmente sua localização).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Pesquise seu nó

Após a configuração, aguarde alguns minutos e então você poderá ver seus nós no mapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

Você pode ver o nome do dispositivo, o papel e as informações de configuração. Assim, usando esse mapa, você pode descobrir facilmente onde estão aqueles nós ativos.

## (Avançado) Construindo seu próprio frontend de Mapa de Nós

Para usuários avançados, é possível criar um frontend personalizado de Mapa de Nós. Recomenda-se usar o seguinte fluxo de trabalho:

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]

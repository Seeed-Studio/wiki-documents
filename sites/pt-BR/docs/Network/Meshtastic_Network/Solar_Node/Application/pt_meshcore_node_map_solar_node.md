---
description: Este guia explica como exibir as localizações dos dispositivos MeshCore nos Mapas de Nós MeshCore.
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
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/meshcore_node_map_solar_node/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por que usar o Mapa de Nós MeshCore

O Mapa de Nós pode fornecer visibilidade em tempo real da rede [MeshCore](https://meshcore.io/#hardware) ao traçar as localizações dos nós, permitindo que os usuários entendam a topologia da rede e a distribuição dos nós.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

O Mapa de Nós MeshCore depende de os nós relatarem periodicamente sua posição geográfica para a rede. Ele é particularmente útil para:

- **Descobrir repetidores próximos**: Identificar repetidores disponíveis para estender a conectividade
- **Monitorar sua própria rede**: Acompanhar o status e a localização dos nós
- **Depuração e otimização**: Otimizar o posicionamento de repetidores e gateways

## Tutorial sobre o Mapa Oficial MeshCore

O Mapa de Nós MeshCore mais popular é o `MeshCore Node Map` oficial. [Clique aqui](https://map.meshcore.io/) para acessar o site.

### Configuração do nó companheiro

Para que um nó companheiro apareça no Mapa de Nós MeshCore, o dispositivo deve estar devidamente configurado para relatar sua localização. Configure da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Configuração de Repetidor ou Room Server

Para que um repetidor ou room server apareça no Mapa de Nós MeshCore, o dispositivo deve estar devidamente configurado para relatar sua localização.

Primeiro faça login no repetidor. A senha de administrador padrão de um repetidor é `password`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Ative o GPS e obtenha a localização (alguns firmwares de repetidor não suportam a atualização da localização em tempo real, você pode precisar escolher manualmente sua localização).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Pesquise seu nó

Após a configuração, aguarde alguns minutos e então você poderá ver seus nós no mapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

Você pode ver o nome do dispositivo, função e informações de configuração. Assim, usando este mapa, você pode facilmente descobrir onde estão aqueles nós ativos.

## (Avançado) Criando seu próprio frontend de Mapa de Nós

Para usuários avançados, é possível criar um frontend de Mapa de Nós personalizado. Recomenda-se usar o seguinte fluxo de trabalho:

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]

## Suporte Técnico e Discussão de Produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
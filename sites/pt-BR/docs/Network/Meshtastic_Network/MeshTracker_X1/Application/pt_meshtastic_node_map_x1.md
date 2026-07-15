---
description: Este guia explica como exibir as localizações de dispositivos Meshtastic em Mapas de Nós Meshtastic.
title: Mapa de Nós Meshtastic
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - MeshTracker X1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_x1
sku: 100087698
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_node_map_x1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Este guia explica como exibir as localizações de dispositivos [Meshtastic](https://meshtastic.org/docs/introduction/) em Mapas de Nós Meshtastic usando o [MeshTracker X1](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html), assumindo que os dispositivos já foram gravados com o firmware Meshtastic.

## Introdução aos Monitores de Rede Meshtastic

O Mapa de Nós Meshtastic é uma interface online que visualiza as localizações de dispositivos Meshtastic em um mapa. Ele ajuda os usuários a monitorar as posições em tempo real dos dispositivos em uma rede mesh, fornecendo uma visão da cobertura e conectividade da rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Os dispositivos Meshtastic relatam periodicamente sua localização a um servidor Meshtastic via MQTT. O Mapa de Nós recupera esses relatórios e exibe a posição, rota e alcance de sinal de cada nó. Os dispositivos podem relatar sua localização:

- **Diretamente via MapReport:** o dispositivo envia os dados de localização diretamente para o servidor.
- **Indiretamente via outros nós:** a localização é retransmitida por nós vizinhos.

**Casos de Uso Adequados**

Os Mapas de Nós Meshtastic são ideais para:

- Aventuras ao ar livre, como trilhas, ciclismo ou expedições.
- Monitoramento remoto de dispositivos IoT distribuídos.
- Rastreamento de ativos ou membros de equipe sem depender de redes celulares.

### Mapas de Nós Meshtastic Comuns

| Mapa de Nós | Recursos | Ideal Para | Observações |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | Rastreamento de nós em tempo real, exibição de rotas Mesh, exibição de alcance de sinal | Usuários casuais, iniciantes | Interface simples, servidor Meshtastic padrão |
| [Mapa Meshtastic de Liam Cottle](https://meshtastic.liamcottle.net/) | Rastreamento em tempo real, visualização de rotas históricas, exibição de alcance de sinal | Usuários avançados, análise de dados | Usa servidor MQTT personalizado |

## Introdução ao MeshMap

### Configuração

**Configurações LoRa**
   - Configure seu dispositivo para a banda de frequência LoRa correta para sua região.
   - Ative **OK to MQTT** para permitir o envio de relatórios.

**Configurações MQTT**
   - Ative MQTT no seu dispositivo.
   - Use o servidor, nome de usuário e senha padrão do Meshtastic.
   - Ative **MapReport** e marque **I agree**. Selecione o intervalo de relatório de acordo com suas necessidades.

### Visualizando as Localizações dos Dispositivos

Abra o **MeshMap** no seu navegador: [Link do MeshMap](https://meshmap.net/). 

Você verá todos os nós no mapa. Nós relatados **via MapReport** são atualizações diretas do dispositivo. Nós relatados **via outros nós** são atualizações retransmitidas.

Clique em qualquer nó para ver informações detalhadas (ID do dispositivo, nível de bateria, etc.), rota mesh e cobertura de sinal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1_MQTT_MAP.png" style={{width:900, height:'auto'}}/></div>

## Introdução ao Mapa Meshtastic de Liam Cottle

### Configuração

**Configurações LoRa**
   - Configure seu dispositivo para a banda de frequência LoRa correta.
   - Ative **OK to MQTT**.

**Configurações MQTT**
   - Ative MQTT
   - Configure os seguintes parâmetros:
     - Address: `mqtt.meshtastic.liamcottle.net`
     - Username: `uplink`
     - Password: `uplink`
     - Encryption Enabled: Yes
     - JSON Output: No
     - TLS Enabled: No
   - Ative `MapReport` e marque `I agree`. Selecione o intervalo de relatório de sua preferência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### Visualizando as Localizações dos Dispositivos

Abra o **Mapa Meshtastic de Liam Cottle** no seu navegador: [Link do Mapa de Liam Cottle](https://meshtastic.liamcottle.net/). Você verá todos os nós exibidos no mapa.

Clique em qualquer nó para ver: informações detalhadas sobre o dispositivo, alcance de sinal, rotas históricas e atualizações de localização anteriores

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1Liam.png" style={{width:600, height:'auto'}}/></div>

---
description: Este guia explica como exibir as localizações de dispositivos Meshtastic em Meshtastic Node Maps.
title: Meshtastic Node Map
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_node_map_l1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Este guia explica como exibir as localizações de dispositivos [Meshtastic](https://meshtastic.org/docs/introduction/) em Meshtastic Node Maps usando dispositivos [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) e [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html), pressupondo que os dispositivos já foram gravados com o firmware Meshtastic.

## Introdução aos monitores de rede Meshtastic

O Meshtastic Node Map é uma interface online que visualiza as localizações de dispositivos Meshtastic em um mapa. Ele ajuda os usuários a monitorar as posições em tempo real dos dispositivos em uma rede mesh, fornecendo insights sobre a cobertura e a conectividade da rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Os dispositivos Meshtastic reportam periodicamente sua localização para um servidor Meshtastic via MQTT. O Node Map recupera esses relatórios e exibe a posição, rota e alcance de sinal de cada nó. Os dispositivos podem reportar sua localização:

- **Diretamente via MapReport:** O dispositivo envia os dados de localização diretamente para o servidor.
- **Indiretamente via outros nós:** A localização é retransmitida por nós vizinhos.

**Casos de uso adequados**

Meshtastic Node Maps são ideais para:

- Atividades ao ar livre, como caminhadas, ciclismo ou expedições.
- Monitoramento remoto de dispositivos IoT distribuídos.
- Rastreamento de ativos ou membros de equipe sem depender de redes celulares.

### Meshtastic Node Maps comuns

| Node Map | Recursos | Ideal para | Observações |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | Rastreamento de nós em tempo real, exibição de rotas Mesh, exibição de alcance de sinal | Usuários casuais, iniciantes | Interface simples, servidor Meshtastic padrão |
| [Meshtastic Map de Liam Cottle](https://meshtastic.liamcottle.net/) | Rastreamento em tempo real, visualização de rotas históricas, exibição de alcance de sinal | Usuários avançados, análise de dados | Usa servidor MQTT personalizado |

## Comece a usar o MeshMap

### Configuração

**Configurações de LoRa**
   - Configure seu dispositivo para a banda de frequência LoRa correta para sua região.
   - Ative **OK to MQTT** para permitir o envio de relatórios.

**Configurações de MQTT**
   - Ative MQTT no seu dispositivo.
   - Use o servidor, nome de usuário e senha padrão do Meshtastic.
   - Ative **MapReport** e marque **I agree**. Selecione o intervalo de relatório de acordo com suas necessidades.

### Visualizando as localizações dos dispositivos

Abra o **MeshMap** no seu navegador: [MeshMap Link](https://meshmap.net/). 

Você verá todos os nós no mapa. Nós reportados **via MapReport** são atualizações diretas do dispositivo. Nós reportados **via outros nós** são atualizações retransmitidas.

Clique em qualquer nó para ver informações detalhadas (ID do dispositivo, nível da bateria, etc.), rota mesh e cobertura de sinal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Comece a usar o Meshtastic Map de Liam Cottle

### Configuração

**Configurações de LoRa**
   - Configure seu dispositivo para a banda de frequência LoRa correta.
   - Ative **OK to MQTT**.

**Configurações de MQTT**
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

### Visualizando as localizações dos dispositivos

Abra o **Meshtastic Map de Liam Cottle** no seu navegador: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/). Você verá todos os nós exibidos no mapa.

Clique em qualquer nó para ver: informações detalhadas sobre o dispositivo, alcance de sinal, rotas históricas e atualizações de localização anteriores

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>

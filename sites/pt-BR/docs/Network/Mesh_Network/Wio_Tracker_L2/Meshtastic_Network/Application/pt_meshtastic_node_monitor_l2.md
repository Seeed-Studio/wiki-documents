---
description: Meshtastic Network Monitor é uma ferramenta que permite visualizar, gerenciar e monitorar nós em uma rede mesh Meshtastic.
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /meshtastic_node_monitor_l2
sku: 100029766
sidebar_position: 5
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_node_monitor_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução ao Meshtastic Network Monitor

O [Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor é uma ferramenta que permite visualizar, gerenciar e monitorar nós em uma rede mesh Meshtastic. Ele fornece informações em tempo real sobre o status, roteamento e comunicação entre dispositivos. O monitor é o analisador Meshtastic que coleta dados por meio de um gateway conectado ou servidor MQTT, visualiza a topologia da rede e exibe informações do nó, como status da bateria, intensidade do sinal e localização GPS. Ele também pode funcionar como um mapa de nós Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Casos de uso**

* Mapa de nós Meshtastic. Rastreamento e visualização de nós externos em áreas remotas.
* Analisador Meshtastic. Monitoramento do desempenho de comunicação e roteamento em redes mesh.
* Monitor Meshtastic. Depuração e teste da conectividade de rede para dispositivos Meshtastic.

**Monitores Meshtastic comuns**

* Meshsense: [click here](https://affirmatech.com/meshsense) to learn more
* Meshmonitor: [click here](https://meshmonitor.org/) to learn more

**Como conectar a um monitor Meshtastic**

1. Configure seus nós Meshtastic e certifique-se de que formem uma malha funcional.
2. Configure pelo menos um nó como gateway (por exemplo, MQTT Gateway).
3. Conecte o aplicativo de monitoramento ao gateway ou servidor MQTT.
4. Verifique se os nós estão visíveis e relatando status na interface do monitor.

## Comece a usar o Meshsense

### Configuração

#### Preparação do aplicativo

Baixe e instale o aplicativo **Meshsense** para a sua plataforma: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### Preparação do dispositivo

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div>

#### Configuração do gateway MQTT

Siga o tutorial de configuração oficial para configurar o MQTT: [Wio Trcker L2 MQTT Gateway Setup](https://wiki.seeedstudio.com/pt-br/set_up_mqtt_gateway_l2/)

:::tip
Para exibir a localização GPS em tempo real, certifique-se de que o GPS esteja ativado no seu nó. E, ao configurar o MQTT, garanta que o envio de localização esteja permitido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### Conexão de rede

Conecte seu computador à mesma rede Wi-Fi que o kit Xiao ESP32S3. Certifique-se de que seja uma rede Wi-Fi de 2,4G.

Abra um terminal serial (por exemplo, Arduino Serial Monitor ou PuTTY) para encontrar o endereço IP do seu dispositivo Xiao. Você pode usar o [Meshtastic web serial monitor](https://flasher.meshtastic.org/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

Insira esse endereço IP no campo de conexão de dispositivo do Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

Depois de conectado, seu nó Meshtastic deverá aparecer no Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### Exibição de posição

Você precisa ativar o GPS para obter a posição. Isso pode ser configurado diretamente no dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Você também pode configurá-lo no aplicativo do seu telefone.

* No aplicativo Meshsense, certifique-se de que o envio de dados de GPS esteja ativado.
* Depois de conectado, o aplicativo exibirá a localização em tempo real de cada nó no mapa. Você pode ver a posição do seu nó diretamente no aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

Também no mapa do site Meshsense, você pode ver sua posição em tempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


Com essa configuração, você pode gerenciar sua rede Meshtastic privada de forma eficiente e visualizar o comportamento dos nós diretamente no Meshsense.

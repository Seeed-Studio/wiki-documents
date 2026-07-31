---
description: Meshtastic Network Monitor é uma ferramenta que permite visualizar, gerenciar e monitorar nós em uma rede mesh Meshtastic.
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Xiao ESP32s3
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_meshmonitor
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Introdução ao Meshtastic Network Monitor

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor é uma ferramenta que permite visualizar, gerenciar e monitorar nós em uma rede mesh Meshtastic. Ela fornece informações em tempo real sobre o status, roteamento e comunicação entre dispositivos. O monitor é o analisador Meshtastic que coleta dados por meio de um gateway conectado ou servidor MQTT, visualiza a topologia da rede e exibe informações dos nós, como status da bateria, intensidade do sinal e localização GPS. Ele também pode funcionar como um mapa de nós Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Casos de uso**

* Mapa de nós Meshtastic. Rastreamento e visualização de nós externos em áreas remotas.
* Analisador Meshtastic. Monitoramento do desempenho de comunicação e roteamento em redes mesh.
* Monitor Meshtastic. Depuração e teste da conectividade de rede para dispositivos Meshtastic.

**Monitores Meshtastic comuns**

* Meshsense: [click here](https://affirmatech.com/meshsense) to learn more
* Meshmonitor: [click here](https://meshmonitor.org/) to learn more

**Como conectar a um monitor Meshtastic**

1. Configure seus nós Meshtastic e certifique-se de que eles formem uma malha funcional.
2. Configure pelo menos um nó como gateway (por exemplo, MQTT Gateway).
3. Conecte o aplicativo de monitoramento ao gateway ou servidor MQTT.
4. Verifique se os nós estão visíveis e relatando o status na interface do monitor.

## Comece a usar o Meshsense

### Configuração

#### Preparação do aplicativo

Baixe e instale o aplicativo **Meshsense** para a sua plataforma: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### Preparação do dispositivo

Você precisará de um **Seeed Xiao ESP32S3 & SX1262 Meshtastic Kit** configurado como um gateway MQTT. Isso permite a comunicação em tempo real entre sua rede Meshtastic e o Meshsense. Se você também quiser monitorar e exibir a posição, adicione um módulo GPS.

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>Módulo L76K GNSS (opcional)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

#### Configuração do gateway MQTT

Siga o tutorial de configuração oficial para configurar o MQTT: [Xiao ESP32S3 & SX1262 MQTT Gateway Setup](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)

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

#### Configuração de hardware

Para exibir as posições dos nós, conecte um **módulo L76K GPS** ao kit Xiao ESP32S3. [Click here](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) to get one now.

#### Configuração de software

* No aplicativo Meshsense, certifique-se de que o envio de dados de GPS esteja ativado.
* Depois de conectado, o aplicativo exibirá a localização em tempo real de cada nó no mapa. Você pode ver a posição do seu nó diretamente no aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

Também no mapa do site do Meshsense, você pode ver sua posição em tempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


Com essa configuração, você pode gerenciar sua rede Meshtastic privada de forma eficiente e visualizar o comportamento dos nós diretamente no Meshsense.

## Suporte técnico e discussão sobre o produto

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
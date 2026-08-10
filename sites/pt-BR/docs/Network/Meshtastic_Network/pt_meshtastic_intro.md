---
description: Introdução à Rede Meshtastic®
title: Introdução à Rede Meshtastic®
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_introduction
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle
createdAt: '2024-06-17'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_introduction/
---

[Meshtastic®](https://meshtastic.org/) é uma rede mesh descentralizada, off-grid e de código aberto, criada para rodar em dispositivos acessíveis e de baixo consumo de energia. Ela permite usar rádios LoRa de baixo custo como uma plataforma de comunicação off-grid de longo alcance em áreas sem infraestrutura de comunicação existente ou confiável.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/FrameworkMeshtasticccc.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- **Longo alcance** ([recorde de 331 km por MartinR7 & alleg](https://meshtastic.org/docs/overview/range-tests/#current-ground-record-331km))
- **Comunicação descentralizada** - não é necessário roteador dedicado
- **Comunicação criptografada** 

## Como funciona

Meshtastic utiliza LoRa, um protocolo de rádio de longo alcance, que é amplamente acessível na maioria das regiões sem necessidade de licenças ou certificações adicionais, ao contrário das operações de rádio amador (HAM).

Além disso, rádios Meshtastic podem ser pareados com um único telefone, permitindo que amigos e familiares enviem mensagens diretamente para o seu rádio específico. É importante observar que cada dispositivo é capaz de suportar a conexão de apenas um usuário por vez."

Clique [aqui](https://meshtastic.org/docs/) para saber mais sobre a rede Meshtastic!

## Hardware compatível

### Kit de desenvolvimento

<table align="center">
<tbody><tr>
<th>Kit Xiao ESP32 sem gabinete</th>
<th>Kit Xiao nRF52840 sem gabinete</th>
<th>Kit Xiao ESP32 com gabinete</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010611-wio-sx1262-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113110064-xiao-esp32s3-for-meshtastic-_-lora-with-3d-printed-enclosure-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>


### Placa de desenvolvimento

<table align="center">
<tbody><tr>
<th>L1 Lite (sem OLED)</th>
<th>L1 (com OLED)</th>
<th>L1 E-Ink (com E-Ink)</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993653-wio-tracker-l1-lite.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993648-wio-tracker-l1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993654-wio-tracker-l1-e-ink.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### Rastreador GNSS

<table align="center">
<tbody><tr>
<th>SenseCAP MeshTracker X1</th>
<th>SenseCAP Card Tracker T1000-E</th>
<th>SenseCAP Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993369-sensecap-card-tracker-t1000-e-for-meshtastic.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/0/20260408-135305.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### Nó solar

<table align="center">
<tbody><tr>
<th>SenseCAP Solar Node sem bateria e GNSS</th>
<th>SenseCAP Solar Node com bateria e GNSS</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Aplicação

### Design de gabinete

[Clique aqui](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_mqtt/) para ler o tutorial detalhado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki%20images/3d%20Enclosure/6.23dimage1.png" alt="Magnetic Wireless Charger" width={800} height="auto" /></p>

### Mapa de nós Meshtastic

O Mapa de Nós Meshtastic é uma interface online que visualiza as localizações dos dispositivos Meshtastic em um mapa. Ele ajuda os usuários a monitorar as posições em tempo real dos dispositivos em uma rede mesh, fornecendo uma visão da cobertura e da conectividade da rede.

[Clique aqui](https://wiki.seeedstudio.com/pt-br/meshtastic_node_map_t1000_e/) para ler o tutorial detalhado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:600, height:'auto'}}/></div>

### Monitor de nós Meshtastic

O Network Monitor do [Meshtastic](https://meshtastic.org/docs/introduction/) é uma ferramenta que permite visualizar, gerenciar e monitorar nós em uma rede mesh Meshtastic. Ele fornece informações em tempo real sobre o status, o roteamento e a comunicação entre dispositivos. O monitor é o analisador Meshtastic que coleta dados por meio de um gateway conectado ou servidor MQTT, visualiza a topologia da rede e exibe informações dos nós, como status da bateria, intensidade do sinal e localização GPS. Ele também pode funcionar como um mapa de nós Meshtastic.

[Clique aqui](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/) para ler o tutorial detalhado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:600, height:'auto'}}/></div>

### Gateway MQTT Meshtastic

Integrar MQTT com Meshtastic estende a comunicação off-grid ao fazer a ponte entre redes distantes. Isso possibilita mensagens globais, fornece um backup quando os sinais da rede mesh estão fracos e garante entrega mais rápida de mensagens via internet. Perfeito para áreas remotas e situações de emergência.

[Clique aqui](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_mqtt/) para ler o tutorial detalhado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:600, height:'auto'}}/></div>

### Outros firmwares da comunidade

[Clique](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/) aqui para usar mais firmwares da comunidade em nosso hardware.


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
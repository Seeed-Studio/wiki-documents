---
description: Este wiki demonstra como usar o go2rtc no recomputer.
title: go2rtc no reComputer
keywords:
  - reComputer
  - go2rtc
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /go2rtc_on_recomputer
sku: 113991274,E24010521,113991294,113991295,113991314,113991334,113991374,113991375,114993560,114993627,114993595,103990763,100020831,100045506,100080766,100026042,100099044,100061305,100091962,100097052,E2025091901,E2025091902
last_update:
  date: 11/05/2025
  author: Jiahao
no_comments: false
createdAt: '2025-11-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/go2rtc_on_recomputer/
---

# go2rtc no reComputer

## Introdução

[go2rtc](https://github.com/AlexxIT/go2rtc) é um framework WebRTC de código aberto projetado para facilitar o streaming de mídia em tempo real pela internet. Ele é desenvolvido pela equipe XTLS e tem como objetivo combinar WebRTC com outros protocolos de mídia como RTSP, RTMP e HLS para transmissão eficiente de vídeo e áudio em tempo real.

[WebRTC](https://github.com/webrtc) (Web Real-Time Communication) é um protocolo amplamente utilizado para estabelecer conexões ponto a ponto e possibilitar a troca de mídia em tempo real, como chamadas de vídeo, transmissões ao vivo e outras aplicações em tempo real. O go2rtc torna mais fácil implementar WebRTC em ambientes onde diferentes protocolos de mídia precisam ser convertidos em streams WebRTC para transmissão escalável e de baixa latência.

## Pré-requisitos

### Requisitos de hardware


<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" styl  e={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Baixar e executar o go2rtc

### Atualizar o sistema

Use o seguinte comando para executar.

```bash
sudo apt update
sudo apt upgrade -y
```

### Baixar go2rtc

Use o seguinte comando para executar.

```bash
wget https://nightly.link/AlexxIT/go2rtc/workflows/build/master/go2rtc_linux_arm64.zip
tar -xvzf go1.24.0.linux-arm64.tar.gz
chmod +x go2rtc_linux_arm64
```

### Criar go2rtc.yaml

Use o seguinte comando para executar.

```bash 
nano go2rtc.yaml
```

Preencha a seguinte configuração com o seu endereço IP real.

```bash
streams:
  stream1:
    url: rtsp://admin:passw0rd@10.1.1.200:554/cam/realmonitor?channel=1&subtype=1
    protocol: rtsp
    codec: h264

server:
  api: :1984 
  rtsp: :8554  
  webrtc: :8555  
```

### Executar go2rtc

Use o seguinte comando para executar.

```bash
 ./go2rtc_linux_arm64 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/run_go2rtc.png" alt="pir" width="1000" height="auto"/></p>

Abra a porta `1984` no host e clique no botão `Stream`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.png" alt="pir" width="1000" height="auto"/></p>

## Resultado

Depois de configurarmos tudo, podemos visualizar a transmissão ao vivo da câmera atual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif" alt="pir" width="1000" height="auto"/></p>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

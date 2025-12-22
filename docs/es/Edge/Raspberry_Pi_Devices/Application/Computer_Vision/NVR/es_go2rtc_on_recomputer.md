---
description: Este wiki demuestra cómo usar go2rtc en recomputer.
title: go2rtc en reComputer
keywords:
  - reComputer
  - go2rtc
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /es/go2rtc_on_recomputer
last_update:
  date: 11/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# go2rtc en reComputer

## Introducción

[go2rtc](https://github.com/AlexxIT/go2rtc) es un framework WebRTC de código abierto diseñado para facilitar la transmisión de medios en tiempo real a través de internet. Es desarrollado por el equipo XTLS y tiene como objetivo combinar WebRTC con otros protocolos de medios como RTSP, RTMP y HLS para una transmisión eficiente de video y audio en tiempo real.

[WebRTC](https://github.com/webrtc) (Web Real-Time Communication) es un protocolo ampliamente utilizado para establecer conexiones peer-to-peer y habilitar el intercambio de medios en tiempo real como videollamadas, transmisiones en vivo y otras aplicaciones en tiempo real. go2rtc facilita la implementación de WebRTC en entornos donde diferentes protocolos de medios necesitan ser convertidos en streams WebRTC para transmisión de baja latencia y escalable.

## Prerrequisitos

### Requisitos de Hardware


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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" styl  e={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Descargar y ejecutar go2rtc

### Actualizar sistema

Por favor usa el siguiente comando para ejecutar.

```bash
sudo apt update
sudo apt upgrade -y
```

### Descargar go2rtc

Por favor usa el siguiente comando para ejecutar.

```bash
wget https://nightly.link/AlexxIT/go2rtc/workflows/build/master/go2rtc_linux_arm64.zip
tar -xvzf go1.24.0.linux-arm64.tar.gz
chmod +x go2rtc_linux_arm64
```

### Crear go2rtc.yaml

Por favor usa el siguiente comando para ejecutar.

```bash 
nano go2rtc.yaml
```

Por favor completa la siguiente configuración con tu dirección IP real.

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

### Ejecutar go2rtc

Por favor usa el siguiente comando para ejecutar.

```bash
 ./go2rtc_linux_arm64 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/run_go2rtc.png" alt="pir" width="1000" height="auto"/></p>

Abre el puerto `1984` en el host, y haz clic en el botón `Stream`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.png" alt="pir" width="1000" height="auto"/></p>

## Resultado

Una vez que hayamos configurado todo, podemos ver la transmisión en vivo desde la cámara actual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif" alt="pir" width="1000" height="auto"/></p>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

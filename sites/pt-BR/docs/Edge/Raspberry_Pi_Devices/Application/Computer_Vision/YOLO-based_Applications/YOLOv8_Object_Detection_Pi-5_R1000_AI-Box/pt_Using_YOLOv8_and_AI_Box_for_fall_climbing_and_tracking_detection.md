---
description: Este wiki mostra como usar um modelo YOLO na AI Box para queda, escalada de barreiras e rastreamento de pessoas.
title: YOLOv8 na AI Box para Queda, Escalada e Rastreamento
keywords:
  - Edge AI
  - rpi5
  - Hailo
  - YOLO
image: https://files.seeedstudio.com/wiki/YOLOv8_AI_Box/recompuer_ai_box.webp
slug: /yolov8_on_ai_box_for_fall_climbing_tracking
last_update:
  date: 07/29/2025
  author: Jiahao
no_comments: false
createdAt: '2025-07-29'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/pt-br/yolov8_on_ai_box_for_fall_climbing_tracking/
---

# YOLOv8 AI Box: Queda, Escalada e Rastreamento


## Introdução

Este projeto irá guiá-lo sobre como usar a [reComputed AI Box](https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html) ou a [reComputed Industry AI Box](https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html) para implementar detecção de queda, detecção de escalada e detecção de rastreamento usando o modelo YOLOv8.


## Preparar hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2100</th>
  <th>reComputer AI Industrial R2100</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


> 💡 **Note**: Este projeto requer uma reComputer AI Box ou uma reComputer Industry AI Box.


##  Detecção de queda

### Instalar o ambiente de runtime

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Baixar o projeto

```bash
git clone https://github.com/Seeed-Projects/fall_detection_with_AIBox.git
cd fall_detection_with_AIBox
```

### Preparar o ambiente python

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Executar o projeto
```bash
python app.py -i ./falldown_test.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt
```

### Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/H0NaAevLo2k" title="How the Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Escalada de cerca

### Instalar o ambiente de runtime

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Baixar o projeto

```
git clone https://github.com/Seeed-Projects/cross_fence_with_AIBox.git
cd cross_fence_with_AIBox
```

### Preparar o ambiente python

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Executar o projeto

```bash
python app.py -i ./scale_the_fence.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt 
```

### Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/_-89czNbZ_M?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection: Fence Climbing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Rastreamento 

### Instalar o ambiente de runtime

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Baixar o projeto

```bash
git clone https://github.com/Seeed-Projects/track_people_with_AIBox.git
cd fall_detection_with_AIBox
```

### Preparar o ambiente python

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Executar o projeto

```bash
python app.py -i ./people-walking.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt --track
```

### resultado 

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/xoeMcaG_FxE?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="reComputer Object Detection and Tracking: The Role of YOLOv8 in Shaping Results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
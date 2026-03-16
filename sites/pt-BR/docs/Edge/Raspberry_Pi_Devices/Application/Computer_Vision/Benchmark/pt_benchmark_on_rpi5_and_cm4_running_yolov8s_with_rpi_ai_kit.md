---
description: Este wiki demonstra o benchmark de estimativa de pose e detecção de objetos com yolov8s no Raspberry Pi5 e Raspberry Pi Compute Module 4.
title: Benchmark no RPi5 e CM4 executando yolov8s com rpi ai kit
keywords:
  - Borda
  - reComputer r1000
  - Detecção de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit
sku: 103990663
last_update:
  date: 07/17/2024
  author: Jiahao
no_comments: false
createdAt: '2024-07-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/
---

# Benchmark no RPi5 e CM4 executando yolov8s com rpi ai kit

## Introdução

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versão 8) é a série YOLO mais popular de modelos de detecção de objetos e estimativa de pose em tempo real. Ele se baseia nos pontos fortes de seus predecessores ao introduzir vários avanços em velocidade, precisão e flexibilidade. O [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) é usado para acelerar a velocidade de inferência, apresentando um acelerador de inferência de rede neural de 13 TOPS construído em torno do chip Hailo-8L.

Este wiki apresenta o benchmarking do YOLOv8s para estimativa de pose e detecção de objetos no Raspberry Pi 5 e no Raspberry Pi Compute Module 4. Todos os testes utilizam o mesmo modelo (YOLOv8s), quantizado para int8, com tamanho de entrada de resolução 640x640, tamanho de lote definido como 1 e entrada do mesmo vídeo a 240 FPS.

## Preparar o Hardware

### Para CM4

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Para Raspberry Pi 5

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
  <th>Raspberry Pi5 8GB</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td]
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr]
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### Para Raspberry Pi CM5
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Executar este projeto

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Benchmark Pi5">

### Instalar o AI kit no RPi5

Consulte [este](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

### Instalar o Hailo Software e verificar a instalação

#### atualizar o sistema

```
sudo apt update
sudo apt full-upgrade
```

#### Definir pcie para gen2/gen3 (gen3 é mais rápido que gen2)

Adicione o seguinte texto a ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Se você quiser usar gen2, comente dtparam=pciex1_gen=3
:::

#### Instalar hailo-all e reiniciar

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para instalar o software Hailo.

```
sudo apt install hailo-all
sudo reboot
```

#### Verificar Software e Hardware

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para verificar se o hailo-all foi instalado.

```
hailortcli fw-control identify
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para verificar se o hailo-8L foi conectado.

```
lspci | grep Hailo
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Executar o Projeto

<Tabs>
<TabItem value="Method 1" label="Executar estimativa de pose">

#### Instalar Projeto

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Executar o projeto

```
# run pose estimation with AI kit

bash run.sh pose-estimation-hailo

# run pose estimation without AI kit

bash run.sh pose-estimation
```

#### Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/Mo7AL7AjxwA" title="Raspberry Pi AI: YOLOv8 Pose Estimation - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

<TabItem value="Method 2" label="Executar detecção de objetos">

#### Instalar Projeto

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Executar o projeto

```
# run object detection with AI kit

bash run.sh object-detection-hailo

# run object detection without AI kit

bash run.sh object-detection
```

#### Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

</TabItem]

<TabItem value="Method 2" label="Benchmark CM4">

Para detecção de objetos, consulte o seguinte wiki:
[yolov8_object_detection_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/pt-br/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)

Para estimativa de pose, consulte o seguinte wiki:
[yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/pt-br/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/)
</TabItem>

</Tabs>

## Resultado

<Tabs>

<TabItem value="Method 1" label="batchsize=8">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_batch8.png" alt="pir" width={1000} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/poes_estimation_batch8.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

<TabItem value="Method 2" label="batchsize=1">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" alt="pir" width={1000} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pose-estimation-benchmark.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

</Tabs>

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

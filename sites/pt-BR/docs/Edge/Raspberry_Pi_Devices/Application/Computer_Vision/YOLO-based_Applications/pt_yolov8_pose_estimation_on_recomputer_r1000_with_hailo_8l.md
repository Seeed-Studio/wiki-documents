---
description: Este wiki demonstra a estimativa de pose usando YOLOv8 no reComputer R1000 com aceleração Raspberry-pi-AI-kit.
title: Estimativa de Pose com YOLOv8 no reComputer R1000 com Hailo-8L
keywords:
  - Borda
  - reComputer r1000
  - Detecção de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 06/26/2024
  author: Jiahao
no_comments: false
createdAt: '2024-06-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/
---

# Estimativa de Pose com YOLOv8 no reComputer R1000 com Hailo-8L

## Introdução

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versão 8) é a série YOLO mais popular de modelos de estimativa de pose em tempo real. Ele se baseia nos pontos fortes de seus predecessores ao introduzir diversos avanços em velocidade, precisão e flexibilidade. O [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) é usado para acelerar a velocidade de inferência, apresentando um acelerador de inferência de rede neural de 13 TOPS baseado no chip Hailo-8L.

Este wiki demonstra a estimativa de pose usando YOLOv8 no [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) com e sem aceleração Raspberry-pi-AI-kit. O Raspberry Pi AI Kit aprimora o desempenho do Raspberry Pi e libera seu potencial em aplicações de inteligência artificial e aprendizado de máquina, como varejo inteligente, tráfego inteligente e muito mais. Embora o Raspberry AI Kit seja projetado para o Raspberry Pi 5, nós o testamos em nosso gateway de borda alimentado por CM4. Animados em transformar nosso dispositivo de borda em um gateway IoT inteligente!

## Preparar o Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Execute este projeto

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Executar com Hailo-8L">

### Etapa 1: Instalar o kit de IA

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Etapa 2: Atualizar o sistema e definir o PCIe para Gen3

#### Atualizar sistema

Abra o terminal no reComputer R1000 e insira o comando a seguir para atualizar o sistema.

```
sudo apt update
sudo apt full-upgrade
```

#### Definir PCIe para Gen3

Abra o terminal no reComputer R1000 e insira o comando a seguir para configurar o reComputer R1000.

```
sudo raspi-config
```

Selecione a opção "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

Em seguida, selecione a opção "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

Escolha "Yes" para habilitar o modo PCIe Gen 3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

Clique em "Finish" para sair

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### Etapa 3: Instalar o software Hailo e verificar a instalação

#### Instalar o software Hailo

Abra o terminal no reComputer R1000 e insira o comando a seguir para instalar o software Hailo.

```
sudo apt install hailo-all
sudo reboot
```

#### Verificar software e hardware

Abra o terminal no reComputer R1000 e insira o comando a seguir para verificar se o hailo-all foi instalado.

```
hailortcli fw-control identify
```

O resultado correto é mostrado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abra o terminal no reComputer R1000 e insira o comando a seguir para verificar se o hailo-8L foi conectado.

```
lspci | grep Hailo
```

O resultado correto é mostrado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Executar YOLOv8

Abra o terminal no reComputer R1000 e insira o comando a seguir para executar o YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh pose-estimation-hailo
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Executar sem Hailo-8L">

### Executar YOLOv8

Abra o terminal no reComputer R1000 e insira o comando a seguir para executar o YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh pose-estimation
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-without-AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## Resultado

Comparamos a velocidade de inferência do YOLOv8 para estimativa de pose com entrada de resolução 640*640 antes e depois da aceleração usando o kit de IA. Os resultados mostram que, antes da aceleração, a velocidade de inferência era de apenas 0,5 FPS, enquanto após a aceleração, atingiu 27 FPS.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/OwIrMppQzUU" title="Raspberry Pi AI: YOLOv8 Pose Estimation on reComputer R1000(CM4-powered Edge Gateway) with Hailo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas do Projeto

Neste projeto, comparamos a velocidade de execução do YOLOv8 na estimativa de pose com e sem o kit de IA. O resultado mostra que o kit de IA pode melhorar significativamente o desempenho do dispositivo de borda. E, no futuro, vamos comparar a velocidade de execução do YOLOv8 em diferentes cenários.

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

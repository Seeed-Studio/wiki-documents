---
description: Este wiki demonstra detecção de objetos usando YOLOv8 no reComputer R Series com aceleração Raspberry-pi-AI-kit.
title: Detecção de Objetos com YOLOv8 no reComputer R Series com Hailo-8L
keywords:
  - Borda
  - reComputer R Series
  - Detecção de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
sku: 113991274, E24010521, 114993627, 100020831, 100061305, 103990763
last_update:
  date: 04/17/2026
  author: William Zhang
no_comments: false
createdAt: '2024-06-27'
updatedAt: '2026-04-17'
url: https://wiki.seeedstudio.com/pt-br/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/
---

# Detecção de Objetos com YOLOv8 no reComputer R Series com Hailo-8L

## Introdução

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versão 8) é a série YOLO mais popular de modelos de detecção de objetos em tempo real. Ele se baseia nos pontos fortes de seus predecessores ao introduzir vários avanços em velocidade, precisão e flexibilidade. O [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) é usado para acelerar a velocidade de inferência, apresentando um acelerador de inferência de rede neural de 13 TOPS construído em torno do chip Hailo-8L.

Este wiki demonstra a detecção de objetos usando YOLOv8 na R Series com e sem a aceleração do Raspberry-pi-AI-kit. O Raspberry Pi AI Kit melhora o desempenho do Raspberry Pi e libera seu potencial em aplicações de inteligência artificial e aprendizado de máquina, como varejo inteligente, tráfego inteligente e muito mais. Embora o Raspberry AI Kit seja projetado para o Raspberry Pi 5, nós o testamos em nosso gateway de borda alimentado por CM4. Animados em transformar nosso dispositivo de borda em um gateway IoT inteligente!

## Preparar hardwares

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
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
  <table align="center">
    <tr>
      <th>reComputer AI Industrial R2100</th>
      <th>reComputer Industrial R20xx</th>
      <th>reComputer Industrial R21xx</th>
      <th>reComputer AI R2100</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Executar este projeto

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Executar com Hailo-8L">

### Etapa 1: Instalar AI kit

Se você estiver usando um dispositivo da série R2000 com aceleração de IA integrada, pode pular esta etapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Etapa 2: Atualizar sistema e definir PCIe para Gen3

#### Atualizar sistema

Abra o terminal no reComputer R1000 e insira o comando a seguir para atualizar seu sistema.

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

Observação: um monitor externo deve ser conectado via cabo HDMI durante a execução; caso contrário, a interface de visualização não será carregada.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Observação
Se você estiver se conectando remotamente via SSH ou outros métodos e não tiver um monitor externo disponível, pode modificar o método de renderização de imagem no código para que a interface de visualização possa ser renderizada sem depender de um monitor externo.

Abra o arquivo de código de inferência object-detection-hailo.py, modifique a linha 165 e substitua toda a linha pelo seguinte código:
```
        pipeline_string += f"fpsdisplaysink video-sink=ximagesink name=hailo_display sync={self.sync} text-overlay={self.options_menu.show_fps} signal-fps-measurements=true "
```



</TabItem>

<TabItem value="Method 2" label="Executar sem Hailo-8L">

### Executar YOLOv8

Abra o terminal no reComputer R1000 e insira o comando a seguir para executar o YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## Resultado

Comparamos a velocidade de inferência do YOLOv8 para detecção de objetos com entrada de resolução 640*640 antes e depois da aceleração usando o AI kit. Os resultados mostram que, antes da aceleração, a velocidade de inferência era de apenas 0,75 FPS, enquanto após a aceleração, ela atingiu 29,5 FPS.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas do Projeto

Neste projeto, comparamos a velocidade de execução do YOLOv8 em detecção de objetos com e sem o kit de IA. O resultado mostra que o kit de IA pode melhorar significativamente o desempenho do dispositivo de borda. E, no futuro, iremos comparar a velocidade de execução do YOLOv8 em diferentes cenários, incluindo kits de IA de segmentação semântica e estimativa de pose após aceleração.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

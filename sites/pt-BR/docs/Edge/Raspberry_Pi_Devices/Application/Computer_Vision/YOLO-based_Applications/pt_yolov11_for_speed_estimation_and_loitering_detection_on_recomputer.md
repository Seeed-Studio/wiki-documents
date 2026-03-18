---
description: Este wiki demonstra como usar o YOLOv11 para estimativa de velocidade e detecção de permanência.
title: YOLOv11 para Estimativa de Velocidade e Detecção de Permanência
keywords:
  - Edge
  - reComputer AI
  - YOLOv11
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov11_for_speed_estimation_and_loitering_detection_on_recomputer
last_update:
  date: 12/16/2025
  author: Jiahao
no_comments: false
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/yolov11_for_speed_estimation_and_loitering_detection_on_recomputer/
---

# YOLOv11 para Estimativa de Velocidade e Detecção de Permanência

## Introdução

[YOLOv11](https://github.com/ultralytics/ultralytics) é a versão mais recente e avançada da família de modelos de detecção de objetos em tempo real "You Only Look Once" (YOLO); ele foi lançado no final de 2024 pela Ultralytics.

Este wiki é um sistema abrangente de detecção, rastreamento e estimativa de velocidade de objetos em tempo real, otimizado para aceleradores de IA Hailo usando o yolov11. Este projeto permite a detecção eficiente de objetos (com foco em pessoas e veículos) com capacidades simultâneas de rastreamento e cálculo de velocidade.

## Preparar Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
        <th>reComputer AI R2000</th>
        <th>reComputer Industrial R2045</th>
        <th>reComputer Industrial R2135</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
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


<div style={{ color: 'red', fontWeight: 'bold' }}>
  Observação: Você precisa de uma câmera USB como entrada.
</div>

## Instalar o Software Hailo e Verificar a Instalação

### Atualizar o sistema

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
Às vezes, você pode encontrar os seguintes problemas durante as atualizações.

```
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:4 http://archive.raspberrypi.com/debian bookworm InRelease [39.0 kB]
Reading package lists... Done                                   
E: Release file for http://deb.debian.org/debian/dists/bookworm/InRelease is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian-security/dists/bookworm-security/InRelease is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for http://archive.raspberrypi.com/debian/dists/bookworm/InRelease is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian/dists/bookworm-updates/InRelease is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied. 
```

Isso ocorre porque a hora no Raspberry Pi está configurada incorretamente, e você precisa definir manualmente a hora no Raspberry Pi com o comando abaixo:

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Depois de definir o horário do seu Raspberry, você pode atualizá-lo.
:::

### Definir PCIe para gen2/gen3 (gen3 é mais rápido que gen2)

Adicione o seguinte texto a ```/boot/firmware/config.txt```

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Se você quiser usar gen2, comente dtparam=pciex1_gen=3
:::

### Instalar hailo-all e reiniciar

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para instalar o software Hailo.

```bash
sudo apt install hailo-all
sudo reboot
```

### Verificar Software e Hardware

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para verificar se o hailo-all foi instalado.

```bash
hailortcli fw-control identify
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abra o terminal no Raspberry Pi5 e insira o comando a seguir para verificar se o hailo-8L foi conectado.

```bash
lspci | grep Hailo
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Executar o Projeto

### Instalar o Projeto

```bash
cd ~ && git clone https://github.com/Seeed-Projects/YOLOv11-Hailo-Tracker.git
cd YOLOv11-Hailo-Tracker
```

### Preparar o ambiente

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

### Executar o projeto

Acesse `localhost:5000` para abrir o frontend e configurar as definições.

```bash
 python run_api.py
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/yolov11/image.png" alt="pir" width={1000} height="auto"/></p>

## Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/cscCVUAidGo" title="YOLOv11n on Raspberry Pi reComputer for Loitering Detection and Speed Estimation (Hailo-8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

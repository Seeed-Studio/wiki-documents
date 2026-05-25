---
description: Este wiki demonstra como implantar reconhecimento facial no reComputer.
title: Implantar Reconhecimento Facial no reComputer
keywords:
  - Edge
  - reComputer AI
  - reconhecimento facial
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /facial_recognition_on_the_recomputer
last_update:
  date: 11/18/2025
  author: Jiahao
no_comments: false
createdAt: '2025-11-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/facial_recognition_on_the_recomputer/
---

# Implantar Reconhecimento Facial no reComputer

## Introdução

Este wiki irá guiá-lo no uso de um reComputer equipado com um NPU `Hailo` para implementar reconhecimento facial em tempo real. Neste projeto, usamos `SCRFD-10G` para detecção eficiente de rostos, capaz de detectar de forma rápida e precisa rostos em várias escalas, incluindo rostos pequenos, garantindo desempenho em tempo real. Ao mesmo tempo, empregamos o modelo `ArcFace-MobileFaceNet` para reconhecimento facial leve, que utiliza a função de perda ArcFace para aprimorar a precisão do reconhecimento e possibilitar verificação de identidade eficiente.

## Preparar Hardware

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
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


<div style={{ color: 'red', fontWeight: 'bold' }}>
  Nota: Você precisa de uma câmera USB como entrada.
</div>

## Instalar o Software Hailo e Verificar a Instalação

### atualizar o sistema

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
Às vezes você pode encontrar os seguintes problemas durante as atualizações.

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

Isso acontece porque a hora no Raspberry Pi está configurada incorretamente, e você precisa definir manualmente a hora no Raspberry Pi com o comando abaixo:

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Depois de configurar a hora do seu Raspberry, você pode atualizar o seu Raspberry.
:::

### Definir pcie para gen2/gen3 (gen3 é mais rápido que gen2)

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
sudo apt-get -y install libblas-dev nlohmann-json3-dev
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

### Instalar Projeto

```bash
cd ~ && git clone https://github.com/Seeed-Projects/hailo-apps-infra
cd hailo-apps-infra
./install.sh
source venv_hailo_apps/bin/activate
```

### Adicionar sua foto

```bash
cd /resources/face_recon/train
# change name to the name of the person to be recognized
mkdir name
```

<div style={{ color: 'red', fontWeight: 'bold' }}>
  Nota: Coloque a foto da pessoa a ser reconhecida na pasta que acabou de ser criada.
</div>

### Adicionar informações ao banco de dados

```bash
cd ~/hailo-apps-infra/hailo_apps/hailo_app_python/apps/face_recognition
python face_recognition.py --mode train
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/face/face_1.png" alt="pir" width={1000} height="auto"/></p>

### Executar o projeto

Insira o comando abaixo e você verá uma demonstração de reconhecimento facial:

```bash
 python face_recognition.py --input usb
```

## Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/wcT_ZYsRbAE" title="Facial Recognition On Raspberry Pi CM5 reComputer with Hailo-8 NPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

---
description: Este wiki demonstra como usar estimativa de pose com yolov8 para controlar suas luzes.
title: Controle de Luz Baseado em Pose com Node-Red e Raspberry Pi com AIkit
keywords:
  - Borda
  - reComputer r1000
  - Detecção de objeto
  - AI kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /pose_based_light_control_with_nodered_and_rpi_with_aikit
last_update:
  date: 07/26/2024
  author: Jiahao
no_comments: false
createdAt: '2024-07-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/pose_based_light_control_with_nodered_and_rpi_with_aikit/
---

# Controle de Luz Baseado em Pose com Node-Red e Raspberry Pi com AIkit

## Introdução

Este wiki irá guiá-lo sobre como executar o YOLOv8 usando um AI kit, usar o YOLOv8 para monitorar sua postura e, por fim, controlar suas luzes com base na sua postura. Neste projeto, uma câmera USB captura sua pose, e yolov8n é executado no [AI kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) com o [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) para detectar sua pose. O vídeo processado, exibindo a pose detectada, é então transmitido em tempo real para o [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html) usando o [gstreamer](https://gstreamer.freedesktop.org/). Enquanto isso, as coordenadas das articulações são enviadas usando [mqtt](https://mqtt.org/) para o [Node-RED](https://nodered.org/), que é implantado no reComputer R1000. Por fim, o fluxo Node-RED controla as luzes inteligentes com base nas coordenadas das articulações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" alt="pir" width={1000} height="auto"/></p>

## Preparar o Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reTerminal DM</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/k/sku114070262.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html" target="_blank">
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
</div>

## Executar este projeto

### No reComputer R1000

#### Passo 1: Instalar o AI kit

Por favor, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/) e certifique-se de instalar o AI kit no seu reComputer R1000.

#### Passo 2: Instalar o projeto

Baixe o projeto com o comando abaixo:

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### Passo 3: Executar a estimativa de pose

Edite o arquivo ```pose_estimation.py``` e altere o ```mqtt_server``` para o endereço IP do seu reTerminal DM. E altere o ```Gstreamer pipeline``` para o endereço IP do seu reTerminal DM. Em seguida, execute o comando abaixo para iniciar a estimativa de pose.

```
bash run.sh
```

#### Passo 4: Instalar o Node-RED

Instale o Node-RED. Você pode baixar o Node-RED com apenas uma linha de comando:

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

#### Passo 5: Importar flows.json

Importe os arquivos do projeto. Clique em ```Settings => Import``` no canto superior direito, ```click select a file``` para importar na nova janela pop-up, selecione ```flows.jeson``` e, por fim, clique em ```Import```.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_import.gif" alt="pir" width={1000} height="auto"/></p>

#### Passo 6: Baixar os controles necessários

Após importar o arquivo do projeto, o sistema pode informar que seu Node-RED está sem alguns controles. Você precisa baixar os seguintes controles:

```
@bartbutenaers/node-red-rtsp-to-mjpeg
@chirpstack/node-red-contrib-chirpstack
@flowfuse/node-red-dashboard
node-bacnet-contrib-extended
node-red-contrib-buffer-parser
node-red-contrib-image-output
node-red-contrib-image-tools
node-red-contrib-modbus
node-red-contrib-msg-speed
node-red-contrib-multipart-stream-encoder
node-red-contrib-onvif
node-red-contrib-play-audio
node-red-dashboard
node-red-node-base64
node-red-node-mysql
node-red-node-pi-gpio
node-red-node-ping
node-red-node-serialport
node-red-node-smooth
node-red-sensecap-paas
node-red-node-random
```

Tomando ```node-red-node-random``` como exemplo, clique em ```Settings => Manage Palette``` no canto superior direito, selecione a coluna ```Install``` na nova janela, digite ```node-red-node-random``` e, por fim, clique no botão ```Install```.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_dowload_patelle.gif" alt="pir" width={1000} height="auto"/></p>

#### Passo 7: Implantar o projeto

Clique no botão Deploy no canto superior direito e o sistema será executado normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_deploy.png" alt="pir" width={1000} height="auto"/></p>

### No reTerminal DM

#### Passo 1: Instalar o gstreamer no reTerminal DM

Baixe o gstreamer com o comando abaixo:

```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

#### Passo 2: Instalar o repositório

Baixe o repositório com o comando abaixo:

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### Passo 3: Executar o receptor de vídeo

```
python3 video_receiver.py
```

## Resultado

Nós mostramos esta demonstração em uma transmissão ao vivo no YouTube que começa em ```19:47```. E você pode ver que a luz acende quando a apresentadora bate palmas, depois a luz apaga quando a apresentadora acena a mão, aproveite esta demonstração:

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/v-S6_tH75NI" title="Making Next Gadget: AI Boosted RPi for Real World Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

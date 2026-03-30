---
description: Vigilância residencial DIY com IA usando Frigate NVR e acelerador de IA Hailo no reComputer R2000. Integra-se perfeitamente com o Home Assistant para alertas inteligentes em tempo real, detecção de objetos e processamento local de vídeo eficiente na borda.
title: Frigate NVR e Hailo no reComputer R2000 conectados ao Home Assistant
keywords:
  - Raspberry pi
  - Computador Edge AI
  - reComputer R2000
  - Frigate
  - Home Assistant
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /r2000_series_frigate_and_home_assistant
last_update:
  date: 6/18/2025
  author: Kasun Thushara
createdAt: '2025-06-19'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/r2000_series_frigate_and_home_assistant/
---

# Frigate NVR e Hailo no reComputer AI box & Industrial box conectados ao Home Assistant

## Introdução

Frigate NVR é um Network Video Recorder (NVR) de código aberto projetado especificamente para detecção de objetos em tempo real usando modelos de IA. Ele é leve, poderoso e funciona perfeitamente com câmeras via protocolo RTSP.

Home Assistant (HA) é uma plataforma de código aberto para automação residencial inteligente que permite controlar e automatizar dispositivos na sua casa.

Neste guia, vamos mostrar como instalar o **Frigate em um reComputer AI box & Industrial box** equipado com **Hailo PCIe** e como conectá-lo à sua instância existente do **Home Assistant** usando **MQTT** com o mínimo de esforço.

## Pré-requisitos

### Requisitos de Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
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
  </tr>
 </table>
</div>

## Instalar o Driver Hailo PCIe

### Passo 1: Configuração do Raspberry Pi

```bash
sudo apt update
sudo raspi-config
```

- Navegue até `6 Advanced Options > A8 PCIe Speed`
- Selecione `Yes` para habilitar o PCIe Gen 3
- Saia e selecione `Finish`

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/pcie.png"
    style={{ width: 600}}
  />
</div>

Adicione a seguinte linha ao final de `/boot/firmware/config.txt`:

```bash
dtoverlay=pciex1-compat-pi5,no-mip
```

### Passo 2: Instalar o Driver PCIe

```bash
sudo apt update
sudo apt install dkms
```

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
sudo make install_dkms
```

### Passo 3: Instalar o Firmware

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

### Passo 4: Corrigir o Problema de Tamanho do Descritor PCIe

Crie `/etc/modprobe.d/hailo_pci.conf` com este conteúdo:

```bash
options hailo_pci force_desc_page_size=4096
```

### Passo 5: Reiniciar e Verificar

```bash
sudo reboot
ls /dev/hailo*
```

Saída esperada:

```bash
/dev/hailo0
```

## Instalar Frigate NVR com Docker

### Pré-requisitos

Certifique-se de que sua câmera esteja configurada para streaming RTSP com resolução de 1920x1080.

### Atualizar o Sistema

```bash
sudo apt update
```

### Instalar Docker

```bash
curl -fsSL get.docker.com | bash
sudo usermod -aG docker $USER
sudo reboot
```

### Fazer Pull da Imagem do Frigate

```bash
docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
```

### Criar Estrutura de Diretórios

```bash
mkdir -p ~/frigate/config
mkdir -p ~/frigate/data/db
mkdir -p ~/frigate/data/storage
cd ~/frigate
```

### Criar Arquivo Docker Compose (frigate.yml)

```bash
nano frigate.yml
```

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    shm_size: 1024mb
    devices:
      - /dev/hailo0:/dev/hailo0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
```

### Criar Arquivo de Configuração do Frigate (config/config.yml)

```bash
nano config/config.yml
```

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  enabled: False

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1
```

### Iniciar o Frigate

```bash
docker compose -f frigate.yml up -d
```

### Acessar a Interface Web

Acesse: `http://<your-device-ip>:5000`

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/frigate_web.png"
    style={{ width: 600}}
  />
</div>

## Integração com Home Assistant

### Passo 1: Configuração do HACS

Supondo que você esteja executando o Home Assistant (HA Green, HA Yellow ou dispositivos autônomos semelhantes):

- Instale o [HACS](https://hacs.xyz/docs/use/) se ainda não estiver instalado.
- No HACS, instale a **integração Frigate** a partir da loja da comunidade.

Configure-o usando o IP e a porta do seu Frigate AI box

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/config_frigate.PNG"
    style={{ width: 600}}
  />
</div>

### Passo 2: Instalar o Add-on MQTT

Siga o [guia oficial de integração MQTT](https://www.home-assistant.io/integrations/mqtt/) para instalar e configurar o add-on de broker MQTT.

### Passo 3: Atualizar a Configuração do Frigate para MQTT

```bash
mqtt:
  host: <HA IP>
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: <HA User Name>
  password: <HA Password>
```

Exemplo:

```bash
mqtt:
  host: 10.0.0.136
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook
```

exemplo completo :

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  host: core-mosquitto
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1


```

### Passo 4: Reiniciar o Frigate

```bash
docker compose -f frigate.yml down
sudo docker compose -f frigate.yml up -d
```

### Passo 5: Confirmar que o MQTT está Funcionando (opcional)

- Verifique os logs do HA ou do add-on MQTT para confirmar as mensagens do Frigate
- No HA, agora você pode usar eventos do Frigate em automações, por exemplo, alertas de movimento, objetos detectados, etc.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/HA_interface.PNG"
    style={{ width: 600}}
  />
</div>

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este wiki demonstra como implementar detecção de armas com base no Frigate NVR e no reComputer AI box.
title: Detecção de armas com Frigate NVR no R2000
keywords:
  - Raspberry pi
  - Computador Edge AI
  - reComputer r2130
  - Detecção de objetos
  - Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.webp
slug: /gun_detection_with_frigate_nvr_on_r2000
last_update:
  date: 08/12/2025
  author: Nolan Chen
no_comments: false
createdAt: '2025-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/gun_detection_with_frigate_nvr_on_r2000/
---

# Detecção de armas com Frigate NVR no R2000

## Introdução

**Frigate NVR** é um gravador de vídeo em rede de código aberto projetado para análise de vídeo em tempo real com foco em IA na borda. Implantado em um **reComputer AI box** com Hailo, o sistema ingere localmente vários streams de câmera, executa um modelo quantitativo de detecção de objetos e emite eventos MQTT em milissegundos, eliminando a latência da nuvem e os custos de largura de banda.

Para esta implantação, expandimos a biblioteca de modelos existente do Frigate e adicionamos um modelo personalizado **yolov11s** especificamente ajustado para reconhecimento de pistolas e rifles. Quando uma arma é detectada, o mecanismo de regras do Frigate dispara imediatamente um alerta, dando às equipes de segurança segundos preciosos para bloquear a área e coordenar uma resposta antes que a ameaça aumente.

## Pré-requisitos

### Requisitos de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
         <th>reComputer AI R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
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
    </tr>
  </table>
</div>

## Configurando o Frigate

### Modificando as configurações de PCIe

Abrindo o `config.txt`:

```bash
sudo nano /boot/firmware/config.txt
```

Adicione o seguinte ao `config.txt`:

```bash
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

Em seguida, salve o arquivo usando `Ctrl+x` e reinicie o AI box.

### Instalar Docker e hailo-all

```bash
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### Criando um arquivo yml

Crie o arquivo `frigate.yml` para que o Docker Compose possa executar o Frigate.

```bash
cd ~
sudo nano frigate.yml
```

Aqui está um exemplo de `frigate.yml`:

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.16.0-beta3-standard-arm64
    shm_size: "512mb" # calculate on your own
    stop_grace_period: 30s # allow enough time to shut down the various services
    devices:
      - /dev/hailo0:/dev/hailo0
      - /dev/video19:/dev/video19  # USB camera (physical device)
      - /dev/video20:/dev/video20  # USB camera backup device
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - ./media:/media/frigate  # Mapping local media files to the container
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
    environment:
      - FRIGATE_RTSP_PASSWORD=password
      - LIBVA_DRIVER_NAME=i965
    group_add:
      - "44"  # video group
```

Baixe o vídeo de caso:

```bash
mkdir media && cd media
wget -c \
"https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/model_cache/yolov11s.hef"
```

Baixe o modelo YOLO e crie o config.yml:

```bash
cd .. && mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef
cd .. && nano config.yml
```

A seguir está um exemplo de config.yml:

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    # USB camera streaming
    usb_camera:
      - "ffmpeg:/dev/video0#input=-f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15"

    # RTSP stream configuration

    hikvision_main:
      - "rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream"

    # Video file streaming - close.mp4
    video_files_close:
      - "ffmpeg:/media/frigate/close.mp4"

    # Video file streaming - close2.mp4
    video_files_close2:
      - "ffmpeg:/media/frigate/close2.mp4"

    # Video file streaming - y4.mp4
    video_files_y4:
      - "ffmpeg:/media/frigate/y4.mp4"

    # Video file streaming - y5.mp4
    video_files_y5:
      - "ffmpeg:/media/frigate/y5.mp4"

cameras:
  # USB camera
  usb_camera:
    ffmpeg:
      inputs:
        - path: /dev/video0
          input_args: -f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15
          roles:
            - record
            - detect
    detect:
      width: 640
      height: 480
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 100000
          threshold: 0.25

  # Video file camera - close.mp4
  video_files_close:
    ffmpeg:
      inputs:
        - path: /media/frigate/close.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - close2.mp4
  video_files_close2:
    ffmpeg:
      inputs:
        - path: /media/frigate/close2.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - y4.mp4
  video_files_y4:
    ffmpeg:
      inputs:
        - path: /media/frigate/y4.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.3

  # Video file camera - y5.mp4
  video_files_y5:
    ffmpeg:
      inputs:
        - path: /media/frigate/y5.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.25

  # RTSP IP camera - hikvision
  hikvision_main:
    ffmpeg:
      inputs:
        - path: rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream
          input_args: -rtsp_transport tcp -avoid_negative_ts make_zero
          roles:
            - detect
            - record
    detect:
      width: 1920
      height: 1080
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

mqtt:
  enabled: false

objects:
  track:
    - gun
  filters:
    gun:
      min_area: 10
      max_area: 500000
      threshold: 0.25

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  input_tensor: nhwc
  input_pixel_format: rgb
  input_dtype: int
  model_type: yolo-generic
  path: /config/model_cache/yolov11s.hef
  labelmap:
    0: person
    1: gun

detect:
  enabled: true

snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95

record:
  enabled: true
  retain:
    days: 30
    mode: all

ui:
  timezone: Asia/Shanghai

auth:
  enabled: false

live:
  height: 720
  quality: 8

birdseye:
  enabled: true
  width: 1280
  height: 720
  quality: 8
  mode: objects
version: 0.16-0
semantic_search:
  enabled: false
  reindex: false
  model_size: small
face_recognition:
  enabled: false
lpr:
  enabled: false
```

## Executar o projeto

Faça o pull e execute o projeto:

```bash
cd ~
sudo docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml up -d
```

Em seguida, abra **localhost:5000** no navegador da web do AI box:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/first.png"
    style={{ width: 1000}}
  />
</div>

Selecione um dos vídeos para começar a depuração, selecione a caixa de exibição e os resultados serão exibidos automaticamente:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_1.png"
    style={{ width: 1000}}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_2.png"
    style={{ width: 1000}}
  />
</div>

Alterne as abas para visualizar os resultados de testes anteriores:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.png"
    style={{ width: 1000}}
  />
</div>

## Resultado

Quando detectar alguém segurando uma arma, o modelo irá identificá-la e selecioná-la.
Altere para o modo de depuração, selecione a caixa de exibição e os resultados serão exibidos automaticamente; alterne as abas para visualizar resultados de detecções anteriores.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/gun_detection_gif.gif" alt="pir" width={1000} height="auto"/></p>

## Outras configurações

| Configuração de outras fontes de vídeo | Configuração da taxa de quadros|
|--------------------------|--------------------|
| O Frigate oferece suporte a RTSP, transmissão de vídeo e câmeras USB. Depois que o arquivo de configuração for ajustado, ele entrará em vigor após a reinicialização.                | O arquivo de configuração pode definir a taxa de quadros de detecção de cada câmera, o que entrará em vigor após a reinicialização.|
| Você pode acessar as opções de configuração em Settings, como alterar o caminho RTSP para conectar a uma câmera RTSP. Depois de fazer alterações, clique em Save & Restart no canto superior direito para que as alterações entrem em vigor.| ![page](https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/other.png)|

## Suporte Técnico & Discussão sobre Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

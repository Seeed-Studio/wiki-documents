---
description: Este artigo da wiki fornece um guia passo a passo sobre como implantar o Frigate NVR no Raspberry Pi 5 com Hailo 8.
title: Frigate NVR com Raspberry Pi 5/CM5
keywords:
  - Edge
  - reComputer r1000
  - Detecção de objetos
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /frigate_nvr_with_raspberrypi_5
last_update:
  date: 04/03/2025
  author: Joshua Lee
no_comments: false
createdAt: '2025-01-09'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/frigate_nvr_with_raspberrypi_5/
---


## Introdução

**Frigate NVR** é um gravador de vídeo em rede de código aberto projetado para detecção de objetos em tempo real com modelos de IA. Em conjunto com o **Raspberry Pi 5/CM5**, ele permite vigilância por vídeo eficiente na borda. Este guia irá conduzir você pelo processo de instalação e configuração para uma configuração ideal.

## Frigate Oficial

### Preparar Hardware

#### Componentes Recomendados

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

**Como alternativa, você também precisa de pelo menos uma câmera para transmissão de vídeo. Você pode consultar [Recommended hardware](https://docs.frigate.video/frigate/hardware#cameras) para ver as câmeras recomendadas.**

### Instalar o Driver Hailo PCIe

#### Passo 1: Ativar PCIe Gen 3

Abra um terminal e execute o seguinte comando.

```bash
sudo apt update
sudo raspi-config
```

Na janela de diálogo, selecione **6 Advanced Options** e depois **A8 PCIe Speed**.

![6 Advanced Options](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 PCIe Speed](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

Escolha "Yes" para ativar o modo PCIe Gen 3.

![Choose Yes](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

Em seguida, clique em "Finish" para sair.

Edite `/boot/firmware/config.txt` e acrescente a seguinte linha ao final do arquivo.

```
dtoverlay=pciex1-compat-pi5,no-mip
```

#### Passo 2: Instalar o Driver Hailo PCIe

Instale o pacote dkms. Este pacote é necessário para instalar o driver Hailo PCIe.

```bash
sudo apt update
sudo apt install dkms
```

Obtenha o driver Hailo PCIe no [GitHub](https://github.com/hailo-ai/hailort-drivers).

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
```

Em seguida, instale o driver Hailo PCIe.

```bash
sudo make install_dkms
```

Após a instalação, baixe o firmware para o Hailo e copie-o para o diretório `/lib/firmware/hailo`.

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

Para evitar o problema de PCIe max_desc_page_size, também precisamos criar uma regra em `/etc/modprobe.d/hailo_pci.conf` com o seguinte conteúdo.

```bash
options hailo_pci force_desc_page_size=4096
```

Reinicie o sistema para que as alterações tenham efeito.

```bash
sudo reboot
```

Após a reinicialização do sistema, o driver Hailo PCIe estará instalado com sucesso. O dispositivo `/dev/hailo0` será criado. Verifique o dispositivo executando o seguinte comando.

```bash
$ ls /dev/hailo*
/dev/hailo0
```

### Instalar Frigate NVR

Nesta parte, assumimos que você já configurou sua câmera e que ela está pronta para transmitir com o protocolo RTSP em resolução 1920x1080.

- Exemplo de URL RTSP: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

#### Passo 1: Preparar o Ambiente

1. **Atualize o seu sistema:**

   ```bash
   sudo apt update
   ```

2. **Instale o Docker:**

   ```bash
   curl -fsSL get.docker.com | bash
   sudo usermod -aG docker $USER
   ```

3. **Reinicie o sistema:**

   ```
   sudo reboot
   ```

#### Passo 2: Implantando o Frigate

1. **Baixe a Imagem do Frigate:**

    Vá para [Package frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions), escolha uma imagem com o sufixo `-h8l`. Neste exemplo, escolhemos `ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l`.

    ```bash
    docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **Criar o Arquivo Docker Compose:**

    Aqui está um exemplo do arquivo `frigate.yml`, o dispositivo `hailo0` é aquele que você criou na etapa anterior, arquivos de configuração estão no diretório `./config` e arquivos de dados estão no diretório `./data`.

    ```yml
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

3. **Editar a Configuração do Frigate:**

    Aqui está um exemplo do arquivo `config/config.yml`, que é para a aplicação Frigate:

    ```yml
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

4. **Iniciar a Instância Docker:**

    ```bash
    docker compose -f frigate.yml up -d
    ```

    Após o Frigate estar em execução, você pode acessar a interface web do Frigate em `http://<seu-ip-do-raspberry-pi>:5000` para verificar o fluxo da câmera.

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Seeed Frigate

### Modificar configurações de PCIe

Abra o config.txt

```
sudo nano /boot/firmware/config.txt 
```

Adicione o seguinte texto ao config.txt

```
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

Depois use `Ctrl+x` para salvar o arquivo e reiniciar o AI box

### Instalar docker e hailo-all

```
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### Criar arquivo yml

Crie frigate.yml para o docker compose executar o Frigate

```
cd ~
sudo nano frigate.yml
```

Aqui está um exemplo de frigate.yml

```
version: "3.9"
services:
    frigate-hailo:
        container_name: frigate-hailo
        privileged: true
        restart: unless-stopped
        image: mjqx2023/frigate_seeed:latest
        shm_size: 1024mb
        environment:
            - HAILO_MONITOR=1
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
                  size: 1000000000
        ports:
            - 5000:5000
            - 1984:1984
            - 5002:5002
            - 5003:5003
```

Baixe o modelo yolo e crie config.yml.

```
mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef

cd .. && nano config.yml
```

Aqui está um exemplo de config.yml

```yml
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    home1:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    yard:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1
    yard1:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  home1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home1
          roles:
            - detect


    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard1
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
mqtt:
  enabled: false

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  path: /config/model_cache/yolov8n.hef

version: 0.16-0

camera_groups:
  test:
    order: 1
    icon: LuAlignEndHorizontal
    cameras:
      - home
      - home1
      - yard
      - yard1
```

### Fazer pull da imagem docker e executar o frigate

Fazer pull da imagem frigate_seeed

```
cd ~
docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml start 
```

Em seguida, abra `localhost:5000` no navegador web da sua AI box:
 ![frigate-web](https://files.seeedstudio.com/wiki/AI_box_deepseek/seeed_frigate.png)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

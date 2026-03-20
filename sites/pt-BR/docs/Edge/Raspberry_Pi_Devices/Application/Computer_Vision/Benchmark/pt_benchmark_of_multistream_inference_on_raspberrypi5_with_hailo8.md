---
description: Este wiki demonstra o benchmark de detecção multistream do yolov8m no Raspberry Pi 5 com hailo8.
title: Benchmark de Inferência Multistream no Raspberry Pi com Hailo8
keywords:
  - Borda
  - RasberryPi 5
  - Detecção de objetos
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 11/21/2024
  author: Jiahao
no_comments: false
createdAt: '2024-11-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8/
---

# Benchmark de Inferência Multistream no Raspberrypi 5 com Hailo8

## Introdução

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versão 8) é a série mais popular de modelos YOLO para estimativa de pose em tempo real e detecção de objetos. Ele se baseia nos pontos fortes de seus predecessores, introduzindo vários avanços em velocidade, precisão e flexibilidade. O [Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html) é utilizado para acelerar a velocidade de inferência, apresentando um desempenho de IA de 26 TOPS.

Este wiki apresenta o benchmark do YOLOv8m para detecção de objetos no Raspberry Pi 5 com hailo8. Todos os testes utilizam o mesmo modelo (YOLOv8m), quantizado para int8, com tamanho de entrada de resolução 640x640 e tamanho de lote definido como 8.

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Instalar o kit de IA no RPi5

Por favor, consulte [isto](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## Preparar software

### atualizar o sistema

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Baixar o software hailo no site oficial da hailo

> **Note:**
você precisa de uma conta oficial da Hailo e garantir que esteja logado.
Clique neste [link](https://hailo.ai/developer-zone/software-downloads/) para baixar as bibliotecas necessárias da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### Instalar hailort_4.19.0_arm64.deb no respberrypi5

```
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot

```

### Instalar dkms

```
sudo apt-get install dkms
```

### Instalar hailort-pcie-driver_4.19.0_all.deb

```
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot

```

### Criar e ativar um ambiente virtual Python

```
python -m venv hailo_env
source hailo_env/bin/activate
```

### Instalar hailort-4.19.0-cp311-cp311-linux_aarch64.whl

```
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### Verificar se o software está instalado

```
hailortcli fw-control identify
```

O resultado é mostrado abaixo:

```
ain@pi5-hailo:~ $ hailortcli fw-control identify
Executing on device: 0000:01:00.0
Identifying board
Control Protocol Version: 2
Firmware Version: 4.19.0 (release,app,extended context switch buffer)
Logger Version: 0
Board Name: Hailo-8
Device Architecture: HAILO8
Serial Number: HLLWM2B225100548
Part Number: HM218B1C2FAE
Product Name: HAILO-8 AI ACC M.2 M KEY MODULE EXT TEMP
```

### Definir pcie para gen2/gen3(gen3 é mais rápido que gen2)

Adicione o seguinte texto a ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Se você quiser usar gen2, por favor comente dtparam=pciex1_gen=3
:::

### Instalar Tapps

#### Instalar bibliotecas necessárias

```
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### Definir hailo_pci force_desc_page_size

```
sudo nano /etc/modprobe.d/hailo_pci.conf
```

E então insira o seguinte conteúdo.

```
options hailo_pci force_desc_page_size=4096
```

Por fim, pressione `Ctrl+X`, digite `Y` e pressione `Enter` para salvar o arquivo

E então reinicie o raspberrypi5

```
sudo reboot
```

#### Baixar Tapps

```
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### Baixar hailort para tapps

```
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### Alterar common.py

```
nano downloader/common.py
```

E altere o conteúdo como abaixo, adicione `RaspberryPI5 = 'rpi5'` em common.py:

```
class Platform(Enum):
    X86 = 'x86'
    ARM = 'arm'
    IMX8 = 'imx8'
    Rockchip = 'rockchip'
    RaspberryPI = 'rpi'
    RaspberryPI5 = 'rpi5'

    ANY = 'any'

    def __str__(self):
        return self.value
```

#### Instalar tappas

```
./install.sh --skip-hailort --target-platform rpi5

```

#### Alterar o tamanho do lote para 8

```
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```

Adicione `readonly DEFAULT_BATCH_SIZE=8` à linha 14 como segue:

```
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

Adicione `batch_size=$DEFAULT_BATCH_SIZE` à linha 19 como segue:

```
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

Adicione `batch-size=$batch_size` à linha 154 como segue:

```
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

Por fim `Ctrl+X` e digite `Y` para salvar o arquivo.

## Executar inferência multistream

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## Resultado

Todos os resultados são baseados em inferência com tamanho de entrada do modelo de 640x640, tamanho de lote 8 e resolução de vídeo de 1280x760, que é 720p.

<div class="table-center">

| Quantidade de Canais | Desempenho PCIE Gen2 | Desempenho PCIE Gen3 |
|---------------------|-----------------------|-----------------------|
| 1 canal de stream   | 39.82FPS             | 76.99FPS             |
| 2 canais de stream  | 19.86FPS             | 38.21FPS             |
| 4 canais de stream  | 8.45FPS              | 16.94FPS             |
| 8 canais de stream  | 3.85FPS              | 8.15FPS              |
| 12 canais de stream | 2.94FPS              | 5.43FPS              |

</div>

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Multistream Inference on Hailo8 with RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

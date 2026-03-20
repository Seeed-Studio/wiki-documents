---
description: Saiba como implantar o Whisper na Raspberry Pi AI box.
title: Implantar Whisper na Raspberry Pi AI box e na Industiral AI box.
keywords:
  - Whisper
  - Hailo8
  - Reconhecimento de Fala
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /deploy_whisper_on_raspberry_pi_ai_box
sku: 114993627, 100061305, 100097052, 114993595, 100077451, 100080766, 100020831
last_update:
  date: 01/19/2026
  author: Jiahao
no_comments: false
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_whisper_on_raspberry_pi_ai_box/
---

# Implantar Whisper na Raspberry Pi AI box

## Introdução

[Whisper](https://github.com/openai/whisper) é um modelo versátil e de última geração de Reconhecimento Automático de Fala (ASR) e processamento de fala desenvolvido pela OpenAI. Diferente dos sistemas tradicionais de conversão de fala em texto, o Whisper foi treinado com 680.000 horas de dados supervisionados multilíngues e multitarefa coletados na web. Esse conjunto de dados massivo e diversificado torna o modelo excepcionalmente robusto a sotaques, ruídos de fundo e terminologia técnica.

Este guia fornece um passo a passo completo para a implantação e utilização do [Whisper](https://github.com/openai/whisper) na Raspberry Pi AI Box.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/openai/whisper/main/approach.png" style={{width:500, height:'auto'}}/></div>

## Preparar hardware

### AI Box
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
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

### Matriz de microfones

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v3-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Preparar software

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

Depois de ajustar a hora do seu Raspberry, você pode atualizar o seu Raspberry.
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

### Verificar software e hardware

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

## Instalar projeto

### Baixar projeto

```bash
cd ~ && git clone https://github.com/Seeed-Projects/STT_hailo_whisper.git
cd STT_hailo_whisper
```

### Instalar pacotes necessários

```bash
sudo apt update
sudo apt install ffmpeg
sudo apt install libportaudio2
sudo apt install portaudio19-dev python3-pyaudio
sudo apt install hailo-all
```

### Criar ambiente Python

```bash
python -m venv .env --system-site-packages && source .env/bin/activate
cd app && python download_resources.py
cd .. && pip install -r requirements.txt
```

## Executar projeto

Inicie o backend.
```bash
python hailo_whisper.py --hw-arch hailo8 --variant base --udp-host 0.0.0.0 --udp-port 12345
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_begin.png" style={{width:800, height:'auto'}}/></div>

## Resultado

Inicie o frontend e então você poderá ver o resultado de STT em tempo real.
```bash
cd test && python recive_message.py --host 0.0.0.0 --port 12345 --stats-interval 5

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_result.png" style={{width:800, height:'auto'}}/></div>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
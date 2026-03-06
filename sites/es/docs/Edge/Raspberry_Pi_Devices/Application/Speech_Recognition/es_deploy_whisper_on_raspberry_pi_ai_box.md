---
description: Aprende cómo desplegar whisper en raspberry pi ai box.
title: Desplegar Whisper en Raspberry Pi AI box & Industrial AI box.
keywords:
  - Whisper
  - Hailo8
  - Speech Recognition
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /deploy_whisper_on_raspberry_pi_ai_box
sku: 114993627, 100061305, 100097052, 114993595, 100077451, 100080766, 100020831
last_update:
  date: 01/19/2026
  author: Jiahao
no_comments: false
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/deploy_whisper_on_raspberry_pi_ai_box/
---

# Desplegar Whisper en Raspberry Pi AI box

## Introducción

[Whisper](https://github.com/openai/whisper) es un modelo versátil y de vanguardia de Reconocimiento Automático de Voz (ASR) y procesamiento de voz desarrollado por OpenAI. A diferencia de los sistemas tradicionales de voz a texto, Whisper fue entrenado con 680,000 horas de datos supervisados multilingües y multitarea recopilados de la web. Este conjunto de datos masivo y diverso hace que el modelo sea excepcionalmente robusto ante acentos, ruido de fondo y terminología técnica.

Esta guía proporciona un tutorial completo para el despliegue y utilización de [Whisper](https://github.com/openai/whisper) en el Raspberry Pi AI Box.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/openai/whisper/main/approach.png" style={{width:500, height:'auto'}}/></div>

## Preparar Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Matriz de Micrófonos

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v3-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Preparar software

### actualizar el sistema

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
A veces puedes encontrar los siguientes problemas durante las actualizaciones.

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

Esto se debe a que la hora en el Raspberry Pi está configurada incorrectamente, y necesitas configurar manualmente la hora en el Raspberry Pi con el comando a continuación:

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Después de configurar la hora de tu raspberry, puedes actualizar tu raspberry.
:::

### Configurar pcie a gen2/gen3(gen3 es más rápido que gen2)

Agrega el siguiente texto a ```/boot/firmware/config.txt```

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Si quieres usar gen2, por favor comenta dtparam=pciex1_gen=3
:::

### Instalar hailo-all y reiniciar

Abre la terminal en el Raspberry Pi5, e ingresa el comando como sigue para instalar el software Hailo.

```bash
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### Verificar Software y Hardware

Abre la terminal en el Raspberry Pi5, e ingresa el comando como sigue para verificar si hailo-all ha sido instalado.

```bash
hailortcli fw-control identify
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en el Raspberry Pi5, e ingresa el comando como sigue para verificar si hailo-8L ha sido conectado.

```bash
lspci | grep Hailo
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Instalar Proyecto

### Descargar Proyecto

```bash
cd ~ && git clone https://github.com/Seeed-Projects/STT_hailo_whisper.git
cd STT_hailo_whisper
```

### Instalar paquetes necesarios

```bash
sudo apt update
sudo apt install ffmpeg
sudo apt install libportaudio2
sudo apt install portaudio19-dev python3-pyaudio
sudo apt install hailo-all
```

### Crear entorno Python

```bash
python -m venv .env --system-site-packages && source .env/bin/activate
cd app && python download_resources.py
cd .. && pip install -r requirements.txt
```

## Ejecutar Proyecto

Iniciar el backend.
```bash
python hailo_whisper.py --hw-arch hailo8 --variant base --udp-host 0.0.0.0 --udp-port 12345
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_begin.png" style={{width:800, height:'auto'}}/></div>

## Resultado

Inicia el frontend, luego puedes ver el resultado STT en tiempo real.
```bash
cd test && python recive_message.py --host 0.0.0.0 --port 12345 --stats-interval 5

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_result.png" style={{width:800, height:'auto'}}/></div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
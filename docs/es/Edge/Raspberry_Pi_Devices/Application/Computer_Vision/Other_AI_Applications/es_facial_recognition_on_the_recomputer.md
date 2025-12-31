---
description: Este wiki demuestra cómo implementar reconocimiento facial en el reComputer.
title: Implementar Reconocimiento Facial en reComputer
keywords:
  - Edge
  - reComputer AI 
  - face recognition
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/facial_recognition_on_the_recomputer
last_update:
  date: 11/18/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Implementar Reconocimiento Facial en reComputer

## Introducción

Este wiki te guiará a través del uso de un reComputer equipado con una NPU `Hailo` para implementar reconocimiento facial en tiempo real. En este proyecto, utilizamos `SCRFD-10G` para detección eficiente de rostros, capaz de detectar rápida y precisamente rostros de varias escalas, incluyendo rostros pequeños, asegurando rendimiento en tiempo real. Al mismo tiempo, empleamos el modelo `ArcFace-MobileFaceNet` para reconocimiento facial ligero, que aprovecha la función de pérdida ArcFace para mejorar la precisión del reconocimiento y permitir verificación de identidad eficiente.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
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


<div style={{ color: 'red', fontWeight: 'bold' }}>
  Nota: Necesitas una cámara USB como entrada.
</div>

## Instalar Software Hailo y Verificar Instalación

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

Esto se debe a que la hora en la Raspberry Pi está configurada incorrectamente, y necesitas configurar manualmente la hora en la Raspberry Pi con el comando a continuación:

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

Abre la terminal en la Raspberry Pi5, e ingresa el comando como sigue para instalar el software Hailo.

```bash
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### Verificar Software y Hardware

Abre la terminal en la Raspberry Pi5, e ingresa el comando como sigue para verificar si hailo-all ha sido instalado.

```bash
hailortcli fw-control identify
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en la Raspberry Pi5, e ingresa el comando como sigue para verificar si hailo-8L ha sido conectado.

```bash
lspci | grep Hailo
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Ejecutar Proyecto

### Instalar Proyecto

```bash
cd ~ && git clone https://github.com/Seeed-Projects/hailo-apps-infra
cd hailo-apps-infra
./install.sh
source venv_hailo_apps/bin/activate
```

### Agregar tu foto

```bash
cd /resources/face_recon/train
# change name to the name of the person to be recognized
mkdir name
```

<div style={{ color: 'red', fontWeight: 'bold' }}>
  Nota: Coloca la foto de la persona a ser reconocida en la carpeta que acabas de crear.
</div>

### Agregar información a la base de datos

```bash
cd ~/hailo-apps-infra/hailo_apps/hailo_app_python/apps/face_recognition
python face_recognition.py --mode train
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/face/face_1.png" alt="pir" width={1000} height="auto"/></p>

### Ejecutar el proyecto

Ingresa el comando a continuación y verás una demostración de reconocimiento facial:

```bash
 python face_recognition.py --input usb
```

## Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/wcT_ZYsRbAE" title="Facial Recognition On Raspberry Pi CM5 reComputer with Hailo-8 NPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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

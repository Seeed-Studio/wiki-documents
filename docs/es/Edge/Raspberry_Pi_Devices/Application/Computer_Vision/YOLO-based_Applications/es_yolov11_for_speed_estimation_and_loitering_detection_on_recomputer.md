---
description: Este wiki demuestra cómo usar YOLOv11 para estimación de velocidad y detección de merodeo.
title: YOLOv11 para Estimación de Velocidad y Detección de Merodeo
keywords:
  - Edge
  - reComputer AI 
  - YOLOv11
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/yolov11_for_speed_estimation_and_loitering_detection_on_recomputer
last_update:
  date: 12/16/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv11 para Estimación de Velocidad y Detección de Merodeo

## Introducción

[YOLOv11](https://github.com/ultralytics/ultralytics) es la versión más reciente y avanzada de la familia de modelos de detección de objetos en tiempo real "You Only Look Once" (YOLO), fue lanzado a finales de 2024 por Ultralytics.

Este wiki es un sistema integral de detección, seguimiento y estimación de velocidad de objetos en tiempo real optimizado para aceleradores de IA Hailo usando yolov11. Este proyecto permite la detección eficiente de objetos (con enfoque en personas y vehículos) con capacidades simultáneas de seguimiento y cálculo de velocidad.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
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
cd ~ && git clone https://github.com/Seeed-Projects/YOLOv11-Hailo-Tracker.git
cd YOLOv11-Hailo-Tracker
```

### Preparar el entorno

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

### Ejecutar el proyecto

Accede a `localhost:5000` para llegar al frontend y configurar ajustes.

```bash
 python run_api.py
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/yolov11/image.png" alt="pir" width={1000} height="auto"/></p>

## Resultado

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/cscCVUAidGo" title="YOLOv11n on Raspberry Pi reComputer for Loitering Detection and Speed Estimation (Hailo-8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

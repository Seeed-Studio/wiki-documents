---
description: Reconocimiento Óptico de Caracteres en Tiempo Real
title: OCR en Tiempo Real con reComputer AI box
keywords:
  - Edge
  - reComputer R2000
  - reComputer R2100
  - yolov5
image: https://files.seeedstudio.com/wiki/Edge_Box/ocr.webp
slug: /es/real-time-ocr
last_update:
  date: 6/16/2025
  author: Jiahao Li
---

## Introducción

OCR, o Reconocimiento Óptico de Caracteres, puede aplicarse a varios escenarios como el reconocimiento de señales y el procesamiento de facturas. En este proyecto, el modelo PGNet se despliega en el reComputer R2000 o reComputer R2000 producido por Seeed Studio para habilitar la detección OCR acelerada y en tiempo real.

## Preparación del hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI R2000</th>
        <th>reComputer AI Industrial R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image114993560.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> **Nota:** Por favor inserte la cámara USB en el puerto USB.

## Preparación del software

### Actualizar sistema

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install hailo-all -y
```

### Descargar proyecto

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

## Ejecutar este proyecto

```bash
python inference_pgnet.py pgnet_640.hef --camera 0
```

## Resultado

Puedes ver el modelo OCR detectando el texto en el recibo en tiempo real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/OCR.gif" alt="pir" width={1000} height="auto"/></p>

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
---
description: Este wiki demuestra cómo usar CLIP en Raspberry Pi 5 con el kit AI.
title: Aplicación de CLIP en Raspberry Pi con el Kit AI
keywords:
  - Edge
  - reComputer r1000
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Aplicación de CLIP en Raspberry Pi con el Kit AI

## Introducción

[CLIP](https://github.com/openai/CLIP) (Contrastive Language-Image Pre-Training) es una red neuronal entrenada en una variedad de pares (imagen, texto). Puede ser instruida en lenguaje natural para predecir el fragmento de texto más relevante, dado una imagen, sin optimizar directamente para la tarea, de manera similar a las capacidades de cero disparos de GPT-2 y 3. Hemos encontrado que CLIP iguala el rendimiento del ResNet50 original en ImageNet “cero disparos” sin usar ninguno de los 1.28 millones de ejemplos etiquetados originales, superando varios desafíos importantes en visión por computadora.

Este wiki te enseñará cómo desplegar la aplicación CLIP en un [Raspberry Pi5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) o [Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html), CLIP realizará la inferencia en el [kit AI](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html).

## Preparar el hardware

### Para Recomputer R1000

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Para Raspberry Pi 5

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Instalar el software Hailo y verificar la instalación

### Actualizar el sistema:

```bash
sudo apt update
sudo apt full-upgrade
``` 

:::note
A veces, puedes encontrar los siguientes problemas durante las actualizaciones.

```bash 
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
Esto se debe a que la hora en el Raspberry Pi está configurada incorrectamente, y debes configurar la hora manualmente en el Raspberry Pi con el siguiente comando:
 
```bash
# Este comando solo funcionará si puedes conectar google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
``` 
Después de configurar la hora de tu Raspberry Pi, podrás actualizarlo.
:::

### Configurar PCIe a gen2/gen3 (gen3 es más rápido que gen2):

Añadir el siguiente texto a ```/boot/firmware/config.txt```

```bash 
# Habilitar el conector PCIe externo

dtparam=pciex1

# Forzar velocidades Gen 3.0

dtparam=pciex1_gen=3
``` 
:::note
Si deseas usar gen2, comenta la línea dtparam=pciex1_gen=3
:::

### Instalar hailo-all y reiniciar:

Abre la terminal en Raspberry Pi 5 e ingresa el siguiente comando para instalar el software Hailo.

```bash 
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
``` 
### Verificar el software y el hardware:

Abre la terminal en Raspberry Pi 5 e ingresa el siguiente comando para verificar si hailo-all se ha instalado.

```bash 
hailortcli fw-control identify
``` 

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en Raspberry Pi 5 e ingresa el siguiente comando para verificar si hailo-8L se ha conectado correctamente.

```bash 
lspci | grep Hailo
``` 

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Ejecutar el proyecto

### Instalar el proyecto

```bash 
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
python3 -m pip install -v -e .
``` 

### Ejecutar el proyecto
Ingresa el siguiente comando y verás una demo de CLIP:
``` bash
clip_app --input demo
``` 
Y si deseas usar tu cámara, debes ingresar el siguiente comando después de asegurarte de que Raspberry Pi haya conectado tu propia cámara:

``` bash
clip_app --input /dev/video0
``` 

## Resultado

En el video que se muestra a continuación, puedes ver que cuando ingreso "banana," el modelo CLIP reconoce una banana, y cuando ingreso "apple," el modelo reconoce una manzana. Solo necesitas ingresar diferentes palabras y el modelo CLIP reconocerá diferentes objetos.

<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="Clasificación Zero Shot de CLIP en Raspberry Pi 5 con Acelerador AI Hailo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

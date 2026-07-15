---
description: Comenzando con Google MediaPipe
title: Comenzando con Google MediaPipe
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_MediaPipe
sku: 102110638
last_update:
  date: 1/10/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/reTerminal_ML_MediaPipe/
---


# Comenzando con MediaPipe en reTerminal

 MediaPipe es un framework de código abierto de Google para construir pipelines de ML aplicado multimodal (ej. video, audio, cualquier dato de series temporales), multiplataforma (es decir Android, iOS, web, dispositivos edge). Está optimizado para rendimiento con inferencia de extremo a extremo en dispositivo en mente. Mediapipe está actualmente bajo desarrollo activo e incluye múltiples demos, que pueden ejecutarse directamente después de instalar Mediapipe en reTerminal.

### Preparación del hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** o **Bookworm** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note
En versiones anteriores del sistema operativo, las bibliotecas de Python podían instalarse directamente a nivel del sistema utilizando pip, el instalador de paquetes de Python. Sin embargo, en la versión Bookworm se ha producido un cambio. Para mitigar posibles problemas durante la instalación, ahora es necesario instalar los paquetes mediante pip dentro de un entorno virtual de Python utilizando venv.
:::

Ejecuta estos comandos uno por uno, y terminarás con un entorno virtual.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## Soluciones de ML en MediaPipe

Comience clonando el repositorio de GitHub en su dispositivo reTerminal usando el siguiente comando:

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

Navega a la carpeta que contiene los recursos requeridos. En este directorio, encontrarás cuatro temas que estaremos cubriendo.

### Detección de Rostros

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **Paso 1** Para nuestro primer tema, instalaremos las dependencias para la detección de rostros. Muévete a la sección de detección de rostros usando los siguientes comandos

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

 ```sh
sh setup.sh
 ```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar la detección de rostros

 ```sh
python3 detect.py
 ```

### Detector de Puntos de Referencia Faciales

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **Paso 1** Instalar dependencias

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

 ```sh
sh setup.sh
 ```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar el marcador de puntos faciales.

 ```sh
python3 detect.py
 ```

### Detector de Puntos de Referencia de Manos

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

- **Paso 1** Instalar dependencias

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

 ```sh
sh setup.sh
 ```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar hand landmaker.

 ```sh
python3 detect.py
 ```

### Detector de Puntos de Referencia de Pose

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

- **Paso 1** Instalar dependencias

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

 ```sh
sh setup.sh
 ```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar el marcador de poses.

 ```sh
python3 detect.py
 ```

## Recursos

- **[Página Web]** [Página Web Oficial de MediaPipe](https://mediapipe.dev/)

- **[Página Web]** [Documentación Oficial de MediaPipe](https://google.github.io/mediapipe/)

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

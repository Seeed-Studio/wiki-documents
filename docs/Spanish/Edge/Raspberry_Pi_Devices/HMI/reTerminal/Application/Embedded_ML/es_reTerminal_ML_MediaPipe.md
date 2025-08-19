---
description: Comenzando con Google MediaPipe
title: Comenzando con Google MediaPipe
keywords:
  - Edge
  - Aplicación reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_ML_MediaPipe_spanish
last_update:
  date: 02/18/2025
  author: Erick González
---


# Comenzando con MediaPipe en reTerminal

MediaPipe es un marco de código abierto de Google para construir pipelines multimodales (por ejemplo, video, audio, datos de series temporales) y multiplataforma (Android, iOS, web, dispositivos de borde) aplicados al aprendizaje automático. Está optimizado para un rendimiento con inferencia en el dispositivo de extremo a extremo. MediaPipe está actualmente en desarrollo activo e incluye múltiples demostraciones, que se pueden ejecutar directamente después de instalar MediaPipe en el reTerminal.


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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Preparación del software

Recomendamos instalar la versión **Bullseye** o **Bookworm** de Raspberry Pi 64 bit OS desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). 

:::note

En versiones anteriores del sistema operativo, las bibliotecas de Python se podían instalar directamente a nivel del sistema utilizando pip, el instalador de paquetes de Python. Sin embargo, en la versión de Bookworm, ha habido un cambio. Para evitar posibles problemas durante la instalación, ahora es necesario instalar los paquetes a través de pip en un entorno virtual de Python usando venv.

:::

Ejecuta estos comandos uno por uno, y terminarás con un entorno virtual.

```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
```

## Soluciones ML en MediaPipe

Comienza clonando el repositorio de GitHub en tu dispositivo reTerminal utilizando el siguiente comando:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

Navega a la carpeta que contiene los recursos necesarios. En este directorio, encontrarás cuatro temas que cubriremos.

### Detección de rostros

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **Paso 1** Para nuestro primer tema, instalaremos las dependencias para la detección de rostros. Ve a la sección de detección de rostros usando los siguientes comandos

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

### Detector de puntos de referencia del rostro
<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **Paso 1** Instala las dependencias

```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

```sh
sh setup.sh
```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar el marcador de puntos del rostro.

```sh
python3 detect.py
```

### Detector de puntos de referencia de la mano

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

 - **Paso 1** Instala las dependencias

```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

```sh
sh setup.sh
```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar el marcador de puntos de la mano.

```sh
python3 detect.py
```

### Detector de puntos de referencia de pose

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

 - **Paso 1** Instala las dependencias

```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
```

- **Paso 2** Ejecuta el script de configuración para instalar las dependencias necesarias

```sh
sh setup.sh
```

- **Paso 3** Una vez que la configuración esté completa, puedes ejecutar el archivo fuente para iniciar el marcador de puntos de la pose.

```sh
python3 detect.py
```

## Recursos

- **[Página Web]** [Página oficial de MediaPipe](https://mediapipe.dev/)

- **[Página Web]** [Documentación oficial de MediaPipe](https://google.github.io/mediapipe/)

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

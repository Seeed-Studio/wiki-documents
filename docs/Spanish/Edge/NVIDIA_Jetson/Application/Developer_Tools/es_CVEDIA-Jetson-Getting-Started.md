---
description: Implementa un modelo de IA con CVEDIA-RT en dispositivos NVIDIA Jetson
title: Introducción a CVEDIA-RT
tags:
  - Despliegue de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Primeros pasos con CVEDIA-RT en dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) es un motor de inferencia de IA modular y multiplataforma que proporciona bases sólidas para construir sistemas de soporte de decisiones. Está diseñado desde cero teniendo en cuenta a los desarrolladores e integradores y proporciona interfaces de alto y bajo nivel.

Esta wiki te explicará cómo puedes instalar fácilmente CVEDIA-RT en dispositivos NVIDIA Jetson y comenzar a crear aplicaciones interesantes.

## Hardware soportado

CVEDIA-RT es soportado por las siguientes plataformas:

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

Sin embargo, en esta wiki sólo nos centraremos en cómo implementar CVEDIA-RT en la plataforma NVIDIA Jetson.

## Prerequisitos

- Dispositivo NVIDIA Jetson con NVIDIA JetPack y todos los componentes del SDK instalados y conectados a Internet

  - Hemos testeado esta wiki con la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) corriendo [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC con Windows, Linux o Mac OS y conexión a internet
 
## Descarga el instalador CVEDIA-RT para NVIDIA Jetson

**Paso 1:** Visita [esta página](https://rt.cvedia.com/) y haz click en **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**Paso 2:** Regístrate para obtener una nueva cuenta CVEDIA o inicia sesión con tu cuenta de Google

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**Paso 3:** Haz click en **Download** bajo **NVIDIA Jetson**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**Paso 4:** Haz click en **Docker(Recommended)** para descargar un archivo tar.gz donde viene el instalador de CVEDIA-RT 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## Instalar CVEDIA-RT en una NVIDIA Jetson

**Paso 1:** Mueve el archivo que descargaste antes a una nueva carpeta en el dispositivo Jetson y extrae su contenido

```sh
tar -xzvf <filename.tar.gz>
```

**Paso 2:** Dentro de la carpeta extraída en el dispositivo Jetson, ejecuta el script de instalación

```sh
sudo ./install.sh
```

Responde a las indicaciones del script del instalador según tus necesidades

## Ejecutar CVEDIA-RT en una NVIDIA Jetson

Ejecuta la aplicación

```sh
./run.sh
```

Ahora verás la aplicación CVEDIA-RT abierta de la siguiente manera y ya viene precargada con muchas aplicaciones diferentes listas para usar, como:

- Estimación de multitudes
- Detección de drones
- Detección de caídas
- Ocupación de carriles
- Contador de tipo de vehículo
- Detección de paquetes y más! 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

Si deseas ejecutar CVEDIA-RT localmente sin una conexión a Internet, ejecuta lo siguiente:

```sh
./run.sh -U
```

Sin embargo, es necesario ejecutar una aplicación específica al menos una vez con Internet para que se descarguen los archivos y modelos necesarios.

## Explora las aplicaciones precargadas

Ahora exploraremos un par de aplicaciones que vienen listas para usar y cómo puedes configurarlas.

**Paso 1:** Haz click en **intelligent-transportation-systems** y haz click en el botón **run** al lado de la solución **lane-occupancy**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

Ahora descarga los archivos necesarios, como el archivo de modelo, el archivo de configuración, el archivo de vídeo de ejemplo, e iniciarás la demostración. Aquí verás zonas dibujadas según los carriles y cada zona indicará cuántos vehículos hay dentro de esa zona en particular.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**Paso 2:** Cambia la configuración según tus preferencias dentro de la aplicación, como activar/desactivar cuadros delimitadores y etiquetas, cambiar zonas, colores de zona y más.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**Paso 3:** DETEN o PAUSA la demostración usando los dos íconos al lado de **lane-occupancy** (ocupación de carril)

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**Paso 4:** Haz click en el ícono de ajustes al lado de **lane-occupancy**, haz click en **Edit Source** para cambiar la transmisión de video según tus preferencias

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

Aquí tienes varias opciones para elegir

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**Paso 5:** Una vez que selecciones la fuente de video deseada, puedes hacer click en **Save Instance** para ejecutar la aplicación con la fuente de video que has seleccionado.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**Nota:** Asegúrate de detener la aplicación y ejecutarla nuevamente para que los cambios surtan efecto.

**Paso 6:** De manera similar, puedes navegar a otra solución como **people_walking** en **crowd-estimation** y hacer click en el botón de reproducción para ejecutar la solución.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

Aquí puedes configurar más ajustes y cambiar la transmisión de video tal como se mencionó en la solución anterior.

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## Leer más

CVEDIA-RT ofrece documentación muy detallada y completa. Por lo que es muy recomendable consultarla [haciendo click aquí](http://docs.cvedia.com).

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
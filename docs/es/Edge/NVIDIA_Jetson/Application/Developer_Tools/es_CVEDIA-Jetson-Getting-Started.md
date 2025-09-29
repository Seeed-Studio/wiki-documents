---
description: Desplegar modelo de IA con CVEDIA-RT en dispositivos NVIDIA Jetson
title: Comenzando con CVEDIA-RT
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Comenzando con CVEDIA-RT en dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) es un motor de inferencia de IA modular y multiplataforma que proporciona las bases sólidas para construir sistemas de soporte de decisiones. Está diseñado desde cero pensando en desarrolladores e integradores, proporcionando interfaces tanto de alto como de bajo nivel.

Este wiki explicará cómo puedes instalar fácilmente CVEDIA-RT en la plataforma NVIDIA Jetson y comenzar a construir aplicaciones emocionantes.

## Hardware Soportado

CVEDIA-RT es compatible con las siguientes plataformas:

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

Sin embargo, en este wiki solo nos enfocaremos en cómo desplegar CVEDIA-RT en la plataforma NVIDIA Jetson.

## Prerrequisitos

- Dispositivo NVIDIA Jetson ejecutando NVIDIA JetPack con todos los componentes SDK instalados y conectado a internet

  - Hemos probado este wiki con [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ejecutando [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC host con Windows, Linux o Mac y conectado a internet
 
## Descargar el instalador de CVEDIA-RT para NVIDIA Jetson

**Paso 1:** Visita [esta página](https://rt.cvedia.com/) y haz clic en **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**Paso 2:** Regístrate para una nueva cuenta CVEDIA o inicia sesión con tu cuenta de Google

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**Paso 3:** Haz clic en **Download** bajo **NVIDIA Jetson**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**Paso 4:** Haz clic en **Docker(Recommended)** para descargar el archivo tar.gz que incluye el instalador de CVEDIA-RT 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## Instalar CVEDIA-RT en NVIDIA Jetson

**Paso 1:** Mueve el archivo que descargaste anteriormente a una nueva carpeta en el dispositivo Jetson y extráelo ejecutando

```sh
tar -xzvf <filename.tar.gz>
```

**Paso 2:** Dentro de la carpeta extraída en el dispositivo Jetson, ejecuta el script del instalador

```sh
sudo ./install.sh
```

Responde a las indicaciones en el script del instalador según tus necesidades

## Ejecutar CVEDIA-RT en NVIDIA Jetson

Ejecuta la aplicación

```sh
./run.sh
```

Ahora verás la aplicación CVEDIA-RT abierta como se muestra a continuación y ya viene precargada con muchas aplicaciones diferentes listas para usar como:

- Estimación de multitudes
- Detección de drones
- Detección de caídas
- Ocupación de carriles
- Contador de tipos de vehículos
- Detección de paquetes ¡y más! 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

Si quieres ejecutar CVEDIA-RT localmente sin conexión a internet, ejecuta como sigue

```sh
./run.sh -U
```

Sin embargo, necesitas ejecutar una aplicación específica al menos una vez con internet para que los archivos y modelos necesarios se descarguen

## Explorar las aplicaciones precargadas 

Ahora exploraremos un par de aplicaciones que vienen listas para usar y cómo puedes configurarlas

**Paso 1:**  Haz clic en **intelligent-transportation-systems** y haz clic en el botón de ejecutar junto a la solución **lane-occupancy**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

Ahora descargará los archivos necesarios como el archivo del modelo, archivo de configuración, archivo de video de ejemplo y comenzará la demostración. Aquí verás zonas dibujadas según los carriles y cada zona indicando cuántos vehículos están dentro de esa zona particular. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**Paso 2:** Cambia la configuración según tu preferencia dentro de la aplicación como activar/desactivar cajas delimitadoras y etiquetas, cambiar zonas, colores de zona y más

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**Paso 3:** DETÉN o PAUSA la demostración usando los dos iconos junto a **lane-occupancy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**Paso 4:** Haz clic en el icono de engranaje junto a **lane-occupancy**, haz clic en **Edit Source** para cambiar el flujo de video según tu preferencia

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

Aquí tienes múltiples opciones para elegir

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**Paso 5:** Una vez que selecciones tu fuente de video deseada, puedes hacer clic en **Save Instance** para ejecutar la aplicación con la fuente de video que has seleccionado

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**Nota:** Asegúrate de detener la aplicación y ejecutar nuevamente para que los cambios surtan efecto

**Paso 6:** De manera similar, puedes navegar a otra solución como **people_walking** bajo **crowd-estimation** y hacer clic en el botón de reproducir para ejecutar la solución

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

Aquí puedes configurar ajustes adicionales y cambiar el flujo de video igual que la solución anterior mencionada

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## Aprende más

CVEDIA-RT ofrece documentación muy detallada y completa. Por lo tanto, es altamente recomendable revisarla [aquí](http://docs.cvedia.com).

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
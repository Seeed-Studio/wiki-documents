---
description: Desplegar modelo de IA con Lumeo en dispositivos NVIDIA Jetson
title: Primeros pasos con Lumeo
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Primeros pasos con Lumeo en dispositivos NVIDIA® Jetson

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) es una plataforma de análisis de video sin código que te permite diseñar, desplegar y monitorear rápidamente análisis de video personalizados y otras aplicaciones habilitadas con visión-IA.

Esta wiki te guiará sobre cómo puedes instalar fácilmente Lumeo en la plataforma NVIDIA Jetson y configurarlo como un gateway para que puedas ejecutar pipelines y procesar video desde Streams, cámaras IP en la misma red, o cámaras USB conectadas.

## Hardware soportado

Lumeo es compatible con las siguientes plataformas:

- NVIDIA Jetson
- Servidor x86 con GPU Nvidia
- Instancia GPU en AWS, GCP, Azure, etc

Sin embargo, solo nos enfocaremos en cómo desplegar Lumeo en la plataforma NVIDIA Jetson en esta wiki

## Prerrequisitos

- Dispositivo NVIDIA Jetson ejecutando NVIDIA JetPack con todos los componentes SDK instalados y conectado a internet

  - Hemos probado esta wiki con [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ejecutando [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC host con Windows, Linux o Mac y conectado a internet

## Crear una cuenta de Lumeo

**Paso 1:** Visita [esta página](https://console.lumeo.com/register), ingresa email, contraseña, marca la casilla para aceptar los términos y haz clic en **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**Paso 2:** Después de registrarte para una nueva cuenta, puedes iniciar sesión en tu cuenta con el email y la contraseña creados anteriormente visitando [esta página](https://console.lumeo.com/login)

**Paso 3:** Ingresa un **nombre de organización** y **nombre de workspace** y haz clic en **Start using Lumeo**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

Ahora verás la consola de Lumeo como sigue

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## Instalar Lumeo Gateway en NVIDIA Jetson

**Paso 1:** Ejecuta el script instalador dentro del dispositivo Jetson

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

Responde a las indicaciones en el script instalador según tus necesidades. Puedes mantener todo por defecto aquí

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

Si ves la siguiente salida, eso significa que el instalador se ha completado exitosamente

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>


**Paso 2:** Escribe **Install** junto a la indicación **Enter the command:** para instalar un nuevo contenedor que incluye el gateway

```
Enter the command: 
install
```

**Nota:** Una cuenta gratuita de Lumeo solo permite que se despliegue un gateway. Así que primero necesitas eliminar el gateway en la nube por defecto que viene con Lumeo antes de desplegar tu propio gateway en el dispositivo Jetson. Simplemente ingresa al gateway en la nube precargado y haz clic en **Delete** para eliminar ese gateway.

**Paso 3:** Ingresa un nombre para el contenedor cuando se te solicite e inicia sesión con las credenciales de tu cuenta de Lumeo cuando se te solicite

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**Paso 4:** Después de que la instalación del contenedor haya terminado, escribe **list** para listar el contenedor que acabas de instalar

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**Paso 5:** Escribe **exit** para salir del script en ejecución

Ahora has instalado exitosamente Lumeo Gateway en el NVIDIA Jetson. Si vas a la consola de Lumeo y navegas a **Gateways**, verás el gateway recién desplegado con tecnología Jetson.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**Paso 3:** Haz clic en el Gateway para ver información adicional sobre el gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## Agregar cámaras al gateway

Ahora agregaremos cámaras al gateway que ya hemos configurado en el dispositivo Jetson

**Paso 1:** Conecta una cámara USB a uno de los puertos USB en el dispositivo Jetson o conecta una cámara ONVIF a la misma red que el dispositivo Jetson

**Paso 2:** Bajo el Gateway que configuramos antes, haz clic en **Add Camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**Paso 3:** Intentará descubrir automáticamente todas las cámaras USB conectadas y las cámaras ONVIF en la misma red. Haz clic en **Link** junto a una cámara para agregar la cámara al gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

Si ninguna de las cámaras conectadas es detectada, haz clic en Discover para iniciar el proceso de detección automática nuevamente. Si eso también falla, haz clic en **+ Manually add cameras** y configura todas tus cámaras

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**Paso 4:** Ingresa un **Camera name**, proporciona las credenciales de la cámara si son necesarias para la cámara y finalmente haz clic en **Connect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

Ahora verás la cámara exitosamente vinculada 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**Paso 5:** Haz clic en la cámara vinculada para mostrar una instantánea de vista previa como sigue

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**Paso 6:** Si quieres agregar streams RTSP o HTTP, puedes navegar a **Deploy > Streams**, hacer clic en **Add input stream** y configurar el stream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## Construir un pipeline de detección de personas

Lumeo ofrece muchas soluciones diferentes listas para usar con pipelines preconfigurados y modelos precargados. Intentaremos crear una aplicación simple de detección de personas usando Lumeo.

**Paso 1:** Selecciona **Basics - Detect Objects** dentro de la sección **Design > Solutions**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

Ahora verás la plantilla creada para ti en un estilo basado en bloques que te permite agregar más personalizaciones y características a la solución. Aquí puedes agregar, modificar o eliminar bloques según tu preferencia

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**Paso 2:** Esta plantilla por defecto carga un modelo de **detección de personas**, rastrea los objetos, codifica el video y transmite vía WebRTC. Mantendremos todos los bloques configurados por defecto y haremos clic en **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**Paso 3:** Bajo **Select Gateway**, elige el gateway que has desplegado en el Jetson, selecciona la cámara que has configurado antes y haz clic en **Deploy** para comenzar a desplegar la aplicación al dispositivo Jetson

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

Si el despliegue es exitoso, verás un ícono verde llamado **running**
como sigue

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**Paso 4:** Haz clic en el **botón de reproducir** para ver el stream de salida vía WebRTC

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## Aprende más 

Lumeo ofrece documentación muy detallada y completa. Así que es altamente recomendado revisarla [aquí](https://docs.lumeo.com).

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
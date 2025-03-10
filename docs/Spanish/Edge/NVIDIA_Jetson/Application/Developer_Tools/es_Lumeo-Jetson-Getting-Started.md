---
description: Implementa un modelo de IA con Lumeo en dispositivos NVIDIA Jetson
title: Primeros pasos con Lumeo
tags:
  - Despliegue de modelos de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Primeros pasos con Lumeo en dispositivos NVIDIA® Jetson

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) es una plataforma de análisis de video sin código que te permite diseñar, implementar y monitorear rápidamente análisis de video personalizados y otras aplicaciones habilitadas para visión por computadora basada en IA.

Esta wiki te explicará cómo puedes instalar fácilmente Lumeo en un dispositivo NVIDIA Jetson y configurarlo como puerta de enlace para que puedas ejecutar canalizaciones y procesar video desde Streams, cámaras IP en la misma red o cámaras USB conectadas.

## Hardware soportado

Lumeo es soportado por las siguientes plataformas:

- NVIDIA Jetson
- Servidor x86 con GPU Nvidia
- Instancia de GPU en AWS, GCP, Azure, etc

Sin embargo, en esta wiki sólo nos centraremos en cómo implementar Lumeo en dispositivos NVIDIA Jetson.

## Prerequisitos

- Dispositivo NVIDIA Jetson con NVIDIA JetPack y todos los componentes del SDK instalados y conectados a Internet

  - Hemos testeado esta wiki en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) corriendo [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC con Windows, Linux o Mac OS y conexión a internet

## Crear una cuenta de Lumeo

**Paso 1:** Visita [est página](https://console.lumeo.com/register), ingresa tu email, contraseña, haz click en la checkbox para aceptar los términos y condiciones y haz click en **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**Paso 2:** Después de registrarte para obtener una nueva cuenta, puedes iniciar sesión en tu cuenta con el correo electrónico y la contraseña usados anteriormente visitando [esta página](https://console.lumeo.com/login)

**Paso 3:** En **organization name** ingresa el nombre de la organización a la que perteneces y llena el campo **workspace name** para finalmente presionar el botón **Start using Lumeo**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

Deberías ver la consola de Lumeo como se muestra a continuación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## Instala Lumeo Gateway en tu dispositivo NVIDIA Jetson

**Paso 1:** Corre el script de instalación en tu dispositivo Jetson

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

Responde a las indicaciones del script del instalador según tus necesidades. Puedes mantener todo por defecto aquí

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

Si ves el siguiente resultado, significa que la instalación se ha completado correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>


**Paso 2:** Escribe **Install** junto al mensaje **Enter the command:** para instalar un nuevo contenedor que incluya la puerta de enlace

```
Enter the command: 
install
```

**Nota:** Una cuenta gratuita de Lumeo solo permite implementar una puerta de enlace. Por lo tanto, primero debes eliminar la puerta de enlace en la nube predeterminada que viene con Lumeo antes de implementar tu propia puerta de enlace en el dispositivo Jetson. Simplemente ingresa la puerta de enlace en la nube precargada y haz click en **Delete** para eliminar esa puerta de enlace.

**Paso 3:** Ingresa un nombre para el contenedor cuando se te solicite e inicia sesión con las credenciales de tu cuenta Lumeo cuando te le solicite

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**Paso 4:** Una vez finalizada la instalación del contenedor, escribe **list** para enumerar el contenedor que acabas de instalar.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**Paso 5:** Escribe **exit** para salir del script en ejecución

En este punto has instalado con éxito Lumeo Gateway en tu dispositivo NVIDIA Jetson. Si vas a la consola Lumeo y navegas hasta **Gateways**, verás la puerta de enlace impulsada por Jetson recién implementada.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**Paso 6:** Haz click sobre la puerta de enlace para ver información adicional de la misma.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## Añadir cámaras a la puerta de enlace

Ahora agregaremos cámaras a la puerta de enlace que ya hemos configurado en el dispositivo Jetson.

**Paso 1:** Conecta una cámara USB a uno de los puertos USB del dispositivo Jetson o conecta una cámara ONVIF a la misma red que el dispositivo Jetson 

**Paso 2:** En la puerta de enlace que configuramos antes, haz click en **Add camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**Paso 3:** La Jetson intentará descubrir automáticamente todas las cámaras USB conectadas y las cámaras ONVIF en la misma red. Haz click en **Link** junto a una cámara para agregar la cámara a la puerta de enlace

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

Si no se detecta ninguna de las cámaras conectadas, haz click en **Discover** para iniciar nuevamente el proceso de detección automática. Si eso también falla, haz click en **+ Manually add camerase** y configura todas tus cámaras

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**Paso 4:** Ingresa un **Camera name** (Nombre de cámara), proporciona las credenciales de la cámara si las necesita y finalmente haz click en **Conect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

Ahora verás la cámara vinculada exitosamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**Paso 5:** Haz click en la cámara vinculada para generar una instantánea de vista previa de la siguiente manera

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**Paso 6:** Si deseas agregar secuencias RTSP o HTTP, puedes navegar hasta **Deploy > Streams**, hacer click en **Add input stream** y configurar la secuencia.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## Preparar un pipeline de detección de personas

Lumeo ofrece muchas soluciones diferentes listas para usar con canalizaciones preconfiguradas y modelos precargados. Intentaremos crear una aplicación sencilla de detección de personas utilizando Lumeo.

**Paso 1:** Selecciona **Basics - Detect Objects** en la sección **Design > Solutions**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

Ahora verás la plantilla creada para ti en un estilo basado en bloques que te permite agregar más personalizaciones y funciones a la solución. Aquí puedes agregar, modificar o eliminar bloques según tu preferencia.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**Paso 2:** Esta plantilla carga de forma predeterminada un modelo de **People detection** (Detección de personas), que rastrea los objetos, incluye el video y lo transmite a través de WebRTC. Mantendremos todos los bloques configurados por defecto y haremos click en **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**Paso 3:** En **Select Gateway**, elije la puerta de enlace que implementaste en la Jetson, selecciona la cámara que configuraste antes y haz click en **Deploy** para comenzar a implementar la aplicación en el dispositivo Jetson.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

Si la implementación se realiza correctamente, verás un icono verde llamado **running** tal como se muestra a continuación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**Paso 4:** Haz click en el **botón de play** para observar el output del stream via WebRTC

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## Leer más

Lumeo ofrece documentación muy detallada y completa. Por lo que es muy recomendable consultarla [aquí](https://docs.lumeo.com).

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
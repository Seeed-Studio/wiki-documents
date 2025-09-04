---
title: Codecraft conectando Azure IoT con Wio Terminal
nointro:
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/Azure_IoT_CC
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Codecraft conectando Azure IoT con Wio Terminal

## Introducción

Aquí te mostraremos cómo conectar Codecraft con Azure IoT basado en Wio Terminal y aplicar sensores a proyectos IoT. [Codecraft](https://ide.tinkergen.com/) es una aplicación programable gráfica que se puede usar en línea y sin conexión producida por Seeed. [Azure IoT](https://apps.azureiotcentral.com/) es una plataforma de aplicaciones IoT alojada que es segura, escala contigo a medida que tu negocio crece, y se integra con tus aplicaciones comerciales existentes producida por Microsoft.

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## Comenzando

### Hardware

**Hardware Requerido**

En esta demostración necesitarás los dispositivos listados a continuación:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Cable Type-C x1
- Computadora x1

**Conexión de Hardware**

Se conecta a una computadora a través del cable Type-C.

### Software

**Software Requerido**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### Tutorial

Aquí te mostraremos cómo aplicar Wio Terminal en Codecraft y luego conectar Codecraft con Azure IoT para entrenar un modelo de Aprendizaje Automático y usarlo. El proyecto está basado en la plataforma Arduino lo que significa que se requieren Arduino IDE y varias librerías de Arduino. Si esta es tu primera vez usando el Wio terminal, recomendamos una guía para rápidamente [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

- **Paso 1** Conecta el Wio Terminal con la PC.
- **Paso 2** Abre el [sitio web de Codecraft](https://ide.tinkergen.com/) y conecta con el Wio Terminal

Selecciona "Wio Terminal"

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

Elige "Connect", podría necesitar instalar CodecraftAssistant si es la primera vez que usas Codecraft.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **Paso 3** Arrastra los bloques de la izquierda para construir un programa terminado como el siguiente:

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

Como puedes ver, Wi-Fi y **Azure IoT Central scope id** aquí necesitamos configurar. El Wi-Fi debe estar en el mismo ambiente que el tuyo y en el siguiente paso llenaremos la información de Azure IoT.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **Paso 4** Abre el [sitio web de Azure](https://ide.tinkergen.com/) y **crea una nueva aplicación**

Haz clic en "Build" en el lado izquierdo, la información aquí es personalizada y no muy importante.

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **Paso 5** Haz clic en **"Administration"-->"Device connection"-->"SAS-IoT-Device"** para agregar el Wio Terminal

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **Paso 6** Copia la información que necesitamos en Codecraft y pégala en el programa que construimos

Aquí está la información esencial **"ID Scope", "Primary key", "Device ID"** para Codecraft

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **Paso 7** Sube el programa y ve los resultados

Haz clic en "upload" y sube el programa

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

A veces toma bastante tiempo subir, por favor ten paciencia.

Ve a la página de Azure IoT y haz clic en "Device" --> "SAS-IoT-Device"

Los resultados deberían ser como:

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

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
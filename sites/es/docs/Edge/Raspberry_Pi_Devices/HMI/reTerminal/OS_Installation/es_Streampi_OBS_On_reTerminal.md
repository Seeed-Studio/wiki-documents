---
description: Stream-pi & OBS studio para reTerminal
title: Stream-pi & OBS studio para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Streampi_OBS_On_reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Seeed reTerminal con streampi para control de OBS Studio y control de conveniencia

## Introducción

### ¿Qué es reTerminal? 🤔

El [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) es una placa todo en uno de Raspberry Pi, alimentada por el módulo Raspberry Pi Compute Module 4(CM4), integrada con una pantalla multitáctil tipo panel IPS, equipada con Wi-Fi de banda dual 2.4GHz/5GHz y Bluetooth 5.0, con sistema Linux basado en Raspberry Pi preinstalado, proporcionando almacenamiento de 4 GB de RAM y 32 GB eMMC. Mediante un diseño modular, la placa está equipada con múltiples componentes accesibles y conectores de alta velocidad. Puede ser aplicada de manera ordenada en asistencia doméstica y aplicaciones de desarrollo de IA individual, también realizando funciones de nivel industrial adecuadas para ser una instalación industrial.

Características

- Placa Todo en Uno de Raspberry Pi: Alimentada por RPi CM4 32GB, integrada con pantalla multitáctil IPS, Wi-Fi de banda dual y Bluetooth, sistema Linux compatible preinstalado

- Diseño Modular: Con interfaz de expansión industrial de alta velocidad y conector compatible de 40 pines de Raspberry Pi

- Interfaces y Componentes Ricos: Equipada con puertos USB Type-A, Ethernet Gigabit, micro-HDMI, ranura para tarjeta micro-SD, interfaz de cámara MIPI, sensor de luz, acelerómetro, zumbador, RTC y botones programables

- Asistencia Personal Ordenada: Disfruta de múltiples proyectos de Dashboard o IA interesantes de Seeed y comunidades mientras utilizas sensores y componentes integrados

- Gran Instalación Industrial: Benefíciate del sistema operativo estable basado en Raspberry Pi, múltiples conectores expandidos de nivel industrial, coprocesador criptográfico y la placa de expansión oficial de Seeed reTerminal E10-1

### ¿Qué es streampi? 🤔

Stream-Pi es un software robusto de teclado de macros para artistas, creadores, jugadores y geeks.

Stream-Pi existe como una alternativa adecuada de código abierto ya que ofrece un sistema de temas rico, que los usuarios pueden usar para personalizar cada rincón del sistema de interfaz de usuario con CSS.

Stream-Pi también ofrece una API rica, que los desarrolladores pueden usar para escribir sus propios complementos personalizados, al igual que algunas opciones pagadas y propietarias disponibles actualmente. La gran diferencia aquí es que Stream-Pi es completamente gratuito y de código abierto.

### ¿Qué es OBS Studio? 🤔

OBS Studio es una aplicación gratuita y de código abierto para captura de pantalla y transmisión en vivo. Escrito en C/C++ y construido con Qt, OBS Studio proporciona captura en tiempo real, composición de escenas, grabación, codificación y transmisión a través del Protocolo de Mensajería en Tiempo Real (RTMP). Puede transmitir videos a cualquier destino compatible con RTMP, incluyendo YouTube, Twitch, Instagram y Facebook.

### Las razones por las que hacemos esto 🤨

Hemos encontrado que la pantalla integrada del reterminal, el excelente rendimiento y el soporte para el ecosistema relacionado con Raspberry Pi hacen que sea fácil implementar controles inteligentes y convenientes como una herramienta de productividad.

Así que, ¡síguenos y pruébalo! 😊

## Instalación 🐱‍🚀

- Preparación del hardware
  - reTerminal
  - PC

Para estabilizar nuestro tutorial se basa en ubuntu 18.04, también disponible para otros sistemas, como windows, mac y otras distribuciones de linux.

### Instalar OBS studio ⌛

Hay dos formas de hacer esto, usando un paquete precompilado o compilándolo tú mismo, la **forma recomendada es usar un paquete precompilado** que está probado y siempre disponible. Si quieres probar las últimas características, puedes seguir el proceso oficial de compilación de obs, sin embargo, puede tener algunos problemas imprevistos debido a las dependencias de un gran número de paquetes.

#### Usando paquetes precompilados

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### OBS Personalizado

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### Instalar el plugin websocket para OBS studio

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Instalando el servidor stream pi (aquí en la PC)

[Versiones Recomendadas](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### Instalando el cliente stream pi (aquí en reTerminal)

[Versiones Recomendadas](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## Interacción cliente-servidor de streampi

### Lanzar servicios

En nuestro reTerminal

```bash
cd Stream_pi_client
./run_desktop
```

En nuestra PC (Ubuntu)

Simplemente haz clic en el icono

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### Define la función 😏

1. Abre el servidor streampi

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. Haz clic en archivo -> configuración -> general

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. Establece la dirección del servidor streampi, el tamaño de la caja y haz clic en guardar

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. Conectando a los servicios obs

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. En el cliente reterminal configura la dirección del servidor como la dirección ip de la pc y haz clic en guardar y conectar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. Regresa al servidor streampi y arrastra la pestaña correspondiente a la caja correspondiente para lograr la función correspondiente

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. También podemos escribir comandos directamente para implementar llamadas de programa, cambiar iconos de visualización, cambiar nombres de visualización, tamaños de caja y lograr más

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. Agregando una vista de pantalla y la fuente de imagen correspondiente al software obs studio

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. Finalmente podemos hacer clic en el reterminal para completar el control correspondiente 👍👍👍

    - Esta es la interfaz que tenemos en ReTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - Esta es la interfaz que tenemos en PC

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - Apariencia del reTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

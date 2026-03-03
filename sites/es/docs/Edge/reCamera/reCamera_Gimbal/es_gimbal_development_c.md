---
description: Comandos básicos de linux para reCamera
title: Desarrollo profundo con C
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /es/gimbal_development_c
sidebar_position: 4
last_update:
  date: 4/15/2025
  author: Parker Hu & Dawn Yao
---

# Desarrollo profundo de Gimbal con C

Hay tres enfoques para desarrollar para reCamera Gimbal:

1. **Desarrollo de lógica de aplicación usando nodos Node-RED**
2. **Scripting Bash usando herramientas can-utils a través de comandos de terminal**  
3. **Programación en C que requiere configuración de entorno de compilación cruzada y compilación de binarios**

Este documento proporcionará una guía completa sobre cómo desarrollar para reCamera Gimbal usando programación en C.

Para desarrollo basado en Node-RED, consulte:  
[Documentación de desarrollo Node-RED](https://wiki.seeedstudio.com/es/recamera_gimbal_node_red/)

Antes de desarrollar, necesita instalar el entorno de compilación cruzada en su entorno de desarrollo.

Linux:

```bash
sudo apt-get update
sudo apt-get install can-utils

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.0/reCameraOS_sdk_v0.2.0.tar.gz

tar -xzvf reCameraOS_sdk_v0.2.0.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```
## Descargar el programa de ejemplo

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
La estructura de directorios se muestra de la siguiente manera:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

Necesita modificar el Makefile para reemplazar la variable CC con su propia cadena de herramientas de compilación cruzada.

```bash
CC = $HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
```

## Compilar el programa

```bash
cd CAN/can_send
mkdir build && cd build
cmake ../
make
```

Subir el binario compilado a reCamera

```bash
scp can_send recamera@ip_address:/home/recamera
```

Use `candump can0` para ver los datos del bus CAN
Use `sudo ./can_send` para probar el script

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## Análisis del programa

Estos comandos se usan para configurar la velocidad del bus CAN y el estado de la interfaz, que solo necesitan ser inicializados una vez en la aplicación.

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
Como se muestra, en el archivo can_send.c, los comandos anteriores se llaman usando la función system.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

Necesita definir una estructura de trama CAN para almacenar el ID de la trama CAN, la longitud de datos y los datos.
Y usar la función memset para limpiar la estructura de trama CAN a cero.

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

Puede configurar can_id y can_dlc para configurar el ID de la trama CAN y la longitud de datos.
Este es el formato de datos de trama CAN estándar.
Usando `nbytes = write(s, &frame, sizeof(frame));` para enviar la trama CAN al bus CAN, devuelve el número de bytes enviados. Puede comparar el valor devuelto con el número esperado de bytes para determinar si la trama CAN se envió exitosamente.

```c
 //5.Set send data
    frame.can_id = 0x141;
    frame.can_dlc = 8;
    frame.data[0] = 0x80;
    frame.data[1] = 0x00;
    frame.data[2] = 0x00;
    frame.data[3] = 0x00;
    frame.data[4] = 0x00;
    frame.data[5] = 0x00;;
    frame.data[6] = 0x00;
    frame.data[7] = 0x00
```

Puede consultar más programas en C en nuestro [repositorio de Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src).

Tenga en cuenta que los programas relacionados con Gimbal se desarrollan basándose en componentes Node-RED. Solo mantendremos programas Node-RED en el futuro, por lo que puede referenciar y desarrollar directamente en Node-RED.

Dado que los programas en C no se mantienen, pueden volverse inválidos a medida que se actualiza el firmware del motor. Use nuestro [manual de motor más reciente](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) para encapsular los comandos correctos para el desarrollo.


## Recursos

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
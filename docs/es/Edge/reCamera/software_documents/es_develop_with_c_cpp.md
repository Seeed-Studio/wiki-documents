---
description: Proporciona documentación e información para desarrolladores de C/C++
title: Desarrollar con C/C++
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
---

# Desarrollar en reCamera con c&cpp

## Configuración del Entorno
Recamera tiene recursos limitados y no tiene configurado un entorno de compilación para código C. Si quieres usar C/C++ para desarrollar aplicaciones en la recamera, necesitas configurar el entorno de compilación cruzada (Compilar el programa C/C++ en otro Linux, luego transferir el archivo compilado al terminal de recamera para su ejecución). Si estás usando Windows, puedes instalar Windows Subsystem for Linux (WSL) para ejecutar Linux (Ubuntu, OpenSUSE, Kali, Debian, o Arch Linux).

 **Paso1**: Configurar el entorno de compilación en otro Linux

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.5/reCameraOS_sdk_v0.1.5.tar.gz

tar -xzvf reCameraOS_sdk_v0.1.5.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```

**Paso 2**: Compilar el programa de instancia o el programa que deseas ejecutar en Linux. Ten en cuenta que el directorio "build" creado debe estar ubicado en el directorio raíz del proyecto ("build" debe estar al mismo nivel que "CMakeLists.txt").

```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

Puedes ver las propiedades del archivo escribiendo `file helloworld`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

El "helloworld" verde (con el mismo nombre que la carpeta del programa) es el archivo ejecutable compilado.

**Paso 3**: En este paso, transferiremos el archivo ejecutable compilado al terminal Linux de la recamera para ejecutarlo.
Primero, necesitamos iniciar sesión en el terminal de la recamera. Puedes usar la versión web como se muestra a continuación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

Alternativamente, puedes usar software de acceso remoto (por ejemplo, MobaXterm) para conectarte a la recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

Luego, escribe el siguiente código en tu Linux (se requiere contraseña):

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

El archivo ejecutable ha sido transferido exitosamente.

**Paso 4**: Ejecuta tu archivo ejecutable en la terminal de recamera.

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

Ejecución exitosa.

## Más demos construidos con c&cpp

### ​Usar Recamera para Capturar Video en Streaming

Proporcionamos más demos de C/C++ para recamera. Puedes clonarlos desde GitHub: https://github.com/Seeed-Studio/sscma-example-sg200x. Es posible que ya los hayas clonado en el "Paso 1".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo** es una aplicación de ejemplo que demuestra cómo usar la **recamera** para capturar fotogramas de video, guardarlos en diferentes formatos y transmitir video a través de RTSP (Protocolo de Transmisión en Tiempo Real).
Puedes seguir el "Paso 2" para compilar y el "Paso 3" para subirlo al terminal de recamera.
*Nota*: Antes de ejecutar el programa en el terminal de recamera, necesitas iniciar sesión en el espacio de trabajo de recamera (http://192.168.42.1/#/workspace) y terminar el Flow, ya que este programa consume recursos significativos de caché.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

Necesitas ejecutar el programa con privilegios de superusuario para prevenir fallos en la asignación de memoria.

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

La salida de ejecución exitosa se muestra arriba.
Anotaciones de Parámetros de Salida:
1. El video se inicializa y configura para tres canales con diferentes formatos y velocidades de fotogramas:
   - **Canal 0**: formato RGB888, resolución 1920x1080, 10 FPS
   - **Canal 1**: formato NV21, resolución 1920x1080, 5 FPS
   - **Canal 2**: formato H.264, resolución 1920x1080, 30 FPS
2. Dependiendo del canal:
   - Para **Canal 0** y **Canal 1**: Los fotogramas se guardan en formatos RGB y NV21, respectivamente.
   - Para **Canal 2**: Los fotogramas se transmiten por RTSP.

Para ver y guardar la transmisión RTSP, puedes descargar el reproductor multimedia VLC y conectarte al flujo de red en: rtsp://192.168.42.1:8554/live0.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

La latencia de la transmisión RTSP está dentro de aproximadamente 2 segundos.

La aplicación se ejecuta indefinidamente hasta ser interrumpida (Ctrl C). La aplicación configura manejadores de señales para salir elegantemente al recibir señales de terminación (SIGINT, SIGTERM).

Este ejemplo sirve como una introducción básica al uso de la recamera para procesamiento y transmisión de video. Los usuarios pueden modificar el código y adaptarlo para sus necesidades específicas, experimentando con diferentes formatos de video y configuraciones de transmisión.

Para más detalles, consulta nuestro [repositorio de GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Soporte Técnico y Discusión de Productos

Gracias por elegir nuestros productos. Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

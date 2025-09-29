---
description: Esta wiki proporciona un tutorial sobre cómo usar NVStreamer para transmisión de video RTSP en reComputer Jetson.
title: Primeros Pasos con NVStreamer
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/getting_started_with_nvstreamer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---
# Cómo Usar NVStreamer para Transmisión RTSP en reComputer con Jetson Platform Services

## Introducción
[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html) es un software desarrollado por NVIDIA que puede almacenar y servir archivos de video, los cuales pueden luego transmitirse usando el protocolo RTSP. Es particularmente útil para pruebas con VST, ya que proporciona un método alternativo a las cámaras para crear fuentes de video como entrada para VST. Específicamente, ofrece un mecanismo para usar archivos de video específicos como entrada para pruebas de VST. VST puede configurarse para recibir transmisiones RTSP como si vinieran de cámaras ONVIF-S.

Esta wiki proporciona un tutorial sobre cómo usar NVStreamer para transmisión de video RTSP en [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerrequisitos
Antes de proceder con el proceso de configuración, asegúrese de que su sistema cumpla con los siguientes prerrequisitos:
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

- Un reComputer J4012 Orin NX 16G ejecutando Ubuntu `22.04` o `posterior`.
- El sistema Linux debe tener suficiente espacio disponible para almacenar los archivos de video que servirá (típicamente varios cientos de GB).
- Versión del Driver: `535.113.01`, Jetpack `6.0` y Versión de CUDA: `12.2`.
- Asegúrese de que `JetPack` y los paquetes relacionados de `Jetson services` estén instalados.
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## Primeros Pasos

### Instalación e Inicio

**Paso 1**: Descargue el paquete de aplicación **`nvstreamer-1.1.0.tar.gz`** desde NGC a su Jetson usando este enlace: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Necesitará ingresar sus credenciales de NGC. En la página, use una de las opciones disponibles en el menú **`Download`** (esquina superior derecha):

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**Paso 2**: Ejecute los siguientes comandos para aumentar el tamaño del buffer de socket del sistema operativo. Esto es para evitar pérdida de paquetes en casos de videos con altas tasas de bits o marcos IDR grandes. Sin aumentar estos tamaños de buffer, a veces puede ver artefactos en bloques en algunos archivos de video:

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**Paso 3**: Inicie NVStreamer usando la siguiente línea de comandos:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

Para terminar la instancia de NVStreamer, use el siguiente comando:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### Subir Video a NVStreamer
**Paso 1**: Abra un navegador web (recomendamos usar Chrome) y navegue a esta dirección (en el mismo sistema u otro sistema en la misma red).

```markdown
http://[reComputer-IP]:31000
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**Paso 2**: Seleccione **`File Upload`** y elija el archivo de video de disco que desea probar como cámara (códecs soportados: h264/h265, contenedores: mp4/mkv). Arrástrelo y suéltelo en el área indicada. Si el archivo de video contiene B-frames, NVStreamer transcodificará automáticamente el archivo, lo cual puede tomar algunos minutos dependiendo del tamaño del archivo.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**Paso 3** Una vez que el archivo se haya subido exitosamente, una barra de progreso verde en la esquina inferior izquierda se completará, indicando el final del proceso de subida. Luego, comenzará el proceso de transcodificación. Después de completarse, el nombre del archivo se mostrará en gris, y una transmisión RTSP con el nombre del archivo se creará automáticamente.

<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

El tutorial de transmisión RTSP termina en este paso. Copie o anote la dirección RTSP (incluyendo "rtsp://"; asegúrese de que no haya espacios antes). Necesitará ingresar esta dirección en otra interfaz de usuario discutida en el siguiente paso.

### Agregar Transmisión RTSP a VST

**Paso 1**: Acceda al servidor web VST aquí: **`http://[JETSON-IP]:30080/vst/`**, (Nota: HTTP, no HTTPS) donde `[JETSON-IP]` es la dirección IP del dispositivo Jetson en el cual está ejecutando el contenedor docker.

 Verá una UI similar a esta:
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- Si falla al iniciar, ingrese lo siguiente en la terminal:

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**Paso 2**: Haga clic en la pestaña **`Camera Management`** y haga clic en **`RTSP`**, pegue la dirección RTSP copiada de la UI de NVStreamer en el cuadro **`rtsp url`**. Llene los campos **`location`** y **`name`** con la misma cadena (se convertirá en el nombre de la cámara) y presione **`Submit`**.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**Paso 3**: Ahora puede hacer clic en la **`pestaña Streams`** para ver el archivo.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## Más Detalles
- NVStreamer en Jetson Orin: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
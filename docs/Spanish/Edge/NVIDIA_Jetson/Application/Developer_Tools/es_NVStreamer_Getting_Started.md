---
description: Esta wiki proporciona un tutorial sobre cómo utilizar NVStreamer para la transmisión de video RTSP en una reComputer Jetson.
title: Primeros pasos con NVStreamer
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
# Cómo utilizar NVStreamer para transmisión RTSP en una reComputer con dispositivos NVIDIA Jetson

## Introducción
[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html) es un software desarrollado por NVIDIA que puede almacenar y servir archivos de vídeo, que luego se pueden transmitir mediante el protocolo RTSP. Es particularmente útil para realizar pruebas con VST, ya que proporciona un método alternativo a las cámaras para crear fuentes de vídeo como entrada para VST. Específicamente, ofrece un mecanismo para utilizar archivos de video específicos como entrada para pruebas VST. VST se puede configurar para recibir transmisiones RTSP como si vinieran de cámaras ONVIF-S.

Esta wiki proporciona un tutorial sobre cómo usar NVStreamer para la transmisión de video RTSP en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerequisitos
Antes de continuar con el proceso de configuración, asegúrate de que tu sistema cumpla con los siguientes prerequisitos:
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- Una reComputer J4012 Orin NX 16G con Ubuntu `22.04` o `posterior`.
- El sistema Linux debe tener suficiente espacio disponible para almacenar los archivos de vídeo que va a servir (normalmente varios cientos de GB).
- Versión drivers: `535.113.01`, Jetpack `6.0` y versión CUDA: `12.2`.
- Asegúrate de que `JetPack` y los servicios `Jetson` relacionados estén instalados correctamente.
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## Primeros pasos

### Instalación y puesta en marcha

**Paso 1**: Descarga el paquete **`nvstreamer-1.1.0.tar.gz`** de NGC en tu Jetson usando este enlace: [Recursos y flujo de trabajo de referencia de NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Deberás ingresar tus credenciales de NGC. En la página, usa una de las opciones disponibles en el menú **`Download`** (esquina superior derecha):

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**Paso 2**: Ejecuta los siguientes comandos para aumentar el tamaño del búfer del socket del sistema operativo. Esto es para evitar la pérdida de paquetes en casos de vídeos con altas velocidades de bits o fotogramas IDR grandes. Sin aumentar estos tamaños de búfer, es posible que a veces veas afectaciones en bloques de algunos archivos de vídeo:

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**Paso 3**: Inicia NVStreamer usando la siguiente línea de comando:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

Para finalizar la instancia de NVStreamer, utiliza el siguiente comando:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### Subir el video a NVStreamer
**Paso 1**: Abre un navegador web (recomendamos usar Chrome) y navega hasta esta dirección (en el mismo sistema o en otro sistema en la misma red).

```markdown
http://[reComputer-IP]:31000
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**Paso 2**: Selecciona **`File upload`** y elige el archivo del disco de video que deseas probar como cámara (códecs compatibles: h264/h265, contenedores: mp4/mkv). Arrástralo y suéltalo en el área indicada. Si el archivo de vídeo contiene fotogramas B, NVStreamer transcodificará automáticamente el archivo, lo que puede tardar unos minutos dependiendo del tamaño del archivo.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**Paso 3** Una vez que el archivo se haya cargado correctamente, se completará una barra de progreso verde en la esquina inferior izquierda, lo que indica el final del proceso de carga. Entonces, comenzará el proceso de transcodificación. Una vez completado, el nombre del archivo se mostrará en gris y se creará automáticamente una secuencia RTSP con el nombre del archivo.

<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

El tutorial de transmisión RTSP finaliza en este paso. Copia o anota la dirección RTSP (incluido "rtsp://"; asegúrate de que no haya espacios delante). Deberás ingresar esta dirección en otra interfaz de usuario que se analiza en el siguiente paso.

### Añadiendo RTSP Stream a VST

**Paso 1**: Accede al servidor web VST aquí: **`http://[JETSON-IP]:30080/vst/`**, (Nota: HTTP, no HTTPS) donde `[JETSON-IP]` es la dirección IP del dispositivo Jetson en el que estás ejecutando el contenedor acoplable.

Verás una UI similar a la mostrada a continuación:
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- Si no se inicia, ingresa lo siguiente en la terminal:

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**Paso 2**: Haz click en la pestaña **`Camera management`** y haz click en **`RTSP`**, pega la dirección RTSP copiada de NVStreamer UI en el cuadro **`rtsp url`**. Completa los campos **`location`** y **`name`** con la misma cadena (se convertirá en el nombre de la cámara) y presiona **`Submit`**.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**Paso 3**: Ahora puedes hacer click en **`Streams tab`** para ver el archivo.
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## Más detalles
- NVStreamer en la Jetson Orin: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

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
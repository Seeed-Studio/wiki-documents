---
description: Este ejemplo demuestra cómo realizar el reconocimiento de códigos QR en tiempo real en reCamera y enviar fotogramas de vídeo y resultados de reconocimiento a un PC mediante UDP para su visualización.
title: Reconocimiento de códigos QR en tiempo real en reCamera
keywords:
  - reCamera
  - Código QR
  - Reconocimiento de códigos QR
  - Reconocimiento en tiempo real
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 07/08/2026
  author: QiYao Lin
createdAt: '2026-06-15'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/recamera_qrcode_udp/
---

# Reconocimiento de códigos QR en tiempo real en reCamera

## Introducción

Este ejemplo muestra cómo configurar un **sistema de reconocimiento de códigos QR en tiempo real** usando reCamera. El sistema captura fotogramas de vídeo en tiempo real con la cámara, decodifica los códigos QR utilizando la biblioteca **Quirc** y envía los fotogramas de vídeo y los resultados de reconocimiento a un PC para su visualización mediante los protocolos **RTSP** y HTTP.

**Características clave**:
- Captura de cámara y reconocimiento de códigos QR en tiempo real
- Admite modo de flujo de vídeo y modo de imagen única
- Envía fotogramas JPEG + resultados de reconocimiento al PC mediante RTSP
- Script de Python en el PC para mostrar en tiempo real el vídeo y los resultados

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.gif" /></div>

## Cómo funciona

### Modo de separación de flujo de vídeo + resultado de detección de código QR

Este ejemplo adopta una arquitectura que separa la "transmisión de vídeo en tiempo real" y la "consulta asíncrona de resultados de detección de códigos QR". El lado de reCamera se encarga de capturar imágenes de la cámara, enviar el flujo de vídeo RTSP y ejecutar un hilo independiente de detección de códigos QR dentro del dispositivo. El lado del PC obtiene el vídeo en tiempo real mediante RTSP y, al mismo tiempo, accede a los últimos resultados de detección de códigos QR a través de una interfaz HTTP.

El proceso de reconocimiento en tiempo real es el siguiente:

- Captura de la cámara: reCamera captura imágenes de la cámara a través de la interfaz de vídeo SG2002 y configura simultáneamente dos canales de vídeo.
- Transmisión de vídeo RTSP: Un canal de vídeo se codifica como H.264 y se transmite en tiempo real mediante RTSP a los dispositivos en el mismo segmento de red. El PC puede extraer y mostrar directamente el flujo de vídeo en tiempo real utilizando la dirección RTSP.
- Adquisición de fotogramas para detección de código QR: El otro canal de vídeo genera fotogramas de imagen NV21 de baja resolución para la detección de códigos QR. El programa utiliza únicamente el plano Y de NV21 como imagen en escala de grises de entrada para el detector de códigos QR, evitando la sobrecarga adicional de conversión a RGB.
- Caché en cola del fotograma más reciente: El hilo de detección de códigos QR está desacoplado de la devolución de llamada de captura de vídeo. La devolución de llamada de captura no realiza directamente la detección de códigos QR, sino que coloca el último fotograma en escala de grises en una cola de longitud 1. Cuando la velocidad de procesamiento del hilo de detección es más lenta, los fotogramas nuevos sobrescriben a los antiguos, garantizando que en la cola solo se conserve siempre el fotograma más reciente y evitando el aumento de latencia debido a la acumulación de tareas de detección.
- Detección asíncrona de códigos QR: El hilo de detección de códigos QR obtiene una imagen de la cola del último fotograma y utiliza la biblioteca de reconocimiento de códigos QR quirc para la detección y decodificación. Dado que el proceso de detección se ejecuta en un hilo independiente, no bloquea la transmisión de vídeo RTSP.
- Caché de resultados: Después de cada detección, el programa actualiza los últimos resultados de detección de códigos QR, incluyendo si se detectó un código QR, el contenido del código QR, la duración de la detección, frame_id, PTS, hora de captura, hora de finalización de la detección y las coordenadas del cuadro delimitador del código QR.
- Consulta de resultados por HTTP: Los dispositivos en el mismo segmento de red pueden obtener el resultado de detección de código QR más reciente realizando una petición GET a `/api/qr/latest`. Esta interfaz solo devuelve el estado de la detección más reciente y no bloquea el flujo de vídeo ni transmite activamente colas históricas de detección.
- Visualización en el PC: El cliente de Windows muestra el flujo de vídeo en tiempo real en el lado izquierdo mediante RTSP y, en el lado derecho, consulta periódicamente `/api/qr/latest` por HTTP para mostrar los resultados de detección de códigos QR más recientes y el tiempo de detección. Si los resultados devueltos incluyen las coordenadas del cuadro delimitador del código QR, el cliente escalará y superpondrá los cuadros de detección sobre el flujo de vídeo RTSP.

El enlace de datos es el siguiente:

```text
reCamera
├── RTSP Video Stream
│   └── Address:
│       rtsp://<device-ip>:8554/live0
│
└── QR Code Detection Result HTTP API
    └── Address:
        http://<device-ip>:8080/api/qr/latest
```

Este diseño desacopla la transmisión de vídeo de alta inmediatez del proceso de detección de códigos QR, que es relativamente más lento. El flujo de vídeo RTSP puede mantener una salida continua, mientras que el hilo de detección de códigos QR solo procesa el fotograma más reciente. Incluso si la detección de códigos QR tarda mucho tiempo, no provocará tirones en el vídeo ni acumulación en la cola de detección.

## Configuración de la demostración

Para configurar esta demostración, necesitarás:

1. Compilar de forma cruzada el programa en C++ en tu PC.
2. Ejecutar el ejecutable compilado en la reCamera.
3. Ejecutar el script receptor en Python en tu PC.

### 1. Compilar el programa en C++

Antes de compilar esta solución, debes configurar el entorno de recamera. Puedes descargar directamente las bibliotecas precompiladas correspondientes desde:

```text
https://codeload.github.com/Seeed-Studio/sscma-example-sg200x/tar.gz/refs/tags/0.2.4
````
Descomprime y configura las variables de entorno:
```bash
export SG200X_SDK_PATH=<PATH_TO_RECAMERA-OS>/output/sg2002_recamera_emmc/
export PATH=<PATH_TO_RECAMERA-OS>/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clona el repositorio de reconocimiento de códigos QR y navega al directorio de la solución correspondiente para compilar. Ejecuta los siguientes comandos secuencialmente en la terminal de tu PC.

```bash
git clone https://github.com/yyling0101-a11y/qrcode_rec.git
cd /qrcode_rec/
```

El directorio del repositorio después de clonar tendrá el siguiente aspecto:
```text
(base) yylin@LAPTOP-TI348HL9:~/qrcode_rec$ tree -L 2 -I "build"
.
├── CMakeLists.txt
├── main
│   ├── CMakeLists.txt
│   ├── frame_sei.cpp
│   ├── frame_sei.hpp
│   ├── frame_sync.cpp
│   ├── frame_sync.hpp
│   ├── http_server.cpp
│   ├── http_server.hpp
│   ├── latest_frame_queue.hpp
│   ├── main.cpp
│   ├── placeholder
│   ├── qr_detector.cpp
│   ├── qr_detector.hpp
│   ├── qr_result_store.cpp
│   ├── qr_result_store.hpp
│   ├── qr_worker.cpp
│   ├── qr_worker.hpp
│   ├── rtsp_demo.cpp
│   ├── rtsp_demo.h
│   └── third_party
└── recamera_qr_win_client
    ├── README.md
    ├── recamera_qr_viewer.py
    └── requirements.txt
```

El directorio `main` contiene el código fuente que se ejecutará en la recamera, y `recamera_qr_win_client` contiene el código fuente para la visualización de resultados que se ejecutará en dispositivos x86. Antes de compilar, debes modificar el directorio especificado en el archivo `CMakeLists.txt` del directorio principal para que apunte al directorio donde descomprimiste el paquete precompilado descargado en el paso anterior.

Inicia la compilación:
```bash
mkdir build && cd build
cmake ..
make
```

Tras una compilación correcta, el archivo ejecutable se ubicará en `build/qrcode_rec`. Usa el comando `scp` para subirlo al directorio `/home/recamera/` de tu reCamera:

```bash
sudo scp qrcode_rec recamera@192.168.42.1:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
Introduce la contraseña de la plataforma correspondiente cuando se te solicite para completar la transferencia de `qrcode_rec`.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/make.png" /></div>


### 2. Configurar la reCamera

:::warning
Antes de ejecutar el programa en C++, debes detener los servicios predeterminados de Node-RED, ya que ocuparán los recursos de la cámara. Ejecuta los siguientes comandos mediante SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Ejecutar el ejecutable en la reCamera

A continuación, ejecuta el siguiente comando para otorgar permisos de ejecución:

```bash
chmod +x qrcode_udp
```

#### Comando de ejemplo

Puedes iniciar el programa ejecutando este comando directamente en la terminal de la reCamera.
```bash
sudo ./qrcode_rec
```

Los registros de inicio correctos tendrán un aspecto similar a este:

```
[recamera@reCamera]~$ sudo  ./qrcode_rec
Password:
prio:0
rtsp://192.168.4.5:8554/live0
[rtsp] session name=live0 channel=2 codec=1 result=0 session=0x3fe0c53210
ISP Vipipe(0) Allocate pa(0x8cf31000) va(0x0x3fe072f000) size(311584)
awbInit ver 6.9@2021500
0 R:1400 B:3100 CT:2850
1 R:1500 B:2500 CT:3900
2 R:2300 B:1600 CT:6500
Golden 1024 1024 1024
WB Quadratic:0
isWdr:0
ViPipe:0,===OV5647 1080P 30fps 10bit LINE Init OK!
********************************************************************************
cvi_bin_isp message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

PQBIN message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

author:        hongtai.liu    desc:          Seeed OV5647
createTime:    2025-08-14 14:37:24version:       V1.1
tool Version:       v3.0.8.6            mode: M
********************************************************************************
20260708 03:45:31.704 2248 E isp AF_SetAttr:558 pstFocusMpiAttr is NULL

reCamera QR scanner is running
RTSP      : rtsp://192.168.4.5:8554/onvif
QR latest : http://192.168.4.5:8080/api/qr/latest
Health    : http://192.168.4.5:8080/api/health

[http] listening on 0.0.0.0:8080
0 R:1008 B:2206 CT:2777
1 R:1313 B:1866 CT:3894
2 R:1609 B:1206 CT:7164
Golden 1313 1024 1866
wdrLEOnly:1

```


### 4. Ejecutar el receptor en Python en el PC

En tu PC, necesitas instalar las dependencias de entorno correspondientes para la herramienta de visualización.

```bash
cd qrcode_rec/recamera_qr_win_client
pip install -r ./requirements.txt
```

Luego, ejecuta directamente el programa en Python con el siguiente comando. Debes cambiar la dirección IP correspondiente por la dirección IP de tu reCamera.

```bash
# in powershell
python recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest

# in linux
python3 recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest
```

#### Parámetros del receptor en Python

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--rtsp` | RTSP address | `192.168.4.5` |
| `--qr-url` | URL to get recognition results | `http://192.168.4.5:8080/api/qr/latest` |


### En la ventana del receptor de Python

El PC mostrará una ventana de vídeo en tiempo real, que incluye:
- Flujo de vídeo JPEG
- Resultados de reconocimiento
- El JSON sin procesar devuelto por HTTP
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.png" /></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestro producto. Nos comprometemos a ofrecerte diversas formas de soporte para garantizar que tu experiencia sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
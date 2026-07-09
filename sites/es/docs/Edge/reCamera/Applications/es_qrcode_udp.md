---
description: Esta demostración muestra cómo realizar reconocimiento de códigos QR en tiempo real en reCamera y transmitir los fotogramas de vídeo junto con los resultados de reconocimiento a un PC vía UDP para su visualización.
title: Reconocimiento de códigos QR en tiempo real en reCamera
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - ZXing
  - UDP Streaming
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 06/12/2026
  author: Xuanjun Zhu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/recamera_qrcode_udp/
---

# Reconocimiento de códigos QR en tiempo real en reCamera

## Introducción

Este ejemplo demuestra cómo construir un **sistema de reconocimiento de códigos QR en tiempo real** usando reCamera. El sistema captura fotogramas de vídeo en vivo a través de la cámara, decodifica códigos QR usando la biblioteca **ZXing**, y envía los fotogramas de vídeo (JPEG) junto con los resultados de reconocimiento a un PC vía **UDP** para su visualización.

**Características clave**:
- Captura de cámara y reconocimiento de códigos QR en tiempo real
- Soporta tanto el modo de transmisión de vídeo como el modo de imagen única
- Envía fotogramas JPEG + resultados de reconocimiento al PC vía UDP
- Estadísticas de rendimiento detalladas (FPS de captura, FPS de decodificación, tiempo medio de decodificación)
- Script receptor en Python en el PC para visualización en tiempo real de vídeo y resultados

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" /></div>

## Cómo funciona

### Modo de transmisión de vídeo (predeterminado)

El flujo de reconocimiento en tiempo real es el siguiente:

1. **Captura de cámara**: Captura fotogramas RGB888 (por defecto 640×480) a través de la interfaz de cámara `sscma-micro`
2. **Conversión a escala de grises**: Convierte la imagen RGB888 a escala de grises (requerido para el reconocimiento de códigos QR)
4. **Decodificación con ZXing**: Usa `MultiFormatReader` + `HybridBinarizer` para la detección y decodificación de códigos de barras (por defecto `TryHarder` está desactivado para mantener el rendimiento en tiempo real)
5. **Salida de resultados**: Imprime el contenido decodificado en la terminal cuando se detecta un nuevo código QR
6. **Envío por UDP**: Envía el fotograma JPEG + resultado de reconocimiento al PC vía el componente `SeSg stream_udp`

En escenarios de vídeo, ZXing incurre en una sobrecarga de búsqueda significativa cuando "no se encuentra ningún código". Para garantizar el rendimiento en tiempo real, el programa utiliza una estrategia de limitación de decodificación de 150 ms: realiza la decodificación una vez cada 150 ms en lugar de en cada fotograma. Esto reduce drásticamente la carga de CPU sin comprometer la experiencia de reconocimiento.

## Configuración de la demostración

Para configurar esta demostración, necesitas:

1. Compilar de forma cruzada el programa en C++ en tu PC
2. Ejecutar el ejecutable compilado en la ReCamera
3. Ejecutar el script receptor en Python en tu PC

### 1. Compilar el programa en C++

:::note
Antes de compilar esta solución, asegúrate de haber configurado el entorno **ReCamera-OS** (versión 0.2.1 o posterior) de acuerdo con la [documentación principal del proyecto](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp/), incluyendo la ruta del SDK y la cadena de herramientas de compilación cruzada.
:::

Configura la variable de entorno para la cadena de herramientas de compilación cruzada:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clona el repositorio y navega al directorio de la solución para compilar. Ejecuta los siguientes comandos paso a paso en la terminal de tu PC. Si ya has descargado y configurado el entorno de compilación cruzada siguiendo la documentación de [Developing with C/C++](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp/), puedes ejecutar directamente los comandos de compilación que aparecen a continuación.

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
## compile cmd
rm -rf build && mkdir build && cd build 
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

Después de la compilación, el ejecutable se encuentra en `build/qrcode_udp`. Súbelo a la ReCamera en `/home/recamera/` usando el comando scp:

```bash
sudo scp qrcode_udp recamera@192.168.4.53:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
Introduce la contraseña para la plataforma correspondiente cuando se te solicite para completar la transferencia de `qrcode_udp`.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/cppbuildlog.png" /></div>


### 2. Configurar ReCamera

:::warning
Antes de ejecutar el programa en C++, debes detener los servicios predeterminados de Node-RED ya que ocupan los recursos de la cámara. Ejecuta los siguientes comandos vía SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Ejecutar el ejecutable en ReCamera

Luego ejecuta el siguiente comando para otorgar permiso de ejecución:

```bash
chmod +x qrcode_udp
```

#### Parámetros

| Parameter | Description | Default |
|-----------|-------------|---------|
| `udp_ip` | Dirección IP del PC (habilita la transmisión UDP) | `192.168.4.48` |
| `udp_port` | Número de puerto UDP | `5001` |

#### Comandos de ejemplo

**Modo de transmisión de vídeo (sin transmisión UDP, solo reconocimiento local)**:
```bash
sudo ./qrcode_udp
```

**Modo de transmisión de vídeo + transmisión UDP**:
```bash
sudo ./qrcode_udp 192.168.4.48 5001
```

:::note
Sustituye `192.168.4.48` por la dirección IP real de tu PC en la misma red que la ReCamera.
:::
### En la terminal de ReCamera

**Modo de transmisión de vídeo**: el programa mostrará estadísticas de rendimiento una vez por segundo:

```
[Performance] CaptureFPS=2.60 | DecodeFPS=2.60 | AvgDecodeTime=323.0ms | DecodeSuccess=0 | NewCode=0
[Performance] CaptureFPS=1.94 | DecodeFPS=1.94 | AvgDecodeTime=434.0ms | DecodeSuccess=0 | NewCode=0
[QRCode] https://wiki.seeedstudio.com/recamera_software_docs/
[Performance] CaptureFPS=4.45 | DecodeFPS=4.45 | AvgDecodeTime=174.8ms | DecodeSuccess=3 | NewCode=1
[Performance] CaptureFPS=4.62 | DecodeFPS=4.62 | AvgDecodeTime=163.6ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=4.86 | DecodeFPS=4.86 | AvgDecodeTime=165.4ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=4.60 | DecodeFPS=4.60 | AvgDecodeTime=169.8ms | DecodeSuccess=4 | NewCode=0
[Performance] CaptureFPS=4.33 | DecodeFPS=4.33 | AvgDecodeTime=184.4ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=2.78 | DecodeFPS=2.78 | AvgDecodeTime=305.8ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=1.96 | DecodeFPS=1.96 | AvgDecodeTime=404.0ms | DecodeSuccess=2 | NewCode=0
[Performance] CaptureFPS=4.72 | DecodeFPS=4.72 | AvgDecodeTime=166.0ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.56 | DecodeFPS=4.56 | AvgDecodeTime=178.5ms | DecodeSuccess=6 | NewCode=0
[QRCode] zxj
[Performance] CaptureFPS=5.32 | DecodeFPS=5.32 | AvgDecodeTime=145.3ms | DecodeSuccess=7 | NewCode=1
[Performance] CaptureFPS=5.30 | DecodeFPS=5.30 | AvgDecodeTime=149.1ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.70 | DecodeFPS=4.70 | AvgDecodeTime=170.8ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=1.85 | DecodeFPS=1.85 | AvgDecodeTime=455.0ms | DecodeSuccess=1 | NewCode=0
```

- **CaptureFPS**: Frecuencia de fotogramas de captura de la cámara
- **DecodeFPS**: Frecuencia de fotogramas real a la que se ejecuta la decodificación (limitada por la restricción de 150 ms)
- **AvgDecodeTime**: Tiempo medio que tarda una única decodificación de ZXing
- **DecodeSuccess**: Número de veces que se reconoció correctamente un código QR
- **NewCode**: Número de veces que cambió el texto del código QR


### 4. Ejecutar el receptor en Python en el PC

En tu PC, asegúrate de tener instalado Python con las bibliotecas requeridas:

```bash
pip install opencv-python numpy
```

Navega al directorio de la solución y ejecuta:

```bash
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
python tools/udp_receiver.py --port 5001 --show --print-dets
```

#### Parámetros del receptor en Python

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--ip` | Dirección IP de escucha | `0.0.0.0` |
| `--port` | Puerto de escucha | `5001` |
| `--show` | Mostrar la ventana de vídeo | off |
| `--print-dets` | Imprimir el texto del código QR reconocido | off |



### En la ventana del receptor en Python

El PC mostrará una ventana de vídeo en vivo que incluye:
- La transmisión de vídeo JPEG
- Cuando se reconoce un código QR, el texto decodificado se superpone en la esquina superior izquierda del fotograma (fuente amarilla)
- El número de fotograma (fuente verde)
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/pcpicture.png" /></div>


## Dependencias

| Dependency | Description | Source |
|------------|-------------|--------|
| **sscma-micro** | Acceso a la cámara (dispositivo, interfaces de cámara) | Componente del repositorio `components/sscma-micro` |
| **stream_udp** | Transmisión UDP (JPEG + resultados de detección) | Componente del repositorio `components/SeSg/stream_udp` |
| **OpenCV** (core, imgproc, imgcodecs) | Procesamiento de imágenes, conversión a escala de grises, submuestreo | Sysroot del SDK SG200X |
| **ZXing** (libzxing) | Decodificación de códigos de barras/códigos QR de múltiples formatos | Sysroot del SDK SG200X |
| **ReCameraOS ≥ 0.2.1** | Entorno de ejecución | Firmware del dispositivo |

## Solución de problemas

### Error de acceso a la cámara

Si ves un error "No camera device found":
- Asegúrate de que los servicios de Node-RED estén detenidos (consulta el Paso 2 anterior)
- Comprueba la conexión de la cámara

### Error de conexión UDP

Si el PC no recibe datos:
- Verifica que el PC y la ReCamera estén en la misma red
- Comprueba la configuración del firewall en el PC
- Confirma que el puerto UDP 5001 no esté bloqueado
- Usa `ping` para probar la conectividad entre los dispositivos

### Fallo en el reconocimiento de códigos QR

Si la vista de la cámara contiene un código QR pero no se reconoce:
- Asegúrate de que el código QR sea lo suficientemente grande y claro en el fotograma
- Evita un desenfoque excesivo, rotación o iluminación desigual
- Ten en cuenta que el modo `TryHarder` está desactivado por defecto para priorizar el rendimiento en tiempo real

### Error de compilación

Si encuentras errores de compilación relacionados con ZXing o sscma-micro:
- Confirma que la variable de entorno `SG200X_SDK_PATH` esté configurada correctamente
- Asegúrate de que la ruta de la cadena de herramientas se haya añadido a la variable de entorno `PATH`
- Comprueba que los submódulos del repositorio se hayan descargado completamente (`git submodule update --init --recursive`)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
---
title:  Migración del modelo de reconocimiento de gestos de mano de MediaPipe a reCamera
description: Este documento describe cómo migrar completamente el conjunto oficial de reconocimiento de gestos de mano de Google MediaPipe a reCamera (Sophon/Bitmain SG200X), construyendo una canalización de "detección de palma → detección de puntos de referencia → incrustación → clasificación" y transmitiendo los resultados a un PC vía UDP para su visualización.
keywords:
  - reCamera
  - Reconocimiento de gestos de mano
  - MediaPipe
  - Inferencia en TPU
  - Cuantización INT8
  - Transmisión UDP
slug: /recamera_hand_gesture
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 18
last_update:
  date: 06/26/2026
  author: Xuanjun Zhu
createdAt: '2026-06-26'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/es/recamera_hand_gesture/
---

# Migración del modelo de reconocimiento de gestos de mano de MediaPipe a reCamera

## Introducción

Este proyecto muestra cómo migrar completamente el **conjunto de reconocimiento de gestos de mano de MediaPipe** oficial de Google a la **reCamera** para realizar reconocimiento de gestos en tiempo real y transmitir el vídeo y los resultados de reconocimiento a un PC para su visualización vía UDP.

El sistema puede reconocer **8 categorías de gestos** (None / Closed_Fist / Open_Palm / Pointing_Up / Thumb_Down / Thumb_Up / Victory / ILoveYou), y también generar **21 puntos de referencia de la mano** e información de **lateralidad (mano izquierda/derecha)**. Es adecuado para los siguientes escenarios de aplicación:

- **Control gestual de hogar inteligente**: Controla luces, cortinas y interruptores de electrodomésticos mediante gestos predefinidos, sin necesidad de voz ni de una app en el teléfono.
- **Interacción industrial sin contacto**: Los operarios que llevan guantes o tienen ambas manos ocupadas pueden enviar órdenes al equipo mediante gestos sencillos.
- **Interacción en educación y exposiciones**: En museos de ciencia o salas de exposiciones, los visitantes pueden activar contenido multimedia mediante gestos para una experiencia inmersiva.
- **Asistencia en accesibilidad**: Proporciona un punto de entrada de control de dispositivos basado en gestos para usuarios con discapacidad auditiva o movilidad reducida.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.gif" />
</div>
## Preparación de hardware

Para ejecutar esta demostración, se requiere el siguiente hardware:

- **Un dispositivo reCamera** (se admiten todas las variantes de reCamera)
- **Un PC** (utilizado para ejecutar el receptor en Python para la visualización; debe estar en la misma red local que la reCamera)

Puedes elegir **cualquier versión de reCamera** según tus necesidades de despliegue:

- reCamera 2002 Serie (Wi-Fi)
- reCamera Gimbal
- reCamera HQ PoE (Ethernet + PoE)

> **Nota:**  
> La versión PoE no admite Wi-Fi y debe conectarse a la misma red local mediante un switch compatible con PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Cómo funciona


### Flujo de conversión de modelos (TFLite → ONNX → cvimodel)

Descarga los modelos en formato TFLite desde el repositorio oficial de MediaPipe. Deben convertirse al formato `.cvimodel` compatible con la TPU de reCamera:

```
MediaPipe TFLite (FLOAT16)
    │  tf2onnx (--channel_format none, keep NHWC)
    ▼
ONNX (FLOAT32, NHWC)  ← numerical reference (cos=1.0 vs TFLite)
    │  tpu-mlir model_transform + model_deploy
    ├─ BF16
    └─ INT8 (per-channel + real-data calibration)
        ▼
CVIMODEL (cv181x)
```

#### Verificación de precisión

Tras la conversión, los modelos se verifican mediante una comparación triple (TFLite vs ONNX vs cvimodel):

| Modelo | Salida | BF16 cos | INT8 cos |
|------|------|----------|----------|
| detector | scores | 1.0000 | 0.9896 |
| detector | boxes | 0.9999 | 0.9748 |
| landmark | lm63 | 1.0000 | 0.9999 |
| landmark | **world63** | 0.9997 | **0.8098**  |
| embedder | embedding | 1.0000 | 0.9992 |
| classifier | probs | 1.0000 | 0.9978 |

> **Nota**: Después de la cuantización INT8, la precisión de `world63` (puntos de referencia en coordenadas globales) sufre cierta pérdida (cos=0.81), pero el resultado de clasificación de gestos de extremo a extremo es coherente con TFLite (el juicio de categoría es fiable). Si tu aplicación depende en gran medida de la precisión de las coordenadas globales, se recomienda utilizar la versión BF16 de este modelo.


## Compilación de la demostración

Para compilar este ejemplo, necesitas:

1. Compilar cruzadamente el programa en C++ en tu PC
2. Ejecutar el ejecutable compilado en la reCamera
3. Ejecutar el script receptor en Python en tu PC

### Paso 1: Compilar el programa en C++

:::note
Antes de compilar esta solución, asegúrate de haber configurado el entorno de **ReCamera-OS** (versión 0.2.1 o superior) según la [documentación principal del proyecto](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp/), incluyendo la ruta del SDK y la cadena de herramientas de compilación cruzada.
:::

Configura la variable de entorno de la cadena de herramientas de compilación cruzada:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clona el [repositorio](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main) y entra en el directorio de la solución para compilar:

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

El ejecutable compilado se encuentra en: `build/hand_gesture`

### Paso 2: Preparar los archivos de modelo

Este ejemplo requiere 4 archivos de modelo `.cvimodel` (versiones cuantizadas en INT8) que ya se proporcionan en el [repositorio](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main/solutions/sesg-project/hand_gesture/model). Si necesitas convertir los modelos tú mismo, consulta la [Guía de conversión de modelos](https://wiki.seeedstudio.com/es/recamera_model_conversion/):

| Modelo | Nombre de archivo | Descripción |
|------|--------|------|
| Detección de palma | `hand_detector_cv181x_int8.cvimodel` | Modelo 1: detección de palma SSD |
| Detección de puntos de referencia | `hand_landmarks_detector_cv181x_int8.cvimodel` | Modelo 2: 21 puntos de referencia |
| Incrustación de gestos | `gesture_embedder_cv181x_int8.cvimodel` | Modelo 3: incrustación de 128 dimensiones |
| Clasificación de gestos | `canned_gesture_classifier_cv181x_int8.cvimodel` | Modelo 4: clasificación de 8 clases |

Sube el ejecutable compilado y los archivos de modelo a `/home/recamera/` en la reCamera:

```bash
scp hand_gesture hand_detector_cv181x_int8.cvimodel hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel canned_gesture_classifier_cv181x_int8.cvimodel \
    recamera@<reCamera_IP>:/home/recamera/ # Make sure the PC and reCamera are on the same network segment, then replace <reCamera_IP> with the corresponding IP address
```

### Paso 3: Configurar la reCamera

:::warning
Antes de ejecutar el programa en C++, debes detener los servicios predeterminados de Node-RED porque ocupan los recursos de la cámara. Ejecuta los siguientes comandos mediante SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### Paso 4: Ejecutar el ejecutable en la reCamera

Inicia sesión en la reCamera mediante SSH, concede permiso de ejecución y luego ejecútalo:

```bash
cd /home/recamera/
chmod +x hand_gesture
```

#### Descripción de parámetros

| Parámetro | Descripción | Valor predeterminado |
|------|------|--------|
| `palm_model` | Modelo de detección de palma (obligatorio) | - |
| `landmark_model` | Modelo de detección de puntos de referencia (obligatorio) | - |
| `embedder_model` | Modelo de incrustación de gestos (obligatorio) | - |
| `classifier_model` | Modelo de clasificación de gestos (obligatorio) | - |
| `min_score` | Umbral de detección de palma | `0.5` |
| `udp_ip` | Dirección IP del PC (activa la transmisión UDP) | - |
| `udp_port` | Número de puerto UDP | - |
| `jpeg_w` | Ancho de fotograma de transmisión JPEG | `320` |
| `jpeg_h` | Altura de fotograma de transmisión JPEG | `240` |
| `jpeg_fps` | Frecuencia de fotogramas de transmisión JPEG | `10` |
| `skip_multi` | Con múltiples manos (≥2), ejecutar la inferencia una vez cada N fotogramas | `3` |
| `skip_single` | Con una sola mano, ejecutar la inferencia en cada fotograma | `1` |

#### Comandos de ejemplo

**Uso básico (sin transmisión UDP, solo inferencia local)**:

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel
```

**Uso completo (transmisión UDP + parámetros personalizados)**:

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel \
    0.5 \
    192.168.XX.XX 5001 \
    320 240 10 \
    3 1
```

:::note
1. Sustituye `192.168.XX.XX` por la dirección IP real del PC que está en la misma red que tu reCamera. La transmisión UDP solo se activa cuando se proporcionan tanto `udp_ip` como `udp_port`.
2. Si el programa muestra "[Heartbeat] Before the first retrieveFrame(RGB888) call..." y luego se queda bloqueado, reinicia la reCamera.
:::

### Paso 5: Ejecutar el receptor en Python en el PC

En tu PC, asegúrate de que las bibliotecas necesarias de Python estén instaladas:

```bash
pip install opencv-python numpy
```

Entra en el directorio de la solución y ejecuta el script del receptor:

```bash
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
python3 tools/udp_receiver.py 5001
```

El PC mostrará una ventana de vídeo en tiempo real, que incluye:

- **Flujo de vídeo JPEG**
- **Caja de detección de la palma** (rectángulo azul)
- **21 puntos de referencia de la mano** (puntos rojos + esqueleto conectado)
- **Etiqueta de clasificación del gesto** (nombre del gesto y confianza mostrados en la esquina superior izquierda)
- **Información de lateralidad (mano izquierda/derecha)**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.png" />
</div>
<p align="center">Resultado de reconocimiento de gestos en tiempo real en el PC</p>

## Salida esperada

### En el terminal de reCamera

Después de que el programa se ejecute, mostrará registros de rendimiento de inferencia:

```log

[Perf] FPS=5.88 (inference=2.94) | palm=120.7ms | landmark=169.1ms | gesture=0.6ms | total=290.4ms | avg_hands=1.00
[Gesture] Open_Palm (70%) [R] palm=(0.43,0.34,0.69,0.69) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=80.7
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=82.0
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.9
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[Perf] FPS=5.93 (inference=2.97) | palm=120.6ms | landmark=177.2ms | gesture=0.6ms | total=298.4ms | avg_hands=1.00
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.8
```

> **Nota**: El modelo de palma requiere una entrada de 192×192, que está por debajo de la resolución mínima de escalado del VPSS. Por lo tanto, CH0 usa 640×480 (compatible con el VPSS), y el modelo lo escala internamente a 192×192 mediante letterbox por software.

### Error de acceso a la cámara

Si ves un error de "No camera" o "Camera device not found":

- Asegúrate de que los servicios de Node-RED estén detenidos (consulta el Paso 3)
- Comprueba la conexión de la cámara

### Fallo de conexión UDP

Si el PC no recibe datos:

- Confirma que el PC y la reCamera están en la misma red
- Comprueba la configuración del firewall en el PC
- Asegúrate de que el puerto UDP no esté bloqueado
- Usa `ping` para probar la conectividad entre los dispositivos

### Confianza anómala en el reconocimiento de gestos

Si la confianza del gesto reconocido es claramente incorrecta:

- Confirma que el **parche softmax en C++** después del modelo clasificador esté implementado correctamente
- Comprueba si por error se usó la salida ONNX (que contiene Softmax) en lugar de la salida cvimodel (logits)

## Estructura del código C++

```
hand_gesture/
├── main/
│   ├── main.cpp                  # Entry: get frame → mmap → inference → UDP push
│   ├── hand_detector.{h,cpp}     # Model 1: palm detection (SSD post-processing + NMS)
│   ├── hand_landmarker.{h,cpp}   # Model 2: 21 landmarks (ROI warpAffine)
│   ├── gesture_recognizer.{h,cpp}# Model 3+4: embedder + classifier (with softmax patch)
│   ├── gesture_math.{h,cpp}      # letterbox / math utilities
│   ├── engine_utils.h            # tensor packing helpers
│   └── hand_types.h              # data structures + UDP POD protocol
├── tools/udp_receiver.py         # Python host receiver
└── CMakeLists.txt
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos una variedad de canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
---
description: Este tutorial muestra cómo construir una demo completa de agarre visual para el reBot Arm B601-DM usando Orbbec Gemini 2 y un flujo de trabajo de agarre YOLO/OBB.
title: Demo de agarre visual con reBot Arm B601-DM
keywords:
  - reBot Arm
  - B601-DM
  - Grasping
  - Gemini 2
  - YOLO
  - Hand-Eye Calibration
  - Robot
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-05-20
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/
---

# Demo de agarre visual con reBot Arm B601-DM

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-Orbbec%20Gemini%202-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Totalmente de código abierto</strong>
</p>

YOLO es una familia ampliamente utilizada de modelos de detección de objetos en tiempo real que puede localizar y clasificar objetivos en una sola pasada hacia adelante. Este tutorial usa YOLO junto con la cámara de profundidad Orbbec Gemini 2 para construir una demo funcional de agarre visual de escritorio para el reBot Arm B601-DM, cubriendo la configuración del entorno, la integración de la cámara, la calibración mano-ojo y la validación del agarre.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características del proyecto

1. **Estimación directa de la pose de agarre a partir de YOLO + OBB**  
   El flujo de trabajo usa directamente cajas de detección o rectángulos de área mínima OBB y toma el eje corto como la dirección de apertura de la pinza, evitando el procesamiento complejo de nubes de puntos 3D.

2. **Estimación de pose de agarre 6D con GraspNet-Baseline (opcional)**  
   El proyecto también es compatible con GraspNet-Baseline (`graspnet/graspnet-baseline`) para la estimación de la pose de agarre 6D a partir de nubes de puntos RGB-D, usando las cajas delimitadoras de YOLO para seleccionar candidatos objetivo para experimentos de agarre más complejos.

3. **Integración ligera de brazo robótico y pinza**  
   El script principal de agarre reutiliza la interfaz `RebotArm` e integra IK, control de trayectoria y la máquina de estados de la pinza.

4. **Código abierto y extensible**  
   Todo el código fuente es abierto, y los usuarios pueden personalizar los algoritmos de control y los efectos según sus propias necesidades.

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Especificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo de brazo robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Grados de libertad</td>
      <td>6-DOF + pinza</td>
    </tr>
    <tr>
      <td>Modelo de cámara</td>
      <td>Orbbec Gemini 2</td>
    </tr>
    <tr>
      <td>Método de detección</td>
      <td>YOLO + rectángulo de área mínima OBB</td>
    </tr>
    <tr>
      <td>Método de comunicación</td>
      <td>Bus CAN mediante adaptador USB2CAN; conexión de cámara USB 3.0</td>
    </tr>
    <tr>
      <td>Tensión de funcionamiento</td>
      <td>24V CC</td>
    </tr>
    <tr>
      <td>Plataforma host</td>
      <td>PC con Ubuntu 22.04+</td>
    </tr>
    <tr>
      <td>Versión recomendada de Python</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|--|--|--|
| Brazo robótico reBot Arm B601-DM | 1 | ✅ |
| Pinza | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente (24V) | 1 | ✅ |
| Cable USB-C / comunicación | 1 | ✅ |
| Cámara de profundidad Orbbec Gemini 2 | 1 | ✅ |
| Conector de cámara Gemini 2 / soporte de montaje | 1 | ✅ |

### Cableado

1. Conecta la Gemini 2 al host mediante USB 3.0.
2. Conecta el adaptador USB2CAN al bus CAN del brazo.
3. Asegúrate de que la fuente de alimentación de 24V, la cámara y el brazo robótico estén todos conectados de forma segura.
4. Establece los permisos:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## Requisitos del entorno

| Elemento | Requisito |
|------|-------------|
| Sistema operativo | Ubuntu 22.04+ |
| Python | 3.10 |
| Entorno recomendado | conda |
| Carpeta de trabajo recomendada | `rebot_grasp` |
| Entorno conda recomendado | `rebotarm` |

## Pasos de instalación

### Paso 0. Completa primero la preparación básica del brazo robótico

Antes de comenzar este tutorial, termina el contenido de [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/), incluyendo el montaje del brazo robótico, la inicialización del punto cero, la configuración de ID de los motores y las comprobaciones básicas de conectividad.

### Paso 1. Clona el repositorio

Da preferencia al repositorio oficial de Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

También puedes usar el repositorio de desarrollo actual:

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Paso 2. Crea y configura el entorno conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

Si quieres usar un nombre de entorno diferente, reemplaza `rebotarm` en el comando por tu propio nombre.

### Paso 3. Instala el SDK del brazo robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### Paso 4. Instala el SDK de la cámara de profundidad

**Este proyecto usa la cámara de profundidad Orbbec Gemini2. Si usas una cámara de profundidad diferente, instala el SDK correspondiente a tu cámara y omite este paso.**

La cámara de profundidad Orbbec Gemini2 depende de `pyorbbecsdk`, el contenedor de Python para Orbbec SDK v2. Es preferible instalar primero el paquete de Python precompilado:

**Opción 1: Instalar desde pip (recomendado)**

```bash
pip install pyorbbecsdk2
```

**Opción 2: Obtenerlo desde GitHub**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Los usuarios de China continental pueden usar:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Al instalar desde el código fuente, asegúrate de que la extensión nativa se haya compilado primero con CMake, de modo que `install/lib` contenga `pyorbbecsdk*.so` y las bibliotecas compartidas de Orbbec antes de ejecutar `pip install -e .`.

Si todos los métodos de instalación anteriores fallan, consulta la documentación oficial de Orbbec a continuación.

Para el primer uso, se recomienda instalar las reglas de udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Paso 5. Configura GraspNet (opcional)

No necesitas GraspNet para `scripts/main.py` o `scripts/ordinary_grasp_pipeline.py`. Configúralo solo cuando quieras ejecutar `scripts/graspnet_camera_demo.py` o `scripts/grasp.py`, que requieren GraspNet, PyTorch con CUDA habilitado, los operadores CUDA de PointNet2/knn y un checkpoint preentrenado.

Las extensiones `pointnet2` / `knn` de GraspNet requieren un compilador CUDA. Antes de empezar, asegúrate de que el entorno activo pueda encontrar `nvcc`, y comprueba que la versión de CUDA reportada por `nvcc` coincida con la versión de CUDA usada para compilar PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si falta `nvcc`, o si la versión de CUDA reportada por `nvcc` no coincide con `torch.version.cuda`, instala un compilador CUDA que coincida con la versión CUDA actual de tu PyTorch. Por ejemplo, si PyTorch indica `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

También puedes instalar una compilación de PyTorch que coincida con tu versión actual de `nvcc`. Las dos versiones deben coincidir, de lo contrario la compilación de `pointnet2` / `knn` fallará con `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Build CUDA operators
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
sed -i "s/'numpy==1.23.4'/'numpy>=1.24.0'/" setup.py
pip install .
cd ../../..
```

***Nota: Si sigues la documentación del repositorio oficial graspnet-baseline y usas `python setup.py install`, pueden producirse errores relacionados con CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que la extensión se compile con la configuración de PyTorch y CUDA ya instalada en el entorno conda activo.***

***Además, las dependencias antiguas de la API de GraspNet pueden seguir usando el nombre de paquete obsoleto `sklearn`. Los comandos `sed` lo reemplazan por el nombre de paquete actualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante la instalación. También ajustan `numpy==1.23.4` a `numpy>=1.24.0`, evitando que la instalación de la API de GraspNet degrade NumPy y entre en conflicto con las dependencias de control del brazo robótico.***

Consulta el repositorio oficial graspnet-baseline para descargar el peso preentrenado oficial de GraspNet y luego coloca `checkpoint-rs.tar` en:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Luego verifica `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

El campo `checkpoint` admite tres formas: un nombre de archivo se resuelve bajo `sdk/graspnet-baseline/checkpoints/`; una ruta relativa se resuelve desde la raíz del proyecto; una ruta absoluta se usa directamente.

### Paso 6. Verifica las dependencias

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

Para el primer uso de la cámara Orbbec, se recomienda ejecutar `scripts/install_udev_rules.sh` dentro de tu directorio instalado de `pyorbbecsdk`, de lo contrario la cámara puede no abrirse correctamente.

## Calibración mano-ojo

Antes de ejecutar toda la canalización de agarre, completa primero la calibración mano-ojo Eye-in-Hand.

```bash
python scripts/collect_handeye_eih.py
```

Antes de ejecutarlo, asegúrate de que el siguiente parámetro de tamaño de ArUco en `config/default.yaml` coincida con el marcador impreso real:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

En el modo automático, el brazo recorre 50 poses preestablecidas y registra una muestra siempre que el marcador ArUco se detecta de forma estable. Incluso si interrumpes el proceso con `c` o `q`, el script seguirá intentando calcular el resultado de calibración a partir de las muestras recopiladas.

Si quieres mover el brazo robótico manualmente durante la recopilación, usa el modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

En el modo manual, el brazo entra en modo de compensación de gravedad. Mueve el efector final a un ángulo de visión adecuado, pulsa `Enter` para capturar y pulsa `c` o `q` para finalizar y calcular el resultado.

El resultado de la calibración se guarda en:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
```

Se recomienda un recuento de muestras de al menos 5, siendo 15 o más lo ideal.

## Ejecución y depuración

### 1. Verificar solo la detección de objetos

```bash
python scripts/object_detection.py
```

Si necesitas cambiar el modelo de detección o las clases, modifica `config/default.yaml`:

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

Este paso es útil para confirmar:

- La cámara se abre correctamente
- El modelo YOLO se carga correctamente
- La detección de objetos con YOLO funciona como se espera

### 2. Verificar solo la estimación de agarre

```bash
python scripts/ordinary_grasp_pipeline.py
```

Si necesitas ajustar la frecuencia de inferencia de agarre o la distancia de retirada previa al agarre, modifica:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
```

Este script no se conecta al brazo robótico. Solo se utiliza para verificar:

- Si el OBB o el rectángulo de área mínima es razonable
- Si el punto de agarre se encuentra cerca del área central del objetivo
- Si la dirección del eje corto coincide con la dirección esperada de apertura de la pinza

Controles clave:

- Botón izquierdo del ratón: inspeccionar la profundidad en el píxel seleccionado
- `G`: imprimir la pose de agarre actual óptima
- `Q` / `Esc`: salir

### 3. Ejecutar el programa principal de agarre

```bash
python scripts/main.py
```

Si solo quieres validar la pose objetivo sin mover el brazo robótico:

```bash
python scripts/main.py --dry-run
```

Se recomienda verificar primero la pose y el espacio de trabajo alcanzable con `--dry-run` antes de ejecutar un agarre real.

Si `reBotArm_control_py` no está en la ubicación predeterminada, especifícalo en `config/default.yaml`:

```yaml
robot:
  repo_root: null
```

Mantenerlo como `null` suele ser suficiente porque el programa intentará detectar automáticamente primero `sdk/reBotArm_control_py`.

Flujo principal del programa:

1. Inicializar el brazo robótico y la pinza
2. Mover a la pose de listo. Si quieres cambiar la pose inicial de listo, modifica `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. Detectar en tiempo real los objetivos sobre la mesa
4. Estimar la pose de agarre a partir del eje corto
5. Pulsar `G` para capturar el fotograma actual y ejecutar el agarre

Teclas en tiempo de ejecución:

- `G`: agarrar el mejor objetivo actual
- `R`: reanudar la vista previa en vivo
- `Q` / `Esc`: salir

### 4. Demo de estimación con cámara de GraspNet (opcional)

```bash
python scripts/graspnet_camera_demo.py
```

Este script ejecuta la estimación de pose de agarre 6D de GraspNet solo con la cámara RGB-D, sin conectarse al brazo robótico. Mantiene una vista previa en vivo de la cámara, usa los cuadros delimitadores de YOLO para seleccionar el área objetivo y filtra los candidatos de escena completa de GraspNet factibles mediante el bbox del objetivo.

Controles clave:

- `G` / `Space`: ejecutar la inferencia de GraspNet en el fotograma actual
- `R`: reanudar la vista previa en vivo
- `Q` / `Esc`: salir

Después de la inferencia, Open3D puede visualizar la nube de puntos y los candidatos de agarre.

### 5. Programa de agarre robótico con GraspNet (opcional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta la estimación de GraspNet con el flujo de ejecución del brazo robótico. YOLO selecciona el objetivo, GraspNet genera una pose de agarre 6D, la calibración mano-ojo la transforma al marco base del robot y el script comprueba la alcanzabilidad por IK antes de ejecutar la secuencia de movimientos de pre-agarre, agarre y retirada.

Ejecutar `python scripts/grasp.py` inicia todo el flujo de agarre robótico con GraspNet y controla realmente el brazo robótico. `--dry-run` solo imprime la pose objetivo y el resultado del filtrado de candidatos sin ejecutar el movimiento de agarre. `--target-class "light blue coffee cup"` especifica la clase objetivo de YOLO y solo filtra y agarra candidatos de GraspNet para esa clase.

## Preguntas frecuentes (FAQ)

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

Esto normalmente significa que las dependencias del SDK del brazo robótico no están instaladas en el entorno actual de Python. Por favor, comprueba:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. Al pulsar `G` no se ejecuta el agarre

Causas comunes:

- `hand_eye.npz` no existe
- El modo de calibración mano-ojo no es `eye_in_hand`
- La pose objetivo no es alcanzable por IK

Se recomienda ejecutar:

```bash
python scripts/main.py --dry-run
```

### 3. La profundidad de agarre es inestable

Puedes intentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- La altura de instalación de la cámara con respecto al espacio de trabajo
- Las propiedades reflectantes de la superficie del objetivo

### 4. GraspNet informa que `pointnet2_utils` no se puede importar desde `pointnet2`

Esto normalmente significa que la extensión CUDA local en `sdk/graspnet-baseline/pointnet2` no se compiló en el entorno conda activo, o que Python está resolviendo un paquete `pointnet2` diferente. Asegúrate de que el entorno del proyecto esté activo y luego recompila tanto `pointnet2` como `knn` en ese mismo entorno:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verifica:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. Problemas de compatibilidad de arquitectura CUDA en GPUs más nuevas al ejecutar GraspNet

Si ves `no kernel image is available for execution on the device`, o PyTorch informa que la capacidad CUDA de la GPU actual no es compatible, es probable que la rueda de PyTorch instalada no incluya kernels CUDA para esa arquitectura de GPU. Instala una compilación de PyTorch que admita tu arquitectura CUDA/GPU actual y luego recompila las extensiones CUDA locales de GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Si necesitas especificar manualmente la arquitectura de compilación, establece `TORCH_CUDA_ARCH_LIST` antes de recompilar. Elige el valor según la arquitectura de tu GPU y la versión de PyTorch/CUDA.

### 6. La inferencia de GraspNet informa `RuntimeError: CPU not supported`

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA está disponible, que la red de GraspNet y la nube de puntos de entrada están en la GPU, y que `pointnet2` / `knn` se compilaron contra la versión de PyTorch en el entorno activo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Si la salida es `False`, corrige primero la instalación de CUDA / PyTorch. Si es `True` pero el error persiste, recompila `pointnet2` y `knn`.

## Contacto

- Soporte técnico: [Submit an Issue](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- Página del proyecto: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [Guía rápida de inicio de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)
- [Primeros pasos con Pinocchio y MeshCat para reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Primeros pasos con reBot Arm B601-DM basado en LeRobot y reBot 102 Leader](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/)
- [Página de producto Orbbec Gemini 2](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Guía de la API de Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [Repositorio pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Documentación de pyorbbecsdk](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Documentación de Graspnet (Anygrasp)](https://graspnet.net/)

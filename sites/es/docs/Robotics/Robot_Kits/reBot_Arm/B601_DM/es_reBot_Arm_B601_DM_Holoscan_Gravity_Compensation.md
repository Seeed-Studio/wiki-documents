---
description: Ejecuta el ejemplo Holoscan 5 de NVIDIA en Ubuntu 24.04 para verificar la compensación de gravedad en el reBot Arm B601-DM y medir su bucle de control con Nsight Systems.
title: reBot-DM Holoscan5 Compensación de Gravedad
sidebar_label: reBot-DM Holoscan5 Compensación de Gravedad
keywords:
  - reBot Arm B601-DM
  - NVIDIA Holoscan
  - compensación de gravedad
  - Pinocchio
slug: /rebot_b601_dm_holoscan_gravity_compensation
sku: 100065783, 100095532
last_update:
  date: 2026-11-25
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/es/rebot_b601_dm_holoscan_gravity_compensation/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Holoscan-5.0.0-4C771B.svg?logo=nvidia&amp;logoColor=white" alt="NVIDIA Holoscan 5.0.0" width={115} height={20} />{' '}
  <img src="https://img.shields.io/badge/Target%20Rate-400%20Hz-0076A8.svg" alt="frecuencia objetivo del bucle de control de 400 Hz" width={124} height={20} />{' '}
  <img src="https://img.shields.io/badge/Dynamics-Pinocchio-8857A8.svg" alt="dinámica Pinocchio" width={124} height={20} />{' '}
  <img src="https://img.shields.io/badge/Profiling-Nsight%20Systems-38556F.svg" alt="perfilado de latencia con Nsight Systems" width={152} height={20} />
</p>

<p align="center">
  <strong>Frecuencia objetivo de 400 Hz · Dinámica con Pinocchio · Análisis de latencia con Nsight Systems</strong>
</p>

Este tutorial utiliza NVIDIA Holoscan 5 para ejecutar un bucle de control de tres etapas. El bucle lee los ángulos articulares actuales, usa Pinocchio y el modelo del robot para calcular el par necesario para contrarrestar la gravedad y luego envía comandos a los motores. Holoscan programa el bucle con una frecuencia objetivo de 400 Hz y ejecuta las tres etapas en un solo hilo para reducir la latencia y el jitter derivados de los traspasos entre hilos.

Con la compensación de gravedad activada, los motores ajustan su par a medida que cambia la pose y soportan el peso del **reBot Arm B601-DM**. Como resultado, se necesita menos fuerza para guiar el brazo a mano. [NVIDIA Technical Blog](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## Requisitos previos

| Elemento | Requisito |
| --- | --- |
| Brazo robótico | reBot Arm B601-DM con motores Damiao y el efector de agarre instalado |
| Conectividad | Fuente de alimentación B601-DM, placa controladora USB-a-CAN y un cable de datos USB |
| Host | Ubuntu 24.04 x86_64 con acceso a internet para descargar el código fuente y las dependencias |
| Entorno de ejecución | Python 3.12, Holoscan 5.0.0 y un controlador NVIDIA compatible con CUDA 13 |

Si el brazo aún no está ensamblado, sigue la guía de inicio rápido para fijar la base, completar el cableado y verificar los ID de los motores y las posiciones cero de las articulaciones. Apaga la alimentación antes de conectar o desconectar la alimentación o el mazo CAN. [B601-DM Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)

Comprueba el sistema y el controlador en el host.

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

Espera `x86_64`, glibc 2.39 o posterior y una salida de `nvidia-smi` que liste tu GPU. NVIDIA especifica un controlador R580 o posterior compatible con CUDA 13 para Holoscan 5. Si el controlador falta o es demasiado antiguo, usa la utilidad Controladores adicionales de Ubuntu o `sudo ubuntu-drivers list` para encontrar una rama de controlador para tu hardware. Sigue la guía de instalación de Ubuntu, reinicia y vuelve a comprobar. En Jetson, primero verifica la versión correspondiente del SDK JetPack. [Holoscan SDK installation requirements](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Installing NVIDIA drivers on Ubuntu](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 se distribuye con glibc 2.35. Incluso con Python 3.12 instalado en Conda, ejecuta Holoscan 5 en un host o en un contenedor que cumpla su requisito de glibc. Los comandos de esta guía usan el entorno Python nativo de Ubuntu 24.04. [Holoscan wheel requirements](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## Ejecutar la compensación de gravedad

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Configura el entorno y comprueba el grafo de control

Descarga el ejemplo de NVIDIA en Bash. Usa la revisión fijada para que los comandos, la configuración y las pruebas siguientes coincidan con el código fuente.

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Elige una forma de crear un entorno Python 3.12.

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

Si ya tienes Conda, crea un entorno dedicado. Puedes elegir un nombre de entorno diferente. [Conda installation guide](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

Permanece en el directorio del ejemplo con tu entorno activo. Descarga el modelo e instala las dependencias del ejemplo.

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

El script de descarga recupera el URDF desde una revisión fijada de Seeed Studio, verifica el archivo fuente y conserva los datos de dinámica. El archivo de requisitos instala Pinocchio 3.9.0 y motorbridge 0.5.0. El paquete de pip de Pinocchio es `pin`, y su nombre de importación en Python es `pinocchio`. [Official example source and dependencies](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

El grafo de control se ejecuta en la CPU, y al importar Holoscan aún se carga el runtime de CUDA. Estos comandos añaden las bibliotecas compartidas de la wheel a la ruta de búsqueda de bibliotecas de la terminal actual. Cada vez que abras una nueva terminal, vuelve al directorio del ejemplo, reactiva tu entorno y ejecuta estos comandos de nuevo. [Holoscan wheel runtime libraries](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

```bash
CUDA_LIB_DIR="$(python - <<'PY'
from importlib.metadata import distribution

runtime = distribution("nvidia-cuda-runtime")
library = next(file for file in runtime.files if file.name == "libcudart.so.13")
print(runtime.locate_file(library).parent)
PY
)"
test -n "$CUDA_LIB_DIR" && export LD_LIBRARY_PATH="$CUDA_LIB_DIR${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
python python/gravity_compensation.py --help
```

Antes de conectar el brazo, puedes cargar el modelo y compilar el grafo de control. Esta comprobación inicializa el modelo y compila el grafo sin abrir el puerto serie ni habilitar los motores.

```bash
PYTHONPATH=python python - <<'PY'
import holoscan as hsdk
from gravity_compensation import build_graph, load_configuration
from rebot_gravity import GravityCompensation
from rebot_robot import Robot

config, params = load_configuration("config/rebotarm_dm.yaml")
controller = GravityCompensation(config, params)
controller.initialize()
plan = hsdk.compile(build_graph(Robot(config), controller), hsdk.CompileOptions())
if not plan:
    raise SystemExit(plan.summary())
print(f"URDF loaded: nq={controller.model.nq}, nv={controller.model.nv}")
print("Control graph compiled successfully.")
PY
```

Espera `nq=8, nv=8` y un mensaje de compilación correcta. El modelo tiene seis coordenadas de brazo y dos coordenadas de dedos. El brazo físico tiene siete motores. Para una comprobación de regresión de software más completa, ejecuta las pruebas de motores simulados más adelante en esta guía.

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Conecta el brazo y configura el puerto serie

Asegúrate de que la base esté fija, conecta el cable de datos USB y enciende el brazo. Ejecuta el siguiente comando para conceder acceso de lectura y escritura a los dispositivos serie.

```bash
sudo chmod 666 /dev/ttyACM*
```

Copia la configuración oficial y edita `channel` en la copia. Sustituye la ruta de ejemplo por tu puerto serie real.

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| Ajuste | Valor del ejemplo oficial |
| --- | --- |
| IDs de motores e IDs de feedback | 1–7 y 17–23, respectivamente, en decimal |
| Modelos de motor | `4340P` para `joint1`–`joint3`, y `4310` para `joint4`–`joint6` y el efector de agarre |
| Velocidad en baudios del puerto serie | 921600 |
| Ganancias del brazo | `kp: 1.5` y `kd: 1.0` |
| Escala de par de gravedad y dirección de articulaciones | `tau_scale` y `joint_direction` tienen como valor predeterminado 1 para las seis articulaciones del brazo |
| Watchdog de comandos | 100 ms |

Mantén las ganancias, direcciones y escalados oficiales para la primera ejecución. Si los IDs de los motores, las orientaciones de montaje o las posiciones cero de las articulaciones difieren del hardware real, verifícalos primero con la guía de inicio rápido. Si cambias la orientación de la base o añades una carga útil, usa un modelo de dinámica que tenga en cuenta el cambio. [Official motor configuration](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Inicia, verifica y detén el controlador

:::warning

El comando de inicio habilita los motores físicos. Retira cualquier carga adicional, despeja el rango de movimiento y coloca el brazo en una posición en la que permanezca soportado si se pierde el par. Asegúrate de que alguien in situ pueda cortar la alimentación rápidamente. Un fallo también puede hacer que el controlador elimine el par de soporte.

:::

Ejecuta los comandos en el mismo entorno. Asegúrate de que el controlador tenga acceso exclusivo al puerto serie.

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

El programa comprueba el modelo, la pose actual y el estado del motor, luego configura el watchdog y empieza a enviar comandos. Una vez que veas el mensaje de abajo, guía lentamente el brazo a través de un pequeño movimiento. Comprueba que soporta su propio peso y se mueve con tu mano. Si empuja hacia atrás de forma notable, cae, oscila o informa de un error de motor, sujeta el brazo y detén el controlador antes de comenzar a diagnosticar.

```text
Gravity compensation active.
```

**Para apagar normalmente, primero guía el brazo de vuelta a una posición soportada y luego pulsa `Ctrl+C`.** El programa intenta desactivar los motores al salir, lo que elimina el par de soporte. En una salida normal, la terminal muestra un mensaje de parada y el recuento de lotes de comandos.

</div>
</section>
</div>

## Cómo funciona el bucle de control

| Operador | Función |
| --- | --- |
| `joint_feedback` | Se ejecuta con una cadencia de 2,5 ms y lee las posiciones de las articulaciones, las velocidades y el estado del motor |
| `gravity` | Calcula el par de gravedad feedforward a partir del URDF y de los ángulos actuales de las articulaciones y genera parámetros de rigidez y amortiguamiento |
| `motor_commands` | Valida los comandos y envía comandos de control MIT a los siete motores a través de motorbridge |

Los tres operadores se ejecutan en secuencia en la misma partición `control` de Holoscan. Cada cola entre operadores contiene un mensaje pendiente. Pinocchio calcula el término de gravedad como `g(q) = RNEA(q, 0, 0)`. El objetivo de planificación es 400 Hz. Usa Nsight Systems para medir el intervalo real entre iteraciones.

El watchdog comprueba si hay lotes de comandos atrasados. motorbridge devuelve feedback en caché. Si el feedback del motor se detiene mientras aún se pueden enviar comandos, el ejemplo puede seguir leyendo valores obsoletos. Pide a alguien que supervise el brazo in situ durante las pruebas de hardware. [Guía técnica oficial](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## Pruebas opcionales con motores falsos

Los dos conjuntos de pruebas oficiales cubren el par de gravedad, el grafo de control, el apagado ante fallos y el mantenimiento de un punto cartesiano. Detén el controlador de hardware antes de ejecutar los siguientes comandos. Puedes desconectar el cable USB del brazo para estas pruebas. Ejecútalos desde el directorio del ejemplo con el entorno activo. Los comandos construyen la biblioteca de motor falso utilizada por las pruebas sin requerir el SDK de C++.

```bash
sudo apt install -y curl g++
mkdir -p build/wiki-test

curl -fL \
  https://raw.githubusercontent.com/motorbridge/motorbridge/082cbb8c36dfdc8fbf9baa4cc02c5992ab0dc2ad/motor_abi/include/motor_abi.h \
  -o build/wiki-test/motor_abi.h

g++ -std=c++20 -shared -fPIC -I build/wiki-test tests/fake_motor_abi.cpp \
  -o build/wiki-test/librebot_fake_motor_abi.so

REBOT_FAKE_ABI="$PWD/build/wiki-test/librebot_fake_motor_abi.so"
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_gravity.py
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_cartesian.py
```

En la revisión fijada, espera 20 pruebas en el primer conjunto y 15 en el segundo, cada una terminando con `OK`. Las pruebas de inyección de fallos producen registros de error esperados. Superar estas pruebas verifica la ruta de software. Sigue los Pasos 2 y 3 para comprobar el cableado, las direcciones de los motores, las posiciones cero de las articulaciones y el comportamiento en el brazo físico.

## Comparación opcional de fijación de CPU con Nsight Systems

Instala Nsight Systems y ejecuta `nsys --version` para comprobar que la CLI está disponible. Ambas ejecuciones de perfilado mueven el brazo físico. Ejecútalas de una en una y confirma que el proceso anterior se ha detenido antes de iniciar otro. Al final de cada ejecución, devuelve el brazo a una posición soportada antes de pulsar `Ctrl+C`. [Descarga de Nsight Systems](https://developer.nvidia.com/nsight-systems)

Primero, captura una ejecución con la planificación predeterminada y sin fijación de CPU.

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

A continuación, comprueba qué CPUs lógicas están disponibles y elige un número de CPU permitido. El valor `2` de abajo es un ejemplo.

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

Inspecciona ambos informes. Usa nuevos nombres de archivo de salida para ejecuciones repetidas.

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

Abre los informes `.nsys-rep` en la interfaz gráfica de Nsight Systems e inspecciona los rangos NVTX de los tres operadores en la línea de tiempo. Mantén la pose del brazo, la duración de la captura y la carga del host lo más constantes posible en ambas ejecuciones.

| Métrica | Cómo medirla |
| --- | --- |
| Duración del operador | Consulta las estadísticas del rango NVTX correspondiente en `nvtx_sum`. |
| Intervalo del bucle y jitter | Compara las marcas de tiempo de entrada sucesivas de `joint_feedback`. El intervalo objetivo es de 2,5 ms. |
| Latencia dentro del grafo | Usa marcadores de mensajes para emparejar eventos de la misma iteración y luego mide desde la entrada en `joint_feedback` hasta la entrada en `motor_commands`. Mide la transmisión serie por separado. |

Para análisis por lotes, exporta el informe a SQLite. Ejecuta `nsys export --help` para comprobar si existe `--include-blobs`. Si falta la opción, actualiza Nsight Systems antes de exportar cargas útiles de mensajes estructurados. Para emparejar eventos de publicación y recepción en el mismo borde, usa `source_identity` y `sequence`. Luego sigue la entrada y salida del operador para rastrear la misma iteración de control. [Anotaciones NVTX de Holoscan](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` establece la afinidad solo para el hilo de control. NVIDIA también aisló un núcleo físico y su SMT gemelo, descartó los primeros 10 segundos como calentamiento y mantuvo más de un millón de iteraciones por ejecución. Registra tu propio recuento de muestras, topología de CPU y ajustes de aislamiento al reproducir el experimento. Usa un trazo corto para inspeccionar el comportamiento del grafo y una muestra suficientemente grande para los percentiles de latencia de cola. [Condiciones de benchmark de NVIDIA](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [Guía de correlación de mensajes](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## Comparación opcional con C++

Instala Holoscan SDK 5.0 con sus componentes de desarrollo, un compilador C++20, CMake 4 o posterior, Ninja, Rust/Cargo y Python 3.12. NVIDIA utilizó la compilación del SDK 5.0.0.7 para este ejemplo. [Guía de instalación del SDK](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Instrucciones de compilación del ejemplo en C++](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

Ejecuta estos comandos desde el directorio del ejemplo. Si ya has verificado que el archivo de modelo existe, omite la primera línea.

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

Después de que las pruebas pasen, usa los Pasos 2 y 3 para comprobar el hardware y la pose inicial. Luego usa el siguiente comando en lugar del comando de lanzamiento de Python. Para perfilar C++ con Nsight Systems, cambia el ejecutable y el nombre de salida en los comandos de perfilado. Mantén la configuración serie y las condiciones de comparación iguales.

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## Resolución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| pip no puede encontrar la rueda de Holoscan | Comprueba `python --version`, `uname -m` y `getconf GNU_LIBC_VERSION`, luego usa una versión y un sistema de Python compatibles. |
| Falta `libcudart.so.13` | Comprueba que la rueda del runtime de CUDA esté instalada en el entorno de Python activo y vuelve a establecer `LD_LIBRARY_PATH`. |
| Falta `libcuda.so.1` | Comprueba el controlador NVIDIA del host y la salida de `nvidia-smi`. La rueda del runtime de CUDA no incluye el controlador del host. |
| Falta el URDF o Pinocchio no se puede importar | Vuelve a ejecutar el script de descarga del modelo desde el directorio del ejemplo. Comprueba la versión de `pin` y la ruta de importación en el entorno activo. Evita cargar extensiones de ROS desde un entorno de Python diferente. |
| El puerto serie no se abre o está ocupado | Comprueba el cable de datos USB, la ruta de `channel` y los permisos del puerto serie. Usa `fuser -v /dev/ttyACM0` con la ruta real de tu dispositivo para identificar el proceso que usa el puerto y luego deténlo desde su terminal original. |
| Un motor deja de informar feedback o informa de un fallo | Sujeta el brazo y detén primero el controlador. Verifica los IDs de los motores, la fuente de alimentación, el cableado y las instrucciones de firmware. Guarda el error completo y el número de articulación, y mantén el watchdog activado. |
| El brazo cae, empuja hacia atrás u oscila | Sujeta el brazo y detén primero el controlador. Comprueba la orientación de la base, las posiciones cero de las articulaciones, el modelo y la carga útil. |
| El grafo no se puede compilar o iniciar con una CPU especificada | Ejecuta `taskset -pc $$` para comprobar qué CPUs están permitidas, o elimina `--cpu` para restaurar la planificación predeterminada. |

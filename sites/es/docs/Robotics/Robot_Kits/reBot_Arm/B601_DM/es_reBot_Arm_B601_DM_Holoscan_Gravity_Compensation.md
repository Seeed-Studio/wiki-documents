---
description: "Ejecuta el ejemplo de Holoscan 5 de NVIDIA en Ubuntu 24.04 para comprobar la compensación de gravedad en el reBot Arm B601-DM y medir su bucle de control con Nsight Systems."
title: "reBot-DM Holoscan5: Compensación de gravedad"
sidebar_label: "reBot-DM Holoscan5: Compensación de gravedad"
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
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="Brazo robótico reBot Arm B601-DM" />
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

<p align="center">
  <strong>Frecuencia objetivo de 400 Hz · Dinámica con Pinocchio · Análisis de latencia con Nsight Systems</strong>
</p>

Este tutorial usa NVIDIA Holoscan 5 para leer la realimentación de las articulaciones, calcular el par de compensación de gravedad y enviar comandos a los motores dentro de un único bucle de control. Los motores sostienen el peso del **reBot Arm B601-DM**, de modo que puedes cambiar su postura con la mano. [Blog técnico de NVIDIA](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## Requisitos previos

| Elemento | Requisito |
| --- | --- |
| Brazo robótico | reBot Arm B601-DM con motores Damiao y la pinza instalada |
| Conectividad | Fuente de alimentación del B601-DM, placa controladora USB-CAN y cable de datos USB |
| Host | Ubuntu 24.04 x86_64 con acceso a internet para descargar el código fuente y las dependencias |
| Entorno de ejecución | Python 3.12, Holoscan 5.0.0 y un controlador NVIDIA compatible con CUDA 13 |

Si el brazo aún no está montado, sigue la guía de inicio rápido para fijar la base, completar el cableado y comprobar los ID de los motores y las posiciones cero de las articulaciones. Apaga la alimentación antes de conectar o desconectar la alimentación o el mazo CAN. [Inicio rápido de B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)

Comprueba el sistema y el controlador en el host.

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

Se espera `x86_64`, glibc 2.39 o posterior, y una salida de `nvidia-smi` que enumere la GPU. NVIDIA especifica un controlador R580 o posterior compatible con CUDA 13 para Holoscan 5. Si el controlador falta o es demasiado antiguo, usa la utilidad Controladores adicionales de Ubuntu o `sudo ubuntu-drivers list` para encontrar una rama de controlador para tu hardware. Sigue la guía de instalación de Ubuntu, reinicia y vuelve a comprobarlo. En Jetson, verifica primero la versión correspondiente del JetPack SDK. [Requisitos de instalación del Holoscan SDK](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Instalación de controladores NVIDIA en Ubuntu](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 incluye glibc 2.35. Aunque instales Python 3.12 en Conda, ejecuta Holoscan 5 en un host o en un contenedor que cumpla su requisito de glibc. Los comandos de esta guía usan el entorno nativo de Python de Ubuntu 24.04. [Requisitos del wheel de Holoscan](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## Ejecutar la compensación de gravedad

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Preparar el entorno y comprobar el grafo de control

Descarga el ejemplo de NVIDIA en Bash. Usa la revisión fijada para que los comandos, la configuración y las pruebas siguientes coincidan con el código fuente.

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Elige una forma de crear un entorno de Python 3.12.

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

Si ya tienes Conda, crea un entorno dedicado. Puedes elegir otro nombre de entorno. [Guía de instalación de Conda](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

Quédate en el directorio del ejemplo con el entorno activo. Descarga el modelo e instala las dependencias del ejemplo.

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

El script de descarga obtiene el URDF de una revisión fijada de Seeed Studio, verifica el archivo de origen y conserva los datos de dinámica. El archivo de requisitos instala Pinocchio 3.9.0 y motorbridge 0.5.0. El paquete pip de Pinocchio es `pin` y su nombre de importación en Python es `pinocchio`. [Código fuente y dependencias del ejemplo oficial](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

El grafo de control se ejecuta en la CPU y, al importar Holoscan, también se carga el runtime de CUDA. Estos comandos añaden las bibliotecas compartidas del wheel a la ruta de búsqueda de bibliotecas del terminal actual. Cada vez que abras un terminal nuevo, vuelve al directorio del ejemplo, reactiva el entorno y ejecuta de nuevo estos comandos. [Bibliotecas de runtime del wheel de Holoscan](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

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

Se espera `nq=8, nv=8` y un mensaje de compilación correcta. El modelo tiene seis coordenadas del brazo y dos coordenadas de los dedos. El brazo físico tiene siete motores. Para una comprobación de regresión de software más completa, ejecuta más adelante en esta guía las pruebas con motores simulados.

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Conectar el brazo y configurar el puerto serie

Asegúrate de que la base esté fija, conecta el cable de datos USB y enciende el brazo. Ejecuta el comando siguiente para conceder acceso de lectura y escritura a los dispositivos serie.

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
| ID de motor e ID de realimentación | 1–7 y 17–23, respectivamente, en decimal |
| Modelos de motor | `4340P` para `joint1`–`joint3`, y `4310` para `joint4`–`joint6` y la pinza |
| Velocidad en baudios del puerto serie | 921600 |
| Ganancias del brazo | `kp: 1.5` y `kd: 1.0` |
| Escala del par de gravedad y dirección de la articulación | `tau_scale` y `joint_direction` tienen el valor predeterminado 1 en las seis articulaciones del brazo |
| Watchdog de comandos | 100 ms |

Conserva las ganancias, las direcciones y la escala oficiales en la primera ejecución. Si los ID de los motores, las orientaciones de montaje o las posiciones cero de las articulaciones difieren del hardware real, compruébalos primero con la guía de inicio rápido. Si cambias la orientación de la base o añades una carga, usa un modelo dinámico que tenga en cuenta el cambio. [Configuración oficial de los motores](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Iniciar, comprobar y detener el controlador

:::warning

El comando de inicio habilita los motores físicos. Retira cualquier carga adicional, despeja el rango de movimiento y coloca el brazo en una postura en la que siga apoyado si se pierde el par. Asegúrate de que alguien en el lugar pueda cortar la alimentación de inmediato. Un fallo también puede hacer que el controlador retire el par de soporte.

:::

Ejecuta los comandos en el mismo entorno. Asegúrate de que el controlador tenga acceso exclusivo al puerto serie.

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

El programa comprueba el modelo, la postura actual y el estado de los motores, configura el watchdog y empieza a enviar comandos. Cuando veas el mensaje siguiente, guía el brazo lentamente en un movimiento pequeño. Comprueba que sostiene su peso y se mueve con la mano. Si empuja de forma notable, cae, oscila o informa de un error de motor, sujeta el brazo y detén el controlador antes de investigar.

```text
Gravity compensation active.
```

**Para detenerlo con normalidad, primero guía el brazo de vuelta a una postura con apoyo y después pulsa `Ctrl+C`.** El programa intenta deshabilitar los motores al salir, lo que retira el par de soporte. En una salida normal, el terminal muestra un mensaje de parada y el número de lotes de comandos.

</div>
</section>
</div>

## Cómo funciona el bucle de control

| Operador | Función |
| --- | --- |
| `joint_feedback` | Se ejecuta con un periodo de 2.5 ms y lee posiciones, velocidades y el estado de los motores |
| `gravity` | Calcula el par de gravedad de prealimentación a partir del URDF y de los ángulos actuales de las articulaciones, y genera los parámetros de rigidez y amortiguación |
| `motor_commands` | Valida los comandos y envía comandos de control MIT a los siete motores a través de motorbridge |

Los tres operadores se ejecutan en secuencia en la misma partición `control` de Holoscan. Cada cola entre operadores conserva un mensaje pendiente. Pinocchio calcula el término de gravedad como `g(q) = RNEA(q, 0, 0)`. El objetivo de planificación es 400 Hz. Usa Nsight Systems para medir el intervalo real entre iteraciones.

El watchdog comprueba los lotes de comandos vencidos. motorbridge devuelve la realimentación en caché. Si la realimentación de los motores se detiene mientras aún se pueden enviar comandos, el ejemplo puede seguir leyendo valores antiguos. Durante las pruebas con hardware, debe haber alguien vigilando el brazo en el lugar. [Guía técnica oficial](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## Opcional: pruebas con motores simulados

Los dos conjuntos de pruebas oficiales cubren el par de gravedad, el grafo de control, la parada ante un fallo y el mantenimiento de un punto cartesiano. Detén el controlador de hardware antes de ejecutar los comandos siguientes. Puedes desconectar el cable USB del brazo para estas pruebas. Ejecútalas desde el directorio del ejemplo con el entorno activo. Los comandos compilan la biblioteca de motor simulado que usan las pruebas, sin necesidad del SDK de C++.

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

En la revisión fijada, se esperan 20 pruebas en el primer conjunto y 15 en el segundo, y cada uno termina con `OK`. Las pruebas de inyección de fallos producen registros de error previstos. Superar estas pruebas verifica la ruta de software. Sigue los pasos 2 y 3 para comprobar el cableado, las direcciones de los motores, las posiciones cero de las articulaciones y el comportamiento en el brazo físico.

## Opcional: comparación de fijación de CPU con Nsight Systems

Instala Nsight Systems y ejecuta `nsys --version` para comprobar que la CLI está disponible. Ambas ejecuciones de perfilado accionan el brazo físico. Ejecútalas de una en una y confirma que el proceso anterior se ha detenido antes de iniciar otra. Al final de cada ejecución, devuelve el brazo a una postura con apoyo antes de pulsar `Ctrl+C`. [Descarga de Nsight Systems](https://developer.nvidia.com/nsight-systems)

Primero, captura una ejecución con la planificación predeterminada y sin fijación de CPU.

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

A continuación, comprueba qué CPU lógicas están disponibles y elige un número de CPU permitido. El valor `2` de abajo es un ejemplo.

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

Inspecciona ambos informes. Usa nombres de archivo de salida nuevos en las repeticiones.

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

Abre los informes `.nsys-rep` en la interfaz de Nsight Systems e inspecciona los rangos NVTX de los tres operadores en la línea de tiempo. Mantén la postura del brazo, la duración de la captura y la carga del host lo más constantes posible entre ambas ejecuciones.

| Métrica | Cómo medirla |
| --- | --- |
| Duración del operador | Consulta las estadísticas del rango NVTX correspondiente en `nvtx_sum`. |
| Intervalo del bucle y fluctuación | Compara las marcas de tiempo sucesivas de entrada en `joint_feedback`. El intervalo objetivo es 2.5 ms. |
| Latencia dentro del grafo | Usa los marcadores de mensaje para emparejar eventos de la misma iteración y mide desde la entrada en `joint_feedback` hasta la entrada en `motor_commands`. Mide la transmisión serie por separado. |

Para el análisis por lotes, exporta el informe a SQLite. Ejecuta `nsys export --help` para comprobar si existe `--include-blobs`. Si falta la opción, actualiza Nsight Systems antes de exportar las cargas útiles de mensaje estructuradas. Para emparejar los eventos de publicación y recepción en la misma arista, usa `source_identity` y `sequence`. Después, sigue la entrada y la salida del operador para rastrear la misma iteración de control. [Anotaciones NVTX de Holoscan](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` fija la afinidad solo del hilo de control. NVIDIA también aisló un núcleo físico y su hermano SMT, descartó los primeros 10 segundos como calentamiento y conservó más de un millón de iteraciones por ejecución. Registra tu propio número de muestras, la topología de CPU y los ajustes de aislamiento al reproducir el experimento. Usa un trazo corto para inspeccionar el comportamiento del grafo y una muestra suficientemente grande para los percentiles de latencia de cola. [Condiciones del benchmark de NVIDIA](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [Guía de correlación de mensajes](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## Opcional: comparación en C++

Instala Holoscan SDK 5.0 con sus componentes de desarrollo, un compilador de C++20, CMake 4 o posterior, Ninja, Rust/Cargo y Python 3.12. NVIDIA usó la compilación 5.0.0.7 del SDK para este ejemplo. [Guía de instalación del SDK](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Instrucciones de compilación en C++ del ejemplo](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

Ejecuta estos comandos desde el directorio del ejemplo. Si ya has comprobado que el archivo del modelo existe, omite la primera línea.

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

Cuando las pruebas terminen correctamente, usa los pasos 2 y 3 para comprobar el hardware y la postura inicial. Después, usa el comando siguiente en lugar del comando de arranque de Python. Para perfilar C++ con Nsight Systems, cambia el ejecutable y el nombre de salida en los comandos de perfilado. Mantén la misma configuración serie y las mismas condiciones de comparación.

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## Solución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| pip no encuentra el wheel de Holoscan | Comprueba `python --version`, `uname -m` y `getconf GNU_LIBC_VERSION`, y usa una versión de Python y un sistema compatibles. |
| Falta `libcudart.so.13` | Comprueba que el wheel del runtime de CUDA esté instalado en el entorno de Python activo y vuelve a definir `LD_LIBRARY_PATH`. |
| Falta `libcuda.so.1` | Comprueba el controlador NVIDIA del host y la salida de `nvidia-smi`. El wheel del runtime de CUDA no incluye el controlador del host. |
| Falta el URDF o Pinocchio no se importa | Vuelve a ejecutar el script de descarga del modelo desde el directorio del ejemplo. Comprueba la versión de `pin` y la ruta de importación en el entorno activo. Evita cargar extensiones de ROS de otro entorno de Python. |
| El puerto serie no se abre o está ocupado | Comprueba el cable de datos USB, la ruta de `channel` y los permisos del puerto serie. Usa `fuser -v /dev/ttyACM0` con la ruta real del dispositivo para identificar el proceso que usa el puerto y detenlo desde su terminal original. |
| Un motor deja de informar realimentación o informa de un fallo | Sujeta el brazo y detén primero el controlador. Verifica los ID de los motores, la alimentación, el cableado y las instrucciones del firmware. Guarda el error completo y el número de articulación, y mantén el watchdog habilitado. |
| El brazo cae, empuja en sentido contrario u oscila | Sujeta el brazo y detén primero el controlador. Comprueba la orientación de la base, las posiciones cero de las articulaciones, el modelo y la carga. |
| El grafo no se compila o no arranca al especificar una CPU | Ejecuta `taskset -pc $$` para ver qué CPU están permitidas, o quita `--cpu` para restaurar la planificación predeterminada. |

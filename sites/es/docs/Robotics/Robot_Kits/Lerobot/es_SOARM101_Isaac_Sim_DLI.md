---
title: SO-ARM101 Isaac Sim DLI Simulación y recopilación de datos
description: Usa Isaac Sim 6.1 para ejecutar la escena de clasificación de viales de SO-ARM101, teleoperar el robot, vincular un seguidor físico y recopilar datos de LeRobot.
keywords:
  - SO-ARM101
  - Isaac Sim
  - NVIDIA DLI
  - LeRobot
slug: /soarm101_isaac_sim_dli
last_update:
  date: 11/16/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/es/soarm101_isaac_sim_dli/
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

# Recopilación de datos con SO-ARM101 en Isaac Sim 6.1

![Demostración de recopilación de datos de SO-ARM101 en Isaac Sim](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif)

## 1. Requisitos

> ⚠️ **Requisito de GPU.** Usa una GPU NVIDIA RTX con al menos 12 GB de VRAM, como la RTX 3080 12 GB o la RTX 4070 Ti SUPER 16 GB, y un controlador reciente.
> El robot, las tres vistas de cámara y la simulación física se ejecutan juntas. Con 8 GB de VRAM, el renderizador predeterminado puede sobrecargar el compositor del escritorio en pocos minutos. La pantalla puede congelarse y dejar de responder al ratón y al teclado, requiriendo un reinicio forzado. Isaac Sim en sí puede seguir ejecutándose y escribiendo registros. Durante el desarrollo, un portátil con 8 GB se congeló dos veces incluso con las mitigaciones integradas y `--single-viewport` activado. Usa una GPU con al menos 12 GB de VRAM para un funcionamiento fiable.
> Si tu GPU tiene 8 GB de VRAM, consulta la sección 10 para ver formas de reducir la carga de renderizado. El sistema aún puede congelarse.

- Ubuntu 22.04. Isaac Sim 6.1 también es compatible con Ubuntu 24.04.
- GPU NVIDIA RTX con **al menos 12 GB de VRAM**.
- Un controlador NVIDIA reciente.
- El paquete standalone de Isaac Sim 6.1.
- Un brazo líder SO-ARM101 conectado por USB para teleoperación física. Conecta también un brazo seguidor SO-ARM101 para vincular un seguidor físico con la simulación.

Usa la siguiente estructura de directorios.

```text
~
├── isaacsim/                 # Isaac Sim 6.1 installation directory
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot virtual environment
```

## 2. Instalar Isaac Sim 6.1

Descarga `isaac-sim-standalone-6.1.0-linux-x86_64.zip` (unos 12,4 GB) desde NVIDIA. Descomprímelo en `~/isaacsim` y ejecuta el script de post-instalación.

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

Ejecuta el comprobador de compatibilidad para confirmar que tu sistema cumple los requisitos.

```bash
./isaac-sim.compatibility_check.sh     # Expected output: System checking result: PASSED
```

- En el primer inicio con `./isaac-sim.sh`, la compilación de shaders puede tardar varios minutos.
- Si instalaste Isaac Sim en otro lugar, establece `ISAACSIM_ROOT` en el directorio de instalación antes de iniciar la simulación. Consulta la sección 6.
- Las advertencias de IOMMU, DLSS-RR y ancho de enlace PCIe en el registro de inicio no impiden que el tutorial se ejecute.

## 3. Obtener el código (se requiere Git LFS)

> ⚠️ El robot, el soporte de la cámara, el banco de trabajo, los viales y el bastidor de viales usan recursos USD almacenados en Git LFS. Instala `git-lfs` antes de clonar para que Isaac Sim pueda cargar todos los recursos.

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

Comprueba que los recursos se descargaron correctamente.

```bash
du -sh assets/
# Expected size: about 157 MB

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# Expected output: PXR-USDC. If you see version, run git lfs pull again.
```

## 4. Configurar el entorno de LeRobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Clone the repository
git clone https://github.com/Seeed-Projects/lerobot.git

# Create a virtual environment with Python 3.12
uv venv --python 3.12 .venv
source .venv/bin/activate

# Install LeRobot with the dataset and visualization extras
uv pip install -e "./lerobot[dataset,viz]"

# Install the SO-ARM101 servo dependency
uv pip install feetech-servo-sdk
```

> Los extras `[dataset,viz]` instalan dependencias como `datasets`, `Pillow`, `av` y `rerun`. Si faltan estas dependencias, la conversión de episodios falla y la terminal muestra `[dataset-error]`.

## 5. Conectar y calibrar el SO-ARM101

Conecta el brazo líder físico a la alimentación y enchufa su cable de datos USB. Ejecuta `lerobot-find-port` para identificar los puertos del líder y del seguidor. Los ejemplos usan `/dev/ttyACM1` para el líder y `/dev/ttyACM0` para el seguidor. Sustituye las rutas reales de tus puertos. Guarda la calibración como `so101_leader` y `so101_follower` para que coincidan con los ID de dispositivo predeterminados del proyecto.

### Calibrar el brazo líder

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

Cuando se te indique, mueve cada articulación al punto medio de su rango y pulsa Intro. Luego mueve cada articulación a lo largo de todo su rango de movimiento y pulsa Intro de nuevo para guardar. Consulta la [demostración de calibración de LeRobot SO-101](https://huggingface.co/docs/lerobot/so101#calibrate).

### Calibrar el brazo seguidor

Calibra el seguidor antes de vincularlo con la simulación. Usa el mismo procedimiento de punto medio y rango completo y espera a la orden para guardar la calibración y salir.

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

## 6. Iniciar la teleoperación y recopilar datos

Abre el directorio del proyecto. Si Isaac Sim está instalado en otro lugar, ejecuta `export ISAACSIM_ROOT=/path/to/isaacsim` en la terminal actual.

```bash
cd ~/rebot-arm-dli-isaacsim
```

### Elegir un modo de teleoperación

Usa el líder físico para controlar el brazo simulado. El estado `src=LEADER` indica que la simulación está siguiendo al líder.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

Para vincular el seguidor físico, primero coloca ambos brazos físicos en posturas similares y luego ejecuta el siguiente comando. El estado `src=FOLLOWER` indica que la simulación está siguiendo las posiciones articulares medidas del seguidor.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

Para controlar el brazo simulado sin un líder físico, inicia la simulación, haz clic en la ventana 3D y pulsa `Y` para entrar en el modo de teclado.

```bash
./run_so101.sh --no-start-bridge
```

| Tecla | Acción en modo teclado |
| --- | --- |
| `W` / `S` / `A` / `D` | Mover el efector final hacia delante, atrás, izquierda o derecha |
| `↑` / `↓` | Subir o bajar el efector final |
| `Q` / `E` | Girar la muñeca |
| `Z` / `C` | Ajustar el cabeceo del efector final |
| `G` | Conmutar la pinza |
| `B` | Cambiar entre pasos de 5 mm y 15 mm |

### Registrar la tarea de clasificación de viales

1. Haz clic en la ventana de simulación y pulsa `R` para reiniciar los tres viales y volver a aleatorizar la escena.
2. Pulsa `S` en modo líder o `T` en modo teclado para empezar a grabar.
3. Coloca los tres viales en posición vertical en el bastidor, uno por uno. A medida que la pinza se acerca a un vial, la línea guía te ayuda a juzgar la distancia de agarre. La terminal informa de `[GRASP]` y `[RELEASE]`.
4. Pulsa de nuevo la tecla de grabación para guardar el episodio. En modo líder, también puedes pulsar `C` para descartarlo.

El conjunto de datos se escribe en `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side` con el ID `local/so101_vials_front_side` y el texto de tarea `Put the three vials into the vial rack`. Cada grabación contiene datos de articulaciones y pinza del SO-ARM101 junto con vídeo a 30 FPS de las cámaras de muñeca y cenital.

### Vistas de cámara

| ![frontal](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![lateral](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![externa](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| Cámara de muñeca `front` (grabada) | Cámara lateral `side` (para visualización) | Cámara cenital `external` (grabada) |

## 7. Inspeccionar, visualizar y reproducir el conjunto de datos

### Comprobar la sincronización de vídeo y acciones

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --mode local \
  --episode-index 0
```

Comprueba que ambos vídeos se mantengan sincronizados con las acciones y estados. Busca fotogramas negros, fotogramas congelados y objetos que obstruyan la vista.

### Reproducir acciones en Isaac Sim

En la primera terminal, inicia el receptor de simulación.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --no-dr
```

En una segunda terminal, reproduce el episodio 0. Añade `--loop` para reproducción continua.

```bash
source ~/rebot_lerobot/.venv/bin/activate
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts python scripts/replay_episode_so101.py --episode 0
```

## 8. Validar sin hardware

Los siguientes comandos usan un líder simulado para comprobar el seguimiento de articulaciones. El segundo comando también comprueba ambas cámaras, la codificación H.264 y la salida del conjunto de datos de LeRobot.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

Para generar dos grabaciones simuladas, ejecuta el siguiente comando. El ejemplo escribe los datos de validación en un directorio separado de tus grabaciones habituales.

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

## 9. Entrenar una política ACT

Ejecuta 60 pasos de entrenamiento ACT con datos del directorio de grabación habitual para verificar el flujo de trabajo de entrenamiento. El modelo entrenado y los archivos relacionados se guardan en `checkpoints/last/pretrained_model/` dentro del directorio de salida.

```bash
source ~/rebot_lerobot/.venv/bin/activate
lerobot-train \
  --policy.type=act \
  --policy.push_to_hub=false \
  --dataset.repo_id=local/so101_vials_front_side \
  --dataset.root=~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --output_dir=~/rebot_lerobot/outputs/train/act_so101 \
  --steps=60 --batch_size=4 --num_workers=2
```

## 10. Problemas conocidos

La escena de SO-ARM101 usa Path Tracing de forma predeterminada. Si la carga de renderizado es demasiado alta, usa `--single-viewport` para mostrar solo la ventana principal mientras sigues grabando ambas cámaras. Usa `--realtime-renderer` para cambiar al renderizado en tiempo real. El vídeo en tiempo real puede tener más ruido.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --single-viewport --realtime-renderer
```

## 11. Solución de problemas

- **No se puede acceder al puerto serie.** Comprueba el puerto del dispositivo y el cable de datos. Si tu cuenta no tiene permisos para el puerto serie, ejecuta `sudo usermod -aG dialout "$USER"`, cierra sesión y vuelve a iniciarla, y prueba de nuevo.
- **El brazo simulado y el físico tienen poses diferentes.** Verifica los puertos serie y los ID de calibración de ambos brazos. Vuelve a comprobar el punto medio de calibración y el rango de movimiento de cada articulación.
- **No se puede encontrar Isaac Sim Python.** Comprueba que el directorio de instalación contenga `python.sh` y establece `ISAACSIM_ROOT` en ese directorio.
- **Faltan recursos de la escena.** Ejecuta `git lfs pull` desde el directorio del proyecto y comprueba los recursos como se describe en la sección 3.
- **La grabación informa `[dataset-error]`.** Comprueba el entorno virtual de LeRobot y los extras `[dataset,viz]` de la sección 4.
- **La terminal informa `[watchdog] Leader data timed out`.** Comprueba la conexión USB del líder y el proceso del puente serie. La simulación mantiene su último objetivo mientras la comunicación está interrumpida.

<details>
<summary>Licencia MIT ascendente</summary>

Licencia MIT

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

Por la presente se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y de los archivos de documentación asociados (el "Software"), para tratar
con el Software sin restricción, incluyendo sin limitación los derechos
de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
copias del Software, y de permitir a las personas a las que se les proporcione el Software
hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas
las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUYENDO PERO NO LIMITADA A LAS GARANTÍAS DE COMERCIABILIDAD,
IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INFRACCIÓN. EN NINGÚN CASO LOS
AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA
RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O DE OTRO TIPO, QUE SURJA DE,
FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL
SOFTWARE.

</details>

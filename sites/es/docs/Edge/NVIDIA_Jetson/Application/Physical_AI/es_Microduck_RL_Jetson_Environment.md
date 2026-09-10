---
description: Preparar JetPack 7.2 y desplegar el entorno de aprendizaje por refuerzo Microduck con CUDA en Jetson Orin NX.
title: Desplegar el entorno RL de Microduck en Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_jetson_environment
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Desplegar el entorno RL de Microduck en Jetson

Este capítulo prepara el sistema Jetson, instala el entorno del proyecto, explica la estructura de directorios y verifica que el entrenamiento PPO pueda ejecutarse en CUDA.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}>Siguiente: Movimientos oficiales <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## Hardware y software

La siguiente plataforma se validó para esta demo:

| Elemento | Versión |
|---|---|
| Dispositivo | Seeed reComputer con Jetson Orin NX 16GB |
| SO | Ubuntu 24.04 LTS, aarch64 |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| CUDA del sistema | 13.2 |
| Python | 3.12 |
| PyTorch | 2.9.1+cu130 |
| MuJoCo | 3.10.0 |
| Warp | 1.12.0 |

Utiliza almacenamiento NVMe con al menos 25GB de espacio libre. Se recomiendan refrigeración activa, una fuente de alimentación estable y una conexión de red fiable.

:::warning
No reemplaces de forma independiente el controlador CUDA proporcionado por JetPack ni los paquetes L4T. El proyecto de Python está aislado en `.venv`, mientras que la pila GPU del sistema sigue gestionada por JetPack.
:::

## Directorio del proyecto

```text
~/microduck-jetson/
├── deploy_microduck_jetson.sh
├── microduck_rl/
│   ├── src/mjlab_microduck/tasks/
│   ├── scripts/
│   ├── pretrained/pollen-robotics/
│   ├── models/checkpoints/
│   └── logs/rsl_rl/
├── microduck_jetson_startup.md
├── microduck_jetson_training_guide.md
└── microduck_custom_action_training.md
```

El directorio `.venv` se crea localmente en Jetson y, de forma intencionada, no se incluye en el repositorio Git.

## Clonar el repositorio

```bash
mkdir -p ~/microduck-jetson
cd ~/microduck-jetson

git clone -b develop https://github.com/jjjadand/microduck_rl.git
cd microduck_rl
```

## Ejecutar el script de despliegue

```bash
cd ~/microduck-jetson/microduck_rl

SUDO_PASSWORD=<JETSON_PASSWORD> \
TARGET_DIR=$HOME/microduck-jetson/microduck_rl \
bash deploy_microduck_jetson.sh
```

El script instala las dependencias de compilación y visualización, instala `uv`, crea `.venv` de Python 3.12, sincroniza las dependencias bloqueadas del proyecto, instala la rueda de PyTorch con CUDA compatible y realiza la validación de CUDA.

:::note
Pasar una contraseña a través de una variable de entorno es conveniente para esta configuración de laboratorio reproducible. Para un dispositivo compartido o de producción, revisa el script y ejecuta los comandos con privilegios de forma interactiva.
:::

## Entrar en el entorno

Todos los comandos del proyecto deben ejecutarse desde la raíz del repositorio:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
```

Utiliza `uv run --no-sync` para los comandos de esta guía. Esto evita que una resincronización de dependencias no deseada reemplace la instalación de PyTorch con CUDA para Jetson.

## Verificar CUDA

```bash
uv run --no-sync python3 - <<'PY'
import torch

print("PyTorch:", torch.__version__)
print("CUDA runtime:", torch.version.cuda)
print("CUDA available:", torch.cuda.is_available())
print("GPU:", torch.cuda.get_device_name(0))

left = torch.randn(512, 512, device="cuda")
right = torch.randn(512, 512, device="cuda")
result = left @ right
torch.cuda.synchronize()
print("CUDA matmul:", result.device)
PY
```

Los resultados esperados incluyen `CUDA available: True`, un nombre de GPU Orin y `CUDA matmul: cuda:0`.

## Ejecutar la prueba rápida de entrenamiento

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Una ejecución correcta crea un directorio bajo `logs/rsl_rl/velocity/` que contiene archivos de configuración, eventos de TensorBoard y uno o más checkpoints `.pt`.

Cuando MuJoCo y los gestores de entrenamiento se inician, la terminal imprime la configuración activa de terminación, recompensa, currículo, actor y crítico:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/start-mujoco.png" alt="MuJoCo de Microduck y gestores de entrenamiento iniciándose en la terminal" />
</div>

Después de que comience la recopilación de rollouts, cada iteración de aprendizaje informa del rendimiento, términos de recompensa, duración del episodio, valores de currículo y estadísticas de terminación:

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_training.png" alt="Métricas de iteración de entrenamiento PPO de Microduck en Jetson" />
</div>

## Ejecutar 4096 entornos de entrenamiento en paralelo

Para la ejecución de entrenamiento completa utilizada en esta demo, el backend simula **4096 entornos Microduck independientes** en paralelo:

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard
```

`jtop` muestra la carga de la GPU y el estado del dispositivo mientras se ejecuta el proceso de entrenamiento con 4096 entornos:

<div align="center">
  <img width="760" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_train_jtop.png" alt="Salida de jtop en Jetson mientras se entrenan 4096 entornos Microduck" />
</div>

Si la memoria es insuficiente, reduce el número de entornos usando `4096 → 2048 → 1024 → 512`.

## Visualizar los entornos de entrenamiento

El **backend sigue entrenando los 4096 entornos**. Los ajustes del visor solo controlan cuántos robots se renderizan para inspección y no reducen el lote de entrenamiento del backend a menos que se cambie `--env.scene.num-envs`.

### Renderizar un Microduck

Renderizar un robot es la forma más clara de inspeccionar la postura, los contactos y la marcha durante el entrenamiento:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env_one.png" alt="Un Microduck visualizado mientras el backend entrena 4096 entornos" />
</div>

### Renderizar múltiples Microducks

Renderizar muchos robots hace visible el concepto de entornos paralelos. La ejecución completa del backend sigue conteniendo 4096 entornos aunque solo se muestre un subconjunto en el visor:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env-num_many.png" alt="Múltiples Microducks visualizados mientras el backend entrena 4096 entornos" />
</div>

El visor está pensado para ejecuciones cortas de inspección. Las ejecuciones largas de entrenamiento normalmente usan renderizado EGL sin cabeza para evitar la sobrecarga de dibujo continuo.

## Configuración de rendimiento opcional

Comprueba los modos de energía compatibles antes de seleccionar uno:

```bash
sudo nvpmodel -q
sudo nvpmodel
```

Supervisa el dispositivo mientras entrenas:

```bash
tegrastats
```

No copies un número de modo de energía de otro modelo de Jetson. Selecciona un modo de alto rendimiento compatible para el dispositivo exacto.

## Siguiente paso

<div align="center">
  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(0,168,107,.25)'}}>Entrenar y ejecutar movimientos oficiales →</a>
</div>

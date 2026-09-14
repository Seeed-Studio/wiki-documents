---
description: Entrena una tarea oficial de Microduck, visualiza checkpoints PT y ejecuta inferencia ONNX multipolítica controlada por teclado en MuJoCo sobre Jetson.
title: Entrenar y ejecutar movimientos oficiales de Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_official_policies
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Entrenar y ejecutar movimientos oficiales de Microduck

Este capítulo cubre la ruta más corta de entrenamiento e inferencia: descubrir las tareas disponibles, entrenar una tarea oficial, visualizar un checkpoint `.pt`, ejecutar las políticas ONNX proporcionadas y controlar el robot simulado con un teclado.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/es/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#3182ce', color:'#fff', fontWeight:'700', textDecoration:'none'}}>Siguiente: movimiento personalizado <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## Familias de tareas disponibles

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep MicroDuck
```

| Movimiento | ID de tarea |
|---|---|
| Caminar | `Mjlab-Velocity-Flat-MicroDuck` |
| Caminar y recuperación de caídas | `Mjlab-VelStand-Flat-MicroDuck` |
| Levantarse desde el suelo | `Mjlab-StandUp-Flat-MicroDuck` |
| Sentarse y ponerse de pie | `Mjlab-SitStand-Flat-MicroDuck` |
| Recogida desde el suelo | `Mjlab-GroundPick-Flat-MicroDuck` |
| Voltereta hacia delante | `Mjlab-Roulade-Flat-MicroDuck` |
| Patada al balón | `Mjlab-BallKick-Flat-MicroDuck` |
| Locomoción con rodillos | `Mjlab-Velocity-Flat-MicroDuck-Rollers` |

## Entrenar la política de caminar

Comienza con la prueba rápida de cinco iteraciones antes de cada ejecución larga:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Para una ejecución más larga:

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard
```

Aumenta el número de entornos solo cuando la memoria y la temperatura lo permitan. Una secuencia de retroceso práctica es `4096 → 2048 → 1024 → 512`.

## Visualizar un checkpoint PT

Encuentra un checkpoint:

```bash
find logs/rsl_rl -type f -name 'model_*.pt' | sort
```

### Visor en el navegador vía SSH

```bash
export MUJOCO_GL=egl

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer viser
```

Abre `http://<JETSON_IP>:8080` desde un ordenador en la misma red.

### Visor nativo en el escritorio del Jetson

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

## Ejecutar la demo oficial ONNX multipolítica

El repositorio contiene nueve políticas ONNX oficiales en `pretrained/pollen-robotics/`.

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync python3 scripts/infer_policy.py \
  --walking pretrained/pollen-robotics/alpha_walking.onnx \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --sitstand pretrained/pollen-robotics/alpha_sitstand.onnx \
  --ground-pick pretrained/pollen-robotics/alpha_ground_pick.onnx \
  --roulade pretrained/pollen-robotics/roulade.onnx \
  --kick-left pretrained/pollen-robotics/ball_kick_left.onnx \
  --kick-right pretrained/pollen-robotics/ball_kick_right.onnx \
  --new-cmd-obs
```

### Controles de teclado

| Tecla | Comando |
|---|---|
| Teclas de flecha | Velocidad hacia delante, hacia atrás y lateral |
| `A` / `E` | Girar a la izquierda / derecha |
| `G` | Comportamiento de recogida desde el suelo |
| `Y` | Transición sentarse / ponerse de pie |
| `R` | Voltereta hacia delante |
| `K` / `L` | Patada izquierda / derecha |
| `Space` | Borrar comando de velocidad |
| `Q` | Salir |

## Resultados de inferencia

Los siguientes GIF muestran resultados de inferencia ONNX capturados directamente desde MuJoCo en el Jetson.

### Caminar

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/walking-loop.gif" alt="Microduck walking policy inference loop in MuJoCo" />
</div>

La política de caminar sigue continuamente los comandos de velocidad y giro del teclado.

### Rodar

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/rolling.gif" alt="Microduck rolling policy inference in MuJoCo" />
</div>

Pulsa `R` para cambiar a la política de voltereta hacia delante.

### Patada al balón

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/kick.gif" alt="Microduck keyboard-triggered ball-kick policy inference in MuJoCo" />
</div>

Pulsa `K` o `L` para activar la política de patada con el pie izquierdo o derecho en la escena del balón.

## PT y ONNX sirven para propósitos diferentes

- Los checkpoints `.pt` contienen actor, crítico, optimizador, normalizador y estado de entrenamiento. Úsalos para reanudar el entrenamiento y para la evaluación con `play`.
- `.onnx` contiene el grafo de inferencia desplegable. Los archivos ONNX oficiales no contienen el estado de entrenamiento PPO y no se pueden convertir de nuevo en un checkpoint reanudable.
- Los archivos PT bajo `models/checkpoints/` son resultados de entrenamiento de caminar en Jetson incluidos con esta demo; no son lanzamientos oficiales de PT de Pollen Robotics.

## Exportar tu propio ONNX

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file walking_custom.onnx
```

Utiliza siempre `scripts/export.py`. El exportador del proyecto integra el normalizador de observaciones en el grafo ONNX, lo cual es necesario para un comportamiento correcto en tiempo de ejecución.

## Siguiente paso

<div align="center">
  <a href="/es/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #3182ce, #205493)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(49,130,206,.25)'}}>Crear un movimiento personalizado →</a>
</div>

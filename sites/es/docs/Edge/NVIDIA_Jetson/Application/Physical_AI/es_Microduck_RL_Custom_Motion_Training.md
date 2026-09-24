---
description: Crea un movimiento personalizado de Microduck seleccionando una plantilla, definiendo fases y recompensas, registrando la tarea, entrenándola y exportando ONNX.
title: Crear un movimiento personalizado de Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/11/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/es/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
---

# Crear un movimiento personalizado de Microduck

Este capítulo presenta el flujo de trabajo del proyecto para construir un nuevo movimiento. El ejemplo usa un comportamiento basado en fases de **reverencia (Bow)**, pero el mismo proceso se aplica a asentir con la cabeza, agacharse, estirarse, habilidades de recuperación y otros movimientos del robot.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> Official Motions</a>
</div>

## Comprender el contrato de la política

Todas las políticas intercambiables en caliente de Microduck comparten la misma interfaz:

- **Observación del actor de 61 dimensiones**: 48 valores de propiocepción más el bloque de comandos de 13 dimensiones `[twist(3), head_pose(4), body_pose(6)]`.
- **Salida de acción de 14 dimensiones** para las articulaciones de los servos activos.
- Las ranuras de comando no utilizadas siguen presentes y se rellenan con ceros.
- Las articulaciones pasivas de ruedas y holgura usan la convención de nombres `passive_*` y no deben seleccionarse como articulaciones accionadas.
- Los ID de las articulaciones deben resolverse mediante los helpers del proyecto en lugar de codificarse de forma rígida.
- La exportación a ONNX debe hacerse a través de `scripts/export.py` para que se incluya el normalizador de observaciones.

Romper este contrato puede producir una política que funcione en un visor pero que no pueda cambiarse ni desplegarse correctamente.

## Seleccionar la plantilla más cercana

| Movimiento deseado | Plantilla recomendada |
| --- | --- |
| Movimiento de velocidad continua | `microduck_velocity_env_cfg.py` |
| Recuperación desde un estado específico | `microduck_standup_env_cfg.py` |
| Transición de comando de dos estados | `microduck_sitstand_env_cfg.py` |
| Movimiento lento basado en fases | `microduck_ground_pick_env_cfg.py` |
| Maniobra dinámica rápida | `microduck_roulade_env_cfg.py` |
| Movimiento con rodillos | `microduck_velocity_rollers_env_cfg.py` |

Para una reverencia, la tarea de recogida desde el suelo es un punto de partida útil porque ya implementa comandos por fases, descenso, mantenimiento, elevación, seguimiento de pose y recuperación.

## Copiar la plantilla

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

Haz una copia de seguridad del registro de tareas y de las funciones MDP compartidas antes de editar:

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## Diseñar la línea de tiempo del movimiento

Una reverencia sencilla puede usar una fase normalizada de `0.0` a `1.0`:

| Fase | Comportamiento |
| --- | --- |
| `0.00–0.25` | Descender hacia la pose de reverencia |
| `0.25–0.55` | Mantener la reverencia |
| `0.55–0.85` | Volver a la pose inicial |
| `0.85–1.00` | Estabilizarse en posición erguida |

Utiliza interpolación suave en lugar de cambiar directamente entre dos poses. Los cambios bruscos de objetivo suelen causar altas tasas de acción, impactos o gradientes de recompensa inestables.

## Definir una pose objetivo

Crea un mapeo de nombres de articulaciones en `microduck_bow_env_cfg.py`. Comienza con ángulos conservadores e inspecciónalos con el Viewer antes de entrenar.

```python
BOW_POSE = {
    "left_hip_pitch": -0.20,
    "left_knee": 0.30,
    "left_ankle": -0.10,
    "neck_pitch": 0.35,
    "head_pitch": 0.20,
    "right_hip_pitch": -0.20,
    "right_knee": 0.30,
    "right_ankle": -0.10,
}
```

Los valores anteriores son solo un punto de partida. Confirma los nombres reales de las articulaciones y los signos en la configuración del robot.

## Construir la recompensa

Una recompensa útil para movimientos personalizados suele combinar:

- Seguimiento de la pose objetivo condicionado por la fase.
- Una recompensa por el resultado de la tarea, como bajar la cabeza durante la reverencia.
- Recompensas de posición erguida y recuperación cerca del final de la secuencia.
- Términos de contacto de pies y estabilidad lateral.
- Penalizaciones por límites articulares, colisiones, tasa de acción e impactos.

Reutiliza las recompensas de la plantilla y las funciones compartidas en `src/mjlab_microduck/tasks/mdp.py` siempre que sea posible. Añade una función nueva solo cuando la medida deseada aún no exista.

:::warning
Comprueba la convención de signos antes de asignar un peso. Una función que ya devuelve una penalización negativa normalmente usa un peso positivo solo cuando eso coincide con la convención del proyecto. Inspecciona las configuraciones de tareas cercanas y confirma la métrica ponderada en TensorBoard.
:::

## Registrar la nueva tarea

Importa la nueva configuración en `src/mjlab_microduck/tasks/__init__.py`, luego registra un nuevo ID siguiendo las entradas existentes:

```python
register_mjlab_task(
    task_id="Mjlab-Bow-Flat-MicroDuck",
    env_cfg=microduck_bow_env_cfg,
    play_env_cfg=microduck_bow_play_env_cfg,
    rl_cfg=microduck_bow_rl_cfg,
)
```

Utiliza los nombres de funciones exactamente como se implementan en tu nuevo módulo y refleja la firma actual del registro.

Confirma el registro:

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## Inspeccionar antes de entrenar

Lanza una política aleatoria para comprobar el modelo, el estado de reinicio, los sensores, el gestor de comandos y la configuración de términos:

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

Busca contactos no válidos, penetración al generarse, errores en la dirección de las articulaciones, terminación inmediata, valores NaN y poses objetivo imposibles.

## Ejecutar una prueba rápida (smoke test)

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Solo inicies una ejecución de entrenamiento larga después de que esto termine sin excepciones ni NaNs.

## Entrenar por etapas

Un plan de estudios práctico es:

1. **Descubrimiento del movimiento**: estado de inicio fácil, recompensa de pose amplia, perturbación mínima.
2. **Finalización del movimiento**: refuerza los términos de mantenimiento y recuperación; añade recompensas basadas en el resultado.
3. **Robustez**: aumenta la diversidad de estados iniciales, la aleatorización de fricción, los empujes externos y las variantes de holgura.

Ejemplo de ejecución larga:

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

Observa la recompensa principal de la tarea en lugar de solo la recompensa total. Una política puede mejorar las métricas de regularización sin llegar nunca a completar el movimiento previsto.

## Visualizar y exportar

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

Exporta el checkpoint aceptado:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

Para añadir activación por teclado, amplía `scripts/infer_policy.py` usando los patrones existentes de cambio de política de sentarse/levantarse, recogida desde el suelo, roulade y patada. Escribe en la ranura de comando que espera la nueva política y mantén sin cambios la disposición de 61 dimensiones de la observación.

## Ejemplo verificado: apertura frontal-trasera

La tarea personalizada validada usa un movimiento de doble apoyo más factible que el
experimento anterior de equilibrio sobre una sola pierna. El pie izquierdo se mueve hacia delante, el pie derecho
se mueve hacia atrás, ambos pies permanecen apoyados en el suelo y el robot vuelve a su
pose normal de pie.

El ID de tarea registrado es:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Línea de tiempo del movimiento

La tarea usa un comando de fase cíclica de seis segundos:

| Fase normalizada | Comportamiento |
| --- | --- |
| `0.00–0.30` | Pasar de estar de pie a la apertura frontal-trasera |
| `0.30–0.58` | Mantener la postura de apertura con ambos pies apoyados |
| `0.58–0.78` | Volver con las piernas hacia la pose de pie |
| `0.78–1.00` | Estabilizarse en la pose inicial de dos pies |

Las constantes de temporización se definen en
`src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py`:

```python
SPLIT_PERIOD = 6.0
SPLIT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
TARGET_SAGITTAL_SEPARATION = 0.095
```

### Definir la pose objetivo

El objetivo se expresa mediante nombres de articulaciones y se comprobó con cinemática
directa de MuJoCo. El objetivo mantiene los dos sitios de los pies al mismo nivel mientras produce unos
`9.5 cm` de separación firmada frontal-trasera entre los pies:

```python
FRONT_BACK_SPLIT_POSE = {
    "left_hip_pitch": -1.1865,
    "left_knee": -0.1386,
    "left_ankle": 1.0452,
    "right_hip_pitch": 0.0603,
    "right_knee": 0.4927,
    "right_ankle": 0.4293,
    "neck_pitch": 0.3491,
    "head_pitch": 0.3491,
}
```

El editor de poses interactivo es `scripts/front_back_split_pose_editor.py`.
Abre una ventana de MuJoCo con la gravedad desactivada e imprime la pose final con nombre
cuando se cierra la ventana:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python scripts/front_back_split_pose_editor.py
```

Si el escritorio de Jetson usa una pantalla diferente, ejecuta el comando directamente desde una
terminal gráfica y usa el valor impreso por `echo $DISPLAY`.

### Construir la recompensa del movimiento de apertura

La tarea combina estos objetivos específicos del movimiento:

| Recompensa | Propósito |
| --- | --- |
| `split_pose` | Seguir la pose articular interpolada de estar de pie a la apertura |
| `split_pose_l1` | Proporcionar un gradiente direccional del error articular |
| `feet_grounded` | Mantener ambos pies en contacto con el terreno |
| `feet_flat` | Penalizar sitios de pies inclinados |
| `sagittal_separation` | Seguir la separación firmada frontal-trasera entre los pies |

La tarea también mantiene las recompensas de posición erguida, límite articular, autocolisión, velocidad angular,
tasa de acción, actuador, codificador, fricción, masa, inercia y centro de masa
términos de aleatorización heredados del entorno Microduck. El término
`sagittal_separation` mide ambos pies en el marco de referencia de la base del robot, por lo que
la recompensa y la pose usan la misma convención de coordenadas.

### Registrar la tarea

`Mjlab-FrontBackSplit-Flat-MicroDuck` es el ID de tarea usado por el registro de MJLab.
No es un nombre de archivo y no se pasa como argumento a la factoría de entornos.

| Elemento | Ubicación | Propósito |
| --- | --- | --- |
| Configuración del entorno y de RL | `src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` | Define la pose objetivo, el temporizado de fases, la escena, las recompensas y la configuración de PPO |
| Recompensa de separación de fase | `src/mjlab_microduck/tasks/mdp.py` | Rastrea la separación sagital firmada de los pies en el marco de referencia de la base del robot |
| Registro de la tarea | `src/mjlab_microduck/tasks/__init__.py` | Vincula el ID de tarea con el entorno y la configuración de RL |
| Editor de poses | `scripts/front_back_split_pose_editor.py` | Abre e imprime la pose objetivo de MuJoCo validada |
| Punto de entrada de la CLI | `uv run --no-sync train <task-id>` | Busca la tarea registrada e inicia el entrenamiento |

Confirma el registro:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep FrontBackSplit
```

Salida esperada:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Ejecutar pruebas de humo

Comienza con 64 entornos y cinco iteraciones:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Para la Jetson de referencia de 16 GB, la ejecución completa validada usó 2048 entornos:

```bash
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000
```

La ejecución completada alcanzó episodios completos de 600 pasos, cero terminaciones por caída en
las últimas fases del entrenamiento y recompensas casi máximas de pose dividida, contacto de pies y separación.
En una Jetson Orin NX u Orin Nano de 8 GB, comienza con `1024` entornos y
auméntalos solo después de comprobar la memoria con `jtop`.

### Visualizar un checkpoint de PT

Usa el checkpoint completado con el visor nativo de MuJoCo:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync play Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --num-envs 1 \
  --viewer native
```

### Exportar y ejecutar la política ONNX

Exporta el checkpoint con el contenedor del proyecto para que el normalizador de observaciones quede
integrado en el grafo ONNX:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --onnx-file "$PWD/models/exports/front_back_split/front_back_split_model_999.onnx" \
  --num-envs 1
```

Ejecuta la política mediante la demo de inferencia de MuJoCo controlada por teclado:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python3 scripts/infer_policy.py \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --front-back-split models/exports/front_back_split/front_back_split_model_999.onnx \
  --new-cmd-obs
```

Pulsa `O` para ejecutar un ciclo de apertura frontal-trasera de seis segundos. La política recibe la
misma orden de fase coseno/seno usada durante el entrenamiento, luego el control vuelve
automáticamente a la política de estar de pie. Si también se proporciona una política de caminar, la demo
vuelve a caminar cuando hay un comando de velocidad distinto de cero activo.

La antigua opción `--one-leg-balance` y los archivos de tarea de una sola pierna ya no forman parte del
repositorio actual. Usa `--front-back-split` para este movimiento verificado.

## Lista de comprobación de desarrollo

- [ ] La disposición de observación sigue siendo 61D.
- [ ] La salida de la política sigue siendo 14D.
- [ ] Las articulaciones pasivas se excluyen de las acciones y de las observaciones de los servos.
- [ ] El evento de inicio de BAM y la aleatorización de dominio siguen activos donde se requiere.
- [ ] La tarea aparece en `list-envs`.
- [ ] La inspección del visor con política aleatoria se completa correctamente.
- [ ] La prueba de humo con 64 entornos se completa correctamente.
- [ ] Las métricas principales de la tarea mejoran en TensorBoard.
- [ ] El checkpoint final de PT se comporta correctamente en MuJoCo.
- [ ] ONNX se exporta con el script del proyecto y se ensaya antes del despliegue en el robot.

<div align="center">
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>Volver al inicio de la demo</a>
</div>

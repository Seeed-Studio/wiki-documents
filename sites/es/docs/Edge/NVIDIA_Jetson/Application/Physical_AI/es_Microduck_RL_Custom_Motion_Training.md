---
description: Crea un movimiento personalizado de Microduck seleccionando una plantilla, definiendo fases y recompensas, registrando la tarea, entrenándola y exportando ONNX.
title: Crear un movimiento personalizado de Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/07/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/es/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
---

# Crear un movimiento personalizado de Microduck

Este capítulo presenta el flujo de trabajo del proyecto para construir un nuevo movimiento. El ejemplo utiliza un comportamiento basado en fases de **reverencia** (Bow), pero el mismo proceso se aplica a asentir con la cabeza, agacharse, estirarse, habilidades de recuperación y otros movimientos del robot.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> Official Motions</a>
</div>

## Comprender el contrato de la política

Todas las políticas intercambiables en caliente de Microduck comparten la misma interfaz:

- **Observación del actor de 61 dimensiones**: 48 valores de propiocepción más el bloque de comando de 13 dimensiones `[twist(3), head_pose(4), body_pose(6)]`.
- **Salida de acción de 14 dimensiones** para las articulaciones de los servos activos.
- Las ranuras de comando no utilizadas siguen presentes y se rellenan con ceros.
- Las ruedas pasivas y las articulaciones con holgura usan la convención de nombres `passive_*` y no deben seleccionarse como articulaciones accionadas.
- Los ID de las articulaciones deben resolverse mediante los helpers del proyecto en lugar de codificarse de forma rígida.
- La exportación a ONNX debe hacerse a través de `scripts/export.py` para que se incluya el normalizador de observaciones.

Romper este contrato puede producir una política que funcione en un visor pero que no pueda cambiarse ni desplegarse correctamente.

## Seleccionar la plantilla más cercana

| Movimiento deseado | Plantilla recomendada |
|---|---|
| Movimiento de velocidad continua | `microduck_velocity_env_cfg.py` |
| Recuperación desde un estado específico | `microduck_standup_env_cfg.py` |
| Transición de comando de dos estados | `microduck_sitstand_env_cfg.py` |
| Movimiento lento basado en fases | `microduck_ground_pick_env_cfg.py` |
| Maniobra dinámica rápida | `microduck_roulade_env_cfg.py` |
| Movimiento con rodillos | `microduck_velocity_rollers_env_cfg.py` |

Para una reverencia, la tarea de recogida desde el suelo es un punto de partida útil porque ya implementa comandos de fase, descenso, mantenimiento, elevación, seguimiento de pose y recuperación.

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
|---|---|
| `0.00–0.25` | Descender hacia la pose de reverencia |
| `0.25–0.55` | Mantener la reverencia |
| `0.55–0.85` | Volver a la pose inicial |
| `0.85–1.00` | Estabilizar en posición erguida |

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

Los valores anteriores son solo un punto de partida. Confirma los nombres y signos reales de las articulaciones en la configuración del robot.

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

Utiliza exactamente los mismos nombres invocables implementados en tu nuevo módulo y refleja la firma actual del registro.

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

Busca contactos no válidos, penetración al generar el robot, errores en la dirección de las articulaciones, terminación inmediata, valores NaN y poses objetivo imposibles.

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

1. **Descubrimiento del movimiento**: estado inicial fácil, recompensa de pose amplia, perturbación mínima.
2. **Finalización del movimiento**: refuerza los términos de mantenimiento y recuperación; añade recompensas basadas en el resultado.
3. **Robustez**: aumenta la diversidad de estados iniciales, la aleatorización de fricción, los empujes externos y las variantes de holgura.

Ejemplo de ejecución larga:

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

Observa la recompensa principal de la tarea en lugar de solo la recompensa total. Una política puede mejorar las métricas de regularización sin completar nunca el movimiento previsto.

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

Para añadir activación por teclado, amplía `scripts/infer_policy.py` usando los patrones existentes de cambio de política para sentarse/levantarse, recogida desde el suelo, roulade y patada. Escribe en la ranura de comando que espera la nueva política y mantén sin cambios la disposición de 61 dimensiones de la observación.

## Ejemplo verificado: equilibrio sobre una pierna

La siguiente tarea personalizada se implementó y se sometió a una prueba rápida en el sistema de referencia Jetson. El movimiento transfiere el peso del robot a su **pie izquierdo**, levanta el **pie derecho**, mantiene la pose de equilibrio sobre una pierna y luego vuelve a la pose normal de pie sobre dos pies.

El ID de tarea registrado es:

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### Línea de tiempo del movimiento

La tarea utiliza un comando de fase cíclica de seis segundos:

| Fase normalizada | Comportamiento |
|---|---|
| `0.00–0.30` | Transferir el peso al pie izquierdo y levantar la pierna derecha |
| `0.30–0.58` | Mantener la pose de equilibrio sobre una pierna |
| `0.58–0.78` | Bajar el pie derecho y volver a la posición de pie |
| `0.78–1.00` | Estabilizar en la pose inicial de apoyo en dos pies |

Estos límites se definen en `microduck_one_leg_balance_env_cfg.py`:

```python
BALANCE_PERIOD = 6.0
LIFT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
```

### Definir la pose objetivo

El objetivo se expresa con nombres de articulaciones en lugar de índices de articulaciones crudos de MuJoCo. Esto mantiene la intención legible y evita desplazamientos accidentales de índices cuando cambia el modelo del robot.

```python
ONE_LEG_POSE = {
    "left_hip_roll": -0.25,
    "left_hip_pitch": -0.40,
    "left_knee": -0.05,
    "left_ankle": 0.45,
    "right_hip_roll": -0.10,
    "right_hip_pitch": 0.95,
    "right_knee": -1.25,
    "right_ankle": 0.30,
    "neck_pitch": 0.30,
    "head_pitch": 0.30,
    "head_roll": -0.10,
}
```

La pierna izquierda permanece cerca de su configuración de pie. La cadera y la rodilla derechas pliegan la pierna oscilante hacia delante, mientras que el pequeño giro de la cabeza ayuda a comunicar el lado de apoyo previsto.

### Construir la recompensa de equilibrio

El ejemplo combina cinco objetivos específicos de la tarea:

| Recompensa | Propósito |
|---|---|
| `one_leg_pose` | Seguir la pose articular interpolada de pie a equilibrio |
| `support_foot_grounded` | Mantener el pie de apoyo izquierdo en contacto con el terreno |
| `swing_foot_airborne` | Evitar que el pie derecho permanezca en el suelo durante la fase de mantenimiento |
| `swing_foot_height` | Seguir la altura deseada del pie derecho por encima del terreno |
| `com_over_support` | Mover el centro de masa horizontal sobre el pie de apoyo izquierdo |

La tarea también conserva los términos de límites articulares, autocolisión, velocidad angular, tasa de acción, actuador, codificador, fricción, masa, inercia y aleatorización del centro de masa heredados del entorno de entrenamiento de Microduck.

Se añadieron dos pequeñas medidas reutilizables a `src/mjlab_microduck/tasks/mdp.py`:

- `phase_single_foot_airborne_reward()` limita la recompensa de pie derecho en el aire a la fase de equilibrio activa.
- `phase_site_height_track()` interpola el objetivo de altura del pie derecho entre los estados de pie y levantado.

Las funciones existentes `phase_pose_track()`, `phase_pose_track_l1()`, `single_foot_grounded_reward()`, y `com_over_support_foot()` se reutilizan directamente.

### Registrar la tarea

`Mjlab-OneLegBalance-Flat-MicroDuck` es el **ID de tarea usado por el registro de tareas de MJLab**. No es un nombre de archivo y no se pasa a `make_microduck_one_leg_balance_env_cfg()` como argumento de función. El lanzador de línea de comandos usa esta cadena para buscar el entorno, la configuración de juego, la configuración de RL y el runner registrados en `src/mjlab_microduck/tasks/__init__.py`.

La ruta de definición y registro es:

| Elemento | Ubicación | Propósito |
|---|---|---|
| Configuración del entorno | `src/mjlab_microduck/tasks/microduck_one_leg_balance_env_cfg.py` | Define la pose de una pierna, el tiempo de fase, las recompensas, la escena y `make_microduck_one_leg_balance_env_cfg()` |
| Configuración de RL | `src/mjlab_microduck/tasks/microduck_one_leg_balance_env_cfg.py` | Define `MicroduckOneLegBalanceRlCfg` y los hiperparámetros de entrenamiento |
| Registro de la tarea | `src/mjlab_microduck/tasks/__init__.py` | Vincula el ID de tarea con el entorno y la configuración de RL |
| Punto de entrada de la CLI | `uv run --no-sync train <task-id>` | Busca la tarea registrada e inicia el entrenamiento |

La relación es:

```text
Mjlab-OneLegBalance-Flat-MicroDuck
        ↓ task_id lookup
register_mjlab_task(...)
        ↓
make_microduck_one_leg_balance_env_cfg()
+ MicroduckOneLegBalanceRlCfg
+ MicroduckOnPolicyRunner
```

Por lo tanto, este es el comando completo usado para seleccionar la tarea personalizada:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Si `list-envs` no muestra la tarea, comprueba que el nuevo archivo de configuración exista y que tanto su importación como la llamada a `register_mjlab_task()` estén presentes en `src/mjlab_microduck/tasks/__init__.py`. El ID de tarea en el comando debe coincidir exactamente con la cadena `task_id`, incluyendo mayúsculas y guiones.

Añade la importación y el registro de la configuración de la tarea a `src/mjlab_microduck/tasks/__init__.py`:

```python
from .microduck_one_leg_balance_env_cfg import (
    make_microduck_one_leg_balance_env_cfg,
    MicroduckOneLegBalanceRlCfg,
)

register_mjlab_task(
    task_id="Mjlab-OneLegBalance-Flat-MicroDuck",
    env_cfg=make_microduck_one_leg_balance_env_cfg(),
    play_env_cfg=make_microduck_one_leg_balance_env_cfg(play=True),
    rl_cfg=MicroduckOneLegBalanceRlCfg,
    runner_cls=MicroduckOnPolicyRunner,
)
```

Confirma que MJLab detecta la nueva tarea:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep OneLegBalance
```

Salida esperada:

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### Editar y capturar la pose en MuJoCo

El ejemplo incluye `scripts/one_leg_pose_editor.py`. Desactiva la gravedad y fija la base flotante para que los objetivos de articulaciones individuales puedan ajustarse de forma segura antes del entrenamiento.

Ejecuta el script directamente desde una terminal en el escritorio del Jetson:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync python scripts/one_leg_pose_editor.py
```

Expande el panel **Control** en el lado derecho de la ventana de MuJoCo y ajusta los deslizadores de las articulaciones. Al cerrar la ventana se imprime en la terminal el diccionario final nombrado `ONE_LEG_POSE`. Los botones de MuJoCo **Save XML** y **Save MJB** guardan archivos de modelo; no guardan el diccionario de pose objetivo de Python usado por esta tarea.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_one_leg_balance.png" alt="Editor de pose interactivo de MuJoCo que muestra la pose objetivo de equilibrio sobre una pierna de Microduck" />
</div>

Si el editor se lanza a través de SSH y debe aparecer en el monitor conectado localmente al Jetson, exporta primero la sesión de escritorio activa. La sesión de Jetson verificada usó `DISPLAY=:1`:

```bash
cd ~/microduck-jetson/microduck_rl

export DISPLAY=:1
export XAUTHORITY=/run/user/1000/gdm/Xauthority
export XDG_RUNTIME_DIR=/run/user/1000
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus

~/.local/bin/uv run --no-sync python scripts/one_leg_pose_editor.py
```

:::note
El número de display puede cambiar después de un reinicio o cuando cambia la sesión de escritorio. Desde una terminal abierta directamente en el escritorio del Jetson, `echo $DISPLAY` muestra el valor activo.
:::

### Ejecutar las pruebas de humo verificadas

Comienza con 64 entornos y cinco iteraciones:

```bash
cd ~/microduck-jetson/microduck_rl

export MUJOCO_GL=egl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

La tarea también se probó con 4096 entornos paralelos en un Jetson de 16 GB:

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

La prueba de humo con 4096 entornos se completó sin un error de falta de memoria ni terminación por NaN y alcanzó aproximadamente `4.6k steps/s`. La observación del actor se mantuvo de 61 dimensiones y la salida de acción se mantuvo de 14 dimensiones.

:::tip
En un Jetson Orin NX de 8 GB o Jetson Orin Nano, comienza con `--env.scene.num-envs 1024`. Auméntalo solo después de comprobar la memoria disponible con `jtop`.
:::

### Abrir el visor de entrenamiento

Para visualizar un entorno mientras se entrena la tarea personalizada, ejecuta el siguiente comando desde el escritorio del Jetson:

```bash
cd ~/microduck-jetson/microduck_rl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 1 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000 \
  --env.viewer.distance 0.55 \
  --env.viewer.azimuth 145 \
  --env.viewer.elevation -12
```

El editor de poses muestra inmediatamente el objetivo previsto. El visor de entrenamiento inicialmente muestra una política no entrenada, por lo que el comportamiento estable sobre una pierna aparece solo después de que la política haya aprendido la secuencia de transferencia, elevación, mantenimiento y recuperación.

### Iniciar una ejecución de entrenamiento completa

Para el sistema de referencia de 16 GB, usa el siguiente punto de partida:

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 20000
```

Las pruebas de humo confirman que la configuración de la tarea, los términos de recompensa, los sensores, el backend de CUDA y el gran número de entornos paralelos funcionan correctamente. Por sí solas no prueban la convergencia de la política. Evalúa los checkpoints guardados en MuJoCo y ajusta la pose, los pesos de recompensa, el tiempo de fase o el currículo si el robot levanta el pie sin transferir su centro de masa, salta o no logra volver a la posición de pie.

## Lista de comprobación de desarrollo

- [ ] La disposición de la observación sigue siendo de 61D.
- [ ] La salida de la política sigue siendo de 14D.
- [ ] Las articulaciones pasivas se excluyen de las acciones y de las observaciones de los servos.
- [ ] El evento de inicio de BAM y la aleatorización de dominio siguen activos donde se requiere.
- [ ] La tarea aparece en `list-envs`.
- [ ] La inspección con el visor de política aleatoria se completa correctamente.
- [ ] La prueba de humo con 64 entornos se completa correctamente.
- [ ] Las métricas principales de la tarea mejoran en TensorBoard.
- [ ] El checkpoint PT final se comporta correctamente en MuJoCo.
- [ ] ONNX se exporta con el script del proyecto y se ensaya antes del despliegue en el robot.

<div align="center">
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>Volver al inicio de la demo</a>
</div>

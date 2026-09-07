---
description: Crea una tarea de movimiento personalizada de Microduck seleccionando una plantilla, definiendo fases y recompensas, registrando la tarea, entrenándola y exportando ONNX.
title: Crear un movimiento personalizado de Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Crear un movimiento personalizado de Microduck

Este capítulo presenta el flujo de trabajo del proyecto para construir un nuevo movimiento. El ejemplo utiliza un comportamiento basado en fases de **reverencia (Bow)**, pero el mismo proceso se aplica a asentir con la cabeza, agacharse, estirarse, habilidades de recuperación y otros movimientos del robot.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> Official Motions</a>
</div>

## Comprender el contrato de la política

Todas las políticas intercambiables en caliente de Microduck comparten la misma interfaz:

- **Observación del actor de 61 dimensiones**: 48 valores de propiocepción más el bloque de comandos de 13 dimensiones `[twist(3), head_pose(4), body_pose(6)]`.
- **Salida de acción de 14 dimensiones** para las articulaciones de los servos activos.
- Las ranuras de comando no utilizadas siguen presentes y se rellenan con ceros.
- Las ruedas pasivas y las articulaciones con holgura usan la convención de nombres `passive_*` y no deben seleccionarse como articulaciones accionadas.
- Los ID de las articulaciones deben resolverse mediante los helpers del proyecto en lugar de codificarse de forma fija.
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

Para una reverencia, la tarea de recogida desde el suelo es un punto de partida útil porque ya implementa comandos de fase, descenso, mantenimiento, ascenso, seguimiento de pose y recuperación.

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

Una reverencia simple puede usar una fase normalizada de `0.0` a `1.0`:

| Fase | Comportamiento |
|---|---|
| `0.00–0.25` | Descender hacia la pose de reverencia |
| `0.25–0.55` | Mantener la reverencia |
| `0.55–0.85` | Volver a la pose inicial |
| `0.85–1.00` | Estabilizarse en posición erguida |

Utiliza interpolación suave en lugar de cambiar directamente entre dos poses. Los cambios bruscos de objetivo a menudo provocan altas tasas de acción, impactos o gradientes de recompensa inestables.

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

Una recompensa útil para un movimiento personalizado suele combinar:

- Seguimiento de la pose objetivo condicionado por la fase.
- Una recompensa por el resultado de la tarea, como bajar la cabeza durante la reverencia.
- Recompensas de posición erguida y recuperación cerca del final de la secuencia.
- Términos de contacto de pies y estabilidad lateral.
- Penalizaciones por límites de articulación, colisiones, tasa de acción e impactos.

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

Utiliza exactamente los nombres invocables implementados en tu nuevo módulo y refleja la firma actual del registro.

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

Observa la recompensa principal de la tarea en lugar de solo la recompensa total. Una política puede mejorar las métricas de regularización y aun así no completar nunca el movimiento previsto.

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

Para añadir activación por teclado, amplía `scripts/infer_policy.py` usando los patrones existentes de cambio de política de sit/stand, ground-pick, roulade y kick. Escribe en la ranura de comando que espera la nueva política y mantén sin cambios la disposición de 61 dimensiones de la observación.

## Lista de comprobación de desarrollo

- [ ] La disposición de la observación sigue siendo de 61D.
- [ ] La salida de la política sigue siendo de 14D.
- [ ] Las articulaciones pasivas se excluyen de las acciones y de las observaciones de los servos.
- [ ] El evento de inicio de BAM y la aleatorización de dominio siguen activos donde se requiere.
- [ ] La tarea aparece en `list-envs`.
- [ ] La inspección con el Viewer usando una política aleatoria se completa correctamente.
- [ ] La prueba rápida con 64 entornos se completa correctamente.
- [ ] Las métricas principales de la tarea mejoran en TensorBoard.
- [ ] El checkpoint PT final se comporta correctamente en MuJoCo.
- [ ] ONNX se exporta con el script del proyecto y se ensaya antes del despliegue en el robot.

<div align="center">
  <a href="/es/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>Return to Demo Home</a>
</div>

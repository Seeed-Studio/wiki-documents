---
description: "Capítulo 18 del curso Sim-to-Real VLA de SO-ARM101 — ejecutar la inferencia TensorRT de GR00T N1.7 en Jetson: construye los siete motores específicos, valida offline y arranca el servidor de políticas en el borde."
title: Capítulo 18 - Ejecutar la inferencia TensorRT de GR00T N1.7
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - TensorRT
  - GR00T N1.7
  - Despliegue en el borde
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_18
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 18 · Deploy on Jetson</span>
    <h2>18. Ejecutar la inferencia TensorRT de GR00T N1.7</h2>
    <p>
      Exporta la política ajustada a siete motores TensorRT específicos
      del objetivo, valida offline y sirve la política al seguidor
      SO-101 — todo desde el Jetson.
    </p>
    <div className="hero-actions">
      <a href="#prereq">Requisitos previos</a>
      <a href="#build">Construir motores</a>
      <a href="#offline">Inferencia offline</a>
      <a href="#serve">Servidor de políticas</a>
      <a href="#troubleshoot">Resolución de problemas</a>
    </div>
  </div>
</section>

## 18.1 Requisitos previos

<section id="prereq" className="section-card">
  <div className="section-title">
    <span>Comprobar antes de construir</span>
    <h2>18.1 Requisitos previos</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"
git rev-parse HEAD
```

Revisión esperada del repositorio:

```text
dcf5f6b759fd17cab3644a97fc4429bca7451e38
```

Verifica las entradas del capítulo 17:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_BACKBONE_PATH}/config.json"
```

:::caution Nunca copies motores entre objetivos
Los archivos `.engine` de TensorRT dependen de la arquitectura de GPU, la
versión de TensorRT, el checkpoint, las formas del grafo, la precisión y
la configuración del builder. Cada objetivo construye sus propios motores.
:::

</section>

## 18.2 Salida del pipeline TensorRT

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Siete motores</span>
    <h2>18.2 Salida del pipeline TensorRT</h2>
  </div>

El pipeline completo crea siete motores específicos del objetivo:

```text
1. vit.engine
2. llm_bf16.engine
3. vl_self_attention.engine
4. state_encoder.engine
5. action_encoder.engine
6. dit_bf16.engine
7. action_decoder.engine
```

</section>

## 18.3 Construir en Jetson AGX Orin

<section id="orin" className="section-card">
  <div className="section-title">
    <span>Wrapper de Orin</span>
    <h2>18.3 Construir en Jetson AGX Orin</h2>
  </div>

```bash
export GR00T_TARGET=orin
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
bash scripts/deployment/orin_jp72/run_full_trt.sh verify
bash scripts/deployment/orin_jp72/run_full_trt.sh status
```

El wrapper activa `.venv-jp72`, carga las rutas del runtime CUDA de
JetPack 7.2 y construye el paquete de motores de Orin en
`${GR00T_TRT_OUTPUT}`.

</section>

## 18.4 Construir en Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Pipeline de Thor</span>
    <h2>18.4 Construir en Jetson AGX Thor</h2>
  </div>

```bash
export GR00T_TARGET=thor
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --precision bf16 \
  --batch-size 1 \
  --steps export,build,verify,benchmark
```

Usa la misma etiqueta de plataforma (`NEW_EMBODIMENT`) y el horizonte de
acción de 16 pasos con los que entrenó el capítulo 10. Construye un
directorio de salida de Thor separado aunque compartas checkpoint y
dataset con Orin.

</section>

## 18.5 Ejecutar inferencia offline

<section id="offline" className="section-card">
  <div className="section-title">
    <span>Sin robot conectado</span>
    <h2>18.5 Ejecutar inferencia offline</h2>
  </div>

Valida primero los motores contra la trayectoria grabada:

```bash
# Orin
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

El comando evalúa el pipeline TensorRT contra la trayectoria local
configurada y escribe el resultado en `${GR00T_RESULT_PATH}`.

```bash
# Thor
source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --execution-horizon 16 \
  --save-plot-path "${GR00T_RESULT_PATH}"
```

Usa la misma etiqueta de plataforma y horizonte de acción con los que se
exportaron los motores.

</section>

## 18.6 Arrancar el servidor de políticas TensorRT

<section id="serve" className="section-card">
  <div className="section-title">
    <span>Endpoint en el borde</span>
    <h2>18.6 Arrancar el servidor de políticas TensorRT</h2>
  </div>

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
ss -ltn | grep ':5555'
```

El endpoint por defecto es `127.0.0.1:5555`. Para exponer otra dirección:

```bash
export GR00T_SERVER_HOST=0.0.0.0
export GR00T_SERVER_PORT=5555
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
```

Apunta el cliente de robot SO-101 al Jetson. Desde el propio Jetson — o
desde cualquier máquina de la red con los scripts del workshop y el
seguidor conectado — ejecuta el cliente del capítulo 11 con la dirección
del Jetson:

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=<JETSON_IP> \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack"
```

El seguidor SO-101 ejecuta ahora una política que corre por completo en
el Jetson.

Valida el paquete de motores:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -name '*.engine' -printf '%f\n' | sort
```

Confirma que existen los siete motores y que la verificación terminó sin
fallos de forma o de precisión numérica.

</section>

## 18.7 Resolución de problemas

<section id="troubleshoot" className="section-card">
  <div className="section-title">
    <span>Problemas habituales</span>
    <h2>18.7 Resolución de problemas</h2>
  </div>

### No se encuentra `libcusparseLt.so.0` en Orin

Usa el wrapper en lugar de llamar a `.venv-jp72/bin/python` directamente:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

### Entorno de Python incorrecto

```bash
which python
python -c "import sys; print(sys.executable)"
```

- Orin: `${GR00T_REPO}/.venv-jp72/bin/python`
- Thor: `${GR00T_REPO}/.venv/bin/python`

### Error de forma o deserialización de motores

Borra y reconstruye los motores del objetivo tras cambiar el checkpoint,
el backbone, la versión de TensorRT, la precisión, el batch, el horizonte
de acción o las formas del grafo:

```bash
rm -rf "${GR00T_TRT_OUTPUT}/engines"
```

Después vuelve a ejecutar el comando de construcción de Orin o Thor que
corresponda.

### La construcción de TensorRT agota la memoria

```bash
free -h
df -h "${GR00T_WORKSPACE}"
sudo tegrastats
```

Cierra otras aplicaciones de GPU y confirma que el workspace tiene
almacenamiento libre suficiente antes de reconstruir.

</section>

## 18.8 Lista de reproducción

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Puerta final</span>
    <h2>18.8 Lista de reproducción</h2>
  </div>

- [ ] El repositorio está en el commit validado;
- [ ] Checkpoint, backbone, dataset y configuración de plataforma
      completos;
- [ ] Orin usa `.venv-jp72`; Thor usa `.venv`;
- [ ] Los siete motores se construyeron en el objetivo donde correrán;
- [ ] La inferencia offline completa y guarda un gráfico de resultado;
- [ ] El servidor de políticas arranca solo tras pasar la verificación del
      paquete de motores;
- [ ] El seguidor SO-101 ejecuta la tarea guiado por el servidor del
      Jetson.

Volver al resumen del curso: [Curso Sim-to-Real VLA de SO-ARM101](es_Sim2Real_VLA_Introduction.md).

</section>

</div>
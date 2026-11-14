---
description: "Capítulo 11 del curso Sim-to-Real VLA de SO-ARM101 — evaluar en el entorno real: ejecuta el GR00T N1.7 ajustado sobre el seguidor SO-101 físico con un servidor de políticas y un cliente de robot desacoplados."
title: Capítulo 11 - Evaluar en el entorno real
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - GR00T N1.7
  - Inferencia
  - Evaluación
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_11
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 11 · Get Your Own VLA Model</span>
    <h2>11. Evaluar en el entorno real</h2>
    <p>
      Despliega el GR00T N1.7 ajustado en el mundo real: un servidor de
      políticas ejecuta el modelo y un cliente de robot conduce el
      seguidor SO-101 en bucle cerrado.
    </p>
    <div className="hero-actions">
      <a href="#architecture">Arquitectura</a>
      <a href="#server">Servidor</a>
      <a href="#client">Cliente</a>
      <a href="#safety">Seguridad</a>
      <a href="#iterate">Iterar</a>
    </div>
  </div>
</section>

## 11.1 Arquitectura de despliegue

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Diseño desacoplado</span>
    <h2>11.1 Arquitectura de despliegue</h2>
  </div>

La arquitectura de despliegue de Isaac GR00T separa la inferencia del
control:

- **Lado de inferencia (servidor)**: dedicado exclusivamente a ejecutar la
  inferencia del modelo;
- **Lado de control (cliente)**: responsable de adquirir el estado del
  brazo y coordinar su control de movimiento.

Puedes ejecutar servidor y cliente en dos dispositivos separados (por
ejemplo, una estación con GPU sirviendo políticas a un robot montado en
Jetson — capítulo 18) o, como muestra este capítulo, ambos en un solo
ordenador.

:::caution VRAM
La evaluación en una sola máquina necesita una GPU NVIDIA capaz de alojar
el modelo GR00T de 3B — la misma clase que lo ajustó (capítulo 10).
:::

La evaluación usa el cliente de robot real SO-101 del workshop de NVIDIA,
que gestiona el bucle cerrado completo: entran observaciones, vuelve un
bloque de 16 acciones, y el cliente alinea y mezcla las predicciones
solapadas antes de transmitir comandos de motor al seguidor a 30 Hz.

</section>

## 11.2 Terminal 1: arrancar el servidor de inferencia

<section id="server" className="section-card">
  <div className="section-title">
    <span>Servidor de políticas</span>
    <h2>11.2 Terminal 1: arrancar el servidor de inferencia</h2>
  </div>

El contenedor de robot real de NVIDIA monta los scripts de evaluación y tu
directorio de checkpoints. Arráncalo montando tu directorio de salida:

```bash
cd ~/Sim-to-Real-SO-101-Workshop
docker run -it --rm --name real-robot --network host --privileged --gpus all \
  -e DISPLAY \
  -v /dev:/dev \
  -v /run/udev:/run/udev:ro \
  -v $HOME/.Xauthority:/root/.Xauthority \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v $HOME/.cache/huggingface/lerobot/calibration:/root/.cache/huggingface/lerobot/calibration \
  -v $HOME/groot_so101_real:/workspace/models/so101 \
  -v $(pwd)/docker/real/scripts:/Isaac-GR00T/gr00t/eval/real_robot/SO100 \
  real-robot \
  /bin/bash
```

Dentro del contenedor, arranca el servidor sobre tu checkpoint:

```bash
python Isaac-GR00T/gr00t/eval/run_gr00t_server.py \
  --model-path /workspace/models/so101/checkpoint-5000
```

El servidor escucha en el puerto 5555 y sigue corriendo entre rollouts —
entre intentos solo se detiene el cliente.

</section>

## 11.3 Terminal 2: arrancar el cliente de robot

<section id="client" className="section-card">
  <div className="section-title">
    <span>Bucle cerrado</span>
    <h2>11.3 Terminal 2: arrancar el cliente de robot</h2>
  </div>

Conecta un segundo terminal al contenedor:

```bash
docker exec -it real-robot /bin/bash
```

Ejecuta el script de evaluación. Fíjate en las claves de cámara: en
inferencia los nombres de runtime son `wrist` y `front` — los mismos que
produjo el archivo de modalidad del capítulo 10. Las cámaras físicas no
cambian: `wrist` es la cámara de pinza y `front` la cenital.

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=localhost \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack" \
  --rerun True
```

Comportamiento esperado:

1. El seguidor se eleva lentamente hasta su postura inicial;
2. Entra en modo inferencia y empieza la tarea;
3. `Ctrl+C` en la Terminal 2 lo detiene y lo devuelve a casa;
4. El servidor de la Terminal 1 sigue vivo para rollouts repetidos.

:::tip Evalúa varios checkpoints
Vuelve a ejecutar el cliente con distintos números de checkpoint (detén
ambos terminales, cambia `--model-path`, reinicia) y conserva el de mayor
tasa de éxito — no simplemente el último.
:::

</section>

## 11.4 Seguridad

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Antes de pulsar Enter</span>
    <h2>11.4 Seguridad</h2>
  </div>

La política puede moverse más rápido de lo que espera una persona:

- Mantén manos, pelo y mangas fuera del área de viales durante los
  rollouts;
- Aparta los cables de cámara y alimentación del área de trabajo del
  seguidor;
- Ten el interruptor de alimentación del seguidor a mano — cortar la
  alimentación de motores es la parada de emergencia;
- Devuelve los viales a su zona de inicio entre rollouts y comprueba que
  el rack no se ha movido.

</section>

## 11.5 Iterar sobre lo que ves

<section id="iterate" className="section-card">
  <div className="section-title">
    <span>Fallo → arreglo</span>
    <h2>11.5 Iterar sobre lo que ves</h2>
  </div>

El primer rollout real rara vez acierta siempre. Observaciones típicas y
sus arreglos:

| Observación | Causa probable | Arreglo |
| --- | --- | --- |
| Falla el agarre por unos centímetros | El encuadre difiere del de entrenamiento | Revisa las posiciones de cámara del capítulo 8 |
| Agarra y suelta el vial | Brecha de contacto / fricción | Graba más episodios reales con agarres exitosos |
| Va en la dirección correcta pero deriva | Calibración desviada | Repite `lerobot-calibrate` y el verificador |
| Ignora la instrucción de lenguaje | Texto de tarea distinto | Usa la frase exacta de grabación en `--lang_instruction` |
| El servidor rechaza la observación | Claves de cámara erróneas | Mantén `wrist` y `front` en el comando de evaluación |
| Se detiene a mitad de tarea | El episodio acabó en pausa | Graba demostraciones más largas y completas |

Itera en este orden: arregla estudio y cámaras primero, añade 5–10
episodios reales (capítulo 9) y vuelve a entrenar (capítulo 10). Cambiar
el modelo antes de arreglar los datos suele ocultar el problema real.

| Síntoma | Causa | Arreglo |
| --- | --- | --- |
| `address already in use` en el puerto 5555 | Un servidor antiguo sigue activo | Detén el contenedor o proceso previo |
| El servidor arranca pero el rollout no hace nada | Ruta de checkpoint obsoleta | Confirma que el montaje y `--model-path` apuntan al mismo checkpoint |
| El robot vuelve a casa de inmediato | Error de política u observación | Lee el log del servidor; revisa flujos de cámara y nombres de articulación |
| `Cannot find calibration` en el contenedor | Calibración sin montar | Monta `~/.cache/huggingface/lerobot/calibration` (ya incluido en el `docker run`) |

Para el despliegue en el borde — ejecutar la política en un Jetson en vez
de una GPU de estación — sigue con el
[capítulo 14 — Preparar tu Jetson](es_Sim2Real_VLA_14.md), o amplía antes
el dataset con los opcionales [capítulo 12](es_Sim2Real_VLA_12.md) y
[capítulo 13](es_Sim2Real_VLA_13.md).

Volver al resumen del curso: [Curso Sim-to-Real VLA de SO-ARM101](es_Sim2Real_VLA_Introduction.md).

</section>

</div>
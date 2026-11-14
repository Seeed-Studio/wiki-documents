---
description: "Capítulo 9 del curso Sim-to-Real VLA de SO-ARM101 — recopilar datos del entorno real: probar cámaras, grabar episodios sincronizados de dos cámaras con lerobot-record y verificar el dataset LeRobot v3."
title: Capítulo 9 - Recopilar datos del entorno real
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Recolección de datos
  - lerobot-record
  - LeRobot Dataset
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_9
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 9 · Get Your Own VLA Model</span>
    <h2>9. Recopilar datos del entorno real</h2>
    <p>
      Prueba las cámaras, graba episodios sincronizados de dos cámaras con
      `lerobot-record` y verifica el dataset LeRobot v3 antes de cualquier
      entrenamiento.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Cámaras</a>
      <a href="#record">Grabar</a>
      <a href="#controls">Controles</a>
      <a href="#storage">Almacenamiento</a>
      <a href="#verify">Verificación</a>
    </div>
  </div>
</section>

## 9.1 Probar las cámaras

<section id="cameras" class="section-card">
  <div class="section-title">
    <span>Antes de grabar</span>
    <h2>9.1 Probar las cámaras</h2>
  </div>

El capítulo 8 montó y previsualizó ambas cámaras; repite la comprobación
ahora — los índices de `/dev/video*` cambian tras reconectar o reiniciar:

```bash
lerobot-find-cameras opencv
```

Mapea las vistas previas a índices (el nombre contiene el índice) y
exporta de nuevo:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Confirma también que las variables del brazo del capítulo 7 siguen activas
en este terminal:

```bash
echo "$TELEOP_PORT $TELEOP_ID $ROBOT_PORT $ROBOT_ID"
```

</section>

## 9.2 Grabar episodios

<section id="record" class="section-card">
  <div class="section-title">
    <span>lerobot-record</span>
    <h2>9.2 Grabar episodios</h2>
  </div>

Con ambos brazos calibrados y el estudio listo, ejecuta:

```bash
export HF_USER=local   # o tu usuario de Hugging Face

lerobot-record \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --dataset.single_task="Put the three vials into the vial rack" \
  --dataset.num_episodes=10 \
  --dataset.push_to_hub=false \
  --display_data=false \
  --play_sounds=false
```

Sigue las indicaciones del terminal para completar cada episodio: recoge un
vial con el líder, colócalo en el rack, suelta y deja que la escena se
estabilice.

Flags clave:

| Flag | Por qué este valor |
| --- | --- |
| claves `front` y `external` en `--robot.cameras` | Coincide exactamente con los nombres del dataset simulado (co-entrenamiento en el capítulo 12) |
| `--dataset.single_task` | Debe ser esta frase exacta en todas partes — los prompts y las etiquetas dependen de ella |
| `--dataset.num_episodes` | Empieza con 10; el mínimo del workshop de NVIDIA es 5, 50 es una política decente |
| `--dataset.push_to_hub=false` | Todo en local; sube solo si quieres copia |
| `--display_data=false` | Evita renderizar cada fotograma en la máquina que graba |

:::caution Empieza con demostraciones lentas y completas
Un episodio abortado a mitad enseña a la política a parar a mitad. Termina
la colocación y pulsa la flecha derecha. Cinco trayectorias limpias ganan a
veinte interrumpidas.
:::

</section>

## 9.3 Controles de grabación y seguridad

<section id="controls" class="section-card">
  <div class="section-title">
    <span>Teclado</span>
    <h2>9.3 Controles de grabación y seguridad</h2>
  </div>

| Tecla | Acción |
| --- | --- |
| Flecha derecha | Termina antes el episodio actual y pasa al siguiente |
| Flecha izquierda | Descarta el episodio actual y lo regraba |
| `Esc` | Detiene la sesión, codifica los vídeos y cierra el dataset |

Si el seguidor se mueve de forma inesperada:

1. Pulsa `Ctrl+C` primero;
2. Si sigue moviéndose, corta la alimentación de 12 V del seguidor;
3. Devuelve el brazo al punto medio a mano;
4. Revisa calibración e ID del líder antes de reiniciar.

:::note El teclado no responde
En algunas instalaciones de Ubuntu hay que fijar `pynput`. En el entorno
LeRobot:

```bash
pip install pynput==1.6.8
```
:::

</section>

## 9.4 Almacenamiento, checkpoints y reanudación

<section id="storage" class="section-card">
  <div class="section-title">
    <span>Dónde viven los datos</span>
    <h2>9.4 Almacenamiento, checkpoints y reanudación</h2>
  </div>

- Los datos se guardan en formato `LeRobotDataset` y se escriben a disco
  durante la grabación, en la ruta de `--dataset.root`;
- Con `--dataset.push_to_hub=false` no se sube nada;
- Se crean checkpoints automáticamente durante la grabación. Para reanudar
  tras una interrupción, repite el mismo comando con `--resume=true`;
- Para empezar de cero, borra el directorio del dataset.

:::caution Sobre reanudar
Al reanudar, `--dataset.num_episodes` es el número de episodios
**adicionales** a grabar, no el total objetivo.

Si el brazo se congela a mitad de sesión, sube el tiempo de episodio con
`--dataset.episode_time_s=90` (por defecto 60) y vuelve a grabar.
:::

</section>

## 9.5 Verificar el dataset

<section id="verify" class="section-card">
  <div class="section-title">
    <span>Inspección previa al entrenamiento</span>
    <h2>9.5 Verificar el dataset</h2>
  </div>

Comprueba los metadatos:

```bash
python3 -c "
import json
info = json.load(open('$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/meta/info.json'))
print('fps:', info['fps'], 'episodes:', info['total_episodes'], 'frames:', info['total_frames'])
print({k: v['shape'] for k, v in info['features'].items()})
"
```

Salida esperada:

```text
fps: 30 episodes: 10 frames: ...
{'observation.state': [6], 'observation.images.front': [480, 640, 3],
 'observation.images.external': [480, 640, 3], 'action': [6], ...}
```

Dos flujos de cámara y seis dimensiones de articulaciones son el contrato
con el resto del pipeline. Si una forma difiere, borra el directorio y
regraba con los mismos flags.

Cuenta los vídeos:

```bash
find $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos -name "*.mp4" | wc -l
```

Diez episodios × dos cámaras = 20 archivos. Una comprobación visual rápida:

```bash
lerobot-dataset-viz \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --episode-index 0 \
  --display-compressed-images true
```

</section>

## 9.6 Lista de calidad de datos

<section id="quality" class="section-card">
  <div class="section-title">
    <span>Cuida estos puntos</span>
    <h2>9.6 Lista de calidad de datos</h2>
  </div>

Antes de entrenar, revisa unos episodios completos:

- Cada episodio **completa la tarea** — el vial queda suelto en el rack;
- Movimientos suaves; sin pausas largas ni correcciones violentas;
- Los viales empiezan en posiciones variadas entre episodios;
- La vista de muñeca muestra las garras y el vial; la externa muestra el
  rack;
- Sin fotogramas caídos (vídeo entrecortado) ni autofocus oscilante;
- La frase de tarea es idéntica en todos los episodios.

Un dataset que falle cualquiera de estos puntos produce una política que
falla de forma exasperantemente específica en despliegue. Arregla los datos
ahora; el entrenamiento no lo hará por ti.

Siguiente: [Capítulo 10 — Entrenar la política GR00T N1.7](es_Sim2Real_VLA_10.md).

</section>

</div>
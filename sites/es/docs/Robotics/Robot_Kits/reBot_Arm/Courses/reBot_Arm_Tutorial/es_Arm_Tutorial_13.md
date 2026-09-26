---
description: "Capítulo 13 del Curso para Principiantes en IA Física de Seeed — configuración de cámara y recopilación de datos con LeRobot: configuración de cámara única vs doble, búsqueda de nombres de dispositivos de cámara, sincronización de imagen/acción, creación de un conjunto de datos, grabación y regrabación, visualización y ampliación o eliminación de datos."
title: Capítulo 13 - Configuración de Cámara y Recopilación de Datos con LeRobot
keywords:
  - reBot
  - LeRobot
  - Cámara
  - Recopilación de datos
  - Conjunto de datos
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_13
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 13 · Práctica</span>
    <h2>13. Configuración de Cámara y Recopilación de Datos con LeRobot</h2>
    <p>
      Capítulo 13 del Curso para Principiantes en IA Física de Seeed — configuración de cámara única vs doble,
      búsqueda de nombres de dispositivos de cámara, sincronización de imagen/acción, creación de un conjunto de datos, grabación y
      regrabación, visualización y ampliación o eliminación de datos.
    </p>
    <div className="hero-actions">
      <a href="#configuración-de-cámara">Cámaras</a>
      <a href="#sincronización">Sincronización</a>
      <a href="#crear-conjunto-de-datos">Conjunto de datos</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>13.1 Configuración de cámara única vs doble</span>
    <span>13.2 Cámaras cenital y de muñeca</span>
    <span>13.3 Búsqueda de nombres de dispositivos de cámara</span>
    <span>13.4 Sincronización de imagen y acción</span>
    <span>13.5 Crear conjunto de datos de LeRobot</span>
    <span>13.6 Grabación, pausa y regrabación de episodios</span>
    <span>13.7 Visualización y reproducción de un conjunto de datos</span>
    <span>13.8 Ampliación y eliminación de datos</span>
  </div>
</section>

<RebotCourseNav />

## 13.1 Configuración de cámara única vs doble

<section id="camera-setup" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>13.1 Configuración de cámara única vs doble</h2>
  </div>

- **Configuración de una sola cámara:** solo la cámara cenital conectada. Adecuada para una primera ejecución del flujo y verificación del entorno: una cámara menos significa una variable menos al depurar.
- **Configuración de doble cámara** (ruta principal del curso, para recopilación formal): cenital + muñeca; el modelo ACT también usa por defecto dos flujos de entrada. También puedes elegir cenital + vista lateral.

También se pueden usar tres o cuatro cámaras para entrenamiento y recopilación. ACT en sí no tiene un límite estricto en el número de cámaras: cada flujo de imágenes pasa por una misma red base ResNet18 para producir una secuencia de tokens de características, que se concatena en el codificador Transformer. El artículo original de ACT (ALOHA de doble brazo) utilizó 4 cámaras (2 cenitales + 2 de muñeca).

- **Coste:** cada cámara adicional incrementa aproximadamente de forma lineal la VRAM y el cómputo, y también aumenta los requisitos de datos (más puntos de vista significan más que aprender); cada flujo debe mantener sincronización y posición fija.

</section>

## 13.2 Cámaras cenital y de muñeca

<section id="camera-roles" className="section-card">
  <div className="section-title">
    <span>Cámaras</span>
    <h2>13.2 Cámaras cenital y de muñeca</h2>
  </div>

- **Cámara cenital (frontal):** fijada en un soporte que mira todo el espacio de trabajo; le indica al modelo "dónde está el objetivo y el estado general del brazo".
- **Cámara de muñeca (muñeca):** montada en el extremo del brazo, sigue al efector final; le indica al modelo "la posición relativa entre el efector final y el objetivo, y si debe cerrarse".

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-01.png" alt="Cámaras cenital y de muñeca" />
</div>

</section>

## 13.3 Búsqueda de nombres de dispositivos de cámara

<section id="camera-names" className="section-card">
  <div className="section-title">
    <span>Dispositivos</span>
    <h2>13.3 Búsqueda de nombres de dispositivos de cámara</h2>
  </div>

Para comprobar los índices de las cámaras, primero ejecuta:

```bash
lerobot-find-cameras opencv
```

Verás `Id: 0`, donde 0 es el índice de la cámara.

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Muestra el nombre, ID y resolución predeterminada de cada cámara. Puedes encontrar `~/rebot_lerobot/outputs/captured_images/` en el directorio para ver las imágenes capturadas por cada cámara, verificando si la posición de la cámara es correcta y adecuada.

Ten en cuenta también: si usas un portátil, se escaneará la cámara integrada; tendrás que desconectar y volver a conectar para encontrar los índices correctos de las cámaras cenital y de muñeca. La cámara integrada del portátil suele ser el índice 0.

- **El orden de conexión cambia los índices.** Hoy la cenital es 0; mañana, después de reconectar, puede cambiar. Dedica 10 segundos a volver a ejecutar `lerobot-find-cameras` antes de cada sesión de grabación para confirmarlo.
- **Las cámaras USB deben conectarse directamente al ordenador, no a través de una base.** La contención de ancho de banda en hubs pasivos se manifiesta directamente como imágenes ilegibles o fotogramas perdidos; idealmente, las dos cámaras deberían conectarse a diferentes controladores USB.

</section>

## 13.4 Sincronización de imagen y acción

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sincronización</span>
    <h2>13.4 Sincronización de imagen y acción</h2>
  </div>

### Cámara única

**Versión RS:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**Versión DM:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

Si tienes más cámaras, puedes añadirlas cambiando el parámetro `--robot.cameras`. Ten en cuenta el formato `index_or_path`, que viene determinado por el último dígito del ID de la cámara que muestra el comando `python -m lerobot.find_cameras opencv`.

### Doble cámara

**Versión RS:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**Versión DM:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

Puedes ver que esta es la imagen desde el interior de la caja de recopilación de datos:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-02.png" alt="Flujo de cámara desde el interior de la caja de recopilación" />
</div>

Parámetros recomendados: **640 × 480 @ 30 fps, `fourcc: "MJPG"`**. Cada uno de los tres parámetros es importante:

- **Resolución 640×480:** un equilibrio entre claridad y rendimiento en tiempo real. Duplicar la resolución cuadruplica el ancho de banda USB y la carga de almacenamiento, mientras que la entrada del modelo ya redimensiona las imágenes de todos modos, con un beneficio limitado.
- **30 FPS:** coincide con los FPS de recopilación. Si los FPS de la cámara son menores, la grabación reutilizará repetidamente fotogramas antiguos.
- **`fourcc: "MJPG"`:** la imagen se comprime antes de la transmisión, reduciendo la presión sobre el ancho de banda USB en un orden de magnitud. Por supuesto, puedes probar imágenes en formato `YUYV`, pero esto reducirá la resolución y los FPS, causando tirones en el movimiento del brazo. Actualmente el formato `MJPG` admite 3 cámaras a resolución 1920×1080 manteniendo 30 FPS.

</section>

## 13.5 Crear conjunto de datos de LeRobot

<section id="create-dataset" className="section-card">
  <div className="section-title">
    <span>Conjunto de datos</span>
    <h2>13.5 Crear conjunto de datos de LeRobot</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-03.png" alt="Crear conjunto de datos de LeRobot" />
</div>

Antes de ejecutar el siguiente comando, prepárate para grabar datos; habrá una señal de audio al entrar en la fase de grabación. Si no la hay, comprueba en el terminal si se ha iniciado.

**Versión RS:**

```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

**Versión DM:**

```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

Hay varios parámetros relacionados con el propio conjunto de datos:

| Parámetro | Significado | Recomendación |
| :--- | :--- | :--- |
| `--dataset.repo_id` | Nombre del conjunto de datos (también el nombre de la carpeta local) | Nombres separados para conjuntos de prueba y formales, p. ej., `rebot_b601/grab_cube_test` / `rebot_b601/grab_cube_v1` |
| `--dataset.single_task` | Descripción de la tarea (almacenada en el conjunto de datos) | En inglés, coincidiendo con la descripción de la tarea |
| `--dataset.num_episodes` | Cuántos Episodios grabar | Prueba: 5; formal: 50 (el valor predeterminado es 50) |
| `--dataset.push_to_hub` | Si se debe subir al Hub después de grabar | `false` = no subir |
| `--dataset.episode_time_s=30` | Tiempo de grabación por Episodio | Ajustar según la complejidad de la tarea |
| `--dataset.reset_time_s=20` | Tiempo para restablecer la escena para la siguiente grabación | Ajustar según el tiempo de restablecimiento de la escena |
| `--display_data=true` | Mostrar la señal de la cámara en tiempo real | - |

Después, el conjunto de datos se guardará en el directorio home bajo `~/.cache/huggingface/lerobot`. La carpeta anterior se creará bajo `seeed_rebot_b601_rs/test`.

</section>

## 13.6 Grabación, Pausa y Regrabación de Episodios

<section id="recording" className="section-card">
  <div className="section-title">
    <span>Grabación</span>
    <h2>13.6 Grabación, Pausa y Regrabación de Episodios</h2>
  </div>

### Grabación

Controles de teclado durante la grabación:

| Tecla | Acción |
| :--- | :--- |
| → (Flecha derecha) | Terminar antes el Episodio actual, pasar a restablecer/siguiente |
| ← (Flecha izquierda) | Descartar el Episodio actual, volver a grabar este |
| ESC | Finalizar toda la sesión de recopilación: codificar vídeos, calcular estadísticas, guardar conjunto de datos |

:::warning
Si las teclas no responden, es un problema de versión de `pynput`; hacer downgrade: `pip install pynput==1.6.8`.
:::

### Regrabación

Después de grabar 5 Episodios y verificar la reproducción, para la recopilación formal: cambia `repo_id` al nombre formal, `num_episodes=50` al valor formal y sigue el método del lápiz de cinco puntos del Capítulo 12: 1 Episodio por punto, 5 puntos por ronda, 10 rondas en total.

### Pausar la grabación

:::danger
No pulses Ctrl+C para pausar la grabación: pulsa <kbd>Esc</kbd>, de lo contrario saldrá de forma anómala.
:::

</section>

## 13.7 Visualización y Reproducción de un Conjunto de Datos

<section id="viz-replay" className="section-card">
  <div className="section-title">
    <span>Reproducción</span>
    <h2>13.7 Visualización y Reproducción de un Conjunto de Datos</h2>
  </div>

### Visualizar un conjunto de datos

Si subiste datos, también puedes visualizarlos localmente con:

```bash
echo ${HF_USER}/rebot_test
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Si usaste `--dataset.push_to_hub=false` y no subiste datos, también puedes visualizar localmente con:

**Versión RS:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

**Versión DM:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aquí, `seeed_rebot_b601_rs/test` es el nombre de conjunto de datos personalizado de la recopilación (`repo_id`).

### Reproducir un conjunto de datos

Ahora, intenta reproducir el primer conjunto de datos en tu robot: `--dataset.episode=0` significa reproducir el primer conjunto de datos recopilado, y así sucesivamente.

**Versión RS:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

**Versión DM:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

Ahora el robot debería realizar las mismas acciones que grabaste durante la teleoperación.

</section>

## 13.8 Complementar y Eliminar Datos

<section id="edit-dataset" className="section-card">
  <div className="section-title">
    <span>Edición</span>
    <h2>13.8 Complementar y Eliminar Datos</h2>
  </div>

- Los checkpoints se crean automáticamente durante la grabación.
- Añade `--resume=true` al comando original para seguir complementando datos.
- Al reanudar, establece `--dataset.num_episodes` en el número de Episodios adicionales que se van a grabar (no el total objetivo en el conjunto de datos).
- Para empezar de cero, **elimina manualmente** el directorio del conjunto de datos.

Usa el siguiente comando para eliminar Episodios: `--operation.episode_indices "[0]"` elimina el primer Episodio, y así sucesivamente. Ten paciencia durante la eliminación y modifica el nombre del conjunto de datos en consecuencia.

```bash
lerobot-edit-dataset \
  --repo_id rebot_b601/grab_cube_v1 \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</section>

</div>

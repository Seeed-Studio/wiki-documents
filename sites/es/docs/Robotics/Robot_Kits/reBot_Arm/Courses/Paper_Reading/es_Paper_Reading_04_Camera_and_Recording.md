---
description: "Configura una o dos cámaras, encuentra dispositivos, graba datasets de LeRobot y visualiza, reproduce, añade y elimina datos."
title: "Recopilación de datos multivista"
hide_title: true
keywords:
  - Despliegue práctico
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_camera_recording
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/hands_on_camera_recording/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-camera_recording-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · DESPLIEGUE PRÁCTICO</span>
  <h1 id="hands-on-camera_recording-title">Recopilación de datos multivista</h1>
  <p className="paper-reading-lead">Configura una o dos cámaras, identifica dispositivos, graba demostraciones de LeRobot, visualiza y reproduce datasets, y añade o elimina episodios.</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Configuración de la cámara</li>
    <li>Grabación de datos</li>
    <li>Visualización y reproducción</li>
    <li>Añadir y eliminar episodios</li>
  </ul>
</section>

## Configuraciones de una y dos cámaras

- **Una cámara**: usa solo la cámara cenital. Esto es útil para una comprobación inicial del entorno porque elimina una variable del proceso de depuración.

- **Dos cámaras** (la configuración principal para este curso): cenital + muñeca. La configuración de ACT también usa estas dos entradas por defecto.

    - Una vista cenital + lateral es otra opción.

También puedes recopilar datos y entrenar con tres o cuatro cámaras. ACT en sí no impone un número fijo de cámaras: cada vista pasa por una backbone ResNet18 compartida para producir una secuencia de tokens de características, y las secuencias se concatenan para el codificador Transformer. La configuración bimanual ALOHA del artículo original de ACT usaba cuatro cámaras: dos cenitales y dos en la muñeca.

- **Coste**: la memoria y el cómputo de la GPU crecen aproximadamente de forma lineal con el número de cámaras, y las vistas adicionales pueden aumentar los requisitos de datos. Mantén cada vista sincronizada y su posición de montaje fija.

---

## Cámaras cenital y de muñeca

- **Cámara cenital (`front`)**: fijada en un soporte sobre el área de trabajo, mostrando al modelo dónde está el objetivo y la configuración general del brazo.

- **Cámara de muñeca (`wrist`)**: montada cerca del efector final y moviéndose con la garra, mostrando su posición relativa al objetivo y cuándo debe cerrarse.

![Configuración de la cámara y grabación de datos: cámaras cenital y de muñeca (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-01-camera-views-en.png)

---

## Encontrar los IDs de los dispositivos de cámara

Primero, ejecuta el siguiente comando para encontrar los índices de las cámaras:

```bash
lerobot-find-cameras opencv
```

La salida muestra `Id: 0`; aquí, `0` es el índice de la cámara.

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

El comando lista el nombre, ID y resolución predeterminada de cada cámara. Las imágenes capturadas se guardan en `~/rebot_lerobot/outputs/captured_images/`. Inspecciónalas para comprobar la posición y el encuadre de la cámara.

En un portátil, el escaneo también detecta su cámara integrada, a menudo en el índice 0. Desconecta y vuelve a conectar las cámaras externas para identificar los índices correctos de la cenital y la de muñeca.

- **Reconectar las cámaras puede cambiar sus índices.** Una cámara que hoy es 0 puede recibir un índice diferente la próxima vez. Ejecuta `lerobot-find-cameras` antes de cada sesión de grabación para confirmarlo.

- **Conecta las cámaras USB directamente al ordenador.** Evita los hubs: la contención de ancho de banda en un hub sin alimentación puede provocar pérdida de imágenes y fotogramas. Si es posible, conecta las dos cámaras a diferentes controladores USB.

---

## Sincronizar imágenes y acciones

1. Para una cámara:

**Versión RS:**

```text
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

```text
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

**Versión SO-ARM:**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Para añadir más cámaras, edita `--robot.cameras`. Establece `index_or_path` usando el ID de la cámara informado por `python -m lerobot.find_cameras opencv`.

2. Para dos cámaras:

**Versión RS:**

```text
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

```text
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

**Versión SO-ARM:**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

La vista previa muestra las vistas de las cámaras dentro del sandbox de recopilación.

![Configuración de la cámara y grabación de datos: sincronizar imágenes y acciones (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-02-capture-preview.png)

Ajustes recomendados: **640 × 480 a 30 fps, `fourcc: "MJPG"`**. Cada ajuste tiene un propósito:

- La **resolución 640 × 480** equilibra detalle y rendimiento en tiempo real. Doblar ambas dimensiones cuadruplica el ancho de banda USB y el coste de almacenamiento, mientras que el modelo redimensiona las entradas de todos modos, limitando el beneficio.

- **30 fps**: iguala la tasa de recopilación (la Sección 12.3 explica las marcas de tiempo lógicas). Si la cámara funciona más lentamente, la grabación reutilizará repetidamente fotogramas antiguos.

- **`fourcc: "MJPG"`** comprime las imágenes antes de la transferencia y reduce sustancialmente el uso de ancho de banda USB. Puedes probar `YUYV`, pero sus mayores requisitos de ancho de banda pueden obligar a usar menor resolución o tasa de fotogramas y causar tirones. La configuración descrita aquí admite tres cámaras a `1920*1080` y `30FPS` con `MJPG`.

---

## Crear un dataset de LeRobot

![Configuración de la cámara y grabación de datos: crear un dataset de LeRobot (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-03-dataset-recording-en.png)

Prepárate para demostrar la tarea antes de ejecutar el siguiente comando. Un aviso de audio indica la grabación; si el sonido no está disponible, observa la terminal para ver cuándo comienza la grabación.

**Versión RS:**

```text
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

```text
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

**Versión SO-ARM:**

```text
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20 
```

Los siguientes parámetros controlan el conjunto de datos y la sesión de grabación:

| Parámetro | Significado | Recomendación |
|---|---|---|
| `--dataset.repo_id` | Nombre del conjunto de datos y nombre de la carpeta local | Usa nombres separados para pruebas y producción, como `rebot_b601/grab_cube_test` y `rebot_b601/grab_cube_v1`. |
| `--dataset.single_task` | Descripción de la tarea almacenada en el conjunto de datos | Escribe una descripción precisa en inglés. |
| `--dataset.num_episodes` | Número de episodios a grabar | Usa 5 para una prueba y 50 para la colección completa; 50 es el valor predeterminado. |
| `--dataset.push_to_hub` | Si se sube o no después de grabar | `false` mantiene el conjunto de datos en local. |
| `--dataset.episode_time_s=30` | Tiempo de grabación por episodio | Ajusta según la complejidad de la tarea. |
| `--dataset.reset_time_s=20` | Tiempo para restablecer la escena entre episodios | Deja tiempo suficiente para restaurar la escena inicial. |
| `--display_data=true` | Mostrar las vistas de la cámara en vivo | |

El conjunto de datos se almacena en `~/.cache/huggingface/lerobot`, en la carpeta especificada, como `seeed_rebot_b601_rs/test`.

---

## Subir al Hugging Face Hub (Opcional)

Para gestionar conjuntos de datos en Hugging Face Hub, inicia sesión con un token que tenga permiso de escritura. Crea uno en [Hugging Face settings](https://huggingface.co/settings/tokens).

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Guarda tu nombre de usuario de Hugging Face en una variable para usarlo en comandos posteriores:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Ejecuta de nuevo el comando de colección con dos cambios: `--dataset.repo_id=${HF_USER}/grab_cube_v1` y `--dataset.push_to_hub=true`. La grabación subirá entonces el resultado a tu repositorio en el Hub. Usa ese nombre de repositorio con `lerobot-dataset-viz --repo-id` para visualizarlo.

> **Consejo:** Subir es opcional. Los conjuntos de datos locales grabados con `push_to_hub=false` pueden usarse directamente para el entrenamiento en el Capítulo 16. Subir solo cambia dónde viven los datos, no si se pueden usar para entrenar.

---

## Grabar, detener y volver a grabar episodios

**Grabación**

Controles de teclado durante la colección:

| Tecla | Acción |
|---|---|
| → (Flecha derecha) | Termina el episodio actual antes de tiempo y pasa al reinicio / siguiente episodio. |
| ← (Flecha izquierda) | Descarta el episodio actual y vuelve a grabarlo. |
| ESC | Termina la sesión de colección, codifica los vídeos, calcula estadísticas y guarda el conjunto de datos. |

Si las teclas no responden, la versión de `pynput` puede ser la causa. Haz un downgrade con `pip install pynput==1.6.8`.

**Volver a grabar**

Después de grabar cinco episodios de prueba y comprobar que la reproducción funciona, comienza la colección completa. Cambia `repo_id` al nombre final del conjunto de datos y establece `num_episodes=50`. Sigue el método de cinco puntos marcado con lápiz del Capítulo 12: un episodio por punto, cinco puntos por ronda y diez rondas.

**Detener la grabación**

Usa **Esc**, en lugar de Ctrl+C, para detener la grabación; interrumpir con Ctrl+C puede causar una salida anómala.

---

## Visualizar y reproducir un conjunto de datos

**Visualizar el conjunto de datos**

Si subiste el conjunto de datos, visualízalo localmente con:

```bash
echo ${HF_USER}/rebot_test  
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Si usaste `--dataset.push_to_hub=false`, visualiza el conjunto de datos local con:

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

**Versión SO-ARM:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_soarm101/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aquí, `seeed_rebot_b601_rs/test` es el `repo_id` elegido durante la grabación.

**Reproducir un conjunto de datos**

Ahora reproduce el primer episodio en tu robot. `--dataset.episode=0` selecciona el primer episodio grabado; incrementa el índice para reproducir otros.

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

**Versión SO-ARM:**

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.episode=0
```

El robot debería reproducir los movimientos grabados durante la teleoperación.

---

## Añadir y eliminar episodios

- Los checkpoints se crean automáticamente durante la grabación.

- Añade `--resume=true` al comando original para seguir grabando datos adicionales.

- Al reanudar, establece `--dataset.num_episodes` en el número de **episodios adicionales**, en lugar del tamaño total deseado del conjunto de datos.

- Para empezar de nuevo, **elimina manualmente** el directorio del conjunto de datos.

Usa los siguientes comandos para eliminar episodios seleccionados. `--operation.episode_indices "[0]"` elimina el primer episodio; cambia los índices según sea necesario. Sustituye el nombre del conjunto de datos y deja tiempo para que la operación termine.

**Versión RS:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_rs/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**Versión DM:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_dm/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**Versión SO-ARM:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_soarm101/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</div>

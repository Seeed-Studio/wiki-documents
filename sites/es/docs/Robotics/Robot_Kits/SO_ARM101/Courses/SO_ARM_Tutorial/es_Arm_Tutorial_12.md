---
description: "Capítulo 12 del curso para principiantes de SO-ARM Physical AI — conecta y verifica las cámaras frontal y lateral, entiende la sincronización imagen/acción, graba tu primer dataset LeRobot con lerobot-record y domina los controles de teclado."
title: Capítulo 12 - Configuración de cámaras y recolección de datos LeRobot
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - cámara
  - dataset
  - grabación
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_12
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 12 · Práctica</span>
    <h2>12. Configuración de cámaras y recolección de datos LeRobot</h2>
    <p>
      Capítulo 12 del curso para principiantes de SO-ARM Physical AI — conecta y verifica las cámaras frontal y lateral, entiende la sincronización imagen/acción, graba tu primer dataset LeRobot con lerobot-record y domina los controles de teclado durante la grabación.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Cámaras</a>
      <a href="#sync">Sincronización</a>
      <a href="#record">Grabar</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>
      Retira objetos de valor y personas ajenas a menos de 1 metro del espacio de trabajo. Antes de este capítulo, asegúrate de que el brazo esté bien fijado y que la alimentación y los cables estén correctos.
    </p>
  </div>
</div>

## 12.1 Configuración de una cámara vs. dos

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Disposición</span>
    <h2>12.1 Configuración de una cámara vs. dos</h2>
  </div>

La recolección y el entrenamiento de este curso requieren dos cámaras y dos vistas. Según la posición, los montajes habituales son:

| Disposición | Instalación y propósito | Escenarios |
|:---|:---|:---|
| **Vista de pinza** | Cámara superior sobre el frente de la mesa cubriendo el área; cámara en la pinza observando el detalle del agarre | Operaciones finas que requieren ver el contacto pinza-objeto |
| **Vista lateral de apoyo** | Cámara superior al frente; cámara lateral en el frente lateral observando la altura del brazo y el movimiento de la pinza | Agarre, manipulación y colocación |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp" alt="Disposición de cámara lateral de apoyo" />
</div>

Este curso usa la **vista lateral de apoyo** (frontal + lateral), el mismo montaje del Capítulo 22 sin código.

</section>

## 12.2 Encontrar los nombres de dispositivo de las cámaras

<section id="find-cameras" className="section-card">
  <div className="section-title">
    <span>Detección</span>
    <h2>12.2 Encontrar los nombres de dispositivo de las cámaras</h2>
  </div>

El índice de una cámara puede cambiar al reiniciar o reconectar — comportamiento que depende sobre todo del sistema operativo. Antes de cada sesión, detecta las cámaras conectadas:

```bash
lerobot-find-cameras opencv
```

El terminal imprime algo así:

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Las fotos de cada cámara están en `outputs/captured_images` — ábrelas para confirmar cuál índice es tu cámara frontal y cuál la lateral.

:::tip
Evita conectar cámaras USB por un concentrador. Conéctalas directo, preferentemente a puertos USB 3.0, para asegurar ancho de banda suficiente.
:::

</section>

## 12.3 Verificar las cámaras durante la teleoperación

<section id="teleop-cameras" className="section-card">
  <div className="section-title">
    <span>Previsualización</span>
    <h2>12.3 Verificar las cámaras durante la teleoperación</h2>
  </div>

Antes de grabar, confirma que ambas vistas están vivas y bien encuadradas teleoperando con visualización activada:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Los valores de `index_or_path` vienen del último dígito del ID reportado por `lerobot-find-cameras opencv`.

:::tip
`fourcc: "MJPG"` solicita fotogramas comprimidos. Con MJPG esta configuración soporta 3 cámaras a 1920×1080 @ 30FPS. `YUYV` es sin comprimir — baja la resolución útil y los FPS y puede trabar el brazo. No conectes dos cámaras al mismo concentrador USB.
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.4 Opcional: cámaras de profundidad (RealSense / Orbbec)

<section id="depth-cameras" className="section-card">
  <div className="section-title">
    <span>Opcional</span>
    <h2>12.4 Opcional: cámaras de profundidad (RealSense / Orbbec)</h2>
  </div>

<Tabs defaultValue="realsense">

<TabItem value="realsense" label="RealSense D435i / D405">

Las cámaras RealSense aportan percepción RGB-D para tareas de reconocimiento y manipulación cercana. Modelos recomendados: **D405** (estéreo de corto alcance, 7–50 cm, ideal para mesa) y **D435i** (profundidad + RGB + IMU).

**1. Cambia a la rama de cámaras** — el soporte de profundidad está en `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
git branch --show-current   # esperado: DepthCameraSupport
```

**2. Instala el extra de RealSense:**

```bash
pip install -e ".[realsense]"
```

**3. Permisos y detección:**

```bash
chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense
```

**4. Ejemplo** — teleoperación con color+profundidad de una D435i (usa el número de serie detectado en `serial_number_or_name`):

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, color_stream_format: rgb8,
      rotation: 0, warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      max_depth_m: 2.0, depth_alpha: 0.2,
      rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

**Notas de parámetros:** `depth_alpha` escala la imagen de profundidad (empieza en 0.2); con 3+ cámaras de profundidad reduce `fps` a 15; mantén 640×480 por estabilidad.

</TabItem>

<TabItem value="orbbec" label="Orbbec Gemini 2 / Gemini 336">

[Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) es una RGB-D de alto rendimiento con flujos RGB y profundidad sincronizados; la Gemini 336 mejora la profundidad en zonas reflectantes y oscuras.

**1. Cambia a la rama de cámaras:**

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

**2. Instala el extra de Orbbec:**

```bash
pip install -e ".[orbbec]"
```

**3. Permisos y caché USBFS** (los 16MB por defecto son pocos para flujos de profundidad):

```bash
chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb                 # ver
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'  # subir a 128MB
```

**4. Detecta las cámaras** y anota el número de serie:

```bash
lerobot-find-cameras orbbec
```

**5. Ejemplo** — teleoperación con una Orbbec color+profundidad:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, rotation: 0, warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 400, fps: 30,
      depth_alpha: 0.2, rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

:::tip
Una Orbbec ocupa 3 números consecutivos de `/dev/video`. Al combinarla con cámaras USB normales, conecta primero la Orbbec y las normales al final para que sus índices queden al final. Si los fotogramas expiran (`Timed out waiting for frame ...`), reconecta la cámara.
:::

</TabItem>

</Tabs>

</section>

## 12.5 Sincronización de imagen y acción

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sincronización</span>
    <h2>12.5 Sincronización de imagen y acción</h2>
  </div>

Al grabar, LeRobot ejecuta un ciclo por fotograma:

- leer ambas cámaras (frontal, lateral);
- leer articulaciones del líder → acciones;
- leer articulaciones del seguidor → estado;
- sellar la marca de tiempo y añadir una fila.

Como las cámaras entregan a su ritmo, el ciclo **alinea por marca de tiempo**, no por deseo: cada fila del dataset empareja las imágenes más frescas con los datos de articulación del mismo instante. Por eso `--dataset.fps` no debe superar lo que tus cámaras entreguen de forma estable (30 fps a 640×480 MJPG es la opción segura).

</section>

## 12.6 Grabar tu primer dataset

<section id="record" className="section-card">
  <div className="section-title">
    <span>Grabación</span>
    <h2>12.6 Grabar tu primer dataset</h2>
  </div>

Graba localmente la tarea del Capítulo 11 (A a B):

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

El `repo_id` es personalizable; con `push_to_hub=false` el dataset queda en `~/.cache/huggingface/lerobot/seeedstudio123/test/`.

### Parámetros de grabación

| Parámetro | Descripción | Predeterminado |
|-----------|-------------|---------|
| `--dataset.episode_time_s` | Duración por episodio (segundos) | 60 |
| `--dataset.reset_time_s` | Reinicio de entorno tras cada episodio (segundos) | 60 |
| `--dataset.num_episodes` | Total de episodios a grabar | 50 |

### Controles de teclado durante la grabación

| Tecla | Acción |
|-----|--------|
| → (flecha derecha) | Terminar/terminar reinicio del episodio actual; pasar al siguiente |
| ← (flecha izquierda) | Cancelar el episodio actual; regrabarlo |
| ESC | Detener la sesión, codificar videos y guardar el dataset |

:::tip
Si los atajos no responden, comprueba que `$DISPLAY` esté definido, o degrada pynput: `pip install pynput==1.6.8`
:::

Durante la grabación verás líneas como:

```text
INFO ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

Un `dt` cercano a 33 ms indica que el ciclo sostiene 30 Hz — sesión sana.

### Puntos de control y reanudación

- Se crean checkpoints automáticamente durante la grabación.
- Para reanudar tras una interrupción, reejecuta el mismo comando con `--resume=true`.
- **`--dataset.num_episodes` cuenta entonces los episodios de ESTA sesión**, no el total — 15 grabados de 50 → pon 35.
- Para empezar de cero, borra el directorio del dataset.

### Grabar en Hugging Face Hub (opcional)

Inicia sesión una vez con un token de escritura de [la configuración de HF](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
```

Luego fija `--dataset.repo_id=${HF_USER}/record-test` y `--dataset.push_to_hub=true` para publicarlo.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.7 Consejos para recolectar buenos datos

<section id="tips" className="section-card">
  <div className="section-title">
    <span>Calidad</span>
    <h2>12.7 Consejos para recolectar buenos datos</h2>
  </div>

- **Tarea**: agarrar objetos en los puntos marcados y colocarlos en B (la cruz del Capítulo 11).
- **Escala**: 50 episodios o más (10 por punto).
- **Consistencia**:
  - Cámaras fijas;
  - Comportamiento de agarre idéntico;
  - Objeto visible en ambas vistas.
- **Progresión**: domina el agarre fiable antes de añadir variaciones (nuevas posiciones, técnicas, cámaras). Evita subir la complejidad de golpe.
- **Entorno**: posiciones, ángulos y luz estables; sin fondos inestables ni gente cruzando — grandes diferencias entre grabación y despliegue hacen fallar las políticas.

💡 **Regla práctica**: deberías poder hacer la tarea tú mismo mirando solo las imágenes de las cámaras. Si no puedes, el modelo tampoco.

Fija `--dataset.num_episodes` lo bastante alto antes de empezar y no detengas a mitad salvo necesidad — las estadísticas (media y varianza) se calculan al final y el entrenamiento las necesita.

</section>

</div>

---
description: "Capítulo 21 del curso para principiantes de SO-ARM Physical AI — monta el entorno Isaac-GR00T, ajusta GR00T N1.5 sobre tu dataset de SO-ARM con la configuración so100_dualcam, y ejecuta la inferencia con el servidor GR00T y el cliente de control SO-100, en estación de trabajo o Jetson AGX Thor."
title: Capítulo 21 - Ajuste fino del SO-ARM con Isaac GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - ajuste fino
  - inferencia
  - Jetson Thor
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_21
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 21 · Práctica</span>
    <h2>21. Ajuste fino del SO-ARM con Isaac GR00T</h2>
    <p>
      Capítulo 21 del curso para principiantes de SO-ARM Physical AI — monta el entorno Isaac-GR00T, ajusta GR00T N1.5 sobre tu dataset de SO-ARM con la configuración so100_dualcam, y ejecuta la inferencia con el servidor GR00T y el cliente de control SO-100, en estación de trabajo o Jetson AGX Thor.
    </p>
    <div className="hero-actions">
      <a href="#environment">Entorno</a>
      <a href="#finetune">Ajuste fino</a>
      <a href="#inference">Inferencia</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ Sin código · Sin configuración de entorno</span>
    <p className="sensecraft-banner__title">Omite la configuración: ejecuta el reBot Arm y LeRobot desde una sola aplicación</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics es la plataforma sin código de Seeed para el SO-ARM101, reBot Arm 102 + B601-RS y B601-DM. Conecta los brazos, calibra, recopila demostraciones, entrena y ejecuta inferencias desde una interfaz guiada, sin entorno de Python ni terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Flujo de trabajo guiado en 6 pasos</li>
      <li>✅ Entrenamiento en la nube, sin GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir a SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/es/sensecraft_robotics/">Guía de software</a>
  </div>
</div>

<a id="overview"></a>

## 21.1 Elige tu vía de entrenamiento

<section id="paths" className="section-card">
  <div className="section-title">
    <span>Vías</span>
    <h2>21.1 Elige tu vía de entrenamiento</h2>
  </div>

Este capítulo sigue la vía **Isaac-GR00T** de la [guía oficial de ajuste SO101](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning) de NVIDIA — la misma receta del tutorial de Seeed [SO101 + GR00T en Jetson Thor](/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/). Tres formas de conseguir el cómputo:

| Vía | Hardware | Notas |
| :--- | :--- | :--- |
| **Estación local** | Clase RTX 4090 / A6000 (Ampere+, ~25GB VRAM) | Lo que asume este capítulo |
| **NVIDIA Brev en la nube** | Un navegador | Los mismos comandos en un notebook; exporta y descarga el checkpoint |
| **Sin GPU** | — | Salta al Capítulo 22: la vía sin código de SenseCraft Robotics |

:::warning
El entrenamiento o ajuste de GR00T requiere GPU con arquitectura **Ampere o posterior** (p. ej. RTX A6000, RTX 4090). **V100 (Volta) no está soportado.**
:::

</section>

## 21.2 Montar el entorno

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Entorno</span>
    <h2>21.2 Montar el entorno</h2>
  </div>

Crea un entorno dedicado (separado del `lerobot` está bien):

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

`flash-attn` es el paso que más suele fallar — debe coincidir con tu build de PyTorch/CUDA. Si compila con error: revisa `python -c "import torch; print(torch.version.cuda)"`, instala `ninja` y `packaging` primero, y reintenta.

El modelo fundacional se descarga automáticamente de Hugging Face al primer uso: [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main).

</section>

## 21.3 Ajuste fino sobre tu dataset de SO-ARM

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>Ajuste fino</span>
    <h2>21.3 Ajuste fino sobre tu dataset de SO-ARM</h2>
  </div>

Con el dataset del Capítulo 20 listo (aquí `./demo_data/so101-table-cleanup/` — sustituye por tu ruta):

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

Parámetros clave:

- `--dataset-path`: tu carpeta LeRobot (la del Capítulo 20);
- `--data-config so100_dualcam`: la configuración estándar de dos cámaras del SO-ARM;
- `--max-steps`: 10,000 es un buen primer punto para ~50 episodios;
- `--video-backend torchvision_av`: el backend de decodificación;
- Para ajustar desde un modelo base guardado localmente, añade `--base-model-path ./pretrained/GR00T-N1.5-3B`.

:::note
El ajuste por defecto requiere **~25GB de VRAM**. Si no te llega, añade `--no-tune_diffusion_model` — congela la cabeza DiT y entrena menos, pero cabe en tarjetas menores.
:::

Vigila la pérdida como en el Capítulo 15; espera un tiempo por paso notablemente mayor que ACT — el modelo tiene ~3.000 millones de parámetros.

### Exportar desde un notebook en la nube (vía Brev)

La barra lateral de Jupyter no navega dentro de las carpetas de entrenamiento. Comprime primero el checkpoint en `.zip` o `.tar.gz` y descarga el archivo desde la interfaz del notebook.

</section>

## 21.4 Ejecutar la inferencia: servidor + cliente de control

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inferencia</span>
    <h2>21.4 Ejecutar la inferencia: servidor + cliente de control</h2>
  </div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>
      La inferencia mueve el brazo real sin humano en el bucle. Despeja el espacio, aleja las manos y ten lista la opción de cortar la corriente.
    </p>
  </div>
</div>

Para el mejor rendimiento, replica el montaje de la recolección lo más fielmente posible — mismas cámaras, mismas posiciones, misma luz. La generalización del modelo es limitada.

**Terminal 1 — lanza el servicio de inferencia GR00T:**

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

**Terminal 2 — lanza el cliente de control** (el ejemplo oficial SO-100, escrito para este brazo):

```bash
python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

Notas:

- Sustituye `index_or_path` por tus índices — búscalos con `ls /dev/video*` o `lerobot-find-cameras opencv`. Deben ser las **mismas vistas** (frontal + lateral/pinza) que en el dataset.
- Cambia `--lang_instruction` por la frase exacta de tu dataset — el condicionamiento lingüístico en vivo (Capítulo 18).
- Cliente y servidor pueden correr en la misma máquina, o el servidor en otra máquina con GPU / Jetson Thor de la red.

</section>

## 21.5 Despliegue en el borde con Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Borde</span>
    <h2>21.5 Despliegue en el borde con Jetson AGX Thor</h2>
  </div>

Jetson AGX Thor aporta cómputo suficiente para correr la inferencia de GR00T N1.5 en el borde. Todas las dependencias vienen en una imagen Docker dedicada:

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

Dentro del contenedor:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

El ajuste (opcional, si lo saltaste en la nube) usa el mismo `gr00t_finetune.py` de 21.3; luego corre el mismo par servidor + cliente de 21.4. El recorrido completo de Jetson Thor — flasheo, entorno, recolección, entrenamiento en Brev, despliegue — está en el tutorial completo: [Ajusta GR00T N1.5 para LeRobot SO-ARM y despliégalo en Jetson Thor](/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/).

</section>

## 21.6 Vía alternativa: la política `groot` de LeRobot

<section id="lerobot-groot" className="section-card">
  <div className="section-title">
    <span>Alternativa</span>
    <h2>21.6 Vía alternativa: la política `groot` de LeRobot</h2>
  </div>

Si prefieres quedarte en la cadena LeRobot de la Etapa 3, la política `--policy.type=groot` también sirve (requiere `flash-attn` y GPU CUDA):

```bash
pip install "lerobot[groot]"

accelerate launch \
  --num_processes=1 \
  $(which lerobot-train) \
  --output_dir=outputs/train/groot_so101 \
  --save_checkpoint=true \
  --batch_size=64 \
  --steps=20000 \
  --policy.type=groot \
  --policy.repo_id=${HF_USER}/groot_so101 \
  --dataset.repo_id=seeedstudio123/test \
  --wandb.enable=true
```

Exige más entorno que ACT/Pi0 — el consejo oficial se mantiene: primero ACT de extremo a extremo, luego GR00T. La evaluación usa la receta familiar `lerobot-record ... --policy.path` del Capítulo 16.

</section>

## 21.7 Evaluación e iteración

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Evaluar</span>
    <h2>21.7 Evaluación e iteración</h2>
  </div>

Reusa íntegro el marco del Capítulo 16 — criterios, inicios variados, tasa de éxito, clasificación de fallos — con dos añadidos propios de VLA:

1. **Matriz de instrucciones:** evalúa cada frase de tarea de tu dataset; una VLA debe cambiar de comportamiento al cambiar la frase;
2. **Sonda de instrucción no grabada:** prueba una frase que **no** registraste — donde acierte, es generalización lingüística; donde falle, aparece la frontera de distribución del Capítulo 18. Responde a los fallos con datos, no con esperanza.

</section>

## 21.8 FAQ de solución de problemas

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>21.8 FAQ de solución de problemas</h2>
  </div>

| Problema | Solución |
| :--- | :--- |
| Fallo/descarga lenta del modelo | Descarga manual [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main) y pasa `--base-model-path` |
| Fallo al compilar `flash-attn` | Revisa el par PyTorch/CUDA; instala `ninja` + `packaging`; usa la versión fijada `2.7.1.post4` |
| CUDA OOM al ajustar | Añade `--no-tune_diffusion_model`; reduce el batch |
| V100 rechazada | Esperado — se requiere Ampere+ |
| El cliente no alcanza al servidor | `--policy_host` debe ser la IP alcanzable del servidor; revisa firewall/puerto |
| El brazo se mueve pero ignora la tarea | Claves de cámara o frase distintas del dataset — reglas de los Capítulos 19-20 |

</section>

</div>

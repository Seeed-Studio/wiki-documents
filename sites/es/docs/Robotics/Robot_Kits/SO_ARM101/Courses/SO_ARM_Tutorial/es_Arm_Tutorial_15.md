---
description: "Capítulo 15 del curso para principiantes de SO-ARM Physical AI — entiende batch size, learning rate y pasos de entrenamiento, entrena tu primera política ACT con lerobot-train, vigila la pérdida y la GPU, y gestiona los checkpoints."
title: Capítulo 15 - Entrenando tu primera política ACT
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ACT
  - entrenamiento
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_15
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 15 · Práctica</span>
    <h2>15. Entrenando tu primera política ACT</h2>
    <p>
      Capítulo 15 del curso para principiantes de SO-ARM Physical AI — entiende batch size, learning rate y pasos de entrenamiento, entrena tu primera política ACT con lerobot-train, vigila la pérdida y la GPU, y gestiona los checkpoints.
    </p>
    <div className="hero-actions">
      <a href="#configs">Tres configuraciones</a>
      <a href="#checkpoints">Checkpoints</a>
      <a href="#start-training">Empezar a entrenar</a>
    </div>
  </div>
</section>

## 15.1 Tres configuraciones clave: batch size, learning rate, pasos

<section id="configs" className="section-card">
  <div className="section-title">
    <span>Configuraciones</span>
    <h2>15.1 Tres configuraciones clave: batch size, learning rate, pasos</h2>
  </div>

### Batch size

Cuántos fotogramas ve el modelo por actualización. Batches mayores entrenan más estable pero consumen más VRAM. Si te quedas sin memoria CUDA, baja primero el batch. Empieza con el valor por defecto y tócalo solo si es necesario.

### Learning rate

Cuánto se mueven los parámetros en cada actualización. Muy alto — la pérdida oscila o explota; muy bajo — el entrenamiento arrastra. El valor por defecto de ACT (orden de 1e-5) está bien probado para tareas de mesa; no lo cambies en la primera corrida.

### Pasos de entrenamiento

Cuántas actualizaciones en total. Para tareas tipo SO-ARM, 100k-300k pasos es lo habitual; más pasos ayudan en tareas difíciles pero arriesgan sobreajuste. Guíate por la curva: cuando la pérdida de validación deja de mejorar, para.

:::tip
Estrategia de la primera corrida: deja todo por defecto, entrena 100k pasos, evalúa en el robot real (Capítulo 16) y luego decide qué ajustar. Los principiantes pierden más tiempo afinando a ciegas que entrenando dos veces.
:::

</section>

## 15.2 Guardar y gestionar checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>15.2 Guardar y gestionar checkpoints</h2>
  </div>

No hace falta guardar a mano: se guarda un checkpoint cada `save_freq` pasos más uno final `last`. Puedes poner un paso alto y luego elegir el modelo de menos pasos, descartando los sobreentrenados.

```text
outputs/train/act_so101_test/
├── train_config.json              ← Configuración completa (necesaria para reanudar)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Archivo por cada hito
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Último checkpoint, usado en el Capítulo 16
```

- **Disco:** cada checkpoint son pesos completos; docenas suman. Estable el entrenamiento, puedes borrar los tempranos y quedarte con `last`.
- En la inferencia, `--policy.path` apunta a `checkpoints/last/pretrained_model`.

</section>

## 15.3 Empezar a entrenar

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>Entrenamiento</span>
    <h2>15.3 Empezar a entrenar</h2>
  </div>

Todo verificado — arranca (en el entorno conda `lerobot`). Para un **dataset local** (grabado en el Capítulo 12), asegúrate de que el `repo_id` coincida con el de la recolección y añade `--policy.push_to_hub=false`:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

Para un **dataset en Hugging Face Hub**, usa tu usuario:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

Qué hace cada argumento:

- **Dataset:** `--dataset.repo_id` apunta al del Capítulo 12.
- **Pasos:** `--steps=300000`. El algoritmo va más alto por defecto; ajústalo según dificultad y curva.
- **Política:** `--policy.type=act` carga la configuración ACT, que se adapta automáticamente a estados, acciones y cámeras — todo ya está en el dataset. Otras opciones: `diffusion`, `pi0`, `pi0fast`, `smolvla`, `groot`.
- **Dispositivo:** `--policy.device=cuda` para GPUs NVIDIA; `mps` en Apple Silicon.
- **Visualización:** reactiva `--wandb.enable=true` para graficar con [Weights and Biases](https://docs.wandb.ai/quickstart) (antes `wandb login`).

:::tip
Las RTX de la serie 50 deben añadir `--dataset.video_backend=pyav` — evita APIs ausentes en la torchvision preliminar. Comando completo:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```
:::

</section>

## 15.4 Vigilar la pérdida y la GPU

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitorización</span>
    <h2>15.4 Vigilar la pérdida y la GPU</h2>
  </div>

- **Pérdida:** impresa cada `log_freq` pasos. Espera una caída rápida al inicio y luego un descenso largo y suave — eso es sano. Si sube u oscila violentamente, el learning rate no encaja con tu equipo.
- **GPU:** observa VRAM y uso con `nvidia-smi` (o `watch -n 1 nvidia-smi`). Uso cercano a 0% durante ratos = el cuello de botella es la tubería de datos (disco/CPU), no la GPU.
- **Tiempos orientativos:** 50 episodios tardan ~6 horas en una RTX 3060 8GB de portátil y 2–3 horas en una RTX 4090 o A100. Depende de tamaño, resolución, batch y hardware.

</section>

## 15.5 Reanudar un entrenamiento interrumpido

<section id="resume" className="section-card">
  <div className="section-title">
    <span>Reanudar</span>
    <h2>15.5 Reanudar un entrenamiento interrumpido</h2>
  </div>

Para reanudar desde `last`, devuélvele la configuración guardada:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### Subir los checkpoints (opcional)

Al terminar, sube el último:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

</section>

## 15.6 Errores comunes de entrenamiento

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Solución de problemas</span>
    <h2>15.6 Errores comunes de entrenamiento</h2>
  </div>

| Error | Solución |
| :--- | :--- |
| `TypeError: stack(): argument 'tensors' must be tuple of Tensors, not Column` | `pip install datasets==2.19` |
| CUDA sin memoria | Baja el batch; cierra otros procesos GPU; usa `--dataset.video_backend=pyav` |
| `No valid stream found in input file` al cargar | `conda install ffmpeg=7.1.1 -c conda-forge` (arreglo del Capítulo 5) |
| Dataset no encontrado | Revisa el `repo_id` exacto de la grabación; la carpeta está bajo `~/.cache/huggingface/lerobot/` |

Con un `checkpoints/last/pretrained_model` entrenado en la mano, el próximo capítulo lo lleva al brazo real.

</section>

</div>

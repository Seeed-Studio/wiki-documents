---
description: "Capítulo 16 del Curso para Principiantes en IA Física de Seeed: entrena tu primera política ACT: tamaño de lote, tasa de aprendizaje y pasos, gestión de checkpoints, inicio del entrenamiento, monitorización de la pérdida y del estado de la GPU, y reanudación de entrenamientos interrumpidos."
title: Capítulo 16 - Entrenar tu primera política ACT
keywords:
  - reBot
  - ACT
  - LeRobot
  - Training
  - Policy
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_16
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 16 · Práctica</span>
    <h2>16. Entrenar tu primera política ACT</h2>
    <p>
      Capítulo 16 del Curso para Principiantes en IA Física de Seeed: tamaño de lote, tasa de aprendizaje y
      pasos, gestión de checkpoints, inicio del entrenamiento, monitorización de la pérdida y del estado de la GPU, y reanudación
      de entrenamientos interrumpidos.
    </p>
    <div className="hero-actions">
      <a href="#configs">Configuraciones</a>
      <a href="#start-training">Iniciar entrenamiento</a>
      <a href="#monitoring">Monitorización</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>16.1 Tres configuraciones clave: tamaño de lote, tasa de aprendizaje, pasos</span>
    <span>16.2 Guardar y gestionar checkpoints</span>
    <span>16.3 Iniciar entrenamiento</span>
    <span>16.4 Monitorizar la pérdida y el estado de la GPU</span>
    <span>16.5 Reanudar entrenamientos interrumpidos</span>
  </div>
</section>

<RebotCourseNav />

## 16.1 Tres configuraciones clave: tamaño de lote, tasa de aprendizaje, pasos

<section id="configs" className="section-card">
  <div className="section-title">
    <span>Configuraciones</span>
    <h2>16.1 Tres configuraciones clave: tamaño de lote, tasa de aprendizaje, pasos</h2>
  </div>

En la terminal, ejecuta `nvidia-smi` para comprobar tu GPU y VRAM; las GPU de consumo (por ejemplo, 3050) también pueden entrenar.

### Tamaño de lote

Si tienes margen de VRAM, auméntalo para acelerar la convergencia, pero **no lo fuerces más allá de la VRAM disponible**.

| Configuración | Escenario |
| :--- | :--- |
| 8 GB de VRAM o menos | Puede entrenar; usa un tamaño de lote pequeño: 8 GB → tamaño de lote 4, 4 GB → tamaño de lote 2. |
| 12 GB+ de VRAM | Zona cómoda; usa el tamaño de lote por defecto; si la VRAM es grande, pon tamaño de lote=16 |
| Solo GPU integrada / sin GPU NVIDIA | Entrena en un servidor en la nube |

### Tasa de aprendizaje

El "tamaño de paso" por actualización. ACT viene con preajustes: optimizador AdamW, tasa de aprendizaje 1e-5, weight decay 1e-4, backbone visual en 1e-5. Los preajustes de la política están activados por defecto (`use_policy_training_preset`), así que estos valores se aplican automáticamente; no necesitas escribir nada. Un paso demasiado grande provoca oscilación o divergencia de la pérdida; uno demasiado pequeño duplica el tiempo de entrenamiento. No lo toques en tu primer entrenamiento: son valores ajustados a partir del artículo original y de una amplia práctica.

- Si cambias el tamaño de lote o los pasos, no hace falta ajustar la tasa de aprendizaje.
- Si haces fine-tuning/reanudas desde un checkpoint ya entrenado, reduce la tasa de aprendizaje a `1e-6`–`3e-6` (3–10 veces menor).
- Si la pérdida de entrenamiento apenas baja (se queda plana), no subas aún la LR; primero añade pasos/datos y luego prueba `2e-5`.

Añade el siguiente código; cámbialos ambos a la vez al mismo valor:

```text
--policy.optimizer_lr=1e-6 \
--policy.optimizer_lr_backbone=1e-6
```

### Pasos de entrenamiento

Para 50 episodios, si no quieres leer la explicación de los pasos de abajo, simplemente ejecútalo con **80 000** (50 episodios).

Los pasos escalan proporcionalmente: si el tamaño de lote se reduce a la mitad, las muestras vistas por paso se reducen a la mitad; para dar al modelo el mismo número de pasadas (épocas), los pasos deben duplicarse. Por ejemplo, tamaño de lote por defecto=8, pasos=80000; tamaño de lote=4 → pasos=160000; tamaño de lote=2 → pasos×4; tamaño de lote=16 → pasos÷2.

También puedes establecer más pasos: durante el entrenamiento puedes pulsar Ctrl+C para detenerlo en cualquier momento, eligiendo si parar en función de la pérdida y otros parámetros; el modelo generado hasta ese momento se guarda automáticamente.

- **Fotogramas totales** ≈ duración total de las grabaciones de vídeo.
- **época (una pasada)** = el estudiante ve toda la grabación de principio a fin.
- **pasos** = cuántos segmentos ha visto el estudiante en total.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-01.png" alt="Pasos de entrenamiento" />
</div>

</section>

## 16.2 Guardar y gestionar checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>16.2 Guardar y gestionar checkpoints</h2>
  </div>

No hace falta guardar manualmente: se guarda un checkpoint cada 20 000 pasos (`save_freq`), más uno final al terminar. Así que está bien poner un número de pasos grande: puedes elegir el modelo de pasos más bajos y descartar los que estén poco entrenados o sobreajustados.

```text
outputs/train/act_grab_cube_v1/
├── train_config.json              ← Full config for this run (needed to resume)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Model archive at each step count
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Last checkpoint, used in Chapter 17
```

- **Uso de disco:** cada checkpoint es un archivo completo de pesos del modelo; unas cuantas docenas se acumulan. Una vez que el entrenamiento se estabilice, se pueden borrar los checkpoints tempranos/medios, conservando solo `last`.
- Durante la inferencia, `--policy.path` apunta a `checkpoints/last/pretrained_model`.

</section>

## 16.3 Iniciar entrenamiento

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>Entrenamiento</span>
    <h2>16.3 Iniciar entrenamiento</h2>
  </div>

Todas las comprobaciones superadas: inicia (en el entorno conda `lerobot`):

```bash
lerobot-train \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --policy.type=act \
    --output_dir=outputs/train/act_rebot_test \
    --job_name=act_rebot_test \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.push_to_hub=false \
    --steps=100000
```

:::tip
Si usas una GPU RTX serie 50, añade `--dataset.video_backend=pyav` para evitar APIs que faltan en la versión preliminar de torchvision.
:::

Si la VRAM es insuficiente o quieres establecer más de una vez, añade `--batch_size` para fijar el tamaño de lote.

Notas sobre los parámetros:

| Parámetro | Significado |
| :--- | :--- |
| `--dataset.repo_id` | Nombre del conjunto de datos del Capítulo 13 (usa directamente el nombre local; para Hub usa `${HF_USER}/xxx`) |
| `--policy.type=act` | Tipo de política; también se puede usar diffusion, smolvla, etc. En esta etapa se usa ACT |
| `--output_dir` | Directorio para todas las salidas de entrenamiento |
| `--job_name` | Nombre para esta ejecución, usado en los registros para distinguir ejecuciones |
| `--policy.device=cuda` | Entrenar en GPU |
| `--wandb.enable=false` | Desactivar el panel online de wandb (regístrate y actívalo si quieres; no es obligatorio) |
| `--policy.push_to_hub=false` | No subir aún al Hub; espera hasta que la evaluación del Capítulo 17 sea satisfactoria |
| `--steps` | Pasos de entrenamiento |
| `--batch_size` | Tamaño de lote |

Estimación de tiempo: 100k pasos en una GPU de consumo suelen llevar unas pocas horas, dependiendo de la GPU y del tamaño de lote.

</section>

## 16.4 Monitorizar la pérdida y el estado de la GPU

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitorización</span>
    <h2>16.4 Monitorizar la pérdida y el estado de la GPU</h2>
  </div>

Tras pulsar Enter, la terminal empieza a mostrar los registros de entrenamiento. LeRobot imprime una línea de resumen cada 200 pasos (controlado por `--log_freq`), como esta:

```text
step: 10000  smpl: 80K  ep: 35.6  loss: 1.832  grdn: 12.4  lr: 1.0e-05  updt_s: 0.21  data_s: 0.003  eta: 3:42:10
```

Campo por campo (los nombres de los campos pueden variar ligeramente entre versiones):

| Campo | Significado | Qué observar |
| :--- | :--- | :--- |
| `step` | Paso actual | Compáralo con `--steps` para comprobar el progreso |
| `ep` | Épocas entrenadas | Corresponde a "cuántas veces se ha visto la grabación" |
| `loss` | Pérdida de entrenamiento | Caída rápida al principio, descenso lento después; pequeñas fluctuaciones es una forma normal |
| `grdn` | Norma del gradiente | Un pico repentino a cientos/miles indica entrenamiento inestable |
| `lr` | Tasa de aprendizaje actual | Confirma que es el valor esperado |
| `updt_s` / `data_s` | Tiempo de actualización/carga de datos por paso | Un `data_s` grande significa que la carga de datos es el cuello de botella |
| `eta` | Tiempo restante estimado | Decide si ir a comer o dormir |

**Tendencias normales para estas métricas**, en tres categorías:

- **Debería seguir bajando — `loss`.** La bajada tiene tres fases: **caída pronunciada inicial**, **descenso gradual medio**, **fluctuaciones pequeñas en un nivel bajo al final, aplanándose en conjunto**. Esta curva de "rápido, luego lento y luego plana" es una curva de convergencia saludable. Dos formas anómalas a vigilar: nunca baja (problema de datos/configuración: comprueba las claves de la cámara); baja y luego vuelve a subir (divergencia del entrenamiento: reduce a la mitad la LR y vuelve a entrenar).
- **Debería converger en conjunto con cierto ruido — `grdn` (norma del gradiente).** La tendencia general sigue a la pérdida hacia abajo y se estabiliza, pero **los picos son normales**: un pico ocasional que se recupera está bien; lo peligroso es una amplificación continua, ola tras ola más alta: eso es un precursor de divergencia; trátalo como arriba: baja la LR.
- **Deberían mantenerse constantes — `lr`, `updt_s`, `data_s`, utilización de la GPU.** `lr` se mantiene en el valor que fijaste durante todo el tiempo, solo para tu confirmación; el tiempo por paso (`updt_s`/`data_s`) y la utilización de la GPU con `watch -n 1 nvidia-smi` deberían ser **estables**: una utilización persistentemente baja o muy fluctuante significa que la GPU está esperando datos; el cuello de botella es la carga de datos, no la GPU.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-02.png" alt="Curva de pérdida" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-03.png" alt="Utilización de la GPU" />
</div>

</section>

## 16.5 Reanudar entrenamientos interrumpidos

<section id="resume" className="section-card">
  <div className="section-title">
    <span>Reanudar</span>
    <h2>16.5 Reanudar entrenamientos interrumpidos</h2>
  </div>

Si el entrenamiento pierde alimentación, red o terminal a mitad de ejecución, no hace falta empezar de cero: mientras se haya guardado al menos un checkpoint (es decir, el entrenamiento haya pasado de 20 000 pasos):

```bash
lerobot-train \
    --config_path=outputs/train/act_rebot_test/train_config.json \
    --resume=true
```

- **Reanudar usa la configuración guardada:** el entrenamiento reanudado utiliza la configuración guardada en `train_config.json`; los parámetros de la línea de comandos se ignoran. Para cambiar parámetros (por ejemplo, pasos, tamaño de lote), inicia una nueva ejecución; no uses reanudar.
- **Continuar desde el último checkpoint:** se restauran el estado del optimizador y el contador de pasos; la curva de pérdida continúa sin interrupciones.

</section>

</div>

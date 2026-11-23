---
description: "Capítulo 16 del curso para principiantes de SO-ARM Physical AI — cómo funciona la inferencia en el SO-ARM real, ejecuta tu política ACT con lerobot-record y lerobot-rollout, evalúa por tasa de éxito, analiza fallos e itera los datos."
title: Capítulo 16 - Inferencia real, evaluación e iteración de datos
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - inferencia
  - evaluación
  - ACT
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_16
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 16 · Teoría y práctica</span>
    <h2>16. Inferencia real, evaluación e iteración de datos</h2>
    <p>
      Capítulo 16 del curso para principiantes de SO-ARM Physical AI — cómo funciona la inferencia en el SO-ARM real, ejecuta tu política ACT entrenada con lerobot-record y lerobot-rollout, evalúa por tasa de éxito, analiza fallos e itera los datos.
    </p>
    <div className="hero-actions">
      <a href="#dataflow">Flujo de inferencia</a>
      <a href="#inference">Ejecutar inferencia</a>
      <a href="#evaluation">Evaluar</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>
      La inferencia mueve el brazo real a pleno par sin humano en el bucle. Despeja el espacio en 1 metro, aleja las manos y ten lista la opción de cortar la corriente.
    </p>
  </div>
</div>

## 16.1 Flujo de datos de inferencia

<section id="dataflow" className="section-card">
  <div className="section-title">
    <span>Flujo de datos</span>
    <h2>16.1 Flujo de datos de inferencia</h2>
  </div>

Recuerda el Capítulo 9: la inferencia es la imagen especular de la recolección. Ciclo por fotograma:

1. Leer las dos cámaras → **Observación**;
2. Leer las 6 articulaciones del seguidor → **Estado**;
3. Normalizar con las estadísticas guardadas del dataset;
4. La política predice un **bloque de acciones** (k × 6);
5. Ejecutar en los servos los primeros pasos del bloque;
6. Consumida esa parte, reobservar y repredecir.

El brazo líder ya no se usa — el modelo sustituyó al humano como decisor. El resto (cámaras, bus serie, límites de seguridad) es idéntico a la grabación; por eso las claves de cámara y el `--robot.id` deben coincidir exactamente con la sesión de grabación.

</section>

## 16.2 Preprocesamiento y desnormalización

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>Preprocesamiento</span>
    <h2>16.2 Preprocesamiento y desnormalización</h2>
  </div>

Tu dataset guardó estadísticas por característica (media/desviación) en `meta/stats` (Capítulo 13). En la inferencia:

- **Entrada:** imágenes y estados se normalizan con las estadísticas de entrenamiento antes de entrar a la red;
- **Salida:** las acciones normalizadas de la red se desnormalizan a valores reales de articulación antes de ir a los servos.

Por eso el comando de evaluación debe usar **las mismas claves de cámara** (`front`, `side`) que en la grabación — una clave distinta implica estadísticas ausentes, y verás:

```text
mean is infinity. You should either initialize with stats as an argument or use a pretrained model
```

</section>

## 16.3 Iniciar la inferencia en el robot real

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inferencia</span>
    <h2>16.3 Iniciar la inferencia en el robot real</h2>
  </div>

### Método A: `lerobot-record` con política (recomendado para empezar)

La herramienta record acepta un checkpoint y graba un **dataset de evaluación** mientras la política conduce el brazo — 10 episodios:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeedstudio123/eval_test123 \
  --dataset.single_task="Put the object from Point A into Point B" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

Notas:

1. `--policy.path` es el checkpoint del Capítulo 15. Si lo subiste al Hub, sirve un repo id (p. ej. `${HF_USER}/act_so101_test`).
2. El `dataset.repo_id` de evaluación suele empezar por `eval_` — videos y datos se guardan aparte, p. ej. `seeedstudio123/eval_test123`.
3. Si aparece `File exists: '.../eval_xxxx'`, borra la carpeta vieja y repite.
4. Las claves (`front`, `side`) deben coincidir exactamente con las de grabación (ver 16.2).

### Método B: `lerobot-rollout` en tiempo real

Ejecución en vivo sin grabar (soportado por SmolVLA / ACT):

```bash
lerobot-rollout \
  --strategy.type=base \
  --policy.path=${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \
  --duration=60
```

</section>

## 16.4 Ejecución del bloque de acciones

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>Ejecución</span>
    <h2>16.4 Ejecución del bloque de acciones</h2>
  </div>

La distinción bloque/horizonte del Capítulo 14 se vuelve visible aquí:

- El modelo predice k=100 acciones por pasada;
- Solo la primera porción se ejecuta en lazo abierto antes de reobservar;
- El solape entre el final del bloque viejo y el inicio del nuevo se suaviza (ensamble temporal), y el movimiento se ve continuo.

Si el brazo se mueve a "sacudidas" — una pausa fuerte cada medio segundo — el problema es el horizonte efectivo o la velocidad de inferencia: revisa uso de GPU, fps de cámaras y considera la inferencia asíncrona (la política en un proceso servidor aparte; la idea, en el capítulo de despliegue de la Etapa 4).

</section>

## 16.5 Seguridad: límites, velocidad y parada de emergencia

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Seguridad</span>
    <h2>16.5 Seguridad: límites, velocidad y parada de emergencia</h2>
  </div>

- Los límites de articulación de la calibración restringen cada acción enviada.
- Mantén la mano en el interruptor en las primeras corridas de cada checkpoint nuevo; cortar la corriente es la parada más rápida (los servos se aflojan).
- ESC en una sesión `lerobot-record` de evaluación detiene el episodio limpiamente.
- Nunca dejes el brazo desatendido cerca de personas, cables o el borde de la mesa.

</section>

## 16.6 Evaluación: tasa de éxito y tiempo de finalización

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Evaluación</span>
    <h2>16.6 Evaluación: tasa de éxito y tiempo de finalización</h2>
  </div>

Usa los criterios del Capítulo 11 — objetivamente determinables:

1. **Define el éxito:** "el objeto termina dentro del área marcada de B".
2. **Varía inicios:** coloca el objeto en los 5 puntos, repite cada punto N veces.
3. **Cuenta:** éxitos / total = tasa. Registra también el tiempo medio — una política que tarda o reintenta también te está diciendo algo.

Tabla de resultados sugerida por checkpoint:

| Punto inicial | Ejecuciones | Éxitos | Tasa |
| :--- | :---: | :---: | :---: |
| Centro | 4 | 4 | 100% |
| Arriba | 4 | 3 | 75% |
| Izquierda | 4 | 2 | 50% |
| ... | | | |

</section>

## 16.7 Prueba de generalización

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>Generalización</span>
    <h2>16.7 Prueba de generalización</h2>
  </div>

Superada la prueba dentro de distribución, sondea las fronteras deliberadamente (un cambio por vez):

- Mueve el objeto levemente fuera del área marcada;
- Cambia el objeto (otro tamaño, misma categoría);
- Cambia la luz (día vs. lámpara nocturna).

Espera degradación suave dentro de la distribución y fallo duro fuera — el principio del Capítulo 8 apareciendo en hardware. Cada fallo de generalización que quieras arreglar se responde con datos que cubran esa situación, no con más pasos de entrenamiento.

</section>

## 16.8 Análisis de tipos de fallo

<section id="failures" className="section-card">
  <div className="section-title">
    <span>Fallos</span>
    <h2>16.8 Análisis de tipos de fallo</h2>
  </div>

Clasifica cada episodio fallido en uno de cuatro grupos — el grupo dicta el arreglo:

| Tipo de fallo | Se ve como | Arreglo |
| :--- | :--- | :--- |
| **Fallo de percepción** | Agarra 3 cm a la izquierda del objeto | Faltan datos de esa posición/luz → recolecta allí |
| **Fallo de estrategia** | Se acerca siempre por el lado equivocado | Demos inconsistentes → regrabar con una sola estrategia |
| **Fallo de ejecución** | Aproximación correcta pero resbala | Fuerza/velocidad de pinza inconsistente; revisa su calibración |
| **Fallo de sistema** | El brazo se traba, pausa, cámara con lag | No es el modelo: fps, ancho de banda USB, calibración, temperatura de servos |

</section>

## 16.9 Iteración de datos: recolección guiada por fallos

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteración</span>
    <h2>16.9 Iteración de datos: recolección guiada por fallos</h2>
  </div>

El bucle que cierra la vía principal de la Etapa 3:

1. Evalúa (16.6) y clasifica los fallos (16.8);
2. Por cada grupo de fallo perceptual/estratégico, graba 10–20 episodios nuevos que cubran exactamente esa situación (flujo del Capítulo 12);
3. Limpia y fusiona al dataset con las herramientas del Capítulo 13;
4. Reentrena (Capítulo 15) — reanudado o desde cero;
5. Reevalúa. Repite hasta que la tasa satisfaga tu definición de "hecho".

Este bucle guiado por fallos — no ninguna corrida individual — es la práctica diaria de los proyectos reales de aprendizaje robótico.

</section>

</div>

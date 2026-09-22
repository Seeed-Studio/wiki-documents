---
description: "Capítulo 17 del Curso para Principiantes en Inteligencia Incorporada de Seeed: inferencia en robot real, evaluación e iteración de datos: flujo de datos de inferencia, preprocesamiento y desnormalización, inicio de la inferencia, ejecución de fragmentos de acción, seguridad, evaluación de la tasa de éxito, pruebas de generalización, análisis de fallos y recopilación de datos impulsada por fallos."
title: Capítulo 17 - Inferencia en Robot Real, Evaluación e Iteración de Datos
keywords:
  - reBot
  - ACT
  - Inference
  - Evaluation
  - Data Iteration
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_17
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 17 · Teoría y Práctica</span>
    <h2>17. Inferencia en Robot Real, Evaluación e Iteración de Datos</h2>
    <p>
      Capítulo 17 del Curso para Principiantes en Inteligencia Incorporada de Seeed: flujo de datos de inferencia,
      preprocesamiento y desnormalización, inicio de la inferencia, ejecución de fragmentos de acción, seguridad,
      evaluación de la tasa de éxito, pruebas de generalización, análisis de fallos y recopilación de datos
      impulsada por fallos.
    </p>
    <div className="hero-actions">
      <a href="#start-inference">Inferencia</a>
      <a href="#evaluation">Evaluación</a>
      <a href="#data-iteration">Iteración</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>17.1 Flujo de Datos de Inferencia</span>
    <span>17.2 Preprocesamiento y Desnormalización</span>
    <span>17.3 Inicio de la Inferencia en Robot Real</span>
    <span>17.4 Ejecución de Fragmentos de Acción</span>
    <span>17.5 Seguridad: Límites, Límites de Velocidad, Parada de Emergencia</span>
    <span>17.6 Evaluación: Tasa de Éxito y Tiempo de Finalización</span>
    <span>17.7 Pruebas de Generalización</span>
    <span>17.8 Análisis de Tipos de Fallo</span>
    <span>17.9 Iteración de Datos: Recopilación de Datos Impulsada por Fallos</span>
  </div>
</section>

<RebotCourseNav />

## 17.1 Flujo de Datos de Inferencia

<section id="inference-flow" className="section-card">
  <div className="section-title">
    <span>Flujo</span>
    <h2>17.1 Flujo de Datos de Inferencia: Entiéndelo en un Solo Diagrama</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-01.png" alt="Inference data flow" />
</div>

</section>

## 17.2 Preprocesamiento y Desnormalización

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>Preprocesamiento</span>
    <h2>17.2 Preprocesamiento y Desnormalización</h2>
  </div>

Durante el entrenamiento el modelo consume datos normalizados; durante la inferencia debes seguir **las mismas reglas** tanto para la entrada como para la salida:

| Dirección | Procesamiento | Estadísticas usadas |
| :--- | :--- | :--- |
| Hacia el modelo | Redimensionado de imagen + media/std de ImageNet; estado menos la media, dividido por la desviación estándar (z-score) | `meta/stats.json` del conjunto de datos de entrenamiento |
| Fuera del modelo | Acción multiplicada por la desviación estándar, más la media; restaurar a ángulos articulares reales | Igual que arriba |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-02.png" alt="Preprocessing and de-normalization" />
</div>

</section>

## 17.3 Inicio de la Inferencia en Robot Real

<section id="start-inference" className="section-card">
  <div className="section-title">
    <span>Inferencia</span>
    <h2>17.3 Inicio de la Inferencia en Robot Real</h2>
  </div>

Usa `lerobot-record` para cargar la política; los parámetros del robot y de la cámara son idénticos a los de la recopilación:

**Versión RS:**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the crayfish into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false
```

**Versión DM:**

```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the crayfish into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false
```

- `--dataset.num_episodes=10`: ejecutar 10 episodios.
- `--dataset.episode_time_s=60`: máximo 60 segundos por episodio. Ajústalo según la duración de la tarea; por ejemplo, agarrar un cangrejo de río y meterlo en una caja tarda ~20-30 segundos, así que pon 30-40 para dejar margen. Si quieres probar el modelo sin tener que esperar, ponlo muy largo (por ejemplo, 300), ya que hay un intervalo entre episodios.
- `--dataset.reset_time_s=10`: 10 segundos entre episodios para que puedas recolocar los objetos (durante la evaluación, mantén el estado inicial lo más consistente posible).

</section>

## 17.4 Ejecución de Fragmentos de Acción

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>Ejecución</span>
    <h2>17.4 Ejecución de Fragmentos de Acción</h2>
  </div>

- Una inferencia produce un fragmento de acción de 100 pasos; **solo se ejecutan en lazo abierto los primeros n pasos** (`n_action_steps`), luego se vuelve a observar: las predicciones más lejanas son menos fiables.
- Cuando el ensamblado temporal está activado (`temporal_ensemble_coeff`), la acción en cada instante es un promedio ponderado de múltiples predicciones, con casi cero vibración.
- Si el robot real parece "entrecortado", probablemente se deba al hueco de cómputo entre fragmentos: el fragmento antiguo termina y el nuevo aún no se ha calculado. Aumentar `n_action_steps` puede ayudar, a costa de una menor resistencia a perturbaciones.

</section>

## 17.5 Seguridad: Límites, Límites de Velocidad, Parada de Emergencia

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Seguridad</span>
    <h2>17.5 Seguridad: Límites, Límites de Velocidad, Parada de Emergencia</h2>
  </div>

- **Usa siempre ESC para detener**; no uses Ctrl+C. Antes de detener, deja que el brazo termine el fragmento de acción actual o devuélvelo manualmente a una postura segura para evitar que se detenga en el aire en una posición cargada.
- Está siempre preparado para cortar la alimentación; si el brazo se comporta de forma anómala, es necesaria una desconexión de emergencia.

</section>

## 17.6 Evaluación: Tasa de Éxito y Tiempo de Finalización

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Evaluación</span>
    <h2>17.6 Evaluación: Tasa de Éxito y Tiempo de Finalización</h2>
  </div>

Fija las condiciones iniciales, ejecuta 20 pruebas consecutivas y registra cada una.

- **Tasa de éxito = éxitos ÷ 20.** Para un primer modelo entrenado, >50% es un inicio normal, >80% es excelente.
- **Tiempo de finalización:** comprueba la estabilidad: ¿las ejecuciones exitosas tienen duraciones similares? Una velocidad inconsistente significa que la política "duda".
- En las ejecuciones fallidas, **no te limites a anotar una ✗**: registra el modo de fallo.

</section>

## 17.7 Pruebas de Generalización

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>Generalización</span>
    <h2>17.7 Pruebas de Generalización</h2>
  </div>

Después de probar bajo condiciones estándar, varía las condiciones una por una y observa cuánto cae la tasa de éxito (ACT con 50 episodios no tendrá una gran generalización; recomendamos añadir datos).

| Prueba | Método | Expectativa |
| :--- | :--- | :--- |
| Generalización de posición | Coloca el bloque fuera de los cinco puntos marcados con lápiz pero dentro de la cobertura de entrenamiento | Apenas debería caer; si cae, la diversidad de posiciones es insuficiente |
| Perturbación leve | Coloca objetos no relacionados sobre la mesa | Un modelo entrenado con una escena visualmente limpia no debería verse afectado |
| Cambio fuerte de distribución | Objetos totalmente nuevos, superficie reflectante espejada | El fallo es de esperar; no es necesario corregirlo |

El objetivo de las pruebas de generalización no es demostrar lo fuerte que es el modelo, sino **delimitar su frontera de capacidad**: úsalo libremente dentro de esa frontera; complementa los datos y amplíala gradualmente más allá.

</section>

## 17.8 Análisis de Tipos de Fallo

<section id="failure-analysis" className="section-card">
  <div className="section-title">
    <span>Fallos</span>
    <h2>17.8 Análisis de Tipos de Fallo</h2>
  </div>

| Tipo de fallo | Causa más probable | Contramedida |
| :--- | :--- | :--- |
| No puede alcanzar: se mueve hacia una posición incorrecta | Cobertura de datos insuficiente en esa posición (fuera de distribución) | Complementar demostraciones en esa zona |
| Agarre inestable: toca pero no puede sujetar/se le cae | El momento de cierre de la pinza se ha aprendido de forma imprecisa; muy pocas demostraciones del momento de agarre | Añadir demostraciones de alta calidad del momento de agarre |
| Movimiento aleatorio en todo momento; las acciones son absurdas | El entrenamiento no ha convergido en absoluto, o la escena/iluminación ha cambiado significativamente | Comprobar si la escena y la iluminación de recopilación de datos coinciden con las de inferencia |

:::tip
**Descarta primero problemas de configuración y luego sospecha de problemas de datos**: el movimiento aleatorio es una enfermedad de configuración; el no-puede-alcanzar es una enfermedad de datos.
:::

</section>

## 17.9 Iteración de Datos: Recopilación de Datos Impulsada por Fallos

<section id="data-iteration" className="section-card">
  <div className="section-title">
    <span>Iteración</span>
    <h2>17.9 Iteración de Datos: Recopilación de Datos Impulsada por Fallos</h2>
  </div>

El paso final del ciclo: convertir los fallos en datos:

1. **Clasificar:** identificar el tipo de fallo y la escena correspondiente.
2. **Complementar:** registrar de 10 a 20 demostraciones nuevas para la escena de fallo: ¿no puede alcanzar? graba en esa posición; ¿agarre inestable? graba el momento de agarre. Expande conscientemente el límite de agarre de forma gradual; por ejemplo, coloca bloques en puntos de 5 a 10 cm más allá de la cruz original para ampliar el conjunto de datos.
3. **Reentrenar:** vuelve a entrenar con el nuevo conjunto de datos.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-03.png" alt="Data iteration" />
</div>

Con esto, el bucle cerrado desde el inicio del capítulo queda completamente completo: teleoperación, recopilación, inspección, entrenamiento, inferencia, evaluación, iteración; esta canalización se reutiliza tal cual para cualquier tarea nueva. Ese es el entregable principal de la Etapa 3.

</section>

</div>

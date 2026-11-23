---
description: "Un análisis en profundidad de WALL-OSS-0.5: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "WALL-OSS-0.5: Conectando el aprendizaje visión-lenguaje y las acciones continuas"
hide_title: true
keywords: ["Paper Deep-Dive","WALL-OSS-0.5","VLA","Gradient-Bridged Co-Training","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerrequisitos: encaminamiento y gradientes",
    "id": "prerequisites-routing-and-gradients",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitectura: contexto compartido, rutas separadas",
    "id": "architecture-shared-context-separate-paths",
    "level": 2
  },
  {
    "value": "RVQ: más que compresión de trayectorias",
    "id": "rvq-more-than-trajectory-compression",
    "level": 2
  },
  {
    "value": "Entrenamiento conjunto: tres señales complementarias",
    "id": "joint-training-three-complementary-signals",
    "level": 2
  },
  {
    "value": "Supervisión en el espacio de acciones",
    "id": "action-space-supervision",
    "level": 2
  },
  {
    "value": "La interfaz de control de 26D",
    "id": "the-26d-control-interface",
    "level": 2
  },
  {
    "value": "Experimentos: progreso, comportamiento zero-shot y adaptación",
    "id": "experiments-progress-zero-shot-behavior-and-adaptation",
    "level": 2
  },
  {
    "value": "Comportamiento preentrenado",
    "id": "pretrained-behavior",
    "level": 3
  },
  {
    "value": "Datos de fine-tuning emparejados",
    "id": "matched-fine-tuning-data",
    "level": 3
  },
  {
    "value": "Ablaciones controladas",
    "id": "controlled-ablations",
    "level": 3
  },
  {
    "value": "Integración con LeRobot y límites del entrenamiento",
    "id": "lerobot-integration-and-training-boundaries",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5: Conectando el aprendizaje visión-lenguaje y las acciones continuas</h1>
  <p className="paper-reading-lead">Informe técnico de Wall-OSS-0.5</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#joint-training-three-complementary-signals">Puente de gradientes</a></li>
    <li><a href="#action-space-supervision">Supervisión en el espacio de acciones</a></li>
    <li><a href="#experiments-progress-zero-shot-behavior-and-adaptation">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot WALL-OSS-0.5 ↗</a>

**Parámetros de LeRobot**

- `--policy.type=wall_oss_05` selecciona esta versión; `wall_x` apunta a una versión distinta de WALL.
- `--policy.path=lerobot/wall-oss-0.5` carga la base para la adaptación al objetivo.
- La versión usa un diseño canónico de 26D, fragmentos de 32 pasos, normalización q01/q99 y diez pasos de Euler.
- El adaptador admite acciones continuas y objetivos de texto, pero no expone la ruta de acciones RVQ autorregresiva completa para reproducir el preentrenamiento conjunto.

</aside>

Un robot clasifica bloques por color y ubicación. El VLM entiende esos conceptos, pero un nuevo experto en acciones puede no usarlos correctamente. **¿Es suficiente la supervisión de acciones continuas por sí sola para organizar el backbone en torno al control?**

## Prerrequisitos: encaminamiento y gradientes

El encaminamiento hacia adelante selecciona parámetros de expertos y tokens visibles. Los gradientes determinan qué pérdidas actualizan esos parámetros. Expertos separados no implican automáticamente gradientes detenidos.

La entropía cruzada de acciones discretas ofrece una señal de aprendizaje de acciones nativa del VLM, mientras que el flow matching continuo proporciona acciones de despliegue. El informe estudia cómo estos objetivos conectan la comprensión con el control.

## Resumen y guía de lectura

**Resumen breve.** El modelo de aproximadamente 4B amplía Qwen2.5-VL-3B con un experto en acciones, un tokenizador RVQ alineado con visión y supervisión en el espacio de acciones. La predicción multimodal preserva el anclaje, la predicción de acciones discretas moldea el backbone y el flow matching genera trayectorias ejecutables.

**Nota de lectura.** Este es un informe separado de la versión 0.5, no la receta de entrenamiento WALL-OSS anterior. Su métrica principal en robots reales es el progreso en la tarea más que el éxito de tarea completa.

## Arquitectura: contexto compartido, rutas separadas

Visión, lenguaje, estado y acciones discretas pasan por el VL Expert; las acciones continuas ruidosas pasan por el Action Expert. La atención compartida aporta contexto. Los objetivos de acciones discretas y continuas son mutuamente invisibles, lo que evita fugas de respuestas.

| Objetivo | Rol en entrenamiento | Rol en despliegue |
| --- | --- | --- |
| CE de texto multimodal | Preservar el anclaje y el conocimiento semántico | Comprensión y generación de texto |
| CE de tokens de acción (objetivos RVQ) | Hacer que el backbone sea consciente de las acciones | Principalmente un puente de entrenamiento |
| Flow matching continuo | Aprender trayectorias con gradientes hacia el backbone | Salida ejecutable por defecto |

Para la clasificación, la supervisión de texto enseña conceptos de color/ubicación, los tokens de acción los vinculan al movimiento y el experto continuo aprende trayectorias numéricas. Estos no son tres planificadores de despliegue secuenciales.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="Entrenamiento conjunto multimodal, de acciones discretas y de acciones continuas" loading="lazy" />
  <figcaption><strong>Entrenamiento conjunto multimodal, de acciones discretas y de acciones continuas.</strong> Fuente: el artículo de WALL-OSS-0.5. La entropía cruzada de acciones discretas aporta supervisión relacionada con el control al backbone visión-lenguaje; el flow matching entrena las acciones continuas desplegadas. La atención conjunta conecta los grupos de tokens. La especialización del encaminamiento y la conectividad de gradientes son cuestiones separadas.</figcaption>
</figure>

## RVQ: más que compresión de trayectorias

La cuantización vectorial residual asigna la estructura de movimiento gruesa a los primeros codebooks y las correcciones residuales a los posteriores. Un codificador condicionado por observaciones comprime acciones delta, y un decodificador condicionado por el estado las reconstruye.

La alineación visión-acción, la predicción del siguiente fotograma y la reconstrucción en el dominio DCT fomentan además códigos semánticos, conscientes de las consecuencias y suaves. El despliegue continuo puede beneficiarse de estas representaciones discretas de entrenamiento incluso sin decodificarlas directamente en controles.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="Cuantización residual de acciones con objetivos de alineación visual" loading="lazy" />
  <figcaption><strong>Cuantización residual de acciones con objetivos de alineación visual.</strong> Fuente: el artículo de WALL-OSS-0.5. Junto con la reconstrucción de acciones, la alineación visión-acción y la predicción de características de contexto futuro moldean códigos semánticos. El predictor de características de la derecha no sintetiza directamente imágenes futuras de la cámara.</figcaption>
</figure>

## Entrenamiento conjunto: tres señales complementarias

Las muestras de acciones y multimodales se mezclan en una proporción 9:1 con

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

Los coeficientes de pérdida equilibran las escalas numéricas, no los porcentajes de capacidad. A diferencia del aislamiento mediante stop-gradient, el informe mantiene los gradientes de flow hacia el backbone VL.

El preentrenamiento abarca más de veinte encarnaciones y más de un millón de trayectorias por época, junto con anclaje multimodal. Instrucciones a nivel de objetivo y de paso, paráfrasis y perturbaciones de estado reducen la dependencia de una única redacción o de una propiocepción ideal.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-en-v2.png" alt="Información hacia adelante y gradientes hacia atrás en la clasificación de bloques" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Información hacia adelante y gradientes hacia atrás en la clasificación de bloques.</strong> Ilustración didáctica generada por IA. Las flechas continuas muestran la información hacia adelante y las flechas discontinuas muestran las rutas de retropropagación. La entropía cruzada (CE) de tokens de acción predice autorregresivamente tokens RVQ y aporta el puente de gradientes al VL Expert; la CE multimodal ancla el anclaje. El flow matching entrena acciones continuas con supervisión en el espacio de acciones, y sus gradientes también alcanzan el VL Expert a través de la atención compartida. Se omiten las máscaras de atención internas; el despliegue se basa por defecto en acciones continuas.</figcaption>
</figure>

## Supervisión en el espacio de acciones

La ruta y la acción reconstruida son

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

La red predice velocidad, pero la pérdida compara acciones reconstruidas y limpias. Esto equivale a un error de velocidad ponderado por $(1-\tau)^2$. En $\tau=0.2$ el peso es 0.64; en 0.8 es 0.04, un factor de 16. Este cálculo didáctico explica el énfasis más fuerte en la formación de trayectorias con alto ruido, no una garantía de que cualquier trayectoria suave tenga éxito.

## La interfaz de control de 26D

Cada brazo aporta posición relativa 3D, rotación relativa 6D y un canal de pinza: 20 dimensiones para dos brazos. La velocidad de la base añade tres, el elevador una y la actuación de la cabeza dos. La anchura de la codificación de rotación es distinta de los grados de libertad físicos.

El despliegue elimina el ruido de acciones continuas a partir de observaciones, estado y lenguaje sin decodificar acciones RVQ. El horizonte dependiente de la fuente de un segundo del artículo y la configuración de versión de 32 pasos del adaptador son ajustes separados.

## Experimentos: progreso, comportamiento zero-shot y adaptación

### Comportamiento preentrenado

El conjunto zero-shot contiene doce tareas vistas y cinco retenidas, puntuadas mediante una rúbrica de progreso predefinida sobre diez trayectorias por tarea. En 400k, el progreso medio en tareas vistas es 50.0, en retenidas 53.6 y en total 51.1 sobre 100.

Alcanzar y transportar sin una colocación final exitosa puede otorgar progreso parcial pero cero éxito de tarea completa. Por lo tanto, 51.1 de progreso no puede interpretarse como 51.1% de éxito. Los grupos de tareas vistas/retenidas tampoco tienen dificultad equiparada.

### Datos de ajuste fino emparejados

Quince tareas reales usan aproximadamente 500 demostraciones cada una y una evaluación emparejada:

| Modelo | Manipulación, 10 | Razonamiento, 5 | Global |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

Estas son puntuaciones de progreso. La brecha global de π0.5 es de 17.5 puntos, pero la brecha en razonamiento es solo de 0.4. La correspondencia de objetos y la colocación de cestas de fruta siguen favoreciendo a π0.5.

### Ablaciones controladas

En la ablación desde cero sobre cinco tareas reales, el co-entrenamiento obtiene 57.00 de progreso frente a 36.68 para el entrenamiento de flujo más multimodal sin CE de acción, 31.93 para stop-gradient y 49.58 para un calentamiento en dos etapas que primero detiene gradientes y luego cambia a co-entrenamiento. Un estudio de tokenizador separado con cuatro tareas mejora el progreso de ejecución continua de 29.3 a 48.1 con RVQ. Estos subconjuntos deben permanecer separados de la comparación principal de quince tareas.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="Ablaciones de gradiente y co-entrenamiento desde cero" loading="lazy" />
  <figcaption><strong>Ablaciones de gradiente y co-entrenamiento desde cero.</strong> Fuente: el artículo de WALL-OSS-0.5. El progreso medio en cinco tareas físicas es 36.68 solo para flujo, 31.93 con gradientes detenidos, 49.58 para un calentamiento en dos etapas que primero detiene gradientes y luego cambia a co-entrenamiento, y 57.00 para co-entrenamiento completo. Estas son puntuaciones de progreso, no tasas de éxito de tarea completa.</figcaption>
</figure>

## Integración con LeRobot y límites de entrenamiento

La versión 0.7.0 admite control continuo y generación/entrenamiento de lenguaje. Los estados/acciones más estrechos se normalizan y rellenan hasta 26D; las salidas se recortan antes de desnormalizar. El relleno no convierte articulaciones en coordenadas del efector final.

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

Estos son fragmentos de carga para ajuste fino dirigido. Alinea `camera_key_mapping`, las unidades físicas y las estadísticas. La ruta completa de entrenamiento de acciones autorregresivas con RVQ no está expuesta, por lo que el ajuste fino de adaptadores no reproduce el preentrenamiento de tres objetivos. Las nuevas interfaces de robots aún requieren preparación y adaptación.

## Conclusión

WALL-OSS-0.5 utiliza supervisión de acciones discretas para dar forma a un backbone consciente del control mientras preserva el conocimiento multimodal y los gradientes de acción continua. La supervisión en el espacio de acciones enfatiza la reconstrucción de alto ruido. El progreso en tareas, el éxito completo, el preentrenamiento original y la funcionalidad de los adaptadores deben mantenerse diferenciados.

</div>

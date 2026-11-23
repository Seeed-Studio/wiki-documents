---
description: "Un análisis en profundidad de MolmoAct2: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "MolmoAct2: Del aprendizaje de acciones discretas al control continuo por capas"
hide_title: true
keywords: ["Paper Deep-Dive","MolmoAct2","VLA","Layer-Wise KV","Action Tokenization","Continuous Control","LeRobot"]
slug: /robotics/paper_reading_molmoact2
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
    "value": "Prerrequisitos: dos representaciones de una demostración",
    "id": "prerequisites-two-representations-of-one-demonstration",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por qué introducir las acciones por etapas",
    "id": "why-introduce-actions-in-stages",
    "level": 2
  },
  {
    "value": "Datos: duración compartida, semántica de control distinta",
    "id": "data-shared-duration-distinct-control-semantics",
    "level": 2
  },
  {
    "value": "Preentrenamiento discreto: enseñar acciones de robot al backbone",
    "id": "discrete-pretraining-teaching-the-backbone-robot-actions",
    "level": 2
  },
  {
    "value": "Post-entrenamiento continuo: leer KV en cada capa",
    "id": "continuous-post-training-reading-kv-at-every-layer",
    "level": 2
  },
  {
    "value": "Evitar la fuga de objetivos y controlar los gradientes",
    "id": "preventing-target-leakage-and-controlling-gradients",
    "level": 3
  },
  {
    "value": "Think: actualizar solo las regiones de profundidad cambiadas",
    "id": "think-updating-only-changed-depth-regions",
    "level": 2
  },
  {
    "value": "Experimentos: comparar checkpoints con historiales de entrenamiento distintos",
    "id": "experiments-comparing-checkpoints-with-different-training-histories",
    "level": 2
  },
  {
    "value": "Integración con LeRobot y límites de los resultados",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2: Del aprendizaje de acciones discretas al control continuo por capas</h1>
  <p className="paper-reading-lead">MolmoAct2: modelos de razonamiento de acciones para despliegue en el mundo real</p>
  <ul className="paper-reading-badges" aria-label="Temas de lectura">
    <li><a href="#discrete-pretraining-teaching-the-backbone-robot-actions">De discreto a continuo</a></li>
    <li><a href="#continuous-post-training-reading-kv-at-every-layer">KV por capas</a></li>
    <li><a href="#think-updating-only-changed-depth-regions">Profundidad adaptativa</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Versión de integración y parámetros">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot MolmoAct2 ↗</a>

**Parámetros de LeRobot**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` inicializa desde el formato de los autores.
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` carga un checkpoint y procesadores de LeRobot guardados.
- LIBERO usa `--policy.chunk_size=10 --policy.n_action_steps=10` con control relativo del efector final.
- El adaptador admite MolmoAct2 estándar, no la variante MolmoAct2-Think de profundidad adaptativa.

</aside>

Un robot debe poner la taza más cercana a un cuenco dentro de él. Comprender la relación espacial y producir un movimiento preciso son requisitos diferentes. **¿Cómo puede un controlador continuo usar de forma fiable el conocimiento ya presente en un backbone de visión-lenguaje?**

## Prerrequisitos: dos representaciones de una demostración

Los tokens de acción discretos permiten que un modelo de lenguaje aprenda trayectorias mediante predicción del siguiente token. Las acciones continuas conservan valores de control numéricos para flow matching. Pueden supervisar la misma demostración sin convertirse en controladores secuenciales de despliegue.

Las claves y valores de atención, o KV, codifican contexto en cada capa. Leerlos a lo largo de la red da a un experto en acciones acceso a más de una sola característica final agrupada.

## Resumen y guía de lectura

**Resumen breve.** MolmoAct2 refuerza la comprensión encarnada, aprende una interfaz discreta de robot y luego añade un experto de flujo continuo. Publica datos multi-embodiment, un tokenizador de acciones, código y modelos, y estudia una variante de razonamiento de profundidad que reutiliza regiones espaciales sin cambios.

**Nota de lectura.** El MolmoAct2 estándar y Think son rutas de inferencia diferentes. La generación intermedia de profundidad de este último no es una capacidad de todos los checkpoints ni del adaptador versionado de LeRobot.

## Por qué introducir las acciones por etapas

Ajustar conjuntamente una nueva interfaz de estado, la codificación de acciones y un experto continuo aleatorio es un problema de optimización difícil. El preentrenamiento discreto primero hace que el VLM sea consciente de las acciones usando su objetivo familiar. El experto posterior puede entonces aprender control continuo a partir de un backbone consciente del robot.

KV por capa difiere del condicionamiento en la capa final. El aislamiento del conocimiento también depende de la etapa: el post-entrenamiento y el fine-tuning específico de embodiment usan configuraciones de gradiente diferentes.

## Datos: duración compartida, semántica de control distinta

Las principales fuentes de robots son YAM bimanual, SO-100/101 y DROID, complementadas por conjuntos de datos de robots más pequeños y ejemplos multimodales. QA espacial, señalamiento, correspondencia multivista y comprensión de video proporcionan anclaje encarnado.

Los fragmentos de acción cubren un segundo: 30 pasos para YAM/SO-100/101 a 30 Hz, 15 para DROID y 10 para la configuración LIBERO de 10 Hz del artículo. Las acciones se rellenan hasta anchura 32, con máscaras que excluyen dimensiones y pasos de tiempo artificiales. Las cadenas de configuración/control distinguen articulaciones absolutas de poses relativas del efector final; el relleno no hace intercambiables sus significados físicos.

## Preentrenamiento discreto: enseñar acciones de robot al backbone

El tokenizador de estilo FAST transforma trayectorias al dominio de frecuencia, cuantiza coeficientes y aplica BPE con un vocabulario de acciones de 2.048 tokens. Los canales continuos usan estadísticas de percentiles, las pinzas reciben un tratamiento separado y el estado discretizado entra en el prompt.

El VLM lee observaciones, instrucciones, descripciones de configuración/control y estado, y luego predice tokens de acción. Esta etapa no tiene experto continuo. El coentrenamiento multimodal ayuda a preservar una competencia visual-lingüística más amplia.

## Post-entrenamiento continuo: leer KV en cada capa

El experto DiT de 36 capas coincide con la profundidad del backbone. Sus bloques aplican auto-atención de acciones, atención cruzada a KV proyectados de la capa VLM correspondiente y una transformación feed-forward.

| Ruta | Papel en la tarea de la taza |
| --- | --- |
| Imágenes, lenguaje, estado → VLM | Representar la taza objetivo, el cuenco y el robot |
| KV de capa → proyección → atención cruzada | Aportar contexto durante toda la generación de acciones |
| Acciones ruidosas → experto de flujo | Coordinar la trayectoria en el tiempo |
| Acciones → postprocesador | Restaurar unidades de control |

Para un fragmento de demostración $A$ y ruido $\epsilon$,

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

La pérdida de flujo enmascarada entrena al predictor de velocidad. En un ejemplo didáctico con objetivo 0.6 y ruido −0.2, el punto medio es 0.2 y la velocidad objetivo es 0.8. Esta es la velocidad a lo largo de la trayectoria generativa normalizada, no una orden de velocidad de motor.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="Condicionamiento KV del backbone por capas del experto en acciones" loading="lazy" />
  <figcaption><strong>Condicionamiento KV del backbone por capas del experto en acciones.</strong> Fuente: el artículo de MolmoAct2. Cada capa experta lee claves y valores proyectados del backbone. La supervisión discreta y el flow matching continuo cumplen funciones diferentes; los tokens de acción objetivo se enmascaran de la ruta de condicionamiento continuo para evitar fugas.</figcaption>
</figure>

### Evitar la fuga de objetivos y controlar los gradientes

El post-entrenamiento supervisa tanto salidas discretas como continuas, pero enmascara los tokens de acción de verdad de terreno del contexto del experto. De lo contrario, el controlador podría aprender a partir de respuestas no disponibles en despliegue.

El post-entrenamiento desacopla KV: la pérdida de flujo entrena al experto y a los adaptadores, mientras que la pérdida de siguiente token entrena al VLM. El fine-tuning específico de embodiment elimina ese aislamiento y permite que los gradientes de flujo entren en el backbone. Por tanto, el VLM no está congelado en toda la canalización.

## Think: actualizar solo las regiones de profundidad cambiadas

Think genera una cuadrícula de 10×10 tokens de profundidad antes de las acciones. La primera consulta rellena las 100 posiciones. Consultas posteriores comparan regiones RGB actuales y previas, regeneran celdas cambiadas y reproducen códigos en caché para celdas sin cambios.

El prefijo de profundidad rellenado condiciona al experto a través de KV. Tazas y pinzas en movimiento pueden activar actualizaciones mientras se reutiliza el fondo estático. Estos son códigos de profundidad predichos, no mediciones de sensores garantizadas, y la detección de cambios aún puede fallar.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="Razonamiento de profundidad adaptativa con reutilización de regiones estáticas" loading="lazy" />
  <figcaption><strong>Razonamiento de profundidad adaptativa con reutilización de regiones estáticas.</strong> Fuente: el artículo de MolmoAct2. Los códigos de profundidad se actualizan donde cambian las observaciones antes de condicionar las acciones mediante conexiones KV. Esto representa la variante Think; la política ordinaria y la integración con LeRobot no realizan automáticamente este razonamiento.</figcaption>
</figure>

## Experimentos: comparar checkpoints con historiales de entrenamiento distintos

El resultado versionado de LeRobot parte del checkpoint LIBERO de los autores y realiza otros 10k pasos de fine-tuning en ocho GPU H100 con un batch de 32 por GPU.

| Conjunto LIBERO | Resultado original | Checkpoint de LeRobot adicionalmente entrenado |
| --- | ---: | ---: |
| Espacial | 97.8% | 98.4% |
| Objeto | 100.0% | 100.0% |
| Objetivo | 97.8% | 98.0% |
| Largo / 10 | 93.2% | 96.6% |
| Media | 97.20% | 98.25% |

Estas son tasas de éxito de tarea completa. La diferencia de 1.05 puntos no puede atribuirse solo a la conversión de formato porque el entrenamiento cambió. La mayor diferencia ocurre en el conjunto largo.

Embodied QA, razonamiento de profundidad y acciones en bucle cerrado ponen a prueba capacidades diferentes. La identificación correcta del objetivo no garantiza una sujeción exitosa, y el coste de generación de geometría de Think debe medirse por separado de la inferencia de acciones ordinaria.

## Integración de LeRobot y límites de los resultados

La versión 0.7.0 admite entrenamiento y evaluación estándar. Usa `checkpoint_path` para los pesos originales de HF y `policy.path` para los directorios de políticas de LeRobot guardadas.

Para LIBERO, haz coincidir el `norm_stats.json` publicado, el orden de las cámaras, la augmentación, el manejo del gripper y el modo de control. Los cuantiles aproximados del conjunto de datos no son idénticos a las estadísticas de los autores. Los signos articulares y los desplazamientos de cero de SO-100/101 también requieren una conversión de marco físico; el padding no puede realizarla.

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

Estos son fragmentos de entrenamiento que requieren los datos, estadísticas y configuraciones de imagen correspondientes. Estudia Think a través de la implementación de los autores; el nombre de política ordinaria no lo habilita en esta versión.

## Conclusión

MolmoAct2 primero establece una interfaz discreta de robot y luego transfiere el contexto visual-lingüístico a acciones continuas mediante KV por capas. El enmascaramiento de objetivos y los gradientes específicos por etapa explican cómo aprende. El despliegue debe distinguir entre modelos estándar y Think, y entre checkpoints de adaptadores originales y adicionalmente entrenados.

</div>

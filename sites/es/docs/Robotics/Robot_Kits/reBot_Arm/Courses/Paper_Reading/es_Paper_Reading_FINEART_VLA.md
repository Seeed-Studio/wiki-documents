---
description: "Un análisis en profundidad de FineART-VLA: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "FineART-VLA: Conectando objetivos de largo horizonte con acciones bimanuales a través de subtareas"
hide_title: true
keywords: ["Paper Deep-Dive","FineART-VLA","VLA","Subtask Prediction","Bimanual Manipulation","Knowledge Insulation","LeRobot"]
slug: /robotics/paper_reading_fineart_vla
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
    "value": "Requisitos previos: tres escalas temporales de control",
    "id": "prerequisites-three-timescales-of-control",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por qué las demostraciones largas necesitan etiquetas de fase",
    "id": "why-long-demonstrations-need-phase-labels",
    "level": 2
  },
  {
    "value": "Datos: cubriendo habilidades reutilizables y tareas ricas en contacto",
    "id": "data-covering-reusable-skills-and-contact-rich-tasks",
    "level": 2
  },
  {
    "value": "Arquitectura: predecir una subtarea y luego generar sus acciones",
    "id": "architecture-predict-a-subtask-then-generate-its-actions",
    "level": 2
  },
  {
    "value": "Tres objetivos y aislamiento del conocimiento",
    "id": "three-objectives-and-knowledge-insulation",
    "level": 3
  },
  {
    "value": "Entrenamiento y ejecución: alineando dos decisiones aprendidas",
    "id": "training-and-execution-aligning-two-learned-decisions",
    "level": 2
  },
  {
    "value": "Experimentos: qué mejora y bajo qué condiciones",
    "id": "experiments-what-improves-and-under-which-conditions",
    "level": 2
  },
  {
    "value": "Condiciones iniciales coincidentes",
    "id": "matched-initial-conditions",
    "level": 3
  },
  {
    "value": "Palabras espaciales y guía de largo horizonte",
    "id": "spatial-words-and-long-horizon-guidance",
    "level": 3
  },
  {
    "value": "Datos de cola larga y transferencia de morfología",
    "id": "long-tail-data-and-embodiment-transfer",
    "level": 3
  },
  {
    "value": "Integración con LeRobot: preservando el planificador de lenguaje",
    "id": "lerobot-integration-preserving-the-language-planner",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA: Conectando objetivos de largo horizonte con acciones bimanuales a través de subtareas</h1>
  <p className="paper-reading-lead">FineART: conjunto de datos de trayectorias robóticas anotadas de forma detallada y modelo visión-lenguaje-acción para manipulación bimanual</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-predict-a-subtask-then-generate-its-actions">Predicción de subtareas</a></li>
    <li><a href="#three-objectives-and-knowledge-insulation">Aislamiento del conocimiento</a></li>
    <li><a href="#experiments-what-improves-and-under-which-conditions">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot FineART-VLA ↗</a>

**Parámetros de LeRobot**

- `--policy.path=lerobot/fineart_vla_base` inicia la adaptación desde el checkpoint de entrenamiento intermedio de FineART.
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base` inicia una ruta de entrenamiento diferente desde los pesos de π0.5.
- La planificación en lenguaje necesita anotaciones de `subtask` alineadas temporalmente. Una cadena de tarea a nivel de episodio por sí sola no proporciona esa supervisión.
- `lerobot-rollout` gestiona la ejecución interactiva; `--autosteer_interval_s=3` establece el intervalo de consulta de planificación. Consulta la guía versionada para la configuración completa del hardware.

</aside>

Un robot que prepara el desayuno debe colocar una taza, ordenar los utensilios y mover la comida. La instrucción global se mantiene igual durante minutos, mientras que el movimiento requerido cambia tras cada etapa completada. **Si cada fotograma solo lleva el objetivo global, ¿dónde aprende la política qué paso debe ejecutar ahora?**

## Requisitos previos: tres escalas temporales de control

Un objetivo especifica el resultado final, una subtarea especifica la operación actual y un fragmento de acción especifica comandos numéricos a lo largo de varios ticks de control. FineART alinea las instrucciones de subtarea con la línea temporal de la demostración.

| Ejemplo de desayuno | Significado | Papel en el aprendizaje |
| --- | --- | --- |
| Preparar el desayuno | Objetivo global | Condiciona la predicción de subtareas |
| Poner la taza en el estante | Operación actual | Objetivo de lenguaje y condición de la acción |
| Objetivos de articulaciones y pinza | Movimiento físico | Supervisión de acciones continuas y discretas |

Una subtarea aún contiene múltiples movimientos. Colocar una taza incluye alcanzar, agarrar, transportar y soltar. La anotación acota el problema de control sin describir cada tick de motor en palabras.

## Resumen y guía de lectura

**Resumen breve.** FineART contiene 40.543 episodios, 1.718 horas, 151 tareas y 533.913 subtareas. FineART-VLA amplía π0.5 con predicción de la siguiente subtarea y control continuo condicionado por subtareas. Sus experimentos investigan por separado la granularidad de las anotaciones, el entrenamiento con subtareas, el aislamiento del conocimiento y la adaptación a una morfología diferente.

**Nota de lectura.** Más demostraciones, etiquetas de fase y encaminamiento de gradientes cumplen propósitos distintos. Una comparación controlada debe mantener fijos los otros factores antes de atribuir una mejora a uno de ellos.

## Por qué las demostraciones largas necesitan etiquetas de fase

Imágenes similares pueden pertenecer a fases de tarea diferentes, y el mismo movimiento puede servir a objetivos distintos. Las instrucciones solo a nivel de episodio dejan esas diferencias implícitas. Las subtareas alineadas temporalmente proporcionan supervisión directa para la operación actual.

En comparación con la interfaz de acción directa de π0.5, FineART-VLA añade una ruta de generación en lenguaje. En comparación con un planificador y un controlador separados, entrena lenguaje y acción dentro de una sola política y también acepta subtareas especificadas por humanos. Un pie de foto más largo para todo el vídeo no puede sustituir a las etiquetas alineadas con operaciones individuales.

## Datos: cubriendo habilidades reutilizables y tareas ricas en contacto

FineART combina operaciones repetidas de pick-and-place y organización semántica con una larga cola de manipulación de telas, montaje de herramientas, guiado de cables e inserción precisa. Estas tareas exponen la política a diferentes requisitos de contacto y precisión.

Para el doblado de toallas, las etiquetas deben seguir la secuencia real de agarrar, mover y colocar. Fronteras incorrectas emparejan una instrucción con las acciones de otra operación, debilitando directamente la condición de entrenamiento del controlador.

En el entrenamiento intermedio se muestrea una tarea con un peso proporcional a $n_i^{0.5}$, donde $n_i$ es su número de fotogramas. En un ejemplo didáctico, tareas con 100 y 400 fotogramas reciben pesos 10 y 20: una proporción de muestreo de 1:2 en lugar de la proporción bruta de 1:4.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="Alineación temporal de tarea y subtareas" loading="lazy" />
  <figcaption><strong>Alineación temporal de tarea y subtareas.</strong> Fuente: el artículo de FineART. Una tarea de empaquetado se segmenta en fases de duración desigual, lo que ilustra por qué las etiquetas de subtarea necesitan límites temporales. Los nombres mostrados son categorías ilustrativas, no anotaciones textuales literales del conjunto de datos.</figcaption>
</figure>

## Arquitectura: predecir una subtarea y luego generar sus acciones

La configuración ALOHA del artículo utiliza la vista cenital y dos vistas de muñeca, un estado de articulaciones/pinza de 14 dimensiones y fragmentos de 50 pasos de acciones de 14 dimensiones. Su backbone de visión-lenguaje combina SigLIP y Gemma con un experto de acción separado de estilo Gemma.

| Ruta | Entrada | Cálculo | Salida |
| --- | --- | --- | --- |
| Planificación de subtareas | Observación y objetivo global | Generación de lenguaje autorregresiva | Instrucción de bajo nivel |
| Aprendizaje de acciones discretas | Observación y subtarea | Predicción de tokens FAST | Supervisión de acciones para el backbone |
| Control continuo | Observación, estado, subtarea y acciones ruidosas | Experto de acción de flow-matching | Fragmento de acción ejecutable |

El planificador puede generar “put the cup on the shelf”, mientras que varias llamadas de acción siguen esa instrucción. Consultas de planificación periódicas usan observaciones recientes y el objetivo de alto nivel original para inferir la subtarea activa. El runtime no detecta la finalización de la subtarea; el intervalo de consulta es configurable. La planificación y la generación de acciones pueden ejecutarse a ritmos diferentes.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-en-v2.png" alt="Tres escalas temporales: objetivo de alto nivel, subtarea y acciones continuas" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Tres escalas temporales: objetivo de alto nivel, subtarea y acciones continuas.</strong> Ilustración didáctica generada por IA. Una sola política admite la inferencia autónoma de subtareas (Sistema 2) y la ejecución de acciones continuas (Sistema 1). El runtime consulta subtareas periódicamente a partir del objetivo de alto nivel y las observaciones actuales; no detecta la finalización de la subtarea. Una subtarea puede guiar múltiples fragmentos de acción. Las observaciones también incluyen el estado del robot, omitido aquí por claridad. Las fases de movimiento con nombre ilustran una trayectoria; las salidas ejecutables son valores continuos.</figcaption>
</figure>

### Tres objetivos y aislamiento del conocimiento

El objetivo de entrenamiento es

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

Con el entrenamiento de subtareas activado, el 30% de las muestras entrenan la predicción de objetivo-a-subtarea y el 70% entrenan acciones condicionadas por subtareas. Estas son proporciones de muestreo, no asignaciones de tiempo de ejecución.

El aislamiento del conocimiento separa las claves y valores del backbone leídos por el experto en acciones. El experto sigue usando el contexto visual-lingüístico, pero la pérdida continua de acciones no actualiza el backbone a través de esa vía. Las pérdidas de texto y de acciones discretas continúan entrenándolo; el backbone no queda congelado de forma permanente.

## Entrenamiento y ejecución: alineando dos decisiones aprendidas

Las demostraciones proporcionan la subtarea correcta durante el entrenamiento, mientras que el despliegue normalmente usa una generada. El controlador debe seguir las subtareas y el planificador debe reconocer la fase actual. Aprender solo una de esas capacidades deja el otro problema sin resolver.

Un ciclo de control lee imágenes y estado, consulta o conserva una subtarea, predice acciones, ejecuta parte del plan y vuelve a observar. La entrada humana de subtareas ayuda a distinguir fallos de planificación de fallos de movimiento. El horizonte de predicción de 50 pasos y el intervalo de planificación en tiempo de ejecución son ajustes independientes.

## Experimentos: qué mejora y bajo qué condiciones

### Condiciones iniciales coincidentes

Las evaluaciones de ALOHA usan 25 ejecuciones por tarea con disposiciones iniciales prescritas. La tasa de éxito cuenta las finalizaciones completas; la tasa de progreso mide las etapas completadas. Para un ejemplo de colocación de una taza con cuatro etapas, alcanzar, agarrar y transportar sin una colocación exitosa puede puntuar un 75% de progreso y cero de éxito.

Una ablación 2×2 varía el entrenamiento de subtareas y el aislamiento del conocimiento de forma independiente. Su combinación respalda la generalización fuera de distribución más sólida, pero las tareas individuales se comportan de manera diferente. En una colocación sencilla en estantería, el aislamiento sin entrenamiento de subtareas supera a habilitar ambos; las tareas más ambiguas pueden beneficiarse de la supervisión por fases.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="Subtask training and knowledge-insulation ablation" loading="lazy" />
  <figcaption><strong>Ablación de entrenamiento de subtareas y aislamiento del conocimiento.</strong> Fuente: el artículo de FineART. Las barras sólidas muestran el éxito y las barras pálidas muestran el progreso. Combinar ambos mecanismos ayuda más en el grupo fuera de distribución. Hay 25 ensayos por tarea, 50 por régimen y 150 en total; los promedios por régimen no describen cada tarea.</figcaption>
</figure>

### Palabras espaciales y guía de largo horizonte

Al colocar una dona en el contenedor izquierdo, central o derecho, con el aislamiento desactivado en ambas condiciones, el entrenamiento de subtareas eleva el éxito del 32% al 100%, con 25 ensayos cada uno. Los 17 fallos sin entrenamiento de subtareas seleccionan el contenedor equivocado. Esto prueba específicamente si el lenguaje espacial cambia la selección del objetivo.

La tarea del desayuno recombina subtareas conocidas en una secuencia completa no vista. La guía humana paso a paso eleva el éxito del 16% al 76%. Ese resultado incluye la guía humana y no mide la planificación totalmente autónoma.

### Datos de cola larga y transferencia de encarnación

Eliminar la cola rica en contactos manteniendo fijos los pasos de entrenamiento reduce el éxito global del 24,7% al 14,0% en la configuración de esa ablación. Esas cifras pertenecen a esa comparación controlada, no a la mejor configuración de otro experimento.

El estudio de ALOHA a YAM mide la eficiencia de datos y la composición de tareas después de adaptarse a YAM. La transferencia entre encarnaciones aún requiere una interfaz de control de destino compatible y datos de adaptación.

## Integración con LeRobot: preservando el planificador de lenguaje

La versión 0.7.0 admite entrenamiento FineART-VLA, consultas de texto y ejecución de acciones. Junto con imágenes, estado, acciones y tareas, la receta seleccionada necesita sus objetivos en `language_persistent` y `language_events`. La receta predeterminada usa una línea de tiempo continua de subtareas; la memoria y el VQA requieren sus propias anotaciones y soporte en tiempo de ejecución.

Conserva la receta del checkpoint, el tokenizador de acciones y los procesadores, luego alinea los nombres de las cámaras, las estadísticas de acciones y las dimensiones del estado con el robot de destino. Cambiar solo un nombre de política π0.5 no reproduce el planificador del artículo.

Los siguientes son fragmentos de parámetros de entrenamiento; proporciona por separado la configuración real del conjunto de datos y de salida:

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

Estos ajustes de integración por sí solos no reproducen el protocolo de evaluación del artículo.

## Conclusión

FineART-VLA conecta objetivos globales, lenguaje de fases y acciones continuas en una única canalización de aprendizaje. Las etiquetas densas explican lo que logra cada segmento de acción, las subtareas generadas proporcionan un punto de intervención y el aislamiento del conocimiento ayuda a preservar la capacidad del backbone. Su evidencia más sólida proviene de ablaciones comparables; el comportamiento autónomo aún depende del reconocimiento de fases, la ejecución precisa y los datos de la encarnación de destino.

</div>

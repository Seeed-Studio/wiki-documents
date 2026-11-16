---
description: "Una lectura detallada de Galaxea G0.5, que cubre la tokenización de acciones entre distintos cuerpos, el razonamiento encarnado, la memoria visual, los resultados de evaluación y la integración con LeRobot."
title: "G0.5: Razonamiento y acción en una sola secuencia"
hide_title: true
keywords: [Paper Deep-Dive, Galaxea G0.5, VLA, ActionCodec, CoT, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/teaser.png
slug: /robotics/paper_reading_g05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_g05/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Requisitos previos: predecir un fragmento de acción",
    "id": "prerequisites-predicting-an-action-chunk",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Motivación y trabajos relacionados",
    "id": "motivation-and-related-work",
    "level": 2
  },
  {
    "value": "Cómo G0.5 y π₀.₅ usan subtareas",
    "id": "how-g05-and-π-use-subtasks",
    "level": 2
  },
  {
    "value": "De dónde vienen las etiquetas de acciones y razonamiento",
    "id": "where-actions-and-reasoning-labels-come-from",
    "level": 2
  },
  {
    "value": "Un espacio de acción compartido de 27 dimensiones",
    "id": "a-shared-27-dimensional-action-space",
    "level": 2
  },
  {
    "value": "Del razonamiento sobre la escena a los códigos de acción",
    "id": "from-scene-reasoning-to-action-codes",
    "level": 2
  },
  {
    "value": "Qué ocurre en una llamada de política",
    "id": "what-happens-in-one-policy-call",
    "level": 3
  },
  {
    "value": "Cómo ActionCodec usa menos tokens",
    "id": "how-actioncodec-uses-fewer-tokens",
    "level": 3
  },
  {
    "value": "Cómo el razonamiento afecta a las acciones",
    "id": "how-reasoning-affects-actions",
    "level": 3
  },
  {
    "value": "Cómo el modelo usa el historial visual reciente",
    "id": "how-the-model-uses-recent-visual-history",
    "level": 3
  },
  {
    "value": "Del entrenamiento a la ejecución",
    "id": "from-training-to-execution",
    "level": 2
  },
  {
    "value": "Qué muestran los experimentos",
    "id": "what-the-experiments-show",
    "level": 2
  },
  {
    "value": "Activar y desactivar el razonamiento para cada cabeza de acción",
    "id": "switching-reasoning-on-and-off-for-each-action-head",
    "level": 3
  },
  {
    "value": "Pick-and-place: selección de objetivo y finalización de la tarea",
    "id": "pick-and-place-target-selection-and-task-completion",
    "level": 3
  },
  {
    "value": "DROID: transferencia a nuevos entornos y fallos por bajo contraste",
    "id": "droid-transfer-to-new-environments-and-low-contrast-failures",
    "level": 3
  },
  {
    "value": "Ajuste fino en robots reales y tareas de largo horizonte",
    "id": "real-robot-fine-tuning-and-long-horizon-tasks",
    "level": 3
  },
  {
    "value": "Integración con LeRobot y diferencias de evaluación",
    "id": "lerobot-integration-and-evaluation-differences",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-g05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-g05-title">G0.5: Razonamiento y acción en una sola secuencia</h1>
  <p className="paper-reading-lead">Galaxea G0.5: un único flujo autorregresivo para el razonamiento y la acción del robot</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li><a href="#a-shared-27-dimensional-action-space">Acciones entre distintos cuerpos</a></li>
    <li><a href="#how-reasoning-affects-actions">Razonamiento encarnado</a></li>
    <li><a href="#how-the-model-uses-recent-visual-history">Memoria visual</a></li>
    <li><a href="#what-the-experiments-show">Evaluación</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2608.11739v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot Commands">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/g05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot G0.5 ↗</a>

**Comandos clave de LeRobot**

- `--policy.path=lerobot/g05_so101` carga el checkpoint adaptado para SO-100 y SO-101.
- `--policy.action_head=actioncodec` selecciona la ruta de acción discreta del artículo. Usa `flow` para seleccionar la cabeza de acción continua.
- `--policy.runtime_system=system2` habilita el razonamiento en un checkpoint que admite CoT. Usa `--policy.runtime_cot_fields='["bbox","subtask"]'` para solicitar tanto una caja delimitadora como una subtarea.

Usa estos argumentos junto con la configuración del robot y la cámara. Consulta la documentación anterior para ver la configuración completa.

</aside>

Equipo Galaxea · arXiv:2608.11739v1 · 12 de agosto de 2026 · [Página del proyecto Galaxea](https://opengalaxea.github.io/G05/)

Se le pide a un robot que abra un cajón, vierta unas nueces y lo cierre. La primera vez que el robot ve el tirador, tiene que estirarse y tirar. Después de verter las nueces, ve el mismo tirador y tiene que empujar el cajón para cerrarlo. **¿Puede un único modelo de visión y lenguaje generar tanto qué hacer ahora como cómo debe moverse el brazo a continuación?** Esa es la pregunta que aborda G0.5.

## Requisitos previos: predecir un fragmento de acción

Un **modelo de visión-lenguaje-acción (VLA)** aprende a partir de demostraciones a convertir imágenes de la cámara, instrucciones de tarea y el propio estado del robot en comandos de control. El estado incluye medidas como las posiciones articulares. Cuando el robot abre el cajón, la imagen muestra dónde está el tirador, el estado describe la pose actual del brazo y las acciones acercan la garra, la cierran y tiran.

Un **fragmento de acción** es una secuencia de acciones ordenadas por el paso de control. Una política de un solo paso predice $a_t$ en el tiempo $t$. Una política con fragmentos predice $[a_t,a_{t+1},a_{t+2},\ldots]$ a partir de la misma observación, donde $a_t$ es el vector de control para el paso $t$. El robot puede ejecutar los primeros pasos y luego volver a planificar usando una observación nueva. El tiempo que tarda en generar un fragmento, el número de pasos que se ejecutan de él y la frecuencia de control de bajo nivel son magnitudes independientes.

**Autorregresivo (AR)** describe cómo G0.5 genera un fragmento. Su **modelo de visión-lenguaje (VLM)** predice un token cada vez y usa los tokens que ya ha generado para predecir el siguiente. Puede escribir “agarra el tirador” y luego continuar con códigos de acción comprimidos. El códec de acción convierte esos códigos en comandos de control continuos antes de la ejecución.

## Resumen y guía de lectura

**Resumen breve.** Muchos VLA usan un VLM preentrenado para codificar la escena y la instrucción, y luego delegan el control a un experto en acciones de flow-matching (FM) entrenado por separado. G0.5 de Galaxea usa un único decodificador Transformer y un único objetivo de entrenamiento para los tokens de razonamiento y de acción. Los autores entrenan un tokenizador de acciones entre distintos cuerpos, insertan razonamiento encarnado como subtareas y ubicaciones objetivo en la secuencia de generación, y usan el codificador de visión para procesar varios segundos de historial visual. Informan de que los prompts pueden cambiar cómo el modelo descompone o ejecuta una tarea, con algunos cambios de comportamiento observados sin entrenamiento adicional.

Los autores preentrenan con una mezcla de datos de robots y ejemplos de preguntas y respuestas visuales (VQA) y presentan siete evaluaciones. Tras el ajuste fino en R1-Lite y R1-Pro, el éxito medio en robots reales es del 76,7% para G0.5, del 53,3% para π₀.₅ y del 24,4% para GR00T-N1.7. En las 50 tareas domésticas de largo horizonte del BEHAVIOR Challenge 2025, la puntuación de progreso con una sola política es del 31,4% para G0.5, del 26,3% para π₀.₅ y del 26,1% para la propuesta ganadora. Las evaluaciones restantes cubren la transferencia a entornos y objetos reservados tras el post-entrenamiento en DROID (82,5%), el seguimiento de instrucciones en pick-and-place, LIBERO (98,9%), RoboTwin 2.0 (93,3%) y SimplerEnv-Bridge (87,3%).

**Notas de lectura**

- **La compresión de acciones hace viable la generación token a token.** Un movimiento del brazo abarca múltiples pasos y canales de control. Comprimir la secuencia en el tiempo y omitir tokens para las partes inactivas aborda dos fuentes de longitud.
- **El decodificador puede usar el razonamiento que acaba de generar.** Cuando una caja delimitadora o una subtarea aparece antes de la acción, el decodificador puede condicionar sus siguientes predicciones en esa salida. El artículo conmuta el razonamiento para comprobar si ayuda.
- **Las evaluaciones miden distintos tipos de generalización.** DROID evalúa la transferencia a nuevos entornos y objetos tras el post-entrenamiento específico del conjunto de datos. BEHAVIOR mide cuántas condiciones de objetivo satisface una sola política post-entrenada en 50 tareas.

## Motivación y trabajos relacionados

El artículo comienza con la discretización de acciones en RT-2 y OpenVLA. Frecuencias de control más altas, más dimensiones de acción o horizontes de predicción más largos hacen que tokenizar cada valor individualmente sea más costoso. Un experto en acciones continuas puede emitir un fragmento completo mientras el VLM proporciona su condicionamiento. Los autores se preguntan cómo dar a las capacidades de lenguaje y razonamiento del VLM preentrenado un papel más directo en el control.

G0.5 aprende un códec de acción entre distintos cuerpos, coloca una cadena de pensamiento en la secuencia de acción y examina si cambiar la redacción de una instrucción afecta al comportamiento. La memoria visual aporta observaciones recientes. Los autores analizan estas ideas mediante benchmarks de control, pruebas de seguimiento de instrucciones y tareas de largo horizonte divididas en etapas. Los resultados sobre la redacción de los prompts son observaciones cualitativas de una muestra pequeña.

- **Compresión de tokens de acción.** FAST usa una transformada discreta del coseno para explotar la redundancia temporal. G0.5 aprende un vocabulario compartido organizado por parte del cuerpo y puede omitir grupos inactivos.
- **Pasar el razonamiento al control.** ECoT ya permite que la predicción de acciones autorregresiva lea tokens de razonamiento anteriores. G0.5 usa una interfaz de acción entre distintos cuerpos y prompts que seleccionan entre subtareas, cajas delimitadoras, trazas y pistas de acción.

## Cómo G0.5 y π₀.₅ usan subtareas

Ambos enfoques pueden generar primero la subtarea actual. Después de verter las nueces, π₀.₅ puede generar “empuja el cajón para cerrarlo” y luego dejar que un experto en acciones continuas produzca el movimiento a partir de sus entradas de condicionamiento. En la ruta principal de G0.5, el decodificador continúa desde la subtarea hacia códigos de acción discretos, que ActionCodec convierte en movimiento continuo.

| Aspecto | π₀.₅ | G0.5 |
| --- | --- | --- |
| Salida de alto nivel | Texto de subtareas generado de forma autorregresiva | Subtareas opcionales, cuadros delimitadores, trazas 2D y sugerencias de acción |
| Salida de acción | Un experto de flow-matching genera controles continuos | El mismo decodificador continúa con códigos discretos, que ActionCodec decodifica en controles continuos |
| Papel de los tokens de acción discretos | Los tokens FAST se usan en el preentrenamiento. Un experto continuo se encarga de la ejecución. | Los tokens de ActionCodec se usan en el preentrenamiento y en la ejecución AR. |

**Ilustración.** Ambos caminos también toman entradas como imágenes y el estado del robot.

<aside className="paper-reading-callout" aria-label="Action generation paths">

**π₀.₅**　Subtarea → experto de acción de flow-matching → fragmento de acción continua

**G0.5**　Subtarea o cuadro delimitador → el mismo decodificador genera códigos de acción → ActionCodec → fragmento de acción continua

</aside>

G0.5 también tiene una cabeza opcional de flow-matching. La tabla describe su ruta AR principal. Los experimentos siguientes alternan entre las dos cabezas. [π₀.₅ paper deep-dive](https://wiki.seeedstudio.com/es/robotics/paper_reading_pi05/)

## De dónde provienen las acciones y las etiquetas de razonamiento

G0.5 se preentrena con demostraciones de robots de 14 encarnaciones, junto con VQA general y encarnado. Las demostraciones muestran cómo se mueven distintos robots. Las preguntas y respuestas y anotaciones adicionales enseñan al modelo sobre instrucciones, objetivos y etapas de la tarea. DROID entra en la canalización más tarde, durante el postentrenamiento específico del conjunto de datos.

![Distribución de verbos de acción y sustantivos de objetos en el preentrenamiento](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/data_analyze_v2.svg)

Los ejes verticales muestran la frecuencia en una escala logarítmica. Los verbos de acción aparecen a la izquierda y los sustantivos de objetos a la derecha. Acciones comunes como coger, colocar y mover ocurren con más frecuencia, mientras que habilidades y objetos menos comunes ocupan la larga cola. Un conjunto de datos puede cubrir muchas encarnaciones y habilidades y aun así contener pocos ejemplos de habilidades concretas.

| Objetivo de entrenamiento | Cómo se obtiene |
| --- | --- |
| Tareas y subtareas | Dividir las demostraciones en segmentos temporales y luego usar un modelo multimodal para anotar descripciones de tareas y sugerencias de acción locales |
| Cuadros delimitadores | Localizar el objetivo con un modelo de visión y luego rastrearlo en los fotogramas posteriores |
| Trazas 2D del efector final | Aplicar cinemática directa a las posiciones articulares y proyectar las posiciones 3D del efector final en la imagen de la cámara de la cabeza |
| Códigos de acción | Pasar fragmentos de demostración alineados por el ActionCodec preentrenado |
| Preguntas y respuestas visuales | Usar respuestas de texto de pares generales y encarnados de imagen-pregunta |

Cada ejemplo de robot usa uno de ocho formatos de razonamiento, elegidos con pesos de muestreo. Un formato genera acciones directamente. Esto permite que el modelo aprenda a hacer juicios intermedios y también a operar sin texto de razonamiento.

## Un espacio de acción compartido de 27 dimensiones

Los canales de control de distintas encarnaciones se alinean por parte del cuerpo. El diseño base tiene 27 dimensiones, con el mismo orden de ranuras en cada paso temporal. Un fragmento de acción con $H$ pasos de control predichos es un arreglo de $H\times27$.

| Parte del cuerpo | Dimensiones | Uso |
| --- | ---: | --- |
| Controles del lado izquierdo y pinza | 9+1 | Controles del brazo izquierdo y acción de la pinza izquierda |
| Controles del lado derecho y pinza | 9+1 | Controles del brazo derecho y acción de la pinza derecha |
| Parte inferior del cuerpo | 7 | Ranuras para movimientos compatibles como control del torso y de la base |

**Ilustración.** Supongamos que un robot de brazo derecho tiene cinco canales de control articular y un canal de pinza. Coloca cada acción demostrada en las ranuras correspondientes del lado derecho para que comparta un diseño con las demostraciones de dos brazos. Rellena las ranuras no usadas con marcadores de posición. El modelo puede emitir solo los códigos de la parte activa, y el controlador puede recuperar los seis canales que necesita a partir de la salida decodificada.

<aside className="paper-reading-callout" aria-label="Action slot mapping example">

Seis controles de una demostración de un solo brazo → ranuras del lado derecho en el diseño de 27 dimensiones → códigos de acción del lado derecho → decodificar y extraer los seis controles

</aside>

Este es un mapeo simplificado. Cada robot usa sus propias definiciones de articulaciones o efector final, mapeo de ranuras y estadísticas de normalización. El checkpoint convertido LeRobot SO-101 usa un diseño interno de 20 dimensiones.

## Del razonamiento de la escena a los códigos de acción

### Qué ocurre en una llamada de política

G0.5 se inicializa a partir de Qwen3.5-2B. El codificador de visión convierte las imágenes en representaciones visuales. El decodificador recibe esas representaciones junto con la instrucción de la tarea, el estado actual del robot y el identificador de encarnación. Cuando la cadena de pensamiento (CoT) está activada, el decodificador genera los campos de razonamiento solicitados, como la subtarea y un cuadro delimitador alrededor de la manija. Luego predice tokens de acción condicionados en las mismas entradas y en el razonamiento que acaba de generar. ActionCodec convierte esos tokens en un fragmento continuo para que el robot lo ejecute.

![Arquitectura de G0.5 y ejemplo de cajón en bucle cerrado](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/teaser.png)

La parte superior izquierda muestra cómo las cuatro entradas conducen a razonamiento, códigos de acción y control continuo. Los tres paneles de la parte inferior muestran la apertura del cajón, el vertido y el cierre, con observaciones nuevas en cada etapa. En el ejemplo de apertura, reformular el prompt desplaza el objetivo de una perilla superior a la manija inferior. La parte superior derecha resume resultados de varios protocolos. El experimento siguiente compara directamente los ajustes de razonamiento.

### Cómo ActionCodec usa menos tokens

Cuando el brazo derecho abre el cajón, el fragmento de acción abarca varios pasos desde alcanzar hasta tirar. El brazo izquierdo puede permanecer quieto todo el tiempo. ActionCodec comprime el movimiento del brazo derecho en un pequeño conjunto de códigos. El modelo también puede omitir códigos para las partes estacionarias, reduciendo cuántos tokens necesita predecir.

![Cuantización vectorial residual de acciones alineadas por parte del cuerpo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/tokenizer_v2.png)

Lee el diagrama de izquierda a derecha. Las acciones de distintas encarnaciones se asignan a sus partes del cuerpo correspondientes y se codifican por grupo. El cuantizador produce índices discretos, y la secuencia conserva a qué parte pertenece cada grupo de índices. El objetivo contrastivo temporal en el centro anima a que movimientos similares en pasos temporales cercanos tengan códigos coherentes.

**La cuantización vectorial residual (RVQ)** aproxima el vector latente de un segmento de acción mediante búsquedas sucesivas en el codebook. La primera ronda encuentra un vector cercano. La segunda ronda busca un vector para el residual. Para decodificar, el códec recupera los vectores seleccionados, los suma y reconstruye la acción.

**Ejemplo trabajado.** Considera un valor latente sin unidades de $0.78$. La primera búsqueda devuelve $0.60$, dejando un residual de $0.18$. La segunda devuelve $0.20$. La suma es $0.80$, y el error absoluto cae de $0.18$ a $0.02$. El códec real almacena índices de vectores en el codebook.

Cada ronda usa **un marcador de grupo más ocho códigos de acción** para cada grupo activo. Con dos rondas y solo el lado derecho activo, la secuencia de acción necesita $2\times(1+8)=18$ tokens. Con ambos lados activos, necesita $36$. Este recuento excluye los límites de secuencia y el texto de razonamiento. El diseño compartido puede contener ranuras para partes inactivas mientras que la secuencia generada omite esas partes. El VLM aprende a predecir los índices y ActionCodec aprende a codificar y reconstruir acciones.

La plantilla de secuencia muestra que los marcadores de ambos brazos siempre se emiten. La descripción de la tokenización de acciones en el artículo permite omitir grupos inactivos. El recuento de tokens anterior usa esa configuración.

### Cómo el razonamiento afecta a las acciones

**Un cuadro delimitador identifica dónde actuar. Una subtarea describe qué hacer a continuación.** La secuencia puede transportar cuatro tipos de salida de razonamiento.

| Campo generado | Lo que aporta en el ejemplo del cajón |
| --- | --- |
| `Subtask` | La operación actual, como “agarrar la manija inferior” |
| `BBox` | Un cuadro delimitador alrededor del objetivo en la imagen |
| `Trace` | La trayectoria del efector final en el plano de la imagen |
| `ActionHint` | Una señal de movimiento local, como cerrar la pinza después de aproximarse |

![Secuencia de entradas de condicionamiento, campos de razonamiento y códigos de acción](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/token_template.svg)

El segmento de condicionamiento contiene imágenes, la encarnación, el estado del robot y el prompt. El segmento generado comienza con los campos de razonamiento seleccionados y continúa con códigos de acción agrupados por parte del cuerpo. La cabeza FM opcional produce acciones continuas a partir de los estados ocultos del backbone y también puede usar el contexto después del razonamiento.

**Ilustración.** Antes de abrir el cajón, el modelo usa la imagen y la pose actual para generar “agarrar la manija inferior” y un cuadro delimitador alrededor de ella. El decodificador lee la subtarea generada y las coordenadas mientras predice códigos para que el brazo derecho se acerque. Tras ejecutar un segmento corto, el robot actualiza las entradas con una nueva imagen y estado.

Ambos tipos de salida comparten un objetivo de entropía cruzada del siguiente token. El artículo lo da como

$$
\mathcal{L}(\theta) = -\sum_{i\in\mathcal{G}}\log p_\theta(x_i\mid x_{<i}).
$$

Aquí $\theta$ denota los parámetros del decodificador, $\mathcal{G}$ es el conjunto de posiciones en el segmento generado, $x_i$ es el token objetivo en la posición $i$, y $x_{<i}$ incluye las entradas de condicionamiento y los tokens anteriores. El segmento de condicionamiento proporciona contexto y la pérdida se suma sobre el segmento generado. Si el modelo asigna probabilidades $0.8$ y $0.5$ a un token de subtarea objetivo y a un código de acción objetivo, su pérdida combinada es $-\log 0.8-\log 0.5\approx0.916$. El entrenamiento puede usar prefijos anotados. En inferencia, un error en el propio razonamiento del modelo puede propagarse a la acción.

### Cómo usa el modelo el historial visual reciente

La muñeca puede bloquear la manija mientras el brazo se acerca a ella. Los fotogramas anteriores aún muestran la manija, mientras que el fotograma actual muestra la muñeca. G0.5 inserta atención espacial y temporal factorizada cada cuatro capas en el Transformer de visión para combinar información entre parches de imagen y pasos temporales. En la capa final, solo la representación del fotograma actual, que ha absorbido información de fotogramas anteriores, se pasa al decodificador. La ruta habilitada para historial usa incrustaciones de estado continuas para alinear el estado del robot con las imágenes correspondientes.

Durante el entrenamiento, se descarta aleatoriamente el conjunto completo de fotogramas de historial para que el codificador también pueda funcionar solo a partir del fotograma actual. El artículo usa entradas de un solo fotograma para BEHAVIOR después del entrenamiento. Los autores atribuyen parte de las mejoras en horizontes largos al preentrenamiento con historial. Los experimentos dejan su contribución individual sin medir.

## Del entrenamiento a la ejecución

| Etapa | Entradas | Comportamiento aprendido o salida |
| --- | --- | --- |
| Entrenamiento del códec | Acciones continuas alineadas agrupadas por parte del cuerpo | Comprime fragmentos en índices discretos y reconstruye las acciones a partir de esos índices |
| Preentrenamiento VLA | Imágenes, instrucciones, estado del robot, códigos de acción del códec congelado y etiquetas de razonamiento | Aprende a predecir razonamiento y códigos de acción con entropía cruzada de siguiente token, y a responder preguntas visuales |
| Post-entrenamiento downstream | Demostraciones de la tarea objetivo y las interfaces de observación y control del embodiment | Produce un checkpoint para un robot o benchmark concreto |
| Ejecución | Observaciones más recientes, instrucción de la tarea, identificador del embodiment y estado del robot | Razonamiento opcional → códigos de acción → fragmento de acción continua |

En la ruta principal del artículo, el robot ejecuta parte del fragmento, recopila nuevas imágenes y estado, y vuelve a predecir. Si la manija se desplaza mientras el robot empuja el cajón, el siguiente fragmento puede responder a su posición observada. Esto cierra el bucle de retroalimentación mediante observación y replanificación. Las longitudes de predicción y ejecución dependen de la plataforma o de la configuración del checkpoint.

## Lo que muestran los experimentos

### Activar y desactivar el razonamiento para cada cabeza de acción

Los autores usan un checkpoint G0.5 y prueban cuatro configuraciones alternando entre AR y FM y conmutando CoT. Con CoT activado, ambas cabezas pueden usar el contexto resultante. La evaluación de pick-and-place de una sola etapa usa 64 ensayos. Las evaluaciones de horizonte largo usan dos tareas de cinco etapas, Air Fryer y Cook Bacon, con cinco ensayos por configuración y el subobjetivo actual proporcionado en tiempo de ejecución.

![Resultados para dos cabezas de acción con y sin razonamiento de cadena de pensamiento](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/cot_head_long_horizon.svg)

El panel izquierdo muestra las etapas completadas (0–5), y el derecho muestra el seguimiento del lenguaje. Con CoT activado, las etapas promedio completadas en Air Fryer suben de 2.4 a 3.8 para AR y de 2.1 a 2.7 para FM. El cambio en el pick-and-place de una sola etapa es mucho menor, con el seguimiento del lenguaje de AR subiendo de 65.6% a 67.2%. Estos resultados respaldan el uso de CoT para el grounding y la ejecución cuando se proporcionan objetivos por etapa. Los efectos de reformular verbos o indicaciones espaciales siguen siendo observaciones cualitativas de una muestra pequeña.

### Pick-and-Place: selección del objetivo y finalización de la tarea

Un R1-Lite debe colocar un objeto especificado en un contenedor especificado sobre una mesa desordenada. Ambos modelos ejecutan 64 ensayos con robot real bajo las mismas instrucciones, distribuciones de objetos y poses iniciales. La prueba incluye categorías de objetos vistas durante el post-entrenamiento y categorías excluidas de él.

![Seguimiento del lenguaje y éxito de la tarea con diferentes cantidades de datos de post-entrenamiento](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/PPBench.svg)

El seguimiento del lenguaje a la izquierda mide si el robot se acerca e intenta agarrar el objeto correcto. El éxito de la tarea a la derecha también requiere agarrarlo con éxito y colocarlo en el contenedor especificado. Por ejemplo, un robot que intenta el agarre correcto pero deja caer el objeto puede pasar la comprobación de seguimiento del lenguaje y fallar la tarea. Después del post-entrenamiento con 50 horas de datos de tareas, G0.5 obtiene 84.4% y 75.0% en las dos métricas. π₀.₅ obtiene 68.8% y 65.6%.

### DROID: transferencia a nuevos entornos y fallos por bajo contraste

![Rendimiento en DROID con entornos y objetos excluidos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/droid_results.svg)

El eje horizontal enumera diez tareas de manipulación y su media. El eje vertical muestra el éxito bajo el protocolo de evaluación del artículo. Cada modelo se entrena en DROID y luego ejecuta diez ensayos por tarea en entornos reales excluidos con objetos excluidos. La tarea final permite 0.5 puntos por finalización parcial. G0.5 promedia 82.5%, π₀.₅-DROID 57.5% y MolmoAct2-DROID 52.0%.

G0.5 tiene éxito en el 60% de los ensayos al colocar una toalla en un cajón de bajo contraste. Después de que los autores añaden marcadores de alto contraste, el éxito sube al 100%. La ganancia promedio deja algunas tareas sensibles a la visibilidad del objetivo.

### Fine-tuning en robot real y tareas de horizonte largo

| Evaluación | Configuración | Resultado reportado |
| --- | --- | --- |
| Hardware R1-Lite y R1-Pro | Dos plataformas móviles de doble brazo. Cuatro tareas dan seis configuraciones tarea–embodiment con 15 episodios cada una. Los modelos usan datos y presupuestos de entrenamiento equiparados. | El éxito promedio es 76.7% para G0.5, 53.3% para π₀.₅ y 24.4% para GR00T-N1.7 |
| BEHAVIOR Challenge 2025 | 50 tareas domésticas con diez instancias cada una. La puntuación mide la proporción de condiciones de objetivo logradas y permite crédito parcial. | El G0.5 de un solo checkpoint obtiene 0.2904 después de una época y 0.3136 después de cuatro épocas de post-entrenamiento. π₀.₅ obtiene 0.2626 después de cuatro épocas. |

R1-Lite y R1-Pro tienen seis y siete grados de libertad por brazo, respectivamente. Ambos usan una cámara externa y dos cámaras de muñeca en la evaluación con robot real. En transporte y apilado de cajas, π₀.₅ obtiene 93.3% y G0.5 obtiene 80.0%. BEHAVIOR promedia dos ejecuciones de evaluación para cada política de un solo checkpoint. La entrada ganadora de la competición usa cuatro checkpoints y obtiene 0.2605. Estas comparaciones evalúan políticas completas. Aislar un componente requeriría una comparación controlada independiente.

Los tres benchmarks estándar de simulación también usan sus propios protocolos de adaptación. Una política ajustada promedia 98.9% en cuatro conjuntos de tareas LIBERO. RoboTwin 2.0 promedia 93.3% en configuraciones limpias y aleatorizadas. Para Bridge, los autores realizan post-entrenamiento con demostraciones de robot real y transfieren la política a SimplerEnv sin entrada de estado del robot, alcanzando 87.3%. Estos resultados evalúan el rendimiento global de control. El experimento de conmutación de razonamiento aborda el efecto de CoT.

Las acciones tokenizadas también tienen un uso en el entrenamiento. Una política AR proporciona directamente la probabilidad logarítmica de sus tokens muestreados, lo que permite el aprendizaje por refuerzo con cocientes de probabilidad. Los autores comparan el fine-tuning con GRPO en cuatro tareas LIBERO con tasas de éxito iniciales similares. AR alcanza una tasa de éxito media final más alta. La comparación usa la variante FM del artículo con una aproximación de denoising estocástico y se aplica a este escenario con pocas demostraciones.

## Integración con LeRobot y diferencias de evaluación

**Nota de implementación.** `policy.action_head` selecciona la decodificación de ActionCodec o la generación de acciones continuas con FM. `policy.runtime_system` controla si el modelo genera razonamiento primero. El Sistema 1 produce acciones directamente. El Sistema 2 genera un subtarea o un cuadro delimitador y subtarea en la misma llamada de política, y luego usa ese contexto para generar acciones. Requiere un checkpoint con `predict_cot=true`. La cabeza de acción y la configuración de CoT son independientes.

| Checkpoint | Ruta de acción publicada | Predecir / Ejecutar | Interfaz |
| --- | --- | ---: | --- |
| `lerobot/g05_base` | Seleccionar explícitamente ActionCodec o FM. CoT es compatible. | 32 / 16 | Distribución de cuerpo completo de 27 dimensiones. El procesador R1 Lite incluido usa una cámara de cabeza, ambas cámaras de muñeca y seis fotogramas incluyendo el fotograma actual. |
| `lerobot/g05_libero` | FM, Sistema 1 | 32 / 10 | El efector final de un solo brazo y el gripper se mapean a 20 dimensiones. Cámaras externa y de muñeca derecha. |
| `lerobot/g05_robotwin20` | FM, Sistema 1 | 32 / 8 | Dos brazos y grippers se mapean a 20 dimensiones. Cámara cenital y ambas cámaras de muñeca. |
| `lerobot/g05_so101` | ActionCodec o FM. CoT es compatible. | 32 / 16 | Seis controles de un solo brazo se mapean a 20 dimensiones. Cámaras externa y de muñeca derecha, con una ranura opcional para la muñeca izquierda. |

Para la ejecución síncrona de SO-101, el modelo predice 32 pasos y pone en cola los primeros 16. La política se ejecuta de nuevo cuando la cola está vacía. El procesador de salida desnormaliza la representación interna de 20 dimensiones usando las estadísticas del checkpoint y la mapea de vuelta a seis controles. Las demostraciones ordinarias pueden proporcionar objetivos de acción. El entrenamiento de subtareas y cuadros delimitadores requiere etiquetas correspondientes. Las puntuaciones de simulación del artículo provienen de la configuración de evaluación de Galaxea. Los checkpoints convertidos de LeRobot LIBERO y RoboTwin usan la cabeza continua y deben evaluarse bajo sus propias configuraciones. El port y los checkpoints usan la licencia comunitaria de G0.5, que incluye restricciones de uso no comercial.

## Conclusión

G0.5 usa cuantización agrupada para comprimir el control de varios pasos en tokens. El decodificador puede entonces predecir esos tokens usando subtareas y ubicaciones objetivo que generó en la misma llamada. La evidencia más directa proviene de conmutar CoT en el mismo checkpoint. Mejora el progreso en las tareas de cinco etapas cuando se proporcionan subobjetivos, con pocos cambios en el pick-and-place de una sola etapa. La memoria visual cubre unos pocos segundos, y los resultados del cajón de bajo contraste muestran hasta qué punto el éxito de la acción aún puede depender de lo que el robot puede ver.

Las figuras se reproducen del artículo arXiv v1 del equipo Galaxea con sus leyendas y contenido originales. [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

</div>

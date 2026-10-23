---
description: "Un análisis en profundidad del backbone compartido de EO-1, el aprendizaje intercalado visión-texto-acción, los datos de razonamiento encarnado y los experimentos de control de robots."
title: "EO-1 — Preentrenamiento Multimodal Intercalado"
hide_title: true
keywords:
  - Paper Deep-Dive
  - eo1
  - Aprendizaje de Robots
  - reBot
  - B601-DM
  - B601-RS
  - Brazo Robótico
  - IA Física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_eo1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_eo1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-eo1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-eo1-title">EO-1 — Preentrenamiento Multimodal Intercalado</h1>
  <p className="paper-reading-lead">EO-1: Un modelo fundacional encarnado unificado y abierto para el control general de robots</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Modelo unificado de IA física</li>
    <li>Aprendizaje intercalado</li>
    <li>Razonamiento encarnado</li>
    <li>Control de robots</li>
  </ul>
</section>

## Prerrequisitos: Entradas y Salidas
**Explicación:** El aprendizaje por imitación aprende cómo moverse a partir de operaciones humanas grabadas. Un VLA añade comprensión del lenguaje y normalmente toma imágenes, texto de la tarea y estado del robot como entradas.

Para “pon el tomate en la bolsa de la compra”, las imágenes localizan los objetos, el estado describe el brazo, el texto define el objetivo y las acciones controlan el agarre y la colocación. EO-1 también puede responder “¿qué sigue?” y “¿ya ha terminado?”, conectando juicios antes y después de las acciones.

| Concepto | Significado aquí |
|---|---|
| Observación | Imágenes multivista y estado del robot; las imágenes nuevas provienen de cámaras. |
| Estado | Valores de robot de baja dimensión, como articulaciones; las dimensiones varían según la plataforma. |
| Acción | Controles continuos con significados físicos dependientes de la plataforma y del conjunto de datos. |
| Fragmento de acción | Varias acciones futuras predichas juntas; EO-1 usa 16 pasos. |
| Razonamiento encarnado | Juicios sobre objetos, espacio, progreso e interacción física. |

La predicción de un solo paso es `current observation → aₜ`; el fragmentado es `current observation → [aₜ, aₜ₊₁, …, aₜ₊₁₅]`. **Ilustración:** una dimensión de acción podría tener `[0.1, 0.12, 0.15]`; las salidas reales de EO-1 son arreglos multidimensionales de 16 pasos.

Los fragmentos de acción permiten que el modelo organice conjuntamente un segmento de movimiento, pero la longitud del fragmento no es el intervalo entre llamadas al modelo. El artículo no da una fracción de ejecución compartida, tasa de replanificación ni tasa de control para cada plataforma, por lo que no se puede deducir el número de llamadas al modelo por segundo a partir de la longitud del fragmento.

---

## Resumen: Traducción y Comentarios
### Traducción
Las personas alternan de forma natural el razonamiento multimodal y la interacción física en el mundo abierto. Los VLA han impulsado el control generalista mediante el coentrenamiento de robots e imagen-texto, pero siguen siendo menos flexibles a la hora de conectar el razonamiento con la interacción.

EO-Robotics comprende EO-1 y EO-Data1.5M. EO-1 aprende razonamiento encarnado y control mediante preentrenamiento intercalado visión-texto-acción. Combina una arquitectura que acepta imágenes, texto, vídeo y acciones con más de 1,5 millones de muestras de razonamiento encarnado de alta calidad que enfatizan la comprensión intercalada.

EO-1 se entrena en EO-Data1.5M usando decodificación autoregresiva y desruido por flow-matching para conectar la generación de acciones de robot con el razonamiento multimodal encarnado. Amplios experimentos en distintas encarnaciones de robots y tareas de manipulación hábil de largo horizonte validan el aprendizaje intercalado para la comprensión y generalización en mundo abierto. El artículo describe la arquitectura, la construcción de datos y los métodos de entrenamiento como referencia para modelos fundacionales encarnados.

### Comentarios
- **La conexión entre razonamiento y acciones cambia.** Más allá de generar acciones a partir de una imagen e instrucción, el modelo aprende a reevaluar después de las acciones usando nuevas imágenes.

- **Arquitectura y datos son ambos necesarios.** La red debe soportar texto y acciones continuas, y los ejemplos deben conectarlos a lo largo del tiempo.

- **Más de 1,5 millones se refiere al conjunto de datos global.** No todas las muestras contienen acciones totalmente intercaladas; el texto informa por separado de unas 122.000 muestras intercaladas visión-texto-acción.

- **La efectividad está acotada por los experimentos.** Los resultados en múltiples plataformas no establecen generalidad a nivel humano ni para escenas arbitrarias.

---

## Introducción y Trabajos Relacionados: ¿Por Qué Intercalar?
### Los Siete Párrafos Principales de la Introducción
![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-12-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-08-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-18-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-01-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-11-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-04-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-15-en.png)

### Relación con Trabajos Anteriores
![EO-1 Paper Deep-Dive: 3.2 Relationship to Earlier Work (image-17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-17-en.png)

---

## Método Central: Un Solo Backbone, Dos Salidas
### Procesamiento Compartido con Interfaces Específicas por Modalidad
El texto aborda el qué y el por qué, mientras que las acciones especifican el movimiento. Ambos dependen de los mismos objetos, objetivos y progreso. EO-1 comparte un backbone preentrenado para reducir la separación entre planificación y control.

![EO-1 Paper Deep-Dive: 4.1 Shared Processing with Modality-Specific Interfaces (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-05.png)

**Artículo:** Un Transformer solo-decodificador inicializado desde Qwen2.5-VL conserva el codificador visual para imágenes/vídeo y el tokenizador para texto. El estado y las acciones ruidosas se proyectan en el espacio de características compartido.

Los tokens son elementos de secuencia, no necesariamente palabras discretas. Los tokens visuales, de estado y de acción pueden ser vectores de características continuas.

| Entrada bruta | Codificación | Representación en el backbone |
|---|---|---|
| Imágenes multivista y fotogramas de vídeo | Codificador visual preentrenado | Secuencia visual de anchura `D`. |
| Instrucciones y razonamiento de preguntas y respuestas | Tokenizador y capa de embedding | Secuencia de texto de anchura `D`. |
| Estado `qₜ` | Proyección de estado | Mapea las dimensiones de estado `d_q` a anchura `D`. |
| Fragmento ruidoso `Xτ` y progreso `τ` | Proyección de entrada de acción | Secuencia de acción de anchura `D`. |

`D` es la anchura del backbone y `d_q` la dimensión de estado de la plataforma. Las dimensiones de estado/acción y los recuentos completos de tokens no se especifican de forma uniforme entre plataformas, por lo que se conservan los símbolos.

Las salidas se bifurcan en una **cabeza LM**, que predice tokens de texto, y una **cabeza de flujo**, que mapea características ocultas a actualizaciones de acciones continuas. El fragmento final es `16 × d_a`, con dimensión de acción específica de la plataforma `d_a`.

**Ejemplo de forma:** Para una interfaz hipotética de 7D, la salida es `16 × 7`, o 112 valores. Esta no es una configuración universal. Una proyección mapea la anchura `D` de vuelta a `d_a`; las anchuras no se suman directamente.

**Precaución:** “Sin parámetros adicionales específicos de acción” debe interpretarse como sin un backbone experto separado para acciones. Las proyecciones de estado/acción y las cabezas de salida siguen conteniendo parámetros.

### Generar Texto Secuencialmente, Desruidar Acciones como un Fragmento
La autoregresión predice el siguiente token de texto a partir del contexto existente:

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-00.png)

`w_j` es el token `j`, y `c_j` su contexto multimodal precedente. **Ejemplo:** después de “next, pick up”, el modelo predice “the tomato”, usando también las imágenes previas y el historial de acciones.

Las acciones usan flow matching: predicen repetidamente cómo actualizar un arreglo aleatorio hacia una trayectoria completa, en lugar de deletrear los controles como texto.

El entrenamiento mezcla acciones verdaderas y ruido gaussiano:

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-06.png)

`A` y la gaussiana estándar `Z` tienen ambas forma `16 × d_a`. `τ∈[0,1]` es el progreso interno de desruido, no segundos. Cero da ruido, uno da datos; el artículo muestrea de una distribución Beta que enfatiza las etapas más ruidosas.

**Ejemplo mínimo:** Para un elemento, `A=0.6`, `Z=−0.2` y `τ=0.5` dan `Xτ=0.2`: un valor intermedio en lugar de la respuesta completa.

**Objetivo de entrenamiento, preservando la Ecuación (2):**

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-16.png)

`Vθ` es el campo de actualización predicho por el modelo compartido y la cabeza de flujo, `θ` los parámetros entrenables, y `C` el contexto multimodal precedente. La norma compara arreglos completos, y la esperanza promedia el progreso muestreado. `L_AR` es la entropía cruzada de texto; ambos términos tienen peso uno. El objetivo de acción escrito en el ejemplo es `Z−A=−0.8`.

**Inferencia, preservando la Ecuación (1):**

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-13.png)

`Âτ` es la estimación inicializada desde ruido nuevo; `δ` es un paso de integración. El texto integra de cero a uno y usa diez actualizaciones. **Ilustración:** diez actualizaciones iguales darían `δ=0.1`, un paso interno en lugar de un periodo de ejecución.

**Precaución: las instrucciones escritas son inconsistentes.** La derivada de la trayectoria lineal es `A−Z`, pero la Ecuación (2) usa `Z−A` y la Ecuación (1) una actualización positiva. Tomadas literalmente en conjunto, no se alinean: la dirección hacia adelante del ejemplo es `0.8` pero el objetivo escrito es `−0.8`. Se conservan las ecuaciones; la reproducción debe comprobar la convención de tiempo/signo de la implementación en lugar de concluir que el entrenamiento real es incorrecto.

### Secuencias intercaladas: razonar de nuevo después de actuar
Un ejemplo estándar de acción puede escribirse como:

```text
Image → Task text → State → Action chunk
```

EO-1 también aprende esta estructura temporal:

```text
Current image → Planning QA → State → Action chunk
→ New image → Completion QA → Next-step planning → Next chunk
```

**Artículo:** Cada modalidad tiene marcadores de límite, incluidos `[BOI]/[EOI]` para imágenes, `[BOR]/[EOR]` para estado y `[BOA]/[EOA]` para acciones. La atención causal se condiciona en el contexto precedente en lugar de en respuestas futuras.

**Ejemplo:** Después de intentar embolsar un tomate, una nueva imagen puede mostrarlo aún en la pinza. El modelo puede juzgar que la colocación está incompleta y generar más acciones. Esto ilustra la estructura de retroalimentación, no una garantía de recuperación fiable.

EO-1 genera texto y acciones, no imágenes de cámara o estado futuros. El entorno proporciona nuevas observaciones. El entrelazado tampoco requiere una respuesta verbal antes de cada punto de control.

### Muestreo rectificador intercalado: historial limpio, acciones actuales ruidosas
Entrenar la acción actual requiere ruido, pero el texto posterior debe condicionarse en acciones completadas. Mantener las acciones pasadas ruidosas crea una discrepancia con el historial ejecutado.

![EO-1 Paper Deep-Dive: 4.4 Interleaved Rectifying Sampling: Clean History, Noisy Current Actions (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-03.png)

**Artículo:** El muestreo rectificador intercalado divide una secuencia con `N` segmentos de acción en `N+1` prefijos de entrenamiento en los límites de acción. Las acciones históricas están limpias; la acción que se está generando actualmente es ruidosa.

**Ejemplo mínimo:** Una secuencia con dos acciones:

```text
Image₁ / Text₁ → Action₁ → Image₂ / Text₂ → Action₂ → Image₃ / Text₃
```

Para `N=2`, se construyen tres prefijos:

| Muestra | Contexto y objetivo |
|---|---|
| Muestra1 | Imagen₁ / Texto₁ → Acción₁ ruidosa; entrenar la eliminación de ruido de acción₁. |
| Muestra2 | Imagen₁ / Texto₁ → Acción₁ limpia → Imagen₂ / Texto₂ → Acción₂ ruidosa; entrenar el texto posterior y acción₂. |
| Muestra3 | Ambas acciones son historial limpio; aprender el texto₃ final. |

Las acciones reciben supervisión de eliminación de ruido cuando se generan y contribuyen gradientes como contexto limpio para predicciones posteriores. El modelo aprende tanto la generación de acciones como el razonamiento a partir del historial de acciones.

**Límites y coste:** Reprocesar prefijos añade cómputo que no se mide por separado; no hay una ablación de eliminación aislada. El historial de entrenamiento limpio proviene de grabaciones, mientras que el historial de despliegue puede incluir errores del modelo. El muestreo rectificador no elimina esa discrepancia y no es un ensamblado temporal ACT ni un suavizado de acciones.

### Entrenamiento e inferencia completos
**Entrenamiento:** fuentes de imagen-texto, registros de robots y ejemplos intercalados → codificar modalidades → añadir ruido a las acciones actuales, mantener limpio el historial → backbone compartido → entropía cruzada de texto y pérdida de flujo → actualizaciones conjuntas. Las muestras solo de QA proporcionan supervisión de texto sin acciones inventadas.

**Inferencia:** imágenes, instrucción, estado e historial → generar el texto necesario → refinar nuevo ruido mediante diez actualizaciones en un bloque de 16 pasos → ejecutar → añadir nuevas observaciones al contexto. El almacenamiento en caché de KV reutiliza el cómputo de contexto; no sustituye la reobservación.

La implementación reporta cinco épocas de preentrenamiento, longitud media empaquetada de 16 384 y tamaño de lote uno. La tasa de aprendizaje de proyección de lenguaje/multimodal es `5×10⁻⁵`, del codificador visual `1×10⁻⁵`. Estos son ajustes experimentales, no óptimos universales.

---

## EO-Data1.5M: material compartido para razonamiento y control
### Tres grupos de datos
| Categoría | Escala de la Tabla 1 del texto principal | Supervisión |
|---|---|---|
| Web multimodal | 5.7M muestras, 7.1B tokens | QA de imágenes, comprensión de video, grounding y tareas relacionadas. |
| Control de robots | 1.2M trayectorias, 127.3B tokens | Operación continua en distintos robots. |
| Datos incorporados EO-Data1.5M | 1.5M muestras, 1B tokens | Razonamiento espacial, temporal, físico y de tareas más operación intercalada. |

**Precaución:** Trayectorias, muestras de QA y tokens son unidades diferentes y no pueden sumarse como conteos de operación. EO-Data1.5M no es todo el corpus de entrenamiento, y las secuencias intercaladas completas son solo un subconjunto.

### Flujo de trabajo: preservar escenas diversas y luego añadir razonamiento
![EO-1 Paper Deep-Dive: 5.2 Pipeline: Preserve Diverse Scenes, Then Add Reasoning (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-02.png)

**Artículo:** Agrupar características visuales de video, muestrear por clúster e inspeccionar manualmente para reducir escenas repetidas. Segmentar videos en subtareas, crear descripciones de acciones con modelos y humanos, construir preguntas basadas en plantillas, generar respuestas candidatas, seleccionarlas o reescribirlas manualmente y luego limpiar reglas y redacción.

Las tareas temporales incluyen sentido común físico, planificación, descripciones de video, QA de affordance, verificación, QA de subtareas y detección de fallos. Las tareas espaciales incluyen relaciones, predicción de trayectorias, cuadros delimitadores, señalamiento y señalamiento multivista.

**Explicación:** Un registro de agarre puede responder qué agarrar, dónde aproximarse y si la colocación tuvo éxito. Estas anotaciones provienen de demostraciones, no de la exploración de todas las acciones posibles.

### Cómo tres formatos intercalados conectan preguntas-respuestas y acciones
![EO-1 Paper Deep-Dive: 5.3 How Three Interleaved Formats Connect Question Answering and Actions (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-09.png)

| Formato | Conexión | Enfoque de aprendizaje |
|---|---|---|
| Razonamiento temporal | Imagen → QA de la siguiente subtarea → insertar respuesta en la instrucción → acción → nueva imagen y verificación. | Qué hacer y si está completo. |
| Razonamiento espacial | Imagen → QA de trayectoria → insertar trayectoria en la instrucción → acción → nueva imagen y verificación. | Traducir objetivos espaciales en movimiento. |
| QA de forma libre | Imagen → otra QA de razonamiento → instrucción de tarea original → acción → verificación. | Conservar razonamientos variados dentro del contexto de control. |

Las trayectorias espaciales son coordenadas `[x,y]` en el plano de la imagen, no comandos de articulaciones. `(480,125) → (485,144)` describe una trayectoria en la imagen; la generación de acciones continuas sigue aprendiendo el movimiento real.

El texto reporta alrededor de 122 000 ejemplos intercalados. **Precaución:** Los conteos difieren: la Tabla 1 da 5.7M muestras web, la Tabla 6 del Apéndice da 6.2M; la Figura 3(a) etiqueta comprensión espacial 376k, mientras que la Sección 3.2.1 indica 1.5M. Cada cifra se atribuye a su ubicación en lugar de fusionarse en un total no verificado.

---

## Experimentos: evidencia para las afirmaciones
### Evaluar razonamiento y control por separado
La pérdida de entrenamiento, las puntuaciones de QA, el éxito en simulación y la finalización de tareas reales miden capacidades diferentes y no pueden sustituirse entre sí.

| Evaluación | Resultado de EO-1 | Comparación e interpretación |
|---|---|---|
| RoboVQA, BLEU-4 | 58.5 | Qwen2.5-VL 3B: 55.9; coincidencia de texto con la respuesta de referencia. |
| ERQA, exactitud | 45.5% | Qwen2.5-VL 3B: 35.3%; Gemini 1.5 Flash: 46.3%. EO-1 no supera a todas las líneas base. |
| EO-Bench, espacial / temporal | 36.4 / 38.9 | Qwen2.5-VL 3B: 20.0 / 22.6; razonamiento de tareas mejorado con muchos errores restantes. |
| LIBERO, éxito medio | 98.2±0.3% | π0: 94.2±0.9%; OpenVLA-OFT: 97.1±0.6%. |
| SimplerEnv, WidowX / Google VM / Google VA | 72.7% / 76.5% / 63.0% | π0: 69.2% / 71.4% / 54.7%; ganancias de 3.5 / 5.1 / 8.3 puntos porcentuales. |

*Fuente: Tablas 2–4, páginas 13–14. Los nombres y versiones de modelos siguen el artículo. Estas métricas no forman una única puntuación intercambiable de capacidad robótica.*

**Precaución:** Los conteos de EO-Bench también entran en conflicto: la Sección 3.3 dice 648 preguntas, sus cuatro categorías suman 642, y 4.2 dice 700 distribuidas uniformemente. No se usan para inferir significancia ni conteos por categoría.

### ¿Qué se probó en robots reales?
Los 28 ajustes de tarea comprenden siete tareas de pick-and-place con Franka Panda, 13 pruebas out-of-the-box con WidowX 250 S, cuatro tareas hábiles de largo horizonte con AgiBot G-1 y cuatro tareas de razonamiento-control. SO100 también está involucrado.

Los modelos reciben vistas, estado e instrucciones y producen controles. Las configuraciones de **datos de entrenamiento** de la Tabla 6 del Apéndice incluyen vistas ego/izquierda/derecha de AgiBot a 30 FPS; izquierda/derecha/muñeca de DROID a 15 FPS; tercera persona/muñeca de SO100 a 30 FPS; y tercera persona/muñeca de IPEC-Franka a 10 FPS. Estos ajustes de origen no son conteos universales de cámaras de evaluación ni tasas de control.

El ajuste fino de largo horizonte usa 150 demostraciones por tarea durante 25 épocas, mezclando datos de subtareas y de tarea completa en una proporción de 9:1, y luego diez evaluaciones por tarea. Se reportan alrededor de 500k fotogramas y ocho pasos por conjunto, no una duración de tarea uniforme.

**Precaución:** Las puntuaciones de largo horizonte promedian la finalización bajo instrucciones de subtareas; no son éxito autónomo de tarea completa a partir de una sola instrucción global. “Out of the box” tampoco implica que la encarnación estuviera ausente del preentrenamiento.

### ¿El razonamiento mejora las acciones?
![EO-1 Paper Deep-Dive: 6.3 Does Reasoning Improve Actions? (image-07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-07.png)

EO-1 obtiene `0.76, 0.79, 0.84, 0.55` en tres en raya, reordenamiento por referencia de imagen, preparación de sándwiches y cocción de bistec. Las líneas base de tres en raya son π0 con `0.24` y GR00T-N1.5 con `0.36`, lo que respalda una mejor integración del juicio sobre el tablero y la colocación en este entorno.

Estas tareas usan datos y ajuste fino especializados: 800 demostraciones de reordenamiento y 450 muestras de tres en raya. Las líneas base emparejan un planificador externo GPT-4o con controladores, mientras que EO-1 usa un decodificador unificado. Los resultados respaldan el enfoque de sistema/entrenamiento completo, no un componente aislado ni aprendizaje de nuevas tareas en zero-shot.

### Generalización y el papel de los datos
![EO-1 Paper Deep-Dive: 6.4 Generalization and the Role of Data (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-10.png)

Las puntuaciones de finalización bajo variaciones visuales, de lenguaje y de acción son `0.72, 0.79, 0.67`, con un total global de `0.73`. Las variaciones de acción cambian principalmente las posiciones de los objetos, los puntos de vista del robot y las instancias de objetos, no habilidades nuevas arbitrarias no vistas. El texto y las figuras discrepan sobre los totales de tareas, por lo que los “18 Tasks” de la Figura 9 no se tratan como un conteo de ensayos para todo el artículo.

![EO-1 Paper Deep-Dive: 6.4 Generalization and the Role of Data (image-14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-14.png)

Se comparan cuatro configuraciones: `fast`, acciones FAST totalmente autoregresivas; `base`, un backbone compartido con flow matching continuo entrenado solo con datos de control; `llava`, añadiendo instrucciones genéricas de imagen-texto; e `interleaved`, añadiendo datos intercalados relevantes.

La Tabla 5 proporciona dos observaciones clave:

- **La generación continua ayuda:** LIBERO `base` alcanza un 98.2% frente a `fast` con 88.0%. Esto respalda la decodificación híbrida en este contexto, no una inferioridad universal de las acciones discretas.

- **La relevancia importa más que simplemente añadir modalidades:** La finalización global de WidowX sube de `base` `0.71` a `interleaved` `0.80`, mientras que `llava` con datos genéricos obtiene `0.34`. La alineación con la tarea importa; los datos web no son universalmente perjudiciales.

Las ganancias tienen límites: las puntuaciones de generalización de acciones del sándwich de AgiBot se mantienen en `0.75` tanto para `base` como para `interleaved`. Las etiquetas intercaladas no aportan automáticamente diversidad de movimiento ausente en las demostraciones.

---

## Interpretar la conclusión
**Conclusión respaldada:** En estos contextos, un backbone compartido con datos corporizados intercalados mejora el razonamiento relevante para la tarea y el control continuo. Proporciona una interfaz entrenable para razonar antes de las acciones y reevaluar después.

Mantén tres límites:

- **Unificado no significa totalmente fiable.** Las tareas complejas como cocinar un filete siguen siendo débiles, EO-Bench está lejos de ser perfecto, y la navegación, la evitación, el análisis de fallos y la colaboración siguen siendo direcciones futuras.

- **El razonamiento y el movimiento no son concurrentes de forma arbitraria.** Las arquitecturas eficientes y la inferencia asíncrona siguen siendo trabajo futuro. El intercalado expresa dependencias temporales, no un pensamiento y acción simultáneos de tipo humano.

- **La reproducción necesita detalles de implementación.** Los conteos y los signos de flujo entran en conflicto, y no se pueden inferir de los diagramas las dimensiones de estado/acción ni los calendarios de ejecución. Se informa de unos 6 GB de memoria de inferencia en una RTX 4090, sin mediciones universales de latencia o frecuencia de control, por lo que no se garantiza la ejecución en tiempo real en cualquier plataforma.

**Explicación:** EO-1 ofrece una vía para aprender conjuntamente el juicio semántico y el control. La red compartida maneja la información conjunta, los datos intercalados aportan relaciones temporales y el muestreo rectificador distingue las acciones históricas del denoising actual. Los resultados prácticos siguen dependiendo de la cobertura de las demostraciones, las tareas y los sistemas de ejecución.

</div>

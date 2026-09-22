---
description: "Capítulo 15 del Curso para Principiantes en Inteligencia Corporizada de Seeed: el modelo ACT y el action chunking: entrada y salida de ACT, la estructura ResNet y Transformer, intuición sobre la atención, CVAE, action chunk vs action horizon, defensas contra la acumulación de errores y los límites de capacidad de ACT."
title: Capítulo 15 - Modelo ACT y Action Chunking
keywords:
  - reBot
  - ACT
  - Action Chunking
  - Transformer
  - CVAE
  - Imitation Learning
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_15
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 15 · Teoría</span>
    <h2>15. Modelo ACT y Action Chunking</h2>
    <p>
      Capítulo 15 del Curso para Principiantes en Inteligencia Corporizada de Seeed: entrada y salida de ACT,
      la estructura ResNet y Transformer, intuición sobre la atención, CVAE, action chunk vs action horizon,
      defensas contra la acumulación de errores y los límites de capacidad de ACT.
    </p>
    <div className="hero-actions">
      <a href="#input-output">Interfaz</a>
      <a href="#transformer">Transformer</a>
      <a href="#chunk-horizon">Chunk vs horizon</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>15.1 De Behavioral Cloning a ACT</span>
    <span>15.2 Entrada y salida de ACT</span>
    <span>15.3 Estructura interna de ACT</span>
    <span>15.4 Qué es un Transformer</span>
    <span>15.5 Cómo se usa Transformer en ACT</span>
    <span>15.6 Qué es CVAE</span>
    <span>15.7 Action Chunk vs. Action Horizon</span>
    <span>15.8 Continuidad de la acción y acumulación de errores</span>
    <span>15.9 ¿Para qué tareas es adecuado ACT?</span>
    <span>15.10 Límites de capacidad de ACT</span>
  </div>
</section>

<RebotCourseNav />

## 15.1 De Behavioral Cloning a ACT

<section id="why-act" className="section-card">
  <div className="section-title">
    <span>ACT</span>
    <h2>15.1 De Behavioral Cloning a ACT: solo hace falta un "buen modelo"</h2>
  </div>

El Capítulo 9 trató sobre behavioral cloning: registrar demostraciones de teleoperación como un conjunto de datos y dejar que el modelo aprenda a "hacer lo que ves". Eso dejó una pregunta: ¿qué modelo merece estos datos? Un modelo de política desplegable debe superar al menos tres obstáculos:

1. Entender imágenes.
2. Pensar de forma coherente.
3. Resistir la acumulación de errores.

**ACT (Action Chunking with Transformers)** es el modelo de política construido para superar estos tres obstáculos. Propuesto por un equipo de Stanford en 2023, primero ganó fama en la plataforma de bajo costo de doble brazo ALOHA realizando tareas delicadas como abrir tapas de tazas y sellar bolsas; más tarde, Mobile ALOHA demostró tareas complejas como cocinar camarones. Hoy está integrado en LeRobot como una de las políticas estándar, y es el modelo que entrenarás y desplegarás con tus propias manos en esta etapa.

El nombre de ACT ES toda su filosofía de diseño: **Action Chunking + Transformer (modelador de secuencias)**. El resto de este capítulo desglosa estos dos términos.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-01.png" alt="ACT" />
</div>

</section>

## 15.2 Entrada y salida de ACT

<section id="input-output" className="section-card">
  <div className="section-title">
    <span>Interfaz</span>
    <h2>15.2 Entrada y salida de ACT: ver primero ambos extremos</h2>
  </div>

La forma más fiable de entender cualquier modelo es mirar primero su "interfaz": qué recibe y qué produce.

### Entrada: observación actual

Durante la inferencia, ACT recibe un fotograma de observación que contiene dos tipos de información:

| Entrada | En el reBot Arm | Dimensionalidad |
| :--- | :--- | :--- |
| Imágenes (Observación) | Flujo RGB dual cenital + muñeca | 2 × imágenes |
| Estado articular (State) | 6 ángulos articulares + apertura del gripper | Vector de 7 dimensiones |

Ten en cuenta que ACT es **solo por fotogramas**: no recuerda fotogramas pasados; cada decisión se basa en "lo que ve ahora + dónde están las articulaciones ahora".

### Salida: Action Chunk para una ventana corta de futuro

La salida de ACT **no es** la siguiente acción, sino todo un bloque de secuencia de acciones (Action Chunk):

```text
Input: 2 image streams + 7-dim joint state (current frame)
Output: action sequence for next k steps, each step 7-dim (6 joints + gripper)
      i.e., a k × 7 action matrix
```

En la configuración predeterminada de ACT en LeRobot, k (tamaño del chunk) suele ser 100: una inferencia da un plan de acción completo para unos 100 pasos de tiempo futuros. Esto responde a la anticipación del Capítulo 9: **Action Chunk no es un truco de optimización abstracto; es la forma natural de salida de ACT.**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-02.png" alt="ACT input and output" />
</div>

</section>

## 15.3 Estructura interna de ACT

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Architecture</span>
    <h2>15.3 Estructura interna de ACT: tres talleres en una misma línea de montaje</h2>
  </div>

### Taller 1: Visual Backbone (ResNet): de píxeles a características

Las imágenes de la cámara cenital y de muñeca pasan cada una por una ResNet18 (una CNN preentrenada en ImageNet), comprimidas en un conjunto de **características visuales**. Piensa en ResNet como la "corteza visual" del modelo: los píxeles en bruto no significan nada para él; extrae información estructurada como "hay un objeto rojo a la izquierda de la mesa" o "hay una abertura justo debajo del gripper".

### Taller 2: Transformer Encoder: entender "el presente"

Las características visuales + el vector de estado articular se fusionan y entran en el Transformer encoder. El trabajo del encoder es fusionar múltiples flujos en una comprensión unificada de la situación actual: "dónde está el objetivo, dónde estoy yo, en qué punto va la tarea".

### Taller 3: Transformer Decoder: planificar "el futuro"

El decoder toma la comprensión del encoder y **genera la secuencia de acciones para los próximos k pasos de una sola vez**. No escupe acciones una por una; como al escribir una partitura, compone todo el "movimiento futuro" de un solo aliento; esta es la razón fundamental por la que los action chunks son internamente tan coherentes.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-03.png" alt="ACT internal structure" />
</div>

</section>

## 15.4 Qué es un Transformer

<section id="transformer" className="section-card">
  <div className="section-title">
    <span>Transformer</span>
    <h2>15.4 Qué es un Transformer: intuición detrás de la atención</h2>
  </div>

Los talleres 2 y 3 de ACT son ambos Transformers, pero ¿qué ES un Transformer?

Fue propuesto por Google en 2017 para traducción automática; el artículo se titula "Attention Is All You Need", y más tarde se convirtió en la arquitectura fundamental de los grandes modelos de lenguaje. No hacen falta fórmulas: bastan tres intuiciones:

1. **Token: cortar la información en "partes".** Los Transformers no procesan directamente frases o píxeles en bruto; primero cortan la entrada en partes estandarizadas (tokens): una frase en palabras, una imagen en parches, un vector de estado articular también puede ser un token. Una vez que toda la información se unifica en "una secuencia de partes", el mismo mecanismo las procesa todas.
2. **Self-Attention: cada parte puede "ver" todas las demás.** Este es el núcleo del Transformer. Al procesar cada parte, calcula su relevancia con todas las demás partes y se centra en absorber información de las más relevantes; "a qué mirar" no lo prescribe el humano, el modelo lo aprende.
3. **Encoder y Decoder: uno entiende, otro genera.** El Encoder fusiona una secuencia de entrada de partes en "una comprensión de la situación actual"; el Decoder toma esta comprensión y genera una nueva secuencia de partes de salida: en traducción, es la frase en el idioma destino; en ACT, es la secuencia de acciones futuras.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-04.png" alt="Transformer" />
</div>

</section>

## 15.5 Cómo se usa Transformer en ACT

<section id="transformer-in-act" className="section-card">
  <div className="section-title">
    <span>Attention</span>
    <h2>15.5 Cómo se usa Transformer en ACT</h2>
  </div>

- **En el encoder: fusionar múltiples observaciones.** Los parches de características visuales de ambas imágenes (a través de ResNet) más el vector de estado articular se convierten todos en tokens que se introducen en el encoder. El self-attention los alinea: "la posición actual del gripper" y "ese bloque rojo en la imagen" se vinculan en una comprensión unificada: dónde está el objetivo, dónde estoy yo, en qué punto va la tarea.
- **En el decoder: planificar toda la secuencia de acciones de una vez.** El decoder usa k vectores de consulta correspondientes a k pasos de acción futuros; estas consultas extraen información de la comprensión del encoder y también se coordinan entre sí mediante self-attention: la acción en el paso 37 "sabe" lo que el paso 36 pretende hacer. Por lo tanto, todo el bloque de acción es un todo coherente, no 100 decisiones aisladas.
- **En el enfoque de la atención: saber a qué "mirar".** Al generar cada acción, el modelo se centra automáticamente en las regiones de la imagen más relevantes para la acción actual: al acercarse al objetivo, se centra en la posición relativa gripper-bloque; mientras se mueve, se centra en la dirección del objetivo, en lugar de tratar todas las regiones por igual.

Resumen en una frase: **ResNet "ve con claridad", el Transformer encoder "entiende", el Transformer decoder "planifica con coherencia"**, todo impulsado por la atención.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-05.png" alt="Attention in ACT" />
</div>

</section>

## 15.6 Qué es CVAE

<section id="cvae" className="section-card">
  <div className="section-title">
    <span>CVAE</span>
    <h2>15.6 Qué es CVAE</h2>
  </div>

CVAE (Conditional Variational Autoencoder). El ACT de LeRobot en realidad se entrena con esto, solo que no lo ves en la línea de comandos `lerobot-train --policy.type=act`.

### Qué problema evita: el promedio falla

El trabajo de CVAE no es "reducir al humano a una única respuesta correcta", sino reconocer que, dada la observación actual, las acciones pueden tener múltiples estilos; durante el entrenamiento, primero identifica de qué estilo se trata y luego reproduce esa secuencia de acciones.

El artículo hizo comparaciones (en tareas simuladas):

- Si las demostraciones son con script (solo una forma), eliminar CVAE apenas afecta la tasa de éxito.
- Con datos humanos, eliminarlo hace que el éxito caiga de ~35% a 2%.

Así que CVAE no sirve para que las fórmulas se vean más elegantes; sirve para permitir que el modelo maneje datos donde "los humanos cambian de enfoque y tienen las manos temblorosas".

"Condicional" significa: las acciones generadas deben estar fundamentadas en lo que se ve actualmente — ya sea un cangrejo de río o un bloque sobre la mesa, no puede inventar cosas. CVAE es "dado lo que ves, compón cómo moverte a continuación".

</section>

## 15.7 Fragmento de acción vs. Horizonte de acción

<section id="chunk-horizon" className="section-card">
  <div className="section-title">
    <span>Fragmento vs horizonte</span>
    <h2>15.7 Fragmento de acción vs. Horizonte de acción</h2>
  </div>

Estos son los dos conceptos distinguidos con mayor precisión en este capítulo; son dos parámetros que se pueden ajustar de forma independiente:

- **Fragmento de acción:** la longitud de la secuencia de acciones que el modelo **predice en una sola pasada hacia adelante**, es decir, el número de filas k en la matriz de salida. En LeRobot, ACT usa por defecto un tamaño de fragmento de 100.
- **Horizonte de acción:** después de predecir estos 100 pasos, cuántos se **ejecutan realmente en lazo abierto**, antes de volver a observar y volver a predecir.

La relación es: **el fragmento predicho puede ser largo, pero cada vez solo se confía en el primer segmento pequeño.**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-06.png" alt="Fragmento de acción vs horizonte de acción" />
</div>

¿Por qué no ejecutar los 100 pasos? Porque las predicciones se vuelven menos fiables cuanto más lejos estén — el entorno cambia, los objetos pueden ser golpeados, y para la segunda mitad la "situación asumida" por el modelo ya se ha desviado de la realidad. **Ejecutar en lazo abierto durante demasiado tiempo = conducir con los ojos cerrados.** Cuanto más pequeño es el Horizonte, más a menudo el modelo "abre los ojos para volver a comprobar", haciéndolo más robusto frente a perturbaciones; pero si es demasiado pequeño se pierde la suavidad que aporta el fragmentado.

:::tip Una analogía
Es como usar la navegación del teléfono mientras conduces. La navegación (el modelo) calcula toda la ruta (fragmento) en una sola pasada, pero no bloqueas el volante: cada pocos kilómetros echas un vistazo al tráfico en tiempo real (volver a observar) y la navegación vuelve a planificar en consecuencia (volver a predecir). La distancia durante la cual "confías en la ruta antigua y sigues conduciendo" es el Horizonte.
:::

</section>

## 15.8 Continuidad de acción y acumulación de errores

<section id="defenses" className="section-card">
  <div className="section-title">
    <span>Defensas</span>
    <h2>15.8 Continuidad de acción y acumulación de errores: las dos líneas de defensa de ACT</h2>
  </div>

El Capítulo 9 dejó dos amenazas para la estabilidad de robots reales: el jitter de acción y la acumulación de errores. Ahora veamos cómo ACT las aborda con métodos estructurados.

- **Defensa 1: la coherencia intra-fragmento corrige el jitter.**
- **Defensa 2: el ensamblado temporal corrige las discontinuidades.**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-07.png" alt="Defensas de ACT" />
</div>

</section>

## 15.9 ¿Para qué tareas es adecuado ACT?

<section id="fit" className="section-card">
  <div className="section-title">
    <span>Adecuación</span>
    <h2>15.9 ¿Para qué tareas es adecuado ACT?</h2>
  </div>

Dadas las características de diseño de ACT, su "zona de confort" es bastante clara:

| Adecuado para | Motivo |
| :--- | :--- |
| Manipulación de sobremesa (agarrar, colocar, organizar, enchufar/desenchufar) | ACT se originó en estas tareas; las necesidades de datos y el tamaño del modelo encajan |
| Tareas únicas o pocas tareas | El behavioral cloning aprende mapeos específicos de tareas; más tareas = se necesitan más datos |
| Tareas cortas (segundos hasta ~1 minuto) | El error se acumula con el tiempo; las tareas más cortas son más estables |
| Tareas con información visual suficiente | Escenas donde las cámaras duales cenital + de muñeca cubren la información clave |
| Hardware con recursos limitados | ACT tiene relativamente pocos parámetros; las GPU de consumo pueden entrenar e inferir; la CPU también puede inferir |

</section>

## 15.10 Límites de capacidad de ACT

<section id="boundaries" className="section-card">
  <div className="section-title">
    <span>Límites</span>
    <h2>15.10 Límites de capacidad de ACT</h2>
  </div>

Igualmente importante es saber lo que no puede hacer:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15/ch15-08.png" alt="Límites de capacidad de ACT" />
</div>

</section>

</div>

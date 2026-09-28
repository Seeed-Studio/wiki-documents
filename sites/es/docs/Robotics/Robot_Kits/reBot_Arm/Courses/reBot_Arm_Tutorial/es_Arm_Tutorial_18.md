---
description: "Capítulo 18 del Curso de Introducción a la IA Física de Seeed — aprendizaje multimodal y fundamentos de VLA: visión/lenguaje/acción, VLM vs VLA, ACT vs VLA, tareas condicionadas por lenguaje, tarea única vs multitarea vs generalización, acciones continuas vs tokens de acción, y capacidades y limitaciones de VLA."
title: Capítulo 18 - Aprendizaje multimodal y fundamentos de VLA
keywords:
  - reBot
  - VLA
  - VLM
  - GR00T
  - Multimodal
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_18
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-24
  author: ZhuYaoHui
createdAt: '2026-09-24'
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 18 · Teoría</span>
    <h2>18. Aprendizaje multimodal y fundamentos de VLA</h2>
    <p>
      Capítulo 18 del Curso de Introducción a la IA Física de Seeed — visión/lenguaje/acción,
      VLM vs VLA, ACT vs VLA, tareas condicionadas por lenguaje, tarea única vs multitarea vs
      generalización, acciones continuas vs tokens de acción, y capacidades y limitaciones de VLA.
    </p>
    <div className="hero-actions">
      <a href="#vlm-vla">VLM vs VLA</a>
      <a href="#act-vla">ACT vs VLA</a>
      <a href="#capacidades">Capacidades</a>
    </div>
  </div>
</section>

<section className="section-card">
  <p>En los capítulos anteriores, has utilizado políticas como <strong>ACT (Action Chunking with Transformers)</strong> en el reBot Arm para completar aprendizaje por imitación que "mira una imagen y produce acciones de las articulaciones". Estos métodos suelen entrenarse para una <strong>tarea única</strong>: el modelo solo aprende el comportamiento de "poner el cubo rojo en la caja", y cambiar de tarea requiere volver a recopilar datos y reentrenar.</p>

  <p>Este capítulo presenta la idea central de <strong>VLA (Vision-Language-Action)</strong>: permitir que el robot no solo "vea", sino que también "entienda" instrucciones en lenguaje natural, y que comparta una única red de política entre múltiples tareas.</p>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-01.png" alt="Visión general de VLA" />
  </div>
</section>

## 18.1 Modelos multimodales

<section id="multimodal" className="section-card">
  <div className="section-title">
    <span>Multimodal</span>
    <h2>18.1 ¿Qué es un modelo multimodal?</h2>
  </div>

Un modelo multimodal fusiona más de un tipo de información — imágenes, texto y estado del robot — en una única decisión unificada. En el contexto de VLA, las tres modalidades siguientes se combinan y se decodifican en acciones del robot.

</section>

## 18.2 Visión, lenguaje y acción

<section id="vla-modalities" className="section-card">
  <div className="section-title">
    <span>Modalidades</span>
    <h2>18.2 Visión, lenguaje y acción</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-02.png" alt="Visión, lenguaje y acción" />
</div>

En el marco VLA, las tres modalidades tienen cada una una clara división de trabajo:

| Modalidad | Significado | Fuente típica en reBot Arm |
| :--- | :--- | :--- |
| **Visión** | Imágenes RGB capturadas por cámaras externas y cámaras de muñeca | Cámara frontal, cámara de muñeca RealSense / USB |
| **Lenguaje** | Descripción en lenguaje natural de la tarea | "Pon el destornillador en la caja de herramientas" |
| **Acción** | Los comandos de control que el robot debe ejecutar | Ángulos objetivo de cada articulación, anchura de apertura/cierre de la pinza |

El **estado** suele aparecer emparejado con la Acción: el Estado describe "dónde está ahora el robot", y la Acción describe "adónde ir después". En los conjuntos de datos de LeRobot, se almacenan en los campos `observation.state` y `action`; en GR00T se dividen además mediante `meta/modality.json` en subclaves como `single_arm` y `gripper`.

La diferencia clave entre VLA y las políticas de visión pura: **el lenguaje se convierte en una variable de condicionamiento**. Durante el entrenamiento, cada trayectoria de demostración se vincula a una descripción de tarea; en la inferencia, el usuario solo necesita cambiar el texto de la instrucción, sin cambiar los pesos del modelo (dentro de la cobertura de datos).

</section>

## 18.3 Diferencia entre VLM y VLA

<section id="vlm-vla" className="section-card">
  <div className="section-title">
    <span>VLM vs VLA</span>
    <h2>18.3 Diferencia entre VLM y VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-03.png" alt="VLM vs VLA" />
</div>

| Aspecto | VLM (Vision-Language Model) | VLA (Vision-Language-Action) |
| :--- | :--- | :--- |
| Salida | Texto, descripciones, resultados de razonamiento | **Secuencia de acciones del robot** |
| Uso típico | Preguntas y respuestas sobre imágenes, comprensión de escenas, generación de descripciones | Agarre, colocación, abrir/cerrar puertas y otras manipulaciones |
| Modelos representativos | LLaVA, Qwen-VL, Cosmos-Reason2 | GR00T, pi0, OpenVLA |
| Relación con el robot | Puede ayudar en la planificación, no acciona directamente los motores | Produce comandos de control de extremo a extremo |

Se puede entender de forma sencilla como: **VLM se encarga de "entender el mundo y hablar de él", mientras que VLA se encarga de "entender el mundo y actuar".**

Isaac GR00T N1.7 reutiliza arquitectónicamente las capacidades de VLM: su backbone es **Cosmos-Reason2-2B** (basado en la arquitectura Qwen3-VL, sustituyendo al backbone Eagle de N1.6), responsable de codificar imágenes y lenguaje, seguido de una **cabeza de acción Diffusion Transformer (DiT)** que decodifica representaciones semánticas en fragmentos de acción continuos. Por lo tanto, GR00T es tanto un VLA como un modelo que incorpora fuertes capacidades de representación VLM.

</section>

## 18.4 Diferencia entre ACT y VLA

<section id="act-vla" className="section-card">
  <div className="section-title">
    <span>ACT vs VLA</span>
    <h2>18.4 Diferencia entre ACT y VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-04.png" alt="ACT vs VLA" />
</div>

El ACT que encontraste en capítulos anteriores y el VLA de este capítulo pertenecen ambos a la familia del aprendizaje por imitación (Behavior Cloning), pero sus objetivos de diseño son diferentes:

| Aspecto | ACT | VLA (GR00T como ejemplo) |
| :--- | :--- | :--- |
| Condición de tarea | Normalmente **sin lenguaje**, tarea única implícita | **Lenguaje + visión**, multitarea explícita |
| Tamaño del modelo | Más pequeño (decenas de millones de parámetros) | Más grande (modelo base de miles de millones de parámetros) |
| Método de entrenamiento | Entrenar desde cero o ajuste fino ligero | Preentrenamiento de modelo base + ajuste fino en tareas posteriores |
| Representación de la acción | Fragmento de acción | Fragmento de acción + denoising con Flow Matching |
| Generalización | Buen rendimiento dentro de la distribución; reentrenar al cambiar de tarea | El condicionamiento por lenguaje admite transferencia zero/few-shot |
| Tipo de política en LeRobot | `act` | `groot` |

La técnica central de ACT es el **Action Chunking**: predecir de una vez múltiples pasos de acción futuros para reducir el error acumulado de la inferencia paso a paso. GR00T también predice fragmentos de acción, pero la longitud de la ventana varía según la versión:

- **N1.5 / N1.6:** `action_horizon = 16`
- **N1.7:** `action_horizon` se amplía de 16 a **40**, y la dimensión máxima del espacio general de estado/acción preentrenado se amplía en consecuencia (reBot en realidad solo usa 7 dimensiones; las dimensiones restantes se rellenan automáticamente con ceros)
- **Política `groot` de LeRobot:** el código fuente usa por defecto `chunk_size=50`, `n_action_steps=50`

Este tutorial sigue el ejemplo oficial de ajuste fino de N1.7, utilizando **`chunk_size=40`** durante el entrenamiento para alinearse con la ventana de acción preentrenada. No te quedes con 16: una ventana desajustada degrada los resultados del ajuste fino. `action_horizon` se escribe en la cabeza de difusión durante el entrenamiento y no puede ampliarse arbitrariamente en la inferencia.

**Ruta de migración:** si ya tienes un conjunto de datos ACT para el reBot Arm (formato LeRobot v2), en el Capítulo 20 solo necesitas añadir anotaciones de lenguaje y la configuración de Modalidad para poder usarlo en el ajuste fino de GR00T, sin volver a recopilar todas las demostraciones.

</section>

## 18.5 Tareas de robot condicionadas por lenguaje

<section id="language-conditioned" className="section-card">
  <div className="section-title">
    <span>Lenguaje</span>
    <h2>18.5 Tareas de robot condicionadas por lenguaje</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-05.png" alt="Tareas de robot condicionadas por lenguaje" />
</div>

La forma estándar de una tarea condicionada por lenguaje es:

```text
Input: image I_t + language instruction L + current state S_t
Output: actions A_{t:t+H} (action chunk for the next H steps)
```

La **granularidad de la instrucción** puede variar:

- **A nivel de tarea:** "pon el cubo rojo en la caja azul" (una frase compartida por toda la trayectoria)
- **A nivel de subobjetivo:** "primero acércate al objeto" -> "luego cierra la pinza" (anotación segmentada, escenarios avanzados)
- **A nivel de restricción:** "coloca suavemente", "evita obstáculos" (modifica cómo se ejecuta la acción)

En los conjuntos de datos de LeRobot, el lenguaje suele escribirse en el campo `meta/tasks.jsonl` o `annotation`. GR00T lo lee a través de la clave `annotation` en `modality.json`; dos formas comunes son:

| Nombre de la clave | Conjuntos de datos típicos | Recomendación para reBot |
| :--- | :--- | :--- |
| `human.task_description` | SO-100, cube_to_bowl y otras tareas sencillas de sobremesa | **Recomendado**: coherente con el ejemplo del Capítulo 20 |
| `human.action.task_description` | LIBERO, SimplerEnv y otros benchmarks de simulación | Úsalo solo si tus datos provienen de estos benchmarks |

Ambas claves son válidas, pero deben coincidir con los campos reales del conjunto de datos; no las mezcles entre entrenamiento e inferencia.

**Consejos prácticos (reBot Arm):**

1. Al grabar cada demostración, describe la tarea en **una frase corta, con el verbo al principio** en chino o en inglés.
2. Mantén la redacción coherente para tareas similares, por ejemplo usa de forma uniforme "put X on Y".
3. Evita que un único dato corresponda a múltiples redacciones; cuanto más coherente, mejor durante las primeras fases de ajuste fino.

</section>

## 18.6 Tarea única, multitarea y generalización

<section id="generalization-levels" className="section-card">
  <div className="section-title">
    <span>Generalización</span>
    <h2>18.6 Tarea única, multitarea y generalización</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-06.png" alt="Tarea única, multitarea y generalización" />
</div>

| Paradigma de entrenamiento | Descripción | Escenarios adecuados |
| :--- | :--- | :--- |
| **Tarea única** | Aprende solo una habilidad | Predeterminado de ACT; pocos datos, objetivo claro |
| **Multitarea** | El mismo modelo aprende múltiples habilidades, diferenciadas por el idioma | Fine-tuning de VLA; ordenado de escritorio, clasificación, etc. |
| **Generalización entre encarnaciones** | Diferentes robots comparten un modelo base | Preentrenamiento de GR00T; adaptado mediante `embodiment_tag` |

"Generalización" en las VLA tiene varios niveles — no los confundas:

1. **Misma tarea, nueva pose inicial:** aún puede agarrar cuando cambia la posición del cubo — ACT normalmente también puede hacer esto.
2. **Nuevos objetos, nuevos contenedores:** se basa en la generalización visual — requiere suficiente diversidad en los datos de entrenamiento.
3. **Nuevas combinaciones de instrucciones en lenguaje:** "pon A sobre B" nunca visto antes pero el patrón de la frase es familiar — la ventaja de condicionamiento por lenguaje de la VLA.
4. **Nueva encarnación de robot:** sigue siendo utilizable al cambiar de brazo — requiere la capa de proyección de encarnación de GR00T más una pequeña cantidad de datos de fine-tuning.

Para los usuarios de reBot Arm, la expectativa realista es: **después del fine-tuning, puedes cambiar entre las múltiples tareas en lenguaje ya recopiladas**; para objetos completamente nuevos o patrones de frases completamente nuevos, aún se necesitan datos de demostración adicionales.

</section>

## 18.7 Acciones continuas y tokens de acción

<section id="action-representations" className="section-card">
  <div className="section-title">
    <span>Espacio de acción</span>
    <h2>18.7 Acciones continuas y tokens de acción</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-07.png" alt="Continuous actions and action tokens" />
</div>

Hay dos representaciones principales para los comandos de control de robots:

### Acciones continuas

Produce directamente un vector de coma flotante, p. ej. 6 ángulos de articulación + 1 valor de apertura/cierre del efector final:

```python
action = [q1, q2, q3, q4, q5, q6, gripper]   # shape: (7,)
```

- **Ventaja:** alta precisión, coherente con la interfaz real del motor.
- **Desventaja:** la regresión en un espacio de alta dimensión es difícil.
- **GR00T usa:** DiT + Flow Matching para eliminar ruido en el espacio continuo, produciendo fragmentos de acción.

### Tokens de acción (acciones discretizadas)

Cuantiza valores continuos en símbolos discretos, como un modelo de lenguaje que predice el siguiente token:

```text
action_tokens = [tok_42, tok_17, tok_89, ...]
```

- **Ventaja:** puede reutilizar arquitecturas LLM autoregresivas; adoptado por algunas VLA como pi0-FAST.
- **Desventaja:** pérdida por cuantización, diseño complejo del vocabulario.

**Acciones relativas vs. absolutas:**

1. **El núcleo del preentrenamiento de GR00T N1.7 es el espacio de acción Relative EEF (efector final relativo)**: las acciones se representan como incrementos cartesianos relativos a la **pose actual del efector final**, en lugar de incrementos de ángulo de articulación. Los incrementos del efector final tienen una semántica más coherente entre diferentes robots (incluso vídeo humano), lo cual es clave para la generalización entre encarnaciones de N1.7. El código oficial configura esto por grupo de acciones: `eef_9d` usa efector final relativo, `joint_position` usa articulación relativa, y `gripper_position` se mantiene absoluto.
2. **`--policy.use_relative_actions=true` de LeRobot** es un interruptor a nivel de framework: aplica una transformación relativa de `action - state` a las dimensiones de articulación. Esto **no es lo mismo que** el Relative EEF del artículo, ni es "la recomendación predeterminada de N1.7". Cuando el reBot Arm se ejecuta en espacio de articulaciones (`NON_EEF`), este interruptor es solo un paso de preprocesamiento opcional de LeRobot; no lo describas como "coherente con el diseño de preentrenamiento de GR00T".
3. Cantidades que no son de articulación, como el gripper, suelen usar `relative_exclude_joints` para mantener el control absoluto. Las trayectorias relativas de articulaciones son más suaves, pero la ejecución a largo plazo puede derivar.

</section>

## 18.8 Capacidades y limitaciones de VLA

<section id="capabilities" className="section-card">
  <div className="section-title">
    <span>Capacidades</span>
    <h2>18.8 Capacidades y limitaciones de VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-08.png" alt="Capabilities and limitations of VLA" />
</div>

### Capacidades

- **Impulsado por lenguaje:** un modelo, muchas tareas; cambia el comportamiento cambiando la instrucción.
- **Robustez visual:** el preentrenamiento a gran escala aporta una mejor comprensión de la escena que un ACT pequeño.
- **Transferencia entre tareas:** las representaciones pueden compartirse entre patrones de frases similares y objetos similares.
- **Predicción de fragmentos de acción:** una inferencia produce múltiples pasos, adecuado para control en tiempo real (con la política de inferencia RTC).

### Limitaciones

- **Alta demanda de cómputo:** N1.7-3B **recomienda más de 40 GB de VRAM para el fine-tuning** (H100 / L40; entrenar solo el proyector + la cabeza DiT alcanza un pico de alrededor de 35 GB; el tutorial oficial de fine-tuning en simulación requiere ≥ 48 GB). La **inferencia** solo necesita 16 GB+ (una RTX 4090 puede ejecutar la inferencia). El fine-tuning completo en una tarjeta de 24 GB es básicamente inviable a menos que se use fine-tuning eficiente como LoRA / PEFT.
- **Formato de datos más complejo:** además de los campos estándar de LeRobot, se requieren un `modality.json` y una etiqueta de encarnación.
- **No es una panacea:** objetos, instrucciones y disposiciones de estaciones de trabajo no cubiertos por el conjunto de entrenamiento aún pueden fallar.
- **Latencia:** la inferencia de modelos grandes es más lenta que ACT; configura `n_action_steps` y los parámetros de RTC adecuadamente.
- **Brecha sim-to-real:** los datos de preentrenamiento están dominados por plataformas humanoides/específicas; los brazos de escritorio requieren suficiente fine-tuning.

### ¿Cuándo elegir ACT y cuándo elegir VLA?

| Escenario | Recomendación |
| :--- | :--- |
| Tarea repetitiva única, dispositivo perimetral, baja latencia | ACT |
| Multitarea, interacción por lenguaje, dispuesto a invertir en GPU y anotación | VLA / GR00T |
| Ya tienes datos de ACT, quieres ampliar a multitarea | Añade lenguaje a los datos existentes de LeRobot -> fine-tuning de GR00T |

</section>

## 18.9 Resumen del capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>18.9 Resumen del capítulo</h2>
  </div>

- Los modelos multimodales fusionan visión, lenguaje y estado en decisiones unificadas.
- VLA añade salida de acción sobre VLM, admitiendo manipulación condicionada por lenguaje.
- ACT es una solución ligera de tarea única; GR00T es una solución VLA de preentrenamiento a gran escala + fine-tuning.
- El preentrenamiento N1.7 usa Relative EEF y `action_horizon=40`; las acciones relativas de articulaciones en LeRobot son un paso de preprocesamiento opcional separado — no confundas ambos.
- El siguiente capítulo presenta cómo aterrizar la VLA general **en esta encarnación específica, el reBot Arm**.

</section>

</div>

---
description: "Una lectura detallada del artículo LBM de TRI: Diffusion Transformers condicionales, preentrenamiento multitarea y eficiencia de datos, con una comparación con LeRobot MultiTask DiT."
title: "LBM y MultiTask DiT: Cómo el preentrenamiento multitarea ayuda a los robots a aprender"
hide_title: true
keywords:
  - Análisis en profundidad de artículos
  - LBM
  - MultiTask DiT
  - Diffusion Transformer
  - Aprendizaje multitarea
  - LeRobot
  - reBot
  - SO-ARM101
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_multi_task_dit
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-03
  author: LiuJunJie
createdAt: '2026-11-03'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_multi_task_dit/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-multi-task-dit-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISIS EN PROFUNDIDAD DE ARTÍCULOS</span>
  <h1 id="paper-reading-multi-task-dit-title">LBM y MultiTask DiT: Cómo el preentrenamiento multitarea ayuda a los robots a aprender</h1>
  <p className="paper-reading-lead">Un examen cuidadoso de los Large Behavior Models para manipulación multitarea y diestra</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Diffusion Transformer</li>
    <li>Preentrenamiento multitarea</li>
    <li>Eficiencia de datos</li>
    <li>Evaluación rigurosa</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2507.05331v1" target="_blank" rel="noopener noreferrer" aria-label="Leer el artículo LBM de TRI en arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Leer el artículo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

¿Pueden las demostraciones de múltiples tareas ayudar a los robots a aprender nuevas tareas con menos datos y manejar cambios en el entorno? Este artículo mantiene fija la arquitectura de la política y utiliza experimentos controlados para medir los beneficios del preentrenamiento.

:::info[Distinguir las fuentes]

El <strong>artículo LBM de TRI</strong> estudia el preentrenamiento multitarea con un objetivo de difusión. <strong>LeRobot MultiTask DiT</strong> es una implementación de código abierto inspirada en este enfoque y también admite flow matching. El <strong>blog de Boston Dynamics Atlas</strong> describe una aplicación al control de todo el cuerpo. Sus plataformas, conjuntos de datos y recetas de entrenamiento difieren; los tamaños de modelo, espacios de acción y resultados deben interpretarse dentro de cada fuente.

:::

## Requisitos previos: de demostraciones a fragmentos de acción

### Entrenamiento e inferencia

![Ilustración de enseñanza: aprender una política a partir de demostraciones de manipulación, luego generar y ejecutar fragmentos de acción a partir de nuevas observaciones](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/guide01-learning-control-en.png)

*Ilustración de enseñanza basada en el artículo y la implementación de LeRobot. El ejemplo explica el flujo de trabajo de aprendizaje.*

<strong>Behavior cloning</strong> utiliza acciones de expertos como supervisión para aprender acciones condicionadas a imágenes, estado propioceptivo e instrucciones de tarea. El entrenamiento proporciona acciones futuras de experto; la inferencia genera un fragmento de acción a partir de observaciones y una instrucción.

Un <strong>Large Behavior Model (LBM)</strong> aquí es una política visuo-motora entrenada con demostraciones multitarea. Codificadores de imagen y texto de <strong>Contrastive Language–Image Pre-training (CLIP)</strong> convierten imágenes e instrucciones en características de condicionamiento, lo que permite que el lenguaje de la tarea guíe la generación de acciones.

### Fragmentos de acción y modelos generativos

<strong>Action chunking</strong> predice varios pasos de control conjuntamente. Tras ejecutar un segmento, la política vuelve a observar y predice otro fragmento. De forma predeterminada, LeRobot genera un nuevo fragmento cuando su cola de acciones está vacía, ejecutando el segmento en cola en lazo abierto. Esto difiere de las predicciones solapadas y el ensamblado temporal de ACT. Consulta [Ventana de acción y segmento de ejecución](#ventana-de-acción-y-segmento-de-ejecución).

Una escena puede admitir varias trayectorias válidas, cuyo promedio puede no ser adecuado. El <strong>modelo generativo de difusión</strong> aprende una distribución condicional sobre trayectorias, generando acciones a partir de ruido aleatorio bajo el condicionamiento de las observaciones.

El tiempo de difusión describe el progreso del desruido, <strong>no el movimiento físico del robot</strong>. A continuación, $t$ denota el tiempo físico y $k$ un paso discreto de desruido.

## Resumen: el valor del preentrenamiento

### Resumen del abstract

El aprendizaje por imitación puede resolver tareas de manipulación complejas, pero los beneficios prácticos de los modelos grandes de robots siguen siendo difíciles de evaluar de forma fiable. Los autores amplían Diffusion Policy a datos multitarea y lo comparan con políticas de tarea única utilizando semillas aleatorias emparejadas y puntuación automatizada en simulación, y pruebas a ciegas con orden de políticas aleatorizado en el mundo real.

El preentrenamiento multitarea seguido de ajuste fino mejora el éxito y la robustez a la vez que reduce las demostraciones necesarias para nuevas tareas. Dentro de los entornos evaluados, conjuntos de datos de preentrenamiento más grandes y diversos generalmente aportan mayores beneficios.

### Comentarios

- <strong>Una arquitectura central fija</strong> ayuda a separar los beneficios del preentrenamiento de los efectos del tamaño del modelo.
- <strong>Las conclusiones sobre eficiencia de datos se refieren al ajuste fino específico de la tarea</strong>, en lugar del aprendizaje zero-shot.
- <strong>Las condiciones iniciales, el orden de los ensayos y la puntuación están controlados</strong>, con análisis estadístico de los resultados.

![Figura 1: diseño del estudio para preentrenamiento multitarea, ajuste fino de tarea única y evaluación rigurosa](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig01-study-overview.png)

*Figura 1 original (PDF p. 2). Izquierda: preentrenamiento seguido de ajuste fino frente a entrenamiento de tarea única. Derecha: ensayos en el mundo real y comparaciones estadísticas.*

## Introducción y trabajos relacionados

### Los tres párrafos de la introducción

<strong>Párrafo 1: La brecha entre las capacidades del hardware y la autonomía motiva el aprendizaje a partir de demostraciones.</strong> El hardware robótico admite comportamientos diversos, pero la autonomía fiable a menudo sigue limitada a tareas simples o entornos estructurados. El behavior cloning sustituye la programación específica de tareas por demostraciones. Su progreso en manipulación rica en contacto, objetos deformables y coordinación bimanual motiva el estudio de la manipulación de propósito general.

<strong>Párrafo 2: Las políticas frágiles de tarea única plantean una pregunta sobre el preentrenamiento.</strong> El behavior cloning de tarea única tiene dificultades fuera de su distribución de entrenamiento. Los LBM utilizan demostraciones multitarea para ampliar la experiencia, pero sigue sin estar claro cuánto de su éxito observado proviene del preentrenamiento multitarea. Esta pregunta motiva una evaluación controlada.

<strong>Párrafo 3: Los autores establecen la escala experimental y exponen tres hallazgos.</strong> Los modelos se entrenan con aproximadamente 1.700 horas de demostraciones y se evalúan en simulación y en aproximadamente 1.800 ensayos controlados en el mundo real. Los tres hallazgos son: el ajuste fino requiere menos demostraciones de la tarea objetivo para alcanzar un rendimiento comparable; con la misma cantidad de datos de la tarea objetivo, los modelos ajustados finamente rinden mejor cuando se agregan a través de tareas; y estos beneficios aumentan cuando las condiciones de despliegue difieren de las de entrenamiento. Las secciones siguientes examinan la evidencia y su alcance.

### Trabajos relacionados

| Área | Trabajos previos | Enfoque de este artículo |
|---|---|---|
| Políticas generalistas de robots y VLA | Ampliar capacidades mediante datos multitarea, representaciones preentrenadas y generación de acciones | Cuantificar los beneficios del preentrenamiento con una arquitectura fija |
| Conjuntos de datos de robots a gran escala | Ampliar datos mediante teleoperación, conjuntos de datos públicos, simulación y dispositivos de mano | Estandarizar observaciones y acciones; estudiar la escala y diversidad de datos |
| Evaluación de robots | Benchmarks de simulación, conjuntos físicos de objetos, robots remotos y métricas de éxito | Comparar políticas usando ensayos a ciegas, orden aleatorizado, reinicios de escena y puntuación por hitos |

El artículo no proporciona una comparación sistemática entre arquitecturas VLA ni establece que DiT siempre supere a las VLA.

## Método central: Diffusion Transformer condicional

### Arquitectura

<strong>Intuición:</strong> Las imágenes localizan objetos, las instrucciones especifican la tarea y la propiocepción describe la configuración actual del robot. La red codifica este contexto y refina iterativamente un fragmento de acción ruidoso en una trayectoria adecuada para la escena.

![Figura 9: DiT condicionado a visión, lenguaje, propiocepción y el paso de desruido](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig09-dit-architecture.png)

*Figura 9 original (PDF p. 12). Codificación de observaciones a la izquierda, desruido de acciones en el centro y módulos de condicionamiento Transformer a la derecha.*

El <strong>codificador de visión</strong> resume cada imagen con su token de clasificación (CLS). Sus pesos se actualizan durante el entrenamiento y se comparten entre cámaras. El <strong>codificador de texto</strong> produce una representación de instrucción de longitud fija; su backbone está congelado, mientras que la proyección posterior es entrenable. El <strong>Diffusion Transformer (DiT)</strong> aplica self-attention a lo largo de la secuencia de acciones y predice ruido para todo el fragmento. Aquí los tokens son unidades de características y pueden ser vectores continuos.

### Dimensiones de observación y acción

El artículo utiliza dos fotogramas de observación con hasta seis vistas RGB, rellenando con ceros las cámaras que faltan. La propiocepción incluye poses del efector final relativas a la base y al otro efector final, más anchos de pinza, en lugar de un vector de ángulos articulares.

Las trayectorias de acción se representan en relación con la observación actual (Secciones IV-D1 y IV-D2 del artículo). La acción de cada mano contiene tres componentes de traslación, una representación de rotación de seis dimensiones y un valor de ancho de pinza. La dimensión de acción bimanual es por tanto:

$$
D_a = 2\times(3+6+1)=20.
$$

$D_a$ es la dimensión de acción por paso de control. La red produce 16 pasos, dando una muestra de $16\times20$ con 320 valores. La representación de rotación 6D utiliza las dos primeras filas de una matriz de rotación; no denota seis articulaciones de rotación. Estas salidas de 20 dimensiones no pueden accionar directamente un controlador articular de un solo brazo.

El artículo concatena 6.732 características de observación a través de los dos fotogramas y utiliza ocho bloques DiT con dimensión oculta 768. LeRobot calcula la dimensión de condicionamiento a partir de su número de cámaras, dimensión de estado y configuración.

### Entrenamiento de difusión: predecir ruido

Sea $A_t^0\in\mathbb{R}^{H\times D_a}$ un fragmento de acción limpio y $O_t$ el contexto visual, de lenguaje y de estado. El entrenamiento muestrea un nivel de ruido $k$ y ruido gaussiano $\epsilon$. La formulación estándar de <strong>denoising diffusion probabilistic model (DDPM)</strong> que sigue explica el objetivo: mezclar acciones con ruido según el nivel de ruido y luego predecir el ruido añadido.

$$
A_t^k=\sqrt{\bar\alpha_k}A_t^0+
\sqrt{1-\bar\alpha_k}\epsilon,\qquad
\mathcal{L}_{\mathrm{diff}}=
\mathbb{E}\left[\left\|\epsilon-\epsilon_\theta(O_t,A_t^k,k)\right\|_2^2\right].
$$

Aquí, $H$ es la longitud del fragmento, $D_a$ la dimensión de la acción, $\bar\alpha_k$ el factor acumulativo de retención de señal en el calendario de ruido, y $\epsilon_\theta$ la predicción de ruido de DiT. La esperanza abarca muestras, ruido y niveles de desruido. La Ecuación (2) del artículo da la pérdida de predicción de ruido y escribe el añadido de ruido como $A_t^k=A_t^0+\epsilon_k$. Aquí, la formulación estándar de DDPM explica la ruta `add_noise` de LeRobot; no es un desarrollo término a término de la expresión del artículo.

<strong>Ejemplo ilustrativo:</strong> Para un valor de acción normalizado de $0.6$, $\bar\alpha_k=0.64$ y ruido $-0.2$, la entrada ruidosa es $0.8\times0.6+0.6\times(-0.2)=0.36$. La red recibe $0.36$ y el contexto de observación; su objetivo es el ruido $-0.2$. Este ejemplo escalar ilustra un elemento; el modelo predice el ruido para todo el fragmento de forma conjunta.

### Cómo DiT utiliza el condicionamiento por observación

Los vectores de acción proyectados forman una secuencia de $H$ tokens. La autoatención conecta los pasos de control, mientras que la <strong>normalización de capa adaptativa (adaLN)</strong> condiciona las características de acción generando escalas y desplazamientos por característica a partir de la escena y la tarea. Esta modulación puede escribirse como:

$$
\operatorname{Mod}(x,c)=
\left(1+s(c)\right)\odot\operatorname{LN}(x)+b(c).
$$

$x$ denota características de acción ocultas; $c$ combina condicionamiento de visión, texto, estado y paso de desruido. $\operatorname{LN}$ es la normalización de capa, $s(c)$ y $b(c)$ son el ajuste de escala y el desplazamiento predichos, y $\odot$ denota multiplicación elemento a elemento. Estos parámetros se difunden a lo largo de la secuencia de acciones, mientras que la atención modela las relaciones entre acciones. LeRobot también predice compuertas para las ramas residuales de atención y perceptrón multicapa (MLP).

<strong>Ejemplo ilustrativo:</strong> Una característica normalizada de $0.5$, un ajuste de escala de $0.2$ y un desplazamiento de $0.1$ producen $1.2\times0.5+0.1=0.7$. Diferentes condiciones pueden producir diferentes escalas y desplazamientos. Estos son parámetros internos de características, en lugar de comandos enviados directamente al robot.

<strong>Arquitectura:</strong> Las observaciones codificadas se concatenan en un vector de condicionamiento de longitud fija que modula las características de acción mediante adaLN. <strong>Interpretación de los autores:</strong> El rendimiento inconsistente sin ajuste fino puede reflejar en parte una guía lingüística débil por parte del pequeño codificador de lenguaje. El artículo no aísla la compresión del condicionamiento en un estudio de ablación, por lo que no establece que la compresión en sí limite las capacidades lingüísticas.

<details>
<summary>Figura 9: Módulo de condicionamiento ampliado</summary>

![Detalle derecho de la Figura 9: condicionamiento adaLN y compuertas residuales](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig09-adaln-detail.png)

*Detalle de la parte derecha de la Figura 9 original (PDF p. 12). Las incrustaciones de condicionamiento generan escalas, desplazamientos y compuertas para las ramas de atención y MLP.*

</details>

### Inferencia: desruido y ejecución

En inferencia, la política codifica las observaciones actuales y aplica repetidamente el mismo DiT para desruir un fragmento de acciones aleatorio. El artículo utiliza muestreo <strong>denoising diffusion implicit model (DDIM)</strong>: el predictor de ruido entrenado actualiza el fragmento de forma iterativa. Tras ejecutar un prefijo seleccionado, la política genera otro fragmento a partir de nuevas observaciones.

<strong>La frecuencia de control, la longitud del fragmento y los pasos de muestreo son distintos.</strong> El artículo genera 16 pasos de acción y vuelve a planificar tras ejecutar ocho. Generar un fragmento requiere múltiples evaluaciones de DiT. El bucle de política reportado de 10 Hz no implica diez fragmentos nuevos por segundo ni garantiza la latencia en otro hardware.

## Entrenamiento: preentrenamiento y ajuste fino

### Robots y datos de demostración

![Figura 10: hardware bimanual, cambios de distribución y tareas de manipulación representativas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig10-platform-and-tasks.png)

*Figura 10 original (PDF p. 14). Arriba a la izquierda: brazos y cámaras. Arriba a la derecha: cambios en el entorno. Abajo: tareas de colocación y manipulación hábil de varios pasos.*

El artículo utiliza dos brazos Franka FR3 con pinzas paralelas y dedos personalizados de estilo finray. La plataforma más reciente tiene dos cámaras de escena y dos cámaras por muñeca, proporcionando seis vistas RGB. Los datos abarcan generaciones de hardware; la evaluación en el mundo real utiliza la plataforma más reciente. Cinemática inversa diferencial y control de impedancia articular siguen objetivos del efector final, con la evitación de colisiones gestionada por el controlador de nivel inferior. El aprendizaje de extremo a extremo sigue dependiendo de estas interfaces de ejecución.

| Fuente de datos | Escala reportada | Función |
|---|---|---|
| TRI-Ramen-Real | 468 horas; 362 tareas; 46,063 demostraciones | Datos internos de robot bimanual en el mundo real |
| TRI-Ramen-Sim | 45 horas; 41 tareas; 7,348 demostraciones | Datos de simulación correspondientes a la plataforma real |
| TRI-Ramen-UMI | 32 horas; 129 tareas; 10,851 demostraciones | Manipulación recopilada fuera del laboratorio con dispositivos de mano |
| OXE-Ramen | Aproximadamente 1,150 horas | Subconjunto curado y estandarizado de datos públicos de Open X-Embodiment |

Las tres primeras fuentes suman aproximadamente 545 horas, 532 tareas y 64,262 demostraciones. Incluir OXE-Ramen da aproximadamente 1,695 horas. El recuento de 532 tareas cubre solo los datos recopilados internamente.

### Alineación y normalización de datos

Las fuentes de datos requieren marcos de coordenadas, unidades de pose, anchos de pinza y procesamiento de imágenes coherentes. El artículo convierte datos de un solo brazo a un formato bimanual rellenando con ceros el brazo que falta e intercambiando lados aleatoriamente. Un muestreo ponderado evita que las fuentes más grandes dominen los lotes.

Las acciones futuras más lejanas suelen abarcar rangos más amplios. El artículo calcula cuantiles por separado según la dimensión de la característica, el paso temporal relativo y la fuente de datos. Mapea el intervalo del percentil 2 al 98 a $[-1,1]$ y recorta a $[-1.5,1.5]$; la representación de rotación 6D se excluye de este escalado.

<strong>Diferencia de LeRobot:</strong> La versión fijada usa por defecto `MIN_MAX` para estados y acciones y `MEAN_STD` para imágenes. No reproduce automáticamente la normalización por cuantiles específica de la fuente y del paso temporal del artículo. Estas diferencias de preprocesamiento también afectan a los resultados.

### Configuración de entrenamiento

| Fase | Inicialización y datos | Tasa de aprendizaje | Tamaño de lote global | Pasos de entrenamiento |
|---|---|---|---|---|
| Preentrenamiento multitarea | Mezcla completa de datos; codificadores de visión y texto preentrenados con CLIP | `3e-4` | 2,560 | 48,000 |
| Ajuste fino de tareas en el mundo real | Pesos LBM más demostraciones de la tarea objetivo | `2e-5` | 320 | 30,000 |
| Ajuste fino de tareas en simulación | Pesos LBM más demostraciones de la tarea objetivo | `2e-5` | 320 | 10,000 |
| Línea base de tarea única en el mundo real | Sin preentrenamiento multitarea de robot; misma inicialización CLIP | `2e-5` | 320 | 100,000 |
| Línea base de tarea única en simulación | Misma inicialización; solo demostraciones de la tarea objetivo | `2e-5` | 320 | 25,000 |

El codificador de visión usa una décima parte de la tasa de aprendizaje de los otros componentes entrenables. Las imágenes de entrenamiento se redimensionan a `256×342` (alto × ancho), se recortan aleatoriamente a `224×224` y se someten a aumentos de color. La inferencia utiliza un recorte centrado.

Entrenar “desde cero” significa <strong>sin preentrenamiento multitarea de robot</strong>; se mantiene la inicialización CLIP. Las líneas base de tarea única reciben más pasos de entrenamiento en la tarea objetivo.

## Metodología de evaluación

### Divisiones de tareas y puntuación

![Ilustración didáctica: las tareas vistas frente a las no vistas y las condiciones de prueba cambiadas son ejes separados; la finalización de la tarea difiere del éxito completo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/guide03-evaluation-en.png)

*Ilustración didáctica basada en el artículo. La rúbrica de cuatro pasos para colocar la manzana explica las métricas y no es un registro de una tarea evaluada.*

El panel superior separa <strong>tareas vistas/no vistas</strong> del <strong>cambio de distribución</strong>. Las tareas no vistas aún pueden proporcionar demostraciones para ajuste fino. El cambio de distribución se refiere a cambios en las condiciones de prueba, como distractores, combinaciones de objetos o estaciones de robot.

El panel inferior utiliza cuatro hitos para distinguir la <strong>tasa de éxito (SR)</strong> de la <strong>finalización de la tarea (TC)</strong>. Si la manzana llega al cuenco pero la pinza no la ha soltado, se completan tres de cuatro hitos: TC es 75%, pero la prueba no tiene éxito. Este es un ejemplo ilustrativo de puntuación.

$$
\mathrm{SR}=\frac{N_{\mathrm{success}}}{N_{\mathrm{trials}}},\qquad
\mathrm{TC}_i=\frac{\sum_{j=1}^{M}m_{ij}}{M}.
$$

$N_{\mathrm{trials}}$ cuenta las pruebas y $N_{\mathrm{success}}$ cuenta las pruebas completamente exitosas. $M$ es el número de hitos; $m_{ij}\in\{0,1\}$ indica si la prueba $i$ completa el hito $j$.

### Enmascaramiento, aleatorización y reinicios

![Figura 8: las superposiciones de imágenes ayudan a restaurar las condiciones iniciales de prueba](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig08-evaluation-overlay.png)

*Figura 8 original (PDF p. 11). Izquierda: una superposición de la escena objetivo y la actual ayuda a los reinicios. Centro: escena objetivo. Derecha: escena actual.*

Los evaluadores desconocen la identidad de la política. Las políticas se ejecutan en orden aleatorio desde condiciones iniciales emparejadas, con reinicios después de cada rollout para reducir sesgos de orden, iluminación y colocación. La simulación utiliza semillas aleatorias emparejadas; los reinicios en el mundo real usan superposiciones de imágenes. Los estados iniciales de prueba no simplemente reproducen demostraciones individuales de entrenamiento.

La evaluación en el mundo real incluye tres tareas vistas y cinco no vistas; la simulación incluye 16 tareas vistas y ocho no vistas. Cada combinación tarea–política–condición está programada para 50 rollouts en el mundo real o 200 en simulación. Algunas combinaciones en simulación tienen menos de 200 debido a datos faltantes. El análisis abarca aproximadamente 1,800 rollouts en el mundo real y más de 47,000 en simulación.

### Diagramas de violín y comparaciones estadísticas

Los violines de SR muestran posteriores bayesianos sobre la verdadera probabilidad de éxito, estimados a partir de resultados de éxito/fracaso. Los gráficos de TC por tarea individual muestran principalmente distribuciones empíricas de finalización; algunos gráficos agregados y de eficiencia de datos en cambio muestran posteriores sobre la finalización media. Estos representan cantidades diferentes.

El artículo utiliza la <strong>Compact Letter Display (CLD)</strong> para resumir comparaciones estadísticas. Los grupos que <strong>no comparten ninguna letra</strong> difieren de forma significativa. Compartir una letra significa que no se detectó una diferencia significativa, más que un rendimiento equivalente. Interpreta las letras junto con el pie de figura, la prueba estadística y el alcance de la comparación.

## Resultados y limitaciones

### Finalización en tareas no vistas

![Figure 4: success rate, task completion, and fine-tuning data experiments on unseen tasks](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig04-unseen-results.png)

*Figura 4 original (PDF p. 7). Tareas no vistas en condiciones nominales. Arriba: SR. Abajo: TC. Columnas: tareas en el mundo real, tareas en simulación y eficiencia de datos en simulación. Rojo: LBM preentrenado y ajustado por fine-tuning. Gris: línea base de tarea única.*

El éxito completo sigue siendo difícil en tareas complejas, pero los LBM ajustados por fine-tuning generalmente completan más hitos. Entre cinco tareas complejas no vistas en el mundo real, <strong>TC es significativamente mayor que la línea base de tarea única en cuatro</strong>, mientras que SR es significativamente mayor solo en dos.

Las ganancias agregadas son más consistentes, pero algunas diferencias individuales no son significativas o favorecen a la línea base. Las políticas pueden permanecer inactivas al inicio o intentar la tarea equivocada, por lo que los resultados individuales y los casos de fallo importan.

### Robustez: ¿Persisten las ganancias cuando cambian las condiciones de prueba?

Los cambios de distribución en simulación alteran principalmente la apariencia: mapas de iluminación del entorno no vistos, luces y parámetros de cámara diferentes, y texturas o colores cambiados de objetos y mesa. Algunas escenas también incluyen distractores. Los autores comparan los LBM ajustados por fine-tuning con las líneas base de tarea única bajo estos cambios para comprobar si las ganancias del preentrenamiento persisten.

![Figure 6: success rate, task completion, and fine-tuning data comparisons for unseen simulation tasks under distribution shift](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig06-distribution-shift.png)

*Figura 6 original (PDF p. 9). Arriba: SR. Abajo: TC. Izquierda: tareas individuales y resultados agregados. Derecha: fracciones variables de datos de la tarea objetivo. Rojo: LBM preentrenado y ajustado por fine-tuning. Gris: línea base de tarea única. Compárese con los paneles de simulación de la Figura 4; la Figura 6 no contiene resultados del mundo real.*

Para cinco tareas complejas no vistas en simulación bajo cambio de distribución, <strong>TC es significativamente mayor que la línea base en cuatro tareas</strong>, pero SR es significativamente mayor solo en una. En tareas vistas en simulación, el número con SR significativamente mayor aumenta de 3/16 en condiciones nominales a 10/16 bajo cambio de distribución; la brecha agregada en la tasa de éxito también se amplía (Sección III-A y Figura 2).

Estos hallazgos respaldan una <strong>mayor robustez de los LBM ajustados por fine-tuning bajo los cambios probados</strong>, aunque el rendimiento absoluto disminuye en la mayoría de las tareas tras los cambios. Completar más hitos puede seguir dejando que el éxito completo sea poco frecuente. Los cambios de apariencia simulados también difieren de los cambios reales en la estación y los objetos.

### Eficiencia de datos en nuevas tareas

![Figure 5: task completion on SetBreakfastTable with different fine-tuning data fractions](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig05-data-efficiency.png)

*Figura 5 original (PDF p. 8). Eficiencia de datos en el mundo real: el eje vertical es TC. Cada grupo compara LBM ajustados por fine-tuning con diferentes fracciones de datos con una línea base de tarea única entrenada con todos los datos de la tarea objetivo.*

En la tarea del mundo real <strong>SetBreakfastTable</strong>, un LBM ajustado por fine-tuning con el 15% de los datos de la tarea objetivo logra una <strong>TC</strong> significativamente mayor que la línea base de tarea única entrenada con todos ellos. Este resultado se refiere a la finalización, más que a la tasa de éxito.

La interpolación de las curvas agregadas para tareas complejas en simulación sugiere que un rendimiento comparable puede requerir menos del 30% de los datos necesarios para entrenar desde cero. Este resultado y el 15% en el mundo real provienen de experimentos diferentes; ninguno establece una proporción fija de ahorro de datos para cada tarea.

### Escala y diversidad de los datos de preentrenamiento

![Figure 7: mean task completion on unseen simulation tasks for different pretraining subsets](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/fig07-pretraining-scale.png)

*Figura 7 original (PDF p. 10). Eje horizontal: fracción de datos de fine-tuning. Eje vertical: TC media en cinco tareas no vistas en simulación. Las curvas corresponden a diferentes mezclas de preentrenamiento.*

Con la misma fracción de datos de fine-tuning, datos de preentrenamiento más diversos generalmente producen un mejor rendimiento, especialmente cuando los datos de la tarea objetivo son escasos. El eje horizontal varía los datos de fine-tuning. Estos experimentos limitados con subconjuntos no establecen ni una ley de escalado universal ni beneficios por aumentar el número de parámetros del modelo.

### Limitaciones

- <strong>Las ganancias sin fine-tuning son inconsistentes.</strong> Los LBM preentrenados no superan de forma consistente a las políticas de tarea única; los autores sugieren que esto puede reflejar en parte limitaciones en la guía por lenguaje del pequeño codificador de lenguaje.
- <strong>El alcance experimental es limitado.</strong> Los resultados en una plataforma bimanual concreta no se generalizan directamente a robots de un solo brazo o a hogares arbitrarios.
- <strong>La aleatoriedad del entrenamiento no se evalúa por completo.</strong> Los diagramas de violín capturan principalmente la incertidumbre de evaluación para checkpoints fijos, más que la variación entre ejecuciones de entrenamiento independientes.
- <strong>El preentrenamiento contenía un error de normalización.</strong> Algunos datos usaron parámetros de otra fuente, y no se repitieron todos los experimentos principales. Tras la corrección, experimentos suplementarios mejoraron el rendimiento bajo los cambios de distribución en simulación probados.
- <strong>Filtrar fotogramas estacionarios tiene efectos mixtos.</strong> Eliminar segmentos iniciales de bajo movimiento mejoró algunas políticas de simulación de tarea única pero hizo que algunos modelos preentrenados seleccionaran la tarea equivocada con más frecuencia. Por lo tanto, no se aplicó de forma uniforme.

## Implementación y aplicación en LeRobot

La siguiente comparación usa el commit `f5c9bc0` (enlaces a la fuente más abajo). LeRobot MultiTask DiT sigue el enfoque LBM DiT condicional, pero su configuración, preprocesamiento y resultados de entrenamiento deben interpretarse por separado.

### Comparación de configuración

| Componente | Artículo de TRI | Valores predeterminados fijados de LeRobot |
|---|---|---|
| Objetivo | Predicción de ruido de difusión; muestreo DDIM | `diffusion`; también admite `flow_matching` |
| Backbones de imagen y texto | CLIP; visión entrenable, texto congelado | Mismo enfoque; por defecto `openai/clip-vit-base-patch16` |
| Tamaño de DiT | 8 capas; dimensión oculta 768 | 6 capas; dimensión oculta 512; 8 cabezas de atención |
| Historial de observación | 2 fotogramas | `n_obs_steps=2` |
| Salida de acción | 16 pasos, cada uno de 20 dimensiones | `horizon=32`; dimensión de acción desde el conjunto de datos |
| Segmento de ejecución | Ejecutar 8 pasos antes de volver a planificar | `n_action_steps=24`; segmentar usando el desplazamiento de observación y luego encolar |
| Cámaras | Estandarizado a 6 vistas; vistas faltantes rellenadas con ceros | Recuento inferido a partir de las características de entrada; codificador de visión compartido por defecto |
| Normalización | Cuantiles por fuente, paso de tiempo relativo y dimensión de característica | Estados y acciones: `MIN_MAX`; imágenes: `MEAN_STD` |

De forma predeterminada, `num_inference_steps=None` recurre a `num_train_timesteps=100`, dando 100 pasos de eliminación de ruido. Las incrustaciones posicionales rotatorias (RoPE) están activadas por defecto. También se admiten incrustaciones posicionales absolutas aprendibles; esta versión permite ambas simultáneamente.

El número de parámetros depende del número de cámaras, el número de capas y la dimensión oculta. Los 450M de parámetros, el horizonte de predicción de 48 pasos y el segmento de ejecución de 24 pasos del blog de Boston Dynamics describen la configuración de Atlas y no se aplican a todas las configuraciones de LeRobot.

### Ventana de acción y segmento de ejecución

![Teaching illustration: with two observation frames, the 32-step output window contains one history-alignment step, 24 execution steps, and seven steps unused in the current execution segment](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/multi_task_dit/guide02-action-window-en.png)

*Ilustración didáctica basada en el recorte de acciones en la implementación fijada de LeRobot. La ventana de 32 pasos y el segmento de ejecución de 24 pasos son los valores predeterminados de esta versión.*

Con dos fotogramas de observación, la ventana de acción comienza en $t-1$. `_generate_actions` toma los índices `1:25`, colocando 24 acciones desde $t$ hasta $t+23$ en la cola de ejecución. La longitud de la ventana $H$, el número de observaciones $N_o$ y la longitud de ejecución $N_e$ deben satisfacer:

$$
N_o-1+N_e\leq H,
$$

Para $N_o=2$, $N_e=24$ y $H=32$, esto da $2-1+24\leq32$.

Cuando el muestreo de demostraciones y la ejecución de acciones se ejecutan ambos a 30 Hz, 24 pasos corresponden a los 0,8 segundos ilustrados; a 10 Hz, abarcan aproximadamente 2,4 segundos. Los segmentos de ejecución más cortos incorporan nuevas observaciones antes pero requieren generación más frecuente. El tiempo real también depende de la latencia de inferencia y comunicación; los parámetros de la ventana no fijan la frecuencia de control.

### Inicialización del entrenamiento y conclusiones del artículo

LeRobot puede inicializar sus codificadores de imagen y texto a partir de pesos CLIP preentrenados y entrenar una política de acción con tus propias demostraciones de robot. Esto no proporciona la experiencia de preentrenamiento multitarea de robot de TRI. Probar los beneficios de transferencia del artículo requiere comparar el entrenamiento de tarea única con el preentrenamiento multitarea seguido de fine-tuning, controlando los datos de la tarea objetivo, las interfaces de acción y las condiciones de prueba.

Para la adaptación a reBot o SO-ARM101, primero comprueba los estados del conjunto de datos, las acciones, las cámaras, las marcas de tiempo y las instrucciones de la tarea, y luego valida la canalización de control de tarea única.

## Interpretación de las conclusiones

El artículo utiliza una arquitectura de política fija y una evaluación controlada para probar los beneficios del preentrenamiento multitarea. En las tareas evaluadas, el preentrenamiento seguido de ajuste fino mejora el rendimiento agregado y reduce las demostraciones de la tarea objetivo necesarias para lograr un rendimiento comparable. Algunas ventajas se vuelven más pronunciadas cuando cambian las condiciones de prueba.

Los resultados respaldan el preentrenamiento con demostraciones diversas dentro de límites claros: las ganancias dependen de la tarea y de las condiciones de ajuste fino; una mejor finalización no implica necesariamente un éxito completo; y los modelos sin ajuste fino no superan de forma consistente a las políticas de una sola tarea. Comprender la contribución requiere conectar la generación de acciones, las comparaciones experimentales y el alcance de la evidencia.

## Referencias

1. TRI LBM Team. [A Careful Examination of Large Behavior Models for Multitask Dexterous Manipulation](https://arxiv.org/abs/2507.05331v1), 2025.
2. TRI. [LBM project page](https://toyotaresearchinstitute.github.io/lbm1/).
3. Hugging Face. [Multitask DiT Policy](https://huggingface.co/docs/lerobot/main/en/multi_task_dit).
4. Hugging Face / Bryson Jones. Pinned [configuration](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/multi_task_dit/configuration_multi_task_dit.py), [model](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/multi_task_dit/modeling_multi_task_dit.py), and [processor](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/multi_task_dit/processor_multi_task_dit.py).
5. Boston Dynamics. [Large Behavior Models and Atlas Find New Footing](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/). DiT y flow matching para Atlas.
6. Bryson Jones. [Dissecting and Open-Sourcing Multitask Diffusion Transformer Policy](https://brysonkjones.substack.com/p/dissecting-and-open-sourcing-multitask-diffusion-transformer-policy). Notas de arquitectura e implementación del autor de la implementación de código abierto.

</div>

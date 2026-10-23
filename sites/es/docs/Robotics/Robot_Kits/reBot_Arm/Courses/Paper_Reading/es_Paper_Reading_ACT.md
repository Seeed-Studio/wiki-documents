---
description: "Un análisis en profundidad de los fundamentos de aprendizaje por imitación de ACT, el sistema de teleoperación bimanual ALOHA, el fraccionamiento de acciones (action chunking), el ensamblado temporal y la red CVAE."
title: "ACT — Manipulación Bimanual de Bajo Costo"
hide_title: true
keywords:
  - Análisis en profundidad de artículo
  - act
  - Aprendizaje de robots
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_act
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_act/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-act-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISIS EN PROFUNDIDAD DE ARTÍCULO</span>
  <h1 id="paper-reading-act-title">ACT — Manipulación Bimanual de Bajo Costo</h1>
  <p className="paper-reading-lead">Aprendizaje de manipulación bimanual de grano fino con hardware de bajo costo</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Aprendizaje por imitación</li>
    <li>ALOHA</li>
    <li>Fraccionamiento de acciones (action chunking)</li>
    <li>Ensamblado temporal</li>
  </ul>
</section>

## Requisitos previos

### ¿Qué es el aprendizaje por imitación?

- El **aprendizaje por imitación** parte de una idea sencilla: demostrar la tarea y luego dejar que el robot aprenda a imitarla.

    - Una persona teleopera el brazo mientras el sistema registra las observaciones de las cámaras y las acciones ejecutadas. Estas demostraciones entrenan un modelo que después puede actuar a partir de imágenes sin un operador humano.

![ACT: ¿Qué es el aprendizaje por imitación? (Figura 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-07-en.png)

#### Observación: el mundo que ve el robot

- Una observación es información sobre el entorno obtenida a través de sensores: los ojos del robot. Para reBot Arm, esto incluye:

    - La vista global de la **cámara frontal / cenital** de los objetos y sus posiciones sobre la mesa.

    - La vista en primer plano de la **cámara de muñeca** de la relación entre la garra y su objetivo.

#### Estado: la propia configuración del robot

- El estado describe al propio robot en lugar de su entorno. Es análogo a la propiocepción: saber dónde está tu mano o cuánto está doblado tu codo con los ojos cerrados. Para reBot Arm, el estado incluye:

    - Ángulos actuales de las seis articulaciones.

    - La apertura actual de la garra.

#### Acción: lo que se ordena hacer al robot

- Una acción es la orden de salida del modelo hacia el brazo. En reBot Arm, estado y acción tienen la misma dimensionalidad: seis articulaciones más una garra. El estado describe la configuración actual; la acción especifica la configuración objetivo:

    - Ángulos objetivo para las seis articulaciones.

    - Apertura objetivo de la garra.

![ACT: Acción: lo que se ordena hacer al robot (Figura 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-09-en.png)

### Acciones de un solo paso y fragmentos de acción

#### Acciones de un solo paso: una decisión por fotograma

- Para cada imagen, predecir los siguientes objetivos de articulaciones, ejecutarlos y obtener otra imagen para la siguiente predicción.

    - Pequeños errores de predicción cambian la posición del brazo y pueden alejar las observaciones posteriores de la distribución de entrenamiento. Entonces los errores posteriores crecen. En el robot, esto aparece como vibración, vacilación y paradas repetidas, como si reconsideraras tu siguiente paso a mitad de cada zancada.

#### Fragmentos de acción: predecir una secuencia de una vez

- Predecir una breve secuencia futura, como 50 objetivos de articulaciones durante el siguiente segundo, en lugar de solo la siguiente acción.

    - **Menores requisitos de frecuencia de inferencia.** Una predicción cubre un intervalo corto, lo que permite un movimiento más suave incluso cuando la inferencia es relativamente lenta, algo importante para el despliegue en hardware modesto.

    - **Más estructura temporal.** Predecir varias acciones futuras anima al modelo a representar la secuencia prevista, haciendo menos probable que distracciones momentáneas lo descarrilen.

    - **Movimiento más suave y coherente.**

![ACT: Fragmentos de acción: predecir una secuencia de una vez (Figura 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-05-en.png)

Los fragmentos más largos no siempre son mejores. Si un objeto se mueve durante la ejecución, las predicciones lejanas pueden quedar desactualizadas. Los sistemas prácticos equilibran esto ejecutando parte de un fragmento en lazo abierto y luego observando y prediciendo de nuevo.

### Entrenamiento, inferencia y evaluación

![ACT: Entrenamiento, inferencia y evaluación (Figura 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-04-en.png)

#### Entrenamiento: aprendizaje offline

El entrenamiento es un proceso **offline** posterior a la recolección. El brazo puede estar apagado mientras la GPU hace el trabajo.

- Entrada: secuencias grabadas de imágenes, estados y acciones.

- Proceso: ajustar repetidamente los parámetros del modelo para acercar las acciones predichas a las demostraciones humanas.

- Salida: pesos del modelo entrenado.

La **pérdida (loss)** sigue el ajuste del entrenamiento: una pérdida decreciente significa que las predicciones se vuelven más similares a las demostraciones.

#### Inferencia: decisiones online

- La inferencia es **desplegar el modelo en el robot real para trabajar en tiempo real**: leer imágenes de cámara y estados de articulaciones → predecir un fragmento de acción → enviarlo a los motores. Las predicciones deben llegar en decenas de milisegundos, o el brazo se entrecortará.

#### Evaluación: medir el éxito de la tarea

Un modelo entrenado con baja pérdida aún puede fallar en la tarea. **Una pérdida baja mide la precisión de la imitación, no la finalización de la tarea.** Evalúa en el robot real:

- Define criterios de éxito claros, como que el bloque termine dentro de la caja.

- Varía las condiciones iniciales, incluida la posición del objeto y la iluminación, a lo largo de N ensayos.

- Mide la tasa de éxito: 14 éxitos en 20 ensayos dan un 70%.

Los fallos se convierten en entrada para la siguiente ronda de recolección. Añade demostraciones para las situaciones que fallan y vuelve a entrenar. Esto cierra el ciclo datos–entrenamiento–evaluación utilizado en el aprendizaje práctico de robots.

---

## Contexto del artículo

Autores: Tony Z. Zhao¹, Vikash Kumar³, Sergey Levine², Chelsea Finn¹. Afiliaciones: ¹ Universidad de Stanford; ² UC Berkeley; ³ Meta.

Contexto del artículo: Publicado en 2023 por un equipo conjunto de Stanford y Berkeley, este algoritmo ligero de aprendizaje por imitación combina redes convolucionales y Transformers. La plataforma experimental es el sistema de teleoperación bimanual ALOHA de seis GDL, con cámaras monoculares en las dos garras y una cámara monocular cenital global.

![ACT: Aprendizaje de manipulación bimanual de grano fino con hardware de bajo costo (Figura 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-12.png)

---

## Resumen

![ACT: Resumen (Figura 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-03.png)

- Explicación:

La manipulación fina, como pasar una brida de cable o insertar una batería, es difícil para los robots. Requiere precisión, fuerzas de contacto coordinadas y retroalimentación visual en lazo cerrado. Las soluciones convencionales a menudo dependen de robots costosos, sensores precisos o una calibración cuidadosa. ¿Puede el aprendizaje permitir que hardware económico y menos preciso realice estas tareas?

El artículo presenta un sistema de bajo costo que recopila demostraciones reales mediante una interfaz de teleoperación personalizada para aprendizaje por imitación directo de extremo a extremo. Los desafíos incluyen errores de política acumulativos y demostraciones humanas no estacionarias, especialmente en tareas de alta precisión. El algoritmo propuesto, Action Chunking with Transformers (ACT), aprende un modelo generativo de secuencias de acciones. Con solo 10 minutos de demostraciones, el robot puede realizar seis tareas desafiantes del mundo real, como abrir vasos de condimentos translúcidos e insertar baterías, con tasas de éxito que alcanzan el 80–90%.

- Comentario:

El aprendizaje por imitación convencional a menudo repite “observar → predecir una acción → ejecutar → observar de nuevo”. En tareas de precisión, incluso un pequeño error puede mover al robot a un estado ausente de las demostraciones, haciendo que las predicciones posteriores se desvíen aún más. Esto es el **error acumulativo**.

La idea central de ACT es el **fraccionamiento de acciones (action chunking)**: generar una secuencia futura continua en lugar de una acción cada vez. Esto favorece la continuidad temporal y reduce el horizonte efectivo de decisión sobre el que se acumulan los errores.

Los Transformers se adaptan bien a las relaciones de secuencia: pueden aprender cómo se relacionan las acciones a lo largo del tiempo, en lugar de considerar solo lo que el robot debería hacer en el instante actual.

**ACT permite que el robot prediga de una vez una breve secuencia de acciones.**

---

## Introducción

- **Párrafo 1: el problema.** Las tareas delicadas que implican pellizcar, hacer palanca o rasgar, como abrir un vaso o insertar una batería, requieren retroalimentación visual precisa y coordinación mano–ojo para que las acciones puedan ajustarse a medida que el entorno cambia.

- **Párrafo 2: limitaciones anteriores y el enfoque propuesto.** Trabajos como [Grasping with Chopsticks](https://arxiv.org/abs/2011.06719) y [Goal-conditioned dual-action imitation learning](https://arxiv.org/abs/2203.09749) dependen de hardware costoso o de una calibración cuidadosa. Los autores, en cambio, buscan un sistema **asequible, accesible y reproducible**: imágenes RGB ordinarias → red neuronal → acciones del robot.

- **Párrafo 3: la plataforma.** El hardware experimental cuesta menos de 20 000 USD.

- **Párrafo 4: ACT aborda los errores acumulativos en el aprendizaje por imitación.**

Incluso con buenas demostraciones, las predicciones de acciones pueden contener pequeños errores. En tareas de precisión, un error puede mover al robot a un estado distinto de los del entrenamiento, haciendo que las predicciones posteriores sean progresivamente menos fiables.

Los autores se inspiran en el **fraccionamiento de acciones (action chunking)** en psicología: las personas organizan los movimientos continuos en unidades coherentes en lugar de tratar cada instante como una acción independiente.

Aprendizaje por imitación convencional: **observación actual → siguiente acción**.

ACT: **observación actual → acciones para los próximos k pasos de tiempo**.

Predecir una breve secuencia acorta efectivamente el horizonte de decisión en **un factor de k**, reduciendo el efecto de los errores que se acumulan a lo largo de decisiones individuales.

El fraccionamiento también ayuda a explicar irregularidades en las demostraciones humanas, como las pausas. Un modelo de secuencia puede interpretar una pausa en el contexto de los movimientos antes y después de ella, en lugar de tratar una observación instantánea como suficiente para explicarla.

Para una ejecución más suave, el **ensamblado temporal** combina fragmentos superpuestos predichos en distintos momentos. En lugar de elegir solo una predicción para el instante actual, ACT las mezcla con pesos, reduciendo la vibración.

La arquitectura utiliza un **Transformer** para las secuencias de acciones y un **VAE condicional (CVAE)** para la variabilidad de las demostraciones. Una tarea puede tener varias trayectorias, velocidades u órdenes de acción válidos; el CVAE modela esta distribución en lugar de suponer una única secuencia correcta.

**Segmentación de acciones con Transformers: ACT.**

![ACT: Introducción (Figura 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-02-en.png)

- **Párrafo 5: las dos contribuciones son una plataforma de teleoperación de bajo costo y el algoritmo ACT.**

El artículo aborda dos problemas conectados de aprendizaje robótico:

**1. ¿De dónde vienen las demostraciones?**

Un sistema de teleoperación de bajo costo permite a las personas realizar manipulación fina directamente y recopilar demostraciones de alta calidad de forma eficiente.

**2. ¿Cómo aprende el robot a partir de ellas?**

ACT combina segmentos de acción, Transformers, un CVAE y ensamblado temporal para aprender manipulación fina con retroalimentación visual. La contribución es la **combinación de hardware y aprendizaje**: **teleoperación humana → demostraciones → entrenamiento de ACT → ejecución autónoma del robot**.

Con aproximadamente **diez minutos, o unas 50 trayectorias humanas**, el sistema aprende seis tareas de manipulación fina en el mundo real, incluyendo abrir recipientes de condimentos e insertar baterías. Algunas tareas alcanzan un éxito del **80–90%**.

---

## Trabajo relacionado

Esta sección revisa enfoques anteriores de clonación de comportamiento y sus limitaciones. Léela para obtener contexto; es opcional para los objetivos prácticos de aprendizaje de esta guía.

---

## ALOHA: Un sistema de teleoperación bimanual de bajo costo

### Objetivos de diseño y hardware

![ACT: Objetivos de diseño y hardware (Figura 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-14.png)

Los autores definen cinco principios de diseño para admitir manipulación fina mientras reducen la barrera de reproducción en laboratorios ordinarios.

ALOHA utiliza dos brazos **ViperX de 6 GDL** como **robots seguidores**, en lugar de brazos industriales costosos. Cada ViperX cuesta alrededor de 5.600 USD y tiene una precisión de posicionamiento de aproximadamente **5–8 mm**.

### Teleoperación líder–seguidor

Una decisión de diseño central es la teleoperación **líder–seguidor**. El operador mueve el líder con la mano, mientras que el seguidor ViperX sigue su movimiento articular.

**Mover el líder → Leer sus ángulos articulares → Mover el seguidor de forma sincrónica → Realizar la tarea.**

Esto es un **mapeo en el espacio articular**, con varias ventajas:

- No se requiere un cálculo frecuente de cinemática inversa.

- Comportamiento más estable cerca de singularidades cinemáticas.

- Menor latencia de control.

- Un mapeo directo del movimiento del operador al robot.

### Cámaras, recopilación de datos y capacidades

ALOHA registra las demostraciones usando **cuatro cámaras RGB ordinarias**:

![ACT: Cámaras, recopilación de datos y capacidades (Figura 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-01.png)

Los autores agrupan ampliamente las tareas en tres categorías:

---

## Segmentación de acciones y ensamblado temporal

![ACT: Transformer-Based Segmentación de acciones y ensamblado temporal (Figura 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-15.png)

### Segmentación de acciones: predecir una secuencia corta

El aprendizaje por imitación convencional predice una siguiente acción a partir del estado actual: avanzar un poco, luego bajar un poco. Un pequeño error puede cambiar la siguiente observación y acumularse hasta que la tarea falle. La **segmentación de acciones** es la respuesta central de ACT a este problema.

**Predecir una secuencia futura continua en lugar de una sola acción.** Con `chunk_size = 4`, una política de un solo paso toma decisiones en `t=0→a0, t=1→a1, t=2→a2, t=3→a3`; ACT predice `[a0,a1,a2,a3]` en `t=0`. Esta secuencia es un **segmento de acción**. La política cambia de `πθ(at|st)` a `πθ(at:t+k|st)`, donde `k` es la longitud del segmento.

![ACT: Fragmentación de acciones: pensar en una secuencia corta en lugar de un paso cada vez (Figura 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-00-en.png)

La intuición es considerar una secuencia corta en lugar de improvisar en cada instante. Al insertar una batería, las personas organizan de forma natural “acercarse → alinear → insertar” como un movimiento coherente en lugar de una larga lista de correcciones de un milímetro. La segmentación enseña esa estructura al robot.

También reduce el **horizonte efectivo por un factor de k**. Una tarea de 100 pasos de tiempo requiere 100 decisiones de un solo paso; con `chunk_size=10`, puede considerarse como menos segmentos continuos. Mirar varios pasos hacia adelante hace que un pequeño error aislado sea menos propenso a descarrilar inmediatamente el resto de la secuencia.

Las demostraciones humanas también incluyen pausas, vacilaciones y cambios de velocidad. Aprender “acercarse → pausar → ajustar → insertar” como una secuencia hace que estas relaciones sean más fáciles de representar que aprender instantes aislados.

https://github\.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/modeling\_act\.py

### Ensamblado temporal

ACT predice una secuencia futura corta, pero **¿qué ocurre si el entorno cambia mientras se está ejecutando?**

Con el ensamblado temporal, ACT observa y predice un nuevo segmento **en cada paso de tiempo**, en lugar de ejecutar ciegamente un segmento completo. Para `chunk_size = 4`, las predicciones podrían verse así:

`t=0 → [a0, a1, a2, a3]`
`t=1 → [a1', a2', a3', a4']`
`t=2 → [a2'', a3'', a4'', a5'']`

El mismo instante futuro por lo tanto recibe múltiples predicciones. En `t=2`, por ejemplo:

`a2`, predicha en `t=0`.
`a2'`, predicha en `t=1`.
`a2''`, predicha en `t=2`.

En lugar de seleccionar solo una, ACT toma una **combinación ponderada de predicciones para el mismo paso de tiempo** para obtener la acción ejecutada. Esto es el **ensamblado temporal**.

> El modelo revisita la misma acción futura en diferentes momentos usando distintas observaciones, y luego combina esas estimaciones.
> 
> 

![ACT: Ensamblado temporal (Figura 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-08-en.png)

Seguir solo la predicción más reciente puede causar saltos bruscos. El promedio ponderado suaviza la ejecución. Principalmente aborda dos problemas:

El artículo utiliza pesos exponenciales:

$w_i = \exp(-m i)$

**La segmentación de acciones mira varios pasos hacia adelante. El ensamblado temporal observa y predice repetidamente, y luego combina suavemente estimaciones superpuestas.**

### Modelado de demostraciones humanas con un CVAE

La segmentación de acciones predice una secuencia y el ensamblado temporal suaviza la ejecución, pero queda otro problema: **las demostraciones humanas no son idénticas**.

Al insertar una batería, distintos operadores pueden:

- Acercarse desde distintos ángulos.

- Moverse a diferentes velocidades.

- Ajustar hacia la izquierda antes de insertar.

- Alinear directamente e insertar.

Incluso **la misma persona** produce trayectorias diferentes en intentos repetidos. Por lo tanto, una observación dada no tiene solo una secuencia de acciones correcta. Suponer que

> “Esta imagen debe producir exactamente una trayectoria de acción”
> 
> 

puede fomentar el promedio entre estrategias distintas. Considera dos demostraciones:

```text
Demonstration A: go around the left → insert
Demonstration B: go around the right → insert
```

Un promedio simple podría convertirse en:

```text
Go straight through the middle
```

Pero puede haber un obstáculo en el medio.

El objetivo es aprender:

> **Qué secuencias de acciones razonables podría usar una persona en el estado actual.**
> 
> 

Esto motiva el **autoencoder variacional condicional (CVAE)**.

### Cómo funciona el CVAE en ACT

![ACT: Cómo funciona el CVAE en ACT (Figura 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-11-en.png)

El CVAE tiene dos componentes principales:

El codificador utiliza:

- El estado actual del robot.

- La secuencia de acciones demostrada.

Infiere un “estilo de movimiento” latente. En lugar de producir un único $z$ fijo, predice parámetros de una distribución gaussiana $\mu,\sigma$:

- Una media.

- Varianza.

Muestrear $z$ de esa distribución permite que el modelo represente la incertidumbre sobre el estilo de la demostración en lugar de asignar un valor rígido. Esta es una idea central de los VAE.

En principio, el codificador CVAE en tiempo de entrenamiento podría recibir:

```text
Image + Robot State + Action Sequence
```

Para un entrenamiento más rápido, los autores omiten las imágenes del codificador CVAE.

Sus entradas reales son:

```text
Robot State + Action Sequence
        ↓
   CVAE Encoder
```

Las imágenes aún entran en la política ACT que predice acciones. Así:

> **El codificador CVAE extrae el estilo de la demostración; la política de predicción de acciones sigue usando imágenes de cámara para decidir qué debe hacer el robot.**
> 
> 

---

### La red ACT completa

![ACT: La red ACT completa (Figura 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-13.png)

![ACT: La red ACT completa (Figura 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-06-en.png)

Las posiciones articulares y el segmento de acción demostrado primero entran en el codificador CVAE para representar diferencias en el estilo de la demostración, produciendo parámetros gaussianos $\mu,\sigma$ y una variable de estilo latente $z$. Este codificador procesa estados articulares y secuencias de acciones en lugar de imágenes de cámara.

Alimentar imágenes RGB crudas de $480x640$ a un Transformer sería costoso. **ResNet18** primero convierte cada imagen de cámara en un mapa de características de $15x20x512$, aplanado en una secuencia de características de $300x512$. Las cuatro cámaras de ALOHA por lo tanto generan $1200x512$ tokens visuales.

El modelo proyecta por separado la **posición articular de 14 dimensiones** y el estilo latente $z$ en 512 dimensiones y los concatena con las características visuales. El codificador Transformer recibe:

1200\+1\+1=1202

Esto da una secuencia de $1202x512$. El codificador fusiona tres tipos de información: **lo que el robot ve, su configuración actual y el estilo de movimiento de la demostración**.

Un **decodificador Transformer** usa entonces $k$ consultas posicionales, una para cada paso de tiempo futuro. La atención cruzada recupera información del entorno desde la salida del codificador y predice conjuntamente las $k$ acciones. Los dos brazos de ALOHA tienen en total 14 dimensiones controladas de articulaciones/pinza, dando:

$k\times14$

Para `chunk_size = 100`, una inferencia predice **100 pasos de tiempo × 14 posiciones de articulaciones**: el bloque de acciones completo.

El entrenamiento compara los bloques predichos con las demostraciones humanas usando una **pérdida de reconstrucción L1**, más una pérdida KL de CVAE que regulariza la distribución latente.

En despliegue no hay un bloque de acciones futuras demostradas, por lo que **el codificador del CVAE se elimina y $z=0$**. Las imágenes y las posiciones actuales de las articulaciones generan nuevos bloques; el ensamblado temporal combina predicciones solapadas, y la acción actual se envía al robot.

El flujo completo es:

**Entrenamiento: demostración → el CVAE aprende $z$ → imágenes + articulaciones + $z$ → Transformer → bloque de acciones**

**Inferencia: imágenes + articulaciones + $z=0$ → Transformer → bloque de acciones → ensamblado temporal → robot**

Recuerda los roles por separado:

> **El troceado de acciones determina cuántas acciones futuras se predicen juntas; el ensamblado temporal suaviza la ejecución; el CVAE modela el hecho de que varias demostraciones pueden ser válidas para la misma tarea.**
> 
> 

El flujo de ACT ahora encaja:

![ACT: La red ACT completa (Figura 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-10-en.png)

</div>

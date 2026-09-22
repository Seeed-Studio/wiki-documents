---
description: "Capítulo 9 del Curso para Principiantes en Inteligencia Incorporada de Seeed: fundamentos del aprendizaje de robots y del aprendizaje por imitación: por qué el brazo necesita aprendizaje, control basado en reglas vs. basado en aprendizaje, observación/estado/acción, fragmentos de acción, distribución de datos y las tres fases de entrenamiento, inferencia y evaluación."
title: Capítulo 9 - Fundamentos del Aprendizaje de Robots y del Aprendizaje por Imitación
keywords:
  - reBot
  - Imitation Learning
  - Behavioral Cloning
  - Robot Learning
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_9
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 9 · Teoría y práctica</span>
    <h2>9. Fundamentos del Aprendizaje de Robots y del Aprendizaje por Imitación</h2>
    <p>
      Capítulo 9 del Curso para Principiantes en Inteligencia Incorporada de Seeed: por qué el brazo necesita aprendizaje,
      control basado en reglas vs. basado en aprendizaje, observación/estado/acción, fragmentos de acción, distribución de
      datos y las tres fases de entrenamiento, inferencia y evaluación.
    </p>
    <div className="hero-actions">
      <a href="#por-qué-aprendizaje">Why learning</a>
      <a href="#distribución-de-datos">Data distribution</a>
      <a href="#flujo-de-trabajo">Pipeline</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>9.1 ¿Por qué los brazos robóticos necesitan aprendizaje?</span>
    <span>9.2 Control basado en reglas vs. control basado en aprendizaje</span>
    <span>9.3 Aprendizaje por imitación y Behavioral Cloning</span>
    <span>9.4 Observación, estado y acción</span>
    <span>9.5 Acciones de un solo paso vs. fragmentos de acción</span>
    <span>9.6 Distribución de datos y generalización del modelo</span>
    <span>9.7 Entrenamiento, inferencia y evaluación</span>
    <span>9.8 Ventajas y limitaciones del aprendizaje por imitación</span>
  </div>
</section>

<RebotCourseNav />

## 9.1 ¿Por qué los brazos robóticos necesitan aprendizaje?

<section id="why-learning" className="section-card">
  <div className="section-title">
    <span>Motivación</span>
    <h2>9.1 ¿Por qué los brazos robóticos necesitan aprendizaje?</h2>
  </div>

En la Etapa 2, ya puedes controlar el brazo robótico con el SDK de Python: leer ángulos de las articulaciones, enviar posiciones objetivo, abrir y cerrar la pinza. Así que es natural pensar: solo hay que escribir un programa que haga que el brazo coja automáticamente los bloques de la mesa, ¿verdad?

Entonces escribes ese programa. Durante la primera demostración en el laboratorio, el programa funcionó muy bien. Pero al día siguiente, las cosas cambiaron, y descubrirás que, para manejar estos cambios, se van añadiendo cada vez más sentencias "if" al programa, hasta que acaba convirtiéndose en un enorme catálogo de casos especiales que nadie puede mantener.

**Este es el dilema fundamental del control programático tradicional: el mundo real cambia de forma continua, mientras que if-else es discreto.** No puedes enumerar todos los posibles estados del mundo.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-01.png" alt="El dilema del control programático tradicional" />
</div>

**Permitir que los brazos robóticos adquieran habilidades de esta manera es precisamente lo que el Aprendizaje de Robots pretende resolver.** Y el aprendizaje por imitación que se trata en esta etapa es el enfoque más maduro y más fácil de desplegar en hardware real.

</section>

## 9.2 Control basado en reglas vs. control basado en aprendizaje

<section id="control-paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigmas</span>
    <h2>9.2 Control basado en reglas vs. control basado en aprendizaje</h2>
  </div>

Antes de continuar, pongamos los dos enfoques de control uno al lado del otro para verlos con claridad.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-02.png" alt="Control basado en reglas vs. control basado en aprendizaje" />
</div>

:::note
Las Etapas 3 y 4 de este curso siguen la vía del "control basado en aprendizaje". Pero recuerda: incluso en el futuro, tus sistemas de aprendizaje seguirán conservando una gran cantidad de reglas, como los límites de las articulaciones y las restricciones de velocidad segura. El aprendizaje y las reglas son complementarios.
:::

</section>

## 9.3 Aprendizaje por imitación y Behavioral Cloning

<section id="imitation-learning" className="section-card">
  <div className="section-title">
    <span>Imitación</span>
    <h2>9.3 Aprendizaje por imitación y Behavioral Cloning</h2>
  </div>

### Qué es el aprendizaje por imitación

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-03.png" alt="Aprendizaje por imitación" />
</div>

### Qué es Behavioral Cloning

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-04.png" alt="Behavioral Cloning" />
</div>

</section>

## 9.4 Observación, estado y acción

<section id="observation-state-action" className="section-card">
  <div className="section-title">
    <span>Conceptos de datos</span>
    <h2>9.4 Observación, estado y acción</h2>
  </div>

Todos los datos en el aprendizaje por imitación pueden clasificarse en tres conceptos. Estos tres términos aparecerán repetidamente en todos los capítulos siguientes, así que forma aquí una intuición precisa.

- **Observación:** el mundo que el robot "ve".
- **Estado:** la condición "propia" del robot.
- **Acción:** lo que el robot "va a hacer".

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-05.png" alt="Observación, estado y acción" />
</div>

</section>

## 9.5 Acciones de un solo paso vs. fragmentos de acción

<section id="action-chunks" className="section-card">
  <div className="section-title">
    <span>Acciones</span>
    <h2>9.5 Acciones de un solo paso vs. fragmentos de acción</h2>
  </div>

- **Acción de un solo paso:** una decisión por fotograma.
- **Fragmento de acción:** predecir una secuencia de acciones de una sola vez.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-06.png" alt="Acción de un solo paso vs. fragmento de acción" />
</div>

Por supuesto, los fragmentos de acción más largos no siempre son mejores. Predecir demasiado hacia adelante significa que el entorno puede cambiar a mitad de la ejecución (por ejemplo, un objeto se golpea), mientras el brazo sigue ejecutando acciones "desactualizadas". Los sistemas reales usan un compromiso: ejecutar en lazo abierto durante un segmento corto, luego volver a observar y volver a predecir.

</section>

## 9.6 Distribución de datos y generalización del modelo

<section id="data-distribution" className="section-card">
  <div className="section-title">
    <span>Distribución</span>
    <h2>9.6 Distribución de datos y generalización del modelo</h2>
  </div>

Esta es la sección más importante de este capítulo, y la que los principiantes pasan por alto con más facilidad, pero que determina el éxito o el fracaso en la práctica. Recuerda primero esta frase:

**Un modelo de aprendizaje por imitación solo puede aprender lo que hay en los datos y solo puede funcionar dentro del rango cubierto por los datos.**

- Todos los pares (observación, acción) que el modelo vio durante el entrenamiento constituyen una **Distribución de Datos**. Durante la inferencia, si las imágenes y estados que encuentra el brazo caen dentro de esta distribución, el modelo generalmente se comporta bien; una vez que salen de la distribución, la salida del modelo pierde su base y el comportamiento se vuelve impredecible.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-07.png" alt="Distribución de datos" />
</div>

Esto conduce a varias implicaciones muy prácticas:

- Si quieres que agarre bloques en cualquier posición de la mesa, los datos deben cubrir todas las posiciones de la mesa; si solo recoges datos en el centro de la mesa, el modelo solo agarrará en el centro.
- Si quieres que agarre objetos de diferentes colores, los datos deben contener diferentes colores; de lo contrario, un color nuevo es un mundo desconocido para él.
- La iluminación, el fondo y la posición de la cámara deben mantenerse lo más consistentes posible con la recogida de datos; un modelo entrenado con datos recogidos por la tarde puede fallar por completo bajo la iluminación interior de la noche.

Y la **generalización** es la capacidad del modelo para aplicar los patrones aprendidos de los datos a nuevas situaciones dentro de la distribución que no ha visto individualmente. Por ejemplo, si durante el entrenamiento vio bloques en 100 posiciones diferentes, y durante la inferencia aparece un bloque en la posición 101 (todavía sobre la mesa), el modelo aún puede agarrarlo: eso es generalización. La generalización no es magia; proviene de la **diversidad** de los datos: cuanto más rica y continua sea la cobertura de datos, más pequeños serán los "huecos" dentro de la distribución y mejor será la generalización.

:::tip
El límite superior del aprendizaje por imitación se determina esencialmente en el momento en que se recogen los datos. El entrenamiento solo materializa ese límite superior.
:::

</section>

## 9.7 Entrenamiento, inferencia y evaluación

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Flujo de trabajo</span>
    <h2>9.7 Entrenamiento, inferencia y evaluación</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-08.png" alt="Las tres fases del aprendizaje por imitación" />
</div>

### Entrenamiento: aprendizaje offline

El entrenamiento ocurre después de que la recogida de datos se ha completado; es un proceso **offline**: el brazo puede estar apagado y apartado; todo el trabajo se realiza en la GPU.

- **Entrada:** conjunto de datos recogido (series temporales de imágenes, State y Action);
- **Proceso:** el modelo lee repetidamente los datos, ajustando continuamente sus parámetros internos para que sus Acciones predichas se parezcan cada vez más a las demostraciones humanas;
- **Salida:** un archivo de modelo entrenado.

La calidad del entrenamiento se observa principalmente a través de la **Loss**: a medida que la Loss disminuye, las acciones predichas por el modelo se parecen cada vez más a las demostraciones humanas.

### Inferencia: toma de decisiones online

La inferencia es el proceso en el que el modelo se **despliega en el robot real y trabaja en tiempo real**: leer la cámara y los estados de las articulaciones → el modelo predice un Action Chunk → se envía a los motores para su ejecución. La inferencia tiene requisitos de tiempo real: el modelo debe producir acciones en decenas de milisegundos, de lo contrario el brazo se entrecortará.

### Evaluación: juzgada por la tasa de éxito

El modelo está entrenado, la Loss es baja: ¿puede realmente hacer el trabajo? No necesariamente.

**Una Loss baja solo significa que el modelo es "similar a un humano", no que "puede completar la tarea".** El único método de evaluación fiable es la prueba con el robot real:

- Establece criterios claros de éxito de la tarea (por ejemplo, "el bloque termina dentro de la caja");
- Varía las condiciones iniciales (posición del bloque, iluminación), repite la prueba N veces;
- Calcula la tasa de éxito de la tarea — por ejemplo, 14 éxitos de 20 pruebas = 70% de tasa de éxito.

Los casos de fallo encontrados durante la evaluación no son puntos finales; son insumos para la siguiente ronda de recopilación de datos: dondequiera que se produzcan fallos, recopila datos adicionales allí y luego vuelve a entrenar. Este es el bucle de iteración de datos y es la rutina diaria de los proyectos reales de aprendizaje de robots.

</section>

## 9.8 Ventajas y limitaciones del aprendizaje por imitación

<section id="advantages" className="section-card">
  <div className="section-title">
    <span>Compensaciones</span>
    <h2>9.8 Ventajas y limitaciones del aprendizaje por imitación</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-09.png" alt="Advantages and limitations of imitation learning" />
</div>

</section>

</div>

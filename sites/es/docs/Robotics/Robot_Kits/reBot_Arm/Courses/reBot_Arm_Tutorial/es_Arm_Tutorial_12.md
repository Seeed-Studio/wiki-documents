---
description: "Capítulo 12 del Curso para Principiantes en IA Física de Seeed — conjuntos de datos de robots y diseño de tareas: qué es un Episodio, qué hay en un registro de datos, marcas de tiempo y sincronización, condiciones de inicio/fin, consistencia vs diversidad, cantidad de datos vs calidad y un ejemplo práctico de creación de datos."
title: Capítulo 12 - Conjuntos de Datos de Robots y Diseño de Tareas
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_12
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 12 · Teoría</span>
    <h2>12. Conjuntos de Datos de Robots y Diseño de Tareas</h2>
    <p>
      Capítulo 12 del Curso para Principiantes en IA Física de Seeed: qué es un Episodio, qué hay
      en un registro de datos, marcas de tiempo y sincronización, condiciones de inicio/fin, consistencia vs
      diversidad, cantidad de datos vs calidad y un ejemplo práctico de creación de datos.
    </p>
    <div className="hero-actions">
      <a href="#episodio">Episodio</a>
      <a href="#consistencia-diversidad">Diseño de datos</a>
      <a href="#ejemplo">Ejemplo</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>12.1 ¿Qué es un Episodio?</span>
    <span>12.2 ¿Qué hay exactamente en un registro de datos?</span>
    <span>12.3 Marcas de tiempo y sincronización de datos</span>
    <span>12.4 Diseño de tareas: condiciones de inicio y fin</span>
    <span>12.5 Consistencia vs. diversidad de tareas</span>
    <span>12.6 Criterios de éxito y fallo</span>
    <span>12.7 Cantidad de datos vs. calidad de datos</span>
    <span>12.8 Conjuntos de datos de una sola tarea vs. multitarea</span>
    <span>12.9 Iteración de la recopilación de datos</span>
    <span>12.10 Ejemplo de creación de datos</span>
  </div>
</section>

<RebotCourseNav />

## 12.1 ¿Qué es un Episodio?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episodio</span>
    <h2>12.1 ¿Qué es un Episodio?</h2>
  </div>

A partir de este capítulo, cada operación que hagas significa que has cambiado de rol: **ya no eres el "conductor", eres el "profesor".** Cada acción que realices se registrará y se convertirá en el libro de texto del modelo. La unidad básica de este libro de texto es el Episodio.

**Un Episodio es una demostración completa de una tarea.** Desde que el brazo está en su postura inicial y comienza la tarea, hasta la finalización de la tarea, todos los datos registrados continuamente por el sistema constituyen un Episodio.

</section>

## 12.2 ¿Qué hay exactamente en un registro de datos?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Datos</span>
    <h2>12.2 ¿Qué hay exactamente en un registro de datos?</h2>
  </div>

Recuerda el Capítulo 9: esto debería resultarte familiar. Sí, es lo que aprendimos antes: **Observación, Estado, Acción**.

Fíjate en el origen de la Acción: registra la acción objetivo dada (a través del Leader), no la posición a la que realmente llegó el Follower después. Esto coincide exactamente con la definición de clonación de comportamiento: el modelo aprende "bajo esta observación y estado, qué pretendía hacer el humano en ese momento".

</section>

## 12.3 Marcas de tiempo y sincronización de datos

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sincronización</span>
    <h2>12.3 Marcas de tiempo y sincronización de datos</h2>
  </div>

Las imágenes van por USB, los datos de las articulaciones van por CAN: estos dos flujos de datos naturalmente llegan al ordenador en momentos diferentes. LeRobot añade una marca de tiempo a cada fotograma de datos, alineando así imágenes, estados y acciones del "mismo momento" en una sola fila.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Timestamps and synchronization" />
</div>

</section>

## 12.4 Diseño de tareas: condiciones de inicio y fin

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Diseño de tareas</span>
    <h2>12.4 Diseño de tareas: condiciones de inicio y fin</h2>
  </div>

Antes de recopilar datos, escribe claramente la definición de la tarea en texto. Una buena definición de tarea responde a dos preguntas: **¿Dónde empieza? ¿Cuándo termina?**

### Condición de inicio: dale al modelo un "punto de partida fijo"

- **Postura inicial fija del brazo:** cada Episodio comienza desde la misma postura segura (por ejemplo, una postura estándar cercana a cero). Si las posturas iniciales varían mucho, el primer paso del modelo será aprender "cómo entrar en la tarea desde cualquier postura", añadiendo una dificultad innecesaria.

### Condición de fin: dibuja una "línea de meta" clara para el Episodio

- **Final exitoso:** objetivo de la tarea alcanzado (por ejemplo, "bloque completamente dentro de la caja, pinza abierta, brazo levantado").
- **Terminación por fallo:** se produce una situación irrecuperable (objeto caído, contenedor volcado, brazo entra en una postura peligrosa); deja de registrar este Episodio inmediatamente.

</section>

## 12.5 Consistencia vs. diversidad de tareas

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Diseño de datos</span>
    <h2>12.5 Consistencia vs. diversidad de tareas: la tensión central en el diseño de datos</h2>
  </div>

Esta es la sección más crítica del capítulo. Los datos de demostración de alta calidad deben satisfacer simultáneamente dos requisitos que parecen contradictorios.

### Consistencia: enseñar una sola "forma de hacerlo"

- **Estilo de operación consistente:** para la misma tarea, todos los Episodios deben usar la misma estrategia (por ejemplo, acercarse siempre al bloque desde la derecha, agarrarlo y bajarlo dentro de la caja desde arriba). Si la mitad de los datos agarran desde la izquierda y la otra mitad desde la derecha, el modelo aprende el "promedio" de dos enfoques, a menudo una trayectoria extraña que no agarra nada.
- **Ritmo consistente:** la velocidad de movimiento y las posiciones de pausa deben ser aproximadamente estables; si estableces 20 segundos, complétalo en 20 segundos. Los datos con velocidades variables hacen que las acciones del modelo sean inconsistentes en velocidad.
- **Flujo de trabajo consistente:** cada ejecución debe pasar por todo el flujo de trabajo "acercarse → agarrar → transportar → colocar → retirar" sin saltarse pasos.
- **Estado inicial de la escena controlado:** los objetos deben colocarse dentro de un área designada (el área puede ser grande, pero los límites deben ser claros); retira los elementos no relacionados del espacio de trabajo.
- **Posición fija de la cámara:** las cámaras no deben moverse durante la recopilación; para el modelo, mover la cámara 5 cm significa que el mundo ha cambiado.

### Diversidad: suficientes "variaciones" vistas

- **Posiciones objetivo diversas:** los bloques aparecen en varias posiciones dentro del espacio de trabajo (cobertura en cuadrícula, no dispersión aleatoria).
- **Posturas iniciales diversas:** la orientación del bloque y su posición relativa a los obstáculos deben variar.

</section>

## 12.6 Criterios de éxito y fallo

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criterios</span>
    <h2>12.6 Criterios de éxito y fallo</h2>
  </div>

  | **Estándar no cualificado (ambiguo)**              | **Estándar cualificado (medible)**                                                                                   |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| "Mientras el objeto esté más o menos agarrado."   | "La pinza está completamente cerrada y agarra el centro del bloque."                                                |
| "Mientras el bloque esté dentro de la caja."      | "El bloque se coloca cerca del centro de la caja en lugar de al azar cerca del borde."                              |
| "Solo recoge el bloque y ponlo en la caja."       | "Todo el movimiento debe ser fluido y la duración de cada episodio registrado debe mantenerse razonablemente constante." |


Para los segmentos fallidos durante la grabación, el principio es sencillo: **vuelve a grabar este Episodio.** No conserves datos fallidos esperando que "quizás el modelo aprenda de ellos"; el modelo realmente aprenderá, incluidos los fallos.

"Tarea completada" debe ser un estado **objetivamente determinable**, no "parece que está bien". Unos buenos criterios de éxito se ven así:

</section>

## 12.7 Cantidad de datos vs. calidad de datos

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Volumen de datos</span>
    <h2>12.7 Cantidad de datos vs. calidad de datos</h2>
  </div>

Referencia empírica (para una sola tarea de sobremesa en un entorno limpio como una caja de recopilación de datos; si no hay caja de recopilación de datos, aumenta el tamaño del conjunto de datos):

| Cantidad de datos | Efecto esperado |
| :--- | :--- |
| **50 Episodios** | El flujo funciona; el modelo empieza a funcionar en el área cubierta por los datos (nivel inicial para tareas de introducción) |
| **50–100 Episodios** | La tasa de éxito alcanza un rango utilizable; el punto óptimo para la mayoría de experimentos de una sola tarea |
| **100+ Episodios** | Rendimientos decrecientes, a menos que la tarea sea compleja o los requisitos de tasa de éxito sean muy altos |

Para multitarea, aumenta los datos proporcionalmente a la complejidad. Por supuesto, se pueden complementar los datos después del entrenamiento: cuando veas que el rendimiento del modelo no es bueno, puedes añadir más datos.

Pero pon esta frase antes de los números:

- **50 Episodios de alta calidad son mejores que 200 descuidados.**
- **Si hay un problema con la recopilación de datos, no dudes: vuelve a grabar este Episodio inmediatamente.**
- **Si quieres una fuerte capacidad de generalización, necesitarás cientos o miles de Episodios.**

</section>

## 12.8 Conjuntos de datos de una sola tarea vs. multitarea

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Conjuntos de datos</span>
    <h2>12.8 Conjuntos de datos de una sola tarea vs. multitarea</h2>
  </div>

- **Conjunto de datos de una sola tarea:** un conjunto de datos contiene solo una tarea (por ejemplo, "bloque en la caja"). El modelo tiene un único objetivo, los requisitos de datos son pequeños y es más fácil lograr una alta tasa de éxito. Tu primer modelo debe empezar con una sola tarea.
- **Conjunto de datos multitarea:** un conjunto de datos contiene múltiples tareas (agarrar bloque, abrir cajón, poner bloque en el cajón); cada Episodio está etiquetado con `task_index` para indicar a qué tarea pertenece. El aprovechamiento de los datos es alto y es la dirección hacia políticas generales, pero las tareas compiten por la capacidad del modelo, por lo que se necesitan más datos por tarea para aprender bien.

</section>

## 12.9 Iteración de la recopilación de datos

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteración</span>
    <h2>12.9 Iteración de la recopilación de datos</h2>
  </div>

Recopila en lotes con validación iterativa: recopila 50 → entrena → evalúa en el robot real → recopila más para los escenarios de fallo → vuelve a entrenar. Si la dirección general del modelo es correcta pero la precisión es baja, añadir datos ayuda; si el comportamiento del modelo es completamente erróneo, hay un problema con el diseño de la tarea o de los datos, y por mucha cantidad adicional de datos que añadas no servirá de nada.

</section>

## 12.10 Ejemplo de creación de datos

<section id="example" className="section-card">
  <div className="section-title">
    <span>Ejemplo</span>
    <h2>12.10 Ejemplo de creación de datos</h2>
  </div>

### Diseño de la escena

1. Coloca los tubos de ensayo en un soporte para tubos de ensayo. Nota: fija la base del soporte con cinta de doble cara para evitar que se mueva; mantén las cámaras y el brazo en posiciones fijas y no cambies la iluminación.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-02.png" alt="Scene design" />
</div>

2. Coloca los tubos de ensayo según los puntos que se muestran en la figura; 1→2→3→4→5 es una ronda. Recoge datos durante 10 rondas.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-03.png" alt="Test tube placement points" />
</div>

El problema más doloroso para los principiantes al registrar datos es "cómo colocar los objetos para practicar a fondo": la colocación aleatoria hace que todo se agrupe en un área pequeña (el modelo solo reconoce ese punto y falla en otras posiciones) o que se dispersen de forma irregular (algunas zonas se practican en exceso y otras nunca se tocan). Es como repasar solo los ejercicios que ya dominas y suspender cuando el examen cambia el formato; o como mostrarle a un robot solo un tipo de aperitivo, de modo que no sepa por dónde empezar en un bufé. Aquí tienes un método sencillo y estandarizado:

1. **Marcar puntos:** usa un lápiz para marcar **5 puntos** en el área de recolección de datos (caja de recolección / tapete de escritorio), dispuestos en forma de **cruz**: 1 en el centro y uno en la parte superior, inferior, izquierda y derecha.
2. **Establecer el espaciado:** los puntos adyacentes deben estar separados por **5–10 cm**, asegurando que los cinco puntos estén dentro del espacio de trabajo del brazo y sean claramente visibles en ambas cámaras.
3. **Distribuir:** recoge **10 Episodios en cada punto**; 5 puntos × 10 = **50 Episodios**, lo que cumple el objetivo. Ten en cuenta también: no recojas 10 Episodios en el punto 1, luego 10 en el punto 2, etc.; en su lugar, recoge 1 Episodio en cada punto (5 puntos = 1 ronda) y haz 10 rondas de esta manera.

### Diseño de agarre y colocación

1. Posición inicial

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-04.jpg" alt="Initial position" />
</div>

2. Agarrar el objeto

- Mueve el brazo directamente por encima del tubo de ensayo (siempre muévete al centro del tubo a la misma altura sobre él).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-05.jpg" alt="Move above the test tube" />
</div>

- Abre la garra (¿por qué empezar a una distancia fija? Para evitar golpear el tubo al abrir la garra y desplazar su posición).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-06.jpg" alt="Open the gripper" />
</div>

- Agarra siempre con la misma fuerza y velocidad.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-07.jpg" alt="Grasp the object" />
</div>

3. Colocar el objeto

- Muévete directamente por encima del centro del soporte para tubos de ensayo.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-08.jpg" alt="Move above the rack" />
</div>

- Abre la garra a velocidad constante y eleva el brazo; deberías ver cómo el tubo se asienta suavemente en el soporte.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-09.jpg" alt="Place the object" />
</div>

- Después de colocar el tubo, devuelve el brazo a su posición inicial.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-10.jpg" alt="Return to home" />
</div>

Eso es todo: un Episodio perfecto está completo. Ahora solo tienes que repetirlo 50 veces.

### Preguntas de diseño

¿Por qué no puedo mover el soporte para tubos de ensayo, las cámaras, las posiciones de los tubos o cambiar la iluminación?

- **Despejando el malentendido:** "Mover todo libremente" genera ruido, no diversidad.
- **Teoría del presupuesto de generalización:** con datos limitados, las variaciones gastadas en una dimensión enseñan al modelo esa dimensión: gastarlas en la posición del objetivo le enseña a agarrar tubos en diferentes posiciones; gastarlas en variaciones de la posición de la cámara hace que el modelo aprenda tanto el agarre como las diferencias de punto de vista, lo que requiere muchos más datos y produce peores resultados.
- **¿Y si realmente necesito variaciones?:** no se trata de "no fijar" durante la grabación, sino de la iteración de datos complementarios posterior: ampliar conscientemente los límites para lograr la generalización que buscamos.

</section>

</div>

---
description: "Capítulo 11 del curso para principiantes de SO-ARM Physical AI — datasets de robótica y diseño de tareas: qué es un Episode, qué hay en un registro, marcas de tiempo y sincronización, condiciones de inicio/fin, consistencia vs. diversidad, cantidad vs. calidad, y un ejemplo A a B."
title: Capítulo 11 - Datasets de robótica y diseño de tareas
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - dataset
  - Episode
  - recolección de datos
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_11
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 11 · Teoría</span>
    <h2>11. Datasets de robótica y diseño de tareas</h2>
    <p>
      Capítulo 11 del curso para principiantes de SO-ARM Physical AI — qué es un Episode, qué hay en un registro de datos, marcas de tiempo y sincronización, condiciones de inicio/fin, consistencia vs. diversidad, cantidad vs. calidad, y un ejemplo completo de agarre y colocación de A a B.
    </p>
    <div className="hero-actions">
      <a href="#episode">Episode</a>
      <a href="#consistency-diversity">Diseño de datos</a>
      <a href="#example">Ejemplo</a>
    </div>
  </div>
</section>

## 11.1 ¿Qué es un Episode?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>11.1 ¿Qué es un Episode?</h2>
  </div>

A partir de este capítulo, cada operación que haces implica un cambio de papel — **ya no eres el "conductor", eres el "profesor".** Cada acción tuya se grabará y será el libro de texto del modelo. La unidad básica de ese libro es el Episode.

**Un Episode es una demostración completa de la tarea.** Desde que el brazo está en su postura inicial y la tarea comienza, hasta que se completa, todos los datos grabados continuamente por el sistema constituyen un Episode.

</section>

## 11.2 ¿Qué hay exactamente en un registro de datos?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Datos</span>
    <h2>11.2 ¿Qué hay exactamente en un registro de datos?</h2>
  </div>

Recuerda el Capítulo 8 — debería resultarte familiar: **Observación, Estado, Acción**.

En el SO-ARM, un fotograma grabado contiene:

- **Observación**: las dos imágenes de cámara (frontal + lateral);
- **Estado**: las 6 lecturas de articulación del seguidor (5 articulaciones + pinza);
- **Acción**: los 6 valores objetivo derivados del líder.

Nota el origen de la Acción: registra la acción objetivo dada (vía el líder), no la posición que el seguidor alcanzó después. Eso coincide exactamente con la definición de clonación de comportamiento — el modelo aprende "con esta observación y estado, qué quería hacer el humano en ese momento".

</section>

## 11.3 Marcas de tiempo y sincronización

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sincronización</span>
    <h2>11.3 Marcas de tiempo y sincronización</h2>
  </div>

Las imágenes van por USB y los datos de articulación por el bus serie — las dos corrientes llegan al ordenador en momentos distintos. LeRobot sella cada fotograma, alineando imágenes, estados y acciones del "mismo instante" en una fila.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Marcas de tiempo y sincronización" />
</div>

</section>

## 11.4 Diseño de la tarea: condiciones de inicio y fin

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Diseño de tarea</span>
    <h2>11.4 Diseño de la tarea: condiciones de inicio y fin</h2>
  </div>

Antes de recolectar, escribe la definición de la tarea con claridad. Una buena definición responde dos preguntas: **¿Dónde empieza? ¿Cuándo está lista?**

### Condición de inicio: un "punto de partida fijo" para el modelo

- **Postura inicial fija**: cada Episode parte de la misma postura segura (p. ej. la postura base calibrada). Si los inicios varían mucho, el primer paso del modelo será aprender "cómo entrar a la tarea desde cualquier postura", añadiendo dificultad innecesaria.

### Condición de fin: una "línea de meta" clara

- **Fin exitoso**: objetivo logrado (p. ej. "objeto soltado en B, pinza abierta, brazo retirado");
- **Fin por fallo**: situación irrecuperable (objeto caído, fuera del tapete, brazo en postura peligrosa) — detén inmediatamente la grabación de ese Episode.

</section>

## 11.5 Consistencia vs. diversidad

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Diseño de datos</span>
    <h2>11.5 Consistencia vs. diversidad: la tensión central del diseño de datos</h2>
  </div>

La sección más crítica del capítulo. Los datos de demostración de alta calidad deben satisfacer dos requisitos aparentemente contradictorios.

### Consistencia: enseñar "una sola forma de hacerlo"

- **Estilo de operación consistente**: para la misma tarea, todos los Episodes usan la misma estrategia (p. ej. siempre aproximarse por encima del objeto, agarrar y colocar en B). Si la mitad agarra por la izquierda y la mitad por la derecha, el modelo aprende el "promedio" de dos enfoques — a menudo una trayectoria rara que no agarra nada.
- **Ritmo consistente**: velocidad y pausas aproximadamente estables — si defines 20–30 segundos, complétalo en 20–30 segundos. Datos de velocidad variable vuelven inestable la velocidad del modelo.
- **Flujo consistente**: cada pasada recorre "acercarse → agarrar → transportar → colocar → retraer" sin saltos.
- **Escena inicial controlada**: objetos dentro de un área designada (puede ser grande, pero con límites claros); retira lo ajeno del espacio de trabajo.
- **Cámara fija**: no mover cámaras durante la recolección — para el modelo, moverla 5 cm significa que el mundo cambió.

### Diversidad: suficiente "variación" vista

- **Posiciones objetivo diversas**: objetos en varias posiciones del espacio (cobertura en cuadrícula, no dispersión aleatoria).
- **Posturas iniciales diversas**: orientación del objeto y posición relativa a obstáculos con variación.

</section>

## 11.6 Criterios de éxito y fracaso

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criterios</span>
    <h2>11.6 Criterios de éxito y fracaso</h2>
  </div>

"Tarea completa" debe ser un estado **objetivamente determinable**, no "parece que sí". Buenos criterios:

| **Estándar no apto (ambiguo)** | **Estándar apto (medible)** |
| :------------------------------------------------ | :---------------------------------------------------------------- |
| "Con tal de que agarre más o menos." | "La pinza cierra por completo y agarra el centro del objeto." |
| "Con tal de que lo deje en B." | "El objeto queda dentro del área marcada de B, sin quedar colgando." |
| "Recogerlo y soltarlo ya está." | "El movimiento es fluido y la duración de cada episodio se mantiene consistente." |

Para los segmentos fallidos durante la grabación, el principio es simple: **vuelve a grabar ese Episode.** No conserves datos fallidos esperando que "quizá el modelo aprenda de ellos" — aprenderá, incluidos los fallos.

</section>

## 11.7 Cantidad de datos vs. calidad

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Volumen</span>
    <h2>11.7 Cantidad de datos vs. calidad</h2>
  </div>

Referencia empírica (tarea única de escritorio en escena limpia y consistente):

| Cantidad | Efecto esperado |
| :--- | :--- |
| **20–30 Episodes** | Primera política utilizable para A→B fijo (nivel inicial) |
| **50 Episodes** | El pipeline funciona; el modelo empieza a operar en el área cubierta |
| **50–100 Episodes** | Tasa de éxito en rango utilizable; punto dulce de la mayoría de experimentos de tarea única |
| **100+ Episodes** | Rendimientos decrecientes, salvo tarea compleja o exigencia de éxito muy alta |

Para multitarea, aumenta proporcionalmente a la complejidad. Por supuesto, puedes añadir datos tras entrenar — si el modelo rinde poco, se añade.

Pero pon estas frases delante de los números:

- **50 Episodes de alta calidad valen más que 200 descuidados.**
- **Si algo sale mal durante la recolección, no dudes — regraba ese Episode de inmediato.**
- **Para una generalización fuerte necesitarás cientos o miles de Episodes.**

:::tip
Estrategia práctica por lotes (la misma del flujo sin código del Capítulo 22): graba unos 10 episodios por tanda; tras 2–3 tandas conserva 20–30 válidos para el primer entrenamiento; añade datos de variantes difíciles según los resultados.
:::

</section>

## 11.8 Dataset de tarea única vs. multitarea

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>11.8 Dataset de tarea única vs. multitarea</h2>
  </div>

- **Dataset de tarea única**: contiene una sola tarea (p. ej. "objeto de A a B"). Objetivo único, poca exigencia de datos, tasa de éxito alcanzable. Tu primer modelo debe empezar por aquí.
- **Dataset multitarea**: contiene varias tareas; cada Episode lleva un `task_index` que indica a cuál pertenece. Mayor aprovechamiento y camino hacia políticas generales, pero las tareas compiten por la capacidad del modelo y cada una necesita más datos.

</section>

## 11.9 Iteración de la recolección

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteración</span>
    <h2>11.9 Iteración de la recolección</h2>
  </div>

Recolecta por lotes con validación iterativa: 50 → entrenar → evaluar en robot real → recolectar más donde falle → reentrenar. Si la dirección general es correcta pero falta precisión, añadir datos ayuda; si el comportamiento es erróneo por completo, el problema es del diseño de tarea o de datos, y ningún volumen extra lo arreglará.

</section>

## 11.10 Ejemplo de creación de datos: agarre y colocación de A a B

<section id="example" className="section-card">
  <div className="section-title">
    <span>Ejemplo</span>
    <h2>11.10 Ejemplo de creación de datos: agarre y colocación de A a B</h2>
  </div>

La tarea de ejemplo del resto de la etapa: **recoger el objeto en A y colocarlo en B** — la misma del Capítulo 22 sin código, para comparar ambas rutas directamente.

### Diseño de escena

1. Marca dos posiciones fijas en el tapete: A para el inicio del objeto, B para su destino. Prepara un objeto de tamaño adecuado y fácil de agarrar, como un bloque pequeño.
2. Asegúrate de que A, B, ambos brazos y el objeto sean visibles en las dos vistas y sin obstrucción. Fija las cámaras, mantén la luz y saca al líder del campo visual.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Escena de tarea con A y B" />
</div>

El problema más molesto de los principiantes es "cómo colocar objetos para practicar a fondo" — la colocación aleatoria o se agrupa (el modelo solo reconoce esa zona) o se dispersa sin orden (unas zonas sobrepracticadas, otras intactas). Método simple y normalizado:

1. **Marca puntos**: con lápiz, **5 puntos** en el área, en **cruz** — uno al centro, uno arriba, abajo, izquierda y derecha;
2. **Espaciado**: entre puntos adyacentes, **5–10 cm**, todos dentro del espacio de trabajo y visibles en ambas cámaras;
3. **Asignación**: **10 Episodes por punto**; 5 × 10 = **50 Episodes**, objetivo cumplido. No grabes 10 seguidos en cada punto; graba 1 por punto (5 puntos = 1 ronda) y haz 10 rondas.

### Diseño de agarre y colocación

1. **Posición inicial**: brazo en postura base; objeto en A;
2. **Agarrar:**
   - Moverse justo encima del objeto (siempre a la misma altura sobre su centro);
   - Abrir la pinza a distancia fija (¿por qué fija? Para no golpear el objeto al abrirla y desplazarlo);
   - Agarrar cada vez con la misma fuerza y velocidad;
3. **Colocar:**
   - Moverse justo encima del centro de B;
   - Abrir la pinza a velocidad constante y elevar — el objeto debe asentarse dentro del área marcada;
   - Devolver el brazo a la postura base.

Listo — un Episode perfecto completado. Ahora repítelo 50 veces.

### Preguntas de diseño

¿Por qué no mover el tapete, las cámaras, los objetos o cambiar la luz?

- **Desmontando el mito**: "moverlo todo libremente" produce ruido, no diversidad.
- **Teoría del presupuesto de generalización**: con datos limitados, la variación gastada en una dimensión enseña esa dimensión — gastarla en posiciones enseña a agarrar en varios puntos; gastarla en variaciones de cámara obliga a aprender agarre y cambio de punto de vista a la vez, requiriendo mucho más datos y con peor resultado.
- **Si de verdad necesitas variación**: no es "no fijar" durante la grabación, sino la iteración posterior de datos — expandir conscientemente las fronteras para lograr la generalización buscada.

</section>

</div>

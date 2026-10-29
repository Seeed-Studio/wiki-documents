---
description: "Diseña tu primera tarea de aprendizaje por imitación en torno a episodios, condiciones de inicio y parada, y coherencia en las demostraciones; luego completa muestreos de cinco puntos y demostraciones de recogida y colocación."
title: "Diseño de tareas y planificación de demostraciones"
hide_title: true
keywords:
  - Implementación práctica
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_task_design
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/hands_on_task_design/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-task_design-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLEMENTACIÓN PRÁCTICA</span>
  <h1 id="hands-on-task_design-title">Diseño de tareas y planificación de demostraciones</h1>
  <p className="paper-reading-lead">Define episodios, condiciones de inicio y parada, y demostraciones coherentes; luego utiliza muestreo de cinco puntos para recopilar una tarea completa de recogida y colocación.</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Episodio</li>
    <li>Diseño de tareas</li>
    <li>Muestreo de cinco puntos</li>
    <li>Recopilación de demostraciones</li>
  </ul>
</section>

## ¿Qué es un episodio?

**Un episodio es una demostración completa de la tarea.** Contiene todos los datos registrados de forma continua desde la pose inicial del brazo y el inicio de la tarea hasta la finalización de la tarea.

---

## ¿Qué contiene un episodio?

Un episodio consta de muchos fotogramas a lo largo de una línea temporal. Cada fotograma, normalmente registrado a 30 Hz (30 muestras por segundo), empareja tres tipos de información: lo que el sistema ve o percibe, la configuración actual del brazo y hacia dónde la persona o la política le ordena ir. Estos son la observación, el estado y la acción.

---

## Diseño de tareas: condiciones de inicio y parada

Escribe la definición de la tarea antes de grabar. Una buena definición responde a dos preguntas: **¿Dónde empieza y qué cuenta como terminado?**

**Condición de inicio: dale al modelo un estado inicial bien definido**

- **Usa una pose inicial fija del brazo.** Comienza cada episodio desde la misma pose segura, como una pose estándar cerca de la posición cero. Inicios muy variados obligan al modelo a aprender primero cómo entrar en la tarea desde poses arbitrarias, añadiendo dificultad innecesaria.

**Condición de parada: dale al episodio una línea de meta clara**

- **Finalización correcta**: se cumple el objetivo de la tarea, por ejemplo, “el bloque está completamente dentro de la caja, la garra lo ha soltado y el brazo se ha retirado”.

- **Terminación por fallo**: detén la grabación inmediatamente si se produce un evento irrecuperable, como soltar el objeto, volcar el contenedor o alcanzar una pose insegura del brazo.

---

## Coherencia y diversidad: la compensación central en el diseño de datos

Este es el punto clave del capítulo. Las demostraciones de alta calidad deben satisfacer dos requisitos aparentemente opuestos.

**Coherencia: enseña una forma de hacer la tarea**

- **Estilo de operación coherente**: utiliza la misma estrategia en todos los episodios, como acercarte al bloque desde la derecha, agarrarlo y moverlo a la caja desde arriba. Con datos limitados, mezclar agarres desde la izquierda y desde la derecha puede hacer que el modelo aprenda un promedio de las dos trayectorias que no tiene éxito en ninguna.

- **Temporización coherente**: mantén la velocidad de movimiento y las pausas en términos generales estables. Si el episodio está fijado en 20 segundos, termina dentro de esos 20 segundos. Una temporización errática en la demostración puede llevar a una ejecución errática del modelo.

- **Secuencia coherente**: incluye la secuencia completa “acercarse → agarrar → transportar → colocar → retirarse” en cada episodio.

- **Escena inicial controlada**: coloca los objetivos dentro de una región definida. La región puede ser grande, pero su límite debe ser claro. Retira objetos no relacionados del espacio de trabajo.

- **Cámaras fijas**: no muevas las cámaras durante la recopilación. Para el modelo, mover una cámara 5 cm cambia el mundo que ve.

**Diversidad: cubre suficientes situaciones diferentes**

- **Varía las posiciones objetivo**: cubre el espacio de trabajo de forma sistemática con una cuadrícula en lugar de dispersar los objetos de forma arbitraria.

- **Varía las poses iniciales de los objetos**: cambia la orientación del bloque y su relación con los obstáculos.

---

## Criterios de éxito y fallo

Si una grabación contiene un segmento fallido, **vuelve a grabar ese episodio**. No conserves demostraciones fallidas con la esperanza de que el modelo aprenda de algún modo el comportamiento deseado: también puede aprender el fallo.

La finalización de la tarea debe ser **objetivamente observable**, en lugar de “lo bastante cerca”. Define el éxito en términos de un estado final claro.

---

## Cantidad y calidad de datos

Los siguientes son puntos de referencia prácticos para una tarea de sobremesa en un entorno limpio y controlado, como un sandbox de recopilación. Recopila más datos si tu entorno está menos controlado.

| Tamaño del conjunto de datos | Resultado esperado |
|---|---|
| **50 episodios** | Suficiente para empezar a ejecutar el flujo de trabajo y trabajar dentro de la región demostrada; una escala inicial para una tarea de principiante. |
| **50–100 episodios** | A menudo un rango útil para una tasa de éxito práctica en experimentos de una sola tarea. |
| **100+ episodios** | Los retornos pueden disminuir a menos que la tarea sea compleja o se requiera una tasa de éxito muy alta. |

Para múltiples tareas, aumenta el conjunto de datos según la complejidad. Puedes añadir demostraciones después del entrenamiento inicial cuando la evaluación revele debilidades.

Mantén estos principios por delante de los números:

- **50 demostraciones de alta calidad son mejores que 200 descuidadas.**

- **Si una grabación tiene un problema, vuelve a grabar ese episodio.**

- **Una generalización sólida puede requerir cientos o miles de episodios.**

---

## Conjuntos de datos de una sola tarea y de múltiples tareas

- **Conjunto de datos de una sola tarea**: contiene una tarea, como colocar un bloque en una caja. El objetivo está enfocado, los requisitos de datos son menores y es más fácil lograr altas tasas de éxito. Comienza tu primer modelo con una tarea.

- **Conjunto de datos de múltiples tareas**: contiene varias tareas, como agarrar un bloque, abrir un cajón y poner el bloque dentro. Cada episodio utiliza `task_index` para identificar su tarea. Esto mejora la reutilización de datos y avanza hacia políticas de propósito general, pero las tareas comparten la capacidad del modelo, por lo que cada una necesita más datos para aprender bien.

---

## Iterar en la recopilación de datos

Recopila y valida por lotes: 50 episodios → entrena → evalúa en el robot → recopila más ejemplos de casos de fallo → vuelve a entrenar. Más datos ayudan cuando el comportamiento general es correcto pero la precisión es pobre. Si el comportamiento es fundamentalmente incorrecto, revisa el diseño de la tarea o del conjunto de datos antes de recopilar más.

---

## Ejemplo de recopilación de demostraciones

**Configuración de la escena:**

1. Coloca el cangrejo de río en la caja negra. Fija la parte inferior de la caja con cinta de doble cara para evitar que se mueva. Mantén las cámaras y el brazo fijos en su lugar y mantén la iluminación sin cambios.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-01-task-scene.png)

2. Recopila demostraciones con el cangrejo de río en los cinco puntos ilustrados. Visita 1 → 2 → 3 → 4 → 5 para una ronda y completa 10 rondas.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-02-five-point-sampling.png)

- A los principiantes a menudo les cuesta decidir dónde colocar los objetos para practicar lo suficiente. Una colocación aleatoria puede concentrar todos los ejemplos en una región pequeña, de modo que el modelo no pueda agarrar en otros lugares, o dejar huecos irregulares, con algunas posiciones practicadas a menudo y otras nunca vistas. Es como repasar solo preguntas de examen familiares y perderse cuando la pregunta cambia, o mostrarle a un robot solo un tipo de aperitivo y luego enviarlo a un bufé. Utiliza el siguiente método sencillo y sistemático:

1. **Marca los puntos**: dibuja **cinco puntos en cruz** dentro del área de recopilación o en la alfombrilla de la mesa: uno en el centro y uno arriba, abajo, a la izquierda y a la derecha.

2. **Define el espaciado**: mantén los puntos adyacentes a unos **5–10 cm** de distancia. Los cinco deben estar al alcance del brazo y ser claramente visibles en ambas vistas de cámara.

3. **Asigna las demostraciones**: recopila **10 episodios por punto**, dando 5 × 10 = **50 episodios**. No completes los 10 en un punto antes de pasar al siguiente. Recopila uno en cada uno de los cinco puntos por ronda y luego repite durante 10 rondas.

**Diseña la secuencia de recogida y colocación:**

1. Pose inicial

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-03-start-pose.jpg)

2. Agarra el objeto

- Muévete directamente por encima del cangrejo de río. Alinea con su centro y mantén la misma altura de aproximación cada vez.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 4)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-04-approach-object.jpg)

- Abre la garra. La holgura por encima del cangrejo de río evita que al abrir los dedos lo golpees y cambies su posición.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 5)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-05-open-gripper.jpg)

- Agarra con fuerza y velocidad coherentes.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 6)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-06-grasp-object.jpg)

3. Coloca el objeto

- Muévete directamente por encima del centro de la caja negra.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 7)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-07-move-to-box.jpg)

- Abre la garra a un ritmo constante y eleva el brazo. El cangrejo de río debería asentarse en la caja.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 8)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-08-release-object.jpg)

- Devuelve el brazo a su pose inicial después de la colocación.

![Diseña tu primera tarea de aprendizaje por imitación: ejemplo de recopilación de demostraciones (Figura 9)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-09-return-home.jpg)

- Un episodio completo ya está grabado. Repite este procedimiento para recopilar 50 demostraciones.

**Preguntas sobre la configuración**

¿Por qué mantener controlados la caja negra, la colocación de la cámara, el esquema de colocación de objetos y la iluminación?

- **Corregir una idea equivocada**: cambiar todo de forma arbitraria añade ruido en lugar de diversidad útil.

- **Piensa en un presupuesto de generalización**: con datos limitados, el modelo aprende las variaciones en las que gastas esos datos. Variar las posiciones objetivo le enseña agarres en diferentes posiciones; variar las cámaras lo obliga a aprender tanto el agarre como los cambios de punto de vista, lo que requiere muchos más datos y puede reducir el rendimiento.

- **Si necesitas una variación más amplia**: amplía la cobertura deliberadamente en rondas posteriores de recopilación y evaluación en lugar de dejar la configuración sin control durante la grabación.

</div>

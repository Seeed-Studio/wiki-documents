---
description: "Capítulo 25 del Curso de Introducción a la IA Física de Seeed: trayectoria frente a recorrido, interpolación en espacio articular y en espacio cartesiano, polinomios lineales, cúbicos y quínticos, y la orden de par construida a partir de feedforward (modelo y gravedad) más corrección de error por feedback."
title: Capítulo 25 - Planificación de Trayectorias y Control del Brazo Robótico
hide_title: true
keywords:
  - reBot
  - Brazo Robótico
  - Planificación de Trayectorias
  - Interpolación
  - Quíntico
  - Feedforward
  - Compensación de Gravedad
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_25
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Equipo de Robótica de Seeed Studio
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_25/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 5 · Capítulo 25 · Teoría</span>
    <h2>25. Planificación de Trayectorias y Control del Brazo Robótico</h2>
    <p>
      Capítulo 25 del Curso de Introducción a la IA Física de Seeed: trayectoria frente a recorrido, interpolación en espacio articular y en espacio cartesiano, polinomios lineales, cúbicos y quínticos, y la orden de par construida a partir de feedforward (modelo y gravedad) más corrección de error por feedback.
    </p>
    <div className="hero-actions">
      <a href="#path-trajectory">Recorrido vs trayectoria</a>
      <a href="#interpolation">Interpolación</a>
      <a href="#control">Feedforward y feedback</a>
    </div>
  </div>
</section>

## 25.1 Objetivos de Aprendizaje

Ayudar al usuario a entender cómo el brazo genera un movimiento continuo, suave y seguro a partir de una pose objetivo.

Después de este capítulo deberías ser capaz de:

1. Separar un movimiento en un **recorrido** (forma) y una **trayectoria** (tiempo), y decir cuál de los dos restringe una tarea.
2. Elegir entre interpolación en espacio articular y en espacio cartesiano.
3. Explicar la diferencia entre interpolación lineal, cúbica y quíntica, y por qué el comportamiento de arranque/parada importa.
4. Explicar feedforward, feedback y compensación de gravedad, y cómo se compone la orden de par.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-01.png" alt="Recorrido frente a trayectoria (1/2)" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-02.png" alt="Recorrido y trayectoria en un brazo robótico (2/2)" />
</div>

<a id="path-trajectory"></a>

## 25.2 Recorrido vs. Trayectoria

Imagina caminar desde casa hasta la oficina.

**Recorrido** = la **ruta** que tomas (forma)

> Gira a la izquierda al salir por la puerta, toma la carretera principal, cruza el puente, gira a la derecha, llega a la oficina
> 
> 

No importa lo rápido o lento que camines, **esta ruta permanece igual**.

**Trayectoria** = el **ritmo** al que caminas (tiempo + velocidad)

> Sal por la puerta en 10 segundos, haz una pausa en el puente durante 1 minuto, espera en el semáforo en rojo de abajo durante 30 segundos
> 
> 

Misma carretera, **cambia si caminas rápido o despacio**.

**Diferencia clave**

|Dimensión|Recorrido|Trayectoria|
|:---|:---|:---|
|Descripción|Dónde|Dónde + cuándo|
|Dominio|Espacio|Espacio + tiempo|
|Se ocupa de|Forma|Tiempo, velocidad, aceleración|
|Ejemplo|"Ve en línea recta de A a B"|"Ve de A a B a velocidad constante en 5 segundos"|

**Correspondencia en el brazo robótico**

|Tarea|Recorrido|Trayectoria|
|:---|:---|:---|
|Soldadura|Forma del cordón de soldadura|Velocidad de movimiento a lo largo del cordón|
|Agarre|De A al borde de la taza|Cuándo llegar, cuánto tiempo sujetar|
|Pintura|Zona a pintar|Velocidad de movimiento del pulverizador|

**Orden de planificación**:

> 1. Primero define el **recorrido** (forma)
> 
> 2. Luego define la **trayectoria** (cuándo estar en cada lugar)
> 
> 

**Un ejemplo concreto**

El brazo mueve una taza desde el punto A al punto B.

**Recorrido** (solo forma):

> Elevar -> extender hacia delante -> bajar
> 
> (una curva espacial)
> 
> 

**Trayectoria** (con tiempo):

> Elevar 1 s -> pausa 0,5 s -> extender 2 s -> bajar 1 s
> 
> (ángulos articulares en cada instante)
> 
> 

**El recorrido puede ser correcto mientras que la trayectoria es incorrecta** (por ejemplo, demasiado agresiva, la taza sale volando); **para que la trayectoria sea correcta, primero el recorrido debe ser correcto** (un recorrido erróneo hace inútil una trayectoria precisa).

**Por qué se tratan por separado**

|Etapa|Se ocupa de|
|:---|:---|
|**Planificación del recorrido**|Evitar obstáculos, encontrar una forma factible|
|**Planificación de la trayectoria**|Hacer el movimiento suave, sin sacudidas ni exceso de velocidad|

El **recorrido** es un problema geométrico; la **trayectoria** es un problema de temporización.

**La trayectoria del brazo debe ser "suave"**

No solo "de A a B", sino también:

- Velocidad continua (sin saltos bruscos hacia/desde 0)
- Aceleración continua (sin tirones repentinos)
- Dentro de los límites de velocidad del motor
- Dentro de los límites de par

**Todo esto pertenece a la planificación de la trayectoria**.

## 25.3 Trayectorias en Espacio Articular y en Espacio Cartesiano

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-03.png" alt="Trayectoria a partir de condiciones de contorno" />
</div>

|Dimensión|Trayectoria en espacio articular|Trayectoria en espacio cartesiano|
|:---|:---|:---|
|Objeto interpolado|Ángulos articulares|Pose del efector final|
|Función de interpolación|Polinomio|Línea / arco / geodésica|
|Propiedad de velocidad|Velocidad articular constante|Velocidad constante del efector final|

**Así que "articular vs. cartesiano" se discute en ambos niveles**, pero **lo que más se pregunta suele ser a nivel de recorrido** — porque eso es la clave para que el brazo "haga cosas diferentes".

**Por qué el recorrido recibe más atención**

|Tarea|Qué recorrido elegir|Motivo|
|:---|:---|:---|
|Soldadura|**Cartesiano** (línea recta)|El cordón de soldadura es una línea recta|
|Pintura|**Cartesiano** (curva específica)|La superficie a pintar debe cubrirse|
|Paletizado|Cualquiera, espacio articular|El recorrido final no importa|
|Transporte libre|Espacio articular|No hace falta preocuparse por el recorrido final|
|Colocar después de recoger|Espacio articular|No hay requisito de línea recta|

:::warning
Una trayectoria en espacio cartesiano es la forma natural de *describir* una tarea, pero es la forma costosa de
*ejecutarla*: cada pose muestreada necesita una solución de IK. Planifica en espacio cartesiano y luego comprueba que la
trayectoria articular resultante respeta los límites articulares y se mantiene alejada de las singularidades — o genera
el recorrido en espacio cartesiano y la temporización en espacio articular.
:::

## 25.4 Interpolación Lineal

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-04.png" alt="Por qué la interpolación lineal provoca sacudidas" />
</div>

Trayectoria en espacio articular:

$$
\theta(t) = \theta_{start} + (\theta_{end} - \theta_{start})\,t
$$

La articulación pasa suavemente de 0° a 90°, tomando un valor cada 10% del recorrido.

Trayectoria en espacio de posición:

$$
\mathbf{p}(t) = \mathbf{p}_{start} + (\mathbf{p}_{end} - \mathbf{p}_{start})\,t
$$

El extremo se mueve en línea recta de $(0, 0, 0)$ a $(1, 0, 0)$; una posición intermedia es $\mathbf{p}_{start} + s\,(\mathbf{p}_{end} - \mathbf{p}_{start})$, donde la razón $s$ va de 0 a 1.

**Pros y contras**

El problema es el perfil de velocidad: la articulación se mueve a una velocidad constante distinta de cero y luego se detiene instantáneamente.

$$
\dot{\theta}(t) = \frac{\theta_{end} - \theta_{start}}{T} \ne 0, \qquad \ddot{\theta}(t) = 0
$$

**Ventajas:**

- Simple y fácil de calcular
- Se hace en una sola línea de código
- Alto rendimiento en tiempo real

**Desventajas:**

- La velocidad salta al inicio y al final (no es cero ahí)
- El brazo "da un tirón" al arrancar/parar
- No es adecuada para tareas de alta precisión

El "tirón" de arranque/parada es el problema central — por eso las trayectorias más finas usan polinomios cúbicos/quínticos.

<a id="interpolation"></a>

## 25.5 Interpolación Polinómica

**Por qué se necesitan polinomios**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-05.png" alt="Polinomios lineales, cúbicos y quínticos" />
</div>

**Diferencias clave**

|Dimensión|Lineal|Cúbico|Quíntico|
|:---|:---|:---|:---|
|Velocidad de arranque/parada|Salto|0|0|
|Aceleración de arranque/parada|Salto|Salto|0|
|Suavidad|Pobre|Media|Buena|
|Carga de cálculo|Mínima|Media|Media|
|Mejor para|Movimiento burdo|Uso general|Alta precisión|

**Aplicaciones en brazos robóticos**

|Escenario|Cuál usar|
|:---|:---|
|Transporte burdo, paletizado|Cúbico|
|Soldadura, ensamblaje|**Quíntico**|
|Robots colaborativos|**Quíntico** (deben ser estables alrededor de humanos)|
|Movimiento a alta velocidad|Cúbico (suficiente)|
|Investigación / demostración|Quíntico (el más suave)|

$$
\begin{aligned}
\text{Linear:}\quad  \theta(t) &= a_0 + a_1 t \\
\text{Cubic:}\quad   \theta(t) &= a_0 + a_1 t + a_2 t^2 + a_3 t^3 \\
\text{Quintic:}\quad \theta(t) &= a_0 + a_1 t + a_2 t^2 + a_3 t^3 + a_4 t^4 + a_5 t^5
\end{aligned}
$$

**Quíntico con condiciones de contorno de reposo a reposo** — el brazo arranca en reposo y se detiene en reposo:

$$
\begin{aligned}
\theta(0) &= 0, & \dot{\theta}(0) &= 0, & \ddot{\theta}(0) &= 0 \\
\theta(T) &= 90^\circ, & \dot{\theta}(T) &= 0, & \ddot{\theta}(T) &= 0
\end{aligned}
$$

Seis condiciones, seis incógnitas $a_0, a_1, \ldots, a_5$ — una solución única.

<a id="control"></a>

## 25.6 Feedforward, Feedback y Compensación de Gravedad

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-25/ch25-06.png" alt="Feedforward frente a feedback" />
</div>

El par enviado al motor es **la suma de dos cosas**:

$$
\tau_{cmd} = \underbrace{\tau_{feedforward}}_{\text{calculado de antemano, incl. compensación de gravedad}} + \underbrace{\tau_{feedback}}_{\text{corregido a partir del error, arregla lo que sale mal}}
$$

**Feedforward: enviar por adelantado basándose en el modelo**

Dada la trayectoria y los parámetros del brazo, se puede calcular **cuánto par se necesita en cada instante**:

|El modelo contiene|Propósito|
|:---|:---|
|Término de inercia|Vencer la inercia al acelerar|
|Término de Coriolis|Contrarrestar el acoplamiento al girar|
|**Término de gravedad**|**Presente incluso cuando el brazo está quieto; cancela directamente la gravedad**|

**El término de gravedad es especialmente importante** — el brazo debe enviarlo **incluso estando parado**, de lo contrario la gravedad lo hace caer.

**Analogía**: sabiendo que hoy hay una subida de 5 km, aumentar el esfuerzo por adelantado.

**Feedback: corregir cuando algo va mal**

Por muy preciso que sea el modelo, hay errores y perturbaciones externas -> la posición real se desvía.

El feedback es **comparación en tiempo real y corrección en tiempo real**:

- Cuánto se desvía -> añadir esa cantidad (feedback de posición)
- A qué velocidad se desvía -> amortiguar esa cantidad (feedback de velocidad)

**Analogía**: sabiendo que hoy hay una subida, pero hay baches en la carretera — esquívalos cuando los veas.

**Cómo trabajan juntos**

|Fuente|Papel|Proporción (típica)|
|:---|:---|:---|
|**Feedforward**|La mayor parte del par|80~95%|
|**Feedback**|Compensar pequeños errores|5~20%|

**El feedforward maneja la mayor parte, el feedback maneja el pequeño resto** — juntos son rápidos y precisos.

**Comparación**

|Dimensión|Feedforward|Feedback|
|:---|:---|:---|
|Tiempo|Calcular por adelantado|Corregir en tiempo real|
|Depende de|Precisión del modelo|Lecturas de los sensores|
|Respuesta|Inmediata|Se retrasa un fotograma|
|Rechazo de perturbaciones|Pobre|Fuerte|
|Incluye|Incluye compensación de la gravedad|No lo hace|

**Cómo se ve realmente el controlador**

$$
\begin{aligned}
\tau_{cmd} &= \tau_{feedforward} + \tau_{feedback} \\
&= \underbrace{\big[ M(q)\,\ddot{q} + C(q, \dot{q})\,\dot{q} + G(q) \big]}_{\text{feedforward (incl. gravity)}} + \underbrace{\big[ K_p\,e + K_d\,\dot{e} \big]}_{\text{feedback}}
\end{aligned}
$$

**La gravedad está dentro del feedforward** — no hace falta calcularla por separado.

**En una frase**

> **Feedforward** envía el par por adelantado basándose en el modelo (incluida la gravedad); el **feedback** compensa en tiempo real basándose en el error; **no es necesario mencionar la gravedad por separado** — es el sub-término en el feedforward que debe calcularse incluso cuando el brazo está quieto.
> 
> 

- **Ruta** = geometría, **trayectoria** = temporización; primero planifica la ruta, luego la temporización.
- La interpolación en el espacio articular es barata y libre de singularidades; la interpolación en el espacio cartesiano es lo que normalmente exige la tarea.
- La interpolación lineal sacude; la **cúbica** elimina el salto de velocidad y la **quíntica** también elimina el salto de aceleración.
- El par de mando es **feedforward (modelo + gravedad) más feedback (corrección de error)**; la gravedad vive dentro del feedforward.
- Próximo capítulo: ejecutar todo esto en el modelo real del reBot Arm con Pinocchio y MeshCat.

</div>

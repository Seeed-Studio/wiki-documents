---
description: "Capítulo 4 del Curso para Principiantes en Inteligencia Incorporada de Seeed: fundamentos de los brazos robóticos y los actuadores articulares, incluidos rangos de seguridad, estructura, reductores, codificadores y modos de control de motores DM/RS."
title: Capítulo 4 - Fundamentos de los brazos robóticos y los actuadores articulares
keywords:
  - reBot
  - Robotic Arm
  - Joint Actuator
  - Reducer
  - Encoder
  - DM Motor
  - RS Motor
  - Control Mode
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_4
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 4 · Teoría</span>
    <h2>4. Fundamentos de los brazos robóticos y los actuadores articulares</h2>
    <p>
      Capítulo 4 del Curso para Principiantes en Inteligencia Incorporada de Seeed: fundamentos de los brazos robóticos
      y los actuadores articulares, incluidos rangos de seguridad, estructura, reductores, codificadores y modos de control
      de motores DM/RS.
    </p>
    <div className="hero-actions">
      <a href="#rango-de-seguridad">Safety range</a>
      <a href="#modos-de-control-dm">Control modes</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>4.1 Rango de seguridad y espacio de trabajo del brazo robótico</span>
    <span>4.2 Introducción a la estructura básica de un brazo robótico</span>
    <span>4.3 Actuador articular</span>
    <span>4.4 Reductor</span>
    <span>4.5 Codificador</span>
    <span>4.6 Interfaz y cableado del motor</span>
    <span>4.7 Modos de control del motor DM</span>
    <span>4.8 Diferentes modos de los motores RS</span>
    <span>4.9 Principios de parada de emergencia y apagado anómalo</span>
  </div>
</section>

<RebotCourseNav />

## 4.1 Rango de seguridad y espacio de trabajo del brazo robótico

<section id="safety-range" className="section-card">
  <div className="section-title">
    <span>Seguridad</span>
    <h2>4.1 Rango de seguridad y espacio de trabajo del brazo robótico</h2>
  </div>

Comprender los parámetros de la siguiente tabla es la base para utilizar un brazo robótico de forma segura:

- **Alcance** define el límite de seguridad del brazo robótico y no debe superarse. El rango de alcance define el espacio de trabajo seguro, evitando que el brazo robótico colisione con equipos, vallas o personal durante el movimiento.

- **Carga nominal** establece la base para un funcionamiento seguro y eficiente y no debe superarse durante largos periodos. Ignorar la carga nominal es extremadamente peligroso. Operar más allá de la carga nominal conducirá directamente a: par insuficiente del motor y de las articulaciones, sobrecalentamiento de los componentes y reducción de su vida útil, y fallos mecánicos repentinos.

- **Carga máxima** marca la línea roja física absoluta que nunca debe tocarse: es un límite de resistencia de una sola vez.

:::danger
Tratar la carga máxima como un estándar de uso diario es extremadamente peligroso. Esto significa que cada componente del brazo robótico está trabajando al límite de su resistencia estructural, y cualquier pequeño impacto o cambio de postura podría provocar un fallo estructural catastrófico, como la rotura de una articulación o el colapso del brazo robótico.
:::

| Nombre | reBot Arm DM | reBot Arm RS |
| :--- | :--- | :--- |
| Postura de posición cero | ![reBot DM zero position](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-01.jpg) | ![reBot RS zero position](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-02.jpg) |
| Rango de la articulación J1 | -150° ~ +150° | -150° ~ +150° |
| Rango de la articulación J2 | -220° ~ 0° | -220° ~ 0° |
| Rango de la articulación J3 | -220° ~ 0° | -220° ~ 0° |
| Rango de la articulación J4 | -90° ~ +90° | -90° ~ +90° |
| Rango de la articulación J5 | -90° ~ +90° | -90° ~ +90° |
| Rango de la articulación J6 | -180° ~ +180° | -180° ~ +180° |
| Rango de la pinza | -325° ~ 0° | -345° ~ 0° |

:::note Zero position posture
La postura de posición cero del brazo robótico es la referencia absoluta para toda la planificación de movimiento y el cálculo de posición. Cuando el brazo robótico necesita moverse a un cierto punto, en esencia calcula cuánto necesita girar cada articulación desde el punto de partida de la posición cero. Por lo tanto, al establecer el punto cero de cada motor articular e inicializar el brazo robótico, se debe mantener esta postura.
:::

Los límites mecánicos son fronteras físicas duras determinadas por la propia estructura mecánica y no pueden cambiarse. Actúan como topes físicos, limitando fundamentalmente el rango de ángulo de giro de las articulaciones. Esto evita que el brazo robótico gire en exceso debido a una pérdida de control, lo que podría causar daños a su propia estructura o colisiones con el equipo circundante.

:::tip
Aunque todas las articulaciones del brazo robótico tienen límites mecánicos, aún debes prestar atención al rango de movimiento de las diferentes articulaciones para evitar que los motores de las articulaciones se queden bloqueados durante largos periodos por exceder el rango de movimiento.
:::

</section>

## 4.2 Introducción a la estructura básica de un brazo robótico

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estructura</span>
    <h2>4.2 Introducción a la estructura básica de un brazo robótico</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-03.jpg" alt="Basic structure of a robotic arm" />
</div>

| Nombre | Posición | Eje de movimiento | Función |
| :--- | :--- | :--- | :--- |
| Base | La parte donde se fija el motor 1 | Gira alrededor del eje vertical de la base (eje Z) | Permite que todo el brazo robótico gire horizontalmente |
| Hombro | La parte sobresaliente que contiene el motor 2 | Gira alrededor del eje horizontal del hombro (eje Y) | Permite que el brazo superior se incline hacia adelante/atrás o se eleve/baje con respecto al hombro |
| Brazo superior | La parte que conecta la articulación del hombro y la articulación del codo | Gira alrededor del eje horizontal del codo (eje Y) | Permite que el antebrazo se doble o se extienda con respecto al brazo superior |
| Codo | La parte que contiene el motor 3, situada en la unión del brazo superior y el antebrazo | Gira alrededor del eje horizontal de la muñeca (eje Y) | Permite que la muñeca se balancee hacia arriba y hacia abajo; junto con el giro de muñeca, determina conjuntamente la dirección de apuntado del extremo del brazo robótico en el espacio |
| Antebrazo | La parte que conecta la articulación del codo y la articulación de la muñeca | Gira alrededor del eje vertical de la muñeca (eje Z) | Permite que la muñeca se balancee hacia la izquierda y la derecha; junto con la flexión de muñeca, determina conjuntamente la dirección de apuntado del extremo del brazo robótico en el espacio |
| Muñeca | La parte que contiene los motores 4, 5 y 6, situada entre la pinza final y el antebrazo | Gira alrededor del eje central de la muñeca (eje X) | Permite que el extremo de la muñeca gire alrededor de su propio eje central |
| Pinza | La parte que contiene el motor 7, montada en la muñeca | Apertura/cierre traslacional | Permite que el brazo robótico agarre objetos |

</section>

## 4.3 Actuador articular

<section id="joint-actuator" className="section-card">
  <div className="section-title">
    <span>Actuador</span>
    <h2>4.3 Actuador articular</h2>
  </div>

Un actuador articular consta de **controlador → motor → reductor → cojinete/brida de salida → eslabón del robot**, mientras que al mismo tiempo **codificador/sensor de par → controlador → controlador** forma un control en lazo cerrado.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-04.jpg" alt="Joint actuator" />
</div>

</section>

## 4.4 Reductor

<section id="reducer" className="section-card">
  <div className="section-title">
    <span>Reductor</span>
    <h2>4.4 Reductor</h2>
  </div>

El par original que entrega un motor suele ser muy pequeño, pero mediante engranajes con una relación de reducción `i`, el par de salida se amplifica por un factor de `i`.

- Sin un reductor, para entregar un gran par, habría que aumentar el núcleo de hierro y los imanes, lo que haría que el volumen del motor fuera muy grande, provocando un aumento desmesurado de los costes y del peso.
- Un reductor es la palanca física óptima que intercambia alta velocidad de rotación por un gran par.
- El rotor del motor en sí es muy ligero y, cuando la carga es pesada, el motor puede oscilar violentamente durante la aceleración y la deceleración. Un reductor puede dividir la inercia de carga reflejada en el eje del motor por el cuadrado de la relación de reducción, haciendo que el lazo de corriente del motor sea más estable.

El brazo robótico reBot adopta actualmente dos soluciones técnicas de accionamiento articular diferentes: **motor articular con engranaje planetario Damiao DM** y **motor articular Lingzu Era RS QDD (quasi-direct-drive)**. La diferencia central entre ambas no es solo la marca del motor, sino **el grado de reducción del reductor**.

En pocas palabras:

> **Solución DM:** Se basa en una gran relación de reducción para “amplificar” el par de salida del motor.
> **Solución RS:** Minimiza la relación de reducción, permitiendo que el propio motor soporte una mayor parte del par de salida.

Por lo tanto, las dos soluciones producen diferencias significativas en **par de salida, velocidad de movimiento, retroconducibilidad, control de fuerza, impedancia mecánica, resistencia a impactos y peso estructural**.

### 4.4.1 Reductor planetario

Los reductores utilizados tanto en los motores DM como en los RS son reductores planetarios. Por lo tanto, aquí solo se introduce el principio de los reductores planetarios.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-05.png" alt="Planetary reducer" />
</div>

Un reductor planetario generalmente tiene la corona dentada fija, el engranaje solar como entrada y el portaplanetas como salida. En este caso, la relación de transmisión del motor es máxima. Supongamos que la relación de transmisión es `i`. La relación de transmisión `i` solo está relacionada con el número de dientes de la corona `Zr` y el número de dientes del engranaje solar `Zs`. La expresión de la relación de transmisión es:

$$
i = 1 + \frac{Z_r}{Z_s}
$$

Una rotación del engranaje solar impulsa a los engranajes planetarios a girar sobre sus propios ejes. Pero como la corona está fija, los engranajes planetarios no pueden simplemente girar alrededor de un eje fijo; en su lugar, hacen que el portaplanetas gire lentamente. En este momento, el rotor del motor gira `i` veces y el portaplanetas gira aproximadamente 1 vez.

:::note
La velocidad del portaplanetas de salida se reduce en un factor de `i`, pero el par de salida aumenta en un factor de `i`. Por lo tanto, el reductor planetario convierte la alta velocidad y el pequeño par del motor en la baja velocidad y el gran par que requiere la articulación.
:::

### 4.4.2 Solución DM: motor articular con engranaje planetario

La versión DM de reBot utiliza motores articulares con engranaje planetario de Damiao Technology, por ejemplo:

- **DM4310:** Relación de reducción aproximadamente 10:1
- **DM4340P:** Relación de reducción aproximadamente 40:1

:::info
La versión P en el DM4340P adopta una estructura de rodamiento de rodillos cruzados, utilizada para soportar las cargas radiales y axiales generadas durante el funcionamiento de la articulación.
:::

Su estructura básica se puede entender como:

**Motor de alta velocidad → Reductor planetario → Eje de salida de la articulación**

El propio motor tiene una velocidad de rotación relativamente alta pero un par de salida limitado. Después de pasar por el reductor planetario, la velocidad de salida disminuye mientras que el par de salida se amplifica.

Idealmente, cuando la relación de reducción es (N:1):

$$
\begin{aligned}
\omega_{\text{out}} &= \frac{\omega_{\text{motor}}}{N} \\
T_{\text{out}} &\approx T_{\text{motor}} \times N \times \eta
\end{aligned}
$$

Donde:

- `N`: relación de reducción
- `ω_motor`: velocidad de rotación
- `T`: par
- `η`: eficiencia de transmisión del reductor

:::note Example
Bajo las mismas demás condiciones, un reductor 40:1 puede proporcionar una mayor capacidad de amplificación de par en comparación con un reductor 10:1, pero al mismo tiempo la velocidad de salida se reducirá aún más.
:::

Por lo tanto, la idea central de la solución DM se puede resumir como:

> **"El motor se encarga de la rotación a alta velocidad y el reductor se encarga de amplificar el par."**

**Ventajas principales de la solución DM:**

- Gran par de salida
- Carga del motor relativamente baja
- Adecuada para articulaciones que requieren gran capacidad de carga estática
  - Brazos robóticos de gran carga
  - Escenarios que requieren un gran par en las articulaciones
  - Escenarios donde el requisito de velocidad absoluta de salida de la articulación no es particularmente alto

**Desventajas principales de la solución DM:**

- Mala capacidad de backdrivability
  > Cuanto mayor es la relación de reducción, más "difícil de empujar" suele ser el brazo robótico.
- Alta impedancia mecánica
- La velocidad de salida es limitada

### 4.4.3 Solución RS: Motor de articulación QDD de cuasi accionamiento directo

La versión reBot RS adopta el **motor de articulación QDD (Quasi-Direct Drive)** de Lingzu Era. La idea central de QDD es exactamente opuesta a la de las articulaciones tradicionales de alta relación de reducción:

> **Minimizar la relación de reducción, permitiendo que el motor asuma directamente más de la tarea de salida de la articulación.**

Su estructura básica se puede entender como: **Motor de alta densidad de par → Reductor planetario de baja relación de reducción → Eje de salida de la articulación.** Por lo tanto, QDD no está completamente exenta de reductor, sino que:

> **"El reductor solo proporciona una pequeña cantidad de amplificación de par, confiando principalmente en la alta densidad de par del propio motor para obtener el par de salida de la articulación."**

**¿Por qué QDD requiere un motor más potente?** Esta es la clave para entender la diferencia entre las dos soluciones. Supongamos que ambas articulaciones finalmente necesitan entregar:

$$
T_{\text{out}} = 40\ \mathrm{N} \cdot \mathrm{m}
$$

Si se utiliza un reductor 40:1, entonces teóricamente el motor solo necesita proporcionar:

$$
T_{\text{motor}} \approx \frac{40}{40} = 1\ \mathrm{N} \cdot \mathrm{m}
$$

Si se utiliza un reductor 8:1, entonces necesita:

$$
T_{\text{motor}} \approx \frac{40}{8} = 5\ \mathrm{N} \cdot \mathrm{m}
$$

Es decir: **Después de reducir la relación de reducción, el motor debe proporcionar más par por sí mismo.** Por lo tanto, la solución QDD impone mayores exigencias al motor, requiriendo que el motor tenga:

- Mayor densidad de par
- Mayor diámetro efectivo
- Mayor capacidad de disipación de calor
- Mayor capacidad de soportar corriente pico
- Mejor capacidad de sobrecarga

Esta es también la razón por la que QDD suele adoptar soluciones como motores de rotor externo de alta densidad de par. Revisiones relacionadas también señalan que QDD obtiene mejor backdrivability y transparencia de fuerza al reducir la relación de reducción, pero a costa de imponer mayores exigencias a la densidad de par del motor.

El mayor valor de QDD no es simplemente "una relación de reducción más pequeña", sino: **hacer que la articulación se acerque más a las características dinámicas del propio motor.** Debido a la baja relación de reducción, la influencia del reductor sobre el movimiento del sistema es relativamente pequeña, por lo que la articulación tiene mejor backdrivability.

### 4.4.4 Diferencias clave entre las dos soluciones

Las dos soluciones se pueden entender como dos filosofías de diseño completamente diferentes.
|      **Elemento de comparación**     |     **Accionamiento por engranajes planetarios DM**    |                    **RS QDD (Quasi-Direct Drive)**                   |
| :--------------------------: | :--------------------------------: | :------------------------------------------------------------------: |
|       **Concepto central**       | Amplifica el par mediante una caja de engranajes |           Depende de un motor de alta densidad de par para la salida           |
|    **Relación de engranajes típica**    |             10:1, 40:1             |                     Normalmente alrededor de 7.75:1–10:1                     |
| **Requisito de par del motor** |           Relativamente bajo           |                                Más alto                                |
|       **Par de salida**      |                Alto                |             Alto, pero más dependiente del propio motor             |
|       **Velocidad de salida**       |           Relativamente baja           |                            Relativamente alta                           |
|      **Backdrivability**     |                Menor               |                                Mayor                                |
|   **Impedancia mecánica**   |               Mayor               |                                 Menor                                |
|    **Transparencia de fuerza**    |                Menor               |                                Mayor                                |
|     **Control de cumplimiento**    |        Relativamente difícil        |                           Más ventajoso                          |
|     **Resistencia a impactos**    |  Depende de la estructura de la caja de engranajes  | Las relaciones de engranajes más bajas generalmente son más favorables para la resistencia a impactos |
|     **Mantenimiento de posición**     |              Más fuerte              |                  Depende más del control activo del motor                 |
|    **Requisitos del motor**    |           Relativamente bajos           |         Alta densidad de par y alta capacidad de corriente pico         |
|    **Ventajas típicas**    |  Alta capacidad de par y carga útil  |         Respuesta dinámica, backdrivability y control de fuerza         |
|       **Elevación térmica**       |               Más lenta               |                                Más rápida                                |


La alta transparencia de fuerza, la fuerte backdrivability y la baja impedancia mecánica aportadas por la baja relación de reducción de QDD son sus ventajas centrales sobre las soluciones de transmisión de alta relación de reducción; al mismo tiempo, una baja relación de reducción también significa que el motor necesita soportar un mayor par, por lo tanto imponiendo mayores exigencias a la densidad de par del motor y a la gestión térmica.

:::tip Summary

- **La solución de engranajes planetarios DM** "intercambia un reductor mecánico por un mayor par de salida".
- **La solución QDD de cuasi accionamiento directo** "intercambia un motor de mayor rendimiento por un mejor rendimiento dinámico y capacidad de control de fuerza".

No existe en sentido absoluto un "cuál es más avanzado" entre las dos. Para un brazo robótico, la elección real depende del objetivo de la aplicación:

- **Si la capacidad de carga, la rigidez de la articulación y el gran par de salida son más importantes** → la solución DM tiene más ventajas.
- **Si la velocidad de movimiento, la backdrivability, la colaboración hombre-robot y el control de fuerza son más importantes** → la solución QDD tiene más ventajas.

Y para brazos robóticos orientados a la interacción hombre-robot, el aprendizaje por imitación y el aprendizaje por refuerzo, la baja impedancia mecánica y la alta backdrivability de QDD son particularmente atractivas, porque las características dinámicas del brazo robótico están más cerca del estado de "el motor impulsa directamente la carga", lo que es propicio para el movimiento de alta dinámica y el control de interacción de fuerza.
:::

</section>

## 4.5 Encoder

<section id="encoder" className="section-card">
  <div className="section-title">
    <span>Encoder</span>
    <h2>4.5 Encoder</h2>
  </div>

Un encoder se utiliza para medir el ángulo de rotación. Los tipos comunes incluyen encoders incrementales, encoders absolutos multiturno y encoders absolutos de una vuelta. Tanto los motores Damiao (DM) como los motores Lingzu (RS) contienen 2 encoders magnéticos absolutos de una vuelta. La resolución del encoder es de 14 bits para ambos.

### Cómo un encoder magnético de posición absoluta determina la posición

Un encoder magnético de posición absoluta utiliza un imán giratorio para cambiar la dirección del campo magnético y calcula el ángulo a través de un chip magnetorresistivo, conociendo directamente la posición actual al encenderse.

:::info Analogy
Imagina el encoder magnético como una brújula inteligente con su propio "mapa".

- El imán es un pequeño imán giratorio fijado en el rotor del motor. Cuando gira, la dirección del campo magnético circundante cambia en consecuencia — igual que la aguja de una brújula siempre apunta al sur, pero esta aguja puede girar.
- El chip magnetorresistivo es el "sensor del mapa". Tiene marcas de dirección de 360° a su alrededor y puede leer en tiempo real, como leer una brújula, si el campo magnético actual apunta a 0°, 90° o 270°.
:::

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-06.png" alt="Absolute position magnetic encoder" />
</div>

### Por qué los motores de articulación utilizan dos encoders

Un motor de articulación contiene 2 encoders magnéticos de posición absoluta, uno que mide el rotor del motor de alta velocidad y otro que mide el eje de salida de la articulación del robot, utilizados para compensar los errores del reductor, mejorar la precisión y garantizar la seguridad.

:::info Analogy
Estás sentado en un coche, sosteniendo el volante (extremo del rotor del motor), pero el volante no está conectado directamente a las ruedas; en su lugar, está conectado a las ruedas (extremo de salida del motor) a través de un largo eje flexible elástico de resorte (reductor).

Si el volante gira 10 vueltas pero las ruedas solo giran 9.8 vueltas, el sistema sabe inmediatamente que 0.2 vueltas fueron absorbidas por el eje flexible de resorte, y compensa de inmediato un poco más — esto compensa el error con una precisión extremadamente alta.
:::

### La posición no se pierde después de apagar

El motor no pierde la posición después de apagarse porque el codificador absoluto guarda la posición actual. Al volver a encender, lee los ángulos del lado del motor y del lado de salida, y luego recupera la posición mediante la verificación de la relación de reducción.

</section>

## 4.6 Interfaz y cableado del motor

<section id="interfaces" className="section-card">
  <div className="section-title">
    <span>Interfaces</span>
    <h2>4.6 Interfaz y cableado del motor</h2>
  </div>

### Interfaz y cableado del motor DM

| Nombre | Imagen | Función |
| :--- | :--- | :--- |
| XT30 (2+2) | ![XT30 2+2](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-07.png) | 1. Conecta la fuente de alimentación a través del cable de alimentación con conector XT30(2+2)-F, con un voltaje nominal de 24 V, para alimentar el motor. <br/>2. Conecta dispositivos de control externos a través del terminal de comunicación CAN, que puede recibir comandos de control CAN y retroalimentar información de estado del motor. <br/>3. El motor contiene dos interfaces de alimentación; cualquiera de las interfaces (incluido el terminal de comunicación CAN) se puede usar de forma independiente, o se pueden conectar varios motores en serie para un cableado conveniente. |
| GH1.25 de 3 pines | ![GH1.25 3pin](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-08.png) | A través del cable GH1.25 de 3 pines, utiliza una herramienta de depuración USB2CAN para conectarte a un PC y usa el asistente de depuración de Damiao Technology para realizar ajustes de parámetros y actualizaciones de firmware en el motor. |

### Interfaz y cableado del motor RS

| Nombre | Imagen | Función |
| :--- | :--- | :--- |
| XT30 (2+2) | ![XT30 2+2](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-09.png) | 1. Conecta la fuente de alimentación a través del cable de alimentación con conector XT30(2+2)-F, con un voltaje nominal de 24 V, para alimentar el motor. <br/>2. Conecta dispositivos de control externos a través del terminal de comunicación CAN, que puede recibir comandos de control CAN y retroalimentar información de estado del motor. <br/>3. El motor contiene dos interfaces de alimentación; cualquiera de las interfaces (incluido el terminal de comunicación CAN) se puede usar de forma independiente, o se pueden conectar varios motores en serie para un cableado conveniente. |

</section>

## 4.7 Modos de control del motor DM

<section id="dm-control-modes" className="section-card">
  <div className="section-title">
    <span>Modos de control DM</span>
    <h2>4.7 Modos de control del motor DM</h2>
  </div>

El controlador electrónico de velocidad convierte los datos CAN recibidos en variables de control para el cálculo, obteniendo un valor de par como referencia de corriente para el lazo de corriente. El lazo de corriente finalmente alcanza la corriente de par dada de acuerdo con su ley de ajuste.

### Protocolo MIT

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-10.jpg" alt="MIT protocol" />
</div>

El modo MIT puede controlar el motor mediante tres parámetros: **posición, velocidad y par**.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **Pdes**: Posición objetivo
- **Vdes**: Velocidad objetivo
- **Kp**: Intensidad del control de posición; cuanto mayor sea Kp, más tenderá el motor a volver rápidamente a la posición objetivo
- **Kd**: Intensidad del control de velocidad; se puede usar para suprimir la vibración del motor y hacer que el movimiento sea más estable
- **T_ff**: Par dado directamente

Se puede entender de forma sencilla como:

**Salida del motor = Control de posición + Control de velocidad + Par de avance (feedforward)**

El modo MIT puede lograr diferentes métodos de control según distintas combinaciones de parámetros:

**Control de posición**

1. Establece Pdes, Kp, Kd.
2. El motor se moverá a la posición especificada y suprimirá la vibración durante el movimiento mediante Kd.

**Control de velocidad**

1. Establece Kp = 0, Kd ≠ 0
2. Luego da Vdes para controlar que el motor gire a la velocidad objetivo.

**Control de par**

1. Establece Kp = 0, Kd = 0
2. Luego establece directamente T_ff para controlar que el motor entregue el par especificado.

:::warning
Al controlar la posición, kd no se puede establecer en 0, de lo contrario causará oscilación del motor o incluso pérdida de control.
:::

### Modo posición-velocidad

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-11.jpg" alt="Position-velocity mode" />
</div>

El modo de cascada de posición adopta un modo de control en cascada de tres lazos, con el lazo de posición como el lazo más externo, cuya salida es la referencia para el lazo de velocidad, y la salida del lazo de velocidad es la referencia para el lazo de corriente interno, utilizado para controlar la corriente de salida real.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **p_des**: La posición objetivo para el control.
- **v_des**: Se utiliza para limitar la velocidad absoluta máxima durante el movimiento.
- **kp_pos**: Determina el factor de amplificación del error de posición sobre la orden de velocidad.
- **ki_pos**: Determina la fuerza estática de mantenimiento de posición.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad anti-perturbación de carga durante el segmento de velocidad constante.

:::note
Si el modo de cascada de posición utiliza los parámetros de control recomendados por el asistente de depuración, puede lograr una buena precisión de control y el proceso de control es relativamente estable, pero el tiempo de respuesta es relativamente largo. Además de v_des, los parámetros relacionados configurables también incluyen los ajustes de aceleración/desaceleración. Si se produce oscilación adicional durante el proceso de control, se puede aumentar la aceleración/desaceleración.

Las unidades de p_des y v_des son rad y rad/s respectivamente, el tipo de datos es float, y el factor de amortiguamiento debe establecerse en un número positivo distinto de cero.
:::

### Modo de velocidad

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-12.jpg" alt="Velocity mode" />
</div>

El lazo externo del modo de velocidad es el lazo de velocidad, y la salida del lazo de velocidad sirve como referencia para el lazo de corriente interno.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **v_des**: Velocidad objetivo durante el movimiento.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad anti-perturbación de carga durante el segmento de velocidad constante.

:::note
La unidad de v_des es rad/s y el tipo de datos es float. Si necesitas usar el asistente de depuración para calcular automáticamente los parámetros, debes establecer el factor de amortiguamiento en un número positivo distinto de cero, generalmente en el rango de 2.0 a 10.0. Un factor de amortiguamiento demasiado pequeño traerá oscilación de velocidad y un gran sobreimpulso, mientras que un factor de amortiguamiento demasiado grande traerá un tiempo de subida largo. El valor de ajuste recomendado es 4.0.
:::

### Modo PVT (control híbrido fuerza-posición)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-13.jpg" alt="PVT mode" />
</div>

El modo PVT (control híbrido fuerza-posición) controla dinámicamente la magnitud del par de salida basándose en el control del modo posición-velocidad. Se añade un eslabón de saturación de la orden de corriente después de la orden de salida del lazo de velocidad, de modo que la referencia del lazo de corriente se limite dentro de un rango dado.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **p_des**: La posición objetivo para el control.
- **v_des**: Se utiliza para limitar la velocidad absoluta máxima durante el movimiento.
- **kp_pos**: Determina el factor de amplificación del error de posición sobre la orden de velocidad.
- **ki_pos**: Determina la fuerza estática de mantenimiento de posición.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad anti-perturbación de carga durante el segmento de velocidad constante.

</section>

## 4.8 Diferentes modos de los motores RS

<section id="rs-control-modes" className="section-card">
  <div className="section-title">
    <span>Modos de control RS</span>
    <h2>4.8 Diferentes modos de los motores RS</h2>
  </div>

### Modo de control de movimiento

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-14.png" alt="RS motion control mode" />
</div>

El modo de control de movimiento de RS es similar al modo MIT de DM. La lógica de control del modo de control de movimiento es la siguiente:

$$
t_{\text{ref}} = K_d\,(v_{\text{des}} - v_{\text{actual}}) + K_p\,(p_{\text{des}} - p_{\text{actual}}) + t_{\text{ff}}
$$

Finalmente, t_ref se convierte en la corriente iq deseada mediante una fórmula interna y se entrega a través del lazo de corriente.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **Pdes**: Posición objetivo
- **Vdes**: Velocidad objetivo
- **Kp**: Intensidad del control de posición; cuanto mayor sea Kp, más tenderá el motor a volver rápidamente a la posición objetivo
- **Kd**: Intensidad del control de velocidad; se puede usar para suprimir la vibración del motor y hacer que el movimiento sea más estable
- **T_ff**: Par dado directamente

Se puede entender de forma sencilla como:

**Salida del motor = Control de posición + Control de velocidad + Par de avance (feedforward)**

El modo de control de movimiento puede lograr diferentes métodos de control según distintas combinaciones de parámetros:

**Control de posición**

1. Establece Pdes, Kp, Kd.
2. El motor se moverá a la posición especificada y suprimirá la vibración durante el movimiento mediante Kd.

**Control de velocidad**

1. Establece Kp = 0, Kd ≠ 0
2. Luego da Vdes para controlar que el motor gire a la velocidad objetivo.

**Control de par**

1. Establece Kp = 0, Kd = 0
2. Luego establece directamente T_ff para controlar que el motor entregue el par especificado.

### Modo de corriente

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-15.png" alt="RS current mode" />
</div>

Este proporciona el lazo de corriente del motor como interfaz de control para el usuario. Este modo generalmente no se utiliza. El uso de esta interfaz puede consultarse en el algoritmo FOC.

### Modo de velocidad

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-16.png" alt="RS velocity mode" />
</div>

El modo de velocidad utiliza la diferencia entre la velocidad establecida y la velocidad actual como entrada al controlador PI, y el par de salida del controlador PI se limita a un rango. El par se convierte en la corriente iq deseada mediante una fórmula interna y se entrega a través del lazo de corriente.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **v_des**: Velocidad objetivo durante el movimiento, es decir, la velocidad actual.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad de anti-perturbación de carga durante el segmento de velocidad constante.
- **Protección de par**: Limita el par de salida.

### Modo posición-velocidad (CSP)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-17.png" alt="RS position-velocity mode CSP" />
</div>

El modo de posición CSP también se puede llamar modo posición-velocidad. La diferencia entre el ángulo establecido y el ángulo actual se utiliza como entrada al lazo de posición, donde el lazo de posición es un controlador puramente proporcional. La salida del lazo de posición pasa por una limitación de velocidad y luego sirve como entrada al lazo de velocidad. El lazo de velocidad es un controlador PI, y el par de salida pasa por una limitación de protección de par y luego se convierte en la corriente iq deseada, que se entrega a través del lazo de corriente.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

- **p_des**: La posición objetivo para el control.
- **v_des**: Se utiliza para limitar la velocidad absoluta máxima durante el movimiento.
- **kp_pos**: Determina el factor de amplificación del error de posición sobre la orden de velocidad.
- **ki_pos**: Determina la fuerza estática de mantenimiento de posición.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad de anti-perturbación de carga durante el segmento de velocidad constante.
- **Protección de par**: Limita el par de salida deseado.

### Modo posición-velocidad (PP)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-18.png" alt="RS position-velocity mode PP" />
</div>

Este modo es también la interfaz de modo posición-velocidad proporcionada por motorbridge.

El modo de posición PP añade una planificación de curva de velocidad trapezoidal en comparación con CSP. Introduce la velocidad establecida, el ángulo establecido y la aceleración establecida, y genera el ángulo planificado. El ángulo planificado generado por el planificador de curva en T sirve como entrada al lazo de posición, donde el lazo de posición es un controlador puramente proporcional. La salida del lazo de posición pasa por una limitación de velocidad y luego sirve como entrada al lazo de velocidad. El lazo de velocidad es un controlador PI, y el par de salida pasa por una limitación de protección de par y luego se convierte en la corriente iq deseada, que se entrega a través del lazo de corriente.

El par de salida final del motor está determinado principalmente en conjunto por los siguientes parámetros:

**Parámetros del planificador de curva en T:**

- **p_set**: La posición objetivo deseada establecida.
- **v_des**: El valor de velocidad deseado establecido.
- **Acc_set**: La aceleración deseada establecida.

**Parámetros del lazo de posición / lazo de velocidad:**

- **p_des**: La posición objetivo para el control.
- **v_des**: Se utiliza para limitar la velocidad absoluta máxima durante el movimiento.
- **kp_pos**: Determina el factor de amplificación del error de posición sobre la orden de velocidad.
- **ki_pos**: Determina la fuerza estática de mantenimiento de posición.
- **kp_vel**: Determina directamente el par de aceleración dinámica.
- **ki_vel**: Determina la capacidad de anti-perturbación de carga durante el segmento de velocidad constante.
- **Protección de par**: Limita el par de salida deseado.

</section>

## 4.9 Principios de parada de emergencia y apagado anómalo

<section id="emergency-stop" className="section-card">
  <div className="section-title">
    <span>Seguridad</span>
    <h2>4.9 Principios de parada de emergencia y apagado anómalo</h2>
  </div>

:::danger Reglas de parada de emergencia
1. **El sacudido anómalo debe apagarse inmediatamente.** El sacudido de alta frecuencia significa que el motor está entregando pares de avance y retroceso de alta frecuencia, y si no se corta la alimentación de inmediato, puede provocar daños en el motor.

2. **Al golpear un límite se debe apagar inmediatamente.** Golpear un límite significa que el motor puede estar bloqueado. Si no se corta la alimentación de inmediato, puede provocar sobrecalentamiento o daños en el motor.

3. **Situaciones anómalas como la caída repentina del brazo robótico deben apagarse inmediatamente** para evitar otras situaciones inesperadas.
:::

</section>

</div>

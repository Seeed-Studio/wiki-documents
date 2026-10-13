---
description: "Capítulo 23 del Curso de Introducción a la IA Física de Seeed: marcos de coordenadas y transformaciones homogéneas: marcos del mundo, base, articulaciones, efector final y cámara; vectores y matrices; matrices de traslación y rotación; encadenamiento de transformaciones; y ángulos de Euler frente a cuaterniones."
title: Capítulo 23 - Fundamentos Matemáticos del Brazo Robótico y Sistemas de Coordenadas
hide_title: true
keywords:
  - reBot
  - Brazo Robótico
  - Marco de Coordenadas
  - Transformación Homogénea
  - Ángulos de Euler
  - Cuaternión
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_23
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_23/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 5 · Capítulo 23 · Teoría</span>
    <h2>23. Fundamentos Matemáticos del Brazo Robótico y Sistemas de Coordenadas</h2>
    <p>
      Capítulo 23 del Curso de Introducción a la IA Física de Seeed: marcos de coordenadas y transformaciones homogéneas: marcos del mundo, base, articulaciones, efector final y cámara; vectores y matrices; matrices de traslación y rotación; encadenamiento de transformaciones; y ángulos de Euler frente a cuaterniones.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizaje</a>
      <a href="#frames">Marcos de coordenadas</a>
      <a href="#transforms">Transformaciones homogéneas</a>
    </div>
  </div>
</section>

### Hardware necesario para esta etapa

Lo que hay que preparar para esta etapa. La lista completa de todas las etapas está en [el capítulo 3](/es/rebot_physical_ai_course_chapter_3/).

**Unidad de control principal**

| Artículo | Comprar | Cant. |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

También se requiere un sobremesa o portátil: Ubuntu 22.04, GTX 4080 o superior con 12 GB+ de VRAM y 16 GB+ de RAM.

**Para esta etapa**

| Artículo | Comprar | Cant. |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |


<section className="section-card">
  <div className="section-title">
    <span>Visión general</span>
    <h2>Dónde se sitúa esta etapa en el curso</h2>
  </div>

  El contenido introducido en estos capítulos pertenece al **control tradicional**, es decir, controlar el brazo robótico mediante programación codificada a mano. El control tradicional se utiliza en la gran mayoría de los proyectos desplegados. Su ventaja es la estabilidad y la fiabilidad, lo cual es especialmente valioso en escenarios de producción industrial. Su desventaja es que en un entorno nuevo requiere volver a ajustarse antes de poder funcionar de forma estable.

  | Capítulo | Título | Tipo | Enfoque |
  | :--- | :--- | :--- | :--- |
  | **23** | Fundamentos Matemáticos del Brazo Robótico y Sistemas de Coordenadas | Teoría | Marcos, vectores, transformaciones homogéneas, representaciones de rotación |
  | **24** | Cinemática Directa, Cinemática Inversa y el Jacobiano | Teoría | Cómo se conectan los ángulos articulares y la pose del efector final |
  | **25** | Planificación de Trayectorias y Control del Brazo Robótico | Teoría | Camino vs trayectoria, interpolación, feedforward + feedback |
  | **26** | Pinocchio y MeshCat | Práctica | Ejecutar FK / IK / planificación de trayectorias en el modelo real del brazo reBot |

  :::tip
  Los capítulos 23–25 son material de referencia: en proyectos reales el URDF y la biblioteca de cinemática hacen
  el trabajo matricial por ti. Léelos una vez para entender *qué significan los números*, y luego consérvalos como
  referencia de consulta mientras trabajas en el Capítulo 26.
  :::

  **Por qué la etapa 5 viene después de la etapa 4.** La etapa 3 y la etapa 4 enseñaron al brazo a imitar y a seguir el lenguaje. Esos sistemas son aprendidos: ven el mundo y actúan sobre él, pero no *garantizan* nada. En el momento en que necesitas una costura de soldadura recta, una sujeción repetible o una parada de emergencia segura, necesitas la capa determinista por debajo: las matemáticas y el control de movimiento de esta etapa.
  La imagen de arriba es el contraste en una sola imagen: un VLM describe el mundo, un VLA actúa sobre él, y todo lo que aprendes aquí decide *cómo* se ejecuta realmente la acción.

  | Aspecto | VLM (Vision-Language Model) | VLA (Vision-Language-Action Model) |
  | :--- | :--- | :--- |
  | Entrada | Imagen + pregunta | Imagen + instrucción de tarea (+ estado del robot) |
  | Salida | Una descripción en texto | Una secuencia de acciones del robot |
  | Propósito | Entender y describir | Entender y actuar |
  | Modelos típicos | LLaVA, Qwen-VL | GR00T, pi0 |
  | Usado en | Percepción, anotación, depuración | Control de robots reales (Etapa 4) |
</section>

<a id="objectives"></a>

## 23.1 Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:

1. Explicar qué es un marco de coordenadas y por qué un brazo robótico necesita varios de ellos.
2. Nombrar el marco del mundo, el marco base, el marco del espacio articular, el marco del efector final/herramienta y el marco de la cámara, y decir a qué está unido cada uno.
3. Escribir una traslación y una rotación como una matriz de transformación homogénea 4x4, y multiplicar dos de ellas a mano.
4. Explicar por qué existen las coordenadas homogéneas y qué se pierde con la notación "no homogénea".
5. Decir cuándo usar ángulos de Euler y cuándo usar cuaterniones.

## 23.2 Conceptos Básicos de Vectores y Matrices

La cinemática directa e inversa (tratada en el siguiente capítulo) implica una gran cantidad de vectores y matrices, por lo que es importante construir una base sólida de matrices. En el control real no necesitamos participar nosotros mismos en los cálculos de bajo nivel, así que este capítulo se proporciona solo como referencia.

- Un **vector** describe una magnitud con dirección y módulo: una posición, una velocidad, una fuerza.
- Una **matriz** describe una aplicación lineal: cómo un vector en un marco se convierte en un vector en otro marco.
- Los tres objetos usados en todas partes en robótica son el **vector de posición 3x1** $\mathbf{p}$, la **matriz de rotación 3x3** $R$, y la **transformación homogénea 4x4** $T$.

Una comprobación útil de cordura para cualquier matriz de rotación $R$:

$$
\begin{aligned}
R^\top R &= I && \text{(ortonormal)} \\
\det(R) &= +1 && \text{(una rotación propia, sin espejado)}
\end{aligned}
$$

<details>
<summary><strong>Microejemplo resuelto: leer una transformación 4x4</strong></summary>

$$
T =
\begin{pmatrix}
0 & 0 & 1 & 0.30 \\
0 & 1 & 0 & 0.05 \\
-1 & 0 & 0 & 0.42 \\
0 & 0 & 0 & 1
\end{pmatrix},
\qquad
R =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{pmatrix},
\qquad
\mathbf{t} =
\begin{pmatrix}
0.30 \\ 0.05 \\ 0.42
\end{pmatrix}
$$

Lee las columnas de $R$ como los ejes del marco hijo expresados en el marco padre:

- x hijo = $[0,\ 0,\ -1]^\top$ -> apunta hacia abajo en el marco padre
- y hijo = $[0,\ 1,\ 0]^\top$ -> igual que el eje y del padre
- z hijo = $[1,\ 0,\ 0]^\top$ -> apunta a lo largo del eje x del padre

y lee $\mathbf{t}$ como el lugar donde se sitúa el origen del marco hijo. Eso es todo lo que es una transformación.

</details>

<a id="frames"></a>

## 23.3 Marco del Mundo y Marco Base

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-01.png" alt="Marco del mundo frente a marco base" />
</div>

El marco del mundo puede entenderse como el marco de coordenadas del entorno en el que se encuentra el brazo robótico; el marco base se establece en la base del robot. En el diseño del brazo reBot, como la base del robot está fija, el marco del mundo y el marco base coinciden.

Por ejemplo: el brazo se coloca sobre una mesa, con el centro de la base del brazo como origen, la superficie de la mesa como plano xy y la dirección vertical de las patas de la mesa como eje z; el marco del mundo sigue la regla de la mano derecha. El marco base también coincide con el marco del mundo. (Marco cartesiano de uso común).

<div className="image-frame">
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-02.png" alt="Regla de la mano derecha, RGB = XYZ" />
</div>

**Convención de colores de los tres ejes XYZ en robótica/visión (RGB = XYZ)**

| Eje | Color | Nombre común |
| :--- | :--- | :--- |
| **X** | 🔴 Rojo | Rojo |
| **Y** | 🟢 Verde | Verde |
| **Z** | 🔵 Azul | Azul |

:::note
Regla de la mano derecha: apunta `+X` a lo largo del dedo índice y `+Y` a lo largo del dedo corazón; el pulgar da `+Z`. Las rotaciones alrededor de `+X`, `+Y`, `+Z` son positivas en sentido antihorario cuando se mira hacia atrás a lo largo del eje hacia el origen. Todas las herramientas de robótica (RViz, MeshCat, SolidWorks, URDF) usan esta misma convención, por lo que vale la pena memorizar la correspondencia de colores RGB = XYZ.
:::

## 23.4 Marco del Espacio Articular y Marco del Efector Final

El marco del espacio articular es el marco más utilizado en el control de robots. Se establece en las articulaciones del robot; el número de dimensiones es igual al número de articulaciones que tiene el robot.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-03.png" alt="Marco del espacio articular" />
</div>

El reBot B601 tiene seis articulaciones rotativas más una pinza, por lo que su marco de espacio articular es de 6 dimensiones (7 dimensiones si la pinza se lleva como un eje adicional).

**Marco del efector final**

- Origen: punto central de la herramienta (TCP)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-04.png" alt="Marco del efector final / TCP" />
</div>

El marco del efector final se establece en el extremo del robot; también hay un marco de herramienta. Cuando necesitamos que el extremo alcance una determinada posición, nos importa la coordenada del efector final; si en el extremo hay montada una pinza, nos importa la coordenada de la pinza.

| Marco | Unido a | Origen | Uso típico |
| :--- | :--- | :--- | :--- |
| Mundo $\{world\}$ | El entorno | Un punto fijo en la mesa / celda | Coordenadas a nivel de tarea, trabajo con cámaras |
| Base $\{base\}$ | La base del robot | Centro de la base | Raíz de la cadena cinemática |
| Articulación $\{j_i\}$ | Articulación $i$ | Eje de la articulación $i$ | Cálculo interno de FK / IK |
| Brida | Salida de la última articulación | Centro de la brida | Donde se monta una herramienta |
| Herramienta / TCP | La propia herramienta | Punto central de la herramienta | Planificación de trayectorias, puntos de agarre |

En una frase: el marco del mundo es el marco que los humanos entendemos de forma más intuitiva, mientras que el robot se basa en el marco del espacio articular para cambiar la posición de la pinza final. Así que fijamos objetivos usando coordenadas del mundo, y usamos el marco del espacio articular para hacer que el robot se mueva como queremos. La conexión entre ellos es la transformación de coordenadas.

## 23.5 Marco de la Cámara

El marco de la cámara y el marco del efector final suelen obtenerse mediante una transformación de traslación.

- Origen: centro óptico de la cámara
- Convención: eje z hacia delante a lo largo del eje óptico, x hacia la derecha, y hacia abajo (convención de OpenCV; algunas herramientas OpenGL/ROS usan y hacia arriba)

| Convención | x | y | z | Mano derecha |
| :--- | :--- | :--- | :--- | :--- |
| **OpenCV / visión** | derecha | **abajo** | hacia delante (hacia la escena) | sí |
| OpenGL / algunas herramientas ROS | derecha | arriba | hacia atrás | sí |
| ROS `camera_optical_frame` | derecha | abajo | hacia delante | sí |

:::warning
Nunca mezcles silenciosamente las dos convenciones. Una cámara con "y hacia abajo" y una cámara con "y hacia arriba" difieren en una rotación de 180 grados alrededor de x, y una calibración mano-ojo calculada con una convención enviará la pinza al lado equivocado del objeto cuando se use con la otra.
:::

Dónde aparece el marco de la cámara en una canalización de agarre visual:

$$
\begin{aligned}
\text{píxel } (u, v) &\ \xrightarrow{\ \text{intrinsics } K\ } \text{marco de la cámara} \\
&\ \xrightarrow{\ \text{mano-ojo } T_{\text{cam}\to\text{tcp}}\ } \text{marco del efector final} \\
&\ \xrightarrow{\ \text{FK}\ } \text{marco base} \\
&\ \xrightarrow{\ \text{IK}\ } \text{ángulos articulares}
\end{aligned}
$$

<a id="transforms"></a>

## 23.6 Representación matricial de las transformaciones de coordenadas

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23.jpg" alt="Rotaciones elementales de los ejes i, j, k" />
</div>

La representación **homogénea** unifica "transformación lineal + traslación" en una sola multiplicación matricial.

En la representación **no homogénea**, la traslación es una suma fuera de la matriz y no puede combinarse con la rotación en una sola matriz.

**Transformación homogénea general**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix},
\qquad
R:\ 3\times3 \text{ rotación (orientación)},
\qquad
\mathbf{t}:\ 3\times1 \text{ traslación (posición)}
$$

**Transformación de traslación**

$$
\mathbf{p}' = \mathbf{p} + \mathbf{t}
\qquad
\mathbf{T} =
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

Escrita completamente, no homogénea a la izquierda y homogénea a la derecha:

$$
\begin{pmatrix}
x' \\ y' \\ z'
\end{pmatrix}
=
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
+
\begin{pmatrix}
t_x \\ t_y \\ t_z
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z
\end{pmatrix}
\qquad\Longleftrightarrow\qquad
\begin{pmatrix}
x' \\ y' \\ z' \\ 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix]
x \\ y \\ z \\ 1
\end{pmatrix}
=
\begin{pmatrix]
x + t_x \\ y + t_y \\ z + t_z \\ 1
\end{pmatrix}
$$

**Transformación de rotación**

Las tres matrices de rotación elementales. Escribir $c = \cos\theta$ y $s = \sin\theta$ mantiene las matrices legibles; expándelas sustituyendo de nuevo cuando las calcules a mano.

$$
R_x(\theta) =
\begin{pmatrix}
1 & 0 & 0 \\
0 & c & -s \\
0 & s &  c
\end{pmatrix}
\qquad
R_y(\theta) =
\begin{pmatrix}
 c & 0 & s \\
 0 & 1 & 0 \\
-s & 0 & c
\end{pmatrix}
\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 \\
s &  c & 0 \\
0 &  0 & 1
\end{pmatrix}
$$

La versión homogénea de cada rotación mantiene el mismo bloque 3x3 con una columna de traslación cero, de modo que una matriz de rotación $R$ se convierte en

$$
\begin{pmatrix}
R & \mathbf{0} \\
\mathbf{0}^\top & 1
\end{pmatrix}
\qquad\text{p. ej.}\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 & 0 \\
s &  c & 0 & 0 \\
0 &  0 & 1 & 0 \\
0 &  0 & 0 & 1
\end{pmatrix}
$$

| Eje | No homogénea | Homogénea |
| :--- | :--- | :--- |
| Eje X | $R_x(\theta)$ | $\begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & c & -s & 0 \\ 0 & s & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Eje Y | $R_y(\theta)$ | $\begin{pmatrix} c & 0 & s & 0 \\ 0 & 1 & 0 & 0 \\ -s & 0 & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Eje Z | $R_z(\theta)$ | $\begin{pmatrix} c & -s & 0 & 0 \\ s & c & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |

:::note
**Por qué la fila inferior es $[0\ 0\ 0\ 1]$.** No tiene ningún significado físico; existe para que el producto matricial de dos transformaciones sea de nuevo una transformación, y para que un *punto* $(x, y, z, 1)$ y una *dirección* $(x, y, z, 0)$ puedan ser transformados por la misma matriz: la dirección ignora la traslación, el punto no.
:::

**Composición de transformaciones** — encadenar es simplemente multiplicación de matrices, y la inversa es barata:

$$
\begin{aligned}
T_a^c &= T_a^b \, T_b^c && \text{composición (regla de la cadena)} \\
\left( T_a^b \right)^{-1} = T_b^a &=
\begin{pmatrix}
R^\top & -R^\top \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
&& (R^\top \text{ en lugar de una inversión } 3\times3)
\end{aligned}
$$

## 23.7 Ángulos de Euler y cuaterniones

<div className="image-frame">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-06.png" alt="Alabeo, cabeceo, guiñada" />
</div>

**Ángulos de Euler vs. cuaterniones**

- Ángulos de Euler: 3 números, intuitivos, tienen bloqueo de cardán
- Cuaterniones: 4 números (1 restricción), no intuitivos, sin bloqueo de cardán

| Aspecto | Ángulos de Euler (roll/pitch/yaw) | Cuaternión |
| :--- | :--- | :--- |
| Números | 3 | 4, con la restricción $w^2+x^2+y^2+z^2 = 1$ |
| Intuitivo | Sí, fácil de leer y registrar | No |
| Singularidad | Bloqueo de cardán cuando el ángulo intermedio alcanza +/-90° | Ninguna |
| Interpolación | Mala (saltos, multivaluada) | Buena (slerp) |
| Riesgo de convención | 24 convenciones diferentes (orden, intrínseca/extrínseca) | Convención única (solo ambigüedad de signo) |
| Uso típico | Entrada humana, archivos de configuración, registros | Cálculo interno, mensajes ROS, estimación de estado |

En ingeniería: **usa ángulos de Euler para los humanos, cuaterniones para la máquina**.

:::tip
En el reBot Arm esto aparece de forma concreta: MeshCat y Pinocchio piensan en matrices de rotación y objetos SE(3), mientras tú escribes roll/pitch/yaw en grados en la terminal. Las demostraciones del Capítulo 26 convierten entre ambos por ti (`rpyToMatrix`, `matrixToRpy`).
:::

- Un **marco** son tres ejes más un origen; el brazo necesita al menos los marcos mundo, base, articulación, herramienta y cámara.
- $\{world\} = \{base\}$ en el reBot Arm porque la base está atornillada.
- Una **transformación homogénea** empaqueta rotación y traslación en una sola matriz 4x4; encadenar es multiplicar.
- **Ángulos de Euler** para los humanos, **cuaterniones** para la máquina.
- Próximo capítulo: usar estas transformaciones para calcular la pose del efector final a partir de los ángulos articulares — y viceversa.

</div>

---
description: "Capítulo 26 del Curso de Introducción a la IA Física de Seeed — práctica con Pinocchio y MeshCat en el reBot Arm: instalación de uv, carga del URDF y ejecución de las demos de cinemática directa, cinemática inversa (mínimos cuadrados amortiguados con búsqueda en línea) y planificación de trayectorias (geodésica en SE(3) más CLIK)."
title: Capítulo 26 - Pinocchio y MeshCat
hide_title: true
keywords:
  - reBot
  - Brazo robótico
  - Pinocchio
  - MeshCat
  - Cinemática inversa
  - Planificación de trayectorias
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_26
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_26/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 5 · Capítulo 26 · Práctica</span>
    <h2>26. Pinocchio y MeshCat</h2>
    <p>
      Capítulo 26 del Curso de Introducción a la IA Física de Seeed — práctica con Pinocchio y MeshCat en el reBot Arm: instalación de uv, carga del URDF y ejecución de las demos de cinemática directa, cinemática inversa (mínimos cuadrados amortiguados con búsqueda en línea) y planificación de trayectorias (geodésica en SE(3) más CLIK).
    </p>
    <div className="hero-actions">
      <a href="#setup">Entorno</a>
      <a href="#fk-demo">Demo de FK</a>
      <a href="#ik-demo">Demo de IK</a>
      <a href="#traj-demo">Demo de trayectoria</a>
    </div>
  </div>
</section>

## 26.1 Objetivos de aprendizaje

Aplicar transformaciones de coordenadas, teoría de cinemática y planificación de trayectorias en un framework real de desarrollo de robots.

Aprender a usar Pinocchio y MeshCat

## 26.2 Qué te ofrecen Pinocchio y MeshCat

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) es una biblioteca de código abierto para análisis y optimización de la dinámica de robots. Proporciona cinemática directa/inversa eficiente, cálculo de dinámica y planificación de trayectorias. [MeshCat](https://github.com/rdeits/meshcat) es una herramienta de visualización 3D basada en la web que puede mostrar en tiempo real el estado del robot y las trayectorias de movimiento.

$$
\underbrace{\text{URDF}}_{\text{describe}} \longrightarrow \underbrace{\text{Pinocchio}}_{\text{algorithm}} \longrightarrow \underbrace{\text{Result}}_{\text{FK / IK / dynamics}}
$$

Leyendo el modelo URDF del robot, Pinocchio puede hacer lo siguiente.

| Capacidad | Llamada de Pinocchio | Usado en este capítulo |
| :--- | :--- | :--- |
| Construir el modelo cinemático desde el URDF | `pin.buildModelFromUrdf()` | Cargar `reBot-DevArm_fixend.urdf` |
| Cinemática directa (todas las poses de los eslabones) | `pin.forwardKinematics()` | Demo de FK, iteración de IK |
| Actualizar las colocaciones de los frames | `pin.updateFramePlacements()` | Leer la pose de `end_link` |
| Jacobiano del frame | `pin.getFrameJacobian()` | IK de mínimos cuadrados amortiguados |
| Exponencial / logaritmo en SE(3) | `pin.exp6()` / `pin.log6()` | Error de pose 6D, interpolación geodésica |
| Utilidades de rotación | `pin.rpy.rpyToMatrix()`, `matrixToRpy()` | Lectura e impresión de poses |

A continuación, usa el repositorio de control de reBot para probarlo.

<a id="setup"></a>

## 26.3 Descarga la demo y configura el entorno

Siguiendo el tutorial, primero completa la inicialización del brazo.

## 26.4 Instalar uv (si no está instalado)

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 26.5 Sincronizar el entorno (instalar todas las dependencias)

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

`uv sync` crea el entorno virtual e instala Pinocchio, MeshCat y las dependencias de reBot. Compruébalo antes de continuar:

```Bash
uv run python -c "import pinocchio, meshcat; print(pinocchio.__version__)"
```

**Cómo cambiar entre las configuraciones de motor Damiao y Robostride**

Modifica el archivo de configuración `config/rebotarm_dm.yaml` (Damiao) o `config/rebotarm_rs.yaml` (Robostride), y carga la configuración correspondiente en el código.

| Versión | Archivo de configuración | Bus del motor | Frame del efector final |
| :--- | :--- | :--- | :--- |
| **B601-DM** (Damiao) | `config/rebotarm_dm.yaml` | Serie Damiao | `end_link` (desde la configuración) |
| **B601-RS** (Robostride) | `config/rebotarm_rs.yaml` | SocketCAN | `end_link` (desde la configuración) |

:::tip
`config/rebotarm.yaml` es el punto de entrada: apunta a la configuración de hardware (`rebotarm_dm.yaml` /
`rebotarm_rs.yaml`), que a su vez apunta al URDF (`reBot-DevArm_fixend.urdf`). Si una demo no puede
encontrar el modelo, revisa primero esta cadena.
:::

<a id="fk-demo"></a>

## 26.6 Demo de visualización de cinemática directa en MeshCat


<iframe width="560" height="315" src="https://www.youtube.com/embed/wVBwBnDO6X8?si=HSc4UqpDKHEg5Y43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/fk_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter angles as prompted
45 -30 15 -60 90 -180

#The arm model moves accordingly
```

## 26.7 Explicación paso a paso de la demo de cinemática directa

fk_sim.py es una **tubería de cinemática directa de paso directo**: ángulos articulares -> FK de Pinocchio -> pose del efector final + renderizado en MeshCat.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-02.png" alt="" />
</div>


La razón por la que esta demo es un buen punto de partida: es el camino más corto posible desde "seis números" hasta "un modelo 3D que se mueve", sin IK, sin dinámica y sin hardware de por medio.

<a id="ik-demo"></a>

## 26.8 Demo de visualización de cinemática inversa en MeshCat

<iframe width="560" height="315" src="https://www.youtube.com/embed/4B9ngX8e7x4?si=Ork_DT-A9zlxfEmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/ik_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.9 Explicación paso a paso de la demo de cinemática inversa

1. **Objetivo de entrada**: el usuario da la posición (xyz) y orientación (roll/pitch/yaw) deseadas del efector final; el programa las construye en un objeto de pose SE3.

2. **Cargar el modelo**: leer el URDF desde el archivo de configuración, construir el modelo cinemático del robot y determinar en qué frame está el efector final.

3. **Cinemática directa**: con base en los ángulos articulares actuales, calcular la pose SE3 real del extremo en el frame del mundo.

4. **Calcular la brecha**: usar `log6` para mapear logarítmicamente el SE3 actual y el SE3 objetivo, obteniendo un error de 6 dimensiones (cuánta diferencia hay en rotación y cuánta en traslación).

5. **Inferir la corrección**: a través del Jacobiano, "traducir" el error del extremo en cuánto debe girar cada articulación; resolver con mínimos cuadrados amortiguados para evitar saltos en las articulaciones.

6. **Iterar hasta converger**: repetir los pasos 3->5, con búsqueda en línea cada vez para asegurar que el error disminuye, hasta que el error esté por debajo de un umbral (~0,1 mm), momento en el que se considera alcanzado.

7. **Resultado de salida**: devolver los ángulos articulares resueltos (radianes), si ha convergido y el error final, para el control posterior.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-01.png" alt="" />
</div>


<a id="traj-demo"></a>

## 26.10 Demo de visualización de planificación de trayectorias en MeshCat

<iframe width="560" height="315" src="https://www.youtube.com/embed/B5gz1Me78nQ?si=HDzRq-WhDX6N78V5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run python example/sim/traj_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.11 Explicación paso a paso de la demo de planificación de trayectorias

#### Pose en SE(3)

**Qué es**

SE(3) = **posición + orientación**, la descripción completa del "estado actual" de un cuerpo rígido 3D.

- **S** — *special*: la parte de rotación es una rotación propia, $\det R = 1$
- **E** — *Euclidean*: se conservan longitudes y ángulos
- **3** — el espacio es tridimensional

**Analogía**

Un coche en un aparcamiento:

- **Posición** = en la plaza P3
- **Orientación** = con el morro hacia afuera
- Estas dos juntas son la pose SE(3) actual del coche

**Grados de libertad**

- Posición: 3 números (arriba/abajo, izquierda/derecha, delante/detrás)
- Orientación: 3 números (cómo está girado)
- En total **6 GDL**

**Forma matricial (matriz homogénea 4x4)**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
$$

- Bloque superior izquierdo $3\times3$ = $R$, la matriz de rotación (orientación)
- Columna superior derecha $3\times1$ = $\mathbf{t}$, el vector de traslación (posición)
- La fila inferior $[0\ 0\ 0\ 1]$ es un marcador fijo

**Ejemplo: cambia la posición -> cambia $\mathbf{t}$; cambia la orientación -> cambia $R$.**

#### **Generación de trayectorias**

**El muestreador genera una línea de tiempo densa de poses SE(3)**.

El trabajo se hace en tres capas:

1. **Capa geométrica**: usar `log6`/`exp6` en la variedad curva SE(3) para calcular una geodésica (camino más corto): la rotación sigue slerp (gran círculo), la traslación sigue una línea recta en el frame local del extremo. Fórmula $T(s) = T_{start}\,\exp_6\big(\log_6(T_{start}^{-1} T_{end})\,s\big)$, donde $s \in [0, 1]$ es la fracción del camino.

2. **Capa temporal**: elegir un perfil para determinar $s(\tau)$, con $\tau = t / \text{duration}$: LINEAR velocidad constante, MIN_JERK polinomio quíntico (por defecto, velocidad y aceleración nulas al inicio y al final), TRAPEZOID aceleración/deceleración trapezoidal.

3. **Capa de muestreo**: con $dt = 0.02\ \text{s}$ (50 Hz) cortar $n$ frames a pasos iguales; cada frame es $T(s(t))$, salida como `CartesianTrajectory`: $(t = 0, T_{start}), (t = 0.02, T_1), \ldots, (t = \text{duration}, T_{end})$.

**Idea central**: la geometría (camino) y el tiempo (ritmo) están desacoplados; la salida es todo SE(3), sin información articular, que se deja para que CLIK la resuelva al revés.

**Coche en P3 (posición $(5, 0, 0)$), morro hacia el este (sin rotación)**

$$
T =
\begin{pmatrix}
1 & 0 & 0 & 5 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

**Coche movido: P3 sin cambios, el morro ahora apunta al norte (rotado $90^\circ$ alrededor de $z$)**

$$
T =
\begin{pmatrix}
0 & -1 & 0 & 5 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### CLIK

Paso 4: error log6 -> señal de realimentación

- Calcular la distancia entre "dónde está el extremo" y "adónde debería ir el extremo" como un giro de 6 dimensiones
- Estas 6 dimensiones son la señal de error $e$ en CLIK, equivalente a la desviación en un sistema de control
- Los ángulos de Euler no se restan directamente, para evitar que el envolvimiento de $360^\circ$ haga explotar el cálculo del error

Paso 5: resolución de Jacobiano DLS -> controlador

- Este es el papel de "controlador" en CLIK
- Traduce el error 6D del extremo en cuánto debería moverse cada articulación
- DLS: $\Delta q = J^\top (J J^\top + \lambda^2 I)^{-1} e$, equivalente a minimizar $\|J\,\Delta q - e\|^2 + \lambda^2 \|\Delta q\|^2$
- El término de amortiguamiento $\lambda^2 I$ evita que $\Delta q$ explote cuando $J$ se aproxima a una singularidad (la seudoinversa tiende a infinito en las singularidades)

Paso 6: iteración + búsqueda en línea -> estructura en lazo cerrado

- Este paso da su nombre a "lazo cerrado"
- Cada ronda vuelve a calcular FK -> vuelve a calcular el error -> vuelve a calcular $\Delta q$, formando un bucle de realimentación
- La búsqueda en línea $\alpha$ garantiza que cada actualización realmente reduzca el error, evitando la oscilación
- Mismo patrón que el control PID: medir el error -> calcular el control -> aplicar -> medir de nuevo

## 26.12 Control de cinemática inversa para trayectorias suaves en robots reales (`8_arm_traj_control.py`)

Usando cinemática inversa (IK) en modo MIT, dentro de un tiempo objetivo planifica automáticamente una trayectoria de movimiento a velocidad constante o con aceleración/desaceleración suave, evitando sacudidas violentas en las articulaciones.

**Formato de entrada**:

- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Posición + orientación + tiempo (por defecto 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (grados)
- Introduce `state`: ver los radianes actuales reales de cada articulación.
- Introduce `end_state`: ver las coordenadas reales del extremo (m) y los ángulos de Euler (rad) en el espacio.

**Cómo ejecutar**:

```Bash
uv run python example/8_arm_traj_control.py

*#Usage A*
> 0.3 0.0 0.4 *#position only, orientation defaults to 0, move time defaults to 2.0 s*

*#Usage B*
> 0.3 0.0 0.4 0.0 0.0 0.5 *#control position and orientation together: move to the target position while rotating the wrist yaw by 0.5 rad; move time defaults to 2.0 s*

*#Usage C*
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 *#move the arm to a specific position, taking 5.0 s to ease over there. (Note: if you input a time, the preceding orientation parameters 0 0 0 cannot be omitted)*

> ctrl + c *# exit the system*
```

## 26.13 Solución de problemas de las demostraciones

| Síntoma | Causa probable | Qué hacer |
| :--- | :--- | :--- |
| `ModuleNotFoundError: pinocchio` | Entorno no sincronizado | Vuelve a ejecutar `uv sync` dentro de `reBotArm_control_py` |
| La página de MeshCat se abre pero permanece vacía | El navegador bloqueó el websocket local | Usa la URL impresa en la terminal, prueba con otro navegador |
| `FileNotFoundError: ...urdf` | Directorio de trabajo incorrecto | Ejecuta desde la raíz del repositorio, como se muestra en los comandos |
| IK devuelve `success: False` | Objetivo fuera del espacio de trabajo, o una pose singular | Acerca el objetivo a la base, o aumenta el amortiguamiento |
| Las articulaciones se bloquean en un límite durante IK | El objetivo requiere una orientación inalcanzable | Reduce la exigencia de orientación, o cambia la suposición inicial `q_init` |

- **Pinocchio** convierte el URDF en un modelo cinemático; FK, Jacobianos y utilidades SE(3) provienen de una sola biblioteca.
- **MeshCat** te da una vista en el navegador de los mismos números que usa el controlador — inestimable para depurar.
- Las tres demostraciones son la teoría de los Capítulos 23–25 hecha ejecutable: **FK (pose a partir de ángulos)**, **IK (ángulos a partir de la pose, DLS + búsqueda en línea)**, **planificación de trayectoria (geodésica + perfil temporal + CLIK)**.
- En el brazo real, `8_arm_traj_control.py` muestra el mismo flujo impulsando motores reales mediante IK en modo MIT.


</div>

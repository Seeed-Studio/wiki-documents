---
description: "Capítulo 24 del Curso de Introducción a la IA Física de Seeed: espacio articular frente a espacio cartesiano, cinemática directa a partir de parámetros DH y URDF, cinemática inversa y sus soluciones múltiples o inexistentes, el Jacobiano y la cinemática de velocidades, singularidades y mínimos cuadrados amortiguados, y CI analítica frente a numérica."
title: Capítulo 24 - Cinemática directa, cinemática inversa y el Jacobiano
hide_title: true
keywords:
  - reBot
  - Brazo robótico
  - Cinemática directa
  - Cinemática inversa
  - Jacobiano
  - Singularidad
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_24
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_24/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 5 · Capítulo 24 · Teoría</span>
    <h2>24. Cinemática directa, cinemática inversa y el Jacobiano</h2>
    <p>
      Capítulo 24 del Curso de Introducción a la IA Física de Seeed: espacio articular frente a espacio cartesiano, cinemática directa a partir de parámetros DH y URDF, cinemática inversa y sus soluciones múltiples o inexistentes, el Jacobiano y la cinemática de velocidades, singularidades y mínimos cuadrados amortiguados, y CI analítica frente a numérica.
    </p>
    <div className="hero-actions">
      <a href="#espacio-articular-cartesiano">Articular vs cartesiano</a>
      <a href="#fk">Cinemática directa</a>
      <a href="#ik">Cinemática inversa</a>
      <a href="#jacobiano">Jacobiano</a>
    </div>
  </div>
</section>

## 24.1 Temas principales

- Espacio articular vs. espacio cartesiano
- Cinemática directa (FK)
- Cinemática inversa (IK)
- Múltiples soluciones, sin solución y espacio de trabajo
- Límites articulares
- Matriz Jacobiana
- Cinemática de velocidades
- Singularidades
- CI numérica y CI en lazo cerrado

## 24.2 Objetivos de aprendizaje

Explicar cómo el brazo calcula la pose del efector final a partir de los ángulos articulares, y cómo resolver los ángulos articulares dada una pose objetivo.

<a id="joint-cartesian"></a>

## 24.3 Espacio articular vs. espacio cartesiano

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-01.png" alt="Espacio articular frente a espacio cartesiano" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-02.png" alt="Espacio articular frente a espacio cartesiano, vista completa" />
</div>

||Espacio articular|Espacio cartesiano|
|:---|:---|:---|
|Descripción|Ángulos articulares $(q_1, q_2, \ldots, q_n)$|Pose del efector final $(x, y, z, rx, ry, rz)$|
|Dimensión|n (número de articulaciones)|6 (3 de posición + 3 de orientación)|
|Significado físico|Cómo giran los motores|Dónde está el extremo y hacia dónde apunta|
|Trayectoria del movimiento|Velocidad articular constante -> curva irregular del efector final|Trayectoria recta/arco del extremo -> movimiento articular no lineal|
|Dificultad de control|Directo (se envía a los motores)|Indirecto (primero hay que resolver la CI para los ángulos, luego enviar a los motores)|
|Usos típicos|Movimiento libre, evitación de obstáculos, homing|Agarre, soldadura, pintura, seguimiento de trayectorias|

**Ejemplo 1: robot que escribe**

|Tarea|Qué espacio|
|:---|:---|
|Girar el motor 1 en 30°, el motor 2 en 45°|Espacio articular (enviar ángulos directamente)|
|Hacer que la punta del bolígrafo trace los trazos de un carácter en líneas rectas|Espacio cartesiano (calcular ángulos articulares para cada punto)|

**Ejemplo 2: coger una taza (ignorando la trayectoria)**

|Fase|Qué espacio|
|:---|:---|
|Mover desde home hasta cerca de la taza|Espacio articular (simple, velocidad constante, seguro)|
|Últos pocos centímetros para alinearse con precisión con el borde de la taza|Espacio cartesiano (debe aproximarse en XYZ)|
|Levantarla y colocarla en la estantería|Espacio articular (no se requiere trayectoria en línea recta)|

**Ejemplo 3: soldar un coche**

|Tarea|Qué espacio|
|:---|:---|
|La antorcha de soldadura sigue la junta en línea recta|Espacio cartesiano (línea recta = junta de soldadura)|
|Levantar la antorcha y moverla al siguiente punto|Espacio articular (lo que importa es ir rápido)|

## 24.4 Cinemática directa vs. cinemática inversa

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-03.png" alt="FK frente a IK" />
</div>

||Cinemática directa (FK)|Cinemática inversa (IK)|
|:---|:---|:---|
|Conocido|Ángulos articulares|Pose del efector final|
|Resolver|Pose del efector final|Ángulos articulares|
|Dirección|Articulaciones -> efector final|Efector final -> articulaciones|
|Solución|Única|Múltiples / ninguna|
|Cálculo|Simple (aplicar fórmulas directamente)|Complejo (resolver ecuaciones / iterar)|

**Para qué se usa la FK**

- Visualización: representar los ángulos articulares en vivo como un modelo 3D (ROS RViz, personajes de juegos)
- Verificación: comprobar si la pose del efector final calculada es correcta
- Calibración: comparar la pose teórica con la pose real
- Control sencillo: moverse siguiendo una secuencia de ángulos predefinida

**Para qué se usa la IK**

- Agarre: la cámara ve el objeto -> se resuelven los ángulos articulares -> se controla el brazo
- Soldadura/pintura: el extremo debe seguir una trayectoria especificada
- Humanoide: los pies deben aterrizar en puntos de suelo especificados
- Cualquier escenario de "ir a un lugar"

<a id="fk"></a>

## 24.5 Cinemática directa

**El proceso de calcular la pose del efector final a partir de los ángulos articulares**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-04.png" alt="Cinemática directa" />
</div>

**Versión en una frase**

**Multiplicar** la transformación local de cada articulación **en secuencia**, desde la base hasta el efector final.

$$
T_{base}^{end} = T_{base}^{link_1} \cdot T_{link_1}^{link_2} \cdots T_{link_{n-1}}^{link_n} \cdot T_{link_n}^{tcp}
$$

**Pasos de cálculo (6 pasos)**

1. **Establecer los marcos de los eslabones**: construir un marco local en cada articulación (parámetros DH / URDF)
2. **Escribir la matriz de transformación de cada eslabón** $T_i^{i+1}$ (traslación + rotación respecto a la articulación anterior)
3. **Sustituir los ángulos articulares** $q_i$ (la rotación usa $\theta_i$, la traslación viene de la tabla DH)
4. **Multiplicar en secuencia** $T_1^2 \cdot T_2^3 \cdot \ldots \cdot T_n^{n+1}$
5. **Multiplicar por el desplazamiento de la herramienta** $T_{flange}^{tcp}$
6. **Obtener** $T_{base}^{end}$ — que contiene posición $(x,y,z)$ y orientación ($R$ o $q$ o ángulos de Euler)

**Conceptos relacionados en un solo diagrama**

```Plain Text
Joint angles (q)
   |
DH params / URDF  ← describe link geometry (a, alpha, d, theta)
   |
Homogeneous transform (4x4)  ← translation + rotation combined
   |
   +-- rotation matrix R (3x3, SO(3))
   |      +-- rotation representation: Euler / quaternion / axis-angle
   +-- translation vector t (3x1)
   |
Matrix chain multiplication (chain rule)
   |
End-effector pose T_base^end (SE(3))
   |
   +-- position (x, y, z)  ← FK output
   +-- orientation (R / q / rpy)  ← orientation representation
   |
Cartesian-space trajectory / Jacobian (velocity mapping)
   |
Visualization (RViz / simulation)
```

**Lista de comprobación de conceptos clave**

|Concepto|Función|
|:---|:---|
|**Parámetros DH**|Codifican los $a, \alpha, d, \theta$ de cada eslabón como 4 números|
|**Transformación homogénea**|Empaqueta traslación + rotación en una matriz 4x4 para encadenar fácilmente|
|**Regla de la cadena**|La esencia de multiplicar muchas matrices|
|**Representación de la rotación**|Salida de la orientación como: ángulos de Euler / cuaternión / matriz de rotación|
|**Trigonometría**|La expansión de matrices es todo $\sin/\cos$|
|**Jacobiano**|La FK da la pose; J da la velocidad (usado al revés por la IK)|
|**URDF**|El archivo real de descripción del robot; fuente de los números de la FK|

**Un pequeño ejemplo (2 articulaciones)**

$$
\theta_1, \theta_2 = \text{ángulos articulares}, \qquad l_1, l_2 = \text{longitudes de los eslabones}
$$

$$
T_1^2 =
\begin{pmatrix}
\cos\theta_1 & -\sin\theta_1 & 0 & l_1\cos\theta_1 \\
\sin\theta_1 &  \cos\theta_1 & 0 & l_1\sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\qquad
T_2^3 =
\begin{pmatrix}
\cos\theta_2 & -\sin\theta_2 & 0 & l_2\cos\theta_2 \\
\sin\theta_2 &  \cos\theta_2 & 0 & l_2\sin\theta_2 \\
\vdots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
T_1^3 = T_1^2 \, T_2^3 \quad\Longrightarrow\quad \text{pose del efector final}
$$

FK = **descripción DH + matrices homogéneas + multiplicación en cadena**, traduciendo "ángulos articulares" en "dónde está el extremo".

Imprescindible saber por el camino: DH, transformaciones 4x4, multiplicación de matrices, representaciones de rotación (Euler/cuaternión), URDF.

<a id="ik"></a>

## 24.6 Cinemática inversa

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-05.png" alt="CI analítica frente a CI numérica" />
</div>

**El proceso de calcular los ángulos articulares a partir de la pose del efector final.** En la práctica casi siempre se hace de forma **numérica**: en lugar de resolver la ecuación de la pose en un solo paso, el solucionador se aproxima gradualmente al objetivo.

Piensa en alcanzar un libro en una estantería: miras cuán lejos está todavía tu mano del libro, decides en qué dirección moverte, ajustas un poco tus articulaciones y repites hasta tocarlo. Un robot hace exactamente lo mismo.

**El bucle** — cada iteración hace tres cosas:

1. **Mirar el error**: cuán lejos está todavía el efector final de la pose objetivo
2. **Inferir la dirección**: cómo debe moverse cada articulación para reducir ese error
3. **Dar un paso**: mover las articulaciones una vez, luego volver al paso 1

Repetir hasta que el error sea lo suficientemente pequeño.

**Por qué se usa tan ampliamente**

- **Universal**: el mismo bucle sirve para 6 ejes, 7 ejes, manos y brazos tipo serpiente
- **Sin fórmulas que derivar**: es un programa, no una página de álgebra
- **Precisión ajustable**: ¿quieres más exactitud? Ejecuta más iteraciones

En la industria el lazo se cierra alrededor de las posiciones articulares medidas, de modo que el controlador sigue observando el error y corrigiendo incluso cuando el modelo es ligeramente erróneo. Esta versión de "mirar mientras se mueve" es **CLIK (Closed-Loop IK)**, el estándar de facto en los brazos de fábrica.

**En una frase:** CI numérica = **vigilar el error y acercarse al objetivo poco a poco** — universal, efectiva y estable.


<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-06.png" alt="CI analítica frente a CI numérica" />
</div>

<a id="jacobian"></a>

## 24.7 Matriz Jacobiana

**El Jacobiano convierte "resolver la pose" en "resolver la velocidad".**

La ecuación de la pose es no lineal y normalmente no tiene solución en forma cerrada:

$$
f(q) = T_{target}
$$

Al derivarla en el $q$ actual se obtiene el Jacobiano, y en primera aproximación el problema se vuelve lineal:

$$
J(q) = \frac{\partial f}{\partial q}, \qquad v_{end} = J(q)\,\dot{q}, \qquad \Delta T \approx J(q)\,\Delta q, \qquad \dot{q} = J^{-1} v_{end}
$$

**El bucle iterativo**

1. $q$ actual -> calcular la pose del efector final $T$
2. Error: $\Delta T = T_{target} - T$
3. Velocidad del efector final: $v = \Delta T / dt$
4. Velocidad articular: $\dot{q} = J^{-1} v$
5. Actualización: $q_{new} = q + \dot{q}\,dt$
6. Volver al 1, hasta que $\Delta T$ sea lo suficientemente pequeño

**En una frase:** el Jacobiano "aplana localmente" la ecuación de IK no lineal en una lineal; resolver la velocidad e integrarla converge a la pose objetivo.

## 24.8 Singularidades

En una **singularidad** el brazo pierde la capacidad de mover el efector final en una o más direcciones: sin importar cómo se muevan las articulaciones, el extremo no puede moverse en esa dirección.

- **Brazo completamente extendido**: no puede alcanzar más lejos; se pierde la dirección hacia afuera
- **Dos articulaciones de muñeca colineales**: dos ejes de rotación coinciden, por lo que desaparece un grado de libertad

**Qué ocurre en una singularidad**

|Situación|Síntoma|
|:---|:---|
|El Jacobiano "falla"|El mapeo de articulaciones a extremo ya no se puede invertir|
|La solución de IK explota|La velocidad articular calculada tiende a infinito|
|Sacudidas en las articulaciones|Los motores vibran violentamente|
|Oscilación de control|El extremo salta de un lado a otro|

Esencia: algunas entradas de ese mapeo se vuelven $0/0$ — indefinidas, no simplemente grandes.

**Cómo detectarla** — cuando el Jacobiano se degenera, un número tiende a cero:

$$
\det J = 0, \qquad \sigma_{\min}(J) = 0, \qquad \operatorname{rank} J < n
$$

Supervisa ese número y **lanza una alarma cuando se acerque a cero**.

**Cómo manejarla**

|Solución|Idea|
|:---|:---|
|**Mínimos cuadrados amortiguados (DLS)**|Añadir algo de "fricción" para que la solución no pueda explotar: $\dot{q} = J^\top (J J^\top + \lambda^2 I)^{-1} v$|
|**Cambiar la trayectoria**|Planificar con antelación para evitar regiones singulares|
|**Reducir la velocidad**|Desacelerar cerca de una singularidad para darte tiempo de reacción|
|**Cambiar la pose**|Para la misma pose objetivo, elegir una solución no singular|

**Dos tipos de singularidades**

- **Frontera** del espacio de trabajo: extendido hasta el punto más lejano; se pierden direcciones
- **Interior** del espacio de trabajo: muñeca colineal / codo recto; se reducen los grados de libertad

## 24.9 IK analítica vs. IK numérica

La IK analítica resuelve la ecuación directamente; la IK numérica itera hacia la respuesta. La misma tarea — calcular $25 \times 4$ — hecha de ambas formas:

| |Analítica|Numérica|
|:---|:---|:---|
|**Idea**|"×4 significa ×2 y luego ×2": calcular $25 \times 2 = 50$, luego $\times 2 = 100$|Adivinar 90, notar que falta 10, adivinar 102, luego 100 — ajustar hasta que coincida|
|**Resultado**|Un paso, exacto|Unas pocas iteraciones, suficientemente cercano|

**Diferencias clave**

|Dimensión|IK analítica|IK numérica|
|:---|:---|:---|
|Enfoque|Resolver la ecuación directamente|Aproximación iterativa|
|Velocidad|La más rápida (microsegundos)|Más lenta (ms~s)|
|Precisión|Exacta|Aproximada (ajustable)|
|Generalidad|Pobre|Alta|
|Salida|Fórmula en forma cerrada|Resultado numérico|

**IK analítica** — resuelve la ecuación de una vez por todas, y obtienes fórmulas como

$$
\theta_1 = \operatorname{atan2}(\ldots), \qquad \theta_2 = \operatorname{acos}(\ldots), \qquad \vdots
$$

|Ventajas|Desventajas|
|:---|:---|
|Se calcula en una línea de código; sin error de iteración; puede listar **todas** las soluciones|No todos los robots tienen solución en forma cerrada; con muchas articulaciones y una estructura compleja la ecuación no se puede resolver; una vez que el robot cambia, cada fórmula debe reescribirse|

**IK numérica** — sin fórmula alguna, solo repetir "doblar un poco las articulaciones, comprobar si el extremo se acercó, si no doblar un poco más" hasta que esté lo bastante cerca.

|Ventajas|Desventajas|
|:---|:---|
|Funciona para cualquier robot; no hay ecuaciones que derivar; fácil de añadir restricciones|Lenta (necesita iteración); puede atascarse en una solución incorrecta; explota en singularidades|

**Escenarios de aplicación**

|Escenario|Elegir|
|:---|:---|
|2 articulaciones, 3 articulaciones, geometría especial|Analítica (rápida, exacta)|
|Brazo industrial estándar de 6 ejes|Cualquiera, depende del escenario|
|Brazo redundante de 7 ejes|Numérica (sin solución analítica)|
|Cerrado / paralelo|Numérica (la analítica es difícil de derivar)|
|Control en tiempo real (kHz)|Solución analítica o solución analítica generada offline|
|Servo visual (30 Hz)|Numérica|

**Puntos clave**

- El **espacio articular** es lo que entienden los motores; el **espacio cartesiano** es lo que entiende la tarea.
- La **FK** es única, barata y siempre resoluble; la **IK** puede tener varias soluciones, una solución o ninguna.
- El **Jacobiano** convierte la velocidad articular en velocidad del efector final, y es cómo se resuelve realmente la IK.
- Las **singularidades** son poses donde el Jacobiano pierde rango; detéctalas (valor singular más pequeño) y amortígualas (DLS).
- Próximo capítulo: una vez que puedes producir una pose, aún tienes que llegar a ella **de forma suave y segura**.

</div>

---
description: "Capítulo 31 del Curso de Introducción a la IA Física de Seeed — Comunicación ROS2 y arquitectura de software de robots: por qué un robot necesita ROS2, nodos, los mecanismos Topic / Service / Action, interfaces de mensajes, QoS, el servidor de parámetros, archivos launch, la herramienta rosbag y por qué el software modular de robots se construye de esta manera."
title: Capítulo 31 - Comunicación ROS2 y Arquitectura de Software de Robots
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - Node
  - Topic
  - Service
  - Action
  - QoS
  - Launch
  - rosbag
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_31
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_chapter_31/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 7 · Capítulo 31 · Teoría</span>
    <h2>31. Comunicación ROS2 y Arquitectura de Software de Robots</h2>
    <p>
      Capítulo 31 del Curso de Introducción a la IA Física de Seeed — Comunicación ROS2 y arquitectura de software de robots: por qué un robot necesita ROS2, nodos, los mecanismos Topic / Service / Action, interfaces de mensajes, QoS, el servidor de parámetros, archivos launch, la herramienta rosbag y por qué el software modular de robots se construye de esta manera.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#nodes">Nodos y comunicación</a>
      <a href="#interfaces">Mensajes y QoS</a>
      <a href="#launch">Launch, parámetros y rosbag</a>
    </div>
  </div>
</section>

### Hardware necesario para esta etapa

Qué preparar para esta etapa. La lista completa para cada etapa está en el [Capítulo 3](/es/robotics/rebot_physical_ai_course_chapter_3/).

**Unidad de control principal**

| Artículo | Comprar | Cant. |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

También se requiere un ordenador de sobremesa o portátil: Ubuntu 22.04, GTX 4080 o superior con más de 12 GB de VRAM, más de 16 GB de RAM.

**Para esta etapa**

| Artículo | Comprar | Cant. |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |


<a id="overview"></a>

## 31.1 ¿Por Qué los Robots Necesitan ROS2?

Un robot moderno suele estar compuesto por diversos hardware complejos: cámaras que "ven", ordenadores que "piensan" y motores que "se mueven". Si cada pieza de hardware funciona por separado, el robot no puede avanzar ni un centímetro. ROS2 (Robot Operating System 2) no es realmente un sistema operativo tradicional como Windows o Linux; es el "sistema nervioso" o "puente de comunicación" del robot. **Proporciona un conjunto estándar de reglas de comunicación** para que los módulos de percepción (ojos), planificación (cerebro) y control (extremidades) puedan intercambiar información de forma eficiente y fluida.

**Las diferencias fundamentales entre ROS2 y la generación anterior ROS1 (preparando el terreno para QoS):**

- **Puntos débiles de ROS1 (centralizado):** Depende de un "gestor" llamado `roscore`. Una vez que el "gestor" se bloquea, la comunicación de todo el robot se derrumba; además exige un entorno de red de alta calidad: un Wi‑Fi ligeramente débil provoca desconexiones.
- **Evolución de ROS2 (descentralizado con DDS):** El "gestor" se elimina por completo y los nodos se comunican directamente punto a punto (basado en la tecnología DDS). No solo desaparece el riesgo de punto único de fallo, sino que se introduce QoS (Quality of Service), adaptándose a entornos de red extremadamente pobres y a escenarios industriales con estrictos requisitos de tiempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-01.png" alt="Arquitectura DDS descentralizada de ROS2 comparada con el roscore central de ROS1" />
</div>

<a id="nodes"></a>

## 31.2 Nodo: La Unidad Básica de Trabajo de un Robot

En el mundo ROS2, un **Nodo es una entidad independiente (proceso/programa)**. Es la unidad de trabajo más básica en una arquitectura de software de robots.

- **Característica:** Una especialidad por tarea. Un sistema de robot bien diseñado está compuesto por muchos Nodos de propósito único.
- **Ejemplo:** El "nodo de cámara" solo captura imágenes; el "nodo de motor" solo impulsa las ruedas. Se ejecutan de forma independiente: incluso si el nodo de cámara falla, el nodo de motor sigue funcionando con normalidad.

:::note
Dado que los nodos son independientes, ¿cómo cooperan entre sí? Esto nos lleva a los tres grandes métodos de comunicación entre nodos.
:::

## 31.3 Comunicación Entre Nodos (Mecanismos): "Tipos de Interfaz" para la Interacción de Nodos

La comunicación entre nodos se divide principalmente en tres tipos: **Topic**, **Service** y **Action**.

### A. Topic

| | Topic | Service | Action |
| :--- | :--- | :--- | :--- |
| Qué es | Publicar/Suscribirse, como una cuenta oficial (feed público de WeChat) | Cliente/Servidor, como llamar por teléfono para pedir indicaciones | Una combinación de Topic y Service, para tareas complejas, como pedir comida a domicilio en una app |
| Características | Asíncrono, flujo de datos unidireccional; un publicador a muchos suscriptores, y los lectores pueden darse de baja en cualquier momento | Síncrono, bidireccional: una petición, una respuesta, y el cliente normalmente se bloquea mientras espera | Asíncrono con retroalimentación de progreso y capacidad de cancelar a mitad de camino; tiene un Goal, Feedback y Result |
| Ejemplo | Un nodo de sensor de temperatura publica la "temperatura actual" como una cuenta del tiempo; un nodo de aire acondicionado se suscribe y empieza a enfriar por encima de 28 grados | Como llamar por teléfono para pedir indicaciones: una pregunta, una respuesta, respuesta rápida, se usa para tareas como "abrir la pinza del brazo" | Como pedir comida a domicilio: mientras esperas recibes retroalimentación de progreso, puedes cancelar si algo va mal y finalmente obtienes el resultado |
| Casos de uso | Datos de alta frecuencia y continuos que no necesitan respuesta inmediata: vídeo de cámara, nubes de puntos de LiDAR, ángulos articulares en tiempo real | Órdenes cortas y rápidas que necesitan un resultado claro: consultar el nivel de batería, abrir o cerrar la pinza, cambiar el modo de trabajo | Acciones físicas complejas y de larga duración que pueden interrumpirse en cualquier momento: mover el brazo de A a B, con progreso y cancelación |

### B. Service

Service es el modelo **Cliente/Servidor**: una petición, una respuesta, y el cliente normalmente se bloquea mientras espera — la columna **Service** de la tabla anterior contiene los detalles.

### C. Action

Action es una combinación de Topic y Service para tareas largas, compuesta por tres partes — **Goal**, **Feedback** y **Result** — la columna **Action** de la tabla anterior contiene los detalles.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-02.png" alt="Patrones de comunicación Topic, Service y Action uno al lado del otro" />
</div>

:::note
Ahora ya conocemos los métodos de comunicación entre nodos. Pero ¿qué transmiten exactamente? ¿Y qué reglas siguen? A continuación viene Message: la "forma estándar" o "lenguaje común" (formato de datos) que utilizan al intercambiar información.
:::

<a id="interfaces"></a>

## 31.4 Message: El "Formato de Transporte" para la Interacción de Nodos

Después de entender "cómo hablan los nodos" (Topic/Service/Action), aún necesitamos especificar "de qué hablar y en qué formato". Esto nos lleva a Message.

- **Qué es:** Una estructura de datos estandarizada para pasar datos entre nodos (como una tabla estrictamente formateada).
- **Por qué se necesita:** Si el nodo de cámara envía datos de imagen en el formato A pero el nodo cerebro solo entiende el formato B, no pueden comunicarse. ROS2 predefine un enorme conjunto de Messages estándar (por ejemplo, imágenes genéricas, comandos de velocidad genéricos). Mientras todos rellenen el formulario según el estándar, el hardware de cualquier proveedor puede conectarse sin problemas.
- **Formatos de Message correspondientes a los tres mecanismos:**
    - Archivo **`.msg`**** (para Topic):** Un paquete de datos sencillo. Por ejemplo, un "mensaje de velocidad" solo contiene velocidad lineal (qué tan rápido avanzar) y velocidad angular (qué tan brusco girar).
    - Archivo **`.srv`**** (para Service):** Dividido en parte superior e inferior. La parte superior define el formato de la petición (Request); la parte inferior define el formato de la respuesta (Response), separadas por `---`.
    - Archivo **`.action`**** (para Action):** Dividido en tres partes, que definen los formatos de datos de Goal, Result y Feedback continuo, también separados por `---`.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-03.png" alt="Formatos de Message para Topic, Service y Action" />
</div>

:::note
Después de unificar el formato de comunicación, ¿quién mantiene la calidad de la comunicación entre nodos? En comparación con ROS1, el mecanismo de QoS en ROS2 mantiene la estabilidad y el rendimiento en tiempo real de la comunicación entre nodos.
:::

## 31.5 QoS (Quality of Service): El "Director de Tráfico" para la Interacción de Nodos

Para garantizar la estabilidad de la comunicación anterior, ROS2 introduce QoS. Puedes establecer diferentes reglas de transporte para distintos métodos de comunicación:

- **Modo Reliable:** Como enviar un mensaje de WeChat: el destinatario debe recibirlo; el mecanismo subyacente lo retransmite automáticamente hasta que tenga éxito.
- **Casos de uso:** Enviar una orden de parada de emergencia del brazo (Service); nunca debe perderse.
- **Modo Best Effort:** Como una videollamada: perder uno o dos fotogramas no pasa nada; lo más importante es mantener una latencia extremadamente baja.
- **Casos de uso:** Fotogramas de cámara de alta frecuencia (Topic).

:::note
Hasta ahora, el funcionamiento de un solo nodo y la comunicación entre nodos están bastante completos. Pero en la ingeniería real, un robot complejo lleva docenas o incluso cientos de nodos debido a la gran cantidad de sensores y controladores. Si tuviéramos que iniciarlos todos manualmente uno por uno en cada arranque, eso sería claramente irreal. Para resolver este problema, ROS2 proporciona los mecanismos de Launch y Parameter.
:::

<a id="launch"></a>

## 31.6 Servidor de Parámetros y Launch

### A. Launch (archivos de mecanismo launch y despliegue automatizado)

- **Punto débil:** Los sistemas de robots actuales son muy complejos. Por ejemplo, para iniciar un robot de conducción autónoma puede que necesites lanzar docenas de Nodos a la vez: el nodo de LiDAR, el nodo de cámara, el nodo de control del brazo, el nodo de planificación de trayectoria, etc. Si un ingeniero tuviera que abrir docenas de ventanas de terminal y escribir docenas de comandos cada vez, sería enloquecedor y propenso a errores (por ejemplo, el nodo cerebro se inicia antes que el nodo ojo y falla porque no puede obtener datos).
- **Qué es:** El "botón de inicio con un clic" **o** "director de orquesta" del sistema de robots. Es un script de orquestación automatizada escrito en Python (o XML/YAML).
- **Características (ventajas clave):** Puede "empaquetar" todos los nodos relacionados —cámaras, motores, algoritmos de planificación— y levantarlos de una vez, gestionar su orden de arranque (ciclo de vida) y distribuir de forma uniforme los Parameters configurados en el arranque, mejorando enormemente la eficiencia de desarrollo y despliegue.
- **Ejemplo:** Como el "modo cine" en un hogar inteligente. No cierras manualmente las cortinas, apagas la luz principal, enciendes la TV y ajustas los altavoces uno por uno. Solo pulsas una tecla (ejecutas un archivo Launch) y todos los dispositivos empiezan a colaborar inmediatamente en el orden y estado preestablecidos.
- **Casos de uso reales:**
    - **Orquestación de todo con un clic:** Un comando inicia todo el sistema de percepción, decisión y control del robot.
    - **Cambio rápido entre escenarios:** Durante el desarrollo podemos escribir dos archivos Launch. Uno es `sim.launch.py` (asigna parámetros de entorno virtual a los nodos para la simulación), y el otro es `real.launch.py` (asigna parámetros de hardware real para controlar el robot real). Solo hay que ejecutar un archivo diferente para cambiar de entorno sin problemas sin cambiar ningún código central.

### B. Parámetro (mecanismo de parámetros y configuración dinámica)

- **Punto de dolor:** Supón que estás depurando el brazo y ves que se mueve demasiado rápido. Si cada cambio de velocidad requiriera editar código fuente en C++ o Python, recompilar durante minutos y reiniciar el programa, la eficiencia de desarrollo sería demasiado baja.
- **Qué es:** El "diccionario de configuración global" en tiempo de ejecución del nodo **o** su "panel de control". Permite que un nodo exponga variables ajustables hacia el exterior.
- **Características (ventaja principal):** La mayor característica es la "modificación dinámica, efecto instantáneo". Puedes cambiar el comportamiento del robot dinámicamente sin modificar el código subyacente ni recompilar. Con Parameters podemos ajustar parámetros sobre la marcha y ver el efecto en tiempo real.
- **Ejemplo:** Como al jugar un juego 3D: no sales del juego para cambiar código; mientras juegas presionas ESC para abrir el menú de configuración, bajas la "calidad gráfica", subes la "sensibilidad del ratón", guardas—y la vista del juego cambia de inmediato.
- **Casos de uso reales:**
    - **Como el "archivo de configuración global" del robot:** Gestionar de forma centralizada los ajustes iniciales de cada módulo.
    - **Ajuste de parámetros de hardware:** Por ejemplo, ajustar dinámicamente la exposición y resolución de imagen de la cámara, o la frecuencia de escaneo del LiDAR.
    - **Ajuste de algoritmos en tiempo real:** Podemos hacer que la "velocidad máxima" del brazo sea un Parameter. Durante las pruebas podemos asignar valores iniciales desde un archivo Launch, y también **ajustarla dinámicamente desde la línea de comandos en tiempo de ejecución e inspeccionar visualmente el cambio en el movimiento del brazo**. Con Parameters, el ajuste se vuelve intuitivo y eficiente.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-04.png" alt="Archivos Launch y ajuste de parámetros en tiempo de ejecución" />
</div>

:::note
Una vez que el robot arranca y funciona sin problemas, ¿qué pasa si queremos registrar todos los datos que produce para revisarlos o cazar errores? Ahí es donde entra rosbag.
:::

## 31.7 La herramienta rosbag: La "cámara de salpicadero" del robot

Durante el desarrollo y la depuración de robots, a menudo nos topamos con puntos de dolor: ocurre un incidente inesperado durante las pruebas en exteriores, pero de vuelta en el laboratorio nunca se puede reproducir; o el hardware real del robot es extremadamente caro y consume mucha energía, así que no podemos ejecutar algoritmos 24/7.

Para resolver estos problemas, ROS2 proporciona la potente herramienta **rosbag**.

- **Qué es:** Puede registrar Messages que fluyen en cualquier Topic del sistema (por ejemplo, nubes de puntos de LiDAR, imágenes de cámara, velocidades de motor) con **marcas de tiempo**, exactamente tal cual, en un archivo local (normalmente una base de datos SQLite3 en ROS2). Como la "cámara de salpicadero" del robot, registra todo lo que pasa en los Topics para su posterior reproducción y depuración offline.
- **Su principio "engañoso":** Cuando reproduces un archivo rosbag, vuelve a publicar esos Topics en el orden temporal y frecuencia originales. Para los nodos de algoritmos posteriores (por ejemplo, detección de objetos, planificación de trayectoria), **simplemente no pueden distinguir si los datos provienen de sensores de hardware reales o de la reproducción de rosbag.**

### Casos de uso principales

1. **Depuración de algoritmos offline (la más común):** Los ingenieros de algoritmos no tienen que seguir al robot afuera bajo el sol. Los testers simplemente graban un rosbag que contenga escenas ricas en exteriores. En una oficina con aire acondicionado, los ingenieros pueden reproducir estos datos cualquier número de veces para validar y ajustar sus algoritmos de percepción o navegación.
2. **Revisión de incidentes in situ (un artefacto para cazar bugs):** Si el robot de repente choca contra una pared mientras está en marcha, al reproducir el rosbag de ese momento los desarrolladores pueden inspeccionar fotograma a fotograma: ¿la cámara no detectó un obstáculo? ¿El nodo de planificación calculó una trayectoria incorrecta? ¿O el chasis no ejecutó el comando de parada?
3. **Recopilación de datasets para IA:** Los robots modernos dependen en gran medida de modelos de deep learning. rosbag facilita la recopilación de grandes cantidades de datos reales de sensores para el posterior entrenamiento de modelos.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-05.png" alt="Flujo de trabajo de grabación y reproducción con rosbag" />
</div>

## 31.8 Sistema robótico modular

A través de los mecanismos anteriores, ROS2 hace que el software de robots sea altamente **modular**. Puedes reemplazar el "nodo de LiDAR" por el nodo de radar de otra marca en cualquier momento; mientras publiquen el mismo formato de Message, el cerebro posterior (nodo de planificación) no necesita ningún cambio de código. Ese es el encanto central de la arquitectura de software de robots moderna. **Resumen:** Nodos independientes con comunicación estandarizada Topic/Service/Action, más la orquestación unificada mediante Launch, forman la arquitectura de software extremadamente **modular** de ROS2, haciendo que el desarrollo de robots sea tan flexible como construir con ladrillos LEGO.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-06.png" alt="Arquitectura robótica modular de tres capas de ROS2" />
</div>

### Transición de capítulo: Del "sistema nervioso" al "modelo de máquina"

Si el Capítulo 31 construyó el "sistema nervioso" del robot (mecanismos de comunicación), entonces el Capítulo 32 enseña al ordenador cómo reconocer y controlar la "entidad física" del robot, permitiendo que el ordenador realmente sienta cómo existe la máquina y cómo se transforman las posiciones espaciales.

</div>

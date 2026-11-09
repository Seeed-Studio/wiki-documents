---
description: "Capítulo 22 del curso para principiantes de SO-ARM Physical AI — la vía VLA sin código: conecta y calibra los brazos en SenseCraft Robotics, verifica la teleoperación, vincula cámaras, recoge y limpia datasets, entrena en la nube o localmente y ejecuta la inferencia — sin terminal y sin GPU de entrenamiento."
title: Capítulo 22 - VLA sin código con SenseCraft Robotics
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SenseCraft Robotics
  - sin código
  - VLA
  - entrenamiento
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_22
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_22/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 22 · Práctica</span>
    <h2>22. VLA sin código con SenseCraft Robotics</h2>
    <p>
      Capítulo 22 del curso para principiantes de SO-ARM Physical AI — la vía VLA sin código: conecta y calibra los brazos en SenseCraft Robotics, verifica la teleoperación, vincula cámaras, recoge y limpia datasets, entrena en la nube o localmente y ejecuta la inferencia — sin terminal y sin GPU de entrenamiento.
    </p>
    <div className="hero-actions">
      <a href="#prepare">Preparación</a>
      <a href="#connect">Conectar</a>
      <a href="#dataset">Recolectar</a>
      <a href="#operation">Operar</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Para quién es este capítulo</strong>
    <span>Para todos — en especial para lectores sin GPU de entrenamiento.</span>
    <span>Misma tarea que el Capítulo 11 (agarrar en A, colocar en B), misma teoría — sin Python.</span>
    <span>Un flujo guiado de 6 pasos sustituye a la terminal.</span>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ Sin código · Sin configuración de entorno</span>
    <p className="sensecraft-banner__title">Omite la configuración: ejecuta el reBot Arm y LeRobot desde una sola aplicación</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics es la plataforma sin código de Seeed para el SO-ARM101, reBot Arm 102 + B601-RS y B601-DM. Conecta los brazos, calibra, recopila demostraciones, entrena y ejecuta inferencias desde una interfaz guiada, sin entorno de Python ni terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Flujo de trabajo guiado en 6 pasos</li>
      <li>✅ Entrenamiento en la nube, sin GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir a SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/es/sensecraft_robotics/">Guía de software</a>
  </div>
</div>

:::tip
SenseCraft Robotics es la plataforma sin código de Seeed para el SO-ARM101 (y los brazos reBot). Conecta los brazos, calibra, recoge demostraciones, entrena y ejecuta la inferencia desde una interfaz guiada — sin entorno Python y sin terminal. Este capítulo es la contrapartida gráfica de todo lo que hiciste en las Etapas 3-4.
:::

<a id="overview"></a>

## 22.1 Preparación

<section id="prepare" className="section-card">
  <div className="section-title">
    <span>Preparación</span>
    <h2>22.1 Preparación</h2>
  </div>

### Hardware

![Lista de hardware SO-ARM101 Pro](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

| Artículo | Líder | Seguidor |
| :--- | :--- | :--- |
| Brazo | Líder negro ensamblado ×1 | Seguidor blanco ensamblado ×1 |
| Placa de servos LeRobot | ×1 | ×1 |
| Cable de alimentación | 5V ×1 | Pro: 12V ×1; Standard: 5V |
| Cable de datos | USB-C ×1 | USB-C ×1 |
| Abrazadera de fijación | ×2 | ×2 |

Compartido: piezas de pinza flexible, **dos cámaras USB de 32 × 32 mm** (el kit incluye una; prepara la segunda aparte — los datos de entrenamiento deben contener dos vistas), destornillador, alfombrilla.

> Los brazos deben estar ensamblados, fijados, alimentados y conectados por USB. Si el ensamblaje no está completo, vuelve al [Capítulo 6](/es/robotics/soarm_physical_ai_course_chapter_6/).

### Ordenador y software

- Windows o macOS; el entrenamiento local requiere una GPU compatible;
- Red estable para descargas, inicio de sesión, entrenamiento en la nube e inferencia;
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado y sesión iniciada con una [cuenta SenseCraft](https://account.seeed.cc/login) registrada.

### Escena y seguridad

- Marca dos posiciones fijas en la mesa: A para el inicio del objeto, B para su destino;
- Prepara un objeto de tamaño adecuado y fácil de agarrar (un bloque rojo o algo blando);
- Asegúrate de que A, B, ambos brazos y el objeto se vean en las cámaras sin obstrucción;
- Despeja el espacio de personas, desorden, cables y objetos frágiles. Mantén el líder lejos del seguidor y fuera de su vista de cámara.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Escena y seguridad de la tarea" />
</div>

:::note
Los nombres de interfaz, las posiciones de botones y los backends de entrenamiento pueden cambiar con las versiones de SenseCraft Robotics. Los puertos serie y nombres de dataset aquí son ejemplos — usa siempre los dispositivos que detecte tu ordenador.
:::

</section>

## 22.2 Conectar los brazos

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Conexión</span>
    <h2>22.2 Conectar los brazos</h2>
  </div>

:::warning
Aviso de seguridad: desconecta la alimentación antes de instalar, conectar o retirar los brazos. Confirma que están fijos, que los cables están bien puestos y que el espacio está despejado antes de restaurar la corriente. Nunca conectes o desconectes la alimentación con el sistema encendido.
:::

**Instala los cuerpos de los brazos.** Coloca líder y seguidor en una mesa estable; fija cada uno con dos abrazaderas; deja distancia segura entre brazos; con la corriente cortada, mueve cada articulación a mano para confirmar movimiento suave sin colisiones.

![Instalar los cuerpos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

**Instala las placas de control.** Una placa LeRobot por brazo: alinéala con la ranura de la base, comprueba la orientación del conector y asíentala; verifica que cada cable de servo está bien metido y sin dobleces ni presión.

**Conecta los cables de datos.** Líder → USB-C → ordenador; seguidor → USB-C → ordenador. Para identificar puertos más fácil, conecta primero los extremos del brazo y enchufa al ordenador de uno en uno durante la vinculación de puertos (22.3).

![Instalar las placas](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

**Instala las alimentaciones y enciende.** Con los adaptadores desconectados de la red: inserta cada cable DC y aprieta el anillo de bloqueo en sentido horario; Pro = líder 5V / seguidor 12V, Standard = ambos 5V — no los mezcles; aparta los cables del rango de movimiento. Luego conecta la corriente, observa los indicadores y confirma que USB-C (datos) y DC (alimentación) están ambos enchufados.

![Instalar las alimentaciones](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)

</section>

## 22.3 Configuración de dispositivos en la app

<section id="device-setup" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>22.3 Configuración de dispositivos en la app</h2>
  </div>

Tras iniciar sesión, abre **Proyectos** → **Nuevo proyecto**, escribe nombre y descripción, y créalo. El resumen del proyecto da acceso a la configuración de dispositivos, repetición de acciones, datasets, entrenamiento, modelos y operación; si muestra "Pendiente de configurar" o "No conectado", pulsa **Ir a configuración de dispositivos**.

![Crear un proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### Selecciona el modelo de dispositivo

En **Emparejamiento de dispositivos** elige **SO-ARM101 + SO-ARM101** y pulsa **Siguiente** para vincular los puertos.

![Seleccionar SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

### Vincula los puertos USB

1. **Escaneo inicial:** desconecta ambos USB, pulsa **Reescanear** y anota los puertos mostrados;
2. **Vincula el líder:** conecta el líder, **Reescanear**, vincula el puerto recién aparecido al líder;
3. **Vincula el seguidor:** conecta el seguidor, **Reescanear**, vincula el nuevo puerto al seguidor;
4. Ambos muestran **Conectado** → **Siguiente**.

![Vincular los puertos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

:::tip
Resolución de puertos: tras cada escaneo vincula solo el puerto **nuevo** — nunca identifiques dispositivos solo por número de COM. Si falta un puerto, reconecta el USB y reescanea; si solo aparece uno, revisa el otro cable y la alimentación del brazo.
:::

### Verificación de calibración

Lleva líder y seguidor a la postura media del ejemplo en pantalla y despeja el área. Dos modos:

- **Calibración automática** — el sistema identifica el rango de cada articulación. Requiere topes físicos fiables en todas. Quita cargas, alinea ambos brazos casi verticales, marca la casilla de confirmación, pulsa **Iniciar calibración** y espera.
- **Calibración manual** — para articulaciones sin tope fiable o para confirmar paso a paso: con el líder encendido, lleva sus articulaciones al centro del rango, pulsa **Iniciar calibración** y sigue las indicaciones para confirmar en orden los centros y recorridos de ambos brazos.

> No teleoperes ni recojas datos durante la calibración. Si la postura es anormal, una articulación se atasca o la calibración falla — detente, revisa el brazo y el área, y reintenta.

### Verificación de teleoperación

1. Pulsa **Iniciar teleoperación**;
2. Mueve un poco el líder — el seguidor debe seguir de forma síncrona, en la misma dirección y suave;
3. Pulsa **Finalizar teleoperación** y elige **Confirmar teleoperación normal** (o **Anormal, volver a recalibrar**).

![Verificación de teleoperación](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

:::tip
**Compensación de gravedad (opcional):** los brazos pesan, y ajustar el seguidor a mano cuesta. La compensación contrarresta parte del peso y facilita el ajuste — apágala tras ajustar y antes de verificar la teleoperación. Ayuda al movimiento manual; no hace que el seguidor siga al líder.
:::

### Vincula las cámaras

Se necesitan dos cámaras y dos vistas. Montajes comunes (el Capítulo 12 discutió la misma elección): **vista de pinza** (superior + pinza, para operaciones finas) o **vista lateral de apoyo** (superior + lateral, para agarrar/manipular/colocar — la de este curso).

1. Conecta ambas cámaras y pulsa **Reescanear**;
2. Asigna los flujos a **Cámara frontal** y **Cámara lateral**;
3. Revisa ambas previsualizaciones: brazos, objeto y destino claramente visibles → **Siguiente**.

![Vincular cámaras](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

</section>

## 22.4 Repetición de acciones (calentamiento opcional)

<section id="action-replay" className="section-card">
  <div className="section-title">
    <span>Repetición</span>
    <h2>22.4 Repetición de acciones (calentamiento opcional)</h2>
  </div>

**Repetición de acciones** registra movimientos por enseñanza con el líder y los guarda en una lista para reproducirlos — buena forma de verificar la cadena antes de comprometerse con un dataset:

| Función | Operación | Propósito |
| :--- | :--- | :--- |
| Grabar una acción | Pulsa **+** → enseña con el líder → **Detener grabación** | Registrar acciones de agarrar/mover/colocar |
| Reproducir una acción | Pulsa **Reproducir** | Comprobar continuidad, dirección y apertura/cierre correctos |

![Lista y repetición de acciones](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

</section>

## 22.5 Dataset: configurar, grabar, limpiar

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>22.5 Dataset: configurar, grabar, limpiar</h2>
  </div>

Se recomienda un enfoque de lotes pequeños y varias sesiones, exactamente lo planeado en el Capítulo 11: ~10 episodios por tanda; tras 2–3 tandas conserva 20–30 válidos para el primer entrenamiento; añade datos de variantes complejas después.

### Configurar una tarea de recolección

Abre **Dataset** → **Recolectar datos** e introduce la información:

| Campo | Ejemplo | Guía |
| :--- | :--- | :--- |
| Nombre del dataset | `SO-ARM101 pick-and-place A-to-B-01` | Nombres "dispositivo + tarea + tanda" |
| Descripción de tarea | `Move the object from the left to the right` | Enuncia el objetivo; **al fusionar, las descripciones deben coincidir exactamente** |
| Episodios | `10` | Cada episodio completa una tarea entera |
| Duración por episodio | `20`–`30` segundos | Cubrir la acción completa |
| Descanso | `5` segundos | Reiniciar brazos y escena |

![Configurar la recolección](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

### Grabar episodios

Cada episodio graba el proceso completo: agarrar en A → mover → soltar en B. Mantén el procedimiento consistente; añade pequeñas variaciones de posición/ángulo solo cuando busques más generalización.

1. Coloca el objeto en A, confirma la postura inicial y pulsa **Iniciar grabación**;
2. Enseña la tarea con el líder y devuelve el brazo a la postura inicial;
3. Espera el tiempo restante o pulsa ➡ (o barra espaciadora) para terminar antes;
4. Durante el descanso, devuelve el objeto a A y prepara el siguiente episodio.

![Grabar episodios](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

:::note
Importante:
- Fija bien las cámaras; brazos, pinza, objeto y los puntos A y B deben seguir visibles en ambas vistas;
- No dejes que las acciones clave se bloqueen o salgan del encuadre;
- Ante fallo, objeto caído, vídeo entrecortado o cámara tapada — pulsa **Grabar de nuevo** o `Esc`;
- Puedes terminar la tanda primero e inspeccionar y borrar los episodios anómalos después;
- Detente de inmediato ante riesgo de pérdida de control o colisión.
:::

### Inspeccionar, borrar y fusionar

| Operación | Método |
| :--- | :--- |
| Inspeccionar episodios | Selecciona uno, reproduce vídeo/repetición; comprueba completitud y movimiento de pinza |
| Borrar anómalos | **Borrado por lotes** → selecciona → confirma → **Generar copia con borrado** (el original no se sobreescribe) |
| Fusionar datasets | **Fusionar** → selecciona → nuevo nombre (descripciones, combinaciones de dispositivos y cámaras deben coincidir) |

![Inspeccionar el dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)

</section>

## 22.6 Entrenamiento

<section id="training" className="section-card">
  <div className="section-title">
    <span>Entrenamiento</span>
    <h2>22.6 Entrenamiento</h2>
  </div>

El entrenamiento convierte los datos de enseñanza en un modelo de acciones — la versión gráfica del Capítulo 15.

| Parámetro | Opción / valor | Detalle |
| :--- | :--- | :--- |
| **Hardware** | Nube · GPU automática | Servidor en la nube; consume créditos |
| | Local · gratis | El ordenador actual; requiere GPU local compatible |
| **Dataset** | Elige el objetivo | El dataset limpio de 22.5 |
| **Política** | ACT | La política por defecto actual |
| **Pasos** | `10000` | Valor inicial; ajusta según resultados |

Pasos y episodios recomendados (coincide con el Capítulo 11):

| Dificultad | Descripción | Episodios | Pasos |
| :--- | :--- | :---: | :---: |
| Inicial | A fijo a B fijo | ~20 | 10.000–15.000 |
| Intermedio | Agarrar y colocar en posiciones aleatorias | ~50 | 30.000–40.000 |
| Avanzado | Varios pasos o larga duración | ~100 | 80.000–100.000 |

La duración depende de la GPU y los pasos — 20.000 pasos en la nube tarda de minutos a decenas de minutos; 100.000 unas cinco veces más. Pulsa **Iniciar entrenamiento** y sigue el progreso en **Tareas actuales**.

![Configuración del entrenamiento](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

</section>

## 22.7 Modelo y operación (inferencia)

<section id="operation" className="section-card">
  <div className="section-title">
    <span>Operación</span>
    <h2>22.7 Modelo y operación (inferencia)</h2>
  </div>

Abre **Modelo** para ver los resultados; confirma que tarea y combinación de dispositivos coinciden con tu proyecto. Luego **Operación** carga el modelo en los brazos:

1. **Elige un modelo** marcado como compatible con los brazos actuales;
2. **Elige el modo de inferencia**: nube o local;
3. **Inicia la inferencia** y observa la tarea.

![Lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

**Nube vs. local:**

| Comparación | Inferencia en la nube | Inferencia local |
| :--- | :--- | :--- |
| **Cómputo** | GPU en la nube de alto rendimiento | CPU local (GPU local aún sin soporte) |
| **Rendimiento según** | Calidad de red | Rendimiento de la CPU |
| **Parámetros** | Número de acciones (120 por defecto); umbral de bloque (0.9 por defecto — mayor más cauteloso, menor más fluido) | Número de ejecuciones; límite de tiempo por ejecución (autofinaliza) |
| **Salida de datos** | Solo verificación de inferencia | Genera automáticamente un dataset de las ejecuciones |
| **Coste** | Sujeto a créditos de plataforma | Normalmente gratis, limitado por la CPU |

![Interfaz de operación](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)

:::note
Antes de operar, confirma los brazos conectados y el área segura. Durante la operación no desconectes ni desmontes los brazos. Si el resultado decepciona, vuelve a **Dataset** — borra episodios anómalos, añade datos válidos y reentrena. Es el bucle de iteración del Capítulo 16, una vez más.
:::

</section>

## 22.8 Conclusión del curso

<section id="conclusion" className="section-card">
  <div className="section-title">
    <span>Conclusión</span>
    <h2>22.8 Conclusión del curso</h2>
  </div>

Has llevado al SO-ARM de la caja a una política entrenada y desplegada — y por dos caminos:

- **La vía del código (Etapas 2-3):** ensamblar, calibrar, teleoperar, grabar, entrenar ACT, evaluar, iterar;
- **Las vías VLA (Etapa 4):** ajustar GR00T en tu propia cadena GPU, o correr todo sin código en SenseCraft Robotics.

Hacia dónde ir ahora:

- El **doble brazo del Capítulo 17**, si lo saltaste;
- El [Wiki de Robótica](https://wiki.seeedstudio.com/es/robotics_page/) para el ecosistema más amplio del SO-ARM: GR00T en Jetson Thor, AmazingHand, RL con Isaac Lab, simulación LeIsaac;
- Tus propias tareas — todo el curso era el andamio para ellas.

Si el curso te ayudó, deja una Star a [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) y [Seeed-Projects/lerobot](https://github.com/Seeed-Projects/lerobot) en GitHub, y comparte lo que construyas en los grupos de la [introducción del curso](/es/robotics/soarm_physical_ai_course_introduction/).

</section>

</div>

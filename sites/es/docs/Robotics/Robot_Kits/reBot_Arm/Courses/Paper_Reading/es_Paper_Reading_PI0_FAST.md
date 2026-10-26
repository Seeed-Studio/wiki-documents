---
description: "Un análisis en profundidad del DCT de FAST, la cuantización de coeficientes, la compresión BPE, el tokenizador de acciones universal y la política de acciones autoregresiva."
title: "π₀-FAST — Tokenización de acciones eficiente"
hide_title: true
keywords:
  - Análisis en profundidad de artículos
  - pi0_fast
  - Aprendizaje de robots
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_pi0_fast
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_pi0_fast/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-pi0_fast-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISIS EN PROFUNDIDAD DE ARTÍCULOS</span>
  <h1 id="paper-reading-pi0_fast-title">π₀-FAST — Tokenización de acciones eficiente</h1>
  <p className="paper-reading-lead">FAST: Tokenización de acciones eficiente para modelos Visión-Lenguaje-Acción</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Tokenización de acciones</li>
    <li>DCT</li>
    <li>Compresión BPE</li>
    <li>Políticas autoregresivas</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2501.09747" target="_blank" rel="noopener noreferrer" aria-label="Leer el artículo de FAST en arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Leer el artículo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

**Relación con π0:** El artículo se titula FAST; π0-FAST es la política entrenada con él. FAST es un método de tokenización, FAST+ un tokenizador de acciones universal preentrenado, y π0-FAST un VLA autoregresivo que usa esta representación. Comparte el enfoque de backbone PaliGemma con π0 pero cambia la generación de acciones; no es simplemente un preprocesador de compresión añadido al experto de flow matching de π0.

**Fuente de lectura:** El PDF original, Secciones I–VII y Apéndices A–E, siguiendo la estructura del análisis en profundidad de π0 anterior. Los números de página se refieren a las páginas físicas del PDF de 19 páginas, del cual se extraen las figuras. Las derivaciones adicionales y los ejemplos numéricos se marcan como explicaciones en lugar de atribuirse al artículo.

![FAST / π0-FAST Análisis en profundidad: FAST / π0-FAST Análisis en profundidad (imagen 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-08.png)

## Requisitos previos
### VLAs y tokenización de acciones
**Explicación:** Un VLA convierte una escena visible y una tarea en lenguaje en controles de robot. Para doblar una camiseta, las imágenes localizan la camiseta y las pinzas, el lenguaje define el objetivo, el estado describe los brazos y el modelo predice las futuras acciones de brazos y pinzas.

Este artículo usa segmentación de acciones: predecir $H$ pasos futuros en lugar de solo uno. Definimos:

$A_t=[a_t,a_{t+1},\ldots,a_{t+H-1}]\in\mathbb R^{H\times D},\qquad
o_t=(I_t^1,\ldots,I_t^m,\ell_t,q_t)$

Aquí $t$ es el tiempo de control del robot, $a_t$ una acción de dimensión $D$, y $H$ el horizonte. $I_t^i$ es la vista de imagen $i$, $m$ el número de cámaras, $\ell_t$ la instrucción y $q_t$ la propiocepción. La política aprende $\pi_\theta(A_t\mid o_t)$, donde $\theta$ denota los parámetros de la red.

**Artículo:** Los segmentos son principalmente de **un segundo** de duración. Así, $H$ depende de la frecuencia de control: 15 a 15 Hz, 20 a 20 Hz y 50 a 50 Hz. No asumas que el $H=50$ de π0 se usa para cada conjunto de datos aquí.

La tokenización de acciones mapea un segmento continuo a símbolos discretos:

$\mathcal T(A_t)=[z_1,z_2,\ldots,z_n],\qquad z_k\in\{0,\ldots,V-1\}$

$\mathcal T$ es el tokenizador, $z_k$ un ID de token de acción, $V$ el tamaño del vocabulario y $n$ la longitud de la secuencia comprimida. Segmentos con la misma forma pueden producir diferentes $n$, igual que frases de la misma longitud pueden tener diferentes recuentos de subpalabras.

**Precaución:** Un ID de token no es un ángulo articular. Un token FAST no tiene por qué corresponder a un instante de tiempo, una articulación o una acción completa. Primero se genera la secuencia y luego se decodifica a un segmento continuo.

### Binning puntual, π0 Flow Matching y FAST
![FAST / π0-FAST Análisis en profundidad: 1.2 Binning puntual, π0 Flow Matching y FAST (imagen 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-04-en.png)


El binning convencional cuantiza de forma independiente cada instante de tiempo y dimensión de acción. Una configuración común discutida en el artículo usa 256 bins uniformes:

```text
D action components at step 1 → D tokens
D action components at step 2 → D tokens
……
D action components at step H → D tokens
Total: H × D tokens
```

Los datos de alta frecuencia producen entonces secuencias largas con valores vecinos muy similares. Copiar tokens repetidos puede reducir la pérdida sin aprender el movimiento global.

**Ejemplo mínimo:** Los valores $[0.200,0.201,0.202,0.203]$ pueden caer todos en un mismo bin grueso. Repetir el token anterior predice muchas etiquetas correctamente pero no logra expresar la trayectoria que cambia de forma constante.

FAST usa:

```text
Continuous chunk → frequency coefficients → quantization → frequency-first flattening → BPE
          → fewer action tokens → autoregressive VLA prediction → continuous-chunk decoding
```

La transformada discreta del coseno (DCT) expresa una trayectoria como componentes cosenoidales a diferentes frecuencias; el byte-pair encoding (BPE) fusiona subsecuencias enteras comunes. Predecir esta representación comprimida de la trayectoria elimina supervisión redundante.

| Aspecto | VLA autoregresivo puntual | π0 original | π0-FAST |
|---|---|---|---|
| Representación | Valor discreto por instante de tiempo y dimensión | Segmento continuo | Tokens discretos comprimidos para un segmento |
| Objetivo | Predicción del siguiente token | Flow matching condicional | Predicción del siguiente token |
| Generación | Generar secuencialmente $HD$ tokens | Actualizar iterativamente el segmento completo con un experto | Generar $n$ tokens comprimidos y luego decodificar |
| Datos de alta frecuencia | Más tokens y repetición | La generación continua evita la decodificación dimensión por dimensión | Comprime la redundancia temporal y acorta la salida |
| Limitación principal | La destreza de alta frecuencia puede ser difícil de aprender | Requiere un experto continuo dedicado | Cuantización con pérdida; la inferencia autoregresiva aún puede ser lenta |

**Artículo:** La Tabla I reduce un segmento de camiseta de un segundo, 50 Hz, 14D de 700 tokens puntuales a un promedio de 53 tokens FAST. La decodificación sigue produciendo 50 × 14 acciones; el control del robot no se convierte en “53 tokens por segundo”.

![FAST / π0-FAST Análisis en profundidad: 1.2 Binning puntual, π0 Flow Matching y FAST (imagen 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-05.png)

*Figura 2: predicciones de la misma spline cúbica a diferentes densidades de muestreo. Amarillo es binning puntual; verde es DCT. La escala de color inferior va de amarillo claro a morado a medida que el número de muestras $H$ aumenta de 25 a 800. De la Figura 3 original, página 3 del PDF.*

**Cómo leer la figura:** Cuatro puntos de entrada definen el mismo tipo de objetivo de interpolación mientras aumenta la densidad. El error de la tokenización puntual crece, acercándose finalmente a una predicción constante; el error de DCT se mantiene bajo. El aprendizaje puede fallar debido a la representación y no a una tarea más difícil. Los valores 25–800 son muestras sintéticas por secuencia, no frecuencias reales de control de robot.

### Entrenamiento, inferencia y evaluación
| Etapa | Entradas y operaciones | Salida y criterio |
|---|---|---|
| Entrenamiento del tokenizador | Normalizar acciones, aplicar DCT y cuantización, y aprender BPE a partir de secuencias enteras. | Reglas de codificación/decodificación; error de compresión y reconstrucción. |
| Entrenamiento de la política | Condicionar en imágenes, lenguaje y estado; codificar acciones futuras demostradas como etiquetas FAST. | Optimización de entropía cruzada y pesos del VLA. |
| Inferencia de la política | Generar tokens, invertir BPE, des-cuantizar y aplicar la DCT inversa. | Segmentos continuos para el controlador. |
| Evaluación en robot | Ejecutar tareas y condiciones iniciales especificadas. | Éxito de la tarea o progreso normalizado. |

**Artículo:** La evaluación incluye seis tareas/configuraciones de robot real y un benchmark de simulación, además de pruebas offline separadas de compresión FAST+ a través de diferentes cuerpos. Comprimir datos de humanoides no es lo mismo que entrenar y validar físicamente una política humanoide.

**Precaución:** La pérdida de tokens, el error de reconstrucción y la puntuación de la tarea son distintos. Un hallazgo clave es que etiquetas repetitivas pueden producir una pérdida de entrenamiento baja mientras que las trayectorias y el comportamiento del robot siguen siendo pobres.

---

## Resumen
### Traducción
Los modelos de secuencia autoregresivos, incluidos los VLA tipo Transformer, pueden representar comportamientos robóticos complejos y generalizables, pero requieren un tokenizador para mapear predicciones discretas a acciones continuas. Los autores encuentran que un binning simple por dimensión y por instante de tiempo funciona mal en datos diestros de alta frecuencia.

Proponen Frequency-space Action Sequence Tokenization (FAST), que usa compresión basada en DCT para permitir que los VLA autoregresivos aprendan tareas diestros de alta frecuencia donde la discretización estándar falla.

FAST+ es un tokenizador universal entrenado en un millón de secuencias de acciones de robots reales, utilizable como tokenizador de caja negra en diferentes espacios de acción y frecuencias de control.

Combinado con el enfoque VLA de π0, FAST escala a 10 000 horas de datos de robots, iguala el rendimiento de VLAs de estilo difusión y reduce el tiempo de entrenamiento hasta cinco veces.

### Comentario
- **Motivación:** Las acciones de alta frecuencia contienen información repetida. Los tokens puntuales gastan esfuerzo de predicción en etiquetas con poca supervisión de movimiento nueva.

- **Cambio central:** Cambiar la representación del objetivo de aprendizaje antes de entrenar la política. FAST comprime la información de la trayectoria sin reducir la frecuencia de ejecución ni descartar puntos de control.

- **Por qué puede funcionar:** La DCT concentra la forma de la trayectoria, la cuantización crea coeficientes comprimibles y BPE acorta combinaciones comunes. Los tres contribuyen a los tokens finales.

- **Significado de “universal”:** FAST+ evita reentrenar un vocabulario BPE específico de cada conjunto de datos, pero aún requiere normalización, dimensiones y horizontes compatibles. Sus un millón de muestras de entrenamiento son principalmente segmentos de un segundo, no un millón de episodios completos de tareas.

- **Alcance de “cinco veces”:** Los experimentos de políticas a gran escala reducen las horas de GPU requeridas hasta aproximadamente cinco veces. Esto no es inferencia más rápida: la v1 informa alrededor de 750 ms por segmento π0-FAST frente a normalmente menos de 100 ms para π0.

---

## Introducción
![FAST / π0-FAST Análisis en profundidad: 3. Introducción (01-tokenization-bottleneck)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/01-tokenization-bottleneck-en.png)

### Párrafo 1: localizar el cuello de botella en la tokenización
- **Punto principal:** Los Transformers grandes pueden aprender comportamiento robótico desde cero o usar preentrenamiento imagen-texto, pero las acciones deben tokenizarse. El binning puntual tiene dificultades en tareas diestros de alta frecuencia porque copiar valores recientes correlacionados logra una pérdida baja y puede atrapar el aprendizaje en un óptimo local pobre.

- **Problema:** Un backbone potente no garantiza un aprendizaje útil de acciones; la representación del objetivo puede limitar la supervisión.

- **Configuración:** La Sección IV estudia la densidad de muestreo con interpolación sintética; la Sección V propone compresión.

![FAST / π0-FAST Análisis en profundidad: Párrafo 1: localizar el cuello de botella en la tokenización (02-compress-then-predict)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/02-compress-then-predict-en.png)

### Párrafo 2: Comprimir primero, predecir después
- **Punto principal:** Inspirado por la tokenización de lenguaje, FAST usa DCT para señales continuas de robots. La predicción estándar del siguiente token entonces aprende tareas que antes fallaban y admite una política DROID usada mediante lenguaje en entornos no vistos.

- **Problema:** Si la redundancia temporal es el obstáculo, reduce la redundancia de etiquetas en lugar de solo aumentar la capacidad de la red.

- **Configuración:** La Sección V-B presenta el algoritmo, y la Sección VI evalúa tareas reales y la generalización de DROID.

![FAST / π0-FAST Análisis en profundidad: Párrafo 2: Comprimir primero, predecir después (03-universal-tokenizer-and-scaling)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/03-universal-tokenizer-and-scaling-en.png)

### Párrafo 3: Tokenización universal y políticas a gran escala
- **Punto principal:** FAST+ aprende un vocabulario a partir de un millón de secuencias que abarcan brazos simples, bimanuales, móviles y diversas interfaces y frecuencias de control. π0-FAST escala la autorregresión a 10 000 horas con menos tiempo de entrenamiento que la comparación de estilo difusión.

- **Problema:** Reentrenar un tokenizador para cada robot añade sobrecarga, y el método debe escalar más allá de conjuntos de datos individuales.

- **Configuración:** La Sección V-C y el Apéndice A describen FAST+; VI-C prueba la universalidad y VI-F las políticas a gran escala.

**Precaución:** La introducción contiene tres párrafos principales, con el primero abarcando las páginas 1–2. Los saltos de página y los pies de figura no son párrafos adicionales. Las afirmaciones sobre el “primer” resultado DROID reflejan la evaluación de los autores en el momento de la publicación, no un estudio de trabajos posteriores.

---

## Trabajos relacionados
- **Tokenización de texto, imagen y audio:** El BPE de texto fusiona subsecuencias frecuentes; otras modalidades usan cuantización aprendida o representaciones de frecuencia. FAST aplica el principio de representación y compresión a fragmentos de acciones continuas. La DCT es analítica; solo se aprende el vocabulario BPE.

- **VLA:** RT-2 y OpenVLA transfieren conocimiento imagen-texto al control pero comúnmente usan bins de acción puntuales. FAST cambia las salidas para que un backbone autorregresivo pueda aprender destreza de alta frecuencia; π0 de flujo continuo es una comparación clave.

- **Representaciones de acción:** Las subtareas semánticas y los puntos clave pueden depender de controladores diseñados a mano; el binning representa directamente los controles pero tiene redundancia temporal; las cabezas de regresión y difusión cambian los mecanismos de salida. FAST mantiene la predicción de secuencias discretas. La comparación de compresión aprendida usa cuantización escalar finita (FSQ). FAST no necesita un codificador neuronal y funciona mejor en las reconstrucciones de alta fidelidad y tareas de destreza probadas, no necesariamente en todos los tokenizadores aprendidos.

---

## Sistema de políticas π0-FAST y plataformas experimentales
### Objetivos y componentes
FAST es un método de procesamiento de acciones, no un nuevo hardware de teleoperación. Esta sección del sistema explica cómo encajan la tokenización, el VLA, el control y la evaluación.

Los objetivos son comprimir acciones de alta frecuencia conservando trayectorias finas, reutilizar el entrenamiento autorregresivo de VLM, admitir espacios de acción variados, permitir un entrenamiento/reutilización de tokenizadores sencillo y escalar a través de encarnaciones.

| Componente | Configuración en el artículo | Función |
|---|---|---|
| FAST / FAST+ | DCT, cuantización, aplanado frecuencia-primero, BPE | Codificar fragmentos como símbolos predecibles y decodificarlos. |
| Backbone π0-FAST | PaliGemma-3B | Codificar imágenes/lenguaje y generar tokens de acción de forma autorregresiva. |
| Comparación de transferencia de backbone | OpenVLA basado en Prismatic 7B | Probar si los beneficios se extienden más allá de PaliGemma. |
| Imágenes | Dos o tres vistas de $224\times224$ | Una vista externa más una vista de muñeca por brazo. |
| Propiocepción | Discretización en 256 bins, luego tokenización de texto entero | Proporcionar el estado actual del robot. |
| Ejecución | Controladores de bajo nivel específicos de la plataforma | Enviar valores continuos decodificados a articulaciones, pinzas y otros controles. |

**Artículo:** Todos los pesos de la política se ajustan finamente. Cada imagen se codifica por separado, luego los tokens visuales se concatenan. El tamaño de imagen y la codificación del estado textual se especifican en el Apéndice C en lugar de inferirse de π0.

![FAST / π0-FAST Análisis en profundidad: 5.1 Objetivos y componentes (imagen 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-01.png)

| Tarea / entorno | Plataforma y frecuencia de control | Capacidad probada |
|---|---|---|
| LIBERO | Simulación | Generalización espacial, de objetos, de objetivos y de horizonte largo. |
| Recogida de mesa | UR5/UR5e simple, 20 Hz | Agarrar, clasificar y almacenar 12 objetos. |
| Doblado de camiseta | ARX bimanual, 50 Hz | Agarrar y doblar con precisión una camiseta plana. |
| Empaquetado de comestibles | UR5/UR5e simple, 20 Hz | Meter siete objetos en la bolsa sin colapsarla ni rasgarla. |
| Sacar tostadas de la tostadora | Trossen Viper-X bimanual, 50 Hz | Sacar dos rebanadas de pan tostado y colocarlas en un plato. |
| Doblado de ropa | ARX bimanual, 50 Hz | Recuperar, extender, doblar y apilar prendas de una cesta. |
| Tareas de sobremesa DROID zero-shot | Datos y despliegue en Franka, 15 Hz | Seguir lenguaje para colocación, limpieza, operaciones con cajones y tareas relacionadas en nuevas escenas. |

**Precaución:** Una frecuencia de control alta significa muchos puntos de control por segundo; una frecuencia alta en DCT significa variación rápida a lo largo de una trayectoria. Un movimiento suave a 50 Hz aún puede estar dominado por coeficientes de baja frecuencia. Ninguna de las dos es la tasa de inferencia del modelo completo.

### Conectando codificación, predicción y ejecución
El flujo de trabajo completo es:

```text
Demonstrations → one-second future chunks → normalization and FAST → action-token labels
Current images + language + state → VLM prefix → learn action-token prediction
                                      ↓ after training
New observations → autoregressive tokens → FAST decoding → continuous chunk → execute
                                                                  ↓
                                                          observe and predict again
```

FAST codifica solo objetivos de acción; no interpreta imágenes ni aplica DCT a la propiocepción actual. Durante el entrenamiento, el modelo ve tokens de acción previos de verdad de terreno; en inferencia, ve sus propios tokens generados.

**Artículo:** Los símbolos de acción reemplazan ranuras raramente usadas en el vocabulario del VLM, reutilizando salidas discretas sin un experto de flujo al estilo π0. Los experimentos con OpenVLA aún modifican entradas de múltiples imágenes y salidas por fragmentos. La compatibilidad con backbones autorregresivos no significa que cada base de código robótica existente no necesite adaptación.

**Temporización de ejecución:** DROID predice 15 pasos y ejecuta ocho o 15 en lazo abierto antes de actualizar observaciones. A 15 Hz, estos cubren alrededor de 0,53 o un segundo de puntos de control, no ciclos totales de tiempo de pared que incluyen inferencia y comunicación. La v1 no especifica una longitud de ejecución única para cada plataforma.

**Justificación:** Los fragmentos conservan la coherencia de la trayectoria; la compresión hace que las etiquetas de alta frecuencia sean aprendibles; las salidas autorregresivas permiten que los pesos de imagen-texto preentrenados participen directamente. Los controladores reciben valores continuos, no IDs de BPE.

### Datos, capacidades y resultados
#### Escala y configuración del conjunto de datos
| Uso | Alcance | Distinción |
|---|---|---|
| Entrenamiento del tokenizador FAST+ | Alrededor de un millón de fragmentos de acciones reales de un segundo | Aprende BPE, no la comprensión visual del VLA. |
| Cobertura de FAST+ | Brazos simples, bimanuales, móviles; controles de articulaciones, de efector final en marco mundial y de efector final en marco de cámara; frecuencias variadas | Un robot puede aportar múltiples parametrizaciones de acción. |
| Política a gran escala | Mezcla π0: 903M pasos de tiempo internos, con datos abiertos recibiendo un peso de muestreo de mezcla del 9,1 % | Las fuentes abiertas incluyen Bridge v2, DROID y OXE; el 9,1 % no es una fracción del volumen de datos en bruto. |
| Política específica de DROID | 75k episodios exitosos, alrededor de 21M muestras | Filtrado ligero y eliminación de acciones inactivas todo-cero; aún se requiere entrenamiento de la política. |
| Entrenamiento de DROID | Lote 256, 240k iteraciones, alrededor de tres épocas | El Apéndice D informa alrededor de cuatro días en ocho H100 para esta configuración. |

**Artículo:** El entrenamiento de FAST+ rellena acciones hasta 32 dimensiones. Esto alinea los datos del tokenizador, no el tamaño de salida de cada política, y difiere de la interfaz de 18D de π0. Las nuevas plataformas aún necesitan definir sus dimensiones de acción efectivas.

DROID usa una imagen externa y una de muñeca. El entrenamiento elige aleatoriamente entre dos cámaras externas disponibles y tres anotaciones de lenguaje por episodio, sin información de calibración de cámara. Los controles son velocidades de articulaciones y posición absoluta de la pinza. El despliegue con nuevas vistas no elimina la necesidad de configurar coordenadas e interfaces de control.

#### Compresión: menos tokens, el mismo horizonte de acción
Estos resultados de un segundo reproducen la Tabla I. La compresión es el conteo puntual de tokens dividido por el conteo FAST promedio a error de reconstrucción similar.

| Conjunto de datos / tarea | Dimensión $D$ | Frecuencia y horizonte $H$ | Tokens puntuales | Tokens FAST promedio | Compresión |
|---|---|---|---|---|---|
| BridgeV2 | 7 | 5 Hz, 5 pasos | 35 | 20 | 1,75 |
| DROID | 7 | 15 Hz, 15 pasos | 105 | 29 | 3,6 |
| Recogida de mesa | 7 | 20 Hz, 20 pasos | 140 | 28 | 5,0 |
| Doblado de camiseta | 14 | 50 Hz, 50 pasos | 700 | 53 | 13,2 |

**Interpretación:** Aumentar los puntos de control no necesariamente añade información de movimiento proporcionalmente nueva. Alrededor de 30 tokens por brazo por segundo es una observación empírica aquí, no una longitud fija.

**Verificación de versión:** La Tabla III del Apéndice usa algunos conjuntos de datos offline de diferente dimensión, incluyendo DROID Joint y recogida de mesa de 8D, mientras que la Tabla I lista 7D. Se mantiene la convención de la Tabla I en lugar de fusionar diferentes parametrizaciones en una sola especificación.

#### Evaluación: el éxito y el progreso son diferentes
| Tarea | Evaluación |
|---|---|
| LIBERO | Éxito binario por episodio; cuatro suites entrenadas conjuntamente en alrededor de 270k muestras durante 40k iteraciones. |
| Recogida de mesa | Fracción de 12 objetos colocados correctamente en la basura o en el contenedor de almacenamiento. |
| Doblado de camiseta | Éxito de doblado juzgado por humanos en cinco camisetas vistas. |
| Empaquetado de comestibles | Fracción de siete objetos colocados en la bolsa. |
| Retirada de tostadas | Un punto por rebanada retirada y uno por rebanada en el plato; cuatro puntos en total, luego normalizados. |
| Doblado de ropa | Doblado y apilado de prendas juzgado por humanos, con cinco prendas aleatorias en la cesta. |
| Pruebas cuantitativas de DROID | 44 ensayos por política, con puntos de progreso específicos de la tarea como agarre y destino correctos. |

**Comprobación de versión:** El texto principal llama a la cuarta suite de LIBERO Libero-10; el apéndice la llama Libero-Long. Aquí se describe como la suite de horizonte largo. El Apéndice E indica 16 tareas DROID, mientras que la Tabla II enumera 17 nombres; los recuentos de ensayos siguen sumando 44. La discrepancia se conserva en lugar de resolverse silenciosamente.

**Límite de evidencia:** Los despliegues en Berkeley, Stanford y la Universidad de Washington son demostraciones cualitativas adicionales sin tasas de éxito reportadas. Zero-shot significa sin entrenamiento adicional para la nueva escena de despliegue, no sin entrenamiento DROID. El entrenamiento de vocabulario FAST+ también incluye datos de tareas de evaluación reales, por lo que la Figura 6 no muestra tanto el tokenizador como la política completamente desconocidos para cada tarea.

#### Comparación de tokenizadores
![FAST / π0-FAST Análisis en profundidad: Comparación de tokenizadores (imagen 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-06.png)

En el despeje de mesas a 20 Hz y el doblado de camisetas a 50 Hz, el binning puntual avanza muy poco, mientras que FAST y FAST+ aprenden políticas útiles. FSQ respalda el valor de la compresión pero generalmente queda por detrás de FAST en estas tareas de destreza. Universal FAST+ está cerca de FAST específico del conjunto de datos, lo que respalda su uso como opción predeterminada.

**Precaución:** La figura promedia diferentes puntuaciones de tareas, por lo que no es una tasa de éxito media uniforme. Las barras de error también limitan las conclusiones sobre pequeñas diferencias entre barras similares.

#### Comparación de un solo conjunto de datos con π0
![FAST / π0-FAST Análisis en profundidad: Comparación de un solo conjunto de datos con π0 (imagen 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-09.png)

- En conjuntos de datos más pequeños como LIBERO y doblado de camisetas, los autores juzgan el rendimiento como comparable.

- En datos grandes de despeje de mesas, FAST alcanza un rendimiento sólido antes; π0 necesita aproximadamente tres veces más pasos para acercarse.

- En DROID, π0-FAST sigue el lenguaje de forma más fiable mientras que el π0 de flow-matching a menudo lo ignora; el artículo no establece la causa subyacente.

**Explicación:** Teacher forcing calcula las pérdidas para las posiciones de salida en paralelo durante el entrenamiento; la inferencia autoregresiva sigue siendo secuencial. El entrenamiento más rápido y la inferencia más lenta pueden coexistir. Estos resultados no establecen una superioridad autoregresiva universal.

#### Generalistas a gran escala y comparación con cómputo igualado
![FAST / π0-FAST Análisis en profundidad: Generalistas a gran escala y comparación con cómputo igualado (imagen 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-02.png)

π0-FAST tiene un rendimiento global similar a π0 en doblado, despeje de mesas, embolsado, tostadas y lavandería. Las tareas individuales varían; las tostadas no respaldan una afirmación de superioridad universal de FAST. El π0-FAST evaluado utiliza aproximadamente una quinta parte de las horas de GPU.

**Precaución:** VI-F describe en términos generales la comparación zero-shot, pero el Apéndice E especifica un fine-tuning de tareas de alta calidad para lavandería después del preentrenamiento a gran escala. Embolsado y tostadas usan modelos preentrenados directamente. No todas las tareas de la Figura 6 están libres de fine-tuning específico de la tarea.

![FAST / π0-FAST Análisis en profundidad: Generalistas a gran escala y comparación con cómputo igualado (imagen 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-10.png)

El cómputo igualado respalda más directamente una convergencia más rápida: FAST tiene una media global más alta y ganancias claras en despeje de mesas/embolsado, aunque sigue quedando por detrás en tostadas. Esto es evidencia de eficiencia de entrenamiento, no de una capacidad final más fuerte en cada tarea.

**Límite de despliegue:** En una RTX 4090, VI-E informa generalmente menos de 100 ms para π0 y alrededor de 750 ms para π0-FAST por cada segmento de un segundo. FAST decodifica aproximadamente 30–60 tokens a través de todo el backbone de lenguaje; π0 repite principalmente su experto más pequeño de 300M para diez actualizaciones de flujo. Las tareas estáticas toleran esta latencia, pero las tareas dinámicas y la optimización de inferencia siguen siendo trabajo futuro.

---

## Tokenización en el espacio de frecuencias y modelado de políticas autoregresivas
### Mecanismo 1: Expresar una trayectoria con DCT
#### Problema e intuición
Los puntos de control vecinos en trayectorias suaves son similares. Los objetivos independientes crecen con la frecuencia de muestreo sin añadir mucha información. DCT en su lugar describe qué formas de coseno se combinan, y con qué amplitudes, para formar la trayectoria.

Unos pocos coeficientes de baja frecuencia a menudo describen la forma global suave; las frecuencias más altas representan cambios rápidos y detalle. **DCT en sí no descarta las altas frecuencias ni impone un filtro paso-bajo fijo.** La DCT completa y la DCT inversa son reversibles; la cuantización introduce la pérdida.

#### Expresión formal
**Explicación:** El artículo aplica DCT de forma independiente a lo largo de cada dimensión de acción. Se usa a continuación una convención DCT-II ortonormal para mayor claridad, sin afirmar que el pseudocódigo especifique esa normalización.

Para un segmento normalizado $X\in\mathbb R^{H\times D}$:

$C_{k,d}=\alpha_k\sum_{j=0}^{H-1}X_{j,d}
\cos\left[\frac{\pi}{H}\left(j+\frac12\right)k\right]$

$\alpha_0=\sqrt{\frac1H},\qquad
\alpha_k=\sqrt{\frac2H}\quad(k>0)$

$j$ indexa el tiempo dentro del segmento, $d=1,\ldots,D$ las dimensiones de acción, y $k=0,\ldots,H-1$ la frecuencia. $C\in\mathbb R^{H\times D}$ es la matriz de coeficientes. $k=0$ es constante; los $k$ más altos varían más rápido. DCT actúa a lo largo del tiempo, no entre articulaciones.

La inversa correspondiente es:

$X_{j,d}=\sum_{k=0}^{H-1}\alpha_k C_{k,d}
\cos\left[\frac{\pi}{H}\left(j+\frac12\right)k\right]$

Cada instante de tiempo depende de múltiples frecuencias; un coeficiente de frecuencia normalmente afecta a todo el segmento.

#### Ejemplo numérico mínimo
**Explicación:** Sea $H=4,D=2$, con acciones normalizadas ilustrativas:

$X=\begin{bmatrix}
0.2&0.0\\
0.2&0.1\\
0.2&0.2\\
0.2&0.3
\end{bmatrix}
\quad\Longrightarrow\quad
C\approx\begin{bmatrix}
0.4&0.3\\
0&-0.2230\\
0&0\\
0&-0.0159
\end{bmatrix}$

La primera dimensión constante solo necesita un coeficiente constante distinto de cero. La segunda dimensión creciente se representa principalmente por el componente constante y el primer componente variable, con un pequeño coeficiente de frecuencia más alta. Siguen existiendo cuatro pasos de tiempo y dos dimensiones; solo cambia la representación de coordenadas.

**Por qué ayuda:** Las muestras densas de movimiento suave añaden puntos similares sin añadir necesariamente frecuencias importantes. Concentrar la información compartida hace posible la compresión en menos tokens informativos.

**Escala y límites:** Los segmentos suelen ser de aproximadamente un segundo. $H=1$ no ofrece redundancia temporal; los segmentos cortos limitan la compresión, mientras que los segmentos largos aumentan el horizonte y, si se ejecutan en lazo abierto, retrasan la retroalimentación. Transiciones bruscas de contacto o de pinza pueden requerir frecuencias más altas; unas pocas frecuencias bajas no pueden representar cada acción con precisión.

### Mecanismo 2: Cuantización, ordenación por frecuencia primero y BPE
#### Por qué DCT por sí sola es insuficiente
DCT sigue produciendo $HD$ coeficientes reales. Tokenizar cada uno por separado no acorta la secuencia, y los coeficientes casi cero crean etiquetas repetidas. FAST por lo tanto añade cuantización y BPE.

![FAST / π0-FAST Análisis en profundidad: Por qué DCT por sí sola es insuficiente (imagen 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-00.png)

#### Normalización por percentil por dimensión
**Artículo:** Mapear los percentiles 1 y 99 de cada dimensión de los datos de entrenamiento a $-1$ y $1$, reduciendo las diferencias de escala y la influencia de valores atípicos.

**Explicación:** Para una dimensión no degenerada:

$X_{j,d}=2\frac{A_{t}[j,d]-L_d}{U_d-L_d}-1$

$L_d$ y $U_d$ son los percentiles 1 y 99, respectivamente; $A_t[j,d]$ es el componente de acción física, y $X_{j,d}$ su valor normalizado sin unidades. Si $L_d=0,U_d=2$ para una articulación, las acciones físicas $0,1,2$ se mapean a $-1,0,1$.

**Precaución:** Mapear percentiles no fuerza cada valor dentro de $[-1,1]$. Siga la implementación para el recorte y el caso degenerado $L_d=U_d$; la v1 no los detalla. Guarde las estadísticas de entrenamiento para el despliegue en lugar de volver a calcular percentiles en cada segmento predicho.

#### Escalar y redondear para crear enteros comprimibles
$Q_{k,d}=\operatorname{round}(\gamma C_{k,d}),\qquad
\widehat C_{k,d}=\frac{Q_{k,d}}{\gamma}$

$Q$ es la matriz entera, $\gamma>0$ la escala, y $\widehat C$ los coeficientes reconstruidos. Un $\gamma$ mayor hace la rejilla más fina, normalmente mejorando la reconstrucción pero potencialmente aumentando los tokens; valores más pequeños llevan más coeficientes pequeños a cero y comprimen más a costa de un mayor error.

**Artículo:** Los experimentos específicos de cada conjunto de datos usan $\gamma=10$ y vocabulario $V=1024$, con sensibilidad limitada en el rango probado. Estos no son ajustes universales para espacios de acción arbitrarios.

Continuando el ejemplo con $\gamma=10$:

$Q=\begin{bmatrix}
4&3\\
0&-2\\
0&0\\
0&0
\end{bmatrix}$

La frecuencia más alta $-0.0159$ se convierte en cero, mientras que $-0.2230$ se convierte en $-2$. Ninguna regla mantiene solo las dos primeras frecuencias; cualquier coeficiente suficientemente grande puede permanecer distinto de cero.

**Explicación:** El redondeo ordinario da $\|\widehat C_{k,d}-C_{k,d}\|\leq 1/(2\gamma)$. Esto acota el error de un coeficiente, no el error de la articulación física directamente, que también depende de la transformación inversa, la escala de acción y el recorte.

#### El orden de frecuencia primero prioriza la forma global
Antes de BPE, FAST ordena los coeficientes por frecuencia creciente, luego por dimensión de acción dentro de cada frecuencia:

$u=[Q_{0,1},\ldots,Q_{0,D},Q_{1,1},\ldots,Q_{1,D},\ldots,Q_{H-1,D}]$

$u$ contiene $HD$ enteros. En el ejemplo:

```text
Frequency 0, two dimensions: 4, 3
Frequency 1, two dimensions: 0, -2
Frequency 2, two dimensions: 0, 0
Frequency 3, two dimensions: 0, 0
Flattened: 4, 3, 0, -2, 0, 0, 0, 0
```

**Artículo:** El orden de frecuencia primero da ejecuciones más estables que el orden de dimensión primero al predecir primero la forma global de baja frecuencia. La matriz original $D\times H$ llama a esto por columnas; la convención $H\times D$ de esta guía lo hace por filas. Importa el orden semántico, no la etiqueta de fila/columna.

#### BPE fusiona subsecuencias de enteros comunes
BPE aprende combinaciones frecuentes de símbolos adyacentes y las añade a un vocabulario finito. Un vocabulario ilustrativo podría fusionar $[0,0,0,0]$ o $[4,3]$ en tokens individuales, acortando el ejemplo de ocho enteros.

**Explicación:** Las reglas de fusión reales y los ID dependen de los datos de entrenamiento; este no es el vocabulario literal del artículo. Un token puede abarcar dimensiones o frecuencias vecinas, y la decodificación lo expande de nuevo a enteros.

**Distinción clave:** Redondear coeficientes es con pérdida; BPE es sin pérdida sobre la secuencia de enteros cuantizados. Las posiciones cero se preservan y comprimen, no se eliminan. De lo contrario, la transformación inversa perdería sus ubicaciones de frecuencia y dimensión.

![FAST / π0-FAST Análisis en profundidad: 4. BPE fusiona subsecuencias de enteros comunes (imagen 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-03.png)

**Lectura de la ablación:** Sin BPE, DCT aún concentra la información y supera al binning punto a punto, pero los tokens cero repetidos diluyen la supervisión y añaden pasos de decodificación. El rendimiento cae en ambas tareas reales, lo que respalda contribuciones separadas de DCT y BPE.

### Demostraciones de Modelado y Reutilización de FAST+ entre Cuerpos
#### Una Observación Puede Tener Varias Acciones Válidas
Una persona puede agarrar cualquiera de las esquinas de la camisa o desplegarla de forma diferente. La regresión directa de error cuadrático medio puede promediar alternativas válidas en una trayectoria intermedia no válida. π0 modela una distribución continua; π0-FAST modela probabilidades sobre tokens comprimidos.

Factorización autoregresiva:

$p_\theta(z_{1:n}\mid o_t)
=\prod_{k=1}^{n}p_\theta(z_k\mid o_t,z_{<k})$

$z_{1:n}$ es la secuencia FAST y $z_{<k}$ su prefijo antes del token $k$. Cada paso predice probabilidades sobre el vocabulario en lugar de promediar valores de acciones físicas; la secuencia completa se decodifica en una trayectoria.

**Precaución:** FAST no tiene codificador CVAE, fragmento de acción gaussiano ruidoso ni entrada de tiempo de flujo como π0. Esta sección explica el modelado de demostraciones sin importar módulos de ACT o π0. La cobertura aún depende de los datos, la fidelidad de cuantización y el aprendizaje.

#### Por Qué las Etiquetas Repetidas de Alta Frecuencia Debilitan el Aprendizaje
**Explicación:** Cuando los valores adyacentes apenas cambian, la entropía condicional del siguiente token puede ser baja:

$\mathrm H(Z_k\mid Z_{<k},o_t)$

$Z_k$ es un token de acción aleatorio y $\mathrm H$ entropía condicional, distinta del horizonte $H$. Un prefijo predecible explica gran parte de la siguiente etiqueta, por lo que la repetición puede obtener buena puntuación sin suficiente dependencia de la imagen o la tarea.

Esta perspectiva de la información explica los resultados sintéticos y de alta frecuencia; no es prueba de que toda política discretizada falle o de que menos tokens siempre ayuden. Una pérdida de compresión severa aún puede producir un comportamiento incorrecto.

#### Un Vocabulario Universal con FAST+
Los pasos analíticos de FAST se transfieren entre conjuntos de datos, pero un vocabulario BPE específico de un conjunto de datos no necesariamente lo hace. FAST+ aprende una cobertura más amplia a partir de alrededor de un millón de fragmentos entre cuerpos:

```text
Multiple robots, action spaces, and control rates
→ Normalize for each data configuration
→ Pad training actions to 32 dimensions
→ DCT, quantization, frequency-first flattening
→ Train BPE on the pooled integer sequences
→ Reusable FAST+ tokenizer
```

El vocabulario aprende patrones comunes de coeficientes y ceros, no la semántica de la cámara ni el controlador cinemático completo de un robot. Una nueva política aún necesita datos de imagen, lenguaje, estado y acción para aprender qué hacer. La tokenización universal y el control generalista son niveles diferentes.

![FAST / π0-FAST Análisis en profundidad: Un Vocabulario Universal con FAST+ (imagen 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-12.png)

**Lectura de la figura:** FAST+ comprime formas, dimensiones y frecuencias variadas. VI-C llama a las pruebas datos no vistos, mientras que la Tabla III incluye versiones de plataformas/tareas también nombradas en el entrenamiento. “Unseen” se mantiene por lo tanto al nivel de partición de datos del artículo, no se extiende a cada categoría de robot.

**Límite:** La Figura 10 es compresión offline, no éxito de locomoción humanoide, mano diestra o políticas de conducción. La Sección VII señala que las políticas físicas se validan principalmente en manipuladores estacionarios. La Tabla III incluye datos humanoides de 40D, por lo que el relleno de entrenamiento de 32D no es un máximo matemático para el método.

### Entrenamiento, Codificación y Decodificación del Tokenizador
#### Entrenamiento del Tokenizador
Para fragmentos de demostración $\{A^{(s)}\}$, con índice de muestra $s$:

1. Calcular y guardar estadísticas de percentiles por dimensión para cada configuración de datos.

2. Normalizar a $X^{(s)}$ y aplicar DCT a lo largo del tiempo de forma independiente por dimensión.

3. Cuantizar a entero $Q^{(s)}$ usando $\gamma$ fijo.

4. Aplanar en orden frecuencia-primero a $u^{(s)}$.

5. Entrenar BPE de tamaño fijo en todas las secuencias de enteros para obtener el vocabulario y las reglas de fusión $\Phi$.

**Artículo:** BPE es el único componente de tokenizador aprendido. Un vocabulario específico normalmente se entrena en minutos, no en los días o más necesarios para un VLA. DCT y cuantización no tienen pesos neuronales y no necesitan un codificador/decodificador VQ separado.

#### Codificación: Convertir Futuras Demostraciones en Etiquetas
La codificación completa es:

$z_{1:n}=\operatorname{BPE}_{\Phi}\!\left(
\operatorname{Flatten}_{\rm freq}\!\left[
\operatorname{round}\left(\gamma\operatorname{DCT}[\operatorname{Norm}(A_t)]\right)
\right]\right)$

$\operatorname{Norm}$ es la normalización, $\operatorname{Flatten}_{\rm freq}$ el aplanado frecuencia-primero, y $\Phi$ reglas BPE fijas. DCT actúa a lo largo del tiempo por dimensión. La codificación necesita acciones futuras reales, por lo que crea etiquetas de entrenamiento en lugar de asumir conocimiento futuro durante el despliegue.

**Precaución:** El Algoritmo 1 comienza en DCT, omitiendo la normalización explícita, mientras que V-B la especifica en prosa. Esta guía sigue la canalización completa. El redondeo no puede invertirse exactamente, por lo que la decodificación reconstruye una aproximación de las acciones pre-cuantizadas.

#### Decodificación: Convertir Predicciones en Acciones Ejecutables
Después de generar $\widehat z_{1:\widehat n}$:

$\widehat u=\operatorname{BPE}^{-1}_{\Phi}(\widehat z_{1:\widehat n}),\qquad
\widehat Q=\operatorname{Unflatten}_{H,D}(\widehat u)$

$\widehat C=\widehat Q/\gamma,\qquad
\widehat X=\operatorname{IDCT}(\widehat C),\qquad
\widehat A_t=\operatorname{Norm}^{-1}(\widehat X)$

$\widehat n$ es el número de tokens generados; $\operatorname{Unflatten}_{H,D}$ reconstruye la matriz de coeficientes y $\operatorname{IDCT}$ es la inversa correspondiente. La $\widehat A_t\in\mathbb R^{H\times D}$ final es continua. El despliegue aún necesita $H,D$ objetivo; la longitud variable de tokens no reemplaza la definición de la interfaz de control.

Para la normalización lineal precedente, la desnormalización es:

$\widehat A_t[j,d]=L_d+\frac{\widehat X_{j,d}+1}{2}(U_d-L_d)$

**Explicación:** La transformación inversa del ejemplo con $\gamma=10$ da aproximadamente:

$\widehat X\approx\begin{bmatrix}
0.2&0.0193\\
0.2&0.0959\\
0.2&0.2041\\
0.2&0.2807
\end{bmatrix}$

La segunda dimensión original es $[0,0.1,0.2,0.3]$; la reconstrucción preserva su forma creciente con pequeños errores. La decodificación BPE no añade cambios a $Q$: la cuantización causa el error. Estos son valores normalizados, no directamente radianes o milímetros.

#### Verificar Compresión y Reconstrucción Juntas
![FAST / π0-FAST Análisis en profundidad: Verificar Compresión y Reconstrucción Juntas (imagen 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0_fast/image-07.png)

**Lectura de la figura:** FSQ aprendido puede ser efectivo con baja precisión y muy pocos tokens. A mayor precisión, el error de FAST disminuye más con el número de tokens y se adapta mejor a las tareas de control fino probadas. La secuencia más corta no es automáticamente la mejor representación de trayectoria.

**Límites:** Escalas de cuantización muy pequeñas pueden borrar coeficientes y producir movimiento casi constante; escalas grandes mejoran la fidelidad pero crean menos ceros comprimibles y enteros más complejos. Vocabularios más grandes representan más combinaciones pero consumen más ranuras de salida. El rango probado no establece ganancias de rendimiento monótonas.

**Nota de ingeniería:** Los tokens predichos o las longitudes expandidas pueden ser inválidos. Verifica la forma del fragmento, las dimensiones efectivas y los límites de control antes de la ejecución. v1 no especifica completamente las reparaciones, por lo que el relleno o truncado no deben presentarse como una implementación documentada del artículo.

### La Red Completa π0-FAST
#### Entradas y Formas
Cada predicción se condiciona en:

- Dos o tres imágenes RGB de $224\times224\times3$.

- Instrucción en lenguaje natural $\ell_t$.

- Propiocepción $q_t$, con dimensiones dependientes de la plataforma.

- Solo durante el entrenamiento, acciones futuras reales $A_t\in\mathbb R^{H\times D}$ para supervisión FAST.

El escenario de camisa de la Tabla I usa $H=50,D=14$, dando $50\times14$ etiquetas; su escenario DROID usa $H=15,D=7$, dando $15\times7$. Usa el espacio de acción efectivo para la versión real del conjunto de datos.

**Diferencia con π0:** π0 proyecta continuamente estado y acciones ruidosas en un experto. FAST v1 discretiza el estado actual en 256 niveles y tokeniza los enteros como texto, mientras que las acciones futuras usan FAST. El estado es una condición actual en lugar de una salida larga de alta frecuencia, por lo que los autores consideran suficiente allí una discretización simple.

#### Características de Imagen y Texto en un Solo Backbone
Un codificador preentrenado produce tokens visuales por cámara; las cadenas de tarea y estado producen tokens de texto. Juntos forman el prefijo de observación. PaliGemma-3B es el backbone principal, con OpenVLA/Prismatic 7B como comparación de transferencia.

**Explicación:** Con $N_v$ tokens por imagen y $N_\ell,N_q$ tokens de lenguaje/estado, la longitud del prefijo es:

$N_o=mN_v+N_\ell+N_q$

$m$ es el número de cámaras y $N_o$ la longitud del prefijo, ignorando algunos separadores/tokens especiales. Para anchura de incrustación $E$, la representación es $N_o\times E$. Esto explica dimensiones, no una especificación completa de v1; los conteos visuales, la anchura, los separadores y las codificaciones de posición no se dan todos.

#### Sufijo de Acción y Atención
FAST codifica acciones demostradas como $n$ tokens, mapeados a ranuras de VLM raramente usadas y suministrados como un sufijo de predicción después del prefijo de observación.

**Explicación:** Predecir el token $k$ usa observaciones y los $k-1$ tokens de acción precedentes, nunca etiquetas futuras. Esto es autoregresión causal, sin codificador CVAE ni decodificador de flujo continuo.

Los estados ocultos del backbone se convierten en logits de vocabulario y probabilidades de clasificación. $V=1024$ es el vocabulario de acción en experimentos específicos de conjuntos de datos, no el vocabulario completo de lenguaje.

#### Pérdida de entrenamiento de la política
**Explicación:** La verosimilitud logarítmica negativa estándar expresa el objetivo declarado de siguiente token:

$\mathcal L_{\rm AR}(\theta)
=\mathbb E_{(o_t,A_t)}\left[
-\sum_{k=1}^{n}\log p_\theta(z_k\mid o_t,z_{<k})
\right],\qquad z_{1:n}=\mathcal T(A_t)$

$\mathcal L_{\rm AR}$ es la pérdida autoregresiva, $\theta$ los pesos de la política, y la esperanza promedia las demostraciones; $n$ varía según la muestra. La versión 1 no especifica completamente el promedio sobre tokens ni el tratamiento de los símbolos de fin.

El teacher forcing usa la verdad de terreno $z_{<k}$ durante el entrenamiento. Una máscara causal permite pérdidas en todas las posiciones en una sola pasada hacia adelante, mientras que la inferencia depende de prefijos generados y procede secuencialmente. Objetivos más cortos reducen la sobrecarga sin eliminar la dependencia secuencial de la inferencia.

**Configuración del artículo:** 1.000 pasos lineales de calentamiento, luego tasa de aprendizaje $5\times10^{-5}$; AdamW con $\beta_1=0.9,\beta_2=0.95$, sin decaimiento de pesos, recorte de gradiente en 1 y coeficiente de media móvil exponencial 0.999. Todos los pesos de la política se ajustan finamente.

#### Muestreo y salidas continuas
La mayoría de las tareas usan decodificación codiciosa. El doblado de camisa bimanual, la extracción de tostadas y la colada usan temperatura 0.7, lo que los autores consideran que ayuda a escapar de comportamientos casi estacionarios alrededor de las poses iniciales.

**Explicación:** Para logits $r_{k,v}$ y temperatura $\eta>0$:

$p_{k,v}=\frac{\exp(r_{k,v}/\eta)}{\sum_{w}\exp(r_{k,w}/\eta)}$

$v,w$ indexan candidatos y $p_{k,v}$ es la probabilidad de muestreo. La guía usa $\eta$ para distinguir la temperatura de los parámetros del optimizador $\beta_1,\beta_2$; el artículo escribe la temperatura como $\beta=0.7$. Difiere de la escala de cuantización $\gamma=10$.

FAST decodifica tokens a $\widehat A_t\in\mathbb R^{H\times D}$ en las unidades físicas del conjunto de datos. DROID usa velocidad articular y posición absoluta de la pinza; otras tareas usan la configuración de su propia plataforma. Los controladores ejecutan acciones válidas y luego nuevas observaciones generan el siguiente fragmento.

**Ablación:** Después de añadir entrada multi-imagen y fragmentos de un segundo a OpenVLA, reemplazar el binning con FAST+ mejora sustancialmente el doblado de camisas. Los beneficios se extienden más allá de la columna vertebral π0, pero la prueba no establece ganancias iguales para cada VLM.

#### Flujo completo comparado con π0
```text
Training:
Demonstration images + task language + current state + real next-second actions
→ Encode images as visual tokens
→ Tokenize language and discretized state text as the observation prefix
→ Normalize actions; DCT; quantize; frequency-first flatten; BPE
→ Map action tokens to VLM output slots
→ Compute teacher-forced next-token cross-entropy
→ Fine-tune all policy weights to obtain π0-FAST

Inference:
Current images + task language + state
→ Construct observation prefix
→ Greedily decode or sample action tokens at the specified temperature
→ Reverse BPE and restore integer coefficient ordering
→ Dequantize, inverse DCT, denormalize
→ Obtain an H × D continuous chunk
→ Execute the configured steps with the low-level controller
→ Observe and predict again

In one sentence:
The VLM selects actions from the scene and task;
DCT concentrates shared information from densely sampled trajectories;
quantization and BPE turn coefficients into shorter token sequences;
autoregressive training models their conditional distribution, and FAST decoding restores continuous control.
The main benefits are action representation and training efficiency; v1 inference latency remains a major limitation.
```

</div>

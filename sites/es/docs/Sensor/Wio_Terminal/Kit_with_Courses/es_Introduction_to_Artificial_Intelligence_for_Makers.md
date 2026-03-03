---
description: Introducción a la Inteligencia Artificial para Makers
title: Introducción a la Inteligencia Artificial para Makers
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

**Número de palabras:** 2000

**Tiempo de lectura:** 30 minutos

**Audiencia:**

- Una guía para principiantes sobre Inteligencia Artificial (IA) para makers sin formación previa en ciencias de la computación.

**ÍNDICE**

Una visión general rápida de las secciones de este artículo.

- 1.¿Qué es la 'Inteligencia Artificial (IA)'?
- 2.Algunas aplicaciones interesantes de la Inteligencia Artificial (IA)
- 3.Lista de productos de Inteligencia Artificial (IA)
- 4.Libros, cursos y tutoriales en video recomendados

## Resumen

La IA es un tema candente hoy en día, y los productos de IA relevantes se venden bien en nuestra [tienda en línea](https://www.seeedstudio.com/). Pero encontramos que algunos de nuestros clientes: desarrolladores de hardware tradicionales, a menudo no tienen una base sólida en ciencias de la computación. El propósito de este artículo es generar interés y proporcionar una comprensión general para makers que quieren comenzar su viaje de aprendizaje profundo. Señalaré algunos de los casos de uso comunes y posibles obstáculos. También al final de este artículo, recomendaré algunos cursos y libros para aprender más sobre este tema.

## 1. ¿Qué es la 'Inteligencia Artificial (IA)'?

La IA es omnipresente hoy. "Minería de Datos", "Inteligencia Artificial", "Red Neuronal Artificial"... se vuelve bastante confuso, ¿verdad?. Las empresas y científicos de la computación crean miles de nuevos términos cada año, pero nunca te explican ***qué son realmente**.

Según Wikipedia:
 >La inteligencia artificial (IA), a veces llamada inteligencia de máquina, es la inteligencia demostrada por máquinas, en contraste con la inteligencia natural mostrada por humanos y animales.

 Sin embargo, a menos que se use como terminología académica rigurosa, generalmente usamos este término para referirnos a la Red Neuronal Artificial. Porque el desarrollo explosivo de esta tecnología en años recientes ha resultado en demasiados productos de computación y publicidad comercial, reemplazando gradualmente el significado del término 'IA' en sí mismo. Así que ahora cuando las empresas dicen "productos de IA", generalmente se refieren a productos usados para acelerar operaciones de redes neuronales.

Algunos anuncios y 'tutoriales' te mostrarán imágenes como la siguiente, que te recuerda a las neuronas en nuestros cerebros. Pero de hecho, las neuronas son solo una analogía elegante. El término 'Redes Neuronales' en ciencias de la computación es un problema totalmente matemático. Y si no comprendes el algoritmo, esta imagen no significa **nada.**

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

Así que si quieres adentrarte en el aprendizaje profundo, lo primero que necesitas hacer es comprender los principios matemáticos detrás del término. No quiero explicar el algoritmo en detalle hoy, lo que debes saber es que los modelos de Redes Neuronales son parientes lejanos de un problema simple en tu clase de Álgebra en la Escuela Secundaria. En la última parte de este pasaje, recomendaré algunos cursos y libros para los estudiantes novatos.
El aprendizaje profundo es una materia experimental joven, y con actualizaciones regulares cada día. Si quieres dominarlo, lo más importante es elegir un tema o un problema real y leer tantos artículos de investigación relevantes como sea posible.

## 2. Algunas aplicaciones interesantes de la Inteligencia Artificial (IA)

### Visión por Computadora

Los humanos pueden identificar cualquier objeto con solo mirarlo durante unos segundos, es realmente fácil para ellos. Pero para las máquinas, por otro lado, la identificación de un objeto era una tarea realmente compleja hasta que Hinton y Alex Krizhevsky ganaron la competencia ImageNet en 2012.

Entonces las Redes Neuronales dominaron el campo de la Visión, especialmente el problema de clasificación y segmentación, y la red neuronal convolucional es uno de los enfoques más prominentes que ganó numerosas competencias en años recientes. Tiene resultados sobresalientes en reconocimiento de imágenes.
Nvidia ha construido muchas [Demos de Visión](https://github.com/dusty-nv/jetson-inference) para Jetson Nano, y hemos probado dos de ellas para clasificación y detección de rostros:
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Arte

**[Google Magenta](https://magenta.tensorflow.org/)** Un proyecto de investigación de código abierto que explora el papel del aprendizaje automático como herramienta en el proceso creativo. Este grupo de proyecto es conocido por el público debido al Doodle impulsado por IA [Celebrating-Johann-Sebastian-Bach](https://www.google.com/doodles/celebrating-johann-sebastian-bach)
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

Y aquí hay algunas demostraciones de la interacción:

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) Cada vez que empiezas a dibujar un garabato, Sketch RNN trata de terminarlo y coincidir con la categoría que has seleccionado.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) Diviértete pretendiendo que eres un virtuoso del piano usando aprendizaje automático.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) Esboza melodías en una matriz sintonizada a diferentes escalas, explora una paleta de bucles melódicos generados, y secuencia composiciones más largas usándolos. Construido por Pie Shop de Google usando

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### IOT y Sensores

**Estacionamiento Inteligente** Estacionar un vehículo en entornos de tráfico denso a menudo lleva a un tiempo excesivo de conducción en busca de espacio libre lo que conduce a congestión y contaminación ambiental. La falta de información de orientación hacia espacios de estacionamiento vacantes es una razón para el comportamiento de estacionamiento ineficiente. Los sensores y tecnologías de estacionamiento inteligente facilitan la orientación de conductores hacia espacios de estacionamiento libres mejorando así la eficiencia del estacionamiento. Actualmente, no se usan tales sensores o tecnologías para el lote de estacionamiento abierto. Así que todavía hay algo por hacer.
[Deep Learning for Decentralized Parking Lot Occupancy](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**LSTMs for Human Activity Recognition**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition)El reconocimiento de Actividad Humana (HAR) es un área importante de investigación en computación ubicua e Interacción Humano-Computadora. Para reconocer actividades usando sensores móviles o portátiles, los datos se recolectan usando sensores apropiados, se segmentan, se extraen las características necesarias y se categorizan las actividades usando modelos discriminativos (SVM, HMM, MLP etc.). En este proyecto, los desarrolladores usaron LSTM y sobresalientemente, la precisión final es del 91% con el pico a valores como 93.25%.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### Procesamiento de Lenguaje Natural (NLP)

En la era del conocimiento, el Procesamiento de Lenguaje Natural (NLP) expresa su demanda por una amplia gama de utilización. Previamente NLP estaba tratando con datos estáticos. En tiempo contemporáneo NLP está haciendo considerablemente con el corpus, base de datos de léxico, reorganización de patrones. Considerando que el método de Aprendizaje Profundo (DL) reconoce la Red Neuronal artificial (NN) para proceso no lineal, las herramientas NLP se vuelven cada vez más precisas y eficientes que comienzan una debacle.
[NLP-progress](https://github.com/sebastianruder/NLP-progress) Este es un proyecto que tiene como objetivo rastrear el progreso en Procesamiento de Lenguaje Natural (NLP) y dar una visión general del estado del arte (SOTA) a través de las tareas NLP más comunes y sus conjuntos de datos correspondientes.

#### Medicina

La Inteligencia Artificial está transformando el mundo de la medicina. La IA puede ayudar a los doctores a hacer diagnósticos más rápidos y precisos. Puede predecir el riesgo de una enfermedad a tiempo para prevenirla. Puede ayudar a los investigadores a entender cómo las variaciones genéticas llevan a la enfermedad. Mejora la capacidad de los doctores para analizar imágenes médicas. Está avanzando el futuro de la medicina personalizada.
Actualmente, se desarrollan esfuerzos sustanciales para el enriquecimiento de aplicaciones de imágenes médicas usando estos algoritmos para diagnosticar los errores en sistemas de diagnóstico de enfermedades que pueden resultar en tratamientos médicos extremadamente ambiguos. Los algoritmos de aprendizaje automático y profundo son formas importantes en imágenes médicas para predecir los síntomas de enfermedad temprana. Las técnicas de aprendizaje profundo, en específico las redes convolucionales, han desarrollado rápidamente una metodología de particular para investigar imágenes médicas. Lleva consideración concerniente al conjunto de estos algoritmos que pueden ser usados para la investigación de enfermedades y toma de decisiones automática.

[**Deep Learning Toolkit (DLTK) for Medical Imaging**](https://github.com/DLTK/DLTK)
DLTK es un kit de herramientas de redes neuronales escrito en python, sobre TensorFlow. Está desarrollado para permitir prototipado rápido con un umbral de entrada bajo y asegurar reproducibilidad en aplicaciones de análisis de imágenes, con un enfoque particular en imágenes médicas. Su objetivo es proporcionar a la comunidad con métodos y modelos de estado del arte y acelerar la investigación en este campo emocionante.
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### Otros

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) Esta demostración utilizó lstm y TensorFlow para predecir la lotería.

## 3. Lista de productos de Inteligencia Artificial (IA)

La IA es omnipresente hoy en día, desde aplicaciones de consumo hasta empresariales. Los desarrolladores comenzaron a intentar aplicarla al campo de sistemas embebidos y robótica, pero el rendimiento de las placas de desarrollo embebidas tradicionales es obviamente insuficiente. Empresas multinacionales como Intel, Nvidia, Google y Huawei han lanzado todos sus productos de aprendizaje profundo, de los cuales Jetson Nano ha recibido la mayor atención recientemente, lo que hace posible desplegar redes neuronales de tamaño medio en sistemas embebidos a precios asequibles y consumo de energía ultra-bajo. Pequeñas empresas como Sipeed y Firefly, también lanzaron sus propios productos para campos de subdivisión específicos. Aquí hay algunos ejemplos.

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)
>El Kit de Desarrollador NVIDIA® Jetson Nano™ ofrece el rendimiento de cómputo para ejecutar cargas de trabajo de IA modernas con un tamaño, potencia y costo sin precedentes. Los desarrolladores, estudiantes y makers ahora pueden ejecutar marcos de trabajo y modelos de IA para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)
>La Coral Dev Board es una computadora de placa única con un sistema en módulo (SOM) removible que contiene eMMC, SOC, radios inalámbricos y la Edge TPU de Google. Es perfecta para dispositivos IoT y otros sistemas embebidos que demandan inferencia ML rápida en el dispositivo.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)
>MAIX es el módulo diseñado específicamente por Sipeed para ejecutar IA en el borde, lo llamamos AIoT. Ofrece alto rendimiento en una huella física y de potencia pequeña, permitiendo el despliegue de IA de alta precisión en el borde, y el precio competitivo hace posible embebido en cualquier dispositivo IoT. Como puedes ver, Sipeed MAIX es bastante similar a Google edge TPU, pero actúa como el controlador maestro, no como un acelerador como edge TPU, por lo que es más de bajo costo y bajo consumo que la solución AP+edge TPU.!
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)
>Con Plug and AI en mente, Horned Sungem (HS) se dedica a ser el dispositivo de IA más simple y manejable para permitir que todos los desarrolladores, estudiantes, aficionados y entusiastas de la IA creen sus propias aplicaciones de IA con facilidad. Sin ninguna dependencia de marcos de aprendizaje profundo o bibliotecas complejas, tu dispositivo estará listo para ver y entender el mundo después de que conectes Horned Sungem al puerto USB y ejecutes un script de instalación corto.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)
>Hikey970 es una Plataforma de Cómputo de IA Super Edge alimentada por Kirin970 SOC con 4 x Cortex A73,4 x Cortex A53. Hikey970 tiene 6GB LPDDR4 RAM, 64GB almacenamiento UFS, Gigabit Ethernet, GPS,PCIE Gen2 y CAN a bordo. Como la primera plataforma de IA NPU dedicada del mundo, Hikey970 integra la arquitectura de cómputo HiAI de Huawei y marcos de redes neuronales populares que soportan CPU, GPU AI y Unidad de Procesamiento Neural dedicada a la aceleración de IA. Además, también viene con el SDK HiAI de Huawei. Hikey 970 puede ser utilizado en la mayoría de aplicaciones en construcción de Aprendizaje Profundo, Robots, Automóviles y Ciudad Inteligente.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. Libros, cursos y tutoriales en video recomendados

### Libros

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) Este es uno de los libros de texto más amigables sobre Redes Neuronales en el mundo sin términos molestos, y es totalmente gratuito y en línea. Pero el código en este libro está un poco desactualizado, y si estás familiarizado con c++, puedes usarlo solo para comprender el principio.
2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) Este libro fue escrito para cualquiera que desee explorar el aprendizaje profundo desde cero o ampliar su comprensión del aprendizaje profundo. Ya seas un ingeniero de aprendizaje automático en ejercicio, un desarrollador de software o un estudiante universitario, encontrarás valor en estas páginas.
3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf) Tutorial clásico para Análisis de Datos, y aún no está desactualizado.

### Cursos

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow) Este curso te introduce al aprendizaje profundo: el enfoque de vanguardia para construir algoritmos de inteligencia artificial.

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/) Este curso es una inmersión profunda en los detalles de las arquitecturas de aprendizaje profundo con un enfoque en el aprendizaje de modelos de extremo a extremo para estas tareas, particularmente la clasificación de imágenes.

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/) Este curso describe desde la estructura clásica como AlexNet hasta las últimas tendencias en diseños de sistemas para apoyar mejor la próxima generación de aplicaciones de IA, y aplicaciones de IA para optimizar la arquitectura y el rendimiento de los sistemas. La parte más valiosa para los estudiantes en línea es la Lista de Lecturas Requeridas que proporciona.

### Tutoriales en video

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [A New Golden Age for Computer Architecture History, Challenges, and Opportunities.](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [RL Course by David Silver](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

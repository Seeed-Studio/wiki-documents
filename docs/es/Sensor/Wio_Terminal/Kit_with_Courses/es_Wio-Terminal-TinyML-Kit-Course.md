---
description:   Kit de Aplicaciones ML101 con el Curso del Prof. Vijay
title:   Kit de Aplicaciones ML101 con el Curso del Prof. Vijay
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-Kit-Course
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" /></div>

## Prefacio

## Descripción General

Vivimos en un mundo dominado por los datos, y aunque el aprendizaje automático ha dado lugar a algunas implicaciones desalentadoras, hay mucho que se puede hacer con él para hacer del mundo un lugar mejor—desde tareas simples como mantenerse seguro en las redes sociales hasta tareas más complejas como detectar patrones en laboratorios de investigación. Independientemente de tu industria o caso de uso, una comprensión de los sistemas embebidos y el aprendizaje automático resultará invaluable en el futuro porque es en lo que se basan todas estas herramientas; sin saber cómo funcionan las cosas internamente, no podrás llegar a ningún lado con ellas. Y esto aplica tanto para las personas que buscan trabajo hoy como para las futuras generaciones que entiendan cómo funcionan estas tecnologías antes de que siquiera nazcan.

Industrias como la manufactura y la automotriz ya se están beneficiando del aprendizaje automático en forma de mantenimiento predictivo. Los algoritmos pueden ser entrenados para identificar patrones típicos de falla para ciertos tipos de máquinas y componentes, después de lo cual pueden enviar alertas a los operadores o incluso tomar acciones correctivas de forma autónoma. De esta manera, los despliegues de internet de las cosas (IoT) industrial pueden ser utilizados para mejorar el tiempo de actividad de la planta y reducir los costos operativos. El mismo principio básico puede ser aplicado en otros entornos también; por ejemplo, los sistemas de gestión de tráfico podrían usar algoritmos de aprendizaje automático para predecir la congestión y ajustar la temporización de las señales en consecuencia.

En el contexto de los sistemas embebidos, el aprendizaje automático diminuto es un término importante de entender. Se refiere al uso de redes neuronales pequeñas y ligeras que pueden ser desplegadas en dispositivos con recursos limitados como microcontroladores. Los algoritmos de aprendizaje automático diminuto pueden ser utilizados para tareas como reconocimiento de objetos, clasificación y detección. Son muy adecuados para sistemas embebidos porque requieren relativamente pocos datos de entrenamiento y pueden lograr buena precisión con un pequeño número de neuronas.

Las aplicaciones para el aprendizaje automático diminuto abundan, y algunos ejemplos interesantes incluyen los siguientes:

- Vehículos autónomos: Las redes neuronales pueden ser utilizadas para detectar obstáculos en el entorno y tomar decisiones sobre cómo evitarlos.
- Seguridad del hogar: Las redes neuronales pueden ser utilizadas para identificar personas y objetos en videos capturados por cámaras de seguridad del hogar.
- Cuidado de la salud: Los algoritmos pueden ser utilizados para detectar anomalías en imágenes médicas o para predecir el riesgo de enfermedades.
- IoT Industrial: Las redes neuronales pueden ser utilizadas para clasificar diferentes tipos de datos de sensores industriales.
- Comercio minorista: Las redes neuronales pueden ser utilizadas para identificar artículos en imágenes de mercancía y para recomendar productos a los clientes.

El aprendizaje automático diminuto es una excelente manera de comenzar con el aprendizaje automático si eres nuevo en el campo. También es una buena manera de aprender más sobre sistemas embebidos y cómo pueden ser utilizados en conjunto con algoritmos de aprendizaje automático. Si estás interesado en comenzar, hay algunas cosas que necesitas saber. Primero, necesitarás acceso a una máquina que pueda ejecutar código de red neuronal diminuta, como el Wio Terminal. Segundo, necesitarás datos de entrenamiento para el algoritmo que estarás utilizando. Estaremos viendo diferentes proyectos de ejemplo para entender los datos de entrenamiento. Tercero, necesitarás elegir un algoritmo de aprendizaje automático que coincida con tu aplicación. Estaremos utilizando redes neuronales para esto.

No te alarmes si alguna de estas palabras te suena extraña. Este manual está diseñado para principiantes para comenzar con TinyML. No importa qué tan viejo o joven seas, si quieres aprender algo, lo harás. Aprenderás cómo entrenar y desplegar modelos de redes neuronales profundas en dispositivos microcontroladores con núcleo ARM Cortex-M de Seeed studio, utilizando lo último en software ML de vanguardia con herramientas como TensorFlow Lite para Microcontroladores y Edge Impulse.

### Para Quién Es Este Libro

Este libro está diseñado específicamente para educadores para poder adoptar el Wio Terminal en el aula o talleres para mostrar a los estudiantes el poder de TinyML. Proporciona los fundamentos básicos que uno tendría que cubrir para enseñar los conceptos más básicos de ML mientras mantiene los conceptos fundamentados en ejercicios prácticos.

### Estructura del Curso

Este libro está específicamente diseñado para servir como un folleto práctico para maestros y estudiantes para comenzar con TinyML. Idealmente, uno sería capaz de aprender los conceptos de este libro y ser capaz de enseñar los conceptos fundamentales del aprendizaje automático aplicado. La palabra clave es aplicado ya que este curso se enfoca en la aplicación de conceptos de aprendizaje automático, más que en los aspectos técnicos y teóricos del aprendizaje automático.

- Edad mínima de estudiantes: 12+
- Número planificado de clases: 5 conferencias, 5 laboratorios y 2 proyectos
- Duración de proyectos prácticos: 45 mins

### Requisitos del Curso

Conocimiento básico de Arduino IDE y C++

### Materiales del Curso

Los materiales incluyen este manual y el "Comenzando con el Kit TinyML" de SEEED studio. Todo lo que necesitas para comenzar está disponible en este curso en una caja.

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Grove - Sensor Ultrasónico](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html)
- [Grove - Sensor de Temp&Humi&Barómetro (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)
- [Cables Grove](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse1a.png" alt="pir" width="500" height="auto"/></p>

### Lo Que Aprenderás

Los usuarios de este libro aprenderán cómo entrenar e implementar modelos de redes neuronales profundas en dispositivos microcontroladores con núcleo Cortex-M de Seeed studio. El contenido del curso presenta XXX proyectos detallados paso a paso que permitirán a los estudiantes comprender las ideas básicas sobre el Aprendizaje Automático moderno y cómo puede utilizarse en microcontroladores de bajo consumo y huella reducida para crear sistemas inteligentes y conectados.

Después de completar el curso, los estudiantes serán capaces de diseñar e implementar sus propios proyectos habilitados con Aprendizaje Automático en microcontroladores con núcleo Cortex-M, comenzando desde la definición de un problema hasta la recopilación de datos y el entrenamiento del modelo de red neuronal y finalmente su implementación en el dispositivo para mostrar resultados de inferencia o controlar otros dispositivos de hardware basados en datos de inferencia. El contenido del curso se basa en el uso de la plataforma Edge Impulse, que simplifica la tubería de recopilación de datos/entrenamiento de modelos/conversión.

## Introducción

### Inteligencia Artificial para Principiantes

#### ¿Qué es la inteligencia artificial?

La Inteligencia Artificial, o IA, es la inteligencia demostrada por las máquinas. A menudo se confunde con creatividad, inteligencia y conciencia. Pero no es ninguna de esas cosas. La IA se puede encontrar en muchos hogares modernos en forma de altavoces inteligentes como Amazon Echo o Google Home que están programados para responder preguntas simples, darte actualizaciones de tráfico e incluso controlar otros dispositivos en tu hogar. Y aunque la mayoría de las personas creen que saben de qué se trata la inteligencia artificial, ¡resulta que la mayoría de las personas están equivocadas! La verdad es que la IA ha existido durante mucho tiempo (desde 1951) pero solo recientemente (principios de 2010) hemos visto su potencial para cambiar todo, desde cómo conducimos nuestros autos hasta cómo pedimos comida para llevar. Así que echemos un vistazo más de cerca a la IA y veamos de qué se trata todo este alboroto.

#### ¿Cómo funciona la IA?

La IA funciona utilizando un proceso llamado "aprendizaje automático", sobre el cual aprenderemos mucho más pronto. Brevemente, esta es una forma para que las computadoras aprendan de los datos sin ser programadas explícitamente. Por ejemplo, si quisieras enseñar a una computadora cómo reconocer imágenes de gatos, primero necesitarías alimentarla con muchas imágenes de gatos. Después de eso, la computadora sería capaz de analizar nuevas imágenes de gatos y decir si son gatos o no. Esto se hace con algo llamado red neuronal que es un tipo de inteligencia artificial que puede aprender por sí sola analizando datos. Aprenderemos más sobre las redes neuronales y cómo "entrenarlas" más adelante en el curso.

#### ¿Por qué es importante la IA?

Hay muchas razones por las que la IA es importante, pero una de las más importantes es que tiene el potencial de resolver algunos de los problemas más grandes del mundo. Por ejemplo, la IA puede usarse para ayudar a los médicos a diagnosticar enfermedades, o para ayudar a los agricultores a predecir el rendimiento de los cultivos. La IA también puede usarse para crear nuevos medicamentos y mejorar los filtros de spam de correo electrónico. De hecho, no hay área de la vida que la IA no pueda tocar.

La inteligencia artificial ofrece varios beneficios sobre los métodos tradicionales como las estadísticas y la regresión lineal. Algunos de estos beneficios incluyen:

- Los modelos de aprendizaje automático son capaces de aprender por sí solos, sin la necesidad de intervención manual.
- Pueden manejar grandes cantidades de datos de manera más eficiente que los métodos tradicionales.
- Son capaces de identificar patrones que son demasiado complejos para que los humanos los disciernan.

#### ¿Es segura la IA?

Una de las principales preocupaciones que las personas tienen sobre la IA es que podría ser peligrosa. Después de todo, si las computadoras pueden aprender por sí solas, potencialmente podrían aprender cómo hacer cosas malas. Sin embargo, los expertos están de acuerdo en que el riesgo de que las computadoras se vuelvan malvadas es muy bajo. De hecho, el verdadero peligro con la IA viene de los propios humanos. Por ejemplo, si se le da demasiado poder a los sistemas de IA, los humanos podrían encontrarse en peligro.

#### La Revolución de la IA

Una de las cosas más importantes que recordar sobre la IA es que no es solo otra tecnología genial. En realidad es una revolución que tiene el poder de cambiar todo—incluyendo nuestra economía, sistemas sociales e incluso cómo vivimos. Eso suena bastante aterrador pero los expertos están de acuerdo en que si trabajamos juntos para aprovechar esta increíble tecnología, la inteligencia artificial podría ayudar a resolver algunos de los problemas más grandes del mundo.

Además, los expertos predicen que las personas que adopten la IA serán más exitosas que aquellas que se opongan a ella. La clave aquí es la cooperación, ¡así que únete a mí para aprender tanto como puedas sobre la IA porque hay tiempos emocionantes por delante! ¡Ahora sal y edúcate sobre qué es la inteligencia artificial y cómo funciona para que puedas estar listo para el futuro de la IA!

#### La Base Conceptual para la IA

La Inteligencia Artificial no es solo otra tecnología que se ha vuelto mainstream en la sociedad actual. La IA tiene el poder de revolucionar cada aspecto del mundo, incluyendo nuestra economía, sistema social, e incluso cómo vivimos. La inteligencia artificial ha recorrido un largo camino a lo largo de los años revelando que es más que solo un proyecto de ciencias de la computación.

Los pensamientos subyacentes a la inteligencia artificial se originaron en el trabajo del filósofo británico Alan Turing sobre las capacidades intelectuales de las máquinas. Pasó su vida estudiando matemáticas y ciencias de la computación en la Universidad de Cambridge donde más tarde sirvió como académico. Su artículo "Computing Machinery and Intelligence" fue publicado por Mind en 1950, y con muchas personas en asistencia. En este artículo Turing propuso lo que llegó a conocerse como la 'prueba de Turing' que se ha convertido en el punto de referencia de facto para determinar si se logra una inteligencia artificial dada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse2a.png" alt="pir" width="200" height="auto"/></p>

Para pasar la prueba de Turing, que implica que la inteligencia artificial refleje rasgos de personalidad de los humanos para engañarlos haciéndoles creer que están hablando con otro humano en lugar de una máquina inteligente, significa que las máquinas se hacen pasar por humanas más del 30% del tiempo. Aunque esto no es perfecto, muestra que la IA puede estar muy cerca de lo humano. "Computing machinery and intelligence" ha abierto el camino para futuros trabajos de literatura que tratan con inteligencia artificial para aparecer como el libro de Daniel H. Wilson Robopocalyse donde los robots se apoderan del mundo al volverse conscientes de sí mismos. Aunque hay muchas otras obras de literatura y películas que han profundizado en el tema de la inteligencia artificial, este es uno de los primeros artículos en proponer la prueba que aún se usa hoy.

Mientras que el artículo de Turing permitió investigaciones adicionales sobre inteligencia artificial, hubo otras piezas que la ayudaron. En 1956 John McCarthy organizó un taller de verano en Dartmouth College dedicado al tema que llegó a conocerse como el Proyecto de Investigación de Verano de Dartmouth sobre Inteligencia Artificial. Este era un nuevo campo que exploró cómo las computadoras podrían hacerse para 'pensar' y resolver problemas igual que los humanos. La pregunta de si una computadora puede pensar ha existido por muchos años, sin embargo esto la llevó a nuevas alturas al reunir algunas de las mejores mentes en matemáticas e ingeniería.

Desde entonces, la inteligencia artificial ha sido un área en crecimiento que se usa de muchas maneras diferentes. Uno de los principales usos para la IA dentro de la sociedad moderna es en el control de electrodomésticos como altavoces inteligentes. Estos dispositivos han sido programados para responder preguntas simples, proporcionar alertas e incluso controlar otros dispositivos de Internet de las Cosas (IoT) en tu hogar. La principal preocupación sobre un altavoz inteligente, por ejemplo, es si siempre te está escuchando. Aunque ha habido casos de algunos dispositivos siendo hackeados y grabando conversaciones sin permiso, la mayoría de las empresas han tomado las precauciones apropiadas para asegurar que estos problemas no ocurran en sus productos. Esto muestra que la IA puede ser usada de muchas maneras diferentes que son beneficiosas para la sociedad.

Otra preocupación que la gente tiene es cómo la inteligencia artificial se apoderará de los trabajos. Con el desarrollo de autos sin conductor, por ejemplo, muchas personas están preocupadas sobre el futuro de los trabajos de transporte. Sin embargo, es importante darse cuenta de que aunque estas tecnologías pueden reemplazar ciertos trabajos a corto plazo, también crearán nuevas oportunidades para otros tipos de trabajo. Por ejemplo, el desarrollo de autos sin conductor requerirá personas que sean hábiles en programar y reparar estos vehículos. Por lo tanto, es importante no tener miedo de las nuevas tecnologías sino más bien abrazarlas y aprender cómo usarlas a nuestro favor.

Para resumir, la inteligencia artificial ha recorrido un largo camino desde su concepción y puede ser usada de muchas maneras diferentes. Aunque hay algunas preocupaciones a su alrededor que necesitan ser abordadas, muchas personas se están dando cuenta de que la IA puede realmente mejorar sus vidas de muchas maneras diferentes. Mientras las empresas tomen las precauciones apropiadas para asegurar nuestra privacidad, la inteligencia artificial puede continuar creciendo con nosotros y ayudar a la sociedad a mejorar por muchos años por venir.

### Aprendizaje Automático y Aprendizaje Profundo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/8.png" alt="pir" width="800" height="auto"/></p>

#### Aprendizaje Automático

El aprendizaje automático es una rama de la inteligencia artificial (IA) enfocada en construir aplicaciones que aprenden de los datos y mejoran su precisión con el tiempo sin ser programadas para hacerlo. La base del aprendizaje automático es que en lugar de tener que ser enseñadas a hacer todo paso a paso, las máquinas, si pueden ser programadas para pensar como nosotros, pueden aprender a trabajar observando, clasificando y aprendiendo de sus errores, igual que nosotros. El aprendizaje automático es un tipo de inteligencia artificial que se basa en la idea de que los programas de computadora pueden hacerse para extraer de los datos sin ser explícitamente programados. Examina los patrones en grandes conjuntos de datos y extrae de esos patrones reglas o algoritmos que luego pueden ser usados para hacer predicciones.

#### Aprendizaje Profundo

El Aprendizaje Profundo es un subconjunto del aprendizaje automático que utiliza redes neuronales artificiales Profundas (de ahí el nombre) para aprender de grandes cantidades de datos. Está modelado según cómo funciona internamente el cerebro humano. Un programa de software contiene "neuronas" (muy parecido a nuestro cerebro) con conexiones entre ellas. Estas conexiones se modifican cuando se exponen a nuevos datos, así saben cómo procesar información de entrada. El Aprendizaje Profundo es diferente del Aprendizaje Automático porque no está restringido al "aprendizaje supervisado." Es como tener un maestro parado junto a ti diciéndote exactamente qué hiciste bien o mal para cada paso de matemáticas. Él o ella es capaz de "supervisarte" solo porque él/ella es un experto en la materia. Por lo tanto, por diseño asume supervisión. Sin embargo, el aprendizaje profundo también puede usar datos no supervisados que es donde "profundo" se refiere a usar algoritmos que crean estructuras complejas a partir de datos sin etiquetar, como imágenes o texto. Mientras progresamos a través del curso aprenderemos mucho más sobre los detalles de estos diferentes métodos de aprendizaje.

#### Aplicaciones del Aprendizaje Profundo

El aprendizaje profundo es ampliamente usado en muchas industrias hoy. Se usa en finanzas para cosas como predicción del mercado de valores, evaluación de riesgos y detección de fraudes. También se usa en marketing para cosas como segmentación de clientes, personalización y optimización de contenido. En atención médica, el aprendizaje automático se usa para tareas como diagnóstico, planificación de tratamiento y monitoreo de pacientes. Ha tenido un impacto transformacional en nuestra sociedad.

Un ejemplo del impacto transformador que el aprendizaje automático ha tenido en la sociedad es cómo ha ahorrado dinero y vidas. Por ejemplo, como se mencionó anteriormente, los algoritmos de aprendizaje profundo pueden hacer predicciones sobre acciones, como predecir si subirán o bajarán. Estas predicciones guían las estrategias de inversión y mejoran las decisiones financieras. De manera similar, el aprendizaje profundo también puede hacer predicciones médicas para mejorar el diagnóstico de pacientes y salvar vidas. Un estudio encontró que las redes neuronales profundas podían predecir pacientes con sepsis con más del 83% de precisión en comparación con las herramientas de diagnóstico tradicionales que tenían una tasa de precisión del 55%. Las posibilidades son infinitas y los beneficios son claros. El aprendizaje automático no solo es capaz de hacer predicciones con mayor precisión que los humanos, sino que también es capaz de hacerlo a un ritmo mucho más rápido. Entonces, ¿qué estás esperando?

Tomemos otro ejemplo. La manufactura se ha vuelto cada vez más dependiente de la tecnología informática, proporcionando datos en tiempo real sobre todos los aspectos de la producción de maneras que anteriormente eran inimaginables. En ningún lugar esto es más evidente que en la industria automotriz, donde los automóviles se están viendo cada vez menos como productos físicos y más como computadoras sobre ruedas.

El aprendizaje profundo se ha aplicado a la manufactura con gran efecto. Al usar software para aprender constantemente de las vastas cantidades de datos recolectados a lo largo del proceso de manufactura, las empresas pueden aumentar la productividad mientras reducen el desperdicio a través de una mayor eficiencia. Las empresas se están beneficiando financieramente de estos efectos mientras que los clientes están recibiendo productos de mejor calidad a precios más bajos. El aprendizaje automático permite a los fabricantes mejorar constantemente sus procesos para crear bienes de mayor calidad más rápido y más eficientemente que nunca antes.

El aprendizaje profundo ha mejorado productos que usamos diariamente como las recomendaciones de Netflix o las traducciones de texto de Google Translate, pero también permite a empresas como Amazon y Uber ahorrar dinero en costos de servicio al cliente al identificar rápidamente a clientes insatisfechos. Lo que puede sorprender a las personas aún más es que el aprendizaje automático es usado por muchos museos para hacer seguimiento de sus pinturas y prevenir que ocurran robos de arte.

El aprendizaje profundo está cambiando la forma en que vivimos y trabajamos. Las empresas a través de una amplia gama de industrias ya están usando IA para su gran ventaja, mejorando la productividad mientras hacen predicciones más precisas que nunca antes. Ya sea que quieras usar aprendizaje profundo en tu negocio o simplemente quieras entender cómo funciona, lo único que se interpone entre tú y esta increíble tecnología es el conocimiento. Entonces, ¿por qué no tomar algo de tiempo hoy para aprender sobre una de las tecnologías más emocionantes de nuestro tiempo? El uso del aprendizaje automático solo está aumentando a medida que el campo de la inteligencia artificial se desarrolla. Con más datos siendo recolectados cada día, hay infinitas posibilidades para lo que el aprendizaje automático puede hacer. Lo único que nos detiene es nuestro entendimiento de cómo funciona. Así que toma algo de tiempo hoy para aprender sobre esta increíble tecnología y ver cómo puedes aplicarla a tu propia vida y trabajo. ¡No te arrepentirás!

#### Sesión de Preguntas y Respuestas

- ¿Cuál es la diferencia entre IA y aprendizaje automático?
- ¿Quién es Alan Turing?
- ¿Qué es la Prueba de Turing?
- Más allá de los ejemplos dados en este capítulo, ¿cuáles son algunos otros grandes usos para la inteligencia artificial en negocios o nuestras vidas diarias hoy?
- ¿Cuáles son algunos peligros o riesgos potenciales que vienen con la inteligencia artificial?
- ¿Crees que la IA será autoconsciente como lo son los humanos?

## El Futuro del Aprendizaje Automático es Pequeño y Brillante

Vivimos en un mundo dominado por los datos, y aunque el aprendizaje automático ha dado lugar a algunas implicaciones desalentadoras, hay mucho que se puede hacer con él para hacer del mundo un lugar mejor—desde tareas simples como mantenerse seguro en las redes sociales hasta tareas más complejas como detectar patrones en laboratorios de investigación. Independientemente de tu industria o caso de uso, una comprensión de los sistemas embebidos y el aprendizaje automático resultará invaluable en el futuro porque es en lo que se basan todas estas herramientas; sin saber cómo funcionan las cosas internamente, no podrás llegar a ningún lado con ellas. Y esto aplica tanto para las personas que buscan trabajo hoy como para las futuras generaciones que entiendan cómo funcionan estas tecnologías antes de que siquiera nazcan.

Los sistemas embebidos son ubicuos en nuestras vidas, y la mayoría de las personas ni siquiera se dan cuenta. Están en nuestros autos, microondas, electrodomésticos e incluso en nuestra ropa. Un sistema embebido es un dispositivo que controla otro dispositivo o grupo de dispositivos para realizar una tarea específica. Los sistemas embebidos también son críticos para el funcionamiento del mundo que nos rodea. Son responsables de cosas como mantener nuestros autos en la carretera y nuestros microondas cocinando comida. Sin los sistemas embebidos, nuestro mundo sería un lugar muy diferente.

Hay muchos tipos diferentes de sistemas embebidos. El tipo más común es el microcontrolador. Una unidad microcontroladora (MCU) es una pequeña computadora embebida que puede ser programada para controlar otros dispositivos. Se encuentran en todo, desde autos hasta electrodomésticos. Toma, por ejemplo, el ARM Cortex M0+ y la placa Seeeduino XIAO, que es tan pequeña como un pulgar (21x17.8mm), consume solo 1.33 mAh de energía (lo que implica que puede funcionar durante 112 horas con una batería de 150 mA, mucho más tiempo si se pone en modo de suspensión profunda), y cuesta tan poco como 4.3 USD. Otro tipo común de sistema embebido es el procesador de señales digitales (DSP). Los DSPs se usan para procesar señales digitales, como audio y video. Se encuentran en cosas como smartphones y tablets. Puedes encontrar información adicional en la sección del Apéndice sobre Sistemas Embebidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/Seeeduino-XIAO-pin-out.jpg" alt="pir" width="300" height="auto"/></p>

El futuro traerá más dispositivos embebidos a nuestras vidas, como tecnología portátil como Smart Watches y Fitbits. Los sistemas embebidos también se volverán más complejos, con más características y capacidades. A medida que nuestro mundo se vuelve cada vez más dependiente de los sistemas embebidos, es importante entender cómo funcionan y el papel que juegan en nuestras vidas, especialmente con el advenimiento del aprendizaje automático.

Industrias como la manufactura y la automotriz ya se están beneficiando del aprendizaje automático embebido en forma de mantenimiento predictivo. Los algoritmos pueden ser entrenados para identificar patrones típicos de falla para ciertos tipos de máquinas y componentes, después de lo cual pueden enviar alertas a los operadores o incluso tomar acciones correctivas de forma autónoma. De esta manera, los despliegues de internet de las cosas (IoT) industrial pueden ser usados para mejorar el tiempo de actividad de la planta y reducir los costos operativos. El mismo principio básico puede ser aplicado en otros entornos también; por ejemplo, los sistemas de gestión de tráfico podrían usar algoritmos de aprendizaje automático para predecir la congestión y ajustar la sincronización de semáforos en consecuencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/7.png" alt="pir" width="800" height="auto"/></p>

### Aprendizaje Automático en la Nube

El aprendizaje automático es ahora una tecnología establecida que ha sido aprovechada en muchas industrias. El aprendizaje automático involucra la recolección de datos, procesarlos y luego extraer conocimientos algorítmicos de ellos para hacer predicciones sobre eventos futuros. El aprendizaje automático es un subconjunto de la inteligencia artificial (IA). Los algoritmos de aprendizaje automático típicamente involucran muchos cálculos y requieren conjuntos de datos muy grandes, lo que limita el número de experimentos que puedes hacer y hace difícil validar tus hallazgos. El Aprendizaje Automático en la Nube proporciona un servicio para el aprendizaje automático y la IA y se encarga del trabajo pesado para que las empresas no tengan que preocuparse por gestionar infraestructura compleja o hardware costoso.

### Aprendizaje Automático en el Borde

La diferencia entre el aprendizaje automático en la nube y el aprendizaje automático en el borde es que el aprendizaje automático en la nube típicamente significa que hay un servidor central que procesa todos los datos y hace todo el aprendizaje automático, mientras que el aprendizaje automático en el borde involucra procesar los datos en los dispositivos del borde, como teléfonos, autos o drones. El aprendizaje automático en el borde es importante porque permite la toma de decisiones local y evita enviar todos los datos a un servidor central para procesamiento, lo que puede ser lento y costoso.

### Aprendizaje Automático Diminuto

El otro enfoque de aprendizaje automático que se está volviendo cada vez más popular es el Aprendizaje Automático Diminuto (TinyML). El aprendizaje automático involucra entrenar modelos con muchos datos y calcular los parámetros del modelo basándose en las relaciones estadísticas en los datos. Los algoritmos de aprendizaje automático generalmente requieren mucho procesamiento y conjuntos de datos lo que hace realmente difícil entrenar un modelo cuando no hay muchos datos disponibles. Este es especialmente el caso para los algoritmos de clasificación de aprendizaje automático, donde el número de clases posibles en el conjunto de datos necesita ser conocido antes de que el entrenamiento pueda comenzar.

El aprendizaje automático diminuto (TinyML) es un subconjunto del Aprendizaje Automático que se enfoca en entrenar modelos con datos y recursos limitados. Es particularmente adecuado para aplicaciones donde los algoritmos tradicionales de aprendizaje automático son demasiado intensivos en recursos o difíciles de implementar. El Aprendizaje Automático Diminuto ha sido usado para todo, desde aplicaciones de consumo como manufactura inteligente hasta controlar vehículos autónomos.

Una de las razones por las que el Aprendizaje Automático Diminuto está volviéndose más popular es que los microcontroladores en dispositivos de borde están volviéndose más potentes y baratos. Los microcontroladores son pequeñas computadoras que se utilizan en una amplia gama de dispositivos, desde automóviles hasta drones. Se están volviendo más potentes y baratos a medida que la industria de semiconductores se mueve hacia geometrías más pequeñas. Esto significa que los algoritmos de Aprendizaje Automático Diminuto pueden ejecutarse en dispositivos de borde, como teléfonos, automóviles o drones, sin usar demasiada energía o ocupar demasiado espacio.

#### Aprendizaje Automático Diminuto para Sistemas IoT

Los microcontroladores están volviéndose rápidamente más potentes, pero aún tienen memorias relativamente pequeñas y poder de cómputo comparado con servidores tradicionales. Los algoritmos de IA que requieren grandes conjuntos de datos o cálculos complejos no pueden implementarse en estas tecnologías sin revisarlos completamente. TinyML puede abrir nuevas posibilidades para el aprendizaje automático, especialmente en el espacio del Internet de las Cosas (IoT) donde sistemas de control simples están siendo utilizados para aplicaciones novedosas que van desde implantes médicos inteligentes hasta automóviles autónomos.

Se ha vuelto posible ofrecer a estos dispositivos diminutos inteligencia adicional gracias a avances recientes en optimización de modelos y la aparición de marcos específicamente diseñados para realizar inferencia de modelos de aprendizaje automático en microcontroladores. Ahora podemos usar redes neuronales en microcontroladores para reconocer escenas de audio (por ejemplo, actividad de elefantes o el sonido de vidrio rompiéndose), detectar palabras clave (para activar un dispositivo con una frase específica), e incluso reconocer imágenes simples. Los dispositivos con microcontroladores integrados pueden utilizarse para dar nueva vida y significado a sensores existentes, como emplear un acelerómetro montado en un mecanismo para detección de anomalías y mantenimiento predictivo – o para discernir entre diferentes tipos de licores, como se demuestra en esta demostración! El potencial de TinyML es verdaderamente ilimitado.

#### Cómo Funciona el Aprendizaje Automático Diminuto

Los algoritmos de aprendizaje automático diminuto están diseñados para trabajar con pequeños conjuntos de datos que pueden procesarse en un microcontrolador o sistema embebido. Estos algoritmos a menudo se basan en regresión lineal o redes neuronales, que pueden implementarse usando una cantidad muy pequeña de código. Los modelos de aprendizaje automático pueden entrenarse usando una cantidad limitada de datos, y pueden adaptarse a cambios en el conjunto de datos mucho más fácilmente que los algoritmos tradicionales de aprendizaje automático.

Esto hace que el aprendizaje automático diminuto sea una opción ideal para aplicaciones donde los datos son escasos o difíciles de recolectar, como en vehículos autónomos o dispositivos médicos. También permite el desarrollo de modelos de aprendizaje automático que pueden ejecutarse en dispositivos de bajo consumo sin requerir una gran cantidad de memoria o procesamiento

#### Los Recursos Son Limitados, Pero También Lo Es La Competencia

El uso de algoritmos de aprendizaje automático diminuto aún está en sus primeros días, y la mayoría de la investigación en esta área se ha enfocado en desarrollar nuevas formas de implementar estos algoritmos en dispositivos pequeños. Esto deja mucho espacio para la innovación, y muchas oportunidades para emprendedores emprendedores de llevar el Aprendizaje Automático a nuevos mercados. Al mismo tiempo, la competencia por recursos probablemente será feroz. Grandes compañías tecnológicas como Google y Amazon ya están invirtiendo fuertemente en aprendizaje automático, y es probable que también se muevan al mercado de Aprendizaje Automático Diminuto. Esto podría presentar un desafío para pequeñas startups tratando de competir en este espacio.

### Sesión de Preguntas y Respuestas

P. ¿Puedes explicar las diferencias entre aprendizaje automático en la nube, en el borde y embebido?
P. ¿Qué necesita aprender una máquina diminuta?
P. ¿Hay alguna limitación al aprendizaje automático diminuto?
P. ¿Cómo podemos usar el aprendizaje automático diminuto en el hogar u oficina?
P. ¿Cómo llegan estas máquinas a conclusiones basadas en su conjunto de datos y qué tan pequeño es típicamente este conjunto de datos?
P. ¿Cuándo es mejor usar una máquina grande sobre un sistema de aprendizaje automático diminuto?

## Taxonomía de Algoritmos de Aprendizaje Automático

Existen tres clases principales de algoritmos de aprendizaje automático: supervisado, no supervisado y de refuerzo. En los algoritmos de aprendizaje automático supervisado, se le proporciona a la máquina un conjunto de datos de entrenamiento y luego aprende de estos datos para hacer predicciones sobre nuevos datos. Los algoritmos de aprendizaje automático no supervisado te ayudan a explorar tu conjunto de datos para encontrar patrones ocultos sin tener un resultado específico en mente. Los algoritmos de aprendizaje automático de refuerzo son un tipo de algoritmo de aprendizaje automático donde la máquina aprende de experiencias de prueba y error. Cada algoritmo de aprendizaje automático resuelve un problema de aprendizaje automático de manera diferente y algunos problemas de aprendizaje automático solo pueden ser resueltos por ciertos algoritmos de aprendizaje automático.

### Aprendizaje Supervisado

#### ¿Qué Es El Aprendizaje Supervisado?

El aprendizaje automático supervisado es la tarea de aprendizaje automático de encontrar una función que mapee una entrada a una salida basándose en pares de ejemplo entrada-salida. También se llama aprendizaje supervisado porque la máquina depende de alguna forma de supervisión (por ejemplo, "maestro") para aprender de su entorno y mejorar el rendimiento. La máquina no es capaz de aprender completamente sin ayuda de los humanos en este caso; necesita orientación y retroalimentación sobre qué entradas llevan a las salidas deseadas.

#### ¿Cómo Funciona El Aprendizaje Automático Supervisado?

En el aprendizaje automático supervisado, la persona que está entrenando la computadora realiza una tarea que cae en una de tres categorías: etiquetado, categorización o medición. El etiquetado implica asignar una categoría a un elemento - por ejemplo, etiquetar en rojo todas las manzanas como pertenecientes a la categoría de manzanas. La categorización implica poner elementos en grupos según alguna propiedad compartida. Por ejemplo, agrupar todos los animales juntos podría llamarse categorización-animal. Medir significa evaluar alguna propiedad como el tamaño o el peso y luego proporcionar un valor cuantitativo para ello en una escala - como medir cuántas manzanas hay en esta canasta y decir que hay 36 manzanas aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/6.png" alt="pir" width="800" height="auto"/></p>

El objetivo del aprendizaje automático supervisado es siempre construir modelos basados en datos históricos que puedan ayudar a predecir resultados y tomar decisiones. Entrenar los algoritmos para hacer esto toma mucho tiempo y esfuerzo, pero hay muchos beneficios. Por una parte, mientras más datos se proporcionen, mejor se vuelve el modelo para predecir resultados. Mientras más información llega, más se acerca a anticipar lo que podría pasar en el futuro. En segundo lugar, los algoritmos pueden usar etiquetas como "saludable" o "enfermo". El aprendizaje automático supervisado incluso es capaz de incorporar propiedades categóricas como el color de piel o el sexo al hacer predicciones. Esto no solo ayuda con la precisión, sino que también asegura que ninguna experiencia personal o sesgo influya en su proceso de toma de decisiones.

El aprendizaje automático supervisado es una herramienta poderosa que puede ser usada con gran efecto en muchas áreas diferentes. Su capacidad para limitar el sesgo y hacer predicciones con precisión creciente lo convierte en una parte esencial del conjunto de herramientas del científico de datos. Con la disponibilidad de datos en constante crecimiento, seguramente jugará un papel aún más importante en los años venideros.

Ejemplos de cómo el aprendizaje automático supervisado puede ser usado en el mundo real:

- Los minoristas podrían usarlo para entrenar modelos que predigan el comportamiento del cliente y adaptar sus ofertas en consecuencia.
- Los científicos de datos podrían usar el aprendizaje automático supervisado para modelar el lenguaje natural y encontrar patrones en datos no estructurados.
- La industria de la salud podría usarlo para desarrollar modelos para predecir resultados de salud para ciertas poblaciones.

#### ¿Cuáles Son Los Beneficios Del Aprendizaje Automático Supervisado?

Los científicos de datos usan este tipo de aprendizaje automático para construir modelos que reflejen datos de entrenamiento, que son datos que han sido etiquetados o categorizados de alguna manera. En otras palabras, debe tener una etiqueta adjunta, como "saludable" o "enfermo". El propósito de construir un modelo es entrenar algoritmos sobre qué deben buscar y cómo deben comportarse al clasificar datos en el futuro.

#### ¿Quién Puede Realizar Aprendizaje Automático Supervisado?

Los científicos de datos usan este tipo de aprendizaje automático para construir modelos que reflejen datos de entrenamiento, que son datos que han sido etiquetados o categorizados de alguna manera. En otras palabras, debe tener una etiqueta adjunta, como "saludable" o "enfermo". El propósito de construir un modelo es entrenar algoritmos sobre qué deben buscar y cómo deben comportarse al clasificar datos en el futuro.

#### ¿Cuáles Son Las Desventajas Del Aprendizaje Automático Supervisado?

El aprendizaje automático supervisado funciona mejor con grandes cantidades de datos de entrenamiento etiquetados/categorizados/medidos porque más información significa mejores resultados y predicciones. Si no hay suficientes datos, puede ser difícil entrenar un modelo que produzca buenas predicciones. Además, los algoritmos son solo tan buenos como los humanos que los diseñan y supervisan. Si hay sesgo en los datos de entrenamiento, es probable que este sesgo se reproduzca en los modelos creados por el aprendizaje automático supervisado.

#### ¿Cuál Es Un Ejemplo De Aprendizaje Automático Supervisado En Acción?

Una aplicación común del aprendizaje automático supervisado es la detección de fraude. En este caso, las compañías de tarjetas de crédito podrían usar algoritmos de aprendizaje automático supervisado para identificar patrones en el comportamiento de gasto que podrían indicar actividad fraudulenta. Esto podría involucrar modelar datos pasados para buscar irregularidades o actividad inusual, como alguien que de repente comienza a cargar muchos artículos en un período corto de tiempo.

#### ¿Cuáles Son Las Limitaciones Del Aprendizaje Automático Supervisado?

El aprendizaje automático supervisado puede proporcionar un entrenamiento preciso al algoritmo que le ayuda a aprender qué comportamiento se espera. Si no hay suficientes datos, puede ser difícil entrenar un modelo que produzca buenas predicciones. Además, los algoritmos son solo tan buenos como los humanos que los diseñan y supervisan. Si hay sesgo en los datos de entrenamiento, esto probablemente se reproducirá en los modelos creados por el aprendizaje automático supervisado.

#### ¿Cuál Es El Futuro Del Aprendizaje Supervisado?

Es probable que el aprendizaje automático supervisado se vuelva aún más importante en el futuro. Con las cantidades cada vez mayores de datos que se generan, es más importante que nunca tener una forma de darles sentido con precisión. El aprendizaje automático supervisado es una de las formas más efectivas de hacer precisamente eso. Además, a medida que más y más empresas se dan cuenta del valor de la ciencia de datos, la demanda de científicos de datos capacitados continuará aumentando. Esto significa que el aprendizaje automático supervisado se convertirá en una parte aún más integral de las operaciones comerciales a medida que las organizaciones busquen obtener una ventaja competitiva.

#### ¿Cuál Es El Ejemplo Más Simple De Aprendizaje Supervisado?

La forma más común de aprendizaje automático supervisado es la regresión lineal. La regresión lineal es una técnica para ajustar una línea a un conjunto de puntos de datos, en la cual cada punto de datos está representado por dos coordenadas (x, y). El algoritmo de aprendizaje automático encuentra la mejor línea que se ajusta a los puntos de datos, basándose en una medida de error llamada función de costo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/4.png" alt="pir" width="600" height="auto"/></p>

En el aprendizaje supervisado, cada ejemplo es un par que consiste en un objeto de entrada (típicamente un vector) y un valor de salida deseado (también llamado señal supervisora). El algoritmo de aprendizaje automático es "entrenado" ajustando sus parámetros para que produzca la coincidencia más cercana posible entre los valores predichos y los valores objetivo.

Los algoritmos de aprendizaje automático supervisado también pueden usarse para clasificación. La clasificación es la tarea de identificar a qué categoría pertenece una entrada, de un conjunto predeterminado de categorías. Por ejemplo, podrías querer usar aprendizaje automático para distinguir entre imágenes de perros y gatos. En este caso, la entrada sería una imagen, y la salida deseada sería el nombre del animal representado: "perro" o "gato".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/2.png" alt="pir" width="600" height="auto"/></p>

### Aprendizaje No Supervisado

#### ¿Qué Es El Aprendizaje No Supervisado?

Otro tipo de aprendizaje automático que está ganando tracción en años recientes es el aprendizaje automático no supervisado. Esta área de investigación combina el poder de las máquinas con la habilidad humana para organizar, etiquetar e interpretar conjuntos de datos. Las técnicas de ML no supervisado se usan para tareas como reducción de dimensionalidad, agrupamiento, visualización, selección de características, etc.

- Reducción de dimensionalidad: Reducir el número de dimensiones en un conjunto de datos. Esto puede hacerse, por ejemplo, transformando los datos a un espacio de menor dimensión.
- Agrupamiento: El proceso de agrupar elementos similares juntos.
- Visualización: El proceso de mostrar datos de una manera que los hace fáciles de entender.
- Selección de características: El proceso de seleccionar un subconjunto de características de un conjunto de datos. Esto puede hacerse, por ejemplo, para reducir el tamaño del conjunto de datos o para hacer más fácil entrenar un algoritmo de aprendizaje automático.

#### ¿Cómo Funciona El Aprendizaje No Supervisado?

En el aprendizaje automático no supervisado, los algoritmos se usan para encontrar patrones en conjuntos de datos. Hay muchos tipos diferentes de algoritmos de aprendizaje automático no supervisado, y cada uno tiene su propio conjunto de instrucciones. Ejemplos de algoritmos de aprendizaje automático no supervisado: k-means, k-vecino más cercano, agrupamiento jerárquico, asignación latente de Dirichlet, etc.

Para crear un modelo exitoso de aprendizaje automático no supervisado, hay tres componentes esenciales: datos, algoritmos y retroalimentación. Los datos son la entrada para el modelo, los algoritmos son las herramientas que se usan para encontrar patrones en los datos, y la retroalimentación se usa para mejorar la precisión del modelo. El proceso de aprendizaje automático no supervisado puede dividirse en cuatro pasos: preprocesamiento, exploración de datos, detección de patrones y postprocesamiento.

1. Preprocesamiento: Este paso se usa para limpiar y preparar los datos para análisis posterior.
2. Exploración de datos: Este paso se usa para explorar los datos y encontrar patrones.
3. Detección de patrones: Este paso se usa para detectar patrones en los datos.
4. Postprocesamiento: Este paso se usa para mejorar la precisión del modelo y para preparar los datos para el despliegue.

#### ¿Cuáles Son Las Ventajas Y Desventajas Del Aprendizaje Automático No Supervisado?

Una de las ventajas del aprendizaje automático no supervisado es que puede usarse para tareas que son difíciles o imposibles para los humanos hacer por sí solos. Por ejemplo, agrupar conjuntos de datos puede identificar patrones que estarían ocultos al ojo humano. Además, el aprendizaje no supervisado puede ayudar a mejorar los algoritmos existentes de aprendizaje automático supervisado. Al usar las técnicas de agrupamiento en un conjunto de datos, los algoritmos supervisados pueden descubrir grupos dentro de esos clusters.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/5.png" alt="pir" width="600" height="auto"/></p>

En general, el ML no supervisado se usa para análisis exploratorio. En algunos casos, los resultados deseados son conocidos y el único objetivo de usar un algoritmo de aprendizaje no supervisado es encontrar patrones específicos. En otros casos, puede no haber resultados deseados y el único objetivo de un algoritmo de aprendizaje no supervisado es descubrir patrones no descubiertos.

Una de las ventajas del aprendizaje automático no supervisado es que puede utilizarse para tareas que son difíciles o imposibles de realizar para los humanos por sí solos. Por ejemplo, la agrupación de conjuntos de datos puede identificar patrones que estarían ocultos al ojo humano. Además, el aprendizaje no supervisado puede ayudar a mejorar los algoritmos de aprendizaje automático supervisado existentes. Al utilizar las técnicas de agrupación en un conjunto de datos, los algoritmos supervisados pueden descubrir grupos dentro de esos clústeres.

Otra ventaja de utilizar técnicas de ML no supervisado es que puede proporcionar información sobre nuevas aplicaciones y problemas. Por ejemplo, si un científico de datos quisiera utilizar agrupación en un conjunto de datos de biología, podría descubrir que un clúster contiene genes que están asociados con una enfermedad particular. Esto podría llevar a nuevos descubrimientos en el campo de la biología.

A pesar de las ventajas del aprendizaje automático no supervisado, sigue siendo un área de investigación emergente. Hay muchos desafíos que necesitan ser abordados antes de que el ML no supervisado pueda ser ampliamente utilizado. Por ejemplo, los algoritmos de aprendizaje no supervisado actuales no siempre son capaces de encontrar todos los patrones deseados en un conjunto de datos. Además, los algoritmos de aprendizaje no supervisado pueden ser lentos y computacionalmente costosos.

Sin embargo, el aprendizaje automático no supervisado es un campo emocionante que tiene el potencial de hacer contribuciones profundas en muchas áreas de investigación diferentes. Con investigación y desarrollo continuos, el ML no supervisado se volverá más poderoso y más ampliamente utilizado.

### Aprendizaje por Refuerzo

#### ¿Qué Es el Aprendizaje por Refuerzo?

El último de los tipos es el aprendizaje por refuerzo, que es un tipo de aprendizaje automático que puede enseñar a las computadoras a realizar tareas recompensándolas por ciertos comportamientos. El aprendizaje por refuerzo a menudo implica dar a la computadora un entorno simulado en el que puede aprender, con el objetivo final de que complete tareas en el mundo real.

El aprendizaje por refuerzo es un área de investigación de inteligencia artificial que se ocupa de cómo los agentes de software deben tomar acciones en un entorno para maximizar alguna noción de recompensa acumulativa. La señal de refuerzo puede ser explícita, como una "recompensa" entregada después de completar una tarea o más sutil como un 'castigo' después de una acción incorrecta; las señales de refuerzo no se limitan a formas puramente positivas o negativas sino cualquier retroalimentación que informe el comportamiento y afecte la toma de decisiones futuras (por ejemplo, si eres elogiado por una pintura que has hecho, esto podría llevarte a ser más propenso a pintar en el futuro).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/1.png" alt="pir" width="600" height="auto"/></p>

#### ¿Cómo Funciona el Aprendizaje por Refuerzo?

En el aprendizaje por refuerzo, las señales de refuerzo suelen ser escasas, ya que en el aprendizaje por refuerzo es difícil verificar si una señal implica refuerzo o no. Esto significa que los algoritmos de aprendizaje por refuerzo a menudo necesitan asumir que las señales de refuerzo que reciben son señales de refuerzo válidas y por lo tanto aprender una función de valor que apunte a maximizar una suma ponderada de estimaciones de recompensas futuras en lugar de solo la recompensa inmediata. En el caso donde esta suposición no se cumple, los algoritmos de Aprendizaje por Refuerzo intentarán maximizar las recompensas futuras descontadas esperadas en su lugar.

Uno de los primeros métodos de aprendizaje por refuerzo, desarrollado a principios de la década de 1960, fue el algoritmo Q-learning. Q-learning es una técnica de aprendizaje por refuerzo libre de modelo que funciona aprendiendo una función óptima de valor-acción (Q) para cada estado en un proceso de decisión de Markov (MDP), utilizando una señal de refuerzo para actualizar los valores. El algoritmo comienza con una estimación de Q(s) para cada estado s, y luego actualiza iterativamente estas estimaciones utilizando una señal de refuerzo r(s,a) que le dice qué tan buena o mala fue la acción tomada en el estado s. En otras palabras, Q-learning trata de aprender una política que mapea estados del mundo a la mejor acción a tomar en esos estados.

En el aprendizaje por refuerzo, a veces podemos definir el Aprendizaje por Transferencia como un método de aprendizaje por refuerzo donde un agente aprende de su experiencia pasada sin interacciones humanas. El castigo implica reducir la recompensa, por ejemplo, matar o enviar de vuelta algo al remitente. La recompensa implica aumentar la recompensa, por ejemplo, presionar el botón de reproducir en el reproductor multimedia (esto se basa en tu entorno)

#### ¿Cuáles Son Algunas Aplicaciones del Aprendizaje por Refuerzo?

El aprendizaje por refuerzo puede aplicarse en el desarrollo de juegos para rompecabezas basados en refuerzo como Sokoban y juegos de estrategia en tiempo real como Age of Empires II: The Age Of Kings; también puede utilizarse en problemas de negocios como reclutamiento y colocación de empleados (sistemas de recomendación), control de agentes de software y control de robots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/TinyMLKit.png" alt="pir" width="500" height="auto"/></p>

En la figura anterior, el nodo amarillo de la capa de entrada representa una neurona que está recibiendo una entrada de una capa anterior. Cada una de estas neuronas puede tener pesos (in1, in2, in3) aplicados a ella antes de ser pasada como una señal, y la suma ponderada de las entradas para esa neurona activará uno o más nodos en la siguiente capa. Este proceso se repite con cada capa sucesiva hasta que hayamos determinado nuestro valor de salida. Como puedes ver, esto hace que sea muy fácil representar reglas complejas de toma de decisiones utilizando algoritmos derivados matemáticamente (aunque hacer que funcionen correctamente es otro asunto).

Para que las RNAs aprendan, necesitan que se les proporcione una cantidad tremenda de información llamada conjunto de entrenamiento. Cuando estás tratando de enseñar a una RNA cómo diferenciar un gato de un perro, el conjunto de entrenamiento proporcionaría miles de imágenes etiquetadas como perro para que la red comience a aprender. Una vez que ha sido entrenada con una cantidad significativa de datos, intentará clasificar datos futuros basándose en lo que cree que está viendo (o escuchando, dependiendo del conjunto de datos) a través de las diferentes unidades. Durante el período de entrenamiento, la salida de la máquina se compara con la descripción proporcionada por humanos de lo que debería observarse. Si son iguales, la máquina es validada. Si es incorrecta, utiliza retropropagación para ajustar su aprendizaje—regresando a través de las capas para ajustar la ecuación matemática. Conocido como aprendizaje profundo, esto es lo que hace inteligente a una red.

Normalmente las Redes Neuronales Profundas requieren recursos computacionales bastante potentes para ser entrenadas y desplegadas. Sin embargo, recientemente ha aparecido una rama del ML en el Borde o Aprendizaje Automático Embebido llamada TinyML - representa una técnica o campo de estudio en aprendizaje automático y sistemas embebidos que explora qué aplicaciones de aprendizaje automático (una vez reducidas, optimizadas e integradas) pueden ejecutarse en dispositivos tan pequeños como microcontroladores.

Hay muchos otros algoritmos de Aprendizaje automático que pueden usarse para diferentes tareas. Es importante elegir el algoritmo correcto para el trabajo, y no tratar de forzar un algoritmo de Aprendizaje automático a hacer algo para lo que no fue diseñado. Esto puede resultar en una precisión de clasificación pobre o predicciones incorrectas.

## Introducción al Aprendizaje Profundo

Esta sección proporciona una visión general de muy alto nivel del aprendizaje profundo, específicamente en relación con las Redes Neuronales Artificiales, a las que de aquí en adelante nos referiremos brevemente como Redes Neuronales. Una red neuronal artificial (RNA) es un sistema computacional modelado en el cerebro.

### ¿Qué son las Redes Neuronales?

En general, las redes neuronales son una herramienta poderosa para entender y predecir patrones complejos en los datos. Están compuestas por un gran número de nodos de procesamiento interconectados, o neuronas, que pueden aprender a reconocer patrones de datos de entrada. Tienes un conjunto de nodos que se llaman neuronas de entrada, seguidas por toda una colección de capas ocultas que finalmente culminan hacia alguna capa de salida que ayuda a tomar decisiones informadas. Con los datos correctos, las redes neuronales pueden ser entrenadas para aprender y hacer predicciones que son sorprendentemente precisas. Sin embargo, también son muy intensivas computacionalmente, y pueden ser difíciles de entrenar. Además, las redes neuronales son a menudo opacas en su toma de decisiones, lo que puede ser un problema cuando se trata de explicar sus predicciones a los humanos. No obstante, las redes neuronales son una herramienta poderosa que puede usarse con gran efecto cuando se aplica al problema correcto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new2.png" alt="pir" width="500" height="auto"/></p>

Las redes neuronales son una herramienta poderosa para entender y predecir patrones complejos en los datos. Sin embargo, también son muy intensivas computacionalmente, y pueden ser difíciles de entrenar. Además, las redes neuronales son a menudo opacas en su toma de decisiones, lo que puede ser un problema cuando se trata de explicar sus predicciones a los humanos. No obstante, las redes neuronales son una herramienta poderosa que puede usarse con gran efecto cuando se aplica al problema correcto.

### ¿Qué es el Entrenamiento de Aprendizaje Profundo?

Para entrenar una red neuronal, necesitas proporcionarle un conjunto de datos de entrenamiento y un conjunto de parámetros que determinen cómo la red aprenderá. El conjunto de datos de entrenamiento contiene un conjunto de datos de entrada junto con la salida deseada para cada punto de datos. La red neuronal usará estos datos para aprender cómo reconocer patrones en los datos de entrada y producir la salida correcta. Los parámetros que necesitas establecer dependerán del tipo de red neuronal que estés usando, pero típicamente incluyen la tasa de aprendizaje, el número de iteraciones, y el tamaño de la capa oculta.

Los pesos de entrenamiento del aprendizaje automático juegan un papel crítico en el éxito de un algoritmo de aprendizaje automático. Los pesos que se sitúan en la intersección de las neuronas (bordes) determinan cuánta influencia tiene cada entrada en la salida del modelo de aprendizaje automático. Para lograr los mejores resultados, es importante elegir los pesos correctos para tu conjunto de datos. Un método común para determinar los pesos correctos se llama la regla delta. La regla delta es una fórmula matemática que calcula el error entre la salida predicha y la salida real. Este error se usa entonces para ajustar los pesos del algoritmo de aprendizaje automático.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new.png" alt="pir" width="500" height="auto"/></p>

Hay varias otras formas de entrenar modelos de aprendizaje automático, pero el enfoque más popular es usar una técnica llamada retropropagación. La retropropagación es un tipo de algoritmo de entrenamiento que se usa para entrenar redes neuronales. Funciona propagando el gradiente de error hacia atrás a través de la red, para que los pesos puedan actualizarse con el fin de reducir el error. La retropropagación es una forma eficiente de entrenar redes neuronales y ha demostrado ser exitosa en una variedad de tareas. Uno de los beneficios de la retropropagación es que puede usarse para entrenar redes neuronales con múltiples capas. Esto es porque el gradiente de error se propaga hacia atrás a través de todas las capas de la red, para que todos los pesos puedan actualizarse. La retropropagación también es relativamente fácil de implementar, lo que la convierte en una opción popular para entrenar redes neuronales.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new1.png" alt="pir" width="500" height="auto"/></p>

Sin embargo, la retropropagación tiene algunas desventajas. Una es que puede ser lenta para entrenar redes neuronales grandes. Otra es que la retropropagación a veces puede ser inestable, lo que significa que los pesos pueden divergir en lugar de converger. Finalmente, la retropropagación requiere acceso a los datos de entrenamiento para funcionar, lo que puede ser un problema si los datos no están fácilmente disponibles. A pesar de estas desventajas, la retropropagación sigue siendo una opción popular para entrenar redes neuronales porque es un algoritmo eficiente y relativamente fácil de usar. Si estás interesado en entrenar tu propia red neuronal, entonces la retropropagación puede ser una buena opción para ti.

### ¿Qué es la Inferencia de Aprendizaje Profundo?

La inferencia de aprendizaje automático es el proceso de usar un modelo de aprendizaje automático entrenado para hacer predicciones sobre nuevos datos. En general, hay dos tipos de inferencia de aprendizaje automático: en línea y por lotes. La inferencia en línea es el proceso de hacer predicciones sobre nuevos datos a medida que llegan, mientras que la inferencia por lotes es el proceso de calcular predicciones para un gran lote de datos de una sola vez. Las redes neuronales son muy adecuadas para la inferencia en línea porque pueden hacer predicciones muy rápidamente. Esto es importante para tareas como el reconocimiento facial, donde necesitas poder identificar una cara en tiempo real. La inferencia por lotes también es importante para muchas aplicaciones, como la predicción del mercado de valores y el pronóstico del tiempo, donde necesitas hacer predicciones para un gran número de puntos de datos de una sola vez.

## El Ciclo de Vida del Aprendizaje Automático

El Ciclo de Vida del Aprendizaje Automático se define como un proceso cíclico que involucra un proceso de tres fases (desarrollo de pipeline, fase de entrenamiento y fase de inferencia) adquirido por el científico de datos y los ingenieros de datos para desarrollar, entrenar y servir los modelos usando la enorme cantidad de datos que están involucrados en varias aplicaciones como robótica, sistemas de reconocimiento de voz, optimización de motores de búsqueda (SEO), medicina, finanzas y así sucesivamente. El objetivo de este artículo es proporcionar una comprensión profunda del ciclo de vida del aprendizaje automático y su importancia en el campo de la ciencia de datos.

La primera fase del ciclo de vida del aprendizaje automático es la fase de desarrollo de pipeline. En esta fase, el científico de datos y el ingeniero de datos trabajan juntos para desarrollar un pipeline de procesamiento de datos que puede ser usado para adquirir, limpiar, procesar y pre-entrenar los conjuntos de datos. El objetivo principal de esta fase es asegurarse de que los conjuntos de datos estén listos para el entrenamiento y la inferencia. La segunda fase es la fase de entrenamiento donde los modelos son realmente entrenados usando los conjuntos de datos. Esta fase requiere mucho tiempo y esfuerzo ya que involucra experimentar con diferentes algoritmos y parámetros para encontrar el mejor modelo que puede ser usado para predicción. La última fase es la fase de inferencia donde los modelos son puestos en uso para hacer predicciones. En esta fase, el científico de datos y el ingeniero de datos trabajan juntos para desplegar los modelos en producción y asegurarse de que estén funcionando correctamente.

El ciclo de vida del aprendizaje automático es importante porque ayuda al científico de datos y al ingeniero de datos a desarrollar, entrenar y servir los modelos usando la enorme cantidad de datos que están involucrados en varias aplicaciones. También les ayuda a evitar errores comunes que pueden ocurrir durante las fases de entrenamiento e inferencia. El ciclo de vida del aprendizaje automático es un proceso cíclico lo que significa que puede ser repetido múltiples veces para mejorar la precisión de los modelos. Por lo tanto, es una herramienta esencial para cualquiera que quiera convertirse en científico de datos o ingeniero de datos.

El flujo de trabajo para prácticamente cualquier aprendizaje automático puede ser simplificado y resumido siguiendo estos pasos:

1. Recopilar y limpiar los datos
2. Preparar y configurar los parámetros
3. Entrenar el modelo de aprendizaje automático
4. Evaluar el rendimiento del modelo de aprendizaje automático
5. Desplegar en un entorno de producción/usar para entrenamiento adicional, dependiendo de las circunstancias.

Aunque estos pasos pueden parecer simples, pueden tomar una cantidad significativa de tiempo para completar. En los próximos capítulos, profundizaremos en cada uno de estos diferentes pasos y entenderemos los matices.

### Recopilación de Datos

La Recopilación de Datos es el primer paso en el Ciclo de Vida del Aprendizaje Automático. El científico de datos y el ingeniero de datos necesitan recopilar una enorme cantidad de datos para desarrollar, entrenar y servir los modelos. Los datos están involucrados en varias aplicaciones como reconocimiento de imágenes, análisis de video, procesamiento de lenguaje natural, análisis predictivo, y muchas más.

### Pre-procesamiento

El pre-procesamiento es lo segundo que el científico de datos y el ingeniero de datos necesitan hacer en el Ciclo de Vida del Aprendizaje Automático. Los datos deben ser limpiados y preparados para análisis antes de ser alimentados al algoritmo de aprendizaje automático. El pre-procesamiento de datos es vital para el aprendizaje automático porque incluye tareas como, Limpieza de datos, Exploración de datos, Visualización de datos, Reducción de datos, Transformación de datos. Estas son importantes para el desarrollo de modelos de aprendizaje automático porque a menudo se usan en conjuntos de datos en bruto. Después de que los datos han sido procesados, es tiempo de elegir un algoritmo. El algoritmo determinará cómo la computadora aprenderá de los datos.

### Entrenamiento

El entrenamiento de aprendizaje automático es el tercer paso del Ciclo de Vida del Aprendizaje Automático. El proceso de entrenamiento de aprendizaje automático consiste en dos fases, Fase de entrenamiento y Fase de inferencia. Un científico de datos entrena un modelo de aprendizaje automático, que luego se usa para predecir el resultado en diferentes conjuntos de datos que no están disponibles para entrenarlo. El entrenamiento involucra seleccionar una arquitectura de red neuronal que mejor se ajuste a la tarea en cuestión. Una vez que el algoritmo ha sido seleccionado, el siguiente paso es configurar los parámetros de la arquitectura de la red neuronal. Estos parámetros incluyen el número de capas en la red neuronal, el tipo de función de activación, y la tasa de aprendizaje. Después de que los parámetros han sido configurados, es tiempo de entrenar el modelo de aprendizaje automático. Este proceso puede tomar mucho tiempo, dependiendo del tamaño y complejidad del conjunto de datos.

### Optimización

Existen varias formas en las que un modelo de aprendizaje automático puede ser optimizado: comprimido, podado y cuantizado. La compresión es el proceso de reducir el tamaño de un modelo de aprendizaje automático. Esto se hace eliminando las características que no son importantes para la tarea en cuestión. El podado es el proceso de eliminar los pesos de las neuronas en un modelo de aprendizaje automático que no son importantes. La cuantización es el proceso de convertir un número de punto flotante a un valor entero. Esto se hace para ahorrar espacio y tiempo. Estas optimizaciones no solo hacen que los modelos funcionen más rápido, sino que también ayudan a reducir los requisitos de consumo de memoria en el sistema.

### Despliegue

La fase de despliegue es el cuarto y último paso del Ciclo de Vida del Aprendizaje Automático. En esta fase, el modelo de aprendizaje automático se despliega en un entorno donde puede ser usado para hacer predicciones. ¡Esto podría ser en la nube, en las instalaciones, móvil o en nuestro caso dispositivos pequeños! Una vez que el modelo de aprendizaje automático ha sido entrenado, está listo para su uso en una de las plataformas elegidas. El modelo puede ser desplegado en un entorno de producción o usado para entrenamiento adicional. El paso final es evaluar el rendimiento del modelo de aprendizaje automático. Esto puede hacerse comparando los resultados predichos con los resultados reales.

### Evaluación

La inferencia de aprendizaje automático es el proceso de hacer predicciones en nuevos conjuntos de datos usando un modelo de aprendizaje automático que ha sido entrenado en un conjunto de datos diferente. La inferencia es importante porque nos permite usar el modelo de aprendizaje automático para hacer predicciones en conjuntos de datos que no hemos visto antes. Esto nos ayuda a mejorar nuestra comprensión de los datos y el modelo de aprendizaje automático.

El ciclo de vida del aprendizaje automático es un proceso cíclico que nos ayuda a transformar datos en bruto en conocimientos accionables a través del uso de algoritmos de predicción. El ciclo consiste en tres fases: (1) recolección de datos, (2) preprocesamiento y (3) entrenamiento de aprendizaje automático. El objetivo principal de este ciclo es mejorar la precisión de las predicciones hechas usando modelos de aprendizaje automático.

### Sesión de Preguntas y Respuestas

P. ¿Cuáles son las tres fases del ciclo de vida del aprendizaje automático?

P. ¿Qué fase es la más importante para dar predicciones precisas?

P. ¿Cómo podemos evaluar los modelos de aprendizaje automático?

## Recolección de Datos

### ¿Qué es la Recolección de Datos?

Para que un modelo de aprendizaje automático sea efectivo, debe ser entrenado con datos de alta calidad. La calidad de los datos está determinada por la cantidad de variación que contiene y la corrección de sus etiquetas. Para asegurar que un modelo de aprendizaje automático sea efectivo, es importante seleccionar datos que sean representativos del problema del mundo real que estás tratando de resolver. El proceso de recopilar y medir información de innumerables fuentes diferentes es la recolección de datos.

### ¿Qué Son los Datos de Entrenamiento?

Los datos de entrenamiento son los datos que se usan para entrenar modelos de aprendizaje automático. Son los datos que se usan para enseñar al algoritmo lo que necesita saber para identificar correctamente patrones relevantes en datos no estructurados. La mejor manera de determinar si tus datos son adecuados para un modelo de aprendizaje automático, es tener una mejor comprensión de los datos mismos. Si quieres usarlos como combustible de entrenamiento, entonces tienen varias propiedades clave que deben cumplirse:

- Deben ser representativos de la población de la cual fueron recolectados.
- Debe haber representación igual de múltiples clases (ej. "gatos" vs. "perros") que podrían existir dentro del mismo grupo de personas o elementos siendo estudiados. Esto asegura que no haya sesgo en los datos cuando el modelo de aprendizaje automático está haciendo predicciones sobre una clase sobre otra.
- Las variables en cada elemento deben tener niveles significativos de medición. Esto significa que valores numéricos deben ser asignados a categorías discretas, y no viceversa.

### ¿Qué son las Divisiones de Datos de Entrenamiento?

Los datos de entrenamiento consisten en diferentes particiones. Al particionar datos de aprendizaje automático, necesitas separar el conjunto de datos de aprendizaje automático en dos conjuntos: un conjunto de entrenamiento y un conjunto de prueba. El algoritmo de aprendizaje automático es primero entrenado en el conjunto de entrenamiento, y luego probado en el conjunto de prueba para ver qué tan efectivo es en predecir las variables objetivo de interés. El conjunto de datos de aprendizaje automático puede ser particionado usando varias técnicas, incluyendo pero no limitado a:

- Dividir los datos aleatoriamente en dos conjuntos.
- Dividir los datos usando un enfoque estratificado para que la distribución de datos se mantenga a través de ambos conjuntos.
- Usar algoritmos de aprendizaje automático para particionar inteligentemente los datos en dos conjuntos.

La regla general es la regla 80:10:10. 80% de los datos es en lo que entrenas el modelo. 10% es en lo que validas el entrenamiento para mejorar su precisión. Y el 10% retenido es en lo que finalmente validamos la precisión del modelo de aprendizaje automático antes de ponerlo en producción.

### ¿Cuáles Son las Fuentes para Datos de Entrenamiento?

Para usar los datos que recolectamos para desarrollar soluciones prácticas de inteligencia artificial (IA) y aprendizaje automático, deben ser recolectados y almacenados de una manera que tenga sentido para el problema de negocio en cuestión y debe estar organizado lo suficientemente eficiente para facilitar acceso rápido cuando tu sistema lo necesite. Hay tres fuentes principales de datos:

- Datos Internos
- Datos Públicos
- Datos Externos

Los datos internos se refieren a los datos que ya están almacenados dentro de tu organización. Esto podría ser registros de clientes, información de compras, o información de productos. La principal desventaja de usar datos internos es que a menudo están incompletos y no están disponibles en un formato que sea compatible con soluciones de aprendizaje automático. Sin embargo, el principal beneficio de usar datos internos es que pueden ser accedidos rápida y fácilmente.

Los datos públicos se refieren a cualquier fuente de datos gratuita disponible en internet. Estos datos típicamente vienen en grandes volúmenes y pueden requerir procesamiento adicional antes de estar listos para su uso en un modelo. Una advertencia importante aquí es asegurarse de que tienes el derecho de usar los datos para entrenar los modelos. Solo porque hay datos gratuitos disponibles no significa que puedas usarlos, especialmente para propósitos comerciales.

Los datos públicos que elijas dependerán del objetivo de tu modelo. Por ejemplo, si estás tratando de predecir el resultado de una elección, podrías usar datos públicos como los resultados de elecciones anteriores o registros de votantes. Los datos externos son cualquier dato que no puedes recopilar por ti mismo - pueden provenir de proveedores terceros u otras empresas que se especializan en proporcionar información para propósitos de aprendizaje automático.

### ¿Cómo Procedes para Obtener Datos de Entrenamiento Etiquetados?

Los datos de entrenamiento etiquetados son cruciales para los modelos de aprendizaje automático supervisado. Los datos se usan para enseñar al algoritmo lo que necesita saber para identificar correctamente patrones relevantes en datos no estructurados. Para obtener datos de entrenamiento etiquetados, necesitarás recopilarlos de una fuente que esté dispuesta a proporcionarlos. Hay varias maneras de hacer esto:

- Las encuestas o experimentos en línea pueden usarse para recopilar datos de un gran número de personas. A los participantes se les pediría entonces que etiqueten los datos en consecuencia.
- Los datos también pueden provenir de plataformas de redes sociales como Twitter, donde los usuarios pueden etiquetar tweets con palabras clave o hashtags específicos.
- Las bases de datos de elementos que han sido pre-etiquetados pueden usarse como fuente de datos de entrenamiento. Esto a menudo lo hacen empresas que se especializan en anotación y etiquetado de datos.

### ¿Cómo Puedes Saber Si Tu Conjunto de Datos Es Adecuado Para Un Modelo de Aprendizaje Automático?

La mejor manera de determinar si tus datos son adecuados o no para un modelo de aprendizaje automático, es tener un mejor entendimiento de los datos mismos. Si quieres usarlos como combustible de entrenamiento, entonces tienen varias propiedades clave que deben cumplirse:

- Deben ser representativos de la población de la cual fueron recopilados.
- Debe haber representación igual de múltiples clases que podrían existir dentro del mismo grupo de personas o elementos siendo estudiados. Esto asegura que no haya sesgo en ninguna clase sobre otra y los resultados serán más precisos al predecir la probabilidad de algo basado en sus características.
- Las variables en cada elemento deben tener niveles significativos de medición. Esto significa que valores numéricos deben asignarse a categorías discretas, y no viceversa.

### ¿Cuáles son los Diferentes Tipos de Datos?

Hay dos tipos de datos- estructurados y no estructurados. Los datos estructurados son los datos que están organizados en tablas o cuadrículas. Este tipo de datos es fácil de procesar y se usa para entrenar modelos de aprendizaje automático que usan algoritmos de aprendizaje supervisado. Los datos no estructurados son los datos que no están organizados en ningún formato específico. Este tipo de datos es difícil de procesar y se usa para entrenar modelos de aprendizaje automático que usan algoritmos de aprendizaje no supervisado.

## Pre-procesamiento

### ¿Qué es el Pre-procesamiento de Datos?

Una vez que hayas recopilado tus datos, el siguiente paso es limpiarlos y prepararlos para su uso en tu modelo de aprendizaje automático. Este proceso se conoce como pre-procesamiento de datos. El objetivo del pre-procesamiento de datos es hacer que los datos estén listos para el modelado eliminando variaciones no deseadas y completando valores faltantes.

Los pasos de pre-procesamiento que elijas dependerán del tipo de datos que estés usando y del enfoque que planees tomar en tu modelo. Por ejemplo, si tus datos contienen una gran proporción de valores faltantes (es decir, atributos faltantes como edad o género), puede ser posible extrapolar la información faltante a partir de otra información disponible. Esto reducirá la cantidad de datos faltantes y te permitirá incluir más registros en tu modelo.

### ¿Qué Implica el Pre-procesamiento de Datos?

Generalmente, hay algunos pasos involucrados en el pre-procesamiento de datos: primero, los datos tienen que ser limpiados y preparados para el análisis. Esto incluye deshacerse de cualquier valor atípico, ruido o datos incompletos. Luego, los datos necesitan ser transformados a una forma que sea adecuada para algoritmos de aprendizaje automático. Esto usualmente involucra convertir los datos a forma numérica y extraer características relevantes. Por ejemplo, podemos convertir señales de audio en imágenes para entender los datos de audio. Eso es de hecho cómo funcionan la mayoría de algoritmos de "Detección de Palabras Clave". Al transformar datos de aprendizaje automático a un formato numérico, se recomienda que uses técnicas de conteo o agrupamiento. Estas dos técnicas pueden ser aplicadas tanto a datos categóricos como numéricos. El conteo se usa cuando hay un número limitado de valores para cada característica, mientras que el agrupamiento se usa cuando hay un gran número de valores para cada característica. Finalmente, los datos necesitan ser particionados en conjuntos de entrenamiento y prueba. El conjunto de entrenamiento se usa para entrenar el algoritmo de aprendizaje automático, y el conjunto de prueba se usa para evaluar el rendimiento del algoritmo.

### ¿Cuál es la Importancia del Pre-procesamiento de Datos?

El pre-procesamiento de datos es importante porque ayuda a asegurar que el algoritmo de aprendizaje automático sea entrenado con datos que sean representativos del mundo real. Al limpiar y transformar los datos, podemos eliminar cualquier ruido o sesgo que pueda existir en los datos. Esto ayuda a mejorar la precisión del algoritmo de aprendizaje automático. Adicionalmente, el pre-procesamiento de datos también puede ayudar a mejorar el rendimiento extrayendo características útiles de los datos. Al identificar y extraer las características más importantes, podemos reducir la cantidad de datos que necesitan ser procesados por el algoritmo de aprendizaje automático. Esto puede llevar a un rendimiento mejorado y tiempos de ejecución más rápidos. Finalmente, particionar los datos en conjuntos de entrenamiento y prueba nos permite evaluar el rendimiento de los algoritmos de aprendizaje automático. Al probar el algoritmo de aprendizaje automático en datos que no ha visto antes, podemos ver qué tan bien y precisamente se desempeña. Usamos los resultados de esta prueba para determinar si nuestro modelo de aprendizaje automático es efectivo o no.

*El primer paso en el pre-procesamiento de datos es limpiar la entrada. Esto involucra eliminar ruido y valores atípicos de los datos, formatearlos apropiadamente para el consumo de la máquina, y realizar cualquier transformación necesaria. El ruido puede ser causado por valores de datos incorrectos o inconsistentes, mientras que los valores atípicos son valores que están muy alejados del resto del conjunto de datos.*

*Luego, los datos deberían ser explorados para obtener una mejor comprensión de lo que contienen. Esto puede hacerse visualizando los datos y realizando cualquier extracción o transformación necesaria basada en las percepciones obtenidas al observar los datos. El algoritmo de aprendizaje automático debería ser capaz de hacer uso de lo que se aprendió al explorar los datos.*

Finalmente, una vez que todo esto esté hecho, el aprendizaje automático puede tener lugar. Esto involucra entrenar un modelo de aprendizaje automático con los datos limpiados y transformados para crear un modelo predictivo que luego pueda ser usado para hacer predicciones sobre nuevos valores de entrada, como qué producto se venderá mejor el próximo mes o si alguien incumplirá o no con su préstamo.

*Si quieres incluir una gran proporción de la población en tus modelos predictivos, pero tienes muy pocos ejemplos de algunos grupos minoritarios, otra opción es usar técnicas estadísticas como sobremuestreo o submuestreo para crear un conjunto de datos balanceado. El sobremuestreo involucra crear un número adicional de registros para un grupo minoritario seleccionando aleatoriamente otros registros de la población. El submuestreo, por otro lado, involucra eliminar un número de registros de un grupo minoritario para hacerlo más representativo de la población más grande.*

Una vez que tus datos estén listos, puedes comenzar a entrenar tu modelo de aprendizaje automático. Este proceso involucrará seleccionar un algoritmo y configurarlo para mapear los datos a una solución eligiendo una función de pérdida y métrica de precisión apropiadas. Discutiremos más sobre esto pronto.

El paso final en el aprendizaje automático es evaluar tu modelo, lo cual involucra ejecutar predicciones del mundo real contra los datos históricos que recopilaste anteriormente. Esto te permitirá probar qué tan bien tu modelo ha aprendido de los datos de entrenamiento y asegurar que generalice bien a nuevos datos.

## Extracción de Características

La extracción de características es un paso importante en el proceso de aprendizaje automático. Se utiliza para identificar un subconjunto de características que son más predictivas para la tarea en cuestión. Este subconjunto se utiliza luego para crear modelos de clasificación o regresión con mejor precisión predictiva que los modelos creados usando todas las características disponibles.

Hay varios algoritmos diferentes que se pueden usar para la extracción de características. Algunos algoritmos comunes incluyen:

- Análisis de Componentes Principales (PCA)
- Análisis Discriminante Lineal (LDA)
- Máquinas de Vectores de Soporte (SVM)
- Bosque Aleatorio

Cada uno de estos algoritmos tiene sus propias fortalezas y debilidades. El mejor algoritmo para una tarea dada dependerá del tipo de datos y el problema que se esté resolviendo.

Una vez que se ha identificado el subconjunto de características, debe ser seleccionado. El subconjunto de características que se usa para crear el modelo final no debería estar influenciado por qué algoritmo crea la mejor precisión predictiva. Los algoritmos siempre producirán diferentes mapas mostrando qué tan importante es cada característica para predecir la tarea en cuestión. Esto puede hacer difícil seleccionar un subconjunto de características que se cree que son las mejores sin saber primero qué algoritmo se usará para el modelado.

Una vez que se ha elegido un algoritmo, una técnica común para elegir un subconjunto de características se llama selección por regularización. Se construye una función de optimización aleatoria basada en utilidad usando medidas de rendimiento calculadas de subgrupos más grandes que contienen subconjuntos con progresivamente menos atributos (características). El proceso continúa hasta que quedan suficientes atributos en cada subgrupo para modelar la tarea.

Una vez que se ha identificado un subconjunto de características, debe usarse para crear modelos que produzcan mejor precisión predictiva que los modelos creados usando todas las características disponibles. Esto no siempre es fácil porque hay muchos algoritmos diferentes para crear modelos predictivos, y cada algoritmo usa diferentes subconjuntos de características disponibles para hacer sus predicciones. La mejor manera de comparar resultados entre diferentes algoritmos de aprendizaje automático es usando una métrica de evaluación que pueda calcularse sobre múltiples tipos diferentes de modelos. Las métricas de rendimiento comunes incluyen error de entrenamiento, error de prueba, área bajo la curva (AUC), altura del gráfico de elevación, área bajo la curva del gráfico de elevación (AUAC), puntuación de pérdida logarítmica, coeficiente de correlación de Matthews (MCC) y Área Bajo la Curva ROC (ROC AUC).

La extracción de características es un concepto simple que no siempre tiene un camino claro hacia la implementación. Hay muchos algoritmos diferentes para la extracción de características, y cada uno de ellos tiene sus propias fortalezas y debilidades. Además, las mejores características para usar a menudo dependen de qué algoritmo se usará para clasificación o regresión. Para elegir buenas características, es importante primero seleccionar una tarea de aprendizaje automático apropiada y una métrica de evaluación. Una vez que esas decisiones se han tomado, una técnica común para elegir un subconjunto de características se llama selección por regularización. El proceso de ingeniería de características no puede comenzar hasta después de que estos tres pasos se hayan completado exitosamente.

La ingeniería de características es un paso importante en el proceso de aprendizaje automático cuyo objetivo es identificar y seleccionar un subconjunto de características de un conjunto que son más predictivas para la tarea en cuestión.

## Entrenamiento de Modelos

El primer paso del entrenamiento de un modelo de aprendizaje automático es seleccionar el conjunto de datos correcto. Este conjunto de datos es típicamente la entrada al modelo, basado en las etapas anteriores de recolección de datos, preprocesamiento y extracción de características que tocamos en los capítulos anteriores. El segundo paso del entrenamiento de un modelo de aprendizaje automático es arquitecturar sus parámetros internos y arquitectura de red.

### Selección de un Conjunto de Datos de Entrenamiento

Al seleccionar un conjunto de datos para entrenar un modelo de aprendizaje automático, es importante considerar algunos factores:

1.Propósito del modelo

La primera pregunta que necesitas hacerte es cuál es el propósito del modelo de aprendizaje automático. ¿Qué estás tratando de predecir o identificar? Una vez que sepas esto, puedes comenzar a buscar un conjunto de datos que sea representativo de la población que estás estudiando.

2.Tamaño y complejidad del conjunto de datos

El tamaño y complejidad del conjunto de datos es otra consideración importante. El conjunto de datos debe ser lo suficientemente grande para contener una variedad de elementos, con cada elemento conteniendo varias variables que pueden ser utilizadas para el modelado. Mientras más complejo sea el conjunto de datos, más tiempo y recursos tomará entrenar el modelo de aprendizaje automático.

3.Disponibilidad de datos

Otra cosa que necesitas considerar es si los datos están disponibles o no. Si estás trabajando con datos propietarios, entonces probablemente necesitarás permiso del propietario antes de poder usarlos. Los conjuntos de datos disponibles públicamente pueden encontrarse en línea o contactando a la organización que recopiló los datos.

4.Etiquetado de los datos

Uno de los aspectos más importantes de los datos de entrenamiento es que deben estar etiquetados. Datos etiquetados significa que las variables de entrada de cada elemento han sido asignadas un valor numérico o categórico. Esto permite al modelo de aprendizaje automático identificar patrones y hacer predicciones basadas en lo que ha aprendido durante el entrenamiento. Mientras más elementos en tu conjunto de entrenamiento, mejor será el rendimiento del modelo al hacer predicciones en tiempo real sobre nuevos datos.

5.Relaciones lineales vs no lineales

Otra cosa que necesitas considerar es si hay o no relaciones lineales, y si las hay, cuántas variables independientes y dependientes hay para cada elemento en el conjunto de entrenamiento. Por ejemplo: Si estás estudiando personas, entonces el peso puede ser un indicador de altura (que también podría indicar edad). Así que en este caso, hay solo una variable dependiente (altura) y una variable independiente (peso). Sin embargo, si estás estudiando autos, entonces peso y velocidad podrían ser dos variables independientes que tienen una relación lineal. Esto significa que a medida que el peso aumenta, la velocidad también probablemente aumentará.

6.Tipo de algoritmo

El tipo de algoritmo de aprendizaje automático que elijas también afectará el conjunto de datos que uses para entrenamiento. Algunos algoritmos son más adecuados para trabajar con datos categóricos, mientras que otros son mejores manejando datos numéricos. Necesitarás seleccionar un algoritmo que sea compatible con el tipo de datos con los que estás trabajando.

7.Disponibilidad de recursos

La última cosa que necesitas considerar es cuánto tiempo y recursos se necesitan para entrenar el modelo de aprendizaje automático. Mientras más datos tengas, mejor será el rendimiento del modelo. Sin embargo, si no tienes suficientes datos para entrenar el modelo, también puedes complementarlo con datos sintéticos. Los datos sintéticos son datos que han sido creados artificialmente para parecerse al conjunto de datos del mundo real. Esto puede ser útil en casos donde no hay suficientes datos originales disponibles para entrenamiento.

En resumen, al seleccionar un conjunto de datos para aprendizaje automático, es importante asegurarse de que:

- Los datos sean representativos de la población de la cual fueron recopilados.
- Haya representaciones iguales de múltiples clases que podrían existir dentro del mismo grupo de personas o elementos siendo estudiados. Esto asegura que no haya sesgo en los datos cuando el modelo de aprendizaje automático esté haciendo predicciones sobre una clase por encima de otra.
- El tamaño y complejidad del conjunto de datos sea apropiado para el tipo de algoritmo de aprendizaje automático que estás usando.
- Los datos estén etiquetados para que el modelo de aprendizaje automático pueda identificar patrones.
- Los datos estén formateados de una manera que sea compatible con el algoritmo que estás usando.
- Haya suficientes recursos disponibles para entrenar el modelo.
- El conjunto de datos sea lo suficientemente grande para contener una variedad de elementos, con cada elemento conteniendo varias variables.
- No haya relaciones lineales entre más de dos variables independientes. Si hay relaciones lineales, entonces deberían ser simples (es decir, tener pocas variables independientes).
- Tengas una idea de lo que estás tratando de hacer o identificar para que puedas encontrar un conjunto de datos apropiado.

La mejor manera de encontrar un conjunto de datos apropiado es saber lo que estás tratando de lograr. Una vez que tengas una idea general, puedes buscar conjuntos de datos que estén disponibles públicamente y sean adecuados para aprendizaje automático. También hay muchos recursos en línea que pueden ayudarte a encontrar el conjunto de datos correcto para tus necesidades. Por ejemplo, el Repositorio de Aprendizaje Automático UCI es un sitio web que contiene una gran colección de conjuntos de datos públicos que pueden ser utilizados para aprendizaje automático. Es importante notar que no todos los conjuntos de datos son adecuados para cada tipo de algoritmo de aprendizaje automático. Así que asegúrate de seleccionar un algoritmo que sea compatible con el conjunto de datos que estás usando.

El uso de modelos de aprendizaje automático ha explotado en años recientes debido en parte a la creciente disponibilidad de datos. Sin embargo, el verdadero ganador en la industria del aprendizaje automático son los datos mismos. Ya no se trata solo de hacer predicciones; también es una herramienta importante que puede ayudarnos a entender mejor cómo funciona el mundo y tomar mejores decisiones basadas en esa información.

Cuantos más datos tengas, mejor rendimiento tendrá tu modelo. Pero si no tienes suficientes datos para entrenar un modelo de aprendizaje automático, puedes proporcionar datos sintéticos para que funcione con ellos en lugar de datos del mundo real (lo cual sería prácticamente imposible). Otro enfoque es usar un conjunto más pequeño de datos de entrenamiento etiquetados y combinarlo con algunas técnicas de aprendizaje no supervisado. Esto te permite elegir qué variables van a la creación de tu modelo final mientras sigues usando datos no estructurados.

Es importante tener suficientes datos cuando estás entrenando un modelo de aprendizaje automático. Sin embargo, a veces simplemente no hay suficientes datos originales disponibles para trabajar. En estos casos, podemos recurrir a datos sintéticos, que son datos que han sido creados artificialmente para parecerse al conjunto de datos del mundo real con el que estamos trabajando. Esto puede ser útil en casos donde no hay suficientes datos originales disponibles para el entrenamiento o si queremos mejorar la precisión de nuestras predicciones. Este es un tema bastante avanzado que diferiremos para otro momento, quizás en otro libro.

### Arquitecturas de Redes Neuronales

Hay algunas arquitecturas de redes neuronales diferentes que se usan comúnmente en el aprendizaje profundo. Las Redes Neuronales Convolucionales (CNN), las celdas de Memoria a Largo y Corto Plazo (LSTM), las redes neuronales recurrentes (RNN), y las Máquinas de Boltzmann Restringidas Convolucionales (CBRM) son algunas de las más comunes. Cada uno de estos diferentes tipos de redes neuronales tiene sus propias fortalezas y debilidades y puede ser usado para diferentes propósitos. En esta sección, tocaremos las arquitecturas de redes neuronales más ampliamente utilizadas para que tengas una base para comenzar con ellas.

#### Perceptrón Multicapa (MLP)

Las redes neuronales de perceptrón multicapa (MLP) son un tipo de red neuronal que se usa en el aprendizaje profundo. Son un tipo simple, pero poderoso de red neuronal que puede ser usado para entrenar modelos complejos. Las redes MLP consisten en un número de capas, cada una de las cuales consiste en un número de neuronas. Las neuronas en la primera capa están conectadas a las neuronas en la segunda capa, y así sucesivamente. Los perceptrones multicapa son el tipo más común de red neuronal usado en el aprendizaje profundo. Los perceptrones multicapa pueden ser usados para resolver una amplia gama de tareas, incluyendo regresión y clasificación. Las redes de perceptrón multicapa logran alta precisión predictiva cuando tienen muchas capas ocultas y muchas neuronas por capa; sin embargo, no escalan muy bien con números crecientes de ejemplos de entrenamiento y requieren ajuste de sus hiperparámetros lo que las hace difíciles de entrenar. Los perceptrones multicapa fueron inicialmente introducidos en los años 1960 por investigadores en la Universidad de Stanford y posteriormente popularizados por David Rumelhart, Geoffrey Hinton, y Ronald Williams en 1986 [1].

##### Arquitectura del Perceptrón Multicapa

Un Perceptrón Multicapa está organizado en tres grupos de capas, una capa de entrada, una o más capas ocultas (también llamadas las "unidades ocultas" o "capa de extracción de características"), y una capa de salida. Cada capa está completamente conectada a la siguiente capa.

El perceptrón multicapa consiste en un número de entradas x1, x2, ....xn para cada ejemplo de entrenamiento, una o más unidades ocultas h1, h2...hn dependiendo del número de capas ocultas y ninguna salida (o 1 salida representando la etiqueta de clase). Uno aprende los pesos óptimos W1 ,W2 ...Wm para esta arquitectura minimizando alguna función de error usando descenso de gradiente.

Nota que los Perceptrones Multicapa son aproximadores de función universales que pueden aproximar cualquier función dados suficientes unidades ocultas. Los Perceptrones Multicapa han sido usados en muchas aplicaciones, incluyendo diagnóstico médico [2], reconocimiento de escritura a mano [3][4] y traducción automática [5]. Los perceptrones multicapa también son populares en robótica. Los perceptrones multicapa fueron inicialmente usados solo para aprendizaje supervisado, pero ahora se usan principalmente para aprendizaje no supervisado como las redes de creencia profunda (DBN) y las máquinas de Boltzmann profundas (DBM).

##### Entrenamiento de Redes de Perceptrón Multicapa

El algoritmo de entrenamiento del Perceptrón Multicapa es simple por diseño; funciona comenzando con los pesos de red aleatorios W1, W2...Wm y luego actualizándolos iterativamente para reducir alguna función de error definida E en un conjunto de entrenamiento que consiste en pares entrada-salida (x1,y1) ,(x2,y2),....(xn,yn). Este es un enfoque de aprendizaje supervisado donde la red es entrenada para predecir las etiquetas de clase correctas y.

El algoritmo de Perceptrón Multicapa usado para entrenamiento tiene dos fases:

- Fase Hacia Adelante: La salida de cada neurona en la primera capa oculta se calcula usando la regla de signo tal que las neuronas calculan f = sgn (w1*entradas+b1)+sgn (w2*ocultas+b2)+...+sgn(wm+bm) y luego aplicamos una función de activación como sigmoide. Esto nos da niveles de actividad sináptica para cada conexión entre neuronas y permite que las neuronas en la siguiente capa se activen.
- Fase Hacia Atrás: En esta fase, tomamos en cuenta las etiquetas de clase reales y y damos una actualización de peso mayor a ejemplos que están correctamente clasificados. Calculamos una función de error E para cada neurona en la capa oculta basada en las diferencias entre estos valores y la propaga de vuelta a través de todas las neuronas. Luego aprendemos Wm+1 de este error usando una regla de descenso de gradiente como Wm+1 = Wm -(tasa de aprendizaje)*parcial E/parcial wm [6].

El algoritmo de Perceptrón Multicapa no tiene ningún criterio de parada incorporado; sin embargo, muchos experimentos se detienen cuando observan que el entrenamiento adicional tiene solo un impacto mínimo en el rendimiento o estabilidad de la red, es decir, cuando el entrenamiento adicional reduce el error cuadrático medio - ha ocurrido sobreajuste.

##### Perceptrones Multicapa de Aprendizaje Profundo

Los perceptrones multicapa también se conocen como redes neuronales de alimentación hacia adelante porque no tienen ciclos en su gráfico de conexiones; sin embargo, los perceptrones multicapa con más de una capa oculta a menudo se llaman perceptrones multicapa de aprendizaje profundo (MLP), lo que nos permite generalizar el algoritmo del perceptrón multicapa a redes con muchas capas y millones de parámetros. Una red de alimentación hacia adelante profunda se compone apilando múltiples capas una encima de la otra, resultando en una arquitectura de red muy amplia pero superficial. Los perceptrones multicapa de aprendizaje profundo pueden entrenarse con varios algoritmos de optimización diferentes como descenso de gradiente, gradiente conjugado o métodos cuasi-Newton.

#### Redes Neuronales Convolucionales

Las redes neuronales convolucionales (CNN) son un tipo de red neuronal que se ha utilizado en la aplicación de visión por computadora, reconocimiento de imágenes y detección de objetos. Se utilizan para identificar pequeños aspectos de una imagen comparándola con otras imágenes sobre las que el programa ha aprendido. Las redes neuronales convolucionales generalmente se componen de 3 capas principales:

- Capa convolucional
- Capa de agrupación
- Capa completamente conectada

La capa convolucional es donde el programa reconoce patrones en la imagen comparándola con otras imágenes en su base de datos. Si hay una diferencia significativa entre las características en la imagen actual y lo que el programa ha aprendido, entonces pasa a la siguiente sección de la capa convolucional. Aunque las redes neuronales convolucionales son en gran medida responsables de los avances en visión por computadora, continúan mejorando con diferentes tipos de redes neuronales convolucionales como las redes neuronales convolucionales profundas (DCNN) y las máquinas de Boltzmann restringidas convolucionales (CBRM).

Las redes neuronales convolucionales aprenden de la experiencia. Las redes neuronales convolucionales se componen de múltiples capas donde cada capa tiene un número diferente de neuronas llamadas filtro. Para que la red aprenda, cada capa se presenta con un conjunto de entrenamiento donde se entrena a sí misma para reconocer patrones. Cuantos más datos de entrenamiento tengas, más precisa será tu red neuronal convolucional para detectar los patrones dentro de esos datos. Las redes neuronales convolucionales también utilizan un mecanismo de alimentación hacia adelante que pasa datos hacia adelante a través de muchas capas y luego mide qué tan cerca están sus predicciones de las etiquetas asociadas con los datos.

Para alcanzar el nivel deseado de precisión para tu red neuronal convolucional, necesitarías crear un conjunto de entrenamiento para ella adhiriéndote a un conjunto definido de datos. La red neuronal convolucional entonces aprenderá cómo detectar con precisión patrones de estos datos. Esto se hace ajustando los valores de los filtros dentro de la red neuronal convolucional para minimizar el error entre sus predicciones y las etiquetas asociadas con los datos. También puedes usar retropropagación para ayudar a entrenar tu red neuronal convolucional. La retropropagación ayuda a las redes neuronales convolucionales a aprender más rápido alimentando información sobre qué tan bien lo hizo en cada capa de vuelta a las capas anteriores. Esto permite que cada capa ajuste sus filtros en consecuencia para que la red neuronal convolucional pueda aprender de sus errores y mejorar su precisión.

#### Redes Neuronales Recurrentes

Las redes neuronales recurrentes (RNN) son un tipo de red que identifica patrones dentro de imágenes o texto utilizando información de estado de partes anteriores en la secuencia para influir en predicciones futuras sobre dónde debería mirar a continuación. Las RNN se han utilizado en aplicaciones como el servicio de traducción de Google y la tecnología de reconocimiento de voz. Las máquinas de Boltzmann restringidas convolucionales (CBRM), las redes neuronales convolucionales profundas (DCNN), etc. son algunos tipos de redes neuronales convolucionales que utilizan redes neuronales recurrentes en su núcleo.

Las celdas de memoria a corto y largo plazo (LSTM) son un tipo de red neuronal recurrente utilizada para identificar patrones y tendencias dentro de secuencias de datos. Las celdas LSTM hacen esto comparando nuevos patrones con aquellos que se aprendieron anteriormente y luego teniendo en cuenta la información de estado anterior al hacer predicciones futuras. Aunque las redes neuronales recurrentes han existido durante años, las celdas de memoria a corto y largo plazo son en gran medida responsables de hacer que las redes neuronales recurrentes sean más poderosas.

#### Transformadores

Las redes neuronales transformadoras son redes neuronales que utilizan un algoritmo de aprendizaje profundo llamado transformador para aprender cómo hacer inferencias en nuevos conjuntos de datos. El transformador es una red neuronal que se compone de dos partes principales: el codificador y el decodificador. El codificador toma los datos de entrada y los transforma en un vector de números. El vector luego se pasa a través del decodificador, que reconstruye los datos de entrada.

La arquitectura de red neuronal transformadora fue propuesta por primera vez por Google en 2017 y se ha demostrado que es más efectiva que otras arquitecturas de redes neuronales como la red neuronal profunda y la red neuronal recurrente. Las redes neuronales transformadoras han demostrado ser muy efectivas en el procesamiento de lenguaje natural, que es una rama de la inteligencia artificial que busca crear máquinas que puedan procesar y aprender de lenguajes humanos como el inglés. Una red neuronal como la red neuronal transformadora es esencialmente una aproximación de cómo funciona el cerebro, ya que toma información y la transforma en otra forma para análisis.

### Retropropagación

Una vez que hayas elegido una arquitectura de red neuronal. Tienes que entrenarla. La retropropagación es un algoritmo simple y efectivo que puede utilizarse para entrenar redes neuronales. La retropropagación es un algoritmo que funciona con un método de descenso de gradiente que nos permite converger rápidamente hacia los pesos óptimos de la red neuronal, en oposición a simplemente moverse en una dirección aleatoria.

La razón por la que es tan efectivo es que el término de error de cada capa se propaga hacia atrás a través de la red, lo que permite calcular gradientes. Este término de error en un nodo dado luego ajustará los pesos de las conexiones a los nodos en ambos lados de él, con el fin de reducir errores futuros de esos nodos.

Los back-props son una herramienta poderosa que se emplea frecuentemente en redes neuronales de aprendizaje profundo, que requiere grandes bases de datos para entrenar. La retropropagación puede aplicarse a muchos tipos diferentes de modelos de redes neuronales, de hecho todas las arquitecturas de redes neuronales que discutimos anteriormente pueden y de hecho se benefician de la retropropagación. La retropropagación ha sido aplicada exitosamente en muchos campos como optimización, reconocimiento de patrones y aproximación de funciones.

Los algoritmos de retropropagación también se conocen como back-prop o back-props.

La razón por la que es tan efectivo es que el término de error de cada capa se propaga hacia atrás a través de la red, lo que permite calcular gradientes. Este término de error en un nodo dado luego ajustará los pesos de las conexiones a los nodos en ambos lados de él, con el fin de reducir errores futuros de esos nodos. Los algoritmos de retropropagación también se conocen como back-prop o back-props.

La retropropagación funciona con un método de descenso de gradiente que permite que la retropropagación converja rápidamente hacia los pesos óptimos, en lugar de simplemente moverse en una dirección aleatoria. La retropropagación puede estar compuesta de muchos tipos diferentes de modelos de redes neuronales. Backprop es una gran herramienta para reducir o romper la dependencia entre clasificadores. Los back-props son una herramienta poderosa que se emplea frecuentemente en redes neuronales de aprendizaje profundo, que requiere grandes bases de datos para entrenar.

### Convergencia

Convergencia significa qué tan rápido el modelo aprende cosas cuando entrena con más datos. Por ejemplo, si estás usando un modelo de aprendizaje automático para hacer predicciones sobre el futuro, querrás asegurarte de que el modelo tenga buena convergencia para que tus predicciones sean precisas. Otro ejemplo es si estás usando un modelo de aprendizaje automático para mejorar algo, como un producto, querrás usar un modelo con buena convergencia para que los cambios que hagas sean realmente mejores que con lo que empezaste.

La convergencia lenta en aprendizaje automático puede ser mala porque significa que el modelo no está aprendiendo tan rápido como podría. Esto puede llevar a predicciones inexactas y soluciones subóptimas. Adicionalmente, la convergencia lenta puede ser costosa en términos de tiempo y recursos.

#### ¿Hay beneficios para la convergencia lenta?

La principal ventaja de seleccionar un modelo con convergencia lenta es que será más preciso. Una tasa más lenta de convergencia puede llevar a predicciones o soluciones más precisas. Adicionalmente, este tipo de modelo puede ser adecuado para casos donde la precisión es el factor más importante.

Pero al seleccionar un modelo con convergencia lenta, es importante considerar el contexto en el que será usado. La precisión es el factor más importante en algunos casos, mientras que la velocidad puede ser más importante en otros. Adicionalmente, necesitas asegurarte de que tienes suficientes datos para entrenar el modelo usando este método. Si no tienes suficientes datos, el modelo puede no ser capaz de aprender apropiadamente y no producirá resultados precisos.

En resumen, al seleccionar un modelo de aprendizaje automático, es importante considerar la tasa de convergencia. Un modelo con buena convergencia será más preciso y eficiente que uno con convergencia lenta. También es importante tener en mente el contexto en el que el modelo será usado para que puedas seleccionar uno con buena convergencia para ese caso de uso.

### Sobreajuste y Subajuste

Un problema con el aprendizaje automático es el sobreajuste y el subajuste. Sobreajuste significa que el algoritmo aprende cómo hacer las cosas bien pero no puede hacer nada más, porque aprendió demasiado sobre lo que queríamos que hiciera. Subajuste significa que el algoritmo no fue entrenado lo suficiente por lo que no sabe lo que queremos que aprenda sobre cómo funciona el mundo. Cuando hay muchos errores cometidos en los datos de entrenamiento, esto puede deberse al sobreajuste o subajuste.

Por ejemplo, un algoritmo de aprendizaje automático podría ser capaz de aprender cómo identificar objetos en imágenes muy bien. Pero porque aprendió demasiado sobre lo que queríamos que hiciera, no será bueno haciendo nada más, como identificar otros objetos en diferentes imágenes o reconocer objetos en diferentes contextos.

Otro ejemplo es cuando un algoritmo de aprendizaje automático solo puede aprender cosas muy básicas de los datos. Esto sucede cuando el algoritmo no es entrenado lo suficiente y no aprende lo que queremos que aprenda sobre cómo funciona el mundo. Cuando hay muchos errores cometidos en los datos de entrenamiento, esto puede deberse al sobreajuste o subajuste.

Una forma de prevenir el sobreajuste es usando un algoritmo más complejo. Esto ayudará al algoritmo a aprender más sobre los datos sin aprender demasiado sobre lo que queremos que haga. Otra forma de prevenir el sobreajuste es usando una cantidad menor de datos de entrenamiento. Esto ayudará al algoritmo a aprender menos sobre lo que queremos que haga. Una forma de prevenir el subajuste es usando un algoritmo menos complejo que ayudará al algoritmo a aprender más de los datos sin ser entrenado demasiadas veces. Otra forma de prevenir el subajuste es usando una cantidad mayor de datos de entrenamiento, para que más partes de cómo funciona el mundo estén incluidas en los datos.

El sobreajuste y el subajuste son dos problemas que pueden suceder en el aprendizaje automático. El sobreajuste sucede cuando el algoritmo aprende demasiado sobre lo que queremos que haga. El subajuste sucede cuando el algoritmo no fue entrenado lo suficiente por lo que no sabe lo que queremos que aprenda sobre cómo funciona el mundo. Al usar un algoritmo más complejo o una cantidad mayor de datos de entrenamiento, podemos ayudar a prevenir estos problemas.

### Hiperparámetros

Para ajustar y lidiar con estos problemas, puedes afinar un rango de diferentes parámetros. Aquí tocamos los más comúnmente usados.

#### Épocas

Cuando se entrena una red neuronal usando retropropagación, usualmente hay miles o incluso millones de conexiones que ajustar. Realizar todas estas actualizaciones simultáneamente requeriría exponencialmente más tiempo de cómputo, lo cual es inviable para la mayoría de aplicaciones. Por esto la retropropagación actualiza los pesos uno a la vez, en iteraciones. De esta manera la retropropagación no tiene que recalcular los pesos de todas las conexiones entrantes para cada instancia de entrenamiento, lo cual tomaría demasiado tiempo. En su lugar, la retropropagación actualiza los pesos uno a la vez y mantiene registro de todos los cambios para poder actualizar los otros pesos una vez que completa su iteración actual.

Las épocas son una unidad de medida en aprendizaje automático que indica el número de veces que todos los datos de entrenamiento han sido procesados. Usualmente se usan cuando el número de elementos de datos es muy grande. Las épocas también son útiles cuando hay necesidad de reiniciar los pesos de la red neuronal de vuelta a sus valores iniciales.

Cuando las épocas se inicializan por primera vez, el algoritmo de retropropagación comenzará al inicio del conjunto de datos y avanzará hasta llegar al final. Luego retrocederá al principio y comenzará a procesar desde ahí nuevamente. Este proceso continuará hasta que haya pasado por todos los elementos de datos en el conjunto.

El número de épocas que deberían ejecutarse dependerá de qué tan bien esté funcionando la red neuronal en los datos de entrenamiento. Si la red no está aprendiendo de los datos, entonces deberían ejecutarse más épocas. Por el contrario, si la red está sobreajustándose o aprendiendo demasiado del ruido en los datos, entonces deberían ejecutarse menos épocas.

Las épocas también pueden usarse para ahorrar tiempo durante el proceso de entrenamiento. Cuando la retropropagación pasa por los datos de entrenamiento, debe retroceder y luego volver al principio cuando llega al final del conjunto. Si las épocas no se usaran en esta situación, la retropropagación tendría que procesar todo el conjunto de datos cada vez. Esto podría consumir mucho tiempo. Sin embargo, dado que la retropropagación retrocede al principio del conjunto de datos, solo necesita retroceder un cierto número de elementos. Esto reduce significativamente la cantidad de tiempo necesario para cada época.

#### Tasa de Aprendizaje

Una tasa de aprendizaje determina qué tan rápido entrena tu modelo (o captura datos) - eso significa que si estableces tu tasa de aprendizaje demasiado baja, tu modelo podría no entrenar en absoluto; pero si la estableces demasiado alta, entonces el entrenamiento puede ser ineficiente porque no hay tiempo para la corrección de errores. Tu objetivo al establecer el valor correcto para tu caso depende de dos cosas: 1) cuántos datos tienes disponibles para entrenar tu modelo, y 2) cuánto tiempo tienes para entrenarlo.

¿Cómo afecta la tasa de aprendizaje a tu modelo? Si estás entrenando una red neuronal, entonces mientras más alta sea la tasa de aprendizaje, más cerca se mueve cada valor hacia 0 o 1 (0 significa ningún efecto; 1 significa que tiene 100% de su efecto original). Con una tasa de aprendizaje más baja, la red convergirá más lentamente pero será más precisa. Esto tiene sentido porque con una tasa de aprendizaje baja, hay más oportunidades para que la red adapte sus pesos para coincidir mejor con los datos.

¿Cómo puedo averiguar cuál debería ser mi tasa de aprendizaje? Hay algunas maneras en que puedes hacer esto: 1) prueba y error - todos los modelos requieren diferentes cantidades de tiempo de entrenamiento para alcanzar el mismo nivel de precisión, así que es difícil saber qué tasa de aprendizaje deberías usar; 2) ¡leer un artículo como este! Esto proporcionará pautas generales. Sin embargo, hay maneras aún más específicas en que puedes establecer tu valor de aprendizaje: 1) ejecutar una búsqueda en cuadrícula - esto es cuando pruebas muchas combinaciones diferentes de tasas de aprendizaje para encontrar la que funciona mejor para tu caso; 2) usar una curva de validación - esto es cuando graficas la precisión de tu modelo contra su tiempo de entrenamiento, lo cual te mostrará qué tan rápido o lento está aprendiendo. Esta es la mejor opción si quieres obtener el resultado más preciso posible dentro de un cierto marco de tiempo.

¿Cuáles son los factores que determinan la tasa de aprendizaje correcta para mi caso? El primer factor es cuántos datos tienes disponibles para entrenar tu modelo. Si estás trabajando con muchos datos, entonces tiene sentido usar un valor más alto (porque esto significa que hay más ejemplos para que tu modelo aprenda - permitiéndole así aprender más rápido). Por otro lado, si tienes una pequeña cantidad de datos disponibles para entrenar tu modelo, entonces establece un valor más bajo.

El segundo factor es cuánto tiempo tienes disponible para entrenar tu modelo. Como se mencionó previamente, es imposible para la prueba y error o leer un artículo revelar qué tasa de aprendizaje funcionará mejor para un caso específico. Esto es porque la mejor opción para una persona podría no ser la mejor opción para otra. Sin embargo, si quieres entrenar tu modelo tan rápido como sea posible, entonces no uses un valor muy alto; mientras que si tienes más tiempo disponible, entonces puedes permitirte usar una tasa de aprendizaje más alta (y descubrir qué funciona mejor).

Como puedes ver, hay múltiples factores que determinan el valor correcto para tu tasa de aprendizaje. ¡Afortunadamente, también hay muchas maneras de descubrir qué funciona mejor!

##### ¿Es la tasa de aprendizaje demasiado baja o demasiado alta?

Si tu modelo no está entrenando en absoluto, entonces esto indica que tu tasa de aprendizaje es demasiado baja y deberías aumentarla (pero asegúrate de que no sea demasiado alta tampoco). Otra manera de verificar si tu modelo está configurado correctamente es usar una curva de validación en tu conjunto de datos. Si estableces tu tasa de aprendizaje correctamente, entonces la curva se verá similar a un gráfico que parece una línea recta pasando por los puntos cerca de 1. Si no es así, entonces deberías considerar cambiar tu tasa de aprendizaje y ejecutar otra curva de validación.

##### ¿Cómo puedo acelerar mi modelo?

Si estableces una tasa de aprendizaje más alta, tu modelo aprenderá más rápidamente pero también podría ser menos preciso. Por el contrario, si estableces una tasa de aprendizaje más baja, tu modelo aprenderá más lentamente pero será más preciso. Esto tiene sentido porque con una tasa de aprendizaje baja, hay más oportunidades para que la red adapte sus pesos para coincidir mejor con los datos. Por otro lado, si estás usando una tasa de aprendizaje muy alta, entonces tu modelo podría aprender rápidamente cómo hacer predicciones basadas en el ruido del conjunto de datos en lugar de los datos reales. Esto no será muy útil porque no está examinando sus predicciones de manera crítica o entendiendo por qué están equivocadas (simplemente seguirá cometiendo errores similares).

Si disminuyes la tasa de aprendizaje demasiado, entonces tu modelo también podría tomar mucho tiempo para entrenar. Esto se debe a que los pesos se actualizan tan lentamente que podría no ser capaz de adaptarse lo suficientemente rápido cuando lleguen nuevos datos.

##### Elegir una tasa de aprendizaje óptima

Como puedes ver, hay múltiples factores que determinan la tasa de aprendizaje de tu modelo y la mejor opción es diferente para cada persona. Si tienes mucho tiempo disponible pero quieres entrenar rápidamente, entonces usa un valor más bajo para tu tasa de aprendizaje. Sin embargo, si quieres entrenar modelos precisos rápidamente, entonces usa una tasa de aprendizaje más alta.

### Aprendizaje por Transferencia

#### ¿Qué es el Aprendizaje por Transferencia?

El aprendizaje por transferencia es un proceso donde el conocimiento se aprende en un modelo y puede ser transferido a otro modelo. Esto se hace para llenar los vacíos en la base de conocimiento del otro modelo. El uso del aprendizaje por transferencia ha demostrado ser muy exitoso, especialmente en el campo del aprendizaje automático. Un gran ejemplo de esto es la aplicación de redes neuronales profundas para mejorar el reconocimiento de voz para teléfonos móviles.

#### ¿Por Qué Es Importante el Aprendizaje por Transferencia?

La razón principal por la que el aprendizaje por transferencia es importante es porque ayuda a llenar los vacíos que existen entre diferentes modelos. Debido a que esto llena estos vacíos, el aprendizaje por transferencia puede ayudarnos a usar información que no habríamos podido usar de otra manera si dos modelos no se hubieran combinado. Otra gran razón por la que el aprendizaje por transferencia es importante es porque puede acelerar el proceso de aprendizaje. Esto se debe a que el aprendizaje por transferencia puede reutilizar conocimiento que ya ha sido aprendido en un modelo diferente. Finalmente, el aprendizaje por transferencia es importante porque puede mejorar la precisión de nuestros modelos. Al llenar los vacíos entre diferentes modelos, el aprendizaje por transferencia puede ayudar a mejorar la precisión de nuestros modelos al permitirnos usar más información.

El aprendizaje por transferencia se ha convertido en una herramienta poderosa para los sistemas de aprendizaje automático (ML) en años recientes. Su popularidad se debe al hecho de que el aprendizaje por transferencia puede ayudar a reducir la cantidad de datos de entrenamiento necesarios y también mejora el rendimiento. Además, el aprendizaje por transferencia es más fácil de implementar y depurar que los algoritmos tradicionales de aprendizaje automático.

#### ¿Cuáles Son Algunas Aplicaciones del Aprendizaje por Transferencia?

El aprendizaje por transferencia ha encontrado una serie de aplicaciones importantes en campos como visión por computadora, procesamiento de lenguaje natural y aprendizaje automático. Algunas de las aplicaciones más notables incluyen:

- Usar aprendizaje por transferencia para mejorar el reconocimiento de voz para teléfonos móviles
- Usar aprendizaje por transferencia para mejorar el reconocimiento de objetos
- Usar aprendizaje por transferencia para mejorar el reconocimiento facial
- Usar aprendizaje por transferencia para mejorar el aprendizaje automático
- Usar aprendizaje por transferencia para mejorar la clasificación de texto

En resumen, el aprendizaje por transferencia se está convirtiendo en una herramienta popular para los sistemas de aprendizaje automático, debido a su capacidad para minimizar la cantidad de datos de entrenamiento necesarios y mejorar el rendimiento. El aprendizaje por transferencia es ampliamente usado en aplicaciones de reconocimiento de voz, traducción automática y visión por computadora y se ha convertido en una herramienta valiosa para investigadores y desarrolladores que comparten código fuente entre diferentes tareas dentro de diferentes dominios.

#### Optimizadores

### Resumen

Las redes neuronales convolucionales, las celdas de Memoria a Largo y Corto Plazo, las redes neuronales recurrentes y las Máquinas de Boltzmann Restringidas Convolucionales (CBRMs) son algunos de los diferentes tipos de redes neuronales que se están usando actualmente en el campo del aprendizaje profundo. Estos diferentes tipos de redes neuronales son responsables de impulsar muchas de las aplicaciones más exitosas de hoy. Mientras que las Redes Neuronales Convolucionales fueron originalmente diseñadas para la tarea de visión por computadora, han sido adaptadas a otras tareas como el reconocimiento de voz y el procesamiento de lenguaje natural con mucho éxito. Las Redes Neuronales Recurrentes y las celdas de Memoria a Largo y Corto Plazo son en gran medida responsables de hacer que las redes neuronales recurrentes sean más poderosas que nunca. Con los avances continuos en las Redes Neuronales Convolucionales y las Redes Neuronales Recurrentes, solo podemos esperar que estos tipos de redes neuronales se vuelvan cada vez más poderosos.

## Optimizaciones de Modelos

En el aprendizaje automático, el tamaño de un modelo de aprendizaje automático es una medida de su grado de complejidad. Cuanto más grande es un modelo de aprendizaje automático, mayor es el riesgo de que no converja durante los algoritmos de optimización, y de que tenga un mayor grado de sobreajuste.

Para contrarrestar estas desventajas, se pueden emplear técnicas de optimización de aprendizaje automático para reducir el tamaño de los modelos de aprendizaje automático manteniendo su poder predictivo. Estas técnicas, como la cuantización, la poda, la destilación de conocimiento y más, que discutiremos en esta sección, están diseñadas para mejorar el rendimiento de los algoritmos de aprendizaje automático haciéndolos más eficientes computacionalmente para una variedad de tareas.

En términos generales, las técnicas de optimización de aprendizaje automático abordan dos aspectos:

1. reducir el tamaño del modelo;
2. aumentar la eficiencia computacional.

Estos pueden lograrse ya sea realizando optimizaciones de software o dependiendo del soporte de hardware.

### Optimizaciones de Software

#### Compresión

La compresión de modelos es una técnica de optimización de aprendizaje automático que utiliza conjuntos de modelos de aprendizaje automático para reducir el tamaño de los modelos de aprendizaje automático. La compresión de modelos funciona entrenando múltiples modelos de aprendizaje automático basados en diferentes subconjuntos de ejemplos de aprendizaje automático y luego usando votación o promediado para producir un único modelo de aprendizaje automático. Debido a que cada modelo de aprendizaje automático es más pequeño que el modelo original de aprendizaje automático, hay menos parámetros del modelo de aprendizaje automático para calcular y almacenar.

Los datos de aprendizaje automático en sí también pueden comprimirse para hacerlos más manejables. Esto se puede hacer de varias maneras, como usando un algoritmo de compresión con pérdida o submuestreando los datos. Los algoritmos de compresión con pérdida descartan algunos de los datos de aprendizaje automático para reducir su tamaño, mientras que el submuestreo de los datos reduce el número de ejemplos de aprendizaje automático que se usan para el entrenamiento.

#### Cuantización

La cuantización es una técnica de optimización de aprendizaje automático que reduce el tamaño de los parámetros del modelo de aprendizaje automático reemplazándolos con valores enteros. Esto se hace redondeando los parámetros del modelo de aprendizaje automático al valor entero más cercano. La ventaja de la cuantización es que a menudo conduce a modelos de aprendizaje automático que son más eficientes computacionalmente que sus contrapartes no cuantizadas.

#### Poda de Pesos

La poda de pesos es una técnica de optimización de aprendizaje automático que reduce el tamaño de los parámetros del modelo de aprendizaje automático eliminando algunos de sus pesos. Esto se hace estableciendo los pesos o activaciones del modelo de aprendizaje automático en cero si se determinó que no tienen efecto en las predicciones del modelo de aprendizaje automático. Al eliminar los pesos del modelo de aprendizaje automático, los modelos de aprendizaje automático pueden hacerse más pequeños, lo que reduce el tiempo que se necesita para entrenarlos y el espacio de memoria que se requiere para almacenarlos.

#### Destilación de Conocimiento

La destilación de conocimiento es una técnica de optimización de aprendizaje automático que puede usarse para mejorar el rendimiento de los modelos de aprendizaje automático. Es un proceso de dos pasos: primero, se entrena un modelo de aprendizaje automático más complejo en un conjunto de datos grande; segundo, el modelo de aprendizaje automático se destila en un modelo de aprendizaje automático más simple que puede usarse para hacer predicciones en conjuntos de datos más pequeños. La ventaja de la destilación de conocimiento es que los modelos de aprendizaje automático que han sido destilados en conjuntos de datos grandes pueden aplicarse a conjuntos de datos más pequeños sin la necesidad de reentrenamiento. En particular, la destilación de conocimiento a menudo da lugar a modelos de aprendizaje automático con predicciones más precisas que sus contrapartes complejas antes de que fueran destiladas.

### Aceleración por Hardware

El aprendizaje automático es un campo de la inteligencia artificial que se enfoca en enseñar a las máquinas a comportarse de maneras más similares a los humanos. La aceleración por hardware es un término usado para describir el uso de dispositivos de hardware específicos para mejorar el rendimiento de un sistema informático. Cuando se trata de aprendizaje automático, la aceleración por hardware puede desempeñar un papel muy importante en mejorar el rendimiento y la eficiencia del sistema.

El siguiente contenido se enfocará en la aceleración por hardware para el aprendizaje automático y cómo puede ser aprovechada por ingenieros que están trabajando con esta tecnología. La primera sección proporcionará una visión general de la aceleración por hardware, detallando su historia y definiendo qué son realmente los aceleradores de hardware antes de pasar a cómo pueden ayudar específicamente con el aprendizaje automático. Este artículo debería servir como una guía introductoria a un aspecto particular del aprendizaje automático que tiene la aceleración por hardware en su núcleo.

Un acelerador de hardware, en este sentido de la palabra, es un circuito integrado que está diseñado para realizar una tarea específica de manera más eficiente de lo que sería posible en una CPU de propósito general. Esto es porque los aceleradores de hardware están diseñados a medida para llevar a cabo los cálculos necesarios de manera rápida y eficiente. Lo que esto significa para la aceleración por hardware en el aprendizaje automático específicamente es que estos dispositivos de hardware pueden mejorar tanto el rendimiento como la eficiencia del sistema.

#### Unidades de Procesamiento Gráfico

Las GPUs (unidades de procesamiento gráfico) son aceleradores de hardware que están diseñados específicamente para llevar a cabo cálculos relacionados con gráficos por computadora. Estos dispositivos de hardware ofrecen mejoras significativas sobre las CPUs tradicionales cuando se trata de aprendizaje automático porque están optimizados para operaciones aritméticas de punto flotante relacionadas con manipulaciones de matrices que son comunes en los algoritmos de aprendizaje automático. Por esta razón, las GPUs se usan a menudo en el aprendizaje automático para tareas como entrenamiento e inferencia.

#### Unidades de Procesamiento de Tensores

Más recientemente, aceleradores de hardware conocidos como TPUs (unidades de procesamiento de tensores) han sido producidos por Google específicamente para acelerar los cálculos de aprendizaje automático. Estos dispositivos de hardware fueron diseñados basándose en una comprensión de los requisitos únicos del aprendizaje automático, y ofrecen una ventaja de rendimiento significativa sobre tanto las CPUs como las GPUs.

#### Unidades de Procesamiento Neural

En general, la aceleración por hardware es una herramienta importante que puede utilizarse para mejorar el rendimiento y la eficiencia de los sistemas de aprendizaje automático. Cuando se trata específicamente de las GPU, se ha demostrado que son un acelerador de hardware particularmente efectivo para este tipo de sistemas. Sin embargo, a medida que evoluciona el campo del aprendizaje automático, es probable que se produzcan otros dispositivos de hardware que estén específicamente diseñados para satisfacer las necesidades de esta tecnología. Con este fin, estamos viendo una rica variedad de diferentes dispositivos especializados como Unidades de Procesamiento Neural que atienden el entrenamiento e inferencia de aprendizaje automático. En cualquier caso, la aceleración por hardware debe considerarse una herramienta importante para cualquier persona que trabaje con algoritmos de aprendizaje automático.

## Despliegue de Modelos de ML

Hay muchos factores que afectan la precisión y latencia de los modelos de aprendizaje automático. Algunos de estos factores son intrínsecos al algoritmo de aprendizaje automático, mientras que otros dependen de la implementación específica o del entorno. En general, sin embargo, hay tres factores principales que influyen en el rendimiento de los algoritmos de aprendizaje automático:

El tamaño y complejidad del conjunto de datos
La complejidad del algoritmo
Hiperparámetros como número de capas, tipo de capas, función de activación, etc.

## Conclusión

El Aprendizaje Automático es una parte integral del futuro de la Inteligencia Artificial (IA), y jugará un papel en muchas tecnologías emergentes, incluyendo automóviles autónomos, asistentes virtuales y electrodomésticos inteligentes. Se necesitan Ingenieros de Aprendizaje Automático para ayudar a desarrollar algoritmos de aprendizaje automático que permitirán a estas tecnologías alcanzar su máximo potencial. Con ese fin, esperamos que el material que has aprendido en este curso haya despertado un profundo interés en ti para aprender más sobre el aprendizaje automático.

## Apéndice

### Sistemas Embebidos

En los sistemas embebidos, un microcontrolador es una pequeña computadora en un solo circuito integrado que contiene toda la circuitería necesaria para controlar dispositivos embebidos. Estos dispositivos embebidos generalmente están integrados en otros productos como electrodomésticos o vehículos y pueden tomar varias formas desde simples compuertas lógicas hasta microcomputadoras con puertos de entrada/salida. El PICmicro, por ejemplo, es uno de muchos ejemplos de un sistema controlador embebido que hace interfaz entre tu computadora y hardware periférico como impresoras, escáneres, teclados, ratones, cámaras digitales, etc. Este tipo de dispositivo puede usarse para monitorear condiciones ambientales o controlar procesos industriales. Los primeros controladores programables fueron sistemas embebidos diseñados en la década de 1960 por General Electric para uso dentro de sus lavadoras y secadoras que detectarían cuando la ropa había sido lavada suficientemente y luego detendrían la máquina.

Hoy en día los sistemas embebidos se pueden encontrar en una vasta gama de productos y electrodomésticos y las computadoras embebidas se usan como la unidad de computación principal para la mayoría de los dispositivos domésticos modernos como microondas, lavadoras, lavavajillas e incluso cafeteras. Estas computadoras embebidas transmiten información al usuario a través de varias formas de salida como pantallas digitales y LED's. Las computadoras embebidas también pueden recibir entrada de su entorno como botones o interruptores en el exterior del dispositivo lo que permite a los usuarios controlar funciones como configuraciones de tiempo o temperatura. Hay una computadora embebida dentro de tu automóvil para ejecutar todos los controles de tu vehículo como señales de giro, bocina, velocímetro, etc.; esencialmente dándote control total sobre tu automóvil sin tener que hacer interfaz directamente con los componentes de su motor.

Los sistemas embebidos también pueden realizar cálculos complejos o manipulación de datos para monitorear y controlar basándose en condiciones ambientales. Un sistema embebido basado en un procesador de señales digitales (DSP) puede usarse para recopilar datos climáticos para investigación, detectar cambios en factores como velocidad del viento, humedad, etc. que luego pueden usarse para hacer predicciones sobre el ambiente. Las computadoras embebidas dentro de los vehículos están usando este tipo de tecnología por ejemplo para detectar cuando las partes están cerca de romperse o sobrecalentarse. Estos sistemas embebidos son cruciales para el funcionamiento eficiente de nuestro mundo hoy en día, sin embargo el desarrollo de sistemas embebidos históricamente ha sido limitado debido a su tamaño y nivel requerido de funcionalidad.

¡Pero la computación embebida está avanzando rápidamente! Gracias a desarrollos recientes en microelectrónica, los sistemas embebidos pueden hacer más mientras son más pequeños que nunca antes. La tecnología de sistemas en chip (SoC) ha permitido que los sistemas embebidos se combinen con circuitería RF, analógica y digital en un solo chip que luego puede ser embebido en otros productos. Esto ha hecho el desarrollo de productos más fácil y rápido, así como ha reducido los costos de producción. Con la demanda siempre creciente de sistemas embebidos en todos los aspectos de nuestras vidas, ¡es seguro decir que los sistemas embebidos son críticos para el funcionamiento del mundo que nos rodea!

### La Historia de los Sistemas Embebidos

Los sistemas embebidos han estado en uso durante casi tanto tiempo como han existido dispositivos electrónicos. Uno de los primeros ejemplos es el controlador de tubo de vacío que se usó en bombarderos de la Segunda Guerra Mundial como el B-17 Flying Fortress para ayudar con la navegación y el apuntado de bombas. Estos sistemas embebidos eran esencialmente pequeñas computadoras que estaban embebidas en el sistema más grande para proporcionar funcionalidad adicional.

A principios de la década de 1960, General Electric desarrolló los primeros controladores embebidos para uso en sus lavadoras y secadoras. Estos controladores detectarían cuando la ropa había sido lavada suficientemente y luego detendrían la máquina. Este fue un desarrollo revolucionario en ese momento ya que mostró el potencial de los sistemas embebidos para controlar e interactuar con hardware periférico.

A finales de la década de 1960 se vio una proliferación de sistemas embebidos siendo utilizados en todo tipo de productos. La misión Apollo 11 que puso al primer hombre en la luna empleó sistemas embebidos extensivamente en sus sistemas de guía y control. De hecho, los sistemas embebidos fueron tan críticos para el éxito de la misión que si uno hubiera fallado, es probable que la misión habría sido abortada.

Mientras los sistemas embebidos continuaron proliferando, también lo hizo la necesidad de estandarización de cómo estos sistemas interactúan con su entorno. En 1981, un grupo de ingenieros se reunió para formar la Convención de Sistemas Embebidos (ESC). Esta organización tenía como objetivo desarrollar y promover estándares para el desarrollo de sistemas embebidos. Uno de sus logros más notables fue el desarrollo del bus embebido común, que permite a los sistemas embebidos comunicarse entre sí fácilmente.

Los sistemas embebidos han recorrido un largo camino desde sus primeros días y continúan desempeñando un papel crítico en nuestro mundo hoy. Con los avances en tecnología, los sistemas embebidos se están volviendo más pequeños y más poderosos que nunca antes, convirtiéndolos en una parte esencial del desarrollo de productos. ¡Mientras los sistemas embebidos se vuelven aún más embebidos en nuestras vidas diarias, se espera que el desarrollo de sistemas embebidos continúe avanzando rápidamente!

Ejemplos tradicionales específicos de sistemas embebidos incluyen:

- relojes/cronómetros digitales
- microondas
- automóviles
- enrutadores
- sistemas de control de iluminación embebidos como los encontrados en letreros LED o aeropuertos
- electrodomésticos inteligentes embebidos como asistentes de voz y cerraduras de puerta en red
- controladores de automatización industrial embebidos como los encontrados en líneas de ensamblaje para automóviles

¡La lista continúa! Mientras use tecnología embebida, cuenta como un sistema embebido. Ve la sección 'Lectura Adicional' para algunos buenos artículos de tecnología embebida que puedes usar como fuentes si es necesario. ¡Sin embargo, no tienes que limitarte a estos ejemplos! Si conoces sobre otros sistemas embebidos que hacen cosas interesantes, inclúyelos también :)

Una cosa que puedes mencionar es cómo las nuevas tecnologías están empujando los sistemas embebidos hacia nuevas áreas. Por ejemplo, los sistemas embebidos ahora están siendo utilizados en el desarrollo de vehículos autónomos. ¡Mientras los sistemas embebidos se vuelven más y más ubicuos, su importancia solo continuará creciendo!

### Lectura Adicional

- [What is an embedded system](http://www.edn.com/electronics-blogs/digest/4427211/What-is-an-embedded-system)

- [An Embedded Systems Primer](https://www.cs.utah.edu/~gk/papers/embedded_primer.pdf)

- [The State of Embedded Systems Development](https://www.eetimes.com/document.asp?doc_id=133)

*Continuaremos actualizando / modificando esta serie de cursos. Todos los derechos reservados por Seeed Studio y Prof. Vijay Janapa Reddi.*

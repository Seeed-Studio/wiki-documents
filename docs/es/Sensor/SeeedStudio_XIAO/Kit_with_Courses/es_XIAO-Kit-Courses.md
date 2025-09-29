---
description: Cursos del Kit Seeed Studio XIAO
title: Cursos del Kit Seeed Studio XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-Kit-Courses
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# XIAO: Gran Potencia, Placa Pequeña

<div align="center" class="all_container">
    <div align="left" class="xiao_topic_page_pic">
        <img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:300, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"4"}><strong>Dominando Arduino y TinyML</strong></font>
        <br /><font size={"3"}><strong>AUTOR</strong></font>
        <font size={"2"}>Lei Feng, Marcelo Rovai</font>
        <br /><font size={"3"}><strong>PUBLICADO</strong></font>
        <font size={"2"}>8 de diciembre, 2023</font>
        <br /><font size={"3"}><strong>Sincero Agradecimiento</strong></font>
        <font size={"2"}>Jiamou Yang, Yanming Wen, Mengdu Li, Chunchun Tian, Haixu Liu, Tianrui Wang, y Jianjing Huang</font>
    </div>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ Comprar el Kit</font></span></strong></a></div>

## Introducción

La serie Seeed Studio XIAO representa una evolución revolucionaria en el ecosistema Arduino, fusionando compacidad con rendimiento potente. Comprender y aprovechar sus capacidades es esencial para cualquier entusiasta o profesional en electrónica y aprendizaje automático. Con el rápido progreso de la tecnología y la creciente demanda de dispositivos más pequeños y eficientes, dominar XIAO y su integración con TinyML es crucial. Presenta una nueva frontera para la innovación, permitiendo la creación de proyectos sofisticados en espacios previamente considerados imposibles. Este tema es primordial ya que se alinea con la trayectoria futura de la electrónica, IoT y aprendizaje automático, haciéndolo indispensable para aquellos que buscan mantenerse a la vanguardia de los avances tecnológicos.

## Lista de Partes en el Kit

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/seeed_studio_xiao_starter_kit_-_all_seeed_studio_xiao_series_deve_after_1_.jpg" style={{width:500, height:'auto'}}/></div>

## Acerca de este Libro

### Audiencia

La audiencia principal para "XIAO: Gran Potencia, Placa Pequeña" abarca aficionados, estudiantes, educadores y profesionales en electrónica y aprendizaje automático que desean explorar y maximizar el potencial de las plataformas de hardware compactas. Típicamente, estos lectores podrían ocupar posiciones como entusiastas de la electrónica, creadores de proyectos DIY, educadores de electrónica, o incluso desarrolladores junior de sistemas embebidos. A medida que avanzan en sus carreras, podrían estar considerando roles como ingenieros de diseño electrónico, desarrolladores de IoT, o integradores de hardware de aprendizaje automático.

Nuestra audiencia posee un entendimiento básico de conceptos de electrónica pero puede que aún no haya profundizado en la programación de Arduino o el diseño de hardware compacto. Probablemente han encontrado libros estándar para principiantes sobre Arduino o electrónica general pero podrían no haber incursionado en hardware especializado o TinyML. En cuanto a habilidades, tienen algo de experiencia práctica con electrónica básica o programación pero no han dominado las complejidades de TinyML o funcionalidades avanzadas de microcontroladores.

### Lo que los lectores aprenderán

Al final de este libro, el lector comprenderá:

- Los fundamentos del hardware de código abierto, enfocándose en las capacidades de la serie Seeed Studio XIAO.
- Cómo hacer la transición de proyectos electrónicos básicos a avanzados, comenzando con controles simples de LED y avanzando a aplicaciones complejas como telemetría y detección de palabras clave por voz.
- Los conceptos detrás del diseño de prototipos y sus implicaciones prácticas en el desarrollo de productos.

- Las complejidades de integrar varios módulos como el receptor infrarrojo, sensor de distancia ultrasónico y reloj RTC con la plataforma XIAO.

- La importancia y aplicación del Aprendizaje Automático Diminuto (TinyML), enfatizando su poder transformador en hardware como el XIAO nRF52840 Sense y ESP32S3 Sense.

- Técnicas para utilizar herramientas avanzadas como Edge Impulse Studio para aplicaciones del mundo real como detección de anomalías y objetos, y clasificación de video o sonido.

El lector será capaz de:

- Configurar, programar y solucionar problemas de proyectos en todas las placas de la serie XIAO, avanzando desde interacciones básicas de hardware hasta diseños de proyectos complejos.

- Convertir ideas abstractas en prototipos tangibles de productos electrónicos, aprovechando las perspectivas del curso.

- Diseñar e implementar proyectos de nivel intermedio como un Reloj Inteligente y Piano de Aire usando sensores y módulos especializados.

- Aprovechar el poder de los protocolos Wi-Fi y MQTT con XIAO ESP32C3 para comunicaciones en la nube e intercambio de datos.

- Desplegar TinyML en diferentes placas XIAO, ejecutando tareas como clasificación de imágenes, movimiento y sonido además de detección de anomalías y objetos.

- Innovar y extender ideas de proyectos, inspirándose en una colección curada de proyectos XIAO y adaptándolos para necesidades personalizadas.

## Esquema del libro

### [Capítulo 1: Introducción al hardware y la programación](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_1.html)

En este capítulo, los lectores comienzan con programación básica en XIAO usando Arduino IDE. A través de programas de ejemplo simples, aprenderán a controlar luces LED, botones, zumbadores y otros componentes electrónicos, dominando conceptos básicos de programación como E/S digital, E/S analógica, generación de tonos y mapeo de valores. Al escribir manualmente los ejemplos de código línea por línea, desarrollarán hábitos sólidos de codificación y comprenderán la sintaxis de programación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_1-6/chapter_1-6_7.jpg" style={{width:500, height:'auto'}}/></div>

### [Capítulo 2: Práctica de proyectos para principiantes - Introducción al diseño de prototipos](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_2.html)

En este capítulo, los lectores aprenderán los fundamentos del diseño de prototipos con XIAO a través de proyectos amigables para principiantes. Comenzarán desde una idea y crearán rápidamente un prototipo de verificación, enfocándose más en la aplicación práctica del código que en el análisis línea por línea. Al aprovechar las librerías de Arduino, recursos de la comunidad y programas de ejemplo, aprenderán cómo encontrar y adaptar fragmentos de código para lograr efectos deseados de manera eficiente. Además, explorarán cómo diseñar la apariencia física de los prototipos combinando creativamente hardware electrónico con objetos cotidianos. Los resultados clave son comprender un enfoque basado en proyectos y desarrollar habilidades para construir prototipos interactivos simples.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_2-2/chapter_2-2_15.jpg" style={{width:500, height:'auto'}}/></div>

### [Capítulo 3: Práctica de proyectos intermedios—Proyectos complejos](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_3.html)

En este capítulo, los lectores avanzarán sus habilidades de prototipado creando proyectos IoT sofisticados con XIAO. Implementarán características como conectividad Wi-Fi, telemetría MQTT y comandos de control remoto usando el XIAO ESP32C3. A través de construcciones complejas como una puerta remota inteligente, smartwatch y piano de aire, perfeccionarán técnicas de programación para comunicación inalámbrica, integración en la nube y control embebido. Se proporcionarán planos opcionales, pero se alienta a los lectores a explorar diseños creativos de carcasas con materiales alternativos. Los resultados clave son dominar el prototipado IoT intermedio y prepararse para aplicaciones avanzadas de tinyML.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_3-2/chapter_3-2_12.jpg" style={{width:500, height:'auto'}}/></div>

### [Capítulo 4: Práctica de proyectos avanzados - Aplicación tinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_4.html)

Entre los productos de la serie XIAO, el Seeed Studio XIAO nRF52840 Sense tiene conectividad inalámbrica Bluetooth 5.0, bajo consumo de energía, y viene con sensores IMU de 6 ejes y micrófono PDM integrados. El XIAO ESP32S3 Sense integra además una cámara, micrófono digital y soporte para tarjeta SD. Estas características los convierten en herramientas poderosas para proyectos de TinyML (Aprendizaje Automático Embebido). TinyML resuelve problemas de una manera completamente diferente a los métodos de programación tradicionales. Este capítulo introducirá a los lectores a este campo de vanguardia guiándolos a través de todo el flujo de trabajo de aprendizaje automático desde la recolección de datos, entrenamiento y pruebas hasta el despliegue e inferencia usando la herramienta Edge Impulse Studio.

<div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1654543/bugs-inference_fXpzxJOZRj.png?auto=compress%2Cformat&w=1280&h=960&fit=max" style={{width:500, height:'auto'}}/></div>

### [Capítulo 5: Experimentos creativos](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_5.html)

Desde su lanzamiento, la serie Seeed Studio XIAO ha sido ampliamente aclamada por su tamaño compacto, rendimiento poderoso y gama versátil de productos. La comunidad maker ha producido una gran cantidad de proyectos creados con XIAO. Debido a limitaciones de espacio, hemos seleccionado algunos proyectos destacados hechos con XIAO por nuestros makers. Estos proyectos demuestran completamente las funciones poderosas y aplicaciones amplias de XIAO. Sigamos los pasos de los makers, estimulemos la creatividad y exploremos las posibilidades infinitas de XIAO. Los lectores pueden obtener inspiración de estos proyectos, usar la imaginación y explorar nuevos territorios con XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_5-1/chapter_5-1_7.jpg" style={{width:500, height:'auto'}}/></div>

<!-- The courses contain 4 Units and 16 lessons to help you quickly get started with development boards and then you can proceed to realize little and individual fun projects. -->

<!-- <table align="center">
 <tr>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
 <tr>
     <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit.jpg" alt="pir" width="600" height="auto"/>
  </td>
     <td align="left"><strong> Prefacio</strong>: Este curso no requiere conocimientos de programación de Arduino o electrónica. El curso te llevará paso a paso para entender y aprender estos conocimientos necesarios, y practicar rápidamente en cada proyecto.       <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Preface.pdf">Prefacio ></a></td>
 </tr>
 <tr>
     <td ><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokitss.png" alt="pir" width="250" height="auto"/></td>
     <td align="left"><strong>Unidad 1 Introducción al Hardware y Programación </strong>: En el proceso de aprendizaje, tratamos de asegurar que el código del programa de cada tarea sea escrito por nosotros mismos, formar un buen hábito, y evitar el fallo de subida del programa debido a algunos errores de símbolos o reglas desconocidas. <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-1.zip">  Introducción ></a></td>
 </tr>
 <tr>
     <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit1.png" alt="pir" width="500" height="auto" alt="pir" width="500" height="auto"/></td>
     <td align="left"><strong>Unidad 2 Práctica de Proyectos</strong>:En esta unidad, tomaremos varios proyectos clásicos como ejemplos para llevar a cabo la práctica de proyectos y aprender cómo crear un prototipo que pueda ser verificado rápidamente a partir de una idea. En esta unidad, no analizaremos el código línea por línea, sino que solo explicaremos los pasos clave.  <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-2.zip">Práctica de Proyectos ></a></td>
 </tr>
 <tr>
     <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit2.png" alt="pir" width="500" height="auto"/></td>
     <td align="left"><strong>Unidad 3 Proyectos Avanzados</strong>: En esta unidad, practicaremos proyectos más complejos y completos. El efecto de la implementación del programa y la estructura de diseño están más dirigidos al producto terminado. <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-3.zip">Proyectos Avanzados ></a></td>
 </tr>
 <tr>
     <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit3.png" alt="pir" width="500" height="auto"/></td>
     <td align="left"><strong>Unidad 4 Proyecto Autodesarrollado</strong>: En esta unidad, practicaremos lo que hemos aprendido, comenzando desde la transformación del trabajo, y luego trabajando juntos para completar un trabajo prototipo desde 0, que será presentado en una conferencia de prensa.    <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-4.zip">Proyecto Autodesarrollado ></a></td>
 </tr>
     <tr>
     <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit4.png" alt="pir" width="500" height="auto"/></td>
     <td align="left"><strong>Epílogo</strong>: Recursos, descargas, enlaces e instrucciones relacionadas con esta lección. <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Aferword.pdf">Epílogo ></a></td>
 </tr>
</table> -->

<!-- ## Resources

- **[PDF]**[Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf)
- **[DXF]**[XIAO_ADR](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_ADR.dxf)
- **[DXF]**[XIAO_Air_Piano](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_Air_Piano.dxf)
- **[DXF]**[XIAO_X_watch](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_X_watch.dxf) -->

## Referencias

### Cursos en Línea

- [Harvard School of Engineering and Applied Sciences - CS249r: Tiny Machine Learning](https://sites.google.com/g.harvard.edu/tinyml/home)
- [Professional Certificate in Tiny Machine Learning (TinyML) -- edX/Harvard](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning)
- [Introduction to Embedded Machine Learning - Coursera/Edge Impulse](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
- [Computer Vision with Embedded Machine Learning - Coursera/Edge Impulse](https://www.coursera.org/learn/computer-vision-with-embedded-machine-learning)
- [UNIFEI-IESTI01 TinyML: "Machine Learning for Embedding Devices"](https://github.com/Mjrovai/UNIFEI-IESTI01-TinyML-2023.1)

### Libros

- ["Python for Data Analysis by Wes McKinney"](https://wesmckinney.com/book/)
- ["Deep Learning with Python" by François Chollet](https://www.manning.com/books/deep-learning-with-python) - [GitHub Notebooks](https://github.com/fchollet/deep-learning-with-python-notebooks)
- ["TinyML" by Pete Warden, Daniel Situnayake](https://www.oreilly.com/library/view/tinyml/9781492052036/)
- ["TinyML Cookbook" by Gian Marco Iodice](https://github.com/PacktPublishing/TinyML-Cookbook)
- ["Technical Strategy for AI Engineers, In the Era of Deep Learning" by Andrew Ng](https://github.com/ajaymache/machine-learning-yearning/blob/master/full%20book/machine-learning-yearning.pdf)
- ["AI at the Edge" book by Daniel Situnayake, Jenny Plunkett](https://www.oreilly.com/library/view/ai-at-the/9781098120191/)
- ["MACHINE LEARNING SYSTEMS for TinyML" Collaborative effort](https://harvard-edge.github.io/cs249r_book/)

### Repositorio de Proyectos

- [Edge Impulse Expert Network](https://docs.edgeimpulse.com/experts/)

## Acerca de los autores

**Lei Feng** es el líder del grupo de soporte técnico y currículo de productos en Seeed Studio. Un autor experimentado en los campos del hardware de código abierto y la computación en el borde, ha publicado varios libros en China, incluyendo "GameGo Beginner Programming Course for Arcade 《做游戏，玩编程------零基础开发微软 Arcade 掌机游戏》," "Grove Beginner Kit For Arduino - Codecraft Graphical Programming Course 《Arduino 图形化编程轻松学》", y la traducción al chino de "IoT for Beginners 《深入浅出 IoT：完整项目通关实战》" con el apoyo de Microsoft China.

Lei Feng ha creado numerosos tutoriales y documentación de código abierto en chino e inglés con su equipo. Su experiencia práctica desarrollando proyectos de IoT y computación en el borde le brinda perspectivas únicas para simplificar conceptos complejos para principiantes. Como escritor atractivo y maestro paciente, Lei Feng es la guía ideal para hacer que Arduino y TinyML sean accesibles para recién llegados en todo el mundo.

*Perfil de LinkedIn:* [*https://www.linkedin.com/in/leon-feng-a029bb1/*](https://www.linkedin.com/in/leon-feng-a029bb1/)

**Marcelo Rovai** es una figura reconocida en la educación de ingeniería y tecnología, ostentando el título de Profesor Honoris Causa de la Universidad Federal de Itajubá, Brasil. Su formación educativa incluye un título de Ingeniería de UNIFEI y una especialización avanzada de la Escuela Politécnica de la Universidad de São Paulo. Mejorando aún más su experiencia, obtuvo un MBA de IBMEC (INSPER) y una Maestría en Ciencia de Datos de la Universidad del Desarrollo en Chile.

Con una carrera que abarca varias empresas de tecnología de alto perfil como AVIBRAS Airspace, ATT, NCR e IGT, donde se desempeñó como Vicepresidente para América Latina, aporta una gran riqueza de experiencia industrial a sus esfuerzos académicos. Es un escritor prolífico sobre temas relacionados con la electrónica y comparte su conocimiento a través de plataformas abiertas como Hackster.io.

Además de sus actividades profesionales, se dedica al alcance educativo, sirviendo como profesor voluntario en UNIFEI y participando con el grupo TinyML4D como Co-Presidente, promoviendo la educación de TinyML en países en desarrollo. Su trabajo subraya un compromiso con el aprovechamiento de la tecnología para el avance social.

*Perfil de LinkedIn:* [*https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/*](https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/)

*Usuario de Twitter:* *\@mjrovai*

*Muestras de conferencias públicas del autor (YouTube, etc.):* [*https://www.youtube.com/watch?v=KeXlAazzgKw*](https://www.youtube.com/watch?v=KeXlAazzgKw)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

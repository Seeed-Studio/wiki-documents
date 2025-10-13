---
description: Qué es TinyML
title: Qué es TinyML
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# ¿Qué es TinyML?

ML como podrías haber adivinado significa Machine Learning (Aprendizaje Automático) y en la mayoría de los casos (aunque no siempre) hoy en día se refiere a Deep Learning (Aprendizaje Profundo). Tiny en TinyML significa que los modelos de ML están optimizados para ejecutarse en dispositivos de muy bajo consumo energético y pequeña huella, como varios MCUs. Es un subconjunto de ML en el Edge o Aprendizaje Automático Embebido.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

Los dispositivos embebidos vienen en todo tipo de formas y tamaños, desde la "supercomputadora embebida" Nvidia Jetson Xavier AGX hasta los microcontroladores más pequeños, por ejemplo ESP32 o Cortex M0.

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

¿Por qué el ML embebido en microcontroladores se coloca en una categoría especial e incluso se le da su propio nombre genial?

Porque viene con su propio conjunto de ventajas y limitaciones. La atracción de TinyML es de hecho que los MCUs son ubicuos, pequeños, consumen pequeñas cantidades de energía y son comparativamente baratos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

Toma el ARM Cortex M0+ y la pequeña placa [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) que está construida alrededor de él – la placa es tan pequeña como un pulgar (21×17.8mm), consume solo 1.33 mAh de energía (lo que significa que puede funcionar ~112 horas con una batería de 150 mA, mucho más si se pone en sueño profundo) y cuesta tan poco como 4.3 USD.

Gracias a las mejoras recientes en optimización de modelos y la aparición de frameworks específicamente creados para ejecutar inferencia de modelos de aprendizaje automático en microcontroladores, se ha vuelto posible dar más inteligencia a estos dispositivos diminutos. Ahora podemos desplegar redes neuronales en microcontroladores para reconocimiento de escenas de audio (por ejemplo actividad de elefantes o sonido de vidrio rompiéndose), detección de palabras clave (para activar dispositivo con una frase específica) o incluso para tareas simples de reconocimiento de imágenes. Los dispositivos con microcontroladores embebidos pueden usarse para dar nueva vida y significado a sensores antiguos, como usar un acelerómetro instalado en un mecanismo para detección de anomalías y mantenimiento predictivo – ¡o para distinguir varios tipos de licores como en [esta demostración](https://wiki.seeedstudio.com/es/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)!
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
Las posibilidades de TinyML son verdaderamente enormes.
<br />

¿Qué hay de las limitaciones? El principal factor limitante es el tamaño de RAM/FLASH de los MCUs – sin importar qué tan bien optimices, no podrías hacer caber [ese YOLO9999](https://arxiv.org/abs/1612.08242) en un microcontrolador diminuto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

Lo mismo ocurre con el reconocimiento automático de voz – mientras que la detección simple de palabras clave (o detección de comandos de voz) es posible, el reconocimiento de voz de dominio abierto está fuera del alcance de los MCUs. Por ahora.

El equipo EDU de Seeed ha creado un curso definitivo paso a paso sobre cómo comenzar con TinyML usando Wio Terminal.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Puedes descargar el curso en formato PDF y materiales del curso haciendo clic en los enlaces de abajo. Adicionalmente, puedes encontrar proyectos independientes publicados previamente en el blog de Seeed studio y el sitio Hackster.io - tanto los proyectos en el curso como los proyectos independientes hacen uso del IDE de Arduino para programar los dispositivos y una mezcla de Edge Impulse y Tensorflow Lite para Microcontroladores para entrenamiento de modelos e inferencia.

:::note
La principal diferencia entre el curso y los proyectos independientes es que el curso principalmente tiene como objetivo ser usado por profesores STEM como base para el desarrollo de sus propios materiales de enseñanza o como material de lección listo para usar, mientras que los proyectos independientes son para makers y hackers para explorar y mejorar en ellos.
:::

[Edge Impulse](https://www.edgeimpulse.com) es una plataforma de desarrollo amigable para el usuario para aprendizaje automático en dispositivos edge, proporcionando una interfaz web amigable para principiantes (pero poderosa) y un conjunto de herramientas para todo el pipeline de TinyML, desde la recolección de datos hasta el despliegue del modelo.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

[Tensorflow Lite para Microcontroladores](https://www.tensorflow.org/lite/microcontrollers/get_started) por otro lado, aunque tiene una curva de aprendizaje más pronunciada, te permite implementar tu propio pipeline de entrenamiento de modelos e inferencia.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## Curso de TinyML con Wio Terminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### Descargar PDF

[PDF del curso de TinyML con Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### Descargar materiales del curso

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### Repositorio de Github con materiales del curso

[Github del curso de TinyML con Wio Terminal](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## Programación Sin Código para Comenzar con TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

Diseñado para introducir a los principiantes a los conceptos básicos del Aprendizaje Automático Embebido con Wio Terminal y la programación gráfica Codecraft.

##### Descargar PDF

[PDF del curso de Programación Sin Código para Comenzar con TinyML](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

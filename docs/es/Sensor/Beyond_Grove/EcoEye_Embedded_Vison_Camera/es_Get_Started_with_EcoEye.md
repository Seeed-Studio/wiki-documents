---
description: Get_Started_with_EcoEye–Embedded_Vision_Camera
title: Comenzar con EcoEye–Cámara de Visión Embebida
keywords:
- EcoEye–Embedded_Vision_Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_EcoEye_Embedded_Vision_Camera
last_update:
  date: 11/24/2023
  author: Yvonne
---


# Introducción a EcoEye–Cámara de Visión Embebida

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"/></div>

EcoEye es una cámara con capacidades de visión artificial integradas encapsulada en una carcasa portátil e impermeable diseñada para despliegues remotos. Basada en la openMV H7 Plus Cam, es fácil de configurar y flexible para numerosas aplicaciones. El sistema interno de gestión de energía y control permite operación a largo plazo y permite la integración de panel solar, innumerables sensores y otros dispositivos externos. La cámara está completamente probada en campo, y los resultados publicados en un artículo científico.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Comenzando

Antes de comenzar esta guía y para mantenerla simple, por favor familiarízate con el hardware y software del ecoEye descrito en la [Guía del Usuario](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf).

### Preparando el Hardware

Abre la cámara ecoEye e inserta 3 baterías de iones de litio 18650 igualmente cargadas con la misma capacidad en el compartimento designado mientras respetas las marcas de polaridad. En la placa openMV, instala una tarjeta micro-SD formateada con al menos 8GB de capacidad de almacenamiento.  

### Preparando el Software

Descarga e instala el [openMV IDE](https://openmv.io/pages/download) en tu computadora. Abre el software y conecta el cable USB-A a USB-C entre la computadora y el conector externo en la cámara ecoEye. Después de presionar el botón pulsador una vez, el LED en el lado frontal debería parpadear verde unas pocas veces antes de brillar blanco por medio segundo. Ahora, la computadora debería reconocer la tarjeta del dispositivo y abrir una ventana con el contenido en la tarjeta SD. Ahora puedes copiar todos los archivos de script encontrados [aquí](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip). Al mismo tiempo, un logo USB debería haber aparecido junto al símbolo de enchufe en la esquina inferior izquierda de la interfaz del IDE. Haz clic en este botón para establecer la conexión con la cámara. Si se te solicita actualizar el firmware, haz clic en sí y sigue los pasos para hacerlo.  

Abre el código ecomain.py y ejecútalo presionando el botón verde de reproducción en la esquina inferior izquierda. A veces ocurrirá un OSError. Solo ignóralo e inténtalo de nuevo. La cámara ahora está ejecutándose en modo continuo sin guardar ninguna imagen pero mostrándolas en el buffer de marco del IDE. Al cambiar el parámetro MODE a 2 y ejecutar el script de nuevo, la cámara guardará todas las imágenes capturadas.

Para permitir que la cámara funcione sin necesariamente estar conectada a la computadora y al IDE, el script ecomain.py con parámetros ajustados para lograr la aplicación deseada debe ser renombrado como main.py, aún ubicado en la raíz de la tarjeta SD. Esto también se puede hacer navegando a Tools > Save open script to OpenMV Cam (as main.py) en las pestañas del openMV IDE mientras aún está conectado con la cámara.

Cuando se inicia un despliegue sin conexión al IDE, el usuario debe presionar el botón pulsador una vez para encender el sistema, y una vez más cuando el LED frontal brilla azul para confirmar el inicio de una ejecución. De manera similar, para detener un despliegue y apagar el sistema, el usuario debe presionar el botón pulsador una primera vez y luego otra vez cuando el LED azul claro se enciende (lo que puede tomar unos segundos). Una presión larga en el botón pulsador forzará el apagado del sistema pero no se recomienda si no es necesario.

### Crea tu primera aplicación de detección de objetos

Para esta guía paso a paso, recopilaremos datos usando la cámara ecoEye, entrenaremos un modelo identificando manualmente objetos en el conjunto de datos usando edge impulse, y finalmente ejecutaremos el modelo creado en la cámara mientras observamos los resultados.

#### Recopilando datos

Coloca la cámara frente a una superficie plana monocolor como una pared, una pizarra blanca o incluso mirando hacia abajo sobre la mesa. Conéctala al IDE y ejecuta MODE 0 para ver las imágenes capturadas. Si es necesario, reposiciona la cámara para que no aparezcan objetos extraños frente al fondo. Mientras observas la imagen en vivo en el buffer de marco, ajusta cuidadosamente el enfoque girando la lente. Una vez encontrado el enfoque perfecto, detén el script y reúne 2 o 3 tipos diferentes de objetos que te gustaría clasificar.
Ahora, cambia el parámetro MODE a 2 y ejecuta el script de nuevo. Las imágenes mostradas en el buffer de marco también se guardan en la tarjeta SD. Mientras dejas el script ejecutándose, coloca los objetos frente a la cámara en diferentes posiciones, lugares y en diferentes combinaciones. Una vez reunidas alrededor de 100 buenas imágenes, detén el script y reinicia la openMV cam (en Tools > Reset) para ver la carpeta con todas las imágenes guardadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png" alt="pir" width={800} height="auto" /></p>

#### Entrenando el modelo

Después de seleccionar aproximadamente 100 imágenes para el modelo, inicia sesión en tu cuenta de [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again) y crea un nuevo proyecto. En Adquisición de Datos del menú izquierdo, sube las imágenes seleccionadas como un conjunto de datos. Ahora, cada imagen individual en los conjuntos de datos de entrenamiento y prueba debe ser etiquetada manualmente haciendo clic en los tres puntos junto a la imagen y seleccionando Editar etiquetas. Asegúrate de usar siempre los mismos nombres para cada tipo de objeto, lo cual se puede verificar con el botón de filtro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png" alt="pir" width={800} height="auto" /></p>

A continuación, navega a Crear impulso en el menú izquierdo. Añade un bloque de procesamiento tipo Imagen y un bloque de aprendizaje tipo Detección de Objetos (Imágenes) y guarda el impulso. Después de eso, las etiquetas Imágenes y Detección de objetos en gris deberían haber aparecido en el menú izquierdo bajo Diseño de Impulso. En la nueva pestaña Imágenes, deja todo como está, simplemente haz clic en los botones Guardar parámetros y Generar características. Una vez que este proceso esté terminado, el modelo puede ser entrenado en la pestaña Detección de objetos dejando los parámetros por defecto por ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png" alt="pir" width={800} height="auto" /></p>

Para probar el rendimiento del nuevo modelo, ve a la pestaña Prueba del modelo en el Menú izquierdo y haz clic en Clasificar todo. Esto ejecutará el modelo de detección de objetos en el conjunto de datos de prueba que fue etiquetado al principio pero no se usó para entrenamiento y por lo tanto es desconocido para el modelo. Una vez terminado, el resultado mostrará la precisión del modelo y los objetos clasificados incorrectamente. Si la puntuación final no es satisfactoria, el conjunto de datos de imágenes puede mejorarse, o los parámetros de entrenamiento pueden ajustarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png" alt="pir" width={800} height="auto" /></p>

Para exportar el modelo para la cámara ecoEye, navega a la pestaña Despliegue en el menú izquierdo. Busca y selecciona la Biblioteca openMV antes de hacer clic en Construir. Del archivo zip descargado automáticamente, extrae los archivos y copia los archivos labels.txt y trained.tflite a la tarjeta SD.

#### Ejecutando el modelo

Ahora podemos ejecutar la cámara con clasificación automática de objetos usando el modelo entrenado. En el archivo ecomain.py, cambia los parámetros MODE = 1, sensor_windowing = True, classify_mode = "objects" e indicators = True. Ejecuta el script prestando atención a presionar el botón pulsador cuando el LED azul se encienda o la terminal serie imprima 'Esperando segunda pulsación del botón...'. El búfer de fotogramas debería mostrar ahora las imágenes capturadas con cajas delimitadoras alrededor de un objeto cada vez que el modelo detecte uno de los objetos en los que fue entrenado. Estas imágenes también se guardan en la tarjeta SD y las detecciones con las coordenadas de las cajas delimitadoras se guardan en un archivo csv.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png" alt="pir" width={800} height="auto" /></p>

Esta aplicación también puede ejecutarse sin conexión al IDE simplemente renombrando el ecomain.py a main.py, desconectando el cable e iniciando el script con el procedimiento de dos pulsaciones del botón.

## Recursos

- **[PDF]** [EcoEye – Hoja de datos de la cámara de visión embebida](https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf)
- **[PDF]** [EcoEye – Manual de usuario de la cámara de visión embebida](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf)

- **[CÓDIGO]** [EcoEye – Manual de usuario de la cámara de visión embebida](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este artículo destaca el rendimiento superior de IA del reComputer Super comparado con el reComputer Classic, demostrando hasta un aumento de 1.7x en potencia de cómputo de IA con el NVIDIA Jetson Orin NX 16GB. A través de benchmarks prácticos en generación de texto de IA usando el modelo DeepSeek-R1:7B con Ollama, y procesamiento de video de IA usando el modelo de detección de objetos YOLOv11, los resultados muestran que el reComputer Super ofrece velocidades de inferencia significativamente más rápidas y frecuencias de GPU más altas. Notablemente, procesa aproximadamente 2.37 veces más imágenes por segundo que el Classic. El artículo también explica la importancia de evaluar el rendimiento basándose en los FPS reportados por terminal en lugar de los FPS en pantalla, que pueden estar limitados por factores de pantalla y sistema.
title: reComputer Super vs Classic Rendimiento de IA de Nueva Generación en Inferencia Edge
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
createdAt: '2025-09-03'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/es/recomputer_jetson_super_performance/
---


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Introducción

<div style={{ textAlign: "justify" }}>
La Serie reComputer Super potencia el reComputer Classic, ofreciendo hasta un aumento de 1.7x de 157 TOPS en rendimiento de IA. Este wiki compara las diferencias de rendimiento entre el reComputer Super y reComputer Classic en generación de texto de IA y procesamiento de video de IA. Usando el <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">módulo NVIDIA Jetson Orin NX 16GB</a> como plataforma de prueba, demuestra claramente que el reComputer Super ofrece un rendimiento superior comparado con el reComputer Classic.
</div>

## Generación de Texto de IA

<div style={{ textAlign: "justify" }}>
En esta sección, usamos Ollama para cargar el modelo deepseek-r1:7b y comparamos la velocidad de inferencia del modelo en diferentes dispositivos. Es evidente que el reComputer Super tiene una mejora en velocidad de inferencia y frecuencia de GPU respecto al reComputer Classic.
</div>

:::info
Los pasos principales para desplegar este modelo son:

**Paso 1.** Instalar jetson-containers.

**Paso 2.** Entrar al contenedor Docker para ejecutar el servicio Ollama.

**Paso 3.** Descargar el modelo deepseek-r1:7b desde Ollama.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
Para facilitar la demostración, ingresamos "tell me a story." en la terminal y le pedimos a DeepSeek que generara una historia corta para nosotros. Debido a la aleatoriedad de los resultados de generación producidos por el modelo, los resultados que obtenemos generalmente no serán los mismos. Cuando podemos medir el rendimiento de la inferencia del dispositivo basándonos en la velocidad a la que el modelo genera tokens.(Como se demuestra en el video, se utiliza el indicador eval rate)
</div>

:::note
Si también deseas desplegar Ollama en tu dispositivo Jetson, por favor consulta [este tutorial](https://www.jetson-ai-lab.com/tutorial_ollama.html) para aprender cómo desplegarlo rápidamente en Nvidia Jetson.
:::

## Procesamiento de Video con IA

<div style={{ textAlign: "justify" }}>
En esta sección, desplegamos el modelo de detección de objetos YOLOv11 en dos dispositivos y comparamos las diferencias de rendimiento entre ellos al procesar entradas de video. Los resultados indican que el reComputer Super es capaz de procesar aproximadamente 2.37 veces más imágenes por segundo que el reComputer Classic.
</div>

:::info
Consulta [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para desplegar YOLOv11 en tus dispositivos como nosotros.
Los pasos principales para desplegar este modelo son:

**Paso 1.** Clona este [repositorio de GitHub](https://github.com/wang-xinyu/tensorrtx/tree/master).

**Paso 2.** Descarga el archivo de pesos preentrenados yolo11n.pt desde [ultralytics](https://github.com/ultralytics/ultralytics).

**Paso 3.** Sigue [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para compilar el modelo y ejecutar la inferencia.

**Paso 4.** Nos referimos al script yolo11_det_trt.py en [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para ejecutar la inferencia.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Inferencia Yolo en reComputer Classic y reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
El FPS promedio mostrado en la terminal refleja la velocidad de inferencia pura del modelo, indicando directamente la diferencia en la potencia de cálculo de los dispositivos, por lo que el reComputer Super muestra un FPS significativamente más alto. Sin embargo, el FPS en tiempo real que se muestra en la esquina superior izquierda de la ventana de visualización representa la velocidad de fotogramas de toda la cadena de procesamiento, incluyendo captura de imagen, preprocesamiento, inferencia, postprocesamiento y visualización. Este FPS se ve afectado por múltiples factores como la tasa de fotogramas de la cámara, la tasa de actualización de la pantalla y los límites de FPS del programa, haciendo que el FPS mostrado en ambos dispositivos sea similar y enmascare la diferencia en el rendimiento de inferencia. Por lo tanto, el rendimiento del dispositivo debe evaluarse en función del FPS promedio de inferencia que se muestra en la terminal y no solo en el FPS en tiempo real mostrado.
:::

## Referencias

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/es/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

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

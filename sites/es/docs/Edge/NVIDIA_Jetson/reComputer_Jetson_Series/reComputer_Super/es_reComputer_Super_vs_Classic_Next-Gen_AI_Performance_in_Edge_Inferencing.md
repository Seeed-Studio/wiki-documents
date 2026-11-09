---
description: "Compara el rendimiento de reComputer Super frente a Classic en Orin NX: velocidades de tokens con llama.cpp, decodificación de video e inferencia con TensorRT en modos de potencia equivalentes."
title: "Rendimiento de IA de próxima generación en inferencia en el borde: reComputer Super vs Classic"
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
createdAt: '2025-06-09'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/es/recomputer_jetson_super_performance/
---


<div align="center">
  <img alt="reComputer board with the fan fitted next to the assembled unit used in this comparison" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Introducción

<div style={{ textAlign: "justify" }}>
La reComputer Super Serie potencia la reComputer Classic, ofreciendo hasta un aumento de 1,7x hasta 157 TOPS en rendimiento de IA. Este wiki compara las diferencias de rendimiento entre reComputer Super y reComputer Classic en generación de texto con IA y procesamiento de video con IA. Usando el <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">módulo NVIDIA Jetson Orin NX 16GB</a> como plataforma de prueba, se demuestra claramente que la reComputer Super ofrece un rendimiento superior en comparación con la reComputer Classic.
</div>

## Generación de texto con IA

<div style={{ textAlign: "justify" }}>
En esta sección, usamos Ollama para cargar el modelo deepseek-r1:7b y comparamos la velocidad de inferencia del modelo en diferentes dispositivos. La reComputer Super muestra una mejora en la velocidad de inferencia y en la frecuencia de reloj de la GPU frente a la reComputer Classic.
</div>

:::info
Los pasos principales para desplegar este modelo son:

**Paso 1.** Instalar jetson-containers.

**Paso 2.** Entrar en el contenedor Docker para ejecutar el servicio Ollama.

**Paso 3.** Descargar el modelo deepseek-r1:7b desde Ollama.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
Para facilitar la demostración, introducimos "tell me a story." en el terminal y le pedimos a DeepSeek que generara una historia corta para nosotros. Debido a la aleatoriedad de los resultados de generación producidos por el modelo, los resultados que obtenemos generalmente no serán los mismos. Podemos medir el rendimiento de la inferencia del dispositivo en función de la velocidad a la que el modelo genera tokens. (Como se muestra en el video, se utiliza el indicador eval rate)
</div>

:::note
Si también quieres desplegar Ollama en tu dispositivo Jetson, consulta [este tutorial](https://www.jetson-ai-lab.com/tutorial_ollama.html) para aprender cómo desplegarlo rápidamente en Nvidia Jetson.
:::

## Procesamiento de video con IA

<div style={{ textAlign: "justify" }}>
En esta sección, desplegamos el modelo de detección de objetos YOLOv11 en dos dispositivos y comparamos las diferencias de rendimiento entre ellos al procesar entradas de video. Los resultados indican que la reComputer Super es capaz de procesar aproximadamente 2,37 veces más imágenes por segundo que la reComputer Classic.
</div>

:::info
Consulta [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para poder desplegar YOLOv11 en tus dispositivos como nosotros.
Los pasos principales para desplegar este modelo son:

**Paso 1.** Clonar este [repositorio de GitHub](https://github.com/wang-xinyu/tensorrtx/tree/master).

**Paso 2.** Descargar el archivo de pesos preentrenados yolo11n.pt desde [ultralytics](https://github.com/ultralytics/ultralytics).

**Paso 3.** Seguir [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para compilar el modelo y ejecutar la inferencia.

**Paso 4.** Nos basamos en el script yolo11_det_trt.py de [este repositorio](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para ejecutar la inferencia.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
El FPS promedio que se muestra en el terminal refleja la velocidad de inferencia pura del modelo, indicando directamente la diferencia en la capacidad de cómputo del dispositivo, por lo que la reComputer Super muestra un FPS significativamente mayor. Sin embargo, el FPS en tiempo real que se muestra en la esquina superior izquierda de la ventana de visualización representa la tasa de fotogramas de toda la canalización de procesamiento, incluyendo captura de imagen, preprocesamiento, inferencia, posprocesamiento y visualización. Este FPS se ve afectado por múltiples factores como la tasa de fotogramas de la cámara, la frecuencia de actualización de la pantalla y los límites de tasa de fotogramas del programa, lo que hace que el FPS mostrado en ambos dispositivos sea similar y oculte la diferencia en el rendimiento de inferencia. Por lo tanto, el rendimiento del dispositivo debe evaluarse en función del FPS promedio de inferencia que se muestra en el terminal en lugar de basarse únicamente en el FPS mostrado en tiempo real.
:::

## Referencias

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/es/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## Recursos relacionados

- [Uso del hardware e interfaces de reComputer Super](/es/recomputer_jetson_super_hardware_interfaces_usage/)
- [Instalar PyTorch para reComputer Jetson](/es/install_torch_on_recomputer/)
- [Acelerar llama.cpp en Jetson con MTP](/es/jetson/accelerate_llm_inference_mtp/)
- [Página de producto de reComputer Super](https://www.seeedstudio.com/reComputer-Super-p-6617.html)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

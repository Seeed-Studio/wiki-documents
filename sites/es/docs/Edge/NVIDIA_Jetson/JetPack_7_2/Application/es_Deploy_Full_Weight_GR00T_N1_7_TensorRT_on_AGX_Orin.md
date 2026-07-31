---
description: Guía de aplicación planificada de JetPack 7.2 para ejecutar el checkpoint completo NVIDIA GR00T N1.7 con una canalización de inferencia basada en TensorRT en Jetson AGX Orin.
title: Desplegar GR00T N1.7 de peso completo con TensorRT en JetPack 7.2 y Jetson AGX Orin
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://github.com/NVIDIA/Isaac-GR00T/raw/main/media/model-architecture.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# Desplegar GR00T N1.7 de peso completo con TensorRT en JetPack 7.2 y Jetson AGX Orin

:::info Aplicación planificada
Esta página reserva la entrada de aplicación de JetPack 7.2 para un despliegue completo de GR00T N1.7 con TensorRT en Jetson AGX Orin. Se añadirán comandos, artefactos de motor, resultados de benchmarks y pasos de validación en robot después de que la implementación se reproduzca de extremo a extremo.
:::

## Objetivo del proyecto

Ejecutar el **checkpoint completo GR00T N1.7** en **Jetson AGX Orin** con **JetPack 7.2** y una canalización de inferencia basada en TensorRT. La guía final documentará los límites de conversión del modelo, las precisiones compatibles, los plugins de TensorRT, el proceso de construcción del motor, la integración en tiempo de ejecución y la validación del control del robot.

Este trabajo está intencionadamente separado del [despliegue de GR00T N1.7 en Jetson Thor](/es/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/) existente. Jetson AGX Orin tiene una arquitectura de GPU, matriz de precisión, límite de memoria y perfil de rendimiento diferentes, por lo que los motores de Thor y las optimizaciones específicas de Thor no pueden reutilizarse directamente.

## Entorno objetivo

| Elemento | Objetivo planificado |
| --- | --- |
| Módulo de cómputo | NVIDIA Jetson AGX Orin |
| Software | JetPack 7.2 / Jetson Linux 39.2 |
| Modelo | Checkpoint completo NVIDIA GR00T N1.7 |
| Backend de inferencia | Runtime basado en TensorRT |
| Candidatos iniciales de precisión | FP16 y rutas INT8/INT4 compatibles con Orin |
| Validación | Generación de acciones offline, control de robot en lazo cerrado, mediciones de latencia, memoria, potencia y temperatura |

:::warning
A fecha de 31 de julio de 2026, GR00T N1.7 no aparece en la matriz de modelos compatibles de TensorRT Edge-LLM v0.9.1. Por lo tanto, este proyecto debe tratarse como un esfuerzo de integración nativa con TensorRT y personalización, a menos que más adelante se añada soporte oficial de TensorRT Edge-LLM.
:::

## Por qué JetPack 7.2

La implementación evaluará si JetPack 7.2 elimina los bloqueos encontrados en el intento anterior con JetPack 6.2. La investigación debería medir el efecto de:

- Jetson Linux 39.2 y Ubuntu 24.04
- CUDA 13 y la pila TensorRT de JetPack 7.2
- Jetson AGX Orin 32GB `MAXN_SUPER` donde la configuración de hardware lo admita
- Sobrecarga reducida de memoria del sistema y flujos de trabajo de optimización de memoria de JetPack 7.2
- Exportación de modelo actualizada, grafo de TensorRT y soporte de plugins

El artículo final debe separar las mejoras medidas de las suposiciones y registrar cualquier operador no soportado restante o retrocesos en tiempo de ejecución.

## Etapas de implementación planificadas

### 1. Congelar la línea base reproducible

- Registrar la imagen exacta de JetPack 7.2, la compilación de Jetson Linux, la versión de CUDA, la versión de TensorRT, el modo de potencia, las frecuencias y la disposición del almacenamiento.
- Fijar el commit del repositorio GR00T, la revisión del checkpoint N1.7, el entorno de Python y el entorno de exportación en el host.
- Reproducir la salida de inferencia del framework nativo antes de la conversión a TensorRT.

### 2. Auditar el grafo completo del modelo

- Identificar el codificador de visión, el backbone de lenguaje o razonamiento, los codificadores de estado y propiocepción, el experto de acciones, el bucle de difusión o flow-matching, el tokenizador y las etapas de postprocesado.
- Registrar formas dinámicas, longitudes de secuencia, ventanas de observación, horizontes de acción y estado recurrente.
- Producir un inventario de operadores y aislar operaciones ONNX o TensorRT no soportadas.

### 3. Definir los límites de los motores TensorRT

- Probar una exportación de motor único solo si el grafo y la huella de memoria lo hacen práctico.
- De lo contrario, dividir la canalización en submotores TensorRT estables con traspaso explícito de buffers CUDA.
- Mantener visibles y medibles los retrocesos a CPU o framework; la afirmación final debe indicar qué partes se ejecutan realmente en TensorRT.

### 4. Seleccionar la precisión compatible con Orin

- Establecer una línea base de corrección en FP16.
- Evaluar INT8 o INT4 solo donde la calibración, los kernels y la precisión se validen en Jetson AGX Orin.
- No usar suposiciones de FP8, FP4 o NVFP4 exclusivas de Thor para el despliegue en Orin.
- Comparar la calidad de las acciones y la tasa de éxito en lazo cerrado, no solo el rendimiento del modelo.

### 5. Construir y empaquetar el runtime

- Añadir los plugins de TensorRT necesarios y versionarlos junto con el proyecto.
- Construir los motores en el objetivo JetPack 7.2 o con una cadena de herramientas de destino estrictamente coincidente.
- Añadir preprocesado determinista, ejecución CUDA asíncrona, buffers reutilizables y validación de metadatos del motor.
- Empaquetar archivos de modelo, archivos de motor, datos de calibración, configuración y scripts de lanzamiento en un directorio o contenedor reproducible.

### 6. Validar en el robot

- Validar observaciones offline antes de habilitar comandos de actuadores.
- Añadir límites de comandos, gestión de parada de emergencia, watchdogs y detección de observaciones obsoletas.
- Comparar trayectorias de acciones nativas y con TensorRT usando los mismos episodios grabados.
- Ejecutar pruebas en lazo cerrado con una complejidad de tareas progresivamente mayor.

## Tabla de benchmarks por completar

| Métrica | Intento con JetPack 6.2 | JetPack 7.2 FP16 | JetPack 7.2 optimizado |
| --- | --- | --- | --- |
| Cobertura del modelo en TensorRT | TBD | TBD | TBD |
| Pico de memoria al construir el motor | TBD | TBD | TBD |
| Memoria en tiempo de ejecución | TBD | TBD | TBD |
| Latencia de observación a acción | TBD | TBD | TBD |
| Tasa de generación de acciones | TBD | TBD | TBD |
| Potencia media de la placa | TBD | TBD | TBD |
| Temperatura máxima | TBD | TBD | TBD |
| Éxito de tareas en lazo cerrado | TBD | TBD | TBD |

## Criterios de aceptación

La página puede pasar de planificada a validada cuando todo lo siguiente esté disponible:

- Un entorno de exportación en el host fijado y reproducible
- Comandos de construcción de motores TensorRT para JetPack 7.2 en AGX Orin
- Una lista clara de componentes del modelo que usan TensorRT y que no usan TensorRT
- Inferencia exitosa del checkpoint completo sin eliminar componentes del modelo
- Comparación numérica o de trayectorias entre nativo y TensorRT
- Mediciones de memoria, latencia, rendimiento, potencia y temperatura
- Al menos una tarea de robot en lazo cerrado con controles de seguridad
- Pasos documentados de reversión y resolución de problemas

## Recursos relacionados

- [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/)
- [Desplegar TensorRT Edge-LLM en JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [Ajustar finamente GR00T N1.7 para reBot Arm y desplegar en Jetson Thor](/es/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [Análisis en profundidad de JetPack 7.2](/es/jetpack72_deep_dive/)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

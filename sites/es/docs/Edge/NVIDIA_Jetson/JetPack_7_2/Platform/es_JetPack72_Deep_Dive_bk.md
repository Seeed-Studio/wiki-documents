---
description: Este FAQ explica los cambios clave de JetPack 7.2 para Jetson AGX Orin, resume la comparación de inferencia de JetPack 7.2 y JetPack 6.2 de Seeed, y muestra cómo actualizar con Seeed Jetson DevelopTool.
title: Análisis profundo de JetPack 7.2
keywords:
  - Jetson
  - JetPack 7.2
  - Jetson AGX Orin
  - edge AI
  - large language model
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg
slug: /jetpack72_deep_dive_bk
sku: E26020301
last_update:
  date: 06/11/2026
  author: Dayu
createdAt: '2026-06-11'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/es/jetpack72_deep_dive_bk/
---

# Análisis profundo de JetPack 7.2: ¿Qué cambia para la inferencia en Jetson AGX Orin?

Este FAQ resume por qué JetPack 7.2 es importante para los usuarios de Jetson AGX Orin, qué midió Seeed al comparar JetPack 7.2 con JetPack 6.2 y cómo evaluar una ruta de actualización con Seeed Jetson DevelopTool.

La plataforma de prueba utilizada por Seeed es el reComputer Jetson AGX Orin Developer Kit GMSL Bundle.

<div align="center">
  <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
  </a>
</div>

## FAQ

#### P1: ¿Cuáles son los principales cambios de JetPack 7.2 para los usuarios de Jetson?

JetPack 7.2 hace avanzar la pila de software de Jetson con una base Jetson Linux más reciente, Ubuntu 24.04, CUDA 13, componentes de runtime de IA actualizados y mejoras a nivel de plataforma para la eficiencia de memoria y los flujos de trabajo de IA agentica.

Para los usuarios de Jetson AGX Orin 32GB, uno de los cambios más importantes es el nuevo modo de energía de alto rendimiento utilizado en la prueba de Seeed, que permite que el mismo módulo funcione a una frecuencia de GPU más alta y ofrezca un mayor rendimiento de IA cuando el diseño de potencia y térmico de la placa carrier puede soportarlo.

:::note
Consulta siempre las notas de la versión de NVIDIA y las notas de la versión del BSP de Seeed para conocer las versiones exactas de los componentes compatibles con tu placa carrier e imagen de destino.
:::

#### P2: ¿Qué hardware y software comparó Seeed?

Seeed comparó un AGX Orin 32GB Developer Kit con un reComputer J5011 utilizando los entornos de software JetPack 6.2 y JetPack 7.2 y la misma carga de trabajo de inferencia de large language model.

| Elemento | Prueba con JetPack 6.2 | Prueba con JetPack 7.2 |
| --- | --- | --- |
| Módulo | Jetson AGX Orin 32GB | Jetson AGX Orin 32GB |
| Dispositivo de prueba | AGX Orin 32GB Developer Kit | reComputer J5011 |
| Jetson Linux | L4T 36.4.3 | L4T 39.2 |
| Ubuntu | 22.04 | 24.04 |
| CUDA | 12.6 | 13.x |
| Motor de inferencia | llama.cpp | llama.cpp |
| Modelo | Qwen3.5-27B-Q4_K_M.gguf | Qwen3.5-27B-Q4_K_M.gguf |
| Parámetros principales | `-ngl 999 -fa on -ub 512 -t 12` | `-ngl 999 -fa on -ub 512 -t 12` |

#### P3: ¿Qué mejora de memoria y rendimiento observó Seeed?

En la comparación de Seeed, JetPack 7.2 redujo el uso de memoria después de la carga del modelo y mejoró tanto la velocidad de procesamiento del prompt como la velocidad de generación de tokens.

| Métrica | JetPack 6.2 | JetPack 7.2 | Cambio observado |
| --- | --- | --- | --- |
| Memoria después de cargar el modelo | 24.6 GB / 30 GB | 14.7 GB / 30 GB | Aproximadamente un 40% menos |
| Frecuencia de la GPU durante la inferencia | 930 MHz | 1.36 GHz | Frecuencia de boost más alta |
| Procesamiento del prompt | 18.2 tokens/s | 25.8 tokens/s | Aproximadamente un 41.8% más rápido |
| Generación de tokens | 4.3 tokens/s | 5.5 tokens/s | Aproximadamente un 27.9% más rápido |

El resultado más práctico es el margen de memoria. En la ejecución con JetPack 6.2, el modelo de 27B ocupó la mayor parte de la memoria disponible después de la carga. En la ejecución con JetPack 7.2, el sistema mantuvo aproximadamente 10 GB más de memoria disponible, lo cual es útil al ejecutar preprocesamiento de visión, middleware de robótica u otros servicios junto con la carga de trabajo del LLM.

#### P4: ¿Puedo ver el resultado de la comparación entre JetPack 7.2 y JetPack 6.2?

Sí. El siguiente video muestra el efecto de la comparación.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### P5: ¿Debería actualizar mi dispositivo Jetson a JetPack 7.2?

Utiliza la siguiente tabla como punto de partida:

| Escenario | Recomendación |
| --- | --- |
| Nuevo proyecto con Jetson AGX Orin | Considera comenzar con JetPack 7.2 si el BSP, los controladores y la pila de aplicaciones necesarios están disponibles. |
| Proyecto existente con JetPack 6.x | Valida los módulos del kernel, dependencias de CUDA, motores TensorRT, controladores de cámara y controladores de periféricos antes de la migración. |
| Cargas de trabajo LLM o VLM limitadas por memoria | Vale la pena evaluar JetPack 7.2 porque la reducción de memoria medida puede facilitar la ejecución de modelos más grandes o de canalizaciones con múltiples servicios. |
| Sistema en producción con placa carrier personalizada | No actualices solo ejecutando `apt upgrade`. Utiliza una imagen completa validada o una ruta OTA oficialmente soportada por Seeed. |

:::caution
Los modos de mayor rendimiento incrementan los requisitos de potencia y térmicos. Antes de habilitar un modo de alta potencia, confirma que la placa carrier, el adaptador de corriente, la carcasa y el diseño de disipación de calor pueden sostener la carga de trabajo objetivo.
:::

#### P6: ¿Cómo puedo actualizar a JetPack 7.2 con Seeed Jetson DevelopTool?

Seeed Jetson DevelopTool proporciona un flujo de trabajo guiado para la descarga de firmware de Jetson, flasheo, conexión del dispositivo y operaciones OTA.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/flash-page.png" />
</div>

Para una migración de versión principal como de JetPack 6.x a JetPack 7.x, se recomienda un flasheo completo a menos que Seeed proporcione explícitamente una ruta OTA validada para tu producto exacto y la imagen de origen.

Para el flujo completo de decisión de flasheo y OTA de JetPack 7.2, video de DevelopTool, comandos de verificación y lista de comprobación de migración, consulta [Flash and OTA Upgrade to JetPack 7.2](/es/flash_and_ota_jetpack_7.2/).

Flujo de trabajo general:

1. Instala y abre Seeed Jetson DevelopTool.
2. Selecciona el producto Jetson o el modelo de placa carrier.
3. Selecciona la versión de L4T o JetPack de destino que coincida con JetPack 7.2.
4. Descarga y extrae el paquete BSP desde la herramienta.
5. Pon el dispositivo Jetson en Force Recovery Mode.
6. Detecta el dispositivo desde el PC host.
7. Inicia el flasheo y espera hasta que el dispositivo se reinicie.
8. Completa la configuración del primer arranque y verifica la versión del sistema.

Para más detalles sobre la herramienta, consulta [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool).

#### P7: ¿Qué debo verificar después de actualizar?

Después de flashear o actualizar, verifica los siguientes elementos antes de ejecutar cargas de trabajo en producción:

- Versiones de JetPack, L4T, CUDA, cuDNN y TensorRT.
- Frecuencia de la GPU, modo de energía y comportamiento térmico bajo carga.
- Interfaces de cámara, GMSL, Ethernet, CAN, USB, M.2 y otros periféricos.
- Módulos de kernel personalizados y controladores out-of-tree.
- Compatibilidad del framework de IA, incluyendo PyTorch, motores TensorRT, compilaciones de llama.cpp y extensiones CUDA.
- Pruebas de estrés de larga duración para la estabilidad de potencia y temperatura.

## Recursos

- [reComputer Jetson AGX Orin Developer Kit GMSL Bundle](https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html)
- [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)
- [NVIDIA JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
- [Seeed Jetson Wiki](https://wiki.seeedstudio.com/es/)

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

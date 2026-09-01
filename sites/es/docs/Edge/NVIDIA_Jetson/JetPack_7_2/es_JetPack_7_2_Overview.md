---
description: Un centro de recursos categorizado de JetPack 7.2 para dispositivos NVIDIA Jetson de Seeed Studio, que cubre las nuevas funciones de la plataforma, la guía de migración, flasheo, controladores, herramientas para desarrolladores, inferencia y aplicaciones.
title: Centro de Recursos de JetPack 7.2
keywords:
  - NVIDIA Jetson
  - JetPack 7.2
  - Jetson Linux 39.2
  - Jetson Orin
  - Jetson Thor
  - TensorRT Edge-LLM
image: https://files.seeedstudio.com/wiki/other/jp72-front.png
slug: /jetpack_7_2_resource_hub
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/jetpack_7_2_resource_hub/
---

# Centro de Recursos de JetPack 7.2

![Portada del Centro de Recursos de JetPack 7.2](https://files.seeedstudio.com/wiki/other/jp72-front.png)

Esta página organiza los recursos de JetPack 7.2 actualmente disponibles para los productos NVIDIA Jetson de Seeed Studio. Úsala como punto de partida para comprender la nueva pila de software, seleccionar una imagen compatible, migrar un proyecto existente de JetPack 6.x, restaurar controladores de periféricos y desplegar cargas de trabajo de IA optimizadas.

:::info
JetPack 7.2 utiliza **Jetson Linux 39.2**, un sistema de archivos raíz **Ubuntu 24.04** y **kernel de Linux 6.8**. NVIDIA Jetson Linux 39.2 es compatible con las familias de plataformas **Jetson Orin** y **Jetson Thor**.
:::

## ¿Qué hay de nuevo en JetPack 7.2?

JetPack 7.2 es más que una actualización del sistema operativo. Amplía la arquitectura de software JetPack 7 a Jetson Orin y añade capacidades de plataforma para IA agentica, personalización de Linux para producción, optimización de memoria y una inferencia de borde de mayor rendimiento.

### IA agentica y flujos de trabajo para desarrolladores

- **Preparación para NVIDIA NemoClaw**: JetPack 7.2 proporciona las dependencias de plataforma necesarias para la instalación de NemoClaw con un solo comando y la orquestación de modelos local o en la nube.
- **Habilidades de agente en Jetson**: NVIDIA proporciona flujos de trabajo reutilizables del lado del dispositivo y del lado del BSP para la personalización de Jetson Linux, optimización de memoria, evaluación comparativa de modelos, selección de paquetes y creación de prototipos de aplicaciones.
- **Despliegue nativo en la nube**: La pila JetPack sigue siendo compatible con flujos de trabajo de desarrollo y despliegue en contenedores para servicios en el borde.

### Arquitectura de la plataforma

- **Compatibilidad de Jetson Orin en JetPack 7**: JetPack 7.2 lleva la pila de software JetPack 7 a la familia Jetson Orin y mantiene la compatibilidad con Jetson Thor.
- **Instalación ISO unificada**: Jetson Linux 39.2 introduce una ruta de instalación unificada basada en ISO para los kits de desarrollo Jetson Orin y Jetson Thor compatibles.
- **Alineación con SBSA**: Jetson Thor sigue el modelo de software Server Base System Architecture, mejorando la portabilidad entre plataformas Arm de clase servidor.

### Yocto

- **Compatibilidad oficial con Yocto Project**: Las recetas OpenEmbedded/Yocto validadas por NVIDIA proporcionan una ruta hacia imágenes Linux reproducibles, personalizadas y orientadas a producción.

### Rendimiento, memoria y aislamiento

- **Jetson AGX Orin 32GB Super Mode**: JetPack 7.2 añade el modo de energía `MAXN_SUPER` para configuraciones compatibles de Jetson AGX Orin 32GB.
- **Flujos de trabajo de eficiencia de memoria**: Las habilidades de agente en Jetson pueden auditar y reducir las particiones reservadas del gestor de arranque, las reservas del kernel y el consumo innecesario de memoria en espacio de usuario.
- **GPU Multi-Instance en Jetson Thor**: MIG está disponible como vista previa tecnológica en configuraciones compatibles de Jetson Thor T5000 para la ejecución aislada de múltiples cargas de trabajo.

:::warning
Algunas funciones de JetPack 7.2 son específicas de la plataforma. El comportamiento específico de MIG y SBSA se aplica a Jetson Thor, mientras que `MAXN_SUPER` se aplica a configuraciones compatibles de Jetson AGX Orin 32GB. Confirma el módulo, la placa portadora, el BSP, la fuente de alimentación y el diseño térmico antes de habilitar un nuevo modo de energía o aceleración.
:::

## Línea base de software de JetPack 7.2

| Capa | Línea base de JetPack 7.2 | Impacto en la migración |
| --- | --- | --- |
| Jetson Linux | 39.2 | Reconstruye los módulos de kernel fuera del árbol y las personalizaciones del BSP. |
| Sistema de archivos raíz | Ubuntu 24.04 | Revalida nombres de paquetes, repositorios, entornos de Python y servicios del sistema. |
| Kernel de Linux | 6.8 | Reconstruye los controladores de cámara, Wi‑Fi, bus de campo y periféricos personalizados con los nuevos encabezados. |
| Generación CUDA | CUDA 13 | Reconstruye las aplicaciones CUDA y no reutilices binarios de JetPack 6.x sin validación. |
| Motores TensorRT | Pila TensorRT de JetPack 7.2 | Reconstruye los motores TensorRT serializados en la pila de software de destino. |
| Plataformas compatibles | Jetson Orin y Jetson Thor | Utiliza el BSP correcto, las banderas de la toolchain y la compatibilidad de precisión para la arquitectura GPU de destino. |

## Mapa del ecosistema de JetPack 7.2

Esta colección se limita intencionadamente al material de JetPack 7.2. Los artículos existentes se copian en el árbol `JetPack_7_2` y utilizan un slug `_bk` para que la serie pueda revisarse, actualizarse, traducirse y publicarse de forma independiente de las páginas originales del Wiki.

| Función de JetPack 7.2 | Recurso incluido |
| --- | --- |
| Arquitectura de software unificada para Orin y Thor | [Plataforma unificada, ISO y SBSA](/es/jetpack_7_2_unified_platform_iso_sbsa/) **(planificado)** |
| Migración a Ubuntu 24.04, Linux 6.8 y CUDA 13 | [Análisis detallado de JetPack 7.2](/es/jetpack72_deep_dive_bk/) y [Guía de migración](/es/jetpack_6_to_7_2_migration_playbook/) **(planificado)** |
| IA agentica y habilidades reutilizables de Jetson | [Creación rápida de prototipos con NVIDIA Skills](/es/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) y [NemoClaw en Jetson Thor](/es/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) |
| Yocto | [Compilar y flashear una imagen Yocto](/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |
| Inferencia de mayor rendimiento con TensorRT Edge-LLM | [Desplegar TensorRT Edge-LLM en JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| Menor uso de memoria del sistema y de LLM | [Optimización de memoria en JetPack 7.2](/es/jetpack_7_2_memory_optimization/) |
| DeepStream 9.1 y flujos de trabajo de vídeo en lenguaje natural | [DeepStream en JetPack 7.2](/es/jetpack_7_2_deepstream/) |
| AGX Orin `MAXN_SUPER` y Thor MIG | [MAXN_SUPER y MIG](/es/jetpack_7_2_maxn_super_and_mig/) **(planificado)** |
| Transición de controladores al kernel 6.8 | [Configuración del módulo inalámbrico en JetPack 7.2](/es/jetpack72_ax210_ax200_wifi_setup_guide_bk/) y [Compatibilidad de cámara y multimedia](/es/jetpack_7_2_camera_multimedia_compatibility/) **(planificado)** |

## Flasheo y OTA

| Recurso | Cobertura |
| --- | --- |
| [Análisis detallado de JetPack 7.2](/es/jetpack72_deep_dive_bk/) | Cambios de plataforma, comparación con JetPack 6.2, impacto en la migración y resultados de inferencia en AGX Orin. |
| [Flasheo y actualización OTA a JetPack 7.2](/es/flash_and_ota_jetpack_7.2/) | Flasheo limpio, requisitos de OTA basada en imagen, verificación de versión y elección de despliegue. |
| [Guía de migración de JetPack 6.x a JetPack 7.2](/es/jetpack_6_to_7_2_migration_playbook/) | **Planificado:** copia de seguridad, reconstrucción de dependencias, pruebas de aceptación, reversión y migración de flota. |
| [Plataforma unificada, ISO y SBSA de JetPack 7.2](/es/jetpack_7_2_unified_platform_iso_sbsa/) | **Planificado:** instalación unificada, diferencias entre Orin/Thor y comportamiento SBSA en Thor. |
| [JetPack 7.2 MAXN_SUPER y MIG](/es/jetpack_7_2_maxn_super_and_mig/) | **Planificado:** modo de rendimiento en AGX Orin y aislamiento de cargas de trabajo en Thor. |

## Controladores del kernel 6.8 y multimedia

| Recurso | Cobertura |
| --- | --- |
| [Guía de configuración del módulo inalámbrico en JetPack 7.2](/es/jetpack72_ax210_ax200_wifi_setup_guide_bk/) | Recuperación de controladores y firmware en JetPack 7.2 para Intel AX210/AX200 y Realtek RTL8852BE. |
| [Compatibilidad de cámara y multimedia en JetPack 7.2](/es/jetpack_7_2_camera_multimedia_compatibility/) | **Planificado:** CSI, GMSL, Argus, V4L2, GStreamer, códecs y validación de múltiples cámaras. |

:::warning
Los módulos de kernel, controladores de cámara, binarios de device-tree y motores TensorRT de JetPack 6.x no deben reutilizarse directamente en JetPack 7.2. Reconstrúyelos sobre la pila de software Jetson Linux 39.2.
:::

## IA agentica y habilidades de Jetson

JetPack 7.2 amplía el flujo de trabajo del desarrollador de Jetson más allá de la configuración manual al convertir las habilidades de agente reutilizables y las aplicaciones agenticas locales en partes de primera clase del ecosistema.

| Recurso | Rol en el ecosistema |
| --- | --- |
| [Creación rápida de prototipos en Jetson con NVIDIA Skills](/es/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) | Inspección del dispositivo, comprobaciones de compatibilidad, análisis de memoria, preparación del entorno, construcción de prototipos y empaquetado. |
| [Controlar el brazo reBot B601 con NemoClaw en Jetson Thor](/es/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) | Percepción local, razonamiento con LLM, ejecución de herramientas, gestión de servicios y control de IA física en la plataforma JetPack 7. |

## Eficiencia de memoria

| Recurso | Cobertura |
| --- | --- |
| [Optimización de memoria en JetPack 7.2](/es/jetpack_7_2_memory_optimization/) | Auditoría basada en habilidades, recuperación de BSP sin pantalla/sin cámara, seguridad SWIOTLB, cuantización, control de caché KV e inferencia LLM con menor memoria. |
| [Análisis detallado de la optimización de memoria en JetPack 7.2](/es/jetpack_7_2_memory_optimization_deep_dive/) | Línea base de la plataforma frente a JetPack 6.2, presupuesto de memoria para LLM (pesos, tiempo de ejecución, caché KV), la ruta de optimización de cuatro capas y observaciones reproducibles en campo. |

## Yocto

| Recurso | Rol en el ecosistema |
| --- | --- |
| [Compilar y flashear una imagen Yocto para reComputer Super](/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | Construcción reproducible de imágenes OpenEmbedded/Yocto para un despliegue de Jetson Linux orientado a producción. |

## Despliegue de IA y aplicaciones

| Recurso | Cobertura |
| --- | --- |
| [Desplegar TensorRT Edge-LLM en JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/) | Exportación de modelos en JetPack 7.2, objetivos de compilación para Orin/Thor, generación de motores e inferencia en C++. |
| [Supervisión de visión industrial en JetPack 7.2](/es/industrial_vision_monitoring_on_industrial_bk/) | Supervisión con YOLO y VLM verificada en reComputer Industrial y reServer Industrial con L4T 39.2. |
| [DeepStream en JetPack 7.2](/es/jetpack_7_2_deepstream/) | Instalación de DeepStream 9.1, habilidades agenticas, creación de canalizaciones en lenguaje natural, integración de VLM, migración y planificación de memoria. |
| [Desplegar GR00T N1.7 completo en JetPack 7.2 y AGX Orin](/es/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | Despliegue validado de TensorRT con siete motores, verificación numérica, inferencia sin conexión y configuración de rutas portables para AGX Orin. |

Los motores serializados y los plugins personalizados de TensorRT deben reconstruirse en la pila de software JetPack 7.2 de destino.

## Cobertura aún reservada

| Función de JetPack 7.2 | Página reservada |
| --- | --- |
| Migración completa desde JetPack 6.x y reversión | [Guía de migración](/es/jetpack_6_to_7_2_migration_playbook/) |
| ISO unificada, división Orin/Thor y SBSA | [Plataforma unificada, ISO y SBSA](/es/jetpack_7_2_unified_platform_iso_sbsa/) |
| `MAXN_SUPER`, MIG y aislamiento de rendimiento | [MAXN_SUPER y MIG](/es/jetpack_7_2_maxn_super_and_mig/) |
| CSI/GMSL y multimedia acelerada | [Compatibilidad de cámara y multimedia](/es/jetpack_7_2_camera_multimedia_compatibility/) |

## Orden de migración recomendado

1. Confirma que el producto Seeed de destino tenga un BSP o una imagen JetPack 7.2.
2. Haz una copia de seguridad de los datos de la aplicación, archivos de calibración, volúmenes de contenedores y fuentes personalizadas de device-tree.
3. Flashea JetPack 7.2 y valida el arranque, el almacenamiento, la red y el modo de recuperación.
4. Restaura los controladores fuera del árbol para Wi‑Fi, cámara, CAN, EtherCAT u otros con compilaciones de JetPack 7.2.
5. Reconstruye las aplicaciones CUDA, los plugins de TensorRT y los motores de TensorRT.
6. Valida la aplicación en el modo de energía original antes de habilitar `MAXN_SUPER` u otros modos de rendimiento.
7. Registra el uso de memoria, la temperatura, el consumo de energía, la latencia y el rendimiento antes de poner el dispositivo en producción.

## Referencias oficiales de NVIDIA

- [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack)
- [Notas de la versión de Jetson Linux 39.2](https://docs.nvidia.com/jetson/archives/r39.2/ReleaseNotes/Jetson_Linux_Release_Notes_r39.2.pdf)
- [Guía para desarrolladores de Jetson Linux 39.2](https://docs.nvidia.com/jetson/archives/r39.2/DeveloperGuide/index.html)
- [Documentación de TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/)
- [Modelos compatibles con TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Guía reservada para migrar implementaciones de Seeed Studio Jetson de JetPack 6.x a JetPack 7.2.
title: Guía de migración de JetPack 6.x a JetPack 7.2
keywords:
  - JetPack 7.2
  - migración
  - Jetson Orin
slug: /jetpack_6_to_7_2_migration_playbook
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/jetpack_6_to_7_2_migration_playbook/
---

# Guía de migración de JetPack 6.x a JetPack 7.2

:::info Contenido planificado
Esta página está reservada para un procedimiento de migración validado de extremo a extremo. Hasta que se complete, utiliza el [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/) y el [Análisis detallado de JetPack 7.2](/es/jetpack72_deep_dive/) para planificar una actualización.
:::

La guía planificada cubrirá:

- copia de seguridad de aplicaciones, contenedores, modelos, calibraciones y datos de usuario;
- inventario de dependencias y módulos de kernel de JetPack 6.x;
- selección entre flasheo limpio y OTA basado en imagen;
- comprobaciones de compatibilidad de Ubuntu 24.04, CUDA 13, TensorRT, Python y ROS;
- reconstrucción de kernels personalizados, árboles de dispositivo, controladores, plugins y motores de TensorRT;
- criterios de reversión y pruebas de aceptación posteriores a la actualización.

No trates este marcador de posición como un procedimiento de migración validado.

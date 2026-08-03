---
description: Guía reservada de compatibilidad de cámara JetPack 7.2, GMSL, CSI, multimedia y vídeo acelerado para dispositivos Jetson de Seeed Studio.
title: Compatibilidad de cámara y multimedia en JetPack 7.2
keywords:
  - JetPack 7.2
  - cámara
  - GMSL
  - multimedia
slug: /jetpack_7_2_camera_multimedia_compatibility
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# Compatibilidad de cámara y multimedia en JetPack 7.2

:::info Contenido planificado
Esta página está reservada para flujos de trabajo de cámara y multimedia validados específicamente en JetPack 7.2. Los artículos de cámara existentes se recopilan en el [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/) como referencias de migración hasta que se complete la validación.
:::

La guía de compatibilidad planificada incluirá:

- Compatibilidad de cámaras CSI y GMSL por placa carrier de Seeed;
- Pasos para superposiciones de device-tree y recompilación de controladores de cámara out-of-tree;
- Validación de Argus, V4L2, GStreamer, códecs y vídeo acelerado;
- Comprobaciones de ancho de banda y sincronización para múltiples cámaras;
- Cambios conocidos de API y de canalización de JetPack 6.x a 7.2.

No reutilices módulos de kernel de cámara de JetPack 6.x en JetPack 7.2.

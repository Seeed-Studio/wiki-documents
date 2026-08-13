---
description: Guía reservada para JetPack 7.2 MAXN_SUPER en Jetson AGX Orin 32GB y Multi-Instance GPU en Jetson Thor.
title: JetPack 7.2 MAXN_SUPER y MIG
keywords:
  - JetPack 7.2
  - MAXN_SUPER
  - MIG
  - Jetson AGX Orin
  - Jetson Thor
slug: /jetpack_7_2_maxn_super_and_mig
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# JetPack 7.2 MAXN_SUPER y MIG

:::info Contenido planificado
Esta página está reservada para dos capacidades específicas de la plataforma JetPack 7.2: `MAXN_SUPER` en configuraciones compatibles de Jetson AGX Orin 32GB y Multi-Instance GPU en configuraciones compatibles de Jetson Thor.
:::

La guía planificada incluirá:

- módulos compatibles, carrier boards, fuentes de alimentación y requisitos térmicos;
- habilitación, verificación, benchmarking y reversión de `MAXN_SUPER`;
- creación de particiones MIG, asignación de cargas de trabajo, monitorización y desmontaje en Thor;
- metodología de comparación de memoria, potencia, térmicas, latencia y rendimiento;
- límites de seguridad en producción y advertencias sobre configuraciones no compatibles.

No habilites un nuevo modo de potencia ni un esquema de particionado de GPU antes de confirmar la matriz completa de compatibilidad de hardware y BSP.

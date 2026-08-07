---
description: Guia reservado de compatibilidade de câmera, GMSL, CSI, multimídia e vídeo acelerado para dispositivos Jetson da Seeed Studio no JetPack 7.2.
title: Compatibilidade de Câmera e Multimídia no JetPack 7.2
keywords:
  - JetPack 7.2
  - câmera
  - GMSL
  - multimídia
slug: /jetpack_7_2_camera_multimedia_compatibility
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# Compatibilidade de Câmera e Multimídia no JetPack 7.2

:::info Conteúdo planejado
Esta página é reservada para fluxos de trabalho de câmera e multimídia validados especificamente no JetPack 7.2. Os artigos de câmera existentes estão reunidos no [JetPack 7.2 Resource Hub](/pt-br/jetpack_7_2_resource_hub/) como referências de migração até que a validação seja concluída.
:::

O guia de compatibilidade planejado incluirá:

- suporte a câmeras CSI e GMSL por placa carrier da Seeed;
- etapas para overlay de device-tree e recompilação de driver de câmera out-of-tree;
- validação de Argus, V4L2, GStreamer, codec e vídeo acelerado;
- verificações de largura de banda e sincronização para múltiplas câmeras;
- alterações conhecidas de API e pipeline do JetPack 6.x para 7.2.

Não reutilize módulos de kernel de câmera do JetPack 6.x no JetPack 7.2.

---
description: Guia reservado para JetPack 7.2 MAXN_SUPER no Jetson AGX Orin 32GB e Multi-Instance GPU no Jetson Thor.
title: JetPack 7.2 MAXN_SUPER e MIG
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
url: https://wiki.seeedstudio.com/pt-br/jetpack_7_2_maxn_super_and_mig/
---

# JetPack 7.2 MAXN_SUPER e MIG

:::info Conteúdo planejado
Esta página é reservada para duas funcionalidades específicas de plataforma do JetPack 7.2: `MAXN_SUPER` em configurações compatíveis do Jetson AGX Orin 32GB e Multi-Instance GPU em configurações compatíveis do Jetson Thor.
:::

O guia planejado incluirá:

- módulos compatíveis, placas carrier, fontes de alimentação e requisitos térmicos;
- habilitação, confirmação, benchmarking e reversão de `MAXN_SUPER`;
- criação de partições MIG, alocação de cargas de trabalho, monitoramento e desmontagem no Thor;
- metodologia de comparação de memória, energia, térmica, latência e throughput;
- limites de segurança para produção e avisos sobre configurações não suportadas.

Não habilite um novo modo de energia ou esquema de particionamento de GPU antes de confirmar a matriz completa de suporte de hardware e BSP.

---
description: Guia reservado para migrar implantações Jetson da Seeed Studio de JetPack 6.x para JetPack 7.2.
title: Playbook de Migração de JetPack 6.x para JetPack 7.2
keywords:
  - JetPack 7.2
  - migração
  - Jetson Orin
slug: /jetpack_6_to_7_2_migration_playbook
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/jetpack_6_to_7_2_migration_playbook/
---

# Playbook de Migração de JetPack 6.x para JetPack 7.2

:::info Conteúdo planejado
Esta página está reservada para um procedimento de migração validado de ponta a ponta. Até que ele seja concluído, use o [JetPack 7.2 Resource Hub](/pt-br/jetpack_7_2_resource_hub/) e o [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive/) para planejar uma atualização.
:::

O guia planejado irá abranger:

- backup de aplicativos, contêineres, modelos, calibração e dados do usuário;
- inventário de dependências e módulos de kernel do JetPack 6.x;
- seleção entre gravação limpa e OTA baseada em imagem;
- verificações de compatibilidade com Ubuntu 24.04, CUDA 13, TensorRT, Python e ROS;
- reconstrução de kernels personalizados, device trees, drivers, plugins e mecanismos TensorRT;
- critérios de rollback e testes de aceitação pós-atualização.

Não trate este placeholder como um procedimento de migração validado.

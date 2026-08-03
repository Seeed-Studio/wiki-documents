---
description: Um hub de recursos categorizado do JetPack 7.2 para dispositivos NVIDIA Jetson da Seeed Studio, cobrindo novos recursos da plataforma, orientação de migração, gravação de imagem, drivers, ferramentas de desenvolvimento, inferência e aplicações.
title: Hub de Recursos do JetPack 7.2
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
url: https://wiki.seeedstudio.com/pt-br/jetpack_7_2_resource_hub/
---

# Hub de Recursos do JetPack 7.2

![Capa do Hub de Recursos do JetPack 7.2](https://files.seeedstudio.com/wiki/other/jp72-front.png)

Esta página organiza os recursos do JetPack 7.2 atualmente disponíveis para produtos NVIDIA Jetson da Seeed Studio. Use-a como ponto de partida para entender a nova pilha de software, selecionar uma imagem compatível, migrar um projeto existente do JetPack 6.x, restaurar drivers de periféricos e implantar cargas de trabalho de IA otimizadas.

:::info
JetPack 7.2 usa **Jetson Linux 39.2**, um sistema de arquivos raiz **Ubuntu 24.04** e **kernel Linux 6.8**. O NVIDIA Jetson Linux 39.2 oferece suporte às famílias de plataformas **Jetson Orin** e **Jetson Thor**.
:::

## O que há de novo no JetPack 7.2?

JetPack 7.2 é mais do que uma atualização de sistema operacional. Ele estende a arquitetura de software JetPack 7 para o Jetson Orin e adiciona recursos de plataforma para IA agentic, personalização de Linux para produção, otimização de memória e inferência de borda de maior desempenho.

### IA agentic e fluxos de trabalho de desenvolvimento

- **Pronto para NVIDIA NemoClaw**: o JetPack 7.2 fornece as dependências de plataforma necessárias para instalação do NemoClaw com um único comando e orquestração de modelos local ou em nuvem.
- **Habilidades de agente Jetson**: a NVIDIA fornece fluxos de trabalho reutilizáveis no lado do dispositivo e do BSP para personalização do Jetson Linux, otimização de memória, benchmarking de modelos, seleção de pacotes e prototipagem de aplicações.
- **Implantação nativa em nuvem**: a pilha JetPack continua a oferecer suporte a fluxos de trabalho de desenvolvimento e implantação conteinerizados para serviços de borda.

### Arquitetura de plataforma

- **Suporte ao Jetson Orin no JetPack 7**: o JetPack 7.2 traz a pilha de software JetPack 7 para a família Jetson Orin, mantendo o suporte ao Jetson Thor.
- **Instalação unificada via ISO**: o Jetson Linux 39.2 introduz um caminho de instalação unificado baseado em ISO para kits de desenvolvimento Jetson Orin e Jetson Thor compatíveis.
- **Alinhamento com SBSA**: o Jetson Thor segue o modelo de software Server Base System Architecture, melhorando a portabilidade entre plataformas Arm de classe servidor.

### Yocto

- **Suporte oficial ao Yocto Project**: receitas OpenEmbedded/Yocto validadas pela NVIDIA fornecem um caminho para imagens Linux reproduzíveis, personalizadas e orientadas à produção.

### Desempenho, memória e isolamento

- **Jetson AGX Orin 32GB Super Mode**: o JetPack 7.2 adiciona o modo de energia `MAXN_SUPER` para configurações compatíveis do Jetson AGX Orin 32GB.
- **Fluxos de trabalho de eficiência de memória**: as habilidades de agente Jetson podem auditar e reduzir partições reservadas do bootloader, reservas do kernel e consumo desnecessário de memória em espaço de usuário.
- **GPU Multi-Instance no Jetson Thor**: MIG está disponível como prévia de tecnologia em configurações Jetson Thor T5000 compatíveis para execução isolada de múltiplas cargas de trabalho.

:::warning
Alguns recursos do JetPack 7.2 são específicos da plataforma. O comportamento específico de MIG e SBSA se aplica ao Jetson Thor, enquanto `MAXN_SUPER` se aplica a configurações compatíveis do Jetson AGX Orin 32GB. Confirme o módulo, a placa carrier, o BSP, a fonte de alimentação e o projeto térmico antes de habilitar um novo modo de energia ou aceleração.
:::

## Linha de base de software do JetPack 7.2

| Camada | Linha de base do JetPack 7.2 | Impacto na migração |
| --- | --- | --- |
| Jetson Linux | 39.2 | Reconstrua módulos de kernel out-of-tree e personalizações de BSP. |
| Sistema de arquivos raiz | Ubuntu 24.04 | Revalide nomes de pacotes, repositórios, ambientes Python e serviços de sistema. |
| Kernel Linux | 6.8 | Reconstrua drivers de câmera, Wi-Fi, fieldbus e periféricos personalizados com os novos cabeçalhos. |
| Geração CUDA | CUDA 13 | Reconstrua aplicações CUDA e não reutilize binários do JetPack 6.x sem validação. |
| Engines TensorRT | Pilha TensorRT do JetPack 7.2 | Reconstrua engines TensorRT serializadas na pilha de software de destino. |
| Plataformas compatíveis | Jetson Orin e Jetson Thor | Use o BSP correto, flags de toolchain e suporte de precisão para a arquitetura de GPU de destino. |

## Mapa do ecossistema do JetPack 7.2

Esta coleção é intencionalmente limitada ao material do JetPack 7.2. Artigos existentes são copiados para a árvore `JetPack_7_2` e usam um slug `_bk` para que a série possa ser revisada, atualizada, traduzida e lançada de forma independente das páginas originais do Wiki.

| Recurso do JetPack 7.2 | Recurso incluído |
| --- | --- |
| Arquitetura de software unificada Orin e Thor | [Plataforma Unificada, ISO e SBSA](/pt-br/jetpack_7_2_unified_platform_iso_sbsa/) **(planejado)** |
| Migração para Ubuntu 24.04, Linux 6.8 e CUDA 13 | [Análise Detalhada do JetPack 7.2](/pt-br/jetpack72_deep_dive_bk/) e [Guia de Migração](/pt-br/jetpack_6_to_7_2_migration_playbook/) **(planejado)** |
| IA agentic e habilidades Jetson reutilizáveis | [Prototipagem Rápida com Habilidades NVIDIA](/pt-br/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) e [NemoClaw no Jetson Thor](/pt-br/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) |
| Yocto | [Construir e Gravar uma Imagem Yocto](/pt-br/build_and_flash_yocto_for_recomputer_super_bk/) |
| Inferência de maior desempenho com TensorRT Edge-LLM | [Implantar TensorRT Edge-LLM no JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| Menor uso de memória do sistema e de LLM | [Otimização de Memória do JetPack 7.2](/pt-br/jetpack_7_2_memory_optimization/) |
| DeepStream 9.1 e fluxos de trabalho de vídeo em linguagem natural | [DeepStream no JetPack 7.2](/pt-br/jetpack_7_2_deepstream/) |
| AGX Orin `MAXN_SUPER` e Thor MIG | [MAXN_SUPER e MIG](/pt-br/jetpack_7_2_maxn_super_and_mig/) **(planejado)** |
| Transição de drivers para o kernel 6.8 | [Configuração de Módulo Sem Fio no JetPack 7.2](/pt-br/jetpack72_ax210_ax200_wifi_setup_guide_bk/) e [Compatibilidade de Câmera e Multimídia](/pt-br/jetpack_7_2_camera_multimedia_compatibility/) **(planejado)** |

## Gravação de imagem & OTA

| Recurso | Cobertura |
| --- | --- |
| [Análise Detalhada do JetPack 7.2](/pt-br/jetpack72_deep_dive_bk/) | Mudanças de plataforma, comparação com JetPack 6.2, impacto na migração e resultados de inferência no AGX Orin. |
| [Gravação de Imagem e Atualização OTA para JetPack 7.2](/pt-br/flash_and_ota_jetpack_7.2/) | Gravação limpa, requisitos de OTA baseada em imagem, verificação de versão e escolha de implantação. |
| [Guia de Migração do JetPack 6.x para JetPack 7.2](/pt-br/jetpack_6_to_7_2_migration_playbook/) | **Planejado:** backup, reconstrução de dependências, testes de aceitação, rollback e migração de frota. |
| [Plataforma Unificada, ISO e SBSA do JetPack 7.2](/pt-br/jetpack_7_2_unified_platform_iso_sbsa/) | **Planejado:** instalação unificada, diferenças entre Orin/Thor e comportamento SBSA do Thor. |
| [JetPack 7.2 MAXN_SUPER e MIG](/pt-br/jetpack_7_2_maxn_super_and_mig/) | **Planejado:** modo de desempenho do AGX Orin e isolamento de cargas de trabalho no Thor. |

## Drivers do kernel 6.8 e multimídia

| Recurso | Cobertura |
| --- | --- |
| [Guia de Configuração de Módulo Sem Fio no JetPack 7.2](/pt-br/jetpack72_ax210_ax200_wifi_setup_guide_bk/) | Recuperação de driver e firmware no JetPack 7.2 para Intel AX210/AX200 e Realtek RTL8852BE. |
| [Compatibilidade de Câmera e Multimídia no JetPack 7.2](/pt-br/jetpack_7_2_camera_multimedia_compatibility/) | **Planejado:** CSI, GMSL, Argus, V4L2, GStreamer, codecs e validação de múltiplas câmeras. |

:::warning
Módulos de kernel, drivers de câmera, binários de device-tree e engines TensorRT do JetPack 6.x não devem ser reutilizados diretamente no JetPack 7.2. Reconstrua-os na pilha de software Jetson Linux 39.2.
:::

## IA agentic e habilidades Jetson

O JetPack 7.2 expande o fluxo de trabalho do desenvolvedor Jetson além da configuração manual, tornando habilidades de agente reutilizáveis e aplicações agentic locais partes de primeira classe do ecossistema.

| Recurso | Papel no ecossistema |
| --- | --- |
| [Prototipagem Rápida no Jetson com Habilidades NVIDIA](/pt-br/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) | Inspeção do dispositivo, verificações de compatibilidade, análise de memória, preparação de ambiente, construção de protótipo e empacotamento. |
| [Controlar o reBot Arm B601 com NemoClaw no Jetson Thor](/pt-br/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) | Percepção local, raciocínio com LLM, execução de ferramentas, gerenciamento de serviços e controle de IA física na plataforma JetPack 7. |

## Eficiência de memória

| Recurso | Cobertura |
| --- | --- |
| [Otimização de Memória do JetPack 7.2](/pt-br/jetpack_7_2_memory_optimization/) | Auditoria baseada em habilidades, recuperação de BSP headless/sem câmera, segurança SWIOTLB, quantização, controle de KV-cache e inferência de LLM com menor memória. |

## Yocto

| Recurso | Papel no ecossistema |
| --- | --- |
| [Construir e Gravar uma Imagem Yocto para reComputer Super](/pt-br/build_and_flash_yocto_for_recomputer_super_bk/) | Construção de imagem OpenEmbedded/Yocto reproduzível para uma implantação Jetson Linux orientada à produção. |

## CUDA 13, TensorRT e IA de borda

| Recurso | Cobertura |
| --- | --- |
| [Implantar TensorRT Edge-LLM no JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) | Exportação de modelos no JetPack 7.2, alvos de build Orin/Thor, geração de engine e inferência em C++. |
| [Monitoramento de Visão Industrial no JetPack 7.2](/pt-br/industrial_vision_monitoring_on_industrial_bk/) | Monitoramento com YOLO e VLM verificado no reComputer Industrial e reServer Industrial com L4T 39.2. |
| [DeepStream no JetPack 7.2](/pt-br/jetpack_7_2_deepstream/) | Instalação do DeepStream 9.1, habilidades agentic, criação de pipelines em linguagem natural, integração com VLM, migração e planejamento de memória. |
| [Implantar GR00T N1.7 Completo no JetPack 7.2 e AGX Orin](/pt-br/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | **Planejado:** implantação TensorRT de checkpoint completo para IA Física no AGX Orin. |

Engines serializadas e plugins TensorRT personalizados devem ser reconstruídos na pilha de software JetPack 7.2 de destino.

## Cobertura ainda reservada

| Recurso do JetPack 7.2 | Página reservada |
| --- | --- |
| Migração completa do JetPack 6.x e rollback | [Guia de Migração](/pt-br/jetpack_6_to_7_2_migration_playbook/) |
| ISO unificada, divisão Orin/Thor e SBSA | [Plataforma Unificada, ISO e SBSA](/pt-br/jetpack_7_2_unified_platform_iso_sbsa/) |
| `MAXN_SUPER`, MIG e isolamento de desempenho | [MAXN_SUPER e MIG](/pt-br/jetpack_7_2_maxn_super_and_mig/) |
| CSI/GMSL e multimídia acelerada | [Compatibilidade de Câmera e Multimídia](/pt-br/jetpack_7_2_camera_multimedia_compatibility/) |

## Ordem de migração recomendada

1. Confirme se o produto Seeed de destino possui um BSP ou imagem JetPack 7.2.
2. Faça backup de dados de aplicação, arquivos de calibração, volumes de contêiner e fontes de device-tree personalizados.
3. Grave o JetPack 7.2 e valide boot, armazenamento, rede e modo de recuperação.
4. Restaure drivers out-of-tree de Wi-Fi, câmera, CAN, EtherCAT ou outros com builds para JetPack 7.2.
5. Reconstrua aplicações CUDA, plugins TensorRT e engines TensorRT.
6. Valide a aplicação no modo de energia original antes de habilitar `MAXN_SUPER` ou outros modos de desempenho.
7. Registre uso de memória, térmica, consumo de energia, latência e throughput antes de colocar o dispositivo em produção.

## Referências oficiais da NVIDIA

- [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack)
- [Notas de lançamento do Jetson Linux 39.2](https://docs.nvidia.com/jetson/archives/r39.2/ReleaseNotes/Jetson_Linux_Release_Notes_r39.2.pdf)
- [Guia do desenvolvedor do Jetson Linux 39.2](https://docs.nvidia.com/jetson/archives/r39.2/DeveloperGuide/index.html)
- [Documentação do TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/)
- [Modelos compatíveis com TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

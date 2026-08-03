---
description: Guia de aplicação planejado do JetPack 7.2 para executar o checkpoint completo NVIDIA GR00T N1.7 com um pipeline de inferência baseado em TensorRT no Jetson AGX Orin.
title: Implantar GR00T N1.7 Full-Weight com TensorRT no JetPack 7.2 e Jetson AGX Orin
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
url: https://wiki.seeedstudio.com/pt-br/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# Implantar GR00T N1.7 Full-Weight com TensorRT no JetPack 7.2 e Jetson AGX Orin

:::info Aplicação planejada
Esta página reserva a entrada de aplicação do JetPack 7.2 para uma implantação completa do GR00T N1.7 com TensorRT no Jetson AGX Orin. Comandos, artefatos de engine, resultados de benchmark e etapas de validação em robôs serão adicionados depois que a implementação for reproduzida de ponta a ponta.
:::

## Objetivo do projeto

Executar o **checkpoint completo GR00T N1.7** no **Jetson AGX Orin** com **JetPack 7.2** e um pipeline de inferência baseado em TensorRT. O guia final documentará os limites de conversão do modelo, precisões suportadas, plugins TensorRT, processo de construção da engine, integração em tempo de execução e validação do controle do robô.

Este trabalho é intencionalmente separado da [implantação existente do GR00T N1.7 no Jetson Thor](/pt-br/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/). O Jetson AGX Orin possui uma arquitetura de GPU, matriz de precisão, limite de memória e perfil de desempenho diferentes, portanto as engines do Thor e otimizações específicas do Thor não podem ser reutilizadas diretamente.

## Ambiente alvo

| Item | Alvo planejado |
| --- | --- |
| Módulo de computação | NVIDIA Jetson AGX Orin |
| Software | JetPack 7.2 / Jetson Linux 39.2 |
| Modelo | Checkpoint completo NVIDIA GR00T N1.7 |
| Backend de inferência | Runtime baseado em TensorRT |
| Candidatos iniciais de precisão | FP16 e caminhos INT8/INT4 suportados pelo Orin |
| Validação | Geração de ações offline, controle de robô em malha fechada, medições de latência, memória, energia e temperatura |

:::warning
Em 31 de julho de 2026, o GR00T N1.7 não está listado na matriz de modelos suportados do TensorRT Edge-LLM v0.9.1. Portanto, este projeto deve ser tratado como um esforço de integração nativa com TensorRT e integração personalizada, a menos que o suporte oficial do TensorRT Edge-LLM seja adicionado posteriormente.
:::

## Por que JetPack 7.2

A implementação avaliará se o JetPack 7.2 remove os bloqueios encontrados na tentativa anterior com JetPack 6.2. A investigação deve medir o efeito de:

- Jetson Linux 39.2 e Ubuntu 24.04
- CUDA 13 e a pilha TensorRT do JetPack 7.2
- Jetson AGX Orin 32GB `MAXN_SUPER` onde a configuração de hardware o suportar
- Sobrecarga reduzida de memória do sistema e fluxos de trabalho de otimização de memória do JetPack 7.2
- Exportação de modelo atualizada, grafo TensorRT e suporte a plugins

O artigo final deve separar melhorias medidas de suposições e registrar quaisquer operadores ainda não suportados ou fallbacks em tempo de execução.

## Etapas de implementação planejadas

### 1. Congelar a linha de base reproduzível

- Registrar a imagem exata do JetPack 7.2, build do Jetson Linux, versão do CUDA, versão do TensorRT, modo de energia, clocks e layout de armazenamento.
- Fixar o commit do repositório GR00T, revisão do checkpoint N1.7, ambiente Python e ambiente de exportação no host.
- Reproduzir a saída de inferência do framework nativo antes da conversão para TensorRT.

### 2. Auditar o grafo completo do modelo

- Identificar o codificador de visão, backbone de linguagem ou raciocínio, codificadores de estado e propriocepção, especialista de ação, loop de difusão ou flow-matching, tokenizador e estágios de pós-processamento.
- Registrar formas dinâmicas, comprimentos de sequência, janelas de observação, horizontes de ação e estado recorrente.
- Produzir um inventário de operadores e isolar operações ONNX ou TensorRT não suportadas.

### 3. Definir os limites das engines TensorRT

- Testar uma exportação de engine única apenas se o grafo e a pegada de memória a tornarem viável.
- Caso contrário, dividir o pipeline em sub-engines TensorRT estáveis com repasse explícito de buffers CUDA.
- Manter fallbacks em CPU ou framework visíveis e mensuráveis; a conclusão final deve declarar quais partes realmente são executadas em TensorRT.

### 4. Selecionar a precisão compatível com o Orin

- Estabelecer uma linha de base de correção em FP16.
- Avaliar INT8 ou INT4 apenas onde calibração, kernels e precisão forem validados no Jetson AGX Orin.
- Não usar suposições de FP8, FP4 ou NVFP4 exclusivas do Thor para a implantação no Orin.
- Comparar qualidade das ações e taxa de sucesso em malha fechada, não apenas throughput do modelo.

### 5. Construir e empacotar o runtime

- Adicionar os plugins TensorRT necessários e versioná-los com o projeto.
- Construir as engines no alvo JetPack 7.2 ou com uma toolchain de destino estritamente correspondente.
- Adicionar pré-processamento determinístico, execução CUDA assíncrona, buffers reutilizáveis e validação de metadados da engine.
- Empacotar arquivos de modelo, arquivos de engine, dados de calibração, configuração e scripts de inicialização em um diretório ou contêiner reproduzível.

### 6. Validar no robô

- Validar observações offline antes de habilitar comandos de atuadores.
- Adicionar limites de comando, tratamento de parada de emergência, watchdogs e detecção de observações obsoletas.
- Comparar trajetórias de ação nativas e TensorRT usando os mesmos episódios gravados.
- Executar testes em malha fechada com complexidade de tarefa progressivamente maior.

## Tabela de benchmark a completar

| Métrica | Tentativa com JetPack 6.2 | JetPack 7.2 FP16 | JetPack 7.2 otimizado |
| --- | --- | --- | --- |
| Cobertura do modelo em TensorRT | TBD | TBD | TBD |
| Pico de memória na construção da engine | TBD | TBD | TBD |
| Memória em tempo de execução | TBD | TBD | TBD |
| Latência de observação para ação | TBD | TBD | TBD |
| Taxa de geração de ações | TBD | TBD | TBD |
| Potência média da placa | TBD | TBD | TBD |
| Temperatura de pico | TBD | TBD | TBD |
| Sucesso em tarefas de malha fechada | TBD | TBD | TBD |

## Critérios de aceitação

A página pode passar de planejada para validada depois que todos os itens a seguir estiverem disponíveis:

- Um ambiente de exportação no host fixado e reproduzível
- Comandos de construção de engines TensorRT para JetPack 7.2 no AGX Orin
- Uma lista clara de componentes do modelo em TensorRT e não-TensorRT
- Inferência bem-sucedida com o checkpoint completo sem remover componentes do modelo
- Comparação numérica ou de trajetória entre nativo e TensorRT
- Medições de memória, latência, throughput, energia e temperatura
- Pelo menos uma tarefa de robô em malha fechada com controles de segurança
- Etapas documentadas de rollback e solução de problemas

## Recursos relacionados

- [Hub de recursos do JetPack 7.2](/pt-br/jetpack_7_2_resource_hub/)
- [Implantar TensorRT Edge-LLM no JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [Fine-tune GR00T N1.7 para reBot Arm e implantação no Jetson Thor](/pt-br/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [Análise aprofundada do JetPack 7.2](/pt-br/jetpack72_deep_dive/)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

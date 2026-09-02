---
description: 'Entenda as mudanças de software do JetPack 7.2 que impactam a memória do Jetson: a pilha CUDA e TensorRT, o suporte oficial ao Yocto, técnicas de otimização e um orçamento mensurável de implantação de LLM para o Orin.'
title: 'Otimização de Memória no JetPack 7.2: Avanços de Software e um Orçamento de Implantação de LLM'
keywords:
  - JetPack 7.2
  - otimização de memória
  - TensorRT Edge-LLM
  - cache KV
  - INT4
  - Jetson Orin Nano
  - implantação de LLM
image: https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png
slug: /jetpack_7_2_memory_optimization_deep_dive
last_update:
  date: 08/27/2026
  author: zibo
createdAt: '2026-08-27'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/pt-br/jetpack_7_2_memory_optimization_deep_dive/
---

# Otimização de Memória no JetPack 7.2: Avanços de Software e um Orçamento de Implantação de LLM



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png"/>
</div>


O Jetson usa memória unificada: a CPU, GPU, serviços de sistema, subsistemas de câmera e display, pesos de modelo, runtime de inferência e cache KV compartilham o mesmo DRAM físico. O JetPack 7.2 não adiciona DRAM física a um módulo existente. Em vez disso, ele atualiza a base de software e introduz novas maneiras de construir, reduzir, medir e implantar esse sistema de memória compartilhada.

Como a oferta de DRAM continua limitada e os custos de memória aumentam, migrar imediatamente para um módulo com mais memória não é a única forma de tornar viável um projeto de IA de borda. Uma atualização bem mensurada para o JetPack 7.2 pode liberar memória antes consumida pela plataforma e tornar o orçamento restante mais fácil de controlar. Nesse sentido, ela pode ser uma **atualização de memória via software**: não altera a capacidade física do módulo, mas pode tornar prática uma carga de trabalho de LLM que não cabia em uma implantação equivalente com JetPack 6.2, depois que a imagem do sistema, o runtime, a precisão do modelo e os limites de requisição forem revalidados.

Este artigo se concentra em duas questões para desenvolvedores Jetson Orin: quais atualizações de software do JetPack 7.2 podem melhorar a eficiência de memória e como transformar a memória disponível em um orçamento prático de implantação de LLM. Ele distingue os recursos do JetPack 7.2 das técnicas gerais de TensorRT e LLM, ajudando você a medir cada otimização com precisão.


| **reComputer J3011** | **reComputer Classic J5011** |
| :---: | :---: |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/o/row6-recomputer_j30_.jpg" style={{width:400, height:'auto'}} /> | <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100006184-gallery_img_1.jpg" style={{width:400, height:'auto'}} /> |
| Plataforma Jetson Orin Nano 8GB | Plataforma Jetson AGX Orin 32GB |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora 🖱️</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora 🖱️</font></span></strong>
  </a>
</div>

:::info
**Guia de leitura** 

- Comece com [1. What Is Specific to JetPack 7.2?](#1-o-que-é-específico-do-jetpack-72) para identificar as alavancas específicas da versão 7.2; 
- Use [2. Turning the 7.2 Stack into an LLM Budget](#2-transformando-a-pilha-do-jetpack-72-em-um-orçamento-de-memória-para-llm) para separar pesos, runtime e cache KV; 
- Use [3. Existing JetPack 7.2 Guides](#3-use-esta-análise-detalhada-com-os-guias-existentes-do-jetpack-72) para o fluxo de trabalho operacional correspondente; 
- Leia [4. Field Observations](#4-observações-de-campo-evidências-para-o-jetpack-72-não-afirmações-de-marketing).
:::

O complemento prático deste artigo é o guia [JetPack 7.2 Memory Optimization](/pt-br/jetpack_7_2_memory_optimization/), que transforma os mesmos princípios em um fluxo de trabalho de auditoria e configuração orientado a habilidades.

## 1. O que é específico do JetPack 7.2?

[JetPack 7.2](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2) fornece Jetson Linux 39.2, Ubuntu 24.04, kernel Linux 6.8, CUDA 13.2.1 e TensorRT 10.16.2. O [JetPack 7.2 Resource Hub](/pt-br/jetpack_7_2_resource_hub/) já descreve todo o conjunto de recursos do lançamento; esta seção mantém apenas as capacidades que mudam uma decisão de memória para LLM.

| Capacidade do JetPack 7.2 | Por que ela pertence a este artigo | Guia detalhado |
| --- | --- | --- |
| Pilha atualizada de CUDA e TensorRT | É a base de software para reconstruir e fazer o profiling de mecanismos de inferência suportados. | [Deploy TensorRT Edge-LLM on JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| Habilidades de otimização de memória e benchmarking | Elas fornecem uma forma repetível de medir reservas de plataforma, serviços e pressão de carga de trabalho antes de alterar a configuração. | [JetPack 7.2 Memory Optimization](/pt-br/jetpack_7_2_memory_optimization/) |
| Suporte oficial ao Yocto | Uma equipe de produção pode criar uma imagem sob medida e reprodutível quando a imagem de desenvolvimento Ubuntu inclui softwares desnecessários. | [Build and Flash a Yocto Image](/pt-br/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |

O JetPack 7.2 não adiciona DRAM a um módulo, não reduz automaticamente um modelo nem habilita, por si só, recursos de runtime como reutilização de cache KV. Ele fornece a base de software e as ferramentas a partir das quais essas escolhas podem ser feitas e medidas.

### 1.1 Menor Memória de Boot é Folga Utilizável para LLM

A pegada do sistema na inicialização é a primeira parte do orçamento de LLM. A comparação histórica a seguir do Orin Nano 8 GB mostra cerca de 1,4 GiB usados em um estado com JetPack 6.2 e pouco mais de 800 MiB usados em um estado com JetPack 7.2. A diferença — aproximadamente 600 MiB nesta imagem e configuração de serviços específicos — é memória que pode permanecer disponível para o runtime de inferência, área de trabalho do modelo ou cache KV, em vez de ser consumida antes de o aplicativo iniciar.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/6.2vs7.2.PNG" alt="Comparação histórica de memória de boot do JetPack 6.2 e 7.2 no Orin Nano"/>
</div>

É por isso que o menor uso de memória do sistema pode ser entendido como uma **atualização de memória via software**. O módulo ainda tem os mesmos 8 GB de DRAM física, mas uma pegada de plataforma menor aumenta a parcela que o aplicativo pode realmente orçar. Para uma implantação de LLM limitada por memória, essa folga extra pode ser a diferença entre falhar durante o carregamento do mecanismo ou prefill e ter espaço suficiente para executar uma requisição útil e limitada.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/7.2.png" alt="Observação histórica de memória de boot do JetPack 7.2 no Orin Nano"/>
</div>

O resultado não é automático para toda imagem do JetPack 7.2. Modo desktop, serviços habilitados, contêineres, caminhos de display e câmera, configurações de BSP da placa-carregadora e o ponto de medição afetam a linha de base. Meça o estado ocioso estabilizado no dispositivo real antes de atribuir a folga recuperada a um modelo maior ou a um contexto mais longo.

Para a comparação publicada de carregamento de modelo no AGX Orin 32 GB com JetPack 6.2 versus 7.2 — incluindo sua configuração de teste e números de desempenho — veja [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/).

## 2. Transformando a pilha do JetPack 7.2 em um orçamento de memória para LLM

O JetPack 7.2 fornece a plataforma e as ferramentas; um LLM ainda precisa caber na memória restante depois que o sistema operacional e os serviços de produto forem iniciados. O orçamento utilizável depende do tamanho do modelo, comprimento de contexto, tamanho de lote, precisão dos pesos e do runtime que executa o modelo. Divida-o nos blocos abaixo antes de alterar configurações.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_1.png"/>
</div>


- **Pesos do modelo** — o próprio modelo, seus parâmetros treinados. Normalmente o maior bloco: quanto maior o modelo ou maior a precisão, mais memória ele consome.
- **Cache KV** — a "memória da conversa até agora" do modelo. Ele evita que o modelo releia todo o chat a cada novo token, mas quanto maior o contexto, mais ele cresce.
- **Ativações** — números temporários produzidos no meio do cálculo; criados e descartados à medida que o modelo percorre cada camada.
- **Área de trabalho do TensorRT** — espaço de rascunho que o TensorRT reserva enquanto prepara e executa o modelo.
- **Contexto CUDA** — a "sessão" de GPU que o runtime CUDA abre antes de qualquer computação: contexto, streams e estado interno.
- **Buffers de runtime / temporários** — buffers de curta duração que o framework e seu aplicativo usam para movimentar dados: buffers de E/S, regiões de cópia e memória intermediária de rascunho.


### 2.1 Limites de Runtime: o que o TensorRT Edge-LLM adiciona

O JetPack 7.2 fornece CUDA 13.2.1 e TensorRT 10.16.2, a camada inferior sobre a qual o TensorRT Edge-LLM pode executar fluxos de trabalho de edge-LLM suportados. Edge-LLM é um runtime e uma toolchain separados, não um recurso que o JetPack habilita automaticamente. Quando seu modelo e versão são suportados, ele pode construir engines TensorRT a partir de checkpoints INT4 AWQ e usar técnicas como planejamento de memória, gerenciamento de cache KV, fusão de kernels e CUDA Graphs.

Para desenvolvedores do JetPack 7.2, o benefício prático é uma pilha de inferência NVIDIA atual que pode ser usada com uma linha de base de sistema reprodutível. O objetivo não é simplesmente iniciar um LLM; é fazer o modelo coexistir com a CPU, GPU, serviços e aplicativo que compartilham DRAM e largura de banda de memória limitadas.

Para um modelo grande, os pesos são normalmente a primeira alocação estável a ser contabilizada. Um modelo com 4 bilhões de parâmetros precisa aproximadamente de:


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_parameters.png"/>
</div>


Esses números descrevem apenas os pesos. Escalas de quantização, metadados, buffers de runtime e o cache KV são alocações adicionais. Mesmo assim, mover de FP16 para INT4 reduz o armazenamento teórico de pesos em cerca de 75%.

### 2.2 llama.cpp e TensorRT Edge-LLM são caminhos diferentes

Um rótulo de 4 bits não torna duas implantações equivalentes. Na mesma imagem do JetPack 7.2, um arquivo GGUF Qwen3.5-4B usado pelo llama.cpp e um checkpoint INT4 AWQ construído com TensorRT Edge-LLM seguem caminhos diferentes até a mesma GPU Jetson.

| Comparação | Caminho GGUF | Caminho TensorRT Edge-LLM |
| --- | --- | --- |
| Artefato de quantização | Um arquivo GGUF, como Q4_K_M | Um checkpoint INT4 AWQ suportado e seus artefatos exportados |
| Mecanismo de inferência | llama.cpp | Exportação do modelo → engine TensorRT |
| Execução na GPU | Kernels selecionados pela build e backend do llama.cpp | Engine TensorRT com fusão suportada, planejamento de memória, plugins e CUDA Graphs |
| Comparação justa de memória | Igualar modelo, contexto, offload de GPU, lote, modo de energia e versão | Igualar as mesmas variáveis e então incluir uso de engine e área de trabalho |

Portanto, o TensorRT Edge-LLM é mais do que um simples leitor de modelo INT4. Ele transforma um checkpoint compatível em um mecanismo otimizado para GPUs NVIDIA. Os recursos exatos disponíveis dependem do modelo, da construção do mecanismo e da versão do TensorRT Edge-LLM, portanto, verifique sempre sua matriz de modelos compatíveis e a documentação de lançamento. Para uma comparação entre JetPack 6.2 e 7.2, reconstrua ou revalide ambos os caminhos em suas respectivas pilhas de software; não reutilize um mecanismo antigo e chame o resultado de ganho do JetPack 7.2.

### 2.3 KV Cache: O orçamento que o JetPack 7.2 não remove

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV-cache-token.jpeg"/>
</div>
Quando um Transformer produz o primeiro token, ele processa o prompt e armazena as chaves e valores de atenção que calculou. No próximo token, o runtime pode reutilizar esses valores em vez de calcular novamente todo o histórico. Essa reutilização é o motivo pelo qual a decodificação continua prática, mas vem com um custo: o cache cresce à medida que a conversa cresce.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV—Cache.jpeg"/>
</div>

Uma fórmula aproximada de planejamento é:

> **Bytes de KV-cache ≈ 2 × camadas × cabeças KV × dimensão da cabeça × tokens × batch × bytes por elemento**

É por isso que o mesmo modelo INT4 pode rodar confortavelmente com contexto de 4K e depois ficar sem memória em 32K. O JetPack 7.2 pode deixar mais margem de manobra utilizável por meio de uma imagem de implantação mais enxuta ou de um runtime compatível mais eficiente, mas ele não limita o crescimento do KV-cache. A quantização de pesos reduz um custo fixo; contexto, batch e concorrência ainda definem a parte crescente do orçamento.


### 2.4 Reutilização de KV Cache: Transforme um custo crescente em um recurso gerenciado

A Seção 2.3 explica o trade-off: o KV cache impede que o modelo recalcule o prompt completo para cada token, mas consome mais DRAM à medida que o contexto cresce. Em uma implantação com JetPack 7.2, primeiro use as melhorias da plataforma para estabelecer um orçamento de memória real; depois decida se o trabalho já armazenado no cache pode ajudar a próxima requisição.

O TensorRT Edge-LLM trata esse cache como um recurso de runtime em vez de um efeito colateral invisível. O mecanismo é construído com um comprimento de entrada alvo e uma capacidade de KV-cache, enquanto o runtime possui um pool de páginas para contextos ativos e retidos. Este é um recurso do TensorRT Edge-LLM executando na pilha de computação do JetPack 7.2 — não uma política de cache aplicada automaticamente pelo SO — mas permite que uma implantação 7.2 reserve memória de forma deliberada em vez de descobrir o limite após uma falha por falta de memória.

Para modelos compatíveis, o Edge-LLM também pode reutilizar prefixos de prompt correspondentes entre requisições. O cache é local a uma instância de runtime e é indexado pelo conteúdo do prefixo, portanto, apenas a parte compartilhada de um prompt pode ser reutilizada. Na implementação atual do Edge-LLM, esse recurso requer um KV cache em FP16 e deve ser habilitado para o mecanismo e runtime selecionados.

| Vez | Sem reutilização de prefixo | Com reutilização de prefixo |
| --- | --- | --- |
| Primeira requisição | O prompt do sistema e o prompt do usuário são pré-carregados e depois gravados no KV cache. | O mesmo pré-preenchimento inicial é necessário. |
| Requisição posterior com o mesmo prompt de sistema | O prefixo repetido é pré-carregado novamente. | O prefixo em cache correspondente pode ser reutilizado; apenas a parte nova precisa de pré-preenchimento. |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/prefix_kv_cache.png" alt="Reutilização de cache KV de prefixo em requisições LLM repetidas"/>
</div>
Isso é especialmente útil para um agente com um prompt de sistema longo, um fluxo de trabalho de RAG com um prefixo de documento repetido ou uma requisição VLM que repete o mesmo prefixo de imagem. O maior benefício geralmente é menos trabalho de pré-preenchimento repetido e um tempo menor até o primeiro token, não uma exigência menor de memória de pico. Páginas de cache retidas ainda consomem memória, e mudar o prompt, a imagem ou a ordem das imagens impede a reutilização para o prefixo afetado.

Para uma implantação em Jetson, verifique a reutilização em vez de presumir que ela está ativa. Construa capacidade suficiente de pool de páginas para os contextos que você pretende reter, habilite a reutilização de contexto em tempo de execução e inspecione o perfil do runtime: uma requisição que acerta o cache deve relatar uma contagem positiva de tokens reutilizados.

Com a capacidade de contexto e a reutilização contabilizadas, a questão restante é o que acontece dentro de cada token gerado. É aí que as otimizações de execução do TensorRT importam.

### 2.5 TensorRT no JetPack 7.2: Reduza a movimentação de dados intermediários

Uma camada Transformer combina operações como normalização, quantização ou desquantização, multiplicação de matrizes, ativação e atenção. Se essas operações forem executadas como kernels separados, um kernel pode gravar um tensor intermediário na DRAM apenas para o próximo kernel lê-lo de volta imediatamente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/transformer_layer.png" alt="Operações em uma camada Transformer"/>
</div>

| Caminho de execução | O que cruza a DRAM | Por que isso importa no Jetson |
| --- | --- | --- |
| Kernels separados | Cada tensor intermediário é gravado e lido entre as operações. | Mais uso de largura de banda, alocações temporárias e lançamentos de kernel. |
| Kernel fundido | Operações compatíveis são executadas juntas antes que o resultado final seja gravado. | Menos tráfego intermediário e menos sobrecarga de runtime. |

A fusão de kernels não altera o tamanho dos pesos do modelo nem do KV cache. Ela reduz os dados de trabalho que se movem entre as operações, de modo que pode melhorar a latência e reduzir a pressão transitória em tempo de execução. O TensorRT 10.16.2 do JetPack 7.2 fornece a versão do TensorRT para esse caminho de mecanismo, mas este artigo não afirma que uma fusão específica foi introduzida no 7.2. As fusões disponíveis dependem do grafo do modelo e da construção do mecanismo; meça o mecanismo resultante no Jetson de destino em vez de tratar a fusão como um número fixo de economia de memória.

A fusão reduz o trabalho dentro de uma sequência de kernels. A decodificação ainda repete essa sequência para cada token gerado, o que deixa um custo de agendamento separado.

### 2.6 CUDA Graph no caminho de runtime do JetPack 7.2

Durante a decodificação, um LLM gera um ou alguns tokens por iteração, enquanto uma sequência semelhante de operações de GPU é executada muitas vezes. Em um caminho convencional, a CPU envia essa sequência repetidamente.

CUDA Graph registra uma sequência de GPU compatível uma vez e a reproduz depois com um único lançamento de grafo.

| Estágio de decodificação | Caminho de lançamento convencional | Caminho com CUDA Graph |
| --- | --- | --- |
| Sequência compatível inicial | A CPU lança as operações individuais de GPU. | O runtime registra a sequência como um grafo. |
| Iterações posteriores | A CPU envia a sequência novamente para cada iteração. | A CPU lança o grafo registrado e a sequência é executada como uma unidade. |

Esta é uma otimização de agendamento. A fusão de kernels reduz principalmente o tráfego de memória intermediário; o CUDA Graph reduz principalmente a sobrecarga repetida de lançamento CPU-para-GPU. Nenhum dos dois torna os pesos do modelo ou o KV cache menores. Em um sistema JetPack 7.2, é uma forma de um mecanismo TensorRT compatível aproveitar melhor a pilha atualizada de CUDA e TensorRT. No Jetson, reduzir o trabalho de lançamento pode melhorar a responsividade de ponta a ponta porque os recursos de CPU e o orçamento de energia são limitados juntamente com os recursos de GPU.

Os mecanismos agora formam um quadro completo de runtime: a quantização reduz o custo fixo de pesos; as configurações de KV-cache controlam o custo crescente de contexto; a fusão reduz o tráfego intermediário; e o CUDA Graph reduz o agendamento repetido da decodificação.

### 2.7 Relacione cada mecanismo de volta ao JetPack 7.2

A tabela a seguir distingue as alavancas do JetPack 7.2 dos mecanismos de runtime usados sobre elas.

| Camada ou mecanismo | Relação com o JetPack 7.2 | Decisão de implantação | O que medir |
| --- | --- | --- | --- |
| Linha de base da plataforma JetPack 7.2 | Fornece as versões do SO, CUDA e TensorRT; estabelece o ponto de partida reprodutível. | Registrar o release, o conjunto de serviços, o alvo desktop e o modo de energia. | Memória ociosa estabilizada e configuração do dispositivo. |
| Yocto ou uma imagem 7.2 enxuta | Uma opção direta de imagem de produção 7.2 para reduzir software de sistema desnecessário. | Incluir apenas serviços, drivers e bibliotecas necessários. | Memória ociosa e validação das funções requeridas. |
| Pesos de baixa precisão | Uma escolha de modelo feita dentro do ambiente de runtime 7.2. | Escolher um checkpoint compatível e validar a qualidade da saída. | Memória de carregamento do mecanismo e qualidade da tarefa. |
| Capacidade e reutilização de KV-cache | Um recurso opcional de runtime, não um recurso automático do SO 7.2. | Definir limites de contexto, batch, pool de páginas e retenção para a carga de trabalho. | Pico de pré-preenchimento, memória estável de decodificação, contagem de tokens reutilizados e TTFT. |
| Fusão do TensorRT e CUDA Graph | Mecanismos compatíveis podem explorar a pilha CUDA/TensorRT incluída no 7.2. | Construir e perfilar o mecanismo no dispositivo 7.2 de destino. | Pico de runtime, latência de decodificação e throughput. |

É por isso que “mais eficiente em memória” e “mais rápido” estão ligados no Jetson. O sistema não está ganhando DRAM física extra. Em vez disso, mais da mesma DRAM e largura de banda compartilhadas é deixada para a carga de trabalho porque os pesos, o cache, os dados intermediários e o trabalho de agendamento são gerenciados de forma mais deliberada.

Use este mapa na ordem: estabeleça a imagem e o orçamento de plataforma, meça o runtime e a pegada do modelo e, em seguida, expanda contexto e concorrência apenas quando a carga de trabalho completa ainda tiver margem.

## 3. Use este deep dive com os guias existentes do JetPack 7.2

Esta página explica o orçamento: por que uma pegada ociosa menor, pesos menores, KV cache limitado e um runtime compatível estão conectados. Ela intencionalmente não repete os procedimentos operacionais já mantidos no restante da coleção do JetPack 7.2.

| Se você precisa de… | Use este guia | Mantenha esta página aberta para… |
| --- | --- | --- |
| Medir memória ociosa, de carregamento de mecanismo, de pré-preenchimento e de decodificação; reduzir serviços; ou alterar uma reserva de BSP validada | [JetPack 7.2 Memory Optimization](/pt-br/jetpack_7_2_memory_optimization/) | Decidir qual camada de memória é responsável antes de agir. |
| Exportar um checkpoint, construir um mecanismo, selecionar uma precisão compatível ou fazer benchmark do TensorRT Edge-LLM | [Deploy TensorRT Edge-LLM on JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) | Entender como pesos, workspace e KV cache se encaixam no orçamento total. |
| Construir uma imagem de SO sob medida, orientada à produção | [Build and Flash a Yocto Image](/pt-br/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | Decidir se uma imagem de sistema menor vale o custo adicional de manutenção. |
| Comparar os resultados publicados de 6.2 e 7.2 no AGX Orin | [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/) | Evitar o erro de tratar um resultado medido como uma economia de memória universal. |

A ordem correta é simples: estabeleça a linha de base do sistema, meça o runtime e o modelo selecionados e, em seguida, aumente o contexto ou a simultaneidade apenas enquanto a carga de trabalho completa permanecer dentro do orçamento. Os guias vinculados contêm os comandos, verificações de segurança, procedimentos de rollback e testes de aceitação para cada etapa.

## 4. Observações de Campo: Evidências para JetPack 7.2, Não Alegações de Marketing

Para a comparação publicada do AGX Orin 32 GB e suas figuras, consulte [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/). Este artigo se concentra em como interpretar esses resultados ao planejar um orçamento de memória para LLM.

Ao comparar um resultado do JetPack 6.2 com o 7.2, trate a versão apenas como uma variável. Mantenha o módulo, a placa carrier, o checksum do modelo, o comando, o offload de GPU, o contexto, a contagem de tokens gerados, o modo de energia, o estado de `jetson_clocks`, o alvo desktop, o conjunto de serviços, a temperatura e o ponto de amostragem fixos. Registre as versões de L4T, CUDA e TensorRT em cada execução.

Os quatro estados de memória que importam são idle estabilizado, mecanismo ou modelo carregado, prefill do prompt e decodificação estável. O [guia de Otimização de Memória](/pt-br/jetpack_7_2_memory_optimization/) fornece os comandos de coleta e a interpretação para esses estados. Um número obtido em apenas um estado não pode provar que o JetPack 7.2, o CUDA ou o TensorRT causaram uma melhoria de memória em toda a carga de trabalho.

## Referências

- [TrendForce — AI Server Demand Continues to Support Memory Prices in 3Q26](https://www.trendforce.com/presscenter/news/20260703-13134.html): perspectivas recentes de preços de contrato de DRAM e NAND.
- [NVIDIA Developer Blog — Deploy Agentic-Ready AI at the Edge with Memory Efficiency in NVIDIA JetPack 7.2](https://developer.nvidia.com/blog/deploy-agentic-ready-ai-at-the-edge-with-memory-efficiency-in-nvidia-jetpack-7-2/): técnicas de otimização de memória do JetPack 7.2 e suporte oficial ao Yocto.
- [NVIDIA JetPack 7.2 Downloads / Release Notes](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2)
- [NVIDIA TensorRT-Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM): fonte versionada de verdade para a toolchain de borda, modelos suportados e exemplos.
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM): runtime de LLM, construção de engines e documentação de recursos; fonte da documentação de otimização de fusão de kernel e CUDA Graph.
- [TensorRT Edge-LLM KV Cache Reuse](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/features/kv-cache-reuse.html): condições de suporte, capacidade do pool de páginas, habilitação em runtime e verificação de reutilização.
- [NVIDIA TensorRT KV Cache Documentation](https://docs.nvidia.com/deeplearning/tensorrt/latest/inference-library/transformers-kv-cache.html): conceitos gerais de gerenciamento e configuração de cache KV.

## Páginas Relacionadas

- [JetPack 7.2 Memory Optimization](/pt-br/jetpack_7_2_memory_optimization/) — auditoria baseada em habilidades, recuperação de BSP headless / sem câmera, segurança SWIOTLB e configurações de inferência de LLM com menos memória.
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) — exportação no host, construção de engine no alvo e validação de inferência em C++.
- [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/) — o que muda para inferência no Jetson AGX Orin e a comparação Seeed JetPack 7.2 vs 6.2.
- [JetPack 7.2 Resource Hub](/pt-br/jetpack_7_2_resource_hub/) — o índice categorizado de todos os recursos do JetPack 7.2 para dispositivos Seeed Studio.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher produtos Seeed Studio! Para suporte técnico e discussão de produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

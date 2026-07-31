---
description: Este FAQ explica as principais mudanças do JetPack 7.2 para o Jetson AGX Orin, resume a comparação de inferência entre JetPack 7.2 e JetPack 6.2 feita pela Seeed e mostra como fazer o upgrade com o Seeed Jetson DevelopTool.
title: Análise Detalhada do JetPack 7.2
keywords:
  - Jetson
  - JetPack 7.2
  - Jetson AGX Orin
  - edge AI
  - large language model
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg
slug: /jetpack72_deep_dive_bk
sku: E26020301
last_update:
  date: 06/11/2026
  author: Dayu
createdAt: '2026-06-11'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/pt-br/jetpack72_deep_dive_bk/
---

# Análise Detalhada do JetPack 7.2: O que muda para a inferência no Jetson AGX Orin?

Este FAQ resume por que o JetPack 7.2 é importante para usuários de Jetson AGX Orin, o que a Seeed mediu ao comparar o JetPack 7.2 com o JetPack 6.2 e como avaliar um caminho de upgrade com o Seeed Jetson DevelopTool.

A plataforma de teste usada pela Seeed é o reComputer Jetson AGX Orin Developer Kit GMSL Bundle.

<div align="center">
  <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
  </a>
</div>

## FAQ

#### P1: Quais são as principais mudanças do JetPack 7.2 para usuários de Jetson?

O JetPack 7.2 atualiza a pilha de software do Jetson com uma base Jetson Linux mais recente, Ubuntu 24.04, CUDA 13, componentes de runtime de IA atualizados e melhorias em nível de plataforma para eficiência de memória e fluxos de trabalho de IA agentic.

Para usuários de Jetson AGX Orin 32GB, uma das mudanças mais importantes é o novo modo de energia de alto desempenho usado no teste da Seeed, que permite que o mesmo módulo opere em uma frequência de GPU mais alta e entregue maior throughput de IA quando o projeto de energia e térmico da placa carrier puder suportar isso.

:::note
Sempre verifique as notas de versão da NVIDIA e as notas de versão do BSP da Seeed para saber as versões exatas dos componentes suportados pela sua placa carrier e imagem de destino.
:::

#### P2: Que hardware e software a Seeed comparou?

A Seeed comparou um AGX Orin 32GB Developer Kit com um reComputer J5011 usando os ambientes de software JetPack 6.2 e JetPack 7.2 e a mesma carga de trabalho de inferência de large language model.

| Item | Teste JetPack 6.2 | Teste JetPack 7.2 |
| --- | --- | --- |
| Módulo | Jetson AGX Orin 32GB | Jetson AGX Orin 32GB |
| Dispositivo de teste | AGX Orin 32GB Developer Kit | reComputer J5011 |
| Jetson Linux | L4T 36.4.3 | L4T 39.2 |
| Ubuntu | 22.04 | 24.04 |
| CUDA | 12.6 | 13.x |
| Motor de inferência | llama.cpp | llama.cpp |
| Modelo | Qwen3.5-27B-Q4_K_M.gguf | Qwen3.5-27B-Q4_K_M.gguf |
| Principais parâmetros | `-ngl 999 -fa on -ub 512 -t 12` | `-ngl 999 -fa on -ub 512 -t 12` |

#### P3: Que melhorias de memória e desempenho a Seeed observou?

Na comparação da Seeed, o JetPack 7.2 reduziu o uso de memória após o carregamento do modelo e melhorou tanto a velocidade de processamento do prompt quanto a velocidade de geração de tokens.

| Métrica | JetPack 6.2 | JetPack 7.2 | Mudança observada |
| --- | --- | --- | --- |
| Memória após carregamento do modelo | 24,6 GB / 30 GB | 14,7 GB / 30 GB | Cerca de 40% menor |
| Frequência da GPU durante a inferência | 930 MHz | 1,36 GHz | Frequência de boost mais alta |
| Processamento do prompt | 18,2 tokens/s | 25,8 tokens/s | Cerca de 41,8% mais rápido |
| Geração de tokens | 4,3 tokens/s | 5,5 tokens/s | Cerca de 27,9% mais rápido |

O resultado mais prático é a folga de memória. Na execução com JetPack 6.2, o modelo de 27B ocupou a maior parte da memória disponível após o carregamento. Na execução com JetPack 7.2, o sistema manteve aproximadamente 10 GB a mais de memória disponível, o que é útil ao executar pré-processamento de visão, middleware de robótica ou outros serviços em paralelo com a carga de trabalho de LLM.

#### P4: Posso assistir ao resultado da comparação entre JetPack 7.2 e JetPack 6.2?

Sim. O vídeo a seguir mostra o efeito da comparação.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### P5: Devo atualizar meu dispositivo Jetson para o JetPack 7.2?

Use a tabela a seguir como ponto de partida:

| Cenário | Recomendação |
| --- | --- |
| Novo projeto com Jetson AGX Orin | Considere começar com o JetPack 7.2 se o BSP, os drivers e a pilha de aplicações necessários estiverem disponíveis. |
| Projeto existente em JetPack 6.x | Valide módulos de kernel, dependências de CUDA, engines TensorRT, drivers de câmera e drivers de periféricos antes da migração. |
| Cargas de trabalho de LLM ou VLM limitadas por memória | Vale a pena avaliar o JetPack 7.2 porque a redução de memória medida pode facilitar a execução de modelos maiores ou pipelines com múltiplos serviços. |
| Sistema em produção com placa carrier customizada | Não faça upgrade apenas executando `apt upgrade`. Use uma imagem completa validada ou um caminho de OTA oficialmente suportado pela Seeed. |

:::caution
Modos de desempenho mais altos aumentam os requisitos de energia e térmicos. Antes de habilitar um modo de alta potência, confirme se a placa carrier, o adaptador de energia, o gabinete e o projeto de dissipação de calor conseguem sustentar a carga de trabalho desejada.
:::

#### P6: Como posso atualizar para o JetPack 7.2 com o Seeed Jetson DevelopTool?

O Seeed Jetson DevelopTool fornece um fluxo de trabalho guiado para download de firmware do Jetson, gravação, conexão do dispositivo e operações de OTA.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/flash-page.png" />
</div>

Para uma migração de versão principal, como de JetPack 6.x para JetPack 7.x, é recomendada uma gravação completa, a menos que a Seeed forneça explicitamente um caminho de OTA validado para o seu produto exato e imagem de origem.

Para o fluxo completo de decisão entre gravação e OTA do JetPack 7.2, vídeo do DevelopTool, comandos de verificação e checklist de migração, consulte [Flash and OTA Upgrade to JetPack 7.2](/pt-br/flash_and_ota_jetpack_7.2/).

Fluxo de trabalho geral:

1. Instale e abra o Seeed Jetson DevelopTool.
2. Selecione o produto Jetson ou o modelo da placa carrier.
3. Selecione a versão de L4T ou JetPack que corresponda ao JetPack 7.2.
4. Baixe e extraia o pacote BSP a partir da ferramenta.
5. Coloque o dispositivo Jetson em Force Recovery Mode.
6. Detecte o dispositivo a partir do PC host.
7. Inicie a gravação e aguarde até que o dispositivo reinicie.
8. Conclua a configuração do primeiro boot e verifique a versão do sistema.

Para mais detalhes sobre a ferramenta, consulte [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool).

#### P7: O que devo verificar após o upgrade?

Após a gravação ou upgrade, verifique os seguintes itens antes de executar cargas de trabalho em produção:

- Versões de JetPack, L4T, CUDA, cuDNN e TensorRT.
- Frequência da GPU, modo de energia e comportamento térmico sob carga.
- Interfaces de câmera, GMSL, Ethernet, CAN, USB, M.2 e outros periféricos.
- Módulos de kernel customizados e drivers out-of-tree.
- Compatibilidade da estrutura de IA, incluindo PyTorch, engines TensorRT, builds de llama.cpp e extensões CUDA.
- Testes de estresse de longa duração para estabilidade de energia e temperatura.

## Recursos

- [reComputer Jetson AGX Orin Developer Kit GMSL Bundle](https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html)
- [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)
- [NVIDIA JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
- [Seeed Jetson Wiki](https://wiki.seeedstudio.com/pt-br/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

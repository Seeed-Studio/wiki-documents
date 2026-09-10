---
description: Otimize a memória no JetPack 7.2 por meio de medição, habilidades NVIDIA Jetson, ajustes de BSP sem tela ou sem câmera e configurações de inferência de LLM eficientes em memória.
title: Otimização de Memória no JetPack 7.2
keywords:
  - JetPack 7.2
  - otimização de memória
  - NVIDIA Skills
  - TensorRT Edge-LLM
  - INT4
  - Jetson Orin
  - Jetson Thor
image: https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG
slug: /jetpack_7_2_memory_optimization
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/jetpack_7_2_memory_optimization/
---

# Otimização de Memória no JetPack 7.2

O Jetson usa memória unificada, portanto o sistema operacional, cargas de trabalho de GPU, firmware de câmera e display, pesos de modelo, engines TensorRT, cache KV e serviços de aplicação competem pela mesma DRAM física. A otimização de memória, portanto, precisa cobrir tanto a plataforma quanto a carga de trabalho de inferência.

Este guia combina o material do JetPack 7.2 já disponível nesta coleção:

- o [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/), incluindo a redução medida de memória após carregar um modelo de 27B;
- o [workflow NVIDIA Skills](/pt-br/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) para diagnóstico do dispositivo, auditoria de memória e implantação sem tela;
- o [guia TensorRT Edge-LLM](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/) para inferência FP16, INT8 e INT4 no JetPack 7.2.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

:::warning
A recuperação de memória em nível de BSP altera o firmware de boot, device trees e configurações da linha de comando do kernel. Aplique apenas receitas `headless`, `no-camera` ou SWIOTLB validadas em um dispositivo de teste recuperável. Mantenha o BSP original e confirme que o dispositivo pode ser regravado antes de fazer essas alterações.
:::

:::tip
Procurando o “porquê” por trás dessas etapas? O [JetPack 7.2 Memory Optimization Deep Dive](/pt-br/jetpack_7_2_memory_optimization_deep_dive/) complementar explica de onde vem a folga: a linha de base da plataforma em comparação ao JetPack 6.2, o orçamento de memória do LLM, a mecânica de runtime e observações de campo.
:::

## Camadas de Otimização

Use a camada menos invasiva que resolva o problema.

| Camada | Ação típica | Risco | Reboot ou reflash |
| --- | --- | --- | --- |
| Medição | Registrar memória disponível e uso por processo | Baixo | Não |
| Configuração de inferência | Quantização, contexto mais curto, tamanho de lote 1, menor concorrência | Baixo | Não |
| Configuração de serviço | Alvo sem tela, parar servidores de modelo duplicados, desabilitar serviços de usuário não utilizados | Médio | Normalmente reboot |
| Recuperação de memória no BSP | Desabilitar firmware e memória reservada de display ou câmera não utilizados | Alto | Recompilar e regravar |
| Ajuste de SWIOTLB | Reduzir o pool de bounce de DMA após medir o uso real | Alto | Recompilar e regravar |

## 1. Registrar uma Linha de Base Reproduzível

Confirme a versão de software e capture a memória antes de iniciar a aplicação:

```bash
cat /etc/nv_tegra_release
free -h
grep -E 'MemTotal|MemAvailable|SwapTotal|SwapFree|CmaTotal|CmaFree' /proc/meminfo
```

Monitore memória unificada, uso de GPU, temperaturas e potência enquanto carrega e executa o modelo:

```bash
sudo tegrastats --interval 1000
```

Em outro terminal, identifique os maiores processos e grupos de controle:

```bash
ps -eo pid,comm,rss,vsz,%mem --sort=-rss | head -20
systemd-cgtop
```

Registre pelo menos quatro estados:

1. após o boot e antes de a aplicação iniciar;
2. após o carregamento do modelo ou da engine TensorRT;
3. durante o prefill do prompt ou pico de pré-processamento de visão;
4. durante a geração de tokens em estado estacionário ou operação da aplicação.

Não compare apenas o valor `used` de `free`. Use `MemAvailable`, a lista de RSS de processos e o pico reportado por `tegrastats` em conjunto.

## 2. Usar Skills para Auditar Antes de Editar o BSP

O workflow orientado por skills deve começar com observação em vez de mudanças imediatas de configuração.

### Diagnosticar o Dispositivo

Use `jetson-diagnostic` para coletar o módulo, versão JetPack/L4T, estado de memória, armazenamento, térmicas, serviços e endpoints de hardware visíveis.

Prompt de exemplo:

```text
/jetson-diagnostic Confirm that this device is running JetPack 7.2 / L4T 39.2,
capture its idle memory baseline, and identify services or hardware subsystems
that consume memory before the inference application starts.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### Auditar Pressão de Memória

Use `jetson-memory-audit` quando o modelo falhar ao carregar, o OOM killer encerrar um processo ou o uso de memória crescer inesperadamente.

```text
/jetson-memory-audit Compare idle, engine-load, prefill, and decode memory use.
Separate model weights, KV cache, application processes, filesystem cache,
desktop services, and reserved platform memory where possible.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

A auditoria deve produzir evidências antes de recomendar uma alteração. Não desabilite um serviço apenas porque ele aparece perto do topo de uma lista de processos.

### Converter Implantações de Appliance para Modo Sem Tela

Se o Jetson roda sem um display local, use `jetson-headless-mode` para remover a sobrecarga de desktop no nível de serviço.

O target padrão do systemd é:

```bash
sudo systemctl set-default multi-user.target
sudo reboot
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

Confirme o acesso por SSH antes de reiniciar. Essa alteração em nível de serviço é separada da recuperação de áreas de firmware de display no BSP.

### Usar `jetson-optimize-memory` Apenas para Cenários de BSP Validados

A skill em nível de BSP oferece suporte a três workflows delimitados:

| Cenário | Implantação pretendida | Área de plataforma recuperada |
| --- | --- | --- |
| `headless` | Sem saída de display local | Firmware de DCE/display, framebuffer inicial e nós de kernel correspondentes |
| `no-camera` | Sem CSI, GMSL ou outro pipeline de câmera | RCE, VI, ISP, NVCSI e áreas de firmware correspondentes |
| `swiotlb` | Uso medido do pool de bounce de DMA muito abaixo do pool reservado | Uma alocação SWIOTLB menor e diferente de zero |

Solicitações de exemplo:

```text
/jetson-optimize-memory headless
/jetson-optimize-memory no-camera
/jetson-optimize-memory swiotlb
```

Para alterações em carveouts, o MB1 BCT, controles de carregamento do MB2, referências AST do MB2 e nós de device tree do kernel devem permanecer consistentes. Zerar apenas uma entrada de carveout não é uma otimização válida. Para SWIOTLB, nunca configure um pool de tamanho zero e reverta imediatamente se `io_tlb_used` se aproximar de `io_tlb_nslabs`.

## 3. Reduzir o Uso de Memória de LLM e VLM

### Escolher a Menor Precisão Suportada

TensorRT Edge-LLM no JetPack 7.2 oferece suporte a FP16, INT8 e INT4 no Jetson Orin. Comece com FP16 para validar a correção e, em seguida, avalie checkpoints INT8 ou INT4 suportados pelo modelo selecionado.

| Precisão | Tendência de memória | Uso recomendado |
| --- | --- | --- |
| FP16 | Maior entre os caminhos suportados no Orin | Linha de base funcional e cargas de trabalho sensíveis à acurácia |
| INT8 | Menor memória de pesos com compensações moderadas de acurácia | Avaliação de produção equilibrada |
| INT4 | Menor memória de pesos entre os caminhos suportados | Modelos grandes ou implantações com vários serviços e DRAM limitada |

Não presuma que alterar um flag da engine quantiza corretamente um checkpoint FP16. Use um checkpoint e um caminho de exportação suportados pelo modelo e então reconstrua a engine TensorRT no JetPack 7.2.

### Controlar Contexto, Cache KV e Concorrência

A memória de LLM não é determinada apenas pelos pesos do modelo. O cache KV cresce com o comprimento do contexto, tamanho de lote, tokens gerados e requisições concorrentes.

Comece com uma requisição conservadora:

```json
{
  "batch_size": 1,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "Summarize the current device status."
        }
      ]
    }
  ]
}
```

Em seguida, aumente uma dimensão por vez:

1. comprimento do contexto de entrada;
2. comprimento da geração;
3. tamanho de lote;
4. requisições concorrentes;
5. serviços adicionais de visão ou robótica.

Se a memória subir acentuadamente durante o prefill, encurte o prompt ou a janela de contexto. Se ela subir à medida que as sessões permanecem ativas, inspecione a retenção de cache KV e o tratamento de requisições concorrentes.

### Evitar Carregamentos Duplicados de Modelo

Use um único servidor de modelo de longa duração quando várias aplicações precisarem do mesmo modelo. Scripts Python separados, notebooks, servidores de teste e serviços de produção podem cada um carregar outra cópia dos pesos ou da engine.

Antes de iniciar a inferência, verifique se há processos de modelo existentes:

```bash
ps -ef | grep -E 'llm|triton|python|ollama' | grep -v grep
```

Pare apenas processos que sejam confirmadamente duplicados. Não encerre serviços de sistema com base apenas em uma correspondência de nome.

### Manter Exportação e Build da Engine Fora do Alvo Sempre que Possível

TensorRT Edge-LLM usa um host x86 com GPU para exportação do checkpoint e o Jetson para o build da engine de destino. A exportação pode exigir várias vezes o tamanho do checkpoint em RAM e VRAM, portanto manter a exportação no host preserva a memória do Jetson para validação e inferência.

Durante o build da engine, feche servidores de modelo não relacionados e registre o pico de memória separadamente da memória de runtime. A pressão de memória em tempo de build não representa necessariamente o requisito de implantação em estado estacionário.

![TensorRT Edge-LLM engine build](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

### Tratar Swap como Ferramenta de Recuperação, Não como DRAM Livre

Swap pode ajudar a concluir uma conversão de modelo ou build de engine pontual, mas swapping sustentado aumenta a latência e pode aumentar o desgaste do armazenamento. Para inferência em tempo real, prefira um modelo menor ou quantizado, contexto mais curto, menor concorrência e menos serviços duplicados antes de depender de swap.

## 4. Validar o Resultado

Use o mesmo prompt, entrada, modo de energia e topologia de aplicação antes e depois de cada alteração.

| Métrica | Por que é importante |
| --- | --- |
| `MemAvailable` em idle | Mede a sobrecarga de sistema e serviços |
| Memória após o carregamento da engine | Mostra o footprint do modelo e do runtime |
| Pico de memória no prefill | Expõe a pressão de contexto e de workspace temporário |
| Memória de decodificação em estado estacionário | Mostra cache KV e retenção de sessão |
| Tempo até o primeiro token | Detecta regressões causadas por swapping ou workspaces restritos |
| Throughput de decodificação | Confirma que a menor memória não tornou a inferência inutilizavelmente lenta |
| Temperatura e potência da placa | Confirma que o resultado é estável, não apenas um pico curto |

O [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive_bk/) registrou a memória após carregar um modelo de 27B caindo de aproximadamente **24,6 GB** no JetPack 6.2 para **14,7 GB** no JetPack 7.2 na comparação da Seeed. Considere esse resultado como uma referência específica da carga de trabalho, não como uma redução garantida para todos os modelos.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="Comparação de memória e inferência entre JetPack 7.2 e JetPack 6.2 no Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Ordem recomendada

1. Meça a memória em idle, com carga do engine, no prefill e na decodificação.
2. Remova processos de modelo duplicados e serviços de aplicação desnecessários.
3. Reduza o contexto, o comprimento da geração, o tamanho do lote (batch size) e a simultaneidade (concurrency).
4. Avalie checkpoints INT8 ou INT4 compatíveis com o TensorRT Edge-LLM.
5. Use `jetson-headless-mode` para implantações de appliances sem display.
6. Use `jetson-optimize-memory headless` ou `no-camera` somente quando o cenário de hardware corresponder exatamente.
7. Considere a redução de SWIOTLB apenas após medir o uso real do bounce-pool de DMA.
8. Execute novamente testes de correção, latência, throughput, térmica e estabilidade após cada alteração.

## Rollback

- Restaure o target de serviço original se um desktop gráfico for necessário novamente.
- Restaure o BSP original e reflashe se uma alteração de carveout ou device-tree causar falhas de boot ou de periféricos.
- Reverta as alterações de SWIOTLB se erros de DMA aparecerem ou se o uso se aproximar do pool configurado.
- Mantenha o último engine TensorRT e configuração de modelo conhecidos como bons até que a configuração otimizada seja aprovada nos testes de aceitação.

## Suporte técnico e discussão de produtos

Obrigado por escolher produtos da Seeed Studio! Para suporte técnico e discussão de produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
---
description: "Um mergulho profundo em X-VLA: mecanismos, treinamento, experimentos e escopo de integração com o LeRobot v0.7.0."
title: "X-VLA: Absorvendo Diferenças de Corporeidade com Soft Prompts Treináveis"
hide_title: true
keywords: ["Paper Deep-Dive","X-VLA","VLA","Soft Prompts","Cross-Embodiment","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_x_vla
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Pré-requisitos: Um Soft Prompt Não é uma Descrição de Robô",
    "id": "prerequisites-a-soft-prompt-is-not-a-robot-description",
    "level": 2
  },
  {
    "value": "Resumo e Guia de Leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por que Apenas Cabeças de Saída São Insuficientes",
    "id": "why-output-heads-alone-are-insufficient",
    "level": 2
  },
  {
    "value": "Arquitetura: Combinando Três Fluxos de Informação",
    "id": "architecture-combining-three-information-streams",
    "level": 2
  },
  {
    "value": "Representação de Ação: Forma Não Garante Significado",
    "id": "action-representation-shape-does-not-guarantee-meaning",
    "level": 2
  },
  {
    "value": "Treinamento e Adaptação",
    "id": "training-and-adaptation",
    [LINE[LINE_45]    "level": 2
  },
  {
    "value": "Experimentos: Capacidade e Custo de Adaptação",
    "id": "experiments-capability-and-adaptation-cost",
    "level": 2
  },
  {
    "value": "Integração com LeRobot e Limites dos Resultados",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-x_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · MERGULHO EM ARTIGO</span>
  <h1 id="paper-reading-x_vla-title">X-VLA: Absorvendo Diferenças de Corporeidade com Soft Prompts Treináveis</h1>
  <p className="paper-reading-lead">X-VLA: Transformer com Soft Prompts como Modelo Escalável de Visão-Linguagem-Ação entre Diferentes Corporeidades</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-combining-three-information-streams">Soft prompts de corporeidade</a></li>
    <li><a href="#action-representation-shape-does-not-guarantee-meaning">Representação de ação</a></li>
    <li><a href="#experiments-capability-and-adaptation-cost">Adaptação e experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2510.10274v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/xvla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot X-VLA ↗</a>

**Parâmetros do LeRobot**

- `--policy.path=lerobot/xvla-base` começa a partir da base entre corporeidades.
- `--policy.action_mode=auto` seleciona o processamento de ações; ele não consegue corrigir automaticamente unidades físicas ou convenções de coordenadas.
- `--policy.domain_id` seleciona os prompts de domínio e deve corresponder à configuração de dados/controle.
- O fine-tuning completo documentado treina mais do que os prompts; ele é distinto do experimento de parâmetros eficientes do artigo.

</aside>

“Colocar o copo dentro da tigela” pode exigir juntas, interpretações de câmera e unidades diferentes em um Franka, em um robô bimanual e em um braço de baixo custo. Largura de tensor igual não alinha esses relacionamentos. **Um pequeno condicionamento aprendido pode dizer a uma política compartilhada qual corpo e distribuição de dados ela está usando?**

## Pré-requisitos: Um Soft Prompt Não é uma Descrição de Robô

Soft prompts são vetores contínuos treináveis selecionados por um identificador de domínio. Um domínio pode codificar uma configuração de câmera, controlador e conjunto de dados, não apenas um modelo de robô. Atribuir apenas um novo identificador não fornece um controlador treinado.

## Resumo e Guia de Leitura

**Resumo em breve.** X-VLA injeta soft prompts específicos de domínio cedo na geração de ações. Recursos de visão-linguagem da vista principal, imagens auxiliares, estado do robô e geração de ações baseada em flow compartilham uma estrutura de Transformer. Os experimentos estudam escala, adaptação ao domínio-alvo e atualizações com poucos parâmetros.

**Nota de leitura.** Adaptação completa e o experimento com cerca de 1% de parâmetros treináveis têm orçamentos e pontuações diferentes.

## Por que Apenas Cabeças de Saída São Insuficientes

Uma projeção de saída específica de domínio lida com dimensões, mas não informa a interpretação visual anterior. Projeções de entrada específicas de domínio podem perturbar representações pré-treinadas, enquanto descrições de robô escritas manualmente exigem projeto manual. Soft prompts fornecem condições aprendidas durante a fusão multimodal. O artigo compara abordagens de tratamento de heterogeneidade sob receitas de treinamento alinhadas.

<figure className="paper-reading-figure" data-reading-figure="x_vla/heterogeneity-comparison">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/heterogeneity-comparison.png" alt="Erros de validação para métodos de tratamento de heterogeneidade" loading="lazy" />
  <figcaption><strong>Erros de validação para métodos de tratamento de heterogeneidade.</strong> Fonte: o artigo do X-VLA. Sob receitas de treinamento alinhadas, soft prompts alcançam menor erro de ação em dados reservados no final do treinamento, apoiando o condicionamento de domínio durante a fusão. O eixo vertical mede erro de predição offline, não sucesso de tarefa em malha fechada.</figcaption>
</figure>

## Arquitetura: Combinando Três Fluxos de Informação

Florence-Large processa a vista principal e a instrução. Um backbone de visão compartilhado codifica vistas auxiliares. Estado do robô, ações ruidosas e embeddings de tempo são projetados e fundidos com prompts de domínio e recursos de visão-linguagem por meio de camadas padrão de Transformer.

| Informação | Papel no posicionamento do copo |
| --- | --- |
| Vista principal e linguagem | Identificar o copo e a tigela solicitados |
| Vistas auxiliares | Resolver a geometria local de preensão/contato |
| Estado e ações ruidosas | Ancorar o corpo e a trajetória |
| Prompts de domínio | Condicionar o cálculo compartilhado à configuração |

Uma notação didática para a interface é

$$
\hat A=\operatorname{Flow}_{\theta}(\epsilon\mid E(I,L),q,p_d).
$$

Aqui $p_d$ seleciona a condição de domínio aprendida, $q$ é o estado e $\epsilon$ é o ruído de ação. Convenções físicas continuam sendo responsabilidade da preparação de dados e dos processadores.

<figure className="paper-reading-figure" data-reading-figure="x_vla/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/xvla-architecture2.png" alt="Prompts específicos de domínio e computação multimodal compartilhada" loading="lazy" />
  <figcaption><strong>Prompts específicos de domínio e computação multimodal compartilhada.</strong> Fonte: a documentação oficial do LeRobot. Um ID de domínio seleciona prompts e projeções de ação antes da computação compartilhada do Transformer. Os 0,04% do diagrama são a parcela arquitetural de módulos específicos de domínio, distinta do experimento de adaptação com cerca de 1% de parâmetros treináveis.</figcaption>
</figure>

## Representação de Ação: Forma Não Garante Significado

O artigo padroniza posição do efetuador final, rotação 6D e estado do gripper. Uma codificação de rotação 6D não implica seis graus de liberdade rotacionais. Ele também usa 30 âncoras de trajetória ao longo de quatro segundos durante o pré-treinamento para abstrair movimentos excessivamente finos; isso não é uma taxa de controle universal de implantação.

Por exemplo, coordenadas em metro e milímetro continuam 1.000 vezes diferentes após o preenchimento para mesma largura. Prompts não podem substituir conversão de unidades, convenções de rotação, ordenação de braços ou alinhamento da direção do gripper.

## Treinamento e Adaptação

O pré-treinamento otimiza conjuntamente parâmetros compartilhados e prompts de domínio. O principal procedimento de adaptação primeiro aquece novos prompts com pesos pré-treinados congelados e depois descongela para especialização conjunta. Um estudo separado de parâmetros eficientes atualiza aproximadamente 9M de parâmetros, ou 1% do modelo.

Na execução, processadores selecionam o domínio e organizam observações; flow matching gera ações, e o pós-processamento restaura a interface do robô. Prompts são parâmetros aprendidos em vez de uma memória de tarefas online acumulativa.

## Experimentos: Capacidade e Custo de Adaptação

O X-VLA-0.9B com adaptação completa relata pontuações LIBERO de 98,2%, 98,6%, 97,8% e 97,6%, com média de aproximadamente 98,1%. O experimento com aproximadamente 9M de atualizações relata cerca de 93% no LIBERO e 54% no Simpler-WidowX. Eles medem trade-offs diferentes.

Estudos de escala variam capacidade do modelo, diversidade e volume de dados, medindo erro de ação em dados reservados e comportamento a jusante. Erro offline menor pode se correlacionar com melhor adaptação, mas não equivale a sucesso em malha fechada: um pequeno erro de preensão ainda pode errar o copo.

Demonstrações em robôs reais incluem manipulação precisa de tecido após adaptação. Elas não estabelecem que prompts sozinhos resolvem problemas arbitrários de corpos desconhecidos ou de contato.

## Integração com LeRobot e Limites dos Resultados

A versão 0.7.0 inclui modos de ação, processadores, identificadores de domínio e opções de treinamento de prompts. Fragmentos de treinamento incluem:

```bash
--policy.path=lerobot/xvla-base
--policy.action_mode=auto
--policy.dtype=bfloat16
--policy.train_soft_prompts=true
--policy.train_policy_transformer=true
```

Especifique os dados reais, domínio, câmeras, local de saída e política de congelamento de visão/linguagem. Reproduzir o experimento com poucos parâmetros requer restringir explicitamente os módulos treináveis.

O checkpoint `lerobot/xvla-libero` documentado é descrito em aproximadamente 93%, separado dos 98,1% de adaptação completa do artigo. Processadores LIBERO dedicados também lidam com rotação da câmera de pulso e convenções de estado/ação; uma chamada de rede bruta os ignora.

## Conclusão

X-VLA introduz condições de domínio aprendidas cedo o suficiente para influenciar a formação de ações. Soft prompts fornecem uma interface de adaptação, enquanto representações físicas e processadores mantêm a consistência de controle. Adaptação completa e eficiente em parâmetros exigem interpretações separadas.

</div>

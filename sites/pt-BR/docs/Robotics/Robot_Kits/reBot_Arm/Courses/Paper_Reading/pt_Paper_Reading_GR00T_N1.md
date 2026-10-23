---
description: "Um mergulho profundo na arquitetura de sistema duplo do GR00T N1, pirâmide de dados, blocos de ação com correspondência de fluxo, pré-treinamento e adaptação para robôs."
title: "NVIDIA GR00T — Adaptação e Fine-Tuning"
hide_title: true
keywords:
  - Análise Detalhada de Artigo
  - gr00t_n1
  - Aprendizado de Robôs
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - IA Física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_gr00t_n1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_gr00t_n1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-gr00t_n1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISE DETALHADA DE ARTIGO</span>
  <h1 id="paper-reading-gr00t_n1-title">NVIDIA GR00T — Adaptação &amp; Fine-Tuning</h1>
  <p className="paper-reading-lead">GR00T N1: Um modelo de base aberto para robôs humanóides generalistas</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Robôs humanóides</li>
    <li>Arquitetura de sistema duplo</li>
    <li>Pirâmide de dados</li>
    <li>Flow matching</li>
  </ul>
</section>

## GR00T N1.7: Adaptação e Fine-Tuning

Esta leitura aborda o artigo original do GR00T N1. Para trabalho prático com o **GR00T N1.7** (`nvidia/GR00T-N1.7-3B`), siga o curso reBot existente:

- [Incorporação Robótica e Arquitetura do GR00T](/pt-br/robotics/rebot_physical_ai_course_chapter_19/)
- [Preparar um Dataset VLA para o reBot](/pt-br/robotics/rebot_physical_ai_course_chapter_20/)
- [Fazer Fine-Tuning do GR00T N1.7 para o Braço reBot](/pt-br/robotics/rebot_physical_ai_course_chapter_21/)
- [Implantar o Modelo com Fine-Tuning no Robô](/pt-br/robotics/rebot_physical_ai_course_chapter_22/)

As configurações experimentais do N1 discutidas abaixo pertencem ao artigo original. Use os tutoriais do N1.7 para configuração de treinamento e implantação específicas da versão.


## Pré-requisitos

### De ACT para GR00T N1: O Loop de Aprendizado é o Mesmo

Se você já usou LeRobot + ACT, este fluxo de trabalho é familiar:

```text
Human teleoperation
    ↓
Collect camera / state / action data
    ↓
Organize an episode dataset
    ↓
Train a policy
    ↓
Observation → Action chunk → On-robot execution
```

GR00T N1 ainda responde à mesma pergunta:

> Dado o que o robô vê, seu estado atual e a solicitação do usuário, como ele deve se mover em seguida?
> 
> 

Normalmente, o ACT aprende um robô e uma família de tarefas a partir de demonstrações. O GR00T N1 busca pré-conhecimentos gerais a partir de múltiplos robôs, vídeos humanos e dados sintéticos antes de se adaptar a um robô real específico.

![GR00T N1 Paper Deep-Dive: 1.1 From ACT to GR00T N1: The Learning Loop Is the Same (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-11-en.png)


O ACT começa com uma habilidade concreta; o GR00T N1 primeiro aprende uma base entre corpos e tarefas, depois aprende a usar o robô atual.

### Observação, Estado, Ação e Incorporação

Os três termos introduzidos com o ACT mantêm seu significado:

- **Observação:** informação de sensores externos, como imagens RGB da cabeça, do punho e de múltiplas vistas.

- **Estado:** a configuração do robô, incluindo ângulos das juntas, abertura do gripper, pose do efetuador final, estado da cintura ou do pescoço.

- **Ação:** controles solicitados, potencialmente alvos de juntas, incrementos, poses do efetuador final ou comandos do gripper.



**Incorporação** inclui mais do que aparência. Ela combina definições de corpo e de controle:

```text
Robot structure
+ Sensors
+ State definition
+ Action definition
+ Control frequency and mode
= One embodiment
```

Um único Franka, um sistema bimanual e um humanóide GR-1 têm diferentes dimensões de estado/ação. Compartilhar um modelo entre esses corpos é um desafio central.

### VLA, Agrupamento de Ações e Flow Matching

![GR00T N1 Paper Deep-Dive: 1.3 VLA, Action Chunking, and Flow Matching (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-09-en.png)


Uma **VLA** adiciona linguagem de tarefa às entradas de política visual. A linguagem identifica qual objeto manipular, para onde ele deve ir e se o comportamento corresponde ao pedido; não é contexto decorativo.

Um **bloco de ação**, como no ACT, prediz uma curta sequência futura em vez de uma única ação. O GR00T N1 define `H = 16`.

**Flow matching** pode ser entendido como refinar ações aleatórias em um bloco executável sob condicionamento de imagem, linguagem e estado. O artigo usa apenas `K = 4` atualizações de inferência.

---

## Resumo

Robôs de uso geral precisam de corpos capazes e modelos inteligentes. Humanóides são promissores para ambientes humanos, mas compreender novas situações, lidar com variações do mundo real e aprender rapidamente novas tarefas exige modelos de base treinados em dados grandes e diversos.

GR00T N1 é um modelo de base aberto para humanóides com uma arquitetura VLA de sistema duplo. Um módulo de visão e linguagem, Sistema 2, interpreta imagens e instruções; um Transformer de difusão, Sistema 1, gera ações suaves em tempo real. Os módulos são fortemente conectados e treinados em conjunto de ponta a ponta.

O treinamento mistura trajetórias reais, vídeos humanos e dados sintéticos. O GR00T N1 supera as bases de aprendizado por imitação comparadas em benchmarks de simulação entre diferentes incorporações e aprende tarefas bimanual condicionadas por linguagem de forma eficiente no humanóide Fourier GR-1.

Três ideias organizam o artigo:

1. **VLA de sistema duplo:** um componente interpreta, outro age.

2. **Dados heterogêneos:** usar vídeos humanos, simulação e vídeos gerados junto com demonstrações de robôs.

3. **Compartilhamento entre incorporações:** corpos diferentes compartilham capacidades centrais em vez de receber modelos totalmente independentes.



---

## Introdução e Trabalhos Relacionados

### Hardware, Modelos, Dados e Ilhas de Dados

A introdução identifica três elementos necessários:

- **Hardware** determina a capacidade física. Humanóides são atraentes porque ambientes humanos são projetados para corpos humanos.

- **Modelos** devem lidar com tarefas abertas, não um comportamento fixo.

- **Dados** determinam a exposição a ambientes, objetos, tarefas e corpos.



Modelos de linguagem e visão podem aprender com a internet, mas a robótica não tem um equivalente de internet de ações. Dados reais são caros e lentos de coletar, e robôs diferem em juntas, sensores e controles.

Juntar conjuntos de dados ainda pode deixar **ilhas de dados**: arquivos compartilham um banco de dados, mas não espaços semânticos ou de ação.

O artigo, portanto, pergunta não apenas como projetar uma política, mas também como unificar seu corpus de treinamento.

### A Pirâmide de Dados

![GR00T N1 Paper Deep-Dive: 3.2 The Data Pyramid (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-12.png)

| Nível | Dados | Quantidade relativa | Relação com o robô |
|---|---|---|---|
| Base | Dados da web + vídeos humanos | Maior | Conceitos ricos de ação sem comandos diretos de robô. |
| Meio | Simulação + trajetórias neurais | Grande | Escalável e controlável, mas com viés de simulação ou geração. |
| Topo | Dados de robôs no mundo real | Menor | Mais próximo da execução, mais caro de coletar. |

Subir na pirâmide reduz a quantidade, mas aumenta a especificidade para a incorporação alvo.

Vídeos humanos: quais ações e tarefas existem
Simulação / geração: como essas tarefas podem variar
Dados de robôs reais: como este corpo deve executá-las

---

## Arquitetura do GR00T N1

### Sistema 2 Entende; Sistema 1 Age

![GR00T N1 Paper Deep-Dive: 4.1 System 2 Understands; System 1 Acts (image-17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-17.png)

A arquitetura toma emprestada uma analogia de sistema duplo da cognição:

- **Sistema 2: Eagle-2 VLM**, interpretando imagens, linguagem e tarefas.

- **Sistema 1: Transformer de difusão (DiT)**, gerando ações contínuas rapidamente.



Eles não são programas independentes: cross-attention os conecta fortemente e o treinamento os otimiza em conjunto.

Eagle-2 contém um modelo de linguagem e um codificador de imagens. Imagens entram em `224 × 224`, produzindo 64 tokens por quadro. Os autores usam recursos intermediários da camada 12 do VLM em vez de recursos finais, melhorando a velocidade e o sucesso posterior em seus experimentos.

O Sistema 2 opera a cerca de 10 Hz em uma NVIDIA L40, enquanto o sistema de ação pode gerar controles em malha fechada em uma taxa mais alta. A interpretação de alto nível não precisa ser recomputada a cada milissegundo, enquanto o movimento deve permanecer contínuo.

### Conectando Diferentes Robôs a um Único DiT

![GR00T N1 Paper Deep-Dive: 4.2 Connecting Different Robots to One DiT (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-13.png)

Existem dois tipos de módulos:

- **Núcleo compartilhado:** VLM e DiT compartilham conhecimento visual, de linguagem e comportamental entre robôs.

- **Interfaces específicas de incorporação:** codificador de estado, codificador de ação e decodificador de ação traduzem dimensões de plataforma e semântica de controle de e para recursos compartilhados.



| Módulo | Função | Por que específico da incorporação? |
|---|---|---|
| Codificador de estado | Codificar o estado atual como tokens. | Campos e dimensões de estado diferem. |
| Codificador de ação | Codificar ações ruidosas e tempo de geração. | Dimensões de ação diferem. |
| Decodificador de ação | Converter recursos do DiT em controles. | Modos de controle de juntas, efetuador final e gripper diferem. |

**Comentário:** Aprendizado entre robôs não é apenas preencher vetores com zeros até terem o mesmo comprimento. Dimensões iguais são sem sentido sem saber qual junta, pose ou comando cada valor representa.

### Blocos de Ação com Flow Matching

No tempo `t`, predizer uma sequência em vez de uma única ação:

```text
A_t = [a_t, a_(t+1), ..., a_(t+H-1)]
H = 16
```

O treinamento começa com o bloco real `A_t`, ruído Gaussiano `ε` e tempo de fluxo `τ`, construindo:

```text
A_t^τ = τ A_t + (1 - τ) ε
```

- Perto de `τ=0`, o bloco se assemelha a ruído.

- Perto de `τ=1`, ele se assemelha a ações reais.



O DiT lê recursos de visão-linguagem, recursos de estado e ações ruidosas para aprender uma direção de atualização. O artigo escreve a loss como:

```text
L_fm(θ)
= E_τ [ || V_θ(φ_t, A_t^τ, q_t) - (ε - A_t) ||² ]
```

Aqui `φ_t` denota recursos do VLM e `q_t` recursos de estado do robô.

Na inferência não há ação futura real, então ela começa a partir de ruído e realiza quatro atualizações de Euler direto:

```text
A_t^0 ~ N(0, I)

A_t^(τ+1/K)
= A_t^τ + (1/K) V_θ(φ_t, A_t^τ, q_t)

K = 4
```

GR00T-N1-2B tem 2,2B de parâmetros no total, incluindo cerca de 1,34B no VLM. Em uma L40, gerar um bloco de 16 passos leva cerca de 63,9 ms.

---

## Dados e Treinamento

### Usando Vídeos sem Ações de Robô

Trajetórias de robôs supervisionam diretamente imagens, estados e ações. Vídeos humanos e gerados contêm imagens, mas nenhum comando de junta de robô.

GR00T N1 adiciona supervisão semelhante a ações de duas maneiras.

**Ações latentes** aprendem códigos comportamentais discretos a partir de mudanças visuais, em vez de ângulos de juntas exatos: conceitos como mover para a esquerda, agarrar ou empurrar.

![GR00T N1 Paper Deep-Dive: 5.1 Using Videos without Robot Actions (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-01.png)

Essas ações podem abranger diferentes corpos: mãos humanas e garras de robôs têm juntas diferentes, mas ambas podem mover um objeto para a esquerda na imagem.

Um **modelo de dinâmica inversa (IDM)** infere ações entre observações:

```text
Observation_t + Observation_(t+1)
                  ↓
                 IDM
                  ↓
          Pseudo Action Label
```

Ações latentes se assemelham a um vocabulário comportamental sem unidade; as saídas do IDM se assemelham a rótulos de pseudo-ações. Nenhuma das duas torna os vídeos demonstrações físicas perfeitas. Elas tornam dados apenas de imagem utilizáveis para pré-treinamento.

### Trajetórias neurais e simulação: mais variação a partir de menos demonstrações

A geração de vídeo começa a partir de imagens reais de robôs e varia prompts de linguagem para sintetizar tarefas, posições de objetos e trajetórias. Estas são **trajetórias neurais**.

![GR00T N1 Paper Deep-Dive: 5.2 Neural Trajectories and Simulation: More Variation from Fewer Demonstrations (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-00.png)

Os autores expandem 88,4 horas de teleoperação interna para 827,3 horas de vídeo gerado, quase dez vezes mais. A geração pode mover objetos de forma impossível, distorcer contatos ou deformar o robô, então filtros baseados em modelo de linguagem e em regras removem amostras de baixa qualidade antes que ações latentes ou IDM forneçam supervisão.

![GR00T N1 Paper Deep-Dive: 5.2 Neural Trajectories and Simulation: More Variation from Fewer Demonstrations (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-08.png)

A simulação, por sua vez, é executada em um motor de física. Métodos como DexMimicGen redirecionam demonstrações centradas em objetos para novas cenas, produzindo cerca de 780.000 trajetórias simuladas, aproximadamente 6.500 horas.

**Diferença:**

- Trajetórias neurais fornecem variação visual e semântica, mas confiabilidade física limitada.

- A simulação fornece ações exatas e interações físicas, mas mantém um descompasso sim-to-real.



### Pré-treinamento e pós-treinamento

Os dados de teleoperação vêm de Manus, VIVE, Apple Vision Pro, Leap Motion e outros dispositivos, redirecionados para os robôs.

![GR00T N1 Paper Deep-Dive: 5.3 Pre-Training and Post-Training (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-05.png)

![GR00T N1 Paper Deep-Dive: 5.3 Pre-Training and Post-Training (image-15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-15-en.png)


Pós-treinamento não é nem treinar do zero nem controle imediato zero-shot de robôs arbitrários. Ele adapta a base a uma configuração de câmera, estado, interface de ação e tarefa-alvo.

| Configuração | Pré-treinamento | Pós-treinamento |
|---|---|---|
| Tamanho do lote | 16.384 | 128 ou 1.024 |
|Passos de gradiente|200.000|20.000\-60.000|
| Dados principais | Múltiplas encarnações | Uma encarnação / tarefa |
| Finalidade | Priors gerais | Adaptação a um corpo e tarefa específicos |

O pré-treinamento do GR00T-N1-2B usa cerca de 50.000 horas de GPU H100. O conjunto de dados totaliza 8.375,7 horas e 592,9 milhões de quadros.

**Visão em uma frase:** o pré-treinamento fornece ampla experiência de mundos e corpos; o pós-treinamento ensina o modelo a usar este robô específico.

---

## Experimentos e resultados

### Como a eficácia é testada?

Testes em simulação e no mundo físico examinam priors de pré-treinamento e adaptação com dados limitados, em vez de apenas ajustar tarefas de treinamento.

![GR00T N1 Paper Deep-Dive: 6.1 How Is Effectiveness Tested? (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-10.png)

Os benchmarks de simulação incluem:

- **RoboCasa Kitchen:** 24 tarefas de cozinha.

- **DexMimicGen Cross-Embodiment Suite:** nove tarefas de manipulação entre robôs diferentes.

- **GR-1 Tabletop:** 24 tarefas humanoides em bancada.



Testes reais com o GR-1 incluem pega-e-coloca, objetos articulados, manipulação industrial e cooperação multi-robô.

![GR00T N1 Paper Deep-Dive: 6.1 How Is Effectiveness Tested? (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-03.png)

As principais comparações são BC-Transformer e Diffusion Policy. GR00T N1 difere não apenas em tamanho e arquitetura, mas em pré-treinamento heterogêneo entre encarnações, então os resultados refletem também os dados e o treinamento.

### Priors ajudam com poucos dados?

O pós-treinamento em simulação usa 30, 100 ou 300 demonstrações por tarefa. As principais tendências são:

- Priors ajudam mais quando os dados da tarefa são escassos.

- Com mais dados, uma Diffusion Policy dedicada reduz a diferença, mas GR00T N1 mantém forte eficiência de dados.

- Em alguns cenários, cerca de 10% dos dados da tarefa se aproxima da Diffusion Policy treinada com todos os dados.



![GR00T N1 Paper Deep-Dive: 6.2 Do Priors Help with Little Data? (image-16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-16.png)

A implicação prática é:

> O valor de um modelo de base não é não precisar de dados; é aprender de forma eficaz a partir de um ponto de partida pré-treinado quando seus dados são limitados.
> 
> 

### Trajetórias neurais melhoram o comportamento real?

Ablations comparam apenas dados reais, vídeos gerados rotulados com ações latentes e vídeos gerados com pseudo-ações de IDM.

![GR00T N1 Paper Deep-Dive: 6.3 Do Neural Trajectories Improve Real Behavior? (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-02.png)

Trajetórias sintéticas melhoram algumas tarefas, com IDM frequentemente se conectando de forma mais direta a espaços de ação reais do que códigos latentes. Mais geração não é automaticamente melhor: erros físicos e viés de pseudo-rótulos também entram no treinamento.

Os autores também observam passagens espontâneas de mão esquerda para direita em um modelo pré-treinado que podem desaparecer após um pós-treinamento focado em tarefas estreitas.

![GR00T N1 Paper Deep-Dive: 6.3 Do Neural Trajectories Improve Real Behavior? (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-04.png)

Isso ilustra o **esquecimento catastrófico**: um ajuste fino focado pode elevar a pontuação-alvo enquanto sobrescreve capacidades mais amplas pré-treinadas.

---

## Limitações, implicações práticas e resumo

### O que permanece sem solução?

- **Principalmente tarefas curtas em bancada.** Navegação de longa duração, movimento de corpo inteiro e planejamento conjunto permanecem como trabalhos futuros.

- **Raciocínio espacial limitado.** Reconhecer um objeto não implica compreensão precisa de 3D, contato ou força.

- **Inconsistências físicas sintéticas.** Vídeo com aparência plausível não garante movimento executável.

- **Esquecimento durante o pós-treinamento.** A adaptação deve ser avaliada quanto à retenção de generalização, bem como quanto ao sucesso no alvo.



### Conectando à prática do LeRobot

O apêndice de engenharia estende o formato de conjunto de dados do LeRobot. Armazenar números é insuficiente; seus significados precisam ser definidos.

| Conteúdo | Informação a especificar |
|---|---|
| Vídeo | Nomes de câmeras, visões, resolução, taxa de quadros e alinhamento temporal. |
| Estado | A junta ou pose representada por cada dimensão. |
| Ação | Alvos absolutos ou incrementais; controles de junta ou de efetuador final. |
| Linguagem | Instruções associadas a cada episódio. |
| Rotação | Matriz de rotação, ângulos de Euler, quaternions ou representação 6D. |

`modality.json` adiciona essas semânticas, abordando se o modelo entende o sétimo número, não apenas se consegue abrir o arquivo.

Para leitores com conjuntos de dados ACT, as considerações adicionais são:

| Etapa | Prática ACT | Considerações adicionais para foundation-VLA |
|---|---|---|
| Coleta | Alinhar câmeras, estado e ações. | Anotações de linguagem estáveis. |
| Dados | Consistência dentro de um robô. | Consistência semântica entre encarnações. |
| Treinamento | Aprender uma política a partir de demonstrações. | Pós-treinar um checkpoint de base. |
| Inferência | Imagem + estado → bloco de ações | Imagem + linguagem + estado → bloco de ações |
| Avaliação | Sucesso no robô | Sucesso, generalização e retenção de capacidades pré-treinadas |

</div>

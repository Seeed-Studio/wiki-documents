---
description: "Capítulo 17 do Curso para Iniciantes em IA Física da Seeed — inferência em robô real, avaliação e iteração de dados: fluxo de dados de inferência, pré-processamento e desnormalização, início da inferência, execução de blocos de ação, segurança, avaliação da taxa de sucesso, teste de generalização, análise de falhas e coleta de dados guiada por falhas."
title: Capítulo 17 - Inferência em Robô Real, Avaliação e Iteração de Dados
keywords:
  - reBot
  - ACT
  - Inference
  - Evaluation
  - Data Iteration
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_17
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 17 · Teoria e Prática</span>
    <h2>17. Inferência em Robô Real, Avaliação e Iteração de Dados</h2>
    <p>
      Capítulo 17 do Curso para Iniciantes em IA Física da Seeed — fluxo de dados de inferência,
      pré-processamento e desnormalização, início da inferência, execução de blocos de ação, segurança,
      avaliação da taxa de sucesso, teste de generalização, análise de falhas e coleta de dados guiada por falhas.
      collection.
    </p>
    <div className="hero-actions">
      <a href="#start-inference">Inferência</a>
      <a href="#evaluation">Avaliação</a>
      <a href="#data-iteration">Iteração</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>17.1 Fluxo de Dados de Inferência</span>
    <span>17.2 Pré-processamento e Desnormalização</span>
    <span>17.3 Iniciando a Inferência em Robô Real</span>
    <span>17.4 Execução de Blocos de Ação</span>
    <span>17.5 Segurança: Limites, Limites de Velocidade, Parada de Emergência</span>
    <span>17.6 Avaliação: Taxa de Sucesso e Tempo de Conclusão</span>
    <span>17.7 Teste de Generalização</span>
    <span>17.8 Análise de Tipos de Falha</span>
    <span>17.9 Iteração de Dados: Coleta de Dados Guiada por Falhas</span>
  </div>
</section>

<RebotCourseNav />

## 17.1 Fluxo de Dados de Inferência

<section id="inference-flow" className="section-card">
  <div className="section-title">
    <span>Fluxo</span>
    <h2>17.1 Fluxo de Dados de Inferência: Entenda em Um Diagrama</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-01.png" alt="Inference data flow" />
</div>

</section>

## 17.2 Pré-processamento e Desnormalização

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>Pré-processamento</span>
    <h2>17.2 Pré-processamento e Desnormalização</h2>
  </div>

Durante o treinamento o modelo consome dados normalizados; durante a inferência você deve seguir **as mesmas regras** tanto para entrada quanto para saída:

| Direção | Processamento | Estatísticas usadas |
| :--- | :--- | :--- |
| Para dentro do modelo | Redimensionamento de imagem + média/desvio padrão do ImageNet; estado menos a média, dividido pelo desvio padrão (z-score) | `meta/stats.json` do conjunto de dados de treinamento |
| Para fora do modelo | Ação multiplicada pelo desvio padrão, mais a média; restaurar para ângulos reais das juntas | Mesmo que acima |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-02.png" alt="Preprocessing and de-normalization" />
</div>

</section>

## 17.3 Iniciando a Inferência em Robô Real

<section id="start-inference" className="section-card">
  <div className="section-title">
    <span>Inferência</span>
    <h2>17.3 Iniciando a Inferência em Robô Real</h2>
  </div>

Use `lerobot-record` para carregar a política; os parâmetros do robô e da câmera são idênticos aos da coleta:

**Versão RS:**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the crayfish into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false
```

**Versão DM:**

```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the crayfish into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false
```

- `--dataset.num_episodes=10`: executar 10 episódios.
- `--dataset.episode_time_s=60`: máximo de 60 segundos por episódio. Defina com base na duração da tarefa — por exemplo, pegar um lagostim e colocá-lo em uma caixa leva cerca de 20-30 segundos, então defina 30-40 para deixar uma margem. Se você quiser testar o modelo sem esperar, defina um valor bem alto (por exemplo, 300), já que há um intervalo entre episódios.
- `--dataset.reset_time_s=10`: 10 segundos entre episódios para você reposicionar os objetos (durante a avaliação, mantenha o estado inicial o mais consistente possível).

</section>

## 17.4 Execução de Blocos de Ação

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>Execução</span>
    <h2>17.4 Execução de Blocos de Ação</h2>
  </div>

- Uma inferência gera um bloco de ação de 100 passos; **apenas os primeiros n passos são executados em malha aberta** (`n_action_steps`), depois o sistema volta a observar — previsões mais distantes são menos confiáveis.
- Quando o agrupamento temporal está ativado (`temporal_ensemble_coeff`), a ação em cada passo de tempo é uma média ponderada de múltiplas previsões, com trepidação praticamente nula.
- Se o robô real parecer "engasgado", provavelmente é o intervalo de computação entre blocos — o bloco antigo terminou e o novo ainda não foi calculado. Aumentar `n_action_steps` pode ajudar, ao custo de menor resistência a perturbações.

</section>

## 17.5 Segurança: Limites, Limites de Velocidade, Parada de Emergência

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Segurança</span>
    <h2>17.5 Segurança: Limites, Limites de Velocidade, Parada de Emergência</h2>
  </div>

- **Sempre use ESC para parar**; não use Ctrl+C. Antes de parar, deixe o braço terminar o bloco de ação atual ou retorne-o manualmente para uma pose segura para evitar parar no ar em uma posição carregada.
- Esteja sempre pronto para cortar a alimentação; se o braço se comportar de forma anormal, é necessário desligar a energia em emergência.

</section>

## 17.6 Avaliação: Taxa de Sucesso e Tempo de Conclusão

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Avaliação</span>
    <h2>17.6 Avaliação: Taxa de Sucesso e Tempo de Conclusão</h2>
  </div>

Fixe as condições iniciais, execute 20 testes consecutivos e registre cada um.

- **Taxa de sucesso = sucessos ÷ 20.** Para um primeiro modelo treinado, >50% é um começo normal, >80% é excelente.
- **Tempo de conclusão:** verifique a estabilidade — as execuções bem-sucedidas têm duração semelhante? Velocidade inconsistente significa que a política está "hesitando".
- Execuções com falha — **não registre apenas um ✗** — anote o modo de falha.

</section>

## 17.7 Teste de Generalização

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>Generalização</span>
    <h2>17.7 Teste de Generalização</h2>
  </div>

Depois de testar em condições padrão, varie as condições uma a uma e veja quanto a taxa de sucesso cai (ACT com 50 episódios não terá grande generalização; recomendamos adicionar dados).

| Teste | Método | Expectativa |
| :--- | :--- | :--- |
| Generalização de posição | Coloque o bloco fora dos cinco pontos de lápis, mas dentro da cobertura de treinamento | Deve quase não cair; se cair, a diversidade de posições é insuficiente |
| Perturbação leve | Coloque objetos não relacionados sobre a mesa | Um modelo treinado em cena visualmente limpa não deve ser afetado |
| Grande mudança de distribuição | Objetos totalmente novos, superfície espelhada reflexiva | A falha é esperada; não há necessidade de corrigir |

O objetivo do teste de generalização não é provar quão forte é o modelo, mas sim **mapear o limite de sua capacidade** — use livremente dentro desse limite; complemente os dados e expanda-o gradualmente para além dele.

</section>

## 17.8 Análise de Tipos de Falha

<section id="failure-analysis" className="section-card">
  <div className="section-title">
    <span>Falhas</span>
    <h2>17.8 Análise de Tipos de Falha</h2>
  </div>

| Tipo de falha | Causa mais provável | Contramedida |
| :--- | :--- | :--- |
| Não alcança: se move para a posição errada | Cobertura de dados insuficiente nessa posição (fora da distribuição) | Complementar demonstrações nessa área |
| Pegada instável: toca mas não segura/derruba | Momento de fechamento da garra aprendido de forma imprecisa; poucas demonstrações do momento da pegada | Adicionar demonstrações de alta qualidade do momento da pegada |
| Movimento aleatório o tempo todo; ações absurdas | O treinamento não convergiu, ou a cena/iluminação mudou significativamente | Verificar se a cena e a iluminação da coleta de dados correspondem às da inferência |

:::tip
**Primeiro descarte problemas de configuração, depois suspeite de problemas de dados** — movimento aleatório é uma “doença de configuração”; não-alcançar é uma “doença de dados”.
:::

</section>

## 17.9 Iteração de Dados: Coleta de Dados Guiada por Falhas

<section id="data-iteration" className="section-card">
  <div className="section-title">
    <span>Iteração</span>
    <h2>17.9 Iteração de Dados: Coleta de Dados Guiada por Falhas</h2>
  </div>

A etapa final do ciclo — transformar falhas em dados:

1. **Classificar:** identificar o tipo de falha e a cena correspondente.
2. **Complementar:** registrar 10-20 novas demonstrações para a cena de falha — não alcança? registre nessa posição; pegada instável? registre o momento da pegada. Expanda conscientemente o limite de pegada gradualmente — por exemplo, coloque blocos em pontos de 5-10 cm além da cruz original para expandir o conjunto de dados.
3. **Re-treinar:** re-treinar com o novo conjunto de dados.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17/ch17-03.png" alt="Data iteration" />
</div>

Com isso, o loop fechado do início do capítulo está totalmente completo: teleoperação, coleta, inspeção, treinamento, inferência, avaliação, iteração — esse pipeline é reutilizado como está para qualquer nova tarefa. Esse é o principal resultado da Fase 3.

</section>

</div>

---
description: "Capítulo 16 do curso para iniciantes em SO-ARM Physical AI — como a inferência funciona no SO-ARM real, rode sua política ACT com lerobot-record e lerobot-rollout, avalie por taxa de sucesso, analise falhas e itere os dados."
title: Capítulo 16 - Inferência real, avaliação e iteração de dados
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - inferência
  - avaliação
  - ACT
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_16
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 16 · Teoria e prática</span>
    <h2>16. Inferência real, avaliação e iteração de dados</h2>
    <p>
      Capítulo 16 do curso para iniciantes em SO-ARM Physical AI — como a inferência funciona no SO-ARM real, rode sua política ACT treinada com lerobot-record e lerobot-rollout, avalie por taxa de sucesso, analise falhas e itere os dados.
    </p>
    <div className="hero-actions">
      <a href="#dataflow">Fluxo de inferência</a>
      <a href="#inference">Rodar inferência</a>
      <a href="#evaluation">Avaliar</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>
      A inferência move o braço real com torque total e sem humano no ciclo. Limpe o espaço num raio de 1 metro, afaste as mãos e mantenha a mão pronta para cortar a energia.
    </p>
  </div>
</div>

## 16.1 Fluxo de dados da inferência

<section id="dataflow" className="section-card">
  <div className="section-title">
    <span>Fluxo de dados</span>
    <h2>16.1 Fluxo de dados da inferência</h2>
  </div>

Lembre do Capítulo 9: a inferência é a imagem espelhada da coleta. Ciclo por quadro:

1. Ler as duas câmeras → **Observação**;
2. Ler as 6 juntas do seguidor → **Estado**;
3. Normalizar com as estatísticas salvas no dataset;
4. A política prevê um **bloco de ações** (k × 6);
5. Executar nos servos os primeiros passos do bloco;
6. Consumida a parte executada, reobservar e reprever.

O braço líder agora fica de fora — o modelo substituiu o humano como decisor. Todo o resto (câmeras, barramento serial, limites de segurança) é idêntico à gravação, e é por isso que as chaves de câmera e o `--robot.id` precisam bater exatamente com a sessão de gravação.

</section>

## 16.2 Pré-processamento e desnormalização

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>Pré-processamento</span>
    <h2>16.2 Pré-processamento e desnormalização</h2>
  </div>

Seu dataset guardou estatísticas por feature (média/desvio) em `meta/stats` (Capítulo 13). Na inferência:

- **Entrada:** imagens e estados são normalizados com as estatísticas de treino antes de entrar na rede;
- **Saída:** as ações normalizadas da rede são desnormalizadas de volta a valores reais de junta antes de irem aos servos.

É por isso que o comando de avaliação deve usar **as mesmas chaves de câmera** (`front`, `side`) da gravação — chave trocada significa estatística faltando, e aparece isto:

```text
mean is infinity. You should either initialize with stats as an argument or use a pretrained model
```

</section>

## 16.3 Iniciar a inferência no robô real

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inferência</span>
    <h2>16.3 Iniciar a inferência no robô real</h2>
  </div>

### Método A: `lerobot-record` com política (recomendado para começar)

A ferramenta record aceita um checkpoint de política. Ela grava um **dataset de avaliação** enquanto a política comanda o braço — 10 episódios de avaliação:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeedstudio123/eval_test123 \
  --dataset.single_task="Put the object from Point A into Point B" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

Notas:

1. `--policy.path` é o checkpoint do Capítulo 15. Se o subiu ao Hub, serve um repo id (ex.: `${HF_USER}/act_so101_test`).
2. O `dataset.repo_id` de avaliação costuma começar com `eval_` — vídeos e dados ficam separados, ex.: `seeedstudio123/eval_test123`.
3. Se aparecer `File exists: '.../eval_xxxx'`, apague a pasta de avaliação antiga e rode de novo.
4. As chaves de câmera (`front`, `side`) devem coincidir exatamente com as da gravação do dataset (ver 16.2).

### Método B: `lerobot-rollout` em tempo real

Execução ao vivo sem gravar (suportado por políticas como SmolVLA / ACT):

```bash
lerobot-rollout \
  --strategy.type=base \
  --policy.path=${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \
  --duration=60
```

</section>

## 16.4 Execução do bloco de ações

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>Execução</span>
    <h2>16.4 Execução do bloco de ações</h2>
  </div>

A distinção bloco/horizonte do Capítulo 14 fica visível aqui:

- O modelo prevê k=100 ações por passada;
- Só a primeira parcela roda em malha aberta antes de reobservar;
- A sobreposição entre o fim do bloco velho e o começo do novo é suavizada (ensemble temporal), então o movimento parece contínuo, não aos trancos.

Se o braço se move em "arrancadas" — uma pausa forte a cada meio segundo — o problema é o horizonte efetivo ou a velocidade de inferência: confira a GPU, o fps das câmeras e considere a inferência assíncrona (a política num processo servidor à parte; a ideia, no capítulo de implantação da Fase 4).

</section>

## 16.5 Segurança: limites, velocidade e parada de emergência

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Segurança</span>
    <h2>16.5 Segurança: limites, velocidade e parada de emergência</h2>
  </div>

- Os limites de junta da calibração restringem toda ação enviada.
- Mantenha a mão no interruptor nas primeiras rodadas de cada checkpoint novo; cortar a energia é a parada mais rápida (os servos afrouxam).
- ESC numa sessão de avaliação `lerobot-record` encerra o episódio de forma limpa.
- Nunca deixe o braço rodar sem supervisão perto de pessoas, cabos ou da borda da mesa.

</section>

## 16.6 Avaliação: taxa de sucesso e tempo de conclusão

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Avaliação</span>
    <h2>16.6 Avaliação: taxa de sucesso e tempo de conclusão</h2>
  </div>

Use os critérios do Capítulo 11 — objetivamente determináveis, não "parece ok":

1. **Defina sucesso:** "o objeto termina dentro da área marcada de B".
2. **Varie os inícios:** coloque o objeto nos 5 pontos marcados e repita cada ponto N vezes.
3. **Conte:** sucessos / total = taxa. Registre também o tempo médio — uma política que demora ou tenta de novo e de novo também está te dizendo algo.

Tabela de resultados sugerida por checkpoint:

| Ponto inicial | Execuções | Sucessos | Taxa |
| :--- | :---: | :---: | :---: |
| Centro | 4 | 4 | 100% |
| Topo | 4 | 3 | 75% |
| Esquerda | 4 | 2 | 50% |
| ... | | | |

</section>

## 16.7 Teste de generalização

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>Generalização</span>
    <h2>16.7 Teste de generalização</h2>
  </div>

Aprovado o teste dentro da distribuição, sonde as fronteiras deliberadamente (uma mudança por vez):

- Mova o objeto levemente para fora da área marcada;
- Troque o objeto (outro tamanho, mesma categoria);
- Mude a luz (dia vs. abajur noturno).

Espere degradação suave dentro da distribuição e falha dura fora — o princípio de distribuição do Capítulo 8 aparecendo no hardware. Cada falha de generalização que você quiser consertar se responde com dados cobrindo aquela situação, não com mais passos de treino.

</section>

## 16.8 Análise dos tipos de falha

<section id="failures" className="section-card">
  <div className="section-title">
    <span>Falhas</span>
    <h2>16.8 Análise dos tipos de falha</h2>
  </div>

Classifique cada episódio falho num de quatro baldes — o balde dita a correção:

| Tipo de falha | Parece | Correção |
| :--- | :--- | :--- |
| **Falha de percepção** | Agarra 3 cm à esquerda do objeto | Dados sem cobertura daquela posição/luz → colete lá |
| **Falha de estratégia** | Sempre aproxima pelo lado errado | Demonstrações inconsistentes → regrave com uma estratégia |
| **Falha de execução** | Aproximação certa, objeto escorrega | Força/velocidade de agarre inconsistentes nos dados; confira a calibração da garras |
| **Falha de sistema** | Braço engasga, pausa, câmera trava | Não é o modelo: fps, banda USB, calibração, temperatura de servo |

</section>

## 16.9 Iteração de dados: coleta guiada por falhas

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteração</span>
    <h2>16.9 Iteração de dados: coleta guiada por falhas</h2>
  </div>

O ciclo que encerra a via principal da Fase 3:

1. Avalie (16.6) e classifique as falhas (16.8);
2. Para cada balde de falha de percepção/estratégia, grave 10–20 episódios novos cobrindo exatamente aquela situação (fluxo do Capítulo 12);
3. Limpe e mescle no dataset com as ferramentas do Capítulo 13;
4. Retreine (Capítulo 15) — retomado ou do zero;
5. Reavalie. Repita até a taxa satisfazer sua definição de "pronto".

Esse ciclo guiado por falhas — e não nenhuma rodada de treino — é a rotina diária dos projetos reais de aprendizado robótico.

</section>

</div>

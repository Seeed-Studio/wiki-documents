---
description: "Carregue um modelo ACT para inferência em robô real, entenda o pré-processamento e a execução de blocos de ações, avalie taxas de sucesso e melhore os dados usando casos de falha."
title: "Como implantar e avaliar ACT no reBot Arm"
hide_title: true
keywords:
  - Implantação prática
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Braço robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_act_deployment
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_act_deployment/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-act_deployment-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-act_deployment-title">Como implantar e avaliar ACT no reBot Arm</h1>
  <p className="paper-reading-lead">Execute ACT em um robô real, entenda o pré-processamento e a execução de blocos de ações, meça o sucesso e melhore os dados analisando as falhas.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Inferência no robô</li>
    <li>Execução de blocos de ações</li>
    <li>Avaliação</li>
    <li>Iteração de dados</li>
  </ul>
</section>

## Fluxo de Dados de Inferência em um Relance

![Implantar um Modelo ACT: Fluxo de Dados de Inferência em um Relance (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-deployment-01-inference-flow-en.png)

---

## Pré-processamento e Desnormalização

O modelo foi treinado com dados normalizados, portanto a inferência deve aplicar **as mesmas regras de entrada e saída**:

| Direção | Processamento | Estatísticas |
|---|---|---|
| Para dentro do modelo | Redimensionar imagens e aplicar normalização ImageNet; subtrair as médias dos estados e dividir pelos desvios padrão (z-score). | Conjunto de dados de treinamento `meta/stats.json` |
| Para fora do modelo | Multiplicar as ações pelos desvios padrão e somar as médias para recuperar os ângulos físicos das juntas. | As mesmas estatísticas |

![Implantar um Modelo ACT: Pré-processamento e Desnormalização (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-deployment-02-normalization-en.png)

---

## Iniciar a Inferência no Robô e Iterar nos Dados

Carregue a política com `lerobot-record`. Use exatamente os mesmos parâmetros de robô e câmera usados durante a coleta:

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

- `--dataset.num_episodes=10`: registra 10 episódios de avaliação.

- `--dataset.episode_time_s=60`: permite no máximo 60 segundos por episódio. Defina isso de acordo com a duração da tarefa: se colocar o lagostim na caixa leva 20–30 segundos, permita 30–40 segundos. Para observação prolongada sem esperar entre episódios, você pode usar uma duração maior, como 300 segundos.

- `--dataset.reset_time_s=10`: permite 10 segundos entre episódios para restaurar as posições dos objetos. Mantenha as condições iniciais o mais consistentes possível durante a avaliação.

---

## Executando um Bloco de Ações

- Uma inferência prediz um bloco de ações de 100 passos. Execute apenas os primeiros **n passos em malha aberta** (`n_action_steps`), depois observe novamente: as previsões se tornam menos confiáveis quanto mais distante no futuro.

- Com o agrupamento temporal (`temporal_ensemble_coeff`), a ação em cada passo de tempo é uma média ponderada de previsões sobrepostas, produzindo trajetórias mais suaves.

- Pausas visíveis geralmente ocorrem quando um bloco termina antes que a próxima inferência esteja pronta. Aumentar `n_action_steps` pode reduzir essas pausas, ao custo de respostas mais lentas a perturbações.

---

## Segurança: Limites, Velocidade e Paradas de Emergência

- **Use ESC para encerrar a sessão; não use Ctrl+C.** Antes de parar, deixe o braço terminar o bloco de ações atual ou retorne-o manualmente a uma pose segura (embora Ctrl+C atualmente também retorne o robô para zero), para evitar deixá-lo suspenso sob carga.

- Esteja pronto para desconectar a alimentação imediatamente se o braço se comportar de forma anormal.

---

## Avaliar Taxa de Sucesso e Tempo de Conclusão

Fixe as condições iniciais e execute 20 tentativas, registrando cada resultado.

- **Taxa de sucesso = tentativas bem-sucedidas ÷ 20.** Para o primeiro modelo treinado, acima de 50% é um ponto de partida normal e acima de 80% é excelente.

- **Tempo de conclusão** indica consistência. As tentativas bem-sucedidas devem levar tempos semelhantes; grandes variações sugerem hesitação.

- Para falhas, **registre o tipo de falha**, em vez de apenas marcar um X.

---

## Testar Generalização

Após testar as condições padrão, altere uma condição por vez e meça a queda na taxa de sucesso. Um modelo ACT treinado em 50 episódios tem generalização limitada; uma cobertura mais ampla exige mais demonstrações.

| Teste | Método | Comportamento esperado |
|---|---|---|
| Generalização de posição | Coloque o bloco longe dos cinco pontos marcados, mas dentro da região demonstrada. | Pouca degradação; uma queda sugere diversidade de posição insuficiente. |
| Distração leve | Adicione objetos não relacionados à mesa. | Um modelo com compreensão visual limpa não deve ser afetado. |
| Mudança clara de distribuição | Use um objeto completamente novo ou uma superfície de mesa reflexiva. | A falha é esperada fora da distribuição de treinamento. |

O objetivo é **mapear o limite de capacidade do modelo** e depois estendê-lo gradualmente com mais dados.

---

## Analisar Tipos de Falha

| Falha | Causa mais provável | Resposta |
|---|---|---|
| Alcança em direção à posição errada | Cobertura de dados insuficiente nessa posição; mudança de distribuição. | Coletar mais demonstrações nessa região. |
| Encosta no objeto mas não consegue segurá-lo, ou o deixa cair | Momento de fechamento mal aprendido ou poucos exemplos de preensão. | Adicionar demonstrações de alta qualidade do momento de preensão. |
| Move-se de forma errática o tempo todo | O treinamento não convergiu ou a cena e a iluminação mudaram substancialmente. | Verifique se a cena e a iluminação durante a coleta correspondem às da inferência. |

**Descarte problemas de configuração antes de culpar os dados.** Movimento errático geralmente exige verificações de configuração; alcance impreciso geralmente exige melhor cobertura.

---

## Iteração de Dados: Coletar para Casos de Falha

Feche o ciclo transformando falhas em dados:

1. **Classifique** a falha e a cena em que ela ocorre.

2. **Colete** de 10 a 20 novas demonstrações direcionadas a esse caso. Para alcances perdidos, registre a localização problemática; para preensões instáveis, enfatize o movimento de fechamento. Expanda gradualmente a região coberta, por exemplo com novos pontos espaçados de 5 a 10 cm ao redor da cruz original.

3. **Re-treine** usando o conjunto de dados atualizado.

![Implantar um Modelo ACT: Iteração de Dados: Coletar para Casos de Falha (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-deployment-03-data-iteration-en.png)

</div>

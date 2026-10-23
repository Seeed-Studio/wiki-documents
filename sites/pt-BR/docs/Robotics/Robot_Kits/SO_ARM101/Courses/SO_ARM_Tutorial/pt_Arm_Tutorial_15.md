---
description: "Capítulo 15 do curso para iniciantes em SO-ARM Physical AI — entenda batch size, learning rate e passos de treinamento, treine sua primeira política ACT com lerobot-train, monitore a perda e a GPU, e gerencie os checkpoints."
title: Capítulo 15 - Treinando sua primeira política ACT
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ACT
  - treinamento
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_15
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 15 · Prática</span>
    <h2>15. Treinando sua primeira política ACT</h2>
    <p>
      Capítulo 15 do curso para iniciantes em SO-ARM Physical AI — entenda batch size, learning rate e passos de treinamento, treine sua primeira política ACT com lerobot-train, monitore a perda e a GPU, e gerencie os checkpoints.
    </p>
    <div className="hero-actions">
      <a href="#configs">Três configurações</a>
      <a href="#checkpoints">Checkpoints</a>
      <a href="#start-training">Começar a treinar</a>
    </div>
  </div>
</section>

## 15.1 Três configurações-chave: batch size, learning rate, passos

<section id="configs" className="section-card">
  <div className="section-title">
    <span>Configurações</span>
    <h2>15.1 Três configurações-chave: batch size, learning rate, passos</h2>
  </div>

### Batch size

Quantos quadros o modelo vê por atualização. Batches maiores treinam mais estáveis, mas comem mais VRAM. Se faltar memória CUDA, baixe primeiro o batch. Comece no padrão do ACT e só mexa se precisar.

### Learning rate

Quanto os parâmetros andam por atualização. Alto demais — a perda oscila ou explode; baixo demais — o treino rasteja. O padrão do ACT (ordem de 1e-5) é bem testado para tarefas de mesa; não mude na primeira rodada.

### Passos de treinamento

Quantas atualizações no total. Para tarefas na escala do SO-ARM, 100k-300k passos é o comum; mais passos ajudam em tarefas difíceis, mas arriscam overfitting. Julgue pela curva: quando a perda de validação para de melhorar, pare.

:::tip
Estratégia da primeira rodada: deixe tudo no padrão, treine 100k passos, avalie no robô real (Capítulo 16) e então decida o que ajustar. Iniciante perde mais tempo afinando às cegas do que treinando duas vezes.
:::

</section>

## 15.2 Salvar e gerenciar checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>15.2 Salvar e gerenciar checkpoints</h2>
  </div>

Sem salvar manual: um checkpoint é salvo a cada `save_freq` passos, mais um `last` ao final. Pode colocar um passo alto — dá para escolher o modelo de menos passos e descartar os subtreinados ou viciados.

```text
outputs/train/act_so101_test/
├── train_config.json              ← Configuração completa da rodada (necessária para retomar)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Arquivo por contagem de passos
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Último checkpoint, usado no Capítulo 16
```

- **Disco:** cada checkpoint é um arquivo completo de pesos; dezenas somam. Estabilizado o treino, dá para apagar os antigos e manter só `last`.
- Na inferência, `--policy.path` aponta para `checkpoints/last/pretrained_model`.

</section>

## 15.3 Começar a treinar

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>Treinamento</span>
    <h2>15.3 Começar a treinar</h2>
  </div>

Tudo verificado — inicie (no ambiente conda `lerobot`). Para um **dataset local** (gravado no Capítulo 12), confira que o `repo_id` é o mesmo da coleta e acrescente `--policy.push_to_hub=false`:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

Para um **dataset no Hugging Face Hub**, use seu usuário:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

O que cada argumento faz:

- **Dataset:** `--dataset.repo_id` aponta para o do Capítulo 12.
- **Passos:** `--steps=300000`. O algoritmo vai mais alto por padrão; ajuste conforme a dificuldade e a curva.
- **Política:** `--policy.type=act` carrega a configuração ACT. A política se adapta automaticamente a estados, ações e número de câmeras do seu robô — tudo já está no dataset. Outras opções: `diffusion`, `pi0`, `pi0fast`, `smolvla`, `groot`.
- **Dispositivo:** `--policy.device=cuda` para GPUs NVIDIA; `mps` em Apple Silicon.
- **Visualização:** reative `--wandb.enable=true` para grafar o treino com [Weights and Biases](https://docs.wandb.ai/quickstart) (antes, `wandb login`).

:::tip
GPUs RTX da série 50 devem acrescentar `--dataset.video_backend=pyav` — contorna APIs ausentes na torchvision preliminar. Comando completo:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```
:::

</section>

## 15.4 Monitorar perda e GPU

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitoramento</span>
    <h2>15.4 Monitorar perda e GPU</h2>
  </div>

- **Perda:** impressa a cada `log_freq` passos. Espere queda rápida no início e um declínio longo e raso depois — isso é saudável. Perda subindo ou oscilando violentamente costuma indicar learning rate errado para seu ambiente.
- **GPU:** acompanhe VRAM e utilização com `nvidia-smi` (ou `watch -n 1 nvidia-smi`). Utilização perto de 0% por longos períodos = gargalo na tubulação de dados (disco/CPU), não na GPU.
- **Tempos de referência:** 50 episódios levam ~6 horas numa RTX 3060 8GB de notebook e 2–3 horas numa RTX 4090 ou A100. Depende de volume, resolução, batch e hardware.

</section>

## 15.5 Retomar um treino interrompido

<section id="resume" className="section-card">
  <div className="section-title">
    <span>Retomar</span>
    <h2>15.5 Retomar um treino interrompido</h2>
  </div>

Para retomar do `last`, devolva a configuração salva:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### Subir os checkpoints (opcional)

Concluído o treino, suba o último:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

</section>

## 15.6 Erros comuns de treinamento

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Solução de problemas</span>
    <h2>15.6 Erros comuns de treinamento</h2>
  </div>

| Erro | Solução |
| :--- | :--- |
| `TypeError: stack(): argument 'tensors' must be tuple of Tensors, not Column` | `pip install datasets==2.19` |
| CUDA sem memória | Reduza o batch; feche outros processos de GPU; use `--dataset.video_backend=pyav` |
| `No valid stream found in input file` ao carregar | `conda install ffmpeg=7.1.1 -c conda-forge` (correção do Capítulo 5) |
| Dataset não encontrado | Confira o `repo_id` exato da gravação; a pasta está em `~/.cache/huggingface/lerobot/` |

Com um `checkpoints/last/pretrained_model` treinado na mão, o próximo capítulo o coloca no braço real.

</section>

</div>

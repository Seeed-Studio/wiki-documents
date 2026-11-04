---
description: "Defina parâmetros de treinamento do ACT, inicie o treinamento, monitore a loss e o status da GPU, retome treinamentos interrompidos e gerencie checkpoints."
title: "Como treinar ACT no reBot Arm"
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
slug: /robotics/hands_on_act_training
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_act_training/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-act_training-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-act_training-title">Como treinar ACT no reBot Arm</h1>
  <p className="paper-reading-lead">Configure o treinamento do ACT, inicie uma execução, monitore a loss e o uso de GPU, retome treinamentos interrompidos e gerencie checkpoints.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Configuração de treinamento</li>
    <li>Loss e uso de GPU</li>
    <li>Retomar treinamento</li>
    <li>Checkpoint</li>
  </ul>
</section>

## Três configurações principais: tamanho do batch, taxa de aprendizado e steps

Execute `nvidia-smi` para verificar sua GPU e VRAM. GPUs de consumo, incluindo uma RTX 3050, também podem treinar o modelo.

**Tamanho do batch**: aumente-o quando a memória permitir, mas **não exceda a VRAM disponível**.

| Configuração | Orientação |
|---|---|
| 8 GB de VRAM ou menos | Use um batch pequeno: por exemplo, 4 com 8 GB ou 2 com 4 GB. |
| Mais de 12 GB de VRAM | Uma faixa mais confortável para o tamanho de batch padrão; use 16 se a memória permitir. |
| Apenas gráficos integrados / sem GPU NVIDIA | Treine em um servidor em nuvem. |

**Taxa de aprendizado:**

Este é o tamanho de cada atualização. ACT fornece presets: o otimizador AdamW, taxa de aprendizado `1e-5`, weight decay `1e-4` e uma taxa de aprendizado separada de `1e-5` para o backbone de visão. `lerobot-train` habilita por padrão os presets de treinamento de política (`use_policy_training_preset`), então esses valores são aplicados automaticamente sem configurações adicionais. Uma atualização muito grande faz a loss oscilar ou divergir; uma atualização muito pequena pode fazer o treinamento levar o dobro do tempo. Mantenha o preset na sua primeira execução: esses valores vêm do artigo e de ampla prática.

- Ao alterar o tamanho do batch ou os steps de treinamento, a recomendação é manter a taxa de aprendizado inalterada.

- Ao fazer fine-tuning de um checkpoint existente, considere `1e-6` a `3e-6`, cerca de 3–10 vezes menor.

- Se a training loss mal diminuir e permanecer plana, não aumente a taxa de aprendizado primeiro. Aumente os steps ou adicione dados; se ainda assim não se mover, tente `2e-5`.

    Adicione as seguintes configurações juntas e use o mesmo valor para ambas:

    ```text
    --policy.optimizer_lr=1e-6 \
    --policy.optimizer_lr_backbone=1e-6
    ```

**Steps de treinamento:**

Para 50 episódios, um ponto de partida simples é **80.000 steps**.

**Escalone os steps com o tamanho do batch:**

Reduzir o tamanho do batch pela metade reduz pela metade as amostras vistas por atualização. Dobre os steps para preservar aproximadamente o mesmo número de épocas. Partindo de `batch_size=8` e `steps=80000`, use 160000 steps para um batch de 4, quatro vezes mais steps para um batch de 2, ou metade dos steps para um batch de 16.

Você também pode definir mais steps de treinamento. Durante o treinamento, use Ctrl+C para interromper com base na loss e em outras métricas; os modelos correspondentes já gerados são salvos automaticamente.

- **Total de frames** corresponde aproximadamente à duração total gravada.

- **Uma época** significa ver o conjunto de dados gravado completo uma vez.

- **Steps** contam o número de atualizações de minibatch.

![Treinar um modelo ACT: 1. Três configurações principais: tamanho do batch, taxa de aprendizado e steps (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-training-01-training-steps-en.png)

---

## Iniciar o treinamento

Depois que todas as verificações forem aprovadas, execute o seguinte no ambiente conda `lerobot`:

```bash
lerobot-train \
    --dataset.repo_id=rebot_b601/grab_cube_v1 \
    --policy.type=act \
    --output_dir=outputs/train/act_grab_cube_v1 \
    --job_name=act_grab_cube_v1 \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.push_to_hub=false \
    --steps=100000
```

Para GPUs da série RTX 50, adicione `--dataset.video_backend=pyav` para contornar a API ausente na versão de prévia do torchvision usada por esta configuração.

Se a VRAM for insuficiente ou você quiser processar mais amostras de uma vez, adicione `--batch_size` para definir o tamanho do batch.

Referência de parâmetros:

| **Parâmetro** | **Significado** |
|---|---|
| `--dataset.repo_id` | Nome do conjunto de dados do Capítulo 13; insira diretamente o nome local ou `${HF_USER}/xxx` para um conjunto de dados no Hub. |
| `--policy.type=act` | Tipo de política; outras opções incluem diffusion e smolvla. Use ACT aqui. |
| `--output_dir` | Diretório para todas as saídas desta execução. |
| `--job_name` | Nome da execução usado para distinguir logs. |
| `--policy.device=cuda` | Treinar na GPU. |
| `--wandb.enable=false` | Desativar o painel online opcional do W&B. |
| `--policy.push_to_hub=false` | Manter o modelo fora do Hub até que você esteja satisfeito com a avaliação no Capítulo 17. |
| `--steps` | Número de steps de treinamento. |
| `--batch_size` | Definir o tamanho do batch. |

Como orientação aproximada, 100.000 steps normalmente levam várias horas em uma GPU de consumo, dependendo da GPU e do tamanho do batch.

---

## Monitorar a loss e o uso de GPU

Os logs de treinamento aparecem após o início. LeRobot imprime um resumo periodicamente, por padrão a cada 200 steps, controlado por `--log_freq`. Por exemplo:

```text
step: 10000  smpl: 80K  ep: 35.6  loss: 1.832  grdn: 12.4  lr: 1.0e-05  updt_s: 0.21  data_s: 0.003  eta: 3:42:10
```

Leia os campos da seguinte forma; os nomes podem variar ligeiramente entre versões:

| **Campo** | **Significado** | **O que verificar** |
|---|---|---|
| `step` | Step de treinamento atual | Compare com `--steps` para acompanhar o progresso. |
| `ep` | Épocas concluídas | Quantas vezes o modelo assistiu à gravação, conforme discutido na Seção 16.5. |
| `loss` | Training loss | Uma queda inicial rápida, uma queda mais lenta depois e pequenas flutuações são normais. |
| `grdn` | Norma do gradiente | Saltos repentinos para centenas ou milhares podem indicar instabilidade. |
| `lr` | Taxa de aprendizado atual | Confirme o valor esperado. |
| `updt_s` / `data_s` | Tempo de atualização / carregamento de dados por step | Um `data_s` grande sugere gargalo no carregamento de dados. |
| `eta` | Tempo restante estimado | Use para planejar a execução. |

**Tendências esperadas** se enquadram em três grupos:

- **`loss` deve diminuir ao longo do tempo.** Uma convergência saudável tem três fases: **uma queda acentuada no início**, **um declínio gradual no meio** e **pequenas flutuações em um nível baixo, amplamente estável**. Observe dois padrões anormais: nenhuma queda (um problema de dados ou configuração; volte à Seção 14.6 para inspecionar curvas e chaves de câmera) ou uma queda seguida de um aumento (divergência do treinamento; reduza a taxa de aprendizado pela metade e treine novamente).

- **`grdn` deve se estabilizar de forma geral, com picos ocasionais permitidos.** Ele frequentemente cai junto com a loss. Um pico isolado que se recupera geralmente é menos preocupante do que uma série de picos em crescimento constante, que pode preceder a divergência; reduza a taxa de aprendizado nesse caso.

- **`lr`, `updt_s`, `data_s` e a utilização da GPU devem permanecer amplamente estáveis nesta configuração.** Verifique se `lr` corresponde à configuração. Tempos de step e utilização de GPU estáveis em `watch -n 1 nvidia-smi` são desejáveis. Utilização persistentemente baixa ou irregular pode significar que a GPU está esperando por dados.

![Treinar um modelo ACT: 3. Monitorar a loss e o uso de GPU (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-training-02-loss-monitoring-en.png)

![Treinar um modelo ACT: 3. Monitorar a loss e o uso de GPU (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/act-training-03-loss-anomalies-en.png)

---

## Retomar treinamento interrompido

Após uma queda de energia, interrupção de rede ou fechamento acidental do terminal no meio do treinamento, você não precisa começar do zero, desde que pelo menos um checkpoint tenha sido salvo — isto é, após 20.000 steps de treinamento:

```bash
lerobot-train \
    --config_path=outputs/train/act_grab_cube_v1/train_config.json \
    --resume=true
```

- **A configuração salva governa a retomada.** A retomada usa `train_config.json`; parâmetros adicionais de linha de comando são ignorados. Para alterar steps ou tamanho do batch, inicie uma nova execução em vez de usar resume.

- **Continue a partir do último checkpoint.** O estado do otimizador e o contador de steps são restaurados, permitindo que a curva de loss continue.

---

## Salvar e gerenciar checkpoints

Checkpoints são salvos automaticamente a cada 20.000 steps (`save_freq`) e no final do treinamento. Portanto, um orçamento maior de steps é viável: avalie um checkpoint anterior se os posteriores estiverem com desempenho inferior ou overfitting, em vez de usar apenas o modelo final.

```text
outputs/train/act_grab_cube_v1/
├── train_config.json              ← Full configuration used for resuming
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Model saved at this step
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Final checkpoint, used in Chapter 17
```

- **Uso de disco**: cada checkpoint contém um conjunto completo de pesos do modelo, então muitos checkpoints podem consumir bastante espaço. Quando o treinamento estiver estável, remova checkpoints iniciais desnecessários e mantenha `last` mais um ou dois checkpoints recentes.

- Durante a inferência, aponte `--policy.path` para `checkpoints/last/pretrained_model`.

---

</div>

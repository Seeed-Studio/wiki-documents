---
description: "Capítulo 16 do Curso para Iniciantes em IA Física da Seeed — treine sua primeira política ACT: tamanho do batch, taxa de aprendizado e steps, gerenciamento de checkpoints, início do treinamento, monitoramento da loss e do status da GPU, e retomada de treinamentos interrompidos."
title: Capítulo 16 - Treinando Sua Primeira Política ACT
keywords:
  - reBot
  - ACT
  - LeRobot
  - Training
  - Policy
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_16
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 16 · Prática</span>
    <h2>16. Treinando Sua Primeira Política ACT</h2>
    <p>
      Capítulo 16 do Curso para Iniciantes em IA Física da Seeed — tamanho do batch, taxa de aprendizado e
      steps, gerenciamento de checkpoints, início do treinamento, monitoramento da loss e do status da GPU, e retomada de
      treinamentos interrompidos.
    </p>
    <div className="hero-actions">
      <a href="#configs">Configs</a>
      <a href="#start-training">Iniciar treinamento</a>
      <a href="#monitoring">Monitoramento</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>16.1 Três Configs-Chave: Tamanho do Batch, Taxa de Aprendizado, Steps</span>
    <span>16.2 Salvando e Gerenciando Checkpoints</span>
    <span>16.3 Iniciando o Treinamento</span>
    <span>16.4 Monitorando a Loss e o Status da GPU</span>
    <span>16.5 Retomando Treinamentos Interrompidos</span>
  </div>
</section>

<RebotCourseNav />

## 16.1 Três Configs-Chave: Tamanho do Batch, Taxa de Aprendizado, Steps

<section id="configs" className="section-card">
  <div className="section-title">
    <span>Configs</span>
    <h2>16.1 Três Configs-Chave: Tamanho do Batch, Taxa de Aprendizado, Steps</h2>
  </div>

No terminal, execute `nvidia-smi` para verificar sua GPU e VRAM; GPUs de consumo (por exemplo, 3050) também podem treinar.

### Tamanho do Batch

Se você tiver folga de VRAM, aumente para acelerar a convergência, mas **não force além da VRAM disponível**.

| Config | Cenário |
| :--- | :--- |
| 8 GB de VRAM ou menos | Consegue treinar; use tamanho de batch pequeno: 8 GB → batch size 4, 4 GB → batch size 2. |
| 12 GB+ de VRAM | Zona confortável; use o batch size padrão; se a VRAM for grande, defina batch size=16 |
| Apenas GPU integrada / sem GPU NVIDIA | Treine em um servidor na nuvem |

### Taxa de Aprendizado

O "tamanho do passo" por atualização. ACT vem com presets: otimizador AdamW, taxa de aprendizado 1e-5, weight decay 1e-4, backbone visual em 1e-5. Os presets da política são ativados por padrão (`use_policy_training_preset`), então esses valores se aplicam automaticamente; você não precisa escrever nada. Um passo muito grande causa oscilação ou divergência da loss; muito pequeno dobra o tempo de treinamento. Não mexa nisso no seu primeiro treinamento — são valores ajustados a partir do artigo original e de muita prática.

- Se você alterar o Tamanho do Batch ou os Steps, não precisa ajustar a taxa de aprendizado.
- Se estiver fazendo fine-tuning/retomando a partir de um checkpoint treinado, reduza a taxa de aprendizado para `1e-6`–`3e-6` (3–10x menor).
- Se a train loss quase não cai (linha reta), não aumente a LR ainda; primeiro adicione steps/dados, depois tente `2e-5`.

Adicione o código a seguir; altere ambos juntos para o mesmo valor:

```text
--policy.optimizer_lr=1e-6 \
--policy.optimizer_lr_backbone=1e-6
```

### Steps de Treinamento

Para 50 Episódios, se você não quiser ler a explicação de steps abaixo, apenas rode com **80.000** (50 Episódios).

Os steps escalam proporcionalmente: se o batch size é reduzido pela metade, as amostras vistas por step são reduzidas pela metade; para dar ao modelo o mesmo número de passagens (épocas), os steps precisam dobrar. Ex.: batch size padrão=8, steps=80000; batch size=4 → steps=160000; batch size=2 → steps×4; batch size=16 → steps÷2.

Você também pode definir mais steps — durante o treinamento você pode pressionar Ctrl+C para parar a qualquer momento, escolhendo se deve parar com base na loss e em outros parâmetros; o modelo gerado até então é salvo automaticamente.

- **Total de frames** ≈ duração total das gravações de vídeo.
- **epoch (uma passada)** = o aluno assiste a gravação inteira do começo ao fim.
- **steps** = quantos trechos o aluno assistiu no total.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-01.png" alt="Steps de treinamento" />
</div>

</section>

## 16.2 Salvando e Gerenciando Checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>16.2 Salvando e Gerenciando Checkpoints</h2>
  </div>

Não é necessário salvar manualmente: um checkpoint é salvo a cada 20.000 steps (`save_freq`), além de um final no término. Então não há problema em definir um número grande de steps — você pode escolher o modelo de steps menores e descartar os subtreinados ou superajustados (overfitted).

```text
outputs/train/act_grab_cube_v1/
├── train_config.json              ← Full config for this run (needed to resume)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Model archive at each step count
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Last checkpoint, used in Chapter 17
```

- **Uso de disco:** cada checkpoint é um arquivo completo de pesos do modelo; dezenas deles se acumulam. Quando o treinamento estabilizar, checkpoints iniciais/intermediários podem ser apagados, mantendo apenas o `last`.
- Durante a inferência, `--policy.path` aponta para `checkpoints/last/pretrained_model`.

</section>

## 16.3 Iniciando o Treinamento

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>Training</span>
    <h2>16.3 Iniciando o Treinamento</h2>
  </div>

Todas as verificações passaram — inicie (no ambiente conda `lerobot`):

```bash
lerobot-train \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --policy.type=act \
    --output_dir=outputs/train/act_rebot_test \
    --job_name=act_rebot_test \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.push_to_hub=false \
    --steps=100000
```

:::tip
Se estiver usando uma GPU da série RTX 50, adicione `--dataset.video_backend=pyav` para contornar APIs ausentes no preview do torchvision.
:::

Se a VRAM for insuficiente ou você quiser definir mais de uma vez, adicione `--batch_size` para configurar o tamanho do batch.

Notas sobre parâmetros:

| Parâmetro | Significado |
| :--- | :--- |
| `--dataset.repo_id` | Nome do dataset do Capítulo 13 (use diretamente o nome local; para o Hub use `${HF_USER}/xxx`) |
| `--policy.type=act` | Tipo de política; também pode usar diffusion, smolvla, etc. Neste estágio usamos ACT |
| `--output_dir` | Diretório para todas as saídas de treinamento |
| `--job_name` | Nome para esta execução, usado nos logs para distinguir execuções |
| `--policy.device=cuda` | Treinar na GPU |
| `--wandb.enable=false` | Desativar o painel online do wandb (cadastre-se e ative se quiser; não é obrigatório) |
| `--policy.push_to_hub=false` | Ainda não enviar para o Hub; aguarde até a avaliação do Capítulo 17 estar satisfatória |
| `--steps` | Steps de treinamento |
| `--batch_size` | Tamanho do batch |

Estimativa de tempo: 100k steps em uma GPU de consumo normalmente leva algumas horas, dependendo da GPU e do batch size.

</section>

## 16.4 Monitorando a Loss e o Status da GPU

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitoring</span>
    <h2>16.4 Monitorando a Loss e o Status da GPU</h2>
  </div>

Depois de pressionar Enter, o terminal começa a rolar logs de treinamento. LeRobot imprime uma linha de resumo a cada 200 steps (controlado por `--log_freq`), assim:

```text
step: 10000  smpl: 80K  ep: 35.6  loss: 1.832  grdn: 12.4  lr: 1.0e-05  updt_s: 0.21  data_s: 0.003  eta: 3:42:10
```

Campo a campo (os nomes dos campos podem variar um pouco entre versões):

| Campo | Significado | O que observar |
| :--- | :--- | :--- |
| `step` | Step atual | Compare com `--steps` para checar o progresso |
| `ep` | Épocas treinadas | Corresponde a "quantas vezes assistiu à gravação" |
| `loss` | Loss de treinamento | Queda rápida no início, declínio lento depois, pequenas flutuações é um formato normal |
| `grdn` | Norma do gradiente | Pico súbito para centenas/milhares indica treinamento instável |
| `lr` | Taxa de aprendizado atual | Confirme se é o valor esperado |
| `updt_s` / `data_s` | Tempo de atualização/carregamento de dados por step | `data_s` grande significa que o gargalo é o carregamento de dados |
| `eta` | Tempo restante estimado | Decida se vai comer ou dormir |

**Tendências normais para essas métricas**, em três categorias:

- **Deve continuar caindo — `loss`.** A queda tem três fases: **queda acentuada inicial**, **declínio gradual no meio**, **pequenas flutuações em nível baixo no final, achatando no geral**. Essa curva "rápido depois lento depois plana" é uma curva de convergência saudável. Duas formas anormais para observar: nunca cai (problema de dados/config — verifique as chaves da câmera); cai e depois volta a subir (divergência de treinamento — reduza a LR pela metade e treine de novo).
- **Deve convergir no geral com oscilações permitidas — `grdn` (norma do gradiente).** A tendência geral segue a loss para baixo e estabiliza, mas **picos são normais** — um pico ocasional que se recupera está ok; o perigoso é amplificação contínua, onda após onda mais alta — isso é um prenúncio de divergência; trate como acima: reduza a LR.
- **Devem permanecer constantes — `lr`, `updt_s`, `data_s`, utilização da GPU.** `lr` fica no valor que você definiu o tempo todo, apenas para sua confirmação; o tempo por step (`updt_s`/`data_s`) e a utilização da GPU em `watch -n 1 nvidia-smi` devem ser **estáveis** — utilização persistentemente baixa ou muito flutuante significa que a GPU está esperando dados; o gargalo é o carregamento de dados, não a GPU.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-02.png" alt="Curva de loss" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-03.png" alt="Utilização da GPU" />
</div>

</section>

## 16.5 Retomando Treinamentos Interrompidos

<section id="resume" className="section-card">
  <div className="section-title">
    <span>Resume</span>
    <h2>16.5 Retomando Treinamentos Interrompidos</h2>
  </div>

Se o treinamento perder energia, rede ou terminal no meio da execução, não é preciso começar do zero — desde que pelo menos um checkpoint tenha sido salvo (ou seja, o treinamento já passou de 20.000 steps):

```bash
lerobot-train \
    --config_path=outputs/train/act_rebot_test/train_config.json \
    --resume=true
```

- **Retomar usa a configuração salva:** o treinamento retomado usa a configuração salva em `train_config.json`; parâmetros de linha de comando são ignorados. Para alterar parâmetros (por exemplo, etapas, tamanho do batch), inicie uma nova execução; não use retomar.
- **Continuar a partir do último checkpoint:** o estado do otimizador e a contagem de etapas são restaurados; a curva de perda continua sem interrupções.

</section>

</div>

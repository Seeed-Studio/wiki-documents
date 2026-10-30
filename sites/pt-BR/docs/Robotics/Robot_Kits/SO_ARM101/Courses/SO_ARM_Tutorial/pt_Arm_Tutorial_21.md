---
description: "Capítulo 21 do curso para iniciantes em SO-ARM Physical AI — monte o ambiente Isaac-GR00T, ajuste o GR00T N1.5 sobre seu dataset de SO-ARM com a configuração so100_dualcam, e rode a inferência com o servidor GR00T e o cliente de controle SO-100, em estação ou Jetson AGX Thor."
title: Capítulo 21 - Ajuste fino do SO-ARM com Isaac GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - ajuste fino
  - inferência
  - Jetson Thor
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_21
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 4 · Capítulo 21 · Prática</span>
    <h2>21. Ajuste fino do SO-ARM com Isaac GR00T</h2>
    <p>
      Capítulo 21 do curso para iniciantes em SO-ARM Physical AI — monte o ambiente Isaac-GR00T, ajuste o GR00T N1.5 sobre seu dataset de SO-ARM com a configuração so100_dualcam, e rode a inferência com o servidor GR00T e o cliente de controle SO-100, em estação ou Jetson AGX Thor.
    </p>
    <div className="hero-actions">
      <a href="#environment">Ambiente</a>
      <a href="#finetune">Ajuste fino</a>
      <a href="#inference">Inferência</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · Sem configuração de ambiente</span>
    <p className="sensecraft-banner__title">Pule a configuração — execute o reBot Arm e o LeRobot a partir de um único aplicativo</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics é a plataforma no-code da Seeed para o SO-ARM101, reBot Arm 102 + B601-RS e B601-DM. Conecte os braços, calibre, colete demonstrações, treine e execute inferência a partir de uma interface guiada — sem ambiente Python, sem terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Fluxo de trabalho guiado em 6 etapas</li>
      <li>✅ Treinamento em nuvem — sem GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir para SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/pt-br/sensecraft_robotics/">Guia de software</a>
  </div>
</div>

<a id="overview"></a>

## 21.1 Escolha sua rota de treinamento

<section id="paths" className="section-card">
  <div className="section-title">
    <span>Rotas</span>
    <h2>21.1 Escolha sua rota de treinamento</h2>
  </div>

Este capítulo segue a rota **Isaac-GR00T** do [guia oficial de ajuste SO101](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning) da NVIDIA — a mesma receita do tutorial da Seeed [SO101 + GR00T no Jetson Thor](/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/). Três jeitos de conseguir o compute:

| Rota | Hardware | Notas |
| :--- | :--- | :--- |
| **Estação local** | Classe RTX 4090 / A6000 (Ampere+, ~25GB VRAM) | O que este capítulo assume |
| **NVIDIA Brev na nuvem** | Um navegador | Os mesmos comandos num notebook em nuvem; exporte e baixe o checkpoint |
| **Sem GPU** | — | Pule para o Capítulo 22: a rota sem código do SenseCraft Robotics |

:::warning
O treinamento ou ajuste do GR00T exige GPU com arquitetura **Ampere ou mais nova** (ex.: RTX A6000, RTX 4090). **V100 (Volta) não é suportado.**
:::

</section>

## 21.2 Montar o ambiente

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Ambiente</span>
    <h2>21.2 Montar o ambiente</h2>
  </div>

Crie um ambiente dedicado (separar do `lerobot` está ótimo):

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

O `flash-attn` é a etapa que mais falha — precisa casar com seu build de PyTorch/CUDA. Se a compilação der erro: confira `python -c "import torch; print(torch.version.cuda)"`, instale `ninja` e `packaging` antes, e tente de novo.

O modelo fundacional baixa automaticamente do Hugging Face no primeiro uso: [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main).

</section>

## 21.3 Ajuste fino sobre seu dataset de SO-ARM

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>Ajuste fino</span>
    <h2>21.3 Ajuste fino sobre seu dataset de SO-ARM</h2>
  </div>

Com o dataset do Capítulo 20 pronto (aqui `./demo_data/so101-table-cleanup/` — troque pelo seu caminho):

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

Parâmetros-chave:

- `--dataset-path`: sua pasta LeRobot (a do Capítulo 20);
- `--data-config so100_dualcam`: a configuração padrão de duas câmeras do SO-ARM;
- `--max-steps`: 10.000 é um primeiro ponto sólido para ~50 episódios;
- `--video-backend torchvision_av`: backend de decodificação de vídeo;
- Para ajustar a partir de um modelo base salvo localmente, some `--base-model-path ./pretrained/GR00T-N1.5-3B`.

:::note
O ajuste padrão exige **~25GB de VRAM**. Se não tiver, acrescente `--no-tune_diffusion_model` — congela a cabeça DiT e treina menos, mas cabe em placas menores.
:::

Monitore a perda como no Capítulo 15; espere um tempo por passo bem maior que o ACT — o modelo tem ~3 bilhões de parâmetros.

### Exportar de um notebook em nuvem (rota Brev)

A barra lateral do Jupyter não navega dentro das pastas de treino. Compacte o checkpoint em `.zip` ou `.tar.gz` primeiro e baixe o arquivo pela interface do notebook.

</section>

## 21.4 Rodar a inferência: servidor + cliente de controle

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inferência</span>
    <h2>21.4 Rodar a inferência: servidor + cliente de controle</h2>
  </div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>
      A inferência move o braço real sem humano no ciclo. Limpe o espaço, afaste as mãos e mantenha a mão pronta para cortar a energia.
    </p>
  </div>
</div>

Para o melhor desempenho, replique o setup da coleta o mais fielmente possível — mesmas câmeras, mesmas posições, mesma luz. A generalização do modelo é limitada.

**Terminal 1 — ligue o serviço de inferência GR00T:**

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

**Terminal 2 — ligue o cliente de controle do robô** (o exemplo oficial SO-100, escrito para este braço):

```bash
python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

Notas:

- Troque `index_or_path` pelos índices das suas câmeras — ache com `ls /dev/video*` ou `lerobot-find-cameras opencv`. Precisam ser as **mesmas vistas** (frontal + lateral/garras) do dataset.
- Troque `--lang_instruction` pela frase exata da sua tarefa no dataset — é o condicionamento por linguagem ao vivo (Capítulo 18).
- Cliente e servidor podem rodar na mesma máquina, ou o servidor numa máquina com GPU / Jetson Thor da rede.

</section>

## 21.5 Implantação na borda com Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Borda</span>
    <h2>21.5 Implantação na borda com Jetson AGX Thor</h2>
  </div>

O Jetson AGX Thor tem compute suficiente para rodar a inferência do GR00T N1.5 na borda. Todas as dependências vêm numa imagem Docker dedicada:

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

Dentro do contêiner:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

O ajuste (opcional, se pulou na nuvem) usa o mesmo `gr00t_finetune.py` de 21.3; depois rode o mesmo par servidor + cliente de 21.4. O percurso completo do Jetson Thor — flash, ambiente, coleta, treino no Brev, implantação — está no tutorial completo: [Ajuste o GR00T N1.5 para o LeRobot SO-ARM e implante no Jetson Thor](/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/).

</section>

## 21.6 Rota alternativa: a política `groot` do LeRobot

<section id="lerobot-groot" className="section-card">
  <div className="section-title">
    <span>Alternativa</span>
    <h2>21.6 Rota alternativa: a política `groot` do LeRobot</h2>
  </div>

Se preferir ficar na cadeia LeRobot da Fase 3, a política `--policy.type=groot` também serve (também exige `flash-attn` e GPU CUDA):

```bash
pip install "lerobot[groot]"

accelerate launch \
  --num_processes=1 \
  $(which lerobot-train) \
  --output_dir=outputs/train/groot_so101 \
  --save_checkpoint=true \
  --batch_size=64 \
  --steps=20000 \
  --policy.type=groot \
  --policy.repo_id=${HF_USER}/groot_so101 \
  --dataset.repo_id=seeedstudio123/test \
  --wandb.enable=true
```

As exigências de ambiente são maiores que ACT/Pi0 — o conselho oficial segue: primeiro o ACT ponta a ponta, depois o GR00T. A avaliação usa a receita familiar `lerobot-record ... --policy.path` do Capítulo 16.

</section>

## 21.7 Avaliação e iteração

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Avaliar</span>
    <h2>21.7 Avaliação e iteração</h2>
  </div>

Reaproveite inteiro o arcabouço do Capítulo 16 — critérios, inícios variados, taxa de sucesso, classificação de falhas — com dois acréscimos próprios de VLA:

1. **Matriz de instruções:** avalie cada frase de tarefa do seu dataset; uma VLA deve trocar de comportamento ao trocar a frase;
2. **Sonda de instrução não gravada:** experimente uma frase que você **não** gravou — onde acertar é generalização por linguagem; onde falhar é a fronteira de distribuição do Capítulo 18 aparecendo. Responda às falhas com dados, não com esperança.

</section>

## 21.8 FAQ de solução de problemas

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>21.8 FAQ de solução de problemas</h2>
  </div>

| Problema | Solução |
| :--- | :--- |
| Falha/visga na descarga do modelo | Baixe manualmente [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main) e passe `--base-model-path` |
| Falha ao compilar o `flash-attn` | Confira o par PyTorch/CUDA; instale `ninja` + `packaging`; use a versão fixa `2.7.1.post4` |
| CUDA OOM no ajuste | Some `--no-tune_diffusion_model`; reduza o batch |
| V100 rejeitada | Esperado — exige Ampere ou mais novo |
| Cliente não alcança o servidor | `--policy_host` precisa ser o IP acessível do servidor; confira firewall/porta |
| O braço mexe mas ignora a tarefa | Chaves de câmera ou frase divergentes do dataset — regras dos Capítulos 19-20 |

</section>

</div>

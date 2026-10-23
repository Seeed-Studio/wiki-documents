---
description: "Treine e faça o deploy de novas políticas em uma plataforma reBot ou SO101 que já esteja executando ACT, alterne os comandos da plataforma usando abas e aprenda os fluxos de configuração e avaliação para políticas Diffusion, SmolVLA e π."
title: "Troca de Políticas & Execução de Tarefas"
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
slug: /robotics/hands_on_algorithm_switching
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_algorithm_switching/
---

import '/src/css/paper-reading-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-algorithm-switching-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-algorithm-switching-title">Troca de Políticas &amp; Execução de Tarefas</h1>
  <p className="paper-reading-lead">Reutilize uma plataforma ACT funcional e seu conjunto de dados para treinar e fazer o deploy de uma nova política e, em seguida, compare o desempenho no robô. Os comandos são fornecidos para reBot-RS, reBot-DM e SO-ARM 101.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Diffusion</li>
    <li>SmolVLA</li>
    <li>Políticas π</li>
    <li>Avaliação no robô</li>
  </ul>
</section>

**Escolha uma política → Configure e treine → Carregue o novo modelo → Avalie no robô.**

Este guia usa **ACT → Diffusion para agarrar um bloco preto** como exemplo. Conclua primeiro a montagem, calibração, teleoperação e o treinamento e deploy do ACT. Mantenha a configuração de hardware funcional e treine a nova política no conjunto de dados da mesma plataforma.

![Fluxo de trabalho para trocar do ACT para outras políticas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-01-switch-map-en.png)

## Ambiente e Plataforma

Selecione a aba do seu braço. Os comandos de treinamento e deploy abaixo mudam em conjunto.

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

Reutilize o ambiente Seeed LeRobot funcional e a configuração do plugin B601-RS a partir do ACT. Os comandos têm como alvo a série Seeed LeRobot 0.4.4. Para a configuração de hardware, consulte [reBot-RS com LeRobot](/pt-br/rebot_arm_b601_rs_lerobot/).

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

Reutilize o ambiente Seeed LeRobot funcional e a configuração do plugin B601-DM a partir do ACT. Os comandos têm como alvo a série Seeed LeRobot 0.4.4. Para a configuração de hardware, consulte [reBot-DM com LeRobot](/pt-br/rebot_arm_b601_dm_lerobot/).

</TabItem>

<TabItem value="so101" label="SO101">

Reutilize o ambiente LeRobot v0.4.4 que já executa ACT. Se o suporte ao motor Feetech não estiver instalado, execute o seguinte a partir do diretório-fonte do LeRobot:

```bash
pip install -e ".[feetech]"
```

Para a preparação de hardware, consulte a [documentação oficial do SO-ARM 101](https://huggingface.co/docs/lerobot/main/en/so101).

</TabItem>

</Tabs>

---

## O Que Cada Política Exige

| Política alvo | Trabalho necessário |
|---|---|
| **Diffusion** | Defina `policy.type=diffusion` e as opções de recorte de imagem; treine um novo modelo; atualize o caminho de deploy. |
| **SmolVLA** | Instale `.[smolvla]`; faça o fine-tuning de `lerobot/smolvla_base`; alinhe o texto da tarefa, os nomes das câmeras e as dimensões de estado/ação. |
| **π₀ / π₀.₅** | Instale `.[pi]`; faça o fine-tuning do modelo base apropriado; alinhe o texto da tarefa, imagens, ações e estatísticas de normalização; ajuste o tamanho de lote para a VRAM. |

Dados VLA precisam de descrições de tarefa precisas. Se os nomes ou a contagem de câmeras diferirem do modelo base, configure mapeamentos de nomes de entrada e visões ausentes. [SmolVLA](https://huggingface.co/docs/lerobot/v0.4.4/smolvla) · [π₀](https://huggingface.co/docs/lerobot/pi0) · [Mapeamentos de entrada](https://huggingface.co/docs/lerobot/rename_map)

---

## Treinar Diffusion no Conjunto de Dados Existente

Execute estes comandos no ambiente ACT existente a partir do diretório-fonte do LeRobot. Substitua `dataset.repo_id` pelo seu conjunto de dados. Para um local de dados personalizado, mantenha `--dataset.root` e as configurações de decodificação do comando de treinamento original. O exemplo usa uma câmera `front`, imagens 640×480 e dados a 30 FPS.

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_rs_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_rs_cube \
  --job_name=diffusion_rebot_rs_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_dm_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_dm_cube \
  --job_name=diffusion_rebot_dm_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-train \
  --dataset.repo_id=your_username/so101_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_so101_cube \
  --job_name=diffusion_so101_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

</Tabs>

| Parâmetro | Configuração necessária |
|---|---|
| `policy.type` | Use `diffusion` para criar e treinar a nova política. |
| `policy.crop_shape` | `null` mantém a imagem completa; processar a visão inteira aumenta o custo de memória e inferência. |
| `output_dir` / `job_name` | Use novos nomes; o `policy.path` de deploy deve apontar para a saída correspondente. |
| `batch_size` / `steps` | Comece com 8 / 100000 e depois ajuste para a VRAM e o desempenho no robô. |

![Configurações de recorte de imagem para Diffusion](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-02-crop-explained-en.png)

Ao otimizar recorte ou redimensionamento, mantenha o processamento de imagem consistente entre treinamento e deploy. Referências de configuração: [Seeed Diffusion](https://github.com/Seeed-Projects/lerobot/blob/0f392484458cb5ebca0310c0c4c47390a31c80ed/src/lerobot/policies/diffusion/configuration_diffusion.py) · [LeRobot v0.4.4 Diffusion](https://github.com/huggingface/lerobot/blob/v0.4.4/src/lerobot/policies/diffusion/configuration_diffusion.py).

---

## Executar o Novo Modelo

Aponte `policy.path` para o modelo Diffusion recém-treinado e escolha um novo nome de conjunto de dados de avaliação. As portas, `robot.id`, configurações de câmera e descrições de tarefa abaixo são exemplos: substitua-as pela sua configuração ACT funcional. Mantenha o `robot.id` usado durante a calibração.

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_rs_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_rs_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower1 \
  --robot.can_adapter=damiao \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_dm_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_dm_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30}}' \
  --policy.path=outputs/train/diffusion_so101_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_so101_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

</Tabs>

- **reBot-RS**: mantenha a interface CAN verificada e as configurações de `socketcan`.
- **reBot-DM**: mantenha a porta serial verificada e as configurações do adaptador `damiao`.
- **SO-ARM 101**: mantenha a configuração serial verificada, incluindo o valor anterior de `--robot.use_degrees`, se usado.

Mantenha nomes de câmeras, posicionamento, dimensões de imagem, unidades de ação e taxa de quadros consistentes com o treinamento. Use um novo nome de conjunto de dados `eval_…` para cada avaliação.

Referências de configuração: [Configuração do plugin Seeed](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601#configuration) · [Fluxo de trabalho de avaliação do LeRobot v0.4.4](https://huggingface.co/docs/lerobot/v0.4.4/il_robots#run-inference-and-evaluate-your-policy).

---

## Avaliação no Robô e Comparação de Políticas

Fixe o braço e limpe sua área de trabalho. Execute primeiro um episódio para verificar a direção do movimento, o alcance e a taxa de controle real. Quando tudo estiver correto, avalie Diffusion usando a mesma tarefa, posições de objetos e número de tentativas que o ACT, registrando sucessos e tempos de conclusão.

Para mudar em seguida para SmolVLA ou políticas π, instale as dependências documentadas, faça o fine-tuning do modelo base, alinhe o texto da tarefa, entradas de câmera, dimensões de estado/ação e estatísticas de normalização e atualize `policy.path`.

</div>

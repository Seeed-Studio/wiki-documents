---
description: Este tutorial demonstra como teleoperar e treinar o braço robótico SOArm101 no Isaac Lab usando o LeIsaac, incluindo coleta de dados, ajuste fino de modelo com NVIDIA Isaac GR00T e implantação.
title: Lightwheel LeIsaac
keywords:
  - NVIDIA
  - Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
createdAt: '2025-08-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/simulate_soarm101_by_leisaac/
---

# Introdução ao Lightwheel LeIsaac — Fluxo de trabalho open‑source combinando Hugging Face LeRobot x GR00T N1.5 x Isaac Sim

## Interduction

Este wiki seguirá o documento do leisaac e mostrará como teleoperar o braço robótico SoArm101 no IsaacLab usando o leisaac. Além disso, demonstraremos a implantação do modelo NVIDIA Isaac GR00T N1.5 ajustado finamente no ambiente de simulação do Isaac Lab, usando dados coletados no próprio Isaac Lab. Os principais projetos utilizados neste wiki são:

- [LeIsaac](https://github.com/LightwheelAI/leisaac) fornece funcionalidade de teleoperação no IsaacLab usando o SO101Leader (LeRobot), incluindo coleta de dados, conversão de dados e treinamento de políticas subsequente.
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) é um framework unificado open‑source para aprendizado de robôs, projetado para ajudar a treinar políticas de robôs.
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) é um kit de braço robótico 3D‑imprimível, de baixo custo e open‑source. Projetado para funcionar perfeitamente com a biblioteca open‑source LeRobot.
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) é um modelo fundamental aberto para raciocínio e habilidades generalizadas de robôs humanoides.

## Requierment

- PC com Ubuntu
- Braço SoArm101 Leader

:::info
O computador usado neste wiki possui uma GPU NVIDIA RTX 3080 e roda Ubuntu 22.04 LTS.
:::

## Configuração do Ambiente de Simulação

Use o seguinte comando no terminal para instalar o ambiente de runtime do Isaac Lab:

```bash
# Create and activate environment
conda create -n leisaac python=3.10
conda activate leisaac

# Install cuda-toolkit
conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit

# Install PyTorch
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118

# Install IsaacSim
pip install --upgrade pip
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Install IsaacLab
git clone https://github.com/isaac-sim/IsaacLab.git
sudo apt install cmake build-essential

cd IsaacLab
# fix isaaclab version for isaacsim4.5
git checkout v2.1.0
./isaaclab.sh --install
```

:::note
Se o seu computador não tiver o conda instalado, consulte [este guia](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) para instalação.
:::

:::info
Se você estiver usando uma GPU da série 50, recomendamos usar o isaacsim5.0 e o isaaclab com o branch feature/isaacsim_5_0.
:::

## Instalar o LeIsaac

Clone o repositório LeIsaac e instale‑o como dependência.

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
Certifique‑se de realizar a instalação dentro do ambiente virtual conda `leisaac`.
:::

## Preparação de Assets

O LeIsaac fornece um asset USD de exemplo — uma cena de cozinha. Podemos baixar a cena relacionada [aqui](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0) e extraí‑la no diretório de assets. A estrutura do diretório deve ser assim:

```txt
<assets>
├── robots/
│   └── so101_follower.usd
└── scenes/
    └── kitchen_with_orange/
        ├── scene.usd
        ├── assets
        └── objects/
            ├── Orange001
            ├── Orange002
            ├── Orange003
            └── Plate
```

## Coletar Dataset

Conecte o leader SO-ARM101 a um computador com Ubuntu via cabo USB e, em seguida, use comandos para conceder permissões de porta serial.

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

Se tudo estiver funcionando corretamente, você deverá ver um log de saída semelhante.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

Execute tarefas de teleoperação com o seguinte script para coletar o dataset:

```bash
python scripts/environments/teleoperation/teleop_se3_agent.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --teleop_device=so101leader \
    --port=/dev/ttyACM0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --record \
    --dataset_file=./datasets/dataset.hdf5
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XY3LEXGP8hI" title="Simulate SoArm101 by LeIsaac (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Depois de entrar na janela do IsaacLab, pressione a tecla `b` no teclado para iniciar a teleoperação. Em seguida, você pode usar o `teleop_device` especificado para controlar o robô na simulação. Se você precisar redefinir o ambiente após concluir sua operação, basta pressionar a tecla `r` ou `n`. `r` significa redefinir o ambiente e marcar a tarefa como falha, enquanto `n` significa redefinir o ambiente e marcar a tarefa como bem‑sucedida.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Replay do Dataset

Após a teleoperação, você pode reproduzir o dataset coletado no ambiente de simulação usando o seguinte script:

```bash
python scripts/environments/teleoperation/replay.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --dataset_file=./datasets/dataset.hdf5 \
    --episode_index=0
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/C6KHxKRsWx0" title="Simulate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conversão de Dados

Os dados de teleoperação coletados são armazenados em formato HDF5 no diretório especificado. Se for usar esses dados para treinar um modelo proxy, o dataset deve ser convertido para um formato compatível com o LeRobot usando os scripts de conversão do LeIsaac.

Este script deve ser executado dentro do ambiente virtual do LeRobot. Crie um novo ambiente LeRobot seguindo as etapas deste [wiki](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Instalar-o-LeRobot).

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install -e .
```

Em seguida, podemos modificar os parâmetros no script e executar o seguinte comando:

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
Se você tiver modificado o caminho de armazenamento do dataset durante a coleta de dados, será necessário atualizar o caminho correspondente no script de conversão antes da execução.
:::

Após a conclusão da execução do programa, o dataset convertido poderá ser encontrado em: `~/.cache/huggingface/lerobot/`.

Também podemos inspecionar os dados convertidos usando o kit de ferramentas integrado de visualização de datasets do LeRobot.

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Treinamento de Política

Neste wiki, faremos o ajuste fino do NVIDIA Isaac GR00T N1.5. Vamos começar configurando o ambiente virtual Isaac-GR00T:

```bash
cd ..
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

:::info
A instalação do flash-attn envolve compilação de pacotes, o que pode ser extremamente lento. Recomenda‑se [baixar](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4) a versão pré‑compilada do pacote correspondente ao seu ambiente de sistema e instalá‑la localmente usando o comando: pip install ./package_name.
:::

Execute o seguinte comando no terminal para iniciar o treinamento:

```bash
cd <path-to-Isaac-GR00T>
cp ./getting_started/examples/so100_dualcam__modality.json ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick/meta/modality.json
python scripts/gr00t_finetune.py \
   --dataset-path ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --batch_size 2
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/train.png" />
</div>

## Inferência de Política

Neste estágio, podemos implantar nosso modelo NVIDIA Isaac GR00T N1.5 ajustado finamente para controlar o braço robótico SO-ARM101 no Isaac Lab.
A arquitetura de implantação do Isaac-GR00T adota um design desacoplado entre o endpoint de inferência e o endpoint de controle:

- Endpoint de Inferência (Servidor): dedicado exclusivamente à execução de tarefas de inferência de modelo.
- Endpoint de Controle (Cliente): responsável por adquirir os estados do braço robótico e orquestrar o controle de movimento.

**Servidor**
Abra uma nova janela de terminal e execute:

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**Cliente**
Abra uma nova janela de terminal e execute:

```bash
conda activate leisaac
cd <path-to-leisaac>
python scripts/evaluation/policy_inference.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --policy_type=gr00tn1.5 \
    --policy_host=localhost \
    --policy_port=5555 \
    --policy_timeout_ms=5000 \
    --policy_action_horizon=16 \
    --policy_language_instruction="Pick up the orange and place it on the plate" \
    --device=cuda \
    --enable_cameras
```

:::note
Se você encontrar erros relacionados ao ZMQ, execute `pip install pyzmq` para resolvê-los.
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

O modelo final treinado não conseguiu controlar o braço robótico SOArm101 para pegar a laranja. Isso aconteceu porque coletei apenas três conjuntos de dados durante o experimento. Se mais dados pudessem ser coletados, a precisão do modelo seria significativamente melhorada!

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este wiki demonstra como usar o J501 Mini com o braço robótico StarAI Viola para tarefas de classificação de frutas usando o framework LeRobot e o modelo ACT.
title: Classificação de Frutas com J501 Mini e Braço StarAI Viola
keywords:
  - J501 mini
  - Robótica
  - StarAI
  - Viola
  - LeRobot
  - ACT
  - Classificação de Frutas
image: https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png
slug: /j501_mini_starai_viola_fruit_sorting
sku: 100020039,114090080
last_update:
  date: 2026-2-2
  author: Dayu
createdAt: '2026-02-02'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/j501_mini_starai_viola_fruit_sorting/
---

# 🍎 Classificação de Frutas com J501 Mini e Braço StarAI Viola

## 🚀 Introdução

Este wiki demonstra como usar o **J501 Mini (Jetson AGX Orin)** com o **braço robótico StarAI Viola** para realizar tarefas de classificação de frutas usando o **framework LeRobot**. O projeto demonstra um fluxo de trabalho de ponta a ponta, desde a coleta de dados até a implantação, permitindo que o robô agarre e organize frutas de forma inteligente.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png"/>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">J501 Mini</th>
      <th class="table-trnobg">StarAI Viola</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J501-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5976.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ Adquira agora</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ Adquira agora</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<p></p>

**O que você vai aprender:**

- 🔧 Configuração de hardware para **J501 Mini** e **braço StarAI Viola**
- 💻 Configuração do ambiente de software para **LeRobot** no **Jetson AGX Orin**
- 🎯 Coleta de dados e teleoperação para tarefas de classificação de frutas
- 🤖 Treinamento do modelo de política ACT
- 🚀 Implantação do modelo treinado para classificação autônoma de frutas

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/catch-fruit.png"/>
</div>

<p></p>

**📚 Este tutorial fornece instruções passo a passo para ajudar você a construir do zero um sistema inteligente de classificação de frutas.**

:::warning
Este wiki é baseado no JetPack 6.2.1 e usa o módulo Jetson AGX Orin.
:::

## 🛠️ Requisitos de Hardware

### Componentes Necessários

- **J501 Mini** com módulo Jetson AGX Orin
- Braço seguidor **StarAI Viola** (6+1 DoF)
- Braço líder **StarAI Violin** (6+1 DoF) para teleoperação
- **2x câmeras USB** (640x480 @ 30fps recomendado)
  - Uma câmera montada no punho
  - Uma câmera de visualização em terceira pessoa
- **Placas de depuração UC-01** (x2, incluídas com os braços)
- **Fonte de alimentação de 12V** para os braços robóticos
- **Cabos USB** para comunicação com os braços
- **Frutas** para demonstração de classificação

### Especificações de Hardware

| Componente | Especificação |
|-----------|--------------|
| **J501 Mini** | Jetson AGX Orin, JetPack 6.2.1 |
| **Viola Follower** | 6+1 DoF, 470mm de alcance, 300g de carga útil |
| **Violin Leader** | 6+1 DoF, 470mm de alcance, teleoperação |
| **Câmeras** | USB, 640x480 @ 30fps, formato MJPG |
| **Alimentação** | 12V 10A para cada braço |

## 💻 Configuração do Ambiente de Software

### Pré-requisitos

- Ubuntu 22.04 (no J501 Mini com JetPack 6.2.1)
- Python 3.10
- CUDA 12+
- PyTorch 2.6+ (versão GPU)

### Instalar o Miniconda

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### Criar Ambiente LeRobot

```bash
# Create conda environment
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Clone LeRobot repository
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot

# Install ffmpeg
conda install ffmpeg -c conda-forge
```

### Instalar PyTorch e Torchvision para Jetson

Para dispositivos Jetson, você precisa instalar a versão GPU do PyTorch e Torchvision antes de instalar o LeRobot. Siga [este tutorial de instalação do PyTorch para Jetson](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) para instalar PyTorch-gpu e Torchvision.

### Instalar LeRobot e Dependências

Após instalar PyTorch-gpu e Torchvision, instale o LeRobot:

```bash
cd ~/lerobot && pip install -e .
```

Para dispositivos Jetson JetPack 6.0+, instale dependências adicionais:

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### Instalar Dependências do Motor StarAI

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

### Verificar PyTorch e Torchvision

Como instalar o ambiente LeRobot via pip irá desinstalar o PyTorch e o Torchvision originais e instalar as versões para CPU, você precisa fazer uma verificação em Python:

```python
import torch
print(torch.cuda.is_available())  # Should print True
```

Se o resultado impresso for `False`, você precisa reinstalar PyTorch e Torchvision de acordo com [este tutorial para Jetson](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

```bash
# Remove brltty if it causes USB port conflicts
sudo apt remove brltty
```

## 🔧 Configuração e Calibração de Hardware

### Configurar Portas USB

Conecte os braços robóticos e identifique suas portas USB:

```bash
cd ~/lerobot
lerobot-find-port
```

Você deverá ver uma saída como:
- Braço líder: `/dev/ttyUSB0`
- Braço seguidor: `/dev/ttyUSB1`

Conceda acesso às portas USB:

```bash
sudo chmod 666 /dev/ttyUSB*
```

### Posição Inicial dos Braços

Antes da calibração, mova ambos os braços para suas posições iniciais:

| **Braço Líder Violin** | **Braço Seguidor Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |

### Calibrar o Braço Líder

```bash
lerobot-calibrate \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader
```

Mova manualmente cada junta até suas posições máxima e mínima. Pressione Enter para salvar após calibrar todas as juntas.

### Calibrar o Braço Seguidor

```bash
lerobot-calibrate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower
```

:::tip
Os arquivos de calibração são salvos em `~/.cache/huggingface/lerobot/calibration/`
:::

### Configurar Câmeras

Encontre as portas das suas câmeras:

```bash
lerobot-find-cameras opencv
```

Exemplo de saída:
```
Camera #0: /dev/video2 (wrist camera)
Camera #1: /dev/video4 (front camera)
```

Monte as câmeras:
- **Câmera de punho**: Prenda ao gripper para visão em close-up
- **Câmera frontal**: Posicione na mesa para visão em terceira pessoa

## 🎮 Teste de Teleoperação

Teste a configuração com teleoperação antes da coleta de dados:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true
```

:::warning
Para o treinamento do modelo ACT, os nomes das câmeras devem ser `wrist` e `front`. Usar nomes diferentes exigirá modificar o código-fonte.
:::

## 📊 Coleta de Dados para Classificação de Frutas

### Login no Hugging Face (Opcional)

Se você quiser enviar conjuntos de dados para o Hugging Face Hub:

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

### Gravar Conjunto de Dados de Treinamento

Colete 50 episódios de demonstrações de classificação de frutas:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=50 \
    --dataset.push_to_hub=true \
    --dataset.single_task="Sort fruits into containers"
```

### Parâmetros de Gravação

| Parâmetro | Descrição |
|-----------|-------------|
| `--dataset.episode_time_s` | Duração de cada episódio (30 segundos) |
| `--dataset.reset_time_s` | Tempo para reiniciar entre episódios (30 segundos) |
| `--dataset.num_episodes` | Número de episódios a serem gravados (50) |
| `--dataset.push_to_hub` | Enviar para o Hugging Face Hub (true/false) |
| `--dataset.single_task` | Descrição da tarefa |

### Controles de Teclado Durante a Gravação

- **Seta para a direita (→)**: Pular para o próximo episódio
- **Seta para a esquerda (←)**: Regravar o episódio atual
- **ESC**: Parar a gravação e salvar o conjunto de dados

:::tip
Se os controles do teclado não funcionarem, tente: `pip install pynput==1.6.8`
:::

### Reproduzir um Episódio

Teste os dados gravados reproduzindo um episódio:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode=0
```

## 🎓 Treinando a Política ACT

### Configuração de Treinamento

Treine o modelo ACT no seu conjunto de dados coletado:

```bash
lerobot-train \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --policy.type=act \
    --output_dir=outputs/train/fruit_sorting_act \
    --job_name=fruit_sorting_act \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.repo_id=${HF_USER}/fruit_sorting_policy \
    --steps=100000 \
    --batch_size=8 \
    --eval.batch_size=8 \
    --eval.n_episodes=10 \
    --eval_freq=5000
```

### Parâmetros de Treinamento

| Parâmetro | Descrição |
|-----------|-------------|
| `--policy.type` | Tipo de modelo (act) |
| `--steps` | Total de passos de treinamento (100.000) |
| `--batch_size` | Tamanho do batch de treinamento (8) |
| `--eval_freq` | Frequência de avaliação (a cada 5000 passos) |
| `--wandb.enable` | Ativar registro no Weights & Biases |

### Tempo de Treinamento

No J501 Mini (AGX Orin):
- 50 episódios: ~8-10 horas
- 100 episódios: ~16-20 horas

:::tip
Você pode ativar `--wandb.enable=true` para monitorar o progresso do treinamento com o Weights & Biases. Certifique-se de executar `wandb login` primeiro.
:::

### Retomar o Treinamento

Se o treinamento for interrompido, retome a partir do último checkpoint:

```bash
lerobot-train \
    --config_path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model/train_config.json \
    --resume=true \
    --steps=200000
```

## 🚀 Implantação e Avaliação

### Avaliar o Modelo Treinado

Execute episódios de avaliação para testar a política treinada:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --display_data=false \
    --dataset.repo_id=${HF_USER}/eval_fruit_sorting \
    --dataset.single_task="Sort fruits into containers" \
    --dataset.num_episodes=10 \
    --policy.path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model
```

### Operação Autônoma

Uma vez treinado, o robô pode classificar frutas de forma autônoma. O vídeo abaixo demonstra o fluxo completo de trabalho de classificação de frutas usando a política ACT treinada no J501 Mini com o braço StarAI Viola:

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Tk6jazbZZy0" title="Fruit Sorting Demo with J501 Mini and StarAI Viola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**Destaques da Demo:**
- O robô identifica e pega diferentes frutas de forma autônoma
- Movimentos suaves e precisos aprendidos a partir de demonstrações de teleoperação
- Classifica as frutas com sucesso em recipientes designados
- Demonstra a eficácia da política ACT treinada no J501 Mini

Para executar a classificação autônoma de frutas:

1. Coloque as frutas na área de trabalho
2. Execute o comando de avaliação mostrado acima
3. O robô executará o comportamento aprendido para pegar e classificar as frutas

## 🎯 Dicas para Melhor Desempenho

### Boas Práticas de Coleta de Dados

1. **Ambiente Consistente**
   - Mantenha as condições de iluminação estáveis
   - Minimize mudanças de fundo
   - Use uma disposição consistente das frutas

2. **Qualidade Acima de Quantidade**
   - Colete demonstrações suaves e deliberadas
   - Evite movimentos bruscos
   - Garanta pegadas bem-sucedidas nos dados de treinamento

3. **Posicionamento da Câmera**
   - Mantenha ângulos de câmera consistentes
   - Garanta boa visibilidade das frutas e do gripper
   - Evite movimento da câmera durante a gravação

### Otimização do Treinamento

1. **Tamanho do Conjunto de Dados**
   - Comece com 50 episódios
   - Adicione mais dados se o desempenho for insuficiente
   - 100-200 episódios são normalmente suficientes para tarefas simples

2. **Ajuste de Hiperparâmetros**
   - Ajuste o tamanho do batch com base na memória da GPU
   - Aumente os passos de treinamento para melhor convergência
   - Monitore as métricas de avaliação

3. **Consistência do Ambiente**
   - Faça a implantação em condições semelhantes às do treinamento
   - Mantenha a iluminação consistente
   - Use tipos de frutas e recipientes semelhantes

## 🔧 Solução de Problemas

### Problemas Comuns

**Porta USB Não Detectada**
```bash
# Remove brltty
sudo apt remove brltty

# Check USB devices
lsusb
sudo dmesg | grep ttyUSB

# Grant permissions
sudo chmod 777 /dev/ttyUSB*
```

**Câmera Não Funciona**
- Não conecte câmeras através de hub USB
- Use conexão USB direta
- Verifique o índice da câmera com `lerobot-find-cameras opencv`

**Treinamento Sem Memória Suficiente**
- Reduza o tamanho do batch: `--batch_size=4`
- Reduza a resolução da imagem
- Feche outros aplicativos

**Baixo Desempenho de Inferência**
- Colete mais dados de treinamento
- Garanta um ambiente consistente
- Verifique o posicionamento da câmera
- Verifique a precisão da calibração

## 📚 Referências

- 🔗 [Documentação do LeRobot](https://github.com/huggingface/lerobot)
- 🔗 [Wiki do Braço StarAI](https://wiki.seeedstudio.com/pt-br/lerobot_starai_arm/)
- 🔗 [Documentação do J501 Mini](https://wiki.seeedstudio.com/pt-br/recomputer_j501_mini_getting_started/)
- 🔗 [Artigo do ACT](https://tonyzhaozh.github.io/aloha/)
- 🔗 [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

## 🤝 Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

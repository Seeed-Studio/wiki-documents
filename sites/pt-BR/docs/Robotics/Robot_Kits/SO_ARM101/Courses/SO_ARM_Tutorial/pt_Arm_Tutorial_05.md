---
description: "Capítulo 5 do curso para iniciantes em SO-ARM Physical AI — configure o ambiente de software do LeRobot no Ubuntu x86 ou Jetson: Miniforge, o repositório verificado da Seeed, ffmpeg, PyTorch e as dependências de motores feetech."
title: Capítulo 5 - Configuração do ambiente de software
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Miniforge
  - ambiente
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_5
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 2 · Capítulo 5 · Prática</span>
    <h2>5. Configuração do ambiente de software</h2>
    <p>
      Capítulo 5 do curso para iniciantes em SO-ARM Physical AI — configure o ambiente de software do LeRobot no Ubuntu x86 ou Jetson: Miniforge, o repositório verificado da Seeed, ffmpeg, PyTorch e as dependências de motores feetech.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requisitos</a>
      <a href="#install">Instalar o LeRobot</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 5.1 Requisitos de sistema

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>Requisitos</span>
    <h2>5.1 Requisitos de sistema</h2>
  </div>

**Para Ubuntu x86:**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**Para Jetson Orin:**

- Jetson JetPack 6.0 e 6.1 (JetPack 6.2 ainda sem suporte)
- Python 3.12
- Torch 2.3+

Lembre do Capítulo 3: evite WSL ou Ubuntu em máquina virtual no Windows — Ubuntu nativo ou Jetson dão menos surpresas.

</section>

## 5.2 Instalar o LeRobot

<section id="install" className="section-card">
  <div className="section-title">
    <span>Passo a passo</span>
    <h2>5.2 Instalar o LeRobot</h2>
  </div>

Ambientes como PyTorch e torchvision precisam ser instalados conforme a sua versão de CUDA. Siga a aba do seu dispositivo.

<Tabs defaultValue="X86">

<TabItem value="X86" label="X86 Ubuntu 22.04">

**1. Instale o Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Concluída a instalação:
source ~/.bashrc
# Inicializar todos os shells
conda init --all
```

**2. Crie e ative um ambiente conda novo para o LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clone o repositório verificado do LeRobot:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Instale o ffmpeg no ambiente:**

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Isso normalmente instala ffmpeg 7.X compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique com `ffmpeg -encoders`), instale explicitamente o ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

Isso também corrige o erro `No valid stream found in input file` que aparece depois ao codificar vídeos do dataset.
:::

**5. Instale o LeRobot com as dependências de motores feetech:**

:::tip
Num Ubuntu 22.04 recém-configurado — especialmente instalação mínima — podem faltar `gcc` e outras ferramentas de compilação, e o pacote `evdev` do extra feetech falha ao compilar. Instale as ferramentas primeiro:

```bash
sudo apt update
sudo apt install build-essential
```
:::

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

</TabItem>

<TabItem value="Jetson" label="Jetson Orin">

**1. Instale o Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Siga os prompts digitando 'yes' ou Enter. Concluída a instalação:
source ~/.bashrc
```

**2. Crie e ative um ambiente conda novo para o LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clone o repositório verificado do LeRobot:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Instale o ffmpeg no ambiente:**

```bash
conda install ffmpeg -c conda-forge
```

**5. Instale o LeRobot com as dependências de motores feetech:**

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

**6. Para dispositivos Jetson JetPack 6.0+** (instale primeiro [PyTorch-gpu e Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) a partir do passo 5, depois execute):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Instala OpenCV e outras dependências via conda
conda remove opencv                                   # Desinstala o OpenCV do conda
pip3 install opencv-python==4.10.0.84                 # Reinstala opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0                            # Deve casar com o torchvision
```

</TabItem>

</Tabs>

</section>

## 5.3 Verificar o ambiente

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Verificação</span>
    <h2>5.3 Verificar o ambiente</h2>
  </div>

Instalar o LeRobot via pip pode substituir o PyTorch e o torchvision originais por versões CPU, então verifique sempre antes de treinar. No ambiente conda `lerobot`, execute:

```python
python   # inicia o Python no terminal
import torch
print(torch.cuda.is_available())
exit()   # sai do Python
```

- `False` → o ambiente atual usa a versão CPU do PyTorch. Para treinar ou inferir com GPU, reinstale as versões de PyTorch e torchvision compatíveis com sua CUDA seguindo o [guia oficial do PyTorch](https://pytorch.org/index.html).
- `True` → aceleração por GPU disponível.

:::tip
GPUs NVIDIA da série RTX 50 exigem a versão preliminar da CUDA 12.8 ou superior:

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```
:::

Por fim, confirme que as ferramentas de linha de comando do LeRobot estão no PATH:

```bash
lerobot-find-port --help
```

Se o comando imprimir a ajuda, o ambiente está pronto para o próximo capítulo, onde configuramos os motores e montamos os braços.

</section>

</div>

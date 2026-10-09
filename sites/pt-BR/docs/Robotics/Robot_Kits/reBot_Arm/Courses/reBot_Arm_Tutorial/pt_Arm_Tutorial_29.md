---
description: "Capítulo 29 do Curso de Iniciação em IA Física da Seeed — prática de preensão visual autônoma com o reBot Arm: instalação do SDK da câmera RGB-D e do repositório de preensão, execução dos programas de preensão e preensão‑e‑colocação, compensação de posição e uma trilha opcional de preensão em nuvem de pontos com GraspNet."
title: Capítulo 29 - Preensão Visual Autônoma com reBot Arm
keywords:
  - reBot
  - Braço Robótico
  - Preensão Visual
  - Câmera RGB-D
  - Calibração Mão-Olho
  - GraspNet
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_29
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_29/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 6 · Capítulo 29 · Prática</span>
    <h2>29. Preensão Visual Autônoma com reBot Arm</h2>
    <p>
      Capítulo 29 do Curso de Iniciação em IA Física da Seeed — prática de preensão visual autônoma com o reBot Arm: instalação do SDK da câmera RGB-D e do repositório de preensão, execução dos programas de preensão e preensão‑e‑colocação, compensação de posição e uma trilha opcional de preensão em nuvem de pontos com GraspNet.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#setup">Configuração do ambiente</a>
      <a href="#grasping">Preensão visual</a>
      <a href="#graspnet">GraspNet</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 29.1 Visão Geral do Capítulo

Este capítulo usa o demo de preensão visual do reBot Arm como estudo de caso para construir um sistema completo de preensão visual robótica.

Resultado final: o braço observa a área de trabalho por meio de uma câmera RGB-D, reconhece o objeto alvo com um modelo de detecção, calcula a posição espacial do alvo a partir da profundidade e controla o braço para agarrá‑lo e colocá‑lo automaticamente.

Esta prática abrange:

- Implantação da câmera RGB-D;
- Execução do modelo de detecção;
- Localização visual;
- Calibração mão-olho;
- Cálculo da pose de preensão;
- Controle de preensão do braço.


## 29.2 Configuração de Hardware

| Componente | Modelo / Requisitos |
| ---- | ---- |
| Braço Robótico | reBot Arm B601 (2 configurações: DM / RS) |
| Câmera de Profundidade | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interface de Comunicação | Ponte serial USB2CAN (para o braço robótico); USB 3.0 (para a câmera) |
| PC Host | Ubuntu 22.04+, Python 3.10+, x86_64 |


### Fiação

- Conecte a câmera de profundidade ao host via USB 3.0.
- Conecte o adaptador USB2CAN ao barramento CAN do braço.
- Confirme que a alimentação de 24 V, a câmera e o braço estão todos conectados com segurança.
- Configure as permissões:

    ```text
    sudo chmod a+rw /dev/bus/usb/*/*   # depth camera USB permission
    sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port as needed)
    ```

<a id="setup"></a>

## 29.3 Configuração do Ambiente

### Etapa 1: Clonar o repositório de preensão visual

- Dê preferência ao repositório oficial Seeed-Projects; ele contém apenas a parte de preensão visual, e o SDK de controle do braço deve ser instalado separadamente.

    ```bash
    git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
    cd rebot_grasp
    ```

### Etapa 2: Criar e configurar o ambiente conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```

- Dica: para usar um nome de ambiente diferente, substitua `rebotarm` nos comandos pelo nome escolhido.

### Etapa 3. Instalar a biblioteca de controle do braço

```text
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

- Se `pip install -e .` relatar `Multiple top-level packages discovered in a flat-layout`, adicione descoberta explícita de pacotes em `reBotArm_control_py/pyproject.toml` e execute novamente `pip install -e .`:

    ```toml
    [build-system]
    requires = ["setuptools>=61.0", "wheel"]
    build-backend = "setuptools.build_meta"

    [tool.setuptools.packages.find]
    include = ["reBotArm_control_py*"]
    ```

- O programa de preensão visual lê essa configuração do SDK e seleciona automaticamente o modo de controle de braço e os parâmetros do gripper correspondentes.

### Etapa 4. Configurar o modelo do braço

- Em `/rebot_grasp/sdk/reBotArm_control_py/config/`, localize o `rebotarm.yaml` do braço. Defina `hardware_yaml:` para corresponder ao modelo do braço; o programa então carrega os parâmetros de hardware dos motores correspondentes.

    ```text
    # reBotArm global config
    # Hardware config (motor type, comm params, PID, etc.)

    hardware_yaml: "rebotarm_rs.yaml"

    # rebotarm_rs.yaml is B601 RS
    # rebotarm_dm.yaml is B601 DM
    ```

### Etapa 5. Instalar o SDK da câmera de profundidade

- Este projeto oferece suporte a câmeras RGB-D como Orbbec Gemini 2 e RealSense D435i / D405. Instale o SDK correspondente à sua câmera; pule esta etapa se o driver da câmera já for importado corretamente no ambiente atual.
- **Orbbec Gemini 2**
    - A Orbbec Gemini 2 requer **pyorbbecsdk** (a versão em Python do Orbbec SDK v2). Dê preferência à instalação do pacote Python pré‑compilado:
        - **Opção 1: instalar via pip (recomendado)**

            ```bash
            pip install pyorbbecsdk2
            ```

        - **Opção 2: compilar a partir do GitHub**

            ```bash
            # install build deps
            sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

            cd sdk
            git clone https://github.com/orbbec/pyorbbecsdk.git
            cd pyorbbecsdk
            pip install -e .
            ```

        - **Para usuários na China continental, você pode usar**

            ```bash
            git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
            ```

        - Ao instalar a partir do código‑fonte, primeiro use o CMake para compilar a extensão nativa e certifique‑se de que `install/lib` contenha `pyorbbecsdk*.so` e a biblioteca compartilhada da Orbbec, depois execute `pip install -e .`.
        - Observação: se todas as tentativas acima falharem, consulte a documentação oficial da Orbbec.
        - **Verificar instalação**

            ```bash
            python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
            ```

        - **OrbbecViewer (opcional, para verificar a câmera)**
            - Baixe o pacote pré‑compilado e execute `OrbbecViewer` para confirmar a conexão da câmera e o fluxo de profundidade antes de rodar o demo.
            - GitHub: [https://github.com/orbbec/OrbbecSDK_v2/releases](https://github.com/orbbec/OrbbecSDK_v2/releases)
            - Gitee: [https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases](https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases)
- **RealSense D435i / D405**
    - As câmeras RealSense requerem `pyrealsense2`, geralmente instalado diretamente via pip:

        ```bash
        pip install pyrealsense2
        python -c "import pyrealsense2; print('pyrealsense2 OK')"
        ```


## 29.4 Instalação da Câmera RGB-D

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-01.png" alt="Calibração mão-olho AX = XB" />
</div>

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-02.png" alt="Calibração mão-olho AX = XB" />
</div>


<a id="grasping"></a>

## 29.5 Preensão Visual

### Programa Principal de Preensão

`scripts/main.py` — o programa principal de preensão, um pipeline completo de preensão visual:

- Inicializar a câmera RGB-D e confirmar que o fluxo de imagem está disponível
- Habilitar o braço e o gripper, mover para a posição de pré‑altura
- Pré‑visualização em tempo real da câmera + detecção YOLO e segmentação por instância
- Estimar a orientação do gripper a partir do eixo curto do OBB; estimar a altura de preensão a partir do quantil de profundidade
- Pressione `G` para congelar o quadro; calcular a pose alvo do braço via transformação mão‑olho
- O braço se move para o ponto de pré‑preensão -> desce -> fecha o gripper -> ergue -> retorna à posição de pré‑preensão

    ```text
    python scripts/main.py
    ```

### Programa de Preensão e Colocação

`scripts/set.py` — programa de preensão e colocação: pegar uma banana e colocá‑la em uma caixa.

- Inicializar câmera e braço; mover para a pré‑posição
- Pré‑visualização em tempo real da câmera + detecção YOLO e segmentação por instância
- Pressione `G` para congelar o quadro; calcular a pose alvo do braço via transformação mão‑olho
- O braço agarra a banana e a ergue
- O braço coloca a banana na caixa e retorna à pose inicial
- Pressione `Q` para sair; o braço retorna a zero.

    ```text
    python scripts/set.py
    ```

### Compensação de Posição

Se após a calibração a precisão de preensão do braço não for suficiente, abra `config/default.yaml` e ajuste os valores de `X (frente/trás), Y (esquerda/direita), Z (cima/baixo)` em `calibration.hand_eye_compensation_m` para compensação de posição.

```yaml
------------------------------------
calibration:
  aruco:
    marker_length_m: 0.1
    dict_id: 0
    target_marker_id: 0
  hand_eye_method: TSAI
  hand_eye_compensation_m:
    x: 0.00
    y: 0.00
    z: -0.02
------------------------------------
```

<a id="graspnet"></a>

## 29.6 Preensão em Nuvem de Pontos 3D [Eletiva]

### O que é GraspNet?

GraspNet responde principalmente: dada a forma 3D do objeto, onde o robô deve agarrar e em que pose?

GraspNet é um método de preensão robótica baseado em nuvem de pontos — mais precisamente, um framework de geração e avaliação de poses de preensão 6‑DoF para nuvens de pontos 3D. Em resumo, a nuvem de pontos é “os dados do mundo 3D que o robô enxerga”, e GraspNet é “como o robô encontra a melhor pose de preensão a partir desses dados 3D”.

Entrada: dados RGB-D -> nuvem de pontos -> GraspNet -> pose de preensão

Saída: uma pose de preensão 6‑DoF $G=(x,y,z,R)$, incluindo:

- Posição, para onde o gripper do braço deve ir:

    ```text
    x,y,z
    ```

- Pose, em que direção o gripper deve apontar:

    ```text
    roll,pitch,yaw
    ```

- Finalmente dizendo ao braço: agarre a partir desta direção

### Configurar o GraspNet

Para estimar com mais precisão as poses de preensão dos objetos, este projeto adapta [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) para melhorar o desempenho de preensão do braço.

As extensões `pointnet2` / `knn` do GraspNet precisam de um compilador CUDA. Antes de começar, confirme que `nvcc` é encontrado e que sua versão de CUDA corresponde à usada para compilar o PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou sua versão de CUDA for diferente de `torch.version.cuda`, instale o compilador CUDA que corresponda à versão CUDA do PyTorch. Por exemplo, quando o PyTorch mostrar `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

As duas devem corresponder; caso contrário, ao compilar `pointnet2` / `knn` será exibido `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# after installing PyTorch for your CUDA version, install GraspNet runtime deps
pip install open3d tensorboard Pillow tqdm

# configure CUDA build paths before compiling local ops.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# compile CUDA ops
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

Três armadilhas que vale a pena conhecer antes de começar:

| Sintoma | O que fazer |
| :--- | :--- |
| `python setup.py install` gera erros de versão do CUDA/PyTorch | Use `pip install . --no-build-isolation` para que a extensão reutilize o PyTorch e o CUDA que já estão no ambiente conda |
| A compilação informa `fatal error: cusparse.h: No such file or directory` | Execute `find $CONDA_PREFIX -name cusparse.h` e adicione esse diretório a `CPATH` / `CPLUS_INCLUDE_PATH`; com o `cuda-toolkit` do conda geralmente é `$CONDA_PREFIX/targets/x86_64-linux/include`, e não o caminho `nvidia/cu13/include` do pip acima |
| Um aviso sobre o nome do pacote `sklearn` | O `sed` acima o renomeia para `scikit-learn`. Mantenha o pin `numpy==1.23.4` a menos que a pilha de dependências mude, porque `transforms3d==0.3.1` ainda usa aliases do NumPy como `np.float` |

#### Configurar o modelo pré-treinado

- Baixe os pesos oficiais pré-treinados do GraspNet do repositório graspnet-baseline ([Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)) e coloque `checkpoint-rs.tar` em:

    ```bash
    sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
    ```

- Em seguida, confirme em `config/default.yaml`:

    ```yaml
    graspnet:
      checkpoint: "checkpoint-rs.tar"
    ```

- `checkpoint` suporta três formas: um nome de arquivo simples é procurado em `sdk/graspnet-baseline/checkpoints/`; um caminho relativo é resolvido a partir da raiz do projeto; um caminho absoluto é usado diretamente.

### Execução e Depuração

1. Demo de estimativa com câmera GraspNet — `scripts/graspnet_camera_demo.py`
- Sem conectar o braço, execute a estimativa de pegada 6D do GraspNet usando apenas a câmera RGB-D. O script mantém uma pré-visualização ao vivo da câmera, usa a caixa do YOLO para selecionar a região alvo e filtra as pegadas viáveis dentro desse bbox a partir dos candidatos em toda a cena do GraspNet. Pressione `G` ou `Space` para inferir o quadro atual, `R` para retomar a pré-visualização ao vivo, `Q` ou `Esc` para sair. Após a inferência, visualize a nuvem de pontos e os candidatos de pegada via Open3D.

    ```bash
    python scripts/graspnet_camera_demo.py
    ```

2. Programa de pegada com braço GraspNet — `scripts/grasp.py`
- Com base nas estimativas de `graspnet_camera_demo.py`, acione a execução do braço: o YOLO seleciona o alvo, o GraspNet gera uma pose de pegada 6D, a calibração mão-olho a transforma para o referencial da base do braço, depois a alcançabilidade por IK é verificada e as etapas de pré-pegada/pegada/retirada são executadas. Durante a depuração, prefira `--dry-run` para apenas imprimir as poses alvo e a filtragem de candidatos.

    ```bash
    python scripts/grasp.py --dry-run
    python scripts/grasp.py --target-class "light blue coffee cup"
    ```

---

</div>

---
description: Este wiki apresenta como começar a usar o NVIDIA Jetson Thor e fornece fluxos de trabalho de exemplo para implantar projetos de IA e robótica no Thor. Também são fornecidas instruções detalhadas passo a passo e documentação de referência.
title: Ajustar Finamente Isaac GR00T N1.5 para o Braço LeRobot SO-101 e Implantar no Jetson Thor
keywords:
  - Thor
  - Robótica
  - Seeed
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor
last_update:
  date: 2025-9-11
  author: AI&Robotics Group
createdAt: '2025-09-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/
---

# Ajustar Finamente GR00T N1.5 para o Braço LeRobot SO-101 e Implantar no Jetson AGX Thor

## Introdução

Este wiki explica como **ajustar finamente o NVIDIA Isaac GR00T N1.5** para o **braço LeRobot SO-101** e implantá-lo no **NVIDIA Jetson Thor**. Ele abrange:

- Preparação de hardware para **LeRobot SO-101** e **Jetson AGX Thor**  
- Configuração do ambiente de software para **GR00T N1.5** no Jetson Thor  
- Uso da **plataforma de treinamento LeRobot**: coleta de dados, formatação de conjunto de dados e ajuste fino para o braço SO-101  
- Fluxos de trabalho de exemplo para implantar a política GR00T N1.5 treinada (LeRobot + SO-101) no Jetson Thor  
- Dicas de solução de problemas e armadilhas comuns  

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/cover1.png"/>
</div>

<p></p>

**Instruções detalhadas passo a passo e documentação de referência são fornecidas para ajudar você a ir da configuração inicial até a implantação completa.**

## Primeiros Passos com o Kit de Desenvolvimento NVIDIA Jetson Thor

### Visão Geral do Jetson Thor

O **Kit de Desenvolvimento NVIDIA® Jetson AGX Thor™** é uma potência para IA física e robótica humanoide. Ele é construído em torno da GPU NVIDIA Blackwell e inclui **128 GB de memória de alta velocidade**, fornecendo **até 2.070 FP4 TFLOPS** de computação de IA enquanto opera dentro de um envelope de energia de **40-130 W** (uso comum até 130 W).

Você pode adquirir o Kit de Desenvolvimento Jetson AGX Thor na Seeed Studio aqui: [Seeed – NVIDIA Jetson AGX Thor™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png"/>
</div>

Os itens de hardware incluídos na caixa são uma unidade Thor e um adaptador de energia:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg"/>
</div>

### Gravando a Imagem de Sistema do Thor

Em **10 de setembro de 2025**, a versão mais recente disponível da imagem de sistema para o Thor é **38.2**. Se você precisar regravar o sistema para o Thor, siga as instruções nesta seção.
Itens Necessários para a Gravação:

- Um dispositivo host com mais de 25 GB de espaço livre em disco (Ubuntu ou Windows OS suportado)
- Uma unidade USB com capacidade de pelo menos 16 GB
- Um monitor e cabo de exibição DP/HDMI
- Um ambiente de alimentação capaz de fornecer mais de 240 W
- Um teclado com interface USB

Primeiro, baixe a imagem de sistema em formato ISO para o Thor a partir do site oficial da NVIDIA. Clique [aqui](https://developer.nvidia.com/embedded/jetpack/downloads) para visitar a página de download:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png"/>
</div>

Instale o Balena Etcher na máquina host. Para baixar o instalador, clique [aqui](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET) e selecione a versão apropriada com base no sistema operacional do host:
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg"/>
</div>

Após baixar o arquivo de imagem ISO e instalar com sucesso o **Balena Etcher**, insira a unidade USB na máquina host. Em seguida, inicie o **Balena Etcher** para criar uma unidade USB inicializável para gravar o Thor:
:::danger
Este processo irá formatar a unidade USB. Certifique-se de fazer backup de todos os dados importantes com antecedência.
:::

Selecione o arquivo de imagem ISO baixado no seu armazenamento local e depois escolha o dispositivo de destino — ou seja, sua unidade USB.
<mark>Certifique-se de verificar cuidadosamente o nome do dispositivo de destino e o diretório de montagem!</mark>  Clique em `Flash!` e aguarde até que o processo seja concluído. Quando terminar, a unidade USB para gravar o sistema no Thor estará pronta:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300"/>
</div>

<p></p>

Em seguida, insira a unidade USB preparada, o teclado, o cabo de exibição (DP/HDMI) e a fonte de alimentação (Type-C) na placa Thor para iniciar o processo de gravação.
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg"/>
</div>

<p></p>

Ligue o Thor e entre na interface de inicialização. Selecione `Boot Manager` e, em seguida, escolha a unidade USB que foi inserida no Thor (com base no nome da sua unidade USB). Pressione Esc para retornar ao menu anterior e selecione `Continue`:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300"/>
</div>

<p></p>

Após uma breve tela preta, a seguinte interface aparecerá. Selecione `Jetson Thor options` e pressione Enter. Em seguida, escolha a opção
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2` para gravar a imagem de sistema na unidade de estado sólido NVMe do Thor:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

Uma grande quantidade de informações de log será exibida na tela. Aguarde aproximadamente **15 minutos**. Quando esta etapa for concluída, o dispositivo será reiniciado automaticamente e avançará para a próxima interface. Aguarde até que a barra de **Update Progress** atinja 100%, o que indica que o processo de gravação foi concluído com sucesso:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

Após a gravação, você pode prosseguir com a configuração inicial do sistema:
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png"/>
</div>

:::warning
Esta imagem de sistema não inclui CUDA, TensorRT ou outros componentes de SDK do JetPack.
:::

## Configuração Básica do Ambiente de Desenvolvimento no Thor

Esta seção fornece exemplos de como instalar dependências de software comumente usadas no Thor para fins de desenvolvimento. Essas dependências visam facilitar o desenvolvimento subsequente.

Observe que as dependências listadas são **apenas para referência** — instale pacotes adicionais de acordo com os requisitos de cada projeto individual.

### Instalando Dependências Essenciais de Desenvolvimento

**Instalação do JetPack SDK**
<p></p>
Abra o terminal e execute o seguinte comando. Após uma breve espera, CUDA, TensorRT e outros componentes do SDK serão instalados:
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

**Instalação de Navegador**

O Firefox foi testado e verificado para rodar de forma estável no Ubuntu 24.04:

```bash
sudo apt update
sudo apt install firefox
```

**Instalação do Jtop**

Para instalar o jtop, consulte as instruções a seguir.

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

**Instalação do Miniconda**

O Miniconda é usado para isolar ambientes de desenvolvimento. Para instalar o miniconda, consulte as instruções a seguir：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
conda --version
```

**Instalando a Versão de GPU do PyTorch**

Compilar a versão de GPU do PyTorch a partir do código-fonte no Thor pode resultar em problemas de compatibilidade. Para conveniência, fornecemos um arquivo `.whl` pré-compilado para ajudar os desenvolvedores a configurar rapidamente um ambiente de desenvolvimento com PyTorch no Thor.

Aqui, é fornecido um arquivo wheel pré-compilado para instalar o PyTorch 2.9 no Thor. Este arquivo foi compilado em um ambiente `Python 3.10 + CUDA 13`.  
clique em [**Python 3.10 + CUDA 13 pytorch2.9**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=vrAjhN) para baixar o arquivo `.whl`.  
clique em [**Python 3.10 + CUDA 13 torchvision0.24**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESDkmxLfCW1MkI8YBfrdWVAB4u3OPvnb4rOhlvw4QvoS_Q?e=YJE0Pr) para baixar o arquivo `.whl`.  
clique em [**Python 3.10 + CUDA 13 torchvision0.23**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQYGDJxMk1ZAgJHgEMZIfg8Blcrs2owxx3ZM603WgBXhhA?e=MdWMI9) para baixar o arquivo `.whl`.


Outros arquivos `.whl` de dependências pré-compiladas de <mark>Python **3.12** + CUDA 13</mark> para o Thor podem ser encontrados em:  
[**https://pypi.jetson-ai-lab.io/sbsa/cu130**](https://pypi.jetson-ai-lab.io/sbsa/cu130).

Se o arquivo wheel esperado não estiver disponível, o desenvolvedor precisará compilar as dependências necessárias por conta própria para concluir a configuração do ambiente de desenvolvimento.

### Instalando Dependências Adicionais

Este documento fornece uma imagem Docker de referência para ajudar os desenvolvedores a se adaptarem rapidamente ao ambiente de desenvolvimento do Jetson AGX Thor.
<mark>Esta imagem é apenas para referência, e os desenvolvedores são livres para decidir se desejam usá-la com base em suas necessidades específicas.</mark>

:::note
Como o tamanho da imagem excede 40 GB, o download a partir do servidor é relativamente lento.
:::

Esta imagem Docker pode executar de forma estável a inferência do GR00T N1.5. A saída do comando `pip list` na imagem é a seguinte:

<details>
<summary> pip.list </summary>

```bash
Package                   Version           Location         Installer                              Editable project location
------------------------- ----------------- ---------------- -------------------------------------- -------------------------
absl-py                   2.3.1                              /opt/venv/lib/python3.12/site-packages pip
accelerate                1.2.1                              /opt/venv/lib/python3.12/site-packages pip
aiohappyeyeballs          2.6.1                              /opt/venv/lib/python3.12/site-packages pip
aiohttp                   3.12.15                            /opt/venv/lib/python3.12/site-packages pip
aiosignal                 1.4.0                              /opt/venv/lib/python3.12/site-packages pip
albucore                  0.0.17                             /opt/venv/lib/python3.12/site-packages pip
albumentations            1.4.18                             /opt/venv/lib/python3.12/site-packages pip
annotated-types           0.7.0                              /opt/venv/lib/python3.12/site-packages pip
antlr4-python3-runtime    4.9.3                              /opt/venv/lib/python3.12/site-packages pip
anyio                     4.10.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi               25.1.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi-bindings      25.1.0                             /opt/venv/lib/python3.12/site-packages pip
arrow                     1.3.0                              /opt/venv/lib/python3.12/site-packages pip
asttokens                 3.0.0                              /opt/venv/lib/python3.12/site-packages pip
astunparse                1.6.3                              /opt/venv/lib/python3.12/site-packages pip
async-lru                 2.0.5                              /opt/venv/lib/python3.12/site-packages pip
attrs                     23.2.0                             /usr/lib/python3/dist-packages         debian
av                        12.3.0                             /opt/venv/lib/python3.12/site-packages pip
babel                     2.17.0                             /opt/venv/lib/python3.12/site-packages pip
beautifulsoup4            4.13.5                             /opt/venv/lib/python3.12/site-packages pip
bleach                    6.2.0                              /opt/venv/lib/python3.12/site-packages pip
blessings                 1.7                                /opt/venv/lib/python3.12/site-packages pip
blinker                   1.9.0                              /opt/venv/lib/python3.12/site-packages pip
certifi                   2025.8.3                           /opt/venv/lib/python3.12/site-packages pip
cffi                      2.0.0                              /opt/venv/lib/python3.12/site-packages pip
charset-normalizer        3.4.3                              /opt/venv/lib/python3.12/site-packages pip
click                     8.2.1                              /opt/venv/lib/python3.12/site-packages pip
cloudpickle               3.1.1                              /opt/venv/lib/python3.12/site-packages pip
cmake                     3.31.6                             /opt/venv/lib/python3.12/site-packages pip
comm                      0.2.3                              /opt/venv/lib/python3.12/site-packages pip
contourpy                 1.3.3                              /opt/venv/lib/python3.12/site-packages pip
cramjam                   2.11.0                             /opt/venv/lib/python3.12/site-packages pip
cryptography              41.0.7                             /usr/lib/python3/dist-packages         debian
cuda-bindings             13.0.0                             /opt/venv/lib/python3.12/site-packages pip
cuda-core                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
cuda-pathfinder           1.2.2                              /opt/venv/lib/python3.12/site-packages pip
cycler                    0.12.1                             /opt/venv/lib/python3.12/site-packages pip
Cython                    3.1.3                              /opt/venv/lib/python3.12/site-packages pip
datasets                  4.0.0                              /opt/venv/lib/python3.12/site-packages pip
dbus-python               1.3.2                              /usr/lib/python3/dist-packages
debugpy                   1.8.16                             /opt/venv/lib/python3.12/site-packages pip
decorator                 5.2.1                              /opt/venv/lib/python3.12/site-packages pip
decord                    0.6.0                              /opt/venv/lib/python3.12/site-packages pip
deepdiff                  8.6.1                              /opt/venv/lib/python3.12/site-packages pip
defusedxml                0.7.1                              /opt/venv/lib/python3.12/site-packages pip
devscripts                2.23.7                             /usr/lib/python3/dist-packages
diffusers                 0.36.0.dev0                        /opt/venv/lib/python3.12/site-packages pip
dill                      0.3.8                              /opt/venv/lib/python3.12/site-packages pip
distro                    1.9.0                              /usr/lib/python3/dist-packages         debian
dm-tree                   0.1.8                              /opt/venv/lib/python3.12/site-packages pip
docker-pycreds            0.4.0                              /opt/venv/lib/python3.12/site-packages pip
docstring_parser          0.17.0                             /opt/venv/lib/python3.12/site-packages pip
docutils                  0.22                               /opt/venv/lib/python3.12/site-packages pip
draccus                   0.11.5                             /opt/venv/lib/python3.12/site-packages pip
einops                    0.8.1                              /opt/venv/lib/python3.12/site-packages pip
eval_type_backport        0.2.2                              /opt/venv/lib/python3.12/site-packages pip
evdev                     1.9.2                              /opt/venv/lib/python3.12/site-packages pip
executing                 2.2.1                              /opt/venv/lib/python3.12/site-packages pip
Farama-Notifications      0.0.4                              /opt/venv/lib/python3.12/site-packages pip
fastjsonschema            2.21.2                             /opt/venv/lib/python3.12/site-packages pip
fastparquet               2024.11.0                          /opt/venv/lib/python3.12/site-packages pip
feetech-servo-sdk         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
filelock                  3.19.1                             /opt/venv/lib/python3.12/site-packages pip
flash_attn                2.8.4                              /opt/venv/lib/python3.12/site-packages pip
Flask                     3.1.2                              /opt/venv/lib/python3.12/site-packages pip
flatbuffers               25.2.10                            /opt/venv/lib/python3.12/site-packages pip
fonttools                 4.59.2                             /opt/venv/lib/python3.12/site-packages pip
fqdn                      1.5.1                              /opt/venv/lib/python3.12/site-packages pip
frozenlist                1.7.0                              /opt/venv/lib/python3.12/site-packages pip
fsspec                    2025.3.0                           /opt/venv/lib/python3.12/site-packages pip
gast                      0.6.0                              /opt/venv/lib/python3.12/site-packages pip
gitdb                     4.0.12                             /opt/venv/lib/python3.12/site-packages pip
GitPython                 3.1.45                             /opt/venv/lib/python3.12/site-packages pip
google-pasta              0.2.0                              /opt/venv/lib/python3.12/site-packages pip
grpcio                    1.74.0                             /opt/venv/lib/python3.12/site-packages pip
gymnasium                 1.0.0                              /opt/venv/lib/python3.12/site-packages pip
h11                       0.16.0                             /opt/venv/lib/python3.12/site-packages pip
h5py                      3.12.1                             /opt/venv/lib/python3.12/site-packages pip
hf-xet                    1.1.9                              /opt/venv/lib/python3.12/site-packages pip
httpcore                  1.0.9                              /opt/venv/lib/python3.12/site-packages pip
httplib2                  0.20.4                             /usr/lib/python3/dist-packages
httpx                     0.28.1                             /opt/venv/lib/python3.12/site-packages pip
huggingface-hub           0.34.4                             /opt/venv/lib/python3.12/site-packages pip
hydra-core                1.3.2                              /opt/venv/lib/python3.12/site-packages pip
id                        1.5.0                              /opt/venv/lib/python3.12/site-packages pip
idna                      3.10                               /opt/venv/lib/python3.12/site-packages pip
imageio                   2.34.2                             /opt/venv/lib/python3.12/site-packages pip
importlib_metadata        8.7.0                              /opt/venv/lib/python3.12/site-packages pip
iniconfig                 2.1.0                              /opt/venv/lib/python3.12/site-packages pip
inquirerpy                0.3.4                              /opt/venv/lib/python3.12/site-packages pip
iopath                    0.1.9                              /opt/venv/lib/python3.12/site-packages pip
ipykernel                 6.30.1                             /opt/venv/lib/python3.12/site-packages pip
ipython                   9.5.0                              /opt/venv/lib/python3.12/site-packages pip
ipython_pygments_lexers   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
ipywidgets                8.1.7                              /opt/venv/lib/python3.12/site-packages pip
isoduration               20.11.0                            /opt/venv/lib/python3.12/site-packages pip
itsdangerous              2.2.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.classes            3.4.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.context            6.0.1                              /opt/venv/lib/python3.12/site-packages pip
jaraco.functools          4.3.0                              /opt/venv/lib/python3.12/site-packages pip
jedi                      0.19.2                             /opt/venv/lib/python3.12/site-packages pip
jeepney                   0.9.0                              /opt/venv/lib/python3.12/site-packages pip
Jinja2                    3.1.6                              /opt/venv/lib/python3.12/site-packages pip
json5                     0.12.1                             /opt/venv/lib/python3.12/site-packages pip
jsonlines                 4.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonpointer               3.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonschema                4.25.1                             /opt/venv/lib/python3.12/site-packages pip
jsonschema-specifications 2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
jupyter                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter_client            8.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter-console           6.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter_core              5.8.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter-events            0.12.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter-lsp               2.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyter_server            2.17.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter_server_terminals  0.5.3                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab                4.4.7                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_myst           2.4.2                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_pygments       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_server         2.27.3                             /opt/venv/lib/python3.12/site-packages pip
jupyterlab_widgets        3.0.15                             /opt/venv/lib/python3.12/site-packages pip
keras                     3.11.3                             /opt/venv/lib/python3.12/site-packages pip
keyring                   25.6.0                             /opt/venv/lib/python3.12/site-packages pip
kiwisolver                1.4.9                              /opt/venv/lib/python3.12/site-packages pip
kornia                    0.7.4                              /opt/venv/lib/python3.12/site-packages pip
kornia_rs                 0.1.9                              /opt/venv/lib/python3.12/site-packages pip
lark                      1.2.2                              /opt/venv/lib/python3.12/site-packages pip
launchpadlib              1.11.0                             /usr/lib/python3/dist-packages
lazr.restfulclient        0.14.6                             /usr/lib/python3/dist-packages
lazr.uri                  1.0.6                              /usr/lib/python3/dist-packages
lazy_loader               0.4                                /opt/venv/lib/python3.12/site-packages pip
lerobot                   0.3.4             /opt/lerobot     /opt/venv/lib/python3.12/site-packages pip
libclang                  18.1.1                             /opt/venv/lib/python3.12/site-packages pip
llvmlite                  0.44.0                             /opt/venv/lib/python3.12/site-packages pip
lockfile                  0.12.2                             /opt/venv/lib/python3.12/site-packages pip
Mako                      1.3.10                             /opt/venv/lib/python3.12/site-packages pip
Markdown                  3.9                                /opt/venv/lib/python3.12/site-packages pip
markdown-it-py            4.0.0                              /opt/venv/lib/python3.12/site-packages pip
MarkupSafe                3.0.2                              /opt/venv/lib/python3.12/site-packages pip
matplotlib                3.10.0                             /opt/venv/lib/python3.12/site-packages pip
matplotlib-inline         0.1.7                              /opt/venv/lib/python3.12/site-packages pip
mdurl                     0.1.2                              /opt/venv/lib/python3.12/site-packages pip
mergedeep                 1.3.4                              /opt/venv/lib/python3.12/site-packages pip
mistune                   3.1.4                              /opt/venv/lib/python3.12/site-packages pip
ml_dtypes                 0.5.3                              /opt/venv/lib/python3.12/site-packages pip
more-itertools            10.8.0                             /opt/venv/lib/python3.12/site-packages pip
mpmath                    1.3.0                              /opt/venv/lib/python3.12/site-packages pip
msgpack                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
multidict                 6.6.4                              /opt/venv/lib/python3.12/site-packages pip
multiprocess              0.70.16                            /opt/venv/lib/python3.12/site-packages pip
mypy_extensions           1.1.0                              /opt/venv/lib/python3.12/site-packages pip
namex                     0.1.0                              /opt/venv/lib/python3.12/site-packages pip
nbclient                  0.10.2                             /opt/venv/lib/python3.12/site-packages pip
nbconvert                 7.16.6                             /opt/venv/lib/python3.12/site-packages pip
nbformat                  5.10.4                             /opt/venv/lib/python3.12/site-packages pip
nest-asyncio              1.6.0                              /opt/venv/lib/python3.12/site-packages pip
networkx                  3.5                                /opt/venv/lib/python3.12/site-packages pip
nh3                       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
ninja                     1.13.0                             /opt/venv/lib/python3.12/site-packages pip
notebook                  7.4.5                              /opt/venv/lib/python3.12/site-packages pip
notebook_shim             0.2.4                              /opt/venv/lib/python3.12/site-packages pip
numba                     0.61.2                             /opt/venv/lib/python3.12/site-packages pip
numpy                     2.3.3                              /opt/venv/lib/python3.12/site-packages pip
numpydantic               1.6.7                              /opt/venv/lib/python3.12/site-packages pip
nvtx                      0.2.13                             /opt/venv/lib/python3.12/site-packages pip
oauthlib                  3.2.2                              /usr/lib/python3/dist-packages
omegaconf                 2.3.0                              /opt/venv/lib/python3.12/site-packages pip
onnx                      1.17.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-contrib-python     4.13.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-python             4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opencv-python-headless    4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opt_einsum                3.4.0                              /opt/venv/lib/python3.12/site-packages pip
optimum                   1.27.0                             /opt/venv/lib/python3.12/site-packages pip
optree                    0.17.0                             /opt/venv/lib/python3.12/site-packages pip
orderly-set               5.5.0                              /opt/venv/lib/python3.12/site-packages pip
packaging                 25.0                               /opt/venv/lib/python3.12/site-packages pip
pandas                    2.2.3                              /opt/venv/lib/python3.12/site-packages pip
pandocfilters             1.5.1                              /opt/venv/lib/python3.12/site-packages pip
parso                     0.8.5                              /opt/venv/lib/python3.12/site-packages pip
peft                      0.17.0                             /opt/venv/lib/python3.12/site-packages pip
pettingzoo                1.25.0                             /opt/venv/lib/python3.12/site-packages pip
pexpect                   4.9.0                              /opt/venv/lib/python3.12/site-packages pip
pfzy                      0.3.4                              /opt/venv/lib/python3.12/site-packages pip
pid                       3.0.4                              /opt/venv/lib/python3.12/site-packages pip
pillow                    11.3.0                             /opt/venv/lib/python3.12/site-packages pip
pip                       25.2                               /opt/venv/lib/python3.12/site-packages pip
pkginfo                   1.12.1.2                           /opt/venv/lib/python3.12/site-packages pip
platformdirs              4.4.0                              /opt/venv/lib/python3.12/site-packages pip
pluggy                    1.6.0                              /opt/venv/lib/python3.12/site-packages pip
portalocker               3.2.0                              /opt/venv/lib/python3.12/site-packages pip
prometheus_client         0.22.1                             /opt/venv/lib/python3.12/site-packages pip
prompt_toolkit            3.0.52                             /opt/venv/lib/python3.12/site-packages pip
propcache                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
protobuf                  6.32.0                             /opt/venv/lib/python3.12/site-packages pip
psutil                    7.0.0                              /opt/venv/lib/python3.12/site-packages pip
ptyprocess                0.7.0                              /opt/venv/lib/python3.12/site-packages pip
pure_eval                 0.2.3                              /opt/venv/lib/python3.12/site-packages pip
pyarrow                   21.0.0                             /opt/venv/lib/python3.12/site-packages pip
pycparser                 2.23                               /opt/venv/lib/python3.12/site-packages pip
pycuda                    2025.1.1                           /opt/venv/lib/python3.12/site-packages pip
pydantic                  2.10.6                             /opt/venv/lib/python3.12/site-packages pip
pydantic_core             2.27.2                             /opt/venv/lib/python3.12/site-packages pip
Pygments                  2.19.2                             /opt/venv/lib/python3.12/site-packages pip
PyGObject                 3.48.2                             /usr/lib/python3/dist-packages
PyJWT                     2.7.0                              /usr/lib/python3/dist-packages         debian
pynput                    1.8.1                              /opt/venv/lib/python3.12/site-packages pip
pyparsing                 3.1.1                              /usr/lib/python3/dist-packages         debian
pyrsistent                0.20.0                             /usr/lib/python3/dist-packages
pyserial                  3.5                                /opt/venv/lib/python3.12/site-packages pip
pytest                    8.4.2                              /opt/venv/lib/python3.12/site-packages pip
python-apt                2.7.7+ubuntu5                      /usr/lib/python3/dist-packages
python-daemon             3.1.2                              /opt/venv/lib/python3.12/site-packages pip
python-dateutil           2.9.0.post0                        /opt/venv/lib/python3.12/site-packages pip
python-json-logger        3.3.0                              /opt/venv/lib/python3.12/site-packages pip
python-xlib               0.33                               /opt/venv/lib/python3.12/site-packages pip
pytools                   2025.2.4                           /opt/venv/lib/python3.12/site-packages pip
pytorch3d                 0.7.8                              /opt/venv/lib/python3.12/site-packages pip
pytz                      2025.2                             /opt/venv/lib/python3.12/site-packages pip
PyYAML                    6.0.2                              /opt/venv/lib/python3.12/site-packages pip
pyyaml-include            1.4.1                              /opt/venv/lib/python3.12/site-packages pip
pyzmq                     27.1.0                             /opt/venv/lib/python3.12/site-packages pip
ray                       2.40.0                             /opt/venv/lib/python3.12/site-packages pip
readme_renderer           44.0                               /opt/venv/lib/python3.12/site-packages pip
referencing               0.36.2                             /opt/venv/lib/python3.12/site-packages pip
regex                     2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
requests                  2.32.3                             /opt/venv/lib/python3.12/site-packages pip
requests-toolbelt         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
rerun-sdk                 0.24.1                             /opt/venv/lib/python3.12/site-packages pip
rfc3339-validator         0.1.4                              /opt/venv/lib/python3.12/site-packages pip
rfc3986                   2.0.0                              /opt/venv/lib/python3.12/site-packages pip
rfc3986-validator         0.1.1                              /opt/venv/lib/python3.12/site-packages pip
rfc3987-syntax            1.1.0                              /opt/venv/lib/python3.12/site-packages pip
rich                      14.1.0                             /opt/venv/lib/python3.12/site-packages pip
rpds-py                   0.27.1                             /opt/venv/lib/python3.12/site-packages pip
safetensors               0.6.2                              /opt/venv/lib/python3.12/site-packages pip
scikit-build              0.18.1                             /opt/venv/lib/python3.12/site-packages pip
scikit-image              0.25.2                             /opt/venv/lib/python3.12/site-packages pip
scipy                     1.16.1                             /opt/venv/lib/python3.12/site-packages pip
SecretStorage             3.4.0                              /opt/venv/lib/python3.12/site-packages pip
semantic-version          2.10.0                             /opt/venv/lib/python3.12/site-packages pip
Send2Trash                1.8.3                              /opt/venv/lib/python3.12/site-packages pip
sentencepiece             0.2.1                              /opt/venv/lib/python3.12/site-packages pip
sentry-sdk                2.37.1                             /opt/venv/lib/python3.12/site-packages pip
service                   0.6.0                              /opt/venv/lib/python3.12/site-packages pip
setproctitle              1.3.7                              /opt/venv/lib/python3.12/site-packages pip
setuptools                80.9.0                             /opt/venv/lib/python3.12/site-packages pip
setuptools-rust           1.12.0                             /opt/venv/lib/python3.12/site-packages pip
shtab                     1.7.2                              /opt/venv/lib/python3.12/site-packages pip
siphash24                 1.8                                /opt/venv/lib/python3.12/site-packages pip
six                       1.16.0                             /usr/lib/python3/dist-packages
smmap                     5.0.2                              /opt/venv/lib/python3.12/site-packages pip
sniffio                   1.3.1                              /opt/venv/lib/python3.12/site-packages pip
soupsieve                 2.8                                /opt/venv/lib/python3.12/site-packages pip
stack-data                0.6.3                              /opt/venv/lib/python3.12/site-packages pip
sympy                     1.14.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard               2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard-data-server   0.7.2                              /opt/venv/lib/python3.12/site-packages pip
tensorflow                2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorrt                  10.13.2.6                          /opt/venv/lib/python3.12/site-packages pip
termcolor                 3.1.0                              /opt/venv/lib/python3.12/site-packages pip
terminado                 0.18.1                             /opt/venv/lib/python3.12/site-packages pip
tf_keras                  2.20.1                             /opt/venv/lib/python3.12/site-packages pip
tianshou                  0.5.1                              /opt/venv/lib/python3.12/site-packages pip
tifffile                  2025.9.9                           /opt/venv/lib/python3.12/site-packages pip
timm                      1.0.14                             /opt/venv/lib/python3.12/site-packages pip
tinycss2                  1.4.0                              /opt/venv/lib/python3.12/site-packages pip
tokenizers                0.21.4                             /opt/venv/lib/python3.12/site-packages pip
toml                      0.10.2                             /opt/venv/lib/python3.12/site-packages pip
torch                     2.9.0                              /opt/venv/lib/python3.12/site-packages pip
torchvision               0.24.0                             /opt/venv/lib/python3.12/site-packages pip
tornado                   6.5.2                              /opt/venv/lib/python3.12/site-packages pip
tqdm                      4.67.1                             /opt/venv/lib/python3.12/site-packages pip
traitlets                 5.14.3                             /opt/venv/lib/python3.12/site-packages pip
transformers              4.51.3                             /opt/venv/lib/python3.12/site-packages pip
triton                    3.5.0+gite3b8f77a                  /opt/venv/lib/python3.12/site-packages pip
twine                     6.2.0                              /opt/venv/lib/python3.12/site-packages pip
typeguard                 4.4.2                              /opt/venv/lib/python3.12/site-packages pip
types-python-dateutil     2.9.0.20250822                     /opt/venv/lib/python3.12/site-packages pip
typing_extensions         4.12.2                             /opt/venv/lib/python3.12/site-packages pip
typing-inspect            0.9.0                              /opt/venv/lib/python3.12/site-packages pip
tyro                      0.9.17                             /opt/venv/lib/python3.12/site-packages pip
tzdata                    2025.2                             /opt/venv/lib/python3.12/site-packages pip
uri-template              1.3.0                              /opt/venv/lib/python3.12/site-packages pip
urllib3                   2.5.0                              /opt/venv/lib/python3.12/site-packages pip
uv                        0.8.16                             /opt/venv/lib/python3.12/site-packages pip
wadllib                   1.3.6                              /usr/lib/python3/dist-packages
wandb                     0.18.0                             /opt/venv/lib/python3.12/site-packages pip
wcwidth                   0.2.13                             /opt/venv/lib/python3.12/site-packages pip
webcolors                 24.11.1                            /opt/venv/lib/python3.12/site-packages pip
webencodings              0.5.1                              /opt/venv/lib/python3.12/site-packages pip
websocket-client          1.8.0                              /opt/venv/lib/python3.12/site-packages pip
Werkzeug                  3.1.3                              /opt/venv/lib/python3.12/site-packages pip
wheel                     0.45.1                             /opt/venv/lib/python3.12/site-packages pip
widgetsnbextension        4.0.14                             /opt/venv/lib/python3.12/site-packages pip
wrapt                     1.17.3                             /opt/venv/lib/python3.12/site-packages pip
xxhash                    3.5.0                              /opt/venv/lib/python3.12/site-packages pip
yarl                      1.20.1                             /opt/venv/lib/python3.12/site-packages pip
zipp                      3.23.0                             /opt/venv/lib/python3.12/site-packages pip
```

</details>

A imagem pode ser puxada diretamente do Docker Hub e inclui dependências comumente usadas, como `PyTorch`, `TensorRT` e `FlashAttention`:

```bash
docker pull johnnync/isaac-gr00t:r38.2.arm64-sbsa-cu130-24.04
```

:::warning
Esta imagem Docker não oferece suporte à invocação de scripts LeRobot para inferência de modelo `ACT`. Se você precisar executar o conjunto completo de scripts LeRobot, use um ambiente fora desta imagem.
:::


Para executar o Docker no Thor, consulte o seguinte comando. Substitua `your_docker_img:tag` pelo nome e tag da sua imagem Docker ou use o ID da imagem:

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
  your_docker_img:tag
```



## Coleta de Dados Usando o SO-ARM

Para um tutorial detalhado sobre coleta de dados, consulte o seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#registrar-o-conjunto-de-dados)  
**Este link contém um tutorial completo para o SO-ARM, cobrindo configuração, montagem, calibração, coleta de dados, treinamento e inferência.**

A coleta de dados para o braço robótico lerobot pode ser realizada em um PC ou diretamente em um dispositivo Jetson.

- Método 1: Coletar dados usando Jetson
- Método 2: Coletar dados usando um PC com Ubuntu

Os procedimentos de coleta de dados são essencialmente os mesmos para ambos os métodos.

:::warning
**O Jetson pode não conseguir transmitir simultaneamente duas câmeras USB com os mesmos requisitos de largura de banda. Se você conectar duas câmeras USB, elas devem estar ligadas a chips de hub USB diferentes!**
:::

Para transmitir duas câmeras USB simultaneamente no Thor, após conectar uma câmera à porta USB-A, você também precisará usar um **hub USB externo conectado via porta USB Type-C**. Isso garante que a segunda câmera USB seja montada em um controlador de hub USB diferente dentro do Thor.
 Um exemplo de hub USB Type-C compatível é mostrado abaixo:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" height="400"/>
</div>


A base USB Type-C deve ser conectada a portas específicas no Thor para garantir que os periféricos funcionem corretamente, como mostrado abaixo:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="400"/>
</div>

### Configuração do Ambiente Lerobot (opcional)

O processo de configuração do ambiente de desenvolvimento para o Lerobot pode ser encontrado na subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#install-lerobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#instalar-lerobot)



### Configurar os motores


Os motores em cada junta do SO-ARM precisam ser configurados antes da montagem. As etapas de configuração podem ser encontradas na subseção do seguinte link:    
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configure-the-motors](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configurar-os-motores)


### Montagem

O processo de instalação dos braços mestre e seguidor do SO-ARM pode ser encontrado na subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#assembly](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#montagem)

### Calibração do SO-ARM


Depois que o SO-ARM estiver totalmente montado, será necessária a calibração. Consulte a subseção do seguinte link para o procedimento de calibração:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrate](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrar)



:::note
**Ao calibrar os braços robóticos, NÃO conecte nenhuma câmera USB, pois isso pode causar conflitos de porta ou atribuições incorretas de portas.**
:::

**Após executar o script de calibração, mova manualmente cada junta do braço robótico para garantir que ela atinja todo o seu intervalo de movimento! Caso contrário, poderá ocorrer uma incompatibilidade entre as poses dos braços líder e seguidor durante a teleoperação.**




### Adição de Câmera

Geralmente é recomendável instalar uma câmera no punho/garra do braço robótico e outra câmera na superfície da mesa, para garantir cobertura adequada da postura do braço.
<mark>A abordagem específica de instalação depende do seu cenário de aplicação; o exemplo mostrado abaixo é apenas para referência.</mark>

Para mais detalhes, consulte a subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#add-cameras](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#adicionar-câmeras)



### Coleta de Dados

Após concluir a instalação das câmeras e a calibração do braço robótico, o procedimento de coleta do conjunto de dados pode ser encontrado na subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#registrar-o-conjunto-de-dados)



### Visualização dos Dados Coletados


Para visualizar os dados coletados no SO-ARM, consulte a subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#visualize-the-dataset](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#visualizar-o-conjunto-de-dados)



### Treinamento de Política

Com base nos dados coletados, o procedimento para treinar uma Policy pode ser encontrado na subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#train-a-policy](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#treinar-uma-política)



:::tip
Nas seções a seguir, apresentaremos uma plataforma de treinamento em nuvem e demonstraremos o uso básico. Você pode optar por concluir o treinamento de forma mais eficiente no servidor remoto.
:::

:::note
Se você optar por treinar a política na nuvem, certifique-se de que seu conjunto de dados seja carregado antecipadamente para o servidor em nuvem ou baixado do Hugging Face Hub. No entanto, devido a possíveis problemas de rede ao baixar diretamente do Hugging Face Hub, é altamente recomendável enviar manualmente o conjunto de dados para o seu servidor em nuvem.
:::

## Usar NVIDIA Brev para treinar políticas

O NVIDIA Brev oferece acesso simplificado a instâncias de GPU NVIDIA em plataformas de nuvem populares, configuração automática de ambiente e opções de implantação flexíveis, permitindo que desenvolvedores comecem a experimentar instantaneamente.

URL de acesso à plataforma:
[https://login.brev.nvidia.com/signin](https://login.brev.nvidia.com/signin)

Você precisará registrar uma conta para usar a plataforma. Esta seção apresenta o uso básico da plataforma de treinamento.

### Habilitando a Plataforma de Treinamento em Nuvem

**Instruções Passo a Passo**

- Criar uma Instância de Servidor em Nuvem - passo 1

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600"/>
</div>

- Criar uma Instância de Servidor em Nuvem - passo 2

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600"/>
</div>

- Criar uma Instância de Servidor em Nuvem - passo 3

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600"/>
</div>

**Iniciar o Jupyter Notebook baseado na Web**：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600"/>
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600"/>
</div>

### Treinando o Modelo e Exportando do Servidor

**Os desenvolvedores podem treinar modelos diretamente no terminal do notebook. Abaixo está um exemplo para treinar um GR00T N1.5 e exportá-lo do servidor posteriormente.**

Instalar o Conda no servidor:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

Clonar o repositório Isaac-GR00T: 
```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
```

Criar o ambiente gr00t:
```bash
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4 
```

:::warning
Se você treinar ou ajustar o GR00T em uma plataforma de nuvem, deverá usar uma GPU com arquitetura Ampere ou mais recente (por exemplo, RTX A6000 ou GeForce RTX 4090). **V100 (Volta) não é compatível** para treinamento ou ajuste fino do GR00T.
:::

Para mais detalhes sobre ajuste fino do modelo, consulte:
[https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning#:~:text=1.2%20Configure%20Modality%20File)


Ajuste fino do modelo GR00T N1.5:

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

:::note
As configurações padrão de ajuste fino exigem cerca de 25G de VRAM. Se você não tiver tanta VRAM, tente adicionar a flag `--no-tune_diffusion_model` ao script gr00t_finetune.py.
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600"/>
</div>

:::note
Se você quiser treinar ou ajustar o Gr00t em um servidor, pode consultar este [link](https://github.com/NVIDIA/Isaac-GR00T).
:::

**Após a conclusão do treinamento, talvez você queira baixar o modelo para sua máquina local. Mas a barra lateral do Jupyter Notebook não oferece suporte à navegação direta para pastas de treinamento de modelos.**

A solução é: primeiro compacte a pasta de destino em um arquivo `.zip` ou `.tar.gz` e, em seguida, baixe o arquivo compactado através da interface do notebook. Consulte a figura abaixo para um exemplo.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600"/>
</div>

## Inferência Isaac GR00T N1.5 no Thor

O Jetson AGX Thor, como uma poderosa plataforma de computação e implantação de borda, fornece recursos suficientes para suportar inferência de modelos em larga escala. Nesta seção, com base no conteúdo apresentado anteriormente, demonstramos como executar a inferência para o GR00T N1.5 no Thor.

GR00T N1.5 é um sistema base de código aberto lançado pela NVIDIA Research na área de aprendizado de robôs. Seu objetivo é fornecer uma estrutura unificada para treinamento e inferência em IA incorporada, com foco especial em aprendizado por imitação e aprendizado de políticas impulsionados por modelos em larga escala.

### Preparação

Os modelos pré-treinados do GR00T N1.5 estão disponíveis via **Hugging Faces**. Você pode baixá-los a partir do seguinte link:

[https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600"/>
</div>

Todas as dependências necessárias para a inferência do GR00T já foram pré-configuradas em uma imagem Docker dedicada.

Use o seguinte comando para iniciar o contêiner, substituindo `<image_name>:<tag>` pelo que você estiver usando:

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

Faça o git clone do código-fonte do Gr00t e instale-o:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

Gr00t é totalmente compatível com os conjuntos de dados coletados usando o framework lerobot. Consulte a seção anterior "**Data Collection**" para preparar seu conjunto de dados para o fine-tuning do modelo Gr00t.

### Fine-Tuning do Modelo (opcional)

:::warning
Se você já fez o fine-tuning do GR00T N1.5 no NVIDIA Brev, pode pular esta etapa no Thor.
:::

**O processo de fine-tuning pode ser executado tanto na plataforma de treinamento em nuvem fornecida quanto diretamente dentro do contêiner Docker no Thor**.

Se você não baixou nenhum modelo GR00T pré-treinado e não pretende usar uma versão personalizada, pode usar o seguinte comando para fazer o fine-tuning com base nos pesos do Hugging Face:

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

Esse script irá automaticamente baixar o modelo GR00T pré-treinado do Hugging Face e iniciar o processo de fine-tuning.

Se desejar usar um modelo GR00T pré-treinado armazenado localmente, modifique o comando da seguinte forma:

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --base-model-path ./pretrained/GR00T-N1.5-3
```

`--dataset-path` é o caminho de arquivo dos dados coletados do SO-ARM.

:::note
As configurações padrão de fine-tuning exigem cerca de 25G de VRAM. Se você não tiver essa quantidade de VRAM, tente adicionar a flag `--no-tune_diffusion_model` ao script gr00t_finetune.py.
:::

### Executando Inferência com GR00T N1.5

Para obter o desempenho ideal, é recomendável reproduzir o mais fielmente possível o ambiente real utilizado durante a coleta de dados ao implantar modelos GR00T com fine-tuning. Isso porque as capacidades de generalização do modelo são limitadas.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy.jpg" width="400"/>
</div>

Dentro do contêiner Docker, abra um terminal e inicie o serviço de inferência do GR00T:

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

Após a inicialização bem-sucedida, o terminal deve exibir logs semelhantes a:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy1.png" width="600"/>
</div>

Abra outro terminal e use o seguinte comando para entrar no mesmo contêiner a partir de outro shell:

```bash
sudo docker exec -it <container id> /bin/bahs
```

Em seguida, nesse segundo shell, inicie o cliente de inferência:

```bash
  python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

Substitua `index_or_path` pelo número de índice da sua câmera; você pode encontrá-lo executando `ls /dev/video*`.

Quando o processo do cliente for iniciado com sucesso, a seguinte saída deverá aparecer:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600"/>
</div>

:::tip
Durante a primeira execução do processo do cliente, você deve calibrar os servos do braço. O processo de calibração é o mesmo descrito anteriormente.

Certifique-se de que cada junta se mova por toda a sua faixa de movimento para garantir o comportamento adequado de teleoperação e inferência.
:::

Depois que tudo estiver configurado, o GR00T N1.5 poderá ser implantado com sucesso no Jetson AGX Thor. O sistema e o ambiente de hardware agora estão verificados para suportar a inferência completa:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600"/>
</div>

## FAQ

**P1: A ferramenta Brev CLI não funciona na plataforma de treinamento em nuvem?**  
Isso geralmente é causado por problemas de rede.
Você pode instalar e fazer login no Brev CLI no seu host Ubuntu local e, em seguida, tentar se conectar à sua instância em nuvem usando SSH a partir do terminal local.

**P2: Como faço para enviar dados para a plataforma de treinamento?**  
Use o seguinte comando: `scp <local-file-path> <brev-instance-name>:<remote-file-path>`, por exemplo `scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`


**P3: A tela do Thor fica preta assim que a instalação começa**  
Se você usar um pendrive de instalação Jetson em um Jetson AGX Thor Developer Kit que já foi usado ou configurado anteriormente, é necessário habilitar o SoC Display Hand-Off no `UEFI setup menu`.
Na verdade, o processo de flashing continua em segundo plano durante esse período; depois de um tempo, a área de trabalho do Ubuntu aparecerá.

**P4: Não tenho saída de vídeo no monitor (conectado por meio de um KVM)**  
Sabe-se que alguns switches/dispositivos KVM não lidam bem com a saída de vídeo do Jetson AGX Thor Developer Kit. Conecte o monitor diretamente ao Jetson AGX Thor Developer Kit.

**P5: Depois de fazer o flashing do Thor, o HDMI às vezes não mostra sinal em inicializações posteriores**  
Uma solução alternativa que tem se mostrado eficaz é mudar para o conector DisplayPort (DP) para saída de vídeo.

**P6: Nenhuma entrada de teclado é detectada durante o flashing da imagem do Thor**  
Recomendamos usar um teclado com fio durante o flashing. Teclados sem fio podem ter compatibilidade limitada durante o processo de flashing do Thor.

**P7: O fine-tuning em nuvem do GR00T informa “GPU not supported”**  
Não utilize GPUs mais antigas que a `Ampere architecture` para o fine-tuning em nuvem do GR00T (por exemplo, RTX A6000 ou GeForce RTX 4090). A V100 (Volta) não é suportada para treinamento ou fine-tuning do GR00T.

**P8: O nome do dispositivo serial da placa controladora do braço robótico não aparece em /dev**  
O sistema Thor padrão não inclui drivers `CH34x`. Se eles estiverem ausentes, instale-os a partir de:
https://github.com/juliagoda/CH341SER

**P9: A porta Type-C do Thor não reconhece um hub externo**  
Para usar um hub externo via Type-C do Thor, conecte-o à porta Type-C mais próxima do conector QSFP28. (Ambas as portas Type-C fornecem energia, mas apenas a especificada oferece suporte confiável ao hub.)
<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/thor-typec.png" height="200"/> </div>

**P10: Ao fazer o flashing com uma placa de captura, o sistema depois diz que a senha do usuário está incorreta**  
Ao usar um desktop com placa de captura durante o flashing, pode ocorrer um bug de entrada de teclado (a entrada não corresponde ao que é digitado). Verifique cuidadosamente a senha do usuário ao defini-la.

**P11: Onde fica a porta de debug do Thor?**  
A porta de debug Type-C do Thor fica escondida sob a tampa magnética. Vários nós de dispositivo serial podem ser criados; use aquele com o menor índice para fazer login no Thor via serial.

**P12: Não é possível executar scripts LeRobot para inferir ACT na imagem do GR00T**  
Não recomendamos chamar APIs do LeRobot para inferência de `ACT` em um ambiente Python 3.12. Scripts de `Calibration` e `find port` não apresentam problema. Observe que o Ubuntu 24 usa Python 3.12 como padrão localmente.

**P13: Como verificar a utilização de SM da GPU no Thor?**  
Execute:
```bash
nvidia-smi dmon -s puc
```  
Verifique a coluna `sm` na saída.

**P14: Não é possível ler dados da porta serial do driver do braço robótico**  
Não conecte a câmera antes da placa driver SO-ARM; fazer isso pode causar um mapeamento incorreto de dispositivos seriais. Além disso, certifique-se de que as permissões da porta serial tenham sido concedidas.

## Referências

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

---
description: Este wiki apresenta fluxos de trabalho de exemplo para implantar projetos de IA e robótica no J501 Mini (AGX Orin). Instruções detalhadas passo a passo e documentação de referência também são fornecidas.
title: Ajustar Finamente Isaac GR00T N1.6 para o Braço LeRobot SO-101 e Implantar no AGX Orin
keywords:
  - J501 mini
  - Robótica
  - AGX Orin
  - gr00t n1.6
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin
sku: E2025123101,114993668
last_update:
  date: 2026-1-6
  author: Dayu
createdAt: '2026-01-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin/
---

# 🤖 Ajustar Finamente GR00T N1.6 para o Braço LeRobot SO-101 e Implantar no AGX Orin

## 🚀 Introdução

Este wiki explica como **ajustar finamente o NVIDIA Isaac GR00T N1.6** para o **braço LeRobot SO-101** e implantá-lo no **AGX Orin 64G**. Você pode adquirir a carrier board AGX Orin e o braço robótico SO-ARM usados neste wiki pelos links abaixo:

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '20px',
  }}
>
  {/* ===== Item 1 ===== */}
  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>Adquira agora 🖱</font>
          </span>
        </strong>
      </a>
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993668-so-arm101-low-cost-ai-arm-3d-printed-parts-for-lerobot_1.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>Adquira agora 🖱️</font>
          </span>
        </strong>
      </a>
    </div>
  </div>
</div>

<p></p>


- 🔧 Preparação de hardware para **LeRobot SO-101** e **AGX Orin 64G**  
- 💻 Configuração do ambiente de software para **GR00T N1.6** em **AGX Orin 64G** 
- 🎯 Uso da **plataforma de treinamento LeRobot**: coleta de dados, formatação de dataset e ajuste fino para o braço SO-101  
- 🚀 Fluxos de trabalho de exemplo para implantar a política GR00T N1.6 treinada (LeRobot + SO-101) em **L20** (GPU de nível de servidor)
- 🛠️ Dicas de solução de problemas e armadilhas comuns  

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/form.png"/>
</div>

<p></p>

**📚 Instruções detalhadas, passo a passo, e documentação de referência são fornecidas para ajudar você a ir da configuração inicial até a implantação completa.**

Este wiki é baseado no projeto LeRobot para coleta de dados, depois os converte para o formato de dataset suportado pelo GR00T N1.6. Além do AGX Orin, você precisará preparar um dispositivo com mais de 48 GB de VRAM para ajustar finamente o modelo pré-treinado (**recomenda-se aluguel de servidor**). Por fim, você implantará o modelo ajustado finamente no AGX Orin 64G para inferência, alcançando a tarefa de pegar frutas de um prato.

:::warning
Este wiki é baseado no JetPack 6.2 e usa o módulo AGX Orin 64GB. 
:::

## 🛠️ Configurando o Ambiente do GR00T N1.6

Configurar o ambiente GR00T N1.6 no AGX Orin e em servidores x86 segue um processo semelhante, mas o Jetson exige que algumas dependências sejam instaladas manualmente.

### 🔧 Configuração de Ambiente no AGX Orin

Clone o código-fonte do GR00T N1.6 e complete a estrutura de diretórios:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

Permaneça no diretório `Isaac-GR00T` para criar um ambiente virtual e instalar as dependências:

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

Baixe os arquivos wheel pré-compilados para o AGX Orin. Estes precisam ser instalados manualmente. Clique nos links abaixo para baixar:

**📦 Arquivos Wheel Necessários:**
- **PyTorch**: [Click for download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCPB-wlwOrsSZNkhH9I27DMAcXbUvnXhRmshioXZz-N4Jk?e=DIrq5U)
- **TorchVision**: [Click for download](https://pypi.jetson-ai-lab.io/jp6/cu126/+f/907/c4c1933789645/torchvision-0.23.0-cp310-cp310-linux_aarch64.whl#sha256=907c4c1933789645ebb20dd9181d40f8647978e6bd30086ae7b01febb937d2d1)
- **Flash-Attention**: [Click for download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDsyHCBmfaVQ4iM1dQxOrA0ASs-RgdpKdLPy87XPW5RL20?e=CbZnio)
- **TorchCodec**: [Click for download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkC3cpYjGcQ5Qwmei9PF3rAfYWOZY7JqugbcRtQ2VO7ro?e=Llh7yu)
- **Triton**: [Click for download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxXj1wMjIORbEkjCoZgRmnAWVrarrEHxHqW7-avotuJks?e=cDST1l)

Para mais arquivos wheel para Jetson, você pode baixar em:  
🔗 [https://pypi.jetson-ai-lab.io/jp6/cu126](https://pypi.jetson-ai-lab.io/jp6/cu126)

Após baixar os arquivos `.whl`, ative o ambiente virtual e instale-os via pip:

```bash
source .venv/bin/activate

pip install xxxx.whl

# For example:
# pip install torch-2.8.0a0+gitba56102-cp310-cp310-linux_aarch64.whl
```

:::warning
`flash-attn` and `torchvision` must be installed **after** `pytorch`
:::

Retorne ao diretório de trabalho do código-fonte e conclua a instalação final das dependências:

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install -e .[base]

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```

### 🖥️ Configuração de Ambiente no Servidor de Ajuste Fino

Clone o código-fonte do GR00T N1.6 e complete a estrutura de diretórios:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

Permaneça no diretório `Isaac-GR00T` para criar um ambiente virtual e instalar as dependências:

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

Com base na versão do CUDA do seu servidor (o autor usa CUDA 12.8), encontre os comandos de instalação correspondentes para as versões GPU de torch 2.8 e torchvision 0.22.0 no site oficial do PyTorch:

🔗 [Click here to find installation commands](https://pytorch.org/get-started/previous-versions/)

Garanta que o ambiente virtual esteja ativado ao instalar as dependências:

```bash
source .venv/bin/activate

# For example
# pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/cu128
```

:::warning
`flash-attn` and `torchvision` must be installed **after** `pytorch`
:::

Retorne ao diretório de trabalho do código-fonte e conclua a instalação final das dependências:

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install --no-build-isolation flash-attn==2.8.2.post1
pip install -e .[base]
pip install torchcodec==0.4.0

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```


## 📊 Coleta de Dados Usando o SO-ARM

Para um tutorial detalhado sobre coleta de dados, consulte o link a seguir:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#record-the-dataset)  
**Este link contém um tutorial completo para o SO-ARM, cobrindo configuração, montagem, calibração, coleta de dados, treinamento e inferência.**

A coleta de dados para o braço robótico lerobot pode ser realizada em um PC ou diretamente em um dispositivo Jetson.

- **Método 1**: Coletar dados usando o Jetson
- **Método 2**: Coletar dados usando um PC com Ubuntu (**recomendado**)

Os procedimentos de coleta de dados são basicamente os mesmos para ambos os métodos.


### Configuração do Ambiente LeRobot (Opcional)

O processo de configuração do ambiente de desenvolvimento para o Lerobot pode ser encontrado na subseção do seguinte link:  
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#install-lerobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#install-lerobot)



### Configurar os Motores

Os motores em cada junta do SO-ARM precisam ser configurados antes da montagem. As etapas de configuração podem ser encontradas na subseção do seguinte link:    
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configure-the-motors](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configure-the-motors)


### Montagem

O processo de instalação dos braços mestre e seguidor do SO-ARM pode ser encontrado na subseção do seguinte link:  
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#assembly](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#assembly)

### Calibração do SO-ARM


Após a montagem completa do SO-ARM, é necessária calibração. Consulte a subseção do seguinte link para o procedimento de calibração:  
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrate](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrate)



:::note
**Ao calibrar os braços robóticos, NÃO conecte nenhuma câmera USB, pois isso pode causar conflitos de porta ou atribuições incorretas de portas.**
:::

**Após executar o script de calibração, mova manualmente cada junta do braço robótico para garantir que alcance todo o seu alcance de movimento! Deixar de fazer isso pode resultar em discrepância entre as poses dos braços líder e seguidor durante a teleoperação.**




### Configuração da Câmera

Geralmente é recomendável instalar uma câmera no punho/garra do braço robótico e outra câmera na superfície da mesa, para garantir cobertura adequada da postura do braço.
<mark>A abordagem específica de instalação depende do seu cenário de aplicação; o exemplo mostrado abaixo é apenas para referência.</mark>

Para obter mais detalhes, consulte a subseção do seguinte link:  
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Adicionar-câmeras](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Adicionar-câmeras)



### Coleta de Dados

:::warning
Para o GR00T N1.6, o nome do parâmetro da câmera de pulso deve ser `wrist`, e o nome do parâmetro da câmera de visão em terceira pessoa deve ser `front`.

Por exemplo:
`--robot.cameras="{ wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 6, width: 640, height: 480, fps: 30}}"`  

Se você não usar esses nomes de parâmetro durante a coleta de dados, será necessário modificar os arquivos de parâmetros e as palavras‑chave no código‑fonte durante os processos subsequentes de treinamento e implantação.
:::


Após concluir tanto a instalação das câmeras quanto a calibração do braço robótico, o procedimento de coleta do conjunto de dados pode ser encontrado na subseção do seguinte link:  
[https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Gravar-o-conjunto-de-dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Gravar-o-conjunto-de-dados)



### Visualização dos Dados Coletados


Para visualizar os dados coletados no SO-ARM, consulte a subseção do seguinte link:  
🔗 [https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Visualizar-o-conjunto-de-dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Visualizar-o-conjunto-de-dados)



:::note
Se você optar por treinar a política na nuvem, certifique‑se de que seu conjunto de dados seja carregado antecipadamente no servidor em nuvem ou baixado do Hugging Face Hub. No entanto, devido a possíveis problemas de rede ao baixar diretamente do Hugging Face Hub, é fortemente recomendado enviar manualmente o conjunto de dados para o seu servidor em nuvem.
:::



## 🚀 Usando L20 para Treinar Políticas

O autor escolheu a GPU L20 da NVIDIA para o ajuste fino do modelo pré‑treinado. Você também pode optar por alugar outras GPUs de nível servidor, mas certifique‑se de que o processo de fine‑tuning tenha 48 GB de VRAM disponível.

### Conversão do Formato do Conjunto de Dados

Primeiro, é necessário converter o conjunto de dados de treinamento coletado na seção anterior para o formato usado pelo GR00T N1.6. O autor usa [este link](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/finetune_new_embodiment.md) como referência para o processo.


Se você já tiver um conjunto de dados no formato LeRobot v2, poderá **pular o processo de conversão de formato do conjunto de dados**.

Se você tiver um conjunto de dados no formato LeRobot v3.0, use este script para convertê‑lo para o formato LeRobot v2.

Se você tiver um conjunto de dados em outro formato, converta‑o para o formato LeRobot v2 atendendo aos seguintes requisitos.

**📁 Requisitos de Estrutura**
A pasta deve seguir uma estrutura semelhante à abaixo e conter estas pastas e arquivos principais:

```bash
.
├─meta 
│ ├─episodes.jsonl
│ ├─modality.json # -> GR00T LeRobot specific
│ ├─info.json
│ └─tasks.jsonl
├─videos
│ └─chunk-000
│   └─observation.images.ego_view
│     └─episode_000001.mp4
│     └─episode_000000.mp4
└─data
  └─chunk-000
    ├─episode_000001.parquet
    └─episode_000000.parquet
```

O script de conversão de formato do conjunto de dados está localizado em `Isaac-GR00T/scripts/lerobot_conversion`. Use o seguinte comando para converter o formato do conjunto de dados:

```bash
python convert_v3_to_v2.py --repo-id seeed/grap_fruit
```

`--repo-id` é o caminho para o conjunto de dados de origem para conversão.

Se você estiver usando o SO-ARM e o conjunto de dados coletado estiver sem `modality.json`, você poderá encontrá‑lo no diretório demo_data:
🔗 [https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json](https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json)

### Baixar Modelo Pré‑treinado

Você pode baixar os pesos do modelo pré‑treinado (
**GR00T-N1.6-3B**) no site oficial do Hugging Face. Página de download: 
🔗 [https://huggingface.co/nvidia/GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B)

Selecione o conteúdo mostrado na imagem abaixo e clique em download. Coloque os arquivos baixados na mesma pasta.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/dl-1.6.png" width="800"/>
</div>


### Executar o Fine‑tuning

Usaremos `gr00t/experiment/launch_finetune.py` como ponto de entrada. Certifique‑se de que o ambiente uv esteja habilitado antes de iniciar. Você pode fazer isso executando o comando `uv run bash <example_script_name>`.

**📋 Ver Argumentos Disponíveis**
```bash
# Display all available arguments
python gr00t/experiment/launch_finetune.py --help
```

**🔧 Executar o Fine‑tuning**

Se você estiver usando uma única GPU para fine‑tuning, será necessário modificar `/Isaac-GR00T/gr00t/data/dataset/factory.py` de acordo com a seção destacada em vermelho na imagem abaixo:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/modify-gr00t.png" width="800"/>
</div>

```python
# Change torch.distributed.barrier() to:

import torch.distributed as dist
if dist.is_available() and dist.is_initialized():
    dist.barrier()
```

Use o seguinte comando para o fine‑tuning:

```bash
export NUM_GPUS=1
CUDA_VISIBLE_DEVICES=0 python \
    gr00t/experiment/launch_finetune.py \
    --base-model-path nvidia/GR00T-N1.6-3B \
    --dataset-path ./demo_data/cube_to_bowl_5 \
    --embodiment-tag NEW_EMBODIMENT \
    --modality-config-path examples/SO100/so100_config.py \
    --num-gpus $NUM_GPUS \
    --output-dir /tmp/so100 \
    --save-total-limit 5 \
    --save-steps 2000 \
    --max-steps 2000 \
    --use-wandb \
    --global-batch-size 32 \
    --color-jitter-params brightness 0.3 contrast 0.4 saturation 0.5 hue 0.08 \
    --dataloader-num-workers 4
```

**📊 Parâmetros‑chave**

| Parâmetro | Descrição |
|-----------|-------------|
| `--base-model-path` | Caminho para o checkpoint do modelo base pré‑treinado |
| `--dataset-path` | Caminho para o seu conjunto de dados de treinamento |
| `--embodiment-tag` | Tag para identificar o corpo (embodiment) do seu robô |
| `--modality-config-path` | Caminho para a configuração de modalidade especificada pelo usuário (necessário apenas para a tag NEW_EMBODIMENT) |
| `--output-dir` | Diretório onde os checkpoints serão salvos |
| `--save-steps` | Salvar checkpoint a cada N passos |
| `--max-steps` | Número total de passos de treinamento |
| `--use-wandb` | Habilitar o registro no Weights & Biases para rastreamento de experimentos |



## 🚀 Inferência com Modelo Ajustado no AGX Orin 64G

Certifique‑se de ter configurado o ambiente GR00T N1.6 no AGX Orin de acordo com as etapas anteriores.

**🖥️ Terminal 1: Iniciar o Servidor de Inferência Local**

Abra o primeiro terminal, ative o ambiente virtual e inicie o servidor de inferência local com o seguinte comando:

```bash
source .venv/bin/activate

uv run python gr00t/eval/run_gr00t_server.py \
  --model-path /tmp/so100_finetune/checkpoint-10000 \
  --embodiment-tag NEW_EMBODIMENT 
```

Onde `--model-path` é o caminho para os pesos do modelo ajustado.

**🤖 Terminal 2: Iniciar o Cliente de Inferência Local**

Abra o segundo terminal, ative o ambiente virtual e inicie o cliente de inferência local com o seguinte comando:

```bash
source .venv/bin/activate

uv run python gr00t/eval/real_robot/SO100/eval_so100.py \
  --robot.type=so101_follower --robot.port=/dev/ttyACM0 \
  --robot.id=orange_follower \
  --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --policy_host=localhost --policy_port=5555 \
  --lang_instruction="grasp fruit into plate"
```

Onde o parâmetro `--robot.port` deve ser modificado de acordo com o nome real da sua porta serial, e `index_or_path` também deve ser modificado de acordo com os números de índice dos seus dois dispositivos de câmera.

**🎥 Resultados da Demo**

Após enviar a solicitação de inferência, você poderá ver no terminal a sequência de ações gerada pelo GR00T N1.6. Cada inferência produz oito ações:

<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/gr00t-infer.jpg" width="800"/> </div>

Os resultados de inferência do GR00T N1.6 do autor no AGX Orin 64G são mostrados no vídeo abaixo. **Na primeira metade** é exibida a saída de inferência no terminal após iniciar o programa GR00T N1.6 — você pode ver que oito ações são geradas por inferência. **Na segunda metade** é demonstrado o resultado no mundo real: o braço robótico agarrando frutas com sucesso e colocando‑as em um prato.
<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/MuzIkoKYOwU" title="GR00T N1.6 Inference Demo on AGX Orin 64G" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>




## 📚 Referências

- 🔗 https://developer.nvidia.com/embedded/jetpack
- 🔗 https://github.com/NVIDIA/Isaac-GR00T/tree/main
- 🔗 https://huggingface.co/nvidia/GR00T-N1.6-3B

## 🤝 Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

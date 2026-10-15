---
description: Fazer o deploy de uma política NVIDIA Isaac GR00T N1.7 full-weight ajustada por fine-tuning como um pipeline TensorRT de sete engines no Jetson AGX Orin com JetPack 7.2.
title: Fazer deploy do GR00T N1.7 Full-Weight com TensorRT no JetPack 7.2 e Jetson AGX Orin
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# Fazer deploy do GR00T N1.7 Full-Weight com TensorRT no JetPack 7.2 e Jetson AGX Orin

Este tutorial faz o deploy de uma política **NVIDIA Isaac GR00T N1.7** ajustada por fine-tuning no **Jetson AGX Orin** usando o **JetPack 7.2** e um pipeline completo de inferência com TensorRT. Diferente do fluxo de trabalho Orin mais antigo, que acelerava apenas o componente DiT, esta implementação constrói engines TensorRT para todos os sete componentes do modelo:

1. Vision Transformer (ViT)
2. Large Language Model (LLM)
3. Autoatenção visão‑linguagem
4. Codificador de estado
5. Codificador de ação
6. Especialista de ação DiT
7. Decodificador de ação

O fluxo de trabalho validado executa inferência offline com um dataset local LeRobot. Ele não abre uma porta serial do robô nem envia comandos para atuadores, o que o torna adequado para verificar a conversão do modelo e a geração de ações antes de integrar um robô físico.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png" alt="Deploy completo do GR00T N1.7 com TensorRT no Jetson AGX Orin" />
</div>

## Repositório do projeto

A implementação para JetPack 7.2, os scripts de conversão, as mudanças de runtime e as notas originais de deploy estão disponíveis no seguinte repositório:

- [jjjadand/Isaac-GR00T-Orin-JP72](https://github.com/jjjadand/Isaac-GR00T-Orin-JP72)

Este guia foi validado em relação ao commit do repositório:

```text
93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

Commits posteriores podem melhorar versões de pacotes ou opções de linha de comando. Ao reproduzir o resultado medido, comece a partir do commit fixado e revise as mudanças mais recentes separadamente.

## Configuração testada

| Item | Valor testado |
| --- | --- |
| Device | Jetson AGX Orin, compute capability `sm_87` |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| OS / kernel | Ubuntu 24.04 / Linux 6.8 Tegra |
| System CUDA | CUDA 13.2 |
| System TensorRT | 10.16.2.10 |
| Python | 3.12.3 |
| PyTorch | 2.8.0, Jetson AI Lab CUDA 12.9 wheel |
| TorchVision | 0.23.0 |
| Transformers | 4.57.6 |
| ONNX | 1.20.1 |
| PyAV / FFmpeg | PyAV 16.1.0 / FFmpeg 8 |
| Tamanho de batch do TensorRT | 1 |
| Horizonte de ação | 16 |

:::warning
A configuração Orin mais antiga do repositório tem como alvo o JetPack 6.2, Python 3.10, CUDA 12.6 e uma versão anterior do TensorRT. Não execute `scripts/deployment/orin/install_deps.sh` nem `scripts/activate_orin.sh` para este fluxo de trabalho com JetPack 7.2.
:::

:::note
O wheel do PyTorch usado pelo ambiente validado traz um runtime CUDA 12.9. O TensorRT continua usando a instalação CUDA 13.2 do sistema do JetPack 7.2. Mantenha a ordem de ativação e de caminhos de biblioteca mostrada neste guia.
:::

## Planejamento de armazenamento e memória

Reserve pelo menos **45–50 GB** de armazenamento livre para o repositório, checkpoint, backbone VLM local, dataset, grafos ONNX, engines TensorRT e arquivos temporários de build. O diretório de artefatos TensorRT validado ocupa aproximadamente **13 GB**.

O AGX Orin testado expôs aproximadamente 29 GB de memória unificada utilizável e não usou swap. Antes de construir as engines:

```bash
free -h
df -h "${HOME}"
sudo tegrastats
```

Feche navegadores, notebooks, aplicativos de desktop e serviços de modelo não relacionados se o builder do TensorRT for encerrado pelo matador de processos por falta de memória.

## 1. Definir caminhos portáteis

O README do projeto registra caminhos da máquina de teste original. Em vez de copiar caminhos absolutos específicos de máquina, crie uma configuração reutilizável no seu próprio diretório home:

```bash
mkdir -p "${HOME}/.config/gr00t-jp72"

cat > "${HOME}/.config/gr00t-jp72/paths.sh" <<'EOF'
export GR00T_WORKSPACE="${HOME}/gr00t-jp72"
export GR00T_REPO="${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72"
export GR00T_CHECKPOINT="${GR00T_WORKSPACE}/checkpoints/checkpoint-10000"
export GR00T_DATASET="${GR00T_WORKSPACE}/datasets/grab_tube_0_eval"
export GR00T_BACKBONE="${GR00T_WORKSPACE}/models/Qwen/Qwen3-VL-2B-Instruct"
export GR00T_TRT_OUTPUT="${GR00T_WORKSPACE}/artifacts/rebot_trt"
EOF

source "${HOME}/.config/gr00t-jp72/paths.sh"
mkdir -p \
  "$(dirname "${GR00T_REPO}")" \
  "$(dirname "${GR00T_CHECKPOINT}")" \
  "$(dirname "${GR00T_DATASET}")" \
  "$(dirname "${GR00T_BACKBONE}")" \
  "${GR00T_TRT_OUTPUT}"
```

Execute o seguinte comando em todo novo terminal antes de usar as variáveis:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
```

Você pode alterar os valores em `paths.sh` para colocar arquivos grandes em um SSD NVMe. Mantenha separados os caminhos do repositório, modelo, dataset e saída.

## 2. Clonar o repositório para JetPack 7.2

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout 93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

Se o repositório já existir, verifique sua revisão atual:

```bash
git -C "${GR00T_REPO}" rev-parse HEAD
git -C "${GR00T_REPO}" status --short
```

Não altere a revisão enquanto uma exportação ONNX ou build de engine estiver em andamento.

## 3. Preparar as entradas necessárias

### 3.1 Checkpoint GR00T N1.7 ajustado por fine-tuning

Copie seu checkpoint ajustado por fine-tuning para `${GR00T_CHECKPOINT}`. O checkpoint de inferência requer a configuração do GR00T, estatísticas e shards do modelo. Um layout típico é:

```text
checkpoint-10000/
├── config.json
├── embodiment_id.json
├── model-00001-of-00003.safetensors
├── model-00002-of-00003.safetensors
├── model-00003-of-00003.safetensors
├── model.safetensors.index.json
├── processor_config.json
└── statistics.json
```

Arquivos de estado de treinamento como `optimizer.pt`, `scheduler.pt` e `trainer_state.json` não são necessários para inferência ou exportação ONNX.

Valide o caminho configurado:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
test -f "${GR00T_CHECKPOINT}/config.json"
test -f "${GR00T_CHECKPOINT}/processor_config.json"
test -f "${GR00T_CHECKPOINT}/statistics.json"
```

### 3.2 Baixar o backbone local Qwen3-VL

A política N1.7 ainda requer a arquitetura de backbone compatível, o tokenizer e o processador de imagem. Este repositório oferece suporte a um backbone totalmente local por meio de `GR00T_BACKBONE_PATH`, portanto um login no Hugging Face não é necessário durante a exportação ou inferência.

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

uv tool run --from modelscope modelscope download \
  Qwen/Qwen3-VL-2B-Instruct \
  --local-dir "${GR00T_BACKBONE}"
```

Confirme que o arquivo principal do modelo e a configuração estão presentes:

```bash
test -f "${GR00T_BACKBONE}/config.json"
test -f "${GR00T_BACKBONE}/model.safetensors"
ls -lh "${GR00T_BACKBONE}/model.safetensors"
```

O arquivo `model.safetensors` tem aproximadamente 4,25 GB no download testado.

### 3.3 Preparar o dataset local LeRobot

O teste offline (dry-test) aceita um dataset local LeRobot v2/v2.1 por meio de `--dataset-path`. Para o exemplo validado RS-Rebot, o layout mínimo é:

```text
grab_tube_0_eval/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
├── videos/chunk-000/observation.images.side/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

O exemplo fornecido espera:

- tag de embodiment: `NEW_EMBODIMENT`;
- chaves de câmera: `front` e `side`;
- dimensões de estado e ação: 7;
- horizonte de ação: 16.

O `processor_config.json` do checkpoint e o `meta/modality.json` do dataset devem descrever modalidades compatíveis de estado, ação e vídeo.

:::tip
Passe o diretório local com `--dataset-path`. Não forneça uma pasta local para uma opção que espera um ID de repositório do Hugging Face, pois isso pode disparar uma requisição desnecessária ao Hub e retornar um erro HTTP 401.
:::

## 4. Instalar o ambiente JetPack 7.2

### 4.1 Instalar pacotes de sistema

O JetPack 7.2 já deve fornecer CUDA, TensorRT, cuDNN e os bindings Python do TensorRT.

```bash
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  ffmpeg \
  libopenblas0-pthread \
  python3.12-venv \
  python3-dev
```

Verifique os pacotes da plataforma:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda-13.2/bin/nvcc --version
dpkg-query -W python3-libnvinfer libnvinfer10 tensorrt
```

O ambiente validado reporta L4T R39.2, CUDA 13.2 e TensorRT 10.16.

### 4.2 Criar um ambiente Python dedicado

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"

uv venv --python /usr/bin/python3.12 .venv-jp72
```

Não reutilize o `.venv` do repositório, que pode conter pacotes compilados para uma plataforma Jetson diferente.

### 4.3 Instalar os wheels PyTorch testados para Orin

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/f36/0db283b1249b3/torch-2.8.0-cp312-cp312-linux_aarch64.whl" \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/255/341cb5beb4673/torchvision-0.23.0-cp312-cp312-linux_aarch64.whl"
```

Instale as bibliotecas de runtime CUDA 12.9 exigidas pelo wheel do PyTorch:

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  nvidia-cublas-cu12==12.9.2.10 \
  nvidia-cuda-cupti-cu12==12.9.79 \
  nvidia-cuda-nvrtc-cu12==12.9.86 \
  nvidia-cuda-runtime-cu12==12.9.79 \
  nvidia-cufft-cu12==11.4.1.4 \
  nvidia-curand-cu12==10.3.10.19 \
  nvidia-cusolver-cu12==11.7.5.82 \
  nvidia-cusparse-cu12==12.5.10.65 \
  nvidia-nvjitlink-cu12==12.9.86
```

### 4.4 Instalar as dependências do GR00T

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  accelerate==1.12.0 \
  albumentations==1.4.18 \
  av==16.1.0 \
  build==1.4.0 \
  click==8.1.8 \
  cryptography==46.0.7 \
  datasets==3.6.0 \
  dm-tree==0.1.8 \
  einops==0.8.1 \
  gitpython==3.1.50 \
  gymnasium==1.2.2 \
  "huggingface-hub[cli]==0.36.2" \
  jsonlines==4.0.0 \
  lmdb==1.7.5 \
  matplotlib==3.10.1 \
  msgpack==1.1.0 \
  msgpack-numpy==0.4.8 \
  numpy==1.26.4 \
  omegaconf==2.3.0 \
  onnx==1.20.1 \
  onnxscript==0.6.2 \
  opencv-python-headless==4.11.0.86 \
  pandas==2.2.3 \
  peft==0.17.1 \
  pytest==9.0.3 \
  pytest-timeout==2.4.0 \
  pyzmq==27.0.1 \
  ruff==0.15.1 \
  safetensors==0.7.0 \
  scipy==1.15.3 \
  termcolor==3.2.0 \
  transformers==4.57.6 \
  tyro==0.9.17 \
  wandb==0.23.0

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/c46/66317287eb28a/diffusers-0.36.0.dev0-py3-none-any.whl"

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps -e "${GR00T_REPO}"
```

Não instale TorchCodec para esta configuração testada. PyAV 16 é usado com o FFmpeg 8 do JetPack 7.2 para decodificar os vídeos do conjunto de dados. Flash Attention é opcional e não foi instalado no ambiente validado.

### 4.5 Expor o pacote Python TensorRT do sistema

Use Python para determinar o caminho real de `site-packages` do ambiente em vez de codificar um nome de usuário diretamente:

```bash
GR00T_SITE_PACKAGES="$("${GR00T_REPO}/.venv-jp72/bin/python" -c 'import site; print(site.getsitepackages()[0])')"

printf '%s\n' '/usr/lib/python3.12/dist-packages' \
  > "${GR00T_SITE_PACKAGES}/jetpack_system_packages.pth"
```

## 5. Ativar e validar

Execute o seguinte bloco em cada novo shell:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

deactivate 2>/dev/null || true
source .venv-jp72/bin/activate
source scripts/activate_orin_jp72.sh

# Override the original test-machine path configured by the activation script.
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
hash -r
```

Valide o interpretador, a arquitetura da GPU, o binding do TensorRT, o backbone e o backend de vídeo:

```bash
python - <<'PY'
import os
import sys

import tensorrt
import torch

print("python:", sys.executable)
print("torch:", torch.__version__)
print("torch CUDA:", torch.version.cuda)
print("GPU:", torch.cuda.get_device_name(0))
print("architectures:", torch.cuda.get_arch_list())
print("TensorRT:", tensorrt.__version__)
print("backbone:", os.environ["GR00T_BACKBONE_PATH"])
print("video backend:", os.environ["GR00T_VIDEO_BACKEND"])

assert sys.executable.endswith("/.venv-jp72/bin/python")
assert "sm_87" in torch.cuda.get_arch_list()
assert os.environ["GR00T_VIDEO_BACKEND"] == "pyav"
PY
```

Os valores-chave esperados incluem PyTorch 2.8.0, PyTorch CUDA 12.9, `sm_87`, TensorRT 10.16.2.10 e o backend `pyav`.

:::warning
Use o comando simples `python` do ambiente ativado. Evite `uv run python` após a instalação, pois isso pode sincronizar o ambiente de projeto padrão do repositório e substituir pacotes específicos do Jetson que estão funcionando.
:::

## 6. Executar o smoke test do PyTorch

Antes da exportação, verifique se o checkpoint, o backbone local, o conjunto de dados, o decodificador de vídeo e o forward pass em CUDA funcionam em conjunto:

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 1 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --inference-mode pytorch \
  --save-plot-path /tmp/rebot_pytorch_smoke.jpeg
```

Não continue para a exportação TensorRT até que este comando consiga carregar uma observação do conjunto de dados e gerar uma predição de ação.

## 7. Exportar o modelo completo para ONNX

Exporte todos os sete componentes com um tamanho de batch estático de 1:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps export
```

A exportação validada leva aproximadamente dois minutos. Confirme que o diretório ONNX contém sete grafos e os metadados da exportação:

```bash
find "${GR00T_TRT_OUTPUT}/onnx" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Mantenha `dit_bf16.onnx.data` ao lado de `dit_bf16.onnx`; ele contém dados de tensores externos usados pelo grafo DiT.

## 8. Construir os sete engines TensorRT

Construa os engines no AGX Orin de destino. Engines TensorRT são vinculados à arquitetura da GPU, à versão do TensorRT, às formas dos grafos e ao tamanho do batch.

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps build
```

A compilação validada levou aproximadamente 3 minutos e 37 segundos e gerou:

```text
action_decoder.engine
action_encoder.engine
dit_bf16.engine
llm_bf16.engine
state_encoder.engine
vit.engine
vl_self_attention.engine
```

Verifique o diretório de engines:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Reconstrua após alterar o checkpoint, o layout ou a resolução da câmera de entrada, o horizonte de ação, o tamanho do batch, a GPU, a instalação de CUDA/TensorRT ou os grafos ONNX.

## 9. Verificar TensorRT em relação ao PyTorch

Execute a etapa de verificação numérica do repositório:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps verify
```

A execução validada produziu:

| Comparação | Similaridade cosseno |
| --- | ---: |
| Saída do ViT | 0.995977 |
| Saída do backbone | 0.999958 |
| Ação final | 0.997426 |
| Status da verificação | PASS |

Trate esses valores como uma referência de reprodução. Um checkpoint ajustado diferente, uma amostra de conjunto de dados diferente ou uma revisão de dependência diferente podem produzir valores ligeiramente distintos.

## 10. Executar inferência offline Full-TensorRT

O comando a seguir carrega a trajetória 0 e prediz dois blocos de 16 ações. Ele não inicializa o executor de hardware RS-Rebot.

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 32 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --skip-timing-steps 1 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --save-plot-path /tmp/rebot_trt_result.jpeg
```

Uma execução bem-sucedida inclui mensagens semelhantes a:

```text
N1.7 full-pipeline TRT engines loaded.
  ViT: TRT | LLM: TRT | Action Head: TRT
All inference steps completed for current trajectory-id 0
pred_action_joints vs time (32, 7)
Done
```

O tempo de inferência aquecido validado foi de **0,2755 segundos por bloco de predição de 16 ações**, ou aproximadamente **3,63 blocos por segundo**. Esse resultado se aplica ao checkpoint testado, ao formato do conjunto de dados, à configuração dos engines e às condições de operação do AGX Orin.

Os valores de MSE e MAE do script comparam as predições do modelo com as ações registradas no conjunto de dados. Eles não são métricas de erro de conversão do TensorRT; use a etapa de verificação por cosseno para avaliar a concordância entre PyTorch e TensorRT.

### Demonstração de inferência Full-TensorRT

O vídeo a seguir demonstra o fluxo de trabalho GR00T N1.7 TensorRT completo em execução no JetPack 7.2 e Jetson AGX Orin.

<div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/H3rQHnB-gaI"
    title="GR00T N1.7 full TensorRT inference on JetPack 7.2 and Jetson AGX Orin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

## 11. Avisos seguros

### `libnvjpeg.so.12` do TorchVision

O caminho do conjunto de dados testado usa PyAV e FFmpeg em vez de `torchvision.io`. Esse aviso não bloqueia o fluxo de trabalho de inferência validado.

### `flash_attn is not installed`

O modelo de referência em PyTorch usa SDPA durante o carregamento e a exportação. A inferência de pipeline completo substitui os componentes ViT, LLM e de ação por engines TensorRT.

### `lm_head.weight` is newly initialized

GR00T consome os estados ocultos do backbone em vez da cabeça de geração de linguagem. O checkpoint de política ajustado fornece os pesos usados pela inferência de ações.

## 12. Solução de problemas

### `torch._C` has no `_dlpack_exchange_api`

O ambiente errado está ativo. Verifique o interpretador:

```bash
which python
python -c "import sys; print(sys.executable)"
```

O caminho deve terminar com `${GR00T_REPO}/.venv-jp72/bin/python`. Reative o ambiente e execute `source scripts/activate_orin_jp72.sh` novamente.

### Hugging Face HTTP 401

Confirme que a substituição local do backbone foi aplicada após o script de ativação do repositório:

```bash
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors"
```

### Falha de importação do TorchCodec ou FFmpeg

Confirme que PyAV está selecionado:

```bash
python -c "import os, av; print(os.environ['GR00T_VIDEO_BACKEND'], av.__version__)"
```

A saída esperada começa com `pyav 16.1.0`.

### Erro de forma do engine ou de desserialização

Não copie engines de outra GPU ou instalação TensorRT. Verifique se `export_metadata.json` acompanha a saída dos engines e reconstrua os artefatos ONNX e TensorRT no dispositivo de destino.

### Compilação TensorRT fica sem memória

1. Feche aplicativos de GPU e servidores de modelo não relacionados.
2. Mantenha `--workspace 4096` em vez de aumentá-lo imediatamente.
3. Compile as etapas sequencialmente.
4. Confirme se há armazenamento e memória suficientes com `df -h`, `free -h` e `tegrastats`.
5. Reinicie em uma sessão limpa se a memória continuar fragmentada após várias compilações com falha.

## 13. Avançando em direção ao controle de robôs

O comando validado é intencionalmente um teste offline a seco. Antes de conectar um robô físico:

1. compare as trajetórias de ação TensorRT e PyTorch em episódios gravados;
2. confirme ordem das juntas, unidades, escalas, limites e metadados de corporificação;
3. limite todos os comandos gerados a limites seguros de juntas e velocidade;
4. implemente parada de emergência, timeout de comando e detecção de observação obsoleta;
5. teste com atuadores desativados ou sem carga;
6. comece com ações de baixa velocidade e horizonte curto;
7. registre latência, memória, energia, temperatura e taxa de sucesso da tarefa.

Não reutilize o comando offline como um controlador de robô sem uma camada de segurança específica de hardware.

## Checklist de reprodução

- [ ] JetPack 7.2 / L4T R39.2 está instalado.
- [ ] CUDA 13.2 e TensorRT 10.16 estão visíveis.
- [ ] O repositório foi clonado na revisão documentada.
- [ ] `.venv-jp72` usa Python 3.12 e a wheel PyTorch `sm_87` para Orin.
- [ ] O backbone local Qwen3-VL é carregado sem uma requisição ao Hub.
- [ ] O checkpoint e as modalidades do conjunto de dados LeRobot correspondem.
- [ ] O smoke test do PyTorch é bem-sucedido.
- [ ] Sete grafos ONNX são exportados.
- [ ] Sete engines TensorRT são gerados no Orin de destino.
- [ ] Relatórios de verificação numérica APROVADOS.
- [ ] A inferência offline full-TensorRT é concluída e salva o gráfico.

## Recursos Relacionados

- [Hub de Recursos do JetPack 7.2](/pt-br/jetpack_7_2_resource_hub/)
- [Otimização de Memória do JetPack 7.2](/pt-br/jetpack_7_2_memory_optimization/)
- [Implantar TensorRT Edge-LLM no JetPack 7.2](/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [Ajustar GR00T N1.7 para reBot Arm e Implantar no Jetson Thor](/pt-br/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [Análise Detalhada do JetPack 7.2](/pt-br/jetpack72_deep_dive_bk/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

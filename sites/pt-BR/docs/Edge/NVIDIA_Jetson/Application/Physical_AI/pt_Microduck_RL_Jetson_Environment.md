---
description: Prepare o JetPack 7.2 e implemente o ambiente de aprendizado por reforço Microduck com suporte a CUDA no Jetson Orin NX.
title: Implantar o Ambiente de RL do Microduck no Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_jetson_environment
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Implantar o Ambiente de RL do Microduck no Jetson

Este capítulo prepara o sistema Jetson, instala o ambiente do projeto, explica a estrutura de diretórios e verifica se o treinamento PPO pode ser executado em CUDA.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/pt-br/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Página inicial da demonstração</a>
  <a href="/pt-br/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}>Próximo: Movimentos oficiais <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## Hardware e Software

A seguinte plataforma foi validada para esta demonstração:

| Item | Versão |
|---|---|
| Dispositivo | Seeed reComputer com Jetson Orin NX 16GB |
| SO | Ubuntu 24.04 LTS, aarch64 |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| CUDA do sistema | 13.2 |
| Python | 3.12 |
| PyTorch | 2.9.1+cu130 |
| MuJoCo | 3.10.0 |
| Warp | 1.12.0 |

Use armazenamento NVMe com pelo menos 25GB de espaço livre. Refrigeração ativa, uma fonte de alimentação estável e uma conexão de rede confiável são recomendadas.

:::warning
Não substitua de forma independente o driver CUDA fornecido pelo JetPack ou os pacotes L4T. O projeto Python é isolado em `.venv`, enquanto a pilha de GPU do sistema continua sendo gerenciada pelo JetPack.
:::

## Diretório do Projeto

```text
~/microduck-jetson/
├── deploy_microduck_jetson.sh
├── microduck_rl/
│   ├── src/mjlab_microduck/tasks/
│   ├── scripts/
│   ├── pretrained/pollen-robotics/
│   ├── models/checkpoints/
│   └── logs/rsl_rl/
├── microduck_jetson_startup.md
├── microduck_jetson_training_guide.md
└── microduck_custom_action_training.md
```

O diretório `.venv` é criado localmente no Jetson e é intencionalmente não incluído no repositório Git.

## Clonar o Repositório

```bash
mkdir -p ~/microduck-jetson
cd ~/microduck-jetson

git clone -b develop https://github.com/jjjadand/microduck_rl.git
cd microduck_rl
```

## Executar o Script de Implantação

```bash
cd ~/microduck-jetson/microduck_rl

SUDO_PASSWORD=<JETSON_PASSWORD> \
TARGET_DIR=$HOME/microduck-jetson/microduck_rl \
bash deploy_microduck_jetson.sh
```

O script instala as dependências de compilação e visualização, instala o `uv`, cria o `.venv` de Python 3.12, sincroniza as dependências travadas do projeto, instala o wheel de PyTorch com CUDA compatível e realiza a validação de CUDA.

:::note
Passar uma senha por meio de uma variável de ambiente é conveniente para esta configuração de laboratório reprodutível. Para um dispositivo compartilhado ou de produção, revise o script e execute os comandos privilegiados de forma interativa.
:::

## Entrar no Ambiente

Todos os comandos do projeto devem ser executados a partir da raiz do repositório:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
```

Use `uv run --no-sync` para os comandos neste guia. Isso evita que uma re-sincronização de dependências não intencional substitua a instalação do PyTorch com CUDA do Jetson.

## Verificar CUDA

```bash
uv run --no-sync python3 - <<'PY'
import torch

print("PyTorch:", torch.__version__)
print("CUDA runtime:", torch.version.cuda)
print("CUDA available:", torch.cuda.is_available())
print("GPU:", torch.cuda.get_device_name(0))

left = torch.randn(512, 512, device="cuda")
right = torch.randn(512, 512, device="cuda")
result = left @ right
torch.cuda.synchronize()
print("CUDA matmul:", result.device)
PY
```

Os resultados esperados incluem `CUDA available: True`, um nome de GPU Orin e `CUDA matmul: cuda:0`.

## Executar o Smoke Test de Treinamento

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Uma execução bem-sucedida cria um diretório em `logs/rsl_rl/velocity/` contendo arquivos de configuração, eventos do TensorBoard e um ou mais checkpoints `.pt`.

Quando o MuJoCo e os gerenciadores de treinamento iniciam, o terminal imprime a configuração ativa de terminação, recompensa, currículo, ator e crítico:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/start-mujoco.png" alt="MuJoCo do Microduck e gerenciadores de treinamento iniciando no terminal" />
</div>

Depois que a coleta de rollouts começa, cada iteração de aprendizado relata throughput, termos de recompensa, duração do episódio, valores de currículo e estatísticas de terminação:

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_training.png" alt="Métricas de iteração de treinamento PPO do Microduck no Jetson" />
</div>

## Executar 4096 Ambientes de Treinamento em Paralelo

Para a execução completa de treinamento usada nesta demonstração, o backend simula **4096 ambientes Microduck independentes** em paralelo:

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard
```

`jtop` mostra a carga da GPU e o estado do dispositivo enquanto o processo de treinamento com 4096 ambientes está em execução:

<div align="center">
  <img width="760" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_train_jtop.png" alt="Saída do jtop do Jetson enquanto treina 4096 ambientes Microduck" />
</div>

Se a memória for insuficiente, reduza a contagem de ambientes usando `4096 → 2048 → 1024 → 512`.

## Visualizar os Ambientes de Treinamento

O **backend ainda treina todos os 4096 ambientes**. As configurações do Viewer apenas controlam quantos robôs são renderizados para inspeção e não reduzem o lote de treinamento do backend, a menos que `--env.scene.num-envs` seja alterado.

### Renderizar um Microduck

Renderizar um robô é a forma mais clara de inspecionar postura, contatos e marcha durante o treinamento:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env_one.png" alt="Um Microduck visualizado enquanto o backend treina 4096 ambientes" />
</div>

### Renderizar Vários Microducks

Renderizar muitos robôs torna visível o conceito de ambientes paralelos. A execução completa do backend ainda contém 4096 ambientes, mesmo que apenas um subconjunto seja mostrado no Viewer:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env-num_many.png" alt="Vários Microducks visualizados enquanto o backend treina 4096 ambientes" />
</div>

O Viewer é destinado a execuções curtas de inspeção. Execuções longas de treinamento normalmente usam renderização headless via EGL para evitar a sobrecarga de desenho contínuo.

## Configuração de Desempenho Opcional

Verifique os modos de energia suportados antes de selecionar um:

```bash
sudo nvpmodel -q
sudo nvpmodel
```

Monitore o dispositivo durante o treinamento:

```bash
tegrastats
```

Não copie um número de modo de energia de outro modelo de Jetson. Selecione um modo de alto desempenho suportado para o dispositivo exato.

## Próxima Etapa

<div align="center">
  <a href="/pt-br/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(0,168,107,.25)'}}>Treinar e executar movimentos oficiais →</a>
</div>

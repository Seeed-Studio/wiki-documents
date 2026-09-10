---
description: Treine uma tarefa oficial do Microduck, visualize checkpoints PT e execute inferência ONNX multi‑política controlada por teclado no MuJoCo no Jetson.
title: Treinar e Executar Movimentos Oficiais do Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_official_policies
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Treinar e Executar Movimentos Oficiais do Microduck

Este capítulo cobre o caminho mais curto de treinamento e inferência: descobrir as tarefas disponíveis, treinar uma tarefa oficial, visualizar um checkpoint `.pt`, executar as políticas ONNX fornecidas e controlar o robô simulado com um teclado.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/pt-br/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/pt-br/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#3182ce', color:'#fff', fontWeight:'700', textDecoration:'none'}}>Próximo: Movimento Personalizado <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## Famílias de Tarefas Disponíveis

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep MicroDuck
```

| Movimento | ID da tarefa |
|---|---|
| Caminhada | `Mjlab-Velocity-Flat-MicroDuck` |
| Caminhada e recuperação de queda | `Mjlab-VelStand-Flat-MicroDuck` |
| Levantar do chão | `Mjlab-StandUp-Flat-MicroDuck` |
| Sentar e levantar | `Mjlab-SitStand-Flat-MicroDuck` |
| Coleta no chão | `Mjlab-GroundPick-Flat-MicroDuck` |
| Rolamento para frente | `Mjlab-Roulade-Flat-MicroDuck` |
| Chute de bola | `Mjlab-BallKick-Flat-MicroDuck` |
| Locomoção com roletes | `Mjlab-Velocity-Flat-MicroDuck-Rollers` |

## Treinar a Política de Caminhada

Comece com o teste rápido de cinco iterações antes de cada execução longa:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Para uma execução mais longa:

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard
```

Aumente a contagem de ambientes apenas quando a memória e a temperatura permitirem. Uma sequência prática de fallback é `4096 → 2048 → 1024 → 512`.

## Visualizar um Checkpoint PT

Encontre um checkpoint:

```bash
find logs/rsl_rl -type f -name 'model_*.pt' | sort
```

### Visualizador no Navegador via SSH

```bash
export MUJOCO_GL=egl

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer viser
```

Abra `http://<JETSON_IP>:8080` a partir de um computador na mesma rede.

### Visualizador Nativo na Área de Trabalho do Jetson

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

## Executar o Demo Oficial de ONNX Multi‑Política

O repositório contém nove políticas ONNX oficiais em `pretrained/pollen-robotics/`.

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync python3 scripts/infer_policy.py \
  --walking pretrained/pollen-robotics/alpha_walking.onnx \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --sitstand pretrained/pollen-robotics/alpha_sitstand.onnx \
  --ground-pick pretrained/pollen-robotics/alpha_ground_pick.onnx \
  --roulade pretrained/pollen-robotics/roulade.onnx \
  --kick-left pretrained/pollen-robotics/ball_kick_left.onnx \
  --kick-right pretrained/pollen-robotics/ball_kick_right.onnx \
  --new-cmd-obs
```

### Controles de Teclado

| Tecla | Comando |
|---|---|
| Setas direcionais | Velocidade para frente, para trás e lateral |
| `A` / `E` | Virar à esquerda / direita |
| `G` | Comportamento de coleta no chão |
| `Y` | Transição sentar / levantar |
| `R` | Rolamento para frente |
| `K` / `L` | Chute esquerdo / direito |
| `Space` | Limpar comando de velocidade |
| `Q` | Sair |

## Resultados de Inferência

Os GIFs a seguir mostram resultados de inferência ONNX capturados diretamente do MuJoCo no Jetson.

### Caminhada

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/walking-loop.gif" alt="Loop de inferência da política de caminhada do Microduck no MuJoCo" />
</div>

A política de caminhada rastreia continuamente os comandos de velocidade e de giro do teclado.

### Rolamento

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/rolling.gif" alt="Inferência da política de rolamento do Microduck no MuJoCo" />
</div>

Pressione `R` para alternar para a política de rolamento para frente.

### Chute de Bola

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/kick.gif" alt="Inferência da política de chute de bola acionada por teclado do Microduck no MuJoCo" />
</div>

Pressione `K` ou `L` para acionar a política de chute com o pé esquerdo ou direito na cena da bola.

## PT e ONNX Têm Propósitos Diferentes

- Checkpoints `.pt` contêm ator, crítico, otimizador, normalizador e estado de treinamento. Use‑os para retomar o treinamento e para avaliação com `play`.
- `.onnx` contém o grafo de inferência implantável. Os arquivos ONNX oficiais não contêm o estado de treinamento PPO e não podem ser convertidos de volta em um checkpoint retomável.
- Os arquivos PT em `models/checkpoints/` são resultados de treinamento de caminhada no Jetson incluídos com este demo; eles não são releases oficiais de PT da Pollen Robotics.

## Exporte Seu Próprio ONNX

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file walking_custom.onnx
```

Sempre use `scripts/export.py`. O exportador do projeto incorpora o normalizador de observação no grafo ONNX, o que é necessário para o comportamento correto em tempo de execução.

## Próxima Etapa

<div align="center">
  <a href="/pt-br/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #3182ce, #205493)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(49,130,206,.25)'}}>Criar um Movimento Personalizado →</a>
</div>

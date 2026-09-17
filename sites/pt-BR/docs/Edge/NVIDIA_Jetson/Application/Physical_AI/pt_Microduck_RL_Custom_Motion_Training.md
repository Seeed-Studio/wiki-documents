---
description: Crie um movimento personalizado do Microduck selecionando um template, definindo fases e recompensas, registrando a tarefa, treinando-a e exportando ONNX.
title: Criar um Movimento Personalizado do Microduck
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/11/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
---

# Criar um Movimento Personalizado do Microduck

Este capítulo apresenta o fluxo de trabalho do projeto para construir um novo movimento. O exemplo usa um comportamento baseado em fases de **reverência (Bow)**, mas o mesmo processo se aplica a acenar com a cabeça, agachar, alongar, habilidades de recuperação e outros movimentos do robô.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/pt-br/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/pt-br/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', AlignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> Movimentos Oficiais</a>
</div>

## Entender o Contrato da Policy

Todas as policies intercambiáveis do Microduck compartilham a mesma interface:

- **Observação do ator de 61 dimensões**: 48 valores de propriocepção mais o bloco de comando de 13 dimensões `[twist(3), head_pose(4), body_pose(6)]`.
- **Saída de ação de 14 dimensões** para as juntas de servo ativas.
- Slots de comando não utilizados continuam presentes e são preenchidos com zeros.
- As juntas passivas de roda e folga usam a convenção de nomenclatura `passive_*` e não devem ser selecionadas como juntas atuadas.
- Os IDs das juntas devem ser resolvidos pelos helpers do projeto em vez de codificados diretamente.
- A exportação ONNX deve passar por `scripts/export.py` para que o normalizador de observação seja incluído.

Quebrar esse contrato pode produzir uma policy que funciona em um viewer, mas não pode ser trocada ou implantada corretamente.

## Selecionar o Template Mais Próximo

| Movimento desejado | Template recomendado |
| --- | --- |
| Movimento contínuo de velocidade | `microduck_velocity_env_cfg.py` |
| Recuperação a partir de um estado específico | `microduck_standup_env_cfg.py` |
| Transição de comando de dois estados | `microduck_sitstand_env_cfg.py` |
| Movimento lento baseado em fases | `microduck_ground_pick_env_cfg.py` |
| Manobra dinâmica rápida | `microduck_roulade_env_cfg.py` |
| Movimento com rolos | `microduck_velocity_rollers_env_cfg.py` |

Para uma reverência, a tarefa de ground-pick é um ponto de partida útil porque já implementa comandos de fase, descida, manutenção, subida, rastreamento de pose e recuperação.

## Copiar o Template

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

Faça backup do registro de tarefas e das funções MDP compartilhadas antes de editar:

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## Projetar a Linha do Tempo do Movimento

Uma reverência simples pode usar uma fase normalizada de `0.0` a `1.0`:

| Fase | Comportamento |
| --- | --- |
| `0.00–0.25` | Descer em direção à pose de reverência |
| `0.25–0.55` | Manter a reverência |
| `0.55–0.85` | Retornar à pose inicial |
| `0.85–1.00` | Estabilizar em pé |

Use interpolação suave em vez de alternar diretamente entre duas poses. Mudanças bruscas de alvo frequentemente causam altas taxas de ação, impactos ou gradientes de recompensa instáveis.

## Definir uma Pose Alvo

Crie um mapeamento de nomes de juntas em `microduck_bow_env_cfg.py`. Comece com ângulos conservadores e inspecione-os com o Viewer antes do treinamento.

```python
BOW_POSE = {
    "left_hip_pitch": -0.20,
    "left_knee": 0.30,
    "left_ankle": -0.10,
    "neck_pitch": 0.35,
    "head_pitch": 0.20,
    "right_hip_pitch": -0.20,
    "right_knee": 0.30,
    "right_ankle": -0.10,
}
```

Os valores acima são apenas um ponto de partida. Confirme os nomes e sinais reais das juntas na configuração do robô.

## Construir a Recompensa

Uma recompensa útil para movimento personalizado geralmente combina:

- Rastreamento de pose alvo condicionado à fase.
- Uma recompensa de resultado da tarefa, como abaixar a cabeça durante a reverência.
- Recompensas de ficar em pé e de recuperação perto do final da sequência.
- Termos de contato dos pés e estabilidade lateral.
- Penalidades de limite de junta, colisão, taxa de ação e impacto.

Reutilize as recompensas do template e as funções compartilhadas em `src/mjlab_microduck/tasks/mdp.py` sempre que possível. Adicione uma nova função apenas quando a medição desejada ainda não existir.

:::warning
Verifique a convenção de sinal antes de atribuir um peso. Uma função que já retorna uma penalidade negativa normalmente usa um peso positivo apenas quando isso corresponde à convenção do projeto. Inspecione as configurações de tarefas próximas e confirme a métrica ponderada no TensorBoard.
:::

## Registrar a Nova Tarefa

Importe a nova configuração em `src/mjlab_microduck/tasks/__init__.py`, depois registre um novo ID seguindo as entradas existentes:

```python
register_mjlab_task(
    task_id="Mjlab-Bow-Flat-MicroDuck",
    env_cfg=microduck_bow_env_cfg,
    play_env_cfg=microduck_bow_play_env_cfg,
    rl_cfg=microduck_bow_rl_cfg,
)
```

Use exatamente os nomes chamáveis implementados no seu novo módulo e espelhe a assinatura atual do registro.

Confirme o registro:

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## Inspecionar Antes de Treinar

Inicie uma policy aleatória para verificar o modelo, estado de reset, sensores, gerenciador de comandos e configuração de termos:

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

Procure por contatos inválidos, penetração no spawn, erros de direção de junta, término imediato, valores NaN e poses alvo impossíveis.

## Executar um Smoke Test

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Só inicie uma execução longa de treinamento depois que isso for concluído sem exceções ou NaNs.

## Treinar em Etapas

Um currículo prático é:

1. **Descoberta do movimento**: estado de spawn fácil, recompensa de pose ampla, perturbação mínima.
2. **Conclusão do movimento**: fortalecer os termos de manutenção e recuperação; adicionar recompensas baseadas em resultado.
3. **Robustez**: aumentar a diversidade de spawn, randomização de atrito, empurrões externos e variantes de folga.

Exemplo de execução longa:

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

Observe a recompensa principal da tarefa em vez de apenas a recompensa total. Uma policy pode melhorar métricas de regularização e ainda assim nunca completar o movimento pretendido.

## Visualizar e Exportar

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

Exporte o checkpoint aceito:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

Para adicionar disparo por teclado, estenda `scripts/infer_policy.py` usando os padrões existentes de troca de policy de sentar/levantar, ground-pick, roulade e chute. Escreva no slot de comando esperado pela nova policy e mantenha o layout de observação de 61 dimensões inalterado.

## Exemplo Verificado: Abertura Frontal-Traseira

A tarefa personalizada validada usa um movimento de duplo apoio mais viável do que o
experimento anterior de equilíbrio em uma perna. O pé esquerdo se move para frente, o pé direito
se move para trás, ambos os pés permanecem no chão e o robô retorna à sua
pose normal em pé.

O ID de tarefa registrado é:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Linha do Tempo do Movimento

A tarefa usa um comando de fase cíclica de seis segundos:

| Fase normalizada | Comportamento |
| --- | --- |
| `0.00–0.30` | Sair da posição em pé para a abertura frontal-traseira |
| `0.30–0.58` | Manter a postura de abertura com ambos os pés no chão |
| `0.58–0.78` | Retornar as pernas em direção à pose em pé |
| `0.78–1.00` | Estabilizar na pose inicial com dois pés |

As constantes de tempo são definidas em
`src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py`:

```python
SPLIT_PERIOD = 6.0
SPLIT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
TARGET_SAGITTAL_SEPARATION = 0.095
```

### Definir a Pose Alvo

O alvo é expresso por nomes de juntas e foi verificado com cinemática
direta do MuJoCo. O alvo mantém os dois sites dos pés nivelados enquanto produz cerca de
`9.5 cm` de separação assinada frente-trás entre os pés:

```python
FRONT_BACK_SPLIT_POSE = {
    "left_hip_pitch": -1.1865,
    "left_knee": -0.1386,
    "left_ankle": 1.0452,
    "right_hip_pitch": 0.0603,
    "right_knee": 0.4927,
    "right_ankle": 0.4293,
    "neck_pitch": 0.3491,
    "head_pitch": 0.3491,
}
```

O editor de pose interativo é `scripts/front_back_split_pose_editor.py`.
Ele abre uma janela MuJoCo com a gravidade desativada e imprime a pose nomeada final
quando a janela é fechada:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python scripts/front_back_split_pose_editor.py
```

Se a área de trabalho do Jetson usar um display diferente, execute o comando diretamente a partir de um
terminal gráfico e use o valor impresso por `echo $DISPLAY`.

### Construir a Recompensa de Movimento de Abertura

A tarefa combina estes objetivos específicos de movimento:

| Recompensa | Objetivo |
| --- | --- |
| `split_pose` | Rastrear a pose de junta interpolada de em pé para abertura |
| `split_pose_l1` | Fornecer um gradiente direcional de erro de junta |
| `feet_grounded` | Manter ambos os pés em contato com o terreno |
| `feet_flat` | Penalizar sites de pés inclinados |
| `sagittal_separation` | Rastrear a separação assinada frente-trás entre os pés |

A tarefa também mantém termos de ficar em pé, limite de junta, autocolisão, velocidade angular,
taxa de ação, atuador, codificador, atrito, massa, inércia e centro de massa
termos de randomização herdados do ambiente Microduck. O termo personalizado
`sagittal_separation` mede ambos os pés no referencial da base do robô, então
a recompensa e a pose usam a mesma convenção de coordenadas.

### Registrar a Tarefa

`Mjlab-FrontBackSplit-Flat-MicroDuck` é o ID de tarefa usado pelo registro do MJLab.
Ele não é um nome de arquivo e não é passado como argumento para a fábrica de ambientes.

| Item | Localização | Finalidade |
| --- | --- | --- |
| Configuração de ambiente e RL | `src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` | Define a pose alvo, o tempo de fase, a cena, as recompensas e a configuração de PPO |
| Recompensa de separação de fase | `src/mjlab_microduck/tasks/mdp.py` | Acompanha a separação sagital assinada dos pés no referencial da base do robô |
| Registro da tarefa | `src/mjlab_microduck/tasks/__init__.py` | Vincula o ID da tarefa ao ambiente e à configuração de RL |
| Editor de pose | `scripts/front_back_split_pose_editor.py` | Abre e imprime a pose alvo MuJoCo validada |
| Ponto de entrada da CLI | `uv run --no-sync train <task-id>` | Procura a tarefa registrada e inicia o treinamento |

Confirme o registro:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep FrontBackSplit
```

Saída esperada:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Executar Smoke Tests

Comece com 64 ambientes e cinco iterações:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Para o Jetson de referência com 16 GB, a execução completa validada usou 2048 ambientes:

```bash
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000
```

A execução concluída atingiu episódios completos de 600 passos, zero terminações por queda
no final do treinamento e recompensas de pose dividida, contato do pé e separação próximas do máximo.
Em um Jetson Orin NX ou Orin Nano de 8 GB, comece com `1024` ambientes e
aumente apenas depois de verificar a memória com `jtop`.

### Visualizar um Checkpoint PT

Use o checkpoint concluído com o Visualizador Nativo do MuJoCo:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync play Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --num-envs 1 \
  --viewer native
```

### Exportar e Executar a Política ONNX

Exporte o checkpoint com o wrapper do projeto para que o normalizador de observação seja
embutido no grafo ONNX:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --onnx-file "$PWD/models/exports/front_back_split/front_back_split_model_999.onnx" \
  --num-envs 1
```

Execute-a no demo de inferência MuJoCo controlado por teclado:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python3 scripts/infer_policy.py \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --front-back-split models/exports/front_back_split/front_back_split_model_999.onnx \
  --new-cmd-obs
```

Pressione `O` para executar um ciclo de seis segundos de abertura frontal-traseira.
A política recebe o mesmo comando de fase cosseno/seno usado durante o treinamento, então o controle
retorna automaticamente para a política de ficar em pé. Se uma política de caminhada também for fornecida, o demo
retorna à caminhada quando um comando de velocidade diferente de zero estiver ativo.

A antiga opção `--one-leg-balance` e os arquivos de tarefa de uma perna não fazem mais parte do
repositório atual. Use `--front-back-split` para este movimento verificado.

## Checklist de Desenvolvimento

- [ ] O layout de observação permanece 61D.
- [ ] A saída da política permanece 14D.
- [ ] As juntas passivas são excluídas das ações e das observações dos servos.
- [ ] O evento de inicialização BAM e a randomização de domínio permanecem ativos onde necessário.
- [ ] A tarefa aparece em `list-envs`.
- [ ] A inspeção pelo Viewer com política aleatória é bem-sucedida.
- [ ] O smoke test com 64 ambientes é bem-sucedido.
- [ ] As principais métricas da tarefa melhoram no TensorBoard.
- [ ] O checkpoint PT final se comporta corretamente no MuJoCo.
- [ ] O ONNX é exportado com o script do projeto e ensaiado antes da implantação no robô.

<div align="center">
  <a href="/pt-br/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>Voltar para a Home da Demo</a>
</div>

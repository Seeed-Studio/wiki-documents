---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise cinemática e visualização no braço robótico reBot Arm B601-DM.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - Braço Robótico
  - Robô
  - LeRobot
  - Cinemática
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-17T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

:::tip
Este código de exemplo pode ser usado para controlar os motores ou poses do braço robótico, incluindo controle de motor único, controle e teste de cinemática direta/inversa, configuração da posição zero do braço e leitura do ângulo do motor, sistema de visualização MeshCat e muito mais.
:::

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica em robótica. Ela fornece cinemática direta/inversa eficiente, cálculos dinâmicos e recursos de planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir o estado do robô e trajetórias de movimento em tempo real.

Este projeto combina o poderoso recurso de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise cinemática e depuração para o reBot Arm B601-DM.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>


---

## Recursos do Projeto

1. **Análise Cinemática Completa**  
   Suporta cálculos de Cinemática Direta (FK) e Cinemática Inversa (IK), sendo capaz de resolver em tempo real a pose do efetuador final do braço robótico.

2. **Visualização 3D em Tempo Real**  
   Exibe o estado do braço robótico e as trajetórias de movimento em tempo real por meio do MeshCat no navegador, sem necessidade de software adicional.

3. **Planejamento e Rastreamento de Trajetória**  
   Implementa planejamento de trajetória geodésica em SE(3), suportando controle de rastreamento CLIK (Cinemática Inversa em Malha Fechada).

4. **Controle com Compensação de Gravidade**  
   Calcula o torque de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando o efeito de “flutuação” do braço robótico.

5. **Código Aberto e Extensível**  
   Todo o código é open source, permitindo que os usuários personalizem algoritmos de controle e efeitos de visualização conforme suas necessidades.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Especificação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo do Braço Robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Graus de Liberdade</td>
      <td>6-DOF + Garra</td>
    </tr>
    <tr>
      <td>Modelo do Motor</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>Método de Comunicação</td>
      <td>Barramento CAN via Adaptador USB-CAN</td>
    </tr>
    <tr>
      <td>Tensão de Operação</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Método de Controle</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>Faixa de Temperatura de Operação Recomendada</td>
      <td>0°C ～ 40°C</td>
    </tr>
  </tbody>
</table>

## Lista de Materiais (BOM)

| Componente | Quantidade | Incluído |
|--|--|--|
| Braço Robótico reBot Arm B601-DM | 1 | ✅ |
| Ponte Serial USB2CAN | 1 | ✅ |
| Adaptador de Energia (24V) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |

:::caution
A Seeed Studio **é responsável apenas pela qualidade do hardware**. O tutorial é atualizado em estrita conformidade com a documentação oficial. Se você encontrar problemas de software ou de ambiente que não consiga resolver, consulte primeiro o FAQ no final do documento ou entre em contato com o atendimento ao cliente para entrar no grupo de comunicação SeeedStudio Lerobot para tirar dúvidas.
:::

---

## Requisitos de Ambiente

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema Operacional** | Ubuntu 22.04+ |
| **Interface de Comunicação** | Ponte Serial USB2CAN ou Interface CAN |

---

## Etapas de Instalação

### Etapa 1. Instalar uv (se não estiver instalado)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Etapa 2. Sincronizar Ambiente (Instalar Todas as Dependências)

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se não existir) e instalará todas as dependências de acordo com `pyproject.toml` e `uv.lock`.
:::

---

## Introdução às Ferramentas de Depuração

:::tip Configurações de Permissão
Antes de executar exemplos de controle de hardware, você precisa configurar as permissões do dispositivo:

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

### Console de Controle de Motor Único (`0x01damiao_test.py`)

Teste direto de motor único usando o SDK motorbridge.

**Como Executar**:
```bash
uv run python example/0x01damiao_test.py
```

**Comandos Interativos**:
| Comando | Descrição |
|------|------|
| `enable` / `disable` | Habilitar/Desabilitar motor |
| `set_zero` | Definir posição zero |
| `state` | Ver status |
| `mode mit` | Modo MIT |
| `mode posvel` | Modo Posição-Velocidade, pode acrescentar parâmetros PID |
| `mode vel` | Modo de velocidade pura |
---

### Calibração de Zero e Monitoramento de Ângulo (`2_zero_and_read.py`)

Define automaticamente o zero de todas as juntas e exibe os ângulos das juntas em tempo real.

**Como Executar**:
```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

### Modo de Controle MIT (`3_mit_control.py`)

Insira ângulos alvo para todas as juntas para concluir o controle do motor no modo de controle MIT, normalmente usado para controle de força, controle de impedância ou cenários que exigem alta resposta dinâmica.

**Como Executar**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Observe que, no modo de controle MIT, o braço robótico se move muito rápido. Certifique-se de que pessoas e outros dispositivos estejam fora do raio de trabalho do braço.
:::

### Modo de Controle Posição-Velocidade (`4_pos_vel_control.py`)

Insira ângulos alvo para todas as juntas para concluir o controle do motor no modo de controle híbrido POS_VEL (Posição-Velocidade), obtendo um movimento mais suave e controlável ao atingir os ângulos alvo, reduzindo a vibração.

**Como Executar**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---

## Testes de Cinemática

### Teste de Cinemática Direta (`5_fk_test.py`)

Calcular a pose do efetuador final com base nos ângulos das juntas.

**Entrada**: 6 ângulos de junta (graus)

**Saída**:
- Posição do efetuador final (X, Y, Z) — Unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (rolagem/tangagem/guiñada) — Unidade: graus

**Exemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
====================================================
  Result / Result
====================================================
  Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  Euler XYZ (roll, pitch, yaw) [deg]:
    roll   = -0.0057
    pitch  = -0.0004
    yaw    = +0.0000
```

---

### Teste de Cinemática Inversa (`6_ik_test.py`)

Resolver os ângulos das juntas com base na pose desejada do efetuador final.

**Formato de Entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)

**Exemplo**:
```bash
uv run python example/6_ik_test.py

# Usage A
> 0.28 0 0.3  # Position only
====================================================
  Result / Result
====================================================
  Target position : [+0.2800, +0.0000, +0.3000] m
  Converged : Yes
  Iterations: 2000
  Position error: 5.62e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# Usage B
> 0.28 0 0.3 0 1 0       # Position + Orientation
====================================================
  Result / Result
====================================================
  Target position   : [+0.2800, +0.0000, +0.3000] m
  Target orientation : [+0.00, +1.00, +0.00] deg
  Converged  : Yes
  Iterations: 2000
  Position error: 6.28e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```
### Controle de Cinemática Inversa em Modo MIT (`7_arm_ik_control.py`)

Use cinemática inversa (IK) em modo MIT para especificar as coordenadas 3D (X, Y, Z) e a orientação (ângulos de Euler) para onde o efetuador final do braço robótico deve se mover.

**Formato de Entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Digite `state`: Ver os valores atuais em radianos de cada junta.
- Digite `end_state`: Ver as coordenadas reais atuais (m) e ângulos de Euler (rad) do efetuador final no espaço.

**Como Executar**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```
:::danger
Observe que, neste código de exemplo, o braço robótico se move muito rápido. Certifique-se de que pessoas e outros dispositivos estejam fora do raio de trabalho do braço.
:::

### Controle de Cinemática Inversa com Trajetória Suave (`8_arm_traj_control.py`)

Use cinemática inversa (IK) no modo MIT para planejar automaticamente uma trajetória de movimento com aceleração/desaceleração uniforme ou suave dentro do tempo alvo, evitando vibração severa das juntas.

**Formato de entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + orientação + tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Entrada `state`: Visualizar os valores atuais em radianos de cada junta.
- Entrada `end_state`: Visualizar as coordenadas atuais reais do efetuador final (m) e ângulos de Euler (rad) no espaço.

**Como executar**:
```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Exit system
```
---

## Teste de compensação de gravidade

### Controle de compensação de gravidade (`9_gravity_compensation.py`)

Compensar a gravidade das juntas usando o modelo dinâmico Pinocchio.

**Lei de controle**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2, kd = 1     — Uniform stiffness/damping for all joints
```

**Comportamento esperado**:
- O braço pode "flutuar" em qualquer pose
- Não cairá devido ao próprio peso quando solto
- Pode ser movido manualmente para qualquer posição

**Como executar**:
```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:
- Exibição em tempo real do torque desejado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

### Controle de compensação de gravidade com alto amortecimento (`10_gravity_compensation_lock.py`)

Controle de compensação de gravidade que resiste a forças externas leves.

**Lei de controle**:

Observação: Quando uma pessoa empurra o braço com força suficiente para que a velocidade linear do efetuador final > 0,04 m/s ou a velocidade angular > 0,08 rad/s, ele destrava e atualiza o ângulo alvo em tempo real.

```
tau = g(q) + integral term  — Gravity feedforward with integral accumulation to eliminate static friction and residual gravity dead zone
pos = target lock angle   — When end-effector velocity is below threshold, target angle locks at current position
kp = 8.0, kd = 1.0  — Increased stiffness to 8.0 in locked state, providing stronger resistance to disturbance and positioning constraint
```

**Comportamento esperado**:
  - Travar ao soltar: Quando o braço é movido manualmente para uma posição e solto, ele trava imediatamente com firmeza no lugar, resolvendo perfeitamente o problema de queda lenta e pequeno desvio.
  - Sem deslocamento sob empurrão leve: Pequenas vibrações, rajadas de vento ou toques acidentais não conseguem mover o braço.
  - Movível com força: Somente quando empurrado com força suficiente para ultrapassar o limite de velocidade ele destrava e se move de forma complacente.

**Como executar**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:
- Exibição em tempo real do status atual (mostra `LOCKED` para estado travado, `UPDATE` para estado destravado de arraste).
- Impressão sincronizada da velocidade linear em tempo real do efetuador final (m/s), velocidade angular (rad/s) e torque de gravidade de cada junta (N·m).
- Pressione `Ctrl+C` para parar e desconectar

## Ambiente de simulação

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### Simulação de cinemática direta (`sim/fk_sim.py`)

Simulação interativa de cinemática direta, visualize a pose do braço robótico inserindo ângulos de junta no MeshCat.

**Uso**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos interativos**:
- Inserir 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:
- Exibição em tempo real da posição e orientação do efetuador final
- Suporta entrada contínua para testar diferentes poses
- Saída formatada das informações de pose

---

#### Simulação de cinemática inversa (`sim/ik_sim.py`)

Simulação interativa de cinemática inversa, resolve automaticamente os ângulos das juntas a partir da pose alvo e visualiza.

**Uso**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:
- Apenas posição: `x y z` (metros)
- Posição+orientação: `x y z roll pitch yaw` (radianos)

**Exemplo**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**Recursos**:
- Julgamento automático da convergência da IK
- Exibir contagem de iterações e erro
- Atualizações em tempo real da pose do robô

---

#### Simulação de planejamento de trajetória (`sim/traj_sim.py`)

Simulação de planejamento de trajetória baseada em geodésicas em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Uso**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos interativos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter para usar a configuração padrão
- `q`: Sair

**Recursos**:
- Planejar da posição atual até a posição alvo
- Usar perfil de trajetória de mínimo tranco (minimum jerk)
- Exibição em tempo real das estatísticas da trajetória
- Reprodução da animação completa da trajetória no MeshCat
- Exibir caminho de referência (cinza) e caminho real (verde)

---

#### Ferramenta de visualização (`sim/visualizer.py`)

Wrapper do visualizador MeshCat, fornecendo interface unificada de exibição do robô.

**Principais recursos**:
- Carregar modelo URDF e exibir o robô
- Desenhar caminhos de polilinha 3D (referência/real)
- Exibir pose alvo da IK (eixos tricolores + esfera)
- Suportar reprodução de animação de trajetória de juntas

**Exemplo de uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## FAQ

- **Encontrando erro `Permission denied`**  
  Certifique-se de ter executado `sudo chmod 666 /dev/ttyACM0` ou `sudo chmod 666 /dev/can0` para definir as permissões do dispositivo.

- **A solução de IK falha ou os resultados são anormais**  
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que a configuração dos limites das juntas está correta.

- **O efeito da compensação de gravidade não é bom**  
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade deste projeto depende de urdf e pinocchio. Você pode tentar corrigir o urdf para os seus parâmetros medidos reais (você pode pedir ajuda a uma IA para esta etapa).

---

## Licença

Este projeto é open source sob a **Licença MIT**.

---

## Contato

- **Suporte técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositório**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referência

- [Documentação oficial do Pinocchio](https://stack-of-tasks.github.io/pinocchio/)
- [Documentação oficial do MeshCat](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>Se este projeto ajudar você, por favor nos dê uma estrela!</strong>
</div>

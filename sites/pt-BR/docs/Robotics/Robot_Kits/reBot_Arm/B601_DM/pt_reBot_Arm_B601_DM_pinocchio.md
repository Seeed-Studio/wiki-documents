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
  date: 2026-04-17
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica em robótica. Ela fornece cinemática direta/inversa eficiente, cálculos dinâmicos e recursos de planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir o estado do robô e trajetórias de movimento em tempo real.

Este projeto combina o poderoso poder de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise cinemática e depuração para o reBot Arm B601-DM.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>


---

## Recursos do Projeto

1. **Análise Cinemática Completa**  
   Suporta cálculos de Cinemática Direta (FK) e Cinemática Inversa (IK), capaz de resolver em tempo real a pose do efetuador final do braço robótico.

2. **Visualização 3D em Tempo Real**  
   Exibe o estado do braço robótico e as trajetórias de movimento em tempo real por meio do MeshCat no navegador, sem necessidade de software adicional.

3. **Planejamento e Rastreamento de Trajetória**  
   Implementa planejamento de trajetória geodésica em SE(3), com suporte a controle de rastreamento CLIK (Cinemática Inversa em Malha Fechada).

4. **Controle de Compensação de Gravidade**  
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

### Etapa 1. Instalar uv (se ainda não estiver instalado)

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

## Ferramentas de Depuração

#### Console de Motor Único (`1_damiao_text.py`)

Teste de motor único direto com o SDK motorbridge.

**Uso**:
```bash
uv run python example/1_damiao_text.py
```

**Comandos Interativos**:
| Comando | Descrição |
|---------|-------------|
| `enable` / `disable` | Ativar/Desativar |
| `set_zero` | Definir posição zero |
| `state` | Ver estado |

---

#### Calibração de Zero e Monitor de Ângulo (`2_zero_and_read.py`)

Define automaticamente o zero de todas as juntas e exibe os ângulos das juntas em tempo real.

**Uso**:
```bash
uv run python example/2_zero_and_read.py
```

---

## Testes de Cinemática

#### Teste de Cinemática Direta (`5_fk_test.py`)

Calcular a pose do efetuador final a partir dos ângulos das juntas.

**Entrada**: 6 ângulos de junta (graus)

**Saída**:
- Posição do efetuador final (X, Y, Z) — Unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (Roll/Pitch/Yaw) — Unidade: graus

**Exemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### Teste de Cinemática Inversa (`6_ik_test.py`)

Resolver os ângulos das juntas a partir da pose desejada do efetuador final.

**Formato de Entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)

**Exemplo**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

## Ambiente de Simulação

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### Simulação de Cinemática Direta (`sim/fk_sim.py`)

Simulação interativa de cinemática direta, visualizando a pose do braço robótico ao inserir ângulos de junta no MeshCat.

**Uso**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos Interativos**:
- Inserir 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:
- Exibição em tempo real da posição e orientação do efetuador final
- Suporta entrada contínua para testar diferentes poses
- Saída formatada das informações de pose

---

#### Simulação de Cinemática Inversa (`sim/ik_sim.py`)

Simulação interativa de cinemática inversa, resolvendo automaticamente os ângulos das juntas a partir da pose alvo e visualizando.

**Uso**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de Entrada**:
- Apenas posição: `x y z` (metros)
- Posição+Orientação: `x y z roll pitch yaw` (radianos)

**Exemplo**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**Recursos**:
- Julgamento automático da convergência da IK
- Exibição da contagem de iterações e do erro
- Atualizações em tempo real da pose do robô

---

#### Simulação de Planejamento de Trajetória (`sim/traj_sim.py`)

Simulação de planejamento de trajetória baseada em geodésicas em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Uso**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos Interativos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter para usar a configuração padrão
- `q`: Sair

**Recursos**:
- Planejar da posição atual até a posição alvo
- Usar perfil de trajetória de mínimo tranco (minimum jerk)
- Exibição em tempo real das estatísticas da trajetória
- Reprodução completa da animação da trajetória no MeshCat
- Exibição do caminho de referência (cinza) e do caminho real (verde)

---

#### Ferramenta de Visualização (`sim/visualizer.py`)

[LINE_298>Wrapper de visualização MeshCat, fornecendo uma interface unificada de exibição do robô.

**Principais Recursos**:
- Carregar modelo URDF e exibir o robô
- Desenhar caminhos polilinha 3D (referência/real)
- Exibir pose alvo da IK (eixos tricolores + esfera)
- Suportar reprodução de animação de trajetória de juntas

**Exemplo de Uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## Controle em Máquina Real

:::tip Configuração de Permissão
Antes de executar os exemplos de controle em máquina real, você precisa configurar as permissões do dispositivo:

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

#### Controle IK em Tempo Real (`7_arm_ik_control.py`)

Controle em tempo real do efetuador final com base no solucionador de IK.

**Comandos Interativos**:
| Comando | Descrição |
|---------|-------------|
| `x y z [roll pitch yaw]` | Pose alvo do efetuador final |
| `state` | Ver estado |
| `pos` | Posição atual do efetuador final |
| `q/quit/exit` | Sair |

**Uso**:
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### Controle de Planejamento de Trajetória (`8_arm_traj_control.py`)

Planejamento de trajetória geodésica em SE(3) + rastreamento CLIK.

**Formato de Entrada**:
```
x y z [roll pitch yaw] [duration]
```

**Parâmetros**:
- `x, y, z`: Posição alvo (metros)
- `roll, pitch, yaw`: Orientação alvo (radianos)
- `duration`: Duração do movimento (segundos), padrão 2,0 s

**Uso**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### Controle de Compensação de Gravidade (`9_gravity_compensation.py`)

Compensa a gravidade das juntas usando o modelo dinâmico do Pinocchio.

**Lei de Controle**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento Esperado**:
- O braço robótico pode “flutuar” em qualquer postura
- Não cairá devido ao próprio peso quando solto
- Pode ser movido manualmente para qualquer posição

**Uso**:
```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:
- Exibição em tempo real do torque esperado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

---

## FAQ

- **Erro `Permission denied`**  
  Certifique-se de ter executado `sudo chmod 666 /dev/ttyACM0` ou `sudo chmod 666 /dev/can0` para definir as permissões do dispositivo.

- **Falha na solução de IK ou resultados anormais**  
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que a configuração dos limites das juntas está correta.

- **O efeito da compensação de gravidade não é bom**  
  Isso pode ser causado por erros estruturais e precisão de processamento. A compensação de gravidade deste projeto depende de urdf e pinocchio. Você pode tentar corrigir o urdf para os seus parâmetros medidos reais (você pode pedir ajuda à IA para esta etapa).

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
- [motorbridge SDK](https://github.com/Damiao/motorbridge)

---

<div align="center">
  <strong>Se este projeto ajudar você, por favor nos dê uma Star!</strong>
</div>
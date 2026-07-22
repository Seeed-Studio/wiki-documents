---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise e visualização de cinemática no braço robótico reBot Arm B601-RS.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Braço Robótico
  - Robô
  - LeRobot
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-06-30
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-06-11'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço Robótico 6-DOF · Suporte a Múltiplos Motores · Solucionador de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica de robôs. Ela fornece cinemática direta/inversa eficiente, cálculo de dinâmica e planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir estados do robô e trajetórias de movimento em tempo real.

Este projeto combina o poderoso recurso de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise e depuração de cinemática para o reBot Arm B601-RS.


---

## Recursos do Projeto

1. **Análise de Cinemática Completa**
   Suporta cálculos de cinemática direta (FK) e inversa (IK), permitindo a solução em tempo real da pose do efetuador final do braço robótico.

2. **Visualização 3D em Tempo Real**
   Exibe o estado do braço robótico e as trajetórias de movimento no navegador por meio do MeshCat em tempo real, sem software adicional.

3. **Planejamento e Rastreamento de Trajetória**
   Implementa planejamento de trajetória geodésica em SE(3), suportando controle de rastreamento CLIK (Cinemática Inversa em Malha Fechada).

4. **Controle com Compensação de Gravidade**
   Calcula os torques de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando um efeito de “flutuação” para o braço robótico. Suporta versões básica e com trava de velocidade do efetuador final.

5. **Controle de Motor em Múltiplos Modos**
   Suporta modos de controle MIT, POS_VEL e VEL, compatível com os protocolos de motor Damiao e Robostride.

6. **Open Source e Extensível**
   Todo o código é open source, permitindo que os usuários personalizem algoritmos de controle e efeitos de visualização conforme suas necessidades.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/)

| Parâmetro | Especificação |
|-----------|--------------|
| Modelo do Braço Robótico | reBot Arm B601-RS Kit Montado com Garra |
| Graus de Liberdade | 6+1 (com garra) |
| Alcance | 754,7 mm (com garra) / 587,5 mm (sem garra) |
| Capacidade de Carga | Carga nominal 2,5 kg / Carga máxima 5 kg |
| Faixa de Movimento das Juntas | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Garra: 345° ~ 0° |
| Repetibilidade | 0,1 mm |
| Peso Próprio | 6,7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 |
| Comunicação | Barramento CAN @ 1 Mbps |
| Tensão de Operação | DC 48V |
| Fonte de Alimentação | DC 48V 15A |
| Temperatura de Operação | -20°C ~ 50°C |
| Método de Controle | PC |

### Plataformas de Software Suportadas

| Plataforma | Status de Suporte |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### Parâmetros dos Motores das Juntas

| Parâmetro | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| Tensão Nominal | 48V | 48V |
| Corrente Nominal | 4,7 Apk ± 10% | 14,3 Apk ± 10% |
| Corrente de Pico | 15,5 Apk ± 10% | 57 Apk ± 10% |
| Torque Nominal | 5 N.m | 11 N.m |
| Torque de Pico | 14 N.m | 36 N.m |
| Velocidade Nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidade Máxima em Vazio | 315 rpm ± 10% | 480 rpm ± 10% |
| Relação de Redução | 10 : 1 | 9 : 1 |
| Pares de Polos | 28 | — |
| Indutância do Motor | 750 ± 20 μH | 0,165 mH ± 10% |
| Resistência de Linha | 1,5 ± 10% Ω | 0,23 ± 10% Ω |
| Diâmetro Externo | 57 mm | 82 mm |
| Altura | 51 ± 1 mm | 49 ± 0,5 mm |
| Peso do Motor | 310 g ± 3 g | 621 g |
| Resolução do Encoder | 14 bit (absoluto de volta única) | |
| Contagem de Encoders | 2 | |
| Tipo de Encoder | Encoder magnético (volta única) | |
| Interface de Controle | CAN @ 1 Mbps | |
| Interface de Depuração | UART @ 921600 bps | |
| Modos de Controle | MIT Mode / Speed Mode / Position Mode / Torque Mode | |
| Proteção | Proteção contra superaquecimento: temperatura do termistor do motor excede 145°C<br />Proteção contra subtensão: tensão do motor abaixo da tensão de proteção de 12V | |

## Lista de Materiais (BOM)

| Componente | Quantidade | Incluído |
|-----------|----------|----------|
| Braço Robótico reBot Arm B601-RS | 1 | ✅ |
| CANABLE | 1 | ✅ |
| Adaptador de Energia (DC 48V 15A) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |


## Requisitos de Ambiente

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema Operacional** | Ubuntu 22.04+ |
| **Interface de Comunicação** | Interface CAN (can0) |
| **Fonte de Alimentação** | DC 48V 15A |

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
`uv sync` criará automaticamente um ambiente virtual (se não existir) e instalará todas as dependências com base em `pyproject.toml` e `uv.lock`.
:::

### Etapa 3. Modificar Arquivo de Configuração para Versão RS

Este Wiki é para **reBot Arm B601-RS**. Antes de executar qualquer exemplo, altere a configuração de hardware em `config/rebotarm.yaml` da versão DM para a versão RS:

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
Se essa configuração não for modificada, o programa se comunicará usando o protocolo de motor Damiao, fazendo com que os motores RS não sejam reconhecidos ou não funcionem corretamente.
:::


### Ferramentas de Depuração

:::tip Configuração do Canal CAN
Antes de executar exemplos de controle em máquina real e depurar motores, você precisa configurar o canal CAN (para PCAN-USB, é necessário configurar novamente após reconectar):

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up    # Bring up can0
```

:::

### Console de Motor Único — Robostride RS06 (`0x01rs06_test.py`)

Use diretamente o SDK motorbridge para teste de motor único Robostride RS06. Os motores RS06 se comunicam via **barramento CAN**.

**Comando de Execução**:
```bash
uv run python example/0x01rs06_test.py
```

**Comandos Interativos**:
| Comando | Descrição |
|---------|-------------|
| `enable` / `disable` | Habilitar/Desabilitar |
| `set_zero` | Definir posição zero de software |
| `state` | Ver estado atual |
| `ping` | Enviar ping ao motor para obter resposta |
| `clear_error` | Limpar erros do motor |
| `mode <mit/posvel/vel>` | Alternar modo de controle |
| `mit <pos> [vel] [kp] [kd]` | Comando em modo MIT |
| `posvel <pos> [vlim]` | Comando em modo POS_VEL |
| `vel <velocity>` | Comando em modo de velocidade pura |
| `read_param <id> [type]` | Ler parâmetros do motor |
| `write_param <id> <value> [type]` | Gravar parâmetros do motor |
| `loop` | Entrar em modo de controle em loop |
| `q` / `quit` | Sair |

**Observação**: Os motores Robostride usam a interface CAN (`can0` padrão), com ID de host/feedback padrão `0xFD`. Durante o teste do motor, é necessário primeiro desabilitar e depois reabilitar o motor para permitir leitura e controle normais.

---

### Calibração de Zero e Monitoramento de Ângulo (`2_zero_and_read.py`)

Define automaticamente todas as posições zero das juntas e exibe os ângulos das juntas em tempo real.

**Comando de Execução**:
```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---

## Testes de Controle Básico

### Controle Completo de Juntas em Modo MIT (`3_mit_control.py`)

Todas as juntas usam uniformemente o modo MIT, enviando comandos de controle de forma síncrona a cada ciclo.

**Entrada**: Todos os ângulos das juntas (graus), separados por espaço. Se a garra estiver configurada, é necessário um ângulo adicional para a garra.

**Comando de Execução**:
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

---

### Controle Completo de Juntas em Modo POS_VEL (`4_pos_vel_control.py`)

Insira todos os ângulos-alvo das juntas para concluir o controle do motor no modo híbrido POS_VEL (Posição-Velocidade), obtendo um movimento mais suave e controlável ao atingir os ângulos-alvo, reduzindo vibrações.

**Comando de Execução**:
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

**Entrada**: 6 ângulos de juntas (graus)

**Saída**:
- Posição do efetuador final (X, Y, Z) — unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (rolagem/cabeceio/guinada) — unidade: graus

**Exemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
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
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

### Controle de Cinemática Inversa em Modo MIT (`7_arm_ik_control.py`)

Use cinemática inversa (IK) no modo MIT para especificar as coordenadas 3D (X, Y, Z) e a orientação (ângulos de Euler) para onde o efetuador final do braço robótico deve se mover.

**Formato de entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Digite `state`: Visualizar os valores atuais em radianos de cada junta.
- Digite `end_state`: Visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

**Comando de execução**:
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

### Controle por Cinemática Inversa com Trajetória Suave (`8_arm_traj_control.py`)

Use cinemática inversa (IK) no modo MIT para planejar automaticamente uma trajetória de movimento com aceleração/desaceleração uniforme ou suave dentro do tempo alvo, evitando vibração severa das juntas.

**Formato de entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + orientação + tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Digite `state`: Visualizar os valores atuais em radianos de cada junta.
- Digite `end_state`: Visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

**Comando de execução**:
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

### Controle de Compensação de Gravidade — Versão Básica (`9_gravity_compensation.py`)

Use o modelo dinâmico Pinocchio para compensar a gravidade das juntas.

**Lei de controle**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento esperado**:
- O braço robótico pode “flutuar” em qualquer pose
- Não cairá devido ao próprio peso após ser solto
- Pode ser movido manualmente para qualquer posição

**Comando de execução**:
```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:
- Exibir em tempo real o torque desejado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Voltar para Home antes de sair da compensação de gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente ao zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair, para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação, para evitar fazer alterações excessivamente grandes de uma só vez.
:::

---

### Controle de Compensação de Gravidade — Versão com Travamento de Velocidade do Efetuador Final (`10_gravity_compensation_lock.py`)

Com base na compensação de gravidade básica, adiciona detecção de velocidade do efetuador final e mecanismo de travamento do ângulo das juntas.

**Lei de controle**:
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de travamento**:
- Quando a velocidade linear do efetuador final `||v_ee|| < 0.04 m/s` e a velocidade angular `||w_ee|| < 0.08 rad/s`:
  - O ângulo de junta alvo `q_target` permanece travado
  - O braço robótico trava na posição atual
- Quando a velocidade do efetuador final excede o limite:
  - `q_target` é atualizado para o ângulo de junta atual
  - Permite empurrar manualmente para mudar a posição

**Comportamento esperado**:
- O braço robótico trava na posição atual, exigindo força para alterar o ângulo alvo
- Mais estável que a versão básica, adequado para cenários que exigem manutenção de pose

**Comando de execução**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:
- Exibir o status de travamento em tempo real (LOCKED / UPDATE)
- Velocidade linear e velocidade angular do efetuador final
- Torque de compensação de gravidade para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Voltar para Home antes de sair da compensação de gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente ao zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair, para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação, para evitar fazer alterações excessivamente grandes de uma só vez.
:::

**Configuração de teste de segurança**:
Você pode modificar a lista `ENABLED_JOINTS` no início do script para habilitar apenas juntas específicas para testes de segurança:
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### Ambiente de simulação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### Simulação de cinemática direta (`sim/fk_sim.py`)

Simulação interativa de cinemática direta, visualizando a pose do braço robótico no MeshCat ao inserir os ângulos das juntas.

**Comando de execução**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos interativos**:
- Inserir 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:
- Exibir em tempo real a posição e orientação do efetuador final
- Suportar entrada contínua para testar diferentes poses
- Gerar saída com informações de pose formatadas

---

#### Simulação de cinemática inversa (`sim/ik_sim.py`)

Simulação interativa de cinemática inversa, resolvendo automaticamente os ângulos das juntas e visualizando uma pose alvo.

**Comando de execução**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:
- Apenas posição: `x y z` (metros)
- Posição + orientação: `x y z roll pitch yaw` (radianos)

**Exemplo**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position + orientation
```

**Recursos**:
- Determinar automaticamente se a IK converge
- Exibir contagem de iterações e erro
- Atualizar a pose do robô em tempo real

---

#### Simulação de planejamento de trajetória (`sim/traj_sim.py`)

Simulação de planejamento de trajetória geodésica em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Comando de execução**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos interativos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter diretamente para usar a configuração padrão
- `q`: Sair

**Recursos**:
- Planejar da posição atual até a pose alvo
- Usar perfil de trajetória de mínimo tranco (minimum jerk)
- Exibir estatísticas da trajetória em tempo real
- Reproduzir a animação completa da trajetória no MeshCat
- Exibir o caminho de referência (cinza) e o caminho real (verde)

---

#### Ferramenta de visualização (`sim/visualizer.py`)

Wrapper do visualizador MeshCat, fornecendo uma interface unificada de exibição do robô.

**Funções principais**:
- Carregar o modelo URDF e exibir o robô
- Desenhar caminhos polilinha 3D (referência/real)
- Exibir a pose alvo de IK (eixos tricolores + esfera)
- Suportar reprodução de animação de trajetória das juntas

**Exemplo de uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```


---

## FAQ

- **Encontrou erro `Permission denied`**
  Certifique-se de executar `sudo chmod 666 /dev/ttyACM0` (Damiao) ou `sudo chmod 666 /dev/can0` (Robostride) para definir as permissões do dispositivo.

- **A solução de IK falha ou os resultados são anormais**
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que os limites das juntas estejam configurados corretamente.

- **O efeito da compensação de gravidade é ruim**
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade neste projeto depende de URDF e Pinocchio. Você pode tentar corrigir o URDF para os parâmetros que você realmente mediu (você pode pedir ajuda a uma IA para esta etapa).

- **Os motores Robostride não conseguem ler o status**
  Problemas de configuração de protocolo interno no motorbridge podem impedir que motores RS consultem o status como os motores DM. Por favor, julgue com base nos efeitos reais de movimento ou tente usar o comando `ping` para confirmar a comunicação normal com o motor.

- **Como alternar entre as configurações de motor Damiao e Robostride**
  Modifique o arquivo de configuração `config/rebotarm_dm.yaml` (Damiao) ou `config/rebotarm_rs.yaml` (Robostride) e carregue a configuração correspondente no código.

---

## Contato

- **Suporte técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositório do projeto**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referência

- [Pinocchio Official Documentation](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat Official Documentation](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---
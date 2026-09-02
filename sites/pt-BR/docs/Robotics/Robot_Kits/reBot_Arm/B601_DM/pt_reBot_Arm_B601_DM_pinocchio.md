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
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

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


:::tip
Este código de exemplo pode ser usado para controlar os motores ou poses do braço robótico, incluindo controle de motor único, controle e teste de cinemática direta/inversa, configuração da posição zero do braço e leitura do ângulo do motor, sistema de visualização MeshCat e muito mais.
:::


[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica em robótica. Ela fornece cinemática direta/inversa eficiente, cálculos dinâmicos e recursos de planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir o estado do robô e trajetórias de movimento em tempo real.

Este projeto combina os poderosos recursos de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise cinemática e depuração para o reBot Arm B601-DM.

---

## Recursos do Projeto

1. **Análise Cinemática Completa**
   Suporta cálculos de Cinemática Direta (FK) e Cinemática Inversa (IK), sendo capaz de resolver a pose do efetuador final do braço robótico em tempo real.

2. **Visualização 3D em Tempo Real**
   Exibe o estado do braço robótico e as trajetórias de movimento em tempo real por meio do MeshCat no navegador, sem necessidade de software adicional.

3. **Planejamento e Rastreamento de Trajetória**
   Implementa planejamento de trajetória geodésica em SE(3), com suporte a controle de rastreamento CLIK (Cinemática Inversa em Malha Fechada).

4. **Controle com Compensação de Gravidade**
   Calcula o torque de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando o efeito de “flutuação” do braço robótico.

5. **Open Source e Extensível**
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
      <td>0°C ~ 40°C</td>
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


## Requisitos de Ambiente

:::caution Pré-requisito — Conclua primeiro o Guia Rápido do Braço
Antes de prosseguir com este tutorial, você **deve** concluir o documento **[reBot Arm B601-DM Quick Start](/pt-br/rebot_b601_dm_getting_started)** de ponta a ponta, incluindo:

- Desembalagem do hardware, fiação e checklist de energização
- Permissão do dispositivo Serial / CAN (`sudo chmod 666 /dev/ttyACM0` ou `/dev/can0`)
- Calibração de zero de todas as juntas (`2_zero_and_read.py`) e verificação de que o braço pode ser comandado nos modos MIT / POS_VEL

Este tutorial assume que o braço já responde no barramento, que as juntas estão zeradas e que o operador está familiarizado com os limites de segurança relevantes. Pular o Guia Rápido pode levar a motores mal configurados, juntas travadas ou quedas do braço.
:::

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
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se ele não existir) e instalará todas as dependências de acordo com `pyproject.toml` e `uv.lock`.
:::


## Ajustando Parâmetros do Controlador MIT / POS_VEL {#ajustando-parâmetros-do-controlador-mit-/-pos_vel}

Esta seção explica **como modificar** os parâmetros do controlador para cada junta do braço nos modos **MIT** e **POS_VEL**, e como fazer com que as alterações entrem em vigor.

:::tip Esta seção cobre apenas “onde / como alterar”, não “qual valor usar”
Parâmetros adequados só podem ser obtidos por meio de **ajuste direto no hardware**. Esta seção aborda apenas: onde os parâmetros estão, o que cada campo controla e como fazer com que as alterações sejam efetivas e verificá-las. Para estratégias específicas de ajuste (por exemplo, tentativa e erro, Ziegler‑Nichols), consulte referências gerais de controle de motores.
:::

### Localização do Arquivo de Configuração

| Versão de hardware | Arquivo de configuração do motor | Entrada de seleção |
|---|---|---|
| **reBot Arm B601-DM** (este documento) | `config/rebotarm_dm.yaml` | Defina `hardware_yaml: "rebotarm_dm.yaml"` em `config/rebotarm.yaml` |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | Defina `hardware_yaml: "rebotarm_rs.yaml"` em `config/rebotarm.yaml` |

:::caution Não edite `rebotarm.yaml` diretamente
Esse arquivo contém apenas uma única linha `hardware_yaml: ...`; todos os parâmetros dos motores estão em `rebotarm_dm.yaml` / `rebotarm_rs.yaml`.
:::

### Estrutura do Arquivo de Configuração

Cada junta tem sua própria entrada, agrupada por **modo de controle**:

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0x11
    model: "4340P"
    vendor: "damiao"
    MIT:
      kp: 120.0
      kd: 8.0
    POS_VEL:
      vel_kp: 0.0125
      vel_ki: 0.004
      pos_kp: 150.0
      pos_ki: 0.5
      vlim: 5.0
  # ... joint2 ~ joint6 follow the same structure ...
```

Como localizar:

- **Pelo nome da junta**: para modificar uma junta, encontre o bloco `- name: jointX`;
- **Pelo modo**: dentro dessa junta, `MIT:` contém os parâmetros do modo MIT, `POS_VEL:` contém os parâmetros do modo POS_VEL;
- **O modo atual determina qual conjunto é enviado**: o script alterna modos via `mode mit` / `mode posvel`; o motor na verdade recebe os parâmetros sob o sub-bloco correspondente.

### Significado dos Campos no Modo MIT

| Campo | Função |
|---|---|
| `kp` | Ganho proporcional do loop de posição: a “rigidez” do rastreamento da posição alvo. |
| `kd` | Ganho de amortecimento do loop de velocidade: suprime oscilações causadas pelo erro de posição. |

### Significado dos Campos no Modo POS_VEL

| Campo | Função |
|---|---|
| `vel_kp` | Ganho proporcional do loop de velocidade. |
| `vel_ki` | Ganho integral do loop de velocidade. |
| `pos_kp` | Ganho proporcional do loop de posição. |
| `pos_ki` | Ganho integral do loop de posição (presente apenas em algumas configurações do fabricante). |
| `vlim` | Limite de velocidade, restringe a velocidade máxima de movimento. |

:::warning As definições de campos diferem entre fabricantes
Os motores Damiao (DM) e Robostride (RS) usam unidades diferentes na camada de protocolo, portanto **o mesmo nome de campo não é comparável entre fabricantes**. Modificar `vel_kp` em um RS e modificar `vel_kp` em um DM significam coisas diferentes. Interprete cada YAML de acordo com sua própria ordem de campos, não compare valores entre arquivos de configuração.
:::

### Procedimento de Edição

1. **Pare qualquer script em execução**. O motor está habilitado quando você edita o YAML, as alterações não entram em vigor imediatamente e é fácil provocar comportamento inconsistente.
2. **Edite o arquivo YAML correspondente**:
   ```bash
   # Example for DM
   vim config/rebotarm_dm.yaml
   ```
   - Altere apenas a junta que você precisa ajustar (por exemplo, `joint1`); deixe as juntas não relacionadas como estão;
   - Dentro de uma junta, altere apenas o modo que você precisa ajustar (MIT ou POS_VEL); não modifique os campos do outro modo sem motivo.
3. **Preserve a indentação YAML**: 2 espaços por nível, chaves separadas de valores por `: `. Indentação incorreta faz com que o `yaml.safe_load` falhe na análise e todos os parâmetros retornem aos padrões.
4. **Reinicie o script após salvar**. O YAML é lido uma vez na inicialização do script; **edições em tempo de execução não entram em vigor imediatamente**.
5. **Verificação de junta única**: use um script como `3_mit_control.py` (MIT) / `4_pos_vel_control.py` (POS_VEL) para verificar a alteração com um **pequeno movimento de junta única** antes de fazer um teste com o braço completo.

### Verificando se a Alteração Entrou em Vigor

- **Observação em tempo de execução**: habilite o motor em `3_mit_control.py` / `4_pos_vel_control.py` e verifique `state`; se os parâmetros parecerem inalterados ou o motor se comportar exatamente como antes, o YAML foi editado incorretamente ou foi sobrescrito pelos padrões.
- **Auto-verificação do YAML**: faça o parsing diretamente com Python e imprima os campos de uma junta para confirmar que os valores correspondem ao que você acabou de escrever:
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```
- **Rollback rápido**: `git checkout config/rebotarm_dm.yaml` restaura os padrões do repositório.

:::caution Não ajuste muitos eixos de uma vez
Alterar drasticamente `kp` / `kd` em vários eixos simultaneamente — se a direção ou o sinal de um eixo estiver errado — pode causar instantaneamente oscilações, sobrecorrente ou paradas bruscas. Por favor, **faça iterações em um eixo e um modo por vez, em pequenos passos**.
:::

---

## Introdução às Ferramentas de Depuração

:::tip Configurações de permissão
Antes de executar exemplos de controle de hardware, você precisa definir as permissões do dispositivo:

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```
:::
<details>
<summary>Ferramentas de depuração (use apenas quando ocorrer uma exceção)</summary>

**Console de Controle de Motor Único (`0x01damiao_test.py`)**

Teste direto de um único motor usando o SDK do motorbridge.

**Como executar**:
```bash
uv run python example/0x01damiao_test.py
```

**Comandos interativos**:
| Comando | Descrição |
|------|------|
| `enable` / `disable` | Ativar/Desativar motor |
| `set_zero` | Definir posição zero |
| `state` | Ver status |
| `ping` | Enviar ping ao motor para obter resposta |
| `clear_error` | Limpar erros do motor |
| `mode <mit/posvel/vel>` | Alternar modo de controle |
| `mit <pos> [vel] [kp] [kd]` | Comando de modo MIT |
| `posvel <pos> [vlim]` | Comando de modo POS_VEL |
| `vel <velocity>` | Comando de modo de velocidade pura |
| `read_param <id> [type]` | Ler parâmetros do motor |
| `write_param <id> <value> [type]` | Gravar parâmetros do motor |
| `loop` | Entrar no modo de controle em loop |
| `q` / `quit` | Sair |
---

**Calibração de Zero e Monitoramento de Ângulo (`2_zero_and_read.py`)**

Define automaticamente o zero de todas as juntas e exibe os ângulos das juntas em tempo real.

**Como executar**:
```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

<details>
<summary>Modo de Controle MIT (alternativa no reBot DM, consultar sob demanda — POS_VEL é recomendado)</summary>

:::warning Nota de adequação
Para o **reBot Arm B601-DM**, **POS_VEL (Posição‑Velocidade) é o modo de controle recomendado** — o protocolo do motor Damiao oferece suporte nativo ao controle híbrido posição‑velocidade com limitação de velocidade integrada, proporcionando o resultado mais suave pronto para uso. O modo MIT é **a alternativa** e normalmente requer um ajuste mais cuidadoso de `kp` / `kd` para ter um bom comportamento. Portanto, o modo MIT **não é o padrão** para o hardware DM, mas como alguns usuários precisam dele, **este demo é mantido para referência e ajuste sob demanda**. Se você não tiver uma necessidade especial, prefira o exemplo em modo POS_VEL abaixo.
:::

**Modo de Controle MIT (`3_mit_control.py`)**

Insira ângulos-alvo para todas as juntas para concluir o controle do motor no modo de controle MIT, normalmente usado para controle de força, controle de impedância ou cenários que exigem alta resposta dinâmica.

**Como executar**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Este exemplo **não possui planejamento de trajetória nem de velocidade**. Grandes ângulos-alvo das juntas farão com que os motores se movam em velocidade muito alta e podem até **acionar diretamente a proteção de sobrecorrente do motor**. Recomendações:

- Primeiro verifique com **ângulos pequenos** (por exemplo, mova uma única junta apenas 5~10 graus), confirme que a resposta e a direção do motor estão corretas antes de aumentar a escala;
- Esta seção **não possui versão de trajetória suave integrada**. Se você precisar de transições suaves entre vários alvos, controle cuidadosamente seus alvos e o tempo, ou consulte a seção subsequente [Controle de Cinemática Inversa com Trajetória Suave (8_arm_traj_control.py)](#demo8-controle-de-traj) e porte a abordagem de planejamento de mínimo tranco / aceleração-desaceleração para o seu próprio script;
- Mantenha pessoas e outros dispositivos fora do raio de trabalho do braço durante a operação.
:::

---
</details>

### Modo de Controle Posição-Velocidade (`4_pos_vel_control.py`)

Insira ângulos-alvo para todas as juntas para concluir o controle do motor no modo de controle híbrido POS_VEL (Posição-Velocidade), obtendo um movimento mais suave e controlável ao atingir os ângulos-alvo, reduzindo a vibração.

**Como executar**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Este exemplo **não possui planejamento de trajetória nem de velocidade**. Grandes ângulos-alvo das juntas farão com que os motores se movam em velocidade muito alta e podem até **acionar diretamente a proteção de sobrecorrente do motor**. Recomendações:

- Primeiro verifique com **ângulos pequenos** (por exemplo, mova uma única junta apenas 5~10 graus), confirme que a resposta e a direção do motor estão corretas antes de aumentar a escala;
- Esta seção **não possui versão de trajetória suave integrada**. Se você precisar de transições suaves entre vários alvos, controle cuidadosamente seus alvos e o tempo, ou consulte a seção subsequente [Controle de Cinemática Inversa com Trajetória Suave (8_arm_traj_control.py)](#demo8-controle-de-traj) e porte a abordagem de planejamento de mínimo tranco / aceleração-desaceleração para o seu próprio script;
- Mantenha pessoas e outros dispositivos fora do raio de trabalho do braço durante a operação.
:::

---

## Testes de Cinemática

### Teste de Cinemática Direta (`5_fk_test.py`)

Calcular a pose do efetuador final com base nos ângulos das juntas.

**Entrada**: 6 ângulos de junta (graus)

**Saída**:
- Posição do efetuador final (X, Y, Z) — Unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (rolagem/tangagem/giro) — Unidade: graus

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

**Formato de entrada**:
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

**Formato de entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Digite `state`: Ver os valores atuais em radianos de cada junta.
- Digite `end_state`: Ver as coordenadas atuais reais (m) e os ângulos de Euler (rad) do efetuador final no espaço.

**Como executar**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```
:::danger
Este exemplo **não possui planejamento de trajetória nem de velocidade**. Grandes ângulos-alvo farão com que os motores se movam em velocidade muito alta e podem até **acionar diretamente a proteção de sobrecorrente do motor**. Recomendações:

- Primeiro verifique com **ângulos pequenos** (por exemplo, mova o efetuador final apenas 5~10 cm da posição atual), confirme que a pose e a direção estão corretas antes de aumentar a escala;
- Para transições suaves entre alvos, vá diretamente para a próxima seção [Controle de Cinemática Inversa com Trajetória Suave (8_arm_traj_control.py)](#demo8-controle-de-traj) que usa planejamento de mínimo tranco / aceleração-desaceleração;
- Mantenha pessoas e outros dispositivos fora do raio de trabalho do braço durante a operação.
:::

### Controle de Cinemática Inversa com Trajetória Suave (`8_arm_traj_control.py`) {#demo8-controle-de-traj}

Use cinemática inversa (IK) em modo MIT para planejar automaticamente uma trajetória de movimento uniforme ou com aceleração/desaceleração suave dentro do tempo-alvo, evitando vibração severa das juntas.

**Formato de entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + Orientação + Tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Digite `state`: Ver os valores atuais em radianos de cada junta.
- Digite `end_state`: Ver as coordenadas atuais reais (m) e os ângulos de Euler (rad) do efetuador final no espaço.

**Como executar**:
```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Return to zero position and exit system
```

:::tip E se eu observar desvio de pose?
Se você notar que a **pose do efetuador final lida** difere da **pose alvo comandada**, e a **pose em si é alcançável** (não está fora da área de trabalho, nem em uma singularidade), o problema provavelmente está nos parâmetros do seu controlador MIT / POS_VEL. Nesse caso, consulte a seção anterior [Tuning MIT / POS_VEL Controller Parameters](#tune-controller-params) e faça o ajuste manual de `kp` / `kd` etc. usando a abordagem de "uma junta por vez, modo por modo, em pequenos passos"; depois de ajustar, volte a este exemplo para verificar.
:::

---

## Teste de Compensação de Gravidade

### Controle de Compensação de Gravidade — Versão Básica (`9_gravity_compensation.py`)

Use o modelo dinâmico Pinocchio para compensar a gravidade das juntas.

**Lei de Controle**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento Esperado**:
- O braço pode "flutuar" em qualquer pose
- Não cairá devido ao próprio peso quando solto
- Pode ser movido manualmente para qualquer posição

**Como Executar**:
```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:
- Exibição em tempo real do torque desejado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Volte para Home Antes de Sair da Compensação de Gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente para zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a Compensação de Juntas Individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito de flutuação real para evitar fazer alterações excessivamente grandes de uma só vez.
:::


### Controle de Compensação de Gravidade — Versão com Travamento de Velocidade do Efetuador Final (`10_gravity_compensation_lock.py`)

Com base na compensação de gravidade básica, adiciona detecção de velocidade do efetuador final e mecanismo de travamento de ângulo de junta.

**Lei de Controle**:
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de Travamento**:
- Quando a velocidade linear de extremidade `||v_ee|| < 0.04 m/s` e a velocidade angular `||w_ee|| < 0.08 rad/s`:
  - O ângulo de junta alvo `q_target` permanece travado
  - O braço robótico trava na posição atual
- Quando a velocidade de extremidade excede o limite:
  - `q_target` é atualizado para o ângulo de junta atual
  - Permite empurrar manualmente para mudar a posição

**Comportamento Esperado**:
- O braço robótico trava na posição atual, exigindo força para mudar o ângulo alvo
- Mais estável que a versão básica, adequada para cenários que exigem manutenção de pose

**Como Executar**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:
- Exibição em tempo real do status de travamento (LOCKED / UPDATE)
- Velocidade linear de extremidade, velocidade angular
- Torque de compensação de gravidade para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Volte para Home Antes de Sair da Compensação de Gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente para zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a Compensação de Juntas Individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito de flutuação real para evitar fazer alterações excessivamente grandes de uma só vez.
:::

**Configuração de Teste de Segurança**:
Você pode modificar a lista `ENABLED_JOINTS` no topo do script para habilitar apenas juntas específicas para teste de segurança:
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### Ambiente de Simulação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>


#### Simulação de Cinemática Direta (`sim/fk_sim.py`)

Simulação interativa de cinemática direta, visualize a pose do braço robótico inserindo ângulos de junta no MeshCat.

**Como Executar**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos Interativos**:
- Insira 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:
- Exibição em tempo real da posição e orientação do efetuador final
- Suporta entrada contínua para testar diferentes poses
- Saída formatada das informações de pose

---

#### Simulação de Cinemática Inversa (`sim/ik_sim.py`)

Simulação interativa de cinemática inversa, resolve automaticamente os ângulos de junta a partir da pose alvo e visualiza.

**Como Executar**:
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
- Exibe contagem de iterações e erro
- Atualizações em tempo real da pose do robô

---

#### Simulação de Planejamento de Trajetória (`sim/traj_sim.py`)

Simulação de planejamento de trajetória baseada em geodésicas em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Como Executar**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos Interativos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter para usar a configuração padrão
- `q`: Sair

**Recursos**:
- Planeja da posição atual até a posição alvo
- Usa perfil de trajetória de mínimo jerk
- Exibição em tempo real das estatísticas da trajetória
- Reprodução completa da animação da trajetória no MeshCat
- Exibe o caminho de referência (cinza) e o caminho real (verde)

---

#### Ferramenta de Visualização (`sim/visualizer.py`)

Wrapper do visualizador MeshCat, fornecendo interface unificada de exibição do robô.

**Principais Recursos**:
- Carregar modelo URDF e exibir o robô
- Desenhar caminhos de polilinha 3D (referência/real)
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

## FAQ

- **Encontrando erro `Permission denied`**
  Certifique-se de ter executado `sudo chmod 666 /dev/ttyACM0` ou `sudo chmod 666 /dev/can0` para definir as permissões do dispositivo.

- **A solução de IK falha ou os resultados são anormais**
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que a configuração de limite de junta está correta.

- **O efeito da compensação de gravidade não é bom**
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade deste projeto depende de URDF e Pinocchio. Você pode tentar corrigir o URDF para os seus parâmetros medidos reais (você pode pedir ajuda à IA para esta etapa).

---

## Contato

- **Suporte Técnico**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **Repositório do Projeto**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de Referência

- [Documentação Oficial do Pinocchio](https://stack-of-tasks.github.io/pinocchio/)
- [Documentação Oficial do MeshCat](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>Se este projeto ajudar você, por favor nos dê uma Star!</strong>
</div>

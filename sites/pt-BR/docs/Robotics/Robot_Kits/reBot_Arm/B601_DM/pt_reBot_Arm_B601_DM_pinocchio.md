---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise cinemática e visualização no braço robótico reBot Arm B601-DM.
title: reBot Arm B601-DM Pinocchio & MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-DM Pinocchio & MeshCat

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço robótico 6-DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

:::tip
Este código de exemplo pode ser usado para controlar os motores ou poses do braço robótico, incluindo controle de motor único, controle e teste de cinemática direta/inversa, configuração da posição zero do braço e leitura do ângulo do motor, sistema de visualização MeshCat e muito mais.
:::

<div align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> é uma biblioteca open source para análise e otimização de dinâmica em robótica. Ela fornece cinemática direta/inversa eficiente, cálculos dinâmicos e recursos de planejamento de trajetória.
</div>

<div align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> é uma ferramenta de visualização 3D baseada na web que pode exibir em tempo real o estado do robô e as trajetórias de movimento.
</div>

Este projeto combina o poderoso poder de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise cinemática e depuração para o reBot Arm B601-DM.

<GitHubStarButton owner="Seeed-Projects" repo="reBotArm_control_py" />

---

## Recursos do projeto

1. **Análise cinemática completa**
   Suporta cálculos de Cinemática Direta (FK) e Cinemática Inversa (IK), sendo capaz de resolver em tempo real a pose do efetuador final do braço robótico.

2. **Visualização 3D em tempo real**
   Exibe em tempo real o estado do braço robótico e as trajetórias de movimento por meio do MeshCat no navegador, sem necessidade de software adicional.

3. **Planejamento e rastreamento de trajetória**
   Implementa planejamento de trajetória geodésica em SE(3), com suporte a controle de rastreamento CLIK (Closed-Loop Inverse Kinematics).

4. **Controle com compensação de gravidade**
   Calcula o torque de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando o efeito de “flutuação” do braço robótico.

5. **Open source e extensível**
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
      <td>Modelo do braço robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Graus de liberdade</td>
      <td>6-DOF + garra</td>
    </tr>
    <tr>
      <td>Modelo do motor</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>Método de comunicação</td>
      <td>Barramento CAN via adaptador USB-CAN</td>
    </tr>
    <tr>
      <td>Tensão de operação</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Método de controle</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>Faixa de temperatura de operação recomendada</td>
      <td>0°C ~ 40°C</td>
    </tr>
  </tbody>
</table>

## Lista de materiais (BOM)

| Componente | Quantidade | Incluído |
| -- | -- | -- |
| Braço robótico reBot Arm B601-DM | 1 | ✅ |
| Ponte serial USB2CAN | 1 | ✅ |
| Fonte de alimentação (24V) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |

## Requisitos de ambiente

:::caution Pré-requisito — Conclua primeiro o início rápido do braço
Antes de prosseguir com este tutorial, você **deve** concluir o documento **[reBot Arm B601-DM Quick Start](/pt-br/rebot_b601_dm_getting_started)** de ponta a ponta, incluindo:

- Desembalagem do hardware, fiação e checklist de energização
- Permissão do dispositivo Serial / CAN (`sudo chmod 666 /dev/ttyACM0` ou `/dev/can0`)
- Calibração de zero de todas as juntas (`2_zero_and_read.py`) e verificação de que o braço pode ser comandado nos modos MIT / POS_VEL

Este tutorial assume que o braço já responde no barramento, que as juntas estão zeradas e que o operador está familiarizado com os limites de segurança relevantes. Pular o início rápido pode levar a motores mal configurados, juntas travadas ou quedas do braço.
:::

| Item | Requisito |
| ------ | ------------- |
| **Python** | 3.10+ |
| **Sistema operacional** | Ubuntu (Ubuntu 24.04 LTS recomendado) |
| **Interface de comunicação** | Ponte serial USB2CAN ou interface CAN |

---

## Etapas de instalação

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Instalar uv (se ainda não estiver instalado)</h4>
<p className="rebot-step-label">Etapa 1</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Após a instalação, execute o seguinte comando para verificar se `uv` está disponível:

```bash
uv --version
```

Se a instalação tiver sido bem-sucedida, você deverá ver uma saída semelhante à seguinte (a versão e a plataforma podem ser diferentes):

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Sincronizar ambiente (instalar todas as dependências)</h4>
<p className="rebot-step-label">Etapa 2</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se ele não existir) e instalará todas as dependências de acordo com `pyproject.toml` e `uv.lock`.
:::

</div>
</section>
</div>

## Ajuste dos parâmetros do controlador MIT / POS_VEL {#tune-controller-params}

Esta seção explica **como modificar** os parâmetros do controlador para cada junta do braço nos modos **MIT** e **POS_VEL**, e como fazer com que as alterações entrem em vigor.

:::tip Esta seção aborda apenas “onde / como alterar”, não “que valor usar”
Parâmetros adequados só podem ser obtidos por meio de **ajuste em hardware real**. Esta seção aborda apenas: onde os parâmetros estão, o que cada campo controla e como fazer com que as alterações sejam efetivas e verificá-las. Para estratégias específicas de ajuste (por exemplo, tentativa e erro, Ziegler‑Nichols), consulte referências gerais de controle de motores.
:::

### Localização do arquivo de configuração

| Versão de hardware | Arquivo de configuração do motor | Entrada de seleção |
| --- | --- | --- |
| **reBot Arm B601-DM** (este documento) | `config/rebotarm_dm.yaml` | Defina `hardware_yaml: "rebotarm_dm.yaml"` em `config/rebotarm.yaml` |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | Defina `hardware_yaml: "rebotarm_rs.yaml"` em `config/rebotarm.yaml` |

:::caution Não edite `rebotarm.yaml` diretamente
Esse arquivo contém apenas uma única linha `hardware_yaml: ...`; todos os parâmetros dos motores estão em `rebotarm_dm.yaml` / `rebotarm_rs.yaml`.
:::

### Estrutura do arquivo de configuração

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
- **O modo atual determina qual conjunto é enviado**: o script alterna modos via `mode mit` / `mode posvel`; o motor na prática recebe os parâmetros sob o sub-bloco correspondente.

### Significado dos campos no modo MIT

| Campo | Função |
| --- | --- |
| `kp` | Ganho proporcional do loop de posição: a “rigidez” do rastreamento da posição alvo. |
| `kd` | Ganho de amortecimento do loop de velocidade: suprime oscilações causadas pelo erro de posição. |

### Significado dos campos no modo POS_VEL

| Campo | Função |
| --- | --- |
| `vel_kp` | Ganho proporcional do loop de velocidade. |
| `vel_ki` | Ganho integral do loop de velocidade. |
| `pos_kp` | Ganho proporcional do loop de posição. |
| `pos_ki` | Ganho integral do loop de posição (presente apenas em algumas configurações do fabricante). |
| `vlim` | Limite de velocidade, restringe a velocidade máxima de movimento. |

:::warning As definições de campos variam entre fabricantes
Os motores Damiao (DM) e Robostride (RS) usam unidades diferentes na camada de protocolo, portanto **o mesmo nome de campo não é comparável entre fabricantes**. Modificar o `vel_kp` de um RS e modificar o `vel_kp` de um DM significam coisas diferentes. Interprete cada YAML de acordo com sua própria ordem de campos, não compare valores entre arquivos de configuração.
:::

:::caution Limite o escopo de teste antes de ajustar
Grandes alterações de `kp` / `kd` em várias juntas podem causar oscilação imediata, sobrecorrente ou colisões em batentes mecânicos se qualquer direção ou sinal de junta estiver incorreto. Antes de ajustar, limpe o espaço de trabalho do braço e planeje testar **uma junta e um modo por vez, em pequenos passos**.
:::

### Procedimento de edição

1. **Pare qualquer script em execução**. O motor está habilitado quando você edita o YAML, as alterações não entram em vigor imediatamente e é fácil provocar comportamentos inconsistentes.
2. **Edite o arquivo YAML correspondente**:

   ```bash
   # Example for DM
   vim config/rebotarm_dm.yaml
   ```

   - Altere apenas a junta que você precisa ajustar (por exemplo, `joint1`); deixe as juntas não relacionadas inalteradas;
   - Dentro de uma junta, altere apenas o modo que você precisa ajustar (MIT ou POS_VEL); não modifique os campos do outro modo sem motivo.
3. **Preserve a indentação YAML**: 2 espaços por nível, chaves separadas dos valores por `:`. Indentação incorreta faz o `yaml.safe_load` falhar na análise e todos os parâmetros voltarão para os padrões.
4. **Reinicie o script após salvar**. O YAML é lido uma vez na inicialização do script; **edições em tempo de execução não entram em vigor imediatamente**.
5. **Verificação de uma única junta**: use um script como `3_mit_control.py` (MIT) / `4_pos_vel_control.py` (POS_VEL) para verificar a alteração com um **pequeno movimento de uma única junta** antes de fazer um teste com o braço completo.

### Verificando se a alteração entrou em vigor

- **Observação em tempo de execução**: habilite o motor em `3_mit_control.py` / `4_pos_vel_control.py` e verifique `state`; se os parâmetros parecerem inalterados ou o motor se comportar exatamente como antes, o YAML foi editado incorretamente ou foi sobrescrito pelos padrões.
- **Auto-verificação do YAML**: faça o parse diretamente com Python e imprima os campos de uma junta para confirmar que os valores correspondem ao que você acabou de escrever:

  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```

- **Rollback rápido**: `git checkout config/rebotarm_dm.yaml` restaura os padrões do repositório.

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
| ------ | ------ |
| `enable` / `disable` | Habilitar/Desabilitar motor |
| `set_zero` | Definir posição zero |
| `state` | Ver status |
| `ping` | Enviar ping ao motor para obter resposta |
| `clear_error` | Limpar erros do motor |
| `mode <mit/posvel/vel>` | Alternar modo de controle |
| `mit <pos> [vel] [kp] [kd]` | Comando em modo MIT |
| `posvel <pos> [vlim]` | Comando em modo POS_VEL |
| `vel <velocity>` | Modo de velocidade pura |
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

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Modo de Controle MIT (alternativo no reBot DM, visualizar sob demanda — POS_VEL é recomendado)</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

:::warning Opcional — MIT é o modo alternativo no DM
Para o **reBot Arm B601-DM**, POS_VEL (Posição‑Velocidade) é geralmente o modo de controle de junta mais apropriado; o protocolo do motor Damiao oferece suporte nativo ao controle híbrido de posição‑velocidade com limitação de velocidade integrada. O modo MIT geralmente requer um ajuste mais cuidadoso de `kp` / `kd`.

Este exemplo não é obrigatório para concluir o tutorial. A menos que você precise especificamente depurar o modo MIT, **pule este exemplo** e use o exemplo POS_VEL abaixo. Se o seu objetivo é um movimento suave do efetuador final ao longo de uma trajetória planejada, vá diretamente para [Controle de IK com Trajetória Suave (`8_arm_traj_control.py`)](#demo8-traj-control).
:::

Insira ângulos alvo para todas as juntas para completar o controle do motor no modo de controle MIT, normalmente usado para controle de força, controle de impedância ou cenários que exigem alta resposta dinâmica.

:::danger Antes de executar — Este exemplo não possui planejamento de trajetória suave
Este exemplo envia ângulos de junta alvo diretamente para os motores, **sem planejamento de trajetória ou velocidade**. Uma grande mudança de alvo pode causar movimento repentino em alta velocidade e acionar a proteção contra sobrecorrente.

- Execute-o apenas quando precisar verificar o controle de junta MIT de baixo nível. Comece movendo uma junta em apenas 5–10 graus e, em seguida, aumente a mudança gradualmente após confirmar a resposta e a direção;
- Se você precisar de uma trajetória suave completa, pule este exemplo e vá para [Controle de IK com Trajetória Suave (`8_arm_traj_control.py`)](#demo8-traj-control);
- Limpe a área de trabalho do braço antes de executar e certifique-se de que você pode cortar a alimentação imediatamente.
:::

<details className="rebot-demo-details">
<summary>Expandir instruções de execução (Opcional)</summary>

**Como executar**:

```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Modo de Controle Posição-Velocidade</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

Insira ângulos alvo para todas as juntas para controlar os motores no modo híbrido POS_VEL (Posição‑Velocidade). A limitação de velocidade integrada da Damiao pode reduzir o impacto das mudanças de alvo, mas este exemplo em si não fornece um planejamento completo de trajetória suave.

:::danger Opcional — Limitação de velocidade não é planejamento completo de trajetória
Embora POS_VEL seja o modo de controle de junta recomendado para DM, este exemplo ainda atualiza diretamente os alvos de posição das juntas e não planeja o caminho intermediário. Uma grande mudança de alvo ainda pode causar movimento repentino, colisão ou sobrecorrente.

- Este exemplo não é obrigatório para concluir o tutorial. Se você só precisa de movimento suave do efetuador final, **pule este exemplo** e vá diretamente para [Controle de IK com Trajetória Suave (`8_arm_traj_control.py`)](#demo8-traj-control);
- Ao verificar o controle de junta POS_VEL, comece movendo uma junta em apenas 5–10 graus e, em seguida, aumente gradualmente a mudança de alvo;
- Limpe a área de trabalho do braço antes de executar e certifique-se de que você pode cortar a alimentação imediatamente.
:::

<details className="rebot-demo-details">
<summary>Expandir instruções de execução (Opcional)</summary>

**Como executar**:

```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

---

## Testes de Cinemática

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Teste de Cinemática Direta</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Teste de Cinemática Inversa</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

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

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>Controle de Cinemática Inversa em Modo MIT</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

Use cinemática inversa (IK) no modo MIT para especificar as coordenadas 3D (X, Y, Z) e a orientação (ângulos de Euler) para onde o efetuador final do braço robótico deve se mover.

**Formato de entrada**:

- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Digite `state`: Visualizar os valores atuais em radianos de cada junta.
- Digite `end_state`: Visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

:::danger Opcional — Este exemplo não possui planejamento de trajetória suave
Este exemplo envia a solução de IK diretamente como alvo das juntas, **sem planejamento de trajetória ou velocidade**. Uma grande mudança na pose alvo pode causar um movimento repentino em alta velocidade e acionar a proteção contra sobrecorrente.

- Este exemplo não é necessário para concluir o tutorial. Na maioria dos casos, **ignore este exemplo** e use a próxima seção, [Controle de IK com trajetória suave (`8_arm_traj_control.py`)](#demo8-controle-de-trajetória), que inclui planejamento de aceleração/desaceleração com mínimo tranco;
- Execute-o apenas quando precisar comparar ou depurar o controle de IK sem planejamento de trajetória. Mantenha o primeiro alvo dentro de 5–10 cm da posição atual do efetuador final;
- Antes de executar, confirme que a pose alvo é alcançável, limpe a área de trabalho de pessoas e obstáculos e certifique-se de que você pode cortar a alimentação imediatamente.
:::

<details className="rebot-demo-details">
<summary>Expandir instruções de execução (opcional)</summary>

**Como executar**:

```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">Controle de cinemática inversa com trajetória suave</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

Use cinemática inversa (IK) no modo MIT para planejar automaticamente uma trajetória de movimento com aceleração/desaceleração uniforme ou suave dentro do tempo alvo, evitando vibração severa nas juntas.

**Formato de entrada**:

- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + Orientação + Tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Digite `state`: Visualizar os valores atuais em radianos de cada junta.
- Digite `end_state`: Visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

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
Se você notar que a **pose lida do efetuador final** difere da **pose alvo comandada**, e a **pose em si é alcançável** (não está fora da área de trabalho, nem em uma singularidade), o problema provavelmente está nos parâmetros do seu controlador MIT / POS_VEL. Nesse caso, consulte a seção anterior [Ajuste dos parâmetros do controlador MIT / POS_VEL](#ajustar-parâmetros-do-controlador) e ajuste manualmente `kp` / `kd` etc. usando a abordagem de "uma junta por vez, modo por modo, pequenos passos"; depois de ajustar, retorne a este exemplo para verificar.
:::

</div>
</section>
</div>

---

## Teste de compensação de gravidade

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>Controle de compensação de gravidade — Versão básica</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

Use o modelo dinâmico Pinocchio para compensar a gravidade das juntas.

**Lei de controle**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento esperado**:

- O braço pode "flutuar" em qualquer pose
- Não cairá devido ao próprio peso quando solto
- Pode ser movido manualmente para qualquer posição

:::caution Saída normal realiza um retorno seguro à posição inicial
Quando você interrompe o script normalmente com `Ctrl+C`, ele primeiro para o controle de compensação de gravidade e mantém a pose atual com ganhos rígidos e alimentação antecipada de gravidade. Em seguida, retorna o braço para zero por meio de uma trajetória de mínimo tranco; somente após a conclusão do retorno à origem ele desconecta e desabilita os motores.

O retorno automático à origem depende da execução normal do programa, da comunicação e da alimentação. Mantenha pessoas e obstáculos fora da área de trabalho do braço e esteja pronto para sustentar o braço durante o retorno. Uma falha de comunicação, perda inesperada de energia ou término forçado pode impedir a conclusão da sequência de proteção; corte a alimentação imediatamente se ocorrer movimento anormal.
:::

**Como executar**:

```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:

- Exibição em tempo real do torque desejado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>Controle de compensação de gravidade — Versão com trava de velocidade do efetuador final</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

Com base na compensação de gravidade básica, adiciona detecção de velocidade do efetuador final e mecanismo de trava de ângulo das juntas.

**Lei de controle**:

```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de trava**:

- Quando a velocidade linear do efetuador `||v_ee|| < 0.04 m/s` e a velocidade angular `||w_ee|| < 0.08 rad/s`:
  - O ângulo de junta alvo `q_target` permanece travado
  - O braço robótico trava na posição atual
- Quando a velocidade do efetuador excede o limite:
  - `q_target` é atualizado para o ângulo de junta atual
  - Permite empurrar manualmente para mudar a posição

**Comportamento esperado**:

- O braço robótico trava na posição atual, exigindo força para mudar o ângulo alvo
- Mais estável que a versão básica, adequada para cenários que exigem manutenção de pose

:::caution Saída normal realiza um retorno seguro à posição inicial
Quando você interrompe o script normalmente com `Ctrl+C`, ele primeiro para o controle de compensação de gravidade e mantém a pose atual com ganhos rígidos e alimentação antecipada de gravidade. Em seguida, retorna o braço para zero por meio de uma trajetória de mínimo tranco; somente após a conclusão do retorno à origem ele desconecta e desabilita os motores.

O retorno automático à origem depende da execução normal do programa, da comunicação e da alimentação. Mantenha pessoas e obstáculos fora da área de trabalho do braço e esteja pronto para sustentar o braço durante o retorno. Uma falha de comunicação, perda inesperada de energia ou término forçado pode impedir a conclusão da sequência de proteção; corte a alimentação imediatamente se ocorrer movimento anormal.
:::

**Como executar**:

```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:

- Exibição em tempo real do status de trava (LOCKED / UPDATE)
- Velocidade linear e velocidade angular do efetuador final
- Torque de compensação de gravidade para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

**Configuração de teste de segurança**:
Você pode modificar a lista `ENABLED_JOINTS` no início do script para habilitar apenas juntas específicas para testes de segurança:

```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

</div>
</section>
</div>

---

## Ambiente de simulação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_DM.png" alt="Simulação MeshCat do reBot Arm B601-DM" />
</div>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>Simulação de cinemática direta</h4>
<p className="rebot-step-label">Demo de simulação 1 · sim/fk_sim.py</p>

Simulação interativa de cinemática direta, visualize a pose do braço robótico inserindo ângulos das juntas no MeshCat.

**Como executar**:

```bash
uv run python example/sim/fk_sim.py
```

**Comandos interativos**:

- Insira 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:

- Exibição em tempo real da posição e orientação do efetuador final
- Suporta entrada contínua para testar diferentes poses
- Saída formatada das informações de pose

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>Simulação de Cinemática Inversa</h4>
<p className="rebot-step-label">Demonstração de Simulação 2 · sim/ik_sim.py</p>

Simulação interativa de cinemática inversa, resolve automaticamente os ângulos das juntas a partir da pose alvo e visualiza o resultado.

**Como executar**:

```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:

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
- Atualizações de pose do robô em tempo real

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>Simulação de Planejamento de Trajetória</h4>
<p className="rebot-step-label">Demonstração de Simulação 3 · sim/traj_sim.py</p>

Simulação de planejamento de trajetória baseada em geodésicas em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Como executar**:

```bash
uv run python example/sim/traj_sim.py
```

**Comandos interativos**:

- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter para usar a configuração padrão
- `q`: Sair

**Recursos**:

- Planeja da posição atual até a posição alvo
- Usa perfil de trajetória de mínimo tranco (minimum jerk)
- Exibição em tempo real das estatísticas da trajetória
- Reprodução completa da animação da trajetória no MeshCat
- Exibe caminho de referência (cinza) e caminho real (verde)

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>Ferramenta de Visualização</h4>
<p className="rebot-step-label">Demonstração de Simulação 4 · sim/visualizer.py</p>

[LINE_96>Wrapper de visualização MeshCat, fornecendo uma interface unificada de exibição do robô.

**Principais recursos**:

- Carrega modelo URDF e exibe o robô
- Desenha caminhos polilinha 3D (referência/real)
- Exibe pose alvo da IK (eixos tricolores + esfera)
- Suporta reprodução de animação de trajetória de juntas

**Exemplo de uso**:

```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

</div>
</section>
</div>

---

## FAQ

- **Encontrando erro `Permission denied`**
  Certifique-se de ter executado `sudo chmod 666 /dev/ttyACM0` ou `sudo chmod 666 /dev/can0` para definir as permissões do dispositivo.

- **A solução de IK falha ou os resultados são anormais**
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que a configuração dos limites das juntas está correta.

- **O efeito da compensação de gravidade não é bom**
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade deste projeto depende de URDF e Pinocchio. Você pode tentar corrigir o URDF para os seus parâmetros medidos reais (você pode pedir ajuda à IA para esta etapa).

---

## Contato

- **Suporte técnico**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **Repositório do projeto**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referência

- [Documentação oficial do Pinocchio](https://stack-of-tasks.github.io/pinocchio/)
- [Documentação oficial do MeshCat](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>Se este projeto ajudar você, por favor nos dê uma Star!</strong>
</div>

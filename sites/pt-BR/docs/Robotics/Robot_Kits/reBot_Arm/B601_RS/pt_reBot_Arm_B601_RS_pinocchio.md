---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise de cinemática e visualização no braço robótico reBot Arm B601-RS.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-22
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-06-11'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
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
  <strong>Braço robótico 6-DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) é uma biblioteca open source para análise e otimização de dinâmica de robôs. Ela fornece cinemática direta/inversa eficiente, cálculo de dinâmica e planejamento de trajetória. [MeshCat](https://github.com/rdeits/meshcat) é uma ferramenta de visualização 3D baseada na web que pode exibir estados do robô e trajetórias de movimento em tempo real.

Este projeto combina as poderosas capacidades de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise de cinemática e depuração para o reBot Arm B601-RS.


---

## Recursos do projeto

1. **Análise completa de cinemática**
   Suporta cálculos de cinemática direta (FK) e inversa (IK), permitindo resolver em tempo real a pose do efetuador final do braço robótico.

2. **Visualização 3D em tempo real**
   Exibe o estado do braço robótico e as trajetórias de movimento no navegador por meio do MeshCat em tempo real, sem software adicional.

3. **Planejamento e rastreamento de trajetória**
   Implementa planejamento de trajetória geodésica em SE(3), suportando controle de rastreamento CLIK (Cinemática Inversa em Malha Fechada).

4. **Controle de compensação de gravidade**
   Calcula os torques de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando um efeito de “flutuação” para o braço robótico. Suporta versões básica e com trava de velocidade do efetuador final.

5. **Controle de motor em múltiplos modos**
   Suporta modos de controle MIT, POS_VEL e VEL, compatível com os protocolos de motor Damiao e Robostride.

6. **Open source e extensível**
   Todo o código é open source, permitindo que os usuários personalizem algoritmos de controle e efeitos de visualização conforme suas necessidades.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/)

| Parâmetro | Especificação |
|-----------|--------------|
| Modelo do braço robótico | reBot Arm B601-RS Kit montado com garra |
| Graus de liberdade | 6+1 (com garra) |
| Alcance | 754,7 mm (com garra) / 587,5 mm (sem garra) |
| Capacidade de carga | Carga nominal 2,5 kg / Carga máxima 5 kg |
| Faixa de movimento das juntas | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Garra: 345° ~ 0° |
| Repetibilidade | 0,1 mm |
| Peso próprio | 6,7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 |
| Comunicação | Barramento CAN @ 1 Mbps |
| Tensão de operação | DC 48V |
| Fonte de alimentação | DC 48V 15A |
| Temperatura de operação | -20°C ~ 50°C |
| Método de controle | PC |

### Plataformas de software suportadas

| Plataforma | Status de suporte |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### Parâmetros dos motores das juntas

| Parâmetro | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| Tensão nominal | 48V | 48V |
| Corrente nominal | 4,7 Apk ± 10% | 14,3 Apk ± 10% |
| Corrente de pico | 15,5 Apk ± 10% | 57 Apk ± 10% |
| Torque nominal | 5 N.m | 11 N.m |
| Torque de pico | 14 N.m | 36 N.m |
| Velocidade nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidade máxima em vazio | 315 rpm ± 10% | 480 rpm ± 10% |
| Relação de redução | 10 : 1 | 9 : 1 |
| Pares de polos | 28 | — |
| Indutância do motor | 750 ± 20 μH | 0,165 mH ± 10% |
| Resistência de linha | 1,5 ± 10% Ω | 0,23 ± 10% Ω |
| Diâmetro externo | 57 mm | 82 mm |
| Altura | 51 ± 1 mm | 49 ± 0,5 mm |
| Peso do motor | 310 g ± 3 g | 621 g |
| Resolução do encoder | 14 bit (absoluto de volta única) | |
| Contagem do encoder | 2 | |
| Tipo de encoder | Encoder magnético (volta única) | |
| Interface de controle | CAN @ 1 Mbps | |
| Interface de depuração | UART @ 921600 bps | |
| Modos de controle | Modo MIT / Modo de velocidade / Modo de posição / Modo de torque | |
| Proteção | Proteção contra superaquecimento: temperatura do termistor do motor excede 145°C<br />Proteção contra subtensão: tensão do motor abaixo da tensão de proteção de 12V | |

## Lista de materiais (BOM)

| Componente | Quantidade | Incluído |
|-----------|----------|----------|
| Braço robótico reBot Arm B601-RS | 1 | ✅ |
| CANABLE | 1 | ✅ |
| Adaptador de energia (DC 48V 15A) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |


## Requisitos de ambiente

:::caution Pré-requisito — Conclua primeiro o Guia Rápido do braço
Antes de prosseguir com este tutorial, você **deve** concluir o documento **[reBot Arm B601-RS Quick Start](/pt-br/rebot_b601_rs_getting_started)** de ponta a ponta, incluindo:

- Desembalagem do hardware, fiação e checklist de energização
- Ativação do canal CAN (`can0` @ 1 Mbps) e permissão do dispositivo (`sudo chmod 666 /dev/can0`)
- Calibração de zero de todas as juntas (`2_zero_and_read.py`) e verificação de que o braço pode ser comandado nos modos MIT / POS_VEL

Este tutorial assume que o braço já responde no barramento CAN, que as juntas estão zeradas e que o operador está familiarizado com os limites de segurança (permaneça dentro de **70% da área de alcance de trabalho do braço**). Pular o Guia Rápido pode levar a motores mal configurados, juntas travadas ou queda do braço.
:::

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema operacional** | Ubuntu 22.04+ |
| **Interface de comunicação** | Interface CAN (can0) |
| **Fonte de alimentação** | DC 48V 15A |

:::caution
Enquanto o braço robótico estiver executando exemplos, ele deve operar dentro de 70% da área de alcance de trabalho do braço. Permanecer fora da área de trabalho por um período prolongado fará com que o motor da segunda junta entre em proteção de travamento, resultando na queda do braço.
:::

---

## Etapas de instalação

### Etapa 1. Instalar o uv (se não estiver instalado)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Etapa 2. Sincronizar ambiente (instalar todas as dependências)

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se não existir) e instalará todas as dependências com base em `pyproject.toml` e `uv.lock`.
:::

### Etapa 3. Modificar o arquivo de configuração para a versão RS

Este Wiki é para o **reBot Arm B601-RS**. Antes de executar qualquer exemplo, altere a configuração de hardware em `config/rebotarm.yaml` da versão DM para a versão RS:

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
Se essa configuração não for modificada, o programa se comunicará usando o protocolo de motor Damiao, fazendo com que os motores RS não sejam reconhecidos ou não funcionem corretamente.
:::


### Ferramentas de depuração

:::tip Configuração do canal CAN
Antes de executar exemplos de controle em máquina real e depurar motores, você precisa configurar o canal CAN (para PCAN-USB, é necessário configurar novamente após reconectar):

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 
sudo ip link set can0 up    # Bring up can0
```

:::

<details>
<summary>Ferramentas de depuração (use apenas quando ocorrer uma exceção)</summary>

**Console de motor único — Robostride RS06 (`0x01rs06_test.py`)**

Use diretamente o SDK do motorbridge para teste de motor único Robostride RS06. Os motores RS06 se comunicam via **barramento CAN**.

**Comando de execução**:
```bash
uv run python example/0x01rs06_test.py
```

**Comandos interativos**:
| Comando | Descrição |
|---------|-------------|
| `enable` / `disable` | Habilitar/Desabilitar |
| `set_zero` | Definir posição zero por software |
| `state` | Ver estado atual |
| `ping` | Enviar ping ao motor para obter resposta |
| `clear_error` | Limpar erros do motor |
| `mode <mit/posvel/vel>` | Alternar modo de controle |
| `mit <pos> [vel] [kp] [kd]` | Comando em modo MIT |
| `posvel <pos> [vlim]` | Comando em modo POS_VEL |
| `vel <velocity>` | Modo de velocidade pura |
| `read_param <id> [type]` | Ler parâmetros do motor |
| `write_param <id> <value> [type]` | Gravar parâmetros do motor |
| `loop` | Entrar em modo de controle em loop |
| `q` / `quit` | Sair |

**Observação**: Os motores Robostride usam a interface CAN (`can0` padrão), com ID de host/feedback padrão `0xFD`. Durante o teste do motor, é necessário primeiro desabilitar e depois reabilitar o motor para permitir leitura e controle normais.

---

**Calibração de zero e monitoramento de ângulo (`2_zero_and_read.py`)**

Define automaticamente todas as posições zero das juntas e exibe os ângulos das juntas em tempo real.

**Comando de execução**:
```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

---

## Ajuste de parâmetros do controlador MIT / POS_VEL {#ajuste-de-parâmetros-do-controlador}

Esta seção explica **como modificar** os parâmetros do controlador para cada junta do braço nos modos **MIT** e **POS_VEL**, e como fazer com que as alterações entrem em vigor.

:::tip Esta seção aborda apenas “onde / como mudar”, não “que valor usar”
Parâmetros adequados só podem ser obtidos por meio de **ajuste em hardware real**. Esta seção aborda apenas: onde os parâmetros estão, o que cada campo controla e como fazer com que as alterações sejam efetivas e verificá-las. Para estratégias específicas de ajuste (por exemplo, tentativa e erro, Ziegler‑Nichols), consulte referências gerais de controle de motores.
:::

### Localização do Arquivo de Configuração

| Versão de hardware | Arquivo de configuração do motor | Entrada de chave |
|---|---|---|
| **reBot Arm B601-RS** (este documento) | `config/rebotarm_rs.yaml` | Defina `hardware_yaml: "rebotarm_rs.yaml"` em `config/rebotarm.yaml` |
| **reBot Arm B601-DM** | `config/rebotarm_dm.yaml` | Defina `hardware_yaml: "rebotarm_dm.yaml"` em `config/rebotarm.yaml` |

:::caution Não edite `rebotarm.yaml` diretamente
Esse arquivo contém apenas uma única linha `hardware_yaml: ...`; todos os parâmetros do motor estão em `rebotarm_rs.yaml` / `rebotarm_dm.yaml`.
:::

### Estrutura do Arquivo de Configuração

Cada junta tem sua própria entrada, agrupada por **modo de controle**:

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0xFD
    model: "rs-06"
    vendor: "robstride"
    MIT:
      kp: 50.0
      kd: 3.0
    POS_VEL:
      vel_kp: 12.0
      vel_ki: 0.1
      pos_kp: 13.0
      vlim: 10.0
  # ... joint2 ~ joint6 follow the same structure ...
```

Como localizar:

- **Pelo nome da junta**: para modificar uma junta, encontre o bloco `- name: jointX`;
- **Pelo modo**: sob essa junta, `MIT:` contém os parâmetros do modo MIT, `POS_VEL:` contém os parâmetros do modo POS_VEL;
- **O modo atual determina qual conjunto é enviado**: o script alterna modos via `mode mit` / `mode posvel`; o motor na verdade recebe os parâmetros sob o sub-bloco correspondente.

### Significado dos Campos no Modo MIT

| Campo | Função |
|---|---|
| `kp` | Ganho proporcional do laço de posição: a "rigidez" do rastreamento da posição alvo. |
| `kd` | Ganho de amortecimento do laço de velocidade: suprime oscilações causadas pelo erro de posição. |

### Significado dos Campos no Modo POS_VEL

| Campo | Função |
|---|---|
| `vel_kp` | Ganho proporcional do laço de velocidade. |
| `vel_ki` | Ganho integral do laço de velocidade. |
| `pos_kp` | Ganho proporcional do laço de posição (funciona com `vlim` para controle híbrido posição‑velocidade). |
| `vlim` | Limite de velocidade, restringe a velocidade máxima de movimento. |

:::warning As definições de campos diferem entre fornecedores
Os motores Damiao (DM) e Robostride (RS) usam unidades diferentes na camada de protocolo, portanto **o mesmo nome de campo não é comparável entre fornecedores**. Modificar o `vel_kp` do RS e modificar o `vel_kp` do DM significam coisas diferentes. Interprete cada YAML de acordo com sua própria ordem de campos, não compare valores entre arquivos de configuração.
:::

### Procedimento de Edição

1. **Pare qualquer script em execução**. O motor está habilitado quando você edita o YAML, as alterações não entram em vigor imediatamente, e é fácil disparar comportamentos inconsistentes.
2. **Edite o arquivo YAML correspondente**:
   ```bash
   # Example for RS
   vim config/rebotarm_rs.yaml
   ```
   - Altere apenas a junta que você precisa ajustar (por exemplo, `joint1`); deixe as juntas não relacionadas como estão;
   - Dentro de uma junta, altere apenas o modo que você precisa ajustar (MIT ou POS_VEL); não modifique os campos do outro modo sem motivo.
3. **Preserve a indentação do YAML**: 2 espaços por nível, chaves separadas dos valores por `: `. Indentação incorreta faz com que o `yaml.safe_load` falhe na análise, e todos os parâmetros voltarão aos padrões.
4. **Reinicie o script após salvar**. O YAML é lido uma vez na inicialização do script; **edições em tempo de execução não entram em vigor imediatamente**.
5. **Verificação de junta única**: use um script como demo3 (MIT) / demo4 (POS_VEL) para verificar a alteração com um **pequeno movimento de junta única** antes de fazer um teste com o braço completo.

### Verificando se a Alteração Entrou em Vigor

- **Observação em tempo de execução**: habilite o motor em demo3 / demo4 e verifique `state`; se os parâmetros parecerem inalterados ou o motor se comportar exatamente como antes, o YAML foi editado incorretamente ou foi sobrescrito pelos padrões.
- **Auto-verificação do YAML**: analise-o diretamente com Python e imprima os campos de uma junta para confirmar que os valores correspondem ao que você acabou de escrever:
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_rs.yaml'))['joints'][0])"
  ```
- **Rollback rápido**: `git checkout config/rebotarm_rs.yaml` restaura os padrões do repositório.

:::caution Não ajuste muitas juntas de uma vez
Alterar drasticamente `kp` / `kd` em várias juntas simultaneamente — se a direção ou o sinal de uma junta estiver errado — pode causar instantaneamente oscilações, sobrecorrente ou paradas bruscas. **Itere uma junta e um modo por vez, em pequenos passos**.
:::

---

## Testes de Controle Básico

### Controle Completo de Juntas em Modo MIT (`3_mit_control.py`)

Todas as juntas usam o modo MIT de forma uniforme, enviando comandos de controle de forma síncrona a cada ciclo.

**Entrada**: Todos os ângulos das juntas (graus), separados por espaço. Se o gripper estiver configurado, é necessário um ângulo adicional para o gripper.

**Comando de Execução**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Este exemplo **não possui planejamento de trajetória nem de velocidade**. Grandes ângulos alvo das juntas farão os motores se moverem em velocidade muito alta, e podem até **disparar diretamente a proteção de sobrecorrente do motor**. Recomendações:

- Primeiro verifique com **pequenos ângulos** (por exemplo, mova uma única junta apenas 5~10 graus), confirme que a resposta e a direção do motor estão corretas antes de aumentar;
- Esta seção **não possui versão com trajetória suave embutida**. Se você precisar de transições suaves entre múltiplos alvos, controle cuidadosamente seus alvos e o tempo, ou consulte a seção seguinte [Controle IK com Trajetória Suave (8_arm_traj_control.py)](#demo8-controle-de-trajetória) e porte a abordagem de planejamento de mínimo tranco / aceleração-desaceleração para o seu próprio script;
- Mantenha pessoas e outros dispositivos fora do raio de trabalho do braço durante a operação.
:::

---

<details>
<summary>Controle Completo de Juntas em Modo POS_VEL (normalmente não recomendado no reBot RS, veja sob demanda)</summary>

:::warning Nota de Adequação
Para o **reBot Arm B601-RS**, o modo POS_VEL (Posição‑Velocidade) requer **ajuste de parâmetros separado** para alcançar resultados aceitáveis (os parâmetros padrão geralmente têm desempenho pior que o modo MIT). Portanto, ele **não é recomendado** no fluxo de trabalho normal, mas como alguns usuários realmente precisam dele, **este demo é mantido para referência e ajuste sob demanda**. Se você não tiver necessidade especial, use o exemplo em modo MIT acima.
:::

**Controle Completo de Juntas em Modo POS_VEL (`4_pos_vel_control.py`)**

Insira todos os ângulos alvo das juntas para completar o controle do motor no modo de controle híbrido POS_VEL (Posição‑Velocidade), obtendo um movimento mais suave e controlável ao atingir os ângulos alvo, reduzindo a vibração.

**Comando de Execução**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---
</details>

---

## Testes de Cinemática

### Teste de Cinemática Direta (`5_fk_test.py`)

Calcular a pose do efetuador final com base nos ângulos das juntas.

**Entrada**: 6 ângulos de juntas (graus)

**Saída**:
- Posição do efetuador final (X, Y, Z) — unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (rolagem/tangagem/giro) — unidade: graus

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

Use cinemática inversa (IK) em modo MIT para especificar as coordenadas 3D (X, Y, Z) e a orientação (ângulos de Euler) para onde o efetuador final do braço robótico deve se mover.

**Formato de Entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Digite `state`: Ver os valores atuais em radianos de cada junta.
- Digite `end_state`: Ver as coordenadas atuais reais (m) e ângulos de Euler (rad) do efetuador final no espaço.

**Comando de Execução**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```
:::danger
Este exemplo **não possui planejamento de trajetória nem de velocidade**. Grandes ângulos alvo farão os motores se moverem em velocidade muito alta, e podem até **disparar diretamente a proteção de sobrecorrente do motor**. Recomendações:

- Primeiro verifique com **pequenos ângulos** (por exemplo, mova o efetuador final apenas 5~10 cm a partir de sua posição atual), confirme que a pose e a direção estão corretas antes de aumentar;
- Para transições suaves entre alvos, vá diretamente para a próxima seção [Controle de Cinemática Inversa com Trajetória Suave (8_arm_traj_control.py)](#demo8-controle-de-trajetória) que usa planejamento de mínimo tranco / aceleração-desaceleração;
- Mantenha pessoas e outros dispositivos fora do raio de trabalho do braço durante a operação.
:::

### Controle de Cinemática Inversa com Trajetória Suave (`8_arm_traj_control.py`) {#demo8-controle-de-trajetória}

Use cinemática inversa (IK) em modo MIT para planejar automaticamente uma trajetória de movimento uniforme ou com aceleração/desaceleração suave dentro do tempo alvo, evitando vibração severa das juntas.

**Formato de Entrada**:
- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + Orientação + Tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Digite `state`: Ver os valores atuais em radianos de cada junta.
- Digite `end_state`: Ver as coordenadas atuais reais (m) e ângulos de Euler (rad) do efetuador final no espaço.

**Comando de Execução**:
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

:::tip E se eu observar desvio de pose?
Se você notar que a **pose do efetuador final lida** difere da **pose alvo comandada**, e a **pose em si é alcançável** (não está fora da área de trabalho, nem em uma singularidade), o problema provavelmente está nos parâmetros do seu controlador MIT / POS_VEL. Nesse caso, consulte a seção anterior [Tuning MIT / POS_VEL Controller Parameters](#tune-controller-params) e faça o ajuste manual de `kp` / `kd` etc. usando a abordagem de "uma junta por vez, modo por modo, pequenos passos"; depois de ajustar, volte a este exemplo para verificar.
:::

### Controle de Compensação de Gravidade — Versão Básica (`9_gravity_compensation.py`)

Use o modelo dinâmico Pinocchio para compensar a gravidade das juntas.

**Lei de Controle**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento Esperado**:
- O braço robótico pode "flutuar" em qualquer pose
- Não cairá devido ao próprio peso após ser solto
- Pode ser movido manualmente para qualquer posição

**Comando de Execução**:
```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:
- Exibir o torque desejado para cada junta em tempo real (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Retorne para Home Antes de Sair da Compensação de Gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente para zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a Compensação de Juntas Individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

---

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

**Comando de Execução**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:
- Exibir o status de travamento em tempo real (LOCKED / UPDATE)
- Velocidade linear de extremidade, velocidade angular
- Torque de compensação de gravidade para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::caution Retorne para Home Antes de Sair da Compensação de Gravidade
Ao parar o script (`Ctrl+C`), o programa **desativará diretamente todos os motores**, e o braço robótico **não retornará automaticamente para zero**. Segure o braço robótico com a mão ou mova-o para uma pose segura/home antes de sair para evitar quedas repentinas das juntas que possam causar colisões ou danos.
:::

:::tip Ajustando a Compensação de Juntas Individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

**Configuração de Teste de Segurança**:
Você pode modificar a lista `ENABLED_JOINTS` no início do script para habilitar apenas juntas específicas para testes de segurança:
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### Ambiente de Simulação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### Simulação de Cinemática Direta (`sim/fk_sim.py`)

Simulação interativa de cinemática direta, visualizando a pose do braço robótico no MeshCat ao inserir ângulos de junta.

**Comando de Execução**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos Interativos**:
- Inserir 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:
- Exibir posição e orientação do efetuador final em tempo real
- Suporta entrada contínua para testar diferentes poses
- Saída de informações de pose formatadas

---

#### Simulação de Cinemática Inversa (`sim/ik_sim.py`)

Simulação interativa de cinemática inversa, resolvendo automaticamente ângulos de junta e visualizando para uma pose alvo.

**Comando de Execução**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de Entrada**:
- Apenas posição: `x y z` (metros)
- Posição + Orientação: `x y z roll pitch yaw` (radianos)

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

#### Simulação de Planejamento de Trajetória (`sim/traj_sim.py`)

Simulação de planejamento de trajetória geodésica em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Comando de Execução**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos Interativos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter diretamente para usar a configuração padrão
- `q`: Sair

**Recursos**:
- Planejar da posição atual até a pose alvo
- Usar perfil de trajetória de mínimo tranco (minimum jerk)
- Exibir estatísticas da trajetória em tempo real
- Reproduzir animação de toda a trajetória no MeshCat
- Exibir caminho de referência (cinza) e caminho real (verde)

---

#### Ferramenta de Visualização (`sim/visualizer.py`)

Wrapper do visualizador MeshCat, fornecendo uma interface unificada de exibição do robô.

**Funções Principais**:
- Carregar modelo URDF e exibir o robô
- Desenhar caminhos polilinha 3D (referência/real)
- Exibir pose alvo de IK (eixos de três cores + esfera)
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

- **Encontrar erro `Permission denied`**
  Certifique-se de executar `sudo chmod 666 /dev/ttyACM0` (Damiao) ou `sudo chmod 666 /dev/can0` (Robostride) para definir as permissões do dispositivo.

- **A solução de IK falha ou os resultados são anormais**
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e certifique-se de que os limites das juntas estejam configurados corretamente.

- **O efeito da compensação de gravidade é ruim**
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade neste projeto depende de URDF e Pinocchio. Você pode tentar corrigir o URDF para os parâmetros que você realmente mediu (você pode pedir ajuda à IA para esta etapa).

- **Os motores Robostride não conseguem ler o status**
  Problemas de configuração de protocolo interno no motorbridge podem impedir que motores RS consultem status como motores DM. Por favor, julgue com base nos efeitos reais de movimento ou tente usar o comando `ping` para confirmar a comunicação normal com o motor.

- **Como alternar entre as configurações de motor Damiao e Robostride**
  Modifique o arquivo de configuração `config/rebotarm_dm.yaml` (Damiao) ou `config/rebotarm_rs.yaml` (Robostride) e carregue a configuração correspondente no código.

- **Se o braço robótico permanecer parado além de 70% do alcance da área de trabalho do braço por um longo período, o motor da segunda junta entrará em proteção contra travamento**  
  Desligue e ligue novamente o braço robótico; o erro de proteção contra travamento do motor da segunda junta será limpo automaticamente.

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
